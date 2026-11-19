// Builds each game's plain-web version (no TapTap) and gathers them, with the hub page, into site/.
//
//   node scripts/build.mjs                 every game in games.json, then the hub page
//   node scripts/build.mjs punch pomo      only these games (the others already in site/ stay)
//   node scripts/build.mjs --skip-build    reuse each game's last build output, just regather
//   node scripts/build.mjs --hub-only      only the hub page (portal/, covers/, games.json)
//
// A game is built in its own folder with its own command (games.json `build`, normally
// `npm run build:web`), then its output folder (`out`) is copied to site/<slug>/. A game with
// `copy` instead is a plain static game: those paths are copied as they are.
// `{stage}` in `build`/`out` stands for a scratch folder of the hub's (.stage/<slug>), for games
// whose own folder should not get a new build folder.
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderHub } from './render.mjs';

const HUB = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(HUB, 'site');
const STAGE = join(HUB, '.stage');
const manifest = JSON.parse(readFileSync(join(HUB, 'games.json'), 'utf8'));

const args = process.argv.slice(2);
const skipBuild = args.includes('--skip-build');
const hubOnly = args.includes('--hub-only');
const wanted = args.filter((a) => !a.startsWith('--'));
const unknown = wanted.filter((s) => !manifest.games.some((g) => g.slug === s));
if (unknown.length) throw new Error(`not in games.json: ${unknown.join(', ')}`);

mkdirSync(SITE, { recursive: true });
const games = hubOnly ? [] : manifest.games.filter((g) => !wanted.length || wanted.includes(g.slug));

for (const g of games) {
  const dir = resolve(HUB, g.dir);
  const stage = join(STAGE, g.slug);
  const fill = (s) => s.replaceAll('{stage}', stage);
  const t0 = Date.now();
  if (g.build && !skipBuild) {
    const cmd = g.build.replaceAll('{stage}', JSON.stringify(stage));
    console.log(`\n=== ${g.slug}: ${cmd}  (in ${dir})`);
    execSync(cmd, { cwd: dir, stdio: 'inherit', shell: true });
  }
  const dest = join(SITE, g.slug);
  rmSync(dest, { recursive: true, force: true });
  if (g.copy) {
    for (const p of g.copy) cpSync(join(dir, p), join(dest, p), { recursive: true });
  } else {
    const out = resolve(dir, fill(g.out));
    if (!existsSync(join(out, 'index.html'))) throw new Error(`${g.slug}: no index.html in ${out}`);
    cpSync(out, dest, { recursive: true });
  }
  console.log(`=== ${g.slug} -> site/${g.slug}/ (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
}

// the hub page: portal/ (its templates rendered from games.json), the covers, QR codes
const TEMPLATES = ['index.html', 'play.html', 'icons.svg'];
cpSync(join(HUB, 'portal'), SITE, { recursive: true, filter: (src) => !TEMPLATES.some((t) => src === join(HUB, 'portal', t)) });
if (existsSync(join(HUB, 'covers'))) cpSync(join(HUB, 'covers'), join(SITE, 'covers'), { recursive: true });
const { games: shown, text } = await renderHub({ hub: HUB, site: SITE, manifest });
writeFileSync(join(SITE, 'licenses.txt'), licenses(shown));
// GitHub Pages: serve the files as they are (no Jekyll)
writeFileSync(join(SITE, '.nojekyll'), '');

// the title font is cut down to the characters the hub uses: say when new text needs a new cut
mkdirSync(STAGE, { recursive: true });
const chars = [...new Set(text.replace(/\s/g, ''))].sort().join('');
writeFileSync(join(STAGE, 'hub-chars.txt'), chars);
const cutFile = join(HUB, 'portal', 'fonts', 'hub-display.chars.txt');
const cut = existsSync(cutFile) ? new Set(readFileSync(cutFile, 'utf8')) : new Set();
const lacking = [...chars].filter((c) => !cut.has(c) && c.charCodeAt(0) > 127);
if (lacking.length) console.warn(`\n!! the title font lacks ${lacking.length} characters (${lacking.slice(0, 20).join('')}…): run  python scripts/fonts.py`);

/**
 * One text file with the licences of what the games ship that others made: each game's runtime npm
 * dependencies (three.js and the like; the bundles drop their licence comments) and its fonts' OFL
 * texts, plus the hub's own title font.
 */
function licenses(games) {
  const parts = new Map(); // what → { users, text }
  const add = (what, user, file) => {
    const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n').trim();
    const key = `${what}\n${text}`;
    if (!parts.has(key)) parts.set(key, { what, users: new Set(), text });
    parts.get(key).users.add(user);
  };
  const licenseFile = (dir) => ['LICENSE', 'LICENSE.md', 'LICENSE.txt', 'license', 'LICENCE'].map((f) => join(dir, f)).find(existsSync);
  const fontLicenses = (dir) => ['src/assets/fonts', 'fonts', 'public/fonts']
    .map((d) => join(dir, d)).filter(existsSync)
    .flatMap((d) => readdirSync(d).filter((f) => /^(OFL|LICEN[CS]E).*\.txt$/i.test(f)).map((f) => join(d, f)));
  for (const g of games) {
    const dir = resolve(HUB, g.dir);
    const pkgFile = join(dir, 'package.json');
    const deps = existsSync(pkgFile) ? Object.keys(JSON.parse(readFileSync(pkgFile, 'utf8')).dependencies ?? {}) : [];
    for (const dep of deps) {
      const pkgDir = join(dir, 'node_modules', dep);
      const file = licenseFile(pkgDir);
      if (!file) { console.warn(`!! ${g.slug}: no licence file for ${dep}`); continue; }
      const version = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf8')).version;
      add(`${dep} ${version}`, g.title, file);
    }
    for (const f of fontLicenses(dir)) add(`字体 ${f.replace(/^.*[\\/]/, '').replace(/\.txt$/i, '')}`, g.title, f);
  }
  add('字体 OFL-SmileySans（大厅标题，改名为 Hub Display）', '大厅', join(HUB, 'fonts-src', 'OFL-SmileySans.txt'));
  const rule = '='.repeat(72);
  return [
    `${manifest.title} · 第三方许可`,
    '这些游戏和大厅页面用到的别人的代码和字体，以及它们的许可原文。',
    ...[...parts.values()].map((p) => `\n${rule}\n${p.what}\n用在：${[...p.users].join('、')}\n${rule}\n\n${p.text}\n`),
  ].join('\n');
}

const missing = manifest.games.filter((g) => !shown.includes(g)).map((g) => g.slug);
console.log(`\nsite/ ready: ${shown.length} of ${manifest.games.length} games${missing.length ? ` (not built yet: ${missing.join(', ')})` : ''}`);
