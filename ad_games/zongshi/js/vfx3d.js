import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { createFxStandardMaterial } from './fxStandardShader.js?v=10';

const gltfLoader = new GLTFLoader();
const quadGeo = new THREE.PlaneGeometry(1, 1);

function randRange(min, max) {
  return min + Math.random() * (max - min);
}

function sampleCurve(keys, t, fallback = 1.0) {
  if (!keys || keys.length === 0) return fallback;
  if (t <= keys[0][0]) return keys[0][1];
  const last = keys[keys.length - 1];
  if (t >= last[0]) return last[1];
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i];
    const b = keys[i + 1];
    if (t >= a[0] && t <= b[0]) {
      const f = (t - a[0]) / Math.max(1e-5, b[0] - a[0]);
      return a[1] + (b[1] - a[1]) * f;
    }
  }
  return last[1];
}

function sampleGradient(grad, t, out) {
  if (!grad) {
    out.set(1, 1, 1, 1);
    return;
  }
  // RGB
  const ck = grad.c;
  let r = 1, g = 1, b = 1;
  if (ck && ck.length > 0) {
    if (t <= ck[0][0]) {
      [, r, g, b] = ck[0];
    } else if (t >= ck[ck.length - 1][0]) {
      [, r, g, b] = ck[ck.length - 1];
    } else {
      for (let i = 0; i < ck.length - 1; i++) {
        if (t >= ck[i][0] && t <= ck[i + 1][0]) {
          const f = (t - ck[i][0]) / Math.max(1e-5, ck[i + 1][0] - ck[i][0]);
          r = ck[i][1] + (ck[i + 1][1] - ck[i][1]) * f;
          g = ck[i][2] + (ck[i + 1][2] - ck[i][2]) * f;
          b = ck[i][3] + (ck[i + 1][3] - ck[i][3]) * f;
          break;
        }
      }
    }
  }
  // Alpha
  const ak = grad.a;
  let a = 1;
  if (ak && ak.length > 0) {
    if (t <= ak[0][0]) {
      a = ak[0][1];
    } else if (t >= ak[ak.length - 1][0]) {
      a = ak[ak.length - 1][1];
    } else {
      for (let i = 0; i < ak.length - 1; i++) {
        if (t >= ak[i][0] && t <= ak[i + 1][0]) {
          const f = (t - ak[i][0]) / Math.max(1e-5, ak[i + 1][0] - ak[i][0]);
          a = ak[i][1] + (ak[i + 1][1] - ak[i][1]) * f;
          break;
        }
      }
    }
  }
  out.set(r, g, b, a);
}

/**
 * 1:1 WebGL Unity ParticleSystem + FX_Standard 3D 特效运行时
 * 直接回放从原版 resourcesab/prefabs/effect/character/*.ab 编译的真实粒子系统、
 * 3D 特效网格 (vfx_mesh.ab) 与 FX_Standard GLSL 材质（Dissolve / Distort / Mask / HDR Color）！
 */
export class VFX3DManager {
  constructor(scene) {
    this.scene = scene;
    this.manifest = null;
    this.vfxCache = new Map();    // vfxKey -> Promise<doc>
    this.meshGeoCache = new Map();// meshUrl -> Promise<BufferGeometry>
    this.activeInstances = [];

    // 启动时预载清单并预热最常用的初始武学特效
    fetch('./vfx_unity/manifest.json?v=3')
      .then((r) => (r.ok ? r.json() : {}))
      .then((m) => {
        this.manifest = m;
        for (const k of ['slash_basic', 'fire_blade', 'taiji_ink', 'ice_shard', 'lotus_gold', 'sword_pierce', 'spear_amber', 'whirl_pink']) {
          if (m[k]) this._loadVfxDoc(k);
        }
      })
      .catch(() => { this.manifest = {}; });
  }

  _loadVfxDoc(vfxKey) {
    if (!this.vfxCache.has(vfxKey)) {
      const url = (this.manifest && this.manifest[vfxKey]) || `./vfx_unity/${vfxKey}.json`;
      const p = fetch(url + '?v=3')
        .then((r) => (r.ok ? r.json() : null))
        .then((doc) => {
          if (doc) {
            const all = [...(doc.cast || []), ...(doc.hit || []), ...(doc.emitters || [])];
            for (const em of all) {
              if (em.mesh) this._loadMeshGeo(em.mesh);
            }
          }
          return doc;
        })
        .catch(() => null);
      this.vfxCache.set(vfxKey, p);
    }
    return this.vfxCache.get(vfxKey);
  }

