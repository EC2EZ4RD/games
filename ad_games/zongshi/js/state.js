import {
  QUALITIES, SECTS, MARTIAL_ARTS, MARTIAL_BY_ID, REALMS,
  getStageConfig, TIANSHU_NODES, EQUIP_SLOTS, generateEquipment,
  DIVINE_WEAPONS, QUESTS, ASSET,
} from './data.js?v=14';

const SAVE_KEY = 'zongshi_zero_save_v1';
const LEGACY_KEYS = ['zongshi_local_save_v1'];
export const GRID_SIZE = 18; // 6 cols × 3 rows

function uid(prefix = 'id') {
  return prefix + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
}

export function formatTierName(level) {
  // level 1 -> 一阶一重, level 6 -> 二阶一重
  const cn = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  const stage = Math.floor((level - 1) / 5) + 1;
  const sub = ((level - 1) % 5) + 1;
  return `${cn[stage] || stage}阶${cn[sub] || sub}重`;
}

export function createInitialState() {
  // 100% 真正的「从零开始」初入山门体验：
  // 境界从【武徒·一重 0.00%】起步，关卡从【小怪 1-1】起步，上阵槽仅 1 门入门《穿云腿》，
  // 牌桌仅赠送 4 本绿品基础秘籍 + 2 颗绿品经验球，全身装备/背包/天书/挂机全从零一步步亲手养成！
  const grid = new Array(GRID_SIZE).fill(null);
  grid[0] = { uid: uid('sk'),  kind: 'skill', skillId: 'chuanyun', level: 1 }; // 穿云腿（新手引导二合一）
  grid[1] = { uid: uid('sk'),  kind: 'skill', skillId: 'chuanyun', level: 1 }; // 穿云腿（拖动合成首本蓝品！）
  grid[2] = { uid: uid('sk'),  kind: 'skill', skillId: 'kaishan',  level: 1 }; // 开山掌
  grid[3] = { uid: uid('sk'),  kind: 'skill', skillId: 'kaishan',  level: 1 }; // 开山掌
  grid[4] = { uid: uid('orb'), kind: 'orb',   quality: 1,          count: 1 }; // 武学经验·绿
  grid[5] = { uid: uid('orb'), kind: 'orb',   quality: 1,          count: 1 }; // 武学经验·绿

  return {
    playerName: '嵩山少侠',
    avatar: ASSET.head('chr_male_001'),
    realmIndex: 0,      // 武徒·一重 (0%)
    xiuweiExp: 0,       // 0 修为起步
    spiritStone: 60,    // 师门盘缠 60 灵石（刚好可试手领悟 1 次或留作升天书）
    xianyuan: 0,
    herbs: 0,           // 混元青从「师姐的教诲」任务一步步获取
    tianshuPoints: 0,

    currentStage: 0,    // 第 1 章第 1 关：小怪 1-1
    maxClearedStage: -1,
    battleSpeed: 1,
    mergePity: 1,       // 首合友好体验（75% 升阶率，第二次 100% 保底出蓝品！）

    // 6 个武学上阵槽：仅槽位 1 装备入门《穿云腿》，槽位 2~5 全空 (+)，槽位 6 待武者·四重解锁
    slots: [
      { uid: uid('sl'), skillId: 'chuanyun', level: 1 },
      null,
      null,
      null,
      null,
      null,
    ],

    grid,
    discovered: ['chuanyun', 'kaishan'],
    claimedGifts: [],

    // 天书全节点从 0 级开始
    tianshu: {},

    // 8 大装备/饰品槽与背包全部从空开始（严格对齐 006_tab_role.png 全空 + 槽！）
    equipped: {},
    bagEquips: [],

    // 神兵拥有状态
    ownedWeapons: [],
    activeWeapon: null,

    // 修为树初始灵气泡泡（点破 4 颗即可从【武徒·一重】突破至【武者·一重】解锁紫品武学！）
    bubbles: [
      { id: 1, x: 24, y: 18, val: 26, style: 1 },
      { id: 2, x: 50, y: 20, val: 26, style: 1 },
      { id: 3, x: 18, y: 31, val: 26, style: 1 },
      { id: 4, x: 42, y: 30, val: 28, style: 1 },
      { id: 5, x: 65, y: 34, val: 26, style: 1 },
      { id: 6, x: 80, y: 28, val: 26, style: 1 },
    ],
    herbUsedToday: 0,

    // 挂机收益从 0 秒实时累加
    idleSeconds: 0,
    lastTickAt: Date.now(),

    // 帮派状态
    guildSignedIn: false,
    guildBuffActive: false,
    bestDummyDps: 0,

    // 师姐的教诲章节任务记录（从【武徒篇】起步，领完大奖自动进阶【武者篇】！）
    questIdx: 0,
    claimedChapterTasks: [],
    claimedChapterGrand: [],
    statsCount: {
      merge: 0,
      mergeBlue: 0,
      bubble: 0,
      skillUp: 0,
      tianshu: 0,
    },
  };
}

