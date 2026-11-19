// Serves site/ the way GitHub Pages will: under /games/ (the repo name), so every game is tried
// from a sub-path exactly as on https://ec2ez4rd.github.io/games/.
//   node scripts/serve.mjs [port]      then open http://localhost:5400/games/
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'site');
const BASE = '/games/';
const PORT = Number(process.argv[2] ?? process.env.PORT ?? 5400);
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.otf': 'font/otf',
  '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wav': 'audio/wav', '.m4a': 'audio/mp4', '.mp4': 'video/mp4',
  '.wasm': 'application/wasm', '.bin': 'application/octet-stream', '.glb': 'model/gltf-binary', '.txt': 'text/plain; charset=utf-8',
};

createServer((req, res) => {
  const url = new URL(req.url ?? '/', 'http://x');
  if (url.pathname === '/' || url.pathname === '/games') {
    res.writeHead(302, { location: BASE }).end();
    return;
  }
  if (!url.pathname.startsWith(BASE)) {
    res.writeHead(404).end('not found');
    return;
  }
  let file = normalize(join(SITE, decodeURIComponent(url.pathname.slice(BASE.length))));
  if (!file.startsWith(SITE)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) {
    // like Pages: a folder without its trailing slash redirects to it
    if (!url.pathname.endsWith('/')) {
      res.writeHead(301, { location: url.pathname + '/' + url.search }).end();
      return;
    }
    file = join(file, 'index.html');
  }
  if (!existsSync(file)) {
    res.writeHead(404).end('not found');
    return;
  }
  // GitHub Pages sends max-age=600; the same here, so loading behaves as it will online
  res.writeHead(200, { 'content-type': TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream', 'cache-control': 'max-age=600', 'content-length': statSync(file).size });
  createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`site/ on http://localhost:${PORT}${BASE}`));
