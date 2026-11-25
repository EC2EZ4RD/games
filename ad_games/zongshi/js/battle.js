import { MARTIAL_BY_ID, getStageConfig, QUALITIES } from './data.js?v=14';
import { gameState } from './state.js?v=14';
import { audio } from './audio.js?v=14';
import { BattleScene3D } from './scene3d.js?v=14';

const BUFF_ICONS = {};
for (const k of ['zhuoshao', 'jiansu', 'zhongdu', 'fangyu_down', 'hudun']) {
  const im = new Image();
  im.src = `./ui_sprites/${k}.png`;
  BUFF_ICONS[k] = im;
}

// 实时战斗引擎：底层 Three.js 真3D原版模型 + 顶层 2D 血条/原版Buff图标/伤害浮字
export class BattleEngine {
  constructor(webglCanvas, overlayCanvas, callbacks = {}) {
    this.webglCanvas = webglCanvas;
    this.canvas = overlayCanvas;
    this.ctx = overlayCanvas.getContext('2d');
    this.cb = callbacks;

    this.scene3d = new BattleScene3D(webglCanvas);

    this.width = 430;
    this.height = 380;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.running = false;
    this.mode = 'stage'; // 'stage' | 'travel' | 'dummy'
    this.travelSpot = null;
    this.stageConfig = getStageConfig(gameState.state.currentStage);

    this.time = 0;
    this.stageTimer = 120;
    this.waveIndex = 0;
    this.waveTotal = 5;
    this.phase = 'running';
    this.runProgress = 0;

    this.hero = {
      x: 215, y: 288,
      hp: 50000, maxHp: 50000,
      atkTimer: 0,
      animPunch: 0,
      hitFlash: 0,
      buffs: {},
      skillCds: [0, 0, 0, 0, 0, 0],
      skillMaxCds: [5, 5, 5, 5, 5, 5],
      castingSkill: null,
      castTimer: 0,
    };

    this.enemies = [];
    this.vfx = [];
    this.floatTexts = [];
    this.leaves = Array.from({ length: 14 }, () => ({
      x: Math.random() * 430,
      y: Math.random() * 360,
      vx: -14 - Math.random() * 18,
      vy: 16 + Math.random() * 20,
      rot: Math.random() * 6.28,
      size: 3 + Math.random() * 4,
    }));

    this.dpsMap = {};
    this.totalDmg = 0;
    this.shake = 0;
    this.lastFrame = performance.now();

    this.resize();
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width > 10 && rect.height > 10) {
      this.width = rect.width;
      this.height = rect.height;
    }
    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.scene3d.resize();
    this.hero.x = this.width * 0.5;
    this.hero.y = this.height * 0.76;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.startStage(gameState.state.currentStage);
    this.lastFrame = performance.now();
    const loop = (now) => {
      if (!this.running) return;
      const rawDt = Math.min(0.05, (now - this.lastFrame) / 1000);
      this.lastFrame = now;
      const spd = gameState.state.battleSpeed || 1;
      const dt = rawDt * spd;
      this.update(dt);
      this.render(dt);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  startStage(stageIndex) {
    this.mode = 'stage';
    this.travelSpot = null;
    this.stageConfig = getStageConfig(stageIndex);
    this.waveIndex = 0;
    this.waveTotal = this.stageConfig.waveCount;
    this.stageTimer = this.stageConfig.timeLimit;
    this._resetHeroAndTrackers();
    this.vfx = [];
    this.floatTexts = [];
    // 首波直接刷出木人阵/首领（对齐 003_enter.png 进场即见敌阵，杜绝空路等待！）
    this.phase = 'fighting';
    this.runProgress = 0;
    this._spawnWave();
    this._playStageBgm();
    this.cb.onHudSync?.(this.getHudSnapshot());
  }

  startTravelBoss(spot) {
    this.mode = 'travel';
    this.travelSpot = spot;
    this.waveIndex = 0;
    this.waveTotal = 1;
    this.stageTimer = 90;
    this._resetHeroAndTrackers();
    this.phase = 'fighting';
    this.enemies = [];
    this.vfx = [];
    this.floatTexts = [];
    const scale = spot.powerRec / 50000;
    this.enemies.push({
      id: 'tboss_' + Date.now(),
      name: spot.bossName,
      isBoss: true,
      modelName: spot.modelName || 'boss_baihu_001',
      x: this.width * 0.5,
      y: this.height * 0.36,
      targetX: this.width * 0.5,
      targetY: this.height * 0.36,
      hp: Math.round(16500 * scale),
      maxHp: Math.round(16500 * scale),
      atk: Math.round(240 * Math.pow(scale, 0.72)),
      atkTimer: 1.4,
      hitFlash: 0,
      recoil: 0,
      burn: null,
      poison: null,
      chill: 0,
    });
    audio.playBgm(this.stageConfig.chapter.bossBgm);
    this.cb.onHudSync?.(this.getHudSnapshot());
  }

  startDummyTrial() {
    this.mode = 'dummy';
    this.travelSpot = null;
    this.waveIndex = 0;
    this.waveTotal = 1;
    this.stageTimer = 25;
    this._resetHeroAndTrackers();
    this.phase = 'fighting';
    this.enemies = [{
      id: 'dummy_' + Date.now(),
      name: '千年玄铁木人桩',
      isBoss: true,
      modelName: 'jy_murentouling_001',
      x: this.width * 0.5,
      y: this.height * 0.36,
      targetX: this.width * 0.5,
      targetY: this.height * 0.36,
      hp: 999999999,
      maxHp: 999999999,
      atk: 0,
      atkTimer: 99,
      hitFlash: 0,
      recoil: 0,
      burn: null,
      poison: null,
      chill: 0,
    }];
    this.cb.onHudSync?.(this.getHudSnapshot());
  }

  _playStageBgm() {
    if (this.stageConfig.isBossStage) audio.playBgm(this.stageConfig.chapter.bossBgm);
    else audio.playBgm(this.stageConfig.chapter.bgm);
  }

  _resetHeroAndTrackers() {
    const stats = gameState.computeStats();
    this.hero.maxHp = stats.hp;
    this.hero.hp = stats.hp;
    this.hero.atkTimer = 0.5;
    this.hero.buffs = {};
    this.hero.hitFlash = 0;
    this.hero.animPunch = 0;
    this.dpsMap = {};
    this.totalDmg = 0;

    for (let i = 0; i < 6; i++) {
      const sl = gameState.state.slots[i];
      const def = sl ? MARTIAL_BY_ID[sl.skillId] : null;
      const cd = def ? def.cd * stats.cdScale : 6;
      this.hero.skillMaxCds[i] = cd;
      this.hero.skillCds[i] = 0.55 + i * 0.85;
    }
  }

  syncHeroStats() {
    const stats = gameState.computeStats();
    const ratio = this.hero.maxHp > 0 ? this.hero.hp / this.hero.maxHp : 1;
    this.hero.maxHp = stats.hp;
    this.hero.hp = Math.max(1, Math.round(stats.hp * ratio));
  }

  _spawnWave() {
    const st = this.stageConfig;
    const ch = st.chapter;
    this.enemies = [];

    if (st.isBossStage) {
      const b = ch.boss;
      const bossHp = st.enemyHp;
      this.enemies.push({
        id: 'boss_' + Date.now(),
        name: b.name,
        isBoss: true,
        modelName: b.modelName || 'boss_dubimuxia_001',
        x: this.width * 0.5,
        y: this.height * 0.25,
        targetX: this.width * 0.5,
        targetY: this.height * 0.36,
        hp: bossHp,
        maxHp: bossHp,
        atk: st.enemyAtk,
        atkTimer: 1.5,
        hitFlash: 0,
        recoil: 0,
        burn: null,
        poison: null,
        chill: 0,
      });
      for (let i = 0; i < 2; i++) {
        const eDef = ch.enemies[i % ch.enemies.length];
        const tx = this.width * (i === 0 ? 0.26 : 0.74);
        const ty = this.height * 0.44;
        const guardHp = Math.round(st.enemyHp * 0.22);
        this.enemies.push({
          id: 'guard_' + i + '_' + Date.now(),
          name: eDef.name,
          isBoss: false,
          modelName: eDef.modelName || 'mon_muren_001',
          x: tx, y: ty - 30,
          targetX: tx, targetY: ty,
          hp: guardHp,
          maxHp: guardHp,
          atk: Math.round(st.enemyAtk * 0.45),
          atkTimer: 1.3 + i * 0.4,
          hitFlash: 0, recoil: 0, burn: null, poison: null, chill: 0,
        });
      }
      return;
    }

    const count = st.index === 0 ? 5 : (6 + (st.index % 2));
    for (let i = 0; i < count; i++) {
      const eDef = ch.enemies[i % ch.enemies.length];
      const row = i < Math.ceil(count / 2) ? 0 : 1;
      const inRow = row === 0 ? Math.ceil(count / 2) : count - Math.ceil(count / 2);
      const colIdx = row === 0 ? i : i - Math.ceil(count / 2);
      const spacing = Math.min(78, (this.width - 104) / Math.max(1, inRow - 1 || 1));
      const startX = this.width * 0.5 - ((inRow - 1) * spacing) / 2;
      const tx = inRow === 1 ? this.width * 0.5 : startX + colIdx * spacing + (Math.random() * 12 - 6);
      const ty = this.height * (row === 0 ? 0.34 : 0.45) + (Math.random() * 10 - 5);
      const hp = Math.round(st.enemyHp * (0.90 + Math.random() * 0.20));
      this.enemies.push({
        id: 'e_' + i + '_' + Date.now(),
        name: eDef.name,
        isBoss: false,
        modelName: eDef.modelName || 'mon_muren_001',
        x: tx, y: ty - 55,
        targetX: tx, targetY: ty,
        hp, maxHp: hp,
        atk: st.enemyAtk,
        atkTimer: 1.0 + Math.random() * 1.1,
        hitFlash: 0, recoil: 0, burn: null, poison: null, chill: 0,
      });
    }
  }

  getHudSnapshot() {
    const alive = this.enemies.filter((e) => e.hp > 0).length;
    const remWaves = Math.max(0, this.waveTotal - this.waveIndex);
    return {
      mode: this.mode,
      stageLabel: this.mode === 'travel'
        ? `游历·${this.travelSpot?.name}`
        : this.mode === 'dummy'
          ? '帮派木人桩试炼'
          : this.stageConfig.tag,
      chapterName: this.stageConfig.chapter.name,
      waveIndex: this.waveIndex,
      waveTotal: this.waveTotal,
      remCount: this.mode === 'stage' ? Math.max(alive, remWaves) : alive,
      timer: Math.ceil(this.stageTimer),
      heroHp: this.hero.hp,
      heroMaxHp: this.hero.maxHp,
      skillCds: this.hero.skillCds.slice(),
      skillMaxCds: this.hero.skillMaxCds.slice(),
      totalDmg: this.totalDmg,
    };
  }

  update(dt) {
    this.time += dt;
    this.shake = Math.max(0, this.shake - dt * 18);

    for (const lf of this.leaves) {
      lf.x += lf.vx * dt;
      lf.y += lf.vy * dt;
      lf.rot += dt * 1.8;
      if (lf.y > this.height + 10 || lf.x < -15) {
        lf.x = Math.random() * (this.width + 60);
        lf.y = -10;
      }
    }

    for (let i = this.floatTexts.length - 1; i >= 0; i--) {
      const f = this.floatTexts[i];
      f.life -= dt;
      f.y -= f.vy * dt;
      f.vy *= 0.94;
      if (f.life <= 0) this.floatTexts.splice(i, 1);
    }

    for (let i = this.vfx.length - 1; i >= 0; i--) {
      const v = this.vfx[i];
      v.t += dt;
      if (v.t >= v.dur) this.vfx.splice(i, 1);
    }

    if (this.phase === 'settled') return;

    if (this.phase === 'running') {
      this.runProgress += dt;
      if (this.runProgress >= 0.62) {
        this.phase = 'fighting';
        this._spawnWave();
      }
      this.cb.onHudSync?.(this.getHudSnapshot());
      return;
    }

    this.stageTimer -= dt;
    if (this.stageTimer <= 0) {
      if (this.mode === 'dummy') {
        this.phase = 'settled';
        const dps = Math.round(this.totalDmg / 25);
        if (dps > gameState.state.bestDummyDps) {
          gameState.state.bestDummyDps = dps;
          gameState.notify('dummy_record', { dps });
        }
        this.cb.onDummyFinish?.({ totalDmg: this.totalDmg, dps, dpsMap: this.dpsMap });
        return;
      }
      this._handleDefeat();
      return;
    }

    const stats = gameState.computeStats();
    this.hero.hitFlash = Math.max(0, this.hero.hitFlash - dt * 5);
    this.hero.animPunch = Math.max(0, this.hero.animPunch - dt * 4);
    this.hero.castTimer = Math.max(0, this.hero.castTimer - dt);

    for (const k of Object.keys(this.hero.buffs)) {
      this.hero.buffs[k].dur -= dt;
      if (this.hero.buffs[k].dur <= 0) delete this.hero.buffs[k];
    }

    const hasteMult = 1 + stats.haste + (this.hero.buffs.hasteUp?.value || 0);
    const atkMult = 1 + (this.hero.buffs.atkUp?.value || 0);

    const aliveEnemies = [];
    for (const e of this.enemies) {
      if (e.hp <= 0) continue;
      aliveEnemies.push(e);
      e.x += (e.targetX - e.x) * Math.min(1, dt * 6);
      e.y += (e.targetY - e.y) * Math.min(1, dt * 6);
      e.hitFlash = Math.max(0, e.hitFlash - dt * 5);
      e.recoil = Math.max(0, e.recoil - dt * 28);
      if (e.chill > 0) e.chill -= dt;

      if (e.burn) {
        e.burn.dur -= dt;
        e.burn.tick -= dt;
        if (e.burn.tick <= 0) {
          e.burn.tick = 0.7;
          this._damageEnemy(e, Math.max(1, Math.round(e.burn.dps * 0.7)), 'burn', e.burn.sourceId);
        }
        if (e.burn.dur <= 0) e.burn = null;
      }

      if (e.poison) {
        e.poison.dur -= dt;
        e.poison.tick -= dt;
        if (e.poison.tick <= 0) {
          e.poison.tick = 0.75;
          this._damageEnemy(e, Math.max(1, Math.round(e.poison.dps * 0.75)), 'poison', e.poison.sourceId);
        }
        if (e.poison.dur <= 0) e.poison = null;
      }

      if (e.atk > 0 && e.hp > 0) {
        const enemySpd = e.chill > 0 ? 0.65 : 1.0;
        e.atkTimer -= dt * enemySpd;
        if (e.atkTimer <= 0) {
          e.atkTimer = e.isBoss ? 1.85 : (2.1 + Math.random() * 0.7);
          this.scene3d.playEnemyAnim(e.id, 'attack', false);
          const raw = Math.max(12, e.atk - stats.def * 0.32);
          const isParry = Math.random() < stats.parry;
          const dmg = Math.max(8, Math.round(raw * (1 - stats.dmgReduce) * (isParry ? 0.55 : 1)));
          this.hero.hp = Math.max(0, this.hero.hp - dmg);
          this.hero.hitFlash = 1;
          const hs = this.scene3d.getHeroScreenPos(this.width, this.height).head;
          this.floatTexts.push({
            x: hs.x + (Math.random() * 34 - 17),
            y: hs.y - 12,
            text: isParry ? `招架 -${dmg}` : `-${dmg}`,
            color: isParry ? '#e0f7fa' : '#ff6b6b',
            scale: isParry ? 1.0 : 0.9,
            vy: 38,
            life: 0.75,
          });
          if (this.hero.hp <= 0) {
            this._handleDefeat();
            return;
          }
        }
      }
    }

    if (aliveEnemies.length === 0) {
      this._handleWaveCleared();
      return;
    }

    // 主角普攻（触发原版骨骼挥剑动作 + 原版普攻特效贴图！）
    this.hero.atkTimer -= dt * hasteMult;
    if (this.hero.atkTimer <= 0) {
      this.hero.atkTimer = 0.95;
      this.hero.animPunch = 1;
      this.scene3d.playHeroAnim(Math.random() < 0.5 ? 'attack1' : 'attack2', false);
      const target = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
      const isCrit = Math.random() < stats.crit;
      const base = stats.atk * atkMult * (0.95 + Math.random() * 0.15);
      const dmg = Math.round(base * (1 + stats.dmgPct) * (isCrit ? 1.75 : 1));
      this._damageEnemy(target, dmg, isCrit ? 'crit' : 'normal', 'basic');
      this.scene3d.vfx3d.spawn('slash_basic', this.scene3d.getEnemyWorldPos(target.id), this.scene3d.getHeroWorldPos());
      audio.playSwordHit();
    }

    // 自动施放上阵武学
    for (let i = 0; i < 6; i++) {
      if (!gameState.isSlotUnlocked(i)) continue;
      const sl = gameState.state.slots[i];
      if (!sl) continue;
      const m = MARTIAL_BY_ID[sl.skillId];
      if (!m) continue;

      const maxCd = Math.max(2.0, m.cd * stats.cdScale / (1 + stats.haste * 0.45));
      this.hero.skillMaxCds[i] = maxCd;
      this.hero.skillCds[i] -= dt * hasteMult;

      if (this.hero.skillCds[i] <= 0) {
        this.hero.skillCds[i] = maxCd;
        this._castSkill(m, sl.level || 1, aliveEnemies, stats, atkMult);
        break;
      }
    }

    this.cb.onHudSync?.(this.getHudSnapshot());
  }

  _enemyPos2D(e) {
    const p = this.scene3d.getEnemyScreenPos(e.id, this.width, this.height);
    if (p) return p;
    return {
      head: { x: e.x, y: e.y - 50 },
      center: { x: e.x, y: e.y - 20 },
    };
  }

  _castSkill(m, level, aliveEnemies, stats, atkMult) {
    this.hero.animPunch = 1;
    this.hero.castingSkill = m;
    this.hero.castTimer = 0.95;

    // 播放对应门派/武学的原版 3D 骨骼施法动作！
    const animName = (m.vfx === 'fire_blade' || m.vfx === 'fire_arc' || m.vfx === 'dragon_gold') ? 'skill_ranmu'
      : (m.vfx === 'taiji_ink' || m.vfx === 'taiji_blue' || m.vfx === 'taiji_sword') ? 'skill_taiji'
      : (m.vfx === 'sword_rain' || m.vfx === 'sword_gold' || m.vfx === 'sword_pierce' || m.vfx === 'immortal_void') ? 'skill_wanjian'
      : 'skill_beidou';
    this.scene3d.playHeroAnim(animName, false);

    if (m.sfx) audio.playFileSfx(m.sfx, 0.34);
    else audio.playSwordHit();

    const heroPos = this.scene3d.getHeroScreenPos(this.width, this.height);

    if (m.healPct) {
      const heal = Math.round(this.hero.maxHp * m.healPct * (1 + (level - 1) * 0.08));
      this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + heal);
      this.floatTexts.push({
        x: heroPos.head.x,
        y: heroPos.head.y - 16,
        text: `+${heal}`,
        color: '#69f0ae',
        scale: 1.08,
        vy: 42,
        life: 0.9,
      });
    }

    if (m.buff) {
      this.hero.buffs[m.buff.type] = { value: m.buff.value, dur: m.buff.dur };
    }

    const shuffled = aliveEnemies.slice().sort((a, b) => (b.isBoss ? 1 : 0) - (a.isBoss ? 1 : 0));
    const targets = shuffled.slice(0, Math.min(m.targets || 1, shuffled.length));

    // 原版每 5 重阶梯加成 (+13.5% / 阶，对应 DESIGN.md §5.1)
    const tierSteps = Math.floor((level - 1) / 5);
    const lvScale = (1 + (level - 1) * 0.16) * (1 + tierSteps * 0.135);
    const sectBonus = m.sect ? (stats.sectDmgBonus[m.sect] || 0) : 0;
    const totalDmgMult = 1 + stats.dmgPct + sectBonus;

    const heroWorld = this.scene3d.getHeroWorldPos();
    if (targets.length > 0) {
      // 施放一次原版 Unity 3D 招式主特效（3D 刀弧/剑阵/法阵/金龙等！）
      this.scene3d.vfx3d.spawnCast(m.vfx || 'slash_blue', heroWorld, this.scene3d.getEnemyWorldPos(targets[0].id));
    }

    for (const target of targets) {
      const critChance = stats.crit + (m.extraCrit || 0);
      const isCrit = Math.random() < critChance;
      const raw = (stats.atk * atkMult * m.coef + m.flat) * lvScale * totalDmgMult;
      const dmg = Math.round(raw * (0.94 + Math.random() * 0.12) * (isCrit ? 1.8 : 1));
      this._damageEnemy(target, dmg, isCrit ? 'crit' : 'skill', m.id);

      if (m.status) {
        if (m.status.type === 'burn') {
          const dps = stats.atk * m.status.dmgCoef * lvScale * (1 + stats.burnBonus + stats.statusBonus);
          target.burn = { dps, dur: m.status.dur, tick: 0.5, sourceId: m.id };
        } else if (m.status.type === 'poison') {
          const dps = stats.atk * m.status.dmgCoef * lvScale * (1 + stats.statusBonus);
          target.poison = { dps, dur: m.status.dur, tick: 0.5, sourceId: m.id };
        } else if (m.status.type === 'chill') {
          target.chill = Math.max(target.chill, m.status.dur);
        }
      }

      // 每个命中目标播放原版 Unity hit 受击粒子
      this.scene3d.vfx3d.spawn(
        m.vfx || 'slash_blue',
        this.scene3d.getEnemyWorldPos(target.id),
        heroWorld
      );
    }

    // 所有招式施放时均按原版实机（V#5/V#33）在角色旁浮现竖排技能名！
    if (m.quality >= 2) {
      this.shake = m.quality >= 5 ? 7 : m.quality === 4 ? 4.5 : m.quality === 3 ? 2.8 : 1.5;
      this.vfx.push({
        type: 'skill_banner',
        name: m.name,
        color: QUALITIES[m.quality].color,
        x: heroPos.head.x - 42,
        y: heroPos.head.y - 4,
        t: 0,
        dur: 1.05,
      });
    }
  }

