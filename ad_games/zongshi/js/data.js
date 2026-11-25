// 《宗师之上》本地版核心配置数据 — 映射真实解包美术与音频资源

export const ASSET = {
  sprite: (name) => `./ui_sprites/${name}.png`,
  skill: (id) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/skill/${id}.png`,
  item: (id) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/item/${id}.png`,
  bond: (id) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/kungfulink/${id}.png`,
  equip: (name) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/equip/${name}.png`,
  head: (name) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/head/${name}.png`,
  monster: (name) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/monsterhead/${name}.png`,
  xiuweiBall: (idx) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/xiuwei/player_level_ball_exp_0${idx}.png`,
  uiLarge: (rel) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage_l/${rel}`,
  artMap: (rel) => `./game-assets/textures/assets/artres/art_map/${rel}`,
  // 原版品质边框（q: 0白->idx1, 1绿->idx2, 2蓝->idx3, 3紫->idx4, 4橙->idx5, 5红->idx6）
  qualityBook: (q) => { const n = Math.min(6, Math.max(1, q + 1)); return `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/quality/idx${n}/quality_skill_woodern_0${n}.png`; },
  qualitySlot: (q) => { const n = Math.min(6, Math.max(1, q + 1)); return `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/quality/idx${n}/quality_skill_new_0${n}.png`; },
  qualityOrbRing: (q) => { const n = Math.min(6, Math.max(1, q + 1)); return `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/quality/idx${n}/quality_woodern_item_0${n}.png`; },
  qualitySquare: (q) => { const n = Math.min(6, Math.max(1, q + 1)); return `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/quality/idx${n}/quality_item_square_0${n}.png`; },
  qualityRect: (q) => { const n = Math.min(6, Math.max(1, q + 1)); return `./game-assets/textures/assets/resourcesab/ui_new/uiimage_l/quality/quality_item_rectangle_0${n}.png`; },
  qualityLevelGem: (lv = 1) => {
    const idx = Math.min(6, Math.max(1, Math.floor((lv - 1) / 5) + 1));
    return `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/quality/idx${idx}/quality_skill_level_0${idx}.png`;
  },
  sectTag: (sectId) => {
    const map = { shaolin: '1001', wudang: '2001', xiaoyao: '3001', jiange: '4001', dengxian: '5001' };
    return `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/tag/skill_tag_${map[sectId] || '1001'}.png`;
  },
  bgm: (name) => `./game-assets/audio/assets/resourcesab/audio/bgm/${name}`,
  sfx: (rel) => `./game-assets/audio/assets/resourcesab/audio/sfx/${rel}`,
};

// 品质定义: 0白 1绿 2蓝 3紫 4橙 5红
export const QUALITIES = [
  { id: 0, key: 'white',  name: '白品', short: '白', color: '#cfd8dc', bg: '#5a6870', border: '#b8c4c9', glow: 'rgba(207,216,220,0.45)', orbItem: '1101', bookItem: '71200', mult: 1.0 },
  { id: 1, key: 'green',  name: '绿品', short: '绿', color: '#69db7c', bg: '#265c42', border: '#6bd19c', glow: 'rgba(105,219,124,0.55)', orbItem: '1102', bookItem: '71201', mult: 1.55 },
  { id: 2, key: 'blue',   name: '蓝品', short: '蓝', color: '#5cc8ff', bg: '#1e4a73', border: '#66c2ff', glow: 'rgba(92,200,255,0.58)',  orbItem: '1103', bookItem: '71202', mult: 2.35 },
  { id: 3, key: 'purple', name: '紫品', short: '紫', color: '#c77dff', bg: '#4e2673', border: '#c580ff', glow: 'rgba(199,125,255,0.65)', orbItem: '1104', bookItem: '71203', mult: 3.6 },
  { id: 4, key: 'orange', name: '橙品', short: '橙', color: '#ffa94d', bg: '#733b14', border: '#ffb347', glow: 'rgba(255,169,77,0.72)',  orbItem: '1105', bookItem: '71204', mult: 5.5 },
  { id: 5, key: 'red',    name: '红品', short: '红', color: '#ff5c6c', bg: '#6e1922', border: '#ff6b78', glow: 'rgba(255,92,108,0.8)',   orbItem: '1106', bookItem: '71205', mult: 8.5 },
];

