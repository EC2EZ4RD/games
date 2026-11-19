// Slime cats as soft bodies: a ring of particles per cat, held loosely to a cat-loaf rest shape by shape matching,
// kept smooth by surface tension, at its size by an area constraint, and slowed by internal viscosity.
// Verlet-integrated in substeps (position-based dynamics). Shape matching here has no rotation, so cats ooze
// instead of rolling and always stay upright. Touching slime glues together (see glue below).
import { STEP, SUB, GRAV, HALF } from './config.js';
import { clamp } from './util.js';

const AREA_K = 0.5, AIR = 0.9995, VMAX = 16, COLL_ITERS = 2;
const STATIC_FR = 0.2, BLOB_FR = 0.05;
const PIN_W = 0.1, LOWER_W = 0.6;                // particles on a wall, and the lower cat of a pair, act heavier
export const JIG_W = 2 * Math.PI * 2.0, JIG_Z = 0.85;  // slow squash that settles without wobbling: goo, not jelly
const WAVE_C = 130, WAVE_W = 2 * Math.PI * 2.4, WAVE_D = 8, WAVE_MAX = 0.14;   // surface ripples (drawing only)
const SURF = 0.05, VISC = 0.3;    // surface tension (smooths the outline), viscosity (neighbours move together)
// Glue: slime that touches sticks. A glue link pulls back once stretched past its rest length; its rest length
// creeps, so a steady pull (a cat's weight) slowly peels it off — it drips — while a yank stretches a neck; it
// snaps past max.
const GLUE_P = 0.05, GLUE_MAX = 220, GLUE_K = 0.02, GLUE_PER_CAT = 8, CREEP = 2.5;
const SHAKE_T = 0.7, SHAKE_A = 2600, SHAKE_F = 5;
// Slump: puddle size vs the loaf (before keeping the area), how fast a touching cat sags / a flying one balls up,
// and how fast the rest shape flows toward the shape the cat is squeezed into / sets back.
const PUD_W = 1.3, PUD_T = 0.78, PUD_B = 0.5, SAG_IN = 3.5, SAG_OUT = 5, FLOW = 3, SET = 1.5;

// idamp: damping of motion relative to a cat's centre. beta: share of a shape correction that does not turn
// into velocity (keeps landings from bouncing). magnet / stick are changed by cards.
export const tune = { idamp: 0.07, beta: 0.9, magnet: false, stick: 1 };

// ---------- shapes ----------
const polyArea = (x, y, n) => { let a = 0; for (let k = 0, j = n - 1; k < n; j = k++) a += x[j] * y[k] - x[k] * y[j]; return a * 0.5; };
function centre(x, y, n) {
  let mx = 0, my = 0;
  for (let k = 0; k < n; k++) { mx += x[k]; my += y[k]; }
  for (let k = 0; k < n; k++) { x[k] -= mx / n; y[k] -= my / n; }
}

// q: the upright cat loaf. f: the same particles slumped into a puddle (a sitting mochi: flat bottom, low dome),
// with the same area. A resting cat's rest shape sags from q toward f.
function makeShape(half, fixedN) {
  const M = 800, X = new Float64Array(M), Y = new Float64Array(M), e = 2 / 2.4, ax = half * 1.05, ay = half * 0.95;
  for (let i = 0; i < M; i++) {
    const t = i / M * Math.PI * 2, c = Math.cos(t), s = Math.sin(t);
    X[i] = Math.sign(c) * Math.pow(Math.abs(c), e) * ax;
    Y[i] = Math.sign(s) * Math.pow(Math.abs(s), e) * ay;
  }
  const cum = new Float64Array(M + 1);
  for (let i = 1; i <= M; i++) { const j = i % M; cum[i] = cum[i - 1] + Math.hypot(X[j] - X[i - 1], Y[j] - Y[i - 1]); }
  const total = cum[M];
  const n = fixedN || clamp(Math.round(total / 10), 16, 30);
  const qx = new Float64Array(n), qy = new Float64Array(n), fx = new Float64Array(n), fy = new Float64Array(n);
  let seg = 0;
  for (let k = 0; k < n; k++) {
    const d = (k + 0.5) * total / n;
    while (cum[seg + 1] < d) seg++;
    const t = (d - cum[seg]) / (cum[seg + 1] - cum[seg]), j = (seg + 1) % M;
    qx[k] = X[seg] + (X[j] - X[seg]) * t; qy[k] = Y[seg] + (Y[j] - Y[seg]) * t;
    const a = (seg + t) / M * Math.PI * 2, c = Math.cos(a), s = Math.sin(a), up = s < 0, pe = up ? 2 / 2.1 : 2 / 4.5;
    fx[k] = Math.sign(c) * Math.pow(Math.abs(c), pe) * ax * PUD_W;
    fy[k] = Math.sign(s) * Math.pow(Math.abs(s), pe) * ay * (up ? PUD_T : PUD_B);
  }
  centre(qx, qy, n); centre(fx, fy, n);
  const area = polyArea(qx, qy, n), fk = Math.sqrt(area / polyArea(fx, fy, n));
  let br = 0, sxx = 0, sxy = 0, syy = 0, fw = 0, fh = 0;
  for (let k = 0; k < n; k++) {
    fx[k] *= fk; fy[k] *= fk;
    br = Math.max(br, Math.hypot(qx[k], qy[k]));
    sxx += qx[k] * qx[k]; sxy += qx[k] * qy[k]; syy += qy[k] * qy[k];
    fw += fx[k] * qx[k]; fh += fy[k] * qy[k];
  }
  const det = sxx * syy - sxy * sxy;
  // pw / ph: how much wider / lower the puddle is than the loaf (least squares), for the face
  return { half, n, qx, qy, fx, fy, area, br, perim: total, iqq: [syy / det, -sxy / det, -sxy / det, sxx / det], pw: fw / sxx, ph: fh / syy };
}
export const SHAPES = HALF.map(h => makeShape(h));
export const UI_SHAPE = makeShape(1, 24);