  _damageEnemy(e, dmg, kind, sourceId) {
    if (e.hp <= 0) return;
    if (e.delayHp === undefined) e.delayHp = e.hp;
    e.hp = Math.max(0, e.hp - dmg);
    e.hitFlash = 1;
    e.recoil = 8;

    this.totalDmg += dmg;
    if (sourceId) this.dpsMap[sourceId] = (this.dpsMap[sourceId] || 0) + dmg;

    const pos = this._enemyPos2D(e);
    // 1:1 对齐实机截图 V#33 / V#52 飘字颜色与前缀：白字普攻、橙字「灼烧-374」、绿字「蚀毒-xxx」、金字会心
    const colorMap = { normal: '#ffffff', skill: '#fff8dc', crit: '#ffbe4d', burn: '#ff8a3d', poison: '#6ef2a8' };
    const text = kind === 'burn' ? `灼烧-${dmg}`
      : kind === 'poison' ? `蚀毒-${dmg}`
      : kind === 'crit' ? `会心-${dmg}`
      : `-${dmg}`;
    this.floatTexts.push({
      x: pos.head.x + (Math.random() * 34 - 17),
      y: pos.head.y - 10,
      text,
      color: colorMap[kind] || '#ffffff',
      scale: kind === 'crit' ? 1.24 : kind === 'skill' ? 1.06 : 0.92,
      vy: 46 + Math.random() * 14,
      life: 0.85,
    });

    if (e.hp <= 0) {
      this.scene3d.vfx3d.spawn('poof', this.scene3d.getEnemyWorldPos(e.id), this.scene3d.getHeroWorldPos());
    } else if (kind === 'crit' || kind === 'skill') {
      this.scene3d.playEnemyAnim(e.id, 'hurt', false);
    }
  }