// 五大门派羁绊（完全还原游戏内羁绊设定）
export const SECTS = {
  shaolin: {
    id: 'shaolin',
    name: '少林',
    icon: ASSET.bond('1001'),
    color: '#ff7043',
    badge: '禅',
    tiers: [
      { need: 2, desc: '少林武学伤害提升10%，灼烧伤害提升12%', dmgBonus: 0.10, burnBonus: 0.12 },
      { need: 4, desc: '少林武学伤害提升20%，灼烧伤害提升24%', dmgBonus: 0.20, burnBonus: 0.24 },
    ],
  },
  wudang: {
    id: 'wudang',
    name: '武当',
    icon: ASSET.bond('2001'),
    color: '#4fc3f7',
    badge: '道',
    tiers: [
      { need: 2, desc: '武当武学伤害提升10%，会心率提升17%', dmgBonus: 0.10, critBonus: 0.17 },
      { need: 4, desc: '武当武学伤害提升20%，会心率提升35%', dmgBonus: 0.20, critBonus: 0.35 },
    ],
  },
  jiange: {
    id: 'jiange',
    name: '剑阁',
    icon: ASSET.bond('4001'),
    color: '#ffd54f',
    badge: '剑',
    tiers: [
      { need: 2, desc: '剑阁武学伤害提升10%，攻速提升10%', dmgBonus: 0.10, hasteBonus: 0.10 },
      { need: 4, desc: '剑阁武学伤害提升20%，攻速提升20%', dmgBonus: 0.20, hasteBonus: 0.20 },
    ],
  },
  xiaoyao: {
    id: 'xiaoyao',
    name: '逍遥',
    icon: ASSET.bond('3001'),
    color: '#69f0ae',
    badge: '遥',
    tiers: [
      { need: 2, desc: '逍遥武学伤害提升10%，异常伤害增减伤提升6%', dmgBonus: 0.10, statusBonus: 0.06, dmgReduce: 0.06 },
      { need: 4, desc: '逍遥武学伤害提升20%，异常伤害增减伤提升12%', dmgBonus: 0.20, statusBonus: 0.12, dmgReduce: 0.12 },
    ],
  },
  dengxian: {
    id: 'dengxian',
    name: '登仙',
    icon: ASSET.bond('9001'),
    color: '#ce93d8',
    badge: '仙',
    tiers: [
      { need: 2, desc: '自身所有武学伤害及异常伤害提升20%', allDmgBonus: 0.20, statusBonus: 0.20 },
    ],
  },
};