// ---------- cats ----------
let nextId = 1;
export class Blob {
  constructor(level, x, y, scale = 1, wild = false) {
    const S = SHAPES[wild ? 1 : level], n = S.n;
    this.id = nextId++; this.level = level; this.wild = wild; this.S = S; this.n = n;
    this.px = new Float64Array(n); this.py = new Float64Array(n);
    this.ox = new Float64Array(n); this.oy = new Float64Array(n);
    this.pin = new Uint8Array(n);
    this.rx = Float64Array.from(S.qx); this.ry = Float64Array.from(S.qy);   // current rest shape (it sags and flows)
    this.sag = 0;
    for (let i = 0; i < n; i++) {
      this.px[i] = this.ox[i] = x + S.qx[i] * scale;
      this.py[i] = this.oy[i] = y + S.qy[i] * scale;
    }
    this.im = n / Math.pow(S.half, 1.3);    // inverse particle mass: bigger cats win pushes, but not crushingly
    this.k = 0.06 - 0.0035 * (wild ? 1 : level);  // shape stiffness: small cats firmer, big ones slump more
    this.glueCap = Math.min(GLUE_PER_CAT, n >> 2);   // small cats take fewer glue links, so neighbours cannot tear them
    this.scale = scale; this.scaleV = 0;
    this.cx = x; this.cy = y; this.br = S.br * scale + 4;
    const e = this.br; this.x0 = x - e; this.x1 = x + e; this.y0 = y - e; this.y1 = y + e;   // bounding box (+3 px)
    this.lcx = x; this.lcy = y; this.vx = 0; this.vy = 0;
    this.age = 0; this.fresh = 2; this.merging = false; this.dead = false;
    this.landed = false; this.touch = false; this.danger = false;
    this.wl = 0; this.wr = 0;               // touching a wall on its left / right this step
    this.ja = 0; this.jb = 0; this.jaV = 0; this.jbV = 0; this.flash = 0;
    this.wh = new Float64Array(n); this.wv = new Float64Array(n);   // ripple height / speed along the outline
    const sp = S.perim / n; this.wc2 = (WAVE_C / sp) * (WAVE_C / sp);
    this.mix = 1; this.fromRgb = null; this.melt = null;
    this.mood = ''; this.moodT = 0; this.blinkT = 1 + Math.random() * 4;
    this.noMerge = 0;                       // seconds this cat may not merge (fresh split halves)
    this.sn = 0;                            // glue links attached to this cat
  }
  get half() { return this.S.half * this.scale; }
  setVel(vx, vy) {
    const d = STEP / SUB;
    for (let i = 0; i < this.n; i++) { this.ox[i] = this.px[i] - vx * d; this.oy[i] = this.py[i] - vy * d; }
    this.vx = vx; this.vy = vy;
  }
  addVel(vx, vy) {
    const d = STEP / SUB;
    for (let i = 0; i < this.n; i++) { this.ox[i] -= vx * d; this.oy[i] -= vy * d; }
  }
  kick(dx, dy, m) {   // squash along (dx, dy), and send a ripple out from the side that was hit
    this.jaV -= m * (dx * dx - dy * dy) * JIG_W;
    this.jbV -= m * 2 * dx * dy * JIG_W;
    const amp = m * this.half * 9;
    for (let i = 0; i < this.n; i++) {
      const rx = this.px[i] - this.cx, ry = this.py[i] - this.cy, d = -(rx * dx + ry * dy) / (Math.hypot(rx, ry) || 1);
      this.wv[i] += d > 0 ? -amp * d * d : amp * 0.3 * d * d;
    }
  }
  wobble(a) {         // random low-mode surface wobble, e.g. right after a merge
    const ph = Math.random() * Math.PI * 2, k = 2 + (Math.random() * 3 | 0);
    for (let i = 0; i < this.n; i++) this.wv[i] += a * Math.sin(k * i / this.n * Math.PI * 2 + ph);
  }
  feel(mood, t) { this.mood = mood; this.moodT = t; }
}

