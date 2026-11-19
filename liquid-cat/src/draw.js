// Shared canvas state and small drawing helpers. UI is drawn in "virtual" units (a 440 × 830 design
// scaled to the screen); the container world has its own scale wk and offset (wox, woy) inside that.
import { INK, FONT } from './config.js';

export const D = { ctx: null, time: 0 };
export const L = { dpr: 1, ui: 1, VW: 440, VH: 830, sT: 0, sB: 0, hudY: 12, toolY: 760, wk: 1, wox: 0, woy: 0 };
export const RX = new Float64Array(64), RY = new Float64Array(64);

export function layout(canvas, safeEl, map) {
  const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
  L.dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.round(w * L.dpr); canvas.height = Math.round(h * L.dpr);
  const st = getComputedStyle(safeEl), sT = parseFloat(st.paddingTop) || 0, sB = parseFloat(st.paddingBottom) || 0;
  L.ui = Math.min(w / 440, (h - sT - sB) / 830);
  L.VW = w / L.ui; L.VH = h / L.ui; L.sT = sT / L.ui; L.sB = sB / L.ui;
  L.hudY = L.sT + 12;
  L.toolY = L.VH - L.sB - 78;
  if (!map) return;
  const b = map.bounds, top = L.hudY + 76, bottom = L.toolY - 6, ww = b.x1 - b.x0 + 8, wh = b.y1 - b.y0;
  L.wk = Math.min((L.VW - 12) / ww, (bottom - top) / wh, 1.1);
  L.wox = L.VW / 2 - (b.x0 + b.x1) / 2 * L.wk;
  L.woy = top + (bottom - top - wh * L.wk) * 0.55 - b.y0 * L.wk;
}

export const toWorld = (vx, vy) => ({ x: (vx - L.wox) / L.wk, y: (vy - L.woy) / L.wk });
export function setUiTransform() { const k = L.dpr * L.ui; D.ctx.setTransform(k, 0, 0, k, 0, 0); }
export function setWorldTransform(sx = 0, sy = 0) {
  const k = L.dpr * L.ui;
  D.ctx.setTransform(k * L.wk, 0, 0, k * L.wk, (L.wox + sx) * k, (L.woy + sy) * k);
}

export function rr(x, y, w, h, r, c = D.ctx) {
  r = Math.min(r, w / 2, h / 2);
  c.beginPath(); c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
}

// Smooth closed curve through midpoints of RX/RY[0..n).
export function trace(n) {
  const ctx = D.ctx;
  ctx.beginPath();
  ctx.moveTo((RX[n - 1] + RX[0]) * 0.5, (RY[n - 1] + RY[0]) * 0.5);
  for (let i = 0; i < n; i++) {
    const j = i + 1 === n ? 0 : i + 1;
    ctx.quadraticCurveTo(RX[i], RY[i], (RX[i] + RX[j]) * 0.5, (RY[i] + RY[j]) * 0.5);
  }
  ctx.closePath();
}

export function txt(s, x, y, size, fill, stroke, sw, align) {
  const ctx = D.ctx;
  ctx.font = `${size}px ${FONT}`; ctx.textAlign = align || 'center'; ctx.textBaseline = 'middle';
  if (stroke) { ctx.lineWidth = sw; ctx.strokeStyle = stroke; ctx.lineJoin = 'round'; ctx.strokeText(s, x, y); }
  ctx.fillStyle = fill; ctx.fillText(s, x, y);
}

export function star(x, y, r, rot) {
  const ctx = D.ctx;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = rot + i * Math.PI / 4, q = i & 1 ? r * 0.38 : r;
    if (i === 0) ctx.moveTo(x + Math.cos(a) * q, y + Math.sin(a) * q); else ctx.lineTo(x + Math.cos(a) * q, y + Math.sin(a) * q);
  }
  ctx.closePath();
}

export function card(x, y, w, h, r, fill = '#fff') {
  const ctx = D.ctx;
  ctx.fillStyle = INK; rr(x + 4, y + 5, w, h, r); ctx.fill();
  ctx.fillStyle = fill; rr(x, y, w, h, r); ctx.fill();
  ctx.lineWidth = 3; ctx.strokeStyle = INK; ctx.stroke();
}

export function tag(x, y, label, color, size = 15, rot = -0.06) {
  const ctx = D.ctx;
  ctx.font = `${size}px ${FONT}`;
  const w = ctx.measureText(label).width + size * 1.2, h = size * 1.6;
  const path = (ox, oy) => { ctx.beginPath(); ctx.moveTo(ox + 5, oy); ctx.lineTo(ox + w + 5, oy); ctx.lineTo(ox + w - 3, oy + h); ctx.lineTo(ox - 3, oy + h); ctx.closePath(); };
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
  path(2, 3); ctx.fillStyle = INK; ctx.fill();
  path(0, 0); ctx.fillStyle = color; ctx.fill(); ctx.lineWidth = 2.5; ctx.strokeStyle = INK; ctx.lineJoin = 'round'; ctx.stroke();
  txt(label, w / 2 + 1, h / 2 + 1, size, '#fff', INK, size * 0.28);
  ctx.restore();
  return w;
}

// Immediate-mode buttons: drawn every frame, hit-tested from the last frame's list.
export const buttons = [];
export const press = { id: null, pid: -1 };
export function candy(id, x, y, w, h, label, color, dark, size = 24, disabled = false) {
  const ctx = D.ctx;
  buttons.push({ id, x, y, w, h, disabled });
  const d = press.id === id ? 4 : 0;
  ctx.save();
  if (disabled) ctx.globalAlpha = 0.45;
  ctx.fillStyle = INK; rr(x + 3, y + 9, w, h, 18); ctx.fill();
  ctx.fillStyle = dark; rr(x, y + 6, w, h, 18); ctx.fill(); ctx.lineWidth = 3; ctx.strokeStyle = INK; ctx.stroke();
  ctx.fillStyle = color; rr(x, y + d, w, h, 18); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,0.65)'; ctx.lineWidth = 4; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x + 16, y + d + 9); ctx.lineTo(x + Math.min(60, w * 0.4), y + d + 9); ctx.stroke();
  if (label) txt(label, x + w / 2, y + d + h / 2 + 1, size, '#fff', INK, size * 0.24);
  ctx.restore();
  return d;
}
export function hitButton(vx, vy) {
  for (let i = buttons.length - 1; i >= 0; i--) {
    const b = buttons[i];
    if (vx >= b.x && vx <= b.x + b.w && vy >= b.y && vy <= b.y + b.h + 6) return b;
  }
  return null;
}