// 武学库（映射真实技能图标 + 门派 + 冷却 + 特效类型 + 进阶效果）
export const MARTIAL_ARTS = [
  // ---- 绿品 (quality: 1) 基础江湖武学 ----
  {
    id: 'chuanyun', name: '穿云腿', quality: 1, sect: null, icon: ASSET.skill('22010'),
    cd: 4.5, tag: '伤害', targets: 1, coef: 1.05, flat: 60, vfx: 'slash_blue',
    baseHp: 2000, baseAtk: 20, baseDef: 10,
    desc: '对1个目标造成105%攻击+60的伤害',
    adv: [],
  },
  {
    id: 'kaishan', name: '开山掌', quality: 1, sect: null, icon: ASSET.skill('22020'),
    cd: 5.0, tag: '爆发', targets: 1, coef: 1.2, flat: 80, vfx: 'palm_gold',
    baseHp: 2200, baseAtk: 22, baseDef: 10,
    desc: '对1个目标造成120%攻击+80的刚猛掌伤',
    adv: [],
  },
  {
    id: 'feixing', name: '飞星拳', quality: 1, sect: null, icon: ASSET.skill('22030'),
    cd: 4.2, tag: '连击', targets: 2, coef: 0.85, flat: 55, vfx: 'meteor_gold',
    baseHp: 1900, baseAtk: 24, baseDef: 8,
    desc: '挥出流星拳影，对2个目标造成85%攻击+55的伤害',
    adv: [],
  },
  {
    id: 'xuanfeng', name: '旋风掌', quality: 1, sect: null, icon: ASSET.skill('22040'),
    cd: 5.5, tag: '群体', targets: 3, coef: 0.78, flat: 50, vfx: 'whirl_pink',
    baseHp: 2100, baseAtk: 21, baseDef: 11,
    desc: '卷起粉红气旋，对3个目标造成78%攻击+50的伤害',
    adv: [],
  },
  {
    id: 'feibiao', name: '漫天飞镖', quality: 1, sect: null, icon: ASSET.skill('22050'),
    cd: 4.8, tag: '远程', targets: 2, coef: 0.92, flat: 60, vfx: 'dart_cyan',
    baseHp: 1850, baseAtk: 25, baseDef: 8,
    desc: '掷出寒光飞镖，对2个目标造成92%攻击+60的伤害',
    adv: [],
  },

  // ---- 蓝品 (quality: 2) 精妙武学 ----
  {
    id: 'yangjia', name: '杨家枪', quality: 2, sect: null, icon: ASSET.skill('23010'),
    cd: 6.0, tag: '增益', targets: 2, coef: 1.35, flat: 160, buff: { type: 'atkUp', value: 0.12, dur: 4 }, vfx: 'spear_amber',
    baseHp: 4200, baseAtk: 45, baseDef: 16,
    desc: '对2个目标造成135%攻击+160的伤害；自身攻击提升12%，持续4秒',
    adv: ['一阶五重：伤害系数提升15%，攻击提升增至18%'],
  },
  {
    id: 'taiji_round', name: '太极圆转', quality: 2, sect: null, icon: ASSET.skill('23020'),
    cd: 6.5, tag: '护盾', targets: 2, coef: 1.25, flat: 140, healPct: 0.06, vfx: 'taiji_ink',
    baseHp: 4800, baseAtk: 40, baseDef: 22,
    desc: '以柔克刚，对2个目标造成125%攻击+140伤害，并回复6%气血',
    adv: ['一阶五重：回复气血提升至9%，并清除负面效果'],
  },
  {
    id: 'lieyan_dao', name: '烈焰刀', quality: 2, sect: null, icon: ASSET.skill('23030'),
    cd: 6.2, tag: '灼烧', targets: 2, coef: 1.4, flat: 150, status: { type: 'burn', dmgCoef: 0.45, dur: 2 }, vfx: 'fire_arc',
    baseHp: 4000, baseAtk: 48, baseDef: 15,
    desc: '斩出炽烈刀罡，对2个目标造成140%攻击+150伤害并附加2秒【灼烧】',
    adv: ['一阶五重：【灼烧】持续时间延长至3秒'],
  },
  {
    id: 'jinguang', name: '金光佛印', quality: 2, sect: null, icon: ASSET.skill('23050'),
    cd: 7.0, tag: '群体', targets: 3, coef: 1.22, flat: 165, healPct: 0.04, vfx: 'lotus_gold',
    baseHp: 4600, baseAtk: 44, baseDef: 20,
    desc: '降下三道金光佛印，对3个目标造成122%攻击+165伤害并小幅回血',
    adv: ['一阶五重：目标数+1，伤害提升15%'],
  },
  {
    id: 'hanbing', name: '寒冰锥', quality: 2, sect: null, icon: ASSET.skill('23060'),
    cd: 5.8, tag: '控制', targets: 2, coef: 1.38, flat: 155, status: { type: 'chill', slow: 0.35, dur: 3 }, vfx: 'ice_shard',
    baseHp: 4100, baseAtk: 47, baseDef: 16,
    desc: '凝结玄冰尖锥，对2个目标造成138%攻击+155伤害，附加3秒【迟缓】',
    adv: ['一阶五重：对【迟缓】目标额外造成20%伤害'],
  },

  // ---- 紫品 (quality: 3) 门派绝学 ----
  {
    id: 'ranmu', name: '燃木刀法', quality: 3, sect: 'shaolin', icon: ASSET.skill('24010'),
    cd: 8.5, tag: '持续', targets: 3, coef: 2.7, flat: 360, status: { type: 'burn', dmgCoef: 0.80, dur: 2.5 }, vfx: 'fire_blade',
    sfx: ASSET.sfx('animation/character/sfx_chr_male_001@dao_ranmu_24010.ogg'),
    baseHp: 8000, baseAtk: 80, baseDef: 25,
    desc: '对3个目标造成270%攻击+360的伤害；施加1层【灼烧】，每秒受到攻击80%的灼烧伤害，持续2.5秒',
    adv: ['一阶五重：伤害系数提升13.5%，50%概率额外施加1层【灼烧】', '二阶五重：伤害系数提升13.5%，【灼烧】使目标移速降低15%'],
  },
  {
    id: 'fuhu', name: '伏虎罗汉拳', quality: 3, sect: 'shaolin', icon: ASSET.skill('24020'),
    cd: 7.5, tag: '爆发', targets: 2, coef: 2.9, flat: 380, status: { type: 'burn', dmgCoef: 0.65, dur: 2 }, vfx: 'palm_fire',
    baseHp: 8600, baseAtk: 84, baseDef: 28,
    desc: '金刚怒目，对2个目标造成290%攻击+380的伤害并附加【灼烧】',
    adv: ['一阶五重：对已处于【灼烧】的目标必定触发会心'],
  },
  {
    id: 'bengshan', name: '崩山劲', quality: 3, sect: 'shaolin', icon: ASSET.skill('24030'),
    cd: 8.2, tag: '群体', targets: 4, coef: 2.35, flat: 320, status: { type: 'burn', dmgCoef: 0.55, dur: 2.5 }, vfx: 'quake_fire',
    baseHp: 8800, baseAtk: 78, baseDef: 30,
    desc: '震裂大地，对4个目标造成235%攻击+320的烈焰震荡伤害',
    adv: ['一阶五重：附加震慑，降低敌人攻击15%'],
  },
  {
    id: 'liangyi', name: '两仪剑阵', quality: 3, sect: 'wudang', icon: ASSET.skill('24050'),
    cd: 7.8, tag: '会心', targets: 3, coef: 2.55, flat: 340, extraCrit: 0.25, vfx: 'taiji_blue',
    baseHp: 7800, baseAtk: 86, baseDef: 24,
    desc: '布下两仪微尘阵，对3个目标造成255%攻击+340伤害，额外提升25%会心率',
    adv: ['一阶五重：会心伤害额外提升30%'],
  },
  {
    id: 'bagua', name: '八卦游龙掌', quality: 3, sect: 'wudang', icon: ASSET.skill('24070'),
    cd: 7.2, tag: '连击', targets: 3, coef: 2.45, flat: 330, extraCrit: 0.20, vfx: 'bagua_blue',
    baseHp: 8200, baseAtk: 82, baseDef: 26,
    desc: '引动八卦真气，对3个目标造成245%攻击+330伤害，额外20%会心率',
    adv: ['一阶五重：每次会心缩短全技能冷却0.5秒'],
  },
  {
    id: 'taiji_sword', name: '太极剑法', quality: 3, sect: 'wudang', icon: ASSET.skill('24080'),
    cd: 8.0, tag: '全能', targets: 3, coef: 2.6, flat: 350, healPct: 0.08, extraCrit: 0.15, vfx: 'taiji_sword',
    baseHp: 8500, baseAtk: 84, baseDef: 28,
    desc: '剑意圆融，对3个目标造成260%攻击+350伤害并回复8%气血',
    adv: ['一阶五重：伤害系数提升20%，回复量提升至12%'],
  },
  {
    id: 'luoying', name: '落英剑法', quality: 3, sect: 'jiange', icon: ASSET.skill('24090'),
    cd: 6.4, tag: '疾速', targets: 3, coef: 2.25, flat: 310, buff: { type: 'hasteUp', value: 0.15, dur: 4 }, vfx: 'sword_gold',
    baseHp: 7500, baseAtk: 88, baseDef: 22,
    desc: '剑如落英缤纷，对3个目标造成225%攻击+310伤害，自身攻速+15%持续4秒',
    adv: ['一阶五重：冷却缩减1秒'],
  },
  {
    id: 'jinghong', name: '惊鸿剑诀', quality: 3, sect: 'jiange', icon: ASSET.skill('24100'),
    cd: 6.8, tag: '穿透', targets: 2, coef: 2.95, flat: 390, vfx: 'sword_pierce',
    baseHp: 7400, baseAtk: 92, baseDef: 21,
    desc: '一剑惊鸿，对2个目标造成295%攻击+390的凌厉穿透伤害',
    adv: ['一阶五重：无视目标25%防御'],
  },
  {
    id: 'canghai', name: '沧海剑潮', quality: 3, sect: 'jiange', icon: ASSET.skill('24110'),
    cd: 7.5, tag: '群体', targets: 4, coef: 2.3, flat: 325, status: { type: 'chill', slow: 0.3, dur: 2.5 }, vfx: 'wave_cyan',
    baseHp: 7900, baseAtk: 85, baseDef: 24,
    desc: '剑气化作怒涛，对4个目标造成230%攻击+325伤害并附加【迟缓】',
    adv: ['一阶五重：额外追加一道剑浪'],
  },
  {
    id: 'lingbo', name: '凌波微步', quality: 3, sect: 'xiaoyao', icon: ASSET.skill('26130'),
    cd: 7.0, tag: '身法', targets: 3, coef: 2.35, flat: 320, healPct: 0.10, status: { type: 'poison', dmgCoef: 0.70, dur: 3 }, vfx: 'jade_wind',
    baseHp: 8400, baseAtk: 83, baseDef: 27,
    desc: '踏波凌虚，回复10%气血并对3个目标造成235%攻击+320伤害与【蚀毒】',
    adv: ['一阶五重：闪避率提升15%，蚀毒伤害+25%'],
  },

  // ---- 橙品 (quality: 4) 镇派神功 ----
  {
    id: 'liehuo_zhenjue', name: '烈火真诀', quality: 4, sect: 'shaolin', icon: ASSET.skill('25010'),
    cd: 8.5, tag: '灼烧', targets: 4, coef: 3.6, flat: 680, status: { type: 'burn', dmgCoef: 1.25, dur: 3 }, vfx: 'phoenix_fire',
    baseHp: 14500, baseAtk: 155, baseDef: 45,
    desc: '引动达摩真火，对4个目标造成360%攻击+680伤害并施加高额【灼烧】',
    adv: ['一阶五重：灼烧可叠加2层，引爆造成额外爆发'],
  },
  {
    id: 'nianhua', name: '拈花指', quality: 4, sect: 'shaolin', icon: ASSET.skill('25030'),
    cd: 7.6, tag: '破甲', targets: 3, coef: 3.9, flat: 720, status: { type: 'burn', dmgCoef: 1.0, dur: 3 }, vfx: 'lotus_fire',
    baseHp: 14000, baseAtk: 162, baseDef: 42,
    desc: '拈花一笑禅意惊天，对3个目标造成390%攻击+720伤害与【灼烧】',
    adv: ['一阶五重：伤害提升25%'],
  },
  {
    id: 'zhenwu', name: '真武七截阵', quality: 4, sect: 'wudang', icon: ASSET.skill('25050'),
    cd: 8.2, tag: '会心', targets: 4, coef: 3.55, flat: 660, extraCrit: 0.35, vfx: 'star_array',
    baseHp: 14200, baseAtk: 160, baseDef: 44,
    desc: '北斗七星剑阵降临，对4个目标造成355%攻击+660伤害，额外35%会心率',
    adv: ['一阶五重：阵法持续期间全武学会心伤害+40%'],
  },
  {
    id: 'jinglei', name: '掌心惊雷', quality: 4, sect: 'wudang', icon: ASSET.skill('25060'),
    cd: 7.2, tag: '雷法', targets: 3, coef: 3.85, flat: 700, extraCrit: 0.30, vfx: 'thunder_blue',
    baseHp: 13800, baseAtk: 168, baseDef: 40,
    desc: '唤九天雷霆落于掌心，对3个目标造成385%攻击+700雷电伤害',
    adv: ['一阶五重：30%概率麻痹目标1.5秒'],
  },
  {
    id: 'wanjian', name: '万剑归宗', quality: 4, sect: 'jiange', icon: ASSET.skill('25100'),
    cd: 7.5, tag: '剑雨', targets: 5, coef: 3.35, flat: 650, buff: { type: 'hasteUp', value: 0.22, dur: 4 }, vfx: 'sword_rain',
    baseHp: 13600, baseAtk: 170, baseDef: 40,
    desc: '万柄金剑破空齐落，对全体最多5个目标造成335%攻击+650伤害并加速',
    adv: ['一阶五重：剑雨额外追加3道金剑'],
  },
  {
    id: 'beiming', name: '北冥神功', quality: 4, sect: 'xiaoyao', icon: ASSET.skill('26150'),
    cd: 7.8, tag: '吸灵', targets: 4, coef: 3.4, flat: 640, healPct: 0.14, status: { type: 'poison', dmgCoef: 1.15, dur: 3 }, vfx: 'vortex_jade',
    baseHp: 15000, baseAtk: 158, baseDef: 48,
    desc: '运转北冥漩涡，对4个目标造成340%攻击+640伤害、附加【蚀毒】并回复14%气血',
    adv: ['一阶五重：回复量提升至20%'],
  },

  // ---- 红品 (quality: 5) 宗师登仙绝学 ----
  {
    id: 'xianglong', name: '降龙十八掌', quality: 5, sect: 'shaolin', icon: ASSET.skill('27010'),
    cd: 8.5, tag: '绝世', targets: 5, coef: 5.2, flat: 1400, status: { type: 'burn', dmgCoef: 1.8, dur: 3.5 }, vfx: 'dragon_gold',
    sfx: ASSET.sfx('vfx/boss/sfx_eff_chr_xianglong_hit.ogg'),
    baseHp: 26000, baseAtk: 310, baseDef: 85,
    desc: '金龙啸天横扫八荒！对5个目标造成520%攻击+1400毁灭伤害并附加烈焰【灼烧】',
    adv: ['一阶五重：龙威震慑，全体友方武学伤害+25%'],
  },
  {
    id: 'rulai', name: '如来神掌', quality: 5, sect: 'dengxian', icon: ASSET.skill('27020'),
    cd: 9.0, tag: '登仙', targets: 6, coef: 5.6, flat: 1600, healPct: 0.15, vfx: 'buddha_palm',
    baseHp: 28000, baseAtk: 330, baseDef: 95,
    desc: '天降金色佛掌镇压众生！对全场6个目标造成560%攻击+1600伤害并回复15%气血',
    adv: ['一阶五重：佛光普照，无视目标35%防御'],
  },
  {
    id: 'taixu', name: '太虚仙剑域', quality: 5, sect: 'dengxian', icon: ASSET.skill('28020'),
    cd: 8.0, tag: '登仙', targets: 6, coef: 5.4, flat: 1500, extraCrit: 0.40, buff: { type: 'atkUp', value: 0.25, dur: 5 }, vfx: 'immortal_void',
    baseHp: 27000, baseAtk: 340, baseDef: 90,
    desc: '展开太虚星辰剑域，对全场造成540%攻击+1500伤害，会心率+40%且攻击+25%',
    adv: ['一阶五重：剑域星爆额外造成200%真实伤害'],
  },
];