// ---------- world ----------
// on: callbacks the game sets — land(b, m, first), snap(x, y, b), spill(b)
export const world = {
  blobs: [], segs: [], pts: [], strands: [], merges: [], killY: 1e9, canMerge: true, shakeT: 0,
  on: { land() {}, snap() {}, spill() {} },
};

export function setColliders(lines, pegs, r, killY) {
  const segs = [], pts = [];
  for (const line of lines) {
    for (let i = 0; i + 1 < line.length; i++) {
      const [ax, ay] = line[i], [bx, by] = line[i + 1], ex = bx - ax, ey = by - ay;
      segs.push({ ax, ay, bx, by, r, ex, ey, l2: ex * ex + ey * ey || 1e-9,
        x0: Math.min(ax, bx) - r, x1: Math.max(ax, bx) + r, y0: Math.min(ay, by) - r, y1: Math.max(ay, by) + r });
    }
    for (const [x, y] of line) pts.push({ x, y, r });
  }
  for (const [x, y, pr] of pegs) {
    segs.push({ ax: x, ay: y, bx: x, by: y, r: pr, ex: 0, ey: 0, l2: 1e-9, x0: x - pr, x1: x + pr, y0: y - pr, y1: y + pr });
    pts.push({ x, y, r: pr });
  }
  world.segs = segs; world.pts = pts; world.killY = killY;
}

export function clearWorld() { world.blobs = []; world.strands = []; world.merges = []; world.shakeT = 0; }
export function shake() { world.shakeT = SHAKE_T; for (const b of world.blobs) b.addVel((Math.random() - 0.5) * 120, -260); }

const VX = new Float64Array(64), VY = new Float64Array(64);
function integrate(b, gx, gy) {
  const n = b.n, px = b.px, py = b.py, ox = b.ox, oy = b.oy;
  let mx = 0, my = 0;
  for (let i = 0; i < n; i++) { mx += px[i] - ox[i]; my += py[i] - oy[i]; }
  mx /= n; my /= n;
  const keep = 1 - tune.idamp;
  for (let i = 0; i < n; i++) { VX[i] = px[i] - ox[i]; VY[i] = py[i] - oy[i]; }
  for (let i = 0; i < n; i++) {
    const p = i === 0 ? n - 1 : i - 1, q = i + 1 === n ? 0 : i + 1;
    let vx = VX[i] + ((VX[p] + VX[q]) * 0.5 - VX[i]) * VISC, vy = VY[i] + ((VY[p] + VY[q]) * 0.5 - VY[i]) * VISC;
    vx = (mx + (vx - mx) * keep) * AIR; vy = (my + (vy - my) * keep) * AIR;
    const v2 = vx * vx + vy * vy;
    if (v2 > VMAX * VMAX) { const f = VMAX / Math.sqrt(v2); vx *= f; vy *= f; }
    ox[i] = px[i]; oy[i] = py[i];
    px[i] += vx + gx; py[i] += vy + gy;
  }
}

function grow(b, dt) {
  if (b.scale === 1 && b.scaleV === 0) return;
  b.scaleV += (-420 * (b.scale - 1) - 14 * b.scaleV) * dt;
  b.scale += b.scaleV * dt;
  if (Math.abs(b.scale - 1) < 1e-4 && Math.abs(b.scaleV) < 1e-3) { b.scale = 1; b.scaleV = 0; }
}

function shapeMatch(b) {
  const n = b.n, px = b.px, py = b.py, ox = b.ox, oy = b.oy, qx = b.rx, qy = b.ry, s = b.scale, k = b.k, beta = tune.beta;
  let cx = 0, cy = 0, r2 = 0, x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (let i = 0; i < n; i++) {
    const x = px[i], y = py[i];
    cx += x; cy += y;
    if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
  }
  cx /= n; cy /= n;
  for (let i = 0; i < n; i++) { const dx = px[i] - cx, dy = py[i] - cy; r2 = Math.max(r2, dx * dx + dy * dy); }
  // a box fits a slumped (flat) cat far tighter than a circle, so pair and particle tests use it
  b.cx = cx; b.cy = cy; b.br = Math.sqrt(r2) + 4; b.x0 = x0 - 3; b.x1 = x1 + 3; b.y0 = y0 - 3; b.y1 = y1 + 3;
  for (let i = 0; i < n; i++) {
    const ex = (cx + qx[i] * s - px[i]) * k, ey = (cy + qy[i] * s - py[i]) * k;
    px[i] += ex; py[i] += ey; ox[i] += ex * beta; oy[i] += ey * beta;
  }
}