  _handleWaveCleared() {
    this.waveIndex += 1;
    if (this.waveIndex < this.waveTotal) {
      this.phase = 'running';
      this.runProgress = 0;
      this.hero.hp = Math.min(this.hero.maxHp, this.hero.hp + Math.round(this.hero.maxHp * 0.14));
      return;
    }

    this.phase = 'settled';
    audio.playVictory();
    if (this.mode === 'travel') {
      this.cb.onTravelVictory?.(this.travelSpot, this.getDpsBreakdown());
      return;
    }
    const res = gameState.onStageVictory(this.stageConfig.index);
    this.cb.onStageVictory?.(res, this.getDpsBreakdown());
  }

  _handleDefeat() {
    this.phase = 'settled';
    audio.playDefeat();
    this.cb.onDefeat?.(this.stageConfig, this.getDpsBreakdown());
  }

  getDpsBreakdown() {
    return Object.entries(this.dpsMap)
      .filter(([id]) => id !== 'basic' && MARTIAL_BY_ID[id])
      .map(([id, dmg]) => ({
        skill: MARTIAL_BY_ID[id],
        dmg,
        pct: this.totalDmg > 0 ? Math.round((dmg / this.totalDmg) * 1000) / 10 : 0,
      }))
      .sort((a, b) => b.dmg - a.dmg);
  }