export const MARTIAL_BY_ID = Object.fromEntries(MARTIAL_ARTS.map((m) => [m.id, m]));

// 境界体系（修为突破：从 0 起点「武徒·一重」踏入江湖，突破「武者·一重」解锁紫品武学，严格对齐 018_shimen_xiuwei.png！）
export const REALMS = [
  { id: 0,  name: '武徒·一重', group: '武徒', sub: '初窥门径', needExp: 100,   hp: 7600,  atk: 88,  def: 32,  unlockMaxQuality: 2, unlockSlot6: false, unlockText: '突破武者解锁紫品武学' },
  { id: 1,  name: '武者·一重', group: '武者', sub: '一重/四重', needExp: 300,   hp: 12000, atk: 125, def: 45,  unlockMaxQuality: 3, unlockSlot6: false, unlockText: '解锁领悟紫色武学' },
  { id: 2,  name: '武者·二重', group: '武者', sub: '二重/四重', needExp: 550,   hp: 18000, atk: 175, def: 65,  unlockMaxQuality: 3, unlockSlot6: false, unlockText: '全属性大幅提升' },
  { id: 3,  name: '武者·三重', group: '武者', sub: '三重/四重', needExp: 900,   hp: 26000, atk: 245, def: 90,  unlockMaxQuality: 3, unlockSlot6: false, unlockText: '解锁游历与帮派 · 挂机+25%' },
  { id: 4,  name: '武者·四重', group: '武者', sub: '四重/四重', needExp: 1400,  hp: 36000, atk: 330, def: 120, unlockMaxQuality: 4, unlockSlot6: true,  unlockText: '解锁第6个武学槽位 & 橙品武学！' },
  { id: 5,  name: '侠客·前期', group: '侠客', sub: '前期/圆满', needExp: 2200,  hp: 52000, atk: 460, def: 165, unlockMaxQuality: 4, unlockSlot6: true,  unlockText: '会心率永久 +5%' },
  { id: 6,  name: '侠客·圆满', group: '侠客', sub: '圆满/圆满', needExp: 3400,  hp: 74000, atk: 630, def: 220, unlockMaxQuality: 4, unlockSlot6: true,  unlockText: '解锁游历高级秘境' },
  { id: 7,  name: '宗师·前期', group: '宗师', sub: '前期/圆满', needExp: 5200,  hp: 105000,atk: 880, def: 310, unlockMaxQuality: 5, unlockSlot6: true,  unlockText: '解锁领悟绝世红品武学！' },
  { id: 8,  name: '宗师·圆满', group: '宗师', sub: '圆满/圆满', needExp: 8000,  hp: 150000,atk: 1250,def: 430, unlockMaxQuality: 5, unlockSlot6: true,  unlockText: '全武学伤害永久 +15%' },
  { id: 9,  name: '大宗师',    group: '大宗师', sub: '登峰造极', needExp: 13000, hp: 220000,atk: 1800,def: 620, unlockMaxQuality: 5, unlockSlot6: true,  unlockText: '全技能冷却缩减 10%' },
  { id: 10, name: '宗师之上',  group: '登仙',   sub: '陆地神仙', needExp: 25000, hp: 350000,atk: 2800,def: 950, unlockMaxQuality: 5, unlockSlot6: true,  unlockText: '登临武道绝巅！' },
];

