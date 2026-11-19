// Drawing the world: container, slime threads, slime cats (ears, face, number), held cat, effects.
import { INK, CATS, VALUES, MAX_LEVEL, HALF } from './config.js';
import { clamp, easeOutBack, mixRGB, css } from './util.js';
import { D, RX, RY, trace, txt, star } from './draw.js';
import { world, SHAPES, UI_SHAPE } from './physics.js';

const STRETCH_K = 1 / 6000, STRETCH_MAX = 0.2, MELT_T = 0.22;
const FS = [0, 0.86, 0.74, 0.58, 0.47];              // number size by digit count, × half size
const WX = new Float64Array(64), WY = new Float64Array(64), NX = new Float64Array(64), NY = new Float64Array(64);
export { MELT_T };

// ---------- colours ----------
function catColors(level, wild, mix, fromRgb, id) {
  if (wild) {
    const hue = (D.time * 140 + id * 47) % 360;
    return { fill: `hsl(${hue},90%,68%)`, shade: `hsl(${hue},55%,48%)`, light: `hsl(${hue},100%,86%)` };
  }
  const c = CATS[level];
  if (mix >= 1 || !fromRgb) return c;
  const m = mix * mix * (3 - 2 * mix), rgb = mixRGB(fromRgb, c.rgb, m);
  return { fill: css(rgb), shade: css(mixRGB(rgb, [59, 35, 66], 0.3)), light: css(mixRGB(rgb, [255, 255, 255], 0.5)) };
}

// ---------- outline ----------
// Physics outline + slow squash, stretch along velocity with the trailing end pinched into a drip, and ripples
// along the normals.
function outline(b) {
  const n = b.n, px = b.px, py = b.py;
  let cx = 0, cy = 0;
  for (let i = 0; i < n; i++) { cx += px[i]; cy += py[i]; }
  cx /= n; cy /= n;
  let j00 = 1 + b.ja, j01 = b.jb, j11 = 1 - b.ja;
  const sp = Math.hypot(b.vx, b.vy), st = Math.min(STRETCH_MAX, sp * STRETCH_K);
  if (st > 0.005) { const ux = b.vx / sp, uy = b.vy / sp, c2 = ux * ux - uy * uy; j00 += st * c2; j01 += st * 2 * ux * uy; j11 -= st * c2; }
  for (let i = 0; i < n; i++) {
    const dx = px[i] - cx, dy = py[i] - cy;
    RX[i] = cx + j00 * dx + j01 * dy; RY[i] = cy + j01 * dx + j11 * dy;
  }
  if (st > 0.005) {
    const ux = b.vx / sp, uy = b.vy / sp, h = b.half;
    for (let i = 0; i < n; i++) {
      const dx = RX[i] - cx, dy = RY[i] - cy, pa = dx * ux + dy * uy, a = pa / h;
      if (a >= 0) continue;
      const qx = dx - pa * ux, qy = dy - pa * uy, pinch = Math.max(0.4, 1 + st * 2.2 * a), ext = 1 - st * 0.8 * a;
      RX[i] = cx + pa * ext * ux + qx * pinch; RY[i] = cy + pa * ext * uy + qy * pinch;
    }
  }
  const wh = b.wh;
  for (let i = 0; i < n; i++) {
    const p = i === 0 ? n - 1 : i - 1, q = i + 1 === n ? 0 : i + 1, tx = RX[q] - RX[p], ty = RY[q] - RY[p], l = Math.hypot(tx, ty) || 1;
    WX[i] = RX[i] + ty / l * wh[i]; WY[i] = RY[i] - tx / l * wh[i];
  }
  RX.set(WX.subarray(0, n)); RY.set(WY.subarray(0, n));
  return { cx, cy };
}

