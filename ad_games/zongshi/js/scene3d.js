import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import { VFX3DManager } from './vfx3d.js?v=11';
import { applyUnityToonShader, setToonStatusTint, prepareUnitySceneMesh } from './toonShader.js?v=11';
import { WindGrassField } from './grassField.js?v=11';

// 已提取原版骨骼动画的 GLB 模型映射（直接播放原版 Unity AnimationClip，其余首领走原版 OBJ+MTL 无 404！）
const ANIMATED_GLB = {
  mon_muren_001: './models_anim/mon_muren_001.glb?v=3',
  mon_muren_002: './models_anim/mon_muren_002.glb?v=3',
  mon_muren_003: './models_anim/mon_muren_003.glb?v=3',
  mon_muren_004: './models_anim/mon_muren_002.glb?v=3',
  mon_muren_005: './models_anim/mon_muren_003.glb?v=3',
  mon_muren_006: './models_anim/mon_muren_001.glb?v=3',
};

const MODEL_SPEC = {
  mon_feitu_001:      { rotZ:  Math.PI / 2, rotY: 0, height: 1.85 },
  mon_dizi_jg_001:    { rotZ:  Math.PI / 2, rotY: 0, height: 1.85 },
  mon_dizi_xy_001:    { rotZ:  Math.PI / 2, rotY: 0, height: 1.85 },
  mon_dizi_mx_001:    { rotZ:  Math.PI / 2, rotY: 0, height: 1.85 },
  mon_jiaolang_001:   { rotZ:  Math.PI / 2, rotY: 0, height: 1.45 },
  jy_murentouling_001:{ rotZ: 0,            rotY: 0,       height: 2.35 },
  boss_dubimuxia_001: { rotZ:  Math.PI / 2, rotY: Math.PI, height: 2.75 },
  boss_yezhuwang_001: { rotZ:  Math.PI / 2, rotY: Math.PI, height: 2.65 },
  boss_baihu_001:     { rotZ: 0,            rotY: 0, height: 2.55 },
  boss_duguya_001:    { rotZ: 0,            rotY: 0, height: 2.85 },
  boss_hongqigong_001:{ rotZ: 0,            rotY: 0, height: 2.70 },
  boss_xiezi_001:     { rotZ: 0,            rotY: 0, height: 2.50 },
  boss_zhen_001:      { rotZ: 0,            rotY: 0, height: 2.85 },
};

const WEAPON_GLB = {
  hero_sword: './models_anim/weapons/wp_jian.glb?v=1',
  hero_dao:   './models_anim/weapons/wp_dao.glb?v=1',
  muren_dao:  './models_anim/weapons/muren_dao.glb?v=1',
  muren_jian: './models_anim/weapons/muren_jian.glb?v=1',
  muren_gong: './models_anim/weapons/muren_gong.glb?v=1',
  muren_gun:  './models_anim/weapons/muren_gun.glb?v=1',
};

const gltfLoader = new GLTFLoader();

function makeSkyGradientTexture(topHex = '#2ea2ea', midHex = '#7ed8f8', botHex = '#cef4f2', withClouds = true) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0.0, topHex);
  grad.addColorStop(0.45, midHex);
  grad.addColorStop(1.0, botHex);
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 512);

  if (withClouds) {
    // 绘制蓬松清透的国风卡通白云（对齐 003_enter.png / 006_tab_role.png 天际白云！）
    const drawCloud = (cx, cy, rx, ry, alpha = 0.88) => {
      g.save();
      g.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      const puffs = [
        [0, 0, 1.0, 1.0],
        [-0.55, 0.14, 0.72, 0.75],
        [0.58, 0.12, 0.76, 0.78],
        [-0.25, -0.24, 0.68, 0.72],
        [0.28, -0.20, 0.64, 0.68],
      ];
      for (const [ox, oy, sx, sy] of puffs) {
        g.beginPath();
        g.ellipse(cx + ox * rx, cy + oy * ry, rx * sx, ry * sy, 0, 0, Math.PI * 2);
        g.fill();
      }
      g.restore();
    };
    drawCloud(285, 58, 72, 26, 0.92);
    drawCloud(148, 74, 52, 18, 0.78);
    drawCloud(420, 44, 56, 20, 0.82);
  }

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

class ModelCache {
  constructor() {
    this.gltfCache = new Map();
    this.objCache = new Map();
    this.missingUrls = new Set();
  }

  async loadRawGltf(url) {
    if (this.missingUrls.has(url)) throw new Error('missing:' + url);
    if (!this.gltfCache.has(url)) {
      const p = new Promise((resolve, reject) => {
        gltfLoader.load(url, resolve, undefined, (err) => {
          this.missingUrls.add(url);
          this.gltfCache.delete(url);
          reject(err);
        });
      });
      this.gltfCache.set(url, p);
    }
    return this.gltfCache.get(url);
  }

  async loadGltfAsset(url, { toon = true, outlineWidth = 0.013 } = {}) {
    const gltf = await this.loadRawGltf(url);
    const clonedScene = SkeletonUtils.clone(gltf.scene);
    if (toon) {
      applyUnityToonShader(clonedScene, { outlineWidth, addOutline: true });
    }
    return { scene: clonedScene, animations: gltf.animations };
  }

