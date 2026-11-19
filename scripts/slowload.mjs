// Opens a game with an empty cache on a throttled connection and records, from inside the page,
// what a visitor sees: first paint (the loading screen), each progress step, when the game's code
// has run, when the loading screen leaves, and whether any file was downloaded twice.
// Screenshots (which do not wait for fonts) go to .shots/slow-<slug>-<s>s.png.
//
//   node scripts/slowload.mjs meow-planet [kbps=1600] [latencyMs=150]
//   LIVE=https://ec2ez4rd.github.io/games/ node scripts/slowload.mjs sadou
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchChrome } from './browser.mjs';

const HUB = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(HUB, '.shots');
mkdirSync(OUT, { recursive: true });
const [slug = 'meow-planet', kbps = '1600', latency = '150'] = process.argv.slice(2);
const PORT = 5406;
const BASE = process.env.LIVE ?? `http://localhost:${PORT}/games/`;
const server = process.env.LIVE ? null : spawn(process.execPath, [join(HUB, 'scripts', 'serve.mjs'), String(PORT)], { stdio: ['ignore', 'pipe', 'inherit'] });
if (server) await new Promise((ok) => server.stdout.once('data', ok));

const browser = await launchChrome();
const context = await browser.newContext(process.env.VIEW === 'desktop'
  ? { viewport: { width: 1440, height: 900 } }
  : { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await context.addInitScript(() => {
  const log = (window.__ld = []);
  const t = () => Math.round(performance.now());
  let last = null, seen = false;
  new MutationObserver(() => {
    const el = document.getElementById('hub-ld');
    if (el) seen = true;
    if (!seen) return;
    const pct = el ? el.querySelector('.pct')?.textContent : 'gone';
    if (pct !== last) { log.push([t(), pct]); last = pct; }
  }).observe(document, { subtree: true, childList: true, characterData: true });
  document.addEventListener('load', (e) => { if (e.target.tagName === 'SCRIPT' && e.target.type === 'module') log.push([t(), 'game code ran']); }, true);
});
const page = await context.newPage();
const cdp = await context.newCDPSession(page);
await cdp.send('Network.enable');
await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: Number(latency), downloadThroughput: (Number(kbps) * 1024) / 8, uploadThroughput: (750 * 1024) / 8 });

const byId = new Map();
const perUrl = new Map();
const rec = (u) => perUrl.get(u) ?? perUrl.set(u, { n: 0, bytes: 0, each: [] }).get(u);
cdp.on('Network.requestWillBeSent', (e) => byId.set(e.requestId, e.request.url));
cdp.on('Network.loadingFinished', (e) => { const u = byId.get(e.requestId); if (u) { const r = rec(u); r.n++; r.bytes += e.encodedDataLength; r.each.push(e.encodedDataLength); } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));

const t0 = Date.now();
page.goto(`${BASE}${slug}/`, { waitUntil: 'commit' }).catch((e) => errors.push(`goto: ${e.message}`));
const shot = async (name) => {
  const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(join(OUT, `slow-${slug}-${name}.png`), Buffer.from(data, 'base64'));
};
const plan = (process.env.SHOTS ?? '1,2,4,10').split(',').map(Number);
let gone = false;
while (!gone && Date.now() - t0 < 150000) {
  const s = (Date.now() - t0) / 1000;
  if (plan.length && s >= plan[0]) await shot(`${plan.shift()}s`).catch(() => {});
  gone = await page.evaluate(() => (window.__ld || []).some((x) => x[1] === 'gone')).catch(() => false);
  await new Promise((r) => setTimeout(r, 200));
}
await new Promise((r) => setTimeout(r, 1500));
await shot('after').catch(() => {});
const log = await page.evaluate(() => window.__ld).catch(() => []);
const fcp = await page.evaluate(() => Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? -1)).catch(() => -1);

console.log(`${slug} at ${kbps} kbit/s, ${latency} ms latency, empty cache`);
console.log(`  first paint (the loading screen): ${fcp} ms`);
const steps = log.filter((x) => /%$/.test(x[1]));
const pick = steps.filter((x, i) => i === 0 || i === steps.length - 1 || i % Math.ceil(steps.length / 12) === 0);
console.log(`  progress: ${pick.map((x) => `${(x[0] / 1000).toFixed(1)}s ${x[1]}`).join('  ')}`);
for (const x of log.filter((x) => !/%$/.test(x[1]))) console.log(`  ${(x[0] / 1000).toFixed(1)}s ${x[1]}`);
const fetched = [...perUrl].reduce((t, [, r]) => t + r.bytes, 0);
// two requests for one file are fine when the second came from the cache; paid twice = the bytes add up to more than one copy
const twice = [...perUrl].filter(([, r]) => r.n > 1 && r.bytes > 4096 && r.bytes > 1.2 * Math.max(...r.each));
console.log(`  downloaded ${(fetched / 1048576).toFixed(2)} MB over ${perUrl.size} URLs; bytes paid twice: ${twice.length ? twice.map(([u]) => u.split('/').pop()).join(', ') : 'none'}`);
if (errors.length) console.log('  page errors:', errors.slice(0, 5));
await browser.close();
server?.kill();
