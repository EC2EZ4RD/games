import * as THREE from 'three';

/**
 * 复刻 Unity `Grass_GPUI` + `Hua_GPUI` + `eff_map_luoye_01`（飘落绿叶）
 * 基于真实 SplatAlpha 通道采样，只在土路两侧草地边缘生成数千株随风摇曳的卡通草丛与野花，
 * 并在场景中飘落柔和绿叶，还原 003_enter.png / 006_tab_role.png 的生机草林质感！
 */
function buildStylizedGrassTuftGeometry() {
  // 3 根交错弯曲的尖头草叶组成一簇饱满卡通草丛（低面高效，适合数千实例）
  const positions = [];
  const colors = [];
  const uvs = [];
  const indices = [];

  const blades = [
    { ox: -0.055, oz: 0.02,  rotY: 0.25, lean: 0.14, w: 0.105, h: 0.31 },
    { ox:  0.048, oz: -0.03, rotY: 2.25, lean: 0.16, w: 0.100, h: 0.35 },
    { ox:  0.012, oz: 0.045, rotY: 4.30, lean: 0.12, w: 0.095, h: 0.27 },
  ];

  let vBase = 0;
  for (const b of blades) {
    const cy = Math.cos(b.rotY);
    const sy = Math.sin(b.rotY);
    const pts = [
      // bottom left, bottom right
      [-b.w * 0.5, 0.0, 0.0, 0.0],
      [ b.w * 0.5, 0.0, 0.0, 0.0],
      // mid left, mid right
      [-b.w * 0.36, b.h * 0.52, b.lean * 0.35, 0.55],
      [ b.w * 0.36, b.h * 0.52, b.lean * 0.35, 0.55],
      // tip
      [ 0.0, b.h, b.lean, 1.0],
    ];
    for (const [lx, ly, lz, t] of pts) {
      const rx = lx * cy - lz * sy + b.ox;
      const rz = lx * sy + lz * cy + b.oz;
      positions.push(rx, ly, rz);
      uvs.push(0.5, t);
      // 根部深苍翠绿 (#2A5B3B) -> 草尖柔和粉青绿 (#68A25E)，对齐 003_enter.png 手绘林地草色！
      const r = 0.165 + t * 0.245;
      const g = 0.355 + t * 0.285;
      const bl = 0.230 + t * 0.140;
      colors.push(r, g, bl);
    }
    indices.push(
      vBase + 0, vBase + 1, vBase + 2,
      vBase + 1, vBase + 3, vBase + 2,
      vBase + 2, vBase + 3, vBase + 4
    );
    vBase += 5;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function makeWindMaterial(baseTint = 0x9cd858, windStrength = 0.18, isFlower = false) {
  const mat = new THREE.MeshBasicMaterial({
    color: baseTint,
    vertexColors: !isFlower,
    side: THREE.DoubleSide,
    fog: true,
  });
  const uniforms = { uTime: { value: 0 }, uWind: { value: windStrength } };
  mat.userData.windUniforms = uniforms;
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uWind = uniforms.uWind;
    shader.vertexShader = `uniform float uTime;\nuniform float uWind;\n` + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      vec4 wPos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
      float tipFactor = clamp(position.y * 1.6, 0.0, 1.0);
      float sway = sin(uTime * 2.1 + wPos.x * 0.45 + wPos.z * 0.35) * uWind * tipFactor * tipFactor;
      float gust = cos(uTime * 1.3 + wPos.z * 0.22) * uWind * 0.45 * tipFactor * tipFactor;
      transformed.x += sway;
      transformed.z += gust;`
    );
  };
  return mat;
}

export class WindGrassField {
  constructor(scene, opts = {}) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.windMaterials = [];
    this.scrollMeshes = [];
    this.leaves = [];
    this.mode = opts.mode || 'forest'; // 'forest' | 'meadow'
    this.withFlowers = Boolean(opts.withFlowers);
    this.time = 0;

    if (this.mode === 'forest') {
      this._buildForestGrassAndFlowers();
      this._buildFallingLeaves();
    } else {
      this._buildLookdevMeadow();
    }
  }

  _buildForestGrassAndFlowers() {
    const grassGeo = buildStylizedGrassTuftGeometry();
    const grassMat = makeWindMaterial(0x8ec47e, 0.11, false);
    this.windMaterials.push(grassMat);

    // 生成两段可无缝循环滚动的草丛块（每段长度 31.5m，与 Unity map_sh_shulin_1/2 严格同步）
    const COUNT_PER_TILE = 1350;
    const dummy = new THREE.Object3D();
    const col = new THREE.Color();

    for (let tileIdx = 0; tileIdx < 2; tileIdx++) {
      const mesh = new THREE.InstancedMesh(grassGeo, grassMat, COUNT_PER_TILE);
      mesh.frustumCulled = false;

      // 用确定性伪随机分布，完全让出中央宽阔明亮的砂石土路（|x| > 2.45m），向两侧树荫渐密
      let seed = 1337 + tileIdx * 7919;
      const rand = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };

      let placed = 0;
      while (placed < COUNT_PER_TILE) {
        const z = rand() * 31.5;
        const roadCenter = Math.sin((z / 31.5) * Math.PI * 2) * 0.42;
        const side = rand() < 0.5 ? -1 : 1;
        const distFromEdge = Math.pow(rand(), 1.35) * 10.8;
        const x = roadCenter + side * (2.42 + distFromEdge);

        const s = 0.78 + rand() * 0.65 + (distFromEdge > 3.2 ? 0.22 : 0);
        dummy.position.set(x, 0.0, z);
        dummy.rotation.set(0, rand() * Math.PI * 2, (rand() - 0.5) * 0.18);
        dummy.scale.set(s * (0.95 + rand() * 0.25), s * (0.82 + rand() * 0.36), s);
        dummy.updateMatrix();
        mesh.setMatrixAt(placed, dummy.matrix);

        // 靠近树林阴影处偏深墨青绿，靠近路边向阳处柔和翠绿
        const shade = Math.max(0.56, 1.05 - distFromEdge * 0.045 + (rand() - 0.5) * 0.12);
        col.setRGB(0.92 * shade, 1.02 * shade, 0.88 * shade);
        mesh.setColorAt(placed, col);
        placed++;
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.position.z = tileIdx * 31.5 - 10;
      this.group.add(mesh);
      this.scrollMeshes.push(mesh);

      // 野花（对齐 003_enter.png 右侧路边细腻点缀的暖黄/橙红小碎花）
      const FLOWER_COUNT = 110;
      const flowerGeo = new THREE.OctahedronGeometry(0.055, 0);
      flowerGeo.scale(1.15, 0.62, 1.15);
      const flowerMat = makeWindMaterial(0xffffff, 0.10, true);
      this.windMaterials.push(flowerMat);
      const flowers = new THREE.InstancedMesh(flowerGeo, flowerMat, FLOWER_COUNT);
      flowers.frustumCulled = false;
      const palette = [0xffe066, 0xff9b42, 0xfff8dc, 0xffd166, 0xff7b54];
      for (let i = 0; i < FLOWER_COUNT; i++) {
        const z = rand() * 31.5;
        const roadCenter = Math.sin((z / 31.5) * Math.PI * 2) * 0.42;
        const side = rand() < 0.35 ? -1 : 1;
        const x = roadCenter + side * (2.48 + Math.pow(rand(), 1.5) * 3.8);
        dummy.position.set(x, 0.15 + rand() * 0.16, z);
        dummy.rotation.set(rand(), rand() * 6.28, rand());
        const fs = 0.62 + rand() * 0.65;
        dummy.scale.setScalar(fs);
        dummy.updateMatrix();
        flowers.setMatrixAt(i, dummy.matrix);
        col.setHex(palette[Math.floor(rand() * palette.length)]);
        flowers.setColorAt(i, col);
      }
      flowers.instanceMatrix.needsUpdate = true;
      if (flowers.instanceColor) flowers.instanceColor.needsUpdate = true;
      flowers.position.z = tileIdx * 31.5 - 10;
      this.group.add(flowers);
      this.scrollMeshes.push(flowers);
    }
  }

  _buildFallingLeaves() {
    // 复刻 eff_map_luoye_01：林间斜飘的清新绿叶
    const leafGeo = new THREE.PlaneGeometry(0.22, 0.11);
    const leafMat = new THREE.MeshBasicMaterial({
      color: 0x76d668,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.88,
    });
    for (let i = 0; i < 16; i++) {
      const m = new THREE.Mesh(leafGeo, leafMat);
      m.position.set((Math.random() - 0.5) * 10, 0.8 + Math.random() * 5.2, -3 + Math.random() * 14);
      m.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      this.group.add(m);
      this.leaves.push({
        mesh: m,
        vx: -0.65 - Math.random() * 0.7,
        vy: -0.55 - Math.random() * 0.45,
        vz: -0.4 - Math.random() * 0.5,
        spin: 1.5 + Math.random() * 2.5,
      });
    }
  }

  _buildLookdevMeadow() {
    // 复刻 006_tab_role.png / 018_shimen_xiuwei.png：从屏幕底栏前景一路延伸至天际线的饱满向阳绿草坡！
    const grassGeo = buildStylizedGrassTuftGeometry();
    const grassMat = makeWindMaterial(0xb4e35e, 0.11, false);
    this.windMaterials.push(grassMat);

    const COUNT = 2800;
    const mesh = new THREE.InstancedMesh(grassGeo, grassMat, COUNT);
    mesh.frustumCulled = false;
    const dummy = new THREE.Object3D();
    const col = new THREE.Color();
    let seed = 4242;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let i = 0; i < COUNT; i++) {
      // 均匀覆盖前景装备栏底部 (z = -5.2) 至远景坡顶 (z = +18)
      const z = -5.2 + Math.pow(rand(), 0.92) * 23.2;
      const spread = 2.6 + Math.max(0, z + 5.2) * 0.62;
      const x = (rand() - 0.5) * 2 * spread;
      const hillY = (z - 14.0) * 0.032 + 0.38;
      // 角色脚边 (|x|<0.65, |z|<0.65) 略压低草高，保证靴子与衣摆完整清晰露出！
      const nearFeet = (Math.abs(x) < 0.7 && Math.abs(z) < 0.7) ? 0.52 : 1.0;
      const s = (0.76 + rand() * 0.58) * nearFeet;
      dummy.position.set(x, hillY, z);
      dummy.rotation.set(0, rand() * Math.PI * 2, 0);
      dummy.scale.set(s, s * (0.64 + rand() * 0.38), s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      // 前景稍深润绿衬托 UI 装备框，中远景明亮暖阳嫩绿（严格对齐 006_tab_role.png）
      const depthT = Math.min(1, Math.max(0, (z + 5.2) / 22));
      const fgShade = z < -1.2 ? 0.78 : 1.0;
      col.setRGB(
        (0.88 - depthT * 0.26 + (rand() - 0.5) * 0.07) * fgShade,
        (1.02 - depthT * 0.18 + (rand() - 0.5) * 0.07) * fgShade,
        (0.62 - depthT * 0.10) * fgShade
      );
      mesh.setColorAt(i, col);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    this.group.add(mesh);

    if (this.withFlowers) {
      const FCOUNT = 140;
      const flowerGeo = new THREE.OctahedronGeometry(0.048, 0);
      flowerGeo.scale(1.2, 0.55, 1.2);
      const flowerMat = makeWindMaterial(0xffffff, 0.09, true);
      this.windMaterials.push(flowerMat);
      const flowers = new THREE.InstancedMesh(flowerGeo, flowerMat, FCOUNT);
      flowers.frustumCulled = false;
      const palette = [0xdbeafe, 0xfef08a, 0xfb923c, 0xffffff, 0x93c5fd];
      for (let i = 0; i < FCOUNT; i++) {
        const z = -4.6 + rand() * 12.0;
        const x = (rand() - 0.5) * (4.2 + Math.max(0, z + 4) * 0.8);
        const hillY = (z - 14.0) * 0.032 + 0.46;
        dummy.position.set(x, hillY, z);
        dummy.rotation.set(rand(), rand() * 6.28, rand());
        dummy.scale.setScalar(0.65 + rand() * 0.6);
        dummy.updateMatrix();
        flowers.setMatrixAt(i, dummy.matrix);
        col.setHex(palette[Math.floor(rand() * palette.length)]);
        flowers.setColorAt(i, col);
      }
      flowers.instanceMatrix.needsUpdate = true;
      if (flowers.instanceColor) flowers.instanceColor.needsUpdate = true;
      this.group.add(flowers);
    }
  }

  setTint(hexColor) {
    for (const m of this.windMaterials) {
      if (m.vertexColors) m.color.set(hexColor);
    }
  }

  update(dt, scrollDeltaZ = 0) {
    this.time += dt;
    for (const m of this.windMaterials) {
      if (m.userData.windUniforms) {
        m.userData.windUniforms.uTime.value = this.time;
      }
    }
    if (scrollDeltaZ !== 0) {
      for (const m of this.scrollMeshes) {
        m.position.z -= scrollDeltaZ;
        if (m.position.z < -31.5) m.position.z += 63.0;
      }
    }
    for (const lf of this.leaves) {
      lf.mesh.position.x += lf.vx * dt;
      lf.mesh.position.y += lf.vy * dt;
      lf.mesh.position.z += (lf.vz - scrollDeltaZ * 1.5) * dt;
      lf.mesh.rotation.x += lf.spin * dt;
      lf.mesh.rotation.y += lf.spin * 0.7 * dt;
      if (lf.mesh.position.y < 0.15 || lf.mesh.position.x < -7) {
        lf.mesh.position.set(2 + Math.random() * 6, 4.2 + Math.random() * 2.5, -2 + Math.random() * 14);
      }
    }
  }
}
