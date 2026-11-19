// HUD, toolbar, title, card pick, pause and result screens (virtual UI units).
import { INK, FONT } from './config.js';
import { clamp, easeOutBack } from './util.js';
import { D, L, rr, txt, card, tag, candy, buttons } from './draw.js';
import { drawCatAt } from './render.js';
import { G, hasSave } from './game.js';
import { RARITY } from './cards.js';

const x0 = () => (L.VW - 440) / 2 + 12;

export function drawHud() {
  const r = G.run;
  if (!r || G.state === 'title') return;
  const ctx = D.ctx, x = x0(), y = L.hudY;
  card(x, y, 118, 62, 16);
  tag(x + 8, y - 10, '得分', '#FF6B8B');
  txt(String(Math.round(r.score)), x + 14, y + 37, 30, INK, null, 0, 'left');
  const gx = x + 128;
  card(gx, y, 148, 62, 16);
  tag(gx + 8, y - 10, `第${r.stage + 1}关 · ${G.map.name}`, '#3FD39B', 14);
  txt('合成', gx + 14, y + 37, 20, INK, null, 0, 'left');
  drawCatAt(r.target, false, gx + 102, y + 40, 17, { lw: 2.5 });
  const nx = x + 286;
  card(nx, y, 80, 62, 16);
  tag(nx + 6, y - 10, '下一个', '#4FA3FF', 14);
  const q = G.held ? G.queue : G.queue.slice(1);
  if (q[0]) drawCatAt(q[0].level, q[0].wild, nx + (r.mods.preview > 1 ? 30 : 40), y + 40, 16, { lw: 2.5 });
  if (r.mods.preview > 1) {
    for (let k = 1; k < 3 && q[k]; k++) drawCatAt(q[k].level, q[k].wild, nx + 62, y + 18 + k * 15, 7, { lw: 1.5, noFace: true });
  }
  const px = x + 416 - 44, py = y + 9;
  const d = candy('pause', px, py, 44, 44, '', '#FFE066', '#E0B53C');
  ctx.fillStyle = INK; rr(px + 14, py + d + 12, 6, 20, 3); ctx.fill(); rr(px + 25, py + d + 12, 6, 20, 3); ctx.fill();
}

const TOOLS = [
  { id: 'boop', label: '戳一戳', color: '#FF9F4A', dark: '#C9702A', hint: '点一只猫，戳它跳一下' },
  { id: 'split', label: '撸一撸', color: '#FF7DC6', dark: '#C64F95', hint: '点一只猫，撸成两只小一号的' },
  { id: 'shake', label: '摇一摇', color: '#4FA3FF', dark: '#2F72C4', hint: '' },
];