  async attachWeapon(characterRoot, weaponKey, boneName = 'weapon_r', scale = 1.0) {
    const url = WEAPON_GLB[weaponKey];
    if (!url) return null;
    try {
      const gltf = await this.loadRawGltf(url);
      const wp = gltf.scene.clone(true);
      applyUnityToonShader(wp, { outlineWidth: 0.008, addOutline: true });
      wp.scale.setScalar(scale);

      let targetBone = null;
      characterRoot.traverse((n) => {
        if (!targetBone && n.name && n.name.toLowerCase() === boneName.toLowerCase()) {
          targetBone = n;
        }
      });
      if (!targetBone) {
        characterRoot.traverse((n) => {
          if (!targetBone && n.name && n.name.toLowerCase().includes('r hand')) {
            targetBone = n;
          }
        });
      }
      if (targetBone) {
        targetBone.add(wp);
        return wp;
      }
    } catch {
      // Weapon GLB not yet compiled; silently skip
    }
    return null;
  }

  async getAnimatedHero({ attachSword = true } = {}) {
    const { scene, animations } = await this.loadGltfAsset('./models_anim/hero.glb?v=7', {
      toon: true,
      outlineWidth: 0.013,
    });
    const box = new THREE.Box3().setFromObject(scene);
    const sz = new THREE.Vector3();
    box.getSize(sz);
    const validH = (Number.isFinite(sz.y) && sz.y > 0.1) ? sz.y : 1.78;
    const minY = Number.isFinite(box.min.y) ? box.min.y : 0;
    const scale = 1.92 / validH;
    scene.scale.setScalar(scale);
    scene.position.y = -minY * scale;

    if (attachSword) {
      this.attachWeapon(scene, 'hero_sword', 'weapon_r', 0.68);
    }

    const mixer = new THREE.AnimationMixer(scene);
    const actions = {};
    for (const clip of animations) {
      actions[clip.name] = mixer.clipAction(clip);
    }
    return { scene, mixer, actions };
  }

  async getEnemyAsset(modelName, isBoss = false) {
    const glbUrl = ANIMATED_GLB[modelName];
    if (glbUrl && !this.missingUrls.has(glbUrl)) {
      try {
        const { scene, animations } = await this.loadGltfAsset(glbUrl, {
          toon: true,
          outlineWidth: isBoss ? 0.018 : 0.014,
        });
        const box = new THREE.Box3().setFromObject(scene);
        const sz = new THREE.Vector3();
        box.getSize(sz);
        const targetH = isBoss ? 2.65 : 1.82;
        const scale = targetH / Math.max(0.1, sz.y);
        scene.scale.setScalar(scale);
        scene.position.y = -box.min.y * scale;

        // 为木人怪自动挂载原版 3D 武器（对照 003_enter.png：长枪/刀/剑/木弓！）
        if (modelName.startsWith('mon_muren')) {
          const wpPool = ['muren_dao', 'muren_jian', 'muren_gong', 'muren_gun'];
          const pick = wpPool[Math.floor(Math.random() * wpPool.length)];
          const bone = pick === 'muren_gong' ? 'weapon_l' : 'weapon_r';
          this.attachWeapon(scene, pick, bone, 1.0);
        }

        const mixer = new THREE.AnimationMixer(scene);
        const actions = {};
        for (const clip of animations) {
          actions[clip.name] = mixer.clipAction(clip);
        }
        return { scene, mixer, actions, animated: true };
      } catch {
        // fallback to OBJ below
      }
    }

    // 其余尚未编译骨骼动画的首领/怪物走原版 OBJ+MTL + Toon Shader
    const name = MODEL_SPEC[modelName] ? modelName : 'boss_dubimuxia_001';
    if (!this.objCache.has(name)) {
      const p = (async () => {
        const baseUrl = `./game-assets/models/${name}/`;
        const mtlLoader = new MTLLoader();
        mtlLoader.setPath(baseUrl);
        mtlLoader.setResourcePath(baseUrl);
        const mats = await new Promise((res, rej) => mtlLoader.load(`${name}.mtl`, res, undefined, rej));
        mats.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(mats);
        objLoader.setPath(baseUrl);
        const obj = await new Promise((res, rej) => objLoader.load(`${name}.obj`, res, undefined, rej));

        const spec = MODEL_SPEC[name] || { rotZ: 0, rotY: 0, height: 2.3 };
        const oriented = new THREE.Group();
        oriented.rotation.z = spec.rotZ || 0;
        oriented.rotation.y = spec.rotY || 0;
        oriented.add(obj);
        oriented.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(oriented);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);
        const scale = spec.height / Math.max(0.01, size.y);
        oriented.position.set(-center.x, -box.min.y, -center.z);
        const wrap = new THREE.Group();
        wrap.scale.setScalar(scale);
        wrap.add(oriented);
        return wrap;
      })();
      this.objCache.set(name, p);
    }
    const base = await this.objCache.get(name);
    const clone = base.clone(true);
    applyUnityToonShader(clone, { outlineWidth: isBoss ? 0.02 : 0.014, addOutline: true });
    return { scene: clone, mixer: null, actions: null, animated: false };
  }
}

