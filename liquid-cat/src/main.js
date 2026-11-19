// Boot, frame loop, input and the headless test hooks.
import { STEP } from './config.js';
import { clamp } from './util.js';
import { D, L, layout, toWorld, setUiTransform, setWorldTransform, buttons, press, hitButton, rr } from './draw.js';
import { world, Blob, inPoly, step } from './physics.js';
import { drawContainerBack, drawContainerFront, drawStrands, drawCat, drawCatFace, drawDropper, drawFx } from './render.js';
import { drawHud, drawToolbar, drawOverlays } from './ui.js';
import { G, update, startRun, pickCard, tryDrop, heldX, useTool, toTitle, resumeRun, setMute, saveRun, debugStage } from './game.js';
import { unlockAudio, setMuted, sfx } from './audio.js';

const cv = document.getElementById('cv'), safeEl = document.getElementById('safe');
D.ctx = cv.getContext('2d');
const bg = document.createElement('canvas');

function buildBg() {
  bg.width = cv.width; bg.height = cv.height;
  const b = bg.getContext('2d'), k = L.dpr * L.ui;
  b.setTransform(k, 0, 0, k, 0, 0);
  b.fillStyle = '#FFF1DC'; b.fillRect(0, 0, L.VW, L.VH);
  b.fillStyle = '#FCE4C4';
  const s = 58;
  for (let y = -s, row = 0; y < L.VH + s; y += s, row++) {
    for (let x = -s + (row & 1) * s / 2; x < L.VW + s; x += s) { b.save(); b.translate(x, y); b.rotate(0.38); rr(-9, -9, 18, 18, 5, b); b.fill(); b.restore(); }
  }
}
function resize() { layout(cv, safeEl, G.map); buildBg(); }
G.onMap = () => resize();

function render() {
  const ctx = D.ctx;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(bg, 0, 0);
  if (G.map) {
    const sv = G.shakeVis, sx = sv ? (Math.random() - 0.5) * sv : 0, sy = sv ? (Math.random() - 0.5) * sv * 0.5 : 0;
    setWorldTransform(sx + (world.shakeT > 0 ? Math.sin(world.shakeT * 60) * 6 : 0), sy);
    const playing = G.state === 'play';
    drawContainerBack(G.map, playing && G.overT > 0, heldX(), playing && !!G.held && !G.tool);
    drawStrands(false);
    const warnOn = playing && G.overT > 0.15;
    for (const b of world.blobs) drawCat(b, warnOn);
    drawStrands(true);
    for (const b of world.blobs) drawCatFace(b);
    drawContainerFront(G.map);
    if (playing || G.state === 'paused') drawDropper(heldX(), G.map.holdY, G.held);
    drawFx(G.fx);
  }
  setUiTransform();
  buttons.length = 0;
  drawHud();
  drawToolbar();
  drawOverlays();
}

// ---------- loop ----------
let last = performance.now(), ema = 1 / 60, skip = false, frozen = false;
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now; ema = ema * 0.95 + dt * 0.05;
  if (!frozen) { update(dt); D.time += dt; }
  skip = ema < 0.0105 ? !skip : false;   // draw at ~60 fps on 120 Hz screens
  if (!skip) render();
  requestAnimationFrame(frame);
}

// ---------- input ----------
const toV = e => ({ x: e.clientX / L.ui, y: e.clientY / L.ui });

function action(id) {
  sfx.click();
  if (id.startsWith('card:')) { pickCard(+id.slice(5)); return; }
  if (id.startsWith('tool:')) {
    const t = id.slice(5), r = G.run;
    if (G.state !== 'play' || !r || r.charges[t] <= 0) return;
    if (t === 'shake') { G.tool = null; useTool('shake'); return; }
    G.tool = G.tool === t ? null : t;
    return;
  }
  switch (id) {
    case 'start': startRun('run'); break;
    case 'daily': startRun('daily'); break;
    case 'continue': if (!resumeRun()) startRun('run'); break;
    case 'pause': if (G.state === 'play') { G.state = 'paused'; G.overlayT = 0; G.aiming = false; saveRun(); } break;
    case 'resume': G.state = 'play'; break;
    case 'restart': startRun(G.run.mode, G.run.mode === 'daily' ? G.run.seed : undefined); break;
    case 'again': startRun(G.result.mode, G.result.mode === 'daily' ? G.run.seed : undefined); break;
    case 'home': saveRun(); toTitle(); break;
    case 'sound': setMute(!G.muted); break;
  }
}