// 5大章节 × 8关卡 = 40关
export const CHAPTERS = [
  {
    id: 1, name: '百溪竹径', theme: 'forest',
    bgm: ASSET.bgm('mus_shanshangliangong_normal.ogg'),
    bossBgm: ASSET.bgm('mus_shanshangliangong_boss.ogg'),
    enemies: [
      { name: '木·壹', modelName: 'mon_muren_001', portrait: ASSET.monster('mon_muren_001') },
      { name: '木·贰', modelName: 'mon_muren_002', portrait: ASSET.monster('mon_muren_002') },
      { name: '木·叁', modelName: 'mon_muren_003', portrait: ASSET.monster('mon_muren_003') },
    ],
    boss: { name: '独臂木侠', modelName: 'boss_dubimuxia_001', portrait: ASSET.monster('boss_dubimuxia_001') },
  },
  {
    id: 2, name: '青木迷径', theme: 'meadow',
    bgm: ASSET.bgm('mus_shanshanglilian_baixicun.ogg'),
    bossBgm: ASSET.bgm('mus_shanshangliangong_boss.ogg'),
    enemies: [
      { name: '木·肆', modelName: 'mon_muren_004', portrait: ASSET.monster('mon_muren_004') },
      { name: '山林恶匪', modelName: 'mon_feitu_001', portrait: ASSET.monster('jy_biaoshi_001') },
      { name: '苍狼妖', modelName: 'mon_jiaolang_001', portrait: ASSET.monster('jy_liuming_001') },
    ],
    boss: { name: '赤鬃野猪王', modelName: 'boss_yezhuwang_001', portrait: ASSET.monster('boss_yezhudx_001') },
  },
  {
    id: 3, name: '剑阁古道', theme: 'autumn',
    bgm: ASSET.bgm('mus_shanshanglilian_jiangeshanzhuang.ogg'),
    bossBgm: ASSET.bgm('mus_boss_combat_normal.ogg'),
    enemies: [
      { name: '木人头领', modelName: 'jy_murentouling_001', portrait: ASSET.monster('jy_murentouling_001') },
      { name: '试剑弟子', modelName: 'mon_dizi_jg_001', portrait: ASSET.monster('jy_dizi_sx_001') },
    ],
    boss: { name: '白虎战灵', modelName: 'boss_baihu_001', portrait: ASSET.monster('boss_baihu_001') },
  },
  {
    id: 4, name: '逍遥雪宫', theme: 'snow',
    bgm: ASSET.bgm('mus_shanshanglilian_xiaoyaoxuegong.ogg'),
    bossBgm: ASSET.bgm('mus_boss_combat_normal.ogg'),
    enemies: [
      { name: '玄冰木傀', modelName: 'mon_muren_005', portrait: ASSET.monster('jy_qianhuanmy_001') },
      { name: '寒宫护卫', modelName: 'mon_dizi_xy_001', portrait: ASSET.monster('jy_dizi_xx_001') },
    ],
    boss: { name: '剑痴独孤涯', modelName: 'boss_duguya_001', portrait: ASSET.monster('boss_duguya_001') },
  },
  {
    id: 5, name: '登仙云崖', theme: 'immortal',
    bgm: ASSET.bgm('mus_shanxialilian_lingxiaoxianyu.ogg'),
    bossBgm: ASSET.bgm('mus_battle_dianfengsai.ogg'),
    enemies: [
      { name: '仙阁守卫', modelName: 'mon_muren_006', portrait: ASSET.monster('jy_dizi_mx_001') },
      { name: '玄冥教众', modelName: 'mon_dizi_mx_001', portrait: ASSET.monster('jy_jymnv_001') },
    ],
    boss: { name: '北丐宗师', modelName: 'boss_hongqigong_001', portrait: ASSET.monster('boss_hongqigong_001') },
  },
];