const GX = new Float64Array(64), GY = new Float64Array(64);
// Surface tension: each particle is pulled toward the middle of its neighbours, so the outline stays a smooth
// blob (areaFix then puts back the size this takes).
function surface(b) {
  const n = b.n, px = b.px, py = b.py, ox = b.ox, oy = b.oy, beta = tune.beta;
  for (let i = 0; i < n; i++) {
    const p = i === 0 ? n - 1 : i - 1, q = i + 1 === n ? 0 : i + 1;
    GX[i] = ((px[p] + px[q]) * 0.5 - px[i]) * SURF; GY[i] = ((py[p] + py[q]) * 0.5 - py[i]) * SURF;
  }
  for (let i = 0; i < n; i++) { px[i] += GX[i]; py[i] += GY[i]; ox[i] += GX[i] * beta; oy[i] += GY[i] * beta; }
}

function areaFix(b) {
  const n = b.n, px = b.px, py = b.py;
  let A = 0, sum = 0;
  for (let i = 0, j = n - 1; i < n; j = i++) A += px[j] * py[i] - px[i] * py[j];
  const C = A * 0.5 - b.S.area * b.scale * b.scale;
  for (let i = 0; i < n; i++) {
    const p = i === 0 ? n - 1 : i - 1, q = i + 1 === n ? 0 : i + 1;
    GX[i] = 0.5 * (py[q] - py[p]); GY[i] = 0.5 * (px[p] - px[q]);
    sum += GX[i] * GX[i] + GY[i] * GY[i];
  }
  if (sum < 1e-9) return;
  const lam = -C / sum * AREA_K, lb = lam * tune.beta, ox = b.ox, oy = b.oy;
  for (let i = 0; i < n; i++) { px[i] += lam * GX[i]; py[i] += lam * GY[i]; ox[i] += lb * GX[i]; oy[i] += lb * GY[i]; }
}

export function inPoly(x, y, B) {
  const Bx = B.px, By = B.py, n = B.n;
  let inside = false;
  for (let j = 0, k = n - 1; j < n; k = j++) {
    const yj = By[j], yk = By[k];
    if ((yj > y) !== (yk > y) && x < (Bx[k] - Bx[j]) * (y - yj) / (yk - yj) + Bx[j]) inside = !inside;
  }
  return inside;
}