export const modelCache = new ModelCache();

// ============================================================================
// 练功真 3D 场景（1:1 原版 map_sh_shulin 森林地编 + Toon描边 + 实时斜影 + 摇曳草花 + 原版 VFX）
// ============================================================================
export class BattleScene3D {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.18;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.scene.background = makeSkyGradientTexture('#3daae8', '#8ad9f5', '#c5f0e8');
    this.scene.fog = new THREE.Fog('#9fe0dc', 28, 86);

    // 对齐 003_enter.png 全屏 9:16 相机机位：天际线与远山在顶部 0%~14%，木人阵在 22%~35%，主角在 36%~46%，前景草路延伸至底栏后方！
    this.camera = new THREE.PerspectiveCamera(52, 1080 / 1920, 0.1, 600);
    this.baseCamPos = new THREE.Vector3(0, 5.2, -5.2);
    this.camera.position.copy(this.baseCamPos);
    this.camera.lookAt(0, -0.5, 8.0);

    // 原版清爽明亮日光 + 半球环境光 + 实时定向斜影
    this.hemiLight = new THREE.HemisphereLight(0xf6fdff, 0x6ea854, 1.55);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight(0xfff8e6, 1.85);
    // 右后上方斜照向左前方，在人物脚下投出 003_enter.png 同款清晰向左斜影！
    this.sunLight.position.set(12, 18, 4);
    this.sunLight.target.position.set(0, 0, 11.5);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 50;
    this.sunLight.shadow.camera.left = -10;
    this.sunLight.shadow.camera.right = 10;
    this.sunLight.shadow.camera.top = 14;
    this.sunLight.shadow.camera.bottom = -12;
    this.sunLight.shadow.bias = -0.0008;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    const rim = new THREE.DirectionalLight(0xaef2e8, 0.45);
    rim.position.set(-6, 6, 18);
    this.scene.add(rim);

    // 透明实时投影接收层（让实时斜影在烘焙地编上保持清晰对比度，复刻 PlanarShadowRenderPass）
    const shadowCatcher = new THREE.Mesh(
      new THREE.PlaneGeometry(36, 56),
      new THREE.ShadowMaterial({ opacity: 0.44, depthWrite: false })
    );
    shadowCatcher.rotation.x = -Math.PI / 2;
    shadowCatcher.position.set(0, 0.02, 12);
    shadowCatcher.receiveShadow = true;
    shadowCatcher.renderOrder = 2;
    this.scene.add(shadowCatcher);

    this.currentTheme = null;
    this.sceneChunks = [];
    this.backdropRoot = null;
    this._loadUnityForestEnvironment();

    // 复刻 Grass_GPUI + Hua_GPUI + 飘落绿叶
    this.grassField = new WindGrassField(this.scene, { mode: 'forest' });

    // 原版 3D VFX 运行时
    this.vfx3d = new VFX3DManager(this.scene);

    // 主角骨骼动画节点（脚落在屏幕 ~45% 处的明亮土路上，面向 +Z 迎战木人！）
    this.heroRoot = new THREE.Group();
    this.heroRoot.position.set(0, 0, 8.4);
    this.scene.add(this.heroRoot);

    this.heroAura = new THREE.Mesh(
      new THREE.RingGeometry(0.68, 0.92, 32),
      new THREE.MeshBasicMaterial({ color: 0xffd54f, transparent: true, opacity: 0, side: THREE.DoubleSide })
    );
    this.heroAura.rotation.x = -Math.PI / 2;
    this.heroAura.position.y = 0.04;
    this.heroRoot.add(this.heroAura);

    this.heroMesh = null;
    this.heroMixer = null;
    this.heroActions = null;
    this.heroCurrentAnim = null;
    this.heroOneShotLock = 0;

    modelCache.getAnimatedHero({ attachSword: true }).then(({ scene, mixer, actions }) => {
      this.heroMesh = scene;
      // Unity -> glTF 角色天然面朝 +Z（正好背对镜头面向前方敌人！）
      this.heroMesh.rotation.y = 0;
      this.heroMixer = mixer;
      this.heroActions = actions;
      this.heroRoot.add(scene);
      this.playHeroAnim('idle', true);
    }).catch((err) => console.warn('Hero GLB load error:', err));

