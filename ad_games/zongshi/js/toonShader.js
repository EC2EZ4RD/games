import * as THREE from 'three';

let cachedRampTex = null;

function getToonRampTexture() {
  if (cachedRampTex) return cachedRampTex;
  // 4-pixel crisp anime cel-shading ramp matching Unity Character_InBattle_Outline_Ramp:
  // soft warm shadow -> midtone -> bright sunlit lit band
  const data = new Uint8Array([
    158, 162, 178, 255, // cool-tinted shadow band
    218, 222, 226, 255, // transition band
    252, 252, 250, 255, // lit band
    255, 255, 255, 255, // highlight band
  ]);
  const tex = new THREE.DataTexture(data, 4, 1, THREE.RGBAFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  cachedRampTex = tex;
  return tex;
}

/**
 * 1:1 复刻 Unity `Character_InBattle_Outline_Ramp`：
 * 1. 将标准 PBR 材质替换为支持 GPU 蒙皮的三阶卡通色阶材质 (MeshToonMaterial + Ramp)
 * 2. 为每个蒙皮网格附加共享同一 Skeleton 的反面法线挤出墨线描边 (Inverted-Hull Outline)
 * 3. 开启真实方向光阴影投射 (castShadow = true)
 */
export function applyUnityToonShader(root, {
  outlineWidth = 0.014,
  outlineColor = 0x241914,
  emissiveHex = 0x1e1a16,
  addOutline = true,
} = {}) {
  const ramp = getToonRampTexture();
  const toAttach = [];

  root.traverse((obj) => {
    if (!obj.isMesh || obj.userData.__isOutline) return;

    const origMats = Array.isArray(obj.material) ? obj.material : [obj.material];
    const toonMats = origMats.map((m) => {
      if (!m) return m;
      const map = m.map || null;
      if (map) {
        map.colorSpace = THREE.SRGBColorSpace;
        map.needsUpdate = true;
      }
      const tm = new THREE.MeshToonMaterial({
        map,
        color: m.color ? m.color.clone() : new THREE.Color(0xffffff),
        gradientMap: ramp,
        emissive: new THREE.Color(emissiveHex),
        emissiveIntensity: 0.55,
        side: THREE.DoubleSide,
        transparent: false,
        alphaTest: 0,
      });
      return tm;
    });

    obj.material = Array.isArray(obj.material) ? toonMats : toonMats[0];
    obj.castShadow = true;
    obj.receiveShadow = false;
    obj.frustumCulled = false;

    if (addOutline && obj.geometry) {
      toAttach.push(obj);
    }
  });

  if (addOutline && toAttach.length > 0) {
    for (const mesh of toAttach) {
      // 使用 MeshLambertMaterial（内置 beginnormal_vertex + skinnormal_vertex，支持 SkinnedMesh 蒙皮法线，杜绝 objectNormal 未定义报错！）
      const outMat = new THREE.MeshLambertMaterial({
        color: 0x000000,
        emissive: new THREE.Color(outlineColor),
        emissiveIntensity: 1.0,
        side: THREE.BackSide,
        depthWrite: true,
      });
      outMat.onBeforeCompile = (shader) => {
        shader.uniforms.uOutlineWidth = { value: outlineWidth };
        shader.vertexShader = 'uniform float uOutlineWidth;\n' + shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          vec3 safeNrm = length(objectNormal) > 1e-4 ? normalize(objectNormal) : vec3(0.0, 1.0, 0.0);
          transformed += safeNrm * uOutlineWidth;`
        );
      };

      let outlineMesh;
      if (mesh.isSkinnedMesh) {
        outlineMesh = new THREE.SkinnedMesh(mesh.geometry, outMat);
        outlineMesh.bind(mesh.skeleton, mesh.bindMatrix);
      } else {
        outlineMesh = new THREE.Mesh(mesh.geometry, outMat);
      }
      outlineMesh.name = (mesh.name || 'mesh') + '__outline';
      outlineMesh.userData.__isOutline = true;
      outlineMesh.castShadow = false;
      outlineMesh.receiveShadow = false;
      outlineMesh.frustumCulled = false;
      outlineMesh.position.copy(mesh.position);
      outlineMesh.quaternion.copy(mesh.quaternion);
      outlineMesh.scale.copy(mesh.scale);
      if (mesh.parent) {
        mesh.parent.add(outlineMesh);
      }
    }
  }
}

/**
 * 动态设置角色受击闪白 / 灼烧 / 冰冻 / 中毒卡通叠加色（忽略描边层）
 */
export function setToonStatusTint(root, emissiveHex, intensity = 0.55) {
  if (!root) return;
  root.traverse((c) => {
    if (c.isMesh && !c.userData.__isOutline && c.material && c.material.emissive) {
      c.material.emissive.setHex(emissiveHex);
      c.material.emissiveIntensity = intensity;
    }
  });
}

/**
 * 清理/提亮真实 Unity 场景网格材质，使其保持明亮清透的日系国风色阶并正确接收阴影
 */
export function prepareUnitySceneMesh(root, { receiveShadow = true, isBackdrop = false } = {}) {
  root.traverse((c) => {
    if (!c.isMesh) return;
    c.frustumCulled = false;
    const lname = (c.name || '').toLowerCase();
    const isCloud = lname.includes('cloud');
    const isTerrain = lname.includes('terrain') || lname.includes('shulin_00');
    const mats = Array.isArray(c.material) ? c.material : [c.material];
    const next = mats.map((m) => {
      if (!m) return m;
      if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
      const isAlphaMask = m.alphaMode === 'MASK' || m.alphaTest > 0.01;
      const isBlend = m.transparent && !isAlphaMask;

      if (isBackdrop || isCloud) {
        return new THREE.MeshBasicMaterial({
          map: m.map || null,
          color: new THREE.Color(0xffffff),
          transparent: true,
          opacity: isCloud ? 0.92 : (m.opacity ?? 1),
          depthWrite: false,
          fog: false,
          side: THREE.DoubleSide,
        });
      }

      if (isTerrain) {
        // 烘焙地形自带明暗，用无光明亮材质保持原版米黄土路清透质感（投影由透明 ShadowMaterial 叠加！）
        return new THREE.MeshBasicMaterial({
          map: m.map || null,
          color: new THREE.Color(0xf6f6ec),
          side: THREE.FrontSide,
          fog: true,
        });
      }

      return new THREE.MeshLambertMaterial({
        map: m.map || null,
        color: m.color ? m.color.clone() : new THREE.Color(0xffffff),
        transparent: isBlend,
        alphaTest: isAlphaMask ? 0.36 : 0,
        side: (isAlphaMask || isBlend) ? THREE.DoubleSide : THREE.FrontSide,
        fog: true,
      });
    });
    c.material = Array.isArray(c.material) ? next : next[0];
    c.receiveShadow = receiveShadow && !isBackdrop && !isCloud;
    // 禁止平片树叶/灌木投射方块黑影，仅保留人物与木人怪的清晰实影！
    c.castShadow = false;
  });
}