// Push A's particles out of B's polygon; the pushed edge of B moves the other way.
function pushOut(A, B) {
  const Bx = B.px, By = B.py, n = B.n, bcx = B.cx, bcy = B.cy, pA = A.pin, pB = B.pin, X0 = B.x0, X1 = B.x1, Y0 = B.y0, Y1 = B.y1;
  const lower = A.cy > B.cy ? 0 : 1;
  const wA0 = A.im * (lower === 0 ? LOWER_W : 1), wB0 = B.im * (lower === 1 ? LOWER_W : 1);
  // only A's side facing B can be inside B (deeper cases are left to unembed)
  let ux = bcx - A.cx, uy = bcy - A.cy, hit = 0;
  const ul = Math.hypot(ux, uy) || 1, back = -0.3 * A.half, acx = A.cx, acy = A.cy;
  ux /= ul; uy /= ul;
  for (let i = 0; i < A.n; i++) {
    const x = A.px[i], y = A.py[i], dx = x - bcx, dy = y - bcy;
    if (x < X0 || x > X1 || y < Y0 || y > Y1 || (x - acx) * ux + (y - acy) * uy < back) continue;
    let inside = false;
    for (let j = 0, k = n - 1; j < n; k = j++) {
      const yj = By[j], yk = By[k];
      if ((yj > y) !== (yk > y) && x < (Bx[k] - Bx[j]) * (y - yj) / (yk - yj) + Bx[j]) inside = !inside;
    }
    if (!inside) continue;
    let best = 1e18, bj = 0, bt = 0, bqx = 0, bqy = 0;
    for (let j = 0; j < n; j++) {
      const k = j + 1 === n ? 0 : j + 1, ax = Bx[j], ay = By[j], ex = Bx[k] - ax, ey = By[k] - ay;
      let t = ((x - ax) * ex + (y - ay) * ey) / (ex * ex + ey * ey || 1e-9);
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const qx = ax + ex * t, qy = ay + ey * t, ddx = qx - x, ddy = qy - y, d2 = ddx * ddx + ddy * ddy;
      if (d2 < best) { best = d2; bj = j; bt = t; bqx = qx; bqy = qy; }
    }
    let d = Math.sqrt(best);
    if ((bqx - x) * dx + (bqy - y) * dy < 0) {
      // The nearest way out leads back toward B's centre (B has wrapped around us): exit radially instead.
      const rl = Math.sqrt(dx * dx + dy * dy) || 1e-6, ux = dx / rl, uy = dy / rl;
      let tBest = 1e18;
      for (let j = 0; j < n; j++) {
        const k = j + 1 === n ? 0 : j + 1, ax = Bx[j] - bcx, ay = By[j] - bcy, ex = Bx[k] - Bx[j], ey = By[k] - By[j];
        const den = ux * ey - uy * ex;
        if (Math.abs(den) < 1e-9) continue;
        const t = (ax * ey - ay * ex) / den, s = (ax * uy - ay * ux) / den;
        if (s >= 0 && s <= 1 && t > rl && t < tBest) { tBest = t; bj = j; bt = s; }
      }
      if (tBest === 1e18) continue;
      bqx = bcx + ux * tBest; bqy = bcy + uy * tBest; d = tBest - rl;
    }
    if (d < 1e-7) continue;
    const nx = (bqx - x) / d, ny = (bqy - y) / d, bk = bj + 1 === n ? 0 : bj + 1;
    const wA = pA[i] ? wA0 * PIN_W : wA0, wB1 = (pB[bj] ? wB0 * PIN_W : wB0) * (1 - bt), wB2 = (pB[bk] ? wB0 * PIN_W : wB0) * bt;
    const wsum = wA + wB1 * (1 - bt) + wB2 * bt, lam = d / wsum;
    A.px[i] += nx * lam * wA; A.py[i] += ny * lam * wA;
    Bx[bj] -= nx * lam * wB1; By[bj] -= ny * lam * wB1;
    Bx[bk] -= nx * lam * wB2; By[bk] -= ny * lam * wB2;
    const rvx = (A.px[i] - A.ox[i]) - ((Bx[bj] - B.ox[bj]) * (1 - bt) + (Bx[bk] - B.ox[bk]) * bt);
    const rvy = (A.py[i] - A.oy[i]) - ((By[bj] - B.oy[bj]) * (1 - bt) + (By[bk] - B.oy[bk]) * bt);
    const vn = rvx * nx + rvy * ny, tx = rvx - vn * nx, ty = rvy - vn * ny, f = BLOB_FR / wsum;
    A.ox[i] += tx * f * wA; A.oy[i] += ty * f * wA;
    B.ox[bj] -= tx * f * wB1; B.oy[bj] -= ty * f * wB1;
    B.ox[bk] -= tx * f * wB2; B.oy[bk] -= ty * f * wB2;
    if (A.sn < A.glueCap && B.sn < B.glueCap && Math.random() < GLUE_P * tune.stick && world.strands.length < GLUE_MAX) {
      A.sn++; B.sn++;
      world.strands.push({ a: A, i, b: B, j: bj, t: bt, rest: 0, max: glueMax(A, B), k: GLUE_K, age: 0 });
    }
    hit++;
  }
  return hit;
}

// Same-number cats merge when their outlines touch, even without overlap.
function nearTouch(A, B, m) {
  const Bx = B.px, By = B.py, n = B.n, m2 = m * m, X0 = B.x0 - m, X1 = B.x1 + m, Y0 = B.y0 - m, Y1 = B.y1 + m;
  for (let i = 0; i < A.n; i++) {
    const x = A.px[i], y = A.py[i];
    if (x < X0 || x > X1 || y < Y0 || y > Y1) continue;
    for (let j = 0; j < n; j++) {
      const k = j + 1 === n ? 0 : j + 1, ax = Bx[j], ay = By[j], ex = Bx[k] - ax, ey = By[k] - ay;
      let t = ((x - ax) * ex + (y - ay) * ey) / (ex * ex + ey * ey || 1e-9);
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const qx = ax + ex * t - x, qy = ay + ey * t - y;
      if (qx * qx + qy * qy < m2) return true;
    }
  }
  return false;
}

export const mergeable = (A, B) => !A.merging && !B.merging && A.noMerge <= 0 && B.noMerge <= 0 && (A.wild || B.wild || A.level === B.level);

