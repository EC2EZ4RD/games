// Game rules: a run of stages (containers), merging and scoring, touch tools, cards, daily seed, saving.
import { STEP, HALF, VALUES, MAX_LEVEL, OVER_LIMIT, CATS } from './config.js';
import { clamp, makeRng, store, today } from './util.js';
import { world, Blob, tune, step, setColliders, clearWorld, shake, inPoly, addHolderStrand, stickPair } from './physics.js';
import { MAPS, STAGES, buildMap } from './maps.js';
import { offerCards, CARDS } from './cards.js';
import { sfx, setMuted } from './audio.js';
import { MELT_T } from './render.js';

export const G = {
  state: 'title',          // title | play | clear | cards | paused | over | win
  overlayT: 0, run: null, map: null,
  held: null, queue: [], holdTimer: 0, aimX: 200, aiming: false, aimPid: -1,
  tool: null, hint: null, overT: 0, combo: 0, banner: null, offer: null, shakeVis: 0, clearT: 0,
  drops: 0, fx: { parts: [], rings: [], texts: [] }, result: null, saveT: 0, titleT: 0,
  muted: store.get('mute', false),
  best: store.get('best', { score: 0, stage: 0 }),
  daily: store.get('daily', { date: 0, best: 0, stage: 0 }),
  onMap: () => {},
};
let acc = 0, landSfxT = 0, snapSfxT = 0;

// ---------- physics events ----------
world.on.land = (b, m, first) => {
  if (first) sfx.land(Math.min(1, m / 1200), b.level);
  else if (landSfxT <= 0) { landSfxT = 0.08; sfx.land(Math.min(0.6, m / 2400), b.level); }
};
world.on.snap = (x, y, a) => {
  // one fat drop per cat per moment: several links often snap together, and a cluster of tiny dots must not appear
  if (a.dripT > a.age) return;
  a.dripT = a.age + 0.25;
  G.fx.parts.push({ floor: G.map.bounds.y1 - G.map.r * 2 - 2, x, y, vx: (Math.random() - 0.5) * 40, vy: 60, r: 4.5 + a.half * 0.07, c: a.wild ? '#FFB3E6' : CATS[a.level].fill, t: 0, d: 0.55, star: false, rot: 0 });
  if (snapSfxT <= 0) { snapSfxT = 0.12; sfx.snap(); }
};
world.on.spill = b => { G.fx.texts.push({ x: clamp(b.cx, 40, 360), y: G.map.bounds.y1 - 30, s: '溜走啦~', size: 20, t: 0, d: 1, color: '#9EE6FF' }); };

// ---------- runs and stages ----------
function newRun(mode, seed) {
  return {
    mode, seed, stage: 0, score: 0, maxLevel: 0, wildNext: 0, taken: [],
    spawnRng: makeRng(seed * 3 + 1), cardRng: makeRng(seed * 3 + 2), mapRng: makeRng(seed * 3 + 3),
    charges: { boop: 3, split: 1, shake: 1 },
    mods: { magnet: false, minLevel: 0, overLimit: OVER_LIMIT, comboMul: 1, preview: 1, choices: 3, scoreMul: 1, leap: 0 },
    mapId: null, target: 5,
  };
}

export function startRun(mode, seed) {
  if (seed == null) seed = mode === 'daily' ? today() : (Math.random() * 1e9) | 0;
  G.run = newRun(mode, seed);
  startStage();
}

function loadMap(id) {
  G.map = buildMap(id);
  setColliders(G.map.lines, G.map.pegs, G.map.r, G.map.killY);
  clearWorld();
  G.onMap(G.map);
}

function startStage(restore) {
  const r = G.run, st = STAGES[r.stage];
  if (!restore) { r.mapId = r.mapRng.pick(st.pool); r.target = st.target; if (r.stage > 0) r.charges.boop += 1; }
  loadMap(r.mapId);
  tune.magnet = r.mods.magnet;
  world.canMerge = true;
  G.held = null; G.holdTimer = 0.5; G.overT = 0; G.combo = 0; G.tool = null; G.drops = 0;
  G.aimX = (G.map.drop[0] + G.map.drop[1]) / 2;
  if (!restore) { G.queue = []; fillQueue(); }
  G.banner = { title: `第 ${r.stage + 1} 关 · ${G.map.name}`, sub: `合成一只 ${VALUES[r.target]}`, t: 0, d: 2.2 };
  G.state = 'play'; G.overlayT = 0;
  saveRun();
}

