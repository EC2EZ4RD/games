export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const easeOut = t => 1 - (1 - t) * (1 - t);
export const easeOutBack = t => { const c = 1.9; t -= 1; return 1 + (c + 1) * t * t * t + c * t * t; };

export function hexRGB(c) { const n = parseInt(c.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
export const mixRGB = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
export const css = (a, alpha) => (alpha == null
  ? `rgb(${a[0] | 0},${a[1] | 0},${a[2] | 0})`
  : `rgba(${a[0] | 0},${a[1] | 0},${a[2] | 0},${alpha})`);

// Seeded RNG (mulberry32): a daily challenge deals the same cats, cards and containers to everyone.
export function makeRng(seed) {
  let s = seed >>> 0;
  const r = () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  r.state = () => s;
  r.setState = v => { s = v >>> 0; };
  r.int = n => Math.floor(r() * n);
  r.pick = arr => arr[Math.floor(r() * arr.length)];
  return r;
}

export const store = {
  get(k, d) { try { const v = localStorage.getItem('liquidcat.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('liquidcat.' + k, JSON.stringify(v)); } catch (e) { /* private mode */ } },
};

export function today() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}