    this.enemyMap = new Map();
    // 预热第 1 章木人怪与首领独臂木侠模型，切关瞬间 0ms 显现！
    modelCache.getEnemyAsset('mon_muren_001', false).catch(() => {});
    modelCache.getEnemyAsset('boss_dubimuxia_001', true).catch(() => {});
    this.resize();
  }

  _loadUnityForestEnvironment() {
    // 兜底底色地面（防 0.2 秒 GLB 加载间隙穿帮）
    this.fallbackGround = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 120),
      new THREE.MeshBasicMaterial({ color: 0x4f8a54 })
    );
    this.fallbackGround.rotation.x = -Math.PI / 2;
    this.fallbackGround.position.set(0, -0.04, 15);
    this.scene.add(this.fallbackGround);

    // 加载 2 块真实的 Unity map_sh_shulin_1/2 地编块（已校准土路中心 X=0 + 暖阳米黄砂石路面 + 清除黑斑贴花！）
    const chunkUrls = [
      './scenes_unity/map_sh_shulin/chunk_1.glb?v=4',
      './scenes_unity/map_sh_shulin/chunk_2.glb?v=4',
    ];
    chunkUrls.forEach((url, idx) => {
      modelCache.loadRawGltf(url).then((gltf) => {
        const chunk = gltf.scene.clone(true);
        prepareUnitySceneMesh(chunk, { receiveShadow: true, isBackdrop: false });
        chunk.position.set(0, 0, idx * 31.5 - 10);
        this.scene.add(chunk);
        this.sceneChunks.push(chunk);
      }).catch((e) => console.warn('Scene chunk load error:', url, e));
    });

    // 原版双层远景：青黛远山云雾 (上1/3贴图) + 碧绿河谷蜿蜒溪流 (中1/3贴图) + 右侧青峰 (下1/3贴图)，精准落在屏幕顶部 6%~23% 天际线（严格复刻 003_enter.png）！
    const bgGroup = new THREE.Group();
    const texLoader = new THREE.TextureLoader();
    const peakTex = texLoader.load('./game-assets/textures/assets/artres/art_map/world/map_sh_shulin/tex/map_sh_shulin_beijing001.tga.png');
    peakTex.colorSpace = THREE.SRGBColorSpace;
    peakTex.repeat.set(1, 0.34);
    peakTex.offset.set(0, 0.65);
    const peaks = new THREE.Mesh(
      new THREE.PlaneGeometry(42, 9.2),
      new THREE.MeshBasicMaterial({ map: peakTex, transparent: true, fog: false, depthWrite: false })
    );
    peaks.position.set(-1.5, 4.35, 49.5);
    bgGroup.add(peaks);

    const sidePeakTex = texLoader.load('./game-assets/textures/assets/artres/art_map/world/map_sh_shulin/tex/map_sh_shulin_beijing001.tga.png');
    sidePeakTex.colorSpace = THREE.SRGBColorSpace;
    sidePeakTex.repeat.set(1, 0.36);
    sidePeakTex.offset.set(0, 0.01);
    const sidePeak = new THREE.Mesh(
      new THREE.PlaneGeometry(19, 8.2),
      new THREE.MeshBasicMaterial({ map: sidePeakTex, transparent: true, fog: false, depthWrite: false })
    );
    sidePeak.position.set(7.8, 4.15, 48.8);
    bgGroup.add(sidePeak);

    const valleyTex = texLoader.load('./game-assets/textures/assets/artres/art_map/world/map_sh_shulin/tex/map_sh_shulin_beijing001.tga.png');
    valleyTex.colorSpace = THREE.SRGBColorSpace;
    valleyTex.repeat.set(1, 0.22);
    valleyTex.offset.set(0, 0.39);
    const valley = new THREE.Mesh(
      new THREE.PlaneGeometry(44, 6.4),
      new THREE.MeshBasicMaterial({ map: valleyTex, transparent: true, fog: false, depthWrite: false })
    );
    valley.position.set(0, 0.65, 47.2);
    bgGroup.add(valley);

    // 原版近景浓绿树冠框景（采样真实 x46_sl_plant_02a_hd.tga.png 树冠区域，复刻 003_enter.png 左上/右上/右下浓荫！）
    const canopyTex = texLoader.load('./game-assets/textures/assets/artres/art_map/world/map_sh_shulin/tex/x46_sl_plant_02a_hd.tga.png');
    canopyTex.colorSpace = THREE.SRGBColorSpace;
    canopyTex.repeat.set(0.50, 0.50);
    canopyTex.offset.set(0.02, 0.36);
    const canopyMat = new THREE.MeshBasicMaterial({
      map: canopyTex,
      color: new THREE.Color(0x8cd0a0),
      alphaTest: 0.35,
      side: THREE.DoubleSide,
      fog: false,
    });
    const leftCanopy = new THREE.Mesh(new THREE.PlaneGeometry(8.5, 7.5), canopyMat);
    leftCanopy.position.set(-5.6, 6.2, 6.8);
    bgGroup.add(leftCanopy);

    const rightCanopy = new THREE.Mesh(new THREE.PlaneGeometry(9.2, 8.2), canopyMat);
    rightCanopy.position.set(5.8, 6.5, 6.5);
    bgGroup.add(rightCanopy);

    const bushTex = texLoader.load('./game-assets/textures/assets/artres/art_map/world/map_sh_shulin/tex/x46_sl_plant_02a_hd.tga.png');
    bushTex.colorSpace = THREE.SRGBColorSpace;
    bushTex.repeat.set(0.28, 0.16);
    bushTex.offset.set(0.46, 0.69);
    const fgBush = new THREE.Mesh(
      new THREE.PlaneGeometry(3.8, 2.4),
      new THREE.MeshBasicMaterial({ map: bushTex, color: new THREE.Color(0x528f5e), alphaTest: 0.32, side: THREE.DoubleSide, fog: false })
    );
    fgBush.position.set(2.35, 0.55, -0.4);
    fgBush.rotation.x = -0.35;
    bgGroup.add(fgBush);

    this.scene.add(bgGroup);
    this.backdropRoot = bgGroup;
  }

  playHeroAnim(name, loop = false) {
    if (!this.heroActions) return;
    const act = this.heroActions[name] || this.heroActions.idle;
    if (!act) return;
    if (this.heroCurrentAnim === name && loop) return;

    const prev = this.heroCurrentAnim ? this.heroActions[this.heroCurrentAnim] : null;
    act.reset();
    act.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1);
    act.clampWhenFinished = !loop;
    act.timeScale = loop ? 1.0 : 1.35;
    if (prev && prev !== act) {
      act.crossFadeFrom(prev, 0.14, false);
    }
    act.play();
    this.heroCurrentAnim = name;
    if (!loop) {
      this.heroOneShotLock = Math.min(1.1, act.getClip().duration / 1.35);
    }
  }

  playEnemyAnim(enemyId, name, loop = false) {
    const entry = this.enemyMap.get(enemyId);
    if (!entry || !entry.actions) return;
    const act = entry.actions[name] || entry.actions.idle;
    if (!act) return;
    if (entry.curAnim === name && loop) return;

    const prev = entry.curAnim ? entry.actions[entry.curAnim] : null;
    act.reset();
    act.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1);
    act.clampWhenFinished = !loop;
    act.timeScale = loop ? 1.0 : 1.35;
    if (prev && prev !== act) act.crossFadeFrom(prev, 0.12, false);
    act.play();
    entry.curAnim = name;
    if (!loop) entry.oneShotLock = Math.min(0.9, act.getClip().duration / 1.35);
  }

  setTheme(theme) {
    if (this.currentTheme === theme) return;
    this.currentTheme = theme;
    const cfg = {
      forest:   { top: '#2ea2ea', mid: '#82daf7', bot: '#c5f0e8', fog: '#9fe0dc', grass: 0x8ec47e, sun: 0xfff8e6 },
      meadow:   { top: '#2ca0ec', mid: '#7ed4f7', bot: '#c8f2ec', fog: '#a8e6df', grass: 0x98ce7c, sun: 0xfff9ea },
      autumn:   { top: '#e89652', mid: '#f5c782', bot: '#fae2b8', fog: '#f2d4a2', grass: 0xdca448, sun: 0xffe4b5 },
      snow:     { top: '#5894cf', mid: '#a8d2f0', bot: '#e4f2fc', fog: '#d2eaf8', grass: 0xd8eef8, sun: 0xf0f8ff },
      immortal: { top: '#4a3d8c', mid: '#7c6dc2', bot: '#c4b8f0', fog: '#9e90d8', grass: 0x8ea2d6, sun: 0xe6e0ff },
    }[theme] || {};
    if (!cfg.top) return;
    this.scene.background = makeSkyGradientTexture(cfg.top, cfg.mid, cfg.bot);
    this.scene.fog.color.set(cfg.fog);
    this.sunLight.color.setHex(cfg.sun);
    this.grassField.setTint(cfg.grass);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const w = Math.max(100, rect.width || 430);
    const h = Math.max(100, rect.height || 760);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  syncAndRender(engine, dt) {
    this.setTheme(engine.stageConfig.chapter.theme);
    const t = engine.time;
    const isRunning = engine.phase === 'running';
    const scrollDeltaZ = isRunning ? dt * 6.8 : 0;

    if (scrollDeltaZ > 0) {
      for (const ch of this.sceneChunks) {
        ch.position.z -= scrollDeltaZ;
        if (ch.position.z < -31.5) ch.position.z += 63.0;
      }
    }
    this.grassField.update(dt, scrollDeltaZ);

    // 驱动主角真实骨骼动画 Mixer
    const h = engine.hero;
    if (this.heroMixer) {
      this.heroMixer.update(dt);
      if (this.heroOneShotLock > 0) {
        this.heroOneShotLock -= dt;
      } else {
        this.playHeroAnim(isRunning ? 'run' : 'idle', true);
      }
    }
    this.heroRoot.position.set(0, 0, 7.8);

    if (this.heroMesh) {
      // 保持原版清爽青白服饰本色（仅受击瞬间 0.06 秒轻微闪亮，绝不常驻染红！）
      const flash = h.hitFlash > 0.78;
      setToonStatusTint(this.heroMesh, flash ? 0x55483e : 0x161412, flash ? 0.55 : 0.28);
    }
    this.heroAura.material.opacity = 0;
    this.heroAura.rotation.z = t * 1.5;

    // 同步所有敌人 3D 骨骼动画实例（位于主角前方 +Z ∈ [13.5..18.2]，对齐 003_enter.png 上半屏站位！）
    const activeIds = new Set();
    for (const e of engine.enemies) {
      if (e.hp <= 0) continue;
      activeIds.add(e.id);
      let entry = this.enemyMap.get(e.id);
      if (!entry) {
        const root = new THREE.Group();
        let bossRing = null;
        if (e.isBoss) {
          bossRing = new THREE.Mesh(
            new THREE.RingGeometry(1.0, 1.32, 32),
            new THREE.MeshBasicMaterial({ color: 0xff5252, transparent: true, opacity: 0.72, side: THREE.DoubleSide })
          );
          bossRing.rotation.x = -Math.PI / 2;
          bossRing.position.y = 0.04;
          root.add(bossRing);
        }
        this.scene.add(root);
        entry = { root, mesh: null, mixer: null, actions: null, curAnim: null, oneShotLock: 0, bossRing };
        this.enemyMap.set(e.id, entry);

        modelCache.getEnemyAsset(e.modelName || 'mon_muren_001', e.isBoss).then(({ scene, mixer, actions }) => {
          if (!this.enemyMap.has(e.id)) return;
          // 面向 -Z（面对主角与镜头！）
          scene.rotation.y = Math.PI;
          entry.mesh = scene;
          entry.mixer = mixer;
          entry.actions = actions;
          root.add(scene);
          if (actions) this.playEnemyAnim(e.id, 'idle', true);
        }).catch(() => {});
      }

      // 将 2D 阵型坐标紧凑映射到明亮砂石土路中央 (wx ∈ [-2.9, +2.9], wz ∈ [12.8, 17.5]，严格对齐 003_enter.png！)
      const nx = (e.x / Math.max(1, engine.width)) - 0.5;
      const ny = (e.y / Math.max(1, engine.height));
      const wx = -nx * 6.4;
      const wz = 21.8 - ny * 19.5;
      const recoilZ = e.recoil * 0.04;
      entry.root.position.set(wx, 0, wz + recoilZ);
      entry.worldPos = new THREE.Vector3(wx, e.isBoss ? 2.8 : 2.08, wz + recoilZ);
      entry.centerPos = new THREE.Vector3(wx, e.isBoss ? 1.35 : 1.0, wz + recoilZ);

      if (entry.mixer) {
        entry.mixer.update(dt);
        if (entry.oneShotLock > 0) {
          entry.oneShotLock -= dt;
        } else {
          const moving = Math.hypot(e.targetX - e.x, e.targetY - e.y) > 4;
          this.playEnemyAnim(e.id, moving ? 'move' : 'idle', true);
        }
      }

      if (entry.mesh) {
        // 保持木人原木暖金本色（对照 003 / 052.png：冰冻/灼烧由血条下方原版 bufficon 表达，仅受击瞬间闪白！）
        const hit = e.hitFlash > 0.68;
        setToonStatusTint(entry.mesh, hit ? 0x999999 : 0x1e1a15, hit ? 0.72 : 0.30);
      }
      if (entry.bossRing) entry.bossRing.rotation.z = -t * 1.1;
    }

    for (const [id, entry] of this.enemyMap.entries()) {
      if (!activeIds.has(id)) {
        this.scene.remove(entry.root);
        this.enemyMap.delete(id);
      }
    }

    // 更新 3D 原版 Unity VFX 运行时
    this.vfx3d.update(dt, this.camera);

    if (engine.shake > 0.15) {
      this.camera.position.x = this.baseCamPos.x + (Math.random() - 0.5) * engine.shake * 0.04;
      this.camera.position.y = this.baseCamPos.y + (Math.random() - 0.5) * engine.shake * 0.035;
    } else {
      this.camera.position.copy(this.baseCamPos);
    }

    this.renderer.render(this.scene, this.camera);
  }

  getHeroWorldPos() {
    return this.heroRoot.position.clone();
  }

  getEnemyWorldPos(enemyId) {
    const entry = this.enemyMap.get(enemyId);
    return entry?.root ? entry.root.position.clone() : new THREE.Vector3(0, 0, 8.0);
  }

  projectToScreen(worldVec, width, height) {
    const v = worldVec.clone().project(this.camera);
    return {
      x: (v.x * 0.5 + 0.5) * width,
      y: (-v.y * 0.5 + 0.5) * height,
    };
  }

  getHeroScreenPos(width, height) {
    return {
      head: this.projectToScreen(new THREE.Vector3(0, 2.22, this.heroRoot.position.z), width, height),
      center: this.projectToScreen(new THREE.Vector3(0, 1.05, this.heroRoot.position.z), width, height),
    };
  }

  getEnemyScreenPos(enemyId, width, height) {
    const entry = this.enemyMap.get(enemyId);
    if (!entry || !entry.worldPos) return null;
    return {
      head: this.projectToScreen(entry.worldPos, width, height),
      center: this.projectToScreen(entry.centerPos, width, height),
    };
  }
}