function rollLevel() {
  const r = G.run, lo = r.mods.minLevel, top = Math.max(lo + 1, Math.min(4, Math.max(2, r.maxLevel - 1)));
  const W = [6, 5, 4, 2.6, 1.8];
  let sum = 0;
  for (let k = lo; k <= top; k++) sum += W[k];
  let x = r.spawnRng() * sum;
  for (let k = lo; k <= top; k++) { x -= W[k]; if (x <= 0) return k; }
  return lo;
}
function fillQueue() {
  while (G.queue.length < 4) {
    if (G.run.wildNext > 0) { G.run.wildNext--; G.queue.push({ level: 1, wild: true }); }
    else G.queue.push({ level: rollLevel(), wild: false });
  }
}

export const dropRange = lv => {
  const m = G.map, h = HALF[lv] * 1.05 + m.r + 2;
  return [m.drop[0] + h, m.drop[1] - h];
};
export function heldX() {
  if (!G.held) return G.aimX;
  const [a, b] = dropRange(G.held.wild ? 1 : G.held.level);
  return clamp(G.aimX, a, b);
}

export function tryDrop() {
  const h = G.held;
  if (G.state !== 'play' || !h || h.t < 0.15) return;
  const x = heldX(), b = new Blob(h.level, x, G.map.holdY, 1, h.wild);
  b.setVel(0, 150);
  world.blobs.push(b);
  addHolderStrand(b, x, G.map.holdY - 36);
  G.run.maxLevel = Math.max(G.run.maxLevel, h.wild ? 0 : h.level);
  G.held = null; G.holdTimer = 0.45; G.drops++; G.combo = 0;
  sfx.drop();
}

// ---------- merging ----------
function doMerges() {
  const born = [], m = world.merges, r = G.run;
  for (let i = 0; i < m.length; i += 2) {
    const A = m[i], B = m[i + 1];
    if (A.dead || B.dead) continue;
    A.dead = B.dead = true;
    const x = (A.cx + B.cx) / 2, y = (A.cy + B.cy) / 2;
    let lv = A.wild && B.wild ? 1 : (A.wild ? B.level : A.level) + 1;
    if (r && r.mods.leap && Math.random() < r.mods.leap && lv < MAX_LEVEL) lv++;
    G.combo++;
    if (lv > MAX_LEVEL) { megaPop(x, y); continue; }
    const s0 = 0.6, h = HALF[lv] * s0;
    const nb = new Blob(lv, clamp(x, G.map.bounds.x0 + h, G.map.bounds.x1 - h), y, s0);
    nb.setVel((A.vx + B.vx) * 0.25, (A.vy + B.vy) * 0.25);
    nb.scaleV = 1.5; nb.flash = 0.6; nb.landed = true; nb.fresh = 3;
    const src = A.wild ? B : A;
    nb.mix = 0; nb.fromRgb = src.wild ? [255, 179, 230] : CATS[src.level].rgb; nb.wobble(HALF[lv] * 2.5);
    nb.feel('happy', 0.9);
    nb.melt = { t: 0, ghosts: [A, B].map(g => ({ level: g.level, wild: g.wild, n: g.n, x: Float64Array.from(g.px), y: Float64Array.from(g.py), cx: g.cx, cy: g.cy, half: g.half })) };
    born.push(nb);
    if (!r) continue;   // title screen demo
    const val = 2 << lv, gain = Math.round(val * (1 + 0.5 * (G.combo - 1) * r.mods.comboMul) * r.mods.scoreMul);
    r.score += gain;
    const tx = clamp(x, 60, 340);
    G.fx.texts.push({ x: tx, y: y - HALF[lv] * 0.7, s: '+' + gain, size: 20 + lv * 1.6, t: 0, d: 0.9 });
    if (G.combo >= 2) G.fx.texts = G.fx.texts.filter(o => !o.combo);
    if (G.combo >= 2) G.fx.texts.push({ combo: true, x: tx, y: y - HALF[lv] * 0.7 - 30 - lv, s: '连击×' + G.combo, size: 18 + Math.min(G.combo, 8) * 1.5, t: -0.05, d: 1, color: '#FFE066' });
    r.maxLevel = Math.max(r.maxLevel, lv);
    splash(x, y, lv, 1);
    sfx.merge(lv, G.combo);
    vibrate(lv >= 7 ? 30 : 12);
    if (lv >= 7) G.shakeVis = Math.max(G.shakeVis, 3 + (lv - 7) * 2.5);
    if (lv >= r.target && G.state === 'play') stageClear(nb);
  }
  m.length = 0;
  world.blobs = world.blobs.filter(b => !b.dead).concat(born);
}

