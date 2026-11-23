// The loading screen every game page in site/ gets, so a visitor never stares at a blank page
// while the game downloads. Injected into site/<slug>/index.html by build.mjs; the game's own
// source and its TapTap build are untouched.
//
// It paints with the page itself (inline CSS, no request), while the game starts exactly as it
// would without it: nothing is held back. It downloads the game's files except the music (the same
// requests the game makes, so the browser shares them through its cache) to show real progress,
// then fades once the game's code has run, its fonts are in, and it has drawn two frames.
//
// A game can leave files to the page with games.json `lazy`: patterns relative to the game's folder
// (`*` within one folder, `**` across folders), e.g. ["assets/jzw-mashanzheng-*.woff2"] for a font cut
// into unicode-range slices, of which the browser fetches only the ones the page uses. Those files are
// neither pre-downloaded nor counted in the bar; the page fetches them itself when it needs them.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const START = '<!-- hub-loader:start -->';
const END = '<!-- hub-loader:end -->';
/** what the first screen does not wait for: music and video stream in later; licences, maps */
const SKIP = /(^|\/)index\.html$|\.(mp3|ogg|wav|m4a|aac|opus|flac|mp4|webm|txt|md|map)$/i;
/** every string the loading screen shows (for the title font cut) */
export const LOADER_TEXT = '0123456789% / MB 加载中网络有点慢正在努力没出来可能是断了重新';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const mix = (hex, other, t) => {
  const a = parseInt(hex.slice(1), 16), b = parseInt(other.slice(1), 16);
  const ch = (n, s) => Math.round(((n >> s) & 255) * (1 - t) + ((b >> s) & 255) * t);
  return `#${[16, 8, 0].map((s) => ch(a, s).toString(16).padStart(2, '0')).join('')}`;
};

/** a games.json `lazy` pattern as a RegExp over paths relative to the game's folder */
function globToRe(glob) {
  const body = glob.replace(/^\.?\//, '').split(/(\*\*\/?|\*|\?)/).map((part) => {
    if (part === '**/' || part === '**') return '(?:.*/)?' + (part === '**' ? '.*' : '');
    if (part === '*') return '[^/]*';
    if (part === '?') return '[^/]';
    return part.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  }).join('');
  return new RegExp(`^${body}$`);
}

function files(dir, base = dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) files(p, base, out);
    else {
      const rel = p.slice(base.length + 1).replaceAll('\\', '/');
      if (!SKIP.test(rel)) out.push([`./${rel}`, statSync(p).size]);
    }
  }
  return out;
}