export function getStageConfig(stageIndex) {
  // stageIndex: 0..39 -> 1-1 .. 5-8
  const idx = Math.max(0, Math.min(39, stageIndex));
  const chapterIdx = Math.floor(idx / 8);
  const subStage = (idx % 8) + 1;
  const chapter = CHAPTERS[chapterIdx];
  const isBossStage = subStage === 8 || subStage === 4;
  const scale = Math.pow(1.27, idx);
  const waveCount = isBossStage ? 1 : Math.min(6, 2 + Math.floor(subStage / 2));

  return {
    index: idx,
    label: `${chapter.id}-${subStage}`,
    tag: isBossStage ? `首领 ${chapter.id}-${subStage}` : `小怪 ${chapter.id}-${subStage}`,
    chapter,
    isBossStage,
    waveCount,
    timeLimit: 120,
    // 适配真正的零起点开局：1-1 小怪血量 420（1门穿云腿即可破敌），1-4 首领独臂木侠需合成上阵 3~4 门武学迎战！
    enemyHp: Math.round((isBossStage ? 2450 : 420) * scale),
    enemyAtk: Math.round((isBossStage ? 115 : 28) * Math.pow(1.19, idx)),
    rewardBooks: isBossStage ? 3 : 2,
    rewardOrbs: isBossStage ? 2 : 1,
    rewardSpiritStone: Math.round((120 + idx * 45) * (isBossStage ? 1.8 : 1)),
    rewardXiuwei: Math.round((35 + idx * 14) * (isBossStage ? 1.8 : 1)),
    dropQuality: idx < 4 ? 1 : idx < 12 ? 2 : idx < 22 ? 3 : 4,
    idleBooksPerDay: 30 + idx * 6,
    idleOrbsPerDay: 20 + idx * 4,
  };
}