  render(dt = 0.016) {
    // 1. 渲染底层真 3D WebGL 场景（原版骨骼动画主角 + 原版骨骼动画木人 + 原版 3D 贴图 VFX）
    this.scene3d.syncAndRender(this, dt);

    // 2. 渲染顶层 2D 透明画布（1:1 复刻 003_enter.png 紧凑双条血条 + 延迟白条 ImgDelay + 竖排招式名 + 受击红屏）
    const ctx = this.ctx;
    const W = this.width;
    const H = this.height;
    ctx.clearRect(0, 0, W, H);

    // 复刻 BloodOverlayPlayController：仅主角低血量 (<35%) 受击时边缘轻闪红晕
    if (this.hero.hitFlash > 0.25 && this.hero.hp / Math.max(1, this.hero.maxHp) < 0.35) {
      const a = Math.min(0.22, this.hero.hitFlash * 0.2);
      const vg = ctx.createRadialGradient(W * 0.5, H * 0.42, W * 0.28, W * 0.5, H * 0.42, W * 0.72);
      vg.addColorStop(0, 'rgba(220,30,30,0)');
      vg.addColorStop(1, `rgba(220,35,35,${a})`);
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);
    }

    const hpPos = this.scene3d.getHeroScreenPos(W, H).head;
    this._drawHpBar(ctx, hpPos.x, hpPos.y - 10, 56, 6, this.hero.hp / this.hero.maxHp, this.hero.hp / this.hero.maxHp, true);