// Runs as a classic inline script at the end of <body>, before the game's module executes.
// Written for old browsers too (no ?. or ??): some players open links in old in-app web views.
const SCRIPT = `(function () {
  var C = __CFG__;
  var d = document, root = d.getElementById('hub-ld');
  if (!root) return;
  var fill = root.querySelector('.fill'), flag = root.querySelector('.flag'), pct = root.querySelector('.pct');
  var mb = root.querySelector('.mb'), hint = root.querySelector('.hint');
  var t0 = Date.now(), got = 0, filesDone = 0, modules = -1, loaded = 0, over = false, failed = false, gone = false, queued = false;
  var size = function (b) { return (b / 1048576).toFixed(1); };
  function paint() {
    queued = false;
    var f = C.total ? Math.min(1, got / C.total) : 1, p = Math.floor(f * 100);
    fill.style.width = (f * 100) + '%';
    flag.style.left = (f * 100) + '%';
    pct.textContent = p + '%';
    mb.textContent = size(Math.min(got, C.total)) + ' / ' + size(C.total) + ' MB';
    root.setAttribute('aria-valuenow', String(p));
    // everything is in: the game is starting up (parsing its code, building its first frame)
    if (f >= 1 && !failed) hint.textContent = '\\u6b63\\u5728\\u542f\\u52a8\\u2026';
  }
  function count(n) {
    got += n;
    if (queued) return;
    queued = true;
    (window.requestAnimationFrame || setTimeout)(paint);
  }
  paint();
  // the game's files: the browser fetches them for the game at the same time and shares them
  if (window.fetch && C.files.length) {
    C.files.forEach(function (f) {
      var url = f[0], want = f[1], seen = 0;
      var settle = function () { if (seen < want) count(want - seen); seen = want; filesDone++; check(); };
      fetch(url, { credentials: 'same-origin' }).then(function (res) {
        if (!res.ok || !res.body || !res.body.getReader) return res.arrayBuffer();
        var rd = res.body.getReader();
        var pump = function () {
          return rd.read().then(function (r) {
            if (r.done) return;
            var n = Math.min(r.value.length, want - seen);
            if (n > 0) { seen += n; count(n); }
            return pump();
          });
        };
        return pump();
      }).then(settle, settle);
    });
  } else {
    filesDone = C.files.length;
  }
  // the game has started once each of its module scripts has run
  var isModule = function (t) { return t && t.tagName === 'SCRIPT' && t.type === 'module'; };
  d.addEventListener('load', function (e) { if (isModule(e.target)) { loaded++; check(); } }, true);
  d.addEventListener('error', function (e) { if (isModule(e.target)) fail(); }, true);
  var countModules = function () { modules = d.querySelectorAll('script[type="module"][src]').length; check(); };
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', countModules); else countModules();
  var tick = setInterval(function () {
    if (over || failed) { clearInterval(tick); return; }
    if (Date.now() - t0 > 9000 && got < C.total) hint.textContent = '\\u7f51\\u7edc\\u6709\\u70b9\\u6162\\uff0c\\u6b63\\u5728\\u52aa\\u529b\\u52a0\\u8f7d\\u2026';
    check();
  }, 1000);
  function check() {
    if (over || failed) return;
    var started = modules >= 0 && loaded >= modules;
    if (started && (filesDone >= C.files.length || Date.now() - t0 > 25000)) finish();
  }
  function frames(n, cb) {
    if (!window.requestAnimationFrame) { setTimeout(cb, 50); return; }
    requestAnimationFrame(function () { if (n > 1) frames(n - 1, cb); else cb(); });
  }
  function finish() {
    over = true;
    got = C.total;
    paint();
    var go = function () { frames(2, hide); };
    if (d.fonts && d.fonts.ready) d.fonts.ready.then(go, go); else go();
    setTimeout(hide, 4000); // never keep the game covered for long
  }
  function hide() {
    if (gone) return;
    gone = true;
    root.className += ' out';
    setTimeout(function () { if (root.parentNode) root.parentNode.removeChild(root); }, 450);
  }
  function fail() {
    if (over || failed) return;
    failed = true;
    root.className += ' fail';
    hint.textContent = '\\u6ca1\\u52a0\\u8f7d\\u51fa\\u6765\\uff0c\\u53ef\\u80fd\\u662f\\u7f51\\u7edc\\u65ad\\u4e86';
  }
  root.querySelector('.retry').onclick = function () { location.reload(); };
})();`;

/**
 * Writes the loading screen into site/<slug>/index.html, just before </body> (replacing an earlier one,
 * so a page comes out the same however often the hub is rebuilt). Returns the bytes it waits for, and
 * the files and bytes it leaves to the page (games.json `lazy`).
 */
