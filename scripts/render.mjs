// Renders the hub's pages from games.json at build time: the card grid in index.html, the player
// page, the public games.json, QR codes and the favicon. Used by build.mjs.
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import QRCode from 'qrcode';

const STATUS = { live: ['i-live', '已上线'], beta: ['i-beta', '试玩版'], wip: ['i-wip', '开发中'] };
const SCREEN = { portrait: ['i-portrait', '竖屏'], landscape: ['i-landscape', '横屏'], desktop: ['i-desktop', '电脑'] };
/** pixel size of covers/<slug>.jpg per screen (covers.mjs) */
const COVER = { portrait: [585, 1266], landscape: [1266, 585], desktop: [960, 600] };

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const icon = (id) => `<svg class="i" aria-hidden="true"><use href="#${id}"/></svg>`;

// WCAG contrast, to put white or ink on each game's colour
const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = (hex) => { const n = parseInt(hex.slice(1), 16); return 0.2126 * lin(n >> 16) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255); };
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const INK = '#221f2e';
export const onAccent = (accent) => (contrast(accent, '#ffffff') >= contrast(accent, INK) ? '#ffffff' : INK);

export function tagsHtml(g) {
  const [si, sl] = SCREEN[g.screen];
  return `<li>${icon(si)}${sl}</li><li>${icon(`g-${g.genre}`)}${esc(g.genre)}</li>`;
}

/** the brand mark: a progress bar part-way along, a flag planted where it got to */
export function mark(cls = 'brand-mark') {
  return `<svg class="${cls}" viewBox="0 0 84 46" aria-hidden="true">
        <rect class="track" x="3" y="17" width="78" height="25" rx="8.5" stroke-width="3.5"/>
        <rect x="8.5" y="22.5" width="44" height="14" rx="4" fill="#ff5c8a"/>
        <path d="M52.5 23V4" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M54 5h14.5l-4.2 5.2 4.2 5.2H54z" fill="#f2b632" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      </svg>`;
}

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect x="3" y="26" width="58" height="26" rx="8" fill="#fffcf6" stroke="#221f2e" stroke-width="4"/>
  <rect x="9" y="32" width="28" height="14" rx="3.5" fill="#ff5c8a"/>
  <path d="M37.5 33V6" stroke="#221f2e" stroke-width="4" stroke-linecap="round"/>
  <path d="M39 7h18l-5 6 5 6H39z" fill="#f2b632" stroke="#221f2e" stroke-width="3.5" stroke-linejoin="round"/>
</svg>
`;

function card(g, hasCover, eager) {
  const href = `./${g.slug}/`;
  const [sti, stl] = STATUS[g.status];
  const [w, h] = COVER[g.screen];
  const live = g.taptap
    ? `<a class="side" href="${esc(g.taptap)}" target="_blank" rel="noopener" title="${esc(g.title)} 在 TapTap">${icon('i-ext')}TapTap</a>`
    : '';
  const note = g.note ? `<p class="note">${icon('i-key')}<span>${esc(g.note)}</span></p>` : '';
  const qr = g.screen === 'desktop' ? '' : `<button class="side qr-btn" type="button" aria-label="${esc(g.title)} 的二维码">${icon('i-qr')}</button>`;
  const cover = hasCover
    ? `<img src="covers/${g.slug}.jpg" alt="${esc(g.title)} 的游戏画面" width="${w}" height="${h}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" />`
    : '';
  return `    <article class="card" data-slug="${g.slug}" data-screen="${g.screen}" style="--accent:${g.accent};--on-accent:${onAccent(g.accent)}">
      <a class="stage" href="${href}" data-go tabindex="-1" aria-hidden="true">
        <span class="device ${g.screen}">${cover}</span>
      </a>
      <span class="status ${g.status}">${icon(sti)}${stl}</span>
      <div class="info">
        <h2${[...g.title].length > 6 ? ' class="long"' : ''}>${esc(g.title)}</h2>
        <p class="pitch">${esc(g.pitch)}</p>
        <ul class="tags">${tagsHtml(g)}</ul>
        ${note}
        <div class="acts">
          <a class="play" href="${href}" data-go>${icon('i-play')}开玩</a>
          ${live}${qr}
        </div>
      </div>
    </article>`;
}

/** Writes index.html, play.html, games.json, favicon.svg and qr/ into `site`. Returns all hub text (for the font subset). */
export async function renderHub({ hub, site, manifest }) {
  const games = manifest.games.filter((g) => existsSync(join(site, g.slug, 'index.html')));
  const icons = readFileSync(join(hub, 'portal', 'icons.svg'), 'utf8').trim();
  const fill = (tpl, vars) => tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => {
    if (!(k in vars)) throw new Error(`template has {{${k}}} with no value`);
    return vars[k];
  });
  const vars = {
    title: esc(manifest.title),
    tagline: esc(manifest.tagline),
    count: String(games.length),
    names: esc(games.map((g) => g.title).join('、')),
    icons,
    mark: mark(),
    cards: games.map((g, i) => card(g, existsSync(join(hub, 'covers', `${g.slug}.jpg`)), i < 3)).join('\n'),
  };
  const index = fill(readFileSync(join(hub, 'portal', 'index.html'), 'utf8'), vars);
  const play = fill(readFileSync(join(hub, 'portal', 'play.html'), 'utf8'), { title: vars.title, icons });
  writeFileSync(join(site, 'index.html'), index);
  writeFileSync(join(site, 'play.html'), play);
  writeFileSync(join(site, 'favicon.svg'), FAVICON);

  const PUBLIC = ['slug', 'title', 'pitch', 'genre', 'screen', 'status', 'taptap', 'note', 'accent'];
  const pub = {
    title: manifest.title,
    tagline: manifest.tagline,
    url: manifest.url,
    games: games.map((g) => ({ ...Object.fromEntries(PUBLIC.filter((k) => g[k] !== undefined).map((k) => [k, g[k]])), tagsHtml: tagsHtml(g) })),
  };
  writeFileSync(join(site, 'games.json'), JSON.stringify(pub, null, 2) + '\n');

  mkdirSync(join(site, 'qr'), { recursive: true });
  const qr = (url) => QRCode.toString(url, { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#221f2eff', light: '#ffffffff' } });
  writeFileSync(join(site, 'qr', 'hub.svg'), await qr(manifest.url));
  for (const g of games) writeFileSync(join(site, 'qr', `${g.slug}.svg`), await qr(new URL(`${g.slug}/`, manifest.url).href));

  return { games, text: index.replace(/<svg[\s\S]*?<\/svg>/g, '') + play + JSON.stringify(pub) };
}