// Container walls are thick capsules; corners and pegs also push cat edges that slide over them.
function collideStatic(b) {
  const n = b.n, px = b.px, py = b.py, ox = b.ox, oy = b.oy, pin = b.pin, R = b.br;
  for (let i = 0; i < n; i++) pin[i] = 0;
  for (const s of world.segs) {
    if (b.x1 + 4 < s.x0 || b.x0 - 4 > s.x1 || b.y1 + 4 < s.y0 || b.y0 - 4 > s.y1) continue;
    const r = s.r, r2 = r * r;
    for (let i = 0; i < n; i++) {
      const x = px[i], y = py[i];
      let t = ((x - s.ax) * s.ex + (y - s.ay) * s.ey) / s.l2;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const qx = s.ax + s.ex * t, qy = s.ay + s.ey * t;
      let dx = x - qx, dy = y - qy;
      const d2 = dx * dx + dy * dy;
      if (d2 >= r2) continue;
      let d = Math.sqrt(d2);
      if (d < 1e-6) { dx = b.cx - qx; dy = b.cy - qy; d = Math.hypot(dx, dy) || 1; }
      const nx = dx / d, ny = dy / d;
      px[i] = qx + nx * r; py[i] = qy + ny * r;
      let vx = px[i] - ox[i], vy = py[i] - oy[i];
      const vn = vx * nx + vy * ny, tx = vx - vn * nx, ty = vy - vn * ny, vk = vn < 0 ? 0 : vn;
      vx = vk * nx + tx * (1 - STATIC_FR); vy = vk * ny + ty * (1 - STATIC_FR);
      ox[i] = px[i] - vx; oy[i] = py[i] - vy;
      pin[i] = 1; b.touch = true;
      if (nx > 0.35) b.wl = 1; else if (nx < -0.35) b.wr = 1;
      if (b.sn < b.glueCap && Math.random() < GLUE_P * 0.3 * tune.stick && world.strands.length < GLUE_MAX) {
        b.sn++;
        world.strands.push({ a: b, i, b: null, x: qx + nx * r, y: qy + ny * r, nx, ny, rest: 0, max: 18 + b.half * 0.8, k: GLUE_K * 0.7, age: 0 });
      }
    }
  }
  for (const p of world.pts) {
    const dxc = p.x - b.cx, dyc = p.y - b.cy, rr = R + p.r;
    if (dxc * dxc + dyc * dyc > rr * rr) continue;
    const r = p.r, r2 = r * r;
    for (let j = 0; j < n; j++) {
      const k = j + 1 === n ? 0 : j + 1, ax = px[j], ay = py[j], ex = px[k] - ax, ey = py[k] - ay;
      const t = ((p.x - ax) * ex + (p.y - ay) * ey) / (ex * ex + ey * ey || 1e-9);
      if (t <= 0 || t >= 1) continue;   // ends are particles, handled above
      const qx = ax + ex * t, qy = ay + ey * t, dx = qx - p.x, dy = qy - p.y, d2 = dx * dx + dy * dy;
      if (d2 >= r2) continue;
      const d = Math.sqrt(d2) || 1e-6, push = (r - d) / ((1 - t) * (1 - t) + t * t), nx = dx / d, ny = dy / d;
      px[j] += nx * push * (1 - t); py[j] += ny * push * (1 - t);
      px[k] += nx * push * t; py[k] += ny * push * t;
      pin[j] = pin[k] = 1; b.touch = true;
    }
  }
}

function shift(b, dx, dy) {
  for (let i = 0; i < b.n; i++) { b.px[i] += dx; b.py[i] += dy; b.ox[i] += dx; b.oy[i] += dy; }
  b.cx += dx; b.cy += dy;
}

// Last resort: a cat whose centre ended up inside a bigger one is walked back out.
function unembed() {
  const L = world.blobs, n = L.length;
  for (let i = 0; i < n; i++) {
    const A = L[i];
    for (let j = 0; j < n; j++) {
      const B = L[j];
      if (i === j || A.S.half > B.S.half) continue;
      const dx = A.cx - B.cx, dy = A.cy - B.cy;
      if (dx * dx + dy * dy > B.br * B.br || !inPoly(A.cx, A.cy, B)) continue;
      const d = Math.hypot(dx, dy), ux = d > 1e-3 ? dx / d : 0, uy = d > 1e-3 ? dy / d : -1;
      shift(A, ux * 3, uy * 3); shift(B, -ux, -uy);
    }
  }
}

// Glue links: a particle stuck to a point on another cat (or a wall) until stretched too far.
function strands(h) {
  const out = [];
  for (const b of world.blobs) b.sn = 0;
  for (const s of world.strands) {
    if (s.a.dead || (s.b && s.b.dead)) continue;
    const A = s.a, ax = A.px[s.i], ay = A.py[s.i];
    let bx, by, k = 0;
    if (s.b) { const B = s.b; k = s.j + 1 === B.n ? 0 : s.j + 1; bx = B.px[s.j] + (B.px[k] - B.px[s.j]) * s.t; by = B.py[s.j] + (B.py[k] - B.py[s.j]) * s.t; }
    else if (s.nx !== undefined) {
      // a wall thread's foot slides along the wall after the cat, so it only stretches when pulled off the wall
      const tx = ax - s.x, ty = ay - s.y, tn = tx * s.nx + ty * s.ny;
      s.x += (tx - tn * s.nx) * 0.5; s.y += (ty - tn * s.ny) * 0.5;
      bx = s.x; by = s.y;
    } else { bx = s.x; by = s.y; }
    const dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy);
    s.age += h;
    if (L > s.max) { world.on.snap((ax + bx) / 2, (ay + by) / 2, A); continue; }
    if (s.k) {
      if (L < s.rest) s.rest = L; else s.rest += (L - s.rest) * CREEP * h;
      const e = L - s.rest;
      if (e > 0.3) {
        const f = s.k * e / L;
        A.px[s.i] += dx * f; A.py[s.i] += dy * f;
        if (s.b) {
          const B = s.b;
          B.px[s.j] -= dx * f * (1 - s.t); B.py[s.j] -= dy * f * (1 - s.t);
          B.px[k] -= dx * f * s.t; B.py[k] -= dy * f * s.t;
        }
      }
    }
    s.ax = ax; s.ay = ay; s.bx = bx; s.by = by; s.L = L;
    A.sn++; if (s.b) s.b.sn++;
    out.push(s);
  }
  world.strands = out;
}