    for (const e of this.enemies) {
      if (e.hp <= 0) continue;
      if (e.delayHp === undefined) e.delayHp = e.hp;
      e.delayHp += (e.hp - e.delayHp) * Math.min(1, dt * 6);
      const pos = this._enemyPos2D(e).head;
      const bw = e.isBoss ? 82 : 46;
      const bh = e.isBoss ? 7 : 5;
      this._drawHpBar(
        ctx, pos.x, pos.y - 10,
        bw, bh,
        e.hp / e.maxHp, e.delayHp / e.maxHp,
        false, e.isBoss ? e.name : null
      );
      // 1:1 复刻 003_enter.png / 052_merge_drag.png 血条左下方原版 bufficon 图集小图标！
      let badgeX = pos.x - bw / 2;
      const drawBuff = (key) => {
        const im = BUFF_ICONS[key];
        if (im && im.complete && im.naturalWidth > 0) {
          ctx.drawImage(im, badgeX, pos.y - 3, 13, 13);
          badgeX += 14;
        }
      };
      if (e.chill > 0) drawBuff('jiansu');
      if (e.burn) drawBuff('zhuoshao');
      if (e.poison) drawBuff('zhongdu');
      if (!e.chill && !e.burn && !e.poison && e.hp < e.maxHp * 0.92) drawBuff('fangyu_down');
    }