// Least-squares deformation of the outline (symmetric part only: the face stays upright), softened.
// Also returns how squashed the cat is (small/large stretch).
function faceMatrix(S, s, n, cx, cy) {
  const qx = S.qx, qy = S.qy, iq = S.iqq;
  let a00 = 0, a01 = 0, a10 = 0, a11 = 0;
  for (let i = 0; i < n; i++) {
    const dx = RX[i] - cx, dy = RY[i] - cy;
    a00 += dx * qx[i]; a01 += dx * qy[i]; a10 += dy * qx[i]; a11 += dy * qy[i];
  }
  const m00 = (a00 * iq[0] + a01 * iq[2]) / s, m01 = (a00 * iq[1] + a01 * iq[3]) / s;
  const m10 = (a10 * iq[0] + a11 * iq[2]) / s, m11 = (a10 * iq[1] + a11 * iq[3]) / s;
  const a = m00, d = m11, o = (m01 + m10) / 2, mid = (a + d) / 2, r = Math.sqrt(((a - d) / 2) ** 2 + o * o);
  const squash = (mid - r) / (mid + r || 1);
  return { T: [0.45 + 0.55 * a, 0.55 * o, 0.55 * o, 0.45 + 0.55 * d], squash };
}

// ---------- cat parts ----------
function anchor(n, cx, cy, ang) {
  const ux = Math.cos(ang), uy = Math.sin(ang);
  let best = -2, bi = 0;
  for (let i = 0; i < n; i++) {
    const dx = RX[i] - cx, dy = RY[i] - cy, d = (dx * ux + dy * uy) / (Math.hypot(dx, dy) || 1);
    if (d > best) { best = d; bi = i; }
  }
  return bi;
}

// Ears grow out of the outline near the top, so they ride on the slime's surface.
function ear(n, cx, cy, h, side) {
  const i = anchor(n, cx, cy, -Math.PI / 2 + side * 0.62), k = Math.max(1, Math.round(n * 0.07));
  const a = (i - k + n) % n, c = (i + k) % n;
  const dx = RX[i] - cx, dy = RY[i] - cy, l = Math.hypot(dx, dy) || 1, tilt = side * 0.2;
  const ux = dx / l, uy = dy / l, tx = ux * Math.cos(tilt) - uy * Math.sin(tilt), ty = ux * Math.sin(tilt) + uy * Math.cos(tilt);
  const len = Math.max(6, h * 0.42);
  return [RX[a] + (cx - RX[a]) * 0.12, RY[a] + (cy - RY[a]) * 0.12, RX[i] + tx * len, RY[i] + ty * len, RX[c] + (cx - RX[c]) * 0.12, RY[c] + (cy - RY[c]) * 0.12];
}
function earPath(e) { const ctx = D.ctx; ctx.beginPath(); ctx.moveTo(e[0], e[1]); ctx.lineTo(e[2], e[3]); ctx.lineTo(e[4], e[5]); ctx.closePath(); }
function innerEar(e) {
  const ctx = D.ctx, mx = (e[0] + e[4]) / 2, my = (e[1] + e[5]) / 2;
  ctx.beginPath();
  ctx.moveTo(e[0] + (e[2] - e[0]) * 0.35 + (mx - e[0]) * 0.35, e[1] + (e[3] - e[1]) * 0.35 + (my - e[1]) * 0.35);
  ctx.lineTo(e[2] + (mx - e[2]) * 0.22, e[3] + (my - e[3]) * 0.22);
  ctx.lineTo(e[4] + (e[2] - e[4]) * 0.35 + (mx - e[4]) * 0.35, e[5] + (e[3] - e[5]) * 0.35 + (my - e[5]) * 0.35);
  ctx.closePath();
  ctx.fillStyle = 'rgba(255,150,180,0.85)'; ctx.fill();
}

function crown(y, s) {
  const ctx = D.ctx, w = s, h = s * 0.55;
  ctx.beginPath();
  ctx.moveTo(-w / 2, y); ctx.lineTo(-w / 2, y - h); ctx.lineTo(-w / 4, y - h * 0.45); ctx.lineTo(0, y - h * 1.15);
  ctx.lineTo(w / 4, y - h * 0.45); ctx.lineTo(w / 2, y - h); ctx.lineTo(w / 2, y); ctx.closePath();
  ctx.fillStyle = '#FFF3A0'; ctx.fill(); ctx.lineWidth = Math.max(1.5, s * 0.1); ctx.strokeStyle = INK; ctx.lineJoin = 'round'; ctx.stroke();
}