// 天书天赋树节点（直接映射原版 icon/book/img_book_node_icon_*.png）
const bookNode = (n) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/book/img_book_node_icon_${n}.png`;
export const TIANSHU_NODES = [
  { id: 'hp_1',    row: 0, col: 1, tier: '基础', name: '养气诀',   icon: bookNode('01'), maxLv: 5, costBase: 80,  stat: 'hp',        perLv: 2500, desc: '每级气血 +2500' },
  { id: 'atk_1',   row: 1, col: 1, tier: '基础', name: '锋刃篇',   icon: bookNode('02'), maxLv: 5, costBase: 100, stat: 'atk',       perLv: 35,   desc: '每级攻击 +35', req: 'hp_1' },
  { id: 'crit_1',  row: 2, col: 0, tier: '高级', name: '破绽洞察', icon: bookNode('03'), maxLv: 5, costBase: 160, stat: 'crit',      perLv: 0.03, desc: '每级会心率 +3%', req: 'atk_1' },
  { id: 'def_1',   row: 2, col: 2, tier: '高级', name: '金钟护体', icon: bookNode('04'), maxLv: 5, costBase: 160, stat: 'def',       perLv: 25,   desc: '每级防御 +25', req: 'atk_1' },
  { id: 'haste_1', row: 3, col: 0, tier: '秘传', name: '疾风心法', icon: bookNode('09'), maxLv: 5, costBase: 260, stat: 'haste',     perLv: 0.04, desc: '每级攻速 +4%', req: 'crit_1' },
  { id: 'burn_1',  row: 3, col: 2, tier: '秘传', name: '三昧真火', icon: bookNode('12'), maxLv: 5, costBase: 260, stat: 'dmgPct',    perLv: 0.05, desc: '每级全武学伤害 +5%', req: 'def_1' },
  { id: 'master',  row: 4, col: 1, tier: '宗师', name: '宗师真意', icon: bookNode('08'), maxLv: 5, costBase: 450, stat: 'allPct',    perLv: 0.08, desc: '每级全基础属性 +8%', req: 'haste_1' },
];

// 装备槽位（对应 006_tab_role.png 的 6装备 + 2饰品）
export const EQUIP_SLOTS = [
  { id: 'weapon',  name: '兵器', group: 'equip',    idx: '01', primary: 'atk' },
  { id: 'helm',    name: '头冠', group: 'equip',    idx: '02', primary: 'hp' },
  { id: 'armor',   name: '道袍', group: 'equip',    idx: '03', primary: 'hp' },
  { id: 'pants',   name: '下装', group: 'equip',    idx: '04', primary: 'def' },
  { id: 'bracer',  name: '护腕', group: 'equip',    idx: '05', primary: 'atk' },
  { id: 'boots',   name: '履靴', group: 'equip',    idx: '06', primary: 'def' },
  { id: 'ring',    name: '指环', group: 'ornament', idx: '07', primary: 'atk' },
  { id: 'pendant', name: '玉佩', group: 'ornament', idx: '08', primary: 'hp' },
];

export const EQUIP_TIERS = [
  { quality: 1, prefix: 'equip_green_',  namePrefix: '青竹' },
  { quality: 2, prefix: 'equip_blue_',   namePrefix: '寒铁' },
  { quality: 3, prefix: 'equip_white_',  namePrefix: '灵玉' },
  { quality: 4, prefix: 'equip_yellow_', namePrefix: '玄金' },
  { quality: 5, prefix: 'equip_red_',    namePrefix: '赤霄' },
];

export function generateEquipment(slotId, quality) {
  const slot = EQUIP_SLOTS.find((s) => s.id === slotId) || EQUIP_SLOTS[Math.floor(Math.random() * EQUIP_SLOTS.length)];
  const tier = EQUIP_TIERS.find((t) => t.quality === quality) || EQUIP_TIERS[0];
  const qMult = QUALITIES[quality]?.mult || 1;
  const roll = 0.9 + Math.random() * 0.25;
  const atk = Math.round((slot.primary === 'atk' ? 42 : 12) * qMult * roll);
  const hp  = Math.round((slot.primary === 'hp'  ? 3600 : 1200) * qMult * roll);
  const def = Math.round((slot.primary === 'def' ? 28 : 9) * qMult * roll);
  return {
    uid: 'eq_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6),
    slotId: slot.id,
    name: `${tier.namePrefix}${slot.name}`,
    quality,
    icon: ASSET.equip(`${tier.prefix}${slot.idx}`),
    atk,
    hp,
    def,
    enhance: 0,
  };
}

// 神兵谱（师门-神兵阁）
export const DIVINE_WEAPONS = [
  { id: 'dao',  name: '赤炎斩马刀', icon: ASSET.uiLarge('weapon/weapon_cutin_dao_04.png'),   atk: 95,  hp: 4500,  bonus: '灼烧伤害 +15%', cost: 300 },
  { id: 'jian', name: '青冥承影剑', icon: ASSET.uiLarge('weapon/weapon_cutin_jian_04.png'),  atk: 120, hp: 5000,  bonus: '会心率 +8%',    cost: 650 },
  { id: 'qian', name: '龙胆亮银枪', icon: ASSET.uiLarge('weapon/weapon_cutin_qiang_04.png'), atk: 160, hp: 7200,  bonus: '攻速 +10%',     cost: 1200 },
  { id: 'qin',  name: '伏羲九霄琴', icon: ASSET.uiLarge('weapon/weapon_cutin_qin_04.png'),   atk: 210, hp: 11000, bonus: '技能伤害 +15%', cost: 2200 },
  { id: 'shan', name: '天青流仙伞', icon: ASSET.uiLarge('weapon/weapon_cutin_san_04.png'),   atk: 300, hp: 16500, bonus: '全属性 +12%',   cost: 4000 },
];

// 游历秘境首领挑战（对应 map_bg_big.png 位置坐标）
export const TRAVEL_SPOTS = [
  { id: 'baixi',    name: '百溪村',   x: 56, y: 79, stageReq: 0,  bossName: '木人头领', modelName: 'jy_murentouling_001', portrait: ASSET.monster('jy_murentouling_001'), powerRec: 50000,  rewardText: '绿/蓝装备 + 混元青×1', rewardQuality: 2, herb: 1, stones: 280 },
  { id: 'qingmu',   name: '青木幽谷', x: 54, y: 58, stageReq: 3,  bossName: '赤鬃野猪王', modelName: 'boss_yezhuwang_001', portrait: ASSET.monster('boss_yezhudx_001'), powerRec: 85000,  rewardText: '蓝/紫装备 + 紫品经验球', rewardQuality: 3, herb: 1, stones: 480 },
  { id: 'shamo',    name: '霜气沙海', x: 26, y: 42, stageReq: 8,  bossName: '玄蝎魔将',   modelName: 'boss_xiezi_001', portrait: ASSET.monster('boss_xiezi_001'),   powerRec: 145000, rewardText: '紫品装备 + 混元青×2', rewardQuality: 3, herb: 2, stones: 750 },
  { id: 'xuegong',  name: '逍遥雪宫', x: 64, y: 35, stageReq: 15, bossName: '白虎战灵',   modelName: 'boss_baihu_001', portrait: ASSET.monster('boss_baihu_001'),   powerRec: 240000, rewardText: '橙品装备 + 橙品武学箱', rewardQuality: 4, herb: 2, stones: 1200 },
  { id: 'dengxian', name: '登仙古坛', x: 50, y: 15, stageReq: 24, bossName: '镇岳剑尊',   modelName: 'boss_zhen_001', portrait: ASSET.monster('boss_zhen_001'),    powerRec: 420000, rewardText: '红品神装 + 红品秘籍', rewardQuality: 5, herb: 3, stones: 2400 },
];

// 主线任务链
export const QUESTS = [
  { id: 'q1', title: '拖拽合成 1 次武学或经验球', type: 'merge', target: 1, reward: { books: 2, stones: 150, desc: '秘籍×2 灵石×150' } },
  { id: 'q2', title: '通关 1-2', type: 'stage', target: 2, reward: { orbs: 2, stones: 200, desc: '蓝品经验球×2 灵石×200' } },
  { id: 'q3', title: '前往师门·修为采集 3 次灵气', type: 'bubble', target: 3, reward: { herbs: 1, stones: 220, desc: '混元青×1 灵石×220' } },
  { id: 'q4', title: '升级任意 1 门上阵武学', type: 'skillUp', target: 1, reward: { books: 3, stones: 280, desc: '秘籍×3 灵石×280' } },
  { id: 'q5', title: '在天书点亮 1 个天赋节点', type: 'tianshu', target: 1, reward: { orbs: 2, stones: 320, desc: '紫品经验球×2 灵石×320' } },
  { id: 'q6', title: '击败 1-4 首领·独臂木侠', type: 'stage', target: 4, reward: { equipQ: 2, books: 3, stones: 400, desc: '蓝品装备 + 秘籍×3' } },
  { id: 'q7', title: '突破境界至【武者·二重】', type: 'realm', target: 1, reward: { purpleSkill: true, stones: 500, desc: '紫品门派绝学×1 灵石×500' } },
  { id: 'q8', title: '激活任意 1 个门派羁绊', type: 'bond', target: 1, reward: { equipQ: 3, herbs: 2, stones: 650, desc: '紫品装备 + 混元青×2' } },
  { id: 'q9', title: '击败 1-8 关底首领进入第二章', type: 'stage', target: 8, reward: { books: 4, orbs: 3, stones: 900, desc: '高阶秘籍×4 灵石×900' } },
  { id: 'q10', title: '突破境界至【武者·四重】解锁6号槽', type: 'realm', target: 3, reward: { orangeSkill: true, stones: 1500, desc: '橙品镇派神功×1 灵石×1500' } },
];