const glueMax = (A, B) => 26 + 1.1 * Math.min(A.half, B.half);

// Glue two cats together with a few more links (when you poke, pet or shake them), from A's particles
// nearest to B onto B's outline.
export function stickPair(A, B, count) {
  const idx = [];
  for (let i = 0; i < A.n; i++) idx.push([Math.hypot(A.px[i] - B.cx, A.py[i] - B.cy), i]);
  idx.sort((p, q) => p[0] - q[0]);
  for (let c = 0; c < count && c < idx.length && world.strands.length < GLUE_MAX + 24; c++) {
    const i = idx[c * 2 % idx.length][1], x = A.px[i], y = A.py[i];
    let best = 1e18, bj = 0, bt = 0;
    for (let j = 0; j < B.n; j++) {
      const k = j + 1 === B.n ? 0 : j + 1, ex = B.px[k] - B.px[j], ey = B.py[k] - B.py[j];
      const t = clamp(((x - B.px[j]) * ex + (y - B.py[j]) * ey) / (ex * ex + ey * ey || 1e-9), 0, 1);
      const d = Math.hypot(B.px[j] + ex * t - x, B.py[j] + ey * t - y);
      if (d < best) { best = d; bj = j; bt = t; }
    }
    if (best < glueMax(A, B) * 0.5) world.strands.push({ a: A, i, b: B, j: bj, t: bt, rest: best, max: glueMax(A, B) * 1.3, k: GLUE_K, age: 0 });
  }
}

export function addHolderStrand(b, x, y) {
  let top = 0;
  for (let i = 1; i < b.n; i++) if (b.py[i] < b.py[top]) top = i;
  world.strands.push({ a: b, i: top, b: null, x, y, max: 80, k: 0, age: 0, holder: true });
}

function magnet(h) {
  const L = world.blobs, n = L.length;
  for (let i = 0; i < n; i++) {
    const A = L[i];
    for (let j = i + 1; j < n; j++) {
      const B = L[j];
      if (A.level !== B.level || A.wild || B.wild) continue;
      const dx = B.cx - A.cx, dy = B.cy - A.cy, d = Math.hypot(dx, dy), lim = (A.half + B.half) * 1.9;
      if (d > lim || d < 1) continue;
      const a = 900 * (1 - d / lim) * h;
      A.addVel(dx / d * a, dy / d * a); B.addVel(-dx / d * a, -dy / d * a);
    }
  }
}

function ripple(b, h) {
  const n = b.n, wh = b.wh, wv = b.wv, c2 = b.wc2, lim = b.half * WAVE_MAX;
  for (let i = 0; i < n; i++) {
    const l = wh[i === 0 ? n - 1 : i - 1] + wh[i + 1 === n ? 0 : i + 1] - 2 * wh[i];
    wv[i] += (c2 * l - WAVE_W * WAVE_W * wh[i] - WAVE_D * wv[i]) * h;
  }
  for (let i = 0; i < n; i++) wh[i] = clamp(wh[i] + wv[i] * h, -lim, lim);
}

