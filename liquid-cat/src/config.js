import { hexRGB, mixRGB, css } from './util.js';

export const INK = '#3B2342';
export const INK_RGB = hexRGB(INK);
export const FONT = 'Kuaile, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
export const STEP = 1 / 120, SUB = 4, GRAV = 2100;
export const MAX_LEVEL = 10;                     // level 10 = 2048
export const OVER_LIMIT = 3;                     // seconds above the line before the container overflows

export const HALF = [], VALUES = [];
for (let k = 0; k <= MAX_LEVEL; k++) { HALF.push(19.5 * Math.pow(1.2, k)); VALUES.push(String(2 << k)); }

// One flavour of slime cat per number.
export const CATS = [
  { name: '水滴喵', color: '#9EE6FF' },
  { name: '柠檬喵', color: '#FFE066' },
  { name: '橘子喵', color: '#FF9F4A' },
  { name: '草莓喵', color: '#FF6B8B' },
  { name: '葡萄喵', color: '#B98CFF' },
  { name: '蓝莓喵', color: '#4FA3FF' },
  { name: '薄荷喵', color: '#3FD39B' },
  { name: '青柠喵', color: '#C4E84F' },
  { name: '泡泡糖喵', color: '#FF7DC6' },
  { name: '星空喵', color: '#7A6BFF' },
  { name: '招财猫王', color: '#FFC83A' },
];
for (const c of CATS) {
  c.rgb = hexRGB(c.color);
  c.shadeRgb = mixRGB(c.rgb, INK_RGB, 0.3);
  c.lightRgb = mixRGB(c.rgb, [255, 255, 255], 0.5);
  c.fill = css(c.rgb); c.shade = css(c.shadeRgb); c.light = css(c.lightRgb);
}
