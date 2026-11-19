// Containers. 「猫是液体」: cats fill whatever they are poured into.
// Coordinates: y = 0 is the warning line at the container's mouth, y grows downward.
// lines[0] is the container wall; further lines are shelves. pegs are [x, y, r].

const WALL_R = 6;

function ellipseArc(cx, cy, rx, ry, a0, a1, steps) {
  const pts = [];
  for (let k = 0; k <= steps; k++) { const a = a0 + (a1 - a0) * k / steps; pts.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)]); }
  return pts;
}
const mirror = (pts, w) => pts.slice().reverse().map(([x, y]) => [w - x, y]);

const bowlArc = ellipseArc(200, 14, 234, 372, Math.PI, 0, 22);
const fishArc = ellipseArc(200, 330, 235, 357, Math.PI + 1.1785, -1.1785, 30);
const vaseLeft = [[-22, -40], [-2, 40], [8, 150], [40, 230], [110, 292], [126, 318], [122, 346], [60, 400], [8, 470], [0, 540], [18, 610]];
const mugLeft = [[0, -26], [0, 600], [8, 626], [30, 640]];
const tubLeft = [[-60, -24], [-52, 260], [-36, 420], [-6, 500], [40, 530]];

export const MAPS = {
  bowl: {
    name: '猫碗', wall: '#FF8FA3', inside: '#FFF3F1',
    lines: [[[-52, -30], [-34, 0], ...bowlArc, [434, 0], [452, -30]]], pegs: [], drop: [-32, 432],
  },
  box: {
    name: '纸箱', wall: '#D9A066', inside: '#F6DDB9',
    lines: [[[-48, -70], [0, -12], [0, 600], [400, 600], [400, -12], [448, -70]]], pegs: [], drop: [0, 400],
  },
  cattree: {
    name: '猫爬架', wall: '#C98B5A', inside: '#FFF1DE',
    lines: [[[0, -30], [0, 600], [400, 600], [400, -30]], [[0, 250], [165, 268]], [[400, 400], [235, 418]]],
    pegs: [[300, 150, 15]], drop: [0, 400],
  },
  fishbowl: {
    name: '鱼缸', wall: '#8FD3EE', inside: '#EAF8FF',
    lines: [[[84, -28], ...fishArc, [316, -28]]], pegs: [], drop: [110, 290],
  },
  vase: {
    name: '花瓶', wall: '#5C8DD6', inside: '#F1F6FF',
    lines: [[...vaseLeft, ...mirror(vaseLeft, 400)]], pegs: [], drop: [-12, 412],
  },
  mug: {
    name: '马克杯', wall: '#57C7A8', inside: '#F2FFF9',
    lines: [[...mugLeft, ...mirror(mugLeft, 330)]], pegs: [], drop: [0, 330],
  },
  bathtub: {
    name: '浴缸', wall: '#9BB7D4', inside: '#F7FBFF',
    lines: [[...tubLeft, ...mirror(tubLeft, 400)]], pegs: [], drop: [-56, 456],
  },
};

// A run is six stages. Each picks a container from its tier and asks for a bigger cat.
export const STAGES = [
  { pool: ['bowl', 'box'], target: 5 },
  { pool: ['box', 'cattree'], target: 6 },
  { pool: ['cattree', 'fishbowl'], target: 7 },
  { pool: ['fishbowl', 'vase'], target: 8 },
  { pool: ['vase', 'mug'], target: 9 },
  { pool: ['bathtub'], target: 10 },
];

export function buildMap(id) {
  const m = MAPS[id];
  let x0 = 1e9, x1 = -1e9, y1 = -1e9;
  for (const line of m.lines) for (const [x, y] of line) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  for (const [x, y, r] of m.pegs) { x0 = Math.min(x0, x - r); x1 = Math.max(x1, x + r); }
  return {
    id, ...m, r: WALL_R,
    bounds: { x0: x0 - WALL_R, x1: x1 + WALL_R, y0: -150, y1: y1 + WALL_R },
    holdY: -72, killY: y1 + 220,
  };
}
