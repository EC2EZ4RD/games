// Takes each game's cover picture from its own web build in site/: the screen a player sees after
// opening it (or `coverQuery`, e.g. a battle already under way), at the size of the device the
// game is made for. Writes covers/<slug>.jpg, which the hub page shows inside a device frame.
//
//   node scripts/build.mjs  (site/ must hold the games), then: node scripts/covers.mjs [slug ...]
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchChrome } from './browser.mjs';

const HUB = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(HUB, 'covers');
mkdirSync(OUT, { recursive: true });
const PORT = 5403;
const only = process.argv.slice(2);
const manifest = JSON.parse(readFileSync(join(HUB, 'games.json'), 'utf8'));

const server = spawn(process.execPath, [join(HUB, 'scripts', 'serve.mjs'), String(PORT)], { stdio: ['ignore', 'pipe', 'inherit'] });
await new Promise((ok) => server.stdout.once('data', ok));
const browser = await launchChrome();
const PHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
const DEVICE = {
  portrait: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 1.5, isMobile: true, hasTouch: true, userAgent: PHONE_UA },
  landscape: { viewport: { width: 844, height: 390 }, deviceScaleFactor: 1.5, isMobile: true, hasTouch: true, userAgent: PHONE_UA },
  desktop: { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 0.75 },
};

for (const g of manifest.games) {
  if (only.length && !only.includes(g.slug)) continue;
  const context = await browser.newContext(DEVICE[g.screen]);
  const page = await context.newPage();
  page.on('pageerror', (e) => console.error(`[${g.slug}] ${e.message}`));
  await page.goto(`http://localhost:${PORT}/games/${g.slug}/${g.coverQuery ?? ''}`, { waitUntil: 'load' });
  await page.waitForTimeout((g.coverWait ?? 6) * 1000);
  await page.screenshot({ path: join(OUT, `${g.slug}.jpg`), type: 'jpeg', quality: 82 });
  console.log(`covers/${g.slug}.jpg`);
  await context.close();
}
await browser.close();
server.kill();