  _loadMeshGeo(url) {
    if (!this.meshGeoCache.has(url)) {
      const p = new Promise((resolve) => {
        gltfLoader.load(
          url,
          (gltf) => {
            let found = null;
            gltf.scene.traverse((c) => {
              if (!found && c.isMesh && c.geometry) {
                found = c.geometry;
              }
            });
            resolve(found || quadGeo);
          },
          undefined,
          () => resolve(quadGeo)
        );
      });
      this.meshGeoCache.set(url, p);
    }
    return this.meshGeoCache.get(url);
  }

  spawnCast(vfxType, heroWorldPos, targetWorldPos) {
    const key = vfxType || 'slash_basic';
    const src = heroWorldPos ? heroWorldPos.clone() : new THREE.Vector3(0, 0, 2.35);
    const tgt = targetWorldPos ? targetWorldPos.clone() : new THREE.Vector3(0, 0, 8.0);
    const dir = new THREE.Vector3(tgt.x - src.x, 0, tgt.z - src.z);
    const yaw = dir.lengthSq() > 0.01 ? Math.atan2(dir.x, dir.z) : 0;
    // 阵法/天降类大招直接施放在敌阵中心，刀剑斩击施放在主角身前！
    const isTargetAoe = ['star_array', 'taiji_ink', 'taiji_blue', 'lotus_gold', 'lotus_fire', 'buddha_palm', 'sword_rain', 'thunder_blue', 'immortal_void', 'vortex_jade', 'quake_fire'].includes(key);
    const anchor = isTargetAoe ? tgt : src.clone().lerp(tgt, 0.35);

    this._loadVfxDoc(key).then((doc) => {
      if (!doc) return;
      const list = (doc.cast && doc.cast.length > 0) ? doc.cast : (doc.emitters || []);
      if (list.length === 0) return;
      this._createInstance(list, anchor, yaw, key === 'slash_basic' ? 0.95 : 1.28, isTargetAoe ? 0.12 : 0.78);
    });
  }

  spawn(vfxType, targetWorldPos, heroWorldPos) {
    const key = vfxType === 'poof' ? 'slash_basic' : (vfxType || 'slash_basic');
    const tgt = targetWorldPos.clone();
    const src = heroWorldPos ? heroWorldPos.clone() : new THREE.Vector3(0, 0, 2.35);
    const dir = new THREE.Vector3(tgt.x - src.x, 0, tgt.z - src.z);
    const yaw = dir.lengthSq() > 0.01 ? Math.atan2(dir.x, dir.z) : 0;

    this._loadVfxDoc(key).then((doc) => {
      if (!doc) return;
      const list = (doc.hit && doc.hit.length > 0) ? doc.hit : (doc.emitters || []);
      if (list.length === 0) return;
      this._createInstance(list, tgt, yaw, key === 'slash_basic' ? 1.0 : 1.22, 0.92);
    });
  }

  _createInstance(emitterDefs, worldPos, yaw, scaleMult = 1.0, baseHeight = 0.75) {
    // 防止极端多目标同时爆发时实例过多影响帧率
    if (this.activeInstances.length > 32) {
      const oldest = this.activeInstances.shift();
      this._disposeInstance(oldest);
    }

    const root = new THREE.Group();
    root.position.set(worldPos.x, 0.04, worldPos.z);
    root.rotation.y = yaw;
    root.scale.setScalar(scaleMult);
    this.scene.add(root);

    const emitterStates = emitterDefs.map((def) => {
      const emNode = new THREE.Group();
      // 地面法阵 (rmode===2) 贴地渲染，斩击/爆点若原局部高度在脚底则抬升至胸口受击点 (052_merge_drag.png)！
      const liftY = (def.rmode === 2) ? Math.min(0.12, Math.max(0.03, def.pos[1])) : (def.pos[1] < 0.25 ? def.pos[1] + baseHeight : def.pos[1]);
      emNode.position.set(def.pos[0], liftY, def.pos[2]);
      if (def.rotM && def.rotM.length === 9) {
        const m4 = new THREE.Matrix4().set(
          def.rotM[0], def.rotM[1], def.rotM[2], 0,
          def.rotM[3], def.rotM[4], def.rotM[5], 0,
          def.rotM[6], def.rotM[7], def.rotM[8], 0,
          0, 0, 0, 1
        );
        emNode.quaternion.setFromRotationMatrix(m4);
      }
      emNode.scale.set(
        Math.max(0.05, def.scl[0]),
        Math.max(0.05, def.scl[1]),
        Math.max(0.05, def.scl[2])
      );
      root.add(emNode);

      const st = {
        def,
        node: emNode,
        geo: def.mesh ? null : quadGeo,
        age: 0,
        emitAcc: 0,
        burstFired: (def.bursts || []).map(() => false),
        particles: [],
        done: false,
      };
      if (def.mesh) {
        this._loadMeshGeo(def.mesh).then((g) => { st.geo = g; });
      }
      return st;
    });

    this.activeInstances.push({
      root,
      emitters: emitterStates,
      age: 0,
      maxLife: 2.6,
    });
  }

