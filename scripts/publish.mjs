// Publishes site/ to GitHub Pages: commits exactly what is in site/ onto the gh-pages branch (one
// commit per publish, history kept) and pushes it. The main branch holds only the hub's own files.
//
//   node scripts/build.mjs && node scripts/publish.mjs            build, check, publish
//   node scripts/publish.mjs --dry-run                            make the commit locally, don't push
//
// Runs scripts/check.mjs first and stops if it finds anything that must not go public.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HUB = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(HUB, 'site');
const dry = process.argv.includes('--dry-run');
const BRANCH = 'gh-pages';

const git = (args, opts = {}) => execFileSync('git', ['-c', 'core.autocrlf=false', '-c', 'core.safecrlf=false', ...args], { cwd: HUB, encoding: 'utf8', ...opts }).trim();

if (!existsSync(join(SITE, 'index.html'))) throw new Error('site/ is empty: run node scripts/build.mjs first');
execFileSync(process.execPath, [join(HUB, 'scripts', 'check.mjs')], { stdio: 'inherit' });

// a tree of exactly site/, built in its own index so the main branch's index is untouched
const index = join(HUB, '.git', 'pages.index');
rmSync(index, { force: true });
const env = { ...process.env, GIT_INDEX_FILE: index };
execFileSync('git', ['-c', 'core.autocrlf=false', '-c', 'core.safecrlf=false', `--git-dir=${join(HUB, '.git')}`, '--work-tree=.', 'add', '-A', '--force', '.'], { cwd: SITE, env, stdio: 'inherit' });
const tree = execFileSync('git', [`--git-dir=${join(HUB, '.git')}`, 'write-tree'], { cwd: SITE, env, encoding: 'utf8' }).trim();
rmSync(index, { force: true });

let parent = '';
try { git(['fetch', '--quiet', 'origin', BRANCH]); } catch { /* no remote branch yet */ }
for (const ref of [`refs/remotes/origin/${BRANCH}`, `refs/heads/${BRANCH}`]) {
  try { parent = git(['rev-parse', '--verify', '--quiet', ref]); if (parent) break; } catch { /* not there */ }
}
if (parent && git(['rev-parse', `${parent}^{tree}`]) === tree) {
  console.log('site/ is exactly what is published already: nothing to do.');
  process.exit(0);
}

const site = JSON.parse(readFileSync(join(SITE, 'games.json'), 'utf8'));
const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
const message = `Publish ${stamp} UTC\n\n${site.games.map((g) => `- ${g.slug}`).join('\n')}\n`;
const commit = git(['commit-tree', tree, ...(parent ? ['-p', parent] : []), '-m', message]);
git(['update-ref', `refs/heads/${BRANCH}`, commit]);
console.log(`${BRANCH} -> ${commit.slice(0, 7)} (${site.games.length} games)`);
if (dry) {
  console.log('--dry-run: not pushed.');
} else {
  execFileSync('git', ['push', 'origin', `${BRANCH}:${BRANCH}`], { cwd: HUB, stdio: 'inherit' });
  console.log(`pushed. Pages: ${site.url}`);
}