function megaPop(x, y) {
  const r = G.run;
  if (r) r.score += 8192 * r.mods.scoreMul;
  splash(x, y, MAX_LEVEL, 2); splash(x, y, 9, 1.4);
  for (const b of world.blobs) {
    if (b.dead) continue;
    const dx = b.cx - x, dy = b.cy - y, d = Math.hypot(dx, dy) || 1;
    if (d < 340) { const imp = (1 - d / 340) * 1500; b.addVel(dx / d * imp, dy / d * imp - 300); b.feel('surprise', 0.8); }
  }
  G.fx.texts.push({ x, y: y - 40, s: '+8192', size: 40, t: 0, d: 1.4 });
  G.shakeVis = 16; sfx.mega(); vibrate(60);
}

function stageClear(cat) {
  const r = G.run;
  G.state = 'clear'; G.clearT = 0; world.canMerge = false; G.held = null; G.tool = null;
  r.score += 100 * (r.stage + 1);
  for (const b of world.blobs) b.feel('happy', 3);
  splash(cat.cx, cat.cy, cat.level, 1.6);
  G.banner = { title: '过关！', sub: `${CATS[cat.level].name} 诞生了`, t: 0, d: 1.8, big: true };
  sfx.clear(); vibrate(40);
}

function afterClear() {
  const r = G.run;
  if (r.stage + 1 >= STAGES.length) { finish(true); return; }
  G.offer = offerCards(r.cardRng, r.taken, r.mods.choices);
  G.state = 'cards'; G.overlayT = 0;
}

export function pickCard(i) {
  const c = G.offer && G.offer[i];
  if (!c || G.state !== 'cards') return;
  const r = G.run;
  c.apply(r); r.taken.push(c.id);
  sfx.card();
  r.stage++;
  G.offer = null;
  startStage();
}

function finish(won) {
  const r = G.run;
  G.state = won ? 'win' : 'over'; G.overlayT = 0; G.held = null; G.tool = null; world.canMerge = false;
  const rec = { score: Math.round(r.score), stage: r.stage + 1 };
  let isBest = false;
  if (r.mode === 'daily') {
    const d = G.daily.date === r.seed ? G.daily : { date: r.seed, best: 0, stage: 0 };
    if (rec.score > d.best) { d.best = rec.score; d.stage = rec.stage; isBest = true; }
    G.daily = d; store.set('daily', d);
  } else if (rec.score > G.best.score) { G.best = rec; store.set('best', rec); isBest = true; }
  G.result = { ...rec, won, isBest, maxLevel: r.maxLevel, mode: r.mode };
  store.set('run', null);
  if (won) sfx.win(); else sfx.over();
  vibrate(80);
}

// ---------- tools ----------
export function catAt(x, y) {
  let best = null, bd = 1e9;
  for (const b of world.blobs) {
    const d = Math.hypot(b.cx - x, b.cy - y);
    if (d < b.half * 1.25 && d < bd && (inPoly(x, y, b) || d < b.half)) { best = b; bd = d; }
  }
  return best;
}

const touching = b => world.blobs.filter(o => o !== b && !o.dead && Math.hypot(o.cx - b.cx, o.cy - b.cy) < (o.half + b.half) * 1.15);