class GameStateManager {
  constructor() {
    this.state = this.load();
    this.listeners = new Set();
    this.lastPower = 0;
  }

  load() {
    try {
      for (const k of LEGACY_KEYS) localStorage.removeItem(k);
      if (new URLSearchParams(window.location.search).get('reset') === '1') {
        localStorage.removeItem(SAVE_KEY);
      }
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const init = createInitialState();
        return {
          ...init,
          ...parsed,
          statsCount: { ...init.statsCount, ...(parsed.statsCount || {}) },
        };
      }
    } catch {}
    return createInitialState();
  }

  save() {
    try {
      this.state.lastTickAt = Date.now();
      localStorage.setItem(SAVE_KEY, JSON.stringify(this.state));
    } catch {}
  }

  reset() {
    try {
      for (const k of LEGACY_KEYS) localStorage.removeItem(k);
      localStorage.removeItem(SAVE_KEY);
    } catch {}
    this.state = createInitialState();
    this.notify('reset');
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  notify(event = 'update', payload = null) {
    this.save();
    for (const fn of this.listeners) {
      fn(event, payload, this.state);
    }
  }

  getRealm() {
    return REALMS[Math.min(this.state.realmIndex, REALMS.length - 1)];
  }

  isSlotUnlocked(index) {
    if (index < 5) return true;
    return this.getRealm().unlockSlot6 || this.state.maxClearedStage >= 10;
  }

  getActiveBonds() {
    const counts = {};
    for (let i = 0; i < 6; i++) {
      if (!this.isSlotUnlocked(i)) continue;
      const sl = this.state.slots[i];
      if (!sl) continue;
      const def = MARTIAL_BY_ID[sl.skillId];
      if (def?.sect) {
        counts[def.sect] = (counts[def.sect] || 0) + 1;
      }
    }
    const result = {};
    for (const sectId of Object.keys(SECTS)) {
      const sect = SECTS[sectId];
      const c = counts[sectId] || 0;
      let activeTier = null;
      for (const tier of sect.tiers) {
        if (c >= tier.need) activeTier = tier;
      }
      result[sectId] = { sect, count: c, activeTier };
    }
    return result;
  }

  computeStats() {
    const s = this.state;
    const realm = this.getRealm();

    let hp = realm.hp;
    let atk = realm.atk;
    let def = realm.def;
    let crit = 0.08 + (s.realmIndex >= 4 ? 0.05 : 0);
    let haste = 0;
    let dmgPct = s.realmIndex >= 7 ? 0.15 : 0;
    let burnBonus = 0;
    let statusBonus = 0;
    let dmgReduce = 0;
    let allPct = 0;
    let parry = 0.08;

    // 1. 上阵武学属性
    for (let i = 0; i < 6; i++) {
      if (!this.isSlotUnlocked(i)) continue;
      const sl = s.slots[i];
      if (!sl) continue;
      const m = MARTIAL_BY_ID[sl.skillId];
      if (!m) continue;
      const lvMult = 1 + (sl.level - 1) * 0.22;
      hp  += Math.round(m.baseHp * lvMult);
      atk += Math.round(m.baseAtk * lvMult);
      def += Math.round(m.baseDef * lvMult);
    }

    // 2. 装备属性
    for (const slotDef of EQUIP_SLOTS) {
      const eq = s.equipped[slotDef.id];
      if (!eq) continue;
      const eMult = 1 + (eq.enhance || 0) * 0.12;
      hp  += Math.round(eq.hp * eMult);
      atk += Math.round(eq.atk * eMult);
      def += Math.round(eq.def * eMult);
    }

    // 3. 天书属性
    for (const node of TIANSHU_NODES) {
      const lv = s.tianshu[node.id] || 0;
      if (!lv) continue;
      if (node.stat === 'hp') hp += node.perLv * lv;
      if (node.stat === 'atk') atk += node.perLv * lv;
      if (node.stat === 'def') def += node.perLv * lv;
      if (node.stat === 'crit') crit += node.perLv * lv;
      if (node.stat === 'haste') haste += node.perLv * lv;
      if (node.stat === 'dmgPct') dmgPct += node.perLv * lv;
      if (node.stat === 'allPct') allPct += node.perLv * lv;
    }

    // 4. 神兵属性
    for (const wid of s.ownedWeapons) {
      const w = DIVINE_WEAPONS.find((d) => d.id === wid);
      if (!w) continue;
      atk += w.atk;
      hp += w.hp;
      if (wid === 'dao') burnBonus += 0.15;
      if (wid === 'jian') crit += 0.08;
      if (wid === 'qian') haste += 0.10;
      if (wid === 'qin') dmgPct += 0.15;
      if (wid === 'shan') allPct += 0.12;
    }

    // 5. 门派羁绊
    const bonds = this.getActiveBonds();
    const sectDmgBonus = {};
    for (const [sectId, b] of Object.entries(bonds)) {
      if (!b.activeTier) continue;
      const t = b.activeTier;
      if (t.dmgBonus) sectDmgBonus[sectId] = t.dmgBonus;
      if (t.burnBonus) burnBonus += t.burnBonus;
      if (t.critBonus) crit += t.critBonus;
      if (t.hasteBonus) haste += t.hasteBonus;
      if (t.statusBonus) statusBonus += t.statusBonus;
      if (t.dmgReduce) dmgReduce += t.dmgReduce;
      if (t.allDmgBonus) dmgPct += t.allDmgBonus;
    }

    // 6. 帮派练武场增益
    if (s.guildBuffActive) {
      allPct += 0.10;
    }

    // 图谱收集加成（每解锁1门武学全属性+1%）
    allPct += (s.discovered.length || 0) * 0.01;

    hp  = Math.round(hp * (1 + allPct));
    atk = Math.round(atk * (1 + allPct));
    def = Math.round(def * (1 + allPct));

    const cdScale = s.realmIndex >= 8 ? 0.9 : 1.0;

    // 综合战力公式（贴合截图量级：开局约 60,000+）
    let skillPower = 0;
    for (let i = 0; i < 6; i++) {
      if (!this.isSlotUnlocked(i) || !s.slots[i]) continue;
      const m = MARTIAL_BY_ID[s.slots[i].skillId];
      if (!m) continue;
      skillPower += Math.round((m.baseHp * 0.7 + m.baseAtk * 95 + m.baseDef * 60) * (1 + (s.slots[i].level - 1) * 0.25));
    }
    const power = Math.round(hp * 0.45 + atk * 48 + def * 36 + skillPower * 0.65 + (crit * 18000) + (haste * 15000) + (dmgPct * 22000));

    return {
      hp, atk, def,
      qi: 200 + s.realmIndex * 40,
      crit: Math.min(0.85, crit),
      haste: Math.min(0.8, haste),
      dmgPct,
      burnBonus,
      statusBonus,
      dmgReduce: Math.min(0.5, dmgReduce),
      parry,
      cdScale,
      sectDmgBonus,
      bonds,
      power,
    };
  }

  getSkillPower(skillId, level = 1) {
    const m = MARTIAL_BY_ID[skillId];
    if (!m) return 0;
    return Math.round((m.baseHp * 0.75 + m.baseAtk * 78 + m.baseDef * 55) * (1 + (level - 1) * 0.24));
  }

  // ---- 棋盘网格工具 ----
  findEmptyGridSlot() {
    return this.state.grid.findIndex((c) => c === null);
  }

  addGridItem(item) {
    // 经验球优先堆叠或放空位？为了拖拽二合一乐趣，先放空位；如果满了则堆叠同品质经验球
    const idx = this.findEmptyGridSlot();
    if (idx !== -1) {
      this.state.grid[idx] = { ...item, uid: uid(item.kind === 'orb' ? 'orb' : 'sk') };
      if (item.kind === 'skill') this.markDiscovered(item.skillId);
      return idx;
    }
    if (item.kind === 'orb') {
      const same = this.state.grid.findIndex((c) => c && c.kind === 'orb' && c.quality === item.quality);
      if (same !== -1) {
        this.state.grid[same].count = (this.state.grid[same].count || 1) + (item.count || 1);
        return same;
      }
    }
    return -1;
  }

  markDiscovered(skillId) {
    if (!this.state.discovered.includes(skillId)) {
      this.state.discovered.push(skillId);
    }
  }

  randomSkillByQuality(quality, { allowAboveRealm = false } = {}) {
    const maxQ = this.getRealm().unlockMaxQuality;
    const q = allowAboveRealm ? quality : Math.min(quality, maxQ);
    const pool = MARTIAL_ARTS.filter((m) => m.quality === q);
    if (!pool.length) {
      const fallback = MARTIAL_ARTS.filter((m) => m.quality <= q);
      return fallback[Math.floor(Math.random() * fallback.length)];
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  getMergeSuccessRate() {
    return Math.min(1.0, 0.5 + (this.state.mergePity || 0) * 0.25);
  }

  // 对照 004_battle_t6.png：天书与修为实时评级（凡 / 良 / 优 / 绝）
  getGrowthRatings() {
    const s = this.state;
    const targetLv = Math.max(2, Math.floor(s.currentStage / 2) + 2);
    const tsTotal = Object.values(s.tianshu || {}).reduce((a, b) => a + b, 0);
    const tsRatio = tsTotal / targetLv;
    const realmRatio = (s.realmIndex + 1) / Math.max(1, Math.floor(s.currentStage / 4) + 1);
    const toGrade = (r) => r >= 1.35 ? { label: '绝', color: '#f59e0b' }
      : r >= 0.95 ? { label: '优', color: '#a855f7' }
      : r >= 0.60 ? { label: '良', color: '#22c55e' }
      : { label: '凡', color: '#94a3b8' };
    return {
      tianshu: toGrade(tsRatio),
      xiuwei: toGrade(realmRatio),
    };
  }

  // ---- 核心操作：拖拽棋盘 -> 棋盘（合成/交换） ----
  handleGridToGrid(fromIdx, toIdx) {
    if (fromIdx === toIdx) return { ok: false };
    const a = this.state.grid[fromIdx];
    const b = this.state.grid[toIdx];
    if (!a) return { ok: false };

    // 移动到空位
    if (!b) {
      this.state.grid[toIdx] = a;
      this.state.grid[fromIdx] = null;
      this.notify('grid');
      return { ok: true, action: 'move' };
    }

    // 情况1：经验球 + 经验球（同品质 -> 合成高一品质经验球！）
    if (a.kind === 'orb' && b.kind === 'orb' && a.quality === b.quality && a.quality < 5) {
      const nextQ = a.quality + 1;
      this._consumeGridCell(fromIdx);
      this._consumeGridCell(toIdx);
      this.state.grid[toIdx] = { uid: uid('orb'), kind: 'orb', quality: nextQ, count: 1 };
      this.state.statsCount.merge++;
      this.notify('merge_orb', { quality: nextQ, toIdx });
      return { ok: true, action: 'merge_orb', quality: nextQ };
    }

    // 情况2：经验球 拖到 棋盘上的同品质武学 -> 直接提升武学重数！
    if (a.kind === 'orb' && b.kind === 'skill') {
      const def = MARTIAL_BY_ID[b.skillId];
      if (def && def.quality === a.quality) {
        b.level = (b.level || 1) + 1;
        this._consumeGridCell(fromIdx);
        this.state.statsCount.skillUp++;
        this.notify('skill_up', { skillId: b.skillId, level: b.level });
        return { ok: true, action: 'skill_up', skillId: b.skillId, level: b.level };
      }
    }

    // 情况3：武学 + 武学（同品质 -> 原版 50% + 25% 保底升阶领悟机制！）
    if (a.kind === 'skill' && b.kind === 'skill') {
      const defA = MARTIAL_BY_ID[a.skillId];
      const defB = MARTIAL_BY_ID[b.skillId];
      if (defA && defB && defA.quality === defB.quality) {
        const maxQ = this.getRealm().unlockMaxQuality;
        if (defA.quality < 5 && defA.quality + 1 <= maxQ) {
          const rate = this.getMergeSuccessRate();
          const upgraded = Math.random() < rate;
          const outQ = upgraded ? defA.quality + 1 : defA.quality;
          if (upgraded) {
            this.state.mergePity = 0;
          } else {
            this.state.mergePity = Math.min(2, (this.state.mergePity || 0) + 1);
          }
          const nextSkill = this.randomSkillByQuality(outQ);
          this.state.grid[fromIdx] = null;
          this.state.grid[toIdx] = { uid: uid('sk'), kind: 'skill', skillId: nextSkill.id, level: 1 };
          this.markDiscovered(nextSkill.id);
          this.state.statsCount.merge++;
          if (nextSkill.quality >= 2) {
            this.state.statsCount.mergeBlue = (this.state.statsCount.mergeBlue || 0) + 1;
          }
          this.notify('merge_skill', { skill: nextSkill, toIdx, upgraded });
          return { ok: true, action: 'merge_skill', skill: nextSkill, upgraded, nextRate: this.getMergeSuccessRate() };
        }
        // 如果已达当前境界上限但两者是同一门武学 -> 升重！
        if (a.skillId === b.skillId) {
          b.level = (b.level || 1) + (a.level || 1);
          this.state.grid[fromIdx] = null;
          this.state.statsCount.merge++;
          this.state.statsCount.skillUp++;
          this.notify('skill_up', { skillId: b.skillId, level: b.level });
          return { ok: true, action: 'skill_up', skillId: b.skillId, level: b.level };
        }
        return { ok: false, reason: `需突破境界方可领悟${QUALITIES[defA.quality + 1]?.name || '更高品'}武学！` };
      }
    }

    // 默认：交换位置
    this.state.grid[toIdx] = a;
    this.state.grid[fromIdx] = b;
    this.notify('grid');
    return { ok: true, action: 'swap' };
  }

  // ---- 核心操作：拖拽棋盘 -> 上阵武学槽 ----
  handleGridToSlot(fromIdx, slotIdx) {
    if (!this.isSlotUnlocked(slotIdx)) {
      return { ok: false, reason: '境界达到【武者·四重】解锁第6个武学槽位' };
    }
    const item = this.state.grid[fromIdx];
    if (!item) return { ok: false };
    const slot = this.state.slots[slotIdx];

    // 1. 经验球 -> 上阵武学槽：升级该武学！
    if (item.kind === 'orb') {
      if (!slot) return { ok: false, reason: '该槽位尚未上阵武学' };
      const def = MARTIAL_BY_ID[slot.skillId];
      if (!def) return { ok: false };
      if (item.quality < def.quality) {
        return { ok: false, reason: `需要【${QUALITIES[def.quality].name}】及以上经验球才能升级《${def.name}》` };
      }
      const gain = item.quality > def.quality ? 2 : 1;
      slot.level = (slot.level || 1) + gain;
      this._consumeGridCell(fromIdx);
      this.state.statsCount.skillUp++;
      this.notify('skill_up', { skillId: slot.skillId, level: slot.level, slotIdx });
      return { ok: true, action: 'skill_up', skillId: slot.skillId, level: slot.level };
    }

    // 2. 武学卡 -> 上阵武学槽
    if (item.kind === 'skill') {
      if (!slot) {
        this.state.slots[slotIdx] = { uid: uid('sl'), skillId: item.skillId, level: item.level || 1 };
        this.state.grid[fromIdx] = null;
        this.notify('equip_skill', { slotIdx });
        return { ok: true, action: 'equip' };
      }
      // 同一门武学 -> 吞噬升重！
      if (slot.skillId === item.skillId) {
        slot.level = (slot.level || 1) + (item.level || 1);
        this.state.grid[fromIdx] = null;
        this.state.statsCount.skillUp++;
        this.notify('skill_up', { skillId: slot.skillId, level: slot.level, slotIdx });
        return { ok: true, action: 'skill_up', skillId: slot.skillId, level: slot.level };
      }
      // 不同武学 -> 替换上阵（原武学退回棋盘）
      const prev = { uid: uid('sk'), kind: 'skill', skillId: slot.skillId, level: slot.level || 1 };
      this.state.slots[slotIdx] = { uid: uid('sl'), skillId: item.skillId, level: item.level || 1 };
      this.state.grid[fromIdx] = prev;
      this.notify('equip_skill', { slotIdx });
      return { ok: true, action: 'replace' };
    }
    return { ok: false };
  }

  _consumeGridCell(idx) {
    const c = this.state.grid[idx];
    if (!c) return;
    if (c.kind === 'orb' && (c.count || 1) > 1) {
      c.count -= 1;
    } else {
      this.state.grid[idx] = null;
    }
  }

  // 一键智能合成（找出棋盘中可二合一的经验球或武学）
  autoMergeOnce() {
    const g = this.state.grid;
    const maxQ = this.getRealm().unlockMaxQuality;
    // 优先合成同品质武学
    for (let i = 0; i < g.length; i++) {
      if (!g[i] || g[i].kind !== 'skill') continue;
      const qA = MARTIAL_BY_ID[g[i].skillId]?.quality;
      if (qA === undefined || qA >= 5 || qA + 1 > maxQ) continue;
      for (let j = i + 1; j < g.length; j++) {
        if (!g[j] || g[j].kind !== 'skill') continue;
        const qB = MARTIAL_BY_ID[g[j].skillId]?.quality;
        if (qA === qB) {
          return this.handleGridToGrid(i, j);
        }
      }
    }
    // 其次合成同品质经验球
    for (let i = 0; i < g.length; i++) {
      if (!g[i] || g[i].kind !== 'orb' || g[i].quality >= 5) continue;
      if ((g[i].count || 1) >= 2) {
        g[i].count -= 2;
        const nextQ = g[i].quality + 1;
        if (g[i].count <= 0) g[i] = null;
        this.addGridItem({ kind: 'orb', quality: nextQ, count: 1 });
        this.state.statsCount.merge++;
        this.notify('merge_orb', { quality: nextQ });
        return { ok: true, action: 'merge_orb', quality: nextQ };
      }
      for (let j = i + 1; j < g.length; j++) {
        if (!g[j] || g[j].kind !== 'orb') continue;
        if (g[i].quality === g[j].quality) {
          return this.handleGridToGrid(i, j);
        }
      }
    }
    return { ok: false, reason: '暂无可直接合成的同品武学或经验球' };
  }

  // 研习/领悟秘籍（消耗灵石在棋盘生成武学+经验球）
  comprehendManual() {
    const cost = 60;
    if (this.state.spiritStone < cost) {
      return { ok: false, reason: `灵石不足（需要 ${cost} 灵石）` };
    }
    if (this.findEmptyGridSlot() === -1) {
      return { ok: false, reason: '棋盘已满，请先拖拽合成腾出空位！' };
    }
    this.state.spiritStone -= cost;
    const maxQ = this.getRealm().unlockMaxQuality;
    const r = Math.random();
    let q = 1;
    if (r < 0.06 && maxQ >= 4) q = 4;
    else if (r < 0.22 && maxQ >= 3) q = 3;
    else if (r < 0.56) q = 2;

    const sk = this.randomSkillByQuality(q);
    this.addGridItem({ kind: 'skill', skillId: sk.id, level: 1 });
    // 40%概率附赠一颗经验球
    if (Math.random() < 0.45) {
      this.addGridItem({ kind: 'orb', quality: Math.min(q, 3), count: 1 });
    }
    this.notify('comprehend', { skill: sk });
    return { ok: true, skill: sk };
  }

  // 转换/转修某门武学（同品质随机换另一门，方便凑门派羁绊！）
  rerollSkill(location, index) {
    const cost = 50;
    if (this.state.spiritStone < cost) {
      return { ok: false, reason: `灵石不足（需要 ${cost} 灵石）` };
    }
    const target = location === 'slot' ? this.state.slots[index] : this.state.grid[index];
    if (!target || (location === 'grid' && target.kind !== 'skill')) return { ok: false };
    const cur = MARTIAL_BY_ID[target.skillId];
    const pool = MARTIAL_ARTS.filter((m) => m.quality === cur.quality && m.id !== cur.id);
    if (!pool.length) return { ok: false, reason: '暂无可转修的同品武学' };
    this.state.spiritStone -= cost;
    const next = pool[Math.floor(Math.random() * pool.length)];
    target.skillId = next.id;
    this.markDiscovered(next.id);
    this.notify('reroll', { skill: next });
    return { ok: true, skill: next };
  }

  // ---- 修为气泡与境界突破 ----
  popBubble(bubbleId) {
    const idx = this.state.bubbles.findIndex((b) => b.id === bubbleId);
    if (idx === -1) return null;
    const b = this.state.bubbles[idx];
    this.state.bubbles.splice(idx, 1);
    const gain = Math.round(b.val * (1 + this.state.realmIndex * 0.35));
    this.state.xiuweiExp += gain;
    this.state.statsCount.bubble++;
    this.notify('bubble_pop', { gain, bubble: b });
    return gain;
  }

  respawnBubblesIfNeeded() {
    if (this.state.bubbles.length >= 7) return;
    const positions = [
      [22, 18], [52, 20], [74, 24], [18, 32], [44, 30], [66, 36], [28, 44], [80, 41],
    ];
    const used = this.state.bubbles.map((b) => `${b.x},${b.y}`);
    const avail = positions.filter(([x, y]) => !used.includes(`${x},${y}`));
    const pick = avail[Math.floor(Math.random() * avail.length)] || [25 + Math.random() * 55, 18 + Math.random() * 26];
    const roll = Math.random();
    const style = roll < 0.12 ? 4 : roll < 0.32 ? 3 : 1;
    const val = style === 4 ? 52 : style === 3 ? 36 : 26;
    this.state.bubbles.push({
      id: Date.now() + Math.floor(Math.random() * 999),
      x: pick[0],
      y: pick[1],
      val,
      style,
    });
  }

  useHerb() {
    if (this.state.herbs <= 0) return { ok: false, reason: '混元青不足，可通过游历首领或任务获取！' };
    this.state.herbs -= 1;
    this.state.herbUsedToday += 1;
    const realm = this.getRealm();
    const gain = Math.max(95, Math.round(realm.needExp * 0.35));
    this.state.xiuweiExp += gain;
    this.notify('herb', { gain });
    return { ok: true, gain };
  }

  canBreakthrough() {
    const realm = this.getRealm();
    return this.state.realmIndex < REALMS.length - 1 && this.state.xiuweiExp >= realm.needExp;
  }

  breakthrough() {
    if (!this.canBreakthrough()) return { ok: false };
    const cur = this.getRealm();
    this.state.xiuweiExp = Math.max(0, this.state.xiuweiExp - cur.needExp);
    this.state.realmIndex += 1;
    this.state.tianshuPoints += 2;
    this.state.spiritStone += 200;
    const next = this.getRealm();
    this.notify('breakthrough', { realm: next });
    return { ok: true, realm: next };
  }

  // ---- 天书升级 ----
  upgradeTianshu(nodeId) {
    const node = TIANSHU_NODES.find((n) => n.id === nodeId);
    if (!node) return { ok: false };
    const lv = this.state.tianshu[nodeId] || 0;
    if (lv >= node.maxLv) return { ok: false, reason: '该天赋已圆满！' };
    if (node.req && (this.state.tianshu[node.req] || 0) < 1) {
      return { ok: false, reason: '请先点亮前置节点！' };
    }
    const cost = node.costBase * (lv + 1);
    if (this.state.spiritStone < cost) {
      return { ok: false, reason: `灵石不足（需要 ${cost} 灵石）` };
    }
    this.state.spiritStone -= cost;
    this.state.tianshu[nodeId] = lv + 1;
    this.state.statsCount.tianshu++;
    this.notify('tianshu', { node, lv: lv + 1 });
    return { ok: true, lv: lv + 1 };
  }

  // ---- 神兵锻造 ----
  forgeWeapon(weaponId) {
    const w = DIVINE_WEAPONS.find((d) => d.id === weaponId);
    if (!w) return { ok: false };
    if (this.state.ownedWeapons.includes(weaponId)) {
      this.state.activeWeapon = weaponId;
      this.notify('weapon');
      return { ok: true, equipped: true };
    }
    if (this.state.spiritStone < w.cost) {
      return { ok: false, reason: `灵石不足（需要 ${w.cost} 灵石）` };
    }
    this.state.spiritStone -= w.cost;
    this.state.ownedWeapons.push(weaponId);
    this.state.activeWeapon = weaponId;
    this.notify('weapon', { forged: w });
    return { ok: true, forged: w };
  }

  // ---- 装备穿戴与一键穿戴 ----
  equipItem(eqUid) {
    const idx = this.state.bagEquips.findIndex((e) => e.uid === eqUid);
    if (idx === -1) return false;
    const eq = this.state.bagEquips[idx];
    const prev = this.state.equipped[eq.slotId];
    this.state.equipped[eq.slotId] = eq;
    this.state.bagEquips.splice(idx, 1);
    if (prev) this.state.bagEquips.push(prev);
    this.notify('equip');
    return true;
  }

  equipBestAll() {
    let changed = false;
    const score = (e) => e.hp * 0.5 + e.atk * 50 + e.def * 38;
    for (const slotDef of EQUIP_SLOTS) {
      const candidates = this.state.bagEquips.filter((e) => e.slotId === slotDef.id);
      if (!candidates.length) continue;
      candidates.sort((a, b) => score(b) - score(a));
      const best = candidates[0];
      const cur = this.state.equipped[slotDef.id];
      if (!cur || score(best) > score(cur)) {
        this.equipItem(best.uid);
        changed = true;
      }
    }
    return changed;
  }

  enhanceEquip(slotId) {
    const eq = this.state.equipped[slotId];
    if (!eq) return { ok: false };
    const cost = 80 + (eq.enhance || 0) * 65;
    if (this.state.spiritStone < cost) return { ok: false, reason: `灵石不足（需要 ${cost}）` };
    this.state.spiritStone -= cost;
    eq.enhance = (eq.enhance || 0) + 1;
    this.notify('equip');
    return { ok: true, enhance: eq.enhance };
  }

  // ---- 挂机奖励 ----
  getIdlePreview() {
    const st = getStageConfig(Math.max(0, this.state.maxClearedStage + 1));
    const sec = Math.min(86400, this.state.idleSeconds);
    const realmBonus = this.state.realmIndex >= 2 ? 1.25 : 1.0;
    const books = Math.max(0, Math.floor((sec / 360) * realmBonus) + (sec >= 90 ? 1 : 0));
    const orbs = Math.max(0, Math.floor((sec / 480) * realmBonus) + (sec >= 150 ? 1 : 0));
    const stones = Math.floor(sec * (0.45 + st.index * 0.08) * realmBonus);
    const xiuwei = Math.floor(sec * (0.18 + st.index * 0.04) * realmBonus);
    return { sec, books, orbs, stones, xiuwei, st };
  }

  claimIdleRewards() {
    const info = this.getIdlePreview();
    if (info.sec < 30) return { ok: false, reason: '挂机时间不足 30 秒，请稍后再来收获~' };
    this.state.idleSeconds = 0;
    this.state.spiritStone += info.stones;
    this.state.xiuweiExp += info.xiuwei;
    const dropQ = Math.min(this.getRealm().unlockMaxQuality, info.st.dropQuality);
    let addedBooks = 0;
    for (let i = 0; i < Math.min(4, info.books); i++) {
      const sk = this.randomSkillByQuality(Math.max(1, dropQ - (Math.random() < 0.65 ? 1 : 0)));
      if (this.addGridItem({ kind: 'skill', skillId: sk.id, level: 1 }) !== -1) addedBooks++;
    }
    for (let i = 0; i < Math.min(4, info.orbs); i++) {
      this.addGridItem({ kind: 'orb', quality: Math.max(1, Math.min(3, dropQ)), count: 1 });
    }
    this.notify('idle_claim', info);
    return { ok: true, info, addedBooks };
  }

  // ---- 通关结算 ----
  onStageVictory(stageIdx) {
    const st = getStageConfig(stageIdx);
    const isFirst = stageIdx > this.state.maxClearedStage;
    if (isFirst) this.state.maxClearedStage = stageIdx;

    this.state.spiritStone += st.rewardSpiritStone;
    this.state.xiuweiExp += st.rewardXiuwei;
    if (st.isBossStage && isFirst) {
      this.state.herbs += 1;
      const eq = generateEquipment(null, Math.min(5, st.dropQuality + (Math.random() < 0.35 ? 1 : 0)));
      this.state.bagEquips.push(eq);
    }

    const droppedSkills = [];
    for (let i = 0; i < st.rewardBooks; i++) {
      const q = Math.max(1, Math.min(this.getRealm().unlockMaxQuality, st.dropQuality - (Math.random() < 0.7 ? 1 : 0)));
      const sk = this.randomSkillByQuality(q);
      if (this.addGridItem({ kind: 'skill', skillId: sk.id, level: 1 }) !== -1) {
        droppedSkills.push(sk);
      }
    }
    for (let i = 0; i < st.rewardOrbs; i++) {
      this.addGridItem({ kind: 'orb', quality: Math.max(1, Math.min(3, st.dropQuality)), count: 1 });
    }

    if (stageIdx === this.state.currentStage && this.state.currentStage < 39) {
      this.state.currentStage += 1;
    }
    this.notify('stage_win', { st, droppedSkills, isFirst });
    return { st, droppedSkills, isFirst };
  }

  // ---- 主线任务进度 ----
  getCurrentQuest() {
    if (this.state.questIdx >= QUESTS.length) return null;
    const q = QUESTS[this.state.questIdx];
    let cur = 0;
    if (q.type === 'merge') cur = this.state.statsCount.merge;
    if (q.type === 'bubble') cur = this.state.statsCount.bubble;
    if (q.type === 'skillUp') cur = this.state.statsCount.skillUp;
    if (q.type === 'tianshu') cur = this.state.statsCount.tianshu;
    if (q.type === 'stage') cur = this.state.maxClearedStage + 1;
    if (q.type === 'realm') cur = this.state.realmIndex;
    if (q.type === 'bond') {
      const bonds = this.getActiveBonds();
      cur = Object.values(bonds).filter((b) => b.activeTier).length;
    }
    return { ...q, cur, done: cur >= q.target };
  }

  claimCurrentQuest() {
    const q = this.getCurrentQuest();
    if (!q || !q.done) return null;
    const r = q.reward;
    if (r.stones) this.state.spiritStone += r.stones;
    if (r.herbs) this.state.herbs += r.herbs;
    if (r.books) {
      for (let i = 0; i < r.books; i++) {
        const sk = this.randomSkillByQuality(1 + (Math.random() < 0.35 ? 1 : 0));
        this.addGridItem({ kind: 'skill', skillId: sk.id, level: 1 });
      }
    }
    if (r.orbs) {
      for (let i = 0; i < r.orbs; i++) {
        this.addGridItem({ kind: 'orb', quality: 2, count: 1 });
      }
    }
    if (r.equipQ) {
      this.state.bagEquips.push(generateEquipment(null, r.equipQ));
    }
    if (r.purpleSkill) {
      const sk = this.randomSkillByQuality(3);
      this.addGridItem({ kind: 'skill', skillId: sk.id, level: 1 });
    }
    if (r.orangeSkill) {
      const sk = this.randomSkillByQuality(4);
      this.addGridItem({ kind: 'skill', skillId: sk.id, level: 1 });
    }
    this.state.questIdx += 1;
    this.notify('quest_claim', q);
    return q;
  }

  // ---- 本地体验助手功能（方便玩家自由试玩高阶内容） ----
  sandboxGiftPack() {
    this.state.spiritStone += 2000;
    this.state.herbs += 5;
    this.state.xiuweiExp += 350;
    for (let i = 0; i < 3; i++) {
      const sk = this.randomSkillByQuality(Math.min(this.getRealm().unlockMaxQuality, 2 + (i === 2 ? 1 : 0)));
      this.addGridItem({ kind: 'skill', skillId: sk.id, level: 1 });
    }
    this.addGridItem({ kind: 'orb', quality: 3, count: 2 });
    this.state.bagEquips.push(generateEquipment(null, 3));
    this.notify('sandbox');
  }

  sandboxSpawnHighSkills() {
    if (this.state.realmIndex < 6) {
      this.state.realmIndex = 6; // 解锁红品和6号槽
    }
    const showcase = ['xianglong', 'wanjian', 'zhenwu', 'rulai'];
    const pick = showcase[Math.floor(Math.random() * showcase.length)];
    const m = MARTIAL_BY_ID[pick];
    this.addGridItem({ kind: 'skill', skillId: m.id, level: 1 });
    this.addGridItem({ kind: 'orb', quality: m.quality, count: 1 });
    this.notify('sandbox', { skill: m });
    return m;
  }
}

export const gameState = new GameStateManager();