export function drawToolbar() {
  const r = G.run;
  if (!r || G.state === 'title') return;
  const ctx = D.ctx, x = x0(), y = L.toolY + 6;
  TOOLS.forEach((t, i) => {
    const bx = x + i * 146, n = r.charges[t.id], on = G.tool === t.id;
    const d = candy('tool:' + t.id, bx, y, 124, 54, t.label, t.color, t.dark, 22, n <= 0 || G.state !== 'play');
    if (on) {
      ctx.lineWidth = 4; ctx.strokeStyle = `rgba(255,255,255,${0.6 + 0.4 * Math.sin(D.time * 8)})`;
      rr(bx - 5, y + d - 5, 134, 64, 22); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(bx + 118, y + d + 4, 13, 0, Math.PI * 2);
    ctx.fillStyle = n > 0 ? '#fff' : '#ddd'; ctx.fill(); ctx.lineWidth = 2.5; ctx.strokeStyle = INK; ctx.stroke();
    txt(String(n), bx + 118, y + d + 5, 15, INK);
  });
  const t = TOOLS.find(t => t.id === G.tool);
  if (t && t.hint) txt(t.hint, L.VW / 2, y - 16, 17, '#fff', INK, 5);
  if (G.hint) txt(G.hint.s, L.VW / 2, y - 16, 17, '#fff', INK, 5);
}

function panel(w, h, title, color, t) {
  const ctx = D.ctx, a = clamp(t / 0.25, 0, 1);
  ctx.fillStyle = `rgba(59,35,66,${0.5 * a})`; ctx.fillRect(0, 0, L.VW, L.VH);
  const sc = easeOutBack(clamp(t / 0.3, 0, 1)), x = L.VW / 2 - w / 2, y = L.VH / 2 - h / 2;
  ctx.save(); ctx.translate(L.VW / 2, L.VH / 2); ctx.scale(sc, sc); ctx.translate(-L.VW / 2, -L.VH / 2);
  card(x, y, w, h, 24);
  if (title) tag(x + 22, y - 18, title, color, 22);
  return { x, y, done: () => ctx.restore() };
}

function wrap(s, maxW, size) {
  const ctx = D.ctx;
  ctx.font = `${size}px ${FONT}`;
  const lines = [];
  let cur = '';
  for (const ch of s.match(/[A-Za-z0-9+%.×]+|./g)) {   // keep runs like "+30%" together
    if (ctx.measureText(cur + ch).width > maxW && cur) { lines.push(cur); cur = ch.trim() ? ch : ''; } else cur += ch;
  }
  if (cur) lines.push(cur);
  return lines;
}

// Each card shows a cat that acts out what it does.
const CARD_ART = {
  boop: [2, 'surprise'], split: [1, 'happy', 2], shake: [3, 'surprise'], catnip: [1, '', 1, true], magnet: [4, 'happy', 2],
  bigger: [6, 'happy'], calm: [5, 'comfy'], combo: [7, 'happy'], peek: [0, 'surprise'], lucky: [10, 'happy'], gold: [10, ''], leap: [8, 'happy'],
};

function drawCards(t) {
  const ctx = D.ctx, cards = G.offer || [], n = cards.length;
  const a = clamp(t / 0.25, 0, 1);
  ctx.fillStyle = `rgba(59,35,66,${0.55 * a})`; ctx.fillRect(0, 0, L.VW, L.VH);
  const w = n > 3 ? 98 : 126, gap = n > 3 ? 8 : 12, total = n * w + (n - 1) * gap, h = 210;
  const cy = L.VH / 2 - h / 2 + 10;
  txt('选一张卡牌', L.VW / 2, cy - 46, 30, '#fff', INK, 8);
  cards.forEach((c, i) => {
    const pop = easeOutBack(clamp((t - i * 0.08) / 0.35, 0, 1));
    if (pop <= 0) return;
    const x = L.VW / 2 - total / 2 + i * (w + gap), rar = RARITY[c.rarity];
    ctx.save(); ctx.translate(x + w / 2, cy + h / 2); ctx.scale(pop, pop); ctx.translate(-(x + w / 2), -(cy + h / 2));
    card(x, cy, w, h, 16);
    ctx.fillStyle = rar.color; rr(x + 6, cy + 6, w - 12, 22, 10); ctx.fill();
    txt(rar.name, x + w / 2, cy + 18, 14, '#fff', INK, 3.5);
    const art = CARD_ART[c.id] || [1, ''];
    if (art[2] === 2) {
      drawCatAt(art[0], false, x + w / 2 - 18, cy + 70, 15, { mood: art[1], lw: 2.5 });
      drawCatAt(art[0], false, x + w / 2 + 18, cy + 72, 15, { mood: art[1], lw: 2.5 });
    } else drawCatAt(art[0], !!art[3], x + w / 2, cy + 70, 22, { mood: art[1], lw: 2.5 });
    txt(c.name, x + w / 2, cy + 116, n > 3 ? 17 : 20, INK);
    wrap(c.desc, w - 18, 14).forEach((line, k) => txt(line, x + w / 2, cy + 142 + k * 19, 14, 'rgba(59,35,66,0.75)'));
    ctx.restore();
    if (pop >= 1) buttonRect('card:' + i, x, cy, w, h);
  });
}
// Invisible hit area for things that are not candy buttons (cards).
function buttonRect(id, x, y, w, h) { buttons.push({ id, x, y, w, h }); }

function drawTitle() {
  const ctx = D.ctx, cx = L.VW / 2, y = L.hudY + 40;
  ctx.save(); ctx.translate(cx, y + 50); ctx.rotate(-0.04);
  txt('液体猫', 0, 0, 84, '#FF7DC6', INK, 18);
  ctx.restore();
  tag(cx - 72, y + 104, '从 2 合到 2048', '#4FA3FF', 20, 0.03);
  const by = L.hudY + 196;
  let yy = by;
  if (hasSave()) { candy('continue', cx - 120, yy, 240, 58, '继续冒险', '#FFE066', '#E0B53C', 24); yy += 76; }
  candy('start', cx - 120, yy, 240, 62, '开始冒险', '#FF6B8B', '#C9456A', 28);
  yy += 84;
  candy('daily', cx - 120, yy, 240, 58, '每日挑战', '#4FA3FF', '#2F72C4', 24);
  const today = G.daily;
  const best = G.best.score ? `最佳 ${G.best.score} 分 · 第 ${G.best.stage} 关` : '';
  const dbest = today && today.best && today.date === dailySeed() ? `今日最佳 ${today.best}` : '今日还没挑战';
  txt(dbest, cx, yy + 76, 15, 'rgba(59,35,66,0.65)');
  if (best) txt(best, cx, yy + 100, 15, 'rgba(59,35,66,0.65)');
  candy('sound', L.VW - x0() - 64 + 12, L.hudY, 52, 44, G.muted ? '静音' : '音效', '#FFFFFF', '#D8CFC4', 16);
}
function dailySeed() { const d = new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }

function drawBanner() {
  const b = G.banner;
  if (!b) return;
  const ctx = D.ctx, u = b.t / b.d, a = u > 0.8 ? 1 - (u - 0.8) / 0.2 : 1, sc = easeOutBack(clamp(b.t / 0.35, 0, 1));
  ctx.save(); ctx.globalAlpha = a; ctx.translate(L.VW / 2, L.VH * 0.36); ctx.scale(sc, sc); ctx.rotate(-0.04);
  if (b.big) {
    txt(b.title, 0, 0, 72, '#FFC83A', INK, 16);
    if (b.sub) txt(b.sub, 0, 54, 22, '#fff', INK, 6);
  } else {
    ctx.font = `30px ${FONT}`;
    const w = ctx.measureText(b.title).width + 48;
    ctx.fillStyle = INK; rr(-w / 2 + 4, -28 + 5, w, 56, 28); ctx.fill();
    ctx.fillStyle = '#FF6B8B'; rr(-w / 2, -28, w, 56, 28); ctx.fill(); ctx.lineWidth = 3; ctx.strokeStyle = INK; ctx.stroke();
    txt(b.title, 0, 1, 30, '#fff', INK, 7);
    if (b.sub) txt(b.sub, 0, 50, 22, '#fff', INK, 6);
  }
  ctx.restore();
}

export function drawOverlays() {
  const s = G.state, t = G.overlayT;
  if (s === 'title') { drawTitle(); return; }
  drawBanner();
  if (s === 'play' && G.run && G.run.stage === 0 && G.drops === 0 && !G.banner) {
    const a = 0.6 + 0.15 * Math.sin(D.time * 3);
    txt('按住拖动瞄准，松手放猫', L.VW / 2, L.VH * 0.5, 24, `rgba(59,35,66,${a})`);
    txt('相同数字的猫碰到一起会合成', L.VW / 2, L.VH * 0.5 + 36, 17, 'rgba(59,35,66,0.5)');
  }
  if (s === 'cards') drawCards(t);
  if (s === 'paused') {
    const p = panel(300, 344, '暂停', '#4FA3FF', t);
    candy('resume', p.x + 40, p.y + 48, 220, 56, '继续', '#FF6B8B', '#C9456A');
    candy('restart', p.x + 40, p.y + 124, 220, 56, '重新开始', '#4FA3FF', '#2F72C4');
    candy('home', p.x + 40, p.y + 200, 220, 52, '返回首页', '#3FD39B', '#2A9C70', 21);
    candy('sound', p.x + 40, p.y + 270, 220, 48, G.muted ? '音效：关' : '音效：开', '#FFE066', '#E0B53C', 20);
    p.done();
  }
  if ((s === 'over' || s === 'win') && t > 0.6 && G.result) {
    const R = G.result, p = panel(320, 420, s === 'win' ? '全部通关' : '猫猫溢出来了', s === 'win' ? '#FFB020' : '#FF6B8B', t - 0.6), cx = p.x + 160;
    txt(R.mode === 'daily' ? '每日挑战' : '冒险', cx, p.y + 44, 18, 'rgba(59,35,66,0.6)');
    txt(`到达第 ${Math.max(1, R.stage)} 关`, cx, p.y + 76, 24, INK);
    txt(String(R.score), cx, p.y + 128, 58, INK);
    if (R.isBest) tag(cx + 66, p.y + 92, '新纪录', '#FFC83A', 15);
    txt('最大的猫', cx, p.y + 178, 16, 'rgba(59,35,66,0.6)');
    drawCatAt(R.maxLevel, false, cx, p.y + 232, 34, { mood: s === 'win' ? 'happy' : 'comfy', squash: Math.sin(D.time * 4) * 0.03 });
    candy('again', p.x + 50, p.y + 290, 220, 56, '再来一次', '#FF6B8B', '#C9456A', 26);
    candy('home', p.x + 50, p.y + 360, 220, 46, '返回首页', '#3FD39B', '#2A9C70', 20);
    p.done();
  }
}

