import * as THREE from 'three';

const texLoader = new THREE.TextureLoader();
const fxTexCache = new Map();

function loadFxTex(url) {
  if (!url) return null;
  if (!fxTexCache.has(url)) {
    const t = texLoader.load(url);
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.RepeatWrapping;
    t.colorSpace = THREE.SRGBColorSpace;
    fxTexCache.set(url, t);
  }
  return fxTexCache.get(url);
}

// 1x1 white fallback texture so GLSL samplers are always valid
let whiteFallback = null;
function getWhiteTex() {
  if (!whiteFallback) {
    whiteFallback = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, THREE.RGBAFormat);
    whiteFallback.needsUpdate = true;
  }
  return whiteFallback;
}

const FX_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

/**
 * 1:1 复刻 Unity 《宗师之上》核心特效着色器 `FX_Standard` (WebGL2 GLSL)
 * 支持真实材质参数：
 *  - _Texture / _MainTex + ST + UV 滚动 (_Uscroll / _Vscroll) + 序列帧 (_SequenceCol/Row)
 *  - _DistortTexture UV 扭曲扰动
 *  - _ColorControlTex 渐变双色染色 (_Color <-> _Color1 HDR 高光)
 *  - _Mask 遮罩贴图 + _MaskTilingOffset + _MaskSpeed
 *  - _DissolveTex 随生命周期溶解消散 + _EdageColor 烧蚀亮边
 *  - 粒子生命色彩与透明度 (uPartColor) + 亮度增益 (_Brightness) + _AlphaClip
 */
const FX_FRAG = /* glsl */ `
precision mediump float;

uniform sampler2D uMainTex;
uniform sampler2D uMaskTex;
uniform sampler2D uDissolveTex;
uniform sampler2D uDistortTex;
uniform sampler2D uColorCtrlTex;

uniform vec4 uMainST;
uniform vec4 uMaskST;
uniform vec4 uMaskSpeed;
uniform vec2 uScroll;
uniform vec2 uDistForce;
uniform float uDistTime;

uniform float uHasMask;
uniform float uHasDissolve;
uniform float uHasDistort;
uniform float uHasColorCtrl;
uniform float uAdditive;

uniform vec4 uColor;
uniform vec4 uColor1;
uniform vec4 uEdgeColor;
uniform vec4 uPartColor;

uniform float uBrightness;
uniform float uAlphaAdjust;
uniform float uDissolve;
uniform float uDissolveEdge;
uniform float uAlphaClip;
uniform float uTime;
uniform float uLifeP;
uniform vec3 uSeqParams; // (cols, rows, speed)
uniform vec4 uTileRect;  // ParticleSystem UVModule flipbook (repeatX, repeatY, offX, offY)

varying vec2 vUv;

void main() {
  // 1. 粒子序列帧 UV 裁切
  vec2 baseUv = vUv * uTileRect.xy + uTileRect.zw;

  // 材质自带序列帧
  if (uSeqParams.x > 1.0 || uSeqParams.y > 1.0) {
    float cols = max(1.0, uSeqParams.x);
    float rows = max(1.0, uSeqParams.y);
    float total = cols * rows;
    float idx = floor(mod(uTime * max(1.0, uSeqParams.z) * 12.0, total));
    float cx = mod(idx, cols);
    float cy = floor(idx / cols);
    baseUv = vec2((baseUv.x + cx) / cols, (baseUv.y + (rows - 1.0 - cy)) / rows);
  }

  // 2. Distort UV 扰动
  vec2 distortOff = vec2(0.0);
  if (uHasDistort > 0.5) {
    vec2 dUv = baseUv + vec2(uTime * uDistTime * 0.6, -uTime * uDistTime * 0.45);
    vec2 n = texture2D(uDistortTex, dUv).rg - 0.5;
    distortOff = n * uDistForce * 0.16;
  }

  // 3. 主贴图采样 + UV 滚动
  vec2 mainUv = baseUv * uMainST.xy + uMainST.zw + uScroll * uTime + distortOff;
  vec4 texCol = texture2D(uMainTex, mainUv);

  // 4. 色彩混合：保真还原 Unity HDR 剑气/刀焰/冰晶/水墨色彩饱和度
  vec3 tintRgb;
  if (uHasColorCtrl > 0.5) {
    float ctrl = texture2D(uColorCtrlTex, baseUv + distortOff * 0.5).r;
    tintRgb = mix(uColor.rgb, uColor1.rgb, clamp(ctrl, 0.0, 1.0));
  } else {
    float luma1 = dot(uColor1.rgb, vec3(0.3, 0.6, 0.1));
    tintRgb = luma1 > 0.05 ? mix(uColor.rgb, uColor1.rgb, 0.62) : uColor.rgb;
  }
  float maxC = max(tintRgb.r, max(tintRgb.g, tintRgb.b));
  if (maxC > 2.5) {
    tintRgb = tintRgb * (2.5 + log(maxC - 1.5) * 0.65) / maxC;
  }

  vec3 rgb = texCol.rgb * tintRgb * uPartColor.rgb * clamp(uBrightness, 0.8, 3.2);

  // 5. Alpha 通道：加色与黑底特效贴图按亮度裁除纯黑矩形底色，仅深色水墨贴图保留暗部！
  float baseAlpha = texCol.a;
  float lum = max(texCol.r, max(texCol.g, texCol.b));
  float tintLum = dot(tintRgb, vec3(0.333));
  if (uAdditive > 0.5 || tintLum > 0.24) {
    baseAlpha = min(baseAlpha, smoothstep(0.05, 0.28, lum));
  }
  float alpha = baseAlpha * max(0.35, uColor.a) * uPartColor.a * clamp(uAlphaAdjust, 0.35, 2.2);

  // 6. Mask 遮罩贴图
  if (uHasMask > 0.5) {
    vec2 mUv = baseUv * uMaskST.xy + uMaskST.zw + uMaskSpeed.xy * uTime;
    vec4 mSample = texture2D(uMaskTex, mUv);
    float mVal = max(mSample.r, mSample.a);
    alpha *= mVal;
  }

  // 7. Dissolve 随生命周期溶解消散 + 烧蚀亮边
  if (uHasDissolve > 0.5) {
    float dNoise = texture2D(uDissolveTex, baseUv + distortOff * 0.4).r;
    float cutoff = mix(uDissolve * 0.4, 1.02, smoothstep(0.35, 1.0, uLifeP));
    float edgeW = max(0.04, uDissolveEdge);
    float dAlpha = smoothstep(cutoff - edgeW, cutoff + edgeW, dNoise);
    float edgeBand = smoothstep(cutoff - edgeW * 1.4, cutoff, dNoise) * (1.0 - dAlpha);
    rgb += uEdgeColor.rgb * edgeBand * 1.6;
    alpha *= dAlpha;
  }

  if (alpha <= max(0.015, uAlphaClip)) discard;

  // 加色模式下用 alpha 调制输出亮度，防止透明区域叠加发白
  if (uAdditive > 0.5) {
    rgb *= alpha;
  }

  gl_FragColor = vec4(rgb, clamp(alpha, 0.0, 1.0));
}
`;