// ============================================================================
// 角色界面 1:1 真 3D 草原展示器（加载原版 chr_lookdev.prefab.ab + 摇曳绿草 + 卡通描边主角！）
// 对照真机截图 006_tab_role.png
// ============================================================================
export class RoleHeroViewer3D {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.16;

    this.scene = new THREE.Scene();
    this.scene.background = makeSkyGradientTexture('#2394e6', '#6cc8f5', '#dcf7fc');
    this.scene.fog = new THREE.Fog('#b8eef5', 22, 90);

    this.camera = new THREE.PerspectiveCamera(38, 1080 / 1920, 0.1, 200);
    this.camera.position.set(0, 1.32, -6.35);
    this.camera.lookAt(0, 0.45, 1.5);

    this.scene.add(new THREE.HemisphereLight(0xf6fdff, 0x7bc85c, 1.65));
    const key = new THREE.DirectionalLight(0xfff9ea, 1.65);
    key.position.set(4, 8, -5);
    this.scene.add(key);

    // 加载原版 chr_lookdev 山坡地形与 3D 蓬松白云 + 向远方缓升草坡底板（绝不遮挡角色双腿！）
    const hillFill = new THREE.Mesh(
      new THREE.PlaneGeometry(140, 80),
      new THREE.MeshBasicMaterial({ color: 0x5da446, fog: true })
    );
    hillFill.rotation.x = -Math.PI / 2 - 0.032;
    hillFill.position.set(0, 0.38, 14);
    this.scene.add(hillFill);

