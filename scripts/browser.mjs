// Headless Chrome for the scripts that open the games (smoke.mjs, covers.mjs).
// Playwright comes from PLAYWRIGHT_MODULE (a path to playwright's index.mjs), an installed
// `playwright` package, or the copy that ships with the Codex runtime in the home folder.
// The browser is the installed Google Chrome when there is one, else Playwright's own Chromium.
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

async function playwright() {
  const tries = [
    process.env.PLAYWRIGHT_MODULE && pathToFileURL(process.env.PLAYWRIGHT_MODULE).href,
    'playwright',
    pathToFileURL(join(homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs')).href,
  ].filter(Boolean);
  for (const spec of tries) {
    try { return await import(spec); } catch { /* next */ }
  }
  throw new Error('Playwright not found: npm i -D playwright, or set PLAYWRIGHT_MODULE to its index.mjs');
}

const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome'];

/** WebGL through SwiftShader: steady in headless runs on any machine (the GPU path drops contexts on some) */
export async function launchChrome() {
  const { chromium } = await playwright();
  const executablePath = CHROME.find(existsSync);
  return chromium.launch({
    ...(executablePath ? { executablePath } : {}),
    headless: true,
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio', '--autoplay-policy=no-user-gesture-required'],
  });
}