export function useTool(name, x, y) {
  const r = G.run;
  if (G.state !== 'play' || !r) return false;
  if (name === 'shake') {
    if (r.charges.shake <= 0) return false;
    r.charges.shake--; shake(); G.shakeVis = 10; sfx.shake(); vibrate(50);
    for (const b of world.blobs) { b.feel('surprise', 0.8); for (const o of touching(b)) if (o.id > b.id) stickPair(b, o, 1); }
    return true;
  }
  const b = catAt(x, y);
  if (!b) return false;
  if (name === 'boop') {
    if (r.charges.boop <= 0) return false;
    r.charges.boop--;
    for (const o of touching(b)) stickPair(b, o, 2);
    const k = 1 - Math.min(b.level, 9) / 12;
    b.addVel((Math.random() - 0.5) * 260, -(540 + 540 * k));
    b.kick(0, 1, 0.15); b.feel('surprise', 0.7);
    sfx.meow(1.3 - Math.min(b.level, 9) * 0.05, 0.16);
    return true;
  }
  if (name === 'split') {
    if (r.charges.split <= 0 || b.wild || b.level < 1) { G.hint = { s: '最小的猫分不开哦', t: 0 }; return false; }
    r.charges.split--;
    b.dead = true;
    const lv = b.level - 1, off = b.half * 0.45, halves = [];
    for (const s of [-1, 1]) {
      const c = new Blob(lv, b.cx + s * off, b.cy, 0.8);
      c.setVel(s * 170 + b.vx, -140 + b.vy); c.scaleV = 1; c.noMerge = 1.0; c.landed = true;
      c.feel('happy', 1); c.wobble(HALF[lv] * 2);
      world.blobs.push(c); halves.push(c);
    }
    stickPair(halves[0], halves[1], 3);   // the two halves pull apart with goo between them
    world.blobs = world.blobs.filter(o => !o.dead);
    splash(b.cx, b.cy, lv, 0.6);
    sfx.split(); vibrate(20);
    return true;
  }
  return false;
}

// ---------- effects ----------
export function splash(x, y, lv, mul) {
  const n = Math.round((5 + lv * 0.4) * mul), hs = HALF[lv], c = CATS[lv].fill;
  for (let i = 0; i < n; i++) {
    const a = (i + Math.random() * 0.6) / n * Math.PI * 2, sp = (260 + Math.random() * 220) * (1 + lv * 0.05) * mul;
    G.fx.parts.push({ x: x + Math.cos(a) * hs * 0.85, y: y + Math.sin(a) * hs * 0.85, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 200,
      r: (6 + Math.random() * 3) * (1 + lv * 0.07), c, t: 0, d: 0.42 + Math.random() * 0.2, star: false, rot: 0 });
  }
  if (lv >= 6) {
    for (let i = 0; i < 3 + lv - 6; i++) {
      const a = Math.random() * Math.PI * 2, sp = 120 + Math.random() * 260;
      G.fx.parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 220, r: 9 + Math.random() * 6, c: '#FFF3A0', t: 0, d: 0.8, star: true, rot: Math.random() * 3 });
    }
  }
  G.fx.rings.push({ x, y, r0: hs * 0.6, r1: hs * 1.8 * (mul > 1 ? 2 : 1), t: 0, d: 0.32 });
}

export function vibrate(ms) {
  try {
    const ua = navigator.userActivation;   // before the first tap the browser refuses (and logs an error)
    if (!G.muted && navigator.vibrate && (!ua || ua.hasBeenActive)) navigator.vibrate(ms);
  } catch (e) { /* unsupported */ }
}

// ---------- title screen demo ----------
export function toTitle() {
  G.state = 'title'; G.run = null; G.titleT = 0; G.result = null; G.tool = null; G.banner = null;
  loadMap('bowl');
  world.canMerge = true; tune.magnet = false;
}
function titleTick(dt) {
  G.titleT -= dt;
  if (G.titleT <= 0 && world.blobs.length < 14) {
    G.titleT = 0.9;
    const lv = Math.random() < 0.7 ? (Math.random() * 3) | 0 : 3 + ((Math.random() * 3) | 0);
    const b = new Blob(lv, 60 + Math.random() * 280, -60, 1);
    b.setVel(0, 100); world.blobs.push(b);
  }
}