    modelCache.loadRawGltf('./scenes_unity/chr_lookdev/lookdev.glb?v=2').then((gltf) => {
      if (!this.running) return;
      const env = gltf.scene.clone(true);
      prepareUnitySceneMesh(env, { receiveShadow: false, isBackdrop: false });
      env.traverse((c) => {
        if (c.isMesh && c.name.toLowerCase().includes('cloud')) {
          if (c.name.includes('cloud_004')) {
            c.visible = false;
          } else {
            c.material = c.material.clone();
            c.material.transparent = true;
            c.material.opacity = 0.72;
            c.material.depthWrite = false;
          }
        }
      });
      this.scene.add(env);
    }).catch(() => {});

    // 复刻 006_tab_role.png 大片随风摇曳的前景至远景草原
    this.meadow = new WindGrassField(this.scene, { mode: 'meadow' });

    this.hero = null;
    this.mixer = null;
    this.rotY = Math.PI + 0.05; // 面向镜头 (-Z)
    this.dragging = false;
    this.lastX = 0;
    this.lastFrame = performance.now();
    this.running = true;

    modelCache.getAnimatedHero({ attachSword: false }).then(({ scene, mixer, actions }) => {
      if (!this.running) return;
      this.hero = scene;
      this.mixer = mixer;
      this.hero.position.set(0, 0.02, 0);
      this.hero.rotation.y = this.rotY;
      this.scene.add(scene);
      // 播放角色界面专属自然站姿待机动作 (chr_male_lod0@show_idle)，双臂自然垂放，展露琥珀金瞳面部贴图！
      const act = actions.show_idle || actions.stand_idle || actions.idle;
      if (act) {
        act.setLoop(THREE.LoopRepeat, Infinity);
        act.play();
      }
    }).catch(() => {});

