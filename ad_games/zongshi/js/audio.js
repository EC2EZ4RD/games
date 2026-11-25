import { ASSET } from './data.js?v=14';

// 音频管理器：结合真实解包 OGG BGM/战斗音效 + WebAudio 清脆古风交互音
class AudioManager {
  constructor() {
    this.muted = false;
    this.unlocked = false;
    this.bgmEl = null;
    this.currentBgmUrl = null;
    this.ctx = null;
    this.sfxPool = new Map();
    this.lastHitTime = 0;
  }

  unlock() {
    if (this.unlocked) return;
    this.unlocked = true;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    } catch {}
    if (this.currentBgmUrl && !this.muted) {
      this._startBgm(this.currentBgmUrl);
    }
  }

  setMuted(flag) {
    this.muted = flag;
    if (this.bgmEl) {
      this.bgmEl.muted = flag;
      if (!flag && this.unlocked) {
        this.bgmEl.play().catch(() => {});
      }
    }
  }

  playBgm(url) {
    if (this.currentBgmUrl === url && this.bgmEl && !this.bgmEl.paused) return;
    this.currentBgmUrl = url;
    if (!this.unlocked) return;
    this._startBgm(url);
  }

  _startBgm(url) {
    try {
      if (this.bgmEl) {
        this.bgmEl.pause();
      }
      const audio = new Audio(url);
      audio.loop = true;
      audio.volume = 0.28;
      audio.muted = this.muted;
      this.bgmEl = audio;
      audio.play().catch(() => {});
    } catch {}
  }

  playFileSfx(url, volume = 0.32) {
    if (this.muted || !this.unlocked || !url) return;
    try {
      const a = new Audio(url);
      a.volume = volume;
      a.play().catch(() => {});
    } catch {}
  }

  playSwordHit() {
    if (this.muted || !this.unlocked) return;
    const now = performance.now();
    if (now - this.lastHitTime < 140) return;
    this.lastHitTime = now;
    const idx = 1 + Math.floor(Math.random() * 3);
    this.playFileSfx(ASSET.sfx(`animation/character/sfx_chr_male_001@jian_attack_${idx}.ogg`), 0.22);
  }

  // 古风五声音阶合成交互音（合成/点击/气泡/突破/胜利）
  _tone(freq, duration = 0.14, type = 'sine', gainPeak = 0.12, delay = 0) {
    if (this.muted || !this.unlocked || !this.ctx) return;
    try {
      const t = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(gainPeak, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + duration + 0.02);
    } catch {}
  }

  playClick() {
    this._tone(587.33, 0.07, 'triangle', 0.08);
  }

  playPop() {
    // 灵气泡泡清脆水珠声
    this._tone(523.25, 0.09, 'sine', 0.12, 0);
    this._tone(783.99, 0.12, 'sine', 0.10, 0.04);
  }

  playMerge(quality = 2) {
    const base = 440 + quality * 65;
    this._tone(base, 0.16, 'triangle', 0.13, 0);
    this._tone(base * 1.25, 0.18, 'sine', 0.12, 0.06);
    this._tone(base * 1.5, 0.26, 'sine', 0.13, 0.12);
  }

  playBreakthrough() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((n, i) => this._tone(n, 0.35, 'triangle', 0.13, i * 0.08));
  }

  playVictory() {
    const notes = [523.25, 587.33, 659.25, 783.99, 1046.5];
    notes.forEach((n, i) => this._tone(n, 0.28, 'sine', 0.12, i * 0.07));
  }

  playDefeat() {
    const notes = [392, 349.23, 311.13, 261.63];
    notes.forEach((n, i) => this._tone(n, 0.28, 'sawtooth', 0.06, i * 0.1));
  }
}

export const audio = new AudioManager();