    // 1:1 复刻实机竖排技能名浮现（V#5 冰魄箭样式：竖向排字 + 柔和阴影）
    for (const v of this.vfx) {
      if (v.type === 'skill_banner') {
        const p = v.t / v.dur;
        const alpha = p < 0.15 ? p / 0.15 : Math.max(0, 1 - (p - 0.55) / 0.45);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.font = '900 15px "Microsoft YaHei", sans-serif';
        ctx.textAlign = 'center';
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = 'rgba(10, 20, 18, 0.9)';
        const chars = Array.from(v.name || '');
        const startY = v.y - p * 14;
        for (let ci = 0; ci < chars.length; ci++) {
          const cy = startY + ci * 17;
          ctx.strokeText(chars[ci], v.x, cy);
          ctx.fillStyle = v.color || '#ffd54f';
          ctx.fillText(chars[ci], v.x, cy);
        }
        ctx.restore();
      }
    }

    for (const f of this.floatTexts) {
      ctx.save();
      ctx.globalAlpha = Math.min(1, f.life * 2.2);
      ctx.font = `900 ${Math.round(15 * f.scale)}px "Microsoft YaHei", sans-serif`;
      ctx.textAlign = 'center';
      ctx.lineWidth = 3.2;
      ctx.strokeStyle = 'rgba(14, 20, 18, 0.88)';
      ctx.strokeText(f.text, f.x, f.y);
      ctx.fillStyle = f.color;
      ctx.fillText(f.text, f.x, f.y);
      ctx.restore();
    }
  }

  _drawHpBar(ctx, cx, cy, bw, bh, pct, delayPct, isHero, bossName = null) {
    const p = Math.max(0, Math.min(1, pct));
    const dp = Math.max(p, Math.min(1, delayPct ?? p));
    ctx.fillStyle = 'rgba(14, 22, 20, 0.85)';
    ctx.beginPath();
    ctx.roundRect(cx - bw / 2 - 1, cy - 1, bw + 2, bh + (isHero ? 5 : 2), 2);
    ctx.fill();
    // 延迟白/金掉血条 (ImgDelay)
    if (!isHero && dp > p + 0.01) {
      ctx.fillStyle = '#ffe5a3';
      ctx.fillRect(cx - bw / 2, cy, bw * dp, bh);
    }
    ctx.fillStyle = isHero ? (p > 0.35 ? '#66f2c7' : '#ff6b6b') : '#f25c54';
    ctx.fillRect(cx - bw / 2, cy, bw * p, bh);
    // 对齐 003_enter.png：主角血条下方带细长浅灰真气/护盾副条
    if (isHero) {
      ctx.fillStyle = 'rgba(180, 210, 205, 0.72)';
      ctx.fillRect(cx - bw / 2, cy + bh + 1, bw * 0.72, 2);
    }

    if (bossName) {
      ctx.font = 'bold 11px "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,0.85)';
      ctx.strokeText(bossName, cx, cy - 5);
      ctx.fillStyle = '#ffe082';
      ctx.fillText(bossName, cx, cy - 5);
    }
  }

  _drawStatusTag(ctx, x, y, icon, bg) {
    ctx.fillStyle = bg;
    ctx.beginPath();
    ctx.roundRect(x - 6, y - 6, 13, 13, 3);
    ctx.fill();
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff';
    ctx.fillText(icon, x + 0.5, y + 3.5);
  }

  _drawVfx(ctx, v) {
    const p = v.t / v.dur;
    ctx.save();
    ctx.globalAlpha = Math.max(0, 1 - p);

    if (v.type === 'skill_banner') {
      ctx.font = '900 16px "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(12,16,18,0.88)';
      const yy = v.y - p * 22;
      ctx.strokeText(`「${v.name}」`, v.x, yy);
      ctx.fillStyle = v.color || '#ffd54f';
      ctx.fillText(`「${v.name}」`, v.x, yy);
      ctx.restore();
      return;
    }

    if (v.type === 'poof') {
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(v.x + Math.cos(ang) * p * 26, v.y + Math.sin(ang) * p * 18, (1 - p) * 9, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      return;
    }

    if (v.type === 'fire_blade' || v.type === 'fire_arc' || v.type === 'phoenix_fire' || v.type === 'palm_fire') {
      ctx.translate(v.x, v.y);
      ctx.strokeStyle = '#ff6d00';
      ctx.lineWidth = 10 * (1 - p * 0.5);
      ctx.beginPath();
      ctx.arc(0, 0, 18 + p * 34, -Math.PI * 0.85, Math.PI * 0.25);
      ctx.stroke();
      ctx.strokeStyle = '#fff176';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, 18 + p * 34, -Math.PI * 0.8, Math.PI * 0.15);
      ctx.stroke();
    } else if (v.type === 'lotus_gold' || v.type === 'lotus_fire' || v.type === 'buddha_palm') {
      const rad = v.type === 'buddha_palm' ? 46 : 24;
      const grad = ctx.createLinearGradient(v.x, v.y - 150, v.x, v.y + 15);
      grad.addColorStop(0, 'rgba(255,235,120,0)');
      grad.addColorStop(0.5, 'rgba(255,213,79,0.78)');
      grad.addColorStop(1, 'rgba(255,152,0,0.92)');
      ctx.fillStyle = grad;
      ctx.fillRect(v.x - rad * (1 - p * 0.3), v.y - 150, rad * 2 * (1 - p * 0.3), 165);
      ctx.strokeStyle = '#fff59d';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(v.x, v.y + 12, rad * (0.6 + p * 0.9), rad * 0.35, 0, 0, Math.PI * 2);
      ctx.stroke();
    } else if (v.type === 'ice_shard' || v.type === 'wave_cyan') {
      ctx.translate(v.x, v.y);
      ctx.fillStyle = '#80deea';
      for (let i = -1; i <= 1; i++) {
        ctx.save();
        ctx.translate(i * 14, -40 + p * 44);
        ctx.beginPath();
        ctx.moveTo(0, 16);
        ctx.lineTo(-6, -12);
        ctx.lineTo(6, -12);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    } else if (v.type === 'taiji_ink' || v.type === 'taiji_blue' || v.type === 'bagua_blue' || v.type === 'taiji_sword' || v.type === 'star_array') {
      ctx.translate(v.x, v.y);
      ctx.rotate(p * Math.PI * 2.5);
      const r = 20 + p * 26;
      ctx.strokeStyle = v.type === 'taiji_ink' ? '#e0f2f1' : '#4fc3f7';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, -r / 2, r / 2, -Math.PI / 2, Math.PI / 2);
      ctx.arc(0, r / 2, r / 2, Math.PI / 2, -Math.PI / 2, true);
      ctx.stroke();
    } else if (v.type === 'sword_rain' || v.type === 'sword_gold' || v.type === 'sword_pierce' || v.type === 'immortal_void') {
      ctx.strokeStyle = v.type === 'immortal_void' ? '#d094ff' : '#ffd54f';
      ctx.lineWidth = 3;
      const cnt = v.type === 'sword_rain' || v.type === 'immortal_void' ? 5 : 2;
      for (let i = 0; i < cnt; i++) {
        const sx = v.x + (i - (cnt - 1) / 2) * 14;
        const sy = v.y - 90 + p * 105;
        ctx.beginPath();
        ctx.moveTo(sx, sy - 26);
        ctx.lineTo(sx, sy + 6);
        ctx.stroke();
      }
    } else if (v.type === 'dragon_gold') {
      ctx.strokeStyle = '#ffca28';
      ctx.lineWidth = 9 * (1 - p * 0.4);
      ctx.beginPath();
      for (let k = 0; k <= 12; k++) {
        const t = k / 12;
        const dx = v.fromX + (v.x - v.fromX) * t + Math.sin(t * 10 + p * 12) * 20;
        const dy = v.fromY + (v.y - v.fromY) * t;
        if (k === 0) ctx.moveTo(dx, dy);
        else ctx.lineTo(dx, dy);
      }
      ctx.stroke();
      ctx.fillStyle = '#fff59d';
      ctx.beginPath();
      ctx.arc(v.x, v.y, 14 + p * 28, 0, Math.PI * 2);
      ctx.fill();
    } else if (v.type === 'thunder_blue') {
      ctx.strokeStyle = '#80d8ff';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(v.x - 10, v.y - 130);
      ctx.lineTo(v.x + 12, v.y - 80);
      ctx.lineTo(v.x - 8, v.y - 40);
      ctx.lineTo(v.x, v.y);
      ctx.stroke();
    } else {
      ctx.translate(v.x, v.y);
      ctx.strokeStyle = v.type === 'whirl_pink' ? '#ff80ab'
        : v.type === 'jade_wind' || v.type === 'vortex_jade' ? '#69f0ae'
        : '#fff59d';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(-20, -14);
      ctx.lineTo(20, 14);
      ctx.moveTo(16, -16);
      ctx.lineTo(-16, 16);
      ctx.stroke();
    }

    ctx.restore();
  }
}