    canvas.addEventListener('pointerdown', (e) => { this.dragging = true; this.lastX = e.clientX; });
    window.addEventListener('pointermove', (e) => {
      if (!this.dragging) return;
      this.rotY += (e.clientX - this.lastX) * 0.014;
      this.lastX = e.clientX;
    });
    window.addEventListener('pointerup', () => { this.dragging = false; });

    this._loop();
  }

  _loop() {
    if (!this.running) return;
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastFrame) / 1000);
    this.lastFrame = now;

    const rect = this.canvas.getBoundingClientRect();
    if (rect.width > 10 && rect.height > 10) {
      this.renderer.setSize(rect.width, rect.height, false);
      this.camera.aspect = rect.width / rect.height;
      this.camera.updateProjectionMatrix();
    }
    this.meadow.update(dt, 0);
    if (this.mixer) this.mixer.update(dt);
    if (this.hero) this.hero.rotation.y = this.rotY;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this._loop());
  }

  dispose() {
    this.running = false;
    this.renderer.dispose();
  }
}

// ============================================================================
// 修为界面 1:1 真 3D 古树草坡休憩展示器（加载 chr_xiuwei.prefab.ab + 古树灌木 + chr_male_lod0@idle01_xw 树下枕臂休憩！）
// 严格对照真机截图 018_shimen_xiuwei.png
// ============================================================================
export class XiuweiHeroViewer3D {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.14;

    this.scene = new THREE.Scene();
    this.scene.background = makeSkyGradientTexture('#369fe8', '#7ed4f8', '#dff8f6');
    this.scene.fog = new THREE.Fog('#b8eef5', 22, 90);

    this.camera = new THREE.PerspectiveCamera(40, 1080 / 1920, 0.1, 200);
    this.camera.position.set(0.35, 1.38, -5.65);
    this.camera.lookAt(-0.15, 0.85, 1.2);

    this.scene.add(new THREE.HemisphereLight(0xf6fdff, 0x62a84a, 1.58));
    const key = new THREE.DirectionalLight(0xfff8e2, 1.72);
    key.position.set(5, 9, -4);
    this.scene.add(key);