// A cat that rests on something sags toward its puddle; one in the air balls back up. Its rest shape also flows
// toward the shape it is squeezed into and slowly sets back, so cats pour into corners and drape over things.
// A cat wedged between walls on both sides does not slump, so it still squeezes through a narrow neck.
function relax(b, h, cx, cy) {
  const S = b.S, n = b.n, rx = b.rx, ry = b.ry, tgt = b.touch && !(b.wl && b.wr) ? 1 : 0, s = b.scale, fl = FLOW * h, st = SET * h;
  b.sag += (tgt - b.sag) * Math.min(1, (tgt > b.sag ? SAG_IN : SAG_OUT) * h);
  const sg = b.sag;
  for (let i = 0; i < n; i++) {
    const tx = S.qx[i] + (S.fx[i] - S.qx[i]) * sg, ty = S.qy[i] + (S.fy[i] - S.qy[i]) * sg;
    rx[i] += ((b.px[i] - cx) / s - rx[i]) * fl + (tx - rx[i]) * st;
    ry[i] += ((b.py[i] - cy) / s - ry[i]) * fl + (ty - ry[i]) * st;
  }
  // The rest shape takes the squeezed shape, never the lost size: keep it centred and at the cat's full area.
  centre(rx, ry, n);
  const A = polyArea(rx, ry, n);
  if (A < S.area * 0.3) { rx.set(S.qx); ry.set(S.qy); return; }   // tangled: start over from the loaf
  const k = clamp(Math.sqrt(S.area / A), 0.9, 1.1);
  for (let i = 0; i < n; i++) { rx[i] *= k; ry[i] *= k; }
}

function post(h) {
  for (const b of world.blobs) {
    const n = b.n;
    let cx = 0, cy = 0;
    for (let i = 0; i < n; i++) { cx += b.px[i]; cy += b.py[i]; }
    cx /= n; cy /= n;
    if (!isFinite(cx) || !isFinite(cy)) { b.dead = true; continue; }
    if (cy > world.killY) { b.dead = true; world.on.spill(b); continue; }
    const vx = (cx - b.lcx) / h, vy = (cy - b.lcy) / h;
    b.lcx = cx; b.lcy = cy;
    if (b.fresh > 0) b.fresh--;
    else {
      const dvx = vx - b.vx, dvy = vy - b.vy - GRAV * h, m = Math.hypot(dvx, dvy);
      if (m > 140) b.kick(dvx / m, dvy / m, Math.min(0.22, m / 3600));
      if (!b.landed && (b.touch || m > 140)) { b.landed = true; world.on.land(b, m, true); }
      else if (m > 900) world.on.land(b, m, false);
    }
    relax(b, h, cx, cy);
    b.vx = vx; b.vy = vy; b.age += h; b.touch = false; b.wl = b.wr = 0;
    b.jaV += (-JIG_W * JIG_W * b.ja - 2 * JIG_Z * JIG_W * b.jaV) * h; b.ja += b.jaV * h;
    b.jbV += (-JIG_W * JIG_W * b.jb - 2 * JIG_Z * JIG_W * b.jbV) * h; b.jb += b.jbV * h;
    b.ja = clamp(b.ja, -0.28, 0.28); b.jb = clamp(b.jb, -0.28, 0.28);
    ripple(b, h);
    if (b.flash > 0) b.flash = Math.max(0, b.flash - h * 5);
    if (b.noMerge > 0) b.noMerge -= h;
  }
  if (world.blobs.some(b => b.dead)) world.blobs = world.blobs.filter(b => !b.dead);
}

let pairHit = new Uint8Array(256);
export function step(h) {
  const dt = h / SUB, list = world.blobs, n = list.length;
  if (pairHit.length < n * n) pairHit = new Uint8Array(n * n * 2);
  for (let s = 0; s < SUB; s++) {
    let gx = 0;
    if (world.shakeT > 0) {
      world.shakeT -= dt;
      gx = SHAKE_A * Math.sin((SHAKE_T - world.shakeT) * SHAKE_F * Math.PI * 2) * (world.shakeT / SHAKE_T) * dt * dt;
    }
    for (let i = 0; i < n; i++) integrate(list[i], gx, GRAV * dt * dt);
    for (let i = 0; i < n; i++) { const b = list[i]; grow(b, dt); shapeMatch(b); surface(b); areaFix(b); }
    // later passes only revisit pairs that overlapped in the first (flat cats have many near-miss neighbours)
    for (let it = 0; it < COLL_ITERS; it++) {
      for (let i = 0, c = 0; i < n; i++) {
        const A = list[i];
        for (let j = i + 1; j < n; j++, c++) {
          const B = list[j];
          if (it > 0 && !pairHit[c]) continue;
          if (A.x0 > B.x1 + 7 || B.x0 > A.x1 + 7 || A.y0 > B.y1 + 7 || B.y0 > A.y1 + 7) { pairHit[c] = 0; continue; }
          const hit = pushOut(A, B) + pushOut(B, A);
          if (it === 0) pairHit[c] = hit ? 1 : 0;
          if (hit) A.touch = B.touch = true;
          // merge when the drawn outlines touch: 3 px of ink on each cat
          if (it === 0 && world.canMerge && mergeable(A, B) && (hit || nearTouch(A, B, 7))) {
            A.merging = B.merging = true; world.merges.push(A, B);
          }
        }
      }
    }
    for (let i = 0; i < n; i++) collideStatic(list[i]);
  }
  strands(h);
  unembed();
  if (tune.magnet) magnet(h);
  post(h);
}
