// All sounds are synthesized: goo squelches, formant meows, chimes.
let ac = null, out = null, noiseBuf = null, muted = false;

export function unlockAudio() {
  if (!ac) {
    try {
      ac = new (window.AudioContext || window.webkitAudioContext)();
      out = ac.createGain(); out.gain.value = muted ? 0 : 0.7; out.connect(ac.destination);
      noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { ac = null; }
  }
  if (ac && ac.state === 'suspended' && !muted) ac.resume();
}

export function setMuted(m) {
  muted = m;
  if (!ac) return;
  out.gain.value = m ? 0 : 0.7;
  if (m) ac.suspend(); else ac.resume();   // a muted context is suspended to save battery
}

const ok = () => ac && ac.state === 'running' && !muted;
function env(g, t, a, peak, d) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + a);
  g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
}
function osc(type, f, t, dur, peak, f2) {
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.setValueAtTime(f, t);
  if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
  env(g, t, 0.006, peak, dur);
  o.connect(g).connect(out); o.start(t); o.stop(t + dur + 0.05);
}
function noise(t, dur, peak, freq, q, type, f2) {
  const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
  s.buffer = noiseBuf; f.type = type || 'lowpass'; f.frequency.setValueAtTime(freq, t); f.Q.value = q || 0.8;
  if (f2) f.frequency.exponentialRampToValueAtTime(f2, t + dur);
  env(g, t, 0.004, peak, dur);
  s.connect(f).connect(g).connect(out); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
}
// Wet "blorp": a falling sine with a gurgle, plus a squelch of filtered noise.
function blorp(t, base, vol) {
  const o = ac.createOscillator(), g = ac.createGain(), lfo = ac.createOscillator(), lg = ac.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(base * 1.8, t);
  o.frequency.exponentialRampToValueAtTime(base * 0.6, t + 0.16);
  lfo.frequency.value = 32; lg.gain.value = base * 0.18;
  lfo.connect(lg).connect(o.frequency);
  env(g, t, 0.01, vol, 0.2);
  o.connect(g).connect(out); o.start(t); lfo.start(t); o.stop(t + 0.28); lfo.stop(t + 0.28);
  noise(t, 0.12, vol * 0.45, 1400, 3, 'bandpass', 380);
}
// "mi-aow": a sawtooth through a formant that sweeps i → a → o.
function meowAt(t, pitch, vol) {
  const o = ac.createOscillator(), f1 = ac.createBiquadFilter(), f2 = ac.createBiquadFilter(), g = ac.createGain(), g2 = ac.createGain();
  const f0 = 560 * pitch;
  o.type = 'sawtooth';
  o.frequency.setValueAtTime(f0 * 0.85, t);
  o.frequency.linearRampToValueAtTime(f0 * 1.2, t + 0.1);
  o.frequency.linearRampToValueAtTime(f0 * 0.8, t + 0.34);
  f1.type = 'bandpass'; f1.Q.value = 5;
  f1.frequency.setValueAtTime(600, t); f1.frequency.linearRampToValueAtTime(1500, t + 0.1); f1.frequency.linearRampToValueAtTime(800, t + 0.34);
  f2.type = 'bandpass'; f2.Q.value = 7;
  f2.frequency.setValueAtTime(2600, t); f2.frequency.linearRampToValueAtTime(2200, t + 0.34);
  g2.gain.value = 0.35;
  env(g, t, 0.04, vol, 0.32);
  o.connect(f1).connect(g); o.connect(f2).connect(g2).connect(g); g.connect(out);
  o.start(t); o.stop(t + 0.42);
}

export const sfx = {
  drop() { if (!ok()) return; const t = ac.currentTime; osc('sine', 700, t, 0.08, 0.12, 260); noise(t, 0.06, 0.08, 900, 2, 'bandpass', 300); },
  land(v, lv) {
    if (!ok() || v < 0.05) return;
    const t = ac.currentTime, p = Math.pow(0.93, lv);
    noise(t, 0.1, 0.24 * v, 900 * p + 200, 2.5, 'bandpass', 180);
    osc('sine', 240 * p, t, 0.14, 0.24 * v, 90 * p);
  },
  merge(lv, combo) {
    if (!ok()) return;
    const t = ac.currentTime, base = 330 * Math.pow(0.93, lv) * Math.pow(2, Math.min(combo - 1, 8) * 2 / 12);
    blorp(t, base, 0.3);
    osc('sine', base * 3, t + 0.05, 0.12, 0.05, base * 3.6);
    if (lv >= 5) meowAt(t + 0.06, 1.25 - lv * 0.05, 0.12);
    if (lv >= 7) [1, 1.26, 1.5, 2].forEach((m, i) => osc('sine', 1046 * m, t + 0.1 + i * 0.06, 0.18, 0.05));
  },
  meow(pitch = 1, vol = 0.18) { if (ok()) meowAt(ac.currentTime, pitch, vol); },
  snap() { if (!ok()) return; const t = ac.currentTime; osc('sine', 900, t, 0.05, 0.05, 1500); },
  shake() { if (!ok()) return; const t = ac.currentTime; for (let i = 0; i < 4; i++) noise(t + i * 0.12, 0.12, 0.2, 500, 3, 'bandpass', 250); },
  split() { if (!ok()) return; const t = ac.currentTime; blorp(t, 420, 0.22); blorp(t + 0.09, 520, 0.18); },
  card() { if (!ok()) return; const t = ac.currentTime; [784, 988, 1175].forEach((f, i) => osc('triangle', f, t + i * 0.05, 0.2, 0.08)); },
  clear() {
    if (!ok()) return;
    const t = ac.currentTime + 0.05;
    [523, 659, 784, 1046].forEach((f, i) => osc('triangle', f, t + i * 0.1, 0.25, 0.13));
    meowAt(t + 0.45, 1.1, 0.14);
  },
  win() {
    if (!ok()) return;
    const t = ac.currentTime + 0.1;
    [523, 659, 784, 1046, 1318].forEach((f, i) => osc('triangle', f, t + i * 0.11, 0.3, 0.13));
    [523, 659, 784].forEach(f => osc('triangle', f * 2, t + 0.6, 0.8, 0.06));
  },
  mega() { if (!ok()) return; const t = ac.currentTime; noise(t, 0.5, 0.3, 900, 1, 'lowpass', 200); blorp(t, 140, 0.35); },
  over() {
    if (!ok()) return;
    const t = ac.currentTime;
    [392, 330, 262].forEach((f, i) => osc('triangle', f, t + i * 0.18, 0.3, 0.13, f * 0.94));
    meowAt(t + 0.55, 0.8, 0.12);
  },
  click() { if (!ok()) return; osc('sine', 980, ac.currentTime, 0.04, 0.07, 1300); },
};
