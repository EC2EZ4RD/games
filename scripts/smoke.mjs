// Opens the hub and every game in site/ in headless Chrome, the way a visitor would on GitHub
// Pages (served under /games/), and reports page errors, failed or 4xx/5xx requests, and any
// request leaving the site (TapTap, TapDB or anything else). Screenshots go to .shots/.
//
//   node scripts/smoke.mjs [slug ...]         SECS=8 waits longer per game; VIEWS=phone,desktop
//
// Views: a portrait game is opened as a phone held upright (390x844) and on a desktop (1440x900),
// a landscape game as a phone on its side (844x390) and on a desktop, a desktop game on a desktop.
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchChrome } from './browser.mjs';

const HUB = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(HUB, '.shots');
mkdirSync(OUT, { recursive: true });
const PORT = 5401;
const BASE = `http://localhost:${PORT}/games/`;
const SECS = Number(process.env.SECS ?? 6);
const only = process.argv.slice(2);
const views = (process.env.VIEWS ?? 'phone,desktop').split(',');

const server = spawn(process.execPath, [join(HUB, 'scripts', 'serve.mjs'), String(PORT)], { stdio: ['ignore', 'pipe', 'inherit'] });
await new Promise((ok) => server.stdout.once('data', ok));
const browser = await launchChrome();
const IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
const VIEW = {
  'phone-portrait': { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, userAgent: IPHONE_UA },
  'phone-landscape': { viewport: { width: 844, height: 390 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, userAgent: IPHONE_UA },
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
};

async function visit(name, url, view) {
  const context = await browser.newContext(VIEW[view]);
  const page = await context.newPage();
  const problems = [];
  const outside = new Set();
  page.on('pageerror', (e) => problems.push(`pageerror: ${e.message.split('\n')[0]}`));
  page.on('console', (m) => { if (m.type() === 'error') problems.push(`console: ${m.text().slice(0, 160)}`); });
  page.on('requestfailed', (r) => { if (!r.url().startsWith('data:')) problems.push(`failed: ${r.url()} ${r.failure()?.errorText ?? ''}`); });
  page.on('response', (r) => { if (r.status() >= 400) problems.push(`${r.status()}: ${r.url()}`); });
  page.on('request', (r) => { const u = new URL(r.url()); if (u.protocol.startsWith('http') && u.host !== `localhost:${PORT}`) outside.add(u.host); });
  const t0 = Date.now();
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  } catch (e) {
    problems.push(`goto: ${e.message.split('\n')[0]}`);
  }
  await page.waitForTimeout(SECS * 1000);
  const file = join(OUT, `${name}-${view}.png`);
  await page.screenshot({ path: file }).catch((e) => problems.push(`screenshot: ${e.message}`));
  const title = await page.title().catch(() => '');
  await context.close();
  return { name, view, title, secs: Math.round((Date.now() - t0) / 1000), problems, outside: [...outside] };
}

const site = JSON.parse(readFileSync(join(HUB, 'site', 'games.json'), 'utf8'));
const results = [];
if (!only.length || only.includes('hub')) {
  for (const view of ['phone-portrait', 'desktop']) results.push(await visit('hub', BASE, view));
}
for (const g of site.games) {
  if (!g.built || (only.length && !only.includes(g.slug))) continue;
  const phone = g.screen === 'landscape' ? 'phone-landscape' : 'phone-portrait';
  const list = g.screen === 'desktop' ? ['desktop'] : [...(views.includes('phone') ? [phone] : []), ...(views.includes('desktop') ? ['desktop'] : [])];
  for (const view of list) results.push(await visit(g.slug, `${BASE}${g.slug}/`, view));
}
await browser.close();
server.kill();

writeFileSync(join(OUT, 'smoke.json'), JSON.stringify(results, null, 2));
for (const r of results) {
  const flag = r.problems.length || r.outside.length ? 'CHECK' : 'ok';
  console.log(`${flag.padEnd(5)} ${r.name.padEnd(12)} ${r.view.padEnd(16)} ${String(r.secs).padStart(3)} s  "${r.title}"${r.outside.length ? `  outside: ${r.outside.join(', ')}` : ''}`);
  for (const p of r.problems.slice(0, 8)) console.log(`        ${p}`);
  if (r.problems.length > 8) console.log(`        … ${r.problems.length - 8} more`);
}