// ---------- per frame ----------
export function update(dt) {
  const s = G.state;
  if (s === 'play' || s === 'clear' || s === 'over' || s === 'win' || s === 'title') {
    acc += dt;
    let guard = 0;
    while (acc >= STEP && guard++ < 12) {
      step(STEP);
      if (world.merges.length) doMerges();
      if (G.state === 'play') overflowCheck(STEP);
      acc -= STEP;
    }
    if (guard >= 12) acc = 0;
  }
  if (s === 'title') titleTick(dt);
  if (G.state === 'play') {
    if (!G.held) {
      G.holdTimer -= dt;
      if (G.holdTimer <= 0) { G.held = { ...G.queue.shift(), t: 0, pop: 0, mood: '' }; fillQueue(); }
    } else { G.held.t += dt; G.held.pop = Math.min(1, G.held.t / 0.3); }
    if ((G.saveT += dt) > 2) { G.saveT = 0; saveRun(); }
  }
  if (G.state === 'clear' && (G.clearT += dt) > 1.6) afterClear();
  if (G.state !== 'play') G.overlayT += dt;
  landSfxT -= dt; snapSfxT -= dt;
  G.shakeVis = Math.max(0, G.shakeVis - dt * 30);
  for (const b of world.blobs) {
    if (b.melt && (b.melt.t += dt) > MELT_T) b.melt = null;
    if (b.mix < 1) b.mix = Math.min(1, b.mix + dt / 0.28);
    if (b.moodT > 0) b.moodT -= dt;
    if ((b.blinkT -= dt) < -0.14) b.blinkT = 2 + Math.random() * 4;
  }
  const fx = G.fx;
  for (const p of fx.parts) { p.t += dt; p.vy += 1500 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.rot += dt * 4; if (p.floor && p.y > p.floor) p.t = p.d; }
  for (const r of fx.rings) r.t += dt;
  for (const t of fx.texts) t.t += dt;
  if (fx.parts.length) fx.parts = fx.parts.filter(p => p.t < p.d);
  if (fx.rings.length) fx.rings = fx.rings.filter(r => r.t < r.d);
  if (fx.texts.length) fx.texts = fx.texts.filter(t => t.t < t.d);
  if (G.banner && (G.banner.t += dt) > G.banner.d) G.banner = null;
  if (G.hint && (G.hint.t += dt) > 1.6) G.hint = null;
}

function overflowCheck(h) {
  let any = false;
  for (const b of world.blobs) {
    let minY = 1e9;
    for (let i = 0; i < b.n; i++) if (b.py[i] < minY) minY = b.py[i];
    b.danger = b.age > 1 && !b.merging && minY < 0;
    if (b.danger) any = true;
  }
  G.overT = any ? G.overT + h : Math.max(0, G.overT - h * 2);
  if (G.overT > G.run.mods.overLimit) finish(false);
}

// ---------- saving ----------
export function saveRun() {
  const r = G.run;
  if (!r || G.state === 'over' || G.state === 'win' || G.state === 'title') return;
  store.set('run', {
    v: 2, mode: r.mode, seed: r.seed, stage: r.stage, score: r.score, maxLevel: r.maxLevel, wildNext: r.wildNext,
    taken: r.taken, charges: r.charges, mods: r.mods, mapId: r.mapId, target: r.target,
    rng: [r.spawnRng.state(), r.cardRng.state(), r.mapRng.state()],
    queue: (G.held ? [G.held] : []).concat(G.queue).map(q => [q.level, q.wild ? 1 : 0]),
    blobs: world.blobs.filter(b => !b.dead).map(b => [b.level, +b.cx.toFixed(1), +b.cy.toFixed(1), b.wild ? 1 : 0]),
    cards: G.state === 'cards',
  });
}

export function hasSave() { const s = store.get('run', null); return !!(s && s.v === 2); }

export function resumeRun() {
  const s = store.get('run', null);
  if (!s || s.v !== 2 || !MAPS[s.mapId]) return false;
  const r = newRun(s.mode, s.seed);
  Object.assign(r, { stage: s.stage, score: s.score, maxLevel: s.maxLevel, wildNext: s.wildNext, taken: s.taken, charges: s.charges, mods: s.mods, mapId: s.mapId, target: s.target });
  r.spawnRng.setState(s.rng[0]); r.cardRng.setState(s.rng[1]); r.mapRng.setState(s.rng[2]);
  G.run = r;
  G.queue = s.queue.map(([level, w]) => ({ level, wild: !!w }));
  startStage(true);
  for (const [lv, x, y, w] of s.blobs) { const b = new Blob(lv, x, y, 1, !!w); b.landed = true; b.age = 2; world.blobs.push(b); }
  fillQueue();
  return true;
}

// Test hook: jump to a stage on a given container.
export function debugStage(stage, mapId) {
  if (!G.run) G.run = newRun('run', 1);
  const r = G.run;
  r.stage = stage; r.mapId = mapId || STAGES[stage].pool[0]; r.target = STAGES[stage].target;
  G.queue = []; fillQueue();
  startStage(true);
}

export function setMute(m) { G.muted = m; setMuted(m); store.set('mute', m); }
export { CARDS };