  _spawnParticle(emState) {
    if (!emState.geo || emState.particles.length >= 24) return;
    const d = emState.def;
    const mat = createFxStandardMaterial(d.mat);
    const mesh = new THREE.Mesh(emState.geo, mat);
    mesh.renderOrder = d.mat.additive ? 26 : 22;
    mesh.frustumCulled = false;

    // ShapeModule 初始发射位置与速度向量
    const p = new THREE.Vector3(0, 0, 0);
    const v = new THREE.Vector3(0, 0, 1);
    const sh = d.shape || { t: -1, r: 0.3, ang: 25, box: [1, 1, 1] };
    const r = Math.min(2.5, Math.max(0.02, sh.r || 0.3));
    if (sh.t === 0 || sh.t === 2) {
      // Sphere / Hemisphere
      const theta = Math.random() * Math.PI * 2;
      const phi = sh.t === 2 ? Math.random() * Math.PI * 0.5 : Math.acos(2 * Math.random() - 1);
      v.set(Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta));
      p.copy(v).multiplyScalar(Math.random() * r);
    } else if (sh.t === 4 || sh.t === 8) {
      // Cone
      const ang = (sh.ang || 25) * Math.PI / 180;
      const th = Math.random() * Math.PI * 2;
      const rad = Math.random() * r;
      p.set(Math.cos(th) * rad, Math.sin(th) * rad, 0);
      v.set(Math.cos(th) * Math.sin(ang), Math.sin(th) * Math.sin(ang), Math.cos(ang)).normalize();
    } else if (sh.t === 5) {
      // Box
      const bx = sh.box || [1, 1, 1];
      p.set((Math.random() - 0.5) * bx[0], (Math.random() - 0.5) * bx[1], (Math.random() - 0.5) * bx[2]);
      v.set(0, 1, 0);
    } else if (sh.t === 10) {
      // Circle
      const th = Math.random() * Math.PI * 2;
      v.set(Math.cos(th), Math.sin(th), 0);
      p.copy(v).multiplyScalar(Math.random() * r);
    }

    const spd = randRange(d.speed[0], d.speed[1]);
    v.multiplyScalar(Math.min(12, spd));

    const life = Math.max(0.18, randRange(d.life[0], d.life[1]));
    const baseSize = Math.max(0.08, Math.min(6.8, randRange(d.size[0], d.size[1])));
    const size3D = d.size3D
      ? new THREE.Vector3(Math.min(6.8, Math.max(0.05, d.size3D[0])), Math.min(6.8, Math.max(0.05, d.size3D[1])), Math.min(6.8, Math.max(0.05, d.size3D[2])))
      : new THREE.Vector3(baseSize, baseSize, baseSize);

    mesh.position.copy(p);
    let roll = randRange(d.startRot[0], d.startRot[1]);
    if (d.rmode === 4 && d.startRot3D) {
      mesh.rotation.set(d.startRot3D[0], d.startRot3D[1], d.startRot3D[2]);
    } else if (d.rmode === 2) {
      // Horizontal Billboard (地面法阵!)
      mesh.rotation.set(-Math.PI / 2, 0, roll);
    } else {
      mesh.rotation.set(0, 0, roll);
    }