export function createFxStandardMaterial(matDef) {
  const white = getWhiteTex();
  const mainUrl = matDef.tex._Texture || matDef.tex._MainTex || matDef.tex._DetailTex || Object.values(matDef.tex)[0];
  const mainTex = loadFxTex(mainUrl) || white;
  const maskTex = matDef.tex._Mask ? loadFxTex(matDef.tex._Mask) : white;
  const dissTex = matDef.tex._DissolveTex ? loadFxTex(matDef.tex._DissolveTex) : white;
  const distTex = matDef.tex._DistortTexture ? loadFxTex(matDef.tex._DistortTexture) : white;
  const ctrlTex = matDef.tex._ColorControlTex ? loadFxTex(matDef.tex._ColorControlTex) : white;

  const mainKey = matDef.tex._Texture ? '_Texture' : (matDef.tex._MainTex ? '_MainTex' : Object.keys(matDef.tex)[0]);
  const mainST = matDef.st?.[mainKey] || [1, 1, 0, 0];
  const maskST = matDef.maskST || matDef.st?._Mask || [1, 1, 0, 0];
  const col = matDef.color || [1, 1, 1, 1];
  const col1 = matDef.color1 || col;
  const edge = matDef.edgeColor || [1, 0.6, 0.2, 1];
  const mspd = matDef.maskSpeed || [0, 0, 0, 0];
  const df = matDef.distForce || [0, 0];

  const mat = new THREE.ShaderMaterial({
    vertexShader: FX_VERT,
    fragmentShader: FX_FRAG,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
    blending: matDef.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    uniforms: {
      uMainTex: { value: mainTex },
      uMaskTex: { value: maskTex },
      uDissolveTex: { value: dissTex },
      uDistortTex: { value: distTex },
      uColorCtrlTex: { value: ctrlTex },
      uMainST: { value: new THREE.Vector4(mainST[0], mainST[1], mainST[2], mainST[3]) },
      uMaskST: { value: new THREE.Vector4(maskST[0], maskST[1], maskST[2], maskST[3]) },
      uMaskSpeed: { value: new THREE.Vector4(mspd[0], mspd[1], mspd[2], mspd[3]) },
      uScroll: { value: new THREE.Vector2(matDef.uScroll || 0, matDef.vScroll || 0) },
      uDistForce: { value: new THREE.Vector2(df[0], df[1]) },
      uDistTime: { value: matDef.distTime || 0.2 },
      uHasMask: { value: matDef.tex._Mask ? 1.0 : 0.0 },
      uHasDissolve: { value: matDef.tex._DissolveTex ? 1.0 : 0.0 },
      uHasDistort: { value: matDef.tex._DistortTexture ? 1.0 : 0.0 },
      uHasColorCtrl: { value: matDef.tex._ColorControlTex ? 1.0 : 0.0 },
      uAdditive: { value: matDef.additive ? 1.0 : 0.0 },
      uColor: { value: new THREE.Vector4(col[0], col[1], col[2], Math.max(0.25, col[3])) },
      uColor1: { value: new THREE.Vector4(col1[0], col1[1], col1[2], col1[3]) },
      uEdgeColor: { value: new THREE.Vector4(edge[0], edge[1], edge[2], edge[3]) },
      uPartColor: { value: new THREE.Vector4(1, 1, 1, 1) },
      uBrightness: { value: Math.max(0.9, matDef.brightness || 1.0) },
      uAlphaAdjust: { value: Math.max(0.65, matDef.alphaAdjust || 1.0) },
      uDissolve: { value: matDef.dissolve || 0.0 },
      uDissolveEdge: { value: matDef.dissolveEdge || 0.08 },
      uAlphaClip: { value: matDef.alphaClip || 0.0 },
      uTime: { value: 0.0 },
      uLifeP: { value: 0.0 },
      uSeqParams: { value: new THREE.Vector3(matDef.seqCols || 1, matDef.seqRows || 1, matDef.seqSpeed || 1) },
      uTileRect: { value: new THREE.Vector4(1, 1, 0, 0) },
    },
  });
  return mat;
}