function eyes(h, mood) {
  const ctx = D.ctx, ex = 0.34 * h, ey = -0.26 * h, lw = Math.max(1.4, h * 0.05);
  ctx.strokeStyle = INK; ctx.fillStyle = INK; ctx.lineWidth = lw; ctx.lineCap = 'round';
  for (const s of [-1, 1]) {
    const x = s * ex;
    if (mood === 'comfy' || mood === 'blink') {          // relaxed: ‿
      ctx.beginPath(); ctx.arc(x, ey - 0.05 * h, 0.09 * h, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
    } else if (mood === 'happy') {                        // ^
      ctx.beginPath(); ctx.arc(x, ey + 0.05 * h, 0.09 * h, 1.15 * Math.PI, 1.85 * Math.PI); ctx.stroke();
    } else if (mood === 'surprise' || mood === 'fall') {  // wide open
      ctx.beginPath(); ctx.arc(x, ey, 0.12 * h, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, ey, 0.05 * h, 0, Math.PI * 2); ctx.fillStyle = INK; ctx.fill();
    } else {
      ctx.beginPath(); ctx.ellipse(x, ey, 0.09 * h, 0.115 * h, 0, 0, Math.PI * 2); ctx.fillStyle = INK; ctx.fill();
      ctx.beginPath(); ctx.arc(x + 0.03 * h, ey - 0.045 * h, 0.035 * h, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();
    }
  }
}

function face(level, wild, h, mood) {
  const ctx = D.ctx;
  if (h >= 22) {
    ctx.fillStyle = 'rgba(255,110,140,0.32)';
    for (const s of [-1, 1]) { ctx.beginPath(); ctx.ellipse(s * 0.57 * h, -0.07 * h, 0.12 * h, 0.065 * h, 0, 0, Math.PI * 2); ctx.fill(); }
  }
  eyes(h, mood);
  if (h >= 22) {
    ctx.lineWidth = Math.max(1.2, h * 0.04); ctx.strokeStyle = INK; ctx.lineCap = 'round';
    ctx.beginPath();
    if (mood === 'surprise' || mood === 'fall') ctx.ellipse(0, -0.07 * h, 0.05 * h, 0.06 * h, 0, 0, Math.PI * 2);
    else { const r = 0.055 * h; ctx.arc(-r, -0.1 * h, r, 0, Math.PI); ctx.moveTo(2 * r, -0.1 * h); ctx.arc(r, -0.1 * h, r, 0, Math.PI); }
    ctx.stroke();
  }
  if (mood === 'worry') {
    ctx.beginPath(); ctx.moveTo(0.62 * h, -0.62 * h);
    ctx.quadraticCurveTo(0.72 * h, -0.42 * h, 0.62 * h, -0.4 * h); ctx.quadraticCurveTo(0.52 * h, -0.42 * h, 0.62 * h, -0.62 * h);
    ctx.fillStyle = '#9EE6FF'; ctx.fill(); ctx.lineWidth = 1.5; ctx.strokeStyle = INK; ctx.stroke();
  }
  if (level === MAX_LEVEL && !wild) crown(-0.62 * h, 0.42 * h);
  const str = wild ? '?' : VALUES[level], fs = h * FS[str.length];
  txt(str, 0, 0.36 * h, fs, '#fff', INK, Math.max(2.5, fs * 0.2));
}

function gloss(n, cx, cy, h) {
  const ctx = D.ctx;
  let bi = 0, bd = -1e9, wi = 0, wd = -1e9;
  for (let i = 0; i < n; i++) {
    const dx = RX[i] - cx, dy = RY[i] - cy, d = -dx * 0.6 - dy * 0.8, e = dx * 0.7 + dy * 0.7;
    if (d > bd) { bd = d; bi = i; }
    if (e > wd) { wd = e; wi = i; }
  }
  const k = Math.max(1, Math.round(n * 0.09));
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  for (let t = -k; t <= k; t++) {
    const i = (bi + t + n) % n, x = cx + (RX[i] - cx) * 0.74, y = cy + (RY[i] - cy) * 0.74;
    if (t === -k) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.95)'; ctx.lineWidth = Math.max(2, h * 0.14); ctx.stroke();
  const di = (bi + k + 2) % n;
  ctx.beginPath(); ctx.arc(cx + (RX[di] - cx) * 0.74, cy + (RY[di] - cy) * 0.74, Math.max(1.2, h * 0.07), 0, Math.PI * 2);
  ctx.fillStyle = '#fff'; ctx.fill();
  ctx.beginPath();
  for (let t = -1; t <= 1; t++) {
    const i = (wi + t + n) % n, x = cx + (RX[i] - cx) * 0.8, y = cy + (RY[i] - cy) * 0.8;
    if (t === -1) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = Math.max(1.5, h * 0.06); ctx.stroke();
}

// A melting cat slides into the new one's centre and shrinks.
function ghostPts(g, cx, cy, e) {
  const gcx = g.cx + (cx - g.cx) * e, gcy = g.cy + (cy - g.cy) * e, sc = 1 - 0.8 * e;
  for (let i = 0; i < g.n; i++) { RX[i] = gcx + (g.x[i] - g.cx) * sc; RY[i] = gcy + (g.y[i] - g.cy) * sc; }
  g.ncx = gcx; g.ncy = gcy; g.nr = g.half * sc;
}
// Tapered, optionally sagging bridge between two points: merge necks and slime threads.
function bridge(ax, ay, bx, by, wEnd, wMid, sag) {
  const ctx = D.ctx, dx = bx - ax, dy = by - ay, d = Math.hypot(dx, dy) || 1;
  const px = -dy / d, py = dx / d, mx = (ax + bx) / 2, my = (ay + by) / 2 + sag;
  ctx.beginPath();
  ctx.moveTo(ax + px * wEnd, ay + py * wEnd);
  ctx.quadraticCurveTo(mx + px * wMid, my + py * wMid, bx + px * wEnd, by + py * wEnd);
  ctx.lineTo(bx - px * wEnd, by - py * wEnd);
  ctx.quadraticCurveTo(mx - px * wMid, my - py * wMid, ax - px * wEnd, ay - py * wEnd);
  ctx.closePath();
}

// Ink strokes for every piece first (ghosts, necks, ears, body), then fills on top, so only the outline of
// the whole shape survives — that is what makes ears and melting cats read as one blob of slime.
function catCore(n, cx, cy, h, level, wild, col, T, mood, o) {
  const ctx = D.ctx;
  NX.set(RX.subarray(0, n)); NY.set(RY.subarray(0, n));
  const earL = ear(n, cx, cy, h, -1), earR = ear(n, cx, cy, h, 1);
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.strokeStyle = o.warn && (D.time * 5 % 1 < 0.5) ? '#FF2D55' : INK; ctx.lineWidth = o.lw * 2;
  if (o.ghosts) {
    for (const g of o.ghosts) {
      ghostPts(g, cx, cy, o.e); trace(g.n); ctx.stroke();
      bridge(g.ncx, g.ncy, cx, cy, Math.min(g.nr, h) * 0.85, Math.min(g.nr, h) * 0.6, 0); ctx.stroke();
    }
  }
  earPath(earL); ctx.stroke(); earPath(earR); ctx.stroke();
  RX.set(NX.subarray(0, n)); RY.set(NY.subarray(0, n)); trace(n); ctx.stroke();
  if (o.ghosts) {
    for (const g of o.ghosts) {
      const gc = CATS[g.level] || CATS[1];
      ghostPts(g, cx, cy, o.e); trace(g.n); ctx.fillStyle = g.wild ? col.fill : gc.fill; ctx.fill();
      bridge(g.ncx, g.ncy, cx, cy, Math.min(g.nr, h) * 0.85, Math.min(g.nr, h) * 0.6, 0); ctx.fill();
    }
    RX.set(NX.subarray(0, n)); RY.set(NY.subarray(0, n));
  }
  ctx.fillStyle = col.fill; earPath(earL); ctx.fill(); earPath(earR); ctx.fill();
  innerEar(earL); innerEar(earR);
  trace(n);
  ctx.fillStyle = col.shade; ctx.fill();
  ctx.save(); ctx.clip();
  ctx.translate(-h * 0.07, -h * 0.17); trace(n);
  const g = ctx.createRadialGradient(cx - h * 0.25, cy - h * 0.3, h * 0.1, cx, cy, h * 1.25);
  g.addColorStop(0, col.light); g.addColorStop(0.55, col.fill); g.addColorStop(1, col.fill);
  ctx.fillStyle = g; ctx.fill();
  ctx.restore();
  gloss(n, cx, cy, h);
  if (o.flash > 0) { trace(n); ctx.fillStyle = `rgba(255,255,255,${o.flash * 0.8})`; ctx.fill(); }
  if (o.noFace || o.later) return;
  faceAt(cx, cy, T, o.faceY || 0, o.faceK || 1, level, wild, h, mood);
}

function faceAt(cx, cy, T, fy, fk, level, wild, h, mood) {
  const ctx = D.ctx;
  ctx.save();
  ctx.transform(T[0], T[2], T[1], T[3], cx, cy + fy);
  if (fk !== 1) ctx.scale(fk, fk);
  face(level, wild, h, mood);
  ctx.restore();
}

export function drawCat(b, warnOn) {
  const { cx, cy } = outline(b), n = b.n, h = b.half;
  const { T, squash } = faceMatrix(b.S, b.scale, n, cx, cy);
  // squashed beyond its usual slump → comfy
  const S = b.S, rel = squash * (1 + (S.pw - 1) * b.sag) / (1 + (S.ph - 1) * b.sag);
  let mood = b.mood;
  if (b.moodT <= 0) {
    mood = !b.landed && b.vy > 300 ? 'fall' : rel < 0.8 ? 'comfy' : b.danger && warnOn ? 'worry' : b.blinkT < 0 ? 'blink' : '';
  }
  const col = catColors(b.level, b.wild, b.mix, b.fromRgb, b.id);
  const o = { lw: 3, warn: b.danger && warnOn, flash: b.flash, ghosts: null, e: 0 };
  if (b.melt) { const u = clamp(b.melt.t / MELT_T, 0, 1); o.ghosts = b.melt.ghosts; o.e = 1 - (1 - u) * (1 - u); }
  o.faceY = -0.16 * h * b.sag; o.faceK = 1 - 0.12 * b.sag;   // a slumped cat's face sits higher, clear of its flat bottom
  o.later = true;   // faces go on after the goo, so a neck never covers a number
  catCore(n, cx, cy, h, b.level, b.wild, col, T, mood, o);
  b.face = { cx, cy, T, fy: o.faceY, fk: o.faceK, mood };
  b.col = col;
}

export function drawCatFace(b) {
  const f = b.face;
  if (f) faceAt(f.cx, f.cy, f.T, f.fy, f.fk, b.level, b.wild, b.half, f.mood);
}

// A cat at rest for the HUD, cards and the held cat. S: shape to use (UI_SHAPE scales to any size).
export function drawCatAt(level, wild, x, y, h, opts = {}) {
  const S = opts.shape || UI_SHAPE, n = S.n, k = h / S.half, sq = opts.squash || 0, sx = 1 + sq, sy = 1 - sq;
  for (let i = 0; i < n; i++) { RX[i] = x + S.qx[i] * k * sx; RY[i] = y + S.qy[i] * k * sy; }
  const col = catColors(level, wild, 1, null, 0);
  catCore(n, x, y, h, level, wild, col, [sx, 0, 0, sy], opts.mood || '', { lw: opts.lw || 3, noFace: opts.noFace });
}

// ---------- slime threads ----------
// Glue is drawn as one neck of goo per pair of things it joins: as wide as the stuck patch where it is short,
// thinning as it stretches, sagging between cats, coloured from one cat into the other. Two passes: ink under
// the cats, fill over them, so a neck's ends melt into both cats (as in a merge).
const necks = new Map();
function gatherNecks() {
  necks.clear();
  for (const s of world.strands) {
    if (s.L === undefined || s.a.dead || (s.b && s.b.dead)) continue;
    const key = s.holder ? 'h' + s.a.id : s.b ? (s.a.id < s.b.id ? s.a.id + '-' + s.b.id : s.b.id + '-' + s.a.id)
      : s.a.id + 'w' + Math.round(Math.atan2(s.ny, s.nx) * 4 / Math.PI);
    let g = necks.get(key);
    if (!g) necks.set(key, g = { A: s.a, B: s.b, wall: !s.b, holder: !!s.holder, nx: s.nx || 0, ny: s.ny || -1, list: [] });
    g.list.push(s);
  }
}

// a: the anchors on A's side, b: on the other side (B, the wall or the dropper)
function neckShape(g) {
  const m = g.list.length;
  let ax = 0, ay = 0, bx = 0, by = 0;
  for (const s of g.list) {
    const sw = s.a !== g.A;
    ax += sw ? s.bx : s.ax; ay += sw ? s.by : s.ay; bx += sw ? s.ax : s.bx; by += sw ? s.ay : s.by;
  }
  ax /= m; ay /= m; bx /= m; by /= m;
  const L = Math.hypot(bx - ax, by - ay);
  let ux, uy;
  if (L > 1) { ux = (bx - ax) / L; uy = (by - ay) / L; }
  else if (g.B) { ux = g.B.cx - g.A.cx; uy = g.B.cy - g.A.cy; const l = Math.hypot(ux, uy) || 1; ux /= l; uy /= l; }
  else { ux = -g.nx; uy = -g.ny; }
  const qx = -uy, qy = ux;
  let a0 = 0, a1 = 0, b0 = 0, b1 = 0;
  for (const s of g.list) {
    const sw = s.a !== g.A, pa = ((sw ? s.bx : s.ax) - ax) * qx + ((sw ? s.by : s.ay) - ay) * qy;
    const pb = ((sw ? s.ax : s.bx) - bx) * qx + ((sw ? s.ay : s.by) - by) * qy;
    a0 = Math.min(a0, pa); a1 = Math.max(a1, pa); b0 = Math.min(b0, pb); b1 = Math.max(b1, pb);
  }
  const hA = g.A.half, hB = g.B ? g.B.half : hA;
  let wa, wb;
  if (g.holder) { wa = hA * 0.22; wb = 4; }
  else {
    const base = g.wall ? 2.5 + 0.08 * hA : 3 + 0.14 * Math.min(hA, hB);
    wa = Math.min(hA * 0.5, (a1 - a0) / 2 + base); wb = g.wall ? wa : Math.min(hB * 0.5, (b1 - b0) / 2 + base);
  }
  const wm = Math.max(1.2, Math.min(wa, wb) / (1 + L / (0.4 * (wa + wb) + 8)));
  // centre the ends on the stuck patch, and push them into the cats so the fill covers the outlines there
  // (not into a wall: the wall covers that end, and pushing in would poke out the far side)
  const ca = (a0 + a1) / 2, cb = (b0 + b1) / 2, eb = g.B ? wb * 0.5 : 0;
  return {
    ax: ax + qx * ca - ux * wa * 0.5, ay: ay + qy * ca - uy * wa * 0.5,
    bx: bx + qx * cb + ux * eb, by: by + qy * cb + uy * eb,
    L, wa, wb, wm, sag: g.wall || g.holder ? 0 : Math.min(30, L * 0.25) * (1 - Math.abs(uy)),
  };
}

// An hourglass of goo from a to b: width wa at a, wm in the middle (lowered by sag), wb at b.
function neckPath(n) {
  const ctx = D.ctx, dx = n.bx - n.ax, dy = n.by - n.ay, d = Math.hypot(dx, dy) || 1, ux = dx / d, uy = dy / d, qx = -uy, qy = ux;
  const mx = (n.ax + n.bx) / 2, my = (n.ay + n.by) / 2 + n.sag, c = d * 0.28;
  ctx.beginPath();
  for (const side of [1, -1]) {
    const wa = n.wa * side, wb = n.wb * side, wm = n.wm * side;
    const A = side > 0 ? [n.ax + qx * wa, n.ay + qy * wa] : [n.bx + qx * wb, n.by + qy * wb];
    const B = side > 0 ? [n.bx + qx * wb, n.by + qy * wb] : [n.ax + qx * wa, n.ay + qy * wa];
    const s = side > 0 ? 1 : -1, M = [mx + qx * wm, my + qy * wm];
    if (side > 0) ctx.moveTo(A[0], A[1]); else ctx.lineTo(A[0], A[1]);
    ctx.bezierCurveTo(A[0] + ux * c * s, A[1] + uy * c * s + n.sag * 0.4, M[0] - ux * c * s, M[1] - uy * c * s, M[0], M[1]);
    ctx.bezierCurveTo(M[0] + ux * c * s, M[1] + uy * c * s, B[0] - ux * c * s, B[1] - uy * c * s + n.sag * 0.4, B[0], B[1]);
  }
  ctx.closePath();
}

export function drawStrands(fill) {
  const ctx = D.ctx;
  ctx.lineJoin = 'round';
  if (!fill) gatherNecks();
  for (const g of necks.values()) {
    const n = g.shape || (g.shape = neckShape(g));
    if (n.L < 6) continue;   // goo shows once it stretches; touching cats just touch
    neckPath(n);
    if (!fill) { ctx.lineWidth = 6; ctx.strokeStyle = INK; ctx.stroke(); continue; }
    const ca = (g.A.col || CATS[g.A.level]).fill;
    if (g.B) {
      const gr = ctx.createLinearGradient(n.ax, n.ay, n.bx, n.by), cb = (g.B.col || CATS[g.B.level]).fill;
      gr.addColorStop(0.25, ca); gr.addColorStop(0.75, cb);
      ctx.fillStyle = gr;
    } else ctx.fillStyle = ca;
    ctx.fill();
  }
}

// ---------- container ----------
function poly(line) { const ctx = D.ctx; ctx.beginPath(); line.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); }

export function drawContainerBack(map, warn, guideX, guideOn) {
  const ctx = D.ctx;
  poly(map.lines[0]); ctx.closePath(); ctx.fillStyle = map.inside; ctx.fill();
  // hanging toys sit behind the cats, so a cat draped over one covers it
  for (const [x, y, pr] of map.pegs) {
    ctx.beginPath(); ctx.arc(x, y, pr, 0, Math.PI * 2); ctx.fillStyle = '#FF9F4A'; ctx.fill(); ctx.lineWidth = 3; ctx.strokeStyle = INK; ctx.lineJoin = 'round'; ctx.stroke();
    ctx.beginPath(); ctx.arc(x - pr * 0.3, y - pr * 0.3, pr * 0.25, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.fill();
    ctx.beginPath(); ctx.moveTo(x, y - pr); ctx.lineTo(x, -40); ctx.lineWidth = 2; ctx.strokeStyle = INK; ctx.stroke();
  }
  ctx.setLineDash([10, 8]); ctx.lineWidth = warn ? 3 : 2;
  ctx.strokeStyle = warn ? `rgba(255,45,85,${0.55 + 0.45 * Math.sin(D.time * 14)})` : 'rgba(59,35,66,0.25)';
  ctx.beginPath(); ctx.moveTo(map.drop[0] + 6, 0); ctx.lineTo(map.drop[1] - 6, 0); ctx.stroke();
  if (guideOn) {
    ctx.setLineDash([4, 10]); ctx.lineCap = 'round'; ctx.strokeStyle = 'rgba(59,35,66,0.18)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(guideX, 4); ctx.lineTo(guideX, map.bounds.y1 - 10); ctx.stroke();
  }
  ctx.setLineDash([]);
}

export function drawContainerFront(map) {
  const ctx = D.ctx, r = map.r;
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  decoBack(map);
  for (const line of map.lines) {
    poly(line); ctx.lineWidth = 2 * r + 5; ctx.strokeStyle = INK; ctx.stroke();
    ctx.lineWidth = 2 * r; ctx.strokeStyle = map.wall; ctx.stroke();
  }
  ctx.save(); ctx.translate(-1.5, -1.5); ctx.globalAlpha = 0.55;
  for (const line of map.lines) { poly(line); ctx.lineWidth = 2; ctx.strokeStyle = '#fff'; ctx.stroke(); }
  ctx.restore();
}

// Little touches that say what the container is.
function decoBack(map) {
  const ctx = D.ctx, b = map.bounds;
  ctx.lineWidth = 3; ctx.strokeStyle = INK;
  if (map.id === 'bowl') {
    ctx.fillStyle = map.wall; rr2(120, 380, 160, 28, 10); ctx.fill(); ctx.stroke();
  } else if (map.id === 'mug') {
    ctx.beginPath(); ctx.ellipse(352, 300, 56, 120, 0, -Math.PI / 2, Math.PI / 2);
    ctx.lineWidth = 26; ctx.strokeStyle = INK; ctx.stroke(); ctx.lineWidth = 18; ctx.strokeStyle = map.wall; ctx.stroke();
  } else if (map.id === 'bathtub') {
    for (const x of [10, 350]) { ctx.fillStyle = '#E0B84A'; rr2(x, 522, 40, 34, 12); ctx.fill(); ctx.lineWidth = 3; ctx.strokeStyle = INK; ctx.stroke(); }
  } else if (map.id === 'fishbowl') {
    ctx.fillStyle = '#C9EEF9'; rr2(80, b.y1 - 6, 240, 18, 9); ctx.fill(); ctx.stroke();
  } else if (map.id === 'cattree') {
    ctx.fillStyle = '#E8C9A0'; rr2(-20, 600, 440, 22, 8); ctx.fill(); ctx.stroke();
  }
}
function rr2(x, y, w, h, r) {
  const ctx = D.ctx; r = Math.min(r, w / 2, h / 2);
  ctx.beginPath(); ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

// ---------- the dropper the cats ooze out of ----------
export function drawDropper(x, y, held) {
  const ctx = D.ctx, top = y - 64;
  ctx.lineJoin = 'round';
  ctx.fillStyle = '#FF9FB7'; rr2(x - 15, top - 22, 30, 26, 12); ctx.fill(); ctx.lineWidth = 3; ctx.strokeStyle = INK; ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.92)'; rr2(x - 9, top, 18, 30, 6); ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.8)'; rr2(x - 5, top + 4, 4, 18, 2); ctx.fill();
  if (held) {
    const h = HALF[held.wild ? 1 : held.level] * held.pop, cy = y + (1 - held.pop) * -30;
    if (h > 1) {
      const col = held.wild ? '#FFB3E6' : CATS[held.level].fill;
      bridge(x, top + 28, x, cy - h * 0.7, 6, 3.5, 0); ctx.lineWidth = 3; ctx.strokeStyle = INK; ctx.stroke(); ctx.fillStyle = col; ctx.fill();
      drawCatAt(held.level, held.wild, x, cy, h, { shape: SHAPES[held.wild ? 1 : held.level], squash: -0.05 + Math.sin(D.time * 4) * 0.03, mood: held.mood });
    }
  }
}

// ---------- effects ----------
export function drawFx(fx) {
  const ctx = D.ctx;
  for (const r of fx.rings) {
    const t = r.t / r.d;
    ctx.beginPath(); ctx.arc(r.x, r.y, r.r0 + (r.r1 - r.r0) * (1 - (1 - t) * (1 - t)), 0, Math.PI * 2);
    ctx.lineWidth = 9 * (1 - t); ctx.strokeStyle = `rgba(255,255,255,${0.9 * (1 - t)})`; ctx.stroke();
  }
  for (const p of fx.parts) {
    const k = 1 - p.t / p.d;
    if (p.star) { star(p.x, p.y, p.r * (0.4 + 0.6 * k), p.rot); ctx.fillStyle = p.c; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = INK; ctx.stroke(); continue; }
    const r = p.r * Math.sqrt(k), sp = Math.hypot(p.vx, p.vy), st = 1 + Math.min(0.9, sp / 900);
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(Math.atan2(p.vy, p.vx));
    ctx.beginPath(); ctx.ellipse(0, 0, r * st, r / Math.sqrt(st), 0, 0, Math.PI * 2);
    ctx.fillStyle = p.c; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = INK; ctx.stroke();
    ctx.restore();
  }
  for (const t of fx.texts) {
    if (t.t < 0) continue;
    const u = t.t / t.d, a = u > 0.7 ? 1 - (u - 0.7) / 0.3 : 1, sc = u < 0.25 ? easeOutBack(u / 0.25) : 1;
    ctx.save(); ctx.globalAlpha = a; ctx.translate(t.x, t.y - 50 * Math.sqrt(u)); ctx.scale(sc, sc);
    txt(t.s, 0, 0, t.size, t.color || '#fff', INK, t.size * 0.22);
    ctx.restore();
  }
}