    emState.node.add(mesh);
    emState.particles.push({
      mesh,
      mat,
      vel: v,
      age: 0,
      life,
      size3D,
      roll,
      startColor: d.startColor || [1, 1, 1, 1],
    });
  }

  _disposeInstance(inst) {
    for (const em of inst.emitters) {
      for (const pt of em.particles) {
        em.node.remove(pt.mesh);
        pt.mat.dispose();
      }
      em.particles.length = 0;
    }
    this.scene.remove(inst.root);
  }

  update(dt, camera) {
    const tmpCol = new THREE.Vector4();
    const camQ = camera ? camera.quaternion : null;
    const invParentQ = new THREE.Quaternion();

    for (let ii = this.activeInstances.length - 1; ii >= 0; ii--) {
      const inst = this.activeInstances[ii];
      inst.age += dt;
      let anyAlive = false;

      for (const em of inst.emitters) {
        const d = em.def;
        em.age += dt;
        const activeT = em.age - d.delay;

        // 触发 Burst 与连续发射
        if (activeT >= 0 && activeT <= Math.min(d.dur, 1.35)) {
          if (d.bursts) {
            for (let bi = 0; bi < d.bursts.length; bi++) {
              if (!em.burstFired[bi] && activeT >= d.bursts[bi].t) {
                em.burstFired[bi] = true;
                const count = Math.min(14, d.bursts[bi].c);
                for (let k = 0; k < count; k++) this._spawnParticle(em);
              }
            }
          }
          if (d.rate > 0.05) {
            em.emitAcc += d.rate * dt;
            while (em.emitAcc >= 1.0) {
              em.emitAcc -= 1.0;
              this._spawnParticle(em);
            }
          }
          anyAlive = true;
        } else if (activeT < 0) {
          anyAlive = true;
        }

        // 预计算父节点逆旋转用于 Billboard 对齐镜头
        if (camQ && d.rmode !== 4 && d.rmode !== 2 && em.particles.length > 0) {
          em.node.getWorldQuaternion(invParentQ).invert();
        }

        for (let pi = em.particles.length - 1; pi >= 0; pi--) {
          const pt = em.particles[pi];
          pt.age += dt;
          if (pt.age >= pt.life) {
            em.node.remove(pt.mesh);
            pt.mat.dispose();
            em.particles.splice(pi, 1);
            continue;
          }
          anyAlive = true;
          const p = pt.age / pt.life;

          // 位移与重力
          if (d.gravity) pt.vel.y -= d.gravity * 9.8 * dt;
          pt.mesh.position.addScaledVector(pt.vel, dt);

          // 生命周期缩放曲线
          const szMult = sampleCurve(d.sizeCurve, p, 1.0);
          pt.mesh.scale.set(
            pt.size3D.x * szMult,
            pt.size3D.y * szMult,
            pt.size3D.z * szMult
          );

          // 旋转 & Billboard 面向镜头
          pt.roll += (d.rotVel || 0) * dt;
          if (d.rmode === 4) {
            if (d.rotVel) pt.mesh.rotation.y += d.rotVel * dt;
          } else if (d.rmode === 2) {
            pt.mesh.rotation.z = pt.roll;
          } else if (camQ) {
            pt.mesh.quaternion.copy(invParentQ).multiply(camQ);
            pt.mesh.rotateZ(pt.roll);
          }

          // 生命周期颜色与淡入淡出
          sampleGradient(d.colorGrad, p, tmpCol);
          const edgeFade = p < 0.12 ? (p / 0.12) : (p > 0.78 ? (1 - p) / 0.22 : 1.0);
          const sc = pt.startColor;
          pt.mat.uniforms.uPartColor.value.set(
            sc[0] * tmpCol.x,
            sc[1] * tmpCol.y,
            sc[2] * tmpCol.z,
            sc[3] * tmpCol.w * edgeFade
          );
          pt.mat.uniforms.uTime.value = pt.age;
          pt.mat.uniforms.uLifeP.value = p;

          // UVModule 序列帧翻页
          if (d.uvTiles && (d.uvTiles[0] > 1 || d.uvTiles[1] > 1)) {
            const tx = d.uvTiles[0];
            const ty = d.uvTiles[1];
            const total = tx * ty;
            const fi = Math.min(total - 1, Math.floor(p * total));
            const cx = fi % tx;
            const cy = Math.floor(fi / tx);
            pt.mat.uniforms.uTileRect.value.set(1 / tx, 1 / ty, cx / tx, 1 - (cy + 1) / ty);
          }
        }
      }

      if (!anyAlive || inst.age > inst.maxLife) {
        this._disposeInstance(inst);
        this.activeInstances.splice(ii, 1);
      }
    }
  }
}
