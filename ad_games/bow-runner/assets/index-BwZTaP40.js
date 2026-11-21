(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const bh={play:'<path d="M8 4.8v14.4a.8.8 0 0 0 1.2.7l11.3-7.2a.8.8 0 0 0 0-1.4L9.2 4.1A.8.8 0 0 0 8 4.8z" fill="currentColor"/>',home:'<path d="M3.5 11.2L12 3.8l8.5 7.4M6 9.4V20h4.5v-5.5h3V20H18V9.4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',back:'<path d="M14.5 5L7.5 12l7 7" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',restart:'<path d="M19 12a7 7 0 1 1-2.05-4.95" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M19.5 3.5v4.5H15" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',next:'<path d="M5 12h12M12.5 6.5L18 12l-5.5 5.5" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',hint:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',star:'<path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" fill="currentColor"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.2" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/>',sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',mute:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9.5l5 5M20.5 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',grid:'<g fill="currentColor"><rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/></g>',skull:'<path d="M12 3a8 8 0 0 0-8 8c0 2.6 1.3 4.6 3 5.8V20h10v-3.2c1.7-1.2 3-3.2 3-5.8a8 8 0 0 0-8-8z" fill="currentColor"/><circle cx="9" cy="11.5" r="1.9" fill="#fff"/><circle cx="15" cy="11.5" r="1.9" fill="#fff"/>'};function Qt(i,t="i"){var e;return`<svg class="${t}" viewBox="0 0 24 24" aria-hidden="true">${(e=bh[i])!=null?e:""}</svg>`}function oo(){return null}function Eh(i,t){var n,r;document.addEventListener("visibilitychange",()=>document.hidden?i():t());const e=oo();try{(n=e==null?void 0:e.onHide)==null||n.call(e,i),(r=e==null?void 0:e.onShow)==null||r.call(e,t)}catch{}}let Xo=0;function Cs(i="light"){var n;const t=performance.now();if(t-Xo<60)return;Xo=t;const e=oo();try{e!=null&&e.vibrateShort?e.vibrateShort({type:i}):(n=navigator.vibrate)==null||n.call(navigator,i==="heavy"?30:i==="medium"?18:10)}catch{}}function Th(){var t,e,n,r,s;const i=oo();if(!i)return 0;try{const a=(t=i.getMenuButtonBoundingClientRect)==null?void 0:t.call(i),o=(e=i.getSystemInfoSync)==null?void 0:e.call(i),c=o!=null&&o.windowWidth&&o.windowWidth>0?innerWidth/o.windowWidth:1;if(a&&a.bottom>0&&a.bottom<160)return Math.round(a.bottom*c+6);const l=((s=(r=o==null?void 0:o.statusBarHeight)!=null?r:(n=o==null?void 0:o.safeArea)==null?void 0:n.top)!=null?s:0)*c;return Math.round((l>=20?l:24)+42)}catch{return 0}}function wh(i){const t={v:1,stars:{},sound:!0,music:!0,seen:[]};try{const e=localStorage.getItem(`${i}/save/v1`);if(!e)return t;const n=JSON.parse(e);return{v:1,stars:typeof n.stars=="object"&&n.stars?n.stars:{},sound:n.sound!==!1,music:n.music!==!1,seen:Array.isArray(n.seen)?n.seen.filter(r=>typeof r=="string"):[]}}catch{return t}}function Ah(i,t){try{localStorage.setItem(`${i}/save/v1`,JSON.stringify(t))}catch{}}const qo=.42;class Ch{constructor(t,e,n){this.el=null,this.routed=!1,this.hidden=!1,this.sfx=t,this.url=e,this.on=n;const r=()=>this.wake();for(const s of["pointerdown","touchend","click","keydown"])document.addEventListener(s,r,{capture:!0,passive:!0});window.__music=this}get state(){const t=this.el;return{url:this.url,playing:!!t&&!t.paused,time:t?t.currentTime:0,routed:this.routed}}wake(){if(!(!this.on||this.hidden||!this.url))try{if(!this.el){const e=new Audio;e.preload="auto",e.loop=!0,e.src=this.url,e.volume=qo,this.el=e}const t=this.sfx.context;if(!this.routed&&t){const e=t.createGain();e.gain.value=qo,t.createMediaElementSource(this.el).connect(e),e.connect(t.destination),this.el.volume=1,this.routed=!0}this.el.paused&&this.el.play().catch(()=>{})}catch{}}setEnabled(t){var e;this.on=t,t?this.wake():(e=this.el)==null||e.pause()}suspend(){var t;this.hidden=!0,(t=this.el)==null||t.pause()}resume(){this.hidden=!1,this.el&&this.wake()}}class Rh{constructor(t){this.ctx=null,this.out=null,this.noise=null,this.last=new Map,this.enabled=t;const e=()=>this.wake();for(const n of["pointerdown","touchend","click","keydown"])document.addEventListener(n,e,{capture:!0,passive:!0})}wake(){if(this.enabled)try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.out=this.ctx.createGain(),this.out.gain.value=.55,this.out.connect(this.ctx.destination);const e=this.ctx.sampleRate*.5;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noise.getChannelData(0);let r=7;for(let s=0;s<e;s++)r=r*16807%2147483647,n[s]=r/2147483647*2-1}this.ctx.state!=="running"&&this.ctx.resume()}catch{}}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}get context(){return this.ctx}setEnabled(t){this.enabled=t,t?this.wake():this.suspend()}play(t,e=1){var c;if(!this.enabled||!this.ctx||!this.out||this.ctx.state!=="running")return;const n=this.ctx.currentTime,r=t==="coin"?.035:t==="sizzle"||t==="hiss"?.09:t==="splash"?.12:.05;if(n-((c=this.last.get(t))!=null?c:-1)<r)return;this.last.set(t,n);const s=this.ctx,a=(l,u,h,f,d,g=0)=>{const _=s.createOscillator(),m=s.createGain();_.type=l,_.frequency.setValueAtTime(u*e,n+g),_.frequency.exponentialRampToValueAtTime(Math.max(20,h*e),n+g+f),m.gain.setValueAtTime(1e-4,n+g),m.gain.exponentialRampToValueAtTime(d,n+g+.008),m.gain.exponentialRampToValueAtTime(1e-4,n+g+f),_.connect(m).connect(this.out),_.start(n+g),_.stop(n+g+f+.02)},o=(l,u,h,f,d=0)=>{if(!this.noise)return;const g=s.createBufferSource(),_=s.createBiquadFilter(),m=s.createGain();g.buffer=this.noise,_.type="bandpass",_.frequency.value=h*e,_.Q.value=f,m.gain.setValueAtTime(u,n+d),m.gain.exponentialRampToValueAtTime(1e-4,n+d+l),g.connect(_).connect(m).connect(this.out),g.start(n+d,Math.random()*.3),g.stop(n+d+l+.02)};switch(t){case"click":a("triangle",900,600,.06,.25);break;case"pop":a("sine",520,980,.08,.3);break;case"pull":o(.18,.35,2400,1.5),a("triangle",1400,2600,.12,.16);break;case"coin":a("square",1760,1760,.05,.07),a("sine",2637,2637,.12,.12,.03);break;case"sizzle":o(.35,.28,5200,.8);break;case"hiss":o(.5,.18,900,.6);break;case"splash":o(.28,.3,1300,.9);break;case"poof":o(.22,.3,700,1.2),a("sine",340,120,.2,.25);break;case"thud":a("sine",140,55,.22,.5),o(.08,.2,400,1);break;case"star":a("triangle",1320,1320,.16,.22),a("sine",1980,1980,.22,.14,.05);break;case"win":[523,659,784,1047].forEach((l,u)=>a("triangle",l,l,.22,.24,u*.09));break;case"lose":[392,330,262].forEach((l,u)=>a("sawtooth",l,l*.97,.22,.12,u*.13));break}}}class Ph{constructor(t,e,n){this.scale=1,this.offX=0,this.offY=0,this.dpr=1,this.view={x:0,y:0,w:0,h:0},this.top=64,this.bottom=12,this.W=e,this.H=n,this.canvas=document.createElement("canvas"),this.canvas.id="stage",t.prepend(this.canvas);const r=this.canvas.getContext("2d",{alpha:!1});if(!r)throw new Error("no 2D canvas");this.g=r,this.resize(),addEventListener("resize",()=>this.resize())}resize(){const t=innerWidth,e=innerHeight;this.dpr=Math.min(window.devicePixelRatio||1,2.5),this.canvas.width=Math.round(t*this.dpr),this.canvas.height=Math.round(e*this.dpr),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`;const n=Math.max(100,e-this.top-this.bottom);this.scale=Math.min(t/this.W,n/this.H),this.offX=(t-this.W*this.scale)/2,this.offY=this.top+(n-this.H*this.scale)/2,this.view={x:-this.offX/this.scale,y:-this.offY/this.scale,w:t/this.scale,h:e/this.scale}}begin(){const{g:t,dpr:e,scale:n}=this;return t.setTransform(e*n,0,0,e*n,e*this.offX,e*this.offY),t}toLogical(t,e){const n=this.canvas.getBoundingClientRect();return{x:(t-n.left-this.offX)/this.scale,y:(e-n.top-this.offY)/this.scale}}}function Lh(i){var _t;window.__booted=!0;const t=wh(i.id),e=()=>Ah(i.id,t),n=new Rh(t.sound),r=i.music?new Ch(n,i.music,t.sound):null,s=(_t=document.getElementById("app"))!=null?_t:document.body,a=new Ph(s,i.size.w,i.size.h),o=document.createElement("div");o.id="ui",s.append(o);const c=[];i.chapters.forEach((C,k)=>C.levels.forEach((Q,Z)=>c.push({id:`${k+1}-${Z+1}`,ch:k,idx:Z,level:Q,flat:c.length})));const l=C=>{var k;return(k=t.stars[C.id])!=null?k:0},u=C=>C.flat===0||l(c[C.flat-1])>0,h=()=>{var C;return(C=c.find(k=>l(k)===0))!=null?C:c[c.length-1]},f=()=>c.reduce((C,k)=>C+l(k),0);let d="title",g=null,_=null,m=0,p=0,M=[];const E=i.chrome==="overlay";E&&document.documentElement.classList.add("chrome-overlay"),i.bottomInset!==void 0&&(a.bottom=i.bottomInset);const v=()=>{var Q;const C=Th();document.documentElement.style.setProperty("--top",`max(env(safe-area-inset-top, 0px), ${C}px)`),getComputedStyle(document.documentElement).getPropertyValue("--top");const k=Math.max(C,P());a.top=E?k+((Q=i.overlayTop)!=null?Q:0):56+k,a.resize()},P=()=>{const C=document.createElement("div");C.style.cssText="position:fixed;top:0;height:env(safe-area-inset-top,0px);visibility:hidden",document.body.append(C);const k=C.getBoundingClientRect().height;return C.remove(),k};v();for(const C of[300,1e3,3e3])setTimeout(v,C);addEventListener("resize",v);const S=(C,k,Q,Z)=>{const Tt=document.createElement("button");return Tt.className=C,Tt.type="button",Tt.innerHTML=k,Z&&Tt.setAttribute("aria-label",Z),Tt.addEventListener("click",ct=>{ct.stopPropagation(),n.play("click"),Q()}),Tt},w=()=>{t.sound=!t.sound,e(),n.setEnabled(t.sound),r==null||r.setEnabled(t.sound),q()},R=()=>S("round sound b-sound",Qt(t.sound?"sound":"mute"),w,t.sound?"关闭声音":"打开声音"),y=(C={})=>({levelId:g==null?void 0:g.id,chapter:g==null?void 0:g.ch,run:_,home:()=>g?H(g.ch):L(),levels:()=>{var k;return H((k=g==null?void 0:g.ch)!=null?k:h().ch)},restart:()=>{g&&D(g)},next:()=>{if(!g)return D(h());g.flat<c.length-1?D(c[g.flat+1]):L()},hint:()=>{var k;(k=_==null?void 0:_.hint)==null||k.call(_)},sound:w,soundOn:()=>t.sound,...C}),x=(C,k)=>{var Q;C==="result"?o.dataset.result=k!=null&&k.won?"won":"lost":(o.dataset.screen=C,delete o.dataset.result),(Q=i.decorate)==null||Q.call(i,C,o,y(k))};function L(){d="title",_=null,o.innerHTML="";const C=document.createElement("div");C.className="title-screen",C.innerHTML=`<h1>${i.title}</h1><p class="tagline">${i.tagline}</p>`;const k=h(),Q=c.filter(ct=>l(ct)>0).length,Z=Q===0?"开始":Q>=c.length?"再玩":`第 ${k.id} 关`;C.append(S("big primary b-play",`${Qt("play")}<span>${Z}</span>`,()=>D(k)));const Tt=document.createElement("div");Tt.className="row",Tt.append(S("chip b-levels",`${Qt("grid")}<span>选关</span>`,()=>H(k.ch)),S("chip b-stars",`${Qt("star")}<span>${f()} / ${c.length*3}</span>`,()=>H(k.ch))),C.append(Tt),o.append(C,j(R())),x("title")}function H(C){d="levels",_=null,p=C,o.innerHTML="";const k=document.createElement("div");k.className="hud",k.append(S("round b-home",Qt("home"),L,"回到标题"));const Q=document.createElement("div");Q.className="hud-title",Q.innerHTML=`${Qt("star")}<span>${f()} / ${c.length*3}</span>`,k.append(Q,R());const Z=document.createElement("div");Z.className="tabs",i.chapters.forEach((ct,Bt)=>{const N=c.find(Gt=>Gt.ch===Bt),ce=u(N),Lt=S(`tab${Bt===C?" on":""}${ce?"":" locked"}`,`${ce?ct.icon:Qt("lock")}<span>${ct.name}</span>`,()=>ce&&H(Bt),ct.name);Z.append(Lt)});const Tt=document.createElement("div");Tt.className="level-grid";for(const ct of c.filter(Bt=>Bt.ch===C)){const Bt=u(ct),N=l(ct),ce=[0,1,2].map(Gt=>`<i class="${Gt<N?"got":""}">${Qt("star")}</i>`).join(""),Lt=S(`level${Bt?"":" locked"}${N?" done":""}`,Bt?`<b>${ct.idx+1}</b><span class="stars">${ce}</span>`:Qt("lock"),()=>Bt&&D(ct),`第 ${ct.id} 关`);Tt.append(Lt)}o.append(k,Z,Tt),x("levels",{chapter:C})}function D(C){var Tt;d="play",g=C,M=[],_=i.start(C.level,{sfx:n,buzz:Cs,levelId:C.id}),m=0,o.innerHTML="";const k=document.createElement("div");k.className="hud",k.append(S("round b-home",Qt("home"),()=>H(C.ch),"选关"));const Q=document.createElement("div");Q.className="hud-title",Q.innerHTML=`${i.chapters[C.ch].icon}<span>${C.id}</span>`,k.append(Q);const Z=document.createElement("div");Z.className="hud-right",_.hint&&Z.append(S("round b-hint",Qt("hint"),()=>{var ct;return(ct=_==null?void 0:_.hint)==null?void 0:ct.call(_)},"提示")),Z.append(S("round b-restart",Qt("restart"),()=>D(C),"重来")),k.append(Z),o.append(k),x("play"),(Tt=i.teach)!=null&&Tt.call(i,C.id)&&setTimeout(()=>{var ct;return(ct=_==null?void 0:_.hint)==null?void 0:ct.call(_)},400)}function V(C){var Z,Tt;if(!g||!_)return;const k=g,Q=document.createElement("div");if(Q.className=`result ${C?"won":"lost"}`,C){const ct=_.stars();ct>l(k)&&(t.stars[k.id]=ct,e());const Bt=k.flat===c.length-1;Q.innerHTML=`<div class="stars-big">${[0,1,2].map(Lt=>`<i class="${Lt<ct?"got":""}" style="animation-delay:${.15+Lt*.18}s">${Qt("star")}</i>`).join("")}</div>`,[0,1,2].slice(0,ct).forEach(Lt=>setTimeout(()=>n.play("star",1+Lt*.12),150+Lt*180));const N=document.createElement("div");N.className="acts",Bt?N.append(S("big primary b-next",`${Qt("home")}<span>全部通关</span>`,L)):N.append(S("big primary b-next",`${Qt("next")}<span>下一关</span>`,()=>D(c[k.flat+1])));const ce=document.createElement("div");ce.className="row",ce.append(S("chip b-replay",`${Qt("restart")}<span>重玩</span>`,()=>D(k)),S("chip b-levels",`${Qt("grid")}<span>选关</span>`,()=>H(k.ch))),N.append(ce),Q.append(N)}else{Q.innerHTML=`<div class="why">${Qt("skull")}<span>${(Tt=(Z=_.why)==null?void 0:Z.call(_))!=null?Tt:"失败了"}</span></div>`;const ct=document.createElement("div");if(ct.className="acts",ct.append(S("big primary b-retry",`${Qt("restart")}<span>再来</span>`,()=>D(k))),_.hint){const Bt=document.createElement("div");Bt.className="row",Bt.append(S("chip b-tip",`${Qt("hint")}<span>看提示</span>`,()=>{D(k),setTimeout(()=>{var N;return(N=_==null?void 0:_.hint)==null?void 0:N.call(_)},300)})),ct.append(Bt)}Q.append(ct)}o.append(Q),x("result",{won:C,stars:C?_.stars():0})}const j=C=>{const k=document.createElement("div");return k.className="corner",k.append(C),k};function q(){if(d==="title")L();else if(d==="levels")H(p);else{const C=o.querySelector(".sound");C&&(C.innerHTML=Qt(t.sound?"sound":"mute"))}}let F=null;a.canvas.addEventListener("pointerdown",C=>{if(d!=="play"||!_||_.state!=="play"||F)return;const k=a.toLogical(C.clientX,C.clientY);F={id:C.pointerId,run:_};try{a.canvas.setPointerCapture(C.pointerId)}catch{}_.press(k.x,k.y)}),a.canvas.addEventListener("pointermove",C=>{var Q,Z;if(!F||C.pointerId!==F.id||F.run!==_)return;const k=a.toLogical(C.clientX,C.clientY);(Z=(Q=F.run).drag)==null||Z.call(Q,k.x,k.y)});const U=C=>{var Z;if(!F||C.pointerId!==F.id)return;const k=F.run;if(F=null,k!==_)return;const Q=a.toLogical(C.clientX,C.clientY);(Z=k.release)==null||Z.call(k,Q.x,Q.y)};a.canvas.addEventListener("pointerup",U),a.canvas.addEventListener("pointercancel",U),addEventListener("pointerup",U,!0),addEventListener("pointercancel",U,!0),addEventListener("keydown",C=>{var k;d!=="play"||!g||(C.key==="r"||C.key==="R"?D(g):C.key==="h"||C.key==="H"?(k=_==null?void 0:_.hint)==null||k.call(_):C.key==="Escape"?H(g.ch):(C.key==="n"||C.key==="Enter")&&(_==null?void 0:_.state)==="won"&&g.flat<c.length-1&&D(c[g.flat+1]))});let $=performance.now(),nt=!0,ht=1;const wt=getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()||"#222",Wt=C=>{var Tt;const k=Math.min(.05,(C-$)/1e3);$=C;const Q=C/1e3,Z=a.g;Z.setTransform(1,0,0,1,0,0),Z.fillStyle=wt,Z.fillRect(0,0,a.canvas.width,a.canvas.height),a.begin(),d==="play"&&_?(_.step(k*ht),_.draw(Z,a.view,Q),_.state!=="play"&&(m?m>0&&C-m>(_.state==="won"?700:900)&&!o.querySelector(".result")&&V(_.state==="won"):(m=C,_.state==="won"?(n.play("win"),Cs("medium"),i.confetti!==!1&&J()):(n.play("lose"),Cs("heavy"))))):(Tt=i.backdrop)==null||Tt.call(i,Z,a.view,Q),rt(Z,k),nt&&requestAnimationFrame(Wt)};requestAnimationFrame(Wt),Eh(()=>{nt=!1,n.suspend(),r==null||r.suspend()},()=>{nt||(nt=!0,$=performance.now(),requestAnimationFrame(Wt)),n.wake(),r==null||r.resume()});function J(){const C=["#ff5c8a","#f2b632","#4f7cff","#5ec8b8","#ffffff"],k=a.view;for(let Q=0;Q<90;Q++){const Z=Q%2===0;M.push({x:Z?k.x+10:k.x+k.w-10,y:k.y+k.h*.55,vx:(Z?1:-1)*(120+Math.random()*260),vy:-(380+Math.random()*420),r:Math.random()*6,w:5+Math.random()*6,h:3+Math.random()*5,c:C[Q%C.length],spin:(Math.random()-.5)*14})}}function rt(C,k){if(!M.length)return;const Q=a.view.y+a.view.h+20;M=M.filter(Z=>Z.y<Q);for(const Z of M)Z.vy+=700*k,Z.vx*=1-.8*k,Z.x+=Z.vx*k,Z.y+=Z.vy*k,Z.r+=Z.spin*k,C.save(),C.translate(Z.x,Z.y),C.rotate(Z.r),C.fillStyle=Z.c,C.fillRect(-Z.w/2,-Z.h/2,Z.w,Z.h*Math.abs(Math.cos(Z.r*1.7))+1),C.restore()}L(),window.__game={id:i.id,entries:c.map(C=>C.id),progress:t,get run(){return _},play:C=>{const k=c.find(Q=>Q.id===C);return k&&D(k),!!k},screen:()=>d,setSpeed:C=>{ht=C>0?C:1},state:()=>{var C;return(C=_==null?void 0:_.state)!=null?C:null},busy:()=>{var C;return!!((C=_==null?void 0:_.busy)!=null&&C.call(_))},tapTarget:()=>{var k;const C=(k=_==null?void 0:_.hintTarget)==null?void 0:k.call(_);return C?{x:a.offX+C.x*a.scale,y:a.offY+C.y*a.scale}:null},tapPath:()=>{var k;const C=(k=_==null?void 0:_.hintPath)==null?void 0:k.call(_);return C&&C.length?C.map(Q=>({x:a.offX+Q.x*a.scale,y:a.offY+Q.y*a.scale})):null}}}const Ih=""+new URL("adventure2-DefhDMLU.mp3",import.meta.url).href,oi={on:!1},Ml='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5" width="3.8" height="14" rx="1.4" fill="currentColor"/><rect x="13.7" y="5" width="3.8" height="14" rx="1.4" fill="currentColor"/></svg>',Dh='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a8 8 0 0 0-8 8c0 2.6 1.3 4.6 3 5.8V20h10v-3.2c1.7-1.2 3-3.2 3-5.8a8 8 0 0 0-8-8z" fill="#efe9df" stroke="#2a2420" stroke-width="1.5" stroke-linejoin="round"/><circle cx="9" cy="11.5" r="2.1" fill="#2a2420"/><circle cx="15" cy="11.5" r="2.1" fill="#2a2420"/><path d="M10 17v2.6M12 17v2.6M14 17v2.6" stroke="#2a2420" stroke-width="1.3"/></svg>',an=(i,t="")=>{const e=document.createElement("div");return e.className=i,e.innerHTML=t,e};function rr(i,t,e){const n=document.createElement("button");return n.type="button",n.className=i,n.innerHTML=t,n.addEventListener("click",r=>{r.stopPropagation(),e()}),n}function Uh(i,t){var r,s;oi.on=!1;const e=i.querySelector(".hud-title");e&&(e.innerHTML=`<span>第 ${(r=t.levelId)!=null?r:""} 关</span>`);const n=i.querySelector(".b-home");if(n){const a=n.cloneNode(!1);a.classList.add("rc-pause"),a.innerHTML=Ml,a.setAttribute("aria-label","暂停"),a.addEventListener("click",o=>{o.stopPropagation(),Nh(i,t)}),n.remove(),i.append(a)}(s=i.querySelector(".hud-right"))==null||s.remove(),ke.reset()}function Nh(i,t){if(i.querySelector(".rc-shade"))return;oi.on=!0;const e=an("rc-shade"),n=()=>{e.remove(),oi.on=!1},r=an("rc-card",`<div class="rc-card-head">${Ml}<b>暂停</b></div>`),s=an("rc-row"),a=rr("rc-small",`${Qt(t.soundOn()?"sound":"mute")}<span>声音</span>`,()=>{t.sound(),a.innerHTML=`${Qt(t.soundOn()?"sound":"mute")}<span>声音</span>`});s.append(rr("rc-small",`${Qt("restart")}<span>重来</span>`,()=>{oi.on=!1,t.restart()}),rr("rc-small",`${Qt("hint")}<span>提示</span>`,()=>{n(),t.hint()}),rr("rc-small",`${Qt("grid")}<span>选关</span>`,()=>{oi.on=!1,t.levels()}),a),r.append(s,rr("big primary rc-go",`${Qt("play")}<span>继续</span>`,n)),e.append(r),e.addEventListener("click",o=>{o.target===e&&n()}),i.append(e)}function Fh(i,t,e){var o;const n=i.querySelector(".result");if(!n||(n.prepend(an("rc-ribbon",`<b>${t.won?"胜利":"失败"}</b>`)),!t.won))return;e.length&&((o=n.querySelector(".stars-big"))==null||o.after(an("rc-stats",e.map(c=>`<div class="rc-slot">${c.icon}<b>${c.value}</b><span>${c.label}</span></div>`).join(""))));const r=n.querySelector(".acts"),s=n.querySelector(".b-next"),a=n.querySelector(".b-levels");if(r&&s&&a){a.className="big rc-back b-levels",a.innerHTML=`${Qt("back")}<span>返回</span>`;const c=an("rc-acts");c.append(a,s),r.prepend(c)}}const ke={last:new Map,reset(){this.last.clear()},set(i,t,e){const n=`${i}.${t}`;if(this.last.get(n)===e)return;const r=document.getElementById(i);r&&(this.last.set(n,e),t==="text"?r.textContent=e:t==="width"?r.style.width=e:t==="show"?r.classList.toggle("on",e==="1"):(r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop")))}};function Oh(i,t){const e=an("rc-prog",`<div class="rc-track"><i id="rc-prog"></i></div><span class="rc-goal">${t}</span>`);e.id="rc-progbox";const n=an("rc-bossbar",`<span class="rc-goal">${t}</span><div class="rc-track"><i id="rc-bosshp"></i><b id="rc-bossnum"></b></div>`);n.id="rc-bossbar",i.append(e,n)}function zh(i,t){ke.set("rc-progbox","show",t?"0":"1"),ke.set("rc-prog","width",`${Math.round(Math.max(0,Math.min(1,i))*200)/2}%`),ke.set("rc-bossbar","show",t?"1":"0"),t&&(ke.set("rc-bosshp","width",`${Math.max(3,Math.round(t[1]*200)/2)}%`),ke.set("rc-bossnum","text",t[0]))}const ue=4;function fs(i){const t=2*ue/i;return Array.from({length:i},(e,n)=>[-ue+n*t,-ue+(n+1)*t])}function un(i,t){const e=Math.floor((i+ue)/(2*ue)*t);return e<0?0:e>=t?t-1:e}const Ge=(i,t)=>-ue+(t+.5)*2*ue/i;function Sl(i,t=20,e=22){let n=e-t;return i.map((r,s)=>{var c;const a=r.trim().split(/\s+/);let o=0;for(;a.length&&/^>-?\d+(\.\d+)?$/.test(a[0]);)o+=Number(a.shift().slice(1));return n+=t+o,{z:n,kind:(c=a[0])!=null?c:"",args:a.slice(1),i:s}})}function $o(i,t,e){return t>i?Math.min(t,i+e):Math.max(t,i-e)}const Gn=(i,t=.6)=>Math.max(-ue+t,Math.min(ue-t,i));function mr(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Bh(i,t,e=4096){const n=i.reduce((u,h)=>u*Math.max(1,h),1),r=Math.min(n,e);let s=i.map(()=>0),a=null,o=0,c=null;const l=i.map(()=>0);for(let u=0;u<r;u++){let h=u;for(let d=i.length-1;d>=0;d--){const g=Math.max(1,i[d]);l[d]=h%g,h=Math.floor(h/g)}const f=t(l);f.won&&(o++,c=c===null?f.score:Math.min(c,f.score)),(!a||Hh(f,a))&&(a=f,s=l.slice())}return{best:s,bestOutcome:a!=null?a:{won:!1,score:0,time:0},routes:r,winShare:r?o/r:0,worstWin:o>1?c:null,capped:n>e}}function kh(i,t,e,n=1/0,r=[],s=4096){let a=0;const o=i.map((h,f)=>{var d;return t[f]>=0?t[f]:a++<n?-1:Math.max(0,Math.min(h-1,(d=r[f])!=null?d:0))}),c=i.map((h,f)=>o[f]>=0?1:h),l=h=>h.map((f,d)=>o[d]>=0?o[d]:f),u=Bh(c,h=>e(l(h)),s);return{...u,best:l(u.best)}}const Hh=(i,t)=>i.won!==t.won?i.won:i.score!==t.score?i.score>t.score:i.time<t.time,ga=1/60,Gh=7,Vh=10,Rs=28,Wh=30,Xh=1.6,qh=3.5,Yo=16,$h=1.6,co=3,pi=["木弓","铁弓","金弓","火焰弓","雷霆弓"],Yh=1.6,lo=1,yl=i=>Yh**i,di=i=>i.a*i.r*i.d*yl(i.tier),Jh=(i,t)=>Math.min(1.9,.6+.32*Math.log2(1+i/Math.max(1,t))),Kh=2.1,Zh=.6,jh=/^([ardeARDE])([+\-x×/÷])?(\d+(?:\.\d+)?)?$/;function bl(i,t,e){var l,u;if(i===".")return null;const n=jh.exec(i);if(!n)throw new Error(`bad gate "${i}"`);const r=n[1].toLowerCase();if(r==="e")return{row:t,slot:e,op:{s:r,k:"+",v:1},good:!0};const s=(l=n[2])!=null?l:"+",a=s==="+"?"+":s==="-"?"-":s==="/"||s==="÷"?"/":"x",o=Number((u=n[3])!=null?u:1),c=a==="+"||a==="x"&&o>=1||a==="/"&&o<=1;return{row:t,slot:e,op:{s:r,k:a,v:o},good:c}}function El(i,t){const e={...i};return t.s==="e"?(e.tier=Math.min(pi.length-1,e.tier+1),e):(t.s==="a"?e.a=Math.max(1,Math.round(t.k==="+"?e.a+t.v:t.k==="-"?e.a-t.v:t.k==="x"?e.a*t.v:e.a/t.v)):t.s==="r"?e.r=Math.max(.4,t.k==="+"?e.r*(1+t.v/100):t.k==="-"?e.r*(1-t.v/100):t.k==="x"?e.r*t.v:e.r/t.v):e.d=Math.max(1,t.k==="+"?e.d+t.v:t.k==="-"?e.d-t.v:t.k==="x"?e.d*t.v:e.d/t.v),e)}function Qh(i){if(i<20)return Math.max(1,Math.round(i));const t=10**(Math.floor(Math.log10(i))-1);return Math.round(i/t)*t}const Tl=/^(\d+(\.\d+)?|\.\d+)n$/,wl=i=>{var t,e,n,r,s,a,o,c;return{a:(e=(t=i.start)==null?void 0:t.a)!=null?e:1,r:(r=(n=i.start)==null?void 0:n.r)!=null?r:1,d:(a=(s=i.start)==null?void 0:s.d)!=null?a:10,tier:(c=(o=i.start)==null?void 0:o.tier)!=null?c:0,parts:0}};function Jo(i,t=[]){let e=wl(i);const n=[];return{rows:i.rows.map((s,a)=>{var d;const o=s.trim().split(/\s+/),c=o.filter(g=>g.startsWith(">")),l=o.filter(g=>!g.startsWith(">")),u=l[0];if(u==="g"){let g=-1,_=e,m=0;return l.slice(1).forEach((p,M)=>{const E=bl(p,0,M);if(!E)return;const v=El(e,E.op);di(v)>g&&(g=di(v),_=v,m=M)}),e=_,n.push(m),s}if(u==="p"){const g=[...l[1]].findIndex(_=>_==="1");return n.push(Math.max(0,g)),g>=0&&(e={...e,parts:e.parts+1},e.parts>=3&&(e={...e,parts:0,tier:Math.min(pi.length-1,e.tier+1)})),s}const h=(d=t[a])!=null?d:di(e),f=g=>Tl.test(g)?String(Qh(Number(g.slice(0,-1))*h)):g;return u==="z"?[...c,"z",...l.slice(1).map(f)].join(" "):u==="b"?[...c,"b",...l.slice(1).map(f)].join(" "):u==="B"?[...c,"B",f(l[1]),...l.slice(2)].join(" "):s}),route:n}}function tu(i){let t=Jo(i);if(i.rows.some(e=>e.split(/\s+/).some(n=>Tl.test(n))))for(let e=0;e<2;e++)t=Jo(i,eu(i,t.rows,t.route));return Al(i,t.rows)}function eu(i,t,e){var o;const n=Al(i,t);n.quiet=!0;const r=Sl(t,(o=i.gap)!=null?o:20,24),s=t.map(()=>{}),a=r.map(c=>c.kind==="z"?c.z-18:c.kind==="b"?c.z-22:c.kind==="B"?1/0:NaN);for(;n.phase!=="won"&&n.phase!=="lost"&&n.t<240;)n.tx=ps(n,e),ho(n),a.forEach((c,l)=>{s[l]!==void 0||Number.isNaN(c)||(n.z>=c||c===1/0&&n.phase==="boss")&&(s[l]=di(n.st))});return s}function Al(i,t){var c,l,u;const e=Sl(t,(c=i.gap)!=null?c:20,24),n=wl(i),r={t:0,z:0,x:0,tx:0,hearts:co,st:n,phase:"run",speed:(l=i.speed)!=null?l:Gh,rows:[],parts:[],mobs:[],blocks:[],boss:null,rocks:[],end:0,fireT:.3,why:"",ev:[],quiet:!1},s=di(n);let a=0;for(const h of e)if(h.kind==="g"){const f=h.args.length;if(f<2||f>3)throw new Error(`row ${h.i}: a gate row has 2 or 3 gates`);r.rows.push({i:r.rows.length,z:h.z,k:f,gates:h.args.map((d,g)=>bl(d,r.rows.length,g)),passed:!1,choice:-1})}else if(h.kind==="z"){const f=h.args.map(Number);if(!f.length||f.some(d=>!(d>0)))throw new Error(`row ${h.i}: bad monster health "${h.args.join(" ")}"`);f.forEach((d,g)=>{const _=Math.floor(g/4),m=Math.min(4,f.length-_*4),p=((h.i*7+g*13)%5-2)*.6;r.mobs.push({id:a++,z:h.z+_*3+p,x:Ge(m,g%4)*.85,hp:d,hp0:d,r:.8,dead:!1,gone:!1,awake:!1,hitT:-9})})}else if(h.kind==="b"){const f=h.args.length;h.args.forEach((d,g)=>{if(d===".")return;const _=Number(d);if(!(_>0))throw new Error(`row ${h.i}: bad block health "${d}"`);r.blocks.push({id:r.blocks.length,row:h.i,z:h.z,slot:g,k:f,hp:_,hp0:_,dead:!1,hitT:-9,bumped:!1})})}else if(h.kind==="p"){const f=h.args[0];r.parts.push({i:r.parts.length,z:h.z,k:f.length,slots:[...f].map(d=>d==="1"),passed:!1,choice:-1,got:!1})}else if(h.kind==="B"){const f=Number(h.args[0]);if(!(f>0))throw new Error(`row ${h.i}: bad boss health "${h.args[0]}"`);const d=Number((u=h.args[1])!=null?u:0);r.boss={z:h.z+6,x:0,hp:f,hp0:f,r:Kh,every:d,timer:d,dead:!1,awake:!1,hitT:-9},r.end=r.boss.z}else throw new Error(`row ${h.i}: unknown kind "${h.kind}"`);if(!r.boss)throw new Error("a level needs a boss row (B)");const o=Math.max(s,...r.mobs.map(h=>h.hp))/8;for(const h of r.mobs)h.r=Jh(h.hp,Math.max(s*.5,o*.25));return r}const He=(i,t)=>{i.quiet||i.ev.push(t)},Ps=i=>i.phase==="lost";function Ls(i,t,e,n){i.hearts=Math.max(0,i.hearts-1),He(i,{e:"hurt",why:t,ref:e,hearts:i.hearts}),i.hearts<=0&&Cl(i,n)}function Cl(i,t){i.phase==="won"||i.phase==="lost"||(i.phase="lost",i.why=t,He(i,{e:"end",won:!1}))}function Ko(i){i.st.tier>=pi.length-1||(i.st={...i.st,tier:i.st.tier+1},He(i,{e:"evolve",tier:i.st.tier}))}function ho(i){if(i.phase==="won"||i.phase==="lost")return;const t=ga;i.t+=t;const e=i.z,n=i.boss;i.phase==="run"&&(i.z+=i.speed*t,i.z>=n.z-Yo&&(i.z=n.z-Yo,i.phase="boss",n.awake=!0,He(i,{e:"arena"}))),i.x=Gn($o(i.x,Gn(i.tx),Vh*t));const r=s=>s<=i.z&&s>e-1e-9;for(const s of i.rows){if(s.passed||!r(s.z))continue;s.passed=!0;const a=un(i.x,s.k);s.choice=a;const o=s.gates[a];o&&(o.op.s==="e"?Ko(i):i.st=El(i.st,o.op),He(i,{e:"gate",row:s.i,slot:a,op:o.op,good:o.good}))}for(const s of i.parts){if(s.passed||!r(s.z))continue;s.passed=!0;const a=un(i.x,s.k);s.choice=a,s.slots[a]&&(s.got=!0,i.st={...i.st,parts:i.st.parts+1},He(i,{e:"part",row:s.i,parts:i.st.parts}),i.st.parts>=3&&(i.st={...i.st,parts:0},Ko(i)))}for(const s of i.blocks)if(!(s.dead||!r(s.z))&&un(i.x,s.k)===s.slot&&(s.dead=!0,s.bumped=!0,Ls(i,"block",s.id,`撞上了 ${Math.ceil(s.hp)} 血的石块`),Ps(i)))return;for(const s of i.mobs)s.dead||s.gone||(!s.awake&&s.z-i.z<Wh&&(s.awake=!0),s.awake&&(s.z-=Xh*t,s.x=$o(s.x,i.x,qh*t)));for(let s=0;s<i.mobs.length;s++){const a=i.mobs[s];if(!(!a.awake||a.dead||a.gone))for(let o=s+1;o<i.mobs.length;o++){const c=i.mobs[o];if(!c.awake||c.dead||c.gone)continue;const l=(a.r+c.r)*.9;if(Math.abs(a.z-c.z)>=l)continue;const u=c.x-a.x,h=l-Math.abs(u);if(h<=0)continue;const f=u>0||u===0&&a.id<c.id?1:-1;a.x=Gn(a.x-f*h/2,.3),c.x=Gn(c.x+f*h/2,.3)}}for(const s of i.mobs)if(!(s.dead||s.gone||!s.awake))if(s.z-i.z<=.6+s.r*.5&&Math.abs(s.x-i.x)<=Zh+s.r+.4){if(s.dead=!0,Ls(i,"mob",s.id,`${Math.ceil(s.hp)} 血的怪冲到了跟前`),Ps(i))return}else s.z<i.z-2&&(s.gone=!0);if(i.phase==="boss"&&!n.dead){if(n.z-=$h*t,n.every>0&&(n.timer-=t,n.timer<=0)){n.timer+=n.every;const s=un(i.x,3);i.rocks.push({slot:s,t:i.t+lo,landed:!1,hit:!1}),He(i,{e:"throw",slot:s})}if(n.z-i.z<=n.r*.8+.6)return i.hearts=0,Cl(i,`大怪走到跟前，还剩 ${Math.ceil(n.hp)} 血`)}for(const s of i.rocks)if(!(s.landed||i.t<s.t)&&(s.landed=!0,s.hit=un(i.x,3)===s.slot,He(i,{e:"land",slot:s.slot,hit:s.hit}),s.hit&&(Ls(i,"rock",s.slot,"被大怪扔的石头砸中了"),Ps(i))))return;for(i.fireT-=t;i.fireT<=0;)if(i.fireT+=1/i.st.r,nu(i),n.dead){i.phase="won",He(i,{e:"bossDown"}),He(i,{e:"end",won:!0});return}}function nu(i){let t=i.st.a*i.st.d*yl(i.st.tier);const e=[];for(const s of i.mobs){if(s.dead||s.gone)continue;const a=s.z-i.z;a>=-1&&a<=Rs&&e.push({z:s.z,kind:"mob",mob:s})}for(const s of i.blocks){if(s.dead)continue;const a=s.z-i.z;a>=0&&a<=Rs&&un(i.x,s.k)===s.slot&&e.push({z:s.z,kind:"block",block:s})}const n=i.boss;!n.dead&&n.z-i.z<=Rs&&e.push({z:n.z,kind:"boss"}),e.sort((s,a)=>s.z-a.z);const r=[];for(const s of e){if(t<=1e-9)break;if(s.kind==="mob"){const a=s.mob,o=Math.min(t,a.hp);a.hp-=o,t-=o,a.hitT=i.t,r.push({kind:"mob",ref:a.id}),a.hp<=1e-6&&(a.hp=0,a.dead=!0,He(i,{e:"kill",mob:a.id}))}else if(s.kind==="block"){const a=s.block,o=Math.min(t,a.hp);a.hp-=o,t-=o,a.hitT=i.t,r.push({kind:"block",ref:a.id}),a.hp<=1e-6&&(a.hp=0,a.dead=!0,He(i,{e:"break",block:a.id}))}else{const a=Math.min(t,n.hp);n.hp-=a,t-=a,n.hitT=i.t,r.push({kind:"boss",ref:0}),n.hp<=1e-6&&(n.hp=0,n.dead=!0)}}He(i,{e:"volley",arrows:i.st.a,targets:r})}function ds(i){return[...i.rows.map(t=>({kind:"g",i:t.i,z:t.z,k:t.k})),...i.parts.map(t=>({kind:"p",i:t.i,z:t.z,k:t.k}))].sort((t,e)=>t.z-e.z)}function ps(i,t){var s;const e=ds(i);let n=i.x;for(let a=0;a<e.length;a++){const o=e[a];if(!(o.kind==="g"?i.rows[o.i].passed:i.parts[o.i].passed)){n=Ge(o.k,(s=t[a])!=null?s:0);break}}const r=i.blocks.filter(a=>!a.dead&&a.z-i.z>0&&a.z-i.z<15);if(r.length){const a=Math.min(...r.map(g=>g.z)),o=r.filter(g=>Math.abs(g.z-a)<.01),c=o[0].k,l=(a-i.z)/Math.max(.1,i.speed),u=di(i.st)*l*.8,h=g=>{const _=o.find(m=>m.slot===g);return _?_.hp<=u?.5:10:0};let f=un(n,c),d=1/0;for(let g=0;g<c;g++){const _=h(g)+Math.abs(Ge(c,g)-n)*.1;_<d&&(d=_,f=g)}un(n,c)!==f&&(n=Ge(c,f))}for(const a of i.rocks)if(!(a.landed||a.t-i.t>lo)&&un(n,3)===a.slot){const o=[0,1,2].filter(u=>u!==a.slot&&!i.rocks.some(h=>!h.landed&&h.slot===u)),c=un(i.x,3),l=o.sort((u,h)=>Math.abs(u-c)-Math.abs(h-c))[0];l!==void 0&&(n=Ge(3,l))}return Gn(n)}function _a(i){return{...i,st:{...i.st},rows:i.rows.map(t=>({...t,gates:t.gates.slice()})),parts:i.parts.map(t=>({...t})),mobs:i.mobs.map(t=>({...t})),blocks:i.blocks.map(t=>({...t})),boss:{...i.boss},rocks:i.rocks.map(t=>({...t})),ev:[]}}function iu(i,t,e=240){const n=_a(i);for(n.quiet=!0;n.phase!=="won"&&n.phase!=="lost"&&n.t<e;)n.tx=ps(n,t),ho(n);return{won:n.phase==="won",score:n.phase==="won"?n.hearts*1e3+Math.round(n.boss.z-n.z):0,time:n.t,s:n}}function Zo(i,t=1/0,e=[]){const n=ds(i),r=n.map(s=>s.kind==="g"?i.rows[s.i].passed?i.rows[s.i].choice:-1:i.parts[s.i].passed?i.parts[s.i].choice:-1);return kh(n.map(s=>s.k),r,s=>iu(i,s),t,e)}const ru=i=>Math.max(1,Math.min(3,i)),cn=i=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${i}</svg>`,Me='fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"',qe={arrows:cn(`<path d="M4 20L12 4M12 20V4M20 20L12 4" ${Me}/><path d="M9.5 6.5L12 3.5l2.5 3" ${Me}/>`),bow:cn(`<path d="M6 3c7 2.5 9.5 8.5 9 18" ${Me}/><path d="M6 3v18" ${Me}/><path d="M3 12h15M15.5 9.5L18.5 12l-3 2.5" ${Me}/>`),block:cn(`<path d="M4 8l8-4 8 4v8l-8 4-8-4z" ${Me}/><path d="M4 8l8 4 8-4M12 12v8" ${Me}/>`),bad:cn(`<path d="M4 21V5.5a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 20 5.5V21" ${Me}/><path d="M8.5 12.5h7" ${Me}/>`),rock:cn(`<path d="M8 13l3-4 5 1 2 5-4 4-5-1z" ${Me}/><path d="M9 3v4M14 2v4M5 6l2 2" ${Me}/>`),boss:cn(`<path d="M5 4l2.5 5M19 4l-2.5 5" ${Me}/><path d="M12 8c4.4 0 7 2.8 7 6.5S16.4 21 12 21s-7-2.8-7-6.5S7.6 8 12 8z" ${Me}/><path d="M9.5 15.5h.01M14.5 15.5h.01" ${Me}/>`),bolt:cn(`<path d="M13 2L5 13h6l-1 9 8-11h-6z" ${Me}/>`),drag:cn(`<path d="M5 9l-3 3 3 3M19 9l3 3-3 3M2.5 12h19" ${Me}/>`),heart:cn('<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10C19.5 15.4 12 20 12 20z" fill="currentColor" stroke="#221f2e" stroke-width="2" stroke-linejoin="round"/>'),sword:cn(`<path d="M14.5 3.5H20.5V9.5L10 20l-6-6z" ${Me}/><path d="M7 13l4 4M5 19l-1.5 1.5" ${Me}/>`)};const uo="170",su=0,jo=1,au=2,Rl=1,ou=2,En=3,Xn=0,Re=1,en=2,Vn=0,ki=1,Qo=2,tc=3,ec=4,cu=5,si=100,lu=101,hu=102,uu=103,fu=104,du=200,pu=201,mu=202,gu=203,va=204,xa=205,_u=206,vu=207,xu=208,Mu=209,Su=210,yu=211,bu=212,Eu=213,Tu=214,Ma=0,Sa=1,ya=2,Xi=3,ba=4,Ea=5,Ta=6,wa=7,fo=0,wu=1,Au=2,Wn=0,Cu=1,Ru=2,Pu=3,Lu=4,Iu=5,Du=6,Uu=7,Pl=300,qi=301,$i=302,Aa=303,Ca=304,Ms=306,Sr=1e3,wn=1001,Ra=1002,Pe=1003,Nu=1004,Dr=1005,dn=1006,Is=1007,ci=1008,Rn=1009,Ll=1010,Il=1011,yr=1012,po=1013,mi=1014,rn=1015,Er=1016,mo=1017,go=1018,Yi=1020,Dl=35902,Ul=1021,Nl=1022,Je=1023,Fl=1024,Ol=1025,Hi=1026,Ji=1027,Ss=1028,_o=1029,zl=1030,vo=1031,xo=1033,as=33776,os=33777,cs=33778,ls=33779,Pa=35840,La=35841,Ia=35842,Da=35843,Ua=36196,Na=37492,Fa=37496,Oa=37808,za=37809,Ba=37810,ka=37811,Ha=37812,Ga=37813,Va=37814,Wa=37815,Xa=37816,qa=37817,$a=37818,Ya=37819,Ja=37820,Ka=37821,hs=36492,Za=36494,ja=36495,Bl=36283,Qa=36284,to=36285,eo=36286,Fu=3200,Ou=3201,Mo=0,zu=1,Hn="",me="srgb",ji="srgb-linear",ys="linear",te="srgb",Mi=7680,nc=519,Bu=512,ku=513,Hu=514,kl=515,Gu=516,Vu=517,Wu=518,Xu=519,ic=35044,bs=35048,rc="300 es",An=2e3,ms=2001;class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,no=180/Math.PI;function Tr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function qu(i,t){return(i%t+t)%t}function Us(i,t,e){return(1-e)*i+e*t}function sr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,r,s,a,o,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],M=r[1],E=r[4],v=r[7],P=r[2],S=r[5],w=r[8];return s[0]=a*_+o*M+c*P,s[3]=a*m+o*E+c*S,s[6]=a*p+o*v+c*w,s[1]=l*_+u*M+h*P,s[4]=l*m+u*E+h*S,s[7]=l*p+u*v+h*w,s[2]=f*_+d*M+g*P,s[5]=f*m+d*E+g*S,s[8]=f*p+d*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*s,d=l*s-a*c,g=e*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*l-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=f*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Ft;function Hl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $u(){const i=br("canvas");return i.style.display="block",i}const sc={};function gr(i){i in sc||(sc[i]=!0,console.warn(i))}function Yu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ju(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ku(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?ys:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ac=[.64,.33,.3,.6,.15,.06],oc=[.2126,.7152,.0722],cc=[.3127,.329],lc=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[ji]:{primaries:ac,whitePoint:cc,transfer:ys,toXYZ:lc,fromXYZ:hc,luminanceCoefficients:oc,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:ac,whitePoint:cc,transfer:te,toXYZ:lc,fromXYZ:hc,luminanceCoefficients:oc,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});let Si;class Zu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=br("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ju=0;class Gl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Tr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fs(r[a].image)):s.push(Fs(r[a]))}else s=Fs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qu=0;class be extends Qi{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=wn,r=wn,s=dn,a=ci,o=Je,c=Rn,l=be.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Tr(),this.name="",this.source=new Gl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sr:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sr:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Pl;be.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(d+1)/2,P=(p+1)/2,S=(u+f)/4,w=(h+_)/4,R=(g+m)/4;return E>v&&E>P?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=S/n,s=w/n):v>P?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=S/r,s=R/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=w/s,r=R/s),this.set(n,r,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tf extends Qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new be(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends tf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vl extends be{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends be{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*_,M=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const P=Math.sqrt(E),S=Math.atan2(P,p*M);m=Math.sin(m*S)/P,o=Math.sin(o*S)/P}const v=o*M;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-o*d,t[e+2]=l*g+u*d+o*f-c*h,t[e+3]=u*g-o*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new I,uc=new sn;class vi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(s,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Nr.subVectors(this.max,ar),yi.subVectors(t.a,ar),bi.subVectors(t.b,ar),Ei.subVectors(t.c,ar),Un.subVectors(bi,yi),Nn.subVectors(Ei,bi),Kn.subVectors(yi,Ei);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Kn.z,Kn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Kn.z,0,-Kn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Kn.y,Kn.x,0];return!zs(e,yi,bi,Ei,Nr)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,yi,bi,Ei,Nr))?!1:(Fr.crossVectors(Un,Nn),e=[Fr.x,Fr.y,Fr.z],zs(e,yi,bi,Ei,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new I,new I,new I,new I,new I,new I,new I,new I],je=new I,Ur=new vi,yi=new I,bi=new I,Ei=new I,Un=new I,Nn=new I,Kn=new I,ar=new I,Nr=new I,Fr=new I,Zn=new I;function zs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zn.fromArray(i,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),c=t.dot(Zn),l=e.dot(Zn),u=n.dot(Zn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const nf=new vi,or=new I,Bs=new I;class wr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(or,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(Bs)),this.expandByPoint(or.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new I,ks=new I,Or=new I,Fn=new I,Hs=new I,zr=new I,Gs=new I;class rf{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ks.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(ks);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Or),o=Fn.dot(this.direction),c=-Fn.dot(Or),l=Fn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ks).addScaledVector(Or,f),d}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),r=xn.dot(xn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,r,s){Hs.subVectors(e,t),zr.subVectors(n,t),Gs.crossVectors(Hs,zr);let a=this.direction.dot(Gs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,t);const c=o*this.direction.dot(zr.crossVectors(Fn,zr));if(c<0)return null;const l=o*this.direction.dot(Hs.cross(Fn));if(l<0||c+l>a)return null;const u=-o*Fn.dot(Gs);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,r,s,a,o,c,l,u,h,f,d,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,h,f,d,g,_,m)}set(t,e,n,r,s,a,o,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ti.setFromMatrixColumn(t,0).length(),s=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sf,t,af)}lookAt(t,e,n){const r=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),On.crossVectors(n,Fe),On.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),On.crossVectors(n,Fe)),On.normalize(),Br.crossVectors(Fe,On),r[0]=On.x,r[4]=Br.x,r[8]=Fe.x,r[1]=On.y,r[5]=Br.y,r[9]=Fe.y,r[2]=On.z,r[6]=Br.z,r[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],E=n[7],v=n[11],P=n[15],S=r[0],w=r[4],R=r[8],y=r[12],x=r[1],L=r[5],H=r[9],D=r[13],V=r[2],j=r[6],q=r[10],F=r[14],U=r[3],$=r[7],nt=r[11],ht=r[15];return s[0]=a*S+o*x+c*V+l*U,s[4]=a*w+o*L+c*j+l*$,s[8]=a*R+o*H+c*q+l*nt,s[12]=a*y+o*D+c*F+l*ht,s[1]=u*S+h*x+f*V+d*U,s[5]=u*w+h*L+f*j+d*$,s[9]=u*R+h*H+f*q+d*nt,s[13]=u*y+h*D+f*F+d*ht,s[2]=g*S+_*x+m*V+p*U,s[6]=g*w+_*L+m*j+p*$,s[10]=g*R+_*H+m*q+p*nt,s[14]=g*y+_*D+m*F+p*ht,s[3]=M*S+E*x+v*V+P*U,s[7]=M*w+E*L+v*j+P*$,s[11]=M*R+E*H+v*q+P*nt,s[15]=M*y+E*D+v*F+P*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*d-n*c*d)+_*(+e*c*d-e*l*f+s*a*f-r*a*d+r*l*u-s*c*u)+m*(+e*l*h-e*o*d-s*a*h+n*a*d+s*o*u-n*l*u)+p*(-r*o*u-e*c*h+e*o*f+r*a*h-n*a*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=h*m*l-_*f*l+_*c*d-o*m*d-h*c*p+o*f*p,E=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,v=u*_*l-g*h*l+g*o*d-a*_*d-u*o*p+a*h*p,P=g*h*c-u*_*c-g*o*f+a*_*f+u*o*m-a*h*m,S=e*M+n*E+r*v+s*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return t[0]=M*w,t[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*p-n*f*p)*w,t[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*p+n*c*p)*w,t[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*d-n*c*d)*w,t[4]=E*w,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*w,t[6]=(g*c*s-a*m*s-g*r*l+e*m*l+a*r*p-e*c*p)*w,t[7]=(a*f*s-u*c*s+u*r*l-e*f*l-a*r*d+e*c*d)*w,t[8]=v*w,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*p-e*h*p)*w,t[10]=(a*_*s-g*o*s+g*n*l-e*_*l-a*n*p+e*o*p)*w,t[11]=(u*o*s-a*h*s-u*n*l+e*h*l+a*n*d-e*o*d)*w,t[12]=P*w,t[13]=(u*_*r-g*h*r+g*n*f-e*_*f-u*n*m+e*h*m)*w,t[14]=(g*o*r-a*_*r-g*n*c+e*_*c+a*n*m-e*o*m)*w,t[15]=(a*h*r-u*o*r+u*n*c-e*h*c-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,h=o+o,f=s*l,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,M=c*l,E=c*u,v=c*h,P=n.x,S=n.y,w=n.z;return r[0]=(1-(_+p))*P,r[1]=(d+v)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(d-v)*S,r[5]=(1-(f+p))*S,r[6]=(m+M)*S,r[7]=0,r[8]=(g+E)*w,r[9]=(m-M)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const a=Ti.set(r[4],r[5],r[6]).length(),o=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Qe.copy(this);const l=1/s,u=1/a,h=1/o;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=u,Qe.elements[5]*=u,Qe.elements[6]*=u,Qe.elements[8]*=h,Qe.elements[9]*=h,Qe.elements[10]*=h,e.setFromRotationMatrix(Qe),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=An){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let d,g;if(o===An)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ms)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=An){const c=this.elements,l=1/(e-t),u=1/(n-r),h=1/(a-s),f=(e+t)*l,d=(n+r)*u;let g,_;if(o===An)g=(a+s)*h,_=-2*h;else if(o===ms)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new I,Qe=new $t,sf=new I(0,0,0),af=new I(1,1,1),On=new I,Br=new I,Fe=new I,fc=new $t,dc=new sn;class Ce{constructor(t=0,e=0,n=0,r=Ce.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dc.setFromEuler(this),this.setFromQuaternion(dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ce.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let of=0;const pc=new I,wi=new sn,Mn=new $t,kr=new I,cr=new I,cf=new I,lf=new sn,mc=new I(1,0,0),gc=new I(0,1,0),_c=new I(0,0,1),vc={type:"added"},hf={type:"removed"},Ai={type:"childadded",child:null},Vs={type:"childremoved",child:null};class Ee extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new I,e=new Ce,n=new sn,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ft}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(mc,t)}rotateY(t){return this.rotateOnAxis(gc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return pc.copy(t).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mc,t)}translateY(t){return this.translateOnAxis(gc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(cr,kr,this.up):Mn.lookAt(kr,cr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Mn),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new I(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new I,Sn=new I,Ws=new I,yn=new I,Ci=new I,Ri=new I,xc=new I,Xs=new I,qs=new I,$s=new I,Ys=new he,Js=new he,Ks=new he;class nn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),tn.subVectors(t,e),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){tn.subVectors(r,e),Sn.subVectors(n,e),Ws.subVectors(t,e);const a=tn.dot(tn),o=tn.dot(Sn),c=tn.dot(Ws),l=Sn.dot(Sn),u=Sn.dot(Ws),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ys.setScalar(0),Js.setScalar(0),Ks.setScalar(0),Ys.fromBufferAttribute(t,e),Js.fromBufferAttribute(t,n),Ks.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ys,s.x),a.addScaledVector(Js,s.y),a.addScaledVector(Ks,s.z),a}static isFrontFacing(t,e,n,r){return tn.subVectors(n,e),Sn.subVectors(t,e),tn.cross(Sn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),tn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ci.subVectors(r,n),Ri.subVectors(s,n),Xs.subVectors(t,n);const c=Ci.dot(Xs),l=Ri.dot(Xs);if(c<=0&&l<=0)return e.copy(n);qs.subVectors(t,r);const u=Ci.dot(qs),h=Ri.dot(qs);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ci,a);$s.subVectors(t,s);const d=Ci.dot($s),g=Ri.dot($s);if(g>=0&&d<=g)return e.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ri,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return xc.subVectors(s,r),o=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(xc,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(Ci,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function Zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=qt.workingColorSpace){if(t=qu(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Zs(a,s,t+1/3),this.g=Zs(a,s,t),this.b=Zs(a,s,t-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(t,e=me){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const n=Xl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(ye(Ae.r*255,0,255))*65536+Math.round(ye(Ae.g*255,0,255))*256+Math.round(ye(Ae.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,r=Ae.g,s=Ae.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=me){qt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,r=Ae.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Hr);const n=Us(zn.h,Hr.h,e),r=Us(zn.s,Hr.s,e),s=Us(zn.l,Hr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Nt;Nt.NAMES=Xl;let uf=0;class tr extends Qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Tr(),this.name="",this.blending=ki,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=xa,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ln extends tr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new I,Gr=new gt;class fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ic,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ic&&(t.usage=this.usage),t}}class ql extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $l extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ff=0;const Xe=new $t,js=new Ee,Pi=new I,Oe=new vi,lr=new vi,Se=new I;class Ie extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hl(t)?$l:ql)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Oe.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Oe.min,lr.min),Oe.expandByPoint(Se),Se.addVectors(Oe.max,lr.max),Oe.expandByPoint(Se)):(Oe.expandByPoint(lr.min),Oe.expandByPoint(lr.max))}Oe.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Se));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Se.fromBufferAttribute(o,l),c&&(Pi.fromBufferAttribute(t,l),Se.add(Pi)),r=Math.max(r,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new I,c[R]=new I;const l=new I,u=new I,h=new I,f=new gt,d=new gt,g=new gt,_=new I,m=new I;function p(R,y,x){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),o[R].add(_),o[y].add(_),o[x].add(_),c[R].add(m),c[y].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,y=M.length;R<y;++R){const x=M[R],L=x.start,H=x.count;for(let D=L,V=L+H;D<V;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const E=new I,v=new I,P=new I,S=new I;function w(R){P.fromBufferAttribute(r,R),S.copy(P);const y=o[R];E.copy(y),E.sub(P.multiplyScalar(P.dot(y))).normalize(),v.crossVectors(S,y);const L=v.dot(c[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,L)}for(let R=0,y=M.length;R<y;++R){const x=M[R],L=x.start,H=x.count;for(let D=L,V=L+H;D<V;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new fe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new $t,jn=new rf,Vr=new wr,Sc=new I,Wr=new I,Xr=new I,qr=new I,Qs=new I,$r=new I,yc=new I,Yr=new I;class _e extends Ee{constructor(t=new Ie,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){$r.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Qs.fromBufferAttribute(h,t),a?$r.addScaledVector(Qs,u):$r.addScaledVector(Qs.sub(e),u))}e.add($r)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),jn.copy(t.ray).recast(t.near),!(Vr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Vr,Sc)===null||jn.origin.distanceToSquared(Sc)>(t.far-t.near)**2))&&(Mc.copy(s).invert(),jn.copy(t.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,P=E;v<P;v+=3){const S=o.getX(v),w=o.getX(v+1),R=o.getX(v+2);r=Jr(this,p,t,n,l,u,h,S,w,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);r=Jr(this,a,t,n,l,u,h,M,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,P=E;v<P;v+=3){const S=v,w=v+1,R=v+2;r=Jr(this,p,t,n,l,u,h,S,w,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,E=m+1,v=m+2;r=Jr(this,a,t,n,l,u,h,M,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function df(i,t,e,n,r,s,a,o){let c;if(t.side===Re?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Xn,o),c===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Yr);return l<e.near||l>e.far?null:{distance:l,point:Yr.clone(),object:i}}function Jr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Wr),i.getVertexPosition(c,Xr),i.getVertexPosition(l,qr);const u=df(i,t,e,n,Wr,Xr,qr,yc);if(u){const h=new I;nn.getBarycoord(yc,Wr,Xr,qr,h),r&&(u.uv=nn.getInterpolatedAttribute(r,o,c,l,h,new gt)),s&&(u.uv1=nn.getInterpolatedAttribute(s,o,c,l,h,new gt)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new I,materialIndex:0};nn.getNormal(Wr,Xr,qr,f.normal),u.face=f,u.barycoord=h}return u}class Ye extends Ie{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(h,2));function g(_,m,p,M,E,v,P,S,w,R,y){const x=v/w,L=P/R,H=v/2,D=P/2,V=S/2,j=w+1,q=R+1;let F=0,U=0;const $=new I;for(let nt=0;nt<q;nt++){const ht=nt*L-D;for(let wt=0;wt<j;wt++){const Wt=wt*x-H;$[_]=Wt*M,$[m]=ht*E,$[p]=V,l.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=S>0?1:-1,u.push($.x,$.y,$.z),h.push(wt/w),h.push(1-nt/R),F+=1}}for(let nt=0;nt<R;nt++)for(let ht=0;ht<w;ht++){const wt=f+ht+j*nt,Wt=f+ht+j*(nt+1),J=f+(ht+1)+j*(nt+1),rt=f+(ht+1)+j*nt;c.push(wt,Wt,rt),c.push(Wt,J,rt),U+=6}o.addGroup(d,U,y),d+=U,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=Ki(i[e]);for(const r in n)t[r]=n[r]}return t}function pf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const mf={clone:Ki,merge:Le};var gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends tr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jl extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new I,bc=new gt,Ec=new gt;class $e extends Jl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,bc,Ec),e.subVectors(Ec,bc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Ii=1;class vf extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(Li,Ii,t,e);r.layers=this.layers,this.add(r);const s=new $e(Li,Ii,t,e);s.layers=this.layers,this.add(s);const a=new $e(Li,Ii,t,e);a.layers=this.layers,this.add(a);const o=new $e(Li,Ii,t,e);o.layers=this.layers,this.add(o);const c=new $e(Li,Ii,t,e);c.layers=this.layers,this.add(c);const l=new $e(Li,Ii,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kl extends be{constructor(t,e,n,r,s,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xf extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Kl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ye(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Vn});s.uniforms.tEquirect.value=e;const a=new _e(r,s),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=dn),new vf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const ta=new I,Mf=new I,Sf=new Ft;class ii{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ta.subVectors(n,e).cross(Mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sf.getNormalMatrix(t),r=this.coplanarPoint(ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new wr,Kr=new I;class So{constructor(t=new ii,e=new ii,n=new ii,r=new ii,s=new ii,a=new ii){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],E=r[14],v=r[15];if(n[0].setComponents(c-s,f-l,m-d,v-p).normalize(),n[1].setComponents(c+s,f+l,m+d,v+p).normalize(),n[2].setComponents(c+a,f+u,m+g,v+M).normalize(),n[3].setComponents(c-a,f-u,m-g,v-M).normalize(),n[4].setComponents(c-o,f-h,m-_,v-E).normalize(),e===An)n[5].setComponents(c+o,f+h,m+_,v+E).normalize();else if(e===ms)n[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Kr.x=r.normal.x>0?t.max.x:t.min.x,Kr.y=r.normal.y>0?t.max.y:t.min.y,Kr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function yf(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Pn extends Ie{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=t/o,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let E=0;E<l;E++){const v=E*h-s;g.push(v,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const E=M+l*p,v=M+l*(p+1),P=M+1+l*(p+1),S=M+1+l*p;d.push(E,v,S),d.push(v,P,S)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.widthSegments,t.heightSegments)}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Md=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,up=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_p=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$p=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:bf,alphahash_pars_fragment:Ef,alphamap_fragment:Tf,alphamap_pars_fragment:wf,alphatest_fragment:Af,alphatest_pars_fragment:Cf,aomap_fragment:Rf,aomap_pars_fragment:Pf,batching_pars_vertex:Lf,batching_vertex:If,begin_vertex:Df,beginnormal_vertex:Uf,bsdfs:Nf,iridescence_fragment:Ff,bumpmap_pars_fragment:Of,clipping_planes_fragment:zf,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Hf,color_fragment:Gf,color_pars_fragment:Vf,color_pars_vertex:Wf,color_vertex:Xf,common:qf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Yf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Kf,emissivemap_fragment:Zf,emissivemap_pars_fragment:jf,colorspace_fragment:Qf,colorspace_pars_fragment:td,envmap_fragment:ed,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:rd,envmap_physical_pars_fragment:md,envmap_vertex:sd,fog_vertex:ad,fog_pars_vertex:od,fog_fragment:cd,fog_pars_fragment:ld,gradientmap_pars_fragment:hd,lightmap_pars_fragment:ud,lights_lambert_fragment:fd,lights_lambert_pars_fragment:dd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:_d,lights_phong_fragment:vd,lights_phong_pars_fragment:xd,lights_physical_fragment:Md,lights_physical_pars_fragment:Sd,lights_fragment_begin:yd,lights_fragment_maps:bd,lights_fragment_end:Ed,logdepthbuf_fragment:Td,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:Cd,map_fragment:Rd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Id,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Ud,morphinstance_vertex:Nd,morphcolor_vertex:Fd,morphnormal_vertex:Od,morphtarget_pars_vertex:zd,morphtarget_vertex:Bd,normal_fragment_begin:kd,normal_fragment_maps:Hd,normal_pars_fragment:Gd,normal_pars_vertex:Vd,normal_vertex:Wd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:$d,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:Jd,opaque_fragment:Kd,packing:Zd,premultiplied_alpha_fragment:jd,project_vertex:Qd,dithering_fragment:tp,dithering_pars_fragment:ep,roughnessmap_fragment:np,roughnessmap_pars_fragment:ip,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:sp,shadowmap_vertex:ap,shadowmask_pars_fragment:op,skinbase_vertex:cp,skinning_pars_vertex:lp,skinning_vertex:hp,skinnormal_vertex:up,specularmap_fragment:fp,specularmap_pars_fragment:dp,tonemapping_fragment:pp,tonemapping_pars_fragment:mp,transmission_fragment:gp,transmission_pars_fragment:_p,uv_pars_fragment:vp,uv_pars_vertex:xp,uv_vertex:Mp,worldpos_vertex:Sp,background_vert:yp,background_frag:bp,backgroundCube_vert:Ep,backgroundCube_frag:Tp,cube_vert:wp,cube_frag:Ap,depth_vert:Cp,depth_frag:Rp,distanceRGBA_vert:Pp,distanceRGBA_frag:Lp,equirect_vert:Ip,equirect_frag:Dp,linedashed_vert:Up,linedashed_frag:Np,meshbasic_vert:Fp,meshbasic_frag:Op,meshlambert_vert:zp,meshlambert_frag:Bp,meshmatcap_vert:kp,meshmatcap_frag:Hp,meshnormal_vert:Gp,meshnormal_frag:Vp,meshphong_vert:Wp,meshphong_frag:Xp,meshphysical_vert:qp,meshphysical_frag:$p,meshtoon_vert:Yp,meshtoon_frag:Jp,points_vert:Kp,points_frag:Zp,shadow_vert:jp,shadow_frag:Qp,sprite_vert:tm,sprite_frag:em},ot={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},hn={basic:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Le([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Le([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Le([ot.points,ot.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Le([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Le([ot.common,ot.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Le([ot.sprite,ot.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Le([ot.common,ot.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Le([ot.lights,ot.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};hn.physical={uniforms:Le([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Zr={r:0,b:0,g:0},ti=new Ce,nm=new $t;function im(i,t,e,n,r,s,a){const o=new Nt(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?e:t).get(E)),E}function _(M){let E=!1;const v=g(M);v===null?p(o,c):v&&v.isColor&&(p(v,1),E=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===Ms)?(u===void 0&&(u=new _e(new Ye(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ki(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ti.copy(E.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nm.makeRotationFromEuler(ti)),u.material.toneMapped=qt.getTransfer(v.colorSpace)!==te,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _e(new Pn(2,2),new qn({name:"BackgroundMaterial",uniforms:Ki(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=qt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,E){M.getRGB(Zr,Yl(i)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),c=E,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m}}function rm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(x,L,H,D,V){let j=!1;const q=h(D,H,L);s!==q&&(s=q,l(s.object)),j=d(x,D,H,V),j&&g(x,D,H,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(x,L,H,D),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,L,H){const D=H.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let j=V[L.id];j===void 0&&(j={},V[L.id]=j);let q=j[D];return q===void 0&&(q=f(c()),j[D]=q),q}function f(x){const L=[],H=[],D=[];for(let V=0;V<e;V++)L[V]=0,H[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:D,object:x,attributes:{},index:null}}function d(x,L,H,D){const V=s.attributes,j=L.attributes;let q=0;const F=H.getAttributes();for(const U in F)if(F[U].location>=0){const nt=V[U];let ht=j[U];if(ht===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),nt===void 0||nt.attribute!==ht||ht&&nt.data!==ht.data)return!0;q++}return s.attributesNum!==q||s.index!==D}function g(x,L,H,D){const V={},j=L.attributes;let q=0;const F=H.getAttributes();for(const U in F)if(F[U].location>=0){let nt=j[U];nt===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor));const ht={};ht.attribute=nt,nt&&nt.data&&(ht.data=nt.data),V[U]=ht,q++}s.attributes=V,s.attributesNum=q,s.index=D}function _(){const x=s.newAttributes;for(let L=0,H=x.length;L<H;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){const H=s.newAttributes,D=s.enabledAttributes,V=s.attributeDivisors;H[x]=1,D[x]===0&&(i.enableVertexAttribArray(x),D[x]=1),V[x]!==L&&(i.vertexAttribDivisor(x,L),V[x]=L)}function M(){const x=s.newAttributes,L=s.enabledAttributes;for(let H=0,D=L.length;H<D;H++)L[H]!==x[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function E(x,L,H,D,V,j,q){q===!0?i.vertexAttribIPointer(x,L,H,V,j):i.vertexAttribPointer(x,L,H,D,V,j)}function v(x,L,H,D){_();const V=D.attributes,j=H.getAttributes(),q=L.defaultAttributeValues;for(const F in j){const U=j[F];if(U.location>=0){let $=V[F];if($===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),$!==void 0){const nt=$.normalized,ht=$.itemSize,wt=t.get($);if(wt===void 0)continue;const Wt=wt.buffer,J=wt.type,rt=wt.bytesPerElement,_t=J===i.INT||J===i.UNSIGNED_INT||$.gpuType===po;if($.isInterleavedBufferAttribute){const C=$.data,k=C.stride,Q=$.offset;if(C.isInstancedInterleavedBuffer){for(let Z=0;Z<U.locationSize;Z++)p(U.location+Z,C.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Z=0;Z<U.locationSize;Z++)E(U.location+Z,ht/U.locationSize,J,nt,k*rt,(Q+ht/U.locationSize*Z)*rt,_t)}else{if($.isInstancedBufferAttribute){for(let C=0;C<U.locationSize;C++)p(U.location+C,$.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let C=0;C<U.locationSize;C++)m(U.location+C);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let C=0;C<U.locationSize;C++)E(U.location+C,ht/U.locationSize,J,nt,ht*rt,ht/U.locationSize*C*rt,_t)}}else if(q!==void 0){const nt=q[F];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(U.location,nt);break;case 3:i.vertexAttrib3fv(U.location,nt);break;case 4:i.vertexAttrib4fv(U.location,nt);break;default:i.vertexAttrib1fv(U.location,nt)}}}}M()}function P(){R();for(const x in n){const L=n[x];for(const H in L){const D=L[H];for(const V in D)u(D[V].object),delete D[V];delete L[H]}delete n[x]}}function S(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const H in L){const D=L[H];for(const V in D)u(D[V].object),delete D[V];delete L[H]}delete n[x.id]}function w(x){for(const L in n){const H=n[L];if(H[x.id]===void 0)continue;const D=H[x.id];for(const V in D)u(D[V].object),delete D[V];delete H[x.id]}}function R(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function sm(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function am(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Je&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==rn&&!R)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:P,maxSamples:S}}function om(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ii,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:n,E=M*4;let v=p.clippingState||null;c.value=v,v=u(g,f,E,d);for(let P=0;P!==E;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)a.copy(h[E]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function cm(i){let t=new WeakMap;function e(a,o){return o===Aa?a.mapping=qi:o===Ca&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Aa||o===Ca)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new xf(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class jl extends Jl{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,Tc=[.125,.215,.35,.446,.526,.582],ai=20,ea=new jl,wc=new Nt;let na=null,ia=0,ra=0,sa=!1;const ri=(1+Math.sqrt(5))/2,Di=1/ri,Ac=[new I(-ri,Di,0),new I(ri,Di,0),new I(-Di,0,ri),new I(Di,0,ri),new I(0,ri,-Di),new I(0,ri,Di),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,ra),this._renderer.xr.enabled=sa,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Er,format:Je,colorSpace:ji,depthBuffer:!1},r=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lm(s)),this._blurMaterial=hm(s,t,e)}return r}_compileMaterial(t){const e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,r){const o=new $e(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wc),u.toneMapping=Wn,u.autoClear=!1;const d=new Ln({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new _e(new Ye,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(wc),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const E=this._cubeSize;jr(r,M*E,p>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===qi||t.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;jr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ac[(r-s-1)%Ac.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _e(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ai-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ai;m>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const p=[];let M=0;for(let w=0;w<ai;++w){const R=w/_,y=Math.exp(-R*R/2);p.push(y),w===0?M+=y:w<m&&(M+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const v=this._sizeLods[r],P=3*v*(r>E-zi?r-E+zi:0),S=4*(this._cubeSize-v);jr(e,P,S,3*v,2*v),c.setRenderTarget(e),c.render(h,ea)}}function lm(i){const t=[],e=[],n=[];let r=i;const s=i-zi+1+Tc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-zi?c=Tc[a-i+zi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),E=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let S=0;S<d;S++){const w=S%3*2/3-1,R=S>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(y,_*g*S),E.set(f,m*g*S);const x=[S,S,S,S,S,S];v.set(x,p*g*S)}const P=new Ie;P.setAttribute("position",new fe(M,_)),P.setAttribute("uv",new fe(E,m)),P.setAttribute("faceIndex",new fe(v,p)),t.push(P),r>zi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(i,t,e){const n=new gi(i,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function hm(i,t,e){const n=new Float32Array(ai),r=new I(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Pc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Lc(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function um(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Aa||c===Ca,u=c===qi||c===$i;if(l||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Cc(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Cc(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function fm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&gr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dm(i,t,e,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let E=0,v=M.length;E<v;E+=3){const P=M[E+0],S=M[E+1],w=M[E+2];f.push(P,S,S,w,w,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,v=M.length/3-1;E<v;E+=3){const P=E+0,S=E+1,w=E+2;f.push(P,S,S,w,w,P)}}else return;const m=new(Hl(f)?$l:ql)(f,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function pm(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*a),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function gm(i,t,e){const n=new WeakMap,r=new he;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=o.attributes.position.count*E,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const S=new Float32Array(v*P*4*h),w=new Vl(S,v,P,h);w.type=rn,w.needsUpdate=!0;const R=E*4;for(let x=0;x<h;x++){const L=m[x],H=p[x],D=M[x],V=v*P*4*x;for(let j=0;j<L.count;j++){const q=j*R;d===!0&&(r.fromBufferAttribute(L,j),S[V+q+0]=r.x,S[V+q+1]=r.y,S[V+q+2]=r.z,S[V+q+3]=0),g===!0&&(r.fromBufferAttribute(H,j),S[V+q+4]=r.x,S[V+q+5]=r.y,S[V+q+6]=r.z,S[V+q+7]=0),_===!0&&(r.fromBufferAttribute(D,j),S[V+q+8]=r.x,S[V+q+9]=r.y,S[V+q+10]=r.z,S[V+q+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:w,size:new gt(v,P)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function _m(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Ql extends be{constructor(t,e,n,r,s,a,o,c,l,u=Hi){if(u!==Hi&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hi&&(n=mi),n===void 0&&u===Ji&&(n=Yi),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=c!==void 0?c:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const th=new be,Ic=new Ql(1,1),eh=new Vl,nh=new ef,ih=new Kl,Dc=[],Uc=[],Nc=new Float32Array(16),Fc=new Float32Array(9),Oc=new Float32Array(4);function er(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Dc[r];if(s===void 0&&(s=new Float32Array(r),Dc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Es(i,t){let e=Uc[t];e===void 0&&(e=new Int32Array(t),Uc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Oc.set(n),i.uniformMatrix2fv(this.addr,!1,Oc),xe(e,n)}}function bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Fc.set(n),i.uniformMatrix3fv(this.addr,!1,Fc),xe(e,n)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Nc.set(n),i.uniformMatrix4fv(this.addr,!1,Nc),xe(e,n)}}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Dm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=kl,s=Ic):s=th,e.setTexture2D(t||s,r)}function Um(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||nh,r)}function Nm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ih,r)}function Fm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||eh,r)}function Om(i){switch(i){case 5126:return vm;case 35664:return xm;case 35665:return Mm;case 35666:return Sm;case 35674:return ym;case 35675:return bm;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return wm;case 35668:case 35672:return Am;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Pm;case 36295:return Lm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}function zm(i,t){i.uniform1fv(this.addr,t)}function Bm(i,t){const e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function km(i,t){const e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function Hm(i,t){const e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function Gm(i,t){const e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vm(i,t){const e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wm(i,t){const e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xm(i,t){i.uniform1iv(this.addr,t)}function qm(i,t){i.uniform2iv(this.addr,t)}function $m(i,t){i.uniform3iv(this.addr,t)}function Ym(i,t){i.uniform4iv(this.addr,t)}function Jm(i,t){i.uniform1uiv(this.addr,t)}function Km(i,t){i.uniform2uiv(this.addr,t)}function Zm(i,t){i.uniform3uiv(this.addr,t)}function jm(i,t){i.uniform4uiv(this.addr,t)}function Qm(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||th,s[a])}function t0(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||nh,s[a])}function e0(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ih,s[a])}function n0(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||eh,s[a])}function i0(i){switch(i){case 5126:return zm;case 35664:return Bm;case 35665:return km;case 35666:return Hm;case 35674:return Gm;case 35675:return Vm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return $m;case 35669:case 35673:return Ym;case 5125:return Jm;case 36294:return Km;case 36295:return Zm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}class r0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Om(e.type)}}class s0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i0(e.type)}}class a0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function zc(i,t){i.seq.push(t),i.map[t.id]=t}function o0(i,t,e){const n=i.name,r=n.length;for(aa.lastIndex=0;;){const s=aa.exec(n),a=aa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){zc(e,l===void 0?new r0(o,i,t):new s0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new a0(o),zc(e,h)),e=h}}}class us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);o0(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const c0=37297;let l0=0;function h0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const kc=new Ft;function u0(i){qt._getMatrix(kc,qt.workingColorSpace,i);const t=`mat3( ${kc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case ys:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+h0(i.getShaderSource(t),a)}else return r}function f0(i,t){const e=u0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function d0(i,t){let e;switch(t){case Cu:e="Linear";break;case Ru:e="Reinhard";break;case Pu:e="Cineon";break;case Lu:e="ACESFilmic";break;case Du:e="AgX";break;case Uu:e="Neutral";break;case Iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qr=new I;function p0(){qt.getLuminanceCoefficients(Qr);const i=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function g0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _r(i){return i!==""}function Gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(i){return i.replace(v0,M0)}const x0=new Map;function M0(i,t){let e=Ht[t];if(e===void 0){const n=x0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}const S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(i){return i.replace(S0,y0)}function y0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function b0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function E0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case $i:t="ENVMAP_TYPE_CUBE";break;case Ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===$i&&(t="ENVMAP_MODE_REFRACTION"),t}function w0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fo:t="ENVMAP_BLENDING_MULTIPLY";break;case wu:t="ENVMAP_BLENDING_MIX";break;case Au:t="ENVMAP_BLENDING_ADD";break}return t}function A0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function C0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=b0(e),l=E0(e),u=T0(e),h=w0(e),f=A0(e),d=m0(e),g=g0(s),_=r.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(m=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Wn?d0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,f0("linearToOutputTexel",e.outputColorSpace),p0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=io(a),a=Gc(a,e),a=Vc(a,e),o=io(o),o=Gc(o,e),o=Vc(o,e),a=Wc(a),o=Wc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+a,v=M+p+o,P=Bc(r,r.VERTEX_SHADER,E),S=Bc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,P),r.attachShader(_,S),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(P).trim(),V=r.getShaderInfoLog(S).trim();let j=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,S);else{const F=Hc(r,P,"vertex"),U=Hc(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+F+`
`+U)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||V==="")&&(q=!1);q&&(L.diagnostics={runnable:j,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(P),r.deleteShader(S),R=new us(r,_),y=_0(r,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,c0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=S,this}let R0=0;class P0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new L0(t),e.set(t,n)),n}}class L0{constructor(t){this.id=R0++,this.code=t,this.usedTimes=0}}function I0(i,t,e,n,r,s,a){const o=new Wl,c=new P0,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,x,L,H,D){const V=H.fog,j=D.geometry,q=y.isMeshStandardMaterial?H.environment:null,F=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),U=F&&F.mapping===Ms?F.image.height:null,$=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const nt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ht=nt!==void 0?nt.length:0;let wt=0;j.morphAttributes.position!==void 0&&(wt=1),j.morphAttributes.normal!==void 0&&(wt=2),j.morphAttributes.color!==void 0&&(wt=3);let Wt,J,rt,_t;if($){const jt=hn[$];Wt=jt.vertexShader,J=jt.fragmentShader}else Wt=y.vertexShader,J=y.fragmentShader,c.update(y),rt=c.getVertexShaderID(y),_t=c.getFragmentShaderID(y);const C=i.getRenderTarget(),k=i.state.buffers.depth.getReversed(),Q=D.isInstancedMesh===!0,Z=D.isBatchedMesh===!0,Tt=!!y.map,ct=!!y.matcap,Bt=!!F,N=!!y.aoMap,ce=!!y.lightMap,Lt=!!y.bumpMap,Gt=!!y.normalMap,Ct=!!y.displacementMap,re=!!y.emissiveMap,At=!!y.metalnessMap,A=!!y.roughnessMap,b=y.anisotropy>0,G=y.clearcoat>0,tt=y.dispersion>0,it=y.iridescence>0,K=y.sheen>0,bt=y.transmission>0,ut=b&&!!y.anisotropyMap,mt=G&&!!y.clearcoatMap,Xt=G&&!!y.clearcoatNormalMap,st=G&&!!y.clearcoatRoughnessMap,vt=it&&!!y.iridescenceMap,Rt=it&&!!y.iridescenceThicknessMap,It=K&&!!y.sheenColorMap,xt=K&&!!y.sheenRoughnessMap,Vt=!!y.specularMap,kt=!!y.specularColorMap,ne=!!y.specularIntensityMap,O=bt&&!!y.transmissionMap,lt=bt&&!!y.thicknessMap,Y=!!y.gradientMap,et=!!y.alphaMap,pt=y.alphaTest>0,ft=!!y.alphaHash,Ot=!!y.extensions;let le=Wn;y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(le=i.toneMapping);const Te={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Wt,fragmentShader:J,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Z,batchingColor:Z&&D._colorsTexture!==null,instancing:Q,instancingColor:Q&&D.instanceColor!==null,instancingMorph:Q&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:C===null?i.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ji,alphaToCoverage:!!y.alphaToCoverage,map:Tt,matcap:ct,envMap:Bt,envMapMode:Bt&&F.mapping,envMapCubeUVHeight:U,aoMap:N,lightMap:ce,bumpMap:Lt,normalMap:Gt,displacementMap:f&&Ct,emissiveMap:re,normalMapObjectSpace:Gt&&y.normalMapType===zu,normalMapTangentSpace:Gt&&y.normalMapType===Mo,metalnessMap:At,roughnessMap:A,anisotropy:b,anisotropyMap:ut,clearcoat:G,clearcoatMap:mt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:st,dispersion:tt,iridescence:it,iridescenceMap:vt,iridescenceThicknessMap:Rt,sheen:K,sheenColorMap:It,sheenRoughnessMap:xt,specularMap:Vt,specularColorMap:kt,specularIntensityMap:ne,transmission:bt,transmissionMap:O,thicknessMap:lt,gradientMap:Y,opaque:y.transparent===!1&&y.blending===ki&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:ft,combine:y.combine,mapUv:Tt&&_(y.map.channel),aoMapUv:N&&_(y.aoMap.channel),lightMapUv:ce&&_(y.lightMap.channel),bumpMapUv:Lt&&_(y.bumpMap.channel),normalMapUv:Gt&&_(y.normalMap.channel),displacementMapUv:Ct&&_(y.displacementMap.channel),emissiveMapUv:re&&_(y.emissiveMap.channel),metalnessMapUv:At&&_(y.metalnessMap.channel),roughnessMapUv:A&&_(y.roughnessMap.channel),anisotropyMapUv:ut&&_(y.anisotropyMap.channel),clearcoatMapUv:mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(y.sheenRoughnessMap.channel),specularMapUv:Vt&&_(y.specularMap.channel),specularColorMapUv:kt&&_(y.specularColorMap.channel),specularIntensityMapUv:ne&&_(y.specularIntensityMap.channel),transmissionMapUv:O&&_(y.transmissionMap.channel),thicknessMapUv:lt&&_(y.thicknessMap.channel),alphaMapUv:et&&_(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Gt||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!j.attributes.uv&&(Tt||et),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:k,skinning:D.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:wt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===te,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===en,flipSided:y.side===Re,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ot&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&y.extensions.multiDraw===!0||Z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)x.push(L),x.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(M(x,y),E(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function E(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const x=g[y.type];let L;if(x){const H=hn[x];L=mf.clone(H.uniforms)}else L=y.uniforms;return L}function P(y,x){let L;for(let H=0,D=u.length;H<D;H++){const V=u[H];if(V.cacheKey===x){L=V,++L.usedTimes;break}}return L===void 0&&(L=new C0(i,x,y,s),u.push(L)),L}function S(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function w(y){c.remove(y)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:S,releaseShaderCache:w,programs:u,dispose:R}}function D0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function U0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $c(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||U0),n.length>1&&n.sort(f||qc),r.length>1&&r.sort(f||qc)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function N0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new $c,i.set(n,[a])):r>=s.length?(a=new $c,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function F0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Nt};break;case"SpotLight":e={position:new I,direction:new I,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function O0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let z0=0;function B0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k0(i){const t=new F0,e=O0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const r=new I,s=new $t,a=new $t;function o(l){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,E=0,v=0,P=0,S=0,w=0;l.sort(B0);for(let y=0,x=l.length;y<x;y++){const L=l[y],H=L.color,D=L.intensity,V=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*D,h+=H.g*D,f+=H.b*D;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],D);w++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const F=L.shadow,U=e.get(L);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.directionalShadow[d]=U,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=q,d++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(D),q.distance=V,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[_]=q;const F=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,F.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[_]=F.matrix,L.castShadow){const U=e.get(L);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=j,v++}_++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(H).multiplyScalar(D),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=q,m++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const F=L.shadow,U=e.get(L);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,U.shadowCameraNear=F.camera.near,U.shadowCameraFar=F.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=q,g++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(D),q.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==E||R.numSpotShadows!==v||R.numSpotMaps!==P||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=E,R.numSpotShadows=v,R.numSpotMaps=P,R.numLightProbes=w,n.version=z0++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const E=l[p];if(E.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(E.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Yc(i){const t=new k0(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function H0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Yc(i),t.set(r,[o])):s>=a.length?(o=new Yc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class G0 extends tr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V0 extends tr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function q0(i,t,e){let n=new So;const r=new gt,s=new gt,a=new he,o=new G0({depthPacking:Ou}),c=new V0,l={},u=e.maxTextureSize,h={[Xn]:Re,[Re]:Xn,[en]:en},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _e(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let p=this.type;this.render=function(S,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Vn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const D=p!==En&&this.type===En,V=p===En&&this.type!==En;for(let j=0,q=S.length;j<q;j++){const F=S[j],U=F.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const $=U.getFrameExtents();if(r.multiply($),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,U.mapSize.y=s.y)),U.map===null||D===!0||V===!0){const ht=this.type!==En?{minFilter:Pe,magFilter:Pe}:{};U.map!==null&&U.map.dispose(),U.map=new gi(r.x,r.y,ht),U.map.texture.name=F.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const nt=U.getViewportCount();for(let ht=0;ht<nt;ht++){const wt=U.getViewport(ht);a.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),H.viewport(a),U.updateMatrices(F,ht),n=U.getFrustum(),v(w,R,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===En&&M(U,R),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,L)};function M(S,w){const R=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new gi(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,R,d,_,null)}function E(S,w,R,y){let x=null;const L=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)x=L;else if(x=R.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=x.uuid,D=w.uuid;let V=l[H];V===void 0&&(V={},l[H]=V);let j=V[D];j===void 0&&(j=x.clone(),V[D]=j,w.addEventListener("dispose",P)),x=j}if(x.visible=w.visible,x.wireframe=w.wireframe,y===En?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=i.properties.get(x);H.light=R}return x}function v(S,w,R,y,x){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===En)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const D=t.update(S),V=S.material;if(Array.isArray(V)){const j=D.groups;for(let q=0,F=j.length;q<F;q++){const U=j[q],$=V[U.materialIndex];if($&&$.visible){const nt=E(S,$,y,x);S.onBeforeShadow(i,S,w,R,D,nt,U),i.renderBufferDirect(R,null,D,nt,S,U),S.onAfterShadow(i,S,w,R,D,nt,U)}}}else if(V.visible){const j=E(S,V,y,x);S.onBeforeShadow(i,S,w,R,D,j,null),i.renderBufferDirect(R,null,D,j,S,null),S.onAfterShadow(i,S,w,R,D,j,null)}}const H=S.children;for(let D=0,V=H.length;D<V;D++)v(H[D],w,R,y,x)}function P(S){S.target.removeEventListener("dispose",P);for(const R in l){const y=l[R],x=S.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const $0={[Ma]:Sa,[ya]:Ta,[ba]:wa,[Xi]:Ea,[Sa]:Ma,[Ta]:ya,[wa]:ba,[Ea]:Xi};function Y0(i,t){function e(){let O=!1;const lt=new he;let Y=null;const et=new he(0,0,0,0);return{setMask:function(pt){Y!==pt&&!O&&(i.colorMask(pt,pt,pt,pt),Y=pt)},setLocked:function(pt){O=pt},setClear:function(pt,ft,Ot,le,Te){Te===!0&&(pt*=le,ft*=le,Ot*=le),lt.set(pt,ft,Ot,le),et.equals(lt)===!1&&(i.clearColor(pt,ft,Ot,le),et.copy(lt))},reset:function(){O=!1,Y=null,et.set(-1,0,0,0)}}}function n(){let O=!1,lt=!1,Y=null,et=null,pt=null;return{setReversed:function(ft){if(lt!==ft){const Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const le=pt;pt=null,this.setClear(le)}lt=ft},getReversed:function(){return lt},setTest:function(ft){ft?C(i.DEPTH_TEST):k(i.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!O&&(i.depthMask(ft),Y=ft)},setFunc:function(ft){if(lt&&(ft=$0[ft]),et!==ft){switch(ft){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=ft}},setLocked:function(ft){O=ft},setClear:function(ft){pt!==ft&&(lt&&(ft=1-ft),i.clearDepth(ft),pt=ft)},reset:function(){O=!1,Y=null,et=null,pt=null,lt=!1}}}function r(){let O=!1,lt=null,Y=null,et=null,pt=null,ft=null,Ot=null,le=null,Te=null;return{setTest:function(jt){O||(jt?C(i.STENCIL_TEST):k(i.STENCIL_TEST))},setMask:function(jt){lt!==jt&&!O&&(i.stencilMask(jt),lt=jt)},setFunc:function(jt,Ke,gn){(Y!==jt||et!==Ke||pt!==gn)&&(i.stencilFunc(jt,Ke,gn),Y=jt,et=Ke,pt=gn)},setOp:function(jt,Ke,gn){(ft!==jt||Ot!==Ke||le!==gn)&&(i.stencilOp(jt,Ke,gn),ft=jt,Ot=Ke,le=gn)},setLocked:function(jt){O=jt},setClear:function(jt){Te!==jt&&(i.clearStencil(jt),Te=jt)},reset:function(){O=!1,lt=null,Y=null,et=null,pt=null,ft=null,Ot=null,le=null,Te=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,E=null,v=null,P=null,S=null,w=new Nt(0,0,0),R=0,y=!1,x=null,L=null,H=null,D=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,F=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(U)[1]),q=F>=1):U.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),q=F>=2);let $=null,nt={};const ht=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Wt=new he().fromArray(ht),J=new he().fromArray(wt);function rt(O,lt,Y,et){const pt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(O,ft),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<Y;Ot++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ft}const _t={};_t[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),C(i.DEPTH_TEST),a.setFunc(Xi),Lt(!1),Gt(jo),C(i.CULL_FACE),N(Vn);function C(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function k(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Q(O,lt){return h[O]!==lt?(i.bindFramebuffer(O,lt),h[O]=lt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Z(O,lt){let Y=d,et=!1;if(O){Y=f.get(lt),Y===void 0&&(Y=[],f.set(lt,Y));const pt=O.textures;if(Y.length!==pt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Ot=pt.length;ft<Ot;ft++)Y[ft]=i.COLOR_ATTACHMENT0+ft;Y.length=pt.length,et=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,et=!0);et&&i.drawBuffers(Y)}function Tt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const ct={[si]:i.FUNC_ADD,[lu]:i.FUNC_SUBTRACT,[hu]:i.FUNC_REVERSE_SUBTRACT};ct[uu]=i.MIN,ct[fu]=i.MAX;const Bt={[du]:i.ZERO,[pu]:i.ONE,[mu]:i.SRC_COLOR,[va]:i.SRC_ALPHA,[Su]:i.SRC_ALPHA_SATURATE,[xu]:i.DST_COLOR,[_u]:i.DST_ALPHA,[gu]:i.ONE_MINUS_SRC_COLOR,[xa]:i.ONE_MINUS_SRC_ALPHA,[Mu]:i.ONE_MINUS_DST_COLOR,[vu]:i.ONE_MINUS_DST_ALPHA,[yu]:i.CONSTANT_COLOR,[bu]:i.ONE_MINUS_CONSTANT_COLOR,[Eu]:i.CONSTANT_ALPHA,[Tu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(O,lt,Y,et,pt,ft,Ot,le,Te,jt){if(O===Vn){_===!0&&(k(i.BLEND),_=!1);return}if(_===!1&&(C(i.BLEND),_=!0),O!==cu){if(O!==m||jt!==y){if((p!==si||v!==si)&&(i.blendEquation(i.FUNC_ADD),p=si,v=si),jt)switch(O){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,E=null,P=null,S=null,w.set(0,0,0),R=0,m=O,y=jt}return}pt=pt||lt,ft=ft||Y,Ot=Ot||et,(lt!==p||pt!==v)&&(i.blendEquationSeparate(ct[lt],ct[pt]),p=lt,v=pt),(Y!==M||et!==E||ft!==P||Ot!==S)&&(i.blendFuncSeparate(Bt[Y],Bt[et],Bt[ft],Bt[Ot]),M=Y,E=et,P=ft,S=Ot),(le.equals(w)===!1||Te!==R)&&(i.blendColor(le.r,le.g,le.b,Te),w.copy(le),R=Te),m=O,y=!1}function ce(O,lt){O.side===en?k(i.CULL_FACE):C(i.CULL_FACE);let Y=O.side===Re;lt&&(Y=!Y),Lt(Y),O.blending===ki&&O.transparent===!1?N(Vn):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const et=O.stencilWrite;o.setTest(et),et&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):k(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function Gt(O){O!==su?(C(i.CULL_FACE),O!==L&&(O===jo?i.cullFace(i.BACK):O===au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):k(i.CULL_FACE),L=O}function Ct(O){O!==H&&(q&&i.lineWidth(O),H=O)}function re(O,lt,Y){O?(C(i.POLYGON_OFFSET_FILL),(D!==lt||V!==Y)&&(i.polygonOffset(lt,Y),D=lt,V=Y)):k(i.POLYGON_OFFSET_FILL)}function At(O){O?C(i.SCISSOR_TEST):k(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+j-1),$!==O&&(i.activeTexture(O),$=O)}function b(O,lt,Y){Y===void 0&&($===null?Y=i.TEXTURE0+j-1:Y=$);let et=nt[Y];et===void 0&&(et={type:void 0,texture:void 0},nt[Y]=et),(et.type!==O||et.texture!==lt)&&($!==Y&&(i.activeTexture(Y),$=Y),i.bindTexture(O,lt||_t[O]),et.type=O,et.texture=lt)}function G(){const O=nt[$];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function It(O){Wt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Wt.copy(O))}function xt(O){J.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),J.copy(O))}function Vt(O,lt){let Y=l.get(lt);Y===void 0&&(Y=new WeakMap,l.set(lt,Y));let et=Y.get(O);et===void 0&&(et=i.getUniformBlockIndex(lt,O.name),Y.set(O,et))}function kt(O,lt){const et=l.get(lt).get(O);c.get(lt)!==et&&(i.uniformBlockBinding(lt,et,O.__bindingPointIndex),c.set(lt,et))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},$=null,nt={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,E=null,v=null,P=null,S=null,w=new Nt(0,0,0),R=0,y=!1,x=null,L=null,H=null,D=null,V=null,Wt.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:C,disable:k,bindFramebuffer:Q,drawBuffers:Z,useProgram:Tt,setBlending:N,setMaterial:ce,setFlipSided:Lt,setCullFace:Gt,setLineWidth:Ct,setPolygonOffset:re,setScissorTest:At,activeTexture:A,bindTexture:b,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:vt,texImage3D:Rt,updateUBOMapping:Vt,uniformBlockBinding:kt,texStorage2D:Xt,texStorage3D:st,texSubImage2D:K,texSubImage3D:bt,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:It,viewport:xt,reset:ne}}function Jc(i,t,e,n){const r=J0(n);switch(e){case Ul:return i*t;case Fl:return i*t;case Ol:return i*t*2;case Ss:return i*t/r.components*r.byteLength;case _o:return i*t/r.components*r.byteLength;case zl:return i*t*2/r.components*r.byteLength;case vo:return i*t*2/r.components*r.byteLength;case Nl:return i*t*3/r.components*r.byteLength;case Je:return i*t*4/r.components*r.byteLength;case xo:return i*t*4/r.components*r.byteLength;case as:case os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cs:case ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Pa:case Ia:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hs:case Za:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bl:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J0(i){switch(i){case Rn:case Ll:return{byteLength:1,components:1};case yr:case Il:case Er:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case mi:case po:case rn:return{byteLength:4,components:1};case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function K0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return d?new OffscreenCanvas(A,b):br("canvas")}function _(A,b,G){let tt=1;const it=At(A);if((it.width>G||it.height>G)&&(tt=G/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(tt*it.width),bt=Math.floor(tt*it.height);h===void 0&&(h=g(K,bt));const ut=b?g(K,bt):h;return ut.width=K,ut.height=bt,ut.getContext("2d").drawImage(A,0,0,K,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+K+"x"+bt+")."),ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,b,G,tt,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=b;if(b===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),b===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){const bt=it?ys:qt.getTransfer(tt);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=bt===te?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(A,b){let G;return A?b===null||b===mi||b===Yi?G=i.DEPTH24_STENCIL8:b===rn?G=i.DEPTH32F_STENCIL8:b===yr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===mi||b===Yi?G=i.DEPTH_COMPONENT24:b===rn?G=i.DEPTH_COMPONENT32F:b===yr&&(G=i.DEPTH_COMPONENT16),G}function P(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pe&&A.minFilter!==dn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function S(A){const b=A.target;b.removeEventListener("dispose",S),R(b),b.isVideoTexture&&u.delete(b)}function w(A){const b=A.target;b.removeEventListener("dispose",w),x(b)}function R(A){const b=n.get(A);if(b.__webglInit===void 0)return;const G=A.source,tt=f.get(G);if(tt){const it=tt[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&y(A),Object.keys(tt).length===0&&f.delete(G)}n.remove(A)}function y(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const G=A.source,tt=f.get(G);delete tt[b.__cacheKey],a.memory.textures--}function x(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let it=0;it<b.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(b.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[tt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=A.textures;for(let tt=0,it=G.length;tt<it;tt++){const K=n.get(G[tt]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(G[tt])}n.remove(A)}let L=0;function H(){L=0}function D(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function V(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function j(A,b){const G=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,A,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function q(A,b){const G=n.get(A);if(A.version>0&&G.__version!==A.version){J(G,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function F(A,b){const G=n.get(A);if(A.version>0&&G.__version!==A.version){J(G,A,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function U(A,b){const G=n.get(A);if(A.version>0&&G.__version!==A.version){rt(G,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const $={[Sr]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},nt={[Pe]:i.NEAREST,[Nu]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Is]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},ht={[Bu]:i.NEVER,[Xu]:i.ALWAYS,[ku]:i.LESS,[kl]:i.LEQUAL,[Hu]:i.EQUAL,[Wu]:i.GEQUAL,[Gu]:i.GREATER,[Vu]:i.NOTEQUAL};function wt(A,b){if(b.type===rn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===dn||b.magFilter===Is||b.magFilter===Dr||b.magFilter===ci||b.minFilter===dn||b.minFilter===Is||b.minFilter===Dr||b.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,$[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,$[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,$[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,nt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pe||b.minFilter!==Dr&&b.minFilter!==ci||b.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Wt(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",S));const tt=b.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const K=V(b);if(K!==A.__cacheKey){it[K]===void 0&&(it[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[K].usedTimes++;const bt=it[A.__cacheKey];bt!==void 0&&(it[A.__cacheKey].usedTimes--,bt.usedTimes===0&&y(b)),A.__cacheKey=K,A.__webglTexture=it[K].texture}return G}function J(A,b,G){let tt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=i.TEXTURE_3D);const it=Wt(A,b),K=b.source;e.bindTexture(tt,A.__webglTexture,i.TEXTURE0+G);const bt=n.get(K);if(K.version!==bt.__version||it===!0){e.activeTexture(i.TEXTURE0+G);const ut=qt.getPrimaries(qt.workingColorSpace),mt=b.colorSpace===Hn?null:qt.getPrimaries(b.colorSpace),Xt=b.colorSpace===Hn||ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let st=_(b.image,!1,r.maxTextureSize);st=re(b,st);const vt=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type);let It=E(b.internalFormat,vt,Rt,b.colorSpace,b.isVideoTexture);wt(tt,b);let xt;const Vt=b.mipmaps,kt=b.isVideoTexture!==!0,ne=bt.__version===void 0||it===!0,O=K.dataReady,lt=P(b,st);if(b.isDepthTexture)It=v(b.format===Ji,b.type),ne&&(kt?e.texStorage2D(i.TEXTURE_2D,1,It,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,It,st.width,st.height,0,vt,Rt,null));else if(b.isDataTexture)if(Vt.length>0){kt&&ne&&e.texStorage2D(i.TEXTURE_2D,lt,It,Vt[0].width,Vt[0].height);for(let Y=0,et=Vt.length;Y<et;Y++)xt=Vt[Y],kt?O&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,It,xt.width,xt.height,0,vt,Rt,xt.data);b.generateMipmaps=!1}else kt?(ne&&e.texStorage2D(i.TEXTURE_2D,lt,It,st.width,st.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,vt,Rt,st.data)):e.texImage2D(i.TEXTURE_2D,0,It,st.width,st.height,0,vt,Rt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,It,Vt[0].width,Vt[0].height,st.depth);for(let Y=0,et=Vt.length;Y<et;Y++)if(xt=Vt[Y],b.format!==Je)if(vt!==null)if(kt){if(O)if(b.layerUpdates.size>0){const pt=Jc(xt.width,xt.height,b.format,b.type);for(const ft of b.layerUpdates){const Ot=xt.data.subarray(ft*pt/xt.data.BYTES_PER_ELEMENT,(ft+1)*pt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ft,xt.width,xt.height,1,vt,Ot)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,It,xt.width,xt.height,st.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,vt,Rt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,It,xt.width,xt.height,st.depth,0,vt,Rt,xt.data)}else{kt&&ne&&e.texStorage2D(i.TEXTURE_2D,lt,It,Vt[0].width,Vt[0].height);for(let Y=0,et=Vt.length;Y<et;Y++)xt=Vt[Y],b.format!==Je?vt!==null?kt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?O&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,It,xt.width,xt.height,0,vt,Rt,xt.data)}else if(b.isDataArrayTexture)if(kt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,It,st.width,st.height,st.depth),O)if(b.layerUpdates.size>0){const Y=Jc(st.width,st.height,b.format,b.type);for(const et of b.layerUpdates){const pt=st.data.subarray(et*Y/st.data.BYTES_PER_ELEMENT,(et+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,st.width,st.height,1,vt,Rt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Rt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,st.width,st.height,st.depth,0,vt,Rt,st.data);else if(b.isData3DTexture)kt?(ne&&e.texStorage3D(i.TEXTURE_3D,lt,It,st.width,st.height,st.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Rt,st.data)):e.texImage3D(i.TEXTURE_3D,0,It,st.width,st.height,st.depth,0,vt,Rt,st.data);else if(b.isFramebufferTexture){if(ne)if(kt)e.texStorage2D(i.TEXTURE_2D,lt,It,st.width,st.height);else{let Y=st.width,et=st.height;for(let pt=0;pt<lt;pt++)e.texImage2D(i.TEXTURE_2D,pt,It,Y,et,0,vt,Rt,null),Y>>=1,et>>=1}}else if(Vt.length>0){if(kt&&ne){const Y=At(Vt[0]);e.texStorage2D(i.TEXTURE_2D,lt,It,Y.width,Y.height)}for(let Y=0,et=Vt.length;Y<et;Y++)xt=Vt[Y],kt?O&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,vt,Rt,xt):e.texImage2D(i.TEXTURE_2D,Y,It,vt,Rt,xt);b.generateMipmaps=!1}else if(kt){if(ne){const Y=At(st);e.texStorage2D(i.TEXTURE_2D,lt,It,Y.width,Y.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Rt,st)}else e.texImage2D(i.TEXTURE_2D,0,It,vt,Rt,st);m(b)&&p(tt),bt.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function rt(A,b,G){if(b.image.length!==6)return;const tt=Wt(A,b),it=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const K=n.get(it);if(it.version!==K.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);const bt=qt.getPrimaries(qt.workingColorSpace),ut=b.colorSpace===Hn?null:qt.getPrimaries(b.colorSpace),mt=b.colorSpace===Hn||bt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let et=0;et<6;et++)!Xt&&!st?vt[et]=_(b.image[et],!0,r.maxCubemapSize):vt[et]=st?b.image[et].image:b.image[et],vt[et]=re(b,vt[et]);const Rt=vt[0],It=s.convert(b.format,b.colorSpace),xt=s.convert(b.type),Vt=E(b.internalFormat,It,xt,b.colorSpace),kt=b.isVideoTexture!==!0,ne=K.__version===void 0||tt===!0,O=it.dataReady;let lt=P(b,Rt);wt(i.TEXTURE_CUBE_MAP,b);let Y;if(Xt){kt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Vt,Rt.width,Rt.height);for(let et=0;et<6;et++){Y=vt[et].mipmaps;for(let pt=0;pt<Y.length;pt++){const ft=Y[pt];b.format!==Je?It!==null?kt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ft.width,ft.height,It,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ft.width,ft.height,It,xt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Vt,ft.width,ft.height,0,It,xt,ft.data)}}}else{if(Y=b.mipmaps,kt&&ne){Y.length>0&&lt++;const et=At(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Vt,et.width,et.height)}for(let et=0;et<6;et++)if(st){kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,vt[et].width,vt[et].height,It,xt,vt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,vt[et].width,vt[et].height,0,It,xt,vt[et].data);for(let pt=0;pt<Y.length;pt++){const Ot=Y[pt].image[et].image;kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Ot.width,Ot.height,It,xt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Vt,Ot.width,Ot.height,0,It,xt,Ot.data)}}else{kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,It,xt,vt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,It,xt,vt[et]);for(let pt=0;pt<Y.length;pt++){const ft=Y[pt];kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,It,xt,ft.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Vt,It,xt,ft.image[et])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),K.__version=it.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function _t(A,b,G,tt,it,K){const bt=s.convert(G.format,G.colorSpace),ut=s.convert(G.type),mt=E(G.internalFormat,bt,ut,G.colorSpace),Xt=n.get(b),st=n.get(G);if(st.__renderTarget=b,!Xt.__hasExternalTextures){const vt=Math.max(1,b.width>>K),Rt=Math.max(1,b.height>>K);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,K,mt,vt,Rt,b.depth,0,bt,ut,null):e.texImage2D(it,K,mt,vt,Rt,0,bt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Gt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,st.__webglTexture,0,Lt(b)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,st.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function C(A,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const tt=b.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,K=v(b.stencilBuffer,it),bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Lt(b);Gt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,K,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,A)}else{const tt=b.textures;for(let it=0;it<tt.length;it++){const K=tt[it],bt=s.convert(K.format,K.colorSpace),ut=s.convert(K.type),mt=E(K.internalFormat,bt,ut,K.colorSpace),Xt=Lt(b);G&&Gt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,mt,b.width,b.height):Gt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,mt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,mt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function k(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(b.depthTexture);tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const it=tt.__webglTexture,K=Lt(b);if(b.depthTexture.format===Hi)Gt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(b.depthTexture.format===Ji)Gt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Q(A){const b=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const tt=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){const it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=tt}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");k(b.__webglFramebuffer,A)}else if(G){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=i.createRenderbuffer(),C(b.__webglDepthbuffer[tt],A,!1);else{const it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),C(b.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(A,b,G){const tt=n.get(A);b!==void 0&&_t(tt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Q(A)}function Tt(A){const b=A.texture,G=n.get(A),tt=n.get(b);A.addEventListener("dispose",w);const it=A.textures,K=A.isWebGLCubeRenderTarget===!0,bt=it.length>1;if(bt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=b.version,a.memory.textures++),K){G.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ut]=[];for(let mt=0;mt<b.mipmaps.length;mt++)G.__webglFramebuffer[ut][mt]=i.createFramebuffer()}else G.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)G.__webglFramebuffer[ut]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ut=0,mt=it.length;ut<mt;ut++){const Xt=n.get(it[ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Gt(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const mt=it[ut];G.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ut]);const Xt=s.convert(mt.format,mt.colorSpace),st=s.convert(mt.type),vt=E(mt.internalFormat,Xt,st,mt.colorSpace,A.isXRRenderTarget===!0),Rt=Lt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,vt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,G.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),C(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),wt(i.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)_t(G.__webglFramebuffer[ut][mt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else _t(G.__webglFramebuffer[ut],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ut=0,mt=it.length;ut<mt;ut++){const Xt=it[ut],st=n.get(Xt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),wt(i.TEXTURE_2D,Xt),_t(G.__webglFramebuffer,A,Xt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Xt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,tt.__webglTexture),wt(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)_t(G.__webglFramebuffer[mt],A,b,i.COLOR_ATTACHMENT0,ut,mt);else _t(G.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ut,0);m(b)&&p(ut),e.unbindTexture()}A.depthBuffer&&Q(A)}function ct(A){const b=A.textures;for(let G=0,tt=b.length;G<tt;G++){const it=b[G];if(m(it)){const K=M(A),bt=n.get(it).__webglTexture;e.bindTexture(K,bt),p(K),e.unbindTexture()}}}const Bt=[],N=[];function ce(A){if(A.samples>0){if(Gt(A)===!1){const b=A.textures,G=A.width,tt=A.height;let it=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(A),ut=b.length>1;if(ut)for(let mt=0;mt<b.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<b.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Xt=n.get(b[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,G,tt,0,0,G,tt,it,i.NEAREST),c===!0&&(Bt.length=0,N.length=0,Bt.push(i.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Bt.push(K),N.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<b.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Xt=n.get(b[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Lt(A){return Math.min(r.maxSamples,A.samples)}function Gt(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ct(A){const b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function re(A,b){const G=A.colorSpace,tt=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ji&&G!==Hn&&(qt.getTransfer(G)===te?(tt!==Je||it!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function At(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=F,this.setTextureCube=U,this.rebindTextures=Z,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Gt}function Z0(i,t){function e(n,r=Hn){let s;const a=qt.getTransfer(r);if(n===Rn)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return i.BYTE;if(n===Il)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Er)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===Nl)return i.RGB;if(n===Je)return i.RGBA;if(n===Fl)return i.LUMINANCE;if(n===Ol)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Ss)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===as||n===os||n===cs||n===ls)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===as)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===as)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===La||n===Ia||n===Da)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Na||n===Fa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ua||n===Na)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oa||n===za||n===Ba||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===$a||n===Ya||n===Ja||n===Ka)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hs||n===Za||n===ja)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===hs)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===Qa||n===to||n===eo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===hs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class j0 extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class li extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q0={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new be,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qn({vertexShader:tg,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ig extends Qi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new ng,m=e.getContextAttributes();let p=null,M=null;const E=[],v=[],P=new gt;let S=null;const w=new $e;w.viewport=new he;const R=new $e;R.viewport=new he;const y=[w,R],x=new j0;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=E[J];return rt===void 0&&(rt=new oa,E[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=E[J];return rt===void 0&&(rt=new oa,E[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=E[J];return rt===void 0&&(rt=new oa,E[J]=rt),rt.getHandSpace()};function D(J){const rt=v.indexOf(J.inputSource);if(rt===-1)return;const _t=E[rt];_t!==void 0&&(_t.update(J.inputSource,J.frame,l||a),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",j);for(let J=0;J<E.length;J++){const rt=v[J];rt!==null&&(v[J]=null,E[J].disconnect(rt))}L=null,H=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,r=null,M=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",V),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new gi(d.framebufferWidth,d.framebufferHeight,{format:Je,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,_t=null,C=null;m.depth&&(C=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Ji:Hi,_t=m.stencil?Yi:mi);const k={colorFormat:e.RGBA8,depthFormat:C,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(k),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new gi(f.textureWidth,f.textureHeight,{format:Je,type:Rn,depthTexture:new Ql(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Wt.setContext(r),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(J){for(let rt=0;rt<J.removed.length;rt++){const _t=J.removed[rt],C=v.indexOf(_t);C>=0&&(v[C]=null,E[C].disconnect(_t))}for(let rt=0;rt<J.added.length;rt++){const _t=J.added[rt];let C=v.indexOf(_t);if(C===-1){for(let Q=0;Q<E.length;Q++)if(Q>=v.length){v.push(_t),C=Q;break}else if(v[Q]===null){v[Q]=_t,C=Q;break}if(C===-1)break}const k=E[C];k&&k.connect(_t)}}const q=new I,F=new I;function U(J,rt,_t){q.setFromMatrixPosition(rt.matrixWorld),F.setFromMatrixPosition(_t.matrixWorld);const C=q.distanceTo(F),k=rt.projectionMatrix.elements,Q=_t.projectionMatrix.elements,Z=k[14]/(k[10]-1),Tt=k[14]/(k[10]+1),ct=(k[9]+1)/k[5],Bt=(k[9]-1)/k[5],N=(k[8]-1)/k[0],ce=(Q[8]+1)/Q[0],Lt=Z*N,Gt=Z*ce,Ct=C/(-N+ce),re=Ct*-N;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(re),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),k[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const At=Z+Ct,A=Tt+Ct,b=Lt-re,G=Gt+(C-re),tt=ct*Tt/A*At,it=Bt*Tt/A*At;J.projectionMatrix.makePerspective(b,G,tt,it,At,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function $(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let rt=J.near,_t=J.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),x.near=R.near=w.near=rt,x.far=R.far=w.far=_t,(L!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,H=x.far),w.layers.mask=J.layers.mask|2,R.layers.mask=J.layers.mask|4,x.layers.mask=w.layers.mask|R.layers.mask;const C=J.parent,k=x.cameras;$(x,C);for(let Q=0;Q<k.length;Q++)$(k[Q],C);k.length===2?U(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),nt(J,x,C)};function nt(J,rt,_t){_t===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=no*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ht=null;function wt(J,rt){if(u=rt.getViewerPose(l||a),g=rt,u!==null){const _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let C=!1;_t.length!==x.cameras.length&&(x.cameras.length=0,C=!0);for(let Q=0;Q<_t.length;Q++){const Z=_t[Q];let Tt=null;if(d!==null)Tt=d.getViewport(Z);else{const Bt=h.getViewSubImage(f,Z);Tt=Bt.viewport,Q===0&&(t.setRenderTargetTextures(M,Bt.colorTexture,f.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(M))}let ct=y[Q];ct===void 0&&(ct=new $e,ct.layers.enable(Q),ct.viewport=new he,y[Q]=ct),ct.matrix.fromArray(Z.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Z.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Q===0&&(x.matrix.copy(ct.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),C===!0&&x.cameras.push(ct)}const k=r.enabledFeatures;if(k&&k.includes("depth-sensing")){const Q=h.getDepthInformation(_t[0]);Q&&Q.isValid&&Q.texture&&_.init(t,Q,r.renderState)}}for(let _t=0;_t<E.length;_t++){const C=v[_t],k=E[_t];C!==null&&k!==void 0&&k.update(C,rt,l||a)}ht&&ht(J,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Wt=new Zl;Wt.setAnimationLoop(wt),this.setAnimationLoop=function(J){ht=J},this.dispose=function(){}}}const ei=new Ce,rg=new $t;function sg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),E=M.envMap,v=M.envMapRotation;E&&(m.envMap.value=E,ei.copy(v),ei.x*=-1,ei.y*=-1,ei.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler(ei)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ag(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,E){const v=E.program;n.uniformBlockBinding(M,v)}function l(M,E){let v=r[M.id];v===void 0&&(g(M),v=u(M),r[M.id]=v,M.addEventListener("dispose",m));const P=E.program;n.updateUBOMapping(M,P);const S=t.render.frame;s[M.id]!==S&&(f(M),s[M.id]=S)}function u(M){const E=h();M.__bindingPointIndex=E;const v=i.createBuffer(),P=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const E=r[M.id],v=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let S=0,w=v.length;S<w;S++){const R=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,x=R.length;y<x;y++){const L=R[y];if(d(L,S,y,P)===!0){const H=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let j=0;j<D.length;j++){const q=D[j],F=_(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,H+V,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,E,v,P){const S=M.value,w=E+"_"+v;if(P[w]===void 0)return typeof S=="number"||typeof S=="boolean"?P[w]=S:P[w]=S.clone(),!0;{const R=P[w];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return P[w]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(M){const E=M.uniforms;let v=0;const P=16;for(let w=0,R=E.length;w<R;w++){const y=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,L=y.length;x<L;x++){const H=y[x],D=Array.isArray(H.value)?H.value:[H.value];for(let V=0,j=D.length;V<j;V++){const q=D[V],F=_(q),U=v%P,$=U%F.boundary,nt=U+$;v+=$,nt!==0&&P-nt<F.storage&&(v+=P-nt),H.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=F.storage}}}const S=v%P;return S>0&&(v+=P-S),M.__size=v,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class og{constructor(t={}){const{canvas:e=$u(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=Wn,this.toneMappingExposure=1;const v=this;let P=!1,S=0,w=0,R=null,y=-1,x=null;const L=new he,H=new he;let D=null;const V=new Nt(0);let j=0,q=e.width,F=e.height,U=1,$=null,nt=null;const ht=new he(0,0,q,F),wt=new he(0,0,q,F);let Wt=!1;const J=new So;let rt=!1,_t=!1;const C=new $t,k=new $t,Q=new I,Z=new he,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Bt(){return R===null?U:1}let N=n;function ce(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uo}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const z="webgl2";if(N=ce(z,T),N===null)throw ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Lt,Gt,Ct,re,At,A,b,G,tt,it,K,bt,ut,mt,Xt,st,vt,Rt,It,xt,Vt,kt,ne,O;function lt(){Lt=new fm(N),Lt.init(),kt=new Z0(N,Lt),Gt=new am(N,Lt,t,kt),Ct=new Y0(N,Lt),Gt.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),re=new mm(N),At=new D0,A=new K0(N,Lt,Ct,At,Gt,kt,re),b=new cm(v),G=new um(v),tt=new yf(N),ne=new rm(N,tt),it=new dm(N,tt,re,ne),K=new _m(N,it,tt,re),It=new gm(N,Gt,A),st=new om(At),bt=new I0(v,b,G,Lt,Gt,ne,st),ut=new sg(v,At),mt=new N0,Xt=new H0(Lt),Rt=new im(v,b,G,Ct,K,d,c),vt=new q0(v,K,Gt),O=new ag(N,re,Gt,Ct),xt=new sm(N,Lt,re),Vt=new pm(N,Lt,re),re.programs=bt.programs,v.capabilities=Gt,v.extensions=Lt,v.properties=At,v.renderLists=mt,v.shadowMap=vt,v.state=Ct,v.info=re}lt();const Y=new ig(v,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(q,F,!1))},this.getSize=function(T){return T.set(q,F)},this.setSize=function(T,z,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,F=z,e.width=Math.floor(T*U),e.height=Math.floor(z*U),W===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(q*U,F*U).floor()},this.setDrawingBufferSize=function(T,z,W){q=T,F=z,U=W,e.width=Math.floor(T*W),e.height=Math.floor(z*W),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ht)},this.setViewport=function(T,z,W,X){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,z,W,X),Ct.viewport(L.copy(ht).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(wt)},this.setScissor=function(T,z,W,X){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,z,W,X),Ct.scissor(H.copy(wt).multiplyScalar(U).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(T){Ct.setScissorTest(Wt=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){nt=T},this.getClearColor=function(T){return T.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(T=!0,z=!0,W=!0){let X=0;if(T){let B=!1;if(R!==null){const at=R.texture.format;B=at===xo||at===vo||at===_o}if(B){const at=R.texture.type,dt=at===Rn||at===mi||at===yr||at===Yi||at===mo||at===go,Mt=Rt.getClearColor(),St=Rt.getClearAlpha(),Dt=Mt.r,zt=Mt.g,yt=Mt.b;dt?(g[0]=Dt,g[1]=zt,g[2]=yt,g[3]=St,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Dt,_[1]=zt,_[2]=yt,_[3]=St,N.clearBufferiv(N.COLOR,0,_))}else X|=N.COLOR_BUFFER_BIT}z&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),mt.dispose(),Xt.dispose(),At.dispose(),b.dispose(),G.dispose(),K.dispose(),ne.dispose(),O.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Oo),Y.removeEventListener("sessionend",zo),Jn.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=re.autoReset,z=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,B=vt.type;lt(),re.autoReset=T,vt.enabled=z,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=B}function ft(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ot(T){const z=T.target;z.removeEventListener("dispose",Ot),le(z)}function le(T){Te(T),At.remove(T)}function Te(T){const z=At.get(T).programs;z!==void 0&&(z.forEach(function(W){bt.releaseProgram(W)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,W,X,B,at){z===null&&(z=Tt);const dt=B.isMesh&&B.matrixWorld.determinant()<0,Mt=Mh(T,z,W,X,B);Ct.setMaterial(X,dt);let St=W.index,Dt=1;if(X.wireframe===!0){if(St=it.getWireframeAttribute(W),St===void 0)return;Dt=2}const zt=W.drawRange,yt=W.attributes.position;let Yt=zt.start*Dt,ie=(zt.start+zt.count)*Dt;at!==null&&(Yt=Math.max(Yt,at.start*Dt),ie=Math.min(ie,(at.start+at.count)*Dt)),St!==null?(Yt=Math.max(Yt,0),ie=Math.min(ie,St.count)):yt!=null&&(Yt=Math.max(Yt,0),ie=Math.min(ie,yt.count));const se=ie-Yt;if(se<0||se===1/0)return;ne.setup(B,X,Mt,W,St);let De,Kt=xt;if(St!==null&&(De=tt.get(St),Kt=Vt,Kt.setIndex(De)),B.isMesh)X.wireframe===!0?(Ct.setLineWidth(X.wireframeLinewidth*Bt()),Kt.setMode(N.LINES)):Kt.setMode(N.TRIANGLES);else if(B.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),Ct.setLineWidth(Et*Bt()),B.isLineSegments?Kt.setMode(N.LINES):B.isLineLoop?Kt.setMode(N.LINE_LOOP):Kt.setMode(N.LINE_STRIP)}else B.isPoints?Kt.setMode(N.POINTS):B.isSprite&&Kt.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Kt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Et=B._multiDrawStarts,_n=B._multiDrawCounts,Zt=B._multiDrawCount,Ze=St?tt.get(St).bytesPerElement:1,xi=At.get(X).currentProgram.getUniforms();for(let Ne=0;Ne<Zt;Ne++)xi.setValue(N,"_gl_DrawID",Ne),Kt.render(Et[Ne]/Ze,_n[Ne])}else if(B.isInstancedMesh)Kt.renderInstances(Yt,se,B.count);else if(W.isInstancedBufferGeometry){const Et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_n=Math.min(W.instanceCount,Et);Kt.renderInstances(Yt,se,_n)}else Kt.render(Yt,se)};function jt(T,z,W){T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=Re,T.needsUpdate=!0,Ir(T,z,W),T.side=Xn,T.needsUpdate=!0,Ir(T,z,W),T.side=en):Ir(T,z,W)}this.compile=function(T,z,W=null){W===null&&(W=T),p=Xt.get(W),p.init(z),E.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const at=B.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){const Mt=at[dt];jt(Mt,W,B),X.add(Mt)}else jt(at,W,B),X.add(at)}),E.pop(),p=null,X},this.compileAsync=function(T,z,W=null){const X=this.compile(T,z,W);return new Promise(B=>{function at(){if(X.forEach(function(dt){At.get(dt).currentProgram.isReady()&&X.delete(dt)}),X.size===0){B(T);return}setTimeout(at,10)}Lt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Ke=null;function gn(T){Ke&&Ke(T)}function Oo(){Jn.stop()}function zo(){Jn.start()}const Jn=new Zl;Jn.setAnimationLoop(gn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(T){Ke=T,Y.setAnimationLoop(T),T===null?Jn.stop():Jn.start()},Y.addEventListener("sessionstart",Oo),Y.addEventListener("sessionend",zo),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,z,R),p=Xt.get(T,E.length),p.init(z),E.push(p),k.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),J.setFromProjectionMatrix(k),_t=this.localClippingEnabled,rt=st.init(this.clippingPlanes,_t),m=mt.get(T,M.length),m.init(),M.push(m),Y.enabled===!0&&Y.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&As(at,z,-1/0,v.sortObjects)}As(T,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,nt),ct=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ct&&Rt.addToRenderList(m,T),this.info.render.frame++,rt===!0&&st.beginShadows();const W=p.state.shadowsArray;vt.render(W,T,z),rt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(p.setupLights(),z.isArrayCamera){const at=z.cameras;if(B.length>0)for(let dt=0,Mt=at.length;dt<Mt;dt++){const St=at[dt];ko(X,B,T,St)}ct&&Rt.render(T);for(let dt=0,Mt=at.length;dt<Mt;dt++){const St=at[dt];Bo(m,T,St,St.viewport)}}else B.length>0&&ko(X,B,T,z),ct&&Rt.render(T),Bo(m,T,z);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,z),ne.resetDefaultState(),y=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],rt===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function As(T,z,W,X){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){X&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const dt=K.update(T),Mt=T.material;Mt.visible&&m.push(T,dt,Mt,W,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const dt=K.update(T),Mt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Z.copy(T.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Z.copy(dt.boundingSphere.center)),Z.applyMatrix4(T.matrixWorld).applyMatrix4(k)),Array.isArray(Mt)){const St=dt.groups;for(let Dt=0,zt=St.length;Dt<zt;Dt++){const yt=St[Dt],Yt=Mt[yt.materialIndex];Yt&&Yt.visible&&m.push(T,dt,Yt,W,Z.z,yt)}}else Mt.visible&&m.push(T,dt,Mt,W,Z.z,null)}}const at=T.children;for(let dt=0,Mt=at.length;dt<Mt;dt++)As(at[dt],z,W,X)}function Bo(T,z,W,X){const B=T.opaque,at=T.transmissive,dt=T.transparent;p.setupLightsView(W),rt===!0&&st.setGlobalState(v.clippingPlanes,W),X&&Ct.viewport(L.copy(X)),B.length>0&&Lr(B,z,W),at.length>0&&Lr(at,z,W),dt.length>0&&Lr(dt,z,W),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ko(T,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new gi(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Er:Rn,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const at=p.state.transmissionRenderTarget[X.id],dt=X.viewport||L;at.setSize(dt.z,dt.w);const Mt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(V),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),ct&&Rt.render(W);const St=v.toneMapping;v.toneMapping=Wn;const Dt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),rt===!0&&st.setGlobalState(v.clippingPlanes,X),Lr(T,W,X),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let yt=0,Yt=z.length;yt<Yt;yt++){const ie=z[yt],se=ie.object,De=ie.geometry,Kt=ie.material,Et=ie.group;if(Kt.side===en&&se.layers.test(X.layers)){const _n=Kt.side;Kt.side=Re,Kt.needsUpdate=!0,Ho(se,W,X,De,Kt,Et),Kt.side=_n,Kt.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}v.setRenderTarget(Mt),v.setClearColor(V,j),Dt!==void 0&&(X.viewport=Dt),v.toneMapping=St}function Lr(T,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let B=0,at=T.length;B<at;B++){const dt=T[B],Mt=dt.object,St=dt.geometry,Dt=X===null?dt.material:X,zt=dt.group;Mt.layers.test(W.layers)&&Ho(Mt,z,W,St,Dt,zt)}}function Ho(T,z,W,X,B,at){T.onBeforeRender(v,z,W,X,B,at),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,z,W,X,T,at),B.transparent===!0&&B.side===en&&B.forceSinglePass===!1?(B.side=Re,B.needsUpdate=!0,v.renderBufferDirect(W,z,X,B,T,at),B.side=Xn,B.needsUpdate=!0,v.renderBufferDirect(W,z,X,B,T,at),B.side=en):v.renderBufferDirect(W,z,X,B,T,at),T.onAfterRender(v,z,W,X,B,at)}function Ir(T,z,W){z.isScene!==!0&&(z=Tt);const X=At.get(T),B=p.state.lights,at=p.state.shadowsArray,dt=B.state.version,Mt=bt.getParameters(T,B.state,at,z,W),St=bt.getProgramCacheKey(Mt);let Dt=X.programs;X.environment=T.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(T.isMeshStandardMaterial?G:b).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",Ot),Dt=new Map,X.programs=Dt);let zt=Dt.get(St);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===dt)return Vo(T,Mt),zt}else Mt.uniforms=bt.getUniforms(T),T.onBeforeCompile(Mt,v),zt=bt.acquireProgram(Mt,St),Dt.set(St,zt),X.uniforms=Mt.uniforms;const yt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(yt.clippingPlanes=st.uniform),Vo(T,Mt),X.needsLights=yh(T),X.lightsStateVersion=dt,X.needsLights&&(yt.ambientLightColor.value=B.state.ambient,yt.lightProbe.value=B.state.probe,yt.directionalLights.value=B.state.directional,yt.directionalLightShadows.value=B.state.directionalShadow,yt.spotLights.value=B.state.spot,yt.spotLightShadows.value=B.state.spotShadow,yt.rectAreaLights.value=B.state.rectArea,yt.ltc_1.value=B.state.rectAreaLTC1,yt.ltc_2.value=B.state.rectAreaLTC2,yt.pointLights.value=B.state.point,yt.pointLightShadows.value=B.state.pointShadow,yt.hemisphereLights.value=B.state.hemi,yt.directionalShadowMap.value=B.state.directionalShadowMap,yt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,yt.spotShadowMap.value=B.state.spotShadowMap,yt.spotLightMatrix.value=B.state.spotLightMatrix,yt.spotLightMap.value=B.state.spotLightMap,yt.pointShadowMap.value=B.state.pointShadowMap,yt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function Go(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=us.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Vo(T,z){const W=At.get(T);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Mh(T,z,W,X,B){z.isScene!==!0&&(z=Tt),A.resetTextureUnits();const at=z.fog,dt=X.isMeshStandardMaterial?z.environment:null,Mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ji,St=(X.isMeshStandardMaterial?G:b).get(X.envMap||dt),Dt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,zt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),yt=!!W.morphAttributes.position,Yt=!!W.morphAttributes.normal,ie=!!W.morphAttributes.color;let se=Wn;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(se=v.toneMapping);const De=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=De!==void 0?De.length:0,Et=At.get(X),_n=p.state.lights;if(rt===!0&&(_t===!0||T!==x)){const We=T===x&&X.id===y;st.setState(X,T,We)}let Zt=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==_n.state.version||Et.outputColorSpace!==Mt||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==St||X.fog===!0&&Et.fog!==at||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==st.numPlanes||Et.numIntersection!==st.numIntersection)||Et.vertexAlphas!==Dt||Et.vertexTangents!==zt||Et.morphTargets!==yt||Et.morphNormals!==Yt||Et.morphColors!==ie||Et.toneMapping!==se||Et.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,Et.__version=X.version);let Ze=Et.currentProgram;Zt===!0&&(Ze=Ir(X,z,B));let xi=!1,Ne=!1,nr=!1;const ae=Ze.getUniforms(),on=Et.uniforms;if(Ct.useProgram(Ze.program)&&(xi=!0,Ne=!0,nr=!0),X.id!==y&&(y=X.id,Ne=!0),xi||x!==T){Ct.buffers.depth.getReversed()?(C.copy(T.projectionMatrix),Ju(C),Ku(C),ae.setValue(N,"projectionMatrix",C)):ae.setValue(N,"projectionMatrix",T.projectionMatrix),ae.setValue(N,"viewMatrix",T.matrixWorldInverse);const In=ae.map.cameraPosition;In!==void 0&&In.setValue(N,Q.setFromMatrixPosition(T.matrixWorld)),Gt.logarithmicDepthBuffer&&ae.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ae.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Ne=!0,nr=!0)}if(B.isSkinnedMesh){ae.setOptional(N,B,"bindMatrix"),ae.setOptional(N,B,"bindMatrixInverse");const We=B.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),ae.setValue(N,"boneTexture",We.boneTexture,A))}B.isBatchedMesh&&(ae.setOptional(N,B,"batchingTexture"),ae.setValue(N,"batchingTexture",B._matricesTexture,A),ae.setOptional(N,B,"batchingIdTexture"),ae.setValue(N,"batchingIdTexture",B._indirectTexture,A),ae.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&ae.setValue(N,"batchingColorTexture",B._colorsTexture,A));const ir=W.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&It.update(B,W,Ze),(Ne||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,ae.setValue(N,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(on.envMap.value=St,on.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(on.envMapIntensity.value=z.environmentIntensity),Ne&&(ae.setValue(N,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&Sh(on,nr),at&&X.fog===!0&&ut.refreshFogUniforms(on,at),ut.refreshMaterialUniforms(on,X,U,F,p.state.transmissionRenderTarget[T.id]),us.upload(N,Go(Et),on,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(us.upload(N,Go(Et),on,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ae.setValue(N,"center",B.center),ae.setValue(N,"modelViewMatrix",B.modelViewMatrix),ae.setValue(N,"normalMatrix",B.normalMatrix),ae.setValue(N,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const We=X.uniformsGroups;for(let In=0,Dn=We.length;In<Dn;In++){const Wo=We[In];O.update(Wo,Ze),O.bind(Wo,Ze)}}return Ze}function Sh(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function yh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,W){At.get(T.texture).__webglTexture=z,At.get(T.depthTexture).__webglTexture=W;const X=At.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const W=At.get(T);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,W=0){R=T,S=z,w=W;let X=!0,B=null,at=!1,dt=!1;if(T){const St=At.get(T);if(St.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(St.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(St.__hasExternalTextures)A.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const yt=T.depthTexture;if(St.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(T.width!==yt.image.width||T.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(dt=!0);const zt=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?B=zt[z][W]:B=zt[z],at=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?B=At.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[W]:B=zt,L.copy(T.viewport),H.copy(T.scissor),D=T.scissorTest}else L.copy(ht).multiplyScalar(U).floor(),H.copy(wt).multiplyScalar(U).floor(),D=Wt;if(Ct.bindFramebuffer(N.FRAMEBUFFER,B)&&X&&Ct.drawBuffers(T,B),Ct.viewport(L),Ct.scissor(H),Ct.setScissorTest(D),at){const St=At.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,St.__webglTexture,W)}else if(dt){const St=At.get(T.texture),Dt=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.__webglTexture,W||0,Dt)}y=-1},this.readRenderTargetPixels=function(T,z,W,X,B,at,dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Ct.bindFramebuffer(N.FRAMEBUFFER,Mt);try{const St=T.texture,Dt=St.format,zt=St.type;if(!Gt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-X&&W>=0&&W<=T.height-B&&N.readPixels(z,W,X,B,kt.convert(Dt),kt.convert(zt),at)}finally{const St=R!==null?At.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(T,z,W,X,B,at,dt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const St=T.texture,Dt=St.format,zt=St.type;if(!Gt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-X&&W>=0&&W<=T.height-B){Ct.bindFramebuffer(N.FRAMEBUFFER,Mt);const yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.bufferData(N.PIXEL_PACK_BUFFER,at.byteLength,N.STREAM_READ),N.readPixels(z,W,X,B,kt.convert(Dt),kt.convert(zt),0);const Yt=R!==null?At.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,Yt);const ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yu(N,ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,at),N.deleteBuffer(yt),N.deleteSync(ie),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,W=0){T.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(T.image.width*X),at=Math.floor(T.image.height*X),dt=z!==null?z.x:0,Mt=z!==null?z.y:0;A.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,dt,Mt,B,at),Ct.unbindTexture()},this.copyTextureToTexture=function(T,z,W=null,X=null,B=0){T.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],z=arguments[2],B=arguments[3]||0,W=null);let at,dt,Mt,St,Dt,zt,yt,Yt,ie;const se=T.isCompressedTexture?T.mipmaps[B]:T.image;W!==null?(at=W.max.x-W.min.x,dt=W.max.y-W.min.y,Mt=W.isBox3?W.max.z-W.min.z:1,St=W.min.x,Dt=W.min.y,zt=W.isBox3?W.min.z:0):(at=se.width,dt=se.height,Mt=se.depth||1,St=0,Dt=0,zt=0),X!==null?(yt=X.x,Yt=X.y,ie=X.z):(yt=0,Yt=0,ie=0);const De=kt.convert(z.format),Kt=kt.convert(z.type);let Et;z.isData3DTexture?(A.setTexture3D(z,0),Et=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(A.setTexture2DArray(z,0),Et=N.TEXTURE_2D_ARRAY):(A.setTexture2D(z,0),Et=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const _n=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ze=N.getParameter(N.UNPACK_SKIP_PIXELS),xi=N.getParameter(N.UNPACK_SKIP_ROWS),Ne=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,St),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zt);const nr=T.isDataArrayTexture||T.isData3DTexture,ae=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const on=At.get(T),ir=At.get(z),We=At.get(on.__renderTarget),In=At.get(ir.__renderTarget);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,We.__webglFramebuffer),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Dn=0;Dn<Mt;Dn++)nr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(T).__webglTexture,B,zt+Dn),T.isDepthTexture?(ae&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(z).__webglTexture,B,ie+Dn),N.blitFramebuffer(St,Dt,at,dt,yt,Yt,at,dt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ae?N.copyTexSubImage3D(Et,B,yt,Yt,ie+Dn,St,Dt,at,dt):N.copyTexSubImage2D(Et,B,yt,Yt,ie+Dn,St,Dt,at,dt);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ae?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Et,B,yt,Yt,ie,at,dt,Mt,De,Kt,se.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,B,yt,Yt,ie,at,dt,Mt,De,se.data):N.texSubImage3D(Et,B,yt,Yt,ie,at,dt,Mt,De,Kt,se):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,yt,Yt,at,dt,De,Kt,se.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,yt,Yt,se.width,se.height,De,se.data):N.texSubImage2D(N.TEXTURE_2D,B,yt,Yt,at,dt,De,Kt,se);N.pixelStorei(N.UNPACK_ROW_LENGTH,_n),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,xi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne),B===0&&z.generateMipmaps&&N.generateMipmap(Et),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,z,W=null,X=null,B=0){return T.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],z=arguments[3],B=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,W,X,B)},this.initRenderTarget=function(T){At.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){S=0,w=0,R=null,Ct.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class gs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new gs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ce,this.environmentIntensity=1,this.environmentRotation=new Ce,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bo extends be{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Pe,u=Pe,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n extends fe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ui=new $t,Kc=new $t,ts=[],Zc=new vi,lg=new $t,hr=new _e,ur=new wr;class rh extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $n(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,lg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),Zc.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Zc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),ur.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ui),Kc.multiplyMatrices(n,Ui),hr.matrixWorld=Kc,hr.raycast(t,ts);for(let a=0,o=ts.length;a<o;a++){const c=ts[a];c.instanceId=s,c.object=this,e.push(c)}ts.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $n(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new bo(new Float32Array(r*this.count),r,this.count,Ss,rn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ar extends be{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new gt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,r=[],s=[],a=[],o=new I,c=new $t;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new I)}s[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ye(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(ye(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Eo extends mn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new gt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hg extends Eo{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function To(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const es=new I,ca=new To,la=new To,ha=new To;class ug extends mn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new I){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(es.subVectors(r[0],r[1]).add(r[0]),l=es);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(es.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=es),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ca.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),la.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),ha.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),la.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),ha.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ca.calc(c),la.calc(c),ha.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function fg(i,t){const e=1-i;return e*e*t}function dg(i,t){return 2*(1-i)*i*t}function pg(i,t){return i*i*t}function vr(i,t,e,n){return fg(i,t)+dg(i,e)+pg(i,n)}function mg(i,t){const e=1-i;return e*e*e*t}function gg(i,t){const e=1-i;return 3*e*e*i*t}function _g(i,t){return 3*(1-i)*i*i*t}function vg(i,t){return i*i*i*t}function xr(i,t,e,n,r){return mg(i,t)+gg(i,e)+_g(i,n)+vg(i,r)}class sh extends mn{constructor(t=new gt,e=new gt,n=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,r.x,s.x,a.x,o.x),xr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xg extends mn{constructor(t=new I,e=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,r.x,s.x,a.x,o.x),xr(t,r.y,s.y,a.y,o.y),xr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ah extends mn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mg extends mn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oh extends mn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(vr(t,r.x,s.x,a.x),vr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sg extends mn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(vr(t,r.x,s.x,a.x),vr(t,r.y,s.y,a.y),vr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ch extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(jc(o,c.x,l.x,u.x,h.x),jc(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new gt().fromArray(r))}return this}}var Qc=Object.freeze({__proto__:null,ArcCurve:hg,CatmullRomCurve3:ug,CubicBezierCurve:sh,CubicBezierCurve3:xg,EllipseCurve:Eo,LineCurve:ah,LineCurve3:Mg,QuadraticBezierCurve:oh,QuadraticBezierCurve3:Sg,SplineCurve:ch});class yg extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Qc[r.type]().fromJSON(r))}return this}}class bg extends yg{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ah(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new oh(this.currentPoint.clone(),new gt(t,e),new gt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new sh(this.currentPoint.clone(),new gt(t,e),new gt(n,r),new gt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ch(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new Eo(t,e,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wo extends Ie{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=ye(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/e,h=new I,f=new gt,d=new I,g=new I,_=new I;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=e;M++){const E=n+M*u*r,v=Math.sin(E),P=Math.cos(E);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*v,h.y=t[S].y,h.z=t[S].x*P,a.push(h.x,h.y,h.z),f.x=M/e,f.y=S/(t.length-1),o.push(f.x,f.y);const w=c[3*S+0]*v,R=c[3*S+1],y=c[3*S+0]*P;l.push(w,R,y)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){const v=E+M*t.length,P=v,S=v+t.length,w=v+t.length+1,R=v+1;s.push(P,S,R),s.push(w,R,S)}this.setIndex(s),this.setAttribute("position",new oe(a,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.points,t.segments,t.phiStart,t.phiLength)}}class Ao extends wo{constructor(t=1,e=1,n=4,r=8){const s=new bg;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new Ao(t.radius,t.length,t.capSegments,t.radialSegments)}}class Cr extends Ie{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function M(){const v=new I,P=new I;let S=0;const w=(e-t)/n;for(let R=0;R<=s;R++){const y=[],x=R/s,L=x*(e-t)+t;for(let H=0;H<=r;H++){const D=H/r,V=D*c+o,j=Math.sin(V),q=Math.cos(V);P.x=L*j,P.y=-x*n+m,P.z=L*q,h.push(P.x,P.y,P.z),v.set(j,w,q).normalize(),f.push(v.x,v.y,v.z),d.push(D,1-x),y.push(g++)}_.push(y)}for(let R=0;R<r;R++)for(let y=0;y<s;y++){const x=_[y][R],L=_[y+1][R],H=_[y+1][R+1],D=_[y][R+1];(t>0||y!==0)&&(u.push(x,L,D),S+=3),(e>0||y!==s-1)&&(u.push(L,H,D),S+=3)}l.addGroup(p,S,0),p+=S}function E(v){const P=g,S=new gt,w=new I;let R=0;const y=v===!0?t:e,x=v===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const L=g;for(let H=0;H<=r;H++){const V=H/r*c+o,j=Math.cos(V),q=Math.sin(V);w.x=y*q,w.y=m*x,w.z=y*j,h.push(w.x,w.y,w.z),f.push(0,x,0),S.x=j*.5+.5,S.y=q*.5*x+.5,d.push(S.x,S.y),g++}for(let H=0;H<r;H++){const D=P+H,V=L+H;v===!0?u.push(V,V+1,D):u.push(V+1,V,D),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends Cr{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Co(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rr extends Ie{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const E=new I,v=new I,P=new I;for(let S=0;S<e.length;S+=3)d(e[S+0],E),d(e[S+1],v),d(e[S+2],P),c(E,v,P,M)}function c(M,E,v,P){const S=P+1,w=[];for(let R=0;R<=S;R++){w[R]=[];const y=M.clone().lerp(v,R/S),x=E.clone().lerp(v,R/S),L=S-R;for(let H=0;H<=L;H++)H===0&&R===S?w[R][H]=y:w[R][H]=y.clone().lerp(x,H/L)}for(let R=0;R<S;R++)for(let y=0;y<2*(S-R)-1;y++){const x=Math.floor(y/2);y%2===0?(f(w[R][x+1]),f(w[R+1][x]),f(w[R][x])):(f(w[R][x+1]),f(w[R+1][x+1]),f(w[R+1][x]))}}function l(M){const E=new I;for(let v=0;v<s.length;v+=3)E.x=s[v+0],E.y=s[v+1],E.z=s[v+2],E.normalize().multiplyScalar(M),s[v+0]=E.x,s[v+1]=E.y,s[v+2]=E.z}function u(){const M=new I;for(let E=0;E<s.length;E+=3){M.x=s[E+0],M.y=s[E+1],M.z=s[E+2];const v=m(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;a.push(v,1-P)}g(),h()}function h(){for(let M=0;M<a.length;M+=6){const E=a[M+0],v=a[M+2],P=a[M+4],S=Math.max(E,v,P),w=Math.min(E,v,P);S>.9&&w<.1&&(E<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),P<.2&&(a[M+4]+=1))}}function f(M){s.push(M.x,M.y,M.z)}function d(M,E){const v=M*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function g(){const M=new I,E=new I,v=new I,P=new I,S=new gt,w=new gt,R=new gt;for(let y=0,x=0;y<s.length;y+=9,x+=6){M.set(s[y+0],s[y+1],s[y+2]),E.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),S.set(a[x+0],a[x+1]),w.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),P.copy(M).add(E).add(v).divideScalar(3);const L=m(P);_(S,x+0,M,L),_(w,x+2,E,L),_(R,x+4,v,L)}}function _(M,E,v,P){P<0&&M.x===1&&(a[E]=M.x-1),v.x===0&&v.z===0&&(a[E]=P/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.vertices,t.indices,t.radius,t.details)}}class Pr extends Rr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pr(t.radius,t.detail)}}class Ts extends Rr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ts(t.radius,t.detail)}}class Ro extends Rr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ro(t.radius,t.detail)}}class Po extends Ie{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=t;const f=(e-t)/r,d=new I,g=new gt;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,E=M,v=M+n+1,P=M+n+2,S=M+1;o.push(E,v,S),o.push(v,P,S)}}this.setIndex(o),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ws extends Ie{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],E=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const S=P/e;h.x=-t*Math.cos(r+S*s)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(r+S*s)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(S+v,1-E),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const E=u[p][M+1],v=u[p][M],P=u[p+1][M],S=u[p+1][M+1];(p!==0||a>0)&&d.push(E,v,S),(p!==n-1||c<Math.PI)&&d.push(v,P,S)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zi extends Ie{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new I,h=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,M=(r+1)*d+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Eg extends tr{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Nt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Tn extends tr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const tl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Tg{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const wg=new Tg;class Lo{constructor(t){this.manager=t!==void 0?t:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ag extends Lo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=tl.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=br("img");function c(){u(),tl.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Cg extends Lo{constructor(t){super(t)}load(t,e,n,r){const s=new be,a=new Ag(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class lh extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Rg extends lh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ua=new $t,el=new I,nl=new I;class Pg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;el.setFromMatrixPosition(t.matrixWorld),e.position.copy(el),nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nl),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lg extends Pg{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ig extends lh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Lg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);const Be=(i,t=0,e=1)=>i<t?t:i>e?e:i,_i={outCubic:i=>1-(1-i)**3,inCubic:i=>i*i*i,inOutSine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+(1.70158+1)*(i-1)**3+1.70158*(i-1)**2,bump:i=>Math.sin(Math.PI*Be(i))};function Dg(i,t,e,n,r,s){s=Math.max(0,Math.min(s,n/2,r/2)),i.beginPath(),i.moveTo(t+s,e),i.arcTo(t+n,e,t+n,e+r,s),i.arcTo(t+n,e+r,t,e+r,s),i.arcTo(t,e+r,t,e,s),i.arcTo(t,e,t+n,e,s),i.closePath()}function _s(i,t,e,n,r,s,a,o,c=2){Dg(i,t,e,n,r,s),i.fillStyle=a,i.fill(),o&&(i.lineWidth=c,i.strokeStyle=o,i.stroke())}function hi(i,t,e,n,r,s,a="#221f2e",o="'Game Display', 'PingFang SC', sans-serif"){i.font=`${Math.round(r)}px ${o}`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=Math.max(2,r*.18),i.strokeStyle=a,i.strokeText(t,e,n+r*.04),i.fillStyle=s,i.fillText(t,e,n+r*.04)}function Oi(i){const t=Math.abs(i);return t<1e4?String(Math.round(i)):t<1e8?`${il(i/1e4)}万`:`${il(i/1e8)}亿`}const il=i=>Math.abs(i)>=100?String(Math.round(i)):i.toFixed(1).replace(/\.0$/,""),Mr=1024,Io=new WeakMap,hh=i=>Io.get(i);async function Ni(i,t){const[e,n]=await Promise.all([fetch(i).then(r=>{if(!r.ok)throw new Error(`${i}: ${r.status}`);return r.arrayBuffer()}),t?Ug(t):Promise.resolve(null)]);return Ng(e,n)}function Ug(i){return new Promise((t,e)=>new Cg().load(i,n=>{n.flipY=!1,n.colorSpace=me,n.anisotropy=4,n.needsUpdate=!0,t(n)},void 0,e))}function Ng(i,t){const e=new DataView(i);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="BAK1")throw new Error("not a baked model");const r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0),o=[16,20,24].map(v=>e.getFloat32(v,!0)),c=[28,32,36].map(v=>e.getFloat32(v,!0));let l=40;const u=new Uint16Array(i,l,a*r*3);l+=a*r*3*2;const h=new Int8Array(i,l,a*r*3);l+=a*r*3,l%2&&l++;const f=new Uint16Array(i,l,r*2);l+=r*4;const d=r>65535;d&&l%4&&(l+=4-l%4);const g=d?new Uint32Array(i,l,s).slice():new Uint16Array(i,l,s).slice(),_=(v,P)=>o[P%3]+u[v*r*3+P]/65535*c[P%3],m=new Ie,p=new Float32Array(r*3),M=new Float32Array(r*3);for(let v=0;v<r*3;v++)p[v]=_(0,v),M[v]=h[v]/127;m.setAttribute("position",new fe(p,3)),m.setAttribute("normal",new fe(M,3));const E=new Float32Array(r*2);for(let v=0;v<E.length;v++)E[v]=f[v]/65535;if(m.setAttribute("uv",new fe(E,2)),m.setIndex(new fe(g,1)),a>1){const v=r*a,P=Math.ceil(v/Mr),S=new Float32Array(Mr*P*4);for(let R=0;R<a;R++)for(let y=0;y<r;y++){const x=(R*r+y)*4,L=y*3;S[x]=_(R,L),S[x+1]=_(R,L+1),S[x+2]=_(R,L+2)}const w=new bo(S,Mr,P,Je,rn);w.minFilter=w.magFilter=Pe,w.needsUpdate=!0,Io.set(m,{texture:w,vertices:r,frames:a})}return m.computeBoundingSphere(),{geometry:m,texture:t,frames:a,size:new I(c[0],c[1],c[2])}}class Do{constructor(t,e,n=Io.get(t.geometry)){if(this.phase=new $n(new Float32Array(t.instanceMatrix.count),1),this.phase.setUsage(bs),t.geometry.setAttribute("aPhase",this.phase),!n||e<2)return;const r=t.material,s=r.onBeforeCompile.bind(r),a=r.customProgramCacheKey.bind(r);r.onBeforeCompile=(o,c)=>{s(o,c),o.uniforms.vatTex={value:n.texture},o.uniforms.vatV={value:n.vertices},o.uniforms.vatF={value:n.frames},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform highp sampler2D vatTex;
uniform int vatV;
uniform int vatF;
attribute float aPhase;
vec3 vatPos(int f) { int i = gl_VertexID + f * vatV; return texelFetch(vatTex, ivec2(i % ${Mr}, i / ${Mr}), 0).xyz; }`).replace("#include <begin_vertex>",`#include <begin_vertex>
{
  float ph = fract(aPhase) * float(vatF);
  int f0 = int(floor(ph));
  int f1 = f0 + 1 >= vatF ? 0 : f0 + 1;
  transformed = mix(vatPos(f0), vatPos(f1), ph - floor(ph));
}`)},r.customProgramCacheKey=()=>`${a()}|vat`,r.needsUpdate=!0}set(t,e){this.phase.setX(t,e-Math.floor(e))}done(){this.phase.needsUpdate=!0}}const ns=new Nt;function pe(i){let t=0,e=0;const n=i.map(E=>{const v=E.geo.index?E.geo:Fg(E.geo);return t+=v.attributes.position.count,e+=v.index.count,v}),r=new Float32Array(t*3),s=new Float32Array(t*3),a=new Float32Array(t*3),o=t>65535?new Uint32Array(e):new Uint16Array(e);let c=0,l=0;const u=new $t,h=new Ft,f=new sn,d=new Ce,g=new I,_=new I,m=new I,p=new I;i.forEach((E,v)=>{var x,L,H;const P=n[v];_.set(...(x=E.at)!=null?x:[0,0,0]),d.set(...(L=E.rot)!=null?L:[0,0,0]),f.setFromEuler(d);const S=(H=E.scale)!=null?H:1;typeof S=="number"?g.set(S,S,S):g.set(...S),u.compose(_,f,g),h.getNormalMatrix(u),ns.set(E.color).convertSRGBToLinear();const w=P.attributes.position,R=P.attributes.normal;for(let D=0;D<w.count;D++){m.fromBufferAttribute(w,D).applyMatrix4(u),p.fromBufferAttribute(R,D).applyMatrix3(h).normalize();const V=(c+D)*3;r[V]=m.x,r[V+1]=m.y,r[V+2]=m.z,s[V]=p.x,s[V+1]=p.y,s[V+2]=p.z,a[V]=ns.r,a[V+1]=ns.g,a[V+2]=ns.b}const y=P.index;for(let D=0;D<y.count;D++)o[l+D]=y.getX(D)+c;c+=w.count,l+=y.count});const M=new Ie;return M.setAttribute("position",new fe(r,3)),M.setAttribute("normal",new fe(s,3)),M.setAttribute("color",new fe(a,3)),M.setIndex(new fe(o,1)),M.computeBoundingSphere(),M}function Fg(i){const t=i.clone(),e=t.attributes.position.count,n=new Uint16Array(e);for(let r=0;r<e;r++)n[r]=r;return t.setIndex(new fe(n,1)),t}const Ut=(i=1,t=12,e=9)=>new ws(i,t,e),ui=(i,t,e=8)=>new Ao(i,t,3,e),ge=(i,t,e,n=10)=>new Cr(i,t,e,n),ee=(i,t,e=8)=>new Co(i,t,e),Jt=(i,t,e)=>new Ye(i,t,e),Og=(i,t=12)=>new ws(i,t,6,0,Math.PI*2,0,Math.PI/2),Bi={legL:1,legR:2,armL:3,armR:4};function Uo(i){var r;const t=pe(i),e=new Float32Array(t.attributes.position.count);let n=0;for(const s of i){const o=(s.geo.index,s.geo).attributes.position.count;e.fill((r=s.limb)!=null?r:0,n,n+o),n+=o}return t.setAttribute("aLimb",new fe(e,1)),t}function No(i,t,e=0){var l,u,h;const n={uTime:{value:0},uPhase:{value:0},uAmount:{value:1}},r=((l=t.swing)!=null?l:.7).toFixed(3),s=((u=t.arms)!=null?u:.6).toFixed(3),a=((h=t.rate)!=null?h:9).toFixed(3),o=i.onBeforeCompile;i.onBeforeCompile=(f,d)=>{o==null||o.call(i,f,d),Object.assign(f.uniforms,n);const g=`
attribute float aLimb;
${t.instanced?"attribute vec2 aGait;":""}
uniform float uTime;
uniform float uPhase;
uniform float uAmount;
vec3 gaitRot(vec3 v, bool isPoint) {
  float ph = ${t.instanced?"aGait.x":"uPhase"} + uTime * ${a};
  float amt = ${t.instanced?"aGait.y":"uAmount"};
  float s = sin(ph) * ${r} * amt;
  float a = 0.0;
  float py = 0.0;
  if (aLimb > 0.5 && aLimb < 1.5) { a = s; py = ${t.hip.toFixed(3)}; }
  else if (aLimb > 1.5 && aLimb < 2.5) { a = -s; py = ${t.hip.toFixed(3)}; }
  else if (aLimb > 2.5 && aLimb < 3.5) { a = -s * ${s}; py = ${t.shoulder.toFixed(3)}; }
  else if (aLimb > 3.5) { a = s * ${s}; py = ${t.shoulder.toFixed(3)}; }
  if (a == 0.0) return v;
  vec3 p = isPoint ? v - vec3(0.0, py, 0.0) : v;
  float c = cos(a), n = sin(a);
  p = vec3(p.x, p.y * c - p.z * n, p.y * n + p.z * c);
  return isPoint ? p + vec3(0.0, py, 0.0) : p;
}
`;f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
${g}`),f.vertexShader.includes("#include <beginnormal_vertex>")&&(f.vertexShader=f.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = gaitRot(objectNormal, false);`)),f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = gaitRot(transformed, true);${e?`
transformed += normalize(gaitRot(normal, false)) * ${e.toFixed(4)};`:""}`)};const c=i.customProgramCacheKey.bind(i);return i.customProgramCacheKey=()=>`${c()}|gait${t.instanced?"I":"U"}${r}${s}${a}${t.hip}${t.shoulder}${e}`,{uniforms:n}}function zg(i,t=.04,e="#221f2e"){const n=new Ln({color:e,side:Re});return{mat:n,gait:No(n,i,t)}}function uh(i){const t=new $n(new Float32Array(i.instanceMatrix.count*2),2);return t.setUsage(bs),i.geometry.setAttribute("aGait",t),t}const rl={hip:.85,shoulder:1.7,swing:.35,arms:.5,rate:3.2},Bg={skin:"#c9453a",dark:"#7a2420",belly:"#e0675a",cloth:"#3a2a24",horn:"#efe2c4",band:"#e0a832",eye:"#ffe066"},sl={skin:"#b3adbb",dark:"#837d8c",belly:"#cdc8d4",cloth:"#7c9c62",horn:"#b48cff",band:"#b48cff",eye:"#ffc94a"};function kg(i=Bg,t={}){const e=Bi,n=[{geo:ui(.2,.5,8),color:i.skin,at:[-.28,.5,0],limb:e.legL},{geo:ui(.2,.5,8),color:i.skin,at:[.28,.5,0],limb:e.legR},{geo:Jt(.36,.14,.44),color:i.dark,at:[-.28,.07,.06],limb:e.legL},{geo:Jt(.36,.14,.44),color:i.dark,at:[.28,.07,.06],limb:e.legR},{geo:Jt(.86,.36,.56),color:i.cloth,at:[0,.92,0]},{geo:Ut(.62,14,10),color:i.skin,at:[0,1.42,.02],scale:[1.05,.9,.82]},{geo:Ut(.36,12,8),color:i.belly,at:[0,1.35,.36],scale:[1,.8,.5]},{geo:Ut(.24,12,10),color:i.skin,at:[0,2,.22]},{geo:Jt(.22,.05,.04),color:"#2a1412",at:[0,2.06,.43]},{geo:Ut(.045,6,5),color:i.eye,at:[-.08,2.03,.43]},{geo:Ut(.045,6,5),color:i.eye,at:[.08,2.03,.43]},{geo:Jt(.2,.06,.05),color:"#f4ecd8",at:[0,1.93,.43]},{geo:ee(.07,.34,7),color:i.horn,at:[-.22,2.22,.18],rot:[.2,0,.55]},{geo:ee(.07,.34,7),color:i.horn,at:[.22,2.22,.18],rot:[.2,0,-.55]},{geo:Ut(.24,10,8),color:i.skin,at:[-.66,1.66,.02],limb:e.armL},{geo:Ut(.24,10,8),color:i.skin,at:[.66,1.66,.02],limb:e.armR},{geo:ui(.17,.62,8),color:i.skin,at:[-.76,1.2,.08],rot:[.15,0,.12],limb:e.armL},{geo:ui(.17,.62,8),color:i.skin,at:[.76,1.2,.08],rot:[.15,0,-.12],limb:e.armR},{geo:ge(.2,.2,.16,10),color:i.band,at:[-.8,.98,.12],limb:e.armL},{geo:ge(.2,.2,.16,10),color:i.band,at:[.8,.98,.12],limb:e.armR},{geo:Ut(.22,10,8),color:i.dark,at:[-.83,.74,.14],limb:e.armL},{geo:Ut(.22,10,8),color:i.dark,at:[.83,.74,.14],limb:e.armR}];if(t.muzzle&&n.push({geo:Ut(.15,10,8),color:i.belly,at:[0,1.93,.42],scale:[1.1,.75,.9]},{geo:Ut(.05,6,5),color:"#2a1412",at:[0,1.98,.55]},{geo:ee(.03,.1,5),color:"#f4ecd8",at:[-.07,1.84,.5],rot:[Math.PI,0,0]},{geo:ee(.03,.1,5),color:"#f4ecd8",at:[.07,1.84,.5],rot:[Math.PI,0,0]}),t.shards){const r=t.shards;n.push({geo:ee(.16,.6,5),color:r,at:[-.62,1.98,-.05],rot:[-.2,0,.35]},{geo:ee(.11,.42,5),color:r,at:[-.78,1.86,.08],rot:[.1,0,.8]},{geo:ee(.16,.6,5),color:r,at:[.62,1.98,-.05],rot:[-.2,0,-.35]},{geo:ee(.11,.42,5),color:r,at:[.78,1.86,.08],rot:[.1,0,-.8]},{geo:ee(.2,.78,5),color:r,at:[0,1.92,-.42],rot:[-.75,0,0]},{geo:ee(.14,.52,5),color:r,at:[-.26,1.72,-.5],rot:[-.9,0,.3]},{geo:ee(.14,.52,5),color:r,at:[.26,1.72,-.5],rot:[-.9,0,-.3]},{geo:Jt(.06,.34,.03),color:i.eye,at:[-.08,1.45,.53],rot:[.3,0,.35]},{geo:Jt(.05,.24,.03),color:i.eye,at:[.1,1.36,.52],rot:[.3,0,-.5]})}return t.mane&&n.push({geo:Ut(.5,12,8),color:i.dark,at:[0,1.82,-.1],scale:[1.3,.7,.9]},{geo:ee(.16,.42,6),color:i.dark,at:[-.34,1.98,-.26],rot:[-.6,0,.4]},{geo:ee(.16,.42,6),color:i.dark,at:[.34,1.98,-.26],rot:[-.6,0,-.4]},{geo:ee(.18,.5,6),color:i.dark,at:[0,2.02,-.36],rot:[-.8,0,0]}),Uo(n)}const Hg=[{main:"#62d9c4",dark:"#2a8a82",glow:"#effff9"},{main:"#ad83ff",dark:"#5a3db3",glow:"#fff0ff"},{main:"#ff6170",dark:"#a8263c",glow:"#fff4c8"}],Gg={hip:.42,shoulder:.86,swing:.5,arms:.45,rate:6},ni=i=>new Ro(i,0);function Vg(i){const t=Bi;return Uo([{geo:ge(.12,.15,.42,6),color:i.dark,at:[-.16,.21,0],limb:t.legL},{geo:ge(.12,.15,.42,6),color:i.dark,at:[.16,.21,0],limb:t.legR},{geo:ni(.42),color:i.main,at:[0,.72,0],scale:[1.05,1,.85]},{geo:ni(.2),color:i.dark,at:[0,.62,.3],scale:[1,1.2,.6]},{geo:ee(.13,.5,5),color:i.main,at:[-.2,1.02,-.2],rot:[-.5,0,.45]},{geo:ee(.15,.62,5),color:i.main,at:[.04,1.12,-.26],rot:[-.55,0,-.1]},{geo:ee(.11,.42,5),color:i.dark,at:[.26,.98,-.18],rot:[-.4,0,-.55]},{geo:ni(.2),color:i.main,at:[0,1.12,.14],scale:[1,.9,1]},{geo:Ut(.045,6,5),color:i.glow,at:[-.08,1.14,.3]},{geo:Ut(.045,6,5),color:i.glow,at:[.08,1.14,.3]},{geo:ni(.16),color:i.dark,at:[-.42,.86,.04],limb:t.armL},{geo:ni(.16),color:i.dark,at:[.42,.86,.04],limb:t.armR},{geo:ni(.15),color:i.main,at:[-.46,.56,.12],scale:[.8,2.2,.8],rot:[.3,0,.08],limb:t.armL},{geo:ni(.15),color:i.main,at:[.46,.56,.12],scale:[.8,2.2,.8],rot:[.3,0,-.08],limb:t.armR}])}function Wg(i,t,e,n,r,s){const a=i.createRadialGradient(t,e,0,t,e,Math.max(n,r));a.addColorStop(0,s),a.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=a,i.save(),i.translate(t,e),i.scale(n/Math.max(n,r),r/Math.max(n,r)),i.translate(-t,-e),i.beginPath(),i.arc(t,e,Math.max(n,r),0,Math.PI*2),i.fill(),i.restore()}function Xg(i=ue*2+4){return()=>{const n=document.createElement("canvas");n.width=512,n.height=512;const r=n.getContext("2d"),s=r.createLinearGradient(0,0,512,0);s.addColorStop(0,"#c4a277"),s.addColorStop(.12,"#dcc398"),s.addColorStop(.5,"#ead5aa"),s.addColorStop(.88,"#dec59b"),s.addColorStop(1,"#c6a479"),r.fillStyle=s,r.fillRect(0,0,512,512);const a=[[150,120,80,130,"rgba(248,226,186,0.35)"],[360,330,70,150,"rgba(248,226,186,0.3)"],[260,470,100,60,"rgba(160,110,62,0.14)"],[80,300,46,120,"rgba(160,110,62,0.18)"],[440,80,50,100,"rgba(160,110,62,0.16)"]];for(const[c,l,u,h,f]of a)for(const d of[-512,0,512])Wg(r,c,l+d,u,h,f);const o=new Ar(n);return o.colorSpace=me,o.wrapS=wn,o.wrapT=Sr,o.anisotropy=8,o}}const al={sky:"#fff1d8",ground:"#c9a273",road:{road:"#e4c79a",edge:"#c39468",line:"rgba(0,0,0,0)"},curb:"#c39468",leaf:["#5aa547","#86c95a"],bounce:"#c79a6a",fov:36,elev:32,fog:["#d9b688",70,150],props:"canyon",curbs:!1,roadWidth:ue*2+1,roadTex:Xg(ue*2+1)};function qg(i,t=1.6,e=2.6){const n=document.createElement("canvas"),r=Math.max(4,Math.round(i/.8)),s=Math.max(2,Math.round(t/.8));n.width=r*16,n.height=s*16;const a=n.getContext("2d");for(let f=0;f<s;f++)for(let d=0;d<r;d++)a.fillStyle=(f+d)%2?"#1d1b22":"#f7f4ee",a.fillRect(d*16,f*16,16,16);const o=new Ar(n);o.colorSpace=me,o.magFilter=Pe;const c=new li,l=new _e(new Pn(i,t),new Ln({map:o,side:en}));l.position.set(0,e+t/2,0),c.add(l);const u=new Cr(.12,.14,e+t+.3,8).translate(0,(e+t+.3)/2,0),h=new Tn({color:"#6b4a32"});for(const f of[-1,1]){const d=new _e(u,h);d.position.x=f*(i/2+.1),c.add(d)}return c}const pn="#221f2e";let kn=null;function $g(){return kn||(kn=new bo(new Uint8Array([96,178,255]),3,1,Ss),kn.minFilter=kn.magFilter=Pe,kn.generateMipmaps=!1,kn.needsUpdate=!0,kn)}function ro(i="#ffffff",t={}){var n;const e=new Eg({color:i,gradientMap:$g(),vertexColors:!!t.vertexColors,transparent:!!t.transparent,opacity:(n=t.opacity)!=null?n:1});return t.flash&&Yg(e),e}const fh=(i,t={})=>{var e,n;return new Ln({color:i,transparent:!!t.transparent,opacity:(e=t.opacity)!=null?e:1,depthWrite:(n=t.depthWrite)!=null?n:!0,vertexColors:!!t.vertexColors})};function Fo(i=.045,t=pn){const e=new Ln({color:t,side:Re});return e.onBeforeCompile=n=>{n.uniforms.uOutline={value:i},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uOutline;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normalize(normal) * uOutline;`)},e.customProgramCacheKey=()=>`outline${i}`,e}function Yg(i){i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aFlash;
varying float vFlash;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlash = aFlash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vFlash;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), vFlash);`)},i.customProgramCacheKey=()=>"flash"}function dh(i){const t=new $n(new Float32Array(i.instanceMatrix.count),1);return t.setUsage(bs),i.geometry.setAttribute("aFlash",t),t}function Jg(i,t="#bfe3ff",e="#8a7a6a"){i.add(new Rg(t,e,1.25));const n=new Ig("#fff4e0",2.1);return n.position.set(-6,14,8),i.add(n),i.add(n.target),n}const Kg=[{body:"#8ed05a",belly:"#d6f2a6",horn:"#fff3d6"},{body:"#a274ff",belly:"#dccbff",horn:"#fff3d6"},{body:"#ff6a55",belly:"#ffc2a8",horn:"#fff3d6"}];function Zg(i){return pe([{geo:Ut(1,14,10),color:i.body,at:[0,.92,0],scale:[1,.9,.95]},{geo:Ut(.62,12,8),color:i.belly,at:[0,.74,.45],scale:[1,.9,.6]},{geo:Ut(.25,10,8),color:"#ffffff",at:[-.34,1.26,.72]},{geo:Ut(.25,10,8),color:"#ffffff",at:[.34,1.26,.72]},{geo:Ut(.12,8,6),color:pn,at:[-.31,1.24,.94]},{geo:Ut(.12,8,6),color:pn,at:[.31,1.24,.94]},{geo:Ut(.3,10,6),color:"#3b1730",at:[0,.8,.86],scale:[1.3,.55,.4]},{geo:ee(.15,.42,7),color:i.horn,at:[-.5,1.74,0],rot:[0,0,.35]},{geo:ee(.15,.42,7),color:i.horn,at:[.5,1.74,0],rot:[0,0,-.35]},{geo:Ut(.3,8,6),color:i.body,at:[-.48,.13,.2],scale:[1,.5,1.25]},{geo:Ut(.3,8,6),color:i.body,at:[.48,.13,.2],scale:[1,.5,1.25]}])}function jg(){const i="#c8355a",t="#ff9aa8",e="#f2b632";return pe([{geo:Ut(1,16,12),color:i,at:[0,.95,0],scale:[1,.95,.9]},{geo:Ut(.66,12,8),color:t,at:[0,.74,.4],scale:[1,.95,.62]},{geo:Ut(.2,10,8),color:"#ffffff",at:[-.32,1.3,.7]},{geo:Ut(.2,10,8),color:"#ffffff",at:[.32,1.3,.7]},{geo:Ut(.1,8,6),color:pn,at:[-.3,1.28,.88]},{geo:Ut(.1,8,6),color:pn,at:[.3,1.28,.88]},{geo:Jt(.5,.08,.1),color:pn,at:[-.32,1.52,.72],rot:[0,0,-.35]},{geo:Jt(.5,.08,.1),color:pn,at:[.32,1.52,.72],rot:[0,0,.35]},{geo:Ut(.34,10,6),color:"#3b1730",at:[0,.82,.8],scale:[1.5,.6,.4]},{geo:ee(.08,.2,5),color:"#ffffff",at:[-.2,.92,.9],rot:[Math.PI,0,0]},{geo:ee(.08,.2,5),color:"#ffffff",at:[.2,.92,.9],rot:[Math.PI,0,0]},{geo:ge(.42,.48,.3,10),color:e,at:[0,1.95,0]},{geo:ee(.1,.28,5),color:e,at:[-.3,2.22,0]},{geo:ee(.1,.28,5),color:e,at:[0,2.24,.2]},{geo:ee(.1,.28,5),color:e,at:[.3,2.22,0]},{geo:ui(.22,.7,8),color:i,at:[-1.05,.95,.25],rot:[.5,0,.6]},{geo:ui(.22,.7,8),color:i,at:[1.05,.95,.25],rot:[.5,0,-.6]},{geo:Ut(.32,8,6),color:i,at:[-.5,.14,.2],scale:[1,.5,1.3]},{geo:Ut(.32,8,6),color:i,at:[.5,.14,.2],scale:[1,.5,1.3]}])}const Qg=()=>pe([{geo:ui(.12,.4,6),color:"#fff3a0",rot:[Math.PI/2,0,0]}]);function t_(i="#5fae4e",t="#7cc75a"){return pe([{geo:ge(.18,.26,1.4,7),color:"#8a5a3c",at:[0,.7,0]},{geo:Ut(1.05,10,8),color:i,at:[0,2,0]},{geo:Ut(.8,10,8),color:t,at:[.55,2.5,.25]},{geo:Ut(.72,10,8),color:i,at:[-.5,2.55,-.2]}])}const e_=()=>pe([{geo:new Ts(1,0),color:"#a8a3b5",scale:[1.2,.7,1]}]),n_=()=>pe([{geo:Ut(.7,9,7),color:"#6bb85a",at:[0,.5,0]},{geo:Ut(.55,9,7),color:"#86cf63",at:[.6,.4,.1]},{geo:Ut(.5,9,7),color:"#5fa64f",at:[-.55,.38,-.1]}]);let fr=null;function i_(){if(fr)return fr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,31);return e.addColorStop(0,"rgba(20,16,40,0.55)"),e.addColorStop(.6,"rgba(20,16,40,0.32)"),e.addColorStop(1,"rgba(20,16,40,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),fr=new Ar(i),fr.colorSpace=me,fr}function r_(i){var r;const t=document.createElement("canvas");t.width=128,t.height=256;const e=t.getContext("2d");e.fillStyle=i.road,e.fillRect(0,0,128,256),e.fillStyle=(r=i.dirt)!=null?r:"rgba(0,0,0,0.06)";for(const[s,a,o,c]of[[18,30,34,60],[80,140,30,70],[40,200,26,40]])e.beginPath(),e.ellipse(s,a,o/2,c/2,0,0,Math.PI*2),e.fill();e.fillStyle=i.edge,e.fillRect(0,0,8,256),e.fillRect(120,0,8,256),e.fillStyle=i.line,e.fillRect(61,20,6,90),e.fillRect(61,148,6,90);const n=new Ar(t);return n.colorSpace=me,n.wrapS=wn,n.wrapT=Sr,n.anisotropy=4,n}const fi=new $t,vs=new sn,ol=new Ce,cl=new I,xs=new I,fa=new Nt,s_=new I(0,1,0),da=new I,ll=new I,a_=new Nt("#ffffff");function Ve(i,t,e){const n=new rh(i,t,e);return n.count=0,n.frustumCulled=!1,n.instanceMatrix.setUsage(bs),n}function fn(i,t,e,n,r,s,a,o,c=0,l=0,u=0){return ol.set(c,l,u),vs.setFromEuler(ol),cl.set(e,n,r),xs.set(s,a,o),fi.compose(cl,vs,xs),i.setMatrixAt(t,fi),fi}const Yn=(...i)=>{for(const t of i)t.instanceMatrix.needsUpdate=!0};class o_{constructor(t=96){this.i=0,this.mesh=Ve(new Pn(1,1).rotateX(-Math.PI/2),new Ln({map:i_(),transparent:!0,depthWrite:!1}),t)}begin(){this.i=0}add(t,e,n){this.i>=this.mesh.instanceMatrix.count||n<=0||fn(this.mesh,this.i++,t,.03,e,n,1,n*.8)}end(){this.mesh.count=this.i,Yn(this.mesh)}}function ph(i,t){const e=[],n=i.smooth||i.facets?ze({flash:!0,flat:i.facets}):ro("#ffffff",{vertexColors:!0,flash:!0});i.gait&&e.push(No(n,{...i.gait,instanced:t}));let r=null;if(i.outline!==!1)if(i.gait){const s=zg({...i.gait,instanced:t},.035);r=s.mat,e.push(s.gait)}else r=Fo(.05);return{mat:n,ink:r,gaits:e}}class c_{constructor(t=40,e={}){var r,s,a,o;this.meshes=[],this.ink=[],this.flash=[],this.gaitAttrs=[],this.gaits=[],this.dieT=new Map,this.players=[],this.rates=[],this.size=(r=e.size)!=null?r:1,this.deathFlash=(s=e.deathFlash)!=null?s:.8,this.hitFlash=(a=e.hitFlash)!=null?a:.5;const n=(o=e.geos)!=null?o:Kg.map(c=>Zg(c));for(const c of n){const{mat:l,ink:u,gaits:h}=ph(e,!0);this.gaits.push(...h);const f=Ve(c,l,t);this.flash.push(dh(f)),this.gaitAttrs.push(e.gait?uh(f):null),this.meshes.push(f),this.ink.push(u?Ve(c,u,t):null)}}get objects(){return[...this.ink.filter(t=>!!t),...this.meshes]}reset(){this.dieT.clear()}useBaked(t,e,n,r,s){const a=this.meshes[t];if(!a)return;const o=e.clone();o.setAttribute("aFlash",this.flash[t]),a.geometry=o,a.material=n;const c=this.ink[t];c&&(c.visible=!1),this.ink[t]=null,this.gaitAttrs[t]=null,this.players[t]=r>1?new Do(a,r,hh(e)):null,this.rates[t]=s}sync(t,e,n){var a,o,c,l,u;const r=this.meshes.map(()=>0);for(const h of this.gaits)h.uniforms.uTime.value=e;const s=this.meshes.length;for(const h of t){let f=1;if(h.dead){const M=this.dieT.get(h.id);if(M===void 0){this.dieT.set(h.id,e);continue}if(f=1-(e-M)/.22,f<=0)continue}const d=Math.max(0,Math.min(s-1,h.tier)),g=r[d];if(g>=this.meshes[d].instanceMatrix.count)continue;r[d]++;const _=h.r*this.size*(h.dead?1+(1-f)*.4:1),m=!!this.gaitAttrs[d],p=fn(this.meshes[d],g,h.x,0,h.z,_*(1+h.hit*.08),_*f*(1-h.hit*.1),_,m?-h.hit*.25:0,m?Math.sin(e*1.3+h.id)*.12:Math.sin(e*2+h.id)*.15,m?0:Math.sin(e*7+h.id)*.06);(a=this.ink[d])==null||a.setMatrixAt(g,p),this.flash[d].setX(g,h.dead?this.deathFlash:h.hit*this.hitFlash),(o=this.gaitAttrs[d])==null||o.setXY(g,h.id*1.7,h.dead?0:1),h.dead||(l=this.players[d])==null||l.set(g,(e*((c=this.rates[d])!=null?c:5)+h.id*1.7)/(Math.PI*2)),n.add(h.x,h.z,h.r*(m?1.6:2.2)*f)}for(let h=0;h<s;h++){this.meshes[h].count=r[h];const f=this.ink[h];f&&(f.count=r[h],Yn(f)),this.flash[h].needsUpdate=!0;const d=this.gaitAttrs[h];d&&(d.needsUpdate=!0),(u=this.players[h])==null||u.done(),Yn(this.meshes[h])}}}class l_{constructor(t=jg(),e={}){var a,o;this.dieT=-1,this.player=null,this.rate=3,this.size=(a=e.size)!=null?a:1,this.deathFlash=(o=e.deathFlash)!=null?o:.9;const{mat:n,ink:r,gaits:s}=ph(e,!0);this.gaits=s,this.mesh=Ve(t,n,1),this.flash=dh(this.mesh),this.gaitA=e.gait?uh(this.mesh):null,this.ink=r?Ve(t,e.gait?r:Fo(.03),1):null}get objects(){return this.ink?[this.ink,this.mesh]:[this.mesh]}reset(){this.dieT=-1}useBaked(t,e,n,r){const s=t.clone();s.setAttribute("aFlash",this.flash),this.mesh.geometry=s,this.mesh.material=e,this.ink&&(this.ink.visible=!1),this.gaitA=null,this.player=n>1?new Do(this.mesh,n,hh(t)):null,this.rate=r}sync(t,e,n){var s;let r=0;for(const a of this.gaits)a.uniforms.uTime.value=e;if(t){let a=1;if(t.dead&&(this.dieT<0&&(this.dieT=e),a=1-(e-this.dieT)/.6),a>0){const o=t.r*this.size,c=fn(this.mesh,0,t.x,t.stomp*.6,t.z,o*(1+t.hit*.05),o*a*(1-t.hit*.06),o,-t.stomp*.25,Math.sin(e*1.5)*.08,this.gaitA?0:Math.sin(e*5)*.04);(s=this.ink)==null||s.setMatrixAt(0,c),this.flash.setX(0,t.dead?this.deathFlash:t.hit*.22),this.flash.needsUpdate=!0,this.gaitA&&(this.gaitA.setXY(0,0,t.walking&&!t.dead?1:.15),this.gaitA.needsUpdate=!0),this.player&&(this.player.set(0,t.walking&&!t.dead?e*this.rate/(Math.PI*2):0),this.player.done()),n.add(t.x,t.z,t.r*2.4*a),r=1}}this.mesh.count=r,this.ink&&(this.ink.count=r,Yn(this.ink)),Yn(this.mesh)}}function ze(i={}){const t=i.map?new Tn({color:"#ffffff",map:i.map,flatShading:!!i.flat,...i.lift?{emissiveMap:i.map,emissive:new Nt(i.lift,i.lift,i.lift)}:{}}):new Tn({color:"#ffffff",vertexColors:!0,flatShading:!!i.flat});return i.flash&&(t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aFlash;
varying float vFlash;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlash = aFlash;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vFlash;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0, 0.95, 0.9), vFlash);`)},t.customProgramCacheKey=()=>"lflash"),t}const mh={wood:"#8e3d27",band:"#2b1a14",cap:"#5c2618"};function h_(i=mh){const{wood:t,band:e,cap:n}=i;return pe([{geo:new Ye(.3,2.4,.3),color:t,at:[0,1.2,0]},{geo:new Ye(.33,.12,.33),color:e,at:[0,.45,0]},{geo:new Ye(.33,.12,.33),color:e,at:[0,1.15,0]},{geo:new Ye(.33,.12,.33),color:e,at:[0,1.85,0]},{geo:new Ye(.38,.14,.38),color:n,at:[0,2.44,0]}])}function u_(i){const t=document.createElement("canvas");t.width=64,t.height=128;const e=t.getContext("2d"),n=new Nt(i),r=o=>"#"+n.clone().lerp(a_,o).getHexString(),s=e.createLinearGradient(0,0,0,128);s.addColorStop(0,r(0)),s.addColorStop(.5,r(.2)),s.addColorStop(.85,r(.62)),s.addColorStop(1,r(.85)),e.fillStyle=s,e.fillRect(0,0,64,128),e.strokeStyle=r(.55),e.lineWidth=6,e.strokeRect(3,3,58,122);const a=new Ar(t);return a.colorSpace=me,a}class f_{constructor(t=60,e=mh){this.panels=new Map,this.group=new li,this.bottom=.3,this.height=1.8,this.lean=.45,this.cap=t,this.posts=Ve(h_(e),ze(),t),this.group.add(this.posts)}get objects(){return[this.group]}get mid(){return this.bottom+this.height/2}panel(t){let e=this.panels.get(t);if(!e){const n=new Ln({map:u_(t),transparent:!0,opacity:.9,side:en,depthWrite:!1});e=Ve(new Pn(1,1),n,this.cap),e.instanceColor=new $n(new Float32Array(this.cap*3).fill(1),3),e.renderOrder=2,this.panels.set(t,e),this.group.add(e)}return e}sync(t){var r,s;let e=0;const n=new Map;for(const a of t){const o=a.passAge;if(o>.6)continue;const c=o<0?1:1-_i.inCubic(Math.min(1,o/.6)),l=(r=a.y)!=null?r:0;for(const h of[-ue,...fs(a.k).map(f=>f[1])]){if(e>=this.posts.instanceMatrix.count)break;fn(this.posts,e++,h,l,a.z,1,c,1)}const u=fs(a.k);a.gates.forEach((h,f)=>{var v;if(!h)return;const d=this.panel(h.color),g=(v=n.get(h.color))!=null?v:0;if(g>=d.instanceMatrix.count)return;n.set(h.color,g+1);const[_,m]=u[f],p=o>=0&&a.choice===f,M=o<0?1:p?1+.25*_i.bump(Math.min(1,o/.35)):c,E=this.height*M*h.swell;fn(d,g,(_+m)/2,l+this.bottom+this.height/2,a.z,(m-_-.32)*M*h.swell,E,1,-this.lean),fa.setRGB(1,1,1),p&&o<.3&&fa.setRGB(1.6,1.6,1.6),d.setColorAt(g,fa)})}this.posts.count=e,Yn(this.posts);for(const[a,o]of this.panels)o.count=(s=n.get(a))!=null?s:0,Yn(o),o.instanceColor&&(o.instanceColor.needsUpdate=!0)}}class d_{constructor(t=Qg(),e=40,n=fh("#ffffff",{vertexColors:!0})){this.list=[],this.across=2.1,this.along=1.7,this.mesh=Ve(t,n,e)}get objects(){return[this.mesh]}clear(){this.list=[]}get full(){return this.list.length>=this.mesh.instanceMatrix.count}fire(t,e,n,r,s,a,o,c=1){if(this.full)return;const l=Math.hypot(r-t,a-n);this.list.push({x0:t,y0:e,z0:n,x1:r,y1:s,z1:a,t0:o,dur:Math.min(.24,.05+l/110),s:c})}sync(t){let e=0;this.list=this.list.filter(n=>t<n.t0+n.dur);for(const n of this.list){if(t<n.t0)continue;const r=(t-n.t0)/n.dur;da.set(n.x0+(n.x1-n.x0)*r,n.y0+(n.y1-n.y0)*r,n.z0+(n.z1-n.z0)*r),ll.set(n.x1,n.y1,n.z1),fi.lookAt(da,ll,s_),vs.setFromRotationMatrix(fi),xs.set(this.across*n.s,this.across*n.s,this.along*n.s),fi.compose(da,vs,xs),this.mesh.setMatrixAt(e++,fi)}this.mesh.count=e,Yn(this.mesh)}}function bn(i,t,e,n){const r=[];for(const s of e?[e,t]:[t]){const a=new rh(i,s,Math.max(1,n.length));n.forEach((o,c)=>a.setMatrixAt(c,o)),a.count=n.length,a.computeBoundingSphere(),r.push(a)}return r}const hl=Math.PI/180,ul=50;class p_{constructor(t,e,n=1,r=!1){var D,V,j,q;this.scene=new cg,this.camera=new $e(ul,1,.5,260),this.disposables=[],this.camPos=new I,this.camLook=new I,this.placed=!1,this.squadLow=.58,this.fit=10,this.elev=36,this.side=0,this.lift=0,this.look=new I;const s=this.scene;if(s.background=new Nt(t.fog?t.fog[0]:t.sky),s.fog=t.fog?new gs(t.fog[0],t.fog[1],t.fog[2]):new gs(t.sky,75,160),this.elev=(D=t.elev)!=null?D:36,this.camera.fov=(V=t.fov)!=null?V:ul,this.camera.updateProjectionMatrix(),this.sun=Jg(s,t.sky,(j=t.bounce)!=null?j:"#8a7a6a"),r)return;const a=e+140,o=new Pn(260,a+120).rotateX(-Math.PI/2),c=new Tn({color:t.ground}),l=new _e(o,c);l.position.set(0,-.05,-a/2+40),s.add(l);const u=t.roadTex?t.roadTex():r_(t.road);u.repeat.set(1,a/16);const h=new Pn((q=t.roadWidth)!=null?q:ue*2+.9,a).rotateX(-Math.PI/2),f=new Tn({map:u}),d=new _e(h,f);d.position.set(0,0,-a/2+40),s.add(d);const g=new Ye(.4,.22,a),_=ro(t.curb);for(const F of t.curbs===!1?[]:[-1,1]){const U=new _e(g,_);U.position.set(F*(ue+.65),.11,-a/2+40),s.add(U)}if(this.disposables.push(o,c,u,h,f,g,_),t.props==="debris"){this.debris(t,a,n);return}if(t.props==="canyon"){this.canyon(t,a,n);return}const m=mr(n*977+13),p=[],M=[],E=[],v=new $t,P=new sn,S=new Ce,w=(F,U,$,nt)=>{S.set(0,m()*6.28,0),P.setFromEuler(S),F.push(v.clone().compose(new I(U,0,$),P,new I(nt,nt,nt)))};for(let F=20;F>-a+30;F-=9+m()*12){const U=m()<.5?-1:1,$=U*(ue+2.4+m()*4),nt=m();if(nt<.55){const ht=1+Math.floor(m()*3);for(let wt=0;wt<ht;wt++)w(p,$+U*wt*1.9+(m()-.5),F+(m()-.5)*3,1+m()*.6)}else nt<.8?w(M,$,F,1+m()*.5):w(E,$+U,F,.6+m()*.6);m()<.35&&w(p,-U*(ue+6+m()*6),F-4,1.2+m()*.5)}const R=Fo(.06),y=t_(t.leaf[0],t.leaf[1]),x=n_(),L=e_(),H=ro("#ffffff",{vertexColors:!0});s.add(...bn(y,H,R,p),...bn(x,H,R,M),...bn(L,H,R,E)),this.disposables.push(R,y,x,L,H)}debris(t,e,n){var m,p;const r=mr(n*577+7),s=((m=t.roadWidth)!=null?m:ue*2+.9)/2,a=new Tn({color:"#ffffff",vertexColors:!0}),o=pe([{geo:Jt(.55,.28,1),color:"#a39a8e",at:[0,.14,0]},{geo:Jt(.5,.04,1),color:"#bfb7aa",at:[0,.29,0]}]),c=new $t,l=new sn,u=new Ce,h=[-1,1].map(M=>c.clone().compose(new I(M*(s+.2),0,-e/2+40),l.identity().clone(),new I(1,1,e))),f=[pe([0,1,2].map(M=>({geo:new Zi(.42,.17,6,12),color:M===1?"#3d3836":"#34302f",at:[M%2*.06,.17+M*.33,M%2*.05],rot:[Math.PI/2,0,0]})).concat([{geo:new Zi(.42,.17,6,12),color:"#3a3533",at:[.95,.45,.2],rot:[.3,.2,1.2]}])),pe([{geo:ge(.34,.34,.95,12),color:"#a9583a",at:[0,.48,0]},{geo:ge(.36,.36,.07,12),color:"#7d3c26",at:[0,.3,0]},{geo:ge(.36,.36,.07,12),color:"#7d3c26",at:[0,.68,0]},{geo:ge(.34,.34,.95,12),color:"#4f7598",at:[.72,.48,.25]},{geo:ge(.36,.36,.07,12),color:"#3a5a78",at:[.72,.68,.25]},{geo:ge(.34,.34,.95,12),color:"#9a5136",at:[.3,.34,-.9],rot:[0,0,Math.PI/2]}]),pe([...[-.95,0,.95].map(M=>({geo:Ut(1,10,7),color:M===0?"#c9b18a":"#bea57e",at:[M,.22,0],scale:[.52,.24,.34]})),...[-.48,.48].map(M=>({geo:Ut(1,10,7),color:"#d2bb94",at:[M,.62,.02],scale:[.5,.22,.32]}))]),pe([{geo:Jt(.16,1.2,.16),color:"#7c5b3c",at:[-1,.6,0]},{geo:Jt(.16,.9,.16),color:"#73553a",at:[1,.45,0],rot:[0,0,-.15]},{geo:Jt(2.3,.2,.07),color:"#8d6a47",at:[0,.82,.08],rot:[0,0,.06]},{geo:Jt(2.1,.2,.07),color:"#7f6040",at:[.2,.08,.5],rot:[Math.PI/2,.4,0]}]),pe([{geo:Jt(1.9,.62,4.1),color:"#738a83",at:[0,.6,0]},{geo:Jt(1.62,.62,2),color:"#6a7f78",at:[0,1.2,-.25]},{geo:Jt(1.66,.42,1.9),color:"#2e3236",at:[0,1.22,-.25]},{geo:Jt(1.2,.08,1.3),color:"#9a5a3a",at:[.2,.93,1.3]},...[[-.92,1.3],[.92,1.3],[-.92,-1.35],[.92,-1.35]].map(([M,E])=>({geo:ge(.36,.36,.26,10),color:"#2d2a29",at:[M,.3,E],rot:[0,0,Math.PI/2]}))]),pe([{geo:Jt(1.7,.85,.7),color:"#aaa49a",at:[0,.42,0]},{geo:Jt(1.5,.08,.5),color:"#c4beb4",at:[0,.88,0]},{geo:Jt(1.2,.7,.6),color:"#a29c92",at:[1.1,.35,.9],rot:[0,.7,0]}])],d=f.map(()=>[]),g=(M,E,v,P,S=1)=>{u.set(0,P,0),d[M].push(c.clone().compose(new I(E,0,v),l.setFromEuler(u).clone(),new I(S,S,S)))};let _=r()<.5?-1:1;for(let M=6;M>-e+30;M-=9+r()*9){r()<.7&&(_=-_);const E=_*(s+1+r()*1.4),v=Math.floor(r()*f.length);if(v===4?g(4,E+_*.9,M,(r()-.5)*1.1+(r()<.5?0:Math.PI)):g(v,E,M,r()*6.28,.95+r()*.3),r()<.45){const P=(v+1+Math.floor(r()*3))%f.length;P!==4&&g(P,E+_*(1.6+r()),M-1.5-r()*1.5,r()*6.28,.9+r()*.3)}}if(this.scene.add(...bn(o,a,null,h)),this.disposables.push(a,o,...f),(p=t.junk)!=null&&p.length){const M=t.junk,E=M.map(()=>[]),v=mr(n*811+3);let P=v()<.5?-1:1;for(let S=6;S>-e+30;S-=9+v()*9){v()<.7&&(P=-P);const w=Math.floor(v()*M.length),R=P*(s+(M[w].big?2.2:1.3)+v()*1.2);u.set(0,M[w].big?(v()-.5)*1.1+(v()<.5?0:Math.PI):v()*6.28,0);const y=.9+v()*.25;E[w].push(c.clone().compose(new I(R,0,S),l.setFromEuler(u).clone(),new I(y,y,y)))}M.forEach((S,w)=>{E[w].length&&this.scene.add(...bn(S.geometry,S.material,null,E[w]))});return}f.forEach((M,E)=>{d[E].length&&this.scene.add(...bn(M,a,null,d[E]))})}canyon(t,e,n){var m,p,M;const r=mr(n*331+17);if((m=t.junk)!=null&&m.length){const E=new $t,v=new sn,P=new Ce,S=((p=t.roadWidth)!=null?p:ue*2+.9)/2,w=t.junk,R=w.map(()=>[]);for(const y of[-1,1])for(let x=12-r()*5;x>-e+20;x-=4.5+r()*4){const L=Math.floor(r()*w.length),H=y*(S+(w[L].big?1.6:.7)+r()*1.2);P.set(0,r()*6.28,0);const D=.85+r()*.45;R[L].push(E.clone().compose(new I(H,0,x),v.setFromEuler(P).clone(),new I(D,D,D)))}w.forEach((y,x)=>{R[x].length&&this.scene.add(...bn(y.geometry,y.material,null,R[x]))});return}const s=[],a=[],o=new $t,c=new sn,l=new Ce,u=((M=t.roadWidth)!=null?M:ue*2+.9)/2,h=(E,v,P,S,w)=>{l.set(0,r()*6.28,0),c.setFromEuler(l),E.push(o.clone().compose(new I(v,0,P),c,new I(S,w,S)))};for(const E of[-1,1])for(let v=14-r()*6;v>-e+20;v-=5+r()*7){const P=E*(u+.2+r()*1.2),S=1.2+r()*1.1;h(s,P+E*S*.6,v,S,S*(.7+r()*.5)),r()<.45&&h(s,P+E*(S+.9),v-1.4,S*.7,S*.6),r()<.7&&h(a,P-E*.2+(r()-.5),v+1.3+r(),.8+r()*.5,.8+r()*.4)}const f=new Pr(.75,0).translate(0,.45,0),d=new Ts(.62,1).scale(1.2,.85,1.1).translate(0,.42,0),g=new Tn({color:"#9a6b49",flatShading:!0}),_=new Tn({color:t.leaf[0]});this.scene.add(...bn(f,g,null,s),...bn(d,_,null,a)),this.disposables.push(f,d,g,_)}follow(t,e,n,r,s=1,a=0,o=0){this.lift+=(o-this.lift)*(1-Math.exp(-n*5));const c=Math.tan(this.camera.fov/2*hl),l=c*Math.max(.3,r),u=this.fit*s,h=Math.max(14,Math.min(32,u/(2*l))),f=this.elev*hl,d=h*Math.sin(f),g=h*Math.cos(f),_=f-Math.atan(this.squadLow*c),m=d/Math.tan(_)-g+a,p=t*.45+this.side,M=e+g,E=t*.3-this.side*.5,v=e-m;if(!this.placed)this.camPos.set(p,d,M),this.camLook.set(E,0,v),this.placed=!0;else{const P=1-Math.exp(-n*7),S=1-Math.exp(-n*14);this.camPos.x+=(p-this.camPos.x)*P,this.camPos.y+=(d-this.camPos.y)*P,this.camPos.z+=(M-this.camPos.z)*S,this.camLook.x+=(E-this.camLook.x)*P,this.camLook.z+=(v-this.camLook.z)*S}this.camera.position.copy(this.camPos),this.camera.position.y+=this.lift,this.look.copy(this.camLook),this.look.y+=this.lift,this.camera.lookAt(this.look),this.camera.updateMatrixWorld(),this.sun.position.set(t-6,14+this.lift,e+8),this.sun.target.position.set(t,this.lift,e)}shake(t,e){!t&&!e||(this.camera.position.x+=t,this.camera.position.y+=e,this.camera.updateMatrixWorld())}own(...t){this.disposables.push(...t)}dispose(){for(const t of this.disposables)t.dispose();this.disposables=[],this.scene.clear()}}const m_=""+new URL("archer-B_OJu8z_.bin",import.meta.url).href,g_=""+new URL("archer-DdWqkxSt.webp",import.meta.url).href,__=""+new URL("beetle-Dq9lATvi.bin",import.meta.url).href,v_=""+new URL("bowpart-DWUkPHTG.bin",import.meta.url).href,x_=""+new URL("bowpart-BltC-SWL.webp",import.meta.url).href,M_=""+new URL("beetle-BdE8-pl9.webp",import.meta.url).href,S_=""+new URL("golem-RT6mhRp7.bin",import.meta.url).href,y_=""+new URL("golem-CUGR5sEI.webp",import.meta.url).href,b_=""+new URL("imp-CnPdqR4F.bin",import.meta.url).href,E_=""+new URL("imp-DxoRG2oO.webp",import.meta.url).href,T_=""+new URL("jungle-DZGDCW5_.bin",import.meta.url).href,w_=""+new URL("jungle-BvRBYudS.webp",import.meta.url).href,A_=""+new URL("plinth-DNgWUtjb.bin",import.meta.url).href,C_=""+new URL("plinth-tydSpqDs.webp",import.meta.url).href,R_=""+new URL("sprite-B6Uw-VY5.bin",import.meta.url).href,P_=""+new URL("sprite-C151bc_y.webp",import.meta.url).href,Vi=["#b07a4a","#aab6c8","#f2b632","#ff6a3d","#5fe3ff"],L_=["#fff1c4","#d6e6ff","#ffe066","#ff8a4a","#7af0ff"],pa={good:"#45a8ff",bad:"#ff4f63",evolve:"#b36bff"},I_=1.6,gh=1,D_=2.35*gh,fl=1.9;function U_(){const i="#3f9e5a",t="#2d5f3e",e="#ffd3ad",n="#7a4a2a",r="#d24b3a",s="#5a3a22";return Uo([{geo:ge(.1,.085,.36,8),color:t,at:[-.12,.24,0],limb:Bi.legL},{geo:ge(.1,.085,.36,8),color:t,at:[.12,.24,0],limb:Bi.legR},{geo:Jt(.16,.1,.24),color:s,at:[-.12,.05,-.03],limb:Bi.legL},{geo:Jt(.16,.1,.24),color:s,at:[.12,.05,-.03],limb:Bi.legR},{geo:ge(.2,.26,.56,10),color:i,at:[0,.68,0]},{geo:Jt(.5,.07,.36),color:"#6b4426",at:[0,.56,0]},{geo:Jt(.46,.62,.06),color:r,at:[0,.68,.24],rot:[.18,0,0]},{geo:ge(.09,.08,.6,7),color:"#8a5a3c",at:[.16,.86,.22],rot:[.35,0,-.3]},{geo:ee(.05,.12,5),color:"#e9e2cf",at:[.27,1.18,.33],rot:[.35,0,-.3]},{geo:Ut(.2,12,10),color:e,at:[0,1.1,0]},{geo:Og(.23,12),color:n,at:[0,1.12,.02],scale:[1,1.05,1]},{geo:ee(.1,.22,6),color:n,at:[0,1.36,.12],rot:[.7,0,0]},{geo:Ut(.08,8,6),color:e,at:[-.3,.8,-.18]}])}function N_(){const i=new Zi(.55,.055,6,18,Math.PI);return pe([{geo:i,color:"#ffffff",at:[0,0,0],rot:[0,Math.PI/2,Math.PI/2]},{geo:ge(.012,.012,1.1,4),color:"#f6f1e2",at:[0,0,0]},{geo:Ut(.09,8,6),color:"#ffffff",at:[0,0,-.55]}])}function F_(){return pe([{geo:ge(.035,.035,.8,5),color:"#f4ecdc",rot:[Math.PI/2,0,0]},{geo:ee(.09,.24,6),color:"#ffffff",at:[0,0,-.5],rot:[-Math.PI/2,0,0]},{geo:Jt(.16,.02,.18),color:"#ffffff",at:[0,0,.38]},{geo:Jt(.02,.16,.18),color:"#ffffff",at:[0,0,.38]}])}function O_(){return pe([{geo:Jt(1,1,1),color:"#9c94a8",at:[0,.5,0]},{geo:Jt(.96,.08,.96),color:"#c9c3d4",at:[0,1,0]},{geo:Jt(.3,.2,.06),color:"#7d758a",at:[-.2,.62,.5]},{geo:Jt(.22,.16,.06),color:"#7d758a",at:[.25,.3,.5]}])}function z_(){return pe([{geo:new Zi(.42,.09,8,18),color:"#f2b632"},{geo:ee(.16,.42,6),color:"#fff3c4"}])}const B_=()=>pe([{geo:new Pr(.9,0),color:"#8a6a52"}]);class k_{world=null;root=new li;hero;heroGait;bow;bowMat;gates=new f_(60);mobs=new c_(40,{geos:Hg.map(t=>Vg(t)),facets:!0,outline:!1,gait:Gg,size:I_,deathFlash:.2,hitFlash:.2});boss=new l_(kg(sl,{shards:sl.horn}),{facets:!0,outline:!1,gait:rl,size:gh});arrows;shadows=new o_(96);blocks;parts;rocks;warns;passT=new Map;brokeT=new Map;hurtT=-9;evolveT=-9;shownTier=-1;heroBaked=null;heroPlayer=null;plinth=null;maxHp=1;get gateMid(){return this.gates.mid}get gateTop(){return this.gates.bottom+this.gates.height}constructor(){const t=ze();this.heroGait=No(t,{hip:.42,shoulder:.85,swing:.7,arms:0,rate:10}),this.hero=new _e(U_(),t),this.hero.scale.setScalar(fl),this.bowMat=new Tn({color:"#ffffff",vertexColors:!0}),this.bow=new _e(N_(),this.bowMat),this.blocks=Ve(O_(),ze(),24),this.blocks.instanceColor=new $n(new Float32Array(72).fill(1),3),this.parts=Ve(z_(),ze(),12),this.rocks=Ve(B_(),ze({flat:!0}),6),this.warns=Ve(new Po(.75,1,24).rotateX(-Math.PI/2),fh("#ff3b4e",{transparent:!0,opacity:.75,depthWrite:!1}),6),this.arrows=new d_(F_(),48,new Ln({color:"#ffffff",vertexColors:!0})),this.arrows.across=2.6,this.arrows.along=1.9,this.arrows.mesh.instanceColor=new $n(new Float32Array(144).fill(1),3),this.root.add(this.shadows.mesh,this.warns,...this.gates.objects,this.blocks,this.parts,...this.mobs.objects,...this.boss.objects,this.rocks,this.hero,this.bow,...this.arrows.objects),this.loadModels()}loadModels(){const t=n=>console.warn("model",n);Ni(m_,g_).then(n=>{const r=Ve(n.geometry,ze({map:n.texture}),1);r.setMatrixAt(0,new $t),r.count=1,r.instanceMatrix.needsUpdate=!0,this.heroPlayer=new Do(r,n.frames),this.heroBaked=r,this.root.add(r),this.hero.visible=!1},t),[[R_,P_],[__,M_],[b_,E_]].forEach(([n,r],s)=>Ni(n,r).then(a=>this.mobs.useBaked(s,a.geometry,ze({flash:!0,map:a.texture}),a.frames,6),t)),Ni(S_,y_).then(n=>{var r;return this.boss.useBaked(n.geometry,ze({flash:!0,map:n.texture}),n.frames,(r=rl.rate)!=null?r:3.2)},t),Ni(A_,C_).then(n=>{this.blocks.geometry=n.geometry,this.blocks.material=ze({map:n.texture}),this.plinth=n.size.clone(),this.rocks.geometry=new Pr(.9,1),this.rocks.material=ze({map:n.texture,flat:!0})},t),Ni(T_,w_).then(n=>{al.junk=[{geometry:n.geometry,material:ze({map:n.texture})}]},t),Ni(v_,x_).then(n=>{this.parts.geometry=n.geometry,this.parts.material=ze({map:n.texture})},t)}kindOf(t){return t>=.66*this.maxHp?2:t>=.33*this.maxHp?1:0}load(t,e){var s;(s=this.world)==null||s.dispose();const n=new p_(al,t.end+40,e);this.world=n,n.fit=5,n.scene.add(this.root);const r=qg(ue*2+1.2,1.5,4.2);r.position.set(0,0,-(t.boss.z+5)),n.scene.add(r),r.traverse(a=>{if(!(a instanceof _e))return;const o=a.material;n.own(a.geometry,o),o.map&&n.own(o.map)}),this.arrows.clear(),this.mobs.reset(),this.boss.reset(),this.passT.clear(),this.brokeT.clear(),this.hurtT=this.evolveT=-9,this.shownTier=-1,this.maxHp=Math.max(1,...t.mobs.map(a=>a.hp0))}volley(t,e,n,r){const s=Math.min(5,Math.max(1,r)),a=mr(Math.floor(e*997)),o=new Nt(L_[t.st.tier]),c=1+t.st.tier*.18;for(let l=0;l<s;l++){const u=n.length?n[l%n.length]:{x:t.x+(l-(s-1)/2)*.8,y:1.2,z:-t.z-28},h=(l-(s-1)/2)*.35;this.arrows.fire(t.x-.5+h*.3,1.55,-t.z-.6,u.x+h+(a()-.5)*.3,u.y,u.z,e+l*.025,c)}for(let l=0;l<this.arrows.mesh.instanceMatrix.count;l++)this.arrows.mesh.setColorAt(l,o);this.arrows.mesh.instanceColor&&(this.arrows.mesh.instanceColor.needsUpdate=!0)}sync(t,e,n,r){var v,P;const s=this.world,a=-t.z,o=t.boss,c=t.phase==="boss"||t.phase!=="run"&&o.awake;s.follow(t.x,a,n,r,c?1.15:1,c?2:0);const l=t.phase==="run",u=e*10,h=Math.max(0,1-(e-this.hurtT)/.4),f=(t.tx-t.x)*.06;this.heroGait.uniforms.uTime.value=e,this.heroGait.uniforms.uAmount.value=l?1:0,this.hero.position.set(t.x,l?Math.abs(Math.sin(u))*.07:0,a),this.hero.rotation.set(-.08+h*.3,0,Math.sin(u)*(l?.04:.02)-f),this.hero.visible=t.phase!=="lost"||e-this.hurtT<.6,this.shownTier!==t.st.tier&&(this.shownTier=t.st.tier,this.bowMat.color.set(Vi[t.st.tier]));const d=Math.max(0,1-(e-this.evolveT)/.6),g=(1+t.st.tier*.16)*(1+d*.6*_i.bump(1-d));if(this.bow.position.set(t.x-.55,1.3+this.hero.position.y,a-.5),this.bow.rotation.set(0,0,.12),this.bow.scale.setScalar(g*1.6),this.bow.visible=this.hero.visible,this.heroBaked){const S=this.heroBaked;S.position.copy(this.hero.position),S.rotation.copy(this.hero.rotation),S.scale.setScalar(fl),S.visible=t.phase!=="lost"||e-this.hurtT<.6,(v=this.heroPlayer)==null||v.set(0,l?e*10/(Math.PI*2):.25),(P=this.heroPlayer)==null||P.done(),this.bow.visible=!1,this.hero.visible=!1}this.gates.sync(t.rows.filter(S=>S.z-t.z<95).map(S=>{var w;return{z:-S.z,k:S.k,passAge:S.passed?e-((w=this.passT.get(S.i))!=null?w:e):-1,choice:S.choice,gates:S.gates.map(R=>R?{color:R.op.s==="e"?pa.evolve:R.good?pa.good:pa.bad,swell:1}:null)}})),this.shadows.begin(),this.shadows.add(t.x,a,1.3);let _=0;const m=new Nt;for(const S of t.blocks){if(S.z-t.z>95||S.z-t.z<-4)continue;const[w,R]=fs(S.k)[S.slot];S.dead&&!this.brokeT.has(S.id)&&this.brokeT.set(S.id,e);const y=S.dead?Math.min(1,(e-this.brokeT.get(S.id))/.25):0;if(S.dead&&y>=1)continue;if(_>=24)break;const x=Math.max(0,1-(t.t-S.hitT)/.1),L=R-w-.25,H=(w+R)/2+(x?Math.sin(e*80)*.05:0);if(this.plinth){const V=Math.min(L/this.plinth.x,1.6/this.plinth.y);fn(this.blocks,_,H,-y*1.6,-S.z,V,V*(1-y*.3),V,0,0,0)}else fn(this.blocks,_,H,-y*1.6,-S.z,L,1.6*(1-y*.3),1.3,0,0,0);const D=1-S.hp/S.hp0;m.setRGB(1-D*.35+x*.3,1-D*.4+x*.3,1-D*.3+x*.3),this.blocks.setColorAt(_,m),this.shadows.add((w+R)/2,-S.z,L*.7),_++}this.blocks.count=_,this.blocks.instanceMatrix.needsUpdate=!0,this.blocks.instanceColor&&(this.blocks.instanceColor.needsUpdate=!0);let p=0;for(const S of t.parts)S.z-t.z>95||S.passed&&(!S.got||t.z-S.z>2)||S.slots.forEach((w,R)=>{if(!w||p>=12||S.passed&&R!==S.choice)return;const y=S.passed?Math.min(1,(t.z-S.z)/2):0,x=Ge(S.k,R);fn(this.parts,p,x+(t.x-x)*y,1.4+Math.sin(e*3+R)*.15+y*1.5,-S.z,1.3*(1-y),1.3*(1-y),1.3*(1-y),0,e*2.5+R,0),this.shadows.add(x,-S.z,1.1*(1-y)),p++});this.parts.count=p,this.parts.instanceMatrix.needsUpdate=!0;const M=[];for(const S of t.mobs)S.gone||S.z-t.z>95||S.z-t.z<-6||M.push({id:S.id,x:S.x,z:-S.z,r:S.r,tier:this.kindOf(S.hp0),hit:Math.max(0,1-(t.t-S.hitT)/.12),dead:S.dead});this.mobs.sync(M,e,this.shadows),this.boss.sync(o.z-t.z<95?{x:o.x,z:-o.z,r:o.r,hit:Math.max(0,1-(t.t-o.hitT)/.12),dead:o.dead,stomp:0,walking:o.awake}:null,e,this.shadows);let E=0;for(const S of t.rocks){const w=S.t-t.t;if(w<-.5||E>=6)continue;const R=Ge(3,S.slot),y=1-Math.max(0,w)/lo;fn(this.warns,E,R,.05,a,1.2+.2*Math.sin(e*20),1,1.2+.2*Math.sin(e*20));const x=w>0?9*(1-_i.inCubic(y))+.9:.9-Math.min(1,-w/.5)*1.4;fn(this.rocks,E,R,x,a-.4,1,1,1,e*3,e*2,0),E++}this.rocks.count=this.warns.count=E,this.rocks.instanceMatrix.needsUpdate=this.warns.instanceMatrix.needsUpdate=!0,this.shadows.end(),this.arrows.sync(e)}}function H_(i){return[["#9ad15a","#5a9a33","#e3f5b0"],["#b48cff","#7046c8","#ece0ff"],["#ff7a45","#c23a2a","#ffd27a"]][Math.max(0,Math.min(2,i))]}const G_='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 13c0-5.5 4.5-9 10-9s10 3.5 10 9v6c0 5-4.5 8.5-10 8.5S6 24 6 19z" fill="#9c958c" stroke="#3a352f" stroke-width="2.2"/><path d="M7 11c2-4 5.5-6.2 9-6.2s7 2.2 9 6.2c-3 .8-6 .6-9-.4-3 1-6 1.2-9 .4z" fill="#7fb04a" stroke="#3a352f" stroke-width="1.6"/><path d="M22 6l2.5-3 1 4" fill="#b48cff" stroke="#3a352f" stroke-width="1.2"/><ellipse cx="12" cy="17" rx="2.3" ry="1.8" fill="#ffc94a"/><ellipse cx="20" cy="17" rx="2.3" ry="1.8" fill="#ffc94a"/><path d="M12 23.5h8" stroke="#3a352f" stroke-width="2.2" stroke-linecap="round"/></svg>',dl='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8.5-5.2-8.5-11.2A4.8 4.8 0 0 1 12 6.6a4.8 4.8 0 0 1 8.5 3.2C20.5 15.8 12 21 12 21z" fill="currentColor" stroke="#4a1220" stroke-width="1.8" stroke-linejoin="round"/><path d="M7.2 9.2c.4-1.3 1.4-2 2.6-2" fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/></svg>',pl='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2.5c8 3 11 9 10.2 19" fill="none" stroke="#3a2a1a" stroke-width="4.4" stroke-linecap="round"/><path d="M6 2.5c8 3 11 9 10.2 19" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M6 2.5l10.2 19" stroke="#f6f1e2" stroke-width="1.2"/></svg>';function V_(i,t,e){var n,r,s,a,o;if(i==="play"){Uh(t,e),Oh(t,G_);const c=an("br-hearts",Array.from({length:co},(l,u)=>`<i id="br-heart${u}" class="on">${dl}</i>`).join(""));c.id="br-hearts",t.append(c),t.append(an("br-stats",`<span>${qe.arrows}<b id="br-a"></b></span><span>${qe.bolt}<b id="br-r"></b></span><span>${qe.sword}<b id="br-d"></b></span>`)),t.append(an("br-bowpill",`<i id="br-bow" style="color:${Vi[0]}">${pl}</i><b id="br-tier">${pi[0]}</b>${[0,1,2].map(l=>`<u id="br-part${l}"></u>`).join("")}`))}else if(i==="result"){const c=e.run,l=(r=(n=c==null?void 0:c.sim)==null?void 0:n.st.tier)!=null?r:0;Fh(t,e,[{icon:dl.replace("currentColor","#ff4d6d"),value:String((a=(s=c==null?void 0:c.sim)==null?void 0:s.hearts)!=null?a:0),label:"剩下的心"},{icon:pl.replace(/currentColor/g,Vi[l]),value:pi[l],label:"弓"},{icon:Dh,value:String((o=c==null?void 0:c.kills)!=null?o:0),label:"击败"}])}}const W_={"1-1":[1,0,0],"1-2":[0,1,0,0],"1-3":[0,1,0,1],"1-4":[0,1,1,0],"1-5":[0,0,0,1],"1-6":[1,0,0,0],"1-7":[1,2,2,0],"1-8":[1,1,1,0,0],"2-1":[1,0,0],"2-2":[0,0,0],"2-3":[0,0,0],"2-4":[0,0,0],"2-5":[0,1,0],"2-6":[1,0,0],"2-7":[0,1,2],"2-8":[1,0,0,0],"3-1":[0,1,0,0],"3-2":[1,1,0,0,1,1],"3-3":[0,1,1,0,0,0],"3-4":[0,0,0,1,0,0,0],"3-5":[1,0,0,1,1,0],"3-6":[1,0,0,1,1,0,1],"3-7":[0,2,1,0,1,0],"3-8":[1,1,0,1,1,0,1,1,0],"4-1":[0,1,0],"4-2":[0,0,0,1],"4-3":[1,0,1,0],"4-4":[1,0,1,1,0,0,0],"4-5":[0,0,0,0],"4-6":[0,0,0,0],"4-7":[1,0,0,1,1,0],"4-8":[2,0,0,2,1,0,2],"5-1":[1,0,0],"5-2":[1,0,0],"5-3":[0,1,1,1,0,1],"5-4":[0,0,0,1],"5-5":[1,1,0,0,1,0],"5-6":[2,1,2],"5-7":[1,1,0,1,0,0],"5-8":[1,0,0,1,0,0,0],"6-1":[0,0,1],"6-2":[0,0,1,0,1,0],"6-3":[0,1,0,1,0,1],"6-4":[0,0,1,2,0],"6-5":[0,1,0,0,1,0],"6-6":[0,0,0,0,1,0,1],"6-7":[1,0,1,1,0,0],"6-8":[0,1,0,0,1,1,0,1,1,0]},Pt=(i,t={})=>({rows:i,...t}),so=[{name:"弹道",icon:qe.arrows,levels:[Pt(["g a+1 r+50","z .8n .8n","g r+50 a+1","z 1n 1n","g a+2 d+5","B 7n"],{tip:["arrows","挑加攻击的门"]}),Pt(["g r+50 a+1","z 1n","g a+1 d+5","z .9n .9n","g r+100 a+1","z 1n 1n","g a+2 r+50","B 8.5n"]),Pt(["g d+10 a+1","z 1n 1n","g a+1 r+50","z 1.2n","g dx2 a+1","z 1n 1n","g r+50 a+2","z 1.1n 1.1n","B 7.5n"]),Pt(["g a+1 d+5","z .9n","g r+50 d+10","z 1n 1n","g a+1 r+50","z .8n .8n .8n","g dx2 a+2","B 8n"]),Pt(["g r+50 a+1","z 1n 1n","g a+2 dx2","z 1.5n","g r+50 a+1","z 1n 1n","g a+1 d+20","z 1.2n 1.2n","B 8n"]),Pt(["g a+1 r+100","z .9n .9n","g d+10 a+1","z 1.3n","g a+2 r+50","z 1n 1n 1n","g dx2 r+100","z 1.2n","B 8n"]),Pt(["g d+5 a+1 r+50","z 1n","g a+1 dx2 r+50","z 1n 1n","g r+100 a+2 d+20","z 1.2n 1.2n","g a+2 dx2 r+50","B 8.5n"]),Pt(["g a+1 r+50","z .9n .9n","g r+50 a+1","z 1.2n","g a+2 d+20","z 1n 1n","g dx2 r+100","z 1.1n 1.1n","g a+3 r+100","B 9n"])]},{name:"石块",icon:qe.block,levels:[Pt(["g a+1 r+50","b 1.5n .","g r+50 a+1","b . 1.5n","g a+2 d+5","B 7n"],{tip:["block","打碎石块或绕开"]}),Pt(["g a+1 d+2","z 1n","b 2n 6n","g r+100 a+1","z 1n 1n","b . 3n",">-8 g a+2 d+5","B 9n"]),Pt(["b . 1n","g d+10 a+1","z 1n 1n","b 3n 1.5n","g a+1 r+50","z 1.2n","b 2n . 4n","g dx2 a+1","B 8n"]),Pt(["g a+1 d+3","b 1n 4n",">-8 g r+50 d+2","z 1n 1n","b 4n 1n",">-8 g a+2 d+5","z 1.2n","b 1.5n 5n 1.5n","B 9.5n"]),Pt(["g r+50 a+1","z .8n .8n","b 2n 2n","g a+1 dx2","z 1n","b . 3n .","g a+2 r+50","z 1n 1n","b 2n 6n","B 8n"]),Pt(["b 1n .","g a+1 r+100","b . 2n","g d+10 a+1","z 1n 1n","b 3n 3n","g a+2 r+50","z 1.2n 1.2n","b 1.5n . 1.5n","B 8.5n"]),Pt(["g a+1 r+50 d+5","b 1.5n 1.5n .","g r+50 a+1 dx2","z 1n 1n","b . 4n 4n","g a+2 r+100 d+20","z 1.2n","b 3n 1n 3n","B 8.5n"]),Pt(["g a+1 r+50","b 1n 3n","z 1n","g r+50 a+1","b 4n 1.5n","z 1n 1n","g a+2 dx2","b 2n 2n","z 1.2n 1.2n","g r+100 a+2","B 10n"])]},{name:"进化",icon:qe.bow,levels:[Pt(["p 1.","z .8n","p .1","z 1n","p 1.","g a+1 r+50","B 7n"],{tip:["bow","集齐 3 个零件进化"]}),Pt(["g a+1 r+50","p .1","z 1n 1n","p 1.","g r+50 a+1","p .1","z 1.2n","g e a+2","B 7.5n"]),Pt(["p 1.","g a+1 e","z 1n","p .1","g r+50 a+1","z 1n 1n","p 1.","b . 2n","g a+2 dx2","B 8n"]),Pt(["p .1","b . 1.5n","p 1.","g e a+1","z 1n 1n","p .1.","g a+1 r+50","z 1.2n","p 1..","g r+100 e","B 8n"]),Pt(["g a+1 r+50","p 1.","z 1n","p 1.","b 3n .","p .1","g e dx2","z 1n 1n","g a+2 r+50","B 8.5n"]),Pt(["p .1","g e a+1","p 1.","z 1n 1n","p .1","b 2n 2n","g a+1 r+100","z 1.2n","p 1.","g e a+2","B 8.5n"]),Pt(["p 1.1","g a+1 r+50 e","z 1n","p .1.","b 2n . 2n","p 1..","g e a+2 dx2","z 1n 1n","g r+100 a+1","B 8.5n"]),Pt(["p .1","g a+1 e","p 1.","z 1n 1n","p .1","g r+50 e","b 2n 2n","p 1.","z 1.2n","p .1","g e a+2","p 1.","B 9n"])]},{name:"坏门",icon:qe.bad,levels:[Pt(["g a+1 a-1","z 1n","g r-30 r+50","z 1n 1n","g a+2 d/2","B 7n"],{tip:["bad","红门会减攻击"]}),Pt(["g a+2 r-30","z 1n","g dx2 a-1","z 1n 1n","g r+100 d/2","z 1.2n","g a+1 r+50","B 7.5n"]),Pt(["g a+1 r+50","z 1n","g a+3 r-50","z 1n 1n","g d-5 a+1","b 2n .","g dx3 a-2","B 8n"]),Pt(["g d/2 a+2","z 1n","p 1.","g r-30 a+1","z 1n 1n","p .1","g e r-30","p 1.","z 1.2n","g a+2 d/2","B 8n"]),Pt(["g a+1 r+50 a-1","z 1n","g r+100 a+2 d/2","z 1n 1n","g dx2 a-1 r+50","b . 2n","g a+3 r-50 e","B 8n"]),Pt(["g a+2 r-30","b 1.5n .","g r+50 d-5","z 1n 1n","g dx3 a-1","z 1.2n","g a+2 r-30","z 1n 1n","B 8.5n"]),Pt(["p .1","g a+1 d/2","p 1.","z 1n 1n","g r-30 e","p .1","b 2n 2n","g a+3 r-50","z 1.2n 1.2n","B 8.5n"]),Pt(["g a+1 a-1 r+50","z 1n","g dx2 r-30 a+2","p 1..","z 1n 1n","g e d/2 r+100","p .1.","b 2n . 2n","g a+3 r-50 dx2","p ..1","B 9n"])]},{name:"落石",icon:qe.rock,levels:[Pt(["g a+1 r+50","z 1n","g r+50 a+1","z 1n","g a+2 d+10","B 9n 2.2"],{tip:["rock","躲开大怪扔的石头"]}),Pt(["g a+1 r+50","z 1n 1n","b 2n .","g dx2 a+1","z 1.2n","g a+2 r+50","B 9n 2"]),Pt(["p 1.","g a+1 r+100","z 1n","p .1","g e a+1","z 1n 1n","p 1.","g a+2 d+20","B 9.5n 2"]),Pt(["g a+2 r-30","z 1n","g dx2 a-1","b . 2n","g r+100 a+1","z 1.2n 1.2n","g a+2 dx2","B 9.5n 1.8"]),Pt(["g a+1 r+50","b 1.5n 4n","z 1n 1n","p .1","g e r+50","p 1.","z 1.2n","p .1","g a+2 dx2","B 10n 1.8"]),Pt(["g a+1 r+50 d+5","z 1n","b 2n . 2n","g dx2 a+2 r-30","z 1n 1n","g e a+1 r+100","z 1.2n","B 10n 1.6"]),Pt(["p .1","g a+1 e","p 1.","z 1n 1n","p .1","g a+2 d/2","b 3n 1.5n","g r+100 a+1","z 1.2n","B 10n 1.6"]),Pt(["g a+1 r+50","z 1n","p 1.","g e a+1","p .1","b 2n 2n","p 1.","g a+2 r+100","z 1.2n 1.2n","g dx2 a+2","B 10.5n 1.5"])]},{name:"神弓",icon:qe.boss,levels:[Pt(["g e a+1","z 1n","g e r+50","z 1n 1n","g e a+2","B 8n 2"],{tip:["bow","一路进化到雷霆弓"]}),Pt(["p 1.","g a+1 r+50","p .1","b 2n .","p 1.","g e dx2","z 1n 1n","g a+2 r+50","B 9n 2"]),Pt(["g a+2 r-30","p .1","z 1n","p 1.","b . 2n","p .1","g e d/2","z 1.2n 1.2n","g a+1 r+100","B 9.5n 1.8"]),Pt(["p 1..","g e a+1 r+50","p .1.","z 1n 1n","p ..1","b 2n . 3n","g a+2 dx2 r-30","z 1.2n","B 9.5n 1.8"]),Pt(["g a+1 r+50","b 1n 3n","p .1","z 1n","p 1.","g e a+1","p .1","z 1n 1n","b 3n 1.5n","g a+2 r+100","B 10n 1.6"]),Pt(["p .1","g e a-1","p 1.","z 1n 1n","g a+3 r-50","p .1","b 2n 2n","p 1.","g e dx2","z 1.2n","B 10n 1.6"]),Pt(["g a+1 e r+50","z 1n","p 1.1","b . 2n .","g e a+2 d/2","p .1.","z 1.2n 1.2n","p 1..","g r+100 e a+1","B 10.5n 1.5"]),Pt(["g e a+1","p .1","z 1n","p 1.","g e r+50","p .1","b 2n 2n","z 1n 1n","g e a+2","p 1.","z 1.2n","p .1","g e dx2","p 1.","B 11n 1.5"])]}];so.forEach((i,t)=>i.levels.forEach((e,n)=>{e.route=W_[`${t+1}-${n+1}`]}));class X_{constructor(){this.bits=[],this.floats=[],this.shakeAmt=0,this.ox=0,this.oy=0}burst(t,e,n,r=14,s=160,a={}){var c,l,u;const o=Array.isArray(n)?n:[n];for(let h=0;h<r;h++){const f=Math.random()*Math.PI*2,d=s*(.4+Math.random()*.8);this.bits.push({x:t,y:e,vx:Math.cos(f)*d,vy:Math.sin(f)*d-s*.3,r:((c=a.size)!=null?c:4)*(.6+Math.random()*.8),life:((l=a.life)!=null?l:.6)*(.7+Math.random()*.6),age:0,color:o[h%o.length],grav:(u=a.grav)!=null?u:420,square:!!a.square})}}float(t,e,n,r="#fff",s=20,a=.9){this.floats.push({x:t,y:e,text:n,color:r,size:s,age:0,life:a,rise:40+s})}shake(t){this.shakeAmt=Math.max(this.shakeAmt,t)}step(t){for(const n of this.bits)n.age+=t,n.vy+=n.grav*t,n.vx*=1-1.5*t,n.x+=n.vx*t,n.y+=n.vy*t;this.bits=this.bits.filter(n=>n.age<n.life);for(const n of this.floats)n.age+=t;this.floats=this.floats.filter(n=>n.age<n.life),this.shakeAmt=Math.max(0,this.shakeAmt-t*40);const e=this.shakeAmt;this.ox=e?(Math.random()*2-1)*e:0,this.oy=e?(Math.random()*2-1)*e:0}draw(t){for(const e of this.bits){const n=1-e.age/e.life;t.globalAlpha=Be(n*1.5),t.fillStyle=e.color,e.square?t.fillRect(e.x-e.r,e.y-e.r,e.r*2,e.r*2):(t.beginPath(),t.arc(e.x,e.y,e.r*(.5+n*.5),0,Math.PI*2),t.fill())}t.globalAlpha=1;for(const e of this.floats){const n=e.age/e.life,r=n<.18?_i.outBack(n/.18):1;t.globalAlpha=n>.7?Be((1-n)/.3):1,hi(t,e.text,e.x,e.y-_i.outCubic(n)*e.rise,e.size*(.6+.4*r),e.color)}t.globalAlpha=1}get busy(){return this.bits.length>0||this.floats.length>0}}function q_(i,t=1.5){return i<0||i>.45?1:1+Be(.15+.22*Math.log2(Math.max(1,t)),.15,.7)*_i.bump(i/.45)}function $_(i,t,e,n,r,s="#3f7bff"){const a=Oi(t);i.font=`${Math.round(r)}px 'Game Display', 'PingFang SC', sans-serif`;const o=Math.max(r*1.5,i.measureText(a).width+r*.8),c=r*1.25,l=e-o/2,u=n-c;i.beginPath(),i.moveTo(e-r*.22,u+c-2),i.lineTo(e,u+c+r*.28),i.lineTo(e+r*.22,u+c-2),i.closePath(),i.fillStyle=s,i.fill(),i.lineWidth=Math.max(1.5,r*.09),i.strokeStyle=pn,i.stroke(),_s(i,l,u,o,c,c*.4,s,pn,Math.max(1.5,r*.09)),hi(i,a,e,u+c/2,r,"#ffffff")}const ml=new Map;function gl(i,t){const e=i+t;let n=ml.get(e);if(!n){const r=i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" ').replace(/currentColor/g,t);n=new Image,n.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,ml.set(e,n)}return n}function _h(i,t,e,n,r){t.complete&&t.naturalWidth>0&&i.drawImage(t,e-r/2,n-r/2,r,r)}function is(i,t,e,n,r){i.font=`${Math.round(r)}px 'Game Display', 'PingFang SC', sans-serif`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round";const s=n+r*.04;i.lineWidth=Math.max(3,r*.24),i.strokeStyle="#3a1f0c",i.fillStyle="#3a1f0c",i.strokeText(t,e,s+r*.09),i.fillText(t,e,s+r*.09),i.strokeStyle="#5c3412",i.strokeText(t,e,s);const a=i.createLinearGradient(0,s-r*.45,0,s+r*.45);a.addColorStop(0,"#fffbe2"),a.addColorStop(.42,"#ffdc52"),a.addColorStop(.58,"#f6b326"),a.addColorStop(1,"#d4740f"),i.fillStyle=a,i.fillText(t,e,s)}class Y_{constructor(){this.list=[]}add(t){this.list.length>160||this.list.push({vx:0,vy:0,t:0,color:"#ffffff",a:0,...t})}clear(){this.list.length=0}spark(t,e,n){this.add({kind:"flash",x:t,y:e,life:.09,size:n*.9,color:"#fff3c4"});for(let r=0;r<3;r++)this.add({kind:"spark",x:t,y:e,life:.16,size:n,a:Math.PI/2+(r-1)*.65+(Math.random()-.5)*.4,color:"#ffe08a"})}muzzle(t,e,n){this.add({kind:"flash",x:t,y:e,life:.07,size:n,color:"#ffd77a"})}puff(t,e,n,r=4,s="#e9e4dc"){for(let a=0;a<r;a++){const o=a/r*Math.PI*2+Math.random()*.8;this.add({kind:"puff",x:t+Math.cos(o)*n*.35,y:e+Math.sin(o)*n*.2,vx:Math.cos(o)*n*.9,vy:-n*(.5+Math.random()*.5),life:.65+Math.random()*.2,size:n*(.45+Math.random()*.25),color:s})}}ring(t,e,n,r,s=.55){this.add({kind:"ring",x:t,y:e,life:s,size:n,color:r,a:.32})}fireball(t,e,n){this.puff(t,e-n*.35,n*.85,4,"#7a6e66"),this.add({kind:"fire",x:t,y:e,life:.85,size:n}),this.add({kind:"fire",x:t-n*.4,y:e+n*.15,life:.7,size:n*.6}),this.add({kind:"fire",x:t+n*.45,y:e-n*.1,life:.75,size:n*.55});for(let r=0;r<9;r++){const s=-Math.PI/2+(Math.random()-.5)*2.6,a=n*(2.2+Math.random()*1.6);this.add({kind:"chunk",x:t,y:e,vx:Math.cos(s)*a,vy:Math.sin(s)*a,life:.9,size:n*(.07+Math.random()*.05),color:r%3?"#3a2a26":"#c9453a",a:Math.random()*6})}}step(t){for(const e of this.list)e.t+=t,e.x+=e.vx*t,e.y+=e.vy*t,e.kind==="chunk"?e.vy+=1400*t:e.kind==="puff"&&(e.vx*=.9,e.vy*=.94);this.list=this.list.filter(e=>e.t<e.life)}draw(t){for(const e of this.list){const n=e.t/e.life;switch(t.save(),e.kind){case"spark":{t.globalCompositeOperation="lighter",t.globalAlpha=1-n;const r=e.size*(.2+.9*n),s=r+e.size*.7*(1-n);t.strokeStyle=e.color,t.lineWidth=Math.max(1.5,e.size*.14),t.lineCap="round",t.beginPath(),t.moveTo(e.x+Math.cos(e.a)*r,e.y+Math.sin(e.a)*r),t.lineTo(e.x+Math.cos(e.a)*s,e.y+Math.sin(e.a)*s),t.stroke();break}case"flash":{t.globalCompositeOperation="lighter",t.globalAlpha=1-n;const r=e.size*(.6+.6*n),s=t.createRadialGradient(e.x,e.y,0,e.x,e.y,r);s.addColorStop(0,"rgba(255,255,240,1)"),s.addColorStop(.35,e.color),s.addColorStop(1,"rgba(255,160,40,0)"),t.fillStyle=s,t.beginPath(),t.arc(e.x,e.y,r,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,250,220,0.9)",t.beginPath();for(let a=0;a<8;a++){const o=a*Math.PI/4,c=a%2?r*.18:r*1.25;t.lineTo(e.x+Math.cos(o)*c,e.y+Math.sin(o)*c)}t.closePath(),t.fill();break}case"puff":{t.globalAlpha=.75*(1-n)*Math.min(1,e.t/.06);const r=e.size*(.7+.8*n),s=t.createRadialGradient(e.x-r*.25,e.y-r*.3,r*.1,e.x,e.y,r);s.addColorStop(0,e.color),s.addColorStop(.7,e.color),s.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=s,t.beginPath(),t.arc(e.x,e.y,r,0,Math.PI*2),t.fill();break}case"ring":{t.globalCompositeOperation="lighter",t.globalAlpha=(1-n)*.9,t.strokeStyle=e.color,t.lineWidth=e.size*.12*(1-n)+2,t.beginPath(),t.ellipse(e.x,e.y,e.size*(.55+.75*n),e.size*e.a*(.55+.75*n),0,0,Math.PI*2),t.stroke();break}case"fire":{t.globalCompositeOperation="lighter";const r=.35+.65*Math.min(1,n/.3);t.globalAlpha=n<.45?1:1-(n-.45)/.55;const s=e.size*r,a=t.createRadialGradient(e.x,e.y,0,e.x,e.y,s);a.addColorStop(0,"rgba(255,255,230,1)"),a.addColorStop(.25,"rgba(255,214,90,0.95)"),a.addColorStop(.6,"rgba(255,120,30,0.75)"),a.addColorStop(1,"rgba(200,40,10,0)"),t.fillStyle=a,t.beginPath(),t.arc(e.x,e.y,s,0,Math.PI*2),t.fill();break}case"chunk":{t.globalAlpha=1-Math.max(0,(n-.6)/.4),t.translate(e.x,e.y),t.rotate(e.a+e.t*9),t.fillStyle=e.color,t.fillRect(-e.size,-e.size*.7,e.size*2,e.size*1.4);break}}t.restore()}}}function ma(i,t,e,n,r=0){const s=n/100;i.save(),i.translate(t,e),i.rotate(r),i.scale(s,s),i.lineJoin="round",i.lineCap="round";const a="#1d1f26",o=()=>{i.beginPath(),i.moveTo(-9,40),i.lineTo(-9,8),i.arc(0,8,9,Math.PI,0),i.lineTo(9,34),i.arc(16,40,7.5,-Math.PI*.95,Math.PI*.2),i.arc(22,52,7.5,-Math.PI*.75,Math.PI*.3),i.arc(24,64,7.5,-Math.PI*.6,Math.PI*.45),i.quadraticCurveTo(24,82,14,88),i.lineTo(-14,88),i.quadraticCurveTo(-26,74,-27,60),i.quadraticCurveTo(-28,48,-18,47),i.quadraticCurveTo(-11,47,-9,54),i.closePath()};i.save(),i.translate(4,5),o(),i.fillStyle="rgba(0,0,0,0.28)",i.fill(),i.restore(),o(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=5,i.strokeStyle=a,i.stroke(),i.lineWidth=3,i.beginPath(),i.moveTo(9,36),i.quadraticCurveTo(13,44,17,46),i.moveTo(14,50),i.quadraticCurveTo(18,57,23,58),i.moveTo(-9,54),i.quadraticCurveTo(-4,62,2,64),i.stroke(),i.beginPath(),i.moveTo(-16,86),i.lineTo(16,86),i.lineTo(17,98),i.lineTo(-17,98),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=5,i.stroke(),i.restore()}function J_(i,t,e,n,r){i.globalAlpha=r,i.font="21px 'Game Display', 'PingFang SC', sans-serif";const s=i.measureText(e).width,a=s+(t?62:36);_s(i,180-a/2,n+3,a,42,21,"rgba(40,26,14,0.35)"),_s(i,180-a/2,n,a,42,21,"rgba(255,244,214,0.9)","rgba(150,110,60,0.8)",2),t&&_h(i,t,180-a/2+26,n+21,26),hi(i,e,180-a/2+(t?44:18)+s/2,n+21,21,"#4a3320","rgba(255,244,214,0.9)"),i.globalAlpha=1}let Fi=null,ao="",Wi=1,_l=1;const dr=[];let rs=0;function K_(){if(Fi||ao)return Fi;try{const i=document.createElement("canvas"),t=i.getContext("webgl2",{antialias:!0,alpha:!1,powerPreference:"high-performance",depth:!0,stencil:!1});if(!t)throw new Error("no WebGL 2");Fi=new og({canvas:i,context:t,antialias:!0}),Fi.outputColorSpace=me,_l=typeof navigator<"u"&&navigator.webdriver?1:Math.min(window.devicePixelRatio||1,2),Wi=_l}catch(i){ao=i instanceof Error?i.message:String(i),Fi=null}return Fi}const Z_=()=>ao;function j_(i,t,e,n){const r=K_();if(!r)return!1;Q_();const s=Math.max(1,innerWidth),a=Math.max(1,innerHeight),o=Math.round(s*Wi),c=Math.round(a*Wi),l=r.domElement;(l.width!==o||l.height!==c)&&r.setSize(o,c,!1);const u=s/a;return Math.abs(n.aspect-u)>1e-4&&(n.aspect=u,n.updateProjectionMatrix()),r.render(e,n),globalThis.__tris=r.info.render.triangles,i.drawImage(l,t.x,t.y,t.w,t.h),!0}function Q_(){const i=performance.now();if(rs&&i-rs<250&&dr.push(i-rs),rs=i,dr.length<120)return;const t=dr.reduce((e,n)=>e+n,0)/dr.length;dr.length=0,t>22&&Wi>1&&(Wi=Math.max(1,Wi-.25))}const pr=new I;function tv(i,t,e,n,r){pr.set(e,n,r).applyMatrix4(i.matrixWorldInverse);const s=-pr.z;return pr.applyMatrix4(i.projectionMatrix),{x:t.x+(pr.x+1)/2*t.w,y:t.y+(1-pr.y)/2*t.h,depth:s}}function ln(i,t,e){return t.h/(2*Math.max(.1,e)*Math.tan(i.fov*Math.PI/360))}class ev{constructor(){this.tx=0,this.mpu=.03,this.x0=180,this.down=!1,this.startX=0,this.startTx=0,this.moved=!1,this.gain=1.25}laneAt(t){return Gn((t-this.x0)*this.mpu)}screenAt(t){return this.x0+t/this.mpu}press(t,e){this.down=!0,this.moved=!1,this.startX=t,this.startTx=Math.abs(this.tx-e)<.05?e:this.tx}drag(t){this.down&&(Math.abs(t-this.startX)>4&&(this.moved=!0),this.moved&&(this.tx=Gn(this.startTx+(t-this.startX)*this.mpu*this.gain)))}release(t){this.down&&(this.down=!1,this.moved||(this.tx=this.laneAt(t)))}get held(){return this.down}path(t,e,n){const r=this.screenAt(t),s=r+(Gn(e)-t)/(this.mpu*this.gain),a=4;return Array.from({length:a+1},(o,c)=>({x:r+(s-r)*c/a,y:n}))}}let ss=null;const nv=()=>ss!=null?ss:ss=new k_;let vh=null;const iv=i=>{let t=7;for(const e of i)t=t*31+e.charCodeAt(0)>>>0;return t},vl={a:"攻击弹道",r:"攻击速度",d:"攻击力",e:"弓进化"};function xl(i){if(i.s==="e")return{icon:"bow",text:"进化"};const t=i.s==="a"?"arrows":i.s==="r"?"bolt":"sword",e=Math.round(i.v*10)/10;return i.s==="r"&&(i.k==="+"||i.k==="-")?{icon:t,text:`${i.k==="+"?"+":"−"}${e}%`}:{icon:t,text:i.k==="+"?`+${e}`:i.k==="-"?`−${e}`:i.k==="x"?`×${e}`:`÷${e}`}}function rv(i){let t=null,e=0,n=-1;const r={sfx:{play(){}},buzz(){},levelId:"demo"};return(s,a,o)=>{(!t||vh!==t||n>=0&&o-n>1.2)&&(t=xh(i,r,!0),t.auto=!0,n=-1,e=o),t.step(Math.min(.05,Math.max(0,o-e))),e=o,t.state!=="play"&&n<0&&(n=o),t.draw(s,a,o)}}function xh(i,t,e=!1){const n=tu(i),r=nv();r.load(n,iv(t.levelId)),r.world.squadLow=e?.12:.62;const s=new ev,a=new X_,o=new Y_;let c=0;e||(oi.on=!1);let l="play",u=0,h=0,f=-1,d=!1;const g=.5;let _=-9,m=1,p="",M=-9,E=-9,v={x:0,y:0,w:360,h:640},P={x:180,y:480},S=-1,w="g",R=-1,y=-1,x=null,L=!1;const H=()=>{const F=ds(n),U=x&&F.some(($,nt)=>{const ht=$.kind==="g"?n.rows[$.i].passed:n.parts[$.i].passed,wt=$.kind==="g"?n.rows[$.i].choice:n.parts[$.i].choice;return ht&&x[nt]!==wt});return x?U&&(x=Zo(_a(n),5,x).best):x=i.route?i.route.slice():Zo(_a(n),5).best,x},D=(F,U,$)=>tv(r.world.camera,v,F,U,$);function V(F){switch(F.e){case"gate":{r.passT.set(F.row,h),n.rows[F.row];const U=xl(F.op),$=D(n.x,.05,-n.z);o.ring($.x,$.y,ln(r.world.camera,v,$.depth)*2.2,F.op.s==="e"?"#c58bff":F.good?"#5dff7a":"#ff4a4a",.6),a.float(P.x,P.y-50,`${vl[F.op.s]} ${U.text}`,F.good?"#ffffff":"#ff8a8a",26,1),_=h,m=1.8,t.sfx.play(F.good?"coin":"hiss"),t.buzz(F.good?"light":"medium"),w==="g"&&S===F.row&&(y=-1);break}case"evolve":{r.evolveT=h,p=pi[F.tier],M=h,o.muzzle(P.x,P.y+30,90),o.ring(P.x,P.y+120,150,Vi[F.tier],.8),o.ring(P.x,P.y+120,90,"#fff3a0",.6),a.shake(6),t.sfx.play("star",1.1),t.sfx.play("win",1.2),t.buzz("medium"),_=h,m=2.5;break}case"part":{a.float(P.x+30,P.y-40,`${F.parts===0?3:F.parts}/3`,"#ffe14d",26,.9),t.sfx.play("coin",1.3),w==="p"&&S===F.row&&(y=-1);break}case"volley":{const U=F.targets.map($=>{if($.kind==="mob"){const nt=n.mobs[$.ref];return{x:nt.x,y:nt.r,z:-nt.z}}if($.kind==="block"){const nt=n.blocks[$.ref];return{x:Ge(nt.k,nt.slot),y:.9,z:-nt.z+.6}}return{x:n.boss.x,y:n.boss.r*1.1,z:-n.boss.z}});r.volley(n,h,U,n.st.a);for(const $ of U.slice(0,3)){const nt=D($.x,$.y,$.z);nt.depth>0&&o.spark(nt.x,nt.y,Be(ln(r.world.camera,v,nt.depth)*.5,7,18))}t.sfx.play("pull",1.3+Math.min(.5,n.st.tier*.1));break}case"kill":{const U=n.mobs[F.mob],$=D(U.x,.7,-U.z),nt=ln(r.world.camera,v,Math.max(1,$.depth)),ht=H_(r.kindOf(U.hp0));o.puff($.x,$.y,nt*1.2,3,ht[2]),o.ring($.x,$.y+nt*.6,nt*1.6,ht[0],.45),c++,t.sfx.play("poof",1+Math.random()*.2),a.shake(2);break}case"break":{const U=n.blocks[F.block],$=D(Ge(U.k,U.slot),.9,-U.z);o.puff($.x,$.y,ln(r.world.camera,v,Math.max(1,$.depth))*1.3,4,"#d8d0c4"),t.sfx.play("thud",1.2),a.shake(3);break}case"hurt":r.hurtT=h,E=h,a.float(P.x,P.y-30,"−1","#ff6b6b",34,1),o.ring(P.x,P.y+110,110,"#ff4a4a",.5),t.sfx.play("thud",.7),t.buzz("heavy"),a.shake(8);break;case"arena":t.sfx.play("thud",.6),a.shake(4);break;case"throw":t.sfx.play("hiss",.8);break;case"land":{const U=D(Ge(3,F.slot),.3,-n.z);o.ring(U.x,U.y,90,"#e2cfa8",.5),o.puff(U.x,U.y,40,3,"#e6d6b8"),F.hit||t.sfx.play("thud",1.4),a.shake(F.hit?0:3);break}case"bossDown":{const U=n.boss,$=D(U.x,U.r*1.2,-U.z),nt=ln(r.world.camera,v,Math.max(1,$.depth));o.fireball($.x,$.y,nt*U.r*1.6),o.puff($.x,$.y+nt,nt*U.r*1.4,5,"#cfc6b8"),t.sfx.play("poof",.7),t.sfx.play("star",1.2),a.shake(12);break}case"end":f=h+(F.won?1.2:.8);break}}function j(F,U){var _t;v=U;const $=r.world;if(r.sync(n,h,1/60,U.w/U.h),$.shake(a.ox*.02,a.oy*.02),!j_(F,U,$.scene,$.camera)){_s(F,20,240,320,120,18,"#fffcf6",pn,3),hi(F,"这台设备打不开 3D",180,285,22,"#221f2e","#fffcf6"),hi(F,Z_().slice(0,40),180,320,13,"#8a8496","#fffcf6");return}const nt=$.camera,ht=D(n.x,0,-n.z),wt=ln(nt,U,ht.depth);s.mpu=1/wt,s.x0=D(0,0,-n.z).x,P={x:ht.x,y:ht.y-wt*2.3};for(const C of n.rows)C.passed||C.z-n.z>80||C.gates.forEach((k,Q)=>{if(!k)return;const Z=D(Ge(C.k,Q),r.gateMid,-C.z);if(Z.depth<=0)return;const Tt=ln(nt,U,Z.depth),ct=Be(Tt*.85,15,38),Bt=xl(k.op),N=D(Ge(C.k,Q),r.gateTop+.35,-C.z);hi(F,`${k.good?"+":"−"}${vl[k.op.s]}`,N.x,N.y,Be(Tt*.62,13,26),"#ffffff"),F.font=`${Math.round(ct)}px 'Game Display', 'PingFang SC', sans-serif`;const ce=F.measureText(Bt.text).width;if(av(F,Z.x-ce/2-ct*.35,Z.y,ct*1.15,k.good,k.op.s==="e"),hi(F,Bt.text,Z.x+ct*.4,Z.y,ct,k.good?"#ffffff":"#ffe0e0"),w==="g"&&S===C.i&&R===Q&&h<y){const Lt=.5+.5*Math.sin(h*7);ma(F,Z.x+ct*.4,Z.y+ct*(.7+.35*Lt),Be(ct*1.9,46,70),-.35)}});for(const C of n.parts)C.passed||C.z-n.z>80||C.slots.forEach((k,Q)=>{if(k&&w==="p"&&S===C.i&&R===Q&&h<y){const Z=D(Ge(C.k,Q),1.4,-C.z);if(Z.depth>0){const Tt=.5+.5*Math.sin(h*7);ma(F,Z.x+12,Z.y+30+14*Tt,56,-.35)}}});for(const C of n.blocks){if(C.dead||C.z-n.z>75)continue;const[k,Q]=fs(C.k)[C.slot],Z=D((k+Q)/2,1.9,-C.z);if(Z.depth<=0)continue;const Tt=ln(nt,U,Z.depth);is(F,Oi(Math.ceil(C.hp)),Z.x,Z.y,Be(Tt*.8,17,30)*(1+.15*Math.max(0,1-(n.t-C.hitT)/.1)))}const Wt=n.mobs.filter(C=>!C.dead&&!C.gone&&C.z-n.z<75).sort((C,k)=>k.z-C.z);for(const C of Wt){const k=D(C.x,C.r*2+.5,-C.z);if(k.depth<=0)continue;const Q=ln(nt,U,k.depth);is(F,Oi(Math.ceil(C.hp)),k.x,k.y,Be(Q*1.1,20,40)*(1+.15*Math.max(0,1-(n.t-C.hitT)/.12)))}const J=n.boss;if(!J.dead&&J.z-n.z<90){const C=D(J.x,J.r*D_+.5,-J.z);C.depth>0&&is(F,Oi(Math.ceil(J.hp)),C.x,C.y,Be(ln(nt,U,C.depth)*1.1,22,46)*(1+.1*Math.max(0,1-(n.t-J.hitT)/.12)))}if(n.phase!=="lost"){const C=24*q_(h-_,m);$_(F,Math.round(di(n.st)),P.x,P.y,C,Vi[n.st.tier]==="#aab6c8"?"#6f7f99":sv(n.st.tier)),e||(ke.set("br-a","text",String(n.st.a)),ke.set("br-r","text",`${Math.round(n.st.r*10)/10}`),ke.set("br-d","text",Oi(Math.round(n.st.d))))}if(o.draw(F),a.draw(F),e)return;zh(n.z/Math.max(1,n.boss.z-16),n.phase!=="run"&&!J.dead?[Oi(Math.ceil(J.hp)),J.hp/J.hp0]:null);for(let C=0;C<co;C++)ke.set(`br-heart${C}`,"show",C<n.hearts?"1":"0");h-E<.05&&ke.set("br-hearts","pop",String(n.hearts)),ke.set("br-tier","text",pi[n.st.tier]);for(let C=0;C<3;C++)ke.set(`br-part${C}`,"show",C<n.st.parts?"1":"0");const rt=document.getElementById("br-bow");if(rt&&rt.dataset.tier!==String(n.st.tier)&&(rt.dataset.tier=String(n.st.tier),rt.style.color=Vi[n.st.tier]),h-M<1.6){const C=h-M,k=Be(Math.min(C/.15,(1.6-C)/.3));F.globalAlpha=k;const Q=46*(C<.2?.6+.6*(C/.2):1.2-.2*Math.min(1,(C-.2)/.3));is(F,`${p}!`,180,U.y+U.h*.3-C*24,Q),F.globalAlpha=1}if(i.tip&&h<3.6){const C=Be(Math.min(h/.25,(3.6-h)/.4));F.globalAlpha=C;const[k,Q]=i.tip;J_(F,gl((_t=qe[k])!=null?_t:qe.bow,"#5a3d22"),Q,U.y+U.h*.105,C)}if(!d&&n.phase==="run"&&h<6){const C=Math.sin(h*3.2);F.globalAlpha=.85,_h(F,gl(qe.drag,"#ffffff"),ht.x,ht.y+wt*.6,40),F.globalAlpha=1,ma(F,ht.x+C*52,ht.y+wt*.6+16,58,-.2)}}const q={get state(){return l},get clock(){return h},get auto(){return L},set auto(F){L=F},get sim(){return n},get kills(){return c},step(F){if(!(oi.on&&!e)&&(h+=F,a.step(F),o.step(F),!(h<g))){for(u+=F;u>=ga;){u-=ga,L&&(s.tx=ps(n,H())),n.tx=s.tx,ho(n);for(const U of n.ev)V(U);n.ev.length=0}f>=0&&h>=f&&l==="play"&&(l=n.phase==="won"?"won":"lost")}},draw(F,U){j(F,U)},press(F){d=!0,s.press(F,n.x)},drag(F){s.drag(F)},release(F){s.release(F)},stars:()=>ru(n.hearts),hint(){const F=ds(n),U=F.findIndex($=>!($.kind==="g"?n.rows[$.i].passed:n.parts[$.i].passed));return U<0?!1:(x=null,w=F[U].kind,S=F[U].i,R=H()[U],y=h+4,!0)},why:()=>n.why||"没守住",busy:()=>!1,hintTarget(){return l!=="play"?null:{x:s.screenAt(s.tx),y:P.y+60}},hintPath(){if(l!=="play"||n.phase==="won"||n.phase==="lost")return null;const F=ps(n,H());return Math.abs(F-s.tx)<.3?null:s.path(s.tx,F,P.y+60)}};return vh=q,q}function sv(i){var t;return(t=["#8a5a32","#6f7f99","#d99a12","#e8542a","#1fb7d9"][i])!=null?t:"#3f7bff"}function av(i,t,e,n,r,s){i.save(),i.translate(t,e),r||i.scale(1,-1),i.beginPath(),i.moveTo(0,-n*.5),i.lineTo(n*.42,-n*.02),i.lineTo(n*.17,-n*.02),i.lineTo(n*.17,n*.48),i.lineTo(-n*.17,n*.48),i.lineTo(-n*.17,-n*.02),i.lineTo(-n*.42,-n*.02),i.closePath();const a=i.createLinearGradient(0,-n*.5,0,n*.5);s?(a.addColorStop(0,"#f3e2ff"),a.addColorStop(1,"#a35cff")):r?(a.addColorStop(0,"#fff6b0"),a.addColorStop(1,"#f2a91a")):(a.addColorStop(0,"#ffffff"),a.addColorStop(1,"#ffc2c8")),i.fillStyle=a,i.fill(),i.lineJoin="round",i.lineWidth=Math.max(1.5,n*.08),i.strokeStyle=r?"#7a4a08":"#7a1f2a",i.stroke(),i.restore()}Lh({id:"bow-runner",music:Ih,title:"神弓进化<small>从木弓到雷霆弓</small>",tagline:"广告里那个，这回是真的",size:{w:360,h:640},chapters:so,start:xh,backdrop:rv(so[0].levels[0]),teach:i=>i.endsWith("-1"),chrome:"overlay",decorate:V_,confetti:!1});
