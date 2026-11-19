// Scans everything that goes public, the published site/ and the hub's own files on the main
// branch, for things that must not: local paths, emails, keys, TapDB ids, source maps. Words of
// your own that must never appear (names, employer…) go in check.local.json, which is git-ignored:
//   { "words": ["…", "…"] }
// Also lists the TapTap traces left in the web builds (dead code that never runs is expected).
//   node scripts/check.mjs            exits 1 if anything blocking is found
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HUB = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(HUB, 'site');
const TEXT = new Set(['.html', '.js', '.mjs', '.css', '.json', '.svg', '.txt', '.md', '.py', '.map', '.xml', '.webmanifest', '.gitignore', '.gitattributes']);
const SKIP_DIRS = new Set(['.git', 'node_modules', '.stage', '.shots', 'site']);
const SELF = ['scripts/check.mjs', 'check.local.json'];

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const local = existsSync(join(HUB, 'check.local.json')) ? JSON.parse(readFileSync(join(HUB, 'check.local.json'), 'utf8')).words ?? [] : [];

/** blocking: never publish these */
const BLOCK = [
  ['local path', /\b[A-Za-z]:[\\/]+(game_projects|Users|ai-tools)\b/gi],
  ['email', /[\w.+-]+@(?!users\.noreply\.github\.com)[\w-]+\.(com|cn|net|org)\b/gi],
  ['api key', /\b(sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|github_pat_\w{20,}|AKIA[0-9A-Z]{16})\b/g],
  ['TapDB client id', /eoznm2did46y02nl34/g],
  ['TapDB endpoint', /e\.tapdb\.net/g],
  ['source map', /sourceMappingURL=/g],
  ...local.map((w) => ['private word', new RegExp(escape(w), 'gi')]),
];
/** informational */
const NOTE = [
  ['"TapTap" text', /TapTap/g],
  ['tap.* API name', /\b(getCloudSaveManager|createRewardedVideoAd|getLeaderboardManager|createAchievementManager|getOnlineBattleManager)\b/g],
  ['ad space id', /\b1054324\b/g],
];

function walk(dir, out, skip) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (!skip.has(name)) walk(p, out, skip); } else out.push(p);
  }
  return out;
}

let blocking = 0;
const notes = new Map();
function scan(root, label, files, withNotes) {
  for (const f of files) {
    const rel = relative(root, f).replaceAll('\\', '/');
    if (SELF.includes(rel) && root === HUB) continue;
    if (rel.endsWith('.map')) { console.log(`BLOCK source map file: ${label}${rel}`); blocking++; continue; }
    const ext = extname(f).toLowerCase() || (f.split(/[\\/]/).pop().startsWith('.') ? f.split(/[\\/]/).pop() : '');
    if (!TEXT.has(ext)) continue;
    const text = readFileSync(f, 'utf8');
    // licence texts name their authors' addresses on purpose
    const licence = /(^|\/)(licen[cs]es?|OFL[^/]*)\.txt$/i.test(rel);
    for (const [what, re] of BLOCK) {
      if (licence && what === 'email') continue;
      for (const m of text.matchAll(re)) {
        blocking++;
        const at = Math.max(0, m.index - 50);
        console.log(`BLOCK ${what}: ${label}${rel}  …${text.slice(at, m.index + m[0].length + 50).replace(/\s+/g, ' ')}…`);
      }
    }
    if (!withNotes) continue;
    const game = rel.includes('/') ? rel.split('/')[0] : '(hub)';
    for (const [what, re] of NOTE) {
      const n = [...text.matchAll(re)].length;
      if (n) notes.set(`${game}: ${what}`, (notes.get(`${game}: ${what}`) ?? 0) + n);
    }
  }
}

const siteFiles = existsSync(SITE) ? walk(SITE, [], new Set()) : [];
const hubFiles = walk(HUB, [], SKIP_DIRS);
scan(SITE, 'site/', siteFiles, true);
scan(HUB, '', hubFiles, false);

console.log(`\n${siteFiles.length} site files and ${hubFiles.length} hub files scanned${local.length ? `, with ${local.length} private words from check.local.json` : ' (no check.local.json: private words not checked)'}.`);
if (notes.size) {
  console.log('TapTap traces in site/ (informational):');
  for (const [k, n] of [...notes].sort()) console.log(`  ${k} ×${n}`);
}
console.log(blocking ? `\n${blocking} blocking finding(s).` : '\nNothing blocking.');
process.exit(blocking ? 1 : 0);