    const hillFill = new THREE.Mesh(
      new THREE.PlaneGeometry(140, 80),
      new THREE.MeshBasicMaterial({ color: 0x3f7c3c, fog: true })
    );
    hillFill.rotation.x = -Math.PI / 2 - 0.035;
    hillFill.position.set(0, 0.42, 14);
    this.scene.add(hillFill);

    this.running = true;
    this.lastFrame = performance.now();
    this.mixer = null;

    // 加载原版 chr_xiuwei 草坡与云海
    modelCache.loadRawGltf('./scenes_unity/chr_xiuwei/xiuwei.glb?v=1').then((gltf) => {
      if (!this.running) return;
      const env = gltf.scene.clone(true);
      prepareUnitySceneMesh(env, { receiveShadow: false, isBackdrop: false });
      env.traverse((c) => {
        if (c.isMesh && c.name.toLowerCase().includes('cloud')) {
          if (c.name.includes('cloud_004')) {
            c.visible = false;
          } else {
            c.material = c.material.clone();
            c.material.transparent = true;
            c.material.opacity = 0.72;
            c.material.depthWrite = false;
          }
        }
      });
      this.scene.add(env);
    }).catch(() => {});

    // 顶部与左侧浓密古树枝叶冠盖（采样原版 x46_sl_plant_02a_hd.tga.png，1:1 对齐 018_shimen_xiuwei.png 顶部绿荫与左翼古树！）
    const texLoader = new THREE.TextureLoader();
    const canopyTex = texLoader.load('./game-assets/textures/assets/artres/art_map/world/map_sh_shulin/tex/x46_sl_plant_02a_hd.tga.png');
    canopyTex.colorSpace = THREE.SRGBColorSpace;
    canopyTex.repeat.set(0.50, 0.50);
    canopyTex.offset.set(0.02, 0.36);
    const canopyMat = new THREE.MeshBasicMaterial({
      map: canopyTex,
      color: new THREE.Color(0x88cf96),
      alphaTest: 0.32,
      side: THREE.DoubleSide,
      fog: false,
    });
    const topCanopyL = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 3.8), canopyMat);
    topCanopyL.position.set(-1.1, 3.25, 0.6);
    this.scene.add(topCanopyL);
    const topCanopyR = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 3.2), canopyMat);
    topCanopyR.position.set(1.4, 3.55, 0.9);
    topCanopyR.rotation.z = -0.25;
    this.scene.add(topCanopyR);

    // 复用原版森林古树干与树根灌木（新建独立 Mesh 以脱离 chunk_1 烘焙世界矩阵，精准置于角色左后方！）
    modelCache.loadRawGltf('./scenes_unity/map_sh_shulin/chunk_1.glb?v=4').then((gltf) => {
      if (!this.running) return;
      let bigTree = null;
      let bush = null;
      gltf.scene.traverse((c) => {
        if (c.isMesh && !bigTree && c.name.includes('SL_Tree_001')) bigTree = c;
        if (c.isMesh && !bush && c.name.includes('Level_Tree_003')) bush = c;
      });
      if (bigTree) {
        const t = new THREE.Mesh(bigTree.geometry, bigTree.material.clone());
        prepareUnitySceneMesh(t, { receiveShadow: false, isBackdrop: false });
        t.position.set(-1.55, -0.08, 1.35);
        t.rotation.set(0, 0.35, -0.05);
        t.scale.set(0.24, 0.28, 0.24);
        this.scene.add(t);
      }
      if (bush) {
        const b = new THREE.Mesh(bush.geometry, bush.material.clone());
        prepareUnitySceneMesh(b, { receiveShadow: false, isBackdrop: false });
        b.position.set(-1.05, 0.12, 0.25);
        b.scale.setScalar(0.95);
        this.scene.add(b);
      }
    }).catch(() => {});

    // 随风摇曳的野花绿草坡
    this.meadow = new WindGrassField(this.scene, { mode: 'meadow', withFlowers: true });

    // 加载原版主角播放 chr_male_lod0@idle01_xw（在古树根前方草坡枕臂斜倚吐纳，双腿自然伸向右前方！）
    modelCache.getAnimatedHero({ attachSword: false }).then(({ scene, mixer, actions }) => {
      if (!this.running) return;
      this.mixer = mixer;
      scene.position.set(-0.28, -0.36, -0.55);
      scene.rotation.set(0.06, -Math.PI * 0.34, -0.06);
      this.scene.add(scene);
      const act = actions.xw_idle || actions.show_idle || actions.idle;
      if (act) {
        act.setLoop(THREE.LoopRepeat, Infinity);
        act.play();
      }
    }).catch(() => {});

    this._loop();
  }

  _loop() {
    if (!this.running) return;
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastFrame) / 1000);
    this.lastFrame = now;

    const rect = this.canvas.getBoundingClientRect();
    if (rect.width > 10 && rect.height > 10) {
      this.renderer.setSize(rect.width, rect.height, false);
      this.camera.aspect = rect.width / rect.height;
      this.camera.updateProjectionMatrix();
    }
    this.meadow.update(dt, 0);
    if (this.mixer) this.mixer.update(dt);
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this._loop());
  }

  dispose() {
    this.running = false;
    this.renderer.dispose();
  }
}
