(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ch={play:'<path d="M8 4.8v14.4a.8.8 0 0 0 1.2.7l11.3-7.2a.8.8 0 0 0 0-1.4L9.2 4.1A.8.8 0 0 0 8 4.8z" fill="currentColor"/>',home:'<path d="M3.5 11.2L12 3.8l8.5 7.4M6 9.4V20h4.5v-5.5h3V20H18V9.4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',back:'<path d="M14.5 5L7.5 12l7 7" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',restart:'<path d="M19 12a7 7 0 1 1-2.05-4.95" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M19.5 3.5v4.5H15" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',next:'<path d="M5 12h12M12.5 6.5L18 12l-5.5 5.5" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',hint:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',star:'<path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" fill="currentColor"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.2" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/>',sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',mute:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9.5l5 5M20.5 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',grid:'<g fill="currentColor"><rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/></g>',skull:'<path d="M12 3a8 8 0 0 0-8 8c0 2.6 1.3 4.6 3 5.8V20h10v-3.2c1.7-1.2 3-3.2 3-5.8a8 8 0 0 0-8-8z" fill="currentColor"/><circle cx="9" cy="11.5" r="1.9" fill="#fff"/><circle cx="15" cy="11.5" r="1.9" fill="#fff"/>'};function Qt(i,t="i"){var e;return`<svg class="${t}" viewBox="0 0 24 24" aria-hidden="true">${(e=Ch[i])!=null?e:""}</svg>`}function go(){return null}function Rh(i,t){var n,s;document.addEventListener("visibilitychange",()=>document.hidden?i():t());const e=go();try{(n=e==null?void 0:e.onHide)==null||n.call(e,i),(s=e==null?void 0:e.onShow)==null||s.call(e,t)}catch{}}let nc=0;function Nr(i="light"){var n;const t=performance.now();if(t-nc<60)return;nc=t;const e=go();try{e!=null&&e.vibrateShort?e.vibrateShort({type:i}):(n=navigator.vibrate)==null||n.call(navigator,i==="heavy"?30:i==="medium"?18:10)}catch{}}function Ph(){var t,e,n,s,r;const i=go();if(!i)return 0;try{const a=(t=i.getMenuButtonBoundingClientRect)==null?void 0:t.call(i),o=(e=i.getSystemInfoSync)==null?void 0:e.call(i),c=o!=null&&o.windowWidth&&o.windowWidth>0?innerWidth/o.windowWidth:1;if(a&&a.bottom>0&&a.bottom<160)return Math.round(a.bottom*c+6);const l=((r=(s=o==null?void 0:o.statusBarHeight)!=null?s:(n=o==null?void 0:o.safeArea)==null?void 0:n.top)!=null?r:0)*c;return Math.round((l>=20?l:24)+42)}catch{return 0}}function Lh(i){const t={v:1,stars:{},sound:!0,music:!0,seen:[]};try{const e=localStorage.getItem(`${i}/save/v1`);if(!e)return t;const n=JSON.parse(e);return{v:1,stars:typeof n.stars=="object"&&n.stars?n.stars:{},sound:n.sound!==!1,music:n.music!==!1,seen:Array.isArray(n.seen)?n.seen.filter(s=>typeof s=="string"):[]}}catch{return t}}function Ih(i,t){try{localStorage.setItem(`${i}/save/v1`,JSON.stringify(t))}catch{}}const ic=.42;class Dh{constructor(t,e,n){this.el=null,this.routed=!1,this.hidden=!1,this.sfx=t,this.url=e,this.on=n;const s=()=>this.wake();for(const r of["pointerdown","touchend","click","keydown"])document.addEventListener(r,s,{capture:!0,passive:!0});window.__music=this}get state(){const t=this.el;return{url:this.url,playing:!!t&&!t.paused,time:t?t.currentTime:0,routed:this.routed}}wake(){if(!(!this.on||this.hidden||!this.url))try{if(!this.el){const e=new Audio;e.preload="auto",e.loop=!0,e.src=this.url,e.volume=ic,this.el=e}const t=this.sfx.context;if(!this.routed&&t){const e=t.createGain();e.gain.value=ic,t.createMediaElementSource(this.el).connect(e),e.connect(t.destination),this.el.volume=1,this.routed=!0}this.el.paused&&this.el.play().catch(()=>{})}catch{}}setEnabled(t){var e;this.on=t,t?this.wake():(e=this.el)==null||e.pause()}suspend(){var t;this.hidden=!0,(t=this.el)==null||t.pause()}resume(){this.hidden=!1,this.el&&this.wake()}}class Uh{constructor(t){this.ctx=null,this.out=null,this.noise=null,this.last=new Map,this.enabled=t;const e=()=>this.wake();for(const n of["pointerdown","touchend","click","keydown"])document.addEventListener(n,e,{capture:!0,passive:!0})}wake(){if(this.enabled)try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.out=this.ctx.createGain(),this.out.gain.value=.55,this.out.connect(this.ctx.destination);const e=this.ctx.sampleRate*.5;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noise.getChannelData(0);let s=7;for(let r=0;r<e;r++)s=s*16807%2147483647,n[r]=s/2147483647*2-1}this.ctx.state!=="running"&&this.ctx.resume()}catch{}}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}get context(){return this.ctx}setEnabled(t){this.enabled=t,t?this.wake():this.suspend()}play(t,e=1){var c;if(!this.enabled||!this.ctx||!this.out||this.ctx.state!=="running")return;const n=this.ctx.currentTime,s=t==="coin"?.035:t==="sizzle"||t==="hiss"?.09:t==="splash"?.12:.05;if(n-((c=this.last.get(t))!=null?c:-1)<s)return;this.last.set(t,n);const r=this.ctx,a=(l,h,u,f,p,_=0)=>{const g=r.createOscillator(),m=r.createGain();g.type=l,g.frequency.setValueAtTime(h*e,n+_),g.frequency.exponentialRampToValueAtTime(Math.max(20,u*e),n+_+f),m.gain.setValueAtTime(1e-4,n+_),m.gain.exponentialRampToValueAtTime(p,n+_+.008),m.gain.exponentialRampToValueAtTime(1e-4,n+_+f),g.connect(m).connect(this.out),g.start(n+_),g.stop(n+_+f+.02)},o=(l,h,u,f,p=0)=>{if(!this.noise)return;const _=r.createBufferSource(),g=r.createBiquadFilter(),m=r.createGain();_.buffer=this.noise,g.type="bandpass",g.frequency.value=u*e,g.Q.value=f,m.gain.setValueAtTime(h,n+p),m.gain.exponentialRampToValueAtTime(1e-4,n+p+l),_.connect(g).connect(m).connect(this.out),_.start(n+p,Math.random()*.3),_.stop(n+p+l+.02)};switch(t){case"click":a("triangle",900,600,.06,.25);break;case"pop":a("sine",520,980,.08,.3);break;case"pull":o(.18,.35,2400,1.5),a("triangle",1400,2600,.12,.16);break;case"coin":a("square",1760,1760,.05,.07),a("sine",2637,2637,.12,.12,.03);break;case"sizzle":o(.35,.28,5200,.8);break;case"hiss":o(.5,.18,900,.6);break;case"splash":o(.28,.3,1300,.9);break;case"poof":o(.22,.3,700,1.2),a("sine",340,120,.2,.25);break;case"thud":a("sine",140,55,.22,.5),o(.08,.2,400,1);break;case"star":a("triangle",1320,1320,.16,.22),a("sine",1980,1980,.22,.14,.05);break;case"win":[523,659,784,1047].forEach((l,h)=>a("triangle",l,l,.22,.24,h*.09));break;case"lose":[392,330,262].forEach((l,h)=>a("sawtooth",l,l*.97,.22,.12,h*.13));break}}}class Nh{constructor(t,e,n){this.scale=1,this.offX=0,this.offY=0,this.dpr=1,this.view={x:0,y:0,w:0,h:0},this.top=64,this.bottom=12,this.W=e,this.H=n,this.canvas=document.createElement("canvas"),this.canvas.id="stage",t.prepend(this.canvas);const s=this.canvas.getContext("2d",{alpha:!1});if(!s)throw new Error("no 2D canvas");this.g=s,this.resize(),addEventListener("resize",()=>this.resize())}resize(){const t=innerWidth,e=innerHeight;this.dpr=Math.min(window.devicePixelRatio||1,2.5),this.canvas.width=Math.round(t*this.dpr),this.canvas.height=Math.round(e*this.dpr),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`;const n=Math.max(100,e-this.top-this.bottom);this.scale=Math.min(t/this.W,n/this.H),this.offX=(t-this.W*this.scale)/2,this.offY=this.top+(n-this.H*this.scale)/2,this.view={x:-this.offX/this.scale,y:-this.offY/this.scale,w:t/this.scale,h:e/this.scale}}begin(){const{g:t,dpr:e,scale:n}=this;return t.setTransform(e*n,0,0,e*n,e*this.offX,e*this.offY),t}toLogical(t,e){const n=this.canvas.getBoundingClientRect();return{x:(t-n.left-this.offX)/this.scale,y:(e-n.top-this.offY)/this.scale}}}function Fh(i){var nt;window.__booted=!0;const t=Lh(i.id),e=()=>Ih(i.id,t),n=new Uh(t.sound),s=i.music?new Dh(n,i.music,t.sound):null,r=(nt=document.getElementById("app"))!=null?nt:document.body,a=new Nh(r,i.size.w,i.size.h),o=document.createElement("div");o.id="ui",r.append(o);const c=[];i.chapters.forEach((I,H)=>I.levels.forEach((j,Q)=>c.push({id:`${H+1}-${Q+1}`,ch:H,idx:Q,level:j,flat:c.length})));const l=I=>{var H;return(H=t.stars[I.id])!=null?H:0},h=I=>I.flat===0||l(c[I.flat-1])>0,u=()=>{var I;return(I=c.find(H=>l(H)===0))!=null?I:c[c.length-1]},f=()=>c.reduce((I,H)=>I+l(H),0);let p="title",_=null,g=null,m=0,d=0,x=[];const M=i.chrome==="overlay";M&&document.documentElement.classList.add("chrome-overlay"),i.bottomInset!==void 0&&(a.bottom=i.bottomInset);const v=()=>{var j;const I=Ph();document.documentElement.style.setProperty("--top",`max(env(safe-area-inset-top, 0px), ${I}px)`),getComputedStyle(document.documentElement).getPropertyValue("--top");const H=Math.max(I,C());a.top=M?H+((j=i.overlayTop)!=null?j:0):56+H,a.resize()},C=()=>{const I=document.createElement("div");I.style.cssText="position:fixed;top:0;height:env(safe-area-inset-top,0px);visibility:hidden",document.body.append(I);const H=I.getBoundingClientRect().height;return I.remove(),H};v();for(const I of[300,1e3,3e3])setTimeout(v,I);addEventListener("resize",v);const w=(I,H,j,Q)=>{const At=document.createElement("button");return At.className=I,At.type="button",At.innerHTML=H,Q&&At.setAttribute("aria-label",Q),At.addEventListener("click",gt=>{gt.stopPropagation(),n.play("click"),j()}),At},A=()=>{t.sound=!t.sound,e(),n.setEnabled(t.sound),s==null||s.setEnabled(t.sound),q()},R=()=>w("round sound b-sound",Qt(t.sound?"sound":"mute"),A,t.sound?"关闭声音":"打开声音"),b=(I={})=>({levelId:_==null?void 0:_.id,chapter:_==null?void 0:_.ch,run:g,home:()=>_?k(_.ch):P(),levels:()=>{var H;return k((H=_==null?void 0:_.ch)!=null?H:u().ch)},restart:()=>{_&&N(_)},next:()=>{if(!_)return N(u());_.flat<c.length-1?N(c[_.flat+1]):P()},hint:()=>{var H;(H=g==null?void 0:g.hint)==null||H.call(g)},sound:A,soundOn:()=>t.sound,...I}),y=(I,H)=>{var j;I==="result"?o.dataset.result=H!=null&&H.won?"won":"lost":(o.dataset.screen=I,delete o.dataset.result),(j=i.decorate)==null||j.call(i,I,o,b(H))};function P(){p="title",g=null,o.innerHTML="";const I=document.createElement("div");I.className="title-screen",I.innerHTML=`<h1>${i.title}</h1><p class="tagline">${i.tagline}</p>`;const H=u(),j=c.filter(gt=>l(gt)>0).length,Q=j===0?"开始":j>=c.length?"再玩":`第 ${H.id} 关`;I.append(w("big primary b-play",`${Qt("play")}<span>${Q}</span>`,()=>N(H)));const At=document.createElement("div");At.className="row",At.append(w("chip b-levels",`${Qt("grid")}<span>选关</span>`,()=>k(H.ch)),w("chip b-stars",`${Qt("star")}<span>${f()} / ${c.length*3}</span>`,()=>k(H.ch))),I.append(At),o.append(I,Z(R())),y("title")}function k(I){p="levels",g=null,d=I,o.innerHTML="";const H=document.createElement("div");H.className="hud",H.append(w("round b-home",Qt("home"),P,"回到标题"));const j=document.createElement("div");j.className="hud-title",j.innerHTML=`${Qt("star")}<span>${f()} / ${c.length*3}</span>`,H.append(j,R());const Q=document.createElement("div");Q.className="tabs",i.chapters.forEach((gt,Vt)=>{const D=c.find(Gt=>Gt.ch===Vt),le=h(D),Ut=w(`tab${Vt===I?" on":""}${le?"":" locked"}`,`${le?gt.icon:Qt("lock")}<span>${gt.name}</span>`,()=>le&&k(Vt),gt.name);Q.append(Ut)});const At=document.createElement("div");At.className="level-grid";for(const gt of c.filter(Vt=>Vt.ch===I)){const Vt=h(gt),D=l(gt),le=[0,1,2].map(Gt=>`<i class="${Gt<D?"got":""}">${Qt("star")}</i>`).join(""),Ut=w(`level${Vt?"":" locked"}${D?" done":""}`,Vt?`<b>${gt.idx+1}</b><span class="stars">${le}</span>`:Qt("lock"),()=>Vt&&N(gt),`第 ${gt.id} 关`);At.append(Ut)}o.append(H,Q,At),y("levels",{chapter:I})}function N(I){var At;p="play",_=I,x=[],g=i.start(I.level,{sfx:n,buzz:Nr,levelId:I.id}),m=0,o.innerHTML="";const H=document.createElement("div");H.className="hud",H.append(w("round b-home",Qt("home"),()=>k(I.ch),"选关"));const j=document.createElement("div");j.className="hud-title",j.innerHTML=`${i.chapters[I.ch].icon}<span>${I.id}</span>`,H.append(j);const Q=document.createElement("div");Q.className="hud-right",g.hint&&Q.append(w("round b-hint",Qt("hint"),()=>{var gt;return(gt=g==null?void 0:g.hint)==null?void 0:gt.call(g)},"提示")),Q.append(w("round b-restart",Qt("restart"),()=>N(I),"重来")),H.append(Q),o.append(H),y("play"),(At=i.teach)!=null&&At.call(i,I.id)&&setTimeout(()=>{var gt;return(gt=g==null?void 0:g.hint)==null?void 0:gt.call(g)},400)}function X(I){var Q,At;if(!_||!g)return;const H=_,j=document.createElement("div");if(j.className=`result ${I?"won":"lost"}`,I){const gt=g.stars();gt>l(H)&&(t.stars[H.id]=gt,e());const Vt=H.flat===c.length-1;j.innerHTML=`<div class="stars-big">${[0,1,2].map(Ut=>`<i class="${Ut<gt?"got":""}" style="animation-delay:${.15+Ut*.18}s">${Qt("star")}</i>`).join("")}</div>`,[0,1,2].slice(0,gt).forEach(Ut=>setTimeout(()=>n.play("star",1+Ut*.12),150+Ut*180));const D=document.createElement("div");D.className="acts",Vt?D.append(w("big primary b-next",`${Qt("home")}<span>全部通关</span>`,P)):D.append(w("big primary b-next",`${Qt("next")}<span>下一关</span>`,()=>N(c[H.flat+1])));const le=document.createElement("div");le.className="row",le.append(w("chip b-replay",`${Qt("restart")}<span>重玩</span>`,()=>N(H)),w("chip b-levels",`${Qt("grid")}<span>选关</span>`,()=>k(H.ch))),D.append(le),j.append(D)}else{j.innerHTML=`<div class="why">${Qt("skull")}<span>${(At=(Q=g.why)==null?void 0:Q.call(g))!=null?At:"失败了"}</span></div>`;const gt=document.createElement("div");if(gt.className="acts",gt.append(w("big primary b-retry",`${Qt("restart")}<span>再来</span>`,()=>N(H))),g.hint){const Vt=document.createElement("div");Vt.className="row",Vt.append(w("chip b-tip",`${Qt("hint")}<span>看提示</span>`,()=>{N(H),setTimeout(()=>{var D;return(D=g==null?void 0:g.hint)==null?void 0:D.call(g)},300)})),gt.append(Vt)}j.append(gt)}o.append(j),y("result",{won:I,stars:I?g.stars():0})}const Z=I=>{const H=document.createElement("div");return H.className="corner",H.append(I),H};function q(){if(p==="title")P();else if(p==="levels")k(d);else{const I=o.querySelector(".sound");I&&(I.innerHTML=Qt(t.sound?"sound":"mute"))}}let O=null;a.canvas.addEventListener("pointerdown",I=>{if(p!=="play"||!g||g.state!=="play"||O)return;const H=a.toLogical(I.clientX,I.clientY);O={id:I.pointerId,run:g};try{a.canvas.setPointerCapture(I.pointerId)}catch{}g.press(H.x,H.y)}),a.canvas.addEventListener("pointermove",I=>{var j,Q;if(!O||I.pointerId!==O.id||O.run!==g)return;const H=a.toLogical(I.clientX,I.clientY);(Q=(j=O.run).drag)==null||Q.call(j,H.x,H.y)});const F=I=>{var Q;if(!O||I.pointerId!==O.id)return;const H=O.run;if(O=null,H!==g)return;const j=a.toLogical(I.clientX,I.clientY);(Q=H.release)==null||Q.call(H,j.x,j.y)};a.canvas.addEventListener("pointerup",F),a.canvas.addEventListener("pointercancel",F),addEventListener("pointerup",F,!0),addEventListener("pointercancel",F,!0),addEventListener("keydown",I=>{var H;p!=="play"||!_||(I.key==="r"||I.key==="R"?N(_):I.key==="h"||I.key==="H"?(H=g==null?void 0:g.hint)==null||H.call(g):I.key==="Escape"?k(_.ch):(I.key==="n"||I.key==="Enter")&&(g==null?void 0:g.state)==="won"&&_.flat<c.length-1&&N(c[_.flat+1]))});let K=performance.now(),it=!0,ct=1;const Rt=getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()||"#222",Xt=I=>{var At;const H=Math.min(.05,(I-K)/1e3);K=I;const j=I/1e3,Q=a.g;Q.setTransform(1,0,0,1,0,0),Q.fillStyle=Rt,Q.fillRect(0,0,a.canvas.width,a.canvas.height),a.begin(),p==="play"&&g?(g.step(H*ct),g.draw(Q,a.view,j),g.state!=="play"&&(m?m>0&&I-m>(g.state==="won"?700:900)&&!o.querySelector(".result")&&X(g.state==="won"):(m=I,g.state==="won"?(n.play("win"),Nr("medium"),i.confetti!==!1&&$()):(n.play("lose"),Nr("heavy"))))):(At=i.backdrop)==null||At.call(i,Q,a.view,j),rt(Q,H),it&&requestAnimationFrame(Xt)};requestAnimationFrame(Xt),Rh(()=>{it=!1,n.suspend(),s==null||s.suspend()},()=>{it||(it=!0,K=performance.now(),requestAnimationFrame(Xt)),n.wake(),s==null||s.resume()});function $(){const I=["#ff5c8a","#f2b632","#4f7cff","#5ec8b8","#ffffff"],H=a.view;for(let j=0;j<90;j++){const Q=j%2===0;x.push({x:Q?H.x+10:H.x+H.w-10,y:H.y+H.h*.55,vx:(Q?1:-1)*(120+Math.random()*260),vy:-(380+Math.random()*420),r:Math.random()*6,w:5+Math.random()*6,h:3+Math.random()*5,c:I[j%I.length],spin:(Math.random()-.5)*14})}}function rt(I,H){if(!x.length)return;const j=a.view.y+a.view.h+20;x=x.filter(Q=>Q.y<j);for(const Q of x)Q.vy+=700*H,Q.vx*=1-.8*H,Q.x+=Q.vx*H,Q.y+=Q.vy*H,Q.r+=Q.spin*H,I.save(),I.translate(Q.x,Q.y),I.rotate(Q.r),I.fillStyle=Q.c,I.fillRect(-Q.w/2,-Q.h/2,Q.w,Q.h*Math.abs(Math.cos(Q.r*1.7))+1),I.restore()}P(),window.__game={id:i.id,entries:c.map(I=>I.id),progress:t,get run(){return g},play:I=>{const H=c.find(j=>j.id===I);return H&&N(H),!!H},screen:()=>p,setSpeed:I=>{ct=I>0?I:1},state:()=>{var I;return(I=g==null?void 0:g.state)!=null?I:null},busy:()=>{var I;return!!((I=g==null?void 0:g.busy)!=null&&I.call(g))},tapTarget:()=>{var H;const I=(H=g==null?void 0:g.hintTarget)==null?void 0:H.call(g);return I?{x:a.offX+I.x*a.scale,y:a.offY+I.y*a.scale}:null},tapPath:()=>{var H;const I=(H=g==null?void 0:g.hintPath)==null?void 0:H.call(g);return I&&I.length?I.map(j=>({x:a.offX+j.x*a.scale,y:a.offY+j.y*a.scale})):null}}}const Oh=""+new URL("action-Dm16Z4yG.mp3",import.meta.url).href,hi={on:!1},Rl='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5" width="3.8" height="14" rx="1.4" fill="currentColor"/><rect x="13.7" y="5" width="3.8" height="14" rx="1.4" fill="currentColor"/></svg>',Bh='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a8 8 0 0 0-8 8c0 2.6 1.3 4.6 3 5.8V20h10v-3.2c1.7-1.2 3-3.2 3-5.8a8 8 0 0 0-8-8z" fill="#efe9df" stroke="#2a2420" stroke-width="1.5" stroke-linejoin="round"/><circle cx="9" cy="11.5" r="2.1" fill="#2a2420"/><circle cx="15" cy="11.5" r="2.1" fill="#2a2420"/><path d="M10 17v2.6M12 17v2.6M14 17v2.6" stroke="#2a2420" stroke-width="1.3"/></svg>',Wn=(i,t="")=>{const e=document.createElement("div");return e.className=i,e.innerHTML=t,e};function as(i,t,e){const n=document.createElement("button");return n.type="button",n.className=i,n.innerHTML=t,n.addEventListener("click",s=>{s.stopPropagation(),e()}),n}function zh(i,t){var s,r;hi.on=!1;const e=i.querySelector(".hud-title");e&&(e.innerHTML=`<span>第 ${(s=t.levelId)!=null?s:""} 关</span>`);const n=i.querySelector(".b-home");if(n){const a=n.cloneNode(!1);a.classList.add("rc-pause"),a.innerHTML=Rl,a.setAttribute("aria-label","暂停"),a.addEventListener("click",o=>{o.stopPropagation(),kh(i,t)}),n.remove(),i.append(a)}(r=i.querySelector(".hud-right"))==null||r.remove(),Ui.reset()}function kh(i,t){if(i.querySelector(".rc-shade"))return;hi.on=!0;const e=Wn("rc-shade"),n=()=>{e.remove(),hi.on=!1},s=Wn("rc-card",`<div class="rc-card-head">${Rl}<b>暂停</b></div>`),r=Wn("rc-row"),a=as("rc-small",`${Qt(t.soundOn()?"sound":"mute")}<span>声音</span>`,()=>{t.sound(),a.innerHTML=`${Qt(t.soundOn()?"sound":"mute")}<span>声音</span>`});r.append(as("rc-small",`${Qt("restart")}<span>重来</span>`,()=>{hi.on=!1,t.restart()}),as("rc-small",`${Qt("hint")}<span>提示</span>`,()=>{n(),t.hint()}),as("rc-small",`${Qt("grid")}<span>选关</span>`,()=>{hi.on=!1,t.levels()}),a),s.append(r,as("big primary rc-go",`${Qt("play")}<span>继续</span>`,n)),e.append(s),e.addEventListener("click",o=>{o.target===e&&n()}),i.append(e)}function Hh(i,t,e){var o;const n=i.querySelector(".result");if(!n||(n.prepend(Wn("rc-ribbon",`<b>${t.won?"胜利":"失败"}</b>`)),!t.won))return;e.length&&((o=n.querySelector(".stars-big"))==null||o.after(Wn("rc-stats",e.map(c=>`<div class="rc-slot">${c.icon}<b>${c.value}</b><span>${c.label}</span></div>`).join(""))));const s=n.querySelector(".acts"),r=n.querySelector(".b-next"),a=n.querySelector(".b-levels");if(s&&r&&a){a.className="big rc-back b-levels",a.innerHTML=`${Qt("back")}<span>返回</span>`;const c=Wn("rc-acts");c.append(a,r),s.prepend(c)}}const Ui={last:new Map,reset(){this.last.clear()},set(i,t,e){const n=`${i}.${t}`;if(this.last.get(n)===e)return;const s=document.getElementById(i);s&&(this.last.set(n,e),t==="text"?s.textContent=e:t==="width"?s.style.width=e:t==="show"?s.classList.toggle("on",e==="1"):(s.classList.remove("pop"),s.offsetWidth,s.classList.add("pop")))}};function Gh(i,t){const e=Wn("rc-prog",`<div class="rc-track"><i id="rc-prog"></i></div><span class="rc-goal">${t}</span>`);e.id="rc-progbox";const n=Wn("rc-bossbar",`<span class="rc-goal">${t}</span><div class="rc-track"><i id="rc-bosshp"></i><b id="rc-bossnum"></b></div>`);n.id="rc-bossbar",i.append(e,n)}function Vh(i,t){Ui.set("rc-progbox","show",t?"0":"1"),Ui.set("rc-prog","width",`${Math.round(Math.max(0,Math.min(1,i))*200)/2}%`),Ui.set("rc-bossbar","show",t?"1":"0"),t&&(Ui.set("rc-bosshp","width",`${Math.max(3,Math.round(t[1]*200)/2)}%`),Ui.set("rc-bossnum","text",t[0]))}const Wh='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 15c0-6 4.5-10 10-10s10 4 10 10v3c0 5.5-4.5 9.5-10 9.5S6 23.5 6 18z" fill="#8fa47a" stroke="#2f3a28" stroke-width="2.2"/><path d="M8 12c2-4 5-6 8-6s6 2 8 6c-2.6.6-5.4.4-8-.6-2.6 1-5.4 1.2-8 .6z" fill="#5f7d45" stroke="#2f3a28" stroke-width="1.5"/><ellipse cx="12.3" cy="16.5" rx="1.7" ry="1.4" fill="#ffd34d"/><ellipse cx="19.7" cy="16.5" rx="1.7" ry="1.4" fill="#ffd34d"/><path d="M11 22.5c3 1.6 7 1.6 10 0" fill="none" stroke="#2f3a28" stroke-width="2" stroke-linecap="round"/><path d="M12 22.8l.6-2.6 1.2 2.9M20 22.8l-.6-2.6-1.2 2.9" fill="#f4ecd6" stroke="#2f3a28" stroke-width="1"/></svg>',Xh='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14.5v1.8a5 4.2 0 0 0 10 0v-1.8" fill="#e9c7a0" stroke="#22261c" stroke-width="1.5"/><path d="M4 13.5a8 7.5 0 0 1 16 0v.8H4z" fill="#5d6b4a" stroke="#22261c" stroke-width="1.6" stroke-linejoin="round"/><path d="M3 14.4h18" stroke="#22261c" stroke-width="2.2" stroke-linecap="round"/><path d="M8 8.5c1.2-1.5 2.6-2.2 4-2.2" fill="none" stroke="#9aab84" stroke-width="1.4" stroke-linecap="round"/></svg>',qh='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 9.5h15l-1.4 9.5H5.9z" fill="#3f7a45" stroke="#1f2a22" stroke-width="1.6" stroke-linejoin="round"/><path d="M3 7.6h18l-.9 2H3.9z" fill="#2a2f2c" stroke="#1f2a22" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 12v4.5M15 12v4.5" stroke="#2c5a33" stroke-width="1.4" stroke-linecap="round"/><circle cx="7.5" cy="20" r="1.5" fill="#222"/><circle cx="16.5" cy="20" r="1.5" fill="#222"/></svg>';function $h(i,t,e){var n,s,r,a;if(i==="play")zh(t,e),Gh(t,Wh);else if(i==="result"){const o=e.run;Hh(t,e,[{icon:Xh,value:String(Math.max(0,Math.floor((s=(n=o==null?void 0:o.sim)==null?void 0:n.n)!=null?s:0))),label:"守住的兵"},{icon:qh,value:String((r=o==null?void 0:o.smashed)!=null?r:0),label:"砸烂"},{icon:Bh,value:String((a=o==null?void 0:o.kills)!=null?a:0),label:"击败"}])}}const vn=i=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${i}</svg>`,Me='fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"',un={bridge:vn(`<path d="M2 15h20M4 15v5M20 15v5M2 15c4-6 16-6 20 0" ${Me}/><path d="M8 11v4M12 10v5M16 11v4" ${Me}/>`),aim:vn(`<circle cx="12" cy="12" r="7" ${Me}/><path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5" ${Me}/>`),crate:vn(`<rect x="4" y="5" width="16" height="15" rx="1.5" ${Me}/><path d="M4 10h16M9 5v5M15 5v5" ${Me}/>`),mob:vn(`<path d="M12 6c4.4 0 7.5 3.2 7.5 7.5S16.4 20 12 20s-7.5-2.2-7.5-6.5S7.6 6 12 6z" ${Me}/><path d="M8 4l1.5 3M16 4l-1.5 3M9.5 13h.01M14.5 13h.01" ${Me}/>`),truck:vn(`<path d="M2.5 7h11v9h-11zM13.5 10h4l3 3v3h-7z" ${Me}/><circle cx="6.5" cy="17.5" r="1.8" ${Me}/><circle cx="17" cy="17.5" r="1.8" ${Me}/>`),lanes:vn(`<path d="M5 3l-2 18M12 3v18M19 3l2 18" ${Me}/>`),fire:vn(`<path d="M9 21h6v-9.5C15 7.5 13.5 4.5 12 3c-1.5 1.5-3 4.5-3 8.5z" ${Me}/><path d="M9 17h6" ${Me}/>`),boss:vn(`<path d="M5 4l2.5 5M19 4l-2.5 5" ${Me}/><path d="M12 8c4.4 0 7 2.8 7 6.5S16.4 21 12 21s-7-2.8-7-6.5S7.6 8 12 8z" ${Me}/><path d="M9.5 15.5h.01M14.5 15.5h.01" ${Me}/>`),drag:vn(`<path d="M5 9l-3 3 3 3M19 9l3 3-3 3M2.5 12h19" ${Me}/>`)},It=(i,t,e={})=>({start:i,rows:t,...e}),sc=[{name:"守桥",icon:un.bridge,levels:[It(10,["g . -5^1<20","c 1n .","g -6^1<25 .","c . 1.2n","g . x2","B 5n"],{tip:["aim","站哪条道，就打哪条道"]}),It(8,["c .8n .","g . -6^1<20","c . 1n","g -10^1<30 .","c 1.2n .","g . x2","c . 1n","B 6n"]),It(12,["g -8^1<24 .","c . 1n","g . -12^1<36","c 1.2n .","g x2 -20^2<10","c . 1.4n","g -30^1<60 .","B 6.5n"]),It(10,["c 1n .","c . 1n","g -10^1<30 x2","c 1.2n .","g . -20^1<50","c . 1.3n","g x2 +20","B 7n"]),It(15,["g . -15^1<40","c 1n 1n","g -20^1<50 .","c . 1.5n","g x2 -40^2<60","c 1.2n .","g . -50^1<120","B 7n"]),It(6,["g -4^1<12 .","c . .8n","g . -8^1<24","c 1n .","g -15^1<40 x2","c . 1.2n","g x2 .","c 1n 1n","B 7n"]),It(20,["c 1n .","g . -20^1<40","c 1.2n .","g -30^1<80 .","c . 1.4n","g x2 -50^2<80","c 1n 1n","g . x2","B 7.5n"]),It(10,["g . -10^1<30","c 1n .","g -20^1<60 .","c . 1.2n","g x2 -40^1<100","c 1.2n .","g . -80^2<200","c 1n 1n","g x2 .","B 8n"])]},{name:"怪潮",icon:un.mob,levels:[It(12,["g . -6^1<24","z 1n .","g -10^1<30 .","z . 1n","g x2 .","B 6n"],{tip:["mob","怪会自己走过来"]}),It(10,["z .8n .","g . -10^1<30","c . 1n","z 1n .","g -15^1<40 .","z . 1.2n","g x2 .","B 6.5n"]),It(14,["g -8^1<24 .","z . .9n","c 1n .","g . -20^1<50","z 1n 1n","g x2 -30^1<60","z . 1.3n","B 7n"]),It(8,["z 1n .","z . 1n","g -10^1<30 x2","c 1.2n .","z . 1.2n","g . -30^1<80","z 1n 1n","B 7n"]),It(18,["g . -20^1<40","z 1n 1n","g -30^1<70 .","c . 1.4n","z 1.2n .","g x2 -50^2<80","z . 1.3n","B 7.5n"]),It(10,["z .7n .7n","g . -10^1<40","z 1.2n .","g -20^1<60 .","c . 1.3n","z 1n .","g x2 -40^1<90","B 7.5n"]),It(16,["c 1n .","z . 1n","g -20^1<50 .","z 1n 1n","g . -40^1<90","c 1.3n .","z . 1.3n","g x2 .","B 7.5n"]),It(12,["g . -12^1<36","z 1n .","g -25^1<60 .","z . 1.2n","c 1n 1n","g x2 -50^2<100","z 1.4n .","g . x2","B 8n"])]},{name:"卡车",icon:un.truck,levels:[It(15,["g . -10^1<30","t .8n .","g -15^1<40 .","t . 1n","g x2 .","B 6n"],{tip:["truck","卡车冲得快，撞上扣双倍"]}),It(12,["c 1n .","t . .8n","g -15^1<40 .","z . 1n","t 1n .","g . x2","B 6.5n"]),It(10,["g -8^1<30 .","t . .8n","z 1n .","g . -20^1<50","t 1.2n .","c . 1.2n","g x2 .","B 7n"]),It(18,["t .8n .","g . -20^1<50","c 1.2n .","t . 1n","g -30^1<70 x2","z 1n 1n","t . 1.2n","B 7n"]),It(14,["g . -15^1<40","t 1n .","z . 1n","g -25^1<60 .","t . 1.2n","c 1.2n .","g x2 -40^2<60","B 7.5n"]),It(10,["z .8n .8n","t . 1n","g -15^1<40 .","t 1n .","g . -30^1<70","c 1n 1n","t 1.3n .","B 7.5n"]),It(20,["t 1n .","g . -30^1<60","t . 1n","c 1.2n .","g -40^1<90 x2","z . 1.3n","t 1.2n .","g . x2","B 8n"]),It(12,["g -10^1<30 .","t . .8n","z .8n .","g . -30^1<70","t .9n .9n","c . 1n","g x2 -60^2<100","t 1n .","B 8n"])]},{name:"三道",icon:un.lanes,levels:[It(15,["g . -10^1<30 .","c 1n . .","g . . -15^1<40","c . 1.2n .","g x2 . .","B 6n"],{lanes:3,tip:["lanes","桥变宽了：三条道"]}),It(12,["c .8n . .","g . -12^1<36 .","z . . 1n","g -20^1<50 . .","c . 1.2n .","g . . x2","B 6.5n"],{lanes:3}),It(16,["g -10^1<30 . .","t . . .9n","c . 1n .","g . x2 -20^1<50","z 1n . 1n","g . -30^1<80 .","B 7n"],{lanes:3}),It(10,["z . 1n .","g . . -15^1<40","c 1n . .","g -20^1<60 . x2","t . 1.2n .","z 1n . 1n","B 7n"],{lanes:3}),It(20,["g . -20^1<50 .","c .6n . .6n","g -30^1<70 . .","t . . .6n","g . x2 -40^1<90","z .6n .6n .","B 7.5n"],{lanes:3}),It(14,["t . 1n .","g -15^1<40 . .","c . . 1.2n","g . -25^1<60 x2","z 1n 1n 1n","g x2 . .","B 7.5n"],{lanes:3}),It(18,["c . 1n .","g -20^1<50 . -20^1<50","z 1n . 1n","g . x2 .","t 1.2n . .","c . . 1.4n","B 8n"],{lanes:3}),It(12,["g . -12^1<36 .","t 1n . .","g . . -30^1<70","z . 1.2n 1.2n","g x2 -50^1<120 .","t . . 1.3n","B 8n"],{lanes:3})]},{name:"火力",icon:un.fire,levels:[It(15,["g . f+1","c 1n .","g -10^1<30 .","c . 1.2n","g fx2 .","B 6n"],{tip:["fire","火力门：每人打得更疼"]}),It(12,["c .8n .","g . f+1","z 1n .","g -15^1<40 .","t . 1n","g f+1 x2","B 6.5n"]),It(16,["g -10^1<30 f+1","c . 1n","z 1n .","g . fx2","t 1.2n .","c . 1.2n","g x2 f+1","B 7n"]),It(10,["g f+1 .","z . 1n","g . -20^1<50","c 1.2n .","g fx2 -30^1<60","z 1n 1n","t . 1.3n","B 7n"]),It(20,["c 1n .","g . f+1","t 1n .","g -30^1<60 f+1","z . 1.2n","c 1.2n 1.2n","g fx2 .","B 7.5n"]),It(14,["g f+1 . -10^1<30","z . 1n .","t . . 1n","g . fx2 .","c 1n . 1n","g -30^1<70 . f+1","B 7.5n"],{lanes:3}),It(12,["z .8n .","g . f+1","c 1n .","g -20^1<60 .","t . 1.2n","g f+2 x2","z 1.2n 1.2n","B 8n"]),It(18,["g . f+1 .","c .8n . .","g -30^1<70 . fx2","t . .6n .","z .6n . .6n","g . x2 f+1","B 8n"],{lanes:3})]},{name:"大怪",icon:un.boss,levels:[It(15,["g . -10^1<30","c 1n .","g x2 .","B 5n .1n 2.5"],{tip:["boss","大怪会跺脚"]}),It(12,["z 1n .","g . -15^1<40","t . 1n","g f+1 x2","c 1.2n .","B 6n .12n 2.5"]),It(18,["g -15^1<40 .","c . 1n","t 1n .","g . fx2","z 1.2n 1.2n","g x2 -40^1<90","B 6.5n .12n 2"]),It(14,["g . -12^1<36 .","z 1n . 1n","g f+1 . x2","t . 1.2n .","c 1.2n . .","B 6.5n .12n 2"],{lanes:3}),It(10,["t .8n .","g . -20^1<50","z 1n 1n","g -30^1<70 f+1","c . 1.3n","t 1.2n .","g x2 .","B 7n .15n 2"]),It(20,["g -20^1<50 . f+1","c . .6n .","z .5n . .","g . x2 .","c . . .6n","z .5n .5n .5n","g fx2 . -50^1<100","B 6n .1n 2.2"],{lanes:3}),It(16,["c 1n .","g . -20^1<60","z 1.2n .","t . 1.2n","g fx2 -40^1<90","c 1.3n 1.3n","g x2 .","B 7.5n .15n 2"]),It(12,["g . -12^1<36 .","t .6n . .","g . . fx2","z .8n .8n .","g -40^1<100 x2 .","t . 1n .","g . x3 .","B 8n .12n 1.8"],{lanes:3})]}],Ye=(i,t=0,e=1)=>i<t?t:i>e?e:i,Hi={outCubic:i=>1-(1-i)**3,inCubic:i=>i*i*i,inOutSine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+(1.70158+1)*(i-1)**3+1.70158*(i-1)**2,bump:i=>Math.sin(Math.PI*Ye(i))};function Yh(i,t,e,n,s,r){r=Math.max(0,Math.min(r,n/2,s/2)),i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Gi(i,t,e,n,s,r,a,o,c=2){Yh(i,t,e,n,s,r),i.fillStyle=a,i.fill(),o&&(i.lineWidth=c,i.strokeStyle=o,i.stroke())}function rn(i,t,e,n,s,r,a="#221f2e",o="'Game Display', 'PingFang SC', sans-serif"){i.font=`${Math.round(s)}px ${o}`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=Math.max(2,s*.18),i.strokeStyle=a,i.strokeText(t,e,n+s*.04),i.fillStyle=r,i.fillText(t,e,n+s*.04)}function si(i){const t=Math.abs(i);return t<1e4?String(Math.round(i)):t<1e8?`${rc(i/1e4)}万`:`${rc(i/1e8)}亿`}const rc=i=>Math.abs(i)>=100?String(Math.round(i)):i.toFixed(1).replace(/\.0$/,"");class Kh{constructor(){this.bits=[],this.floats=[],this.shakeAmt=0,this.ox=0,this.oy=0}burst(t,e,n,s=14,r=160,a={}){var c,l,h;const o=Array.isArray(n)?n:[n];for(let u=0;u<s;u++){const f=Math.random()*Math.PI*2,p=r*(.4+Math.random()*.8);this.bits.push({x:t,y:e,vx:Math.cos(f)*p,vy:Math.sin(f)*p-r*.3,r:((c=a.size)!=null?c:4)*(.6+Math.random()*.8),life:((l=a.life)!=null?l:.6)*(.7+Math.random()*.6),age:0,color:o[u%o.length],grav:(h=a.grav)!=null?h:420,square:!!a.square})}}float(t,e,n,s="#fff",r=20,a=.9){this.floats.push({x:t,y:e,text:n,color:s,size:r,age:0,life:a,rise:40+r})}shake(t){this.shakeAmt=Math.max(this.shakeAmt,t)}step(t){for(const n of this.bits)n.age+=t,n.vy+=n.grav*t,n.vx*=1-1.5*t,n.x+=n.vx*t,n.y+=n.vy*t;this.bits=this.bits.filter(n=>n.age<n.life);for(const n of this.floats)n.age+=t;this.floats=this.floats.filter(n=>n.age<n.life),this.shakeAmt=Math.max(0,this.shakeAmt-t*40);const e=this.shakeAmt;this.ox=e?(Math.random()*2-1)*e:0,this.oy=e?(Math.random()*2-1)*e:0}draw(t){for(const e of this.bits){const n=1-e.age/e.life;t.globalAlpha=Ye(n*1.5),t.fillStyle=e.color,e.square?t.fillRect(e.x-e.r,e.y-e.r,e.r*2,e.r*2):(t.beginPath(),t.arc(e.x,e.y,e.r*(.5+n*.5),0,Math.PI*2),t.fill())}t.globalAlpha=1;for(const e of this.floats){const n=e.age/e.life,s=n<.18?Hi.outBack(n/.18):1;t.globalAlpha=n>.7?Ye((1-n)/.3):1,rn(t,e.text,e.x,e.y-Hi.outCubic(n)*e.rise,e.size*(.6+.4*s),e.color)}t.globalAlpha=1}get busy(){return this.bits.length>0||this.floats.length>0}}const _o="170",Jh=0,ac=1,Zh=2,Pl=1,jh=2,wn=3,Yn=0,Pe=1,an=2,Xn=0,Fi=1,Vi=2,oc=3,cc=4,Qh=5,ci=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,au=202,ou=203,Ea=204,wa=205,cu=206,lu=207,hu=208,uu=209,fu=210,du=211,pu=212,mu=213,gu=214,Ta=0,Aa=1,Ca=2,Wi=3,Ra=4,Pa=5,La=6,Ia=7,vo=0,_u=1,vu=2,qn=0,xu=1,Mu=2,yu=3,Su=4,bu=5,Eu=6,wu=7,Ll=300,Xi=301,qi=302,Da=303,Ua=304,wr=306,$i=1e3,Gn=1001,Na=1002,Ue=1003,Tu=1004,Ns=1005,dn=1006,Fr=1007,ui=1008,Rn=1009,Il=1010,Dl=1011,ws=1012,xo=1013,fi=1014,cn=1015,Cs=1016,Mo=1017,yo=1018,Yi=1020,Ul=35902,Nl=1021,Fl=1022,Je=1023,Ol=1024,Bl=1025,Oi=1026,Ki=1027,Tr=1028,So=1029,zl=1030,bo=1031,Eo=1033,cr=33776,lr=33777,hr=33778,ur=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Ha=37492,Ga=37496,Va=37808,Wa=37809,Xa=37810,qa=37811,$a=37812,Ya=37813,Ka=37814,Ja=37815,Za=37816,ja=37817,Qa=37818,to=37819,eo=37820,no=37821,fr=36492,io=36494,so=36495,kl=36283,ro=36284,ao=36285,oo=36286,Au=3200,Cu=3201,wo=0,Ru=1,Hn="",ge="srgb",Qi="srgb-linear",Ar="linear",te="srgb",gi=7680,lc=519,Pu=512,Lu=513,Iu=514,Hl=515,Du=516,Uu=517,Nu=518,Fu=519,hc=35044,Rs=35048,uc="300 es",Tn=2e3,gr=2001;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,co=180/Math.PI;function Ps(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Ou(i,t){return(i%t+t)%t}function Br(i,t,e){return(1-e)*i+e*t}function os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,a,o,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],g=s[0],m=s[3],d=s[6],x=s[1],M=s[4],v=s[7],C=s[2],w=s[5],A=s[8];return r[0]=a*g+o*x+c*C,r[3]=a*m+o*M+c*w,r[6]=a*d+o*v+c*A,r[1]=l*g+h*x+u*C,r[4]=l*m+h*M+u*w,r[7]=l*d+h*v+u*A,r[2]=f*g+p*x+_*C,r[5]=f*m+p*M+_*w,r[8]=f*d+p*v+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,_=e*u+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*l-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=f*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new Ot;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=Ts("canvas");return i.style.display="block",i}const fc={};function _s(i){i in fc||(fc[i]=!0,console.warn(i))}function zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ku(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?Ar:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const dc=[.64,.33,.3,.6,.15,.06],pc=[.2126,.7152,.0722],mc=[.3127,.329],gc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Qi]:{primaries:dc,whitePoint:mc,transfer:Ar,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:pc,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:dc,whitePoint:mc,transfer:te,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:pc,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});let _i;class Gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Ts("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vu=0;class Vl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kr(s[a].image)):r.push(kr(s[a]))}else r=kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wu=0;class we extends ts{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Gn,s=Gn,r=dn,a=ui,o=Je,c=Rn,l=we.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Ps(),this.name="",this.source=new Vl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $i:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $i:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Ll;we.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],_=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(p+1)/2,C=(d+1)/2,w=(h+f)/4,A=(u+g)/4,R=(_+m)/4;return M>v&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=A/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=R/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(u-g)/x,this.z=(f-h)/x,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xu extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Xu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wl extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qu extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ze{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==p||h!==_){let m=1-o;const d=c*f+l*p+h*_+u*g,x=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,d*x);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const v=o*x;if(c=c*m+f*v,l=l*m+p*v,h=h*m+_*v,u=u*m+g*v,m===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*u+c*p-l*f,t[e+1]=c*_+h*f+l*u-o*p,t[e+2]=l*_+h*p+o*f-c*u,t[e+3]=h*_-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"YZX":this._x=f*h*u+l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u-f*p*_;break;case"XZY":this._x=f*h*u-l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new L,vc=new Ze;class pi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Os.subVectors(this.max,cs),vi.subVectors(t.a,cs),xi.subVectors(t.b,cs),Mi.subVectors(t.c,cs),Dn.subVectors(xi,vi),Un.subVectors(Mi,xi),jn.subVectors(vi,Mi);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-jn.z,jn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,jn.z,0,-jn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-jn.y,jn.x,0];return!Gr(e,vi,xi,Mi,Os)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,vi,xi,Mi,Os))?!1:(Bs.crossVectors(Dn,Un),e=[Bs.x,Bs.y,Bs.z],Gr(e,vi,xi,Mi,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new L,new L,new L,new L,new L,new L,new L,new L],en=new L,Fs=new pi,vi=new L,xi=new L,Mi=new L,Dn=new L,Un=new L,jn=new L,cs=new L,Os=new L,Bs=new L,Qn=new L;function Gr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);const o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),c=t.dot(Qn),l=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const $u=new pi,ls=new L,Vr=new L;class Ls{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(Vr)),this.expandByPoint(ls.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new L,Wr=new L,zs=new L,Nn=new L,Xr=new L,ks=new L,qr=new L;class Yu{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wr.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Wr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=Nn.dot(this.direction),c=-Nn.dot(zs),l=Nn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,_;if(h>0)if(u=a*c-o,f=a*o-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wr).addScaledVector(zs,f),p}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){Xr.subVectors(e,t),ks.subVectors(n,t),qr.crossVectors(Xr,ks);let a=this.direction.dot(qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const c=o*this.direction.dot(ks.crossVectors(Nn,ks));if(c<0)return null;const l=o*this.direction.dot(Xr.cross(Nn));if(l<0||c+l>a)return null;const h=-o*Nn.dot(qr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(t,e,n,s,r,a,o,c,l,h,u,f,p,_,g,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,p,_,g,m)}set(t,e,n,s,r,a,o,c,l,h,u,f,p,_,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),a=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,_=o*h,g=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=f-g*l,e[9]=-o*c,e[2]=g-f*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f+g*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,p=a*u,_=o*h,g=o*u;e[0]=c*h,e[4]=_*l-p,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*c,p=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,Ju)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Fn.crossVectors(n,He),Fn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Fn.crossVectors(n,He)),Fn.normalize(),Hs.crossVectors(He,Fn),s[0]=Fn.x,s[4]=Hs.x,s[8]=He.x,s[1]=Fn.y,s[5]=Hs.y,s[9]=He.y,s[2]=Fn.z,s[6]=Hs.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],x=n[3],M=n[7],v=n[11],C=n[15],w=s[0],A=s[4],R=s[8],b=s[12],y=s[1],P=s[5],k=s[9],N=s[13],X=s[2],Z=s[6],q=s[10],O=s[14],F=s[3],K=s[7],it=s[11],ct=s[15];return r[0]=a*w+o*y+c*X+l*F,r[4]=a*A+o*P+c*Z+l*K,r[8]=a*R+o*k+c*q+l*it,r[12]=a*b+o*N+c*O+l*ct,r[1]=h*w+u*y+f*X+p*F,r[5]=h*A+u*P+f*Z+p*K,r[9]=h*R+u*k+f*q+p*it,r[13]=h*b+u*N+f*O+p*ct,r[2]=_*w+g*y+m*X+d*F,r[6]=_*A+g*P+m*Z+d*K,r[10]=_*R+g*k+m*q+d*it,r[14]=_*b+g*N+m*O+d*ct,r[3]=x*w+M*y+v*X+C*F,r[7]=x*A+M*P+v*Z+C*K,r[11]=x*R+M*k+v*q+C*it,r[15]=x*b+M*N+v*O+C*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+g*(+e*c*p-e*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],x=u*m*l-g*f*l+g*c*p-o*m*p-u*c*d+o*f*d,M=_*f*l-h*m*l-_*c*p+a*m*p+h*c*d-a*f*d,v=h*g*l-_*u*l+_*o*p-a*g*p-h*o*d+a*u*d,C=_*u*c-h*g*c-_*o*f+a*g*f+h*o*m-a*u*m,w=e*x+n*M+s*v+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=x*A,t[1]=(g*f*r-u*m*r-g*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(o*m*r-g*c*r+g*s*l-n*m*l-o*s*d+n*c*d)*A,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*A,t[4]=M*A,t[5]=(h*m*r-_*f*r+_*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(_*c*r-a*m*r-_*s*l+e*m*l+a*s*d-e*c*d)*A,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*p+e*c*p)*A,t[8]=v*A,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*d-e*u*d)*A,t[10]=(a*g*r-_*o*r+_*n*l-e*g*l-a*n*d+e*o*d)*A,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*A,t[12]=C*A,t[13]=(h*g*s-_*u*s+_*n*f-e*g*f-h*n*m+e*u*m)*A,t[14]=(_*o*s-a*g*s-_*n*c+e*g*c+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,_=r*u,g=a*h,m=a*u,d=o*u,x=c*l,M=c*h,v=c*u,C=n.x,w=n.y,A=n.z;return s[0]=(1-(g+d))*C,s[1]=(p+v)*C,s[2]=(_-M)*C,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(f+d))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(_+M)*A,s[9]=(m-x)*A,s[10]=(1-(f+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const a=yi.set(s[4],s[5],s[6]).length(),o=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const l=1/r,h=1/a,u=1/o;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Tn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,_;if(o===Tn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===gr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Tn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*l,p=(n+s)*h;let _,g;if(o===Tn)_=(a+r)*u,g=-2*u;else if(o===gr)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new L,nn=new Yt,Ku=new L(0,0,0),Ju=new L(1,1,1),Fn=new L,Hs=new L,He=new L,xc=new Yt,Mc=new Ze;class Ee{constructor(t=0,e=0,n=0,s=Ee.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ee.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zu=0;const yc=new L,Si=new Ze,yn=new Yt,Gs=new L,hs=new L,ju=new L,Qu=new Ze,Sc=new L(1,0,0),bc=new L(0,1,0),Ec=new L(0,0,1),wc={type:"added"},tf={type:"removed"},bi={type:"childadded",child:null},$r={type:"childremoved",child:null};class Te extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new L,e=new Ee,n=new Ze,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ot}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(hs,Gs,this.up):yn.lookAt(Gs,hs,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(yn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),$r.child=t,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new L(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new L,Sn=new L,Yr=new L,bn=new L,Ei=new L,wi=new L,Tc=new L,Kr=new L,Jr=new L,Zr=new L,jr=new fe,Qr=new fe,ta=new fe;class on{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),Sn.subVectors(n,e),Yr.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(Sn),c=sn.dot(Yr),l=Sn.dot(Sn),h=Sn.dot(Yr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-o*h)*f,_=(a*h-o*c)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(a,bn.y),c.addScaledVector(o,bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return jr.setScalar(0),Qr.setScalar(0),ta.setScalar(0),jr.fromBufferAttribute(t,e),Qr.fromBufferAttribute(t,n),ta.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jr,r.x),a.addScaledVector(Qr,r.y),a.addScaledVector(ta,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ei.subVectors(s,n),wi.subVectors(r,n),Kr.subVectors(t,n);const c=Ei.dot(Kr),l=wi.dot(Kr);if(c<=0&&l<=0)return e.copy(n);Jr.subVectors(t,s);const h=Ei.dot(Jr),u=wi.dot(Jr);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ei,a);Zr.subVectors(t,r);const p=Ei.dot(Zr),_=wi.dot(Zr);if(_>=0&&p<=_)return e.copy(r);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(wi,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Tc.subVectors(r,s),o=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(Tc,o);const d=1/(m+g+f);return a=g*d,o=f*d,e.copy(n).addScaledVector(Ei,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Ou(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ea(a,r,t+1/3),this.g=ea(a,r,t),this.b=ea(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return $t.fromWorkingColorSpace(Re.copy(this),t),Math.round(be(Re.r*255,0,255))*65536+Math.round(be(Re.g*255,0,255))*256+Math.round(be(Re.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=ge){$t.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Vs);const n=Br(On.h,Vs.h,e),s=Br(On.s,Vs.s,e),r=Br(On.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Ft;Ft.NAMES=ql;let ef=0;class es extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Ps(),this.name="",this.blending=Fi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=wa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ea&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class je extends es{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ee,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new L,Ws=new xt;class ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class $l extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yl extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nf=0;const $e=new Yt,na=new Te,Ti=new L,Ge=new pi,us=new pi,ye=new L;class Ne extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?Yl:$l)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Ge.min,us.min),Ge.expandByPoint(ye),ye.addVectors(Ge.max,us.max),Ge.expandByPoint(ye)):(Ge.expandByPoint(us.min),Ge.expandByPoint(us.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ye.fromBufferAttribute(o,l),c&&(Ti.fromBufferAttribute(t,l),ye.add(Ti)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new L,c[R]=new L;const l=new L,h=new L,u=new L,f=new xt,p=new xt,_=new xt,g=new L,m=new L;function d(R,b,y){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),_.sub(f);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(g),o[b].add(g),o[y].add(g),c[R].add(m),c[b].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,b=x.length;R<b;++R){const y=x[R],P=y.start,k=y.count;for(let N=P,X=P+k;N<X;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const M=new L,v=new L,C=new L,w=new L;function A(R){C.fromBufferAttribute(s,R),w.copy(C);const b=o[R];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(w,b);const P=v.dot(c[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,b=x.length;R<b;++R){const y=x[R],P=y.start,k=y.count;for(let N=P,X=P+k;N<X;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let d=0;d<h;d++)f[_++]=l[p++]}return new ce(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new Yt,ti=new Yu,Xs=new Ls,Cc=new L,qs=new L,$s=new L,Ys=new L,ia=new L,Ks=new L,Rc=new L,Js=new L;class oe extends Te{constructor(t=new Ne,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ks.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ia.fromBufferAttribute(u,t),a?Ks.addScaledVector(ia,h):Ks.addScaledVector(ia.sub(e),h))}e.add(Ks)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Xs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Xs,Cc)===null||ti.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Ac.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=M;v<C;v+=3){const w=o.getX(v),A=o.getX(v+1),R=o.getX(v+2);s=Zs(this,d,t,n,l,h,u,w,A,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Zs(this,a,t,n,l,h,u,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=M;v<C;v+=3){const w=v,A=v+1,R=v+2;s=Zs(this,d,t,n,l,h,u,w,A,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const x=m,M=m+1,v=m+2;s=Zs(this,a,t,n,l,h,u,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function sf(i,t,e,n,s,r,a,o){let c;if(t.side===Pe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Yn,o),c===null)return null;Js.copy(o),Js.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Js);return l<e.near||l>e.far?null:{distance:l,point:Js.clone(),object:i}}function Zs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,qs),i.getVertexPosition(c,$s),i.getVertexPosition(l,Ys);const h=sf(i,t,e,n,qs,$s,Ys,Rc);if(h){const u=new L;on.getBarycoord(Rc,qs,$s,Ys,u),s&&(h.uv=on.getInterpolatedAttribute(s,o,c,l,u,new xt)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,c,l,u,new xt)),a&&(h.normal=on.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};on.getNormal(qs,$s,Ys,f.normal),h.face=f,h.barycoord=u}return h}class Be extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function _(g,m,d,x,M,v,C,w,A,R,b){const y=v/A,P=C/R,k=v/2,N=C/2,X=w/2,Z=A+1,q=R+1;let O=0,F=0;const K=new L;for(let it=0;it<q;it++){const ct=it*P-N;for(let Rt=0;Rt<Z;Rt++){const Xt=Rt*y-k;K[g]=Xt*x,K[m]=ct*M,K[d]=X,l.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[d]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(Rt/A),u.push(1-it/R),O+=1}}for(let it=0;it<R;it++)for(let ct=0;ct<A;ct++){const Rt=f+ct+Z*it,Xt=f+ct+Z*(it+1),$=f+(ct+1)+Z*(it+1),rt=f+(ct+1)+Z*it;c.push(Rt,Xt,rt),c.push(Xt,$,rt),F+=6}o.addGroup(p,F,b),p+=F,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const s in n)t[s]=n[s]}return t}function rf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const af={clone:Ji,merge:Ie};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends es{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jl extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new L,Pc=new xt,Lc=new xt;class Ke extends Jl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Pc,Lc),e.subVectors(Lc,Pc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ci=1;class lf extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(Ai,Ci,t,e);s.layers=this.layers,this.add(s);const r=new Ke(Ai,Ci,t,e);r.layers=this.layers,this.add(r);const a=new Ke(Ai,Ci,t,e);a.layers=this.layers,this.add(a);const o=new Ke(Ai,Ci,t,e);o.layers=this.layers,this.add(o);const c=new Ke(Ai,Ci,t,e);c.layers=this.layers,this.add(c);const l=new Ke(Ai,Ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Zl extends we{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hf extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Xn});r.uniforms.tEquirect.value=e;const a=new oe(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=dn),new lf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const sa=new L,uf=new L,ff=new Ot;class ri{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sa.subVectors(n,e).cross(uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ff.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Ls,js=new L;class To{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],_=s[9],g=s[10],m=s[11],d=s[12],x=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-p,v-d).normalize(),n[1].setComponents(c+r,f+l,m+p,v+d).normalize(),n[2].setComponents(c+a,f+h,m+_,v+x).normalize(),n[3].setComponents(c-a,f-h,m-_,v-x).normalize(),n[4].setComponents(c-o,f-u,m-g,v-M).normalize(),e===Tn)n[5].setComponents(c+o,f+u,m+g,v+M).normalize();else if(e===gr)n[5].setComponents(o,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function df(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){const _=u[f],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){const g=u[p];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Xe extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,p=[],_=[],g=[],m=[];for(let d=0;d<h;d++){const x=d*f-a;for(let M=0;M<l;M++){const v=M*u-r;_.push(v,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){const M=x+l*d,v=x+l*(d+1),C=x+1+l*(d+1),w=x+1+l*d;p.push(M,v,w),p.push(v,C,w)}this.setIndex(p),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(g,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.widthSegments,t.heightSegments)}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
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
}`,nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
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
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ud=`PhysicalMaterial material;
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
#endif`,fd=`struct PhysicalMaterial {
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
}`,dd=`
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
#endif`,pd=`#if defined( RE_IndirectDiffuse )
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bd=`#if defined( USE_POINTS_UV )
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
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
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
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
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
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jd=`float getShadowMask() {
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
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
}`,yp=`#define DISTANCE
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
}`,Sp=`#define DISTANCE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Rp=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Ip=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Up=`#define NORMAL
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
}`,Np=`#define PHONG
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
}`,Fp=`#define PHONG
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
}`,Op=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define TOON
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
}`,kp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Wp=`uniform vec3 color;
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
}`,Xp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:_f,alphatest_fragment:vf,alphatest_pars_fragment:xf,aomap_fragment:Mf,aomap_pars_fragment:yf,batching_pars_vertex:Sf,batching_vertex:bf,begin_vertex:Ef,beginnormal_vertex:wf,bsdfs:Tf,iridescence_fragment:Af,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:If,color_fragment:Df,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Ff,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:kf,displacementmap_vertex:Hf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Vf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:qf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Yf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:ad,envmap_vertex:Jf,fog_vertex:Zf,fog_pars_vertex:jf,fog_fragment:Qf,fog_pars_fragment:td,gradientmap_pars_fragment:ed,lightmap_pars_fragment:nd,lights_lambert_fragment:id,lights_lambert_pars_fragment:sd,lights_pars_begin:rd,lights_toon_fragment:od,lights_toon_pars_fragment:cd,lights_phong_fragment:ld,lights_phong_pars_fragment:hd,lights_physical_fragment:ud,lights_physical_pars_fragment:fd,lights_fragment_begin:dd,lights_fragment_maps:pd,lights_fragment_end:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:xd,map_fragment:Md,map_pars_fragment:yd,map_particle_fragment:Sd,map_particle_pars_fragment:bd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:wd,morphinstance_vertex:Td,morphcolor_vertex:Ad,morphnormal_vertex:Cd,morphtarget_pars_vertex:Rd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Id,normal_pars_fragment:Dd,normal_pars_vertex:Ud,normal_vertex:Nd,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:zd,iridescence_pars_fragment:kd,opaque_fragment:Hd,packing:Gd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:qd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Zd,shadowmask_pars_fragment:jd,skinbase_vertex:Qd,skinning_pars_vertex:tp,skinning_vertex:ep,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:cp,uv_pars_fragment:lp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:fp,background_vert:dp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:vp,depth_vert:xp,depth_frag:Mp,distanceRGBA_vert:yp,distanceRGBA_frag:Sp,equirect_vert:bp,equirect_frag:Ep,linedashed_vert:wp,linedashed_frag:Tp,meshbasic_vert:Ap,meshbasic_frag:Cp,meshlambert_vert:Rp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Ip,meshnormal_vert:Dp,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:kp,points_vert:Hp,points_frag:Gp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},lt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},fn={basic:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ie([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ie([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ie([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ie([lt.points,lt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ie([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ie([lt.common,lt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ie([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ie([lt.sprite,lt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ie([lt.common,lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ie([lt.lights,lt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};fn.physical={uniforms:Ie([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Qs={r:0,b:0,g:0},ni=new Ee,$p=new Yt;function Yp(i,t,e,n,s,r,a){const o=new Ft(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function _(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function g(x){let M=!1;const v=_(x);v===null?d(o,c):v&&v.isColor&&(d(v,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const v=_(M);v&&(v.isCubeTexture||v.mapping===wr)?(h===void 0&&(h=new oe(new Be(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ji(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(M.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(ni)),h.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,(u!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new oe(new Xe(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ji(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function d(x,M){x.getRGB(Qs,Kl(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),c=M,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(o,c)},render:g,addToRenderList:m}}function Kp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,P,k,N,X){let Z=!1;const q=u(N,k,P);r!==q&&(r=q,l(r.object)),Z=p(y,N,k,X),Z&&_(y,N,k,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(y,P,k,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,k){const N=k.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let Z=X[P.id];Z===void 0&&(Z={},X[P.id]=Z);let q=Z[N];return q===void 0&&(q=f(c()),Z[N]=q),q}function f(y){const P=[],k=[],N=[];for(let X=0;X<e;X++)P[X]=0,k[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,P,k,N){const X=r.attributes,Z=P.attributes;let q=0;const O=k.getAttributes();for(const F in O)if(O[F].location>=0){const it=X[F];let ct=Z[F];if(ct===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),it===void 0||it.attribute!==ct||ct&&it.data!==ct.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function _(y,P,k,N){const X={},Z=P.attributes;let q=0;const O=k.getAttributes();for(const F in O)if(O[F].location>=0){let it=Z[F];it===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));const ct={};ct.attribute=it,it&&it.data&&(ct.data=it.data),X[F]=ct,q++}r.attributes=X,r.attributesNum=q,r.index=N}function g(){const y=r.newAttributes;for(let P=0,k=y.length;P<k;P++)y[P]=0}function m(y){d(y,0)}function d(y,P){const k=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;k[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),X[y]!==P&&(i.vertexAttribDivisor(y,P),X[y]=P)}function x(){const y=r.newAttributes,P=r.enabledAttributes;for(let k=0,N=P.length;k<N;k++)P[k]!==y[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function M(y,P,k,N,X,Z,q){q===!0?i.vertexAttribIPointer(y,P,k,X,Z):i.vertexAttribPointer(y,P,k,N,X,Z)}function v(y,P,k,N){g();const X=N.attributes,Z=k.getAttributes(),q=P.defaultAttributeValues;for(const O in Z){const F=Z[O];if(F.location>=0){let K=X[O];if(K===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const it=K.normalized,ct=K.itemSize,Rt=t.get(K);if(Rt===void 0)continue;const Xt=Rt.buffer,$=Rt.type,rt=Rt.bytesPerElement,nt=$===i.INT||$===i.UNSIGNED_INT||K.gpuType===xo;if(K.isInterleavedBufferAttribute){const I=K.data,H=I.stride,j=K.offset;if(I.isInstancedInterleavedBuffer){for(let Q=0;Q<F.locationSize;Q++)d(F.location+Q,I.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Q=0;Q<F.locationSize;Q++)m(F.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Q=0;Q<F.locationSize;Q++)M(F.location+Q,ct/F.locationSize,$,it,H*rt,(j+ct/F.locationSize*Q)*rt,nt)}else{if(K.isInstancedBufferAttribute){for(let I=0;I<F.locationSize;I++)d(F.location+I,K.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let I=0;I<F.locationSize;I++)m(F.location+I);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let I=0;I<F.locationSize;I++)M(F.location+I,ct/F.locationSize,$,it,ct*rt,ct/F.locationSize*I*rt,nt)}}else if(q!==void 0){const it=q[O];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(F.location,it);break;case 3:i.vertexAttrib3fv(F.location,it);break;case 4:i.vertexAttrib4fv(F.location,it);break;default:i.vertexAttrib1fv(F.location,it)}}}}x()}function C(){R();for(const y in n){const P=n[y];for(const k in P){const N=P[k];for(const X in N)h(N[X].object),delete N[X];delete P[k]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const k in P){const N=P[k];for(const X in N)h(N[X].object),delete N[X];delete P[k]}delete n[y.id]}function A(y){for(const P in n){const k=n[P];if(k[y.id]===void 0)continue;const N=k[y.id];for(const X in N)h(N[X].object),delete N[X];delete k[y.id]}}function R(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Jp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Je&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==cn&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function jp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ri,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,M=x*4;let v=d.clippingState||null;c.value=v,v=h(_,f,M,p);for(let C=0;C!==M;++C)v[C]=e[C];d.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const d=p+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,v=p;M!==g;++M,v+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Qp(i){let t=new WeakMap;function e(a,o){return o===Da?a.mapping=Xi:o===Ua&&(a.mapping=qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Da||o===Ua)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new hf(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ql extends Jl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ni=4,Ic=[.125,.215,.35,.446,.526,.582],li=20,ra=new Ql,Dc=new Ft;let aa=null,oa=0,ca=0,la=!1;const ai=(1+Math.sqrt(5))/2,Ri=1/ai,Uc=[new L(-ai,Ri,0),new L(ai,Ri,0),new L(-Ri,0,ai),new L(Ri,0,ai),new L(0,ai,-Ri),new L(0,ai,Ri),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,oa,ca),this._renderer.xr.enabled=la,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Cs,format:Je,colorSpace:Qi,depthBuffer:!1},s=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=em(r,t,e)}return s}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s){const o=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Dc),h.toneMapping=qn,h.autoClear=!1;const p=new je({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),_=new oe(new Be,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Dc),g=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):x===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const M=this._cubeSize;tr(s,x*M,d>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xi||t.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;tr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uc[(s-r-1)%Uc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new oe(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const d=[];let x=0;for(let A=0;A<li;++A){const R=A/g,b=Math.exp(-R*R/2);d.push(b),A===0?x+=b:A<m&&(x+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const v=this._sizeLods[s],C=3*v*(s>M-Ni?s-M+Ni:0),w=4*(this._cubeSize-v);tr(e,C,w,3*v,2*v),c.setRenderTarget(e),c.render(u,ra)}}function tm(i){const t=[],e=[],n=[];let s=i;const r=i-Ni+1+Ic.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ni?c=Ic[a-i+Ni-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,d=1,x=new Float32Array(g*_*p),M=new Float32Array(m*_*p),v=new Float32Array(d*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,R=w>2?0:-1,b=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];x.set(b,g*_*w),M.set(f,m*_*w);const y=[w,w,w,w,w,w];v.set(y,d*_*w)}const C=new Ne;C.setAttribute("position",new ce(x,g)),C.setAttribute("uv",new ce(M,m)),C.setAttribute("faceIndex",new ce(v,d)),t.push(C),s>Ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fc(i,t,e){const n=new di(i,t,e);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function em(i,t,e){const n=new Float32Array(li),s=new L(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Oc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Bc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function nm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Da||c===Ua,h=c===Xi||c===qi;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Nc(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Nc(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function im(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,d=g.length;m<d;m++)t.remove(g[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)t.update(g[m],i.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let M=0,v=x.length;M<v;M+=3){const C=x[M+0],w=x[M+1],A=x[M+2];f.push(C,w,w,A,A,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const C=M+0,w=M+1,A=M+2;f.push(C,w,w,A,A,C)}}else return;const m=new(Gl(f)?Yl:$l)(f,1);m.version=g;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function rm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),e.update(p,n,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function u(f,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,g,0,_);let d=0;for(let x=0;x<_;x++)d+=p[x]*g[x];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function am(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function om(i,t,e){const n=new WeakMap,s=new fe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let v=o.attributes.position.count*M,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*C*4*u),A=new Wl(w,v,C,u);A.type=cn,A.needsUpdate=!0;const R=M*4;for(let y=0;y<u;y++){const P=m[y],k=d[y],N=x[y],X=v*C*4*y;for(let Z=0;Z<P.count;Z++){const q=Z*R;p===!0&&(s.fromBufferAttribute(P,Z),w[X+q+0]=s.x,w[X+q+1]=s.y,w[X+q+2]=s.z,w[X+q+3]=0),_===!0&&(s.fromBufferAttribute(k,Z),w[X+q+4]=s.x,w[X+q+5]=s.y,w[X+q+6]=s.z,w[X+q+7]=0),g===!0&&(s.fromBufferAttribute(N,Z),w[X+q+8]=s.x,w[X+q+9]=s.y,w[X+q+10]=s.z,w[X+q+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new xt(v,C)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function cm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class th extends we{constructor(t,e,n,s,r,a,o,c,l,h=Oi){if(h!==Oi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=fi),n===void 0&&h===Ki&&(n=Yi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eh=new we,zc=new th(1,1),nh=new Wl,ih=new qu,sh=new Zl,kc=[],Hc=[],Gc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Wc.set(n),i.uniformMatrix2fv(this.addr,!1,Wc),xe(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Vc.set(n),i.uniformMatrix3fv(this.addr,!1,Vc),xe(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),xe(e,n)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zc.compareFunction=Hl,r=zc):r=eh,e.setTexture2D(t||r,s)}function wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ih,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sh,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nh,s)}function Cm(i){switch(i){case 5126:return lm;case 35664:return hm;case 35665:return um;case 35666:return fm;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return vm;case 35669:case 35673:return xm;case 5125:return Mm;case 36294:return ym;case 36295:return Sm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}function Rm(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Lm(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Im(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Dm(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Um(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nm(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fm(i,t){i.uniform1iv(this.addr,t)}function Om(i,t){i.uniform2iv(this.addr,t)}function Bm(i,t){i.uniform3iv(this.addr,t)}function zm(i,t){i.uniform4iv(this.addr,t)}function km(i,t){i.uniform1uiv(this.addr,t)}function Hm(i,t){i.uniform2uiv(this.addr,t)}function Gm(i,t){i.uniform3uiv(this.addr,t)}function Vm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||eh,r[a])}function Xm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ih,r[a])}function qm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||sh,r[a])}function $m(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||nh,r[a])}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Pm;case 35665:return Lm;case 35666:return Im;case 35674:return Dm;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return km;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return $m}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cm(e.type)}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ym(e.type)}}class Zm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Xc(i,t){i.seq.push(t),i.map[t.id]=t}function jm(i,t,e){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),a=ha.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Xc(e,l===void 0?new Km(o,i,t):new Jm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Zm(o),Xc(e,u)),e=u}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);jm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function qc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qm=37297;let t0=0;function e0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const $c=new Ot;function n0(i){$t._getMatrix($c,$t.workingColorSpace,i);const t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ar:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+e0(i.getShaderSource(t),a)}else return s}function i0(i,t){const e=n0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function s0(i,t){let e;switch(t){case xu:e="Linear";break;case Mu:e="Reinhard";break;case yu:e="Cineon";break;case Su:e="ACESFilmic";break;case Eu:e="AgX";break;case wu:e="Neutral";break;case bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new L;function r0(){$t.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function o0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vs(i){return i!==""}function Kc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(l0,u0)}const h0=new Map;function u0(i,t){let e=Ht[t];if(e===void 0){const n=h0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lo(e)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(i){return i.replace(f0,d0)}function d0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function p0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function m0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case qi:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function g0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===qi&&(t="ENVMAP_MODE_REFRACTION"),t}function _0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vo:t="ENVMAP_BLENDING_MULTIPLY";break;case _u:t="ENVMAP_BLENDING_MIX";break;case vu:t="ENVMAP_BLENDING_ADD";break}return t}function v0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function x0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=p0(e),l=m0(e),h=g0(e),u=_0(e),f=v0(e),p=a0(e),_=o0(r),g=s.createProgram();let m,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vs).join(`
`),d.length>0&&(d+=`
`)):(m=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),d=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==qn?s0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,i0("linearToOutputTexel",e.outputColorSpace),r0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=lo(a),a=Kc(a,e),a=Jc(a,e),o=lo(o),o=Kc(o,e),o=Jc(o,e),a=Zc(a),o=Zc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+m+a,v=x+d+o,C=qc(s,s.VERTEX_SHADER,M),w=qc(s,s.FRAGMENT_SHADER,v);s.attachShader(g,C),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(C).trim(),X=s.getShaderInfoLog(w).trim();let Z=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,C,w);else{const O=Yc(s,C,"vertex"),F=Yc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+O+`
`+F)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||X==="")&&(q=!1);q&&(P.diagnostics={runnable:Z,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:X,prefix:d}})}s.deleteShader(C),s.deleteShader(w),R=new dr(s,g),b=c0(s,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Qm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let M0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new S0(t),e.set(t,n)),n}}class S0{constructor(t){this.id=M0++,this.code=t,this.usedTimes=0}}function b0(i,t,e,n,s,r,a){const o=new Xl,c=new y0,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,k,N){const X=k.fog,Z=N.geometry,q=b.isMeshStandardMaterial?k.environment:null,O=(b.isMeshStandardMaterial?e:t).get(b.envMap||q),F=O&&O.mapping===wr?O.image.height:null,K=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const it=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ct=it!==void 0?it.length:0;let Rt=0;Z.morphAttributes.position!==void 0&&(Rt=1),Z.morphAttributes.normal!==void 0&&(Rt=2),Z.morphAttributes.color!==void 0&&(Rt=3);let Xt,$,rt,nt;if(K){const jt=fn[K];Xt=jt.vertexShader,$=jt.fragmentShader}else Xt=b.vertexShader,$=b.fragmentShader,c.update(b),rt=c.getVertexShaderID(b),nt=c.getFragmentShaderID(b);const I=i.getRenderTarget(),H=i.state.buffers.depth.getReversed(),j=N.isInstancedMesh===!0,Q=N.isBatchedMesh===!0,At=!!b.map,gt=!!b.matcap,Vt=!!O,D=!!b.aoMap,le=!!b.lightMap,Ut=!!b.bumpMap,Gt=!!b.normalMap,Pt=!!b.displacementMap,se=!!b.emissiveMap,Ct=!!b.metalnessMap,T=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,tt=b.dispersion>0,st=b.iridescence>0,J=b.sheen>0,Et=b.transmission>0,ut=S&&!!b.anisotropyMap,mt=G&&!!b.clearcoatMap,qt=G&&!!b.clearcoatNormalMap,at=G&&!!b.clearcoatRoughnessMap,_t=st&&!!b.iridescenceMap,Lt=st&&!!b.iridescenceThicknessMap,Dt=J&&!!b.sheenColorMap,vt=J&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,kt=!!b.specularColorMap,ne=!!b.specularIntensityMap,U=Et&&!!b.transmissionMap,ht=Et&&!!b.thicknessMap,Y=!!b.gradientMap,et=!!b.alphaMap,pt=b.alphaTest>0,ft=!!b.alphaHash,Bt=!!b.extensions;let he=qn;b.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(he=i.toneMapping);const Ae={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:Xt,fragmentShader:$,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:nt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Q,batchingColor:Q&&N._colorsTexture!==null,instancing:j,instancingColor:j&&N.instanceColor!==null,instancingMorph:j&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:I===null?i.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qi,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:gt,envMap:Vt,envMapMode:Vt&&O.mapping,envMapCubeUVHeight:F,aoMap:D,lightMap:le,bumpMap:Ut,normalMap:Gt,displacementMap:f&&Pt,emissiveMap:se,normalMapObjectSpace:Gt&&b.normalMapType===Ru,normalMapTangentSpace:Gt&&b.normalMapType===wo,metalnessMap:Ct,roughnessMap:T,anisotropy:S,anisotropyMap:ut,clearcoat:G,clearcoatMap:mt,clearcoatNormalMap:qt,clearcoatRoughnessMap:at,dispersion:tt,iridescence:st,iridescenceMap:_t,iridescenceThicknessMap:Lt,sheen:J,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:Wt,specularColorMap:kt,specularIntensityMap:ne,transmission:Et,transmissionMap:U,thicknessMap:ht,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Fi&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:ft,combine:b.combine,mapUv:At&&g(b.map.channel),aoMapUv:D&&g(b.aoMap.channel),lightMapUv:le&&g(b.lightMap.channel),bumpMapUv:Ut&&g(b.bumpMap.channel),normalMapUv:Gt&&g(b.normalMap.channel),displacementMapUv:Pt&&g(b.displacementMap.channel),emissiveMapUv:se&&g(b.emissiveMap.channel),metalnessMapUv:Ct&&g(b.metalnessMap.channel),roughnessMapUv:T&&g(b.roughnessMap.channel),anisotropyMapUv:ut&&g(b.anisotropyMap.channel),clearcoatMapUv:mt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(b.sheenRoughnessMap.channel),specularMapUv:Wt&&g(b.specularMap.channel),specularColorMapUv:kt&&g(b.specularColorMap.channel),specularIntensityMapUv:ne&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:ht&&g(b.thicknessMap.channel),alphaMapUv:et&&g(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Gt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(At||et),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:H,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&$t.getTransfer(b.map.colorSpace)===te,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&$t.getTransfer(b.emissiveMap.colorSpace)===te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===an,flipSided:b.side===Pe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function d(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(x(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function x(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const y=_[b.type];let P;if(y){const k=fn[y];P=af.clone(k.uniforms)}else P=b.uniforms;return P}function C(b,y){let P;for(let k=0,N=h.length;k<N;k++){const X=h[k];if(X.cacheKey===y){P=X,++P.usedTimes;break}}return P===void 0&&(P=new x0(i,y,b,r),h.push(P)),P}function w(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:R}}function E0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,_,g,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),t++,d}function o(u,f,p,_,g,m){const d=a(u,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,_,g,m){const d=a(u,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||w0),n.length>1&&n.sort(f||Qc),s.length>1&&s.sort(f||Qc)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function T0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new tl,i.set(n,[a])):s>=r.length?(a=new tl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function A0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ft};break;case"SpotLight":e={position:new L,direction:new L,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function C0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let R0=0;function P0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L0(i){const t=new A0,e=C0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Yt,a=new Yt;function o(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,g=0,m=0,d=0,x=0,M=0,v=0,C=0,w=0,A=0;l.sort(P0);for(let b=0,y=l.length;b<y;b++){const P=l[b],k=P.color,N=P.intensity,X=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*N,u+=k.g*N,f+=k.b*N;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],N);A++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,F=e.get(P);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=P.shadow.matrix,x++}n.directional[p]=q,p++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(k).multiplyScalar(N),q.distance=X,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[g]=q;const O=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,O.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=O.matrix,P.castShadow){const F=e.get(P);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,n.spotShadow[g]=F,n.spotShadowMap[g]=Z,v++}g++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(k).multiplyScalar(N),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const O=P.shadow,F=e.get(P);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,F.shadowCameraNear=O.camera.near,F.shadowCameraFar=O.camera.far,n.pointShadow[_]=F,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=q,_++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(N),q.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[d]=q,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==x||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==C||R.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=x,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=C,R.numLightProbes=A,n.version=R0++)}function c(l,h){let u=0,f=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let d=0,x=l.length;d<x;d++){const M=l[d];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function el(i){const t=new L0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function I0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new el(i),t.set(s,[o])):r>=a.length?(o=new el(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class D0 extends es{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class U0 extends es{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`;function O0(i,t,e){let n=new To;const s=new xt,r=new xt,a=new fe,o=new D0({depthPacking:Cu}),c=new U0,l={},h=e.maxTextureSize,u={[Yn]:Pe,[Pe]:Yn,[an]:an},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:N0,fragmentShader:F0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ne;_.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new oe(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let d=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Xn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=d!==wn&&this.type===wn,X=d===wn&&this.type!==wn;for(let Z=0,q=w.length;Z<q;Z++){const O=w[Z],F=O.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const K=F.getFrameExtents();if(s.multiply(K),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,F.mapSize.y=r.y)),F.map===null||N===!0||X===!0){const ct=this.type!==wn?{minFilter:Ue,magFilter:Ue}:{};F.map!==null&&F.map.dispose(),F.map=new di(s.x,s.y,ct),F.map.texture.name=O.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const it=F.getViewportCount();for(let ct=0;ct<it;ct++){const Rt=F.getViewport(ct);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),k.viewport(a),F.updateMatrices(O,ct),n=F.getFrustum(),v(A,R,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===wn&&x(F,R),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,P)};function x(w,A){const R=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new di(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,R,f,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,R,p,g,null)}function M(w,A,R,b){let y=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=y.uuid,N=A.uuid;let X=l[k];X===void 0&&(X={},l[k]=X);let Z=X[N];Z===void 0&&(Z=y.clone(),X[N]=Z,A.addEventListener("dispose",C)),y=Z}if(y.visible=A.visible,y.wireframe=A.wireframe,b===wn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=R}return y}function v(w,A,R,b,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===wn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const N=t.update(w),X=w.material;if(Array.isArray(X)){const Z=N.groups;for(let q=0,O=Z.length;q<O;q++){const F=Z[q],K=X[F.materialIndex];if(K&&K.visible){const it=M(w,K,b,y);w.onBeforeShadow(i,w,A,R,N,it,F),i.renderBufferDirect(R,null,N,it,w,F),w.onAfterShadow(i,w,A,R,N,it,F)}}}else if(X.visible){const Z=M(w,X,b,y);w.onBeforeShadow(i,w,A,R,N,Z,null),i.renderBufferDirect(R,null,N,Z,w,null),w.onAfterShadow(i,w,A,R,N,Z,null)}}const k=w.children;for(let N=0,X=k.length;N<X;N++)v(k[N],A,R,b,y)}function C(w){w.target.removeEventListener("dispose",C);for(const R in l){const b=l[R],y=w.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const B0={[Ta]:Aa,[Ca]:La,[Ra]:Ia,[Wi]:Pa,[Aa]:Ta,[La]:Ca,[Ia]:Ra,[Pa]:Wi};function z0(i,t){function e(){let U=!1;const ht=new fe;let Y=null;const et=new fe(0,0,0,0);return{setMask:function(pt){Y!==pt&&!U&&(i.colorMask(pt,pt,pt,pt),Y=pt)},setLocked:function(pt){U=pt},setClear:function(pt,ft,Bt,he,Ae){Ae===!0&&(pt*=he,ft*=he,Bt*=he),ht.set(pt,ft,Bt,he),et.equals(ht)===!1&&(i.clearColor(pt,ft,Bt,he),et.copy(ht))},reset:function(){U=!1,Y=null,et.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,Y=null,et=null,pt=null;return{setReversed:function(ft){if(ht!==ft){const Bt=t.get("EXT_clip_control");ht?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const he=pt;pt=null,this.setClear(he)}ht=ft},getReversed:function(){return ht},setTest:function(ft){ft?I(i.DEPTH_TEST):H(i.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!U&&(i.depthMask(ft),Y=ft)},setFunc:function(ft){if(ht&&(ft=B0[ft]),et!==ft){switch(ft){case Ta:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=ft}},setLocked:function(ft){U=ft},setClear:function(ft){pt!==ft&&(ht&&(ft=1-ft),i.clearDepth(ft),pt=ft)},reset:function(){U=!1,Y=null,et=null,pt=null,ht=!1}}}function s(){let U=!1,ht=null,Y=null,et=null,pt=null,ft=null,Bt=null,he=null,Ae=null;return{setTest:function(jt){U||(jt?I(i.STENCIL_TEST):H(i.STENCIL_TEST))},setMask:function(jt){ht!==jt&&!U&&(i.stencilMask(jt),ht=jt)},setFunc:function(jt,Qe,gn){(Y!==jt||et!==Qe||pt!==gn)&&(i.stencilFunc(jt,Qe,gn),Y=jt,et=Qe,pt=gn)},setOp:function(jt,Qe,gn){(ft!==jt||Bt!==Qe||he!==gn)&&(i.stencilOp(jt,Qe,gn),ft=jt,Bt=Qe,he=gn)},setLocked:function(jt){U=jt},setClear:function(jt){Ae!==jt&&(i.clearStencil(jt),Ae=jt)},reset:function(){U=!1,ht=null,Y=null,et=null,pt=null,ft=null,Bt=null,he=null,Ae=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,d=null,x=null,M=null,v=null,C=null,w=null,A=new Ft(0,0,0),R=0,b=!1,y=null,P=null,k=null,N=null,X=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,O=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),q=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),q=O>=2);let K=null,it={};const ct=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Xt=new fe().fromArray(ct),$=new fe().fromArray(Rt);function rt(U,ht,Y,et){const pt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(U,ft),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<Y;Bt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ft}const nt={};nt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),I(i.DEPTH_TEST),a.setFunc(Wi),Ut(!1),Gt(ac),I(i.CULL_FACE),D(Xn);function I(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function H(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function j(U,ht){return u[U]!==ht?(i.bindFramebuffer(U,ht),u[U]=ht,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Q(U,ht){let Y=p,et=!1;if(U){Y=f.get(ht),Y===void 0&&(Y=[],f.set(ht,Y));const pt=U.textures;if(Y.length!==pt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Bt=pt.length;ft<Bt;ft++)Y[ft]=i.COLOR_ATTACHMENT0+ft;Y.length=pt.length,et=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,et=!0);et&&i.drawBuffers(Y)}function At(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const gt={[ci]:i.FUNC_ADD,[tu]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};gt[nu]=i.MIN,gt[iu]=i.MAX;const Vt={[su]:i.ZERO,[ru]:i.ONE,[au]:i.SRC_COLOR,[Ea]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[hu]:i.DST_COLOR,[cu]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA,[du]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[gu]:i.ONE_MINUS_CONSTANT_ALPHA};function D(U,ht,Y,et,pt,ft,Bt,he,Ae,jt){if(U===Xn){g===!0&&(H(i.BLEND),g=!1);return}if(g===!1&&(I(i.BLEND),g=!0),U!==Qh){if(U!==m||jt!==b){if((d!==ci||v!==ci)&&(i.blendEquation(i.FUNC_ADD),d=ci,v=ci),jt)switch(U){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,M=null,C=null,w=null,A.set(0,0,0),R=0,m=U,b=jt}return}pt=pt||ht,ft=ft||Y,Bt=Bt||et,(ht!==d||pt!==v)&&(i.blendEquationSeparate(gt[ht],gt[pt]),d=ht,v=pt),(Y!==x||et!==M||ft!==C||Bt!==w)&&(i.blendFuncSeparate(Vt[Y],Vt[et],Vt[ft],Vt[Bt]),x=Y,M=et,C=ft,w=Bt),(he.equals(A)===!1||Ae!==R)&&(i.blendColor(he.r,he.g,he.b,Ae),A.copy(he),R=Ae),m=U,b=!1}function le(U,ht){U.side===an?H(i.CULL_FACE):I(i.CULL_FACE);let Y=U.side===Pe;ht&&(Y=!Y),Ut(Y),U.blending===Fi&&U.transparent===!1?D(Xn):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const et=U.stencilWrite;o.setTest(et),et&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?I(i.SAMPLE_ALPHA_TO_COVERAGE):H(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function Gt(U){U!==Jh?(I(i.CULL_FACE),U!==P&&(U===ac?i.cullFace(i.BACK):U===Zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):H(i.CULL_FACE),P=U}function Pt(U){U!==k&&(q&&i.lineWidth(U),k=U)}function se(U,ht,Y){U?(I(i.POLYGON_OFFSET_FILL),(N!==ht||X!==Y)&&(i.polygonOffset(ht,Y),N=ht,X=Y)):H(i.POLYGON_OFFSET_FILL)}function Ct(U){U?I(i.SCISSOR_TEST):H(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+Z-1),K!==U&&(i.activeTexture(U),K=U)}function S(U,ht,Y){Y===void 0&&(K===null?Y=i.TEXTURE0+Z-1:Y=K);let et=it[Y];et===void 0&&(et={type:void 0,texture:void 0},it[Y]=et),(et.type!==U||et.texture!==ht)&&(K!==Y&&(i.activeTexture(Y),K=Y),i.bindTexture(U,ht||nt[U]),et.type=U,et.texture=ht)}function G(){const U=it[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){Xt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Xt.copy(U))}function vt(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function Wt(U,ht){let Y=l.get(ht);Y===void 0&&(Y=new WeakMap,l.set(ht,Y));let et=Y.get(U);et===void 0&&(et=i.getUniformBlockIndex(ht,U.name),Y.set(U,et))}function kt(U,ht){const et=l.get(ht).get(U);c.get(ht)!==et&&(i.uniformBlockBinding(ht,et,U.__bindingPointIndex),c.set(ht,et))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,it={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,d=null,x=null,M=null,v=null,C=null,w=null,A=new Ft(0,0,0),R=0,b=!1,y=null,P=null,k=null,N=null,X=null,Xt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:I,disable:H,bindFramebuffer:j,drawBuffers:Q,useProgram:At,setBlending:D,setMaterial:le,setFlipSided:Ut,setCullFace:Gt,setLineWidth:Pt,setPolygonOffset:se,setScissorTest:Ct,activeTexture:T,bindTexture:S,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:_t,texImage3D:Lt,updateUBOMapping:Wt,uniformBlockBinding:kt,texStorage2D:qt,texStorage3D:at,texSubImage2D:J,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:Dt,viewport:vt,reset:ne}}function nl(i,t,e,n){const s=k0(n);switch(e){case Nl:return i*t;case Ol:return i*t;case Bl:return i*t*2;case Tr:return i*t/s.components*s.byteLength;case So:return i*t/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case bo:return i*t*2/s.components*s.byteLength;case Fl:return i*t*3/s.components*s.byteLength;case Je:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ao:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k0(i){switch(i){case Rn:case Il:return{byteLength:1,components:1};case ws:case Dl:case Cs:return{byteLength:2,components:1};case Mo:case yo:return{byteLength:2,components:4};case fi:case xo:case cn:return{byteLength:4,components:1};case Ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function H0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return p?new OffscreenCanvas(T,S):Ts("canvas")}function g(T,S,G){let tt=1;const st=Ct(T);if((st.width>G||st.height>G)&&(tt=G/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(tt*st.width),Et=Math.floor(tt*st.height);u===void 0&&(u=_(J,Et));const ut=S?_(J,Et):u;return ut.width=J,ut.height=Et,ut.getContext("2d").drawImage(T,0,0,J,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+J+"x"+Et+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,S,G,tt,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=S;if(S===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),S===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGB8UI),G===i.UNSIGNED_SHORT&&(J=i.RGB16UI),G===i.UNSIGNED_INT&&(J=i.RGB32UI),G===i.BYTE&&(J=i.RGB8I),G===i.SHORT&&(J=i.RGB16I),G===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),G===i.UNSIGNED_INT&&(J=i.RGBA32UI),G===i.BYTE&&(J=i.RGBA8I),G===i.SHORT&&(J=i.RGBA16I),G===i.INT&&(J=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){const Et=st?Ar:$t.getTransfer(tt);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=Et===te?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(T,S){let G;return T?S===null||S===fi||S===Yi?G=i.DEPTH24_STENCIL8:S===cn?G=i.DEPTH32F_STENCIL8:S===ws&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===Yi?G=i.DEPTH_COMPONENT24:S===cn?G=i.DEPTH_COMPONENT32F:S===ws&&(G=i.DEPTH_COMPONENT16),G}function C(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ue&&T.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){const S=T.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&h.delete(S)}function A(T){const S=T.target;S.removeEventListener("dispose",A),y(S)}function R(T){const S=n.get(T);if(S.__webglInit===void 0)return;const G=T.source,tt=f.get(G);if(tt){const st=tt[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(T),Object.keys(tt).length===0&&f.delete(G)}n.remove(T)}function b(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const G=T.source,tt=f.get(G);delete tt[S.__cacheKey],a.memory.textures--}function y(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let st=0;st<S.__webglFramebuffer[tt].length;st++)i.deleteFramebuffer(S.__webglFramebuffer[tt][st]);else i.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[tt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=T.textures;for(let tt=0,st=G.length;tt<st;tt++){const J=n.get(G[tt]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(G[tt])}n.remove(T)}let P=0;function k(){P=0}function N(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function X(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Z(T,S){const G=n.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const tt=T.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,T,S);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function q(T,S){const G=n.get(T);if(T.version>0&&G.__version!==T.version){$(G,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function O(T,S){const G=n.get(T);if(T.version>0&&G.__version!==T.version){$(G,T,S);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function F(T,S){const G=n.get(T);if(T.version>0&&G.__version!==T.version){rt(G,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const K={[$i]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},it={[Ue]:i.NEAREST,[Tu]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Fr]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},ct={[Pu]:i.NEVER,[Fu]:i.ALWAYS,[Lu]:i.LESS,[Hl]:i.LEQUAL,[Iu]:i.EQUAL,[Nu]:i.GEQUAL,[Du]:i.GREATER,[Uu]:i.NOTEQUAL};function Rt(T,S){if(S.type===cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===Fr||S.magFilter===Ns||S.magFilter===ui||S.minFilter===dn||S.minFilter===Fr||S.minFilter===Ns||S.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,K[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,it[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,it[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ue||S.minFilter!==Ns&&S.minFilter!==ui||S.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xt(T,S){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));const tt=S.source;let st=f.get(tt);st===void 0&&(st={},f.set(tt,st));const J=X(S);if(J!==T.__cacheKey){st[J]===void 0&&(st[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),st[J].usedTimes++;const Et=st[T.__cacheKey];Et!==void 0&&(st[T.__cacheKey].usedTimes--,Et.usedTimes===0&&b(S)),T.__cacheKey=J,T.__webglTexture=st[J].texture}return G}function $(T,S,G){let tt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=i.TEXTURE_3D);const st=Xt(T,S),J=S.source;e.bindTexture(tt,T.__webglTexture,i.TEXTURE0+G);const Et=n.get(J);if(J.version!==Et.__version||st===!0){e.activeTexture(i.TEXTURE0+G);const ut=$t.getPrimaries($t.workingColorSpace),mt=S.colorSpace===Hn?null:$t.getPrimaries(S.colorSpace),qt=S.colorSpace===Hn||ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let at=g(S.image,!1,s.maxTextureSize);at=se(S,at);const _t=r.convert(S.format,S.colorSpace),Lt=r.convert(S.type);let Dt=M(S.internalFormat,_t,Lt,S.colorSpace,S.isVideoTexture);Rt(tt,S);let vt;const Wt=S.mipmaps,kt=S.isVideoTexture!==!0,ne=Et.__version===void 0||st===!0,U=J.dataReady,ht=C(S,at);if(S.isDepthTexture)Dt=v(S.format===Ki,S.type),ne&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Dt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,_t,Lt,null));else if(S.isDataTexture)if(Wt.length>0){kt&&ne&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,Wt[0].width,Wt[0].height);for(let Y=0,et=Wt.length;Y<et;Y++)vt=Wt[Y],kt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,vt.width,vt.height,_t,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,Y,Dt,vt.width,vt.height,0,_t,Lt,vt.data);S.generateMipmaps=!1}else kt?(ne&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,at.width,at.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,_t,Lt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,_t,Lt,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,Wt[0].width,Wt[0].height,at.depth);for(let Y=0,et=Wt.length;Y<et;Y++)if(vt=Wt[Y],S.format!==Je)if(_t!==null)if(kt){if(U)if(S.layerUpdates.size>0){const pt=nl(vt.width,vt.height,S.format,S.type);for(const ft of S.layerUpdates){const Bt=vt.data.subarray(ft*pt/vt.data.BYTES_PER_ELEMENT,(ft+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ft,vt.width,vt.height,1,_t,Bt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,at.depth,_t,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Dt,vt.width,vt.height,at.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,at.depth,_t,Lt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Dt,vt.width,vt.height,at.depth,0,_t,Lt,vt.data)}else{kt&&ne&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,Wt[0].width,Wt[0].height);for(let Y=0,et=Wt.length;Y<et;Y++)vt=Wt[Y],S.format!==Je?_t!==null?kt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,vt.width,vt.height,_t,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,Y,Dt,vt.width,vt.height,0,_t,Lt,vt.data)}else if(S.isDataArrayTexture)if(kt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,at.width,at.height,at.depth),U)if(S.layerUpdates.size>0){const Y=nl(at.width,at.height,S.format,S.type);for(const et of S.layerUpdates){const pt=at.data.subarray(et*Y/at.data.BYTES_PER_ELEMENT,(et+1)*Y/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,_t,Lt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,Lt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,_t,Lt,at.data);else if(S.isData3DTexture)kt?(ne&&e.texStorage3D(i.TEXTURE_3D,ht,Dt,at.width,at.height,at.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,Lt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,_t,Lt,at.data);else if(S.isFramebufferTexture){if(ne)if(kt)e.texStorage2D(i.TEXTURE_2D,ht,Dt,at.width,at.height);else{let Y=at.width,et=at.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Dt,Y,et,0,_t,Lt,null),Y>>=1,et>>=1}}else if(Wt.length>0){if(kt&&ne){const Y=Ct(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Dt,Y.width,Y.height)}for(let Y=0,et=Wt.length;Y<et;Y++)vt=Wt[Y],kt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,_t,Lt,vt):e.texImage2D(i.TEXTURE_2D,Y,Dt,_t,Lt,vt);S.generateMipmaps=!1}else if(kt){if(ne){const Y=Ct(at);e.texStorage2D(i.TEXTURE_2D,ht,Dt,Y.width,Y.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Lt,at)}else e.texImage2D(i.TEXTURE_2D,0,Dt,_t,Lt,at);m(S)&&d(tt),Et.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function rt(T,S,G){if(S.image.length!==6)return;const tt=Xt(T,S),st=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const J=n.get(st);if(st.version!==J.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);const Et=$t.getPrimaries($t.workingColorSpace),ut=S.colorSpace===Hn?null:$t.getPrimaries(S.colorSpace),mt=S.colorSpace===Hn||Et===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const qt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!qt&&!at?_t[et]=g(S.image[et],!0,s.maxCubemapSize):_t[et]=at?S.image[et].image:S.image[et],_t[et]=se(S,_t[et]);const Lt=_t[0],Dt=r.convert(S.format,S.colorSpace),vt=r.convert(S.type),Wt=M(S.internalFormat,Dt,vt,S.colorSpace),kt=S.isVideoTexture!==!0,ne=J.__version===void 0||tt===!0,U=st.dataReady;let ht=C(S,Lt);Rt(i.TEXTURE_CUBE_MAP,S);let Y;if(qt){kt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Wt,Lt.width,Lt.height);for(let et=0;et<6;et++){Y=_t[et].mipmaps;for(let pt=0;pt<Y.length;pt++){const ft=Y[pt];S.format!==Je?Dt!==null?kt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ft.width,ft.height,Dt,vt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Wt,ft.width,ft.height,0,Dt,vt,ft.data)}}}else{if(Y=S.mipmaps,kt&&ne){Y.length>0&&ht++;const et=Ct(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Wt,et.width,et.height)}for(let et=0;et<6;et++)if(at){kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Dt,vt,_t[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,_t[et].width,_t[et].height,0,Dt,vt,_t[et].data);for(let pt=0;pt<Y.length;pt++){const Bt=Y[pt].image[et].image;kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Bt.width,Bt.height,Dt,vt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Wt,Bt.width,Bt.height,0,Dt,vt,Bt.data)}}else{kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Dt,vt,_t[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,Dt,vt,_t[et]);for(let pt=0;pt<Y.length;pt++){const ft=Y[pt];kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Dt,vt,ft.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Wt,Dt,vt,ft.image[et])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),J.__version=st.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function nt(T,S,G,tt,st,J){const Et=r.convert(G.format,G.colorSpace),ut=r.convert(G.type),mt=M(G.internalFormat,Et,ut,G.colorSpace),qt=n.get(S),at=n.get(G);if(at.__renderTarget=S,!qt.__hasExternalTextures){const _t=Math.max(1,S.width>>J),Lt=Math.max(1,S.height>>J);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,J,mt,_t,Lt,S.depth,0,Et,ut,null):e.texImage2D(st,J,mt,_t,Lt,0,Et,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Gt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,st,at.__webglTexture,0,Ut(S)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,st,at.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function I(T,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){const tt=S.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,J=v(S.stencilBuffer,st),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Ut(S);Gt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,J,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,T)}else{const tt=S.textures;for(let st=0;st<tt.length;st++){const J=tt[st],Et=r.convert(J.format,J.colorSpace),ut=r.convert(J.type),mt=M(J.internalFormat,Et,ut,J.colorSpace),qt=Ut(S);G&&Gt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,mt,S.width,S.height):Gt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function H(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(S.depthTexture);tt.__renderTarget=S,(!tt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const st=tt.__webglTexture,J=Ut(S);if(S.depthTexture.format===Oi)Gt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(S.depthTexture.format===Ki)Gt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function j(T){const S=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const tt=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),tt){const st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=tt}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");H(S.__webglFramebuffer,T)}else if(G){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]===void 0)S.__webglDepthbuffer[tt]=i.createRenderbuffer(),I(S.__webglDepthbuffer[tt],T,!1);else{const st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),I(S.__webglDepthbuffer,T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(T,S,G){const tt=n.get(T);S!==void 0&&nt(tt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&j(T)}function At(T){const S=T.texture,G=n.get(T),tt=n.get(S);T.addEventListener("dispose",A);const st=T.textures,J=T.isWebGLCubeRenderTarget===!0,Et=st.length>1;if(Et||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=S.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ut]=[];for(let mt=0;mt<S.mipmaps.length;mt++)G.__webglFramebuffer[ut][mt]=i.createFramebuffer()}else G.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)G.__webglFramebuffer[ut]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ut=0,mt=st.length;ut<mt;ut++){const qt=n.get(st[ut]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Gt(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ut=0;ut<st.length;ut++){const mt=st[ut];G.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ut]);const qt=r.convert(mt.format,mt.colorSpace),at=r.convert(mt.type),_t=M(mt.internalFormat,qt,at,mt.colorSpace,T.isXRRenderTarget===!0),Lt=Ut(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,_t,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,G.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),I(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)nt(G.__webglFramebuffer[ut][mt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else nt(G.__webglFramebuffer[ut],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,mt=st.length;ut<mt;ut++){const qt=st[ut],at=n.get(qt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Rt(i.TEXTURE_2D,qt),nt(G.__webglFramebuffer,T,qt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(qt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,tt.__webglTexture),Rt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)nt(G.__webglFramebuffer[mt],T,S,i.COLOR_ATTACHMENT0,ut,mt);else nt(G.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,ut,0);m(S)&&d(ut),e.unbindTexture()}T.depthBuffer&&j(T)}function gt(T){const S=T.textures;for(let G=0,tt=S.length;G<tt;G++){const st=S[G];if(m(st)){const J=x(T),Et=n.get(st).__webglTexture;e.bindTexture(J,Et),d(J),e.unbindTexture()}}}const Vt=[],D=[];function le(T){if(T.samples>0){if(Gt(T)===!1){const S=T.textures,G=T.width,tt=T.height;let st=i.COLOR_BUFFER_BIT;const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(T),ut=S.length>1;if(ut)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);const qt=n.get(S[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,G,tt,0,0,G,tt,st,i.NEAREST),c===!0&&(Vt.length=0,D.length=0,Vt.push(i.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Vt.push(J),D.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);const qt=n.get(S[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ut(T){return Math.min(s.maxSamples,T.samples)}function Gt(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pt(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function se(T,S){const G=T.colorSpace,tt=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==Qi&&G!==Hn&&($t.getTransfer(G)===te?(tt!==Je||st!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=O,this.setTextureCube=F,this.rebindTextures=Q,this.setupRenderTarget=At,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Gt}function G0(i,t){function e(n,s=Hn){let r;const a=$t.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.BYTE;if(n===Dl)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Cs)return i.HALF_FLOAT;if(n===Nl)return i.ALPHA;if(n===Fl)return i.RGB;if(n===Je)return i.RGBA;if(n===Ol)return i.LUMINANCE;if(n===Bl)return i.LUMINANCE_ALPHA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Tr)return i.RED;if(n===So)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===cr||n===lr||n===hr||n===ur)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Ha)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ga)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Wa||n===Xa||n===qa||n===$a||n===Ya||n===Ka||n===Ja||n===Za||n===ja||n===Qa||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===io||n===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===ro||n===ao||n===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class V0 extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const X0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q0=`
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

}`;class $0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new we,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:X0,fragmentShader:q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends ts{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,_=null;const g=new $0,m=e.getContextAttributes();let d=null,x=null;const M=[],v=[],C=new xt;let w=null;const A=new Ke;A.viewport=new fe;const R=new Ke;R.viewport=new fe;const b=[A,R],y=new V0;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=M[$];return rt===void 0&&(rt=new ua,M[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=M[$];return rt===void 0&&(rt=new ua,M[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=M[$];return rt===void 0&&(rt=new ua,M[$]=rt),rt.getHandSpace()};function N($){const rt=v.indexOf($.inputSource);if(rt===-1)return;const nt=M[rt];nt!==void 0&&(nt.update($.inputSource,$.frame,l||a),nt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let $=0;$<M.length;$++){const rt=v[$];rt!==null&&(v[$]=null,M[$].disconnect(rt))}P=null,k=null,g.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,x=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new di(p.framebufferWidth,p.framebufferHeight,{format:Je,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,nt=null,I=null;m.depth&&(I=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Ki:Oi,nt=m.stencil?Yi:fi);const H={colorFormat:e.RGBA8,depthFormat:I,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(H),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new di(f.textureWidth,f.textureHeight,{format:Je,type:Rn,depthTexture:new th(f.textureWidth,f.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z($){for(let rt=0;rt<$.removed.length;rt++){const nt=$.removed[rt],I=v.indexOf(nt);I>=0&&(v[I]=null,M[I].disconnect(nt))}for(let rt=0;rt<$.added.length;rt++){const nt=$.added[rt];let I=v.indexOf(nt);if(I===-1){for(let j=0;j<M.length;j++)if(j>=v.length){v.push(nt),I=j;break}else if(v[j]===null){v[j]=nt,I=j;break}if(I===-1)break}const H=M[I];H&&H.connect(nt)}}const q=new L,O=new L;function F($,rt,nt){q.setFromMatrixPosition(rt.matrixWorld),O.setFromMatrixPosition(nt.matrixWorld);const I=q.distanceTo(O),H=rt.projectionMatrix.elements,j=nt.projectionMatrix.elements,Q=H[14]/(H[10]-1),At=H[14]/(H[10]+1),gt=(H[9]+1)/H[5],Vt=(H[9]-1)/H[5],D=(H[8]-1)/H[0],le=(j[8]+1)/j[0],Ut=Q*D,Gt=Q*le,Pt=I/(-D+le),se=Pt*-D;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(se),$.translateZ(Pt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),H[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ct=Q+Pt,T=At+Pt,S=Ut-se,G=Gt+(I-se),tt=gt*At/T*Ct,st=Vt*At/T*Ct;$.projectionMatrix.makePerspective(S,G,tt,st,Ct,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,nt=$.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),y.near=R.near=A.near=rt,y.far=R.far=A.far=nt,(P!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,k=y.far),A.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,y.layers.mask=A.layers.mask|R.layers.mask;const I=$.parent,H=y.cameras;K(y,I);for(let j=0;j<H.length;j++)K(H[j],I);H.length===2?F(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),it($,y,I)};function it($,rt,nt){nt===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(nt.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=co*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let ct=null;function Rt($,rt){if(h=rt.getViewerPose(l||a),_=rt,h!==null){const nt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let I=!1;nt.length!==y.cameras.length&&(y.cameras.length=0,I=!0);for(let j=0;j<nt.length;j++){const Q=nt[j];let At=null;if(p!==null)At=p.getViewport(Q);else{const Vt=u.getViewSubImage(f,Q);At=Vt.viewport,j===0&&(t.setRenderTargetTextures(x,Vt.colorTexture,f.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(x))}let gt=b[j];gt===void 0&&(gt=new Ke,gt.layers.enable(j),gt.viewport=new fe,b[j]=gt),gt.matrix.fromArray(Q.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Q.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(At.x,At.y,At.width,At.height),j===0&&(y.matrix.copy(gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),I===!0&&y.cameras.push(gt)}const H=s.enabledFeatures;if(H&&H.includes("depth-sensing")){const j=u.getDepthInformation(nt[0]);j&&j.isValid&&j.texture&&g.init(t,j,s.renderState)}}for(let nt=0;nt<M.length;nt++){const I=v[nt],H=M[nt];I!==null&&H!==void 0&&H.update(I,rt,l||a)}ct&&ct($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),_=null}const Xt=new jl;Xt.setAnimationLoop(Rt),this.setAnimationLoop=function($){ct=$},this.dispose=function(){}}}const ii=new Ee,K0=new Yt;function J0(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Kl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,x,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,ii.copy(v),ii.x*=-1,ii.y*=-1,ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(ii)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function l(x,M){let v=s[x.id];v===void 0&&(_(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(x,C);const w=t.render.frame;r[x.id]!==w&&(f(x),r[x.id]=w)}function h(x){const M=u();x.__bindingPointIndex=M;const v=i.createBuffer(),C=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=s[x.id],v=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,A=v.length;w<A;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,y=R.length;b<y;b++){const P=R[b];if(p(P,w,b,C)===!0){const k=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let Z=0;Z<N.length;Z++){const q=N[Z],O=g(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,k+X,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,v,C){const w=x.value,A=M+"_"+v;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const R=C[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(x){const M=x.uniforms;let v=0;const C=16;for(let A=0,R=M.length;A<R;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,P=b.length;y<P;y++){const k=b[y],N=Array.isArray(k.value)?k.value:[k.value];for(let X=0,Z=N.length;X<Z;X++){const q=N[X],O=g(q),F=v%C,K=F%O.boundary,it=F+K;v+=K,it!==0&&C-it<O.storage&&(v+=C-it),k.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=O.storage}}}const w=v%C;return w>0&&(v+=C-w),x.__size=v,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class j0{constructor(t={}){const{canvas:e=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=qn,this.toneMappingExposure=1;const v=this;let C=!1,w=0,A=0,R=null,b=-1,y=null;const P=new fe,k=new fe;let N=null;const X=new Ft(0);let Z=0,q=e.width,O=e.height,F=1,K=null,it=null;const ct=new fe(0,0,q,O),Rt=new fe(0,0,q,O);let Xt=!1;const $=new To;let rt=!1,nt=!1;const I=new Yt,H=new Yt,j=new L,Q=new fe,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Vt(){return R===null?F:1}let D=n;function le(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_o}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),D===null){const B="webgl2";if(D=le(B,E),D===null)throw le(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ut,Gt,Pt,se,Ct,T,S,G,tt,st,J,Et,ut,mt,qt,at,_t,Lt,Dt,vt,Wt,kt,ne,U;function ht(){Ut=new im(D),Ut.init(),kt=new G0(D,Ut),Gt=new Zp(D,Ut,t,kt),Pt=new z0(D,Ut),Gt.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),se=new am(D),Ct=new E0,T=new H0(D,Ut,Pt,Ct,Gt,kt,se),S=new Qp(v),G=new nm(v),tt=new df(D),ne=new Kp(D,tt),st=new sm(D,tt,se,ne),J=new cm(D,st,tt,se),Dt=new om(D,Gt,T),at=new jp(Ct),Et=new b0(v,S,G,Ut,Gt,ne,at),ut=new J0(v,Ct),mt=new T0,qt=new I0(Ut),Lt=new Yp(v,S,G,Pt,J,p,c),_t=new O0(v,J,Gt),U=new Z0(D,se,Gt,Pt),vt=new Jp(D,Ut,se),Wt=new rm(D,Ut,se),se.programs=Et.programs,v.capabilities=Gt,v.extensions=Ut,v.properties=Ct,v.renderLists=mt,v.shadowMap=_t,v.state=Pt,v.info=se}ht();const Y=new Y0(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(E){E!==void 0&&(F=E,this.setSize(q,O,!1))},this.getSize=function(E){return E.set(q,O)},this.setSize=function(E,B,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,O=B,e.width=Math.floor(E*F),e.height=Math.floor(B*F),V===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(q*F,O*F).floor()},this.setDrawingBufferSize=function(E,B,V){q=E,O=B,F=V,e.width=Math.floor(E*V),e.height=Math.floor(B*V),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,B,V,W){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,B,V,W),Pt.viewport(P.copy(ct).multiplyScalar(F).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,B,V,W){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,B,V,W),Pt.scissor(k.copy(Rt).multiplyScalar(F).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(E){Pt.setScissorTest(Xt=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,B=!0,V=!0){let W=0;if(E){let z=!1;if(R!==null){const ot=R.texture.format;z=ot===Eo||ot===bo||ot===So}if(z){const ot=R.texture.type,dt=ot===Rn||ot===fi||ot===ws||ot===Yi||ot===Mo||ot===yo,Mt=Lt.getClearColor(),yt=Lt.getClearAlpha(),Nt=Mt.r,zt=Mt.g,St=Mt.b;dt?(_[0]=Nt,_[1]=zt,_[2]=St,_[3]=yt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Nt,g[1]=zt,g[2]=St,g[3]=yt,D.clearBufferiv(D.COLOR,0,g))}else W|=D.COLOR_BUFFER_BIT}B&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),mt.dispose(),qt.dispose(),Ct.dispose(),S.dispose(),G.dispose(),J.dispose(),ne.dispose(),U.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Yo),Y.removeEventListener("sessionend",Ko),Zn.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=se.autoReset,B=_t.enabled,V=_t.autoUpdate,W=_t.needsUpdate,z=_t.type;ht(),se.autoReset=E,_t.enabled=B,_t.autoUpdate=V,_t.needsUpdate=W,_t.type=z}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bt(E){const B=E.target;B.removeEventListener("dispose",Bt),he(B)}function he(E){Ae(E),Ct.remove(E)}function Ae(E){const B=Ct.get(E).programs;B!==void 0&&(B.forEach(function(V){Et.releaseProgram(V)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,V,W,z,ot){B===null&&(B=At);const dt=z.isMesh&&z.matrixWorld.determinant()<0,Mt=wh(E,B,V,W,z);Pt.setMaterial(W,dt);let yt=V.index,Nt=1;if(W.wireframe===!0){if(yt=st.getWireframeAttribute(V),yt===void 0)return;Nt=2}const zt=V.drawRange,St=V.attributes.position;let Kt=zt.start*Nt,ie=(zt.start+zt.count)*Nt;ot!==null&&(Kt=Math.max(Kt,ot.start*Nt),ie=Math.min(ie,(ot.start+ot.count)*Nt)),yt!==null?(Kt=Math.max(Kt,0),ie=Math.min(ie,yt.count)):St!=null&&(Kt=Math.max(Kt,0),ie=Math.min(ie,St.count));const re=ie-Kt;if(re<0||re===1/0)return;ne.setup(z,W,Mt,V,yt);let Fe,Jt=vt;if(yt!==null&&(Fe=tt.get(yt),Jt=Wt,Jt.setIndex(Fe)),z.isMesh)W.wireframe===!0?(Pt.setLineWidth(W.wireframeLinewidth*Vt()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(z.isLine){let wt=W.linewidth;wt===void 0&&(wt=1),Pt.setLineWidth(wt*Vt()),z.isLineSegments?Jt.setMode(D.LINES):z.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else z.isPoints?Jt.setMode(D.POINTS):z.isSprite&&Jt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Jt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))Jt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const wt=z._multiDrawStarts,_n=z._multiDrawCounts,Zt=z._multiDrawCount,tn=yt?tt.get(yt).bytesPerElement:1,mi=Ct.get(W).currentProgram.getUniforms();for(let ke=0;ke<Zt;ke++)mi.setValue(D,"_gl_DrawID",ke),Jt.render(wt[ke]/tn,_n[ke])}else if(z.isInstancedMesh)Jt.renderInstances(Kt,re,z.count);else if(V.isInstancedBufferGeometry){const wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_n=Math.min(V.instanceCount,wt);Jt.renderInstances(Kt,re,_n)}else Jt.render(Kt,re)};function jt(E,B,V){E.transparent===!0&&E.side===an&&E.forceSinglePass===!1?(E.side=Pe,E.needsUpdate=!0,Us(E,B,V),E.side=Yn,E.needsUpdate=!0,Us(E,B,V),E.side=an):Us(E,B,V)}this.compile=function(E,B,V=null){V===null&&(V=E),d=qt.get(V),d.init(B),M.push(d),V.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ot=z.material;if(ot)if(Array.isArray(ot))for(let dt=0;dt<ot.length;dt++){const Mt=ot[dt];jt(Mt,V,z),W.add(Mt)}else jt(ot,V,z),W.add(ot)}),M.pop(),d=null,W},this.compileAsync=function(E,B,V=null){const W=this.compile(E,B,V);return new Promise(z=>{function ot(){if(W.forEach(function(dt){Ct.get(dt).currentProgram.isReady()&&W.delete(dt)}),W.size===0){z(E);return}setTimeout(ot,10)}Ut.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Qe=null;function gn(E){Qe&&Qe(E)}function Yo(){Zn.stop()}function Ko(){Zn.start()}const Zn=new jl;Zn.setAnimationLoop(gn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(E){Qe=E,Y.setAnimationLoop(E),E===null?Zn.stop():Zn.start()},Y.addEventListener("sessionstart",Yo),Y.addEventListener("sessionend",Ko),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,R),d=qt.get(E,M.length),d.init(B),M.push(d),H.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(H),nt=this.localClippingEnabled,rt=at.init(this.clippingPlanes,nt),m=mt.get(E,x.length),m.init(),x.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&Ur(ot,B,-1/0,v.sortObjects)}Ur(E,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(K,it),gt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,gt&&Lt.addToRenderList(m,E),this.info.render.frame++,rt===!0&&at.beginShadows();const V=d.state.shadowsArray;_t.render(V,E,B),rt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,z=m.transmissive;if(d.setupLights(),B.isArrayCamera){const ot=B.cameras;if(z.length>0)for(let dt=0,Mt=ot.length;dt<Mt;dt++){const yt=ot[dt];Zo(W,z,E,yt)}gt&&Lt.render(E);for(let dt=0,Mt=ot.length;dt<Mt;dt++){const yt=ot[dt];Jo(m,E,yt,yt.viewport)}}else z.length>0&&Zo(W,z,E,B),gt&&Lt.render(E),Jo(m,E,B);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,B),ne.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],rt===!0&&at.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ur(E,B,V,W){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){W&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const dt=J.update(E),Mt=E.material;Mt.visible&&m.push(E,dt,Mt,V,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const dt=J.update(E),Mt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Q.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Q.copy(dt.boundingSphere.center)),Q.applyMatrix4(E.matrixWorld).applyMatrix4(H)),Array.isArray(Mt)){const yt=dt.groups;for(let Nt=0,zt=yt.length;Nt<zt;Nt++){const St=yt[Nt],Kt=Mt[St.materialIndex];Kt&&Kt.visible&&m.push(E,dt,Kt,V,Q.z,St)}}else Mt.visible&&m.push(E,dt,Mt,V,Q.z,null)}}const ot=E.children;for(let dt=0,Mt=ot.length;dt<Mt;dt++)Ur(ot[dt],B,V,W)}function Jo(E,B,V,W){const z=E.opaque,ot=E.transmissive,dt=E.transparent;d.setupLightsView(V),rt===!0&&at.setGlobalState(v.clippingPlanes,V),W&&Pt.viewport(P.copy(W)),z.length>0&&Ds(z,B,V),ot.length>0&&Ds(ot,B,V),dt.length>0&&Ds(dt,B,V),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Zo(E,B,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new di(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?Cs:Rn,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const ot=d.state.transmissionRenderTarget[W.id],dt=W.viewport||P;ot.setSize(dt.z,dt.w);const Mt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(X),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),gt&&Lt.render(V);const yt=v.toneMapping;v.toneMapping=qn;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),rt===!0&&at.setGlobalState(v.clippingPlanes,W),Ds(E,V,W),T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let St=0,Kt=B.length;St<Kt;St++){const ie=B[St],re=ie.object,Fe=ie.geometry,Jt=ie.material,wt=ie.group;if(Jt.side===an&&re.layers.test(W.layers)){const _n=Jt.side;Jt.side=Pe,Jt.needsUpdate=!0,jo(re,V,W,Fe,Jt,wt),Jt.side=_n,Jt.needsUpdate=!0,zt=!0}}zt===!0&&(T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot))}v.setRenderTarget(Mt),v.setClearColor(X,Z),Nt!==void 0&&(W.viewport=Nt),v.toneMapping=yt}function Ds(E,B,V){const W=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ot=E.length;z<ot;z++){const dt=E[z],Mt=dt.object,yt=dt.geometry,Nt=W===null?dt.material:W,zt=dt.group;Mt.layers.test(V.layers)&&jo(Mt,B,V,yt,Nt,zt)}}function jo(E,B,V,W,z,ot){E.onBeforeRender(v,B,V,W,z,ot),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,B,V,W,E,ot),z.transparent===!0&&z.side===an&&z.forceSinglePass===!1?(z.side=Pe,z.needsUpdate=!0,v.renderBufferDirect(V,B,W,z,E,ot),z.side=Yn,z.needsUpdate=!0,v.renderBufferDirect(V,B,W,z,E,ot),z.side=an):v.renderBufferDirect(V,B,W,z,E,ot),E.onAfterRender(v,B,V,W,z,ot)}function Us(E,B,V){B.isScene!==!0&&(B=At);const W=Ct.get(E),z=d.state.lights,ot=d.state.shadowsArray,dt=z.state.version,Mt=Et.getParameters(E,z.state,ot,B,V),yt=Et.getProgramCacheKey(Mt);let Nt=W.programs;W.environment=E.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(E.isMeshStandardMaterial?G:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Bt),Nt=new Map,W.programs=Nt);let zt=Nt.get(yt);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===dt)return tc(E,Mt),zt}else Mt.uniforms=Et.getUniforms(E),E.onBeforeCompile(Mt,v),zt=Et.acquireProgram(Mt,yt),Nt.set(yt,zt),W.uniforms=Mt.uniforms;const St=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=at.uniform),tc(E,Mt),W.needsLights=Ah(E),W.lightsStateVersion=dt,W.needsLights&&(St.ambientLightColor.value=z.state.ambient,St.lightProbe.value=z.state.probe,St.directionalLights.value=z.state.directional,St.directionalLightShadows.value=z.state.directionalShadow,St.spotLights.value=z.state.spot,St.spotLightShadows.value=z.state.spotShadow,St.rectAreaLights.value=z.state.rectArea,St.ltc_1.value=z.state.rectAreaLTC1,St.ltc_2.value=z.state.rectAreaLTC2,St.pointLights.value=z.state.point,St.pointLightShadows.value=z.state.pointShadow,St.hemisphereLights.value=z.state.hemi,St.directionalShadowMap.value=z.state.directionalShadowMap,St.directionalShadowMatrix.value=z.state.directionalShadowMatrix,St.spotShadowMap.value=z.state.spotShadowMap,St.spotLightMatrix.value=z.state.spotLightMatrix,St.spotLightMap.value=z.state.spotLightMap,St.pointShadowMap.value=z.state.pointShadowMap,St.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function Qo(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=dr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function tc(E,B){const V=Ct.get(E);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.batchingColor=B.batchingColor,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.instancingMorph=B.instancingMorph,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function wh(E,B,V,W,z){B.isScene!==!0&&(B=At),T.resetTextureUnits();const ot=B.fog,dt=W.isMeshStandardMaterial?B.environment:null,Mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Qi,yt=(W.isMeshStandardMaterial?G:S).get(W.envMap||dt),Nt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),St=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,ie=!!V.morphAttributes.color;let re=qn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(re=v.toneMapping);const Fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Jt=Fe!==void 0?Fe.length:0,wt=Ct.get(W),_n=d.state.lights;if(rt===!0&&(nt===!0||E!==y)){const qe=E===y&&W.id===b;at.setState(W,E,qe)}let Zt=!1;W.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==_n.state.version||wt.outputColorSpace!==Mt||z.isBatchedMesh&&wt.batching===!1||!z.isBatchedMesh&&wt.batching===!0||z.isBatchedMesh&&wt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&wt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&wt.instancing===!1||!z.isInstancedMesh&&wt.instancing===!0||z.isSkinnedMesh&&wt.skinning===!1||!z.isSkinnedMesh&&wt.skinning===!0||z.isInstancedMesh&&wt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&wt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&wt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&wt.instancingMorph===!1&&z.morphTexture!==null||wt.envMap!==yt||W.fog===!0&&wt.fog!==ot||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==at.numPlanes||wt.numIntersection!==at.numIntersection)||wt.vertexAlphas!==Nt||wt.vertexTangents!==zt||wt.morphTargets!==St||wt.morphNormals!==Kt||wt.morphColors!==ie||wt.toneMapping!==re||wt.morphTargetsCount!==Jt)&&(Zt=!0):(Zt=!0,wt.__version=W.version);let tn=wt.currentProgram;Zt===!0&&(tn=Us(W,B,z));let mi=!1,ke=!1,ss=!1;const ae=tn.getUniforms(),hn=wt.uniforms;if(Pt.useProgram(tn.program)&&(mi=!0,ke=!0,ss=!0),W.id!==b&&(b=W.id,ke=!0),mi||y!==E){Pt.buffers.depth.getReversed()?(I.copy(E.projectionMatrix),ku(I),Hu(I),ae.setValue(D,"projectionMatrix",I)):ae.setValue(D,"projectionMatrix",E.projectionMatrix),ae.setValue(D,"viewMatrix",E.matrixWorldInverse);const Ln=ae.map.cameraPosition;Ln!==void 0&&Ln.setValue(D,j.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&ae.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ae.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,ke=!0,ss=!0)}if(z.isSkinnedMesh){ae.setOptional(D,z,"bindMatrix"),ae.setOptional(D,z,"bindMatrixInverse");const qe=z.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ae.setValue(D,"boneTexture",qe.boneTexture,T))}z.isBatchedMesh&&(ae.setOptional(D,z,"batchingTexture"),ae.setValue(D,"batchingTexture",z._matricesTexture,T),ae.setOptional(D,z,"batchingIdTexture"),ae.setValue(D,"batchingIdTexture",z._indirectTexture,T),ae.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ae.setValue(D,"batchingColorTexture",z._colorsTexture,T));const rs=V.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&Dt.update(z,V,tn),(ke||wt.receiveShadow!==z.receiveShadow)&&(wt.receiveShadow=z.receiveShadow,ae.setValue(D,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(hn.envMap.value=yt,hn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(hn.envMapIntensity.value=B.environmentIntensity),ke&&(ae.setValue(D,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&Th(hn,ss),ot&&W.fog===!0&&ut.refreshFogUniforms(hn,ot),ut.refreshMaterialUniforms(hn,W,F,O,d.state.transmissionRenderTarget[E.id]),dr.upload(D,Qo(wt),hn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(dr.upload(D,Qo(wt),hn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ae.setValue(D,"center",z.center),ae.setValue(D,"modelViewMatrix",z.modelViewMatrix),ae.setValue(D,"normalMatrix",z.normalMatrix),ae.setValue(D,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const qe=W.uniformsGroups;for(let Ln=0,In=qe.length;Ln<In;Ln++){const ec=qe[Ln];U.update(ec,tn),U.bind(ec,tn)}}return tn}function Th(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Ah(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,B,V){Ct.get(E.texture).__webglTexture=B,Ct.get(E.depthTexture).__webglTexture=V;const W=Ct.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const V=Ct.get(E);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,V=0){R=E,w=B,A=V;let W=!0,z=null,ot=!1,dt=!1;if(E){const yt=Ct.get(E);if(yt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(yt.__hasExternalTextures)T.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Ct.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(dt=!0);const zt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[B])?z=zt[B][V]:z=zt[B],ot=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?z=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?z=zt[V]:z=zt,P.copy(E.viewport),k.copy(E.scissor),N=E.scissorTest}else P.copy(ct).multiplyScalar(F).floor(),k.copy(Rt).multiplyScalar(F).floor(),N=Xt;if(Pt.bindFramebuffer(D.FRAMEBUFFER,z)&&W&&Pt.drawBuffers(E,z),Pt.viewport(P),Pt.scissor(k),Pt.setScissorTest(N),ot){const yt=Ct.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,yt.__webglTexture,V)}else if(dt){const yt=Ct.get(E.texture),Nt=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.__webglTexture,V||0,Nt)}b=-1},this.readRenderTargetPixels=function(E,B,V,W,z,ot,dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Pt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const yt=E.texture,Nt=yt.format,zt=yt.type;if(!Gt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-W&&V>=0&&V<=E.height-z&&D.readPixels(B,V,W,z,kt.convert(Nt),kt.convert(zt),ot)}finally{const yt=R!==null?Ct.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(E,B,V,W,z,ot,dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const yt=E.texture,Nt=yt.format,zt=yt.type;if(!Gt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-W&&V>=0&&V<=E.height-z){Pt.bindFramebuffer(D.FRAMEBUFFER,Mt);const St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(B,V,W,z,kt.convert(Nt),kt.convert(zt),0);const Kt=R!==null?Ct.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,Kt);const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await zu(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot),D.deleteBuffer(St),D.deleteSync(ie),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,V=0){E.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),z=Math.floor(E.image.width*W),ot=Math.floor(E.image.height*W),dt=B!==null?B.x:0,Mt=B!==null?B.y:0;T.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,dt,Mt,z,ot),Pt.unbindTexture()},this.copyTextureToTexture=function(E,B,V=null,W=null,z=0){E.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],B=arguments[2],z=arguments[3]||0,V=null);let ot,dt,Mt,yt,Nt,zt,St,Kt,ie;const re=E.isCompressedTexture?E.mipmaps[z]:E.image;V!==null?(ot=V.max.x-V.min.x,dt=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,yt=V.min.x,Nt=V.min.y,zt=V.isBox3?V.min.z:0):(ot=re.width,dt=re.height,Mt=re.depth||1,yt=0,Nt=0,zt=0),W!==null?(St=W.x,Kt=W.y,ie=W.z):(St=0,Kt=0,ie=0);const Fe=kt.convert(B.format),Jt=kt.convert(B.type);let wt;B.isData3DTexture?(T.setTexture3D(B,0),wt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(T.setTexture2DArray(B,0),wt=D.TEXTURE_2D_ARRAY):(T.setTexture2D(B,0),wt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const _n=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),tn=D.getParameter(D.UNPACK_SKIP_PIXELS),mi=D.getParameter(D.UNPACK_SKIP_ROWS),ke=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,re.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zt);const ss=E.isDataArrayTexture||E.isData3DTexture,ae=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const hn=Ct.get(E),rs=Ct.get(B),qe=Ct.get(hn.__renderTarget),Ln=Ct.get(rs.__renderTarget);Pt.bindFramebuffer(D.READ_FRAMEBUFFER,qe.__webglFramebuffer),Pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let In=0;In<Mt;In++)ss&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,z,zt+In),E.isDepthTexture?(ae&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(B).__webglTexture,z,ie+In),D.blitFramebuffer(yt,Nt,ot,dt,St,Kt,ot,dt,D.DEPTH_BUFFER_BIT,D.NEAREST)):ae?D.copyTexSubImage3D(wt,z,St,Kt,ie+In,yt,Nt,ot,dt):D.copyTexSubImage2D(wt,z,St,Kt,ie+In,yt,Nt,ot,dt);Pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ae?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(wt,z,St,Kt,ie,ot,dt,Mt,Fe,Jt,re.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(wt,z,St,Kt,ie,ot,dt,Mt,Fe,re.data):D.texSubImage3D(wt,z,St,Kt,ie,ot,dt,Mt,Fe,Jt,re):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,St,Kt,ot,dt,Fe,Jt,re.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,St,Kt,re.width,re.height,Fe,re.data):D.texSubImage2D(D.TEXTURE_2D,z,St,Kt,ot,dt,Fe,Jt,re);D.pixelStorei(D.UNPACK_ROW_LENGTH,_n),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,mi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke),z===0&&B.generateMipmaps&&D.generateMipmap(wt),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,B,V=null,W=null,z=0){return E.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],B=arguments[3],z=arguments[4]||0),_s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,V,W,z)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,Pt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class _r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new _r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Q0 extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ee,this.environmentIntensity=1,this.environmentRotation=new Ee,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Co extends we{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ue,h=Ue,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Pi=new Yt,il=new Yt,nr=[],sl=new pi,tg=new Yt,fs=new oe,ds=new Ls;class xs extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),sl.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(sl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),ds.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pi),il.multiplyMatrices(n,Pi),fs.matrixWorld=il,fs.raycast(t,nr);for(let a=0,o=nr.length;a<o;a++){const c=nr[a];c.instanceId=r,c.object=this,e.push(c)}nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Co(new Float32Array(s*this.count),s,this.count,Tr,cn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class is extends we{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new xt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],a=[],o=new L,c=new Yt;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(be(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(be(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ro extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new xt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class eg extends Ro{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Po(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const ir=new L,fa=new Po,da=new Po,pa=new Po;class ng extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ir.subVectors(s[0],s[1]).add(s[0]),l=ir);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),fa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,_,g,m),da.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,_,g,m),pa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),da.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),pa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(fa.calc(c),da.calc(c),pa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function ig(i,t){const e=1-i;return e*e*t}function sg(i,t){return 2*(1-i)*i*t}function rg(i,t){return i*i*t}function Ms(i,t,e,n){return ig(i,t)+sg(i,e)+rg(i,n)}function ag(i,t){const e=1-i;return e*e*e*t}function og(i,t){const e=1-i;return 3*e*e*i*t}function cg(i,t){return 3*(1-i)*i*i*t}function lg(i,t){return i*i*i*t}function ys(i,t,e,n,s){return ag(i,t)+og(i,e)+cg(i,n)+lg(i,s)}class rh extends mn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ys(t,s.x,r.x,a.x,o.x),ys(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hg extends mn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ys(t,s.x,r.x,a.x,o.x),ys(t,s.y,r.y,a.y,o.y),ys(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ah extends mn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ug extends mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oh extends mn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ms(t,s.x,r.x,a.x),Ms(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fg extends mn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ms(t,s.x,r.x,a.x),Ms(t,s.y,r.y,a.y),Ms(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ch extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(rl(o,c.x,l.x,h.x,u.x),rl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var al=Object.freeze({__proto__:null,ArcCurve:eg,CatmullRomCurve3:ng,CubicBezierCurve:rh,CubicBezierCurve3:hg,EllipseCurve:Ro,LineCurve:ah,LineCurve3:ug,QuadraticBezierCurve:oh,QuadraticBezierCurve3:fg,SplineCurve:ch});class dg extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new al[s.type]().fromJSON(s))}return this}}class pg extends dg{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ah(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new oh(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new rh(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ch(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Ro(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Lo extends Ne{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new L,f=new xt,p=new L,_=new L,g=new L;let m=0,d=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),c.push(p.x,p.y,p.z),g.copy(_)}for(let x=0;x<=e;x++){const M=n+x*h*s,v=Math.sin(M),C=Math.cos(M);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*C,a.push(u.x,u.y,u.z),f.x=x/e,f.y=w/(t.length-1),o.push(f.x,f.y);const A=c[3*w+0]*v,R=c[3*w+1],b=c[3*w+0]*C;l.push(A,R,b)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const v=M+x*t.length,C=v,w=v+t.length,A=v+t.length+1,R=v+1;r.push(C,w,R),r.push(A,R,w)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("uv",new de(o,2)),this.setAttribute("normal",new de(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.points,t.segments,t.phiStart,t.phiLength)}}class Io extends Lo{constructor(t=1,e=1,n=4,s=8){const r=new pg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Io(t.radius,t.length,t.capSegments,t.radialSegments)}}class Rr extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let _=0;const g=[],m=n/2;let d=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(p,2));function x(){const v=new L,C=new L;let w=0;const A=(e-t)/n;for(let R=0;R<=r;R++){const b=[],y=R/r,P=y*(e-t)+t;for(let k=0;k<=s;k++){const N=k/s,X=N*c+o,Z=Math.sin(X),q=Math.cos(X);C.x=P*Z,C.y=-y*n+m,C.z=P*q,u.push(C.x,C.y,C.z),v.set(Z,A,q).normalize(),f.push(v.x,v.y,v.z),p.push(N,1-y),b.push(_++)}g.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){const y=g[b][R],P=g[b+1][R],k=g[b+1][R+1],N=g[b][R+1];(t>0||b!==0)&&(h.push(y,P,N),w+=3),(e>0||b!==r-1)&&(h.push(P,k,N),w+=3)}l.addGroup(d,w,0),d+=w}function M(v){const C=_,w=new xt,A=new L;let R=0;const b=v===!0?t:e,y=v===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),_++;const P=_;for(let k=0;k<=s;k++){const X=k/s*c+o,Z=Math.cos(X),q=Math.sin(X);A.x=b*q,A.y=m*y,A.z=b*Z,u.push(A.x,A.y,A.z),f.push(0,y,0),w.x=Z*.5+.5,w.y=q*.5*y+.5,p.push(w.x,w.y),_++}for(let k=0;k<s;k++){const N=C+k,X=P+k;v===!0?h.push(X,X+1,N):h.push(X+1,X,N),R+=3}l.addGroup(d,R,v===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Do extends Rr{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Do(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pr extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new L,v=new L,C=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],M),p(e[w+1],v),p(e[w+2],C),c(M,v,C,x)}function c(x,M,v,C){const w=C+1,A=[];for(let R=0;R<=w;R++){A[R]=[];const b=x.clone().lerp(v,R/w),y=M.clone().lerp(v,R/w),P=w-R;for(let k=0;k<=P;k++)k===0&&R===w?A[R][k]=b:A[R][k]=b.clone().lerp(y,k/P)}for(let R=0;R<w;R++)for(let b=0;b<2*(w-R)-1;b++){const y=Math.floor(b/2);b%2===0?(f(A[R][y+1]),f(A[R+1][y]),f(A[R][y])):(f(A[R][y+1]),f(A[R+1][y+1]),f(A[R+1][y]))}}function l(x){const M=new L;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const x=new L;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const v=m(x)/2/Math.PI+.5,C=d(x)/Math.PI+.5;a.push(v,1-C)}_(),u()}function u(){for(let x=0;x<a.length;x+=6){const M=a[x+0],v=a[x+2],C=a[x+4],w=Math.max(M,v,C),A=Math.min(M,v,C);w>.9&&A<.1&&(M<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function _(){const x=new L,M=new L,v=new L,C=new L,w=new xt,A=new xt,R=new xt;for(let b=0,y=0;b<r.length;b+=9,y+=6){x.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),C.copy(x).add(M).add(v).divideScalar(3);const P=m(C);g(w,y+0,x,P),g(A,y+2,M,P),g(R,y+4,v,P)}}function g(x,M,v,C){C<0&&x.x===1&&(a[M]=x.x-1),v.x===0&&v.z===0&&(a[M]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.vertices,t.indices,t.radius,t.details)}}class Uo extends Pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Uo(t.radius,t.detail)}}class Lr extends Pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lr(t.radius,t.detail)}}class Is extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new L,f=new L,p=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){const x=[],M=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const w=C/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+M*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(w+v,1-M),x.push(l++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){const M=h[d][x+1],v=h[d][x],C=h[d+1][x],w=h[d+1][x+1];(d!==0||a>0)&&p.push(M,v,w),(d!==n-1||c<Math.PI)&&p.push(v,C,w)}this.setIndex(p),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(g,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vr extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new L,u=new L,f=new L;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const g=_/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const g=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,d=(s+1)*(p-1)+_,x=(s+1)*p+_;a.push(g,m,x),a.push(m,d,x)}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class mg extends es{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ve extends es{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ee,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ol={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class gg{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const _g=new gg;class No{constructor(t){this.manager=t!==void 0?t:_g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}No.DEFAULT_MATERIAL_NAME="__DEFAULT";class vg extends No{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ol.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Ts("img");function c(){h(),ol.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class xg extends No{constructor(t){super(t)}load(t,e,n,s){const r=new we,a=new vg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class lh extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Mg extends lh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ma=new Yt,cl=new L,ll=new L;class yg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;cl.setFromMatrixPosition(t.matrixWorld),e.position.copy(cl),ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ll),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sg extends yg{constructor(){super(new Ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bg extends lh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Sg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);const ze="#221f2e";let zn=null;function Eg(){return zn||(zn=new Co(new Uint8Array([96,178,255]),3,1,Tr),zn.minFilter=zn.magFilter=Ue,zn.generateMipmaps=!1,zn.needsUpdate=!0,zn)}function ho(i="#ffffff",t={}){var n;const e=new mg({color:i,gradientMap:Eg(),vertexColors:!!t.vertexColors,transparent:!!t.transparent,opacity:(n=t.opacity)!=null?n:1});return t.flash&&wg(e),e}const hh=(i,t={})=>{var e,n;return new je({color:i,transparent:!!t.transparent,opacity:(e=t.opacity)!=null?e:1,depthWrite:(n=t.depthWrite)!=null?n:!0,vertexColors:!!t.vertexColors})};function Fo(i=.045,t=ze){const e=new je({color:t,side:Pe});return e.onBeforeCompile=n=>{n.uniforms.uOutline={value:i},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uOutline;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normalize(normal) * uOutline;`)},e.customProgramCacheKey=()=>`outline${i}`,e}function wg(i){i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aFlash;
varying float vFlash;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlash = aFlash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vFlash;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), vFlash);`)},i.customProgramCacheKey=()=>"flash"}function uh(i){const t=new Pn(new Float32Array(i.instanceMatrix.count),1);return t.setUsage(Rs),i.geometry.setAttribute("aFlash",t),t}function Tg(i,t="#bfe3ff",e="#8a7a6a"){i.add(new Mg(t,e,1.25));const n=new bg("#fff4e0",2.1);return n.position.set(-6,14,8),i.add(n),i.add(n.target),n}function hl(i,t,e,n,s,r,a="#ffffff",o){i.font=`${Math.round(s)}px 'Game Display', 'PingFang SC', sans-serif`;const c=i.measureText(t).width,l=o?s*.95:0,h=c+l+s*.7,u=s*1.22,f=e-h/2,p=n-u/2;Gi(i,f,p+s*.1,h,u,u*.36,ze),Gi(i,f,p,h,u,u*.36,r,ze,Math.max(1.5,s*.09)),o&&o(i,f+s*.35+l/2,n,s*.8),rn(i,t,f+s*.35+l+c/2,n,s,a)}function ga(i,t=1.5){return i<0||i>.45?1:1+Ye(.15+.22*Math.log2(Math.max(1,t)),.15,.7)*Hi.bump(i/.45)}function Ag(i,t,e,n,s,r="#3f7bff"){const a=si(t);i.font=`${Math.round(s)}px 'Game Display', 'PingFang SC', sans-serif`;const o=Math.max(s*1.5,i.measureText(a).width+s*.8),c=s*1.25,l=e-o/2,h=n-c;i.beginPath(),i.moveTo(e-s*.22,h+c-2),i.lineTo(e,h+c+s*.28),i.lineTo(e+s*.22,h+c-2),i.closePath(),i.fillStyle=r,i.fill(),i.lineWidth=Math.max(1.5,s*.09),i.strokeStyle=ze,i.stroke(),Gi(i,l,h,o,c,c*.4,r,ze,Math.max(1.5,s*.09)),rn(i,a,e,h+c/2,s,"#ffffff")}function ul(i,t,e,n){i.save(),i.translate(t,e),i.rotate(-.5);const s=n*.42,r=n*.95;i.beginPath(),i.moveTo(-s/2,r/2),i.lineTo(-s/2,-r*.05),i.quadraticCurveTo(-s/2,-r/2,0,-r/2),i.quadraticCurveTo(s/2,-r/2,s/2,-r*.05),i.lineTo(s/2,r/2),i.closePath(),i.fillStyle="#ffd34d",i.fill(),i.lineWidth=Math.max(1.5,n*.1),i.strokeStyle=ze,i.stroke(),i.restore()}const fl=new Map;function _a(i,t){const e=i+t;let n=fl.get(e);if(!n){const s=i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" ').replace(/currentColor/g,t);n=new Image,n.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`,fl.set(e,n)}return n}function uo(i,t,e,n,s){t.complete&&t.naturalWidth>0&&i.drawImage(t,e-s/2,n-s/2,s,s)}class Cg{constructor(){this.list=[]}add(t){this.list.length>160||this.list.push({vx:0,vy:0,t:0,color:"#ffffff",a:0,...t})}clear(){this.list.length=0}spark(t,e,n){this.add({kind:"flash",x:t,y:e,life:.09,size:n*.9,color:"#fff3c4"});for(let s=0;s<3;s++)this.add({kind:"spark",x:t,y:e,life:.16,size:n,a:Math.PI/2+(s-1)*.65+(Math.random()-.5)*.4,color:"#ffe08a"})}muzzle(t,e,n){this.add({kind:"flash",x:t,y:e,life:.07,size:n,color:"#ffd77a"})}puff(t,e,n,s=4,r="#e9e4dc"){for(let a=0;a<s;a++){const o=a/s*Math.PI*2+Math.random()*.8;this.add({kind:"puff",x:t+Math.cos(o)*n*.35,y:e+Math.sin(o)*n*.2,vx:Math.cos(o)*n*.9,vy:-n*(.5+Math.random()*.5),life:.65+Math.random()*.2,size:n*(.45+Math.random()*.25),color:r})}}ring(t,e,n,s,r=.55){this.add({kind:"ring",x:t,y:e,life:r,size:n,color:s,a:.32})}fireball(t,e,n){this.puff(t,e-n*.35,n*.85,4,"#7a6e66"),this.add({kind:"fire",x:t,y:e,life:.85,size:n}),this.add({kind:"fire",x:t-n*.4,y:e+n*.15,life:.7,size:n*.6}),this.add({kind:"fire",x:t+n*.45,y:e-n*.1,life:.75,size:n*.55});for(let s=0;s<9;s++){const r=-Math.PI/2+(Math.random()-.5)*2.6,a=n*(2.2+Math.random()*1.6);this.add({kind:"chunk",x:t,y:e,vx:Math.cos(r)*a,vy:Math.sin(r)*a,life:.9,size:n*(.07+Math.random()*.05),color:s%3?"#3a2a26":"#c9453a",a:Math.random()*6})}}step(t){for(const e of this.list)e.t+=t,e.x+=e.vx*t,e.y+=e.vy*t,e.kind==="chunk"?e.vy+=1400*t:e.kind==="puff"&&(e.vx*=.9,e.vy*=.94);this.list=this.list.filter(e=>e.t<e.life)}draw(t){for(const e of this.list){const n=e.t/e.life;switch(t.save(),e.kind){case"spark":{t.globalCompositeOperation="lighter",t.globalAlpha=1-n;const s=e.size*(.2+.9*n),r=s+e.size*.7*(1-n);t.strokeStyle=e.color,t.lineWidth=Math.max(1.5,e.size*.14),t.lineCap="round",t.beginPath(),t.moveTo(e.x+Math.cos(e.a)*s,e.y+Math.sin(e.a)*s),t.lineTo(e.x+Math.cos(e.a)*r,e.y+Math.sin(e.a)*r),t.stroke();break}case"flash":{t.globalCompositeOperation="lighter",t.globalAlpha=1-n;const s=e.size*(.6+.6*n),r=t.createRadialGradient(e.x,e.y,0,e.x,e.y,s);r.addColorStop(0,"rgba(255,255,240,1)"),r.addColorStop(.35,e.color),r.addColorStop(1,"rgba(255,160,40,0)"),t.fillStyle=r,t.beginPath(),t.arc(e.x,e.y,s,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,250,220,0.9)",t.beginPath();for(let a=0;a<8;a++){const o=a*Math.PI/4,c=a%2?s*.18:s*1.25;t.lineTo(e.x+Math.cos(o)*c,e.y+Math.sin(o)*c)}t.closePath(),t.fill();break}case"puff":{t.globalAlpha=.75*(1-n)*Math.min(1,e.t/.06);const s=e.size*(.7+.8*n),r=t.createRadialGradient(e.x-s*.25,e.y-s*.3,s*.1,e.x,e.y,s);r.addColorStop(0,e.color),r.addColorStop(.7,e.color),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.beginPath(),t.arc(e.x,e.y,s,0,Math.PI*2),t.fill();break}case"ring":{t.globalCompositeOperation="lighter",t.globalAlpha=(1-n)*.9,t.strokeStyle=e.color,t.lineWidth=e.size*.12*(1-n)+2,t.beginPath(),t.ellipse(e.x,e.y,e.size*(.55+.75*n),e.size*e.a*(.55+.75*n),0,0,Math.PI*2),t.stroke();break}case"fire":{t.globalCompositeOperation="lighter";const s=.35+.65*Math.min(1,n/.3);t.globalAlpha=n<.45?1:1-(n-.45)/.55;const r=e.size*s,a=t.createRadialGradient(e.x,e.y,0,e.x,e.y,r);a.addColorStop(0,"rgba(255,255,230,1)"),a.addColorStop(.25,"rgba(255,214,90,0.95)"),a.addColorStop(.6,"rgba(255,120,30,0.75)"),a.addColorStop(1,"rgba(200,40,10,0)"),t.fillStyle=a,t.beginPath(),t.arc(e.x,e.y,r,0,Math.PI*2),t.fill();break}case"chunk":{t.globalAlpha=1-Math.max(0,(n-.6)/.4),t.translate(e.x,e.y),t.rotate(e.a+e.t*9),t.fillStyle=e.color,t.fillRect(-e.size,-e.size*.7,e.size*2,e.size*1.4);break}}t.restore()}}}function dl(i,t,e,n,s=0){const r=n/100;i.save(),i.translate(t,e),i.rotate(s),i.scale(r,r),i.lineJoin="round",i.lineCap="round";const a="#1d1f26",o=()=>{i.beginPath(),i.moveTo(-9,40),i.lineTo(-9,8),i.arc(0,8,9,Math.PI,0),i.lineTo(9,34),i.arc(16,40,7.5,-Math.PI*.95,Math.PI*.2),i.arc(22,52,7.5,-Math.PI*.75,Math.PI*.3),i.arc(24,64,7.5,-Math.PI*.6,Math.PI*.45),i.quadraticCurveTo(24,82,14,88),i.lineTo(-14,88),i.quadraticCurveTo(-26,74,-27,60),i.quadraticCurveTo(-28,48,-18,47),i.quadraticCurveTo(-11,47,-9,54),i.closePath()};i.save(),i.translate(4,5),o(),i.fillStyle="rgba(0,0,0,0.28)",i.fill(),i.restore(),o(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=5,i.strokeStyle=a,i.stroke(),i.lineWidth=3,i.beginPath(),i.moveTo(9,36),i.quadraticCurveTo(13,44,17,46),i.moveTo(14,50),i.quadraticCurveTo(18,57,23,58),i.moveTo(-9,54),i.quadraticCurveTo(-4,62,2,64),i.stroke(),i.beginPath(),i.moveTo(-16,86),i.lineTo(16,86),i.lineTo(17,98),i.lineTo(-17,98),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=5,i.stroke(),i.restore()}function Rg(i,t,e,n,s){i.globalAlpha=s,i.font="21px 'Game Display', 'PingFang SC', sans-serif";const r=i.measureText(e).width,a=r+(t?62:36);Gi(i,180-a/2,n+3,a,42,21,"rgba(40,26,14,0.35)"),Gi(i,180-a/2,n,a,42,21,"rgba(255,244,214,0.9)","rgba(150,110,60,0.8)",2),t&&uo(i,t,180-a/2+26,n+21,26),rn(i,e,180-a/2+(t?44:18)+r/2,n+21,21,"#4a3320","rgba(255,244,214,0.9)"),i.globalAlpha=1}const ee=4;function xr(i,t){let e;switch(t.k){case"+":e=i+t.v;break;case"-":e=i-t.v;break;case"x":e=i*t.v;break;case"/":e=i/t.v;break}return Math.max(0,Math.floor(e+1e-9))}function fo(i){const t=Math.round(i.v*100)/100;return i.k==="+"?t<0?`−${-t}`:`+${t}`:i.k==="-"?`−${t}`:i.k==="x"?`×${t}`:`÷${t}`}function fh(i){return i.k==="+"?i.v>=0:i.k==="-"?i.v<=0:i.k==="x"?i.v>=1:i.v<=1}function dh(i){const t=2*ee/i;return Array.from({length:i},(e,n)=>[-ee+n*t,-ee+(n+1)*t])}function Pg(i,t){const e=Math.floor((i+ee)/(2*ee)*t);return e<0?0:e>=t?t-1:e}const pn=(i,t)=>-ee+(t+.5)*2*ee/i;function ph(i,t=20,e=22){let n=e-t;return i.map((s,r)=>{var c;const a=s.trim().split(/\s+/);let o=0;for(;a.length&&/^>-?\d+(\.\d+)?$/.test(a[0]);)o+=Number(a.shift().slice(1));return n+=t+o,{z:n,kind:(c=a[0])!=null?c:"",args:a.slice(1),i:r}})}function Lg(i,t,e){return t>i?Math.min(t,i+e):Math.max(t,i-e)}const Ss=(i,t=.6)=>Math.max(-ee+t,Math.min(ee-t,i));function An(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}let Li=null,po="",zi=1,pl=1;const ps=[];let sr=0;function Ig(){if(Li||po)return Li;try{const i=document.createElement("canvas"),t=i.getContext("webgl2",{antialias:!0,alpha:!1,powerPreference:"high-performance",depth:!0,stencil:!1});if(!t)throw new Error("no WebGL 2");Li=new j0({canvas:i,context:t,antialias:!0}),Li.outputColorSpace=ge,pl=typeof navigator<"u"&&navigator.webdriver?1:Math.min(window.devicePixelRatio||1,2),zi=pl}catch(i){po=i instanceof Error?i.message:String(i),Li=null}return Li}const Dg=()=>po;function Ug(i,t,e,n){const s=Ig();if(!s)return!1;Ng();const r=Math.max(1,innerWidth),a=Math.max(1,innerHeight),o=Math.round(r*zi),c=Math.round(a*zi),l=s.domElement;(l.width!==o||l.height!==c)&&s.setSize(o,c,!1);const h=r/a;return Math.abs(n.aspect-h)>1e-4&&(n.aspect=h,n.updateProjectionMatrix()),s.render(e,n),globalThis.__tris=s.info.render.triangles,i.drawImage(l,t.x,t.y,t.w,t.h),!0}function Ng(){const i=performance.now();if(sr&&i-sr<250&&ps.push(i-sr),sr=i,ps.length<120)return;const t=ps.reduce((e,n)=>e+n,0)/ps.length;ps.length=0,t>22&&zi>1&&(zi=Math.max(1,zi-.25))}const ms=new L;function Fg(i,t,e,n,s){ms.set(e,n,s).applyMatrix4(i.matrixWorldInverse);const r=-ms.z;return ms.applyMatrix4(i.projectionMatrix),{x:t.x+(ms.x+1)/2*t.w,y:t.y+(1-ms.y)/2*t.h,depth:r}}function Ii(i,t,e){return t.h/(2*Math.max(.1,e)*Math.tan(i.fov*Math.PI/360))}class Og{constructor(){this.tx=0,this.mpu=.03,this.x0=180,this.down=!1,this.startX=0,this.startTx=0,this.moved=!1,this.gain=1.25}laneAt(t){return Ss((t-this.x0)*this.mpu)}screenAt(t){return this.x0+t/this.mpu}press(t,e){this.down=!0,this.moved=!1,this.startX=t,this.startTx=Math.abs(this.tx-e)<.05?e:this.tx}drag(t){this.down&&(Math.abs(t-this.startX)>4&&(this.moved=!0),this.moved&&(this.tx=Ss(this.startTx+(t-this.startX)*this.mpu*this.gain)))}release(t){this.down&&(this.down=!1,this.moved||(this.tx=this.laneAt(t)))}get held(){return this.down}path(t,e,n){const s=this.screenAt(t),r=s+(Ss(e)-t)/(this.mpu*this.gain),a=4;return Array.from({length:a+1},(o,c)=>({x:s+(r-s)*c/a,y:n}))}}function Bg(i,t,e=4096){const n=i.reduce((h,u)=>h*Math.max(1,u),1),s=Math.min(n,e);let r=i.map(()=>0),a=null,o=0,c=null;const l=i.map(()=>0);for(let h=0;h<s;h++){let u=h;for(let p=i.length-1;p>=0;p--){const _=Math.max(1,i[p]);l[p]=u%_,u=Math.floor(u/_)}const f=t(l);f.won&&(o++,c=c===null?f.score:Math.min(c,f.score)),(!a||zg(f,a))&&(a=f,r=l.slice())}return{best:r,bestOutcome:a!=null?a:{won:!1,score:0,time:0},routes:s,winShare:s?o/s:0,worstWin:o>1?c:null,capped:n>e}}const zg=(i,t)=>i.won!==t.won?i.won:i.score!==t.score?i.score>t.score:i.time<t.time,mo=1/60,kg=6,Hg=9,Oo=1/8,va=30,Gg=34,Bo=1.6,zo=42,ko=3.5,ml=18,Vg=1.7,Wg=(i,t)=>i==="truck"?1.25:i==="crate"?1.15:Math.min(1.6,.6+.16*Math.log2(1+t/8)),Xg=i=>Math.min(3,2.1+.15*Math.log2(1+i/300)),qg=/^(f)?([+\-x×/÷])(\d+(?:\.\d+)?)(?:\^(\d+(?:\.\d+)?))?(?:<(\d+))?$/;function mh(i,t,e,n){if(i===".")return null;const s=qg.exec(i);if(!s)throw new Error(`bad gate "${i}"`);const r=s[4]?Number(s[4]):0,a=Number(s[3]),o=s[2],c=o==="+"?{k:"+",v:a}:o==="-"?r?{k:"+",v:-a}:{k:"-",v:a}:o==="/"||o==="÷"?{k:"/",v:a}:{k:"x",v:a};return{row:t,slot:e,z:n,op:c,fire:!!s[1],shoot:r,cap:s[5]?Number(s[5]):1/0,acc:0,bumpT:-9}}function $g(i){if(i<20)return Math.max(1,Math.round(i));const t=10**(Math.floor(Math.log10(i))-1);return Math.round(i/t)*t}const Mr=(i,t)=>Math.max(1,t.k==="+"?i+t.v:t.k==="-"?i-t.v:t.k==="x"?i*t.v:i/t.v),bs=/^(\d+(\.\d+)?|\.\d+)n$/,yr={c:"crate",z:"mob",t:"truck"};function xa(i,t=[]){let e=i.start,n=1;const s=[];return{rows:i.rows.map((a,o)=>{var _;const c=a.trim().split(/\s+/),l=c.filter(g=>g.startsWith(">")),h=c.filter(g=>!g.startsWith(">")),u=h[0];if(u==="g"){let g=-1,m=e,d=n,x=0;return h.slice(1).forEach((M,v)=>{const C=mh(M,0,v,0);if(!C)return;const w=C.shoot?{k:C.op.k,v:Math.min(C.cap,C.op.v+Math.floor(2*e*n/C.shoot))}:C.op,A=C.fire?e:xr(e,w),R=C.fire?Mr(n,w):n;A*R>g&&(g=A*R,m=A,d=R,x=v)}),e=m,n=d,s.push(x),a}const f=(_=t[o])!=null?_:e*n,p=g=>bs.test(g)?String($g(Number(g.slice(0,-1))*Math.max(1,f))):g;if(yr[u]){const g=h.slice(1).map(m=>m==="."?0:bs.test(m)?Number(m.slice(0,-1)):Number(m));return s.push(g.indexOf(Math.max(...g))),[...l,u,...h.slice(1).map(p)].join(" ")}return u==="B"?[...l,"B",...h.slice(1).map((g,m)=>m===0?p(g):m===1&&bs.test(g)?String(Math.max(1,Math.round(Number(g.slice(0,-1))*Math.max(1,f/Math.max(1,n))))):g)].join(" "):a}),route:s}}function gl(i){let t=xa(i);if(!i.rows.some(e=>e.split(/\s+/).some(n=>bs.test(n))))return pr(i,t.rows);for(let e=.9,n=0;n<5;n++,e*=.85){const s={...i,rows:i.rows.map(r=>r.split(/\s+/).map(a=>bs.test(a)?`${(Number(a.slice(0,-1))*e).toFixed(3)}n`:a).join(" "))};t=xa(s);for(let r=0;r<2;r++)t=xa(s,Yg(s,t.rows,t.route));if(Go(pr(s,t.rows)).won)break}return pr(i,t.rows)}function Ho(i){const t=Math.max(1,i.n*i.f),e=i.rows.find(c=>c.gates&&!c.passed);if(e&&e.gates&&(e.z-i.z)/Math.max(.1,i.speed)<.75){let c=-1/0,l=As(i);return e.gates.forEach((h,u)=>{const f=h?h.fire?i.n*Mr(i.f,h.op):xr(i.n,h.op)*i.f:i.n*i.f;f>c&&(c=f,l=u)}),pn(i.lanes,l)}let n=-1,s=1/0;for(const c of i.foes){if(c.dead)continue;const l=(i.phase==="run"?i.speed:0)+(c.kind==="truck"&&(c.awake||c.z-i.z<zo+6)?ko:c.kind==="mob"?Bo:0),h=(c.z-i.z)/Math.max(.1,l);if(h>6)continue;c.hp/t<h+.5&&h<s&&(s=h,n=c.lane)}if(n>=0)return pn(i.lanes,n);const r=i.rows.find(c=>c.gates&&!c.passed);if(!r||!r.gates)return i.x;let a=-1,o=As(i);return r.gates.forEach((c,l)=>{if(!c)return;const h=c.shoot?{k:c.op.k,v:Math.min(c.cap,c.op.v+Math.floor(2*i.n*i.f/c.shoot))}:c.op,u=c.fire?i.n*Mr(i.f,h):xr(i.n,h)*i.f;u>a&&(a=u,o=l)}),pn(i.lanes,o)}function Yg(i,t,e){var o;const n=pr(i,t);n.quiet=!0;const s=ph(t,(o=i.gap)!=null?o:18,30),r=t.map(()=>{}),a=s.map(c=>yr[c.kind]?c.z-22:c.kind==="B"?1/0:NaN);for(;n.phase!=="won"&&n.phase!=="lost"&&n.t<240;)n.tx=Ho(n),Dr(n),a.forEach((c,l)=>{r[l]!==void 0||Number.isNaN(c)||(n.z>=c||c===1/0&&n.phase==="boss")&&(r[l]=n.n*n.f)});return r}function pr(i,t){var a,o,c,l,h;const e=(a=i.lanes)!=null?a:2,n=ph(t,(o=i.gap)!=null?o:18,30),s={t:0,z:0,x:pn(e,e===3?1:0),tx:0,n:i.start,f:1,lanes:e,phase:"run",speed:(c=i.speed)!=null?c:kg,rows:[],foes:[],boss:null,end:0,fireT:Oo,why:"",ev:[],quiet:!1};s.tx=s.x;let r=0;for(const u of n){if(u.kind==="B"){const p=Number(u.args[0]);if(!(p>0))throw new Error(`row ${u.i}: bad boss health "${u.args[0]}"`);s.boss={z:u.z+8,x:0,hp:p,hp0:p,r:Xg(p),stomp:Number((l=u.args[1])!=null?l:0),every:Number((h=u.args[2])!=null?h:3),timer:0,dead:!1,awake:!1,hitT:-9},s.end=s.boss.z;continue}if(u.args.length!==e)throw new Error(`row ${u.i}: needs ${e} lanes, has ${u.args.length}`);const f={i:s.rows.length,z:u.z,k:e,gates:null,passed:!1,choice:-1};if(u.kind==="g")f.gates=u.args.map((p,_)=>mh(p,f.i,_,u.z));else if(yr[u.kind])u.args.forEach((p,_)=>{if(p===".")return;const g=Number(p);if(!(g>0))throw new Error(`row ${u.i}: bad health "${p}"`);const m=yr[u.kind];s.foes.push({id:r++,kind:m,row:f.i,lane:_,z:u.z,x:pn(e,_),hp:g,hp0:g,r:Wg(m,g),dead:!1,awake:!1,hitT:-9,crashed:!1})});else throw new Error(`row ${u.i}: unknown kind "${u.kind}"`);s.rows.push(f)}if(!s.boss)throw new Error("a level needs a boss row (B)");return s}const De=(i,t)=>{i.quiet||i.ev.push(t)},Ir=i=>i.phase==="won"||i.phase==="lost";function rr(i,t){Ir(i)||(i.n=0,i.phase="lost",i.why=t,De(i,{e:"end",won:!1}))}const As=i=>Pg(i.x,i.lanes);function Dr(i){var s;if(Ir(i))return;const t=mo;i.t+=t;const e=i.z,n=i.boss;i.phase==="run"&&(i.z+=i.speed*t,i.z>=n.z-ml&&(i.z=n.z-ml,i.phase="boss",n.awake=!0,n.timer=n.every,De(i,{e:"arena"}))),i.x=Ss(Lg(i.x,Ss(i.tx),Hg*t));for(const r of i.rows){if(r.passed||r.z>i.z||r.z<=e-1e-9)continue;r.passed=!0,r.choice=As(i);const a=(s=r.gates)==null?void 0:s[r.choice];if(a)if(a.fire){const o=i.f;i.f=Mr(i.f,a.op),De(i,{e:"gate",row:r.i,slot:r.choice,before:o,after:i.f,fire:!0})}else{const o=i.n;if(i.n=xr(i.n,a.op),De(i,{e:"gate",row:r.i,slot:r.choice,before:o,after:i.n,fire:!1}),i.n<=0)return rr(i,`进了 ${fo(a.op)} 门，人没了`)}}for(const r of i.foes){if(r.dead)continue;const a=r.z-i.z;if(!r.awake&&a<(r.kind==="truck"?zo:Gg)&&(r.awake=!0),r.awake&&r.kind!=="crate"&&(r.z-=(r.kind==="truck"?ko:Bo)*t),r.z-i.z<=.6+r.r*.5){const o=Math.ceil(r.hp-1e-9)*(r.kind==="truck"?2:1);if(r.dead=!0,r.crashed=!0,i.n=Math.max(0,i.n-o),De(i,{e:"crash",foe:r.id,lost:o}),i.n<=0)return rr(i,r.kind==="truck"?`${Math.ceil(r.hp)} 血的卡车撞进来，人没了`:r.kind==="crate"?`${Math.ceil(r.hp)} 血的箱子撞上桥头，人没了`:`${Math.ceil(r.hp)} 血的怪冲进来，人没了`)}}if(i.phase==="boss"&&!n.dead){if(n.z-=Vg*t,n.stomp>0&&(n.timer-=t,n.timer<=0)){n.timer+=n.every;const r=Math.min(i.n,n.stomp);if(i.n-=r,De(i,{e:"stomp",lost:r}),i.n<=0)return rr(i,`大怪一脚踩光了队伍，它还剩 ${Math.ceil(n.hp)} 血`)}if(n.z-i.z<=n.r*.8+.6){const r=Math.ceil(n.hp-1e-9);if(n.dead=!0,i.n>r){i.n-=r,De(i,{e:"bossEat",lost:r}),i.phase="won",De(i,{e:"end",won:!0});return}return rr(i,`大怪还剩 ${r} 血，比你的 ${i.n} 人多`)}}for(i.fireT-=t;i.fireT<=0;)if(i.fireT+=Oo,Kg(i),n.dead){i.phase="won",De(i,{e:"bossDown"}),De(i,{e:"end",won:!0});return}}function Kg(i){if(i.n<=0)return;let t=i.n*i.f*Oo;const e=As(i),n=[];for(const r of i.foes){if(r.dead||r.lane!==e)continue;const a=r.z-i.z;a>=-1&&a<=va&&n.push({z:r.z,foe:r})}for(const r of i.rows){if(r.passed||!r.gates)continue;const a=r.z-i.z;if(a<0||a>va)continue;const o=r.gates[e];o&&o.shoot>0&&o.op.v<o.cap&&n.push({z:r.z,gate:o})}const s=i.boss;!s.dead&&s.z-i.z<=va&&n.push({z:s.z,boss:!0}),n.sort((r,a)=>r.z-a.z);for(const r of n){if(t<=1e-9)break;if(r.gate){const a=r.gate,o=Number.isFinite(a.cap)?Math.max(0,(a.cap-a.op.v)*a.shoot-a.acc):1/0,c=Math.min(t,o);a.acc+=c,t-=c;const l=Math.floor(a.acc/a.shoot+1e-9);l>0&&(a.acc-=l*a.shoot,a.op={k:a.op.k,v:Math.min(a.cap,a.op.v+l)},a.bumpT=i.t,De(i,{e:"gateUp",row:a.row,slot:a.slot})),De(i,{e:"shot",kind:"gate",ref:a.row,slot:a.slot})}else if(r.foe){const a=r.foe,o=Math.min(t,a.hp);a.hp-=o,t-=o,a.hitT=i.t,De(i,{e:"shot",kind:"foe",ref:a.id,slot:e}),a.hp<=1e-6&&(a.hp=0,a.dead=!0,De(i,{e:"kill",foe:a.id}))}else{const a=Math.min(t,s.hp);s.hp-=a,t-=a,s.hitT=i.t,De(i,{e:"shot",kind:"boss",ref:0,slot:e}),s.hp<=1e-6&&(s.hp=0,s.dead=!0)}}}function gh(i,t){return t.gates?t.passed:!i.foes.some(e=>e.row===t.i&&!e.dead)}function Jg(i,t){if(t.gates)return(t.z-i.z)/Math.max(.1,i.speed);let e=1/0;for(const n of i.foes){if(n.row!==t.i||n.dead)continue;const s=(i.phase==="run"?i.speed:0)+(n.kind==="truck"&&(n.awake||n.z-i.z<zo+6)?ko:n.kind==="mob"?Bo:0);e=Math.min(e,(n.z-i.z)/Math.max(.1,s))}return e}function Zg(i){let t,e=1/0;for(const n of i.rows){if(gh(i,n))continue;const s=Jg(i,n);s<e&&(e=s,t=n)}return t}function _h(i,t){var n;const e=Zg(i);return e?pn(i.lanes,(n=t[e.i])!=null?n:0):i.x}function Sr(i){return{...i,rows:i.rows.map(t=>({...t,gates:t.gates?t.gates.map(e=>e?{...e,op:{...e.op}}:null):null})),foes:i.foes.map(t=>({...t})),boss:{...i.boss},ev:[]}}function jg(i,t,e=240){const n=Sr(i);for(n.quiet=!0;!Ir(n)&&n.t<e;)n.tx=_h(n,t),Dr(n);return{won:n.phase==="won",score:n.phase==="won"?n.n:0,time:n.t,s:n}}function Go(i,t=240){const e=Sr(i);for(e.quiet=!0;!Ir(e)&&e.t<t;)e.tx=Ho(e),Dr(e);return{won:e.phase==="won",score:e.phase==="won"?e.n:0,time:e.t,s:e}}function _l(i){const t=Qg(i),e=Go(i),n=t.bestOutcome;return e.won&&(!n.won||e.score>n.score)?{route:null,outcome:e,report:t}:{route:t.best,outcome:n,report:t}}function Qg(i){const t=i.rows.map(s=>gh(i,s)),e=i.rows.map((s,r)=>t[r]?1:s.k),n=i.rows.map((s,r)=>t[r]?Math.max(0,s.choice):-1);return Bg(e,s=>jg(i,s.map((r,a)=>n[a]>=0?n[a]:r)))}function t_(i,t){return i>=Math.ceil(t*.85)?3:i>=Math.ceil(t*.5)?2:1}const Es=1024,Vo=new WeakMap,vh=i=>Vo.get(i);async function kn(i,t){const[e,n]=await Promise.all([fetch(i).then(s=>{if(!s.ok)throw new Error(`${i}: ${s.status}`);return s.arrayBuffer()}),t?e_(t):Promise.resolve(null)]);return n_(e,n)}function e_(i){return new Promise((t,e)=>new xg().load(i,n=>{n.flipY=!1,n.colorSpace=ge,n.anisotropy=4,n.needsUpdate=!0,t(n)},void 0,e))}function n_(i,t){const e=new DataView(i);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="BAK1")throw new Error("not a baked model");const s=e.getUint32(4,!0),r=e.getUint32(8,!0),a=e.getUint32(12,!0),o=[16,20,24].map(v=>e.getFloat32(v,!0)),c=[28,32,36].map(v=>e.getFloat32(v,!0));let l=40;const h=new Uint16Array(i,l,a*s*3);l+=a*s*3*2;const u=new Int8Array(i,l,a*s*3);l+=a*s*3,l%2&&l++;const f=new Uint16Array(i,l,s*2);l+=s*4;const p=s>65535;p&&l%4&&(l+=4-l%4);const _=p?new Uint32Array(i,l,r).slice():new Uint16Array(i,l,r).slice(),g=(v,C)=>o[C%3]+h[v*s*3+C]/65535*c[C%3],m=new Ne,d=new Float32Array(s*3),x=new Float32Array(s*3);for(let v=0;v<s*3;v++)d[v]=g(0,v),x[v]=u[v]/127;m.setAttribute("position",new ce(d,3)),m.setAttribute("normal",new ce(x,3));const M=new Float32Array(s*2);for(let v=0;v<M.length;v++)M[v]=f[v]/65535;if(m.setAttribute("uv",new ce(M,2)),m.setIndex(new ce(_,1)),a>1){const v=s*a,C=Math.ceil(v/Es),w=new Float32Array(Es*C*4);for(let R=0;R<a;R++)for(let b=0;b<s;b++){const y=(R*s+b)*4,P=b*3;w[y]=g(R,P),w[y+1]=g(R,P+1),w[y+2]=g(R,P+2)}const A=new Co(w,Es,C,Je,cn);A.minFilter=A.magFilter=Ue,A.needsUpdate=!0,Vo.set(m,{texture:A,vertices:s,frames:a})}return m.computeBoundingSphere(),{geometry:m,texture:t,frames:a,size:new L(c[0],c[1],c[2])}}class Wo{constructor(t,e,n=Vo.get(t.geometry)){if(this.phase=new Pn(new Float32Array(t.instanceMatrix.count),1),this.phase.setUsage(Rs),t.geometry.setAttribute("aPhase",this.phase),!n||e<2)return;const s=t.material,r=s.onBeforeCompile.bind(s),a=s.customProgramCacheKey.bind(s);s.onBeforeCompile=(o,c)=>{r(o,c),o.uniforms.vatTex={value:n.texture},o.uniforms.vatV={value:n.vertices},o.uniforms.vatF={value:n.frames},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform highp sampler2D vatTex;
uniform int vatV;
uniform int vatF;
attribute float aPhase;
vec3 vatPos(int f) { int i = gl_VertexID + f * vatV; return texelFetch(vatTex, ivec2(i % ${Es}, i / ${Es}), 0).xyz; }`).replace("#include <begin_vertex>",`#include <begin_vertex>
{
  float ph = fract(aPhase) * float(vatF);
  int f0 = int(floor(ph));
  int f1 = f0 + 1 >= vatF ? 0 : f0 + 1;
  transformed = mix(vatPos(f0), vatPos(f1), ph - floor(ph));
}`)},s.customProgramCacheKey=()=>`${a()}|vat`,s.needsUpdate=!0}set(t,e){this.phase.setX(t,e-Math.floor(e))}done(){this.phase.needsUpdate=!0}}const ar=new Ft;function Se(i){let t=0,e=0;const n=i.map(M=>{const v=M.geo.index?M.geo:i_(M.geo);return t+=v.attributes.position.count,e+=v.index.count,v}),s=new Float32Array(t*3),r=new Float32Array(t*3),a=new Float32Array(t*3),o=t>65535?new Uint32Array(e):new Uint16Array(e);let c=0,l=0;const h=new Yt,u=new Ot,f=new Ze,p=new Ee,_=new L,g=new L,m=new L,d=new L;i.forEach((M,v)=>{var y,P,k;const C=n[v];g.set(...(y=M.at)!=null?y:[0,0,0]),p.set(...(P=M.rot)!=null?P:[0,0,0]),f.setFromEuler(p);const w=(k=M.scale)!=null?k:1;typeof w=="number"?_.set(w,w,w):_.set(...w),h.compose(g,f,_),u.getNormalMatrix(h),ar.set(M.color).convertSRGBToLinear();const A=C.attributes.position,R=C.attributes.normal;for(let N=0;N<A.count;N++){m.fromBufferAttribute(A,N).applyMatrix4(h),d.fromBufferAttribute(R,N).applyMatrix3(u).normalize();const X=(c+N)*3;s[X]=m.x,s[X+1]=m.y,s[X+2]=m.z,r[X]=d.x,r[X+1]=d.y,r[X+2]=d.z,a[X]=ar.r,a[X+1]=ar.g,a[X+2]=ar.b}const b=C.index;for(let N=0;N<b.count;N++)o[l+N]=b.getX(N)+c;c+=A.count,l+=b.count});const x=new Ne;return x.setAttribute("position",new ce(s,3)),x.setAttribute("normal",new ce(r,3)),x.setAttribute("color",new ce(a,3)),x.setIndex(new ce(o,1)),x.computeBoundingSphere(),x}function i_(i){const t=i.clone(),e=t.attributes.position.count,n=new Uint16Array(e);for(let s=0;s<e;s++)n[s]=s;return t.setIndex(new ce(n,1)),t}const Tt=(i=1,t=12,e=9)=>new Is(i,t,e),ue=(i,t,e=8)=>new Io(i,t,3,e),_e=(i,t,e,n=10)=>new Rr(i,t,e,n),pe=(i,t,e=8)=>new Do(i,t,e),bt=(i,t,e)=>new Be(i,t,e),s_=(i,t=12)=>new Is(i,t,6,0,Math.PI*2,0,Math.PI/2),r_=[{body:"#8ed05a",belly:"#d6f2a6",horn:"#fff3d6"},{body:"#a274ff",belly:"#dccbff",horn:"#fff3d6"},{body:"#ff6a55",belly:"#ffc2a8",horn:"#fff3d6"}];function a_(i){return Se([{geo:Tt(1,14,10),color:i.body,at:[0,.92,0],scale:[1,.9,.95]},{geo:Tt(.62,12,8),color:i.belly,at:[0,.74,.45],scale:[1,.9,.6]},{geo:Tt(.25,10,8),color:"#ffffff",at:[-.34,1.26,.72]},{geo:Tt(.25,10,8),color:"#ffffff",at:[.34,1.26,.72]},{geo:Tt(.12,8,6),color:ze,at:[-.31,1.24,.94]},{geo:Tt(.12,8,6),color:ze,at:[.31,1.24,.94]},{geo:Tt(.3,10,6),color:"#3b1730",at:[0,.8,.86],scale:[1.3,.55,.4]},{geo:pe(.15,.42,7),color:i.horn,at:[-.5,1.74,0],rot:[0,0,.35]},{geo:pe(.15,.42,7),color:i.horn,at:[.5,1.74,0],rot:[0,0,-.35]},{geo:Tt(.3,8,6),color:i.body,at:[-.48,.13,.2],scale:[1,.5,1.25]},{geo:Tt(.3,8,6),color:i.body,at:[.48,.13,.2],scale:[1,.5,1.25]}])}function o_(){const i="#c8355a",t="#ff9aa8",e="#f2b632";return Se([{geo:Tt(1,16,12),color:i,at:[0,.95,0],scale:[1,.95,.9]},{geo:Tt(.66,12,8),color:t,at:[0,.74,.4],scale:[1,.95,.62]},{geo:Tt(.2,10,8),color:"#ffffff",at:[-.32,1.3,.7]},{geo:Tt(.2,10,8),color:"#ffffff",at:[.32,1.3,.7]},{geo:Tt(.1,8,6),color:ze,at:[-.3,1.28,.88]},{geo:Tt(.1,8,6),color:ze,at:[.3,1.28,.88]},{geo:bt(.5,.08,.1),color:ze,at:[-.32,1.52,.72],rot:[0,0,-.35]},{geo:bt(.5,.08,.1),color:ze,at:[.32,1.52,.72],rot:[0,0,.35]},{geo:Tt(.34,10,6),color:"#3b1730",at:[0,.82,.8],scale:[1.5,.6,.4]},{geo:pe(.08,.2,5),color:"#ffffff",at:[-.2,.92,.9],rot:[Math.PI,0,0]},{geo:pe(.08,.2,5),color:"#ffffff",at:[.2,.92,.9],rot:[Math.PI,0,0]},{geo:_e(.42,.48,.3,10),color:e,at:[0,1.95,0]},{geo:pe(.1,.28,5),color:e,at:[-.3,2.22,0]},{geo:pe(.1,.28,5),color:e,at:[0,2.24,.2]},{geo:pe(.1,.28,5),color:e,at:[.3,2.22,0]},{geo:ue(.22,.7,8),color:i,at:[-1.05,.95,.25],rot:[.5,0,.6]},{geo:ue(.22,.7,8),color:i,at:[1.05,.95,.25],rot:[.5,0,-.6]},{geo:Tt(.32,8,6),color:i,at:[-.5,.14,.2],scale:[1,.5,1.3]},{geo:Tt(.32,8,6),color:i,at:[.5,.14,.2],scale:[1,.5,1.3]}])}const c_=()=>Se([{geo:ue(.12,.4,6),color:"#fff3a0",rot:[Math.PI/2,0,0]}]);function l_(i="#5fae4e",t="#7cc75a"){return Se([{geo:_e(.18,.26,1.4,7),color:"#8a5a3c",at:[0,.7,0]},{geo:Tt(1.05,10,8),color:i,at:[0,2,0]},{geo:Tt(.8,10,8),color:t,at:[.55,2.5,.25]},{geo:Tt(.72,10,8),color:i,at:[-.5,2.55,-.2]}])}const h_=()=>Se([{geo:new Lr(1,0),color:"#a8a3b5",scale:[1.2,.7,1]}]),u_=()=>Se([{geo:Tt(.7,9,7),color:"#6bb85a",at:[0,.5,0]},{geo:Tt(.55,9,7),color:"#86cf63",at:[.6,.4,.1]},{geo:Tt(.5,9,7),color:"#5fa64f",at:[-.55,.38,-.1]}]);let gs=null;function xh(){if(gs)return gs;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,31);return e.addColorStop(0,"rgba(20,16,40,0.55)"),e.addColorStop(.6,"rgba(20,16,40,0.32)"),e.addColorStop(1,"rgba(20,16,40,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),gs=new is(i),gs.colorSpace=ge,gs}function f_(i){var s;const t=document.createElement("canvas");t.width=128,t.height=256;const e=t.getContext("2d");e.fillStyle=i.road,e.fillRect(0,0,128,256),e.fillStyle=(s=i.dirt)!=null?s:"rgba(0,0,0,0.06)";for(const[r,a,o,c]of[[18,30,34,60],[80,140,30,70],[40,200,26,40]])e.beginPath(),e.ellipse(r,a,o/2,c/2,0,0,Math.PI*2),e.fill();e.fillStyle=i.edge,e.fillRect(0,0,8,256),e.fillRect(120,0,8,256),e.fillStyle=i.line,e.fillRect(61,20,6,90),e.fillRect(61,148,6,90);const n=new is(t);return n.colorSpace=ge,n.wrapS=Gn,n.wrapT=$i,n.anisotropy=4,n}const Xo={legL:1,legR:2,armL:3,armR:4};function br(i){var s;const t=Se(i),e=new Float32Array(t.attributes.position.count);let n=0;for(const r of i){const o=(r.geo.index,r.geo).attributes.position.count;e.fill((s=r.limb)!=null?s:0,n,n+o),n+=o}return t.setAttribute("aLimb",new ce(e,1)),t}function qo(i,t,e=0){var l,h,u;const n={uTime:{value:0},uPhase:{value:0},uAmount:{value:1}},s=((l=t.swing)!=null?l:.7).toFixed(3),r=((h=t.arms)!=null?h:.6).toFixed(3),a=((u=t.rate)!=null?u:9).toFixed(3),o=i.onBeforeCompile;i.onBeforeCompile=(f,p)=>{o==null||o.call(i,f,p),Object.assign(f.uniforms,n);const _=`
attribute float aLimb;
${t.instanced?"attribute vec2 aGait;":""}
uniform float uTime;
uniform float uPhase;
uniform float uAmount;
vec3 gaitRot(vec3 v, bool isPoint) {
  float ph = ${t.instanced?"aGait.x":"uPhase"} + uTime * ${a};
  float amt = ${t.instanced?"aGait.y":"uAmount"};
  float s = sin(ph) * ${s} * amt;
  float a = 0.0;
  float py = 0.0;
  if (aLimb > 0.5 && aLimb < 1.5) { a = s; py = ${t.hip.toFixed(3)}; }
  else if (aLimb > 1.5 && aLimb < 2.5) { a = -s; py = ${t.hip.toFixed(3)}; }
  else if (aLimb > 2.5 && aLimb < 3.5) { a = -s * ${r}; py = ${t.shoulder.toFixed(3)}; }
  else if (aLimb > 3.5) { a = s * ${r}; py = ${t.shoulder.toFixed(3)}; }
  if (a == 0.0) return v;
  vec3 p = isPoint ? v - vec3(0.0, py, 0.0) : v;
  float c = cos(a), n = sin(a);
  p = vec3(p.x, p.y * c - p.z * n, p.y * n + p.z * c);
  return isPoint ? p + vec3(0.0, py, 0.0) : p;
}
`;f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
${_}`),f.vertexShader.includes("#include <beginnormal_vertex>")&&(f.vertexShader=f.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = gaitRot(objectNormal, false);`)),f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = gaitRot(transformed, true);${e?`
transformed += normalize(gaitRot(normal, false)) * ${e.toFixed(4)};`:""}`)};const c=i.customProgramCacheKey.bind(i);return i.customProgramCacheKey=()=>`${c()}|gait${t.instanced?"I":"U"}${s}${r}${a}${t.hip}${t.shoulder}${e}`,{uniforms:n}}function d_(i,t=.04,e="#221f2e"){const n=new je({color:e,side:Pe});return{mat:n,gait:qo(n,i,t)}}function $o(i){const t=new Pn(new Float32Array(i.instanceMatrix.count*2),2);return t.setUsage(Rs),i.geometry.setAttribute("aGait",t),t}const Ma=5,p_=new Ft(1.6,.22,.18);function m_(i,t=7){const e=An(t),n=[],s=Math.ceil(i/Ma);for(let r=0;r<s;r++){const a=r===0?0:1.35*Math.sqrt(r+.3),o=r*2.39996+.6,c=Math.cos(o)*a*1.15,l=Math.sin(o)*a*.8+(r===0?0:.35);for(let h=0;h<Ma&&n.length<i;h++){if(h===0){n.push({x:c+(e()-.5)*.12,z:l+(e()-.5)*.12});continue}const u=h/(Ma-1)*Math.PI*2+e()*.6+r,f=.46+e()*.1;n.push({x:c+Math.cos(u)*f,z:l+Math.sin(u)*f*.85})}}return n}class g_{constructor(t,e,n,s=30,r){this.gait=null,this.gaitA=null,this.members=[],this.nextTint=0,this.m4=new Yt,this.q=new Ze,this.e=new Ee,this.p=new L,this.sc=new L,this.col=new Ft,this.hurt=0,this.player=null,this.rate=11,this.cap=s;const a=s+16;this.slots=m_(s),this.mesh=new xs(t,e,a),this.ink=n?new xs(t,n,a):null,this.shadows=new xs(new Xe(1,1).rotateX(-Math.PI/2),new je({map:xh(),transparent:!0,depthWrite:!1}),a),r&&(this.gait=qo(e,{...r,instanced:!0}),this.gaitA=$o(this.mesh));for(const o of[this.mesh,this.ink,this.shadows])o&&(o.count=0,o.frustumCulled=!1,o.instanceMatrix.setUsage(Rs));this.mesh.instanceColor=new Pn(new Float32Array(a*3).fill(1),3)}useBaked(t,e,n,s){this.mesh.geometry=t,this.mesh.material=e,this.ink&&(this.ink.visible=!1),this.gait=null,this.gaitA=null,this.rate=s,this.player=n>1?new Wo(this.mesh,n):null}add(t){return t.add(this.shadows,this.mesh),this.ink&&t.add(this.ink),this}figures(t){return t<=0?0:t<=10?Math.ceil(t):Math.min(this.cap,Math.round(10+6.5*Math.log2(t/10)))}get alive(){return this.members.filter(t=>t.dead<0).length}set(t,e,n,s){const r=this.figures(t);let a=this.members.filter(o=>o.dead<0);if(r>a.length){const o=new Set(a.map(c=>c.slot));for(let c=0;c<this.cap&&a.length<r;c++){if(o.has(c))continue;const l=An(c*31+5),h={slot:c,ph:l()*6.28,yaw:(l()-.5)*.3,s:.92+l()*.16,born:e+a.length*.012,dead:-1,wx:0,wz:0,tint:.9+this.nextTint++*37%10/70};this.members.push(h),a.push(h)}}else if(r<a.length){a.sort((o,c)=>c.slot-o.slot);for(const o of a.slice(0,a.length-r)){o.dead=e;const c=this.slots[o.slot];o.wx=n+c.x,o.wz=s+c.z}a=a.slice(a.length-r)}this.members=this.members.filter(o=>o.dead<0||e-o.dead<.6),this.members.length>this.mesh.instanceMatrix.count&&(this.members.length=this.mesh.instanceMatrix.count)}update(t,e,n,s=1,r=!0,a=null){var h,u,f,p;let o=0;const c=.9+.1*s;this.gait&&(this.gait.uniforms.uTime.value=t);const l=!!this.gait||!!this.player;for(const _ of this.members){const g=this.slots[_.slot];let m,d,x,M,v,C=0,w=_.yaw;if(_.dead<0){m=Math.max(-ee+.3,Math.min(ee-.3,e+g.x*c)),x=n+g.z*c;const R=t<_.born?0:Hi.outBack(Math.min(1,(t-_.born)/.28));M=_.s*s*R;const b=t*11+_.ph;d=r?Math.abs(Math.sin(b))*(l?.05:.1)*s:0,v=r&&!l?Math.sin(b)*.1:0,a!==null&&(w+=Math.atan2(a-m,18)*-.8)}else{const R=t-_.dead;m=_.wx,x=_.wz+R*3,d=2.6*R-6*R*R+.3,M=_.s*s*Math.max(0,1-R/.6),v=R*9,C=R*4}this.e.set(C,w,v),this.q.setFromEuler(this.e),this.p.set(m,Math.max(0,d),x),this.sc.set(M,M,M),this.m4.compose(this.p,this.q,this.sc),this.mesh.setMatrixAt(o,this.m4),(h=this.ink)==null||h.setMatrixAt(o,this.m4),(u=this.gaitA)==null||u.setXY(o,_.ph,_.dead<0&&r?1:0),(f=this.player)==null||f.set(o,_.dead<0&&r?(t*this.rate+_.ph)/(Math.PI*2):0),this.col.setScalar(_.tint),this.hurt>0&&this.col.lerp(p_,this.hurt),this.mesh.setColorAt(o,this.col),this.e.set(0,0,0),this.q.identity();const A=.75*M;this.p.set(m,.02,x),this.sc.set(A,1,A),this.m4.compose(this.p,this.q,this.sc),this.shadows.setMatrixAt(o,this.m4),o++}this.mesh.count=this.shadows.count=o,this.mesh.instanceMatrix.needsUpdate=!0,this.ink&&(this.ink.count=o,this.ink.instanceMatrix.needsUpdate=!0),this.gaitA&&(this.gaitA.needsUpdate=!0),(p=this.player)==null||p.done(),this.shadows.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}front(){return this.members.filter(t=>t.dead<0).map(t=>this.slots[t.slot])}dispose(){var t;this.shadows.geometry.dispose(),this.shadows.material.dispose(),this.mesh.removeFromParent(),(t=this.ink)==null||t.removeFromParent(),this.shadows.removeFromParent()}}const __={uniform:"#939d84",pants:"#5d6452",vest:"#646c57",pack:"#9c8f6c",skin:"#e0b08a",helmet:"#737c66",boots:"#2c2924",gun:"#1f1f24"},v_={uniform:"#a4ad72",pants:"#5f6b3d",vest:"#6f7b45",pack:"#b09a68",skin:"#e6b48c",helmet:"#86935a",boots:"#3a332b",gun:"#2c2c33"},vl={hip:.5,shoulder:.86,swing:.75,arms:0,rate:11};function x_(i=v_){const t=Xo,e=[{geo:ue(.08,.32,6),color:i.pants,at:[-.085,.3,0],limb:t.legL},{geo:ue(.08,.32,6),color:i.pants,at:[.085,.3,0],limb:t.legR},{geo:bt(.13,.08,.2),color:i.boots,at:[-.085,.04,-.03],limb:t.legL},{geo:bt(.13,.08,.2),color:i.boots,at:[.085,.04,-.03],limb:t.legR},{geo:ue(.15,.24,8),color:i.uniform,at:[0,.7,0]},{geo:bt(.32,.3,.24),color:i.vest,at:[0,.71,.01]},{geo:bt(.26,.3,.14),color:i.pack,at:[0,.76,.18]},{geo:_e(.06,.06,.28,8),color:i.vest,at:[0,.94,.2],rot:[0,0,Math.PI/2]},{geo:Tt(.11,10,8),color:i.skin,at:[0,.98,-.01]},{geo:s_(.125,10),color:i.helmet,at:[0,1,0],scale:[1,.85,1.05]},{geo:_e(.13,.13,.025,10),color:i.helmet,at:[0,1,0]},{geo:ue(.05,.22,6),color:i.uniform,at:[-.17,.74,-.08],rot:[1,0,.35]},{geo:ue(.05,.22,6),color:i.uniform,at:[.17,.74,-.08],rot:[1,0,-.35]},{geo:Tt(.045,6,5),color:i.skin,at:[-.07,.72,-.2]},{geo:Tt(.045,6,5),color:i.skin,at:[.09,.7,-.22]},{geo:bt(.05,.07,.62),color:i.gun,at:[.03,.74,-.22],rot:[.08,0,0]},{geo:bt(.04,.12,.08),color:i.gun,at:[.03,.66,-.16]}];return br(e)}const M_=[{skin:"#bccab9",shirt:"#8f9ca6",pants:"#5f6a73",dark:"#39424a"},{skin:"#c9b8dc",shirt:"#8370a6",pants:"#54486c",dark:"#2e2840"},{skin:"#ec8f7e",shirt:"#b2453f",pants:"#66302d",dark:"#3a1a18"}],y_={hip:.5,shoulder:.88,swing:.45,arms:.35,rate:5};function S_(i,t={}){const e=Xo;return t.fat?br([{geo:ue(.105,.3,6),color:i.pants,at:[-.13,.28,0],limb:e.legL},{geo:ue(.105,.3,6),color:i.pants,at:[.13,.28,0],limb:e.legR},{geo:bt(.16,.08,.22),color:i.dark,at:[-.13,.04,.03],limb:e.legL},{geo:bt(.16,.08,.22),color:i.dark,at:[.13,.04,.03],limb:e.legR},{geo:ue(.25,.2,8),color:i.shirt,at:[0,.74,.02],rot:[.18,0,0]},{geo:Tt(.25,12,9),color:i.shirt,at:[0,.64,.14],scale:[1,.92,.82]},{geo:bt(.13,.15,.05),color:i.skin,at:[.08,.6,.35],rot:[.1,0,.2]},{geo:bt(.36,.08,.3),color:i.pants,at:[0,.47,.06]},{geo:Tt(.14,10,8),color:i.skin,at:[0,1.06,.1]},{geo:Tt(.032,5,4),color:"#f2e9c9",at:[-.05,1.08,.23]},{geo:Tt(.032,5,4),color:"#f2e9c9",at:[.05,1.08,.23]},{geo:bt(.09,.03,.02),color:i.dark,at:[0,1,.235]},{geo:ue(.07,.32,6),color:i.skin,at:[-.3,.84,.2],rot:[1.3,0,.12],limb:e.armL},{geo:ue(.07,.32,6),color:i.skin,at:[.3,.84,.2],rot:[1.3,0,-.12],limb:e.armR},{geo:bt(.22,.14,.22),color:i.shirt,at:[-.29,.88,.03],limb:e.armL},{geo:bt(.22,.14,.22),color:i.shirt,at:[.29,.88,.03],limb:e.armR}]):br([{geo:ue(.08,.34,6),color:i.pants,at:[-.1,.29,0],limb:e.legL},{geo:ue(.08,.34,6),color:i.pants,at:[.1,.29,0],limb:e.legR},{geo:bt(.13,.07,.2),color:i.dark,at:[-.1,.035,.03],limb:e.legL},{geo:bt(.13,.07,.2),color:i.dark,at:[.1,.035,.03],limb:e.legR},{geo:ue(.17,.26,8),color:i.shirt,at:[0,.72,.04],rot:[.28,0,0]},{geo:bt(.1,.18,.06),color:i.skin,at:[.06,.66,.21],rot:[.28,0,0]},{geo:Tt(.13,10,8),color:i.skin,at:[0,1,.14]},{geo:Tt(.03,5,4),color:"#f2e9c9",at:[-.045,1.02,.26]},{geo:Tt(.03,5,4),color:"#f2e9c9",at:[.045,1.02,.26]},{geo:bt(.08,.025,.02),color:i.dark,at:[0,.95,.265]},{geo:ue(.055,.34,6),color:i.skin,at:[-.19,.82,.22],rot:[1.35,0,.1],limb:e.armL},{geo:ue(.055,.34,6),color:i.skin,at:[.19,.82,.22],rot:[1.35,0,-.1],limb:e.armR},{geo:bt(.2,.12,.2),color:i.shirt,at:[-.19,.86,.05],limb:e.armL},{geo:bt(.2,.12,.2),color:i.shirt,at:[.19,.86,.05],limb:e.armR}])}const xl={hip:.85,shoulder:1.7,swing:.35,arms:.5,rate:3.2},b_={skin:"#c9453a",dark:"#7a2420",belly:"#e0675a",cloth:"#3a2a24",horn:"#efe2c4",band:"#e0a832",eye:"#ffe066"},E_={skin:"#6f8a52",dark:"#3c4d2e",belly:"#93ab72",cloth:"#5a4430",horn:"#ddd4ba",band:"#8e96a3",eye:"#ffd23a"};function w_(i=b_,t={}){const e=Xo,n=[{geo:ue(.2,.5,8),color:i.skin,at:[-.28,.5,0],limb:e.legL},{geo:ue(.2,.5,8),color:i.skin,at:[.28,.5,0],limb:e.legR},{geo:bt(.36,.14,.44),color:i.dark,at:[-.28,.07,.06],limb:e.legL},{geo:bt(.36,.14,.44),color:i.dark,at:[.28,.07,.06],limb:e.legR},{geo:bt(.86,.36,.56),color:i.cloth,at:[0,.92,0]},{geo:Tt(.62,14,10),color:i.skin,at:[0,1.42,.02],scale:[1.05,.9,.82]},{geo:Tt(.36,12,8),color:i.belly,at:[0,1.35,.36],scale:[1,.8,.5]},{geo:Tt(.24,12,10),color:i.skin,at:[0,2,.22]},{geo:bt(.22,.05,.04),color:"#2a1412",at:[0,2.06,.43]},{geo:Tt(.045,6,5),color:i.eye,at:[-.08,2.03,.43]},{geo:Tt(.045,6,5),color:i.eye,at:[.08,2.03,.43]},{geo:bt(.2,.06,.05),color:"#f4ecd8",at:[0,1.93,.43]},{geo:pe(.07,.34,7),color:i.horn,at:[-.22,2.22,.18],rot:[.2,0,.55]},{geo:pe(.07,.34,7),color:i.horn,at:[.22,2.22,.18],rot:[.2,0,-.55]},{geo:Tt(.24,10,8),color:i.skin,at:[-.66,1.66,.02],limb:e.armL},{geo:Tt(.24,10,8),color:i.skin,at:[.66,1.66,.02],limb:e.armR},{geo:ue(.17,.62,8),color:i.skin,at:[-.76,1.2,.08],rot:[.15,0,.12],limb:e.armL},{geo:ue(.17,.62,8),color:i.skin,at:[.76,1.2,.08],rot:[.15,0,-.12],limb:e.armR},{geo:_e(.2,.2,.16,10),color:i.band,at:[-.8,.98,.12],limb:e.armL},{geo:_e(.2,.2,.16,10),color:i.band,at:[.8,.98,.12],limb:e.armR},{geo:Tt(.22,10,8),color:i.dark,at:[-.83,.74,.14],limb:e.armL},{geo:Tt(.22,10,8),color:i.dark,at:[.83,.74,.14],limb:e.armR}];if(t.muzzle&&n.push({geo:Tt(.15,10,8),color:i.belly,at:[0,1.93,.42],scale:[1.1,.75,.9]},{geo:Tt(.05,6,5),color:"#2a1412",at:[0,1.98,.55]},{geo:pe(.03,.1,5),color:"#f4ecd8",at:[-.07,1.84,.5],rot:[Math.PI,0,0]},{geo:pe(.03,.1,5),color:"#f4ecd8",at:[.07,1.84,.5],rot:[Math.PI,0,0]}),t.shards){const s=t.shards;n.push({geo:pe(.16,.6,5),color:s,at:[-.62,1.98,-.05],rot:[-.2,0,.35]},{geo:pe(.11,.42,5),color:s,at:[-.78,1.86,.08],rot:[.1,0,.8]},{geo:pe(.16,.6,5),color:s,at:[.62,1.98,-.05],rot:[-.2,0,-.35]},{geo:pe(.11,.42,5),color:s,at:[.78,1.86,.08],rot:[.1,0,-.8]},{geo:pe(.2,.78,5),color:s,at:[0,1.92,-.42],rot:[-.75,0,0]},{geo:pe(.14,.52,5),color:s,at:[-.26,1.72,-.5],rot:[-.9,0,.3]},{geo:pe(.14,.52,5),color:s,at:[.26,1.72,-.5],rot:[-.9,0,-.3]},{geo:bt(.06,.34,.03),color:i.eye,at:[-.08,1.45,.53],rot:[.3,0,.35]},{geo:bt(.05,.24,.03),color:i.eye,at:[.1,1.36,.52],rot:[.3,0,-.5]})}return t.mane&&n.push({geo:Tt(.5,12,8),color:i.dark,at:[0,1.82,-.1],scale:[1.3,.7,.9]},{geo:pe(.16,.42,6),color:i.dark,at:[-.34,1.98,-.26],rot:[-.6,0,.4]},{geo:pe(.16,.42,6),color:i.dark,at:[.34,1.98,-.26],rot:[-.6,0,-.4]},{geo:pe(.18,.5,6),color:i.dark,at:[0,2.02,-.36],rot:[-.8,0,0]}),br(n)}const ln=new Yt,Zi=new Ze,Ml=new Ee,yl=new L,ji=new L,Sl=new Ft,Mh=new L(0,1,0),ki=new L,Er=new L,bl=new Ft("#ffffff");function We(i,t,e){const n=new xs(i,t,e);return n.count=0,n.frustumCulled=!1,n.instanceMatrix.setUsage(Rs),n}function $n(i,t,e,n,s,r,a,o,c=0,l=0,h=0){return Ml.set(c,l,h),Zi.setFromEuler(Ml),yl.set(e,n,s),ji.set(r,a,o),ln.compose(yl,Zi,ji),i.setMatrixAt(t,ln),ln}const Jn=(...i)=>{for(const t of i)t.instanceMatrix.needsUpdate=!0};class T_{constructor(t=96){this.i=0,this.mesh=We(new Xe(1,1).rotateX(-Math.PI/2),new je({map:xh(),transparent:!0,depthWrite:!1}),t)}begin(){this.i=0}add(t,e,n){this.i>=this.mesh.instanceMatrix.count||n<=0||$n(this.mesh,this.i++,t,.03,e,n,1,n*.8)}end(){this.mesh.count=this.i,Jn(this.mesh)}}function yh(i,t){const e=[],n=i.smooth||i.facets?Le({flash:!0,flat:i.facets}):ho("#ffffff",{vertexColors:!0,flash:!0});i.gait&&e.push(qo(n,{...i.gait,instanced:t}));let s=null;if(i.outline!==!1)if(i.gait){const r=d_({...i.gait,instanced:t},.035);s=r.mat,e.push(r.gait)}else s=Fo(.05);return{mat:n,ink:s,gaits:e}}class A_{constructor(t=40,e={}){var s,r,a,o;this.meshes=[],this.ink=[],this.flash=[],this.gaitAttrs=[],this.gaits=[],this.dieT=new Map,this.players=[],this.rates=[],this.size=(s=e.size)!=null?s:1,this.deathFlash=(r=e.deathFlash)!=null?r:.8,this.hitFlash=(a=e.hitFlash)!=null?a:.5;const n=(o=e.geos)!=null?o:r_.map(c=>a_(c));for(const c of n){const{mat:l,ink:h,gaits:u}=yh(e,!0);this.gaits.push(...u);const f=We(c,l,t);this.flash.push(uh(f)),this.gaitAttrs.push(e.gait?$o(f):null),this.meshes.push(f),this.ink.push(h?We(c,h,t):null)}}get objects(){return[...this.ink.filter(t=>!!t),...this.meshes]}reset(){this.dieT.clear()}useBaked(t,e,n,s,r){const a=this.meshes[t];if(!a)return;const o=e.clone();o.setAttribute("aFlash",this.flash[t]),a.geometry=o,a.material=n;const c=this.ink[t];c&&(c.visible=!1),this.ink[t]=null,this.gaitAttrs[t]=null,this.players[t]=s>1?new Wo(a,s,vh(e)):null,this.rates[t]=r}sync(t,e,n){var a,o,c,l,h;const s=this.meshes.map(()=>0);for(const u of this.gaits)u.uniforms.uTime.value=e;const r=this.meshes.length;for(const u of t){let f=1;if(u.dead){const x=this.dieT.get(u.id);if(x===void 0){this.dieT.set(u.id,e);continue}if(f=1-(e-x)/.22,f<=0)continue}const p=Math.max(0,Math.min(r-1,u.tier)),_=s[p];if(_>=this.meshes[p].instanceMatrix.count)continue;s[p]++;const g=u.r*this.size*(u.dead?1+(1-f)*.4:1),m=!!this.gaitAttrs[p],d=$n(this.meshes[p],_,u.x,0,u.z,g*(1+u.hit*.08),g*f*(1-u.hit*.1),g,m?-u.hit*.25:0,m?Math.sin(e*1.3+u.id)*.12:Math.sin(e*2+u.id)*.15,m?0:Math.sin(e*7+u.id)*.06);(a=this.ink[p])==null||a.setMatrixAt(_,d),this.flash[p].setX(_,u.dead?this.deathFlash:u.hit*this.hitFlash),(o=this.gaitAttrs[p])==null||o.setXY(_,u.id*1.7,u.dead?0:1),u.dead||(l=this.players[p])==null||l.set(_,(e*((c=this.rates[p])!=null?c:5)+u.id*1.7)/(Math.PI*2)),n.add(u.x,u.z,u.r*(m?1.6:2.2)*f)}for(let u=0;u<r;u++){this.meshes[u].count=s[u];const f=this.ink[u];f&&(f.count=s[u],Jn(f)),this.flash[u].needsUpdate=!0;const p=this.gaitAttrs[u];p&&(p.needsUpdate=!0),(h=this.players[u])==null||h.done(),Jn(this.meshes[u])}}}class C_{constructor(t=o_(),e={}){var a,o;this.dieT=-1,this.player=null,this.rate=3,this.size=(a=e.size)!=null?a:1,this.deathFlash=(o=e.deathFlash)!=null?o:.9;const{mat:n,ink:s,gaits:r}=yh(e,!0);this.gaits=r,this.mesh=We(t,n,1),this.flash=uh(this.mesh),this.gaitA=e.gait?$o(this.mesh):null,this.ink=s?We(t,e.gait?s:Fo(.03),1):null}get objects(){return this.ink?[this.ink,this.mesh]:[this.mesh]}reset(){this.dieT=-1}useBaked(t,e,n,s){const r=t.clone();r.setAttribute("aFlash",this.flash),this.mesh.geometry=r,this.mesh.material=e,this.ink&&(this.ink.visible=!1),this.gaitA=null,this.player=n>1?new Wo(this.mesh,n,vh(t)):null,this.rate=s}sync(t,e,n){var r;let s=0;for(const a of this.gaits)a.uniforms.uTime.value=e;if(t){let a=1;if(t.dead&&(this.dieT<0&&(this.dieT=e),a=1-(e-this.dieT)/.6),a>0){const o=t.r*this.size,c=$n(this.mesh,0,t.x,t.stomp*.6,t.z,o*(1+t.hit*.05),o*a*(1-t.hit*.06),o,-t.stomp*.25,Math.sin(e*1.5)*.08,this.gaitA?0:Math.sin(e*5)*.04);(r=this.ink)==null||r.setMatrixAt(0,c),this.flash.setX(0,t.dead?this.deathFlash:t.hit*.22),this.flash.needsUpdate=!0,this.gaitA&&(this.gaitA.setXY(0,0,t.walking&&!t.dead?1:.15),this.gaitA.needsUpdate=!0),this.player&&(this.player.set(0,t.walking&&!t.dead?e*this.rate/(Math.PI*2):0),this.player.done()),n.add(t.x,t.z,t.r*2.4*a),s=1}}this.mesh.count=s,this.ink&&(this.ink.count=s,Jn(this.ink)),Jn(this.mesh)}}function Le(i={}){const t=i.map?new Ve({color:"#ffffff",map:i.map,flatShading:!!i.flat,...i.lift?{emissiveMap:i.map,emissive:new Ft(i.lift,i.lift,i.lift)}:{}}):new Ve({color:"#ffffff",vertexColors:!0,flatShading:!!i.flat});return i.flash&&(t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aFlash;
varying float vFlash;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlash = aFlash;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vFlash;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0, 0.95, 0.9), vFlash);`)},t.customProgramCacheKey=()=>"lflash"),t}class R_{constructor(t=40){this.height=1,this.depth=1,this.lift=.55;const e=new Be(1,1,1).toNonIndexed(),n=new Float32Array(e.attributes.position.count*3),s=e.attributes.normal;for(let f=0;f<s.count;f++){const p=s.getY(f)>.5?1.45:s.getY(f)<-.5?.5:Math.abs(s.getZ(f))>.5?.9:.75;n.fill(p,f*3,f*3+3)}e.setAttribute("color",new ce(n,3)),this.slabs=We(e,new je({color:"#ffffff",vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1}),t),this.slabs.instanceColor=new Pn(new Float32Array(t*3).fill(1),3),this.slabs.renderOrder=2;const r=new Be(1,.12,.12),a=new Ne,o=r.clone().translate(0,.5,-.5),c=r.clone().translate(0,-.5,.5),l=new Float32Array([...o.attributes.position.array,...c.attributes.position.array]),h=o.attributes.position.count,u=[...Array.from(o.index.array),...Array.from(c.index.array).map(f=>f+h)];a.setAttribute("position",new ce(l,3)),a.setIndex(u),this.edges=We(a,new je({color:"#ffffff",transparent:!0,opacity:.95,blending:Vi,depthWrite:!1}),t),this.edges.instanceColor=new Pn(new Float32Array(t*3).fill(1),3),this.edges.renderOrder=3}get objects(){return[this.slabs,this.edges]}sync(t){let e=0;const n=new Ft;for(const s of t){const r=s.passAge;if(r>.5)continue;const a=dh(s.k);s.gates.forEach((o,c)=>{var m;if(!o||e>=this.slabs.instanceMatrix.count)return;const[l,h]=a[c],u=r>=0&&s.choice===c,f=r<0?1:u?1+.4*Hi.outCubic(Math.min(1,r/.3)):1-Hi.inCubic(Math.min(1,r/.4)),p=(h-l-.16)*o.swell,_=this.height*f*o.swell,g=((m=s.y)!=null?m:0)+this.lift+this.height/2;$n(this.slabs,e,(l+h)/2,g,s.z,p,_,this.depth,0,0,0),this.edges.setMatrixAt(e,$n(this.edges,e,(l+h)/2,g,s.z,p,_,this.depth,0,0,0)),n.set(o.color),u&&n.lerp(bl,Math.max(0,.7-r)),this.slabs.setColorAt(e,n),n.set(o.color).lerp(bl,.3),this.edges.setColorAt(e,n),e++})}this.slabs.count=this.edges.count=e,Jn(this.slabs,this.edges),this.slabs.instanceColor&&(this.slabs.instanceColor.needsUpdate=!0),this.edges.instanceColor&&(this.edges.instanceColor.needsUpdate=!0)}}function P_(){const i=document.createElement("canvas");i.width=32,i.height=128;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"rgba(255,255,236,1)"),e.addColorStop(.18,"rgba(255,230,120,1)"),e.addColorStop(.55,"rgba(255,150,40,0.75)"),e.addColorStop(1,"rgba(255,90,20,0)"),t.fillStyle=e,t.fillRect(0,0,32,128),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,32,0);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,32,128);const s=new is(i);return s.colorSpace=ge,s}function L_(i=60){const t=new Xe(.5,3.2).rotateX(-Math.PI/2),e=new je({map:P_(),transparent:!0,blending:Vi,depthWrite:!1,side:an}),n=new N_(t,i,e);return n.across=1.6,n.along=1,n}function I_(){const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d");t.fillStyle="rgba(255,140,40,0.55)",t.fillRect(0,0,64,256);for(const[s,r,a]of[[30,34,.95],[100,26,.8],[160,38,1],[225,24,.75]])for(const o of[-256,0,256]){const c=t.createRadialGradient(32,s+o,0,32,s+o,r*1.6);c.addColorStop(0,`rgba(255,250,215,${a})`),c.addColorStop(.5,`rgba(255,205,90,${a*.7})`),c.addColorStop(1,"rgba(255,140,40,0)"),t.fillStyle=c,t.fillRect(0,s+o-r*1.6,64,r*3.2)}t.lineJoin="round";for(const[s,r,a]of[[26,7,3],[39,6,2.4]]){t.beginPath(),t.moveTo(s,0);for(let o=16,c=0;o<256;o+=16,c++)t.lineTo(s+(c%2?-r:r)*(.6+.4*Math.sin(o*.11+s)),o);t.lineTo(s,256),t.strokeStyle="rgba(255,236,150,0.55)",t.lineWidth=a*2.6,t.stroke(),t.strokeStyle="rgba(255,255,236,0.95)",t.lineWidth=a,t.stroke()}t.globalCompositeOperation="destination-in";const e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(.3,"rgba(0,0,0,0.85)"),e.addColorStop(.5,"rgba(0,0,0,1)"),e.addColorStop(.7,"rgba(0,0,0,0.85)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,256);const n=new is(i);return n.colorSpace=ge,n.wrapT=$i,n.repeat.set(1,4),n}class D_{constructor(t=4){this.i=0,this.tex=I_();const e=new Xe(1,1).rotateX(-Math.PI/2);this.mesh=We(e,new je({map:this.tex,transparent:!0,blending:Vi,depthWrite:!1,side:an}),t),this.mesh.instanceColor=new Pn(new Float32Array(t*3).fill(1),3),this.mesh.renderOrder=3}get objects(){return[this.mesh]}begin(t){this.i=0,this.tex.offset.y=t*2.2}set(t,e,n,s,r,a,o,c){this.i>=this.mesh.instanceMatrix.count||c<=0||(ki.set((t+s)/2,(e+r)/2,(n+a)/2),Er.set(s,r,a),ln.lookAt(ki,Er,Mh),Zi.setFromRotationMatrix(ln),ji.set(o,1,Math.hypot(s-t,r-e,a-n)),ln.compose(ki,Zi,ji),this.mesh.setMatrixAt(this.i,ln),Sl.setScalar(c),this.mesh.setColorAt(this.i,Sl),this.i++)}end(){this.mesh.count=this.i,Jn(this.mesh),this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}function U_(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,230,1)"),e.addColorStop(.35,"rgba(255,200,90,0.7)"),e.addColorStop(1,"rgba(255,120,30,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new is(i);return n.colorSpace=ge,n}class N_{constructor(t=c_(),e=40,n=hh("#ffffff",{vertexColors:!0})){this.list=[],this.across=2.1,this.along=1.7,this.mesh=We(t,n,e)}get objects(){return[this.mesh]}clear(){this.list=[]}get full(){return this.list.length>=this.mesh.instanceMatrix.count}fire(t,e,n,s,r,a,o,c=1){if(this.full)return;const l=Math.hypot(s-t,a-n);this.list.push({x0:t,y0:e,z0:n,x1:s,y1:r,z1:a,t0:o,dur:Math.min(.24,.05+l/110),s:c})}sync(t){let e=0;this.list=this.list.filter(n=>t<n.t0+n.dur);for(const n of this.list){if(t<n.t0)continue;const s=(t-n.t0)/n.dur;ki.set(n.x0+(n.x1-n.x0)*s,n.y0+(n.y1-n.y0)*s,n.z0+(n.z1-n.z0)*s),Er.set(n.x1,n.y1,n.z1),ln.lookAt(ki,Er,Mh),Zi.setFromRotationMatrix(ln),ji.set(this.across*n.s,this.across*n.s,this.along*n.s),ln.compose(ki,Zi,ji),this.mesh.setMatrixAt(e++,ln)}this.mesh.count=e,Jn(this.mesh)}}function En(i,t,e,n){const s=[];for(const r of e?[e,t]:[t]){const a=new xs(i,r,Math.max(1,n.length));n.forEach((o,c)=>a.setMatrixAt(c,o)),a.count=n.length,a.computeBoundingSphere(),s.push(a)}return s}const El=Math.PI/180,wl=50;class F_{constructor(t,e,n=1,s=!1){var N,X,Z,q;this.scene=new Q0,this.camera=new Ke(wl,1,.5,260),this.disposables=[],this.camPos=new L,this.camLook=new L,this.placed=!1,this.squadLow=.58,this.fit=10,this.elev=36,this.side=0,this.lift=0,this.look=new L;const r=this.scene;if(r.background=new Ft(t.fog?t.fog[0]:t.sky),r.fog=t.fog?new _r(t.fog[0],t.fog[1],t.fog[2]):new _r(t.sky,75,160),this.elev=(N=t.elev)!=null?N:36,this.camera.fov=(X=t.fov)!=null?X:wl,this.camera.updateProjectionMatrix(),this.sun=Tg(r,t.sky,(Z=t.bounce)!=null?Z:"#8a7a6a"),s)return;const a=e+140,o=new Xe(260,a+120).rotateX(-Math.PI/2),c=new Ve({color:t.ground}),l=new oe(o,c);l.position.set(0,-.05,-a/2+40),r.add(l);const h=t.roadTex?t.roadTex():f_(t.road);h.repeat.set(1,a/16);const u=new Xe((q=t.roadWidth)!=null?q:ee*2+.9,a).rotateX(-Math.PI/2),f=new Ve({map:h}),p=new oe(u,f);p.position.set(0,0,-a/2+40),r.add(p);const _=new Be(.4,.22,a),g=ho(t.curb);for(const O of t.curbs===!1?[]:[-1,1]){const F=new oe(_,g);F.position.set(O*(ee+.65),.11,-a/2+40),r.add(F)}if(this.disposables.push(o,c,h,u,f,_,g),t.props==="debris"){this.debris(t,a,n);return}if(t.props==="canyon"){this.canyon(t,a,n);return}const m=An(n*977+13),d=[],x=[],M=[],v=new Yt,C=new Ze,w=new Ee,A=(O,F,K,it)=>{w.set(0,m()*6.28,0),C.setFromEuler(w),O.push(v.clone().compose(new L(F,0,K),C,new L(it,it,it)))};for(let O=20;O>-a+30;O-=9+m()*12){const F=m()<.5?-1:1,K=F*(ee+2.4+m()*4),it=m();if(it<.55){const ct=1+Math.floor(m()*3);for(let Rt=0;Rt<ct;Rt++)A(d,K+F*Rt*1.9+(m()-.5),O+(m()-.5)*3,1+m()*.6)}else it<.8?A(x,K,O,1+m()*.5):A(M,K+F,O,.6+m()*.6);m()<.35&&A(d,-F*(ee+6+m()*6),O-4,1.2+m()*.5)}const R=Fo(.06),b=l_(t.leaf[0],t.leaf[1]),y=u_(),P=h_(),k=ho("#ffffff",{vertexColors:!0});r.add(...En(b,k,R,d),...En(y,k,R,x),...En(P,k,R,M)),this.disposables.push(R,b,y,P,k)}debris(t,e,n){var m,d;const s=An(n*577+7),r=((m=t.roadWidth)!=null?m:ee*2+.9)/2,a=new Ve({color:"#ffffff",vertexColors:!0}),o=Se([{geo:bt(.55,.28,1),color:"#a39a8e",at:[0,.14,0]},{geo:bt(.5,.04,1),color:"#bfb7aa",at:[0,.29,0]}]),c=new Yt,l=new Ze,h=new Ee,u=[-1,1].map(x=>c.clone().compose(new L(x*(r+.2),0,-e/2+40),l.identity().clone(),new L(1,1,e))),f=[Se([0,1,2].map(x=>({geo:new vr(.42,.17,6,12),color:x===1?"#3d3836":"#34302f",at:[x%2*.06,.17+x*.33,x%2*.05],rot:[Math.PI/2,0,0]})).concat([{geo:new vr(.42,.17,6,12),color:"#3a3533",at:[.95,.45,.2],rot:[.3,.2,1.2]}])),Se([{geo:_e(.34,.34,.95,12),color:"#a9583a",at:[0,.48,0]},{geo:_e(.36,.36,.07,12),color:"#7d3c26",at:[0,.3,0]},{geo:_e(.36,.36,.07,12),color:"#7d3c26",at:[0,.68,0]},{geo:_e(.34,.34,.95,12),color:"#4f7598",at:[.72,.48,.25]},{geo:_e(.36,.36,.07,12),color:"#3a5a78",at:[.72,.68,.25]},{geo:_e(.34,.34,.95,12),color:"#9a5136",at:[.3,.34,-.9],rot:[0,0,Math.PI/2]}]),Se([...[-.95,0,.95].map(x=>({geo:Tt(1,10,7),color:x===0?"#c9b18a":"#bea57e",at:[x,.22,0],scale:[.52,.24,.34]})),...[-.48,.48].map(x=>({geo:Tt(1,10,7),color:"#d2bb94",at:[x,.62,.02],scale:[.5,.22,.32]}))]),Se([{geo:bt(.16,1.2,.16),color:"#7c5b3c",at:[-1,.6,0]},{geo:bt(.16,.9,.16),color:"#73553a",at:[1,.45,0],rot:[0,0,-.15]},{geo:bt(2.3,.2,.07),color:"#8d6a47",at:[0,.82,.08],rot:[0,0,.06]},{geo:bt(2.1,.2,.07),color:"#7f6040",at:[.2,.08,.5],rot:[Math.PI/2,.4,0]}]),Se([{geo:bt(1.9,.62,4.1),color:"#738a83",at:[0,.6,0]},{geo:bt(1.62,.62,2),color:"#6a7f78",at:[0,1.2,-.25]},{geo:bt(1.66,.42,1.9),color:"#2e3236",at:[0,1.22,-.25]},{geo:bt(1.2,.08,1.3),color:"#9a5a3a",at:[.2,.93,1.3]},...[[-.92,1.3],[.92,1.3],[-.92,-1.35],[.92,-1.35]].map(([x,M])=>({geo:_e(.36,.36,.26,10),color:"#2d2a29",at:[x,.3,M],rot:[0,0,Math.PI/2]}))]),Se([{geo:bt(1.7,.85,.7),color:"#aaa49a",at:[0,.42,0]},{geo:bt(1.5,.08,.5),color:"#c4beb4",at:[0,.88,0]},{geo:bt(1.2,.7,.6),color:"#a29c92",at:[1.1,.35,.9],rot:[0,.7,0]}])],p=f.map(()=>[]),_=(x,M,v,C,w=1)=>{h.set(0,C,0),p[x].push(c.clone().compose(new L(M,0,v),l.setFromEuler(h).clone(),new L(w,w,w)))};let g=s()<.5?-1:1;for(let x=6;x>-e+30;x-=9+s()*9){s()<.7&&(g=-g);const M=g*(r+1+s()*1.4),v=Math.floor(s()*f.length);if(v===4?_(4,M+g*.9,x,(s()-.5)*1.1+(s()<.5?0:Math.PI)):_(v,M,x,s()*6.28,.95+s()*.3),s()<.45){const C=(v+1+Math.floor(s()*3))%f.length;C!==4&&_(C,M+g*(1.6+s()),x-1.5-s()*1.5,s()*6.28,.9+s()*.3)}}if(this.scene.add(...En(o,a,null,u)),this.disposables.push(a,o,...f),(d=t.junk)!=null&&d.length){const x=t.junk,M=x.map(()=>[]),v=An(n*811+3);let C=v()<.5?-1:1;for(let w=6;w>-e+30;w-=9+v()*9){v()<.7&&(C=-C);const A=Math.floor(v()*x.length),R=C*(r+(x[A].big?2.2:1.3)+v()*1.2);h.set(0,x[A].big?(v()-.5)*1.1+(v()<.5?0:Math.PI):v()*6.28,0);const b=.9+v()*.25;M[A].push(c.clone().compose(new L(R,0,w),l.setFromEuler(h).clone(),new L(b,b,b)))}x.forEach((w,A)=>{M[A].length&&this.scene.add(...En(w.geometry,w.material,null,M[A]))});return}f.forEach((x,M)=>{p[M].length&&this.scene.add(...En(x,a,null,p[M]))})}canyon(t,e,n){var m,d,x;const s=An(n*331+17);if((m=t.junk)!=null&&m.length){const M=new Yt,v=new Ze,C=new Ee,w=((d=t.roadWidth)!=null?d:ee*2+.9)/2,A=t.junk,R=A.map(()=>[]);for(const b of[-1,1])for(let y=12-s()*5;y>-e+20;y-=4.5+s()*4){const P=Math.floor(s()*A.length),k=b*(w+(A[P].big?1.6:.7)+s()*1.2);C.set(0,s()*6.28,0);const N=.85+s()*.45;R[P].push(M.clone().compose(new L(k,0,y),v.setFromEuler(C).clone(),new L(N,N,N)))}A.forEach((b,y)=>{R[y].length&&this.scene.add(...En(b.geometry,b.material,null,R[y]))});return}const r=[],a=[],o=new Yt,c=new Ze,l=new Ee,h=((x=t.roadWidth)!=null?x:ee*2+.9)/2,u=(M,v,C,w,A)=>{l.set(0,s()*6.28,0),c.setFromEuler(l),M.push(o.clone().compose(new L(v,0,C),c,new L(w,A,w)))};for(const M of[-1,1])for(let v=14-s()*6;v>-e+20;v-=5+s()*7){const C=M*(h+.2+s()*1.2),w=1.2+s()*1.1;u(r,C+M*w*.6,v,w,w*(.7+s()*.5)),s()<.45&&u(r,C+M*(w+.9),v-1.4,w*.7,w*.6),s()<.7&&u(a,C-M*.2+(s()-.5),v+1.3+s(),.8+s()*.5,.8+s()*.4)}const f=new Uo(.75,0).translate(0,.45,0),p=new Lr(.62,1).scale(1.2,.85,1.1).translate(0,.42,0),_=new Ve({color:"#9a6b49",flatShading:!0}),g=new Ve({color:t.leaf[0]});this.scene.add(...En(f,_,null,r),...En(p,g,null,a)),this.disposables.push(f,p,_,g)}follow(t,e,n,s,r=1,a=0,o=0){this.lift+=(o-this.lift)*(1-Math.exp(-n*5));const c=Math.tan(this.camera.fov/2*El),l=c*Math.max(.3,s),h=this.fit*r,u=Math.max(14,Math.min(32,h/(2*l))),f=this.elev*El,p=u*Math.sin(f),_=u*Math.cos(f),g=f-Math.atan(this.squadLow*c),m=p/Math.tan(g)-_+a,d=t*.45+this.side,x=e+_,M=t*.3-this.side*.5,v=e-m;if(!this.placed)this.camPos.set(d,p,x),this.camLook.set(M,0,v),this.placed=!0;else{const C=1-Math.exp(-n*7),w=1-Math.exp(-n*14);this.camPos.x+=(d-this.camPos.x)*C,this.camPos.y+=(p-this.camPos.y)*C,this.camPos.z+=(x-this.camPos.z)*w,this.camLook.x+=(M-this.camLook.x)*C,this.camLook.z+=(v-this.camLook.z)*w}this.camera.position.copy(this.camPos),this.camera.position.y+=this.lift,this.look.copy(this.camLook),this.look.y+=this.lift,this.camera.lookAt(this.look),this.camera.updateMatrixWorld(),this.sun.position.set(t-6,14+this.lift,e+8),this.sun.target.position.set(t,this.lift,e)}shake(t,e){!t&&!e||(this.camera.position.x+=t,this.camera.position.y+=e,this.camera.updateMatrixWorld())}own(...t){this.disposables.push(...t)}dispose(){for(const t of this.disposables)t.dispose();this.disposables=[],this.scene.clear()}}const O_=""+new URL("soldier-Dj64xOg4.bin",import.meta.url).href,B_=""+new URL("soldier-D-Y5CCe3.webp",import.meta.url).href,z_=""+new URL("zombie-fat-BY8Tq8sg.bin",import.meta.url).href,k_=""+new URL("zombie-fat-DwMg3lMu.webp",import.meta.url).href,H_=""+new URL("zombie-thin-Bn0QEmLb.bin",import.meta.url).href,G_=""+new URL("zombie-thin-Bt68ioXc.webp",import.meta.url).href,V_=""+new URL("bags-CWT_c0Q2.bin",import.meta.url).href,W_=""+new URL("bags-D5Dx_cvo.webp",import.meta.url).href,X_=""+new URL("city-B-JBJqsV.bin",import.meta.url).href,q_=""+new URL("city-Cr6jaJeW.webp",import.meta.url).href,$_=""+new URL("crate-CHQsRCGe.bin",import.meta.url).href,Y_=""+new URL("crate-BxCzzo5L.webp",import.meta.url).href,K_=""+new URL("deck-mwZQuuS_.webp",import.meta.url).href,J_=""+new URL("dumpster-DFfjplbB.bin",import.meta.url).href,Z_=""+new URL("dumpster-C-uszwKL.webp",import.meta.url).href,j_=""+new URL("troll-ByDoKsDo.bin",import.meta.url).href,Q_=""+new URL("troll-BVeH8ivL.webp",import.meta.url).href,tv=""+new URL("truck-Iv0zH472.bin",import.meta.url).href,ev=""+new URL("truck-CrIn5Ezk.webp",import.meta.url).href,mr={good:"#3f8cff",bad:"#ff4a5e",fire:"#ffb21e"},Tl=.9,nv=1.6,iv=1.9,Sh=1,sv=2.45*Sh,rv="#a3a9b8",ya=7.5,Al=[3,2.6],av=5.6,ov={sky:"#d8ecec",ground:"#8d9a94",road:{road:"#8c968a",edge:"#6f786c",line:"rgba(0,0,0,0)"},curb:"#9aa3a0",leaf:["#6f8a5a","#86a46a"],bounce:"#8a9890",fov:36,elev:40,fog:["#bcd6d6",80,200]},Di=150,Sa=30,ba=-9;function cv(i,t,e,n,s,r){const a=Math.max(n,s),o=i.createRadialGradient(t,e,0,t,e,a);o.addColorStop(0,r),o.addColorStop(1,"rgba(0,0,0,0)"),i.save(),i.translate(t,e),i.scale(n/a,s/a),i.translate(-t,-e),i.fillStyle=o,i.beginPath(),i.arc(t,e,a,0,Math.PI*2),i.fill(),i.restore()}const oi=new Image;oi.src=K_;const lv=8.6;function hv(i){const n=document.createElement("canvas");n.width=512,n.height=1024;const s=n.getContext("2d"),r=new is(n),a=()=>{if(oi.complete&&oi.naturalWidth)s.drawImage(oi,0,0,512,1024/2),s.save(),s.translate(0,1024),s.scale(1,-1),s.drawImage(oi,0,0,512,1024/2),s.restore(),s.fillStyle="rgba(196,202,190,0.16)",s.fillRect(0,0,512,1024);else{s.fillStyle="#8e988c",s.fillRect(0,0,512,1024);const o=[[120,160,100,180,"rgba(92,104,88,0.35)"],[380,500,120,240,"rgba(104,132,86,0.3)"],[220,840,140,120,"rgba(70,74,70,0.28)"]];for(const[c,l,h,u,f]of o)for(const p of[-1024,0,1024])cv(s,c,l+p,h,u,f)}s.fillStyle="rgba(30,34,30,0.4)";for(let o=1;o<i;o++)s.fillRect(Math.round(o/i*512)-3,0,6,1024);s.fillStyle="rgba(30,34,30,0.3)";for(let o=0;o<1024;o+=1024/2)s.fillRect(0,o-2,512,5);r.needsUpdate=!0};return a(),oi.complete||oi.addEventListener("load",a,{once:!0}),r.colorSpace=ge,r.wrapT=$i,r.anisotropy=8,r}const uv=()=>Se([{geo:bt(1,.78,.72),color:"#3f8a4f",at:[0,.47,0]},{geo:bt(1.04,.07,.76),color:"#2c6439",at:[0,.64,0]},{geo:bt(1.08,.08,.8),color:"#2f6a3b",at:[0,.9,-.02],rot:[-.06,0,0]},{geo:bt(.5,.12,.06),color:"#2c6439",at:[0,.78,.37]},{geo:_e(.07,.07,.06,8),color:"#222226",at:[-.4,.07,.28],rot:[0,0,Math.PI/2]},{geo:_e(.07,.07,.06,8),color:"#222226",at:[.4,.07,.28],rot:[0,0,Math.PI/2]}]),fv=()=>Se([{geo:bt(1,.86,.78),color:"#c44a35",at:[0,.45,0]},{geo:bt(1.02,.08,.8),color:"#3a2c28",at:[0,.9,0]},{geo:bt(.08,.8,.82),color:"#9c3626",at:[-.3,.45,0]},{geo:bt(.08,.8,.82),color:"#9c3626",at:[.3,.45,0]},{geo:bt(1.04,.08,.82),color:"#9c3626",at:[0,.06,0]}]),dv=()=>Se([{geo:bt(1.9,1.3,3.2),color:"#3f7f4c",at:[0,1.15,-.4]},{geo:bt(1.94,.1,3.24),color:"#2c5f37",at:[0,1.85,-.4]},{geo:bt(.1,1.2,3.22),color:"#2c5f37",at:[-.5,1.15,-.4]},{geo:bt(.1,1.2,3.22),color:"#2c5f37",at:[.5,1.15,-.4]},{geo:bt(1.8,1.05,1.3),color:"#e9e5d8",at:[0,1.25,1.35]},{geo:bt(1.5,.5,.06),color:"#a9d4e6",at:[0,1.5,2.02]},{geo:bt(1.9,.25,.3),color:"#3a3a40",at:[0,.55,2.05]},{geo:_e(.42,.42,.35,12),color:"#232226",at:[-.95,.42,1.2],rot:[0,0,Math.PI/2]},{geo:_e(.42,.42,.35,12),color:"#232226",at:[.95,.42,1.2],rot:[0,0,Math.PI/2]},{geo:_e(.42,.42,.35,12),color:"#232226",at:[-.95,.42,-1.3],rot:[0,0,Math.PI/2]},{geo:_e(.42,.42,.35,12),color:"#232226",at:[.95,.42,-1.3],rot:[0,0,Math.PI/2]},{geo:Tt(.16,8,6),color:"#fff3a0",at:[-.6,.95,2.1]},{geo:Tt(.16,8,6),color:"#fff3a0",at:[.6,.95,2.1]}]),pv=()=>Se([{geo:Tt(.5,10,6),color:"#c9b48a",at:[-.3,.3,0],scale:[1,.55,.75]},{geo:Tt(.5,10,6),color:"#bba57a",at:[.35,.3,.05],scale:[1,.55,.75]},{geo:Tt(.5,10,6),color:"#d4c098",at:[.02,.72,0],scale:[1,.5,.7]}]);class mv{world=null;crowd;root=new Vn;rig=new Vn;deckMat=null;gates=new R_(48);mobs=new A_(30,{geos:M_.map(t=>S_(t)),smooth:!0,outline:!1,gait:y_,size:iv});boss=new C_(w_(E_),{smooth:!0,outline:!1,gait:xl,size:Sh});flames=L_(72);streams=new D_(4);aim={t:-9,x:0,y:0,z:0};glows;hits=[];shadows=new T_(80);bins;trucks;lane;laneMat;passT=new Map;stompT=-9;gone=new Map;binBox=[null,null];truckBox=null;bags=null;bagsMat=null;barricade=new Vn;seed=1;city=null;cityMat=null;blocks=new Vn;maxHp=1;constructor(){this.crowd=new g_(x_(__),Le(),null,12,vl),this.crowd.add(this.root),this.gates.lift=.2,this.gates.height=1.4,this.bins=[We(uv(),Le(),16),We(fv(),Le(),16)],this.trucks=We(dv(),Le(),12),this.laneMat=hh("#ffd27a",{transparent:!0,opacity:.22,depthWrite:!1}),this.lane=new oe(new Xe(1,1).rotateX(-Math.PI/2),this.laneMat),this.lane.renderOrder=1,this.glows=We(new Xe(1,1).rotateX(-Math.PI/2),new je({map:U_(),transparent:!0,blending:Vi,depthWrite:!1}),12),this.glows.renderOrder=4,this.root.add(this.shadows.mesh,...this.gates.objects,...this.bins,this.trucks,...this.mobs.objects,...this.boss.objects,...this.streams.objects,...this.flames.objects,this.glows),this.loadModels()}loadModels(){const t=n=>console.warn("model",n);kn(O_,B_).then(n=>{var r;const s=Le({map:n.texture});s.color.set(rv),this.crowd.useBaked(n.geometry,s,n.frames,(r=vl.rate)!=null?r:11)},t),kn(H_,G_).then(n=>{this.mobs.useBaked(0,n.geometry,Le({flash:!0,map:n.texture}),n.frames,ya);const s=Le({flash:!0,map:n.texture});s.color.set("#ffa468"),this.mobs.useBaked(2,n.geometry,s,n.frames,ya)},t),kn(z_,k_).then(n=>this.mobs.useBaked(1,n.geometry,Le({flash:!0,map:n.texture}),n.frames,ya),t),kn(j_,Q_).then(n=>{var s;return this.boss.useBaked(n.geometry,Le({flash:!0,map:n.texture}),n.frames,(s=xl.rate)!=null?s:3.2)},t),[[J_,Z_],[$_,Y_]].forEach(([n,s],r)=>kn(n,s).then(a=>{this.bins[r].geometry=a.geometry,this.bins[r].material=Le({map:a.texture}),this.binBox[r]=a.size.clone()},t)),kn(tv,ev).then(n=>{this.trucks.geometry=n.geometry,this.trucks.material=Le({map:n.texture}),this.truckBox=n.size.clone()},t),kn(V_,W_).then(n=>{this.bags=n,this.bagsMat=Le({map:n.texture}),this.dressBarricade()},t),kn(X_,q_).then(n=>{this.city=n,this.cityMat=Le({map:n.texture}),this.dressCity()},t)}kindOf(t){return t>=.66*this.maxHp?2:t>=.33*this.maxHp?1:0}load(t,e){var n;(n=this.world)==null||n.dispose(),this.world=new F_(ov,t.end+40,e,!0),this.world.fit=6.5,this.maxHp=Math.max(1,...t.foes.filter(s=>s.kind==="mob").map(s=>s.hp0)),this.buildRig(t.lanes,e),this.world.scene.add(this.root,this.rig,this.lane),this.flames.clear(),this.hits=[],this.aim={t:-9,x:0,y:0,z:0},this.mobs.reset(),this.boss.reset(),this.passT.clear(),this.gone.clear(),this.stompT=-9,this.crowd.set(0,0,0,0)}buildRig(t,e){var u,f,p;for(const _ of[...this.rig.children]){if(_===this.barricade||_===this.blocks)continue;this.rig.remove(_);const g=_;g.geometry&&g.geometry.dispose()}(f=(u=this.deckMat)==null?void 0:u.map)==null||f.dispose(),(p=this.deckMat)==null||p.dispose();const n=Di+Sa,s=hv(t);s.repeat.set(1,n/(lv*2)),this.deckMat=new Ve({map:s});const r=new Ve({color:"#6f7a72"}),a=new oe(new Be(ee*2+.6,.8,n),[r,r,this.deckMat,r,r,r]);a.position.set(0,-.4,-120/2);const o=new oe(new Xe(300,400).rotateX(-Math.PI/2),new Ve({color:"#8d9a94"}));o.position.set(0,ba,-120),this.rig.add(a,o);const c=new Ve({color:"#647a8c"}),l=new Ve({color:"#a2aaa6"});for(const _ of[-1,1]){const g=new oe(new Be(.5,1.6,n),c);g.position.set(_*(ee+.55),-1.2,-120/2);const m=new oe(new Be(.45,.55,n),l);m.position.set(_*(ee+.45),.27,-120/2);const d=new oe(new Be(.16,.14,n),c);d.position.set(_*(ee+.45),1.05,-120/2),this.rig.add(g,m,d);for(let x=Sa-4;x>-Di;x-=14){const M=new oe(new Be(.7,1.3,.7),c);M.position.set(_*(ee+.45),.65,x),this.rig.add(M)}}this.seed=e,this.rig.add(this.barricade,this.blocks),this.dressBarricade(),this.dressCity();const h=new Ve({color:"#8fb3a6"});for(const[_,g]of[[-30,24],[32,28]]){const m=new oe(new Is(1,16,10),h);m.scale.set(g,g*.4,g),m.position.set(_,ba,-Di-10),this.rig.add(m)}}dressBarricade(){for(const s of[...this.barricade.children]){this.barricade.remove(s);const r=s;r.geometry&&!this.bags&&r.geometry.dispose()}const t=An(this.seed);if(this.bags&&this.bagsMat){const r=ee*2+.6,a=r/3/(this.bags.size.x*.92);for(let o=0;o<3;o++){const c=new oe(this.bags.geometry,this.bagsMat);c.position.set(-r/2+(o+.5)*(r/3),0,-2.2-t()*.15),c.rotation.y=(t()-.5)*.12+(o%2?Math.PI:0),c.scale.set(a,a,a*.7),this.barricade.add(c)}return}const e=pv(),n=Le();for(let s=-ee+.5;s<=ee-.4;s+=1.05){const r=new oe(e,n);r.position.set(s,0,-2.2-t()*.2),r.rotation.y=(t()-.5)*.3,this.barricade.add(r)}}dressCity(){for(const n of[...this.blocks.children])this.blocks.remove(n);if(!this.city||!this.cityMat)return;const t=An(this.seed*7+3),e=Math.max(this.city.size.x,this.city.size.z);for(const n of[-1,1])for(let s=Sa-t()*6;s>-90;){const r=.9+t()*.25,a=e*r/2,o=new oe(this.city.geometry,this.cityMat);o.position.set(n*(ee+1.6+a+t()*1.5),ba,s-a),o.rotation.y=Math.floor(t()*4)*(Math.PI/2),o.scale.setScalar(r),this.blocks.add(o),s-=a*2+1.5+t()*3}}stomp(t){this.stompT=t}fire(t,e,n,s,r,a){const o=An(Math.floor(e*1e3)),c=this.crowd.front(),l=Math.min(6,a+2);for(let h=0;h<l;h++){const u=c.length?c[Math.floor(o()*c.length)]:{x:0,z:0};this.flames.fire(t.x+u.x*.6,.95,-t.z+u.z-1.8,n+(o()-.5)*.8,s+(o()-.5)*.4,r+1,e+h*.02)}this.hits.push({x:n,y:s,z:r+.6,t0:e+.08}),this.aim={t:e,x:n,y:s,z:r+.6},this.hits.length>12&&this.hits.shift()}sync(t,e,n,s){const r=this.world,a=-t.z,o=t.boss;r.follow(t.x,a,n,s,t.phase==="boss"?1.12:1,2.5),this.rig.position.set(0,0,a);const c=nv*(t.n>300?Math.min(1.45,1+.12*Math.log2(t.n/300)):1);this.crowd.set(t.phase==="lost"?0:t.n,e,t.x,a+.6),this.crowd.update(e,t.x,a+.6,c,!1,null);const l=As(t),[h,u]=dh(t.lanes)[l];this.lane.position.set((h+u)/2,.03,a-34),this.lane.scale.set(u-h-.3,1,66),this.laneMat.opacity=.18+.06*Math.sin(e*6),this.gates.sync(t.rows.filter(d=>d.gates&&d.z-t.z<Di-10).map(d=>{var x;return{z:-d.z,k:d.k,passAge:d.passed?e-((x=this.passT.get(d.i))!=null?x:e):-1,choice:d.choice,gates:d.gates.map(M=>M?{color:_v(M),swell:1+.08*Math.sin(Math.PI*Math.min(1,Math.max(0,(t.t-M.bumpT)/.18)))}:null)}})),this.shadows.begin();const f=[0,0];let p=0;const _=[];for(const d of t.foes){const x=d.z-t.z;if(x>Di-10||x<-4)continue;let M=1;if(d.dead&&(this.gone.has(d.id)||this.gone.set(d.id,e),M=1-(e-this.gone.get(d.id))/.25,M<=0))continue;const v=Math.max(0,1-(t.t-d.hitT)/.1);if(d.kind==="mob")_.push({id:d.id,x:d.x,z:-d.z,r:d.r,tier:this.kindOf(d.hp0),hit:v,dead:d.dead});else if(d.kind==="crate"){const C=d.id%2;if(f[C]>=16)continue;const w=this.binBox[C],A=(w?Al[C]/w.x:2.1)*M;$n(this.bins[C],f[C]++,d.x+(v?Math.sin(e*70)*.06:0),0,-d.z,A,A*(1-v*.05),A,0,.2*Math.sin(d.id),0),this.shadows.add(d.x,-d.z,(w?Al[C]*1.25:2.6)*M)}else if(d.kind==="truck"&&p<12){const C=d.awake&&!d.dead?Math.abs(Math.sin(e*14+d.id))*.08:0,w=(this.truckBox?av/this.truckBox.z:1.15)*M;$n(this.trucks,p++,d.x,C,-d.z,w,w,w,0,0,v*.05),this.shadows.add(d.x,-d.z,(this.truckBox?this.truckBox.x*w/M*1.3:2.8)*M)}}this.bins.forEach((d,x)=>{d.count=f[x],d.instanceMatrix.needsUpdate=!0}),this.trucks.count=p,this.trucks.instanceMatrix.needsUpdate=!0,this.mobs.sync(_,e,this.shadows),this.boss.sync(o.z-t.z<Di-10?{x:o.x,z:-o.z,r:o.r,hit:Math.max(0,1-(t.t-o.hitT)/.12),dead:o.dead,stomp:Math.max(0,1-(e-this.stompT)/.35),walking:o.awake&&!o.dead}:null,e,this.shadows),this.shadows.end(),this.flames.sync(e),this.streams.begin(e);const g=1-(e-this.aim.t)/.3;if(g>0&&t.n>0){const d=this.crowd.front(),x=[...d].sort((C,w)=>C.z-w.z).slice(0,Math.max(1,Math.ceil(d.length/2))).sort((C,w)=>C.x-w.x),M=this.aim,v=Math.min(4,x.length);for(let C=0;C<v;C++){const w=x[Math.round(C/Math.max(1,v-1)*(x.length-1))],A=Math.sin(e*9+C*2.1)*.2,R=M.x+(C-(v-1)/2)*.4+A;this.streams.set(t.x+w.x,.95,a+.6+w.z-1.8,R,M.y,M.z,.85*(1+.15*Math.sin(e*13+C)),g)}}this.streams.end();let m=0;for(const d of this.hits){const x=e-d.t0;if(x<0||x>.16)continue;const M=2.6*(.7+x*3);$n(this.glows,m++,d.x,d.y,d.z,M,1,M)}this.glows.count=m,this.glows.instanceMatrix.needsUpdate=!0}laneCenter(t,e){return pn(t.lanes,e)}}function gv(i,t,e){return i==="crate"?t%2?["#c8462c","#2e2622","#ffb36a"]:["#3f7a45","#2a2f2c","#c9e0a8"]:i==="truck"?["#3f6f48","#e9e5d8","#ffd34d"]:[["#8fa07a","#5d6b52","#d8e0c8"],["#7d8fa8","#4c5868","#d0dae8"],["#ff8a4a","#8a3a22","#ffd27a"]][Math.max(0,Math.min(2,e))]}function _v(i){return i.fire?mr.fire:fh(i.op)?mr.good:mr.bad}let or=null;const vv=()=>or!=null?or:or=new mv;let bh=null;const Cl=new Map,xv=i=>{let t=7;for(const e of i)t=t*31+e.charCodeAt(0)>>>0;return t};function Mv(i){let t=null,e=0,n=-1;const s={sfx:{play(){}},buzz(){},levelId:"demo"};return(r,a,o)=>{(!t||bh!==t||n>=0&&o-n>1.2)&&(t=Eh(i,s,!0),t.auto=!0,n=-1,e=o),t.step(Math.min(.05,Math.max(0,o-e))),e=o,t.state!=="play"&&n<0&&(n=o),t.draw(r,a,o)}}function Eh(i,t,e=!1){const n=gl(i),s=vv();s.load(n,xv(t.levelId)),s.world.squadLow=e?.2:.52;const r=new Og;r.tx=n.x;const a=new Kh,o=new Cg;let c=0,l=0;e||(hi.on=!1);let h="play",u=0,f=0,p=-1,_=!1;const g=.5;let m=-9,d=1,x=-9,M={x:0,y:0,w:360,h:640},v={x:180,y:520},C={x:180,y:560,u:30},w=-1,A=-1,R=null,b=0,y=!1;const P=()=>{let O=Cl.get(t.levelId);return O===void 0&&(O=_l(gl(i)).outcome.score,Cl.set(t.levelId,O)),O},k=()=>(R||(R=Go(Sr(n)).won?{route:null}:{route:_l(Sr(n)).route}),R.route?_h(n,R.route):Ho(n)),N=(O,F,K)=>Fg(s.world.camera,M,O,F,K);function X(O){switch(O.e){case"gate":{const F=n.rows[O.row].gates[O.slot];s.passT.set(O.row,f);const K=O.after>=O.before;o.ring(C.x,C.y,C.u*2.4,F.fire?"#ffb21e":K?"#5d9bff":"#ff4a4a",.6);const it=O.before>0?O.after/O.before:2;O.fire?x=f:(m=f,d=Math.max(it,1)),a.float(v.x,v.y-40,fo(F.op),K?"#ffffff":"#ff8a8a",Ye(24+9*Math.log2(Math.max(1,it)),24,46),1),t.sfx.play(K?"coin":"hiss",K?Ye(.9+.12*Math.log2(Math.max(1,it)),.9,1.5):1),K&&it>=2&&t.sfx.play("star",.9),t.buzz(K?"light":"medium");break}case"shot":{b++;let F=0,K=1,it=0;if(O.kind==="foe"){const ct=n.foes[O.ref];F=ct.x,K=ct.kind==="mob"?ct.r:1.2,it=-ct.z+(ct.kind==="truck"?1.5:.8)}else O.kind==="boss"?(F=n.boss.x,K=n.boss.r,it=-n.boss.z):(F=pn(n.lanes,O.slot),K=Tl,it=-n.rows[O.ref].z);s.fire(n,f,F,K,it,b%2?1:Math.min(3,1+Math.floor(n.n/12))),b%2===0&&t.sfx.play("click",.55+b%3*.05);break}case"kill":{const F=n.foes[O.foe],K=N(F.x,1,-F.z),it=gv(F.kind,F.id,s.kindOf(F.hp0)),ct=Ii(s.world.camera,M,Math.max(1,K.depth));F.kind==="mob"?(o.puff(K.x,K.y,ct*1.1,3,it[2]),o.ring(K.x,K.y+ct*.7,ct*1.5,it[0],.45),c++):(o.fireball(K.x,K.y,ct*(F.kind==="truck"?2.4:1.7)),l++),t.sfx.play(F.kind==="mob"?"poof":"thud",F.kind==="truck"?.7:1.1),a.shake(F.kind==="truck"?6:2);break}case"crash":case"bossEat":{a.float(v.x,v.y-30,`−${si(O.lost)}`,"#ff6b6b",Ye(24+4*Math.log2(O.lost+1),24,46),1),o.ring(C.x,C.y,C.u*2.6,"#ff4a4a",.5),o.puff(C.x,C.y-C.u*.6,C.u*1.2,3,"#d8c8b0"),t.sfx.play("thud",.6),t.buzz("heavy"),a.shake(9);break}case"gateUp":t.sfx.play("pop",1.4);break;case"arena":t.sfx.play("thud",.6),a.shake(4);break;case"stomp":s.stomp(f),a.float(v.x,v.y-30,`−${si(O.lost)}`,"#ff6b6b",30,1),o.ring(C.x,C.y,C.u*3,"#ff4a4a",.55),t.sfx.play("thud",.5),t.buzz("heavy"),a.shake(10);break;case"bossDown":{const F=n.boss,K=N(F.x,F.r,-F.z),it=Ii(s.world.camera,M,Math.max(1,K.depth));o.fireball(K.x,K.y,it*F.r*1.8),o.puff(K.x,K.y+it,it*F.r*1.5,5,"#b9c4a8"),t.sfx.play("poof",.7),t.sfx.play("star",1.2),a.shake(12);break}case"end":p=f+(O.won?1.2:.8);break}}function Z(O,F){var rt;M=F;const K=s.world;if(s.sync(n,f,1/60,F.w/F.h),K.shake(a.ox*.02,a.oy*.02),!Ug(O,F,K.scene,K.camera)){Gi(O,20,240,320,120,18,"#fffcf6",ze,3),rn(O,"这台设备打不开 3D",180,285,22,"#221f2e","#fffcf6"),rn(O,Dg().slice(0,40),180,320,13,"#8a8496","#fffcf6");return}const it=K.camera,ct=N(n.x,0,-n.z+.6),Rt=Ii(it,F,ct.depth);r.mpu=1/Rt,r.x0=N(0,0,-n.z).x,v={x:ct.x,y:ct.y-Rt*1.4},C={x:ct.x,y:ct.y,u:Rt};for(const nt of n.rows)!nt.gates||nt.passed||nt.z-n.z>110||nt.gates.forEach((I,H)=>{if(!I)return;const j=N(pn(n.lanes,H),Tl,-nt.z);if(j.depth<=0)return;const Q=Ye(Ii(it,F,j.depth)*(n.lanes===3?.85:1.05),15,44)*ga(n.t-I.bumpT,1.4),At=fo(I.op);I.fire?(ul(O,j.x-Q*.95,j.y,Q*.9),rn(O,At,j.x+Q*.25,j.y,Q,"#fff6d6")):I.shoot?(yv(O,j.x,j.y-Q*.95,Q*.3),rn(O,At,j.x,j.y,Q,fh(I.op)?"#ffffff":"#ffe0e0")):rn(O,At,j.x,j.y,Q,"#ffffff")});const Xt=n.foes.filter(nt=>!nt.dead&&nt.z-n.z<100).sort((nt,I)=>I.z-nt.z);for(const nt of Xt){const I=nt.kind==="crate"?1.2:nt.kind==="truck"?1.5:nt.r*2.3+.45,H=N(nt.x,I,-nt.z+(nt.kind==="crate"?.8:nt.kind==="truck"?2.4:0));if(H.depth<=0)continue;const j=Ii(it,F,H.depth),Q=Ye(j*.95,18,38)*(1+.15*Math.max(0,1-(n.t-nt.hitT)/.1));rn(O,si(Math.ceil(nt.hp)),H.x,H.y,Q,"#ffffff"),nt.kind==="truck"&&uo(O,_a(un.truck,"#ffffff"),H.x,H.y-Q*1.05,Q*.9)}const $=n.boss;if(!$.dead&&$.z-n.z<110){const nt=N($.x,$.r*sv+.5,-$.z);if(nt.depth>0){const I=Ii(it,F,nt.depth),H=Ye(I*1.1,22,44);rn(O,si(Math.ceil($.hp)),nt.x,nt.y,H,"#ffffff"),$.stomp>0&&hl(O,`−${$.stomp}`,nt.x,nt.y+H*1.1,Ye(I*.45,15,18),"#5b2a7a")}}if(f<A&&w>=0){const nt=N(pn(n.lanes,w),0,-n.z-7),I=.5+.5*Math.sin(f*7);dl(O,nt.x+8,nt.y+10+I*14,60,-.35)}if(n.n>0){const nt=26*ga(f-m,d);Ag(O,n.n,v.x,v.y,nt),n.f>1&&hl(O,`×${si(n.f)}`,v.x+nt*1.6,v.y-nt*.55,15*ga(f-x,1.5),mr.fire,"#221f2e",ul)}if(o.draw(O),a.draw(O),!e){if(Vh(n.z/Math.max(1,n.boss.z-18),n.phase!=="run"&&!$.dead?[si(Math.ceil($.hp)),$.hp/$.hp0]:null),i.tip&&f<3.6){const nt=Ye(Math.min(f/.25,(3.6-f)/.4)),[I,H]=i.tip;Rg(O,_a((rt=un[I])!=null?rt:un.bridge,"#5a3d22"),H,F.y+F.h*.105,nt)}if(!_&&n.phase==="run"&&f<6){const nt=Math.sin(f*3.2);O.globalAlpha=.85,uo(O,_a(un.drag,"#ffffff"),ct.x,ct.y+Rt*.9,40),O.globalAlpha=1,dl(O,ct.x+nt*52,ct.y+Rt*.9+16,58,-.2)}}}const q={get state(){return h},get clock(){return f},get auto(){return y},set auto(O){O&&!y&&(R=null),y=O},get sim(){return n},get kills(){return c},get smashed(){return l},step(O){if(!(hi.on&&!e)&&(f+=O,a.step(O),o.step(O),!(f<g))){for(u+=O;u>=mo;){u-=mo,y&&(r.tx=k()),n.tx=r.tx,Dr(n);for(const F of n.ev)X(F);n.ev.length=0}p>=0&&f>=p&&h==="play"&&(h=n.phase==="won"?"won":"lost")}},draw(O,F){Z(O,F)},press(O){_=!0,r.press(O,n.x)},drag(O){r.drag(O)},release(O){r.release(O)},stars:()=>t_(n.n,P()),hint(){R=null;const O=k();return w=Math.max(0,Math.min(n.lanes-1,Math.floor((O+4)/8*n.lanes))),A=f+3,!0},why:()=>n.why||"人没了",busy:()=>!1,hintTarget(){return h!=="play"?null:{x:r.screenAt(r.tx),y:v.y+70}},hintPath(){if(h!=="play"||n.phase==="won"||n.phase==="lost")return null;const O=k();return Math.abs(O-r.tx)<.3?null:r.path(r.tx,O,v.y+70)}};return bh=q,q}function yv(i,t,e,n){i.lineWidth=Math.max(2,n*.35),i.strokeStyle=ze,i.beginPath(),i.arc(t,e,n,0,Math.PI*2),i.stroke(),i.lineWidth=Math.max(1.2,n*.2),i.strokeStyle="#ffffff",i.stroke(),i.beginPath(),i.moveTo(t-n*1.4,e),i.lineTo(t+n*1.4,e),i.moveTo(t,e-n*1.4),i.lineTo(t,e+n*1.4),i.stroke()}Fh({id:"bridge",music:Oh,title:"桥头守卫<small>一个也别放过去</small>",tagline:"广告里那个，这回是真的",size:{w:360,h:640},chapters:sc,start:Eh,backdrop:Mv(sc[0].levels[0]),teach:i=>i.endsWith("-1"),chrome:"overlay",decorate:$h,confetti:!1});