cv.addEventListener('pointerdown', e => {
  e.preventDefault(); unlockAudio();
  const v = toV(e), btn = hitButton(v.x, v.y);
  if (btn) { if (!btn.disabled) { press.id = btn.id; press.pid = e.pointerId; } return; }
  if (G.state !== 'play') return;
  const w = toWorld(v.x, v.y);
  if (G.tool) { useTool(G.tool, w.x, w.y); G.tool = null; return; }
  G.aiming = true; G.aimPid = e.pointerId; G.aimX = w.x;
});
cv.addEventListener('pointermove', e => {
  if (G.state !== 'play' || press.id || G.tool) return;
  if ((G.aiming && e.pointerId === G.aimPid) || e.pointerType === 'mouse') G.aimX = toWorld(e.clientX / L.ui, 0).x;
});
window.addEventListener('pointerup', e => {
  const v = toV(e);
  if (press.id && e.pointerId === press.pid) {
    const btn = hitButton(v.x, v.y), id = press.id;
    press.id = null;
    if (btn && btn.id === id) action(id);
    return;
  }
  if (G.aiming && e.pointerId === G.aimPid) { G.aiming = false; G.aimX = toWorld(v.x, v.y).x; tryDrop(); }
});
window.addEventListener('pointercancel', () => { G.aiming = false; press.id = null; });
window.addEventListener('keydown', e => {
  unlockAudio();
  if (G.state !== 'play') { if (e.key === 'Escape' && G.state === 'paused') G.state = 'play'; return; }
  if (e.key === 'ArrowLeft') G.aimX -= 16;
  else if (e.key === 'ArrowRight') G.aimX += 16;
  else if (e.key === ' ' || e.key === 'Enter') tryDrop();
  else if (e.key === 'Escape' || e.key === 'p') action('pause');
});
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) return;
  if (G.state === 'play') { G.state = 'paused'; G.overlayT = 0; G.aiming = false; }
  saveRun();
});
window.addEventListener('pagehide', saveRun);
window.addEventListener('resize', resize);

// ---------- boot ----------
if (window.FontFace && document.fonts) {
  new FontFace('Kuaile', 'url(fonts/kuaile.woff2)').load().then(f => document.fonts.add(f)).catch(() => {});
}
setMuted(G.muted);
toTitle();
resize();
requestAnimationFrame(frame);

// Test hooks for headless checks (no effect on play).
window.__game = {
  G, world,
  advance(sec) { const n = Math.round(sec / STEP); for (let i = 0; i < n; i++) { update(STEP); D.time += STEP; } render(); },
  freeze(v) { frozen = v; },
  step: () => step(STEP), update: dt => update(dt),
  render,
  start(mode = 'run', seed = 12345) { startRun(mode, seed); },
  stage(i, mapId) { debugStage(i, mapId); },
  drop(x, lv) { if (!G.held) G.held = { level: 0, wild: false, t: 1, pop: 1, mood: '' }; if (lv != null) G.held.level = lv; G.held.t = 1; G.aimX = x; tryDrop(); },
  spawn(lv, x, y, wild) { const b = new Blob(lv, x, y, 1, !!wild); world.blobs.push(b); return b.id; },
  pick: i => pickCard(i),
  tool: (t, x, y) => useTool(t, x, y),
  toScreen: (x, y) => ({ x: (L.wox + x * L.wk) * L.ui, y: (L.woy + y * L.wk) * L.ui }),   // CSS px, for test crops
  info() { const r = G.run; return { state: G.state, stage: r && r.stage, map: G.map && G.map.id, score: r && Math.round(r.score), n: world.blobs.length, maxLevel: r && r.maxLevel, overT: +G.overT.toFixed(2), strands: world.strands.length, charges: r && r.charges }; },
  blobs: () => world.blobs.map(b => ({ l: b.level, w: b.wild, x: +b.cx.toFixed(1), y: +b.cy.toFixed(1) })),
  health() {
    let minArea = 1, embedded = 0;
    for (const b of world.blobs) {
      let A = 0;
      for (let i = 0, j = b.n - 1; i < b.n; j = i++) A += b.px[j] * b.py[i] - b.px[i] * b.py[j];
      minArea = Math.min(minArea, A * 0.5 / (b.S.area * b.scale * b.scale));
      for (const o of world.blobs) if (o !== b && inPoly(b.cx, b.cy, o)) embedded++;
    }
    return { minArea: +minArea.toFixed(3), embedded };
  },
  clamp,
};
