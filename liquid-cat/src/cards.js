// Roguelike cards offered between stages. rarity: 0 普通, 1 稀有, 2 传说. once: can be taken only once per run.
export const RARITY = [
  { name: '普通', color: '#4FA3FF', weight: 6 },
  { name: '稀有', color: '#B98CFF', weight: 3 },
  { name: '传说', color: '#FFB020', weight: 1 },
];

export const CARDS = [
  { id: 'boop', name: '戳戳手指', desc: '戳一戳 +3 次', rarity: 0, apply: r => { r.charges.boop += 3; } },
  { id: 'split', name: '撸猫达人', desc: '撸一撸 +2 次', rarity: 0, apply: r => { r.charges.split += 2; } },
  { id: 'shake', name: '摇摇乐', desc: '摇一摇 +2 次', rarity: 0, apply: r => { r.charges.shake += 2; } },
  { id: 'catnip', name: '猫薄荷', desc: '接下来 3 只是彩虹猫，能和任何猫合成', rarity: 1, apply: r => { r.wildNext += 3; } },
  { id: 'magnet', name: '逗猫棒', desc: '相同数字的猫会互相靠近', rarity: 1, once: true, apply: r => { r.mods.magnet = true; } },
  { id: 'bigger', name: '猫粮加量', desc: '不再掉落最小的 2 号猫', rarity: 2, once: true, apply: r => { r.mods.minLevel = 1; } },
  { id: 'calm', name: '佛系猫', desc: '溢出倒计时 3 秒变成 5 秒', rarity: 1, once: true, apply: r => { r.mods.overLimit = 5; } },
  { id: 'combo', name: '连锁喵喵', desc: '连击加分翻倍', rarity: 0, once: true, apply: r => { r.mods.comboMul = 2; } },
  { id: 'peek', name: '未卜先知', desc: '能看到后面 3 只猫', rarity: 0, once: true, apply: r => { r.mods.preview = 3; } },
  { id: 'lucky', name: '幸运猫爪', desc: '以后每次多一张卡可选', rarity: 2, once: true, apply: r => { r.mods.choices = 4; } },
  { id: 'gold', name: '招财', desc: '之后得分 +30%', rarity: 1, apply: r => { r.mods.scoreMul += 0.3; } },
  { id: 'leap', name: '猫猫跃迁', desc: '合成时 15% 几率直接跳两级', rarity: 2, once: true, apply: r => { r.mods.leap = 0.15; } },
];

// Pick n different cards, weighted by rarity, skipping once-cards already taken.
export function offerCards(rng, taken, n) {
  const pool = CARDS.filter(c => !(c.once && taken.includes(c.id)));
  const out = [];
  while (out.length < n && pool.length) {
    let sum = 0;
    for (const c of pool) sum += RARITY[c.rarity].weight;
    let r = rng() * sum, k = 0;
    for (; k < pool.length - 1; k++) { r -= RARITY[pool[k].rarity].weight; if (r <= 0) break; }
    out.push(pool.splice(k, 1)[0]);
  }
  return out;
}