export function injectLoader({ site, game, onAccent }) {
  const dir = join(site, game.slug);
  const page = join(dir, 'index.html');
  let html = readFileSync(page, 'utf8');
  // an earlier loading screen goes out together with the whitespace around it: otherwise every rebuild
  // leaves one more blank line before </body>
  const at = html.indexOf(START);
  if (at >= 0) {
    const end = html.indexOf(END, at);
    if (end < 0) throw new Error(`${game.slug}: index.html has ${START} but no ${END}`);
    html = `${html.slice(0, at).trimEnd()}\n${html.slice(end + END.length).trimStart()}`;
  }
  const lazy = (game.lazy ?? []).map((g) => [g, globToRe(g)]);
  const unused = new Set(lazy.map(([g]) => g));
  const left = { files: 0, bytes: 0 };
  const list = files(dir).filter(([f, size]) => {
    const hits = lazy.filter(([, re]) => re.test(f.slice(2)));
    hits.forEach(([g]) => unused.delete(g));
    if (hits.length) { left.files++; left.bytes += size; }
    return !hits.length;
  }).sort((a, b) => b[1] - a[1]);
  // a pattern that matches nothing is usually a typo or a renamed file: say so at build time
  for (const g of unused) console.warn(`loading screen: ${game.slug}: lazy pattern ${JSON.stringify(g)} matches no file`);
  const total = list.reduce((t, f) => t + f[1], 0);
  const accent = game.accent;
  const ink = '#221f2e';
  const small = onAccent === '#ffffff' ? 'rgba(255,255,255,.92)' : ink;
  const cfg = JSON.stringify({ files: list, total }).replace(/</g, '\\u003c');
  // the site root seen from the game's page: ../ for site/<slug>/, ../../ for site/<collection>/<game>/
  const root = '../'.repeat(game.slug.split('/').length);
  const block = `${START}
<style>
@font-face{font-family:'Hub Display';src:url('${root}fonts/hub-display.woff2') format('woff2');font-display:swap}
#hub-ld{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;background:${accent};background:radial-gradient(120% 80% at 82% 0%,rgba(255,255,255,.3),rgba(255,255,255,0) 62%),linear-gradient(165deg,${mix(accent, '#ffffff', 0.18)},${accent} 55%,${mix(accent, '#000000', 0.28)});color:#fff;font-family:system-ui,-apple-system,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif;text-align:center;opacity:1;transition:opacity .4s ease;-webkit-user-select:none;user-select:none;touch-action:none}
#hub-ld.out{opacity:0;pointer-events:none}
#hub-ld *{box-sizing:border-box}
#hub-ld h1{margin:0;font:400 44px/1.12 'Hub Display','PingFang SC','Microsoft YaHei',sans-serif;letter-spacing:.02em;color:#fff;text-shadow:3px 3px 0 ${ink}}
#hub-ld .p{margin:12px 0 0;max-width:21em;font-size:14px;line-height:1.6;color:${small}}
#hub-ld .bar{position:relative;width:300px;max-width:72vw;height:26px;margin:52px 0 0;background:#fffcf6;border:3px solid ${ink};border-radius:11px;box-shadow:4px 4px 0 ${ink}}
#hub-ld .fill{position:absolute;left:0;top:0;bottom:0;width:0;background:${ink};border-radius:7px;transition:width .25s ease}
#hub-ld .flag{position:absolute;bottom:100%;left:0;width:26px;height:32px;margin:0 0 -5px -4px;transition:left .25s ease}
#hub-ld .num{margin:14px 0 0;font:400 24px/1 'Hub Display',sans-serif;color:#fff;text-shadow:2px 2px 0 ${ink}}
#hub-ld .mb{margin-left:10px;font:13px/1 system-ui,-apple-system,sans-serif;color:${small};text-shadow:none}
#hub-ld .hint{min-height:1.6em;margin:14px 0 0;font-size:13px;color:${small}}
#hub-ld .retry{display:none;margin:14px 0 0;padding:11px 24px 9px;font:400 20px/1 'Hub Display','PingFang SC','Microsoft YaHei',sans-serif;color:${ink};background:#fffcf6;border:3px solid ${ink};border-radius:12px;box-shadow:0 5px 0 ${ink};cursor:pointer}
#hub-ld.fail .retry{display:inline-block}
#hub-ld.fail .bar,#hub-ld.fail .num{opacity:.45}
@media (max-width:400px){#hub-ld h1{font-size:36px}}
@media (min-width:900px) and (min-height:560px){#hub-ld h1{font-size:64px}#hub-ld .p{max-width:26em;font-size:16px}#hub-ld .bar{width:400px;height:30px}#hub-ld .flag{width:30px;height:37px}#hub-ld .num{font-size:28px}}
@media (prefers-reduced-motion:reduce){#hub-ld,#hub-ld .fill,#hub-ld .flag{transition:none}}
</style>
<div id="hub-ld" role="progressbar" aria-label="${esc(game.title)} 加载中" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
<h1>${esc(game.title)}</h1>
<p class="p">${esc(game.pitch)}</p>
<div class="bar"><div class="fill"></div><svg class="flag" viewBox="0 0 26 32" aria-hidden="true"><path d="M4 30V4" stroke="${ink}" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M5.5 4.5h16.5l-4.4 5.3 4.4 5.3H5.5z" fill="#f2b632" stroke="${ink}" stroke-width="2.4" stroke-linejoin="round"/></svg></div>
<div class="num"><span class="pct">0%</span><span class="mb"></span></div>
<p class="hint"></p>
<button class="retry" type="button">重新加载</button>
</div>
<script>${SCRIPT.replace('__CFG__', () => cfg)}</script>
${END}`;
  const close = html.lastIndexOf('</body>');
  if (close < 0) throw new Error(`${game.slug}: index.html has no </body>`);
  html = `${html.slice(0, close).trimEnd()}\n${block}\n${html.slice(close)}`;
  writeFileSync(page, html);
  return { bytes: total, left };
}
