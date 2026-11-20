(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const ah={play:'<path d="M8 4.8v14.4a.8.8 0 0 0 1.2.7l11.3-7.2a.8.8 0 0 0 0-1.4L9.2 4.1A.8.8 0 0 0 8 4.8z" fill="currentColor"/>',home:'<path d="M3.5 11.2L12 3.8l8.5 7.4M6 9.4V20h4.5v-5.5h3V20H18V9.4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',back:'<path d="M14.5 5L7.5 12l7 7" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',restart:'<path d="M19 12a7 7 0 1 1-2.05-4.95" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M19.5 3.5v4.5H15" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',next:'<path d="M5 12h12M12.5 6.5L18 12l-5.5 5.5" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',hint:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',star:'<path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" fill="currentColor"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.2" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/>',sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',mute:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9.5l5 5M20.5 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',grid:'<g fill="currentColor"><rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/></g>',skull:'<path d="M12 3a8 8 0 0 0-8 8c0 2.6 1.3 4.6 3 5.8V20h10v-3.2c1.7-1.2 3-3.2 3-5.8a8 8 0 0 0-8-8z" fill="currentColor"/><circle cx="9" cy="11.5" r="1.9" fill="#fff"/><circle cx="15" cy="11.5" r="1.9" fill="#fff"/>'};function Zt(i,t="i"){var e;return`<svg class="${t}" viewBox="0 0 24 24" aria-hidden="true">${(e=ah[i])!=null?e:""}</svg>`}function no(){return null}function oh(i,t){var n,r;document.addEventListener("visibilitychange",()=>document.hidden?i():t());const e=no();try{(n=e==null?void 0:e.onHide)==null||n.call(e,i),(r=e==null?void 0:e.onShow)==null||r.call(e,t)}catch{}}let Io=0;function ys(i="light"){var n;const t=performance.now();if(t-Io<60)return;Io=t;const e=no();try{e!=null&&e.vibrateShort?e.vibrateShort({type:i}):(n=navigator.vibrate)==null||n.call(navigator,i==="heavy"?30:i==="medium"?18:10)}catch{}}function ch(){var t,e,n,r,s;const i=no();if(!i)return 0;try{const a=(t=i.getMenuButtonBoundingClientRect)==null?void 0:t.call(i),o=(e=i.getSystemInfoSync)==null?void 0:e.call(i),c=o!=null&&o.windowWidth&&o.windowWidth>0?innerWidth/o.windowWidth:1;if(a&&a.bottom>0&&a.bottom<160)return Math.round(a.bottom*c+6);const l=((s=(r=o==null?void 0:o.statusBarHeight)!=null?r:(n=o==null?void 0:o.safeArea)==null?void 0:n.top)!=null?s:0)*c;return Math.round((l>=20?l:24)+42)}catch{return 0}}function lh(i){const t={v:1,stars:{},sound:!0,music:!0,seen:[]};try{const e=localStorage.getItem(`${i}/save/v1`);if(!e)return t;const n=JSON.parse(e);return{v:1,stars:typeof n.stars=="object"&&n.stars?n.stars:{},sound:n.sound!==!1,music:n.music!==!1,seen:Array.isArray(n.seen)?n.seen.filter(r=>typeof r=="string"):[]}}catch{return t}}function hh(i,t){try{localStorage.setItem(`${i}/save/v1`,JSON.stringify(t))}catch{}}class uh{constructor(t){this.ctx=null,this.out=null,this.noise=null,this.last=new Map,this.enabled=t;const e=()=>this.wake();for(const n of["pointerdown","touchend","click","keydown"])document.addEventListener(n,e,{capture:!0,passive:!0})}wake(){if(this.enabled)try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.out=this.ctx.createGain(),this.out.gain.value=.55,this.out.connect(this.ctx.destination);const e=this.ctx.sampleRate*.5;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noise.getChannelData(0);let r=7;for(let s=0;s<e;s++)r=r*16807%2147483647,n[s]=r/2147483647*2-1}this.ctx.state!=="running"&&this.ctx.resume()}catch{}}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}setEnabled(t){this.enabled=t,t?this.wake():this.suspend()}play(t,e=1){var c;if(!this.enabled||!this.ctx||!this.out||this.ctx.state!=="running")return;const n=this.ctx.currentTime,r=t==="coin"?.035:t==="sizzle"||t==="hiss"?.09:t==="splash"?.12:.05;if(n-((c=this.last.get(t))!=null?c:-1)<r)return;this.last.set(t,n);const s=this.ctx,a=(l,h,f,d,p,g=0)=>{const _=s.createOscillator(),m=s.createGain();_.type=l,_.frequency.setValueAtTime(h*e,n+g),_.frequency.exponentialRampToValueAtTime(Math.max(20,f*e),n+g+d),m.gain.setValueAtTime(1e-4,n+g),m.gain.exponentialRampToValueAtTime(p,n+g+.008),m.gain.exponentialRampToValueAtTime(1e-4,n+g+d),_.connect(m).connect(this.out),_.start(n+g),_.stop(n+g+d+.02)},o=(l,h,f,d,p=0)=>{if(!this.noise)return;const g=s.createBufferSource(),_=s.createBiquadFilter(),m=s.createGain();g.buffer=this.noise,_.type="bandpass",_.frequency.value=f*e,_.Q.value=d,m.gain.setValueAtTime(h,n+p),m.gain.exponentialRampToValueAtTime(1e-4,n+p+l),g.connect(_).connect(m).connect(this.out),g.start(n+p,Math.random()*.3),g.stop(n+p+l+.02)};switch(t){case"click":a("triangle",900,600,.06,.25);break;case"pop":a("sine",520,980,.08,.3);break;case"pull":o(.18,.35,2400,1.5),a("triangle",1400,2600,.12,.16);break;case"coin":a("square",1760,1760,.05,.07),a("sine",2637,2637,.12,.12,.03);break;case"sizzle":o(.35,.28,5200,.8);break;case"hiss":o(.5,.18,900,.6);break;case"splash":o(.28,.3,1300,.9);break;case"poof":o(.22,.3,700,1.2),a("sine",340,120,.2,.25);break;case"thud":a("sine",140,55,.22,.5),o(.08,.2,400,1);break;case"star":a("triangle",1320,1320,.16,.22),a("sine",1980,1980,.22,.14,.05);break;case"win":[523,659,784,1047].forEach((l,h)=>a("triangle",l,l,.22,.24,h*.09));break;case"lose":[392,330,262].forEach((l,h)=>a("sawtooth",l,l*.97,.22,.12,h*.13));break}}}class fh{constructor(t,e,n){this.scale=1,this.offX=0,this.offY=0,this.dpr=1,this.view={x:0,y:0,w:0,h:0},this.top=64,this.bottom=12,this.W=e,this.H=n,this.canvas=document.createElement("canvas"),this.canvas.id="stage",t.prepend(this.canvas);const r=this.canvas.getContext("2d",{alpha:!1});if(!r)throw new Error("no 2D canvas");this.g=r,this.resize(),addEventListener("resize",()=>this.resize())}resize(){const t=innerWidth,e=innerHeight;this.dpr=Math.min(window.devicePixelRatio||1,2.5),this.canvas.width=Math.round(t*this.dpr),this.canvas.height=Math.round(e*this.dpr),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`;const n=Math.max(100,e-this.top-this.bottom);this.scale=Math.min(t/this.W,n/this.H),this.offX=(t-this.W*this.scale)/2,this.offY=this.top+(n-this.H*this.scale)/2,this.view={x:-this.offX/this.scale,y:-this.offY/this.scale,w:t/this.scale,h:e/this.scale}}begin(){const{g:t,dpr:e,scale:n}=this;return t.setTransform(e*n,0,0,e*n,e*this.offX,e*this.offY),t}toLogical(t,e){const n=this.canvas.getBoundingClientRect();return{x:(t-n.left-this.offX)/this.scale,y:(e-n.top-this.offY)/this.scale}}}function dh(i){var nt;window.__booted=!0;const t=lh(i.id),e=()=>hh(i.id,t),n=new uh(t.sound),r=(nt=document.getElementById("app"))!=null?nt:document.body,s=new fh(r,i.size.w,i.size.h),a=document.createElement("div");a.id="ui",r.append(a);const o=[];i.chapters.forEach((F,L)=>F.levels.forEach((Y,J)=>o.push({id:`${L+1}-${J+1}`,ch:L,idx:J,level:Y,flat:o.length})));const c=F=>{var L;return(L=t.stars[F.id])!=null?L:0},l=F=>F.flat===0||c(o[F.flat-1])>0,h=()=>{var F;return(F=o.find(L=>c(L)===0))!=null?F:o[o.length-1]},f=()=>o.reduce((F,L)=>F+c(L),0);let d="title",p=null,g=null,_=0,m=0,u=[];const S=i.chrome==="overlay";S&&document.documentElement.classList.add("chrome-overlay"),i.bottomInset!==void 0&&(s.bottom=i.bottomInset);const E=()=>{var Y;const F=ch();document.documentElement.style.setProperty("--top",`max(env(safe-area-inset-top, 0px), ${F}px)`),getComputedStyle(document.documentElement).getPropertyValue("--top");const L=Math.max(F,v());s.top=S?L+((Y=i.overlayTop)!=null?Y:0):56+L,s.resize()},v=()=>{const F=document.createElement("div");F.style.cssText="position:fixed;top:0;height:env(safe-area-inset-top,0px);visibility:hidden",document.body.append(F);const L=F.getBoundingClientRect().height;return F.remove(),L};E();for(const F of[300,1e3,3e3])setTimeout(E,F);addEventListener("resize",E);const R=(F,L,Y,J)=>{const ot=document.createElement("button");return ot.className=F,ot.type="button",ot.innerHTML=L,J&&ot.setAttribute("aria-label",J),ot.addEventListener("click",mt=>{mt.stopPropagation(),n.play("click"),Y()}),ot},T=()=>{t.sound=!t.sound,e(),n.setEnabled(t.sound),I()},A=()=>R("round sound b-sound",Zt(t.sound?"sound":"mute"),T,t.sound?"关闭声音":"打开声音"),P=(F={})=>({levelId:p==null?void 0:p.id,chapter:p==null?void 0:p.ch,run:g,home:()=>p?C(p.ch):M(),levels:()=>{var L;return C((L=p==null?void 0:p.ch)!=null?L:h().ch)},restart:()=>{p&&H(p)},next:()=>{if(!p)return H(h());p.flat<o.length-1?H(o[p.flat+1]):M()},hint:()=>{var L;(L=g==null?void 0:g.hint)==null||L.call(g)},sound:T,soundOn:()=>t.sound,...F}),x=(F,L)=>{var Y;F==="result"?a.dataset.result=L!=null&&L.won?"won":"lost":(a.dataset.screen=F,delete a.dataset.result),(Y=i.decorate)==null||Y.call(i,F,a,P(L))};function M(){d="title",g=null,a.innerHTML="";const F=document.createElement("div");F.className="title-screen",F.innerHTML=`<h1>${i.title}</h1><p class="tagline">${i.tagline}</p>`;const L=h(),Y=o.filter(mt=>c(mt)>0).length,J=Y===0?"开始":Y>=o.length?"再玩":`第 ${L.id} 关`;F.append(R("big primary b-play",`${Zt("play")}<span>${J}</span>`,()=>H(L)));const ot=document.createElement("div");ot.className="row",ot.append(R("chip b-levels",`${Zt("grid")}<span>选关</span>`,()=>C(L.ch)),R("chip b-stars",`${Zt("star")}<span>${f()} / ${o.length*3}</span>`,()=>C(L.ch))),F.append(ot),a.append(F,q(A())),x("title")}function C(F){d="levels",g=null,m=F,a.innerHTML="";const L=document.createElement("div");L.className="hud",L.append(R("round b-home",Zt("home"),M,"回到标题"));const Y=document.createElement("div");Y.className="hud-title",Y.innerHTML=`${Zt("star")}<span>${f()} / ${o.length*3}</span>`,L.append(Y,A());const J=document.createElement("div");J.className="tabs",i.chapters.forEach((mt,wt)=>{const kt=o.find(zt=>zt.ch===wt),U=l(kt),re=R(`tab${wt===F?" on":""}${U?"":" locked"}`,`${U?mt.icon:Zt("lock")}<span>${mt.name}</span>`,()=>U&&C(wt),mt.name);J.append(re)});const ot=document.createElement("div");ot.className="level-grid";for(const mt of o.filter(wt=>wt.ch===F)){const wt=l(mt),kt=c(mt),U=[0,1,2].map(zt=>`<i class="${zt<kt?"got":""}">${Zt("star")}</i>`).join(""),re=R(`level${wt?"":" locked"}${kt?" done":""}`,wt?`<b>${mt.idx+1}</b><span class="stars">${U}</span>`:Zt("lock"),()=>wt&&H(mt),`第 ${mt.id} 关`);ot.append(re)}a.append(L,J,ot),x("levels",{chapter:F})}function H(F){var ot;d="play",p=F,u=[],g=i.start(F.level,{sfx:n,buzz:ys,levelId:F.id}),_=0,a.innerHTML="";const L=document.createElement("div");L.className="hud",L.append(R("round b-home",Zt("home"),()=>C(F.ch),"选关"));const Y=document.createElement("div");Y.className="hud-title",Y.innerHTML=`${i.chapters[F.ch].icon}<span>${F.id}</span>`,L.append(Y);const J=document.createElement("div");J.className="hud-right",g.hint&&J.append(R("round b-hint",Zt("hint"),()=>{var mt;return(mt=g==null?void 0:g.hint)==null?void 0:mt.call(g)},"提示")),J.append(R("round b-restart",Zt("restart"),()=>H(F),"重来")),L.append(J),a.append(L),x("play"),(ot=i.teach)!=null&&ot.call(i,F.id)&&setTimeout(()=>{var mt;return(mt=g==null?void 0:g.hint)==null?void 0:mt.call(g)},400)}function k(F){var J,ot;if(!p||!g)return;const L=p,Y=document.createElement("div");if(Y.className=`result ${F?"won":"lost"}`,F){const mt=g.stars();mt>c(L)&&(t.stars[L.id]=mt,e());const wt=L.flat===o.length-1;Y.innerHTML=`<div class="stars-big">${[0,1,2].map(re=>`<i class="${re<mt?"got":""}" style="animation-delay:${.15+re*.18}s">${Zt("star")}</i>`).join("")}</div>`,[0,1,2].slice(0,mt).forEach(re=>setTimeout(()=>n.play("star",1+re*.12),150+re*180));const kt=document.createElement("div");kt.className="acts",wt?kt.append(R("big primary b-next",`${Zt("home")}<span>全部通关</span>`,M)):kt.append(R("big primary b-next",`${Zt("next")}<span>下一关</span>`,()=>H(o[L.flat+1])));const U=document.createElement("div");U.className="row",U.append(R("chip b-replay",`${Zt("restart")}<span>重玩</span>`,()=>H(L)),R("chip b-levels",`${Zt("grid")}<span>选关</span>`,()=>C(L.ch))),kt.append(U),Y.append(kt)}else{Y.innerHTML=`<div class="why">${Zt("skull")}<span>${(ot=(J=g.why)==null?void 0:J.call(g))!=null?ot:"失败了"}</span></div>`;const mt=document.createElement("div");if(mt.className="acts",mt.append(R("big primary b-retry",`${Zt("restart")}<span>再来</span>`,()=>H(L))),g.hint){const wt=document.createElement("div");wt.className="row",wt.append(R("chip b-tip",`${Zt("hint")}<span>看提示</span>`,()=>{H(L),setTimeout(()=>{var kt;return(kt=g==null?void 0:g.hint)==null?void 0:kt.call(g)},300)})),mt.append(wt)}Y.append(mt)}a.append(Y),x("result",{won:F,stars:F?g.stars():0})}const q=F=>{const L=document.createElement("div");return L.className="corner",L.append(F),L};function I(){if(d==="title")M();else if(d==="levels")C(m);else{const F=a.querySelector(".sound");F&&(F.innerHTML=Zt(t.sound?"sound":"mute"))}}let z=null;s.canvas.addEventListener("pointerdown",F=>{if(d!=="play"||!g||g.state!=="play"||z)return;const L=s.toLogical(F.clientX,F.clientY);z={id:F.pointerId,run:g};try{s.canvas.setPointerCapture(F.pointerId)}catch{}g.press(L.x,L.y)}),s.canvas.addEventListener("pointermove",F=>{var Y,J;if(!z||F.pointerId!==z.id||z.run!==g)return;const L=s.toLogical(F.clientX,F.clientY);(J=(Y=z.run).drag)==null||J.call(Y,L.x,L.y)});const $=F=>{var J;if(!z||F.pointerId!==z.id)return;const L=z.run;if(z=null,L!==g)return;const Y=s.toLogical(F.clientX,F.clientY);(J=L.release)==null||J.call(L,Y.x,Y.y)};s.canvas.addEventListener("pointerup",$),s.canvas.addEventListener("pointercancel",$),addEventListener("pointerup",$,!0),addEventListener("pointercancel",$,!0),addEventListener("keydown",F=>{var L;d!=="play"||!p||(F.key==="r"||F.key==="R"?H(p):F.key==="h"||F.key==="H"?(L=g==null?void 0:g.hint)==null||L.call(g):F.key==="Escape"?C(p.ch):(F.key==="n"||F.key==="Enter")&&(g==null?void 0:g.state)==="won"&&p.flat<o.length-1&&H(o[p.flat+1]))});let G=performance.now(),it=!0,at=1;const pt=getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()||"#222",Tt=F=>{var ot;const L=Math.min(.05,(F-G)/1e3);G=F;const Y=F/1e3,J=s.g;J.setTransform(1,0,0,1,0,0),J.fillStyle=pt,J.fillRect(0,0,s.canvas.width,s.canvas.height),s.begin(),d==="play"&&g?(g.step(L*at),g.draw(J,s.view,Y),g.state!=="play"&&(_?_>0&&F-_>(g.state==="won"?700:900)&&!a.querySelector(".result")&&k(g.state==="won"):(_=F,g.state==="won"?(n.play("win"),ys("medium"),i.confetti!==!1&&qt()):(n.play("lose"),ys("heavy"))))):(ot=i.backdrop)==null||ot.call(i,J,s.view,Y),Z(J,L),it&&requestAnimationFrame(Tt)};requestAnimationFrame(Tt),oh(()=>{it=!1,n.suspend()},()=>{it||(it=!0,G=performance.now(),requestAnimationFrame(Tt)),n.wake()});function qt(){const F=["#ff5c8a","#f2b632","#4f7cff","#5ec8b8","#ffffff"],L=s.view;for(let Y=0;Y<90;Y++){const J=Y%2===0;u.push({x:J?L.x+10:L.x+L.w-10,y:L.y+L.h*.55,vx:(J?1:-1)*(120+Math.random()*260),vy:-(380+Math.random()*420),r:Math.random()*6,w:5+Math.random()*6,h:3+Math.random()*5,c:F[Y%F.length],spin:(Math.random()-.5)*14})}}function Z(F,L){if(!u.length)return;const Y=s.view.y+s.view.h+20;u=u.filter(J=>J.y<Y);for(const J of u)J.vy+=700*L,J.vx*=1-.8*L,J.x+=J.vx*L,J.y+=J.vy*L,J.r+=J.spin*L,F.save(),F.translate(J.x,J.y),F.rotate(J.r),F.fillStyle=J.c,F.fillRect(-J.w/2,-J.h/2,J.w,J.h*Math.abs(Math.cos(J.r*1.7))+1),F.restore()}M(),window.__game={id:i.id,entries:o.map(F=>F.id),progress:t,get run(){return g},play:F=>{const L=o.find(Y=>Y.id===F);return L&&H(L),!!L},screen:()=>d,setSpeed:F=>{at=F>0?F:1},state:()=>{var F;return(F=g==null?void 0:g.state)!=null?F:null},busy:()=>{var F;return!!((F=g==null?void 0:g.busy)!=null&&F.call(g))},tapTarget:()=>{var L;const F=(L=g==null?void 0:g.hintTarget)==null?void 0:L.call(g);return F?{x:s.offX+F.x*s.scale,y:s.offY+F.y*s.scale}:null},tapPath:()=>{var L;const F=(L=g==null?void 0:g.hintPath)==null?void 0:L.call(g);return F&&F.length?F.map(Y=>({x:s.offX+Y.x*s.scale,y:s.offY+Y.y*s.scale})):null}}}const ii={on:!1},hl='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5" width="3.8" height="14" rx="1.4" fill="currentColor"/><rect x="13.7" y="5" width="3.8" height="14" rx="1.4" fill="currentColor"/></svg>',yn=(i,t="")=>{const e=document.createElement("div");return e.className=i,e.innerHTML=t,e};function ji(i,t,e){const n=document.createElement("button");return n.type="button",n.className=i,n.innerHTML=t,n.addEventListener("click",r=>{r.stopPropagation(),e()}),n}function ph(i,t){var r,s;ii.on=!1;const e=i.querySelector(".hud-title");e&&(e.innerHTML=`<span>第 ${(r=t.levelId)!=null?r:""} 关</span>`);const n=i.querySelector(".b-home");if(n){const a=n.cloneNode(!1);a.classList.add("rc-pause"),a.innerHTML=hl,a.setAttribute("aria-label","暂停"),a.addEventListener("click",o=>{o.stopPropagation(),mh(i,t)}),n.remove(),i.append(a)}(s=i.querySelector(".hud-right"))==null||s.remove(),Pi.reset()}function mh(i,t){if(i.querySelector(".rc-shade"))return;ii.on=!0;const e=yn("rc-shade"),n=()=>{e.remove(),ii.on=!1},r=yn("rc-card",`<div class="rc-card-head">${hl}<b>暂停</b></div>`),s=yn("rc-row"),a=ji("rc-small",`${Zt(t.soundOn()?"sound":"mute")}<span>声音</span>`,()=>{t.sound(),a.innerHTML=`${Zt(t.soundOn()?"sound":"mute")}<span>声音</span>`});s.append(ji("rc-small",`${Zt("restart")}<span>重来</span>`,()=>{ii.on=!1,t.restart()}),ji("rc-small",`${Zt("hint")}<span>提示</span>`,()=>{n(),t.hint()}),ji("rc-small",`${Zt("grid")}<span>选关</span>`,()=>{ii.on=!1,t.levels()}),a),r.append(s,ji("big primary rc-go",`${Zt("play")}<span>继续</span>`,n)),e.append(r),e.addEventListener("click",o=>{o.target===e&&n()}),i.append(e)}function gh(i,t,e){var o;const n=i.querySelector(".result");if(!n||(n.prepend(yn("rc-ribbon",`<b>${t.won?"胜利":"失败"}</b>`)),!t.won))return;e.length&&((o=n.querySelector(".stars-big"))==null||o.after(yn("rc-stats",e.map(c=>`<div class="rc-slot">${c.icon}<b>${c.value}</b><span>${c.label}</span></div>`).join(""))));const r=n.querySelector(".acts"),s=n.querySelector(".b-next"),a=n.querySelector(".b-levels");if(r&&s&&a){a.className="big rc-back b-levels",a.innerHTML=`${Zt("back")}<span>返回</span>`;const c=yn("rc-acts");c.append(a,s),r.prepend(c)}}const Pi={last:new Map,reset(){this.last.clear()},set(i,t,e){const n=`${i}.${t}`;if(this.last.get(n)===e)return;const r=document.getElementById(i);r&&(this.last.set(n,e),t==="text"?r.textContent=e:t==="width"?r.style.width=e:t==="show"?r.classList.toggle("on",e==="1"):(r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop")))}};function _h(i,t){const e=yn("rc-prog",`<div class="rc-track"><i id="rc-prog"></i></div><span class="rc-goal">${t}</span>`);e.id="rc-progbox";const n=yn("rc-bossbar",`<span class="rc-goal">${t}</span><div class="rc-track"><i id="rc-bosshp"></i><b id="rc-bossnum"></b></div>`);n.id="rc-bossbar",i.append(e,n)}function vh(i,t){Pi.set("rc-progbox","show","1"),Pi.set("rc-prog","width",`${Math.round(Math.max(0,Math.min(1,i))*200)/2}%`),Pi.set("rc-bossbar","show","0")}const Uo='<svg viewBox="0 0 40 24" aria-hidden="true"><g transform="rotate(-32 20 12)"><rect x="3" y="7" width="34" height="11" rx="2.2" fill="#f2c45a" stroke="#6b4a1c" stroke-width="2"/><rect x="5" y="8.6" width="30" height="3" rx="1.2" fill="#ffe08a"/><path d="M12 14h9M25 12.5h6" stroke="#c98a2e" stroke-width="1.4" stroke-linecap="round"/></g></svg>',xh='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h10v5.5a5 5 0 0 1-10 0z" fill="#ffd34d" stroke="#6b4a1c" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 5.5H4.2v1.2A3.3 3.3 0 0 0 7.5 10M17 5.5h2.8v1.2A3.3 3.3 0 0 1 16.5 10" fill="none" stroke="#6b4a1c" stroke-width="1.6"/><path d="M12 14v3.5M8 20.5h8l-1-3h-6z" fill="#ffd34d" stroke="#6b4a1c" stroke-width="1.6" stroke-linejoin="round"/><path d="M9.5 5.5v3" stroke="#fff3c2" stroke-width="1.4" stroke-linecap="round"/></svg>',Mh='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18V4h-4.5v4.3H12v4.3H7.5v4.3H3z" fill="#7fd17a" stroke="#24502a" stroke-width="1.6" stroke-linejoin="round"/></svg>',Sh='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3.5" fill="#b36bff" stroke="#3e1f6b" stroke-width="1.6"/><path d="M8 9.5l8 5M16 9.5l-8 5" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/></svg>';function yh(i,t,e){var n,r,s,a,o;if(i==="play"){ph(t,e),_h(t,xh);const c=yn("sr-planks",`<i>${Uo}</i><b id="sr-n">0</b>`);c.id="sr-planks",t.append(c)}else if(i==="result"){const c=e.run;gh(t,e,[{icon:Uo,value:String(Math.max(0,Math.floor((r=(n=c==null?void 0:c.sim)==null?void 0:n.n)!=null?r:0))),label:"剩下的木板"},{icon:Mh,value:String((a=(s=c==null?void 0:c.sim)==null?void 0:s.climbed)!=null?a:0),label:"爬的台阶"},{icon:Sh,value:`×${(o=c==null?void 0:c.prize)!=null?o:1}`,label:"奖励"}])}}const Wn=i=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${i}</svg>`,$e='fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"',xn={plank:Wn(`<path d="M3 8h18v3H3zM3 13h18v3H3z" ${$e}/><path d="M7 8v3M15 13v3" ${$e}/>`),stairs:Wn(`<path d="M3 20h5v-5h5v-5h5V5h3" ${$e}/>`),gate:Wn(`<path d="M4 21V5.5a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 20 5.5V21" ${$e}/><path d="M9 16l6-7M9.5 9.5h.01M14.5 15.5h.01" ${$e}/>`),saw:Wn(`<circle cx="12" cy="12" r="6" ${$e}/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2" ${$e}/>`),rival:Wn(`<circle cx="9" cy="5" r="2" ${$e}/><path d="M9 7l-1 6 3 3v5M8 13l-3 4M9 9l4 2M16 4v9M16 4l4 2-4 2" ${$e}/>`),drag:Wn(`<path d="M5 9l-3 3 3 3M19 9l3 3-3 3M2.5 12h19" ${$e}/>`),cup:Wn(`<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3M12 13v4M8 20h8" ${$e}/>`)},Eh={"1-1":[1,0,1,0],"1-2":[0,1,0,1],"1-3":[2,1,0,1,2],"1-4":[0,1,0,1,0],"1-5":[0,1,0,2,1],"1-6":[1,0,1,0,1],"1-7":[0,1,2,0,1,0],"1-8":[1,0,1,0,1],"2-1":[1,0,1,0],"2-2":[0,1,0,1],"2-3":[0,1,2,1],"2-4":[1,0,1,0],"2-5":[1,0,1,0,1],"2-6":[0,1,0,1,0],"2-7":[1,0,1,0,1],"2-8":[1,0,1,0,1],"3-1":[1,0,0,0,1],"3-2":[0,0,1,1,1],"3-3":[0,0,1,0,0,1],"3-4":[1,1,0,0,1],"3-5":[0,2,1,1,0,0],"3-6":[1,0,0,1,1,0],"3-7":[1,0,0,1,1,1],"3-8":[1,0,0,0,1,1,0],"4-1":[1,0,1],"4-2":[0,0,0,0],"4-3":[0,1,2,0],"4-4":[1,0,0,1],"4-5":[1,0,0,0],"4-6":[0,1,2,1],"4-7":[1,1,0,1,1],"4-8":[0,1,1,0,1],"5-1":[1,0,1],"5-2":[0,1,0,1],"5-3":[2,0,0,2,0],"5-4":[0,0,1,0,1],"5-5":[1,0,1,0,1],"5-6":[0,1,2,0,0],"5-7":[1,1,0,1,0],"5-8":[1,0,0,0,1,0],"6-1":[1,0,0,0,1],"6-2":[1,0,0,1],"6-3":[0,1,1,0,2],"6-4":[1,1,0,1,0],"6-5":[1,0,0,1,1],"6-6":[1,2,2,1],"6-7":[1,0,0,0,1],"6-8":[0,0,1,0,0,1]},Pt=(i,t,e={})=>({start:i,rows:t,...e}),ca=[{name:"铺路",icon:xn.plank,levels:[Pt(4,["p 4 9","h 6","p 10 5","h 8","p 6 14","h 10","p 12 8"],{tip:["plank","捡木板，铺过断口"]}),Pt(3,["p 8 4","h 6","p 5 11","h 9","p 12 7","h 12","p 9 15","h 10"]),Pt(5,["p 6 . 12","h 8","p . 10 .","p 14 . 6","h 14","p 9 16 .","h 12","p . 10 18"]),Pt(2,["p 6 3","h 5","p 4 10","p 12 6","h 14","p 8 15","h 12","p 18 10","h 16"]),Pt(6,["p 10 . 4","h 9","p . 12 .","h 10","p 15 . 8","p 6 . 14","h 18","p . 20 .","h 14"]),Pt(4,["p 5 12","h 8","p 14 6","h 14","p 8 16","h 17","p 18 9","h 21","p 12 22"]),Pt(3,["p 9 . 5","h 7","p . 12 .","p 6 . 15","h 16","p 18 . 10","h 12","p . 20 .","h 18","p 25 . 12"]),Pt(5,["p 7 13","h 10","p 15 8","h 12","p 10 18","h 14","p 20 12","h 18","p 14 24","h 16"])]},{name:"台阶",icon:xn.stairs,levels:[Pt(6,["p 6 10","u 6","p 12 6","h 8","p 8 14","u 10","p 12 9"],{tip:["stairs","木板搭台阶上高台"]}),Pt(4,["p 10 5","u 8","p 6 12","h 10","p 14 8","u 12","p 10 16","h 10"]),Pt(5,["p 12 . 6","h 9","p . 14 .","u 12","p 8 . 16","h 14","p . 18 .","u 14"]),Pt(8,["u 6","p 6 12","h 10","p 14 7","u 12","p 9 18","h 14","p 20 10","u 12"]),Pt(4,["p 8 14","u 10","p 16 6","h 12","p 10 18","u 14","p 20 12","h 16","p 14 22"]),Pt(6,["p 12 . 5","u 9","p . 15 .","h 12","p 18 . 9","u 16","p . 20 .","h 14","p 22 . 14"]),Pt(3,["p 7 12","h 8","p 14 9","u 16","p 10 18","h 19","p 20 12","u 22","p 16 24"]),Pt(5,["p 10 16","u 12","p 18 9","h 19","p 12 20","u 22","p 22 14","h 24","p 16 26","u 19"])]},{name:"百分比",icon:xn.gate,levels:[Pt(10,["p 6 10","g +50 +5p","h 10","p 12 8","g x2 +10p","h 16","p 10 14"],{tip:["gate","百分比门：越多越划算"]}),Pt(8,["g +5p +50","p 10 6","h 10","g -30 +8p","p 8 14","h 22","g x2 +20p","u 26"]),Pt(6,["p 12 6","g +100 +10p","h 12","p 10 16","g -20 /2","u 22","p 18 10","g +50 +15p"]),Pt(12,["g -50 +5p","p 8 14","h 12","g x2 +12p","p 16 9","u 16","g -30 -10p","h 18"]),Pt(5,["p 10 . 6","g +5p +50 x2","h 14","p . 14 .","g /2 +30 -10p","u 16","p 20 . 12","g +50 +20p ."]),Pt(8,["p 6 12","g +100 +6p","h 14","p 16 10","g -40 +4p","u 22","p 12 20","g x2 +25p","h 35"]),Pt(10,["g +20 +4p","p 12 7","u 12","g -25 /2","p 10 18","h 26","g x3 +30p","p 14 22","u 32"]),Pt(6,["p 10 14","g +50 +6p","h 14","p 16 10","g x2 +15p -20","u 29","p 14 24","g -50 +10p","h 32","g x2 +30p"])]},{name:"锯子",icon:xn.saw,levels:[Pt(8,["p 8 12","s .1","h 10","p 14 8","s 1.","h 12","p 10 16"],{tip:["saw","锯子会锯掉一半木板"]}),Pt(6,["p 10 6","s 1.",">-6 p 12 8","h 12","g +50 +8p","s .1","p 16 10","h 30"]),Pt(5,["p 12 . 6","s 1.1","p . 14 .","h 14","p 8 . 18","s .1.","u 14","p 20 . 12","h 16"]),Pt(10,["s .1","p 6 14","h 12","g x2 +10p","s 1.","p 18 10","u 24","p 12 22","s .1","h 27"]),Pt(4,["p 8 14","s 1.","h 10","p 16 9","s .1","g +50 +10p","u 24","p 20 12","s 1.","h 27"]),Pt(8,["p 14 . 6","s 1.1","g . x2 .","h 16","p 10 . 18","s .11","u 16","p . 22 .","h 18"]),Pt(6,["g +50 +5p","p 10 15","s .1","h 14","p 18 10","s 1.","g -30 +10p","u 18","p 14 24","h 20"]),Pt(10,["p 12 8","s .1","h 12","g x2 +12p","s 1.","p 16 22","u 27","s .1","p 24 14","h 33","g +50 +20p"])]},{name:"对手",icon:xn.rival,levels:[Pt(6,["r 0 1 0","p 6 12","h 8","p 14 8","h 10","p 10 16","h 10"],{tip:["rival","对手先拿它那道，终点要比它高"]}),Pt(5,["r 1 0 1 0","p 12 7","h 10","p 9 14","u 12","p 16 10","h 12","p 12 18"]),Pt(8,["r 1 2 0 1","p 6 14 9","h 12","p 16 8 12","g +50 +10p","p 10 12 18","u 16","p 20 14 9","h 14"],{}),Pt(6,["r 1 1 0 0","p 14 10","s .1","p 12 16","h 14","p 18 12","g x2 +12p","p 14 20","u 18"]),Pt(4,["r 0 1 0 1 0","p 10 14","h 10","p 16 9","u 12","p 12 18","s 1.","p 20 14","h 16","p 16 22"]),Pt(8,["r 2 0 1 2","p 12 8 16","h 14","p 10 18 12","g +50 . x2","p 20 14 10","u 18","p 14 12 22","h 18"]),Pt(6,["r 0 1 0 1","g +50 +6p","p 10 16","h 12","p 18 12","s .1","p 14 20","u 18","p 22 16","h 20"]),Pt(10,["r 0 1 1 0 1","p 14 10","h 12","p 12 18","g x2 +10p","p 20 14","u 18","p 16 24","s 1.","p 26 18","h 22"])]},{name:"登顶",icon:xn.stairs,levels:[Pt(10,["p 12 18","g x2 +10p","h 14","p 20 12","u 16","g +50 +20p","p 16 24"],{tip:["stairs","剩得越多，爬得越高"]}),Pt(8,["r 0 1 0","p 10 16","s .1","h 14","p 18 12","g x2 +15p","u 18","p 14 22","h 18"]),Pt(6,["p 14 . 8","s 1.1","g +50 x2 +10p","h 16","p . 18 .","u 18","p 22 . 14","g -30 . +20p","h 20"]),Pt(12,["r 0 1 0 1","g -30 +8p","p 12 18","u 16","p 20 14","s 1.","h 18","p 16 24","g x2 +20p","u 20"]),Pt(8,["p 10 16","g +100 +10p","s .1","h 18","p 20 14","u 30","g /2 +30p","p 18 26","h 33"]),Pt(6,["r 2 1 0","p 12 18 10","h 14","g x2 . +12p","p 16 12 22","s 1.1","u 20","p 24 16 12","h 22"]),Pt(10,["p 14 20","s .1","g +50 +10p","h 18","p 22 14","u 22","g x2 +25p","s 1.","p 18 28","h 40"]),Pt(10,["r 1 0 1 0","p 16 10","g x2 +12p","h 16","p 12 22","s .1","u 20","p 26 16","g +50 +30p","h 40","p 20 30","h 36"])]}];ca.forEach((i,t)=>i.levels.forEach((e,n)=>{e.route=Eh[`${t+1}-${n+1}`]}));const ke=(i,t=0,e=1)=>i<t?t:i>e?e:i,os={outCubic:i=>1-(1-i)**3,inCubic:i=>i*i*i,inOutSine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+(1.70158+1)*(i-1)**3+1.70158*(i-1)**2,bump:i=>Math.sin(Math.PI*ke(i))};function bh(i,t,e,n,r,s){s=Math.max(0,Math.min(s,n/2,r/2)),i.beginPath(),i.moveTo(t+s,e),i.arcTo(t+n,e,t+n,e+r,s),i.arcTo(t+n,e+r,t,e+r,s),i.arcTo(t,e+r,t,e,s),i.arcTo(t,e,t+n,e,s),i.closePath()}function Oi(i,t,e,n,r,s,a,o,c=2){bh(i,t,e,n,r,s),i.fillStyle=a,i.fill(),o&&(i.lineWidth=c,i.strokeStyle=o,i.stroke())}function Li(i,t,e,n,r,s,a="#221f2e",o="'Game Display', 'PingFang SC', sans-serif"){i.font=`${Math.round(r)}px ${o}`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=Math.max(2,r*.18),i.strokeStyle=a,i.strokeText(t,e,n+r*.04),i.fillStyle=s,i.fillText(t,e,n+r*.04)}function No(i){const t=Math.abs(i);return t<1e4?String(Math.round(i)):t<1e8?`${Fo(i/1e4)}万`:`${Fo(i/1e8)}亿`}const Fo=i=>Math.abs(i)>=100?String(Math.round(i)):i.toFixed(1).replace(/\.0$/,"");class Th{constructor(){this.bits=[],this.floats=[],this.shakeAmt=0,this.ox=0,this.oy=0}burst(t,e,n,r=14,s=160,a={}){var c,l,h;const o=Array.isArray(n)?n:[n];for(let f=0;f<r;f++){const d=Math.random()*Math.PI*2,p=s*(.4+Math.random()*.8);this.bits.push({x:t,y:e,vx:Math.cos(d)*p,vy:Math.sin(d)*p-s*.3,r:((c=a.size)!=null?c:4)*(.6+Math.random()*.8),life:((l=a.life)!=null?l:.6)*(.7+Math.random()*.6),age:0,color:o[f%o.length],grav:(h=a.grav)!=null?h:420,square:!!a.square})}}float(t,e,n,r="#fff",s=20,a=.9){this.floats.push({x:t,y:e,text:n,color:r,size:s,age:0,life:a,rise:40+s})}shake(t){this.shakeAmt=Math.max(this.shakeAmt,t)}step(t){for(const n of this.bits)n.age+=t,n.vy+=n.grav*t,n.vx*=1-1.5*t,n.x+=n.vx*t,n.y+=n.vy*t;this.bits=this.bits.filter(n=>n.age<n.life);for(const n of this.floats)n.age+=t;this.floats=this.floats.filter(n=>n.age<n.life),this.shakeAmt=Math.max(0,this.shakeAmt-t*40);const e=this.shakeAmt;this.ox=e?(Math.random()*2-1)*e:0,this.oy=e?(Math.random()*2-1)*e:0}draw(t){for(const e of this.bits){const n=1-e.age/e.life;t.globalAlpha=ke(n*1.5),t.fillStyle=e.color,e.square?t.fillRect(e.x-e.r,e.y-e.r,e.r*2,e.r*2):(t.beginPath(),t.arc(e.x,e.y,e.r*(.5+n*.5),0,Math.PI*2),t.fill())}t.globalAlpha=1;for(const e of this.floats){const n=e.age/e.life,r=n<.18?os.outBack(n/.18):1;t.globalAlpha=n>.7?ke((1-n)/.3):1,Li(t,e.text,e.x,e.y-os.outCubic(n)*e.rise,e.size*(.6+.4*r),e.color)}t.globalAlpha=1}get busy(){return this.bits.length>0||this.floats.length>0}}const io="170",wh=0,Oo=1,Ah=2,ul=1,Ch=2,vn=3,kn=0,Ce=1,an=2,Bn=0,Di=1,Bo=2,zo=3,ko=4,Rh=5,ei=100,Ph=101,Lh=102,Dh=103,Ih=104,Uh=200,Nh=201,Fh=202,Oh=203,la=204,ha=205,Bh=206,zh=207,kh=208,Hh=209,Vh=210,Gh=211,Wh=212,Xh=213,qh=214,ua=0,fa=1,da=2,Bi=3,pa=4,ma=5,ga=6,_a=7,ro=0,$h=1,Yh=2,zn=0,Kh=1,Jh=2,Zh=3,jh=4,Qh=5,tu=6,eu=7,fl=300,zi=301,ki=302,va=303,xa=304,ps=306,cs=1e3,On=1001,Ma=1002,Re=1003,nu=1004,wr=1005,on=1006,Es=1007,ri=1008,Tn=1009,dl=1010,pl=1011,_r=1012,so=1013,ai=1014,en=1015,Mr=1016,ao=1017,oo=1018,Hi=1020,ml=35902,gl=1021,_l=1022,We=1023,vl=1024,xl=1025,Ii=1026,Vi=1027,ms=1028,co=1029,Ml=1030,lo=1031,ho=1033,ts=33776,es=33777,ns=33778,is=33779,Sa=35840,ya=35841,Ea=35842,ba=35843,Ta=36196,wa=37492,Aa=37496,Ca=37808,Ra=37809,Pa=37810,La=37811,Da=37812,Ia=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,ka=37820,Ha=37821,rs=36492,Va=36494,Ga=36495,Sl=36283,Wa=36284,Xa=36285,qa=36286,iu=3200,ru=3201,uo=0,su=1,Fn="",he="srgb",Xi="srgb-linear",gs="linear",jt="srgb",hi=7680,Ho=519,au=512,ou=513,cu=514,yl=515,lu=516,hu=517,uu=518,fu=519,Vo=35044,El=35048,Go="300 es",Mn=2e3,ls=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bs=Math.PI/180,$a=180/Math.PI;function Sr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function du(i,t){return(i%t+t)%t}function Ts(i,t,e){return(1-e)*i+e*t}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,r,s,a,o,c,l){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],u=r[6],S=r[1],E=r[4],v=r[7],R=r[2],T=r[5],A=r[8];return s[0]=a*_+o*S+c*R,s[3]=a*m+o*E+c*T,s[6]=a*u+o*v+c*A,s[1]=l*_+h*S+f*R,s[4]=l*m+h*E+f*T,s[7]=l*u+h*v+f*A,s[2]=d*_+p*S+g*R,s[5]=d*m+p*E+g*T,s[8]=d*u+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*s,p=l*s-a*c,g=e*f+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*l-h*n)*_,t[2]=(o*n-r*a)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ws.makeScale(t,e)),this}rotate(t){return this.premultiply(ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ws=new It;function bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pu(){const i=vr("canvas");return i.style.display="block",i}const Wo={};function hr(i){i in Wo||(Wo[i]=!0,console.warn(i))}function mu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function gu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _u(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fn?gs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xo=[.64,.33,.3,.6,.15,.06],qo=[.2126,.7152,.0722],$o=[.3127,.329],Yo=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ko=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Xi]:{primaries:Xo,whitePoint:$o,transfer:gs,toXYZ:Yo,fromXYZ:Ko,luminanceCoefficients:qo,workingColorSpaceConfig:{unpackColorSpace:he},outputColorSpaceConfig:{drawingBufferColorSpace:he}},[he]:{primaries:Xo,whitePoint:$o,transfer:jt,toXYZ:Yo,fromXYZ:Ko,luminanceCoefficients:qo,outputColorSpaceConfig:{drawingBufferColorSpace:he}}});let ui;class vu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=vr("canvas")),ui.width=t.width,ui.height=t.height;const n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=En(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xu=0;class Tl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(As(r[a].image)):s.push(As(r[a]))}else s=As(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function As(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mu=0;class ve extends qi{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=On,r=On,s=on,a=ri,o=We,c=Tn,l=ve.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Sr(),this.name="",this.source=new Tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=fl;ve.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,r=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(p+1)/2,R=(u+1)/2,T=(h+d)/4,A=(f+_)/4,P=(g+m)/4;return E>v&&E>R?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=T/n,s=A/n):v>R?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=P/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=A/s,r=P/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Su extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ve(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Su{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wl extends ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yu extends ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==d||l!==p||h!==g){let m=1-o;const u=c*d+l*p+h*g+f*_,S=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const R=Math.sqrt(E),T=Math.atan2(R,u*S);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const v=o*S;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,f=f*m+_*v,m===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=R,l*=R,h*=R,f*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*f+c*p-l*d,t[e+1]=c*g+h*d+l*f-o*p,t[e+2]=l*g+h*p+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*p*g,this._y=l*p*f-d*h*g,this._z=l*h*g+d*p*f,this._w=l*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+l*p*g,this._y=l*p*f-d*h*g,this._z=l*h*g-d*p*f,this._w=l*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-l*p*g,this._y=l*p*f+d*h*g,this._z=l*h*g+d*p*f,this._w=l*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-l*p*g,this._y=l*p*f+d*h*g,this._z=l*h*g-d*p*f,this._w=l*h*f+d*p*g;break;case"YZX":this._x=d*h*f+l*p*g,this._y=l*p*f+d*h*g,this._z=l*h*g-d*p*f,this._w=l*h*f-d*p*g;break;case"XZY":this._x=d*h*f-l*p*g,this._y=l*p*f-d*h*g,this._z=l*h*g+d*p*f,this._w=l*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),h=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cs.copy(this).projectOnVector(t),this.sub(Cs)}reflect(t){return this.sub(Cs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new D,Jo=new nn;class ci{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(s,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),Cr.subVectors(this.max,tr),fi.subVectors(t.a,tr),di.subVectors(t.b,tr),pi.subVectors(t.c,tr),Cn.subVectors(di,fi),Rn.subVectors(pi,di),Xn.subVectors(fi,pi);let e=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Xn.z,Xn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Xn.z,0,-Xn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Xn.y,Xn.x,0];return!Rs(e,fi,di,pi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!Rs(e,fi,di,pi,Cr))?!1:(Rr.crossVectors(Cn,Rn),e=[Rr.x,Rr.y,Rr.z],Rs(e,fi,di,pi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new D,new D,new D,new D,new D,new D,new D,new D],Ye=new D,Ar=new ci,fi=new D,di=new D,pi=new D,Cn=new D,Rn=new D,Xn=new D,tr=new D,Cr=new D,Rr=new D,qn=new D;function Rs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){qn.fromArray(i,s);const o=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),c=t.dot(qn),l=e.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Eu=new ci,er=new D,Ps=new D;class yr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ps.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Ps)),this.expandByPoint(er.copy(t.center).sub(Ps))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new D,Ls=new D,Pr=new D,Pn=new D,Ds=new D,Lr=new D,Is=new D;class bu{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ls.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Ls);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Pr),o=Pn.dot(this.direction),c=-Pn.dot(Pr),l=Pn.lengthSq(),h=Math.abs(1-a*a);let f,d,p,g;if(h>0)if(f=a*c-o,d=a*o-c,g=s*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ls).addScaledVector(Pr,d),p}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),r=dn.dot(dn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,r,s){Ds.subVectors(e,t),Lr.subVectors(n,t),Is.crossVectors(Ds,Lr);let a=this.direction.dot(Is),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const c=o*this.direction.dot(Lr.crossVectors(Pn,Lr));if(c<0)return null;const l=o*this.direction.dot(Ds.cross(Pn));if(l<0||c+l>a)return null;const h=-o*Pn.dot(Is);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(t,e,n,r,s,a,o,c,l,h,f,d,p,g,_,m){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,h,f,d,p,g,_,m)}set(t,e,n,r,s,a,o,c,l,h,f,d,p,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/mi.setFromMatrixColumn(t,0).length(),s=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*h,p=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,p=c*f,g=l*h,_=l*f;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,p=c*f,g=l*h,_=l*f;e[0]=d-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,p=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*f,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+_,e[5]=a*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tu,t,wu)}lookAt(t,e,n){const r=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Ln.crossVectors(n,Fe),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Ln.crossVectors(n,Fe)),Ln.normalize(),Dr.crossVectors(Fe,Ln),r[0]=Ln.x,r[4]=Dr.x,r[8]=Fe.x,r[1]=Ln.y,r[5]=Dr.y,r[9]=Fe.y,r[2]=Ln.z,r[6]=Dr.z,r[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],S=n[3],E=n[7],v=n[11],R=n[15],T=r[0],A=r[4],P=r[8],x=r[12],M=r[1],C=r[5],H=r[9],k=r[13],q=r[2],I=r[6],z=r[10],$=r[14],G=r[3],it=r[7],at=r[11],pt=r[15];return s[0]=a*T+o*M+c*q+l*G,s[4]=a*A+o*C+c*I+l*it,s[8]=a*P+o*H+c*z+l*at,s[12]=a*x+o*k+c*$+l*pt,s[1]=h*T+f*M+d*q+p*G,s[5]=h*A+f*C+d*I+p*it,s[9]=h*P+f*H+d*z+p*at,s[13]=h*x+f*k+d*$+p*pt,s[2]=g*T+_*M+m*q+u*G,s[6]=g*A+_*C+m*I+u*it,s[10]=g*P+_*H+m*z+u*at,s[14]=g*x+_*k+m*$+u*pt,s[3]=S*T+E*M+v*q+R*G,s[7]=S*A+E*C+v*I+R*it,s[11]=S*P+E*H+v*z+R*at,s[15]=S*x+E*k+v*$+R*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*p-n*c*p)+_*(+e*c*p-e*l*d+s*a*d-r*a*p+r*l*h-s*c*h)+m*(+e*l*f-e*o*p-s*a*f+n*a*p+s*o*h-n*l*h)+u*(-r*o*h-e*c*f+e*o*d+r*a*f-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],u=t[15],S=f*m*l-_*d*l+_*c*p-o*m*p-f*c*u+o*d*u,E=g*d*l-h*m*l-g*c*p+a*m*p+h*c*u-a*d*u,v=h*_*l-g*f*l+g*o*p-a*_*p-h*o*u+a*f*u,R=g*f*c-h*_*c-g*o*d+a*_*d+h*o*m-a*f*m,T=e*S+n*E+r*v+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=S*A,t[1]=(_*d*s-f*m*s-_*r*p+n*m*p+f*r*u-n*d*u)*A,t[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*u+n*c*u)*A,t[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*p-n*c*p)*A,t[4]=E*A,t[5]=(h*m*s-g*d*s+g*r*p-e*m*p-h*r*u+e*d*u)*A,t[6]=(g*c*s-a*m*s-g*r*l+e*m*l+a*r*u-e*c*u)*A,t[7]=(a*d*s-h*c*s+h*r*l-e*d*l-a*r*p+e*c*p)*A,t[8]=v*A,t[9]=(g*f*s-h*_*s-g*n*p+e*_*p+h*n*u-e*f*u)*A,t[10]=(a*_*s-g*o*s+g*n*l-e*_*l-a*n*u+e*o*u)*A,t[11]=(h*o*s-a*f*s-h*n*l+e*f*l+a*n*p-e*o*p)*A,t[12]=R*A,t[13]=(h*_*r-g*f*r+g*n*d-e*_*d-h*n*m+e*f*m)*A,t[14]=(g*o*r-a*_*r-g*n*c+e*_*c+a*n*m-e*o*m)*A,t[15]=(a*f*r-h*o*r+h*n*c-e*f*c-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,f=o+o,d=s*l,p=s*h,g=s*f,_=a*h,m=a*f,u=o*f,S=c*l,E=c*h,v=c*f,R=n.x,T=n.y,A=n.z;return r[0]=(1-(_+u))*R,r[1]=(p+v)*R,r[2]=(g-E)*R,r[3]=0,r[4]=(p-v)*T,r[5]=(1-(d+u))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+E)*A,r[9]=(m-S)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const a=mi.set(r[4],r[5],r[6]).length(),o=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ke.copy(this);const l=1/s,h=1/a,f=1/o;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=f,Ke.elements[9]*=f,Ke.elements[10]*=f,e.setFromRotationMatrix(Ke),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Mn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,g;if(o===Mn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ls)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Mn){const c=this.elements,l=1/(e-t),h=1/(n-r),f=1/(a-s),d=(e+t)*l,p=(n+r)*h;let g,_;if(o===Mn)g=(a+s)*f,_=-2*f;else if(o===ls)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new D,Ke=new Gt,Tu=new D(0,0,0),wu=new D(1,1,1),Ln=new D,Dr=new D,Fe=new D,Zo=new Gt,jo=new nn;class be{constructor(t=0,e=0,n=0,r=be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jo.setFromEuler(this),this.setFromQuaternion(jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}be.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Au=0;const Qo=new D,gi=new nn,pn=new Gt,Ir=new D,nr=new D,Cu=new D,Ru=new nn,tc=new D(1,0,0),ec=new D(0,1,0),nc=new D(0,0,1),ic={type:"added"},Pu={type:"removed"},_i={type:"childadded",child:null},Us={type:"childremoved",child:null};class xe extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new D,e=new be,n=new nn,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new It}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Qo.copy(t).applyQuaternion(this.quaternion),this.position.add(Qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(nr,Ir,this.up):pn.lookAt(Ir,nr,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(pn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),_i.child=t,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pu),Us.child=t,this.dispatchEvent(Us),Us.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}xe.DEFAULT_UP=new D(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new D,mn=new D,Ns=new D,gn=new D,vi=new D,xi=new D,rc=new D,Fs=new D,Os=new D,Bs=new D,zs=new ae,ks=new ae,Hs=new ae;class tn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Je.subVectors(t,e),r.cross(Je);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Je.subVectors(r,e),mn.subVectors(n,e),Ns.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(mn),c=Je.dot(Ns),l=mn.dot(mn),h=mn.dot(Ns),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return zs.setScalar(0),ks.setScalar(0),Hs.setScalar(0),zs.fromBufferAttribute(t,e),ks.fromBufferAttribute(t,n),Hs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(zs,s.x),a.addScaledVector(ks,s.y),a.addScaledVector(Hs,s.z),a}static isFrontFacing(t,e,n,r){return Je.subVectors(n,e),mn.subVectors(t,e),Je.cross(mn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Je.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;vi.subVectors(r,n),xi.subVectors(s,n),Fs.subVectors(t,n);const c=vi.dot(Fs),l=xi.dot(Fs);if(c<=0&&l<=0)return e.copy(n);Os.subVectors(t,r);const h=vi.dot(Os),f=xi.dot(Os);if(h>=0&&f<=h)return e.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(vi,a);Bs.subVectors(t,s);const p=vi.dot(Bs),g=xi.dot(Bs);if(g>=0&&p<=g)return e.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(xi,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return rc.subVectors(s,r),o=(f-h)/(f-h+(p-g)),e.copy(r).addScaledVector(rc,o);const u=1/(m+_+d);return a=_*u,o=d*u,e.copy(n).addScaledVector(vi,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Vs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=he){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Xt.workingColorSpace){if(t=du(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Vs(a,s,t+1/3),this.g=Vs(a,s,t),this.b=Vs(a,s,t-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(t,e=he){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=he){const n=Cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=he){return Xt.fromWorkingColorSpace(ye.copy(this),t),Math.round(_e(ye.r*255,0,255))*65536+Math.round(_e(ye.g*255,0,255))*256+Math.round(_e(ye.b*255,0,255))}getHexString(t=he){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,r=ye.g,s=ye.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=he){Xt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,r=ye.b;return t!==he?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Ur);const n=Ts(Dn.h,Ur.h,e),r=Ts(Dn.s,Ur.s,e),s=Ts(Dn.l,Ur.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Ut;Ut.NAMES=Cl;let Lu=0;class $i extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Sr(),this.name="",this.blending=Di,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ha,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Er extends $i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new be,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new D,Nr=new xt;class ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vo,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vo&&(t.usage=this.usage),t}}class Rl extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pl extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Du=0;const ze=new Gt,Gs=new xe,Mi=new D,Oe=new ci,ir=new ci,pe=new D;class Ue extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Pl:Rl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Gs.lookAt(t),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Oe.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Oe.min,ir.min),Oe.expandByPoint(pe),pe.addVectors(Oe.max,ir.max),Oe.expandByPoint(pe)):(Oe.expandByPoint(ir.min),Oe.expandByPoint(ir.max))}Oe.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)pe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)pe.fromBufferAttribute(o,l),c&&(Mi.fromBufferAttribute(t,l),pe.add(Mi)),r=Math.max(r,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new D,c[P]=new D;const l=new D,h=new D,f=new D,d=new xt,p=new xt,g=new xt,_=new D,m=new D;function u(P,x,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,x),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),h.sub(l),f.sub(l),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(_),o[x].add(_),o[M].add(_),c[P].add(m),c[x].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,x=S.length;P<x;++P){const M=S[P],C=M.start,H=M.count;for(let k=C,q=C+H;k<q;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new D,v=new D,R=new D,T=new D;function A(P){R.fromBufferAttribute(r,P),T.copy(R);const x=o[P];E.copy(x),E.sub(R.multiplyScalar(R.dot(x))).normalize(),v.crossVectors(T,x);const C=v.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,x=S.length;P<x;++P){const M=S[P],C=M.start,H=M.count;for(let k=C,q=C+H;k<q;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,f=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let u=0;u<h;u++)d[g++]=l[p++]}return new ce(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];h.push(p.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new Gt,$n=new bu,Fr=new yr,ac=new D,Or=new D,Br=new D,zr=new D,Ws=new D,kr=new D,oc=new D,Hr=new D;class Te extends xe{constructor(t=new Ue,e=new Er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){kr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Ws.fromBufferAttribute(f,t),a?kr.addScaledVector(Ws,h):kr.addScaledVector(Ws.sub(e),h))}e.add(kr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),$n.copy(t.ray).recast(t.near),!(Fr.containsPoint($n.origin)===!1&&($n.intersectSphere(Fr,ac)===null||$n.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(sc.copy(s).invert(),$n.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],u=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,R=E;v<R;v+=3){const T=o.getX(v),A=o.getX(v+1),P=o.getX(v+2);r=Vr(this,u,t,n,l,h,f,T,A,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const S=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);r=Vr(this,a,t,n,l,h,f,S,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],u=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,R=E;v<R;v+=3){const T=v,A=v+1,P=v+2;r=Vr(this,u,t,n,l,h,f,T,A,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const S=m,E=m+1,v=m+2;r=Vr(this,a,t,n,l,h,f,S,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Iu(i,t,e,n,r,s,a,o){let c;if(t.side===Ce?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===kn,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Hr);return l<e.near||l>e.far?null:{distance:l,point:Hr.clone(),object:i}}function Vr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Or),i.getVertexPosition(c,Br),i.getVertexPosition(l,zr);const h=Iu(i,t,e,n,Or,Br,zr,oc);if(h){const f=new D;tn.getBarycoord(oc,Or,Br,zr,f),r&&(h.uv=tn.getInterpolatedAttribute(r,o,c,l,f,new xt)),s&&(h.uv1=tn.getInterpolatedAttribute(s,o,c,l,f,new xt)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,c,l,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};tn.getNormal(Or,Br,zr,d.normal),h.face=d,h.barycoord=f}return h}class Ae extends Ue{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function g(_,m,u,S,E,v,R,T,A,P,x){const M=v/A,C=R/P,H=v/2,k=R/2,q=T/2,I=A+1,z=P+1;let $=0,G=0;const it=new D;for(let at=0;at<z;at++){const pt=at*C-k;for(let Tt=0;Tt<I;Tt++){const qt=Tt*M-H;it[_]=qt*S,it[m]=pt*E,it[u]=q,l.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[u]=T>0?1:-1,h.push(it.x,it.y,it.z),f.push(Tt/A),f.push(1-at/P),$+=1}}for(let at=0;at<P;at++)for(let pt=0;pt<A;pt++){const Tt=d+pt+I*at,qt=d+pt+I*(at+1),Z=d+(pt+1)+I*(at+1),nt=d+(pt+1)+I*at;c.push(Tt,qt,nt),c.push(qt,Z,nt),G+=6}o.addGroup(p,G,x),p+=G,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function we(i){const t={};for(let e=0;e<i.length;e++){const n=Gi(i[e]);for(const r in n)t[r]=n[r]}return t}function Uu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ll(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Nu={clone:Gi,merge:we};var Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends $i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Uu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new D,cc=new xt,lc=new xt;class Ve extends Dl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,cc,lc),e.subVectors(lc,cc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Si=-90,yi=1;class Bu extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ve(Si,yi,t,e);r.layers=this.layers,this.add(r);const s=new Ve(Si,yi,t,e);s.layers=this.layers,this.add(s);const a=new Ve(Si,yi,t,e);a.layers=this.layers,this.add(a);const o=new Ve(Si,yi,t,e);o.layers=this.layers,this.add(o);const c=new Ve(Si,yi,t,e);c.layers=this.layers,this.add(c);const l=new Ve(Si,yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Il extends ve{constructor(t,e,n,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zu extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Il(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ae(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Bn});s.uniforms.tEquirect.value=e;const a=new Te(r,s),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=on),new Bu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Xs=new D,ku=new D,Hu=new It;class Qn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Xs.subVectors(n,e).cross(ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hu.getNormalMatrix(t),r=this.coplanarPoint(Xs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new yr,Gr=new D;class fo{constructor(t=new Qn,e=new Qn,n=new Qn,r=new Qn,s=new Qn,a=new Qn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],u=r[12],S=r[13],E=r[14],v=r[15];if(n[0].setComponents(c-s,d-l,m-p,v-u).normalize(),n[1].setComponents(c+s,d+l,m+p,v+u).normalize(),n[2].setComponents(c+a,d+h,m+g,v+S).normalize(),n[3].setComponents(c-a,d-h,m-g,v-S).normalize(),n[4].setComponents(c-o,d-f,m-_,v-E).normalize(),e===Mn)n[5].setComponents(c+o,d+f,m+_,v+E).normalize();else if(e===ls)n[5].setComponents(o,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Gr.x=r.normal.x>0?t.max.x:t.min.x,Gr.y=r.normal.y>0?t.max.y:t.min.y,Gr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ul(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Vu(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Vn extends Ue{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=t/o,d=e/c,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const S=u*d-a;for(let E=0;E<l;E++){const v=E*f-s;g.push(v,-S,0),_.push(0,0,1),m.push(E/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<o;S++){const E=S+l*u,v=S+l*(u+1),R=S+1+l*(u+1),T=S+1+l*u;p.push(E,v,T),p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wu=`#ifdef USE_ALPHAHASH
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
#endif`,Xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
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
#endif`,Ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu=`#ifdef USE_BATCHING
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
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,df=`#define PI 3.141592653589793
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,Gf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sd=`#ifdef USE_MORPHTARGETS
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
#endif`,ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
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
#endif`,dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cd=`float getShadowMask() {
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
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#ifdef USE_TRANSMISSION
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
}`,Zd=`#define DISTANCE
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
}`,jd=`#define DISTANCE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`uniform float scale;
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
}`,np=`uniform vec3 diffuse;
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
}`,ip=`#include <common>
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
}`,rp=`uniform vec3 diffuse;
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
}`,sp=`#define LAMBERT
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
}`,ap=`#define LAMBERT
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
}`,op=`#define MATCAP
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
}`,cp=`#define MATCAP
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
}`,lp=`#define NORMAL
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
}`,hp=`#define NORMAL
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
}`,up=`#define PHONG
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
}`,fp=`#define PHONG
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
}`,dp=`#define STANDARD
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
}`,pp=`#define STANDARD
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
}`,mp=`#define TOON
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
}`,gp=`#define TOON
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
}`,_p=`uniform float size;
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
}`,vp=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,Mp=`uniform vec3 color;
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
}`,Sp=`uniform float rotation;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Gu,alphahash_pars_fragment:Wu,alphamap_fragment:Xu,alphamap_pars_fragment:qu,alphatest_fragment:$u,alphatest_pars_fragment:Yu,aomap_fragment:Ku,aomap_pars_fragment:Ju,batching_pars_vertex:Zu,batching_vertex:ju,begin_vertex:Qu,beginnormal_vertex:tf,bsdfs:ef,iridescence_fragment:nf,bumpmap_pars_fragment:rf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:cf,color_fragment:lf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:ff,common:df,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:vf,emissivemap_pars_fragment:xf,colorspace_fragment:Mf,colorspace_pars_fragment:Sf,envmap_fragment:yf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:bf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Ff,envmap_vertex:wf,fog_vertex:Af,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:If,lights_lambert_pars_fragment:Uf,lights_pars_begin:Nf,lights_toon_fragment:Of,lights_toon_pars_fragment:Bf,lights_phong_fragment:zf,lights_phong_pars_fragment:kf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Gf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:Kf,map_fragment:Jf,map_pars_fragment:Zf,map_particle_fragment:jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:td,metalnessmap_pars_fragment:ed,morphinstance_vertex:nd,morphcolor_vertex:id,morphnormal_vertex:rd,morphtarget_pars_vertex:sd,morphtarget_vertex:ad,normal_fragment_begin:od,normal_fragment_maps:cd,normal_pars_fragment:ld,normal_pars_vertex:hd,normal_vertex:ud,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:_d,packing:vd,premultiplied_alpha_fragment:xd,project_vertex:Md,dithering_fragment:Sd,dithering_pars_fragment:yd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:bd,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:wd,shadowmap_vertex:Ad,shadowmask_pars_fragment:Cd,skinbase_vertex:Rd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Dd,specularmap_fragment:Id,specularmap_pars_fragment:Ud,tonemapping_fragment:Nd,tonemapping_pars_fragment:Fd,transmission_fragment:Od,transmission_pars_fragment:Bd,uv_pars_fragment:zd,uv_pars_vertex:kd,uv_vertex:Hd,worldpos_vertex:Vd,background_vert:Gd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:qd,cube_vert:$d,cube_frag:Yd,depth_vert:Kd,depth_frag:Jd,distanceRGBA_vert:Zd,distanceRGBA_frag:jd,equirect_vert:Qd,equirect_frag:tp,linedashed_vert:ep,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:rp,meshlambert_vert:sp,meshlambert_frag:ap,meshmatcap_vert:op,meshmatcap_frag:cp,meshnormal_vert:lp,meshnormal_frag:hp,meshphong_vert:up,meshphong_frag:fp,meshphysical_vert:dp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:_p,points_frag:vp,shadow_vert:xp,shadow_frag:Mp,sprite_vert:Sp,sprite_frag:yp},ct={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},sn={basic:{uniforms:we([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:we([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:we([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:we([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:we([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:we([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:we([ct.points,ct.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:we([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:we([ct.common,ct.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:we([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:we([ct.sprite,ct.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:we([ct.common,ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:we([ct.lights,ct.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};sn.physical={uniforms:we([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Wr={r:0,b:0,g:0},Kn=new be,Ep=new Gt;function bp(i,t,e,n,r,s,a){const o=new Ut(0);let c=s===!0?0:1,l,h,f=null,d=0,p=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function _(S){let E=!1;const v=g(S);v===null?u(o,c):v&&v.isColor&&(u(v,1),E=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===ps)?(h===void 0&&(h=new Te(new Ae(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Gi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Kn.copy(E.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(Kn)),h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==jt,(f!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Te(new Vn(2,2),new Hn({name:"BackgroundMaterial",uniforms:Gi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(v.colorSpace)!==jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function u(S,E){S.getRGB(Wr,Ll(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),c=E,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,u(o,c)},render:_,addToRenderList:m}}function Tp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(M,C,H,k,q){let I=!1;const z=f(k,H,C);s!==z&&(s=z,l(s.object)),I=p(M,k,H,q),I&&g(M,k,H,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,v(M,C,H,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,C,H){const k=H.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let I=q[C.id];I===void 0&&(I={},q[C.id]=I);let z=I[k];return z===void 0&&(z=d(c()),I[k]=z),z}function d(M){const C=[],H=[],k=[];for(let q=0;q<e;q++)C[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,C,H,k){const q=s.attributes,I=C.attributes;let z=0;const $=H.getAttributes();for(const G in $)if($[G].location>=0){const at=q[G];let pt=I[G];if(pt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),at===void 0||at.attribute!==pt||pt&&at.data!==pt.data)return!0;z++}return s.attributesNum!==z||s.index!==k}function g(M,C,H,k){const q={},I=C.attributes;let z=0;const $=H.getAttributes();for(const G in $)if($[G].location>=0){let at=I[G];at===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const pt={};pt.attribute=at,at&&at.data&&(pt.data=at.data),q[G]=pt,z++}s.attributes=q,s.attributesNum=z,s.index=k}function _(){const M=s.newAttributes;for(let C=0,H=M.length;C<H;C++)M[C]=0}function m(M){u(M,0)}function u(M,C){const H=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;H[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),q[M]!==C&&(i.vertexAttribDivisor(M,C),q[M]=C)}function S(){const M=s.newAttributes,C=s.enabledAttributes;for(let H=0,k=C.length;H<k;H++)C[H]!==M[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function E(M,C,H,k,q,I,z){z===!0?i.vertexAttribIPointer(M,C,H,q,I):i.vertexAttribPointer(M,C,H,k,q,I)}function v(M,C,H,k){_();const q=k.attributes,I=H.getAttributes(),z=C.defaultAttributeValues;for(const $ in I){const G=I[$];if(G.location>=0){let it=q[$];if(it===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const at=it.normalized,pt=it.itemSize,Tt=t.get(it);if(Tt===void 0)continue;const qt=Tt.buffer,Z=Tt.type,nt=Tt.bytesPerElement,F=Z===i.INT||Z===i.UNSIGNED_INT||it.gpuType===so;if(it.isInterleavedBufferAttribute){const L=it.data,Y=L.stride,J=it.offset;if(L.isInstancedInterleavedBuffer){for(let ot=0;ot<G.locationSize;ot++)u(G.location+ot,L.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ot=0;ot<G.locationSize;ot++)m(G.location+ot);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let ot=0;ot<G.locationSize;ot++)E(G.location+ot,pt/G.locationSize,Z,at,Y*nt,(J+pt/G.locationSize*ot)*nt,F)}else{if(it.isInstancedBufferAttribute){for(let L=0;L<G.locationSize;L++)u(G.location+L,it.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let L=0;L<G.locationSize;L++)m(G.location+L);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let L=0;L<G.locationSize;L++)E(G.location+L,pt/G.locationSize,Z,at,pt*nt,pt/G.locationSize*L*nt,F)}}else if(z!==void 0){const at=z[$];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(G.location,at);break;case 3:i.vertexAttrib3fv(G.location,at);break;case 4:i.vertexAttrib4fv(G.location,at);break;default:i.vertexAttrib1fv(G.location,at)}}}}S()}function R(){P();for(const M in n){const C=n[M];for(const H in C){const k=C[H];for(const q in k)h(k[q].object),delete k[q];delete C[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const H in C){const k=C[H];for(const q in k)h(k[q].object),delete k[q];delete C[H]}delete n[M.id]}function A(M){for(const C in n){const H=n[C];if(H[M.id]===void 0)continue;const k=H[M.id];for(const q in k)h(k[q].object),delete k[q];delete H[M.id]}}function P(){x(),a=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function wp(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function c(l,h,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ap(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==We&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==en&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function Cp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Qn,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const S=s?0:n,E=S*4;let v=u.clippingState||null;c.value=v,v=h(g,d,E,p);for(let R=0;R!==E;++R)v[R]=e[R];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const u=p+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,v=p;E!==_;++E,v+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Rp(i){let t=new WeakMap;function e(a,o){return o===va?a.mapping=zi:o===xa&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===xa)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new zu(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Nl extends Dl{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ci=4,hc=[.125,.215,.35,.446,.526,.582],ni=20,qs=new Nl,uc=new Ut;let $s=null,Ys=0,Ks=0,Js=!1;const ti=(1+Math.sqrt(5))/2,Ei=1/ti,fc=[new D(-ti,Ei,0),new D(ti,Ei,0),new D(-Ei,0,ti),new D(Ei,0,ti),new D(0,ti,-Ei),new D(0,ti,Ei),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){$s=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($s,Ys,Ks),this._renderer.xr.enabled=Js,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$s=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Mr,format:We,colorSpace:Xi,depthBuffer:!1},r=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(s)),this._blurMaterial=Lp(s,t,e)}return r}_compileMaterial(t){const e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,n,r){const o=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(uc),h.toneMapping=zn,h.autoClear=!1;const p=new Er({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new Te(new Ae,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(uc),_=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):S===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const E=this._cubeSize;Xr(r,S*E,u>2?E:0,E,E),h.setRenderTarget(r),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===zi||t.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Xr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fc[(r-s-1)%fc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Te(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ni-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ni;m>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const u=[];let S=0;for(let A=0;A<ni;++A){const P=A/_,x=Math.exp(-P*P/2);u.push(x),A===0?S+=x:A<m&&(S+=2*x)}for(let A=0;A<u.length;A++)u[A]=u[A]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[r],R=3*v*(r>E-Ci?r-E+Ci:0),T=4*(this._cubeSize-v);Xr(e,R,T,3*v,2*v),c.setRenderTarget(e),c.render(f,qs)}}function Pp(i){const t=[],e=[],n=[];let r=i;const s=i-Ci+1+hc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Ci?c=hc[a-i+Ci-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,_=3,m=2,u=1,S=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,x=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];S.set(x,_*g*T),E.set(d,m*g*T);const M=[T,T,T,T,T,T];v.set(M,u*g*T)}const R=new Ue;R.setAttribute("position",new ce(S,_)),R.setAttribute("uv",new ce(E,m)),R.setAttribute("faceIndex",new ce(v,u)),t.push(R),r>Ci&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pc(i,t,e){const n=new oi(i,t,e);return n.texture.mapping=ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Lp(i,t,e){const n=new Float32Array(ni),r=new D(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:po(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function mc(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function gc(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function po(){return`

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
	`}function Dp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===va||c===xa,h=c===zi||c===ki;if(l||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new dc(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new dc(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ip(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Up(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,u=_.length;m<u;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let E=0,v=S.length;E<v;E+=3){const R=S[E+0],T=S[E+1],A=S[E+2];d.push(R,T,T,A,A,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const R=E+0,T=E+1,A=E+2;d.push(R,T,T,A,A,R)}}else return;const m=new(bl(d)?Pl:Rl)(d,1);m.version=_;const u=s.get(f);u&&t.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Np(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function f(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)l(d[u]/a,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let u=0;for(let S=0;S<g;S++)u+=p[S]*_[S];e.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Fp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Op(i,t,e){const n=new WeakMap,r=new ae;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let x=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=o.attributes.position.count*E,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*R*4*f),A=new wl(T,v,R,f);A.type=en,A.needsUpdate=!0;const P=E*4;for(let M=0;M<f;M++){const C=m[M],H=u[M],k=S[M],q=v*R*4*M;for(let I=0;I<C.count;I++){const z=I*P;p===!0&&(r.fromBufferAttribute(C,I),T[q+z+0]=r.x,T[q+z+1]=r.y,T[q+z+2]=r.z,T[q+z+3]=0),g===!0&&(r.fromBufferAttribute(H,I),T[q+z+4]=r.x,T[q+z+5]=r.y,T[q+z+6]=r.z,T[q+z+7]=0),_===!0&&(r.fromBufferAttribute(k,I),T[q+z+8]=r.x,T[q+z+9]=r.y,T[q+z+10]=r.z,T[q+z+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new xt(v,R)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Bp(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Fl extends ve{constructor(t,e,n,r,s,a,o,c,l,h=Ii){if(h!==Ii&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ai),n===void 0&&h===Vi&&(n=Hi),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ol=new ve,_c=new Fl(1,1),Bl=new wl,zl=new yu,kl=new Il,vc=[],xc=[],Mc=new Float32Array(16),Sc=new Float32Array(9),yc=new Float32Array(4);function Yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=vc[r];if(s===void 0&&(s=new Float32Array(r),vc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _s(i,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function Vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function Gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),de(e,n)}}function Wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Sc.set(n),i.uniformMatrix3fv(this.addr,!1,Sc),de(e,n)}}function Xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Mc.set(n),i.uniformMatrix4fv(this.addr,!1,Mc),de(e,n)}}function qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function Jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function tm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=yl,s=_c):s=Ol,e.setTexture2D(t||s,r)}function em(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||zl,r)}function nm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||kl,r)}function im(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Bl,r)}function rm(i){switch(i){case 5126:return zp;case 35664:return kp;case 35665:return Hp;case 35666:return Vp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return $p;case 35668:case 35672:return Yp;case 35669:case 35673:return Kp;case 5125:return Jp;case 36294:return Zp;case 36295:return jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function sm(i,t){i.uniform1fv(this.addr,t)}function am(i,t){const e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function om(i,t){const e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function cm(i,t){const e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function lm(i,t){const e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hm(i,t){const e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function um(i,t){const e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fm(i,t){i.uniform1iv(this.addr,t)}function dm(i,t){i.uniform2iv(this.addr,t)}function pm(i,t){i.uniform3iv(this.addr,t)}function mm(i,t){i.uniform4iv(this.addr,t)}function gm(i,t){i.uniform1uiv(this.addr,t)}function _m(i,t){i.uniform2uiv(this.addr,t)}function vm(i,t){i.uniform3uiv(this.addr,t)}function xm(i,t){i.uniform4uiv(this.addr,t)}function Mm(i,t,e){const n=this.cache,r=t.length,s=_s(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ol,s[a])}function Sm(i,t,e){const n=this.cache,r=t.length,s=_s(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||zl,s[a])}function ym(i,t,e){const n=this.cache,r=t.length,s=_s(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||kl,s[a])}function Em(i,t,e){const n=this.cache,r=t.length,s=_s(e,r);fe(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Bl,s[a])}function bm(i){switch(i){case 5126:return sm;case 35664:return am;case 35665:return om;case 35666:return cm;case 35674:return lm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return vm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Em}}class Tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rm(e.type)}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bm(e.type)}}class Am{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function Ec(i,t){i.seq.push(t),i.map[t.id]=t}function Cm(i,t,e){const n=i.name,r=n.length;for(Zs.lastIndex=0;;){const s=Zs.exec(n),a=Zs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ec(e,l===void 0?new Tm(o,i,t):new wm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Am(o),Ec(e,f)),e=f}}}class ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Cm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Rm=37297;let Pm=0;function Lm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Tc=new It;function Dm(i){Xt._getMatrix(Tc,Xt.workingColorSpace,i);const t=`mat3( ${Tc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case gs:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Lm(i.getShaderSource(t),a)}else return r}function Im(i,t){const e=Dm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Um(i,t){let e;switch(t){case Kh:e="Linear";break;case Jh:e="Reinhard";break;case Zh:e="Cineon";break;case jh:e="ACESFilmic";break;case tu:e="AgX";break;case eu:e="Neutral";break;case Qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new D;function Nm(){Xt.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Om(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ur(i){return i!==""}function Ac(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(zm,Hm)}const km=new Map;function Hm(i,t){let e=Bt[t];if(e===void 0){const n=km.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(i){return i.replace(Vm,Gm)}function Gm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Wm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case ki:t="ENVMAP_TYPE_CUBE";break;case ps:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ki&&(t="ENVMAP_MODE_REFRACTION"),t}function $m(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ro:t="ENVMAP_BLENDING_MULTIPLY";break;case $h:t="ENVMAP_BLENDING_MIX";break;case Yh:t="ENVMAP_BLENDING_ADD";break}return t}function Ym(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Km(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Wm(e),l=Xm(e),h=qm(e),f=$m(e),d=Ym(e),p=Fm(e),g=Om(s),_=r.createProgram();let m,u,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),u.length>0&&(u+=`
`)):(m=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),u=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==zn?Um("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Im("linearToOutputTexel",e.outputColorSpace),Nm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=Ya(a),a=Ac(a,e),a=Cc(a,e),o=Ya(o),o=Ac(o,e),o=Cc(o,e),a=Rc(a),o=Rc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=S+m+a,v=S+u+o,R=bc(r,r.VERTEX_SHADER,E),T=bc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,R),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(R).trim(),q=r.getShaderInfoLog(T).trim();let I=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,T);else{const $=wc(r,R,"vertex"),G=wc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+$+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||q==="")&&(z=!1);z&&(C.diagnostics={runnable:I,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:u}})}r.deleteShader(R),r.deleteShader(T),P=new ss(r,_),x=Bm(r,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Rm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Jm=0;class Zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jm(t),e.set(t,n)),n}}class jm{constructor(t){this.id=Jm++,this.code=t,this.usedTimes=0}}function Qm(i,t,e,n,r,s,a){const o=new Al,c=new Zm,l=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,C,H,k){const q=H.fog,I=k.geometry,z=x.isMeshStandardMaterial?H.environment:null,$=(x.isMeshStandardMaterial?e:t).get(x.envMap||z),G=$&&$.mapping===ps?$.image.height:null,it=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const at=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,pt=at!==void 0?at.length:0;let Tt=0;I.morphAttributes.position!==void 0&&(Tt=1),I.morphAttributes.normal!==void 0&&(Tt=2),I.morphAttributes.color!==void 0&&(Tt=3);let qt,Z,nt,F;if(it){const Jt=sn[it];qt=Jt.vertexShader,Z=Jt.fragmentShader}else qt=x.vertexShader,Z=x.fragmentShader,c.update(x),nt=c.getVertexShaderID(x),F=c.getFragmentShaderID(x);const L=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),J=k.isInstancedMesh===!0,ot=k.isBatchedMesh===!0,mt=!!x.map,wt=!!x.matcap,kt=!!$,U=!!x.aoMap,re=!!x.lightMap,zt=!!x.bumpMap,Ht=!!x.normalMap,Ct=!!x.displacementMap,ee=!!x.emissiveMap,At=!!x.metalnessMap,w=!!x.roughnessMap,y=x.anisotropy>0,V=x.clearcoat>0,Q=x.dispersion>0,et=x.iridescence>0,j=x.sheen>0,Et=x.transmission>0,ht=y&&!!x.anisotropyMap,gt=V&&!!x.clearcoatMap,Wt=V&&!!x.clearcoatNormalMap,rt=V&&!!x.clearcoatRoughnessMap,_t=et&&!!x.iridescenceMap,Rt=et&&!!x.iridescenceThicknessMap,Lt=j&&!!x.sheenColorMap,vt=j&&!!x.sheenRoughnessMap,Vt=!!x.specularMap,Ot=!!x.specularColorMap,Qt=!!x.specularIntensityMap,N=Et&&!!x.transmissionMap,lt=Et&&!!x.thicknessMap,K=!!x.gradientMap,tt=!!x.alphaMap,dt=x.alphaTest>0,ut=!!x.alphaHash,Nt=!!x.extensions;let se=zn;x.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(se=i.toneMapping);const Me={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:Z,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:F,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ot,batchingColor:ot&&k._colorsTexture!==null,instancing:J,instancingColor:J&&k.instanceColor!==null,instancingMorph:J&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xi,alphaToCoverage:!!x.alphaToCoverage,map:mt,matcap:wt,envMap:kt,envMapMode:kt&&$.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:re,bumpMap:zt,normalMap:Ht,displacementMap:d&&Ct,emissiveMap:ee,normalMapObjectSpace:Ht&&x.normalMapType===su,normalMapTangentSpace:Ht&&x.normalMapType===uo,metalnessMap:At,roughnessMap:w,anisotropy:y,anisotropyMap:ht,clearcoat:V,clearcoatMap:gt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:et,iridescenceMap:_t,iridescenceThicknessMap:Rt,sheen:j,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:Qt,transmission:Et,transmissionMap:N,thicknessMap:lt,gradientMap:K,opaque:x.transparent===!1&&x.blending===Di&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:dt,alphaHash:ut,combine:x.combine,mapUv:mt&&_(x.map.channel),aoMapUv:U&&_(x.aoMap.channel),lightMapUv:re&&_(x.lightMap.channel),bumpMapUv:zt&&_(x.bumpMap.channel),normalMapUv:Ht&&_(x.normalMap.channel),displacementMapUv:Ct&&_(x.displacementMap.channel),emissiveMapUv:ee&&_(x.emissiveMap.channel),metalnessMapUv:At&&_(x.metalnessMap.channel),roughnessMapUv:w&&_(x.roughnessMap.channel),anisotropyMapUv:ht&&_(x.anisotropyMap.channel),clearcoatMapUv:gt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(x.sheenRoughnessMap.channel),specularMapUv:Vt&&_(x.specularMap.channel),specularColorMapUv:Ot&&_(x.specularColorMap.channel),specularIntensityMapUv:Qt&&_(x.specularIntensityMap.channel),transmissionMapUv:N&&_(x.transmissionMap.channel),thicknessMapUv:lt&&_(x.thicknessMap.channel),alphaMapUv:tt&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ht||y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(mt||tt),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Y,skinning:k.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:mt&&x.map.isVideoTexture===!0&&Xt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:ee&&x.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===Ce,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&x.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function u(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(S(M,x),E(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function S(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const M=g[x.type];let C;if(M){const H=sn[M];C=Nu.clone(H.uniforms)}else C=x.uniforms;return C}function R(x,M){let C;for(let H=0,k=h.length;H<k;H++){const q=h[H];if(q.cacheKey===M){C=q,++C.usedTimes;break}}return C===void 0&&(C=new Km(i,M,x,s),h.push(C)),C}function T(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function A(x){c.remove(x)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function t0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function e0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,p,g,_,m){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=m),t++,u}function o(f,d,p,g,_,m){const u=a(f,d,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):e.push(u)}function c(f,d,p,g,_,m){const u=a(f,d,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):e.unshift(u)}function l(f,d){e.length>1&&e.sort(f||e0),n.length>1&&n.sort(d||Lc),r.length>1&&r.sort(d||Lc)}function h(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function n0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Dc,i.set(n,[a])):r>=s.length?(a=new Dc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function i0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ut};break;case"SpotLight":e={position:new D,direction:new D,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function r0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let s0=0;function a0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function o0(i){const t=new i0,e=r0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,s=new Gt,a=new Gt;function o(l){let h=0,f=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,S=0,E=0,v=0,R=0,T=0,A=0;l.sort(a0);for(let x=0,M=l.length;x<M;x++){const C=l[x],H=C.color,k=C.intensity,q=C.distance,I=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*k,f+=H.g*k,d+=H.b*k;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],k);A++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,G=e.get(C);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=I,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=z,p++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(H).multiplyScalar(k),z.distance=q,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[_]=z;const $=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,$.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=$.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=I,v++}_++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(H).multiplyScalar(k),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const $=C.shadow,G=e.get(C);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(k),z.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[u]=z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=A,n.version=s0++)}function c(l,h){let f=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,S=l.length;u<S;u++){const E=l[u];if(E.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Ic(i){const t=new o0(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function c0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ic(i),t.set(r,[o])):s>=a.length?(o=new Ic(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class l0 extends $i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class h0 extends $i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const u0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
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
}`;function d0(i,t,e){let n=new fo;const r=new xt,s=new xt,a=new ae,o=new l0({depthPacking:ru}),c=new h0,l={},h=e.maxTextureSize,f={[kn]:Ce,[Ce]:kn,[an]:an},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:u0,fragmentShader:f0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let u=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Bn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=u!==vn&&this.type===vn,q=u===vn&&this.type!==vn;for(let I=0,z=T.length;I<z;I++){const $=T[I],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const it=G.getFrameExtents();if(r.multiply(it),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/it.x),r.x=s.x*it.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/it.y),r.y=s.y*it.y,G.mapSize.y=s.y)),G.map===null||k===!0||q===!0){const pt=this.type!==vn?{minFilter:Re,magFilter:Re}:{};G.map!==null&&G.map.dispose(),G.map=new oi(r.x,r.y,pt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const at=G.getViewportCount();for(let pt=0;pt<at;pt++){const Tt=G.getViewport(pt);a.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),H.viewport(a),G.updateMatrices($,pt),n=G.getFrustum(),v(A,P,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===vn&&S(G,P),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(x,M,C)};function S(T,A){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,p,_,null)}function E(T,A,P,x){let M=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,k=A.uuid;let q=l[H];q===void 0&&(q={},l[H]=q);let I=q[k];I===void 0&&(I=M.clone(),q[k]=I,A.addEventListener("dispose",R)),M=I}if(M.visible=A.visible,M.wireframe=A.wireframe,x===vn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=P}return M}function v(T,A,P,x,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const k=t.update(T),q=T.material;if(Array.isArray(q)){const I=k.groups;for(let z=0,$=I.length;z<$;z++){const G=I[z],it=q[G.materialIndex];if(it&&it.visible){const at=E(T,it,x,M);T.onBeforeShadow(i,T,A,P,k,at,G),i.renderBufferDirect(P,null,k,at,T,G),T.onAfterShadow(i,T,A,P,k,at,G)}}}else if(q.visible){const I=E(T,q,x,M);T.onBeforeShadow(i,T,A,P,k,I,null),i.renderBufferDirect(P,null,k,I,T,null),T.onAfterShadow(i,T,A,P,k,I,null)}}const H=T.children;for(let k=0,q=H.length;k<q;k++)v(H[k],A,P,x,M)}function R(T){T.target.removeEventListener("dispose",R);for(const P in l){const x=l[P],M=T.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const p0={[ua]:fa,[da]:ga,[pa]:_a,[Bi]:ma,[fa]:ua,[ga]:da,[_a]:pa,[ma]:Bi};function m0(i,t){function e(){let N=!1;const lt=new ae;let K=null;const tt=new ae(0,0,0,0);return{setMask:function(dt){K!==dt&&!N&&(i.colorMask(dt,dt,dt,dt),K=dt)},setLocked:function(dt){N=dt},setClear:function(dt,ut,Nt,se,Me){Me===!0&&(dt*=se,ut*=se,Nt*=se),lt.set(dt,ut,Nt,se),tt.equals(lt)===!1&&(i.clearColor(dt,ut,Nt,se),tt.copy(lt))},reset:function(){N=!1,K=null,tt.set(-1,0,0,0)}}}function n(){let N=!1,lt=!1,K=null,tt=null,dt=null;return{setReversed:function(ut){if(lt!==ut){const Nt=t.get("EXT_clip_control");lt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const se=dt;dt=null,this.setClear(se)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?L(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(ut){K!==ut&&!N&&(i.depthMask(ut),K=ut)},setFunc:function(ut){if(lt&&(ut=p0[ut]),tt!==ut){switch(ut){case ua:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=ut}},setLocked:function(ut){N=ut},setClear:function(ut){dt!==ut&&(lt&&(ut=1-ut),i.clearDepth(ut),dt=ut)},reset:function(){N=!1,K=null,tt=null,dt=null,lt=!1}}}function r(){let N=!1,lt=null,K=null,tt=null,dt=null,ut=null,Nt=null,se=null,Me=null;return{setTest:function(Jt){N||(Jt?L(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(Jt){lt!==Jt&&!N&&(i.stencilMask(Jt),lt=Jt)},setFunc:function(Jt,Xe,hn){(K!==Jt||tt!==Xe||dt!==hn)&&(i.stencilFunc(Jt,Xe,hn),K=Jt,tt=Xe,dt=hn)},setOp:function(Jt,Xe,hn){(ut!==Jt||Nt!==Xe||se!==hn)&&(i.stencilOp(Jt,Xe,hn),ut=Jt,Nt=Xe,se=hn)},setLocked:function(Jt){N=Jt},setClear:function(Jt){Me!==Jt&&(i.clearStencil(Jt),Me=Jt)},reset:function(){N=!1,lt=null,K=null,tt=null,dt=null,ut=null,Nt=null,se=null,Me=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,u=null,S=null,E=null,v=null,R=null,T=null,A=new Ut(0,0,0),P=0,x=!1,M=null,C=null,H=null,k=null,q=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=$>=2);let it=null,at={};const pt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),qt=new ae().fromArray(pt),Z=new ae().fromArray(Tt);function nt(N,lt,K,tt){const dt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(N,ut),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<K;Nt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(lt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return ut}const F={};F[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),L(i.DEPTH_TEST),a.setFunc(Bi),zt(!1),Ht(Oo),L(i.CULL_FACE),U(Bn);function L(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Y(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function J(N,lt){return f[N]!==lt?(i.bindFramebuffer(N,lt),f[N]=lt,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function ot(N,lt){let K=p,tt=!1;if(N){K=d.get(lt),K===void 0&&(K=[],d.set(lt,K));const dt=N.textures;if(K.length!==dt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Nt=dt.length;ut<Nt;ut++)K[ut]=i.COLOR_ATTACHMENT0+ut;K.length=dt.length,tt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,tt=!0);tt&&i.drawBuffers(K)}function mt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const wt={[ei]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};wt[Dh]=i.MIN,wt[Ih]=i.MAX;const kt={[Uh]:i.ZERO,[Nh]:i.ONE,[Fh]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[kh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[zh]:i.ONE_MINUS_DST_ALPHA,[Gh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(N,lt,K,tt,dt,ut,Nt,se,Me,Jt){if(N===Bn){_===!0&&(Y(i.BLEND),_=!1);return}if(_===!1&&(L(i.BLEND),_=!0),N!==Rh){if(N!==m||Jt!==x){if((u!==ei||v!==ei)&&(i.blendEquation(i.FUNC_ADD),u=ei,v=ei),Jt)switch(N){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.ONE,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ko:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,E=null,R=null,T=null,A.set(0,0,0),P=0,m=N,x=Jt}return}dt=dt||lt,ut=ut||K,Nt=Nt||tt,(lt!==u||dt!==v)&&(i.blendEquationSeparate(wt[lt],wt[dt]),u=lt,v=dt),(K!==S||tt!==E||ut!==R||Nt!==T)&&(i.blendFuncSeparate(kt[K],kt[tt],kt[ut],kt[Nt]),S=K,E=tt,R=ut,T=Nt),(se.equals(A)===!1||Me!==P)&&(i.blendColor(se.r,se.g,se.b,Me),A.copy(se),P=Me),m=N,x=!1}function re(N,lt){N.side===an?Y(i.CULL_FACE):L(i.CULL_FACE);let K=N.side===Ce;lt&&(K=!K),zt(K),N.blending===Di&&N.transparent===!1?U(Bn):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const tt=N.stencilWrite;o.setTest(tt),tt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ee(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function Ht(N){N!==wh?(L(i.CULL_FACE),N!==C&&(N===Oo?i.cullFace(i.BACK):N===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),C=N}function Ct(N){N!==H&&(z&&i.lineWidth(N),H=N)}function ee(N,lt,K){N?(L(i.POLYGON_OFFSET_FILL),(k!==lt||q!==K)&&(i.polygonOffset(lt,K),k=lt,q=K)):Y(i.POLYGON_OFFSET_FILL)}function At(N){N?L(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+I-1),it!==N&&(i.activeTexture(N),it=N)}function y(N,lt,K){K===void 0&&(it===null?K=i.TEXTURE0+I-1:K=it);let tt=at[K];tt===void 0&&(tt={type:void 0,texture:void 0},at[K]=tt),(tt.type!==N||tt.texture!==lt)&&(it!==K&&(i.activeTexture(K),it=K),i.bindTexture(N,lt||F[N]),tt.type=N,tt.texture=lt)}function V(){const N=at[it];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(N){qt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),qt.copy(N))}function vt(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function Vt(N,lt){let K=l.get(lt);K===void 0&&(K=new WeakMap,l.set(lt,K));let tt=K.get(N);tt===void 0&&(tt=i.getUniformBlockIndex(lt,N.name),K.set(N,tt))}function Ot(N,lt){const tt=l.get(lt).get(N);c.get(lt)!==tt&&(i.uniformBlockBinding(lt,tt,N.__bindingPointIndex),c.set(lt,tt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,at={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,u=null,S=null,E=null,v=null,R=null,T=null,A=new Ut(0,0,0),P=0,x=!1,M=null,C=null,H=null,k=null,q=null,qt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:L,disable:Y,bindFramebuffer:J,drawBuffers:ot,useProgram:mt,setBlending:U,setMaterial:re,setFlipSided:zt,setCullFace:Ht,setLineWidth:Ct,setPolygonOffset:ee,setScissorTest:At,activeTexture:w,bindTexture:y,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:_t,texImage3D:Rt,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Wt,texStorage3D:rt,texSubImage2D:j,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Lt,viewport:vt,reset:Qt}}function Uc(i,t,e,n){const r=g0(n);switch(e){case gl:return i*t;case vl:return i*t;case xl:return i*t*2;case ms:return i*t/r.components*r.byteLength;case co:return i*t/r.components*r.byteLength;case Ml:return i*t*2/r.components*r.byteLength;case lo:return i*t*2/r.components*r.byteLength;case _l:return i*t*3/r.components*r.byteLength;case We:return i*t*4/r.components*r.byteLength;case ho:return i*t*4/r.components*r.byteLength;case ts:case es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ns:case is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:case ba:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Ta:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rs:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sl:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g0(i){switch(i){case Tn:case dl:return{byteLength:1,components:1};case _r:case pl:case Mr:return{byteLength:2,components:1};case ao:case oo:return{byteLength:2,components:4};case ai:case so:case en:return{byteLength:4,components:1};case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return p?new OffscreenCanvas(w,y):vr("canvas")}function _(w,y,V){let Q=1;const et=At(w);if((et.width>V||et.height>V)&&(Q=V/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(Q*et.width),Et=Math.floor(Q*et.height);f===void 0&&(f=g(j,Et));const ht=y?g(j,Et):f;return ht.width=j,ht.height=Et,ht.getContext("2d").drawImage(w,0,0,j,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+Et+")."),ht}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,y,V,Q,et=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=y;if(y===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),y===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),y===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){const Et=et?gs:Xt.getTransfer(Q);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=Et===jt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(w,y){let V;return w?y===null||y===ai||y===Hi?V=i.DEPTH24_STENCIL8:y===en?V=i.DEPTH32F_STENCIL8:y===_r&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===Hi?V=i.DEPTH_COMPONENT24:y===en?V=i.DEPTH_COMPONENT32F:y===_r&&(V=i.DEPTH_COMPONENT16),V}function R(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Re&&w.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){const y=w.target;y.removeEventListener("dispose",T),P(y),y.isVideoTexture&&h.delete(y)}function A(w){const y=w.target;y.removeEventListener("dispose",A),M(y)}function P(w){const y=n.get(w);if(y.__webglInit===void 0)return;const V=w.source,Q=d.get(V);if(Q){const et=Q[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&x(w),Object.keys(Q).length===0&&d.delete(V)}n.remove(w)}function x(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const V=w.source,Q=d.get(V);delete Q[y.__cacheKey],a.memory.textures--}function M(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let et=0;et<y.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=w.textures;for(let Q=0,et=V.length;Q<et;Q++){const j=n.get(V[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(V[Q])}n.remove(w)}let C=0;function H(){C=0}function k(){const w=C;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function q(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function I(w,y){const V=n.get(w);if(w.isVideoTexture&&Ct(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,w,y);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function z(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Z(V,w,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function $(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Z(V,w,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function G(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){nt(V,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}const it={[cs]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},at={[Re]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Es]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},pt={[au]:i.NEVER,[fu]:i.ALWAYS,[ou]:i.LESS,[yl]:i.LEQUAL,[cu]:i.EQUAL,[uu]:i.GEQUAL,[lu]:i.GREATER,[hu]:i.NOTEQUAL};function Tt(w,y){if(y.type===en&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Es||y.magFilter===wr||y.magFilter===ri||y.minFilter===on||y.minFilter===Es||y.minFilter===wr||y.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,it[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,it[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,it[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,at[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,at[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,pt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Re||y.minFilter!==wr&&y.minFilter!==ri||y.type===en&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function qt(w,y){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));const Q=y.source;let et=d.get(Q);et===void 0&&(et={},d.set(Q,et));const j=q(y);if(j!==w.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),et[j].usedTimes++;const Et=et[w.__cacheKey];Et!==void 0&&(et[w.__cacheKey].usedTimes--,Et.usedTimes===0&&x(y)),w.__cacheKey=j,w.__webglTexture=et[j].texture}return V}function Z(w,y,V){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);const et=qt(w,y),j=y.source;e.bindTexture(Q,w.__webglTexture,i.TEXTURE0+V);const Et=n.get(j);if(j.version!==Et.__version||et===!0){e.activeTexture(i.TEXTURE0+V);const ht=Xt.getPrimaries(Xt.workingColorSpace),gt=y.colorSpace===Fn?null:Xt.getPrimaries(y.colorSpace),Wt=y.colorSpace===Fn||ht===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let rt=_(y.image,!1,r.maxTextureSize);rt=ee(y,rt);const _t=s.convert(y.format,y.colorSpace),Rt=s.convert(y.type);let Lt=E(y.internalFormat,_t,Rt,y.colorSpace,y.isVideoTexture);Tt(Q,y);let vt;const Vt=y.mipmaps,Ot=y.isVideoTexture!==!0,Qt=Et.__version===void 0||et===!0,N=j.dataReady,lt=R(y,rt);if(y.isDepthTexture)Lt=v(y.format===Vi,y.type),Qt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Lt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,rt.width,rt.height,0,_t,Rt,null));else if(y.isDataTexture)if(Vt.length>0){Ot&&Qt&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Vt[0].width,Vt[0].height);for(let K=0,tt=Vt.length;K<tt;K++)vt=Vt[K],Ot?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(i.TEXTURE_2D,K,Lt,vt.width,vt.height,0,_t,Rt,vt.data);y.generateMipmaps=!1}else Ot?(Qt&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,rt.width,rt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,_t,Rt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,rt.width,rt.height,0,_t,Rt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ot&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,Vt[0].width,Vt[0].height,rt.depth);for(let K=0,tt=Vt.length;K<tt;K++)if(vt=Vt[K],y.format!==We)if(_t!==null)if(Ot){if(N)if(y.layerUpdates.size>0){const dt=Uc(vt.width,vt.height,y.format,y.type);for(const ut of y.layerUpdates){const Nt=vt.data.subarray(ut*dt/vt.data.BYTES_PER_ELEMENT,(ut+1)*dt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ut,vt.width,vt.height,1,_t,Nt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,rt.depth,_t,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Lt,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,rt.depth,_t,Rt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Lt,vt.width,vt.height,rt.depth,0,_t,Rt,vt.data)}else{Ot&&Qt&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Vt[0].width,Vt[0].height);for(let K=0,tt=Vt.length;K<tt;K++)vt=Vt[K],y.format!==We?_t!==null?Ot?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(i.TEXTURE_2D,K,Lt,vt.width,vt.height,0,_t,Rt,vt.data)}else if(y.isDataArrayTexture)if(Ot){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,rt.width,rt.height,rt.depth),N)if(y.layerUpdates.size>0){const K=Uc(rt.width,rt.height,y.format,y.type);for(const tt of y.layerUpdates){const dt=rt.data.subarray(tt*K/rt.data.BYTES_PER_ELEMENT,(tt+1)*K/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,_t,Rt,dt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Rt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,rt.width,rt.height,rt.depth,0,_t,Rt,rt.data);else if(y.isData3DTexture)Ot?(Qt&&e.texStorage3D(i.TEXTURE_3D,lt,Lt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Rt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,rt.width,rt.height,rt.depth,0,_t,Rt,rt.data);else if(y.isFramebufferTexture){if(Qt)if(Ot)e.texStorage2D(i.TEXTURE_2D,lt,Lt,rt.width,rt.height);else{let K=rt.width,tt=rt.height;for(let dt=0;dt<lt;dt++)e.texImage2D(i.TEXTURE_2D,dt,Lt,K,tt,0,_t,Rt,null),K>>=1,tt>>=1}}else if(Vt.length>0){if(Ot&&Qt){const K=At(Vt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Lt,K.width,K.height)}for(let K=0,tt=Vt.length;K<tt;K++)vt=Vt[K],Ot?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,_t,Rt,vt):e.texImage2D(i.TEXTURE_2D,K,Lt,_t,Rt,vt);y.generateMipmaps=!1}else if(Ot){if(Qt){const K=At(rt);e.texStorage2D(i.TEXTURE_2D,lt,Lt,K.width,K.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Rt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,_t,Rt,rt);m(y)&&u(Q),Et.__version=j.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function nt(w,y,V){if(y.image.length!==6)return;const Q=qt(w,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const j=n.get(et);if(et.version!==j.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);const Et=Xt.getPrimaries(Xt.workingColorSpace),ht=y.colorSpace===Fn?null:Xt.getPrimaries(y.colorSpace),gt=y.colorSpace===Fn||Et===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Wt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!Wt&&!rt?_t[tt]=_(y.image[tt],!0,r.maxCubemapSize):_t[tt]=rt?y.image[tt].image:y.image[tt],_t[tt]=ee(y,_t[tt]);const Rt=_t[0],Lt=s.convert(y.format,y.colorSpace),vt=s.convert(y.type),Vt=E(y.internalFormat,Lt,vt,y.colorSpace),Ot=y.isVideoTexture!==!0,Qt=j.__version===void 0||Q===!0,N=et.dataReady;let lt=R(y,Rt);Tt(i.TEXTURE_CUBE_MAP,y);let K;if(Wt){Ot&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Vt,Rt.width,Rt.height);for(let tt=0;tt<6;tt++){K=_t[tt].mipmaps;for(let dt=0;dt<K.length;dt++){const ut=K[dt];y.format!==We?Lt!==null?Ot?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,ut.width,ut.height,Lt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,Vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,ut.width,ut.height,Lt,vt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,Vt,ut.width,ut.height,0,Lt,vt,ut.data)}}}else{if(K=y.mipmaps,Ot&&Qt){K.length>0&&lt++;const tt=At(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Vt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Ot?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,Lt,vt,_t[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,_t[tt].width,_t[tt].height,0,Lt,vt,_t[tt].data);for(let dt=0;dt<K.length;dt++){const Nt=K[dt].image[tt].image;Ot?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Nt.width,Nt.height,Lt,vt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,Vt,Nt.width,Nt.height,0,Lt,vt,Nt.data)}}else{Ot?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,vt,_t[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,Lt,vt,_t[tt]);for(let dt=0;dt<K.length;dt++){const ut=K[dt];Ot?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Lt,vt,ut.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,Vt,Lt,vt,ut.image[tt])}}}m(y)&&u(i.TEXTURE_CUBE_MAP),j.__version=et.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function F(w,y,V,Q,et,j){const Et=s.convert(V.format,V.colorSpace),ht=s.convert(V.type),gt=E(V.internalFormat,Et,ht,V.colorSpace),Wt=n.get(y),rt=n.get(V);if(rt.__renderTarget=y,!Wt.__hasExternalTextures){const _t=Math.max(1,y.width>>j),Rt=Math.max(1,y.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,gt,_t,Rt,y.depth,0,Et,ht,null):e.texImage2D(et,j,gt,_t,Rt,0,Et,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ht(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,rt.__webglTexture,0,zt(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,rt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function L(w,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const Q=y.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,j=v(y.stencilBuffer,et),Et=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=zt(y);Ht(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,j,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,w)}else{const Q=y.textures;for(let et=0;et<Q.length;et++){const j=Q[et],Et=s.convert(j.format,j.colorSpace),ht=s.convert(j.type),gt=E(j.internalFormat,Et,ht,j.colorSpace),Wt=zt(y);V&&Ht(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,gt,y.width,y.height):Ht(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,gt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,gt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),I(y.depthTexture,0);const et=Q.__webglTexture,j=zt(y);if(y.depthTexture.format===Ii)Ht(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===Vi)Ht(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function J(w){const y=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=Q}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Y(y.__webglFramebuffer,w)}else if(V){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),L(y.__webglDepthbuffer[Q],w,!1);else{const et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),L(y.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(w,y,V){const Q=n.get(w);y!==void 0&&F(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&J(w)}function mt(w){const y=w.texture,V=n.get(w),Q=n.get(y);w.addEventListener("dispose",A);const et=w.textures,j=w.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ht]=[];for(let gt=0;gt<y.mipmaps.length;gt++)V.__webglFramebuffer[ht][gt]=i.createFramebuffer()}else V.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)V.__webglFramebuffer[ht]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ht=0,gt=et.length;ht<gt;ht++){const Wt=n.get(et[ht]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Ht(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){const gt=et[ht];V.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ht]);const Wt=s.convert(gt.format,gt.colorSpace),rt=s.convert(gt.type),_t=E(gt.internalFormat,Wt,rt,gt.colorSpace,w.isXRRenderTarget===!0),Rt=zt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,_t,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,V.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),L(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,y);for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)F(V.__webglFramebuffer[ht][gt],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else F(V.__webglFramebuffer[ht],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(y)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,gt=et.length;ht<gt;ht++){const Wt=et[ht],rt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Tt(i.TEXTURE_2D,Wt),F(V.__webglFramebuffer,w,Wt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(Wt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Q.__webglTexture),Tt(ht,y),y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)F(V.__webglFramebuffer[gt],w,y,i.COLOR_ATTACHMENT0,ht,gt);else F(V.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ht,0);m(y)&&u(ht),e.unbindTexture()}w.depthBuffer&&J(w)}function wt(w){const y=w.textures;for(let V=0,Q=y.length;V<Q;V++){const et=y[V];if(m(et)){const j=S(w),Et=n.get(et).__webglTexture;e.bindTexture(j,Et),u(j),e.unbindTexture()}}}const kt=[],U=[];function re(w){if(w.samples>0){if(Ht(w)===!1){const y=w.textures,V=w.width,Q=w.height;let et=i.COLOR_BUFFER_BIT;const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(w),ht=y.length>1;if(ht)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const Wt=n.get(y[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,et,i.NEAREST),c===!0&&(kt.length=0,U.length=0,kt.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(kt.push(j),U.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const Wt=n.get(y[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function zt(w){return Math.min(r.maxSamples,w.samples)}function Ht(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ct(w){const y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function ee(w,y){const V=w.colorSpace,Q=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Xi&&V!==Fn&&(Xt.getTransfer(V)===jt?(Q!==We||et!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function At(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=ot,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=F,this.useMultisampledRTT=Ht}function v0(i,t){function e(n,r=Fn){let s;const a=Xt.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dl)return i.BYTE;if(n===pl)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===gl)return i.ALPHA;if(n===_l)return i.RGB;if(n===We)return i.RGBA;if(n===vl)return i.LUMINANCE;if(n===xl)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===ms)return i.RED;if(n===co)return i.RED_INTEGER;if(n===Ml)return i.RG;if(n===lo)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===ts||n===es||n===ns||n===is)if(a===jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===ya||n===Ea||n===ba)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===wa||n===Aa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ta||n===wa)return a===jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ca)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rs||n===Va||n===Ga)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===rs)return a===jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===Wa||n===Xa||n===qa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===rs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class x0 extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ri extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M0={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),u=this._getHandJoint(l,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y0=`
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

}`;class E0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ve,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:S0,fragmentShader:y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b0 extends qi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,p=null,g=null;const _=new E0,m=e.getContextAttributes();let u=null,S=null;const E=[],v=[],R=new xt;let T=null;const A=new Ve;A.viewport=new ae;const P=new Ve;P.viewport=new ae;const x=[A,P],M=new x0;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=E[Z];return nt===void 0&&(nt=new js,E[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=E[Z];return nt===void 0&&(nt=new js,E[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=E[Z];return nt===void 0&&(nt=new js,E[Z]=nt),nt.getHandSpace()};function k(Z){const nt=v.indexOf(Z.inputSource);if(nt===-1)return;const F=E[nt];F!==void 0&&(F.update(Z.inputSource,Z.frame,l||a),F.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",I);for(let Z=0;Z<E.length;Z++){const nt=v[Z];nt!==null&&(v[Z]=null,E[Z].disconnect(nt))}C=null,H=null,_.reset(),t.setRenderTarget(u),p=null,d=null,f=null,r=null,S=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(u=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new oi(p.framebufferWidth,p.framebufferHeight,{format:We,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,F=null,L=null;m.depth&&(L=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Vi:Ii,F=m.stencil?Hi:ai);const Y={colorFormat:e.RGBA8,depthFormat:L,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Y),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new oi(d.textureWidth,d.textureHeight,{format:We,type:Tn,depthTexture:new Fl(d.textureWidth,d.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),qt.setContext(r),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(Z){for(let nt=0;nt<Z.removed.length;nt++){const F=Z.removed[nt],L=v.indexOf(F);L>=0&&(v[L]=null,E[L].disconnect(F))}for(let nt=0;nt<Z.added.length;nt++){const F=Z.added[nt];let L=v.indexOf(F);if(L===-1){for(let J=0;J<E.length;J++)if(J>=v.length){v.push(F),L=J;break}else if(v[J]===null){v[J]=F,L=J;break}if(L===-1)break}const Y=E[L];Y&&Y.connect(F)}}const z=new D,$=new D;function G(Z,nt,F){z.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(F.matrixWorld);const L=z.distanceTo($),Y=nt.projectionMatrix.elements,J=F.projectionMatrix.elements,ot=Y[14]/(Y[10]-1),mt=Y[14]/(Y[10]+1),wt=(Y[9]+1)/Y[5],kt=(Y[9]-1)/Y[5],U=(Y[8]-1)/Y[0],re=(J[8]+1)/J[0],zt=ot*U,Ht=ot*re,Ct=L/(-U+re),ee=Ct*-U;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ee),Z.translateZ(Ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Y[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const At=ot+Ct,w=mt+Ct,y=zt-ee,V=Ht+(L-ee),Q=wt*mt/w*At,et=kt*mt/w*At;Z.projectionMatrix.makePerspective(y,V,Q,et,At,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function it(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let nt=Z.near,F=Z.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(F=_.depthFar)),M.near=P.near=A.near=nt,M.far=P.far=A.far=F,(C!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far),A.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const L=Z.parent,Y=M.cameras;it(M,L);for(let J=0;J<Y.length;J++)it(Y[J],L);Y.length===2?G(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),at(Z,M,L)};function at(Z,nt,F){F===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(F.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$a*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let pt=null;function Tt(Z,nt){if(h=nt.getViewerPose(l||a),g=nt,h!==null){const F=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let L=!1;F.length!==M.cameras.length&&(M.cameras.length=0,L=!0);for(let J=0;J<F.length;J++){const ot=F[J];let mt=null;if(p!==null)mt=p.getViewport(ot);else{const kt=f.getViewSubImage(d,ot);mt=kt.viewport,J===0&&(t.setRenderTargetTextures(S,kt.colorTexture,d.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(S))}let wt=x[J];wt===void 0&&(wt=new Ve,wt.layers.enable(J),wt.viewport=new ae,x[J]=wt),wt.matrix.fromArray(ot.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(ot.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(mt.x,mt.y,mt.width,mt.height),J===0&&(M.matrix.copy(wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),L===!0&&M.cameras.push(wt)}const Y=r.enabledFeatures;if(Y&&Y.includes("depth-sensing")){const J=f.getDepthInformation(F[0]);J&&J.isValid&&J.texture&&_.init(t,J,r.renderState)}}for(let F=0;F<E.length;F++){const L=v[F],Y=E[F];L!==null&&Y!==void 0&&Y.update(L,nt,l||a)}pt&&pt(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const qt=new Ul;qt.setAnimationLoop(Tt),this.setAnimationLoop=function(Z){pt=Z},this.dispose=function(){}}}const Jn=new be,T0=new Gt;function w0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ll(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,S,E,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,S,E):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ce&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ce&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const S=t.get(u),E=S.envMap,v=S.envMapRotation;E&&(m.envMap.value=E,Jn.copy(v),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),m.envMapRotation.value.setFromMatrix4(T0.makeRotationFromEuler(Jn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,S,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ce&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const S=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function A0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){const v=E.program;n.uniformBlockBinding(S,v)}function l(S,E){let v=r[S.id];v===void 0&&(g(S),v=h(S),r[S.id]=v,S.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(S,R);const T=t.render.frame;s[S.id]!==T&&(d(S),s[S.id]=T)}function h(S){const E=f();S.__bindingPointIndex=E;const v=i.createBuffer(),R=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=r[S.id],v=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,A=v.length;T<A;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,M=P.length;x<M;x++){const C=P[x];if(p(C,T,x,R)===!0){const H=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let I=0;I<k.length;I++){const z=k[I],$=_(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+q,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,v,R){const T=S.value,A=E+"_"+v;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const P=R[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(S){const E=S.uniforms;let v=0;const R=16;for(let A=0,P=E.length;A<P;A++){const x=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,C=x.length;M<C;M++){const H=x[M],k=Array.isArray(H.value)?H.value:[H.value];for(let q=0,I=k.length;q<I;q++){const z=k[q],$=_(z),G=v%R,it=G%$.boundary,at=G+it;v+=it,at!==0&&R-at<$.storage&&(v+=R-at),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=$.storage}}}const T=v%R;return T>0&&(v+=R-T),S.__size=v,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class C0{constructor(t={}){const{canvas:e=pu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=he,this.toneMapping=zn,this.toneMappingExposure=1;const v=this;let R=!1,T=0,A=0,P=null,x=-1,M=null;const C=new ae,H=new ae;let k=null;const q=new Ut(0);let I=0,z=e.width,$=e.height,G=1,it=null,at=null;const pt=new ae(0,0,z,$),Tt=new ae(0,0,z,$);let qt=!1;const Z=new fo;let nt=!1,F=!1;const L=new Gt,Y=new Gt,J=new D,ot=new ae,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function kt(){return P===null?G:1}let U=n;function re(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const O="webgl2";if(U=re(O,b),U===null)throw re(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let zt,Ht,Ct,ee,At,w,y,V,Q,et,j,Et,ht,gt,Wt,rt,_t,Rt,Lt,vt,Vt,Ot,Qt,N;function lt(){zt=new Ip(U),zt.init(),Ot=new v0(U,zt),Ht=new Ap(U,zt,t,Ot),Ct=new m0(U,zt),Ht.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),ee=new Fp(U),At=new t0,w=new _0(U,zt,Ct,At,Ht,Ot,ee),y=new Rp(v),V=new Dp(v),Q=new Vu(U),Qt=new Tp(U,Q),et=new Up(U,Q,ee,Qt),j=new Bp(U,et,Q,ee),Lt=new Op(U,Ht,w),rt=new Cp(At),Et=new Qm(v,y,V,zt,Ht,Qt,rt),ht=new w0(v,At),gt=new n0,Wt=new c0(zt),Rt=new bp(v,y,V,Ct,j,p,c),_t=new d0(v,j,Ht),N=new A0(U,ee,Ht,Ct),vt=new wp(U,zt,ee),Vt=new Np(U,zt,ee),ee.programs=Et.programs,v.capabilities=Ht,v.extensions=zt,v.properties=At,v.renderLists=gt,v.shadowMap=_t,v.state=Ct,v.info=ee}lt();const K=new b0(v,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=zt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=zt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(z,$,!1))},this.getSize=function(b){return b.set(z,$)},this.setSize=function(b,O,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,$=O,e.width=Math.floor(b*G),e.height=Math.floor(O*G),W===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(z*G,$*G).floor()},this.setDrawingBufferSize=function(b,O,W){z=b,$=O,G=W,e.width=Math.floor(b*W),e.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(pt)},this.setViewport=function(b,O,W,X){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,O,W,X),Ct.viewport(C.copy(pt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Tt)},this.setScissor=function(b,O,W,X){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,O,W,X),Ct.scissor(H.copy(Tt).multiplyScalar(G).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(b){Ct.setScissorTest(qt=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(b=!0,O=!0,W=!0){let X=0;if(b){let B=!1;if(P!==null){const st=P.texture.format;B=st===ho||st===lo||st===co}if(B){const st=P.texture.type,ft=st===Tn||st===ai||st===_r||st===Hi||st===ao||st===oo,Mt=Rt.getClearColor(),St=Rt.getClearAlpha(),Dt=Mt.r,Ft=Mt.g,yt=Mt.b;ft?(g[0]=Dt,g[1]=Ft,g[2]=yt,g[3]=St,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Dt,_[1]=Ft,_[2]=yt,_[3]=St,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}O&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),Wt.dispose(),At.dispose(),y.dispose(),V.dispose(),j.dispose(),Qt.dispose(),N.dispose(),Et.dispose(),K.dispose(),K.removeEventListener("sessionstart",To),K.removeEventListener("sessionend",wo),Gn.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=ee.autoReset,O=_t.enabled,W=_t.autoUpdate,X=_t.needsUpdate,B=_t.type;lt(),ee.autoReset=b,_t.enabled=O,_t.autoUpdate=W,_t.needsUpdate=X,_t.type=B}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nt(b){const O=b.target;O.removeEventListener("dispose",Nt),se(O)}function se(b){Me(b),At.remove(b)}function Me(b){const O=At.get(b).programs;O!==void 0&&(O.forEach(function(W){Et.releaseProgram(W)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,X,B,st){O===null&&(O=mt);const ft=B.isMesh&&B.matrixWorld.determinant()<0,Mt=ih(b,O,W,X,B);Ct.setMaterial(X,ft);let St=W.index,Dt=1;if(X.wireframe===!0){if(St=et.getWireframeAttribute(W),St===void 0)return;Dt=2}const Ft=W.drawRange,yt=W.attributes.position;let $t=Ft.start*Dt,te=(Ft.start+Ft.count)*Dt;st!==null&&($t=Math.max($t,st.start*Dt),te=Math.min(te,(st.start+st.count)*Dt)),St!==null?($t=Math.max($t,0),te=Math.min(te,St.count)):yt!=null&&($t=Math.max($t,0),te=Math.min(te,yt.count));const ne=te-$t;if(ne<0||ne===1/0)return;Qt.setup(B,X,Mt,W,St);let Pe,Yt=vt;if(St!==null&&(Pe=Q.get(St),Yt=Vt,Yt.setIndex(Pe)),B.isMesh)X.wireframe===!0?(Ct.setLineWidth(X.wireframeLinewidth*kt()),Yt.setMode(U.LINES)):Yt.setMode(U.TRIANGLES);else if(B.isLine){let bt=X.linewidth;bt===void 0&&(bt=1),Ct.setLineWidth(bt*kt()),B.isLineSegments?Yt.setMode(U.LINES):B.isLineLoop?Yt.setMode(U.LINE_LOOP):Yt.setMode(U.LINE_STRIP)}else B.isPoints?Yt.setMode(U.POINTS):B.isSprite&&Yt.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Yt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const bt=B._multiDrawStarts,un=B._multiDrawCounts,Kt=B._multiDrawCount,qe=St?Q.get(St).bytesPerElement:1,li=At.get(X).currentProgram.getUniforms();for(let Ne=0;Ne<Kt;Ne++)li.setValue(U,"_gl_DrawID",Ne),Yt.render(bt[Ne]/qe,un[Ne])}else if(B.isInstancedMesh)Yt.renderInstances($t,ne,B.count);else if(W.isInstancedBufferGeometry){const bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,un=Math.min(W.instanceCount,bt);Yt.renderInstances($t,ne,un)}else Yt.render($t,ne)};function Jt(b,O,W){b.transparent===!0&&b.side===an&&b.forceSinglePass===!1?(b.side=Ce,b.needsUpdate=!0,Tr(b,O,W),b.side=kn,b.needsUpdate=!0,Tr(b,O,W),b.side=an):Tr(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),u=Wt.get(W),u.init(O),E.push(u),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const X=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const st=B.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const Mt=st[ft];Jt(Mt,W,B),X.add(Mt)}else Jt(st,W,B),X.add(st)}),E.pop(),u=null,X},this.compileAsync=function(b,O,W=null){const X=this.compile(b,O,W);return new Promise(B=>{function st(){if(X.forEach(function(ft){At.get(ft).currentProgram.isReady()&&X.delete(ft)}),X.size===0){B(b);return}setTimeout(st,10)}zt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Xe=null;function hn(b){Xe&&Xe(b)}function To(){Gn.stop()}function wo(){Gn.start()}const Gn=new Ul;Gn.setAnimationLoop(hn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(b){Xe=b,K.setAnimationLoop(b),b===null?Gn.stop():Gn.start()},K.addEventListener("sessionstart",To),K.addEventListener("sessionend",wo),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,P),u=Wt.get(b,E.length),u.init(O),E.push(u),Y.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Y),F=this.localClippingEnabled,nt=rt.init(this.clippingPlanes,F),m=gt.get(b,S.length),m.init(),S.push(m),K.enabled===!0&&K.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&Ss(st,O,-1/0,v.sortObjects)}Ss(b,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,at),wt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,wt&&Rt.addToRenderList(m,b),this.info.render.frame++,nt===!0&&rt.beginShadows();const W=u.state.shadowsArray;_t.render(W,b,O),nt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(u.setupLights(),O.isArrayCamera){const st=O.cameras;if(B.length>0)for(let ft=0,Mt=st.length;ft<Mt;ft++){const St=st[ft];Co(X,B,b,St)}wt&&Rt.render(b);for(let ft=0,Mt=st.length;ft<Mt;ft++){const St=st[ft];Ao(m,b,St,St.viewport)}}else B.length>0&&Co(X,B,b,O),wt&&Rt.render(b),Ao(m,b,O);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,O),Qt.resetDefaultState(),x=-1,M=null,E.pop(),E.length>0?(u=E[E.length-1],nt===!0&&rt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ss(b,O,W,X){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){X&&ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Y);const ft=j.update(b),Mt=b.material;Mt.visible&&m.push(b,ft,Mt,W,ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const ft=j.update(b),Mt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ot.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ot.copy(ft.boundingSphere.center)),ot.applyMatrix4(b.matrixWorld).applyMatrix4(Y)),Array.isArray(Mt)){const St=ft.groups;for(let Dt=0,Ft=St.length;Dt<Ft;Dt++){const yt=St[Dt],$t=Mt[yt.materialIndex];$t&&$t.visible&&m.push(b,ft,$t,W,ot.z,yt)}}else Mt.visible&&m.push(b,ft,Mt,W,ot.z,null)}}const st=b.children;for(let ft=0,Mt=st.length;ft<Mt;ft++)Ss(st[ft],O,W,X)}function Ao(b,O,W,X){const B=b.opaque,st=b.transmissive,ft=b.transparent;u.setupLightsView(W),nt===!0&&rt.setGlobalState(v.clippingPlanes,W),X&&Ct.viewport(C.copy(X)),B.length>0&&br(B,O,W),st.length>0&&br(st,O,W),ft.length>0&&br(ft,O,W),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Co(b,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new oi(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Mr:Tn,minFilter:ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const st=u.state.transmissionRenderTarget[X.id],ft=X.viewport||C;st.setSize(ft.z,ft.w);const Mt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(q),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear(),wt&&Rt.render(W);const St=v.toneMapping;v.toneMapping=zn;const Dt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),nt===!0&&rt.setGlobalState(v.clippingPlanes,X),br(b,W,X),w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let yt=0,$t=O.length;yt<$t;yt++){const te=O[yt],ne=te.object,Pe=te.geometry,Yt=te.material,bt=te.group;if(Yt.side===an&&ne.layers.test(X.layers)){const un=Yt.side;Yt.side=Ce,Yt.needsUpdate=!0,Ro(ne,W,X,Pe,Yt,bt),Yt.side=un,Yt.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st))}v.setRenderTarget(Mt),v.setClearColor(q,I),Dt!==void 0&&(X.viewport=Dt),v.toneMapping=St}function br(b,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,st=b.length;B<st;B++){const ft=b[B],Mt=ft.object,St=ft.geometry,Dt=X===null?ft.material:X,Ft=ft.group;Mt.layers.test(W.layers)&&Ro(Mt,O,W,St,Dt,Ft)}}function Ro(b,O,W,X,B,st){b.onBeforeRender(v,O,W,X,B,st),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,O,W,X,b,st),B.transparent===!0&&B.side===an&&B.forceSinglePass===!1?(B.side=Ce,B.needsUpdate=!0,v.renderBufferDirect(W,O,X,B,b,st),B.side=kn,B.needsUpdate=!0,v.renderBufferDirect(W,O,X,B,b,st),B.side=an):v.renderBufferDirect(W,O,X,B,b,st),b.onAfterRender(v,O,W,X,B,st)}function Tr(b,O,W){O.isScene!==!0&&(O=mt);const X=At.get(b),B=u.state.lights,st=u.state.shadowsArray,ft=B.state.version,Mt=Et.getParameters(b,B.state,st,O,W),St=Et.getProgramCacheKey(Mt);let Dt=X.programs;X.environment=b.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(b.isMeshStandardMaterial?V:y).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Nt),Dt=new Map,X.programs=Dt);let Ft=Dt.get(St);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===ft)return Lo(b,Mt),Ft}else Mt.uniforms=Et.getUniforms(b),b.onBeforeCompile(Mt,v),Ft=Et.acquireProgram(Mt,St),Dt.set(St,Ft),X.uniforms=Mt.uniforms;const yt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(yt.clippingPlanes=rt.uniform),Lo(b,Mt),X.needsLights=sh(b),X.lightsStateVersion=ft,X.needsLights&&(yt.ambientLightColor.value=B.state.ambient,yt.lightProbe.value=B.state.probe,yt.directionalLights.value=B.state.directional,yt.directionalLightShadows.value=B.state.directionalShadow,yt.spotLights.value=B.state.spot,yt.spotLightShadows.value=B.state.spotShadow,yt.rectAreaLights.value=B.state.rectArea,yt.ltc_1.value=B.state.rectAreaLTC1,yt.ltc_2.value=B.state.rectAreaLTC2,yt.pointLights.value=B.state.point,yt.pointLightShadows.value=B.state.pointShadow,yt.hemisphereLights.value=B.state.hemi,yt.directionalShadowMap.value=B.state.directionalShadowMap,yt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,yt.spotShadowMap.value=B.state.spotShadowMap,yt.spotLightMatrix.value=B.state.spotLightMatrix,yt.spotLightMap.value=B.state.spotLightMap,yt.pointShadowMap.value=B.state.pointShadowMap,yt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function Po(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ss.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Lo(b,O){const W=At.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function ih(b,O,W,X,B){O.isScene!==!0&&(O=mt),w.resetTextureUnits();const st=O.fog,ft=X.isMeshStandardMaterial?O.environment:null,Mt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xi,St=(X.isMeshStandardMaterial?V:y).get(X.envMap||ft),Dt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ft=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),yt=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,te=!!W.morphAttributes.color;let ne=zn;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ne=v.toneMapping);const Pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=Pe!==void 0?Pe.length:0,bt=At.get(X),un=u.state.lights;if(nt===!0&&(F===!0||b!==M)){const Be=b===M&&X.id===x;rt.setState(X,b,Be)}let Kt=!1;X.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==un.state.version||bt.outputColorSpace!==Mt||B.isBatchedMesh&&bt.batching===!1||!B.isBatchedMesh&&bt.batching===!0||B.isBatchedMesh&&bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&bt.instancing===!1||!B.isInstancedMesh&&bt.instancing===!0||B.isSkinnedMesh&&bt.skinning===!1||!B.isSkinnedMesh&&bt.skinning===!0||B.isInstancedMesh&&bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&bt.instancingMorph===!1&&B.morphTexture!==null||bt.envMap!==St||X.fog===!0&&bt.fog!==st||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==rt.numPlanes||bt.numIntersection!==rt.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Ft||bt.morphTargets!==yt||bt.morphNormals!==$t||bt.morphColors!==te||bt.toneMapping!==ne||bt.morphTargetsCount!==Yt)&&(Kt=!0):(Kt=!0,bt.__version=X.version);let qe=bt.currentProgram;Kt===!0&&(qe=Tr(X,O,B));let li=!1,Ne=!1,Ji=!1;const ie=qe.getUniforms(),rn=bt.uniforms;if(Ct.useProgram(qe.program)&&(li=!0,Ne=!0,Ji=!0),X.id!==x&&(x=X.id,Ne=!0),li||M!==b){Ct.buffers.depth.getReversed()?(L.copy(b.projectionMatrix),gu(L),_u(L),ie.setValue(U,"projectionMatrix",L)):ie.setValue(U,"projectionMatrix",b.projectionMatrix),ie.setValue(U,"viewMatrix",b.matrixWorldInverse);const wn=ie.map.cameraPosition;wn!==void 0&&wn.setValue(U,J.setFromMatrixPosition(b.matrixWorld)),Ht.logarithmicDepthBuffer&&ie.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ie.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ne=!0,Ji=!0)}if(B.isSkinnedMesh){ie.setOptional(U,B,"bindMatrix"),ie.setOptional(U,B,"bindMatrixInverse");const Be=B.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ie.setValue(U,"boneTexture",Be.boneTexture,w))}B.isBatchedMesh&&(ie.setOptional(U,B,"batchingTexture"),ie.setValue(U,"batchingTexture",B._matricesTexture,w),ie.setOptional(U,B,"batchingIdTexture"),ie.setValue(U,"batchingIdTexture",B._indirectTexture,w),ie.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&ie.setValue(U,"batchingColorTexture",B._colorsTexture,w));const Zi=W.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&Lt.update(B,W,qe),(Ne||bt.receiveShadow!==B.receiveShadow)&&(bt.receiveShadow=B.receiveShadow,ie.setValue(U,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(rn.envMap.value=St,rn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(rn.envMapIntensity.value=O.environmentIntensity),Ne&&(ie.setValue(U,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&rh(rn,Ji),st&&X.fog===!0&&ht.refreshFogUniforms(rn,st),ht.refreshMaterialUniforms(rn,X,G,$,u.state.transmissionRenderTarget[b.id]),ss.upload(U,Po(bt),rn,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ss.upload(U,Po(bt),rn,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ie.setValue(U,"center",B.center),ie.setValue(U,"modelViewMatrix",B.modelViewMatrix),ie.setValue(U,"normalMatrix",B.normalMatrix),ie.setValue(U,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let wn=0,An=Be.length;wn<An;wn++){const Do=Be[wn];N.update(Do,qe),N.bind(Do,qe)}}return qe}function rh(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function sh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,O,W){At.get(b.texture).__webglTexture=O,At.get(b.depthTexture).__webglTexture=W;const X=At.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const W=At.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){P=b,T=O,A=W;let X=!0,B=null,st=!1,ft=!1;if(b){const St=At.get(b);if(St.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(St.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(St.__hasExternalTextures)w.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const yt=b.depthTexture;if(St.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(b.width!==yt.image.width||b.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ft=!0);const Ft=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?B=Ft[O][W]:B=Ft[O],st=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?B=At.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?B=Ft[W]:B=Ft,C.copy(b.viewport),H.copy(b.scissor),k=b.scissorTest}else C.copy(pt).multiplyScalar(G).floor(),H.copy(Tt).multiplyScalar(G).floor(),k=qt;if(Ct.bindFramebuffer(U.FRAMEBUFFER,B)&&X&&Ct.drawBuffers(b,B),Ct.viewport(C),Ct.scissor(H),Ct.setScissorTest(k),st){const St=At.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,St.__webglTexture,W)}else if(ft){const St=At.get(b.texture),Dt=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.__webglTexture,W||0,Dt)}x=-1},this.readRenderTargetPixels=function(b,O,W,X,B,st,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){Ct.bindFramebuffer(U.FRAMEBUFFER,Mt);try{const St=b.texture,Dt=St.format,Ft=St.type;if(!Ht.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-X&&W>=0&&W<=b.height-B&&U.readPixels(O,W,X,B,Ot.convert(Dt),Ot.convert(Ft),st)}finally{const St=P!==null?At.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,X,B,st,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const St=b.texture,Dt=St.format,Ft=St.type;if(!Ht.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-X&&W>=0&&W<=b.height-B){Ct.bindFramebuffer(U.FRAMEBUFFER,Mt);const yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.bufferData(U.PIXEL_PACK_BUFFER,st.byteLength,U.STREAM_READ),U.readPixels(O,W,X,B,Ot.convert(Dt),Ot.convert(Ft),0);const $t=P!==null?At.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,$t);const te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mu(U,te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,st),U.deleteBuffer(yt),U.deleteSync(te),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,W=0){b.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(b.image.width*X),st=Math.floor(b.image.height*X),ft=O!==null?O.x:0,Mt=O!==null?O.y:0;w.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,ft,Mt,B,st),Ct.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,X=null,B=0){b.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let st,ft,Mt,St,Dt,Ft,yt,$t,te;const ne=b.isCompressedTexture?b.mipmaps[B]:b.image;W!==null?(st=W.max.x-W.min.x,ft=W.max.y-W.min.y,Mt=W.isBox3?W.max.z-W.min.z:1,St=W.min.x,Dt=W.min.y,Ft=W.isBox3?W.min.z:0):(st=ne.width,ft=ne.height,Mt=ne.depth||1,St=0,Dt=0,Ft=0),X!==null?(yt=X.x,$t=X.y,te=X.z):(yt=0,$t=0,te=0);const Pe=Ot.convert(O.format),Yt=Ot.convert(O.type);let bt;O.isData3DTexture?(w.setTexture3D(O,0),bt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),bt=U.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),bt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const un=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),qe=U.getParameter(U.UNPACK_SKIP_PIXELS),li=U.getParameter(U.UNPACK_SKIP_ROWS),Ne=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ne.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,Dt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);const Ji=b.isDataArrayTexture||b.isData3DTexture,ie=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const rn=At.get(b),Zi=At.get(O),Be=At.get(rn.__renderTarget),wn=At.get(Zi.__renderTarget);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,Be.__webglFramebuffer),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let An=0;An<Mt;An++)Ji&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(b).__webglTexture,B,Ft+An),b.isDepthTexture?(ie&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(O).__webglTexture,B,te+An),U.blitFramebuffer(St,Dt,st,ft,yt,$t,st,ft,U.DEPTH_BUFFER_BIT,U.NEAREST)):ie?U.copyTexSubImage3D(bt,B,yt,$t,te+An,St,Dt,st,ft):U.copyTexSubImage2D(bt,B,yt,$t,te+An,St,Dt,st,ft);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ie?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(bt,B,yt,$t,te,st,ft,Mt,Pe,Yt,ne.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,B,yt,$t,te,st,ft,Mt,Pe,ne.data):U.texSubImage3D(bt,B,yt,$t,te,st,ft,Mt,Pe,Yt,ne):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,yt,$t,st,ft,Pe,Yt,ne.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,yt,$t,ne.width,ne.height,Pe,ne.data):U.texSubImage2D(U.TEXTURE_2D,B,yt,$t,st,ft,Pe,Yt,ne);U.pixelStorei(U.UNPACK_ROW_LENGTH,un),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,qe),U.pixelStorei(U.UNPACK_SKIP_ROWS,li),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ne),B===0&&O.generateMipmaps&&U.generateMipmap(bt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W=null,X=null,B=0){return b.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,W,X,B)},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),Ct.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,Ct.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class hs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new hs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class R0 extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new be,this.environmentIntensity=1,this.environmentRotation=new be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mo extends ve{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Re,h=Re,f,d){super(null,a,o,c,l,h,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi extends ce{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new Gt,Nc=new Gt,$r=[],Fc=new ci,P0=new Gt,rr=new Te,sr=new yr;class Hl extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,P0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Fc.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(Fc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),sr.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,bi),Nc.multiplyMatrices(n,bi),rr.matrixWorld=Nc,rr.raycast(t,$r);for(let a=0,o=$r.length;a<o;a++){const c=$r[a];c.instanceId=s,c.object=this,e.push(c)}$r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new mo(new Float32Array(r*this.count),r,this.count,ms,en));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ki extends ve{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,p=(a-h)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new xt:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],a=[],o=new D,c=new Gt;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(_e(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(_e(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class go extends ln{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new xt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*f+this.aX,l=d*f+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class L0 extends go{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _o(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,f){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,p*=h,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Yr=new D,Qs=new _o,ta=new _o,ea=new _o;class D0 extends ln{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Yr.subVectors(r[0],r[1]).add(r[0]),l=Yr);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Yr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Qs.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,_,m),ta.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,_,m),ea.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Qs.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),ta.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),ea.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(Qs.calc(c),ta.calc(c),ea.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Oc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function I0(i,t){const e=1-i;return e*e*t}function U0(i,t){return 2*(1-i)*i*t}function N0(i,t){return i*i*t}function dr(i,t,e,n){return I0(i,t)+U0(i,e)+N0(i,n)}function F0(i,t){const e=1-i;return e*e*e*t}function O0(i,t){const e=1-i;return 3*e*e*i*t}function B0(i,t){return 3*(1-i)*i*i*t}function z0(i,t){return i*i*i*t}function pr(i,t,e,n,r){return F0(i,t)+O0(i,e)+B0(i,n)+z0(i,r)}class Vl extends ln{constructor(t=new xt,e=new xt,n=new xt,r=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new xt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,r.x,s.x,a.x,o.x),pr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class k0 extends ln{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,r.x,s.x,a.x,o.x),pr(t,r.y,s.y,a.y,o.y),pr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gl extends ln{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class H0 extends ln{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wl extends ln{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class V0 extends ln{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y),dr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xl extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Oc(o,c.x,l.x,h.x,f.x),Oc(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new xt().fromArray(r))}return this}}var Bc=Object.freeze({__proto__:null,ArcCurve:L0,CatmullRomCurve3:D0,CubicBezierCurve:Vl,CubicBezierCurve3:k0,EllipseCurve:go,LineCurve:Gl,LineCurve3:H0,QuadraticBezierCurve:Wl,QuadraticBezierCurve3:V0,SplineCurve:Xl});class G0 extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Bc[r.type]().fromJSON(r))}return this}}class W0 extends G0{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Gl(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Wl(this.currentPoint.clone(),new xt(t,e),new xt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Vl(this.currentPoint.clone(),new xt(t,e),new xt(n,r),new xt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new go(t,e,n,r,s,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class vo extends Ue{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=_e(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/e,f=new D,d=new xt,p=new D,g=new D,_=new D;let m=0,u=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,u=t[S+1].y-t[S].y,p.x=u*1,p.y=-m,p.z=u*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,u=t[S+1].y-t[S].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){const E=n+S*h*r,v=Math.sin(E),R=Math.cos(E);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*v,f.y=t[T].y,f.z=t[T].x*R,a.push(f.x,f.y,f.z),d.x=S/e,d.y=T/(t.length-1),o.push(d.x,d.y);const A=c[3*T+0]*v,P=c[3*T+1],x=c[3*T+0]*R;l.push(A,P,x)}}for(let S=0;S<e;S++)for(let E=0;E<t.length-1;E++){const v=E+S*t.length,R=v,T=v+t.length,A=v+t.length+1,P=v+1;s.push(R,T,P),s.push(A,P,T)}this.setIndex(s),this.setAttribute("position",new oe(a,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.points,t.segments,t.phiStart,t.phiLength)}}class xo extends vo{constructor(t=1,e=1,n=4,r=8){const s=new W0;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new xo(t.radius,t.length,t.capSegments,t.radialSegments)}}class vs extends Ue{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let g=0;const _=[],m=n/2;let u=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(p,2));function S(){const v=new D,R=new D;let T=0;const A=(e-t)/n;for(let P=0;P<=s;P++){const x=[],M=P/s,C=M*(e-t)+t;for(let H=0;H<=r;H++){const k=H/r,q=k*c+o,I=Math.sin(q),z=Math.cos(q);R.x=C*I,R.y=-M*n+m,R.z=C*z,f.push(R.x,R.y,R.z),v.set(I,A,z).normalize(),d.push(v.x,v.y,v.z),p.push(k,1-M),x.push(g++)}_.push(x)}for(let P=0;P<r;P++)for(let x=0;x<s;x++){const M=_[x][P],C=_[x+1][P],H=_[x+1][P+1],k=_[x][P+1];(t>0||x!==0)&&(h.push(M,C,k),T+=3),(e>0||x!==s-1)&&(h.push(C,H,k),T+=3)}l.addGroup(u,T,0),u+=T}function E(v){const R=g,T=new xt,A=new D;let P=0;const x=v===!0?t:e,M=v===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let H=0;H<=r;H++){const q=H/r*c+o,I=Math.cos(q),z=Math.sin(q);A.x=x*z,A.y=m*M,A.z=x*I,f.push(A.x,A.y,A.z),d.push(0,M,0),T.x=I*.5+.5,T.y=z*.5*M+.5,p.push(T.x,T.y),g++}for(let H=0;H<r;H++){const k=R+H,q=C+H;v===!0?h.push(q,q+1,k):h.push(q+1,q,k),P+=3}l.addGroup(u,P,v===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mo extends vs{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Mo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xs extends Ue{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),h(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new D,v=new D,R=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],E),p(e[T+1],v),p(e[T+2],R),c(E,v,R,S)}function c(S,E,v,R){const T=R+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const x=S.clone().lerp(v,P/T),M=E.clone().lerp(v,P/T),C=T-P;for(let H=0;H<=C;H++)H===0&&P===T?A[P][H]=x:A[P][H]=x.clone().lerp(M,H/C)}for(let P=0;P<T;P++)for(let x=0;x<2*(T-P)-1;x++){const M=Math.floor(x/2);x%2===0?(d(A[P][M+1]),d(A[P+1][M]),d(A[P][M])):(d(A[P][M+1]),d(A[P+1][M+1]),d(A[P+1][M]))}}function l(S){const E=new D;for(let v=0;v<s.length;v+=3)E.x=s[v+0],E.y=s[v+1],E.z=s[v+2],E.normalize().multiplyScalar(S),s[v+0]=E.x,s[v+1]=E.y,s[v+2]=E.z}function h(){const S=new D;for(let E=0;E<s.length;E+=3){S.x=s[E+0],S.y=s[E+1],S.z=s[E+2];const v=m(S)/2/Math.PI+.5,R=u(S)/Math.PI+.5;a.push(v,1-R)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const E=a[S+0],v=a[S+2],R=a[S+4],T=Math.max(E,v,R),A=Math.min(E,v,R);T>.9&&A<.1&&(E<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),R<.2&&(a[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function p(S,E){const v=S*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function g(){const S=new D,E=new D,v=new D,R=new D,T=new xt,A=new xt,P=new xt;for(let x=0,M=0;x<s.length;x+=9,M+=6){S.set(s[x+0],s[x+1],s[x+2]),E.set(s[x+3],s[x+4],s[x+5]),v.set(s[x+6],s[x+7],s[x+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),R.copy(S).add(E).add(v).divideScalar(3);const C=m(R);_(T,M+0,S,C),_(A,M+2,E,C),_(P,M+4,v,C)}}function _(S,E,v,R){R<0&&S.x===1&&(a[E]=S.x-1),v.x===0&&v.z===0&&(a[E]=R/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.vertices,t.indices,t.radius,t.details)}}class So extends xs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new So(t.radius,t.detail)}}class Ms extends xs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ms(t.radius,t.detail)}}class yo extends Ue{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new D,d=new D,p=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const S=[],E=u/n;let v=0;u===0&&a===0?v=.5/e:u===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const T=R/e;f.x=-t*Math.cos(r+T*s)*Math.sin(a+E*o),f.y=t*Math.cos(a+E*o),f.z=t*Math.sin(r+T*s)*Math.sin(a+E*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-E),S.push(l++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<e;S++){const E=h[u][S+1],v=h[u][S],R=h[u+1][S],T=h[u+1][S+1];(u!==0||a>0)&&p.push(E,v,T),(u!==n-1||c<Math.PI)&&p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class us extends Ue{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new D,f=new D,d=new D;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,S=(r+1)*p+g;a.push(_,m,S),a.push(m,u,S)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class X0 extends $i{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ge extends $i{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new be,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const zc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class q0{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const $0=new q0;class Eo{constructor(t){this.manager=t!==void 0?t:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Y0 extends Eo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=zc.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=vr("img");function c(){h(),zc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){h(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class K0 extends Eo{constructor(t){super(t)}load(t,e,n,r){const s=new ve,a=new Y0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class ql extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class J0 extends ql{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new Gt,kc=new D,Hc=new D;class Z0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class j0 extends Z0{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q0 extends ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new j0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);const xr="#221f2e";let Un=null;function tg(){return Un||(Un=new mo(new Uint8Array([96,178,255]),3,1,ms),Un.minFilter=Un.magFilter=Re,Un.generateMipmaps=!1,Un.needsUpdate=!0,Un)}function Vc(i="#ffffff",t={}){var n;const e=new X0({color:i,gradientMap:tg(),vertexColors:!!t.vertexColors,transparent:!!t.transparent,opacity:(n=t.opacity)!=null?n:1});return t.flash&&ng(e),e}function eg(i=.045,t=xr){const e=new Er({color:t,side:Ce});return e.onBeforeCompile=n=>{n.uniforms.uOutline={value:i},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uOutline;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normalize(normal) * uOutline;`)},e.customProgramCacheKey=()=>`outline${i}`,e}function ng(i){i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aFlash;
varying float vFlash;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlash = aFlash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vFlash;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), vFlash);`)},i.customProgramCacheKey=()=>"flash"}function ig(i,t="#bfe3ff",e="#8a7a6a"){i.add(new J0(t,e,1.25));const n=new Q0("#fff4e0",2.1);return n.position.set(-6,14,8),i.add(n),i.add(n.target),n}function Zn(i,t,e,n,r,s,a="#ffffff",o){i.font=`${Math.round(r)}px 'Game Display', 'PingFang SC', sans-serif`;const c=i.measureText(t).width,l=o?r*.95:0,h=c+l+r*.7,f=r*1.22,d=e-h/2,p=n-f/2;Oi(i,d,p+r*.1,h,f,f*.36,xr),Oi(i,d,p,h,f,f*.36,s,xr,Math.max(1.5,r*.09)),o&&o(i,d+r*.35+l/2,n,r*.8),Li(i,t,d+r*.35+l+c/2,n,r,a)}const Gc=new Map;function Wc(i,t){const e=i+t;let n=Gc.get(e);if(!n){const r=i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" ').replace(/currentColor/g,t);n=new Image,n.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,Gc.set(e,n)}return n}function $l(i,t,e,n,r){t.complete&&t.naturalWidth>0&&i.drawImage(t,e-r/2,n-r/2,r,r)}class rg{constructor(){this.list=[]}add(t){this.list.length>160||this.list.push({vx:0,vy:0,t:0,color:"#ffffff",a:0,...t})}clear(){this.list.length=0}spark(t,e,n){this.add({kind:"flash",x:t,y:e,life:.09,size:n*.9,color:"#fff3c4"});for(let r=0;r<3;r++)this.add({kind:"spark",x:t,y:e,life:.16,size:n,a:Math.PI/2+(r-1)*.65+(Math.random()-.5)*.4,color:"#ffe08a"})}muzzle(t,e,n){this.add({kind:"flash",x:t,y:e,life:.07,size:n,color:"#ffd77a"})}puff(t,e,n,r=4,s="#e9e4dc"){for(let a=0;a<r;a++){const o=a/r*Math.PI*2+Math.random()*.8;this.add({kind:"puff",x:t+Math.cos(o)*n*.35,y:e+Math.sin(o)*n*.2,vx:Math.cos(o)*n*.9,vy:-n*(.5+Math.random()*.5),life:.65+Math.random()*.2,size:n*(.45+Math.random()*.25),color:s})}}ring(t,e,n,r,s=.55){this.add({kind:"ring",x:t,y:e,life:s,size:n,color:r,a:.32})}fireball(t,e,n){this.puff(t,e-n*.35,n*.85,4,"#7a6e66"),this.add({kind:"fire",x:t,y:e,life:.85,size:n}),this.add({kind:"fire",x:t-n*.4,y:e+n*.15,life:.7,size:n*.6}),this.add({kind:"fire",x:t+n*.45,y:e-n*.1,life:.75,size:n*.55});for(let r=0;r<9;r++){const s=-Math.PI/2+(Math.random()-.5)*2.6,a=n*(2.2+Math.random()*1.6);this.add({kind:"chunk",x:t,y:e,vx:Math.cos(s)*a,vy:Math.sin(s)*a,life:.9,size:n*(.07+Math.random()*.05),color:r%3?"#3a2a26":"#c9453a",a:Math.random()*6})}}step(t){for(const e of this.list)e.t+=t,e.x+=e.vx*t,e.y+=e.vy*t,e.kind==="chunk"?e.vy+=1400*t:e.kind==="puff"&&(e.vx*=.9,e.vy*=.94);this.list=this.list.filter(e=>e.t<e.life)}draw(t){for(const e of this.list){const n=e.t/e.life;switch(t.save(),e.kind){case"spark":{t.globalCompositeOperation="lighter",t.globalAlpha=1-n;const r=e.size*(.2+.9*n),s=r+e.size*.7*(1-n);t.strokeStyle=e.color,t.lineWidth=Math.max(1.5,e.size*.14),t.lineCap="round",t.beginPath(),t.moveTo(e.x+Math.cos(e.a)*r,e.y+Math.sin(e.a)*r),t.lineTo(e.x+Math.cos(e.a)*s,e.y+Math.sin(e.a)*s),t.stroke();break}case"flash":{t.globalCompositeOperation="lighter",t.globalAlpha=1-n;const r=e.size*(.6+.6*n),s=t.createRadialGradient(e.x,e.y,0,e.x,e.y,r);s.addColorStop(0,"rgba(255,255,240,1)"),s.addColorStop(.35,e.color),s.addColorStop(1,"rgba(255,160,40,0)"),t.fillStyle=s,t.beginPath(),t.arc(e.x,e.y,r,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,250,220,0.9)",t.beginPath();for(let a=0;a<8;a++){const o=a*Math.PI/4,c=a%2?r*.18:r*1.25;t.lineTo(e.x+Math.cos(o)*c,e.y+Math.sin(o)*c)}t.closePath(),t.fill();break}case"puff":{t.globalAlpha=.75*(1-n)*Math.min(1,e.t/.06);const r=e.size*(.7+.8*n),s=t.createRadialGradient(e.x-r*.25,e.y-r*.3,r*.1,e.x,e.y,r);s.addColorStop(0,e.color),s.addColorStop(.7,e.color),s.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=s,t.beginPath(),t.arc(e.x,e.y,r,0,Math.PI*2),t.fill();break}case"ring":{t.globalCompositeOperation="lighter",t.globalAlpha=(1-n)*.9,t.strokeStyle=e.color,t.lineWidth=e.size*.12*(1-n)+2,t.beginPath(),t.ellipse(e.x,e.y,e.size*(.55+.75*n),e.size*e.a*(.55+.75*n),0,0,Math.PI*2),t.stroke();break}case"fire":{t.globalCompositeOperation="lighter";const r=.35+.65*Math.min(1,n/.3);t.globalAlpha=n<.45?1:1-(n-.45)/.55;const s=e.size*r,a=t.createRadialGradient(e.x,e.y,0,e.x,e.y,s);a.addColorStop(0,"rgba(255,255,230,1)"),a.addColorStop(.25,"rgba(255,214,90,0.95)"),a.addColorStop(.6,"rgba(255,120,30,0.75)"),a.addColorStop(1,"rgba(200,40,10,0)"),t.fillStyle=a,t.beginPath(),t.arc(e.x,e.y,s,0,Math.PI*2),t.fill();break}case"chunk":{t.globalAlpha=1-Math.max(0,(n-.6)/.4),t.translate(e.x,e.y),t.rotate(e.a+e.t*9),t.fillStyle=e.color,t.fillRect(-e.size,-e.size*.7,e.size*2,e.size*1.4);break}}t.restore()}}}function ia(i,t,e,n,r=0){const s=n/100;i.save(),i.translate(t,e),i.rotate(r),i.scale(s,s),i.lineJoin="round",i.lineCap="round";const a="#1d1f26",o=()=>{i.beginPath(),i.moveTo(-9,40),i.lineTo(-9,8),i.arc(0,8,9,Math.PI,0),i.lineTo(9,34),i.arc(16,40,7.5,-Math.PI*.95,Math.PI*.2),i.arc(22,52,7.5,-Math.PI*.75,Math.PI*.3),i.arc(24,64,7.5,-Math.PI*.6,Math.PI*.45),i.quadraticCurveTo(24,82,14,88),i.lineTo(-14,88),i.quadraticCurveTo(-26,74,-27,60),i.quadraticCurveTo(-28,48,-18,47),i.quadraticCurveTo(-11,47,-9,54),i.closePath()};i.save(),i.translate(4,5),o(),i.fillStyle="rgba(0,0,0,0.28)",i.fill(),i.restore(),o(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=5,i.strokeStyle=a,i.stroke(),i.lineWidth=3,i.beginPath(),i.moveTo(9,36),i.quadraticCurveTo(13,44,17,46),i.moveTo(14,50),i.quadraticCurveTo(18,57,23,58),i.moveTo(-9,54),i.quadraticCurveTo(-4,62,2,64),i.stroke(),i.beginPath(),i.moveTo(-16,86),i.lineTo(16,86),i.lineTo(17,98),i.lineTo(-17,98),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=5,i.stroke(),i.restore()}function sg(i,t,e,n,r){i.globalAlpha=r,i.font="21px 'Game Display', 'PingFang SC', sans-serif";const s=i.measureText(e).width,a=s+(t?62:36);Oi(i,180-a/2,n+3,a,42,21,"rgba(40,26,14,0.35)"),Oi(i,180-a/2,n,a,42,21,"rgba(255,244,214,0.9)","rgba(150,110,60,0.8)",2),t&&$l(i,t,180-a/2+26,n+21,26),Li(i,e,180-a/2+(t?44:18)+s/2,n+21,21,"#4a3320","rgba(255,244,214,0.9)"),i.globalAlpha=1}const ue=4;function fs(i){const t=2*ue/i;return Array.from({length:i},(e,n)=>[-ue+n*t,-ue+(n+1)*t])}function as(i,t){const e=Math.floor((i+ue)/(2*ue)*t);return e<0?0:e>=t?t-1:e}const cn=(i,t)=>-ue+(t+.5)*2*ue/i;function ag(i,t=20,e=22){let n=e-t;return i.map((r,s)=>{var c;const a=r.trim().split(/\s+/);let o=0;for(;a.length&&/^>-?\d+(\.\d+)?$/.test(a[0]);)o+=Number(a.shift().slice(1));return n+=t+o,{z:n,kind:(c=a[0])!=null?c:"",args:a.slice(1),i:s}})}function og(i,t,e){return t>i?Math.min(t,i+e):Math.max(t,i-e)}const Ni=(i,t=.6)=>Math.max(-ue+t,Math.min(ue-t,i));function fr(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}let Ti=null,Ka="",Fi=1,Xc=1;const ar=[];let Kr=0;function cg(){if(Ti||Ka)return Ti;try{const i=document.createElement("canvas"),t=i.getContext("webgl2",{antialias:!0,alpha:!1,powerPreference:"high-performance",depth:!0,stencil:!1});if(!t)throw new Error("no WebGL 2");Ti=new C0({canvas:i,context:t,antialias:!0}),Ti.outputColorSpace=he,Xc=typeof navigator<"u"&&navigator.webdriver?1:Math.min(window.devicePixelRatio||1,2),Fi=Xc}catch(i){Ka=i instanceof Error?i.message:String(i),Ti=null}return Ti}const lg=()=>Ka;function hg(i,t,e,n){const r=cg();if(!r)return!1;ug();const s=Math.max(1,innerWidth),a=Math.max(1,innerHeight),o=Math.round(s*Fi),c=Math.round(a*Fi),l=r.domElement;(l.width!==o||l.height!==c)&&r.setSize(o,c,!1);const h=s/a;return Math.abs(n.aspect-h)>1e-4&&(n.aspect=h,n.updateProjectionMatrix()),r.render(e,n),globalThis.__tris=r.info.render.triangles,i.drawImage(l,t.x,t.y,t.w,t.h),!0}function ug(){const i=performance.now();if(Kr&&i-Kr<250&&ar.push(i-Kr),Kr=i,ar.length<120)return;const t=ar.reduce((e,n)=>e+n,0)/ar.length;ar.length=0,t>22&&Fi>1&&(Fi=Math.max(1,Fi-.25))}const or=new D;function fg(i,t,e,n,r){or.set(e,n,r).applyMatrix4(i.matrixWorldInverse);const s=-or.z;return or.applyMatrix4(i.projectionMatrix),{x:t.x+(or.x+1)/2*t.w,y:t.y+(1-or.y)/2*t.h,depth:s}}function wi(i,t,e){return t.h/(2*Math.max(.1,e)*Math.tan(i.fov*Math.PI/360))}class dg{constructor(){this.tx=0,this.mpu=.03,this.x0=180,this.down=!1,this.startX=0,this.startTx=0,this.moved=!1,this.gain=1.25}laneAt(t){return Ni((t-this.x0)*this.mpu)}screenAt(t){return this.x0+t/this.mpu}press(t,e){this.down=!0,this.moved=!1,this.startX=t,this.startTx=Math.abs(this.tx-e)<.05?e:this.tx}drag(t){this.down&&(Math.abs(t-this.startX)>4&&(this.moved=!0),this.moved&&(this.tx=Ni(this.startTx+(t-this.startX)*this.mpu*this.gain)))}release(t){this.down&&(this.down=!1,this.moved||(this.tx=this.laneAt(t)))}get held(){return this.down}path(t,e,n){const r=this.screenAt(t),s=r+(Ni(e)-t)/(this.mpu*this.gain),a=4;return Array.from({length:a+1},(o,c)=>({x:r+(s-r)*c/a,y:n}))}}function pg(i,t,e=4096){const n=i.reduce((h,f)=>h*Math.max(1,f),1),r=Math.min(n,e);let s=i.map(()=>0),a=null,o=0,c=null;const l=i.map(()=>0);for(let h=0;h<r;h++){let f=h;for(let p=i.length-1;p>=0;p--){const g=Math.max(1,i[p]);l[p]=f%g,f=Math.floor(f/g)}const d=t(l);d.won&&(o++,c=c===null?d.score:Math.min(c,d.score)),(!a||gg(d,a))&&(a=d,s=l.slice())}return{best:s,bestOutcome:a!=null?a:{won:!1,score:0,time:0},routes:r,winShare:r?o/r:0,worstWin:o>1?c:null,capped:n>e}}function mg(i,t,e,n=1/0,r=[],s=4096){let a=0;const o=i.map((f,d)=>{var p;return t[d]>=0?t[d]:a++<n?-1:Math.max(0,Math.min(f-1,(p=r[d])!=null?p:0))}),c=i.map((f,d)=>o[d]>=0?1:f),l=f=>f.map((d,p)=>o[p]>=0?o[p]:d),h=pg(c,f=>e(l(f)),s);return{...h,best:l(h.best)}}const gg=(i,t)=>i.won!==t.won?i.won:i.score!==t.score?i.score>t.score:i.time<t.time,Ja=1/60,_g=7,vg=10,ge=.5,bn=.25,Sn=10,si=[1,2,3,5,10],xg=/^([+\-x×/÷])(\d+(?:\.\d+)?)(p)?$/;function Mg(i,t,e){if(i===".")return null;const n=xg.exec(i);if(!n)throw new Error(`bad gate "${i}"`);const r=n[1],s=Number(n[2]),a=!!n[3];if(r==="+"||r==="-"){const o=r==="+"?s:-s;return a?{row:t,slot:e,kind:"flat",v:o,good:o>=0,text:`${o>=0?"+":"−"}${s}`}:{row:t,slot:e,kind:"pct",v:o,good:o>=0,text:`${o>=0?"+":"−"}${s}%`}}return r==="/"||r==="÷"?{row:t,slot:e,kind:"/",v:s,good:!1,text:`÷${s}`}:{row:t,slot:e,kind:"x",v:s,good:s>=1,text:`×${s}`}}function Sg(i,t){const e=t.kind==="pct"?i*(1+t.v/100):t.kind==="flat"?i+t.v:t.kind==="x"?i*t.v:i/t.v;return Math.max(0,Math.floor(e+1e-9))}function qc(i){var r,s;const t=ag(i.rows,(r=i.gap)!=null?r:16,22),e={t:0,z:0,x:0,tx:0,n:i.start,y:0,phase:"run",speed:(s=i.speed)!=null?s:_g,gates:[],piles:[],pileRows:[],holes:[],ledges:[],saws:[],rival:[],rivalN:i.start,end:0,climbed:0,rivalClimb:0,laid:0,why:"",ev:[],quiet:!1};let n=0;for(const a of t)if(n=a.z,a.kind==="p"){const o=a.args.length,c={i:e.pileRows.length,z:a.z,k:o,passed:!1,choice:-1};e.pileRows.push(c),a.args.forEach((l,h)=>{if(l===".")return;const f=Number(l);if(!(f>0))throw new Error(`row ${a.i}: bad pile "${l}"`);e.piles.push({id:e.piles.length,row:c.i,z:a.z,k:o,slot:h,n:f,taken:null})})}else if(a.kind==="h"){const o=Number(a.args[0]);if(!(o>0))throw new Error(`row ${a.i}: bad gap "${a.args[0]}"`);e.holes.push({z:a.z,need:o,len:o*ge,done:!1})}else if(a.kind==="u"){const o=Number(a.args[0]);if(!(o>0))throw new Error(`row ${a.i}: bad ledge "${a.args[0]}"`);e.ledges.push({z:a.z,need:o,done:!1})}else if(a.kind==="g"){const o=a.args.length;e.gates.push({i:e.gates.length,z:a.z,k:o,gates:a.args.map((c,l)=>Mg(c,e.gates.length,l)),passed:!1,choice:-1})}else if(a.kind==="s"){const o=a.args[0];e.saws.push({id:e.saws.length,z:a.z,k:o.length,slots:[...o].map((c,l)=>c==="1"?l:-1).filter(c=>c>=0),done:!1,hit:!1})}else if(a.kind==="r")e.rival=a.args.map(Number);else throw new Error(`row ${a.i}: unknown kind "${a.kind}"`);return e.end=n+18,e.pileRows.forEach((a,o)=>{const c=e.rival[o];if(c===void 0)return;const l=e.piles.find(h=>h.row===a.i&&h.slot===c);l&&(e.rivalN+=l.n)}),e}const Ze=(i,t)=>{i.quiet||i.ev.push(t)},bo=i=>i.phase==="won"||i.phase==="lost";function Jr(i,t){bo(i)||(i.phase="lost",i.why=t,Ze(i,{e:"fall",why:t}),Ze(i,{e:"end",won:!1}))}function me(i,t){let e=0;for(const n of i.ledges)t>=n.z+n.need*ge&&(e+=n.need*bn);return e}function Yl(i){if(bo(i))return;const t=Ja;i.t+=t;const e=i.z;i.phase==="run"?i.z+=i.speed*t:i.z+=i.speed*.6*t,i.x=Ni(og(i.x,Ni(i.tx),vg*t));const n=r=>r<=i.z&&r>e-1e-9;i.pileRows.forEach((r,s)=>{const a=i.rival[s];if(a===void 0||r.z-i.z>6)return;const o=i.piles.find(c=>c.row===r.i&&c.slot===a&&!c.taken);o&&(o.taken="rival",Ze(i,{e:"rivalPile",pile:o.id}))});for(const r of i.pileRows){if(r.passed||!n(r.z))continue;r.passed=!0;const s=as(i.x,r.k);r.choice=s;const a=i.piles.find(o=>o.row===r.i&&o.slot===s);a&&!a.taken&&(a.taken="me",i.n+=a.n,Ze(i,{e:"pile",pile:a.id,got:a.n}))}for(const r of i.gates){if(r.passed||!n(r.z))continue;r.passed=!0;const s=as(i.x,r.k);r.choice=s;const a=r.gates[s];if(!a)continue;const o=i.n;i.n=Sg(i.n,a),Ze(i,{e:"gate",row:r.i,slot:s,before:o,after:i.n,good:i.n>=o})}for(const r of i.saws)if(!(r.done||!n(r.z))&&(r.done=!0,r.slots.includes(as(i.x,r.k)))){r.hit=!0;const s=Math.ceil(i.n/2);i.n-=s,Ze(i,{e:"saw",saw:r.id,lost:s})}for(const r of i.holes){if(r.done||i.z<=r.z)continue;const s=Math.min(r.need,Math.ceil((Math.min(i.z,r.z+r.len)-r.z)/ge));for(;i.laid<s;){if(i.n<=0)return Jr(i,`断口要 ${r.need} 块木板，还差 ${r.need-i.laid} 块`);i.n--,i.laid++,Ze(i,{e:"lay",z:r.z+(i.laid-.5)*ge,y:i.y,kind:"bridge"})}i.z>=r.z+r.len&&(r.done=!0,i.laid=0)}for(const r of i.ledges){if(r.done||i.z<=r.z)continue;const s=Math.min(r.need,Math.ceil((i.z-r.z)/ge));for(;i.laid<s;){if(i.n<=0)return Jr(i,`高台要 ${r.need} 块木板搭台阶，还差 ${r.need-i.laid} 块`);i.n--,i.laid++,Ze(i,{e:"lay",z:r.z+(i.laid-.5)*ge,y:me(i,r.z)+i.laid*bn,kind:"step"})}i.z>=r.z+r.need*ge&&(r.done=!0,i.laid=0)}if(i.y=me(i,i.z),i.phase==="run"&&i.z>=i.end&&(i.phase="climb",i.laid=0,i.rivalClimb=i.rival.length?Math.max(1,i.rivalN-i.holes.reduce((r,s)=>r+s.need,0)-i.ledges.reduce((r,s)=>r+s.need,0)):0),i.phase==="climb"){const r=Math.ceil((i.z-i.end)/ge);for(;i.laid<r&&i.n>0;)i.n--,i.laid++,i.climbed=i.laid,Ze(i,{e:"lay",z:i.end+(i.laid-.5)*ge,y:i.y+i.laid*bn,kind:"step"});if(i.n<=0){if(Ze(i,{e:"finish",planks:i.climbed,steps:i.climbed,rival:i.rivalClimb}),i.rival.length&&i.climbed<=i.rivalClimb)return Jr(i,`对手爬了 ${i.rivalClimb} 级，你只有 ${i.climbed} 级`);if(i.climbed<=0)return Jr(i,"一块木板也没剩下");i.phase="won",Ze(i,{e:"end",won:!0})}}}const $c=i=>si[Math.min(si.length-1,Math.floor(Math.max(0,i-1)/Sn))];function ds(i){return[...i.pileRows.map(t=>({kind:"p",i:t.i,z:t.z,k:t.k})),...i.gates.map(t=>({kind:"g",i:t.i,z:t.z,k:t.k}))].sort((t,e)=>t.z-e.z)}const Kl=(i,t)=>t.kind==="p"?i.pileRows[t.i].passed:i.gates[t.i].passed,yg=(i,t)=>t.kind==="p"?i.pileRows[t.i].choice:i.gates[t.i].choice;function Za(i,t){var r;const e=ds(i);let n=i.x;for(let s=0;s<e.length;s++)if(!Kl(i,e[s])){n=cn(e[s].k,(r=t[s])!=null?r:0);break}for(const s of i.saws){if(s.done)continue;const a=s.z-i.z;if(!(a<0||a>12)){if(s.slots.includes(as(n,s.k))){const o=fs(s.k).map((c,l)=>l).filter(c=>!s.slots.includes(c));if(o.length){const c=o.sort((l,h)=>Math.abs(cn(s.k,l)-n)-Math.abs(cn(s.k,h)-n))[0];n=cn(s.k,c)}}break}}return Ni(n)}function ja(i){return{...i,gates:i.gates.map(t=>({...t,gates:t.gates.slice()})),piles:i.piles.map(t=>({...t})),pileRows:i.pileRows.map(t=>({...t})),holes:i.holes.map(t=>({...t})),ledges:i.ledges.map(t=>({...t})),saws:i.saws.map(t=>({...t})),rival:i.rival.slice(),ev:[]}}function Eg(i,t,e=240){const n=ja(i);for(n.quiet=!0;!bo(n)&&n.t<e;)n.tx=Za(n,t),Yl(n);return{won:n.phase==="won",score:n.phase==="won"?n.climbed:0,time:n.t,s:n}}function ra(i,t=1/0,e=[]){const n=ds(i),r=n.map(s=>Kl(i,s)?yg(i,s):-1);return mg(n.map(s=>s.k),r,s=>Eg(i,s),t,e)}function bg(i,t){return i>=Math.ceil(t*.85)?3:i>=Math.ceil(t*.5)?2:1}const mr=1024,Jl=new WeakMap;async function sa(i,t){const[e,n]=await Promise.all([fetch(i).then(r=>{if(!r.ok)throw new Error(`${i}: ${r.status}`);return r.arrayBuffer()}),t?Tg(t):Promise.resolve(null)]);return wg(e,n)}function Tg(i){return new Promise((t,e)=>new K0().load(i,n=>{n.flipY=!1,n.colorSpace=he,n.anisotropy=4,n.needsUpdate=!0,t(n)},void 0,e))}function wg(i,t){const e=new DataView(i);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="BAK1")throw new Error("not a baked model");const r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0),o=[16,20,24].map(v=>e.getFloat32(v,!0)),c=[28,32,36].map(v=>e.getFloat32(v,!0));let l=40;const h=new Uint16Array(i,l,a*r*3);l+=a*r*3*2;const f=new Int8Array(i,l,a*r*3);l+=a*r*3,l%2&&l++;const d=new Uint16Array(i,l,r*2);l+=r*4;const p=r>65535;p&&l%4&&(l+=4-l%4);const g=p?new Uint32Array(i,l,s).slice():new Uint16Array(i,l,s).slice(),_=(v,R)=>o[R%3]+h[v*r*3+R]/65535*c[R%3],m=new Ue,u=new Float32Array(r*3),S=new Float32Array(r*3);for(let v=0;v<r*3;v++)u[v]=_(0,v),S[v]=f[v]/127;m.setAttribute("position",new ce(u,3)),m.setAttribute("normal",new ce(S,3));const E=new Float32Array(r*2);for(let v=0;v<E.length;v++)E[v]=d[v]/65535;if(m.setAttribute("uv",new ce(E,2)),m.setIndex(new ce(g,1)),a>1){const v=r*a,R=Math.ceil(v/mr),T=new Float32Array(mr*R*4);for(let P=0;P<a;P++)for(let x=0;x<r;x++){const M=(P*r+x)*4,C=x*3;T[M]=_(P,C),T[M+1]=_(P,C+1),T[M+2]=_(P,C+2)}const A=new mo(T,mr,R,We,en);A.minFilter=A.magFilter=Re,A.needsUpdate=!0,Jl.set(m,{texture:A,vertices:r,frames:a})}return m.computeBoundingSphere(),{geometry:m,texture:t,frames:a,size:new D(c[0],c[1],c[2])}}class Yc{constructor(t,e,n=Jl.get(t.geometry)){if(this.phase=new Wi(new Float32Array(t.instanceMatrix.count),1),this.phase.setUsage(El),t.geometry.setAttribute("aPhase",this.phase),!n||e<2)return;const r=t.material,s=r.onBeforeCompile.bind(r),a=r.customProgramCacheKey.bind(r);r.onBeforeCompile=(o,c)=>{s(o,c),o.uniforms.vatTex={value:n.texture},o.uniforms.vatV={value:n.vertices},o.uniforms.vatF={value:n.frames},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform highp sampler2D vatTex;
uniform int vatV;
uniform int vatF;
attribute float aPhase;
vec3 vatPos(int f) { int i = gl_VertexID + f * vatV; return texelFetch(vatTex, ivec2(i % ${mr}, i / ${mr}), 0).xyz; }`).replace("#include <begin_vertex>",`#include <begin_vertex>
{
  float ph = fract(aPhase) * float(vatF);
  int f0 = int(floor(ph));
  int f1 = f0 + 1 >= vatF ? 0 : f0 + 1;
  transformed = mix(vatPos(f0), vatPos(f1), ph - floor(ph));
}`)},r.customProgramCacheKey=()=>`${a()}|vat`,r.needsUpdate=!0}set(t,e){this.phase.setX(t,e-Math.floor(e))}done(){this.phase.needsUpdate=!0}}const Zr=new Ut;function De(i){let t=0,e=0;const n=i.map(E=>{const v=E.geo.index?E.geo:Ag(E.geo);return t+=v.attributes.position.count,e+=v.index.count,v}),r=new Float32Array(t*3),s=new Float32Array(t*3),a=new Float32Array(t*3),o=t>65535?new Uint32Array(e):new Uint16Array(e);let c=0,l=0;const h=new Gt,f=new It,d=new nn,p=new be,g=new D,_=new D,m=new D,u=new D;i.forEach((E,v)=>{var M,C,H;const R=n[v];_.set(...(M=E.at)!=null?M:[0,0,0]),p.set(...(C=E.rot)!=null?C:[0,0,0]),d.setFromEuler(p);const T=(H=E.scale)!=null?H:1;typeof T=="number"?g.set(T,T,T):g.set(...T),h.compose(_,d,g),f.getNormalMatrix(h),Zr.set(E.color).convertSRGBToLinear();const A=R.attributes.position,P=R.attributes.normal;for(let k=0;k<A.count;k++){m.fromBufferAttribute(A,k).applyMatrix4(h),u.fromBufferAttribute(P,k).applyMatrix3(f).normalize();const q=(c+k)*3;r[q]=m.x,r[q+1]=m.y,r[q+2]=m.z,s[q]=u.x,s[q+1]=u.y,s[q+2]=u.z,a[q]=Zr.r,a[q+1]=Zr.g,a[q+2]=Zr.b}const x=R.index;for(let k=0;k<x.count;k++)o[l+k]=x.getX(k)+c;c+=A.count,l+=x.count});const S=new Ue;return S.setAttribute("position",new ce(r,3)),S.setAttribute("normal",new ce(s,3)),S.setAttribute("color",new ce(a,3)),S.setIndex(new ce(o,1)),S.computeBoundingSphere(),S}function Ag(i){const t=i.clone(),e=t.attributes.position.count,n=new Uint16Array(e);for(let r=0;r<e;r++)n[r]=r;return t.setIndex(new ce(n,1)),t}const Ie=(i=1,t=12,e=9)=>new yo(i,t,e),jn=(i,t,e=8)=>new xo(i,t,3,e),Qe=(i,t,e,n=10)=>new vs(i,t,e,n),Cg=(i,t,e=8)=>new Mo(i,t,e),Ee=(i,t,e)=>new Ae(i,t,e);function Rg(i="#5fae4e",t="#7cc75a"){return De([{geo:Qe(.18,.26,1.4,7),color:"#8a5a3c",at:[0,.7,0]},{geo:Ie(1.05,10,8),color:i,at:[0,2,0]},{geo:Ie(.8,10,8),color:t,at:[.55,2.5,.25]},{geo:Ie(.72,10,8),color:i,at:[-.5,2.55,-.2]}])}const Pg=()=>De([{geo:new Ms(1,0),color:"#a8a3b5",scale:[1.2,.7,1]}]),Lg=()=>De([{geo:Ie(.7,9,7),color:"#6bb85a",at:[0,.5,0]},{geo:Ie(.55,9,7),color:"#86cf63",at:[.6,.4,.1]},{geo:Ie(.5,9,7),color:"#5fa64f",at:[-.55,.38,-.1]}]);let cr=null;function Dg(){if(cr)return cr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,31);return e.addColorStop(0,"rgba(20,16,40,0.55)"),e.addColorStop(.6,"rgba(20,16,40,0.32)"),e.addColorStop(1,"rgba(20,16,40,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),cr=new Ki(i),cr.colorSpace=he,cr}function Ig(i){var r;const t=document.createElement("canvas");t.width=128,t.height=256;const e=t.getContext("2d");e.fillStyle=i.road,e.fillRect(0,0,128,256),e.fillStyle=(r=i.dirt)!=null?r:"rgba(0,0,0,0.06)";for(const[s,a,o,c]of[[18,30,34,60],[80,140,30,70],[40,200,26,40]])e.beginPath(),e.ellipse(s,a,o/2,c/2,0,0,Math.PI*2),e.fill();e.fillStyle=i.edge,e.fillRect(0,0,8,256),e.fillRect(120,0,8,256),e.fillStyle=i.line,e.fillRect(61,20,6,90),e.fillRect(61,148,6,90);const n=new Ki(t);return n.colorSpace=he,n.wrapS=On,n.wrapT=cs,n.anisotropy=4,n}const Ai={legL:1,legR:2,armL:3,armR:4};function Ug(i){var r;const t=De(i),e=new Float32Array(t.attributes.position.count);let n=0;for(const s of i){const o=(s.geo.index,s.geo).attributes.position.count;e.fill((r=s.limb)!=null?r:0,n,n+o),n+=o}return t.setAttribute("aLimb",new ce(e,1)),t}function Kc(i,t,e=0){var l,h,f;const n={uTime:{value:0},uPhase:{value:0},uAmount:{value:1}},r=((l=t.swing)!=null?l:.7).toFixed(3),s=((h=t.arms)!=null?h:.6).toFixed(3),a=((f=t.rate)!=null?f:9).toFixed(3),o=i.onBeforeCompile;i.onBeforeCompile=(d,p)=>{o==null||o.call(i,d,p),Object.assign(d.uniforms,n);const g=`
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
`;d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
${g}`),d.vertexShader.includes("#include <beginnormal_vertex>")&&(d.vertexShader=d.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = gaitRot(objectNormal, false);`)),d.vertexShader=d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = gaitRot(transformed, true);${e?`
transformed += normalize(gaitRot(normal, false)) * ${e.toFixed(4)};`:""}`)};const c=i.customProgramCacheKey.bind(i);return i.customProgramCacheKey=()=>`${c()}|gait${t.instanced?"I":"U"}${r}${s}${a}${t.hip}${t.shoulder}${e}`,{uniforms:n}}const aa=new Gt,Jc=new nn,Zc=new be,jc=new D,Qc=new D,oa=new Ut;new D(0,1,0);new D;new D;const Ng=new Ut("#ffffff");function He(i,t,e){const n=new Hl(i,t,e);return n.count=0,n.frustumCulled=!1,n.instanceMatrix.setUsage(El),n}function je(i,t,e,n,r,s,a,o,c=0,l=0,h=0){return Zc.set(c,l,h),Jc.setFromEuler(Zc),jc.set(e,n,r),Qc.set(s,a,o),aa.compose(jc,Jc,Qc),i.setMatrixAt(t,aa),aa}const Qa=(...i)=>{for(const t of i)t.instanceMatrix.needsUpdate=!0};class Fg{constructor(t=96){this.i=0,this.mesh=He(new Vn(1,1).rotateX(-Math.PI/2),new Er({map:Dg(),transparent:!0,depthWrite:!1}),t)}begin(){this.i=0}add(t,e,n){this.i>=this.mesh.instanceMatrix.count||n<=0||je(this.mesh,this.i++,t,.03,e,n,1,n*.8)}end(){this.mesh.count=this.i,Qa(this.mesh)}}function Nn(i={}){const t=i.map?new Ge({color:"#ffffff",map:i.map,flatShading:!!i.flat,...i.lift?{emissiveMap:i.map,emissive:new Ut(i.lift,i.lift,i.lift)}:{}}):new Ge({color:"#ffffff",vertexColors:!0,flatShading:!!i.flat});return i.flash&&(t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aFlash;
varying float vFlash;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlash = aFlash;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vFlash;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0, 0.95, 0.9), vFlash);`)},t.customProgramCacheKey=()=>"lflash"),t}const Zl={wood:"#8e3d27",band:"#2b1a14",cap:"#5c2618"};function Og(i=Zl){const{wood:t,band:e,cap:n}=i;return De([{geo:new Ae(.3,2.4,.3),color:t,at:[0,1.2,0]},{geo:new Ae(.33,.12,.33),color:e,at:[0,.45,0]},{geo:new Ae(.33,.12,.33),color:e,at:[0,1.15,0]},{geo:new Ae(.33,.12,.33),color:e,at:[0,1.85,0]},{geo:new Ae(.38,.14,.38),color:n,at:[0,2.44,0]}])}function Bg(i){const t=document.createElement("canvas");t.width=64,t.height=128;const e=t.getContext("2d"),n=new Ut(i),r=o=>"#"+n.clone().lerp(Ng,o).getHexString(),s=e.createLinearGradient(0,0,0,128);s.addColorStop(0,r(0)),s.addColorStop(.5,r(.2)),s.addColorStop(.85,r(.62)),s.addColorStop(1,r(.85)),e.fillStyle=s,e.fillRect(0,0,64,128),e.strokeStyle=r(.55),e.lineWidth=6,e.strokeRect(3,3,58,122);const a=new Ki(t);return a.colorSpace=he,a}class zg{constructor(t=60,e=Zl){this.panels=new Map,this.group=new Ri,this.bottom=.3,this.height=1.8,this.lean=.45,this.cap=t,this.posts=He(Og(e),Nn(),t),this.group.add(this.posts)}get objects(){return[this.group]}get mid(){return this.bottom+this.height/2}panel(t){let e=this.panels.get(t);if(!e){const n=new Er({map:Bg(t),transparent:!0,opacity:.9,side:an,depthWrite:!1});e=He(new Vn(1,1),n,this.cap),e.instanceColor=new Wi(new Float32Array(this.cap*3).fill(1),3),e.renderOrder=2,this.panels.set(t,e),this.group.add(e)}return e}sync(t){var r,s;let e=0;const n=new Map;for(const a of t){const o=a.passAge;if(o>.6)continue;const c=o<0?1:1-os.inCubic(Math.min(1,o/.6)),l=(r=a.y)!=null?r:0;for(const f of[-ue,...fs(a.k).map(d=>d[1])]){if(e>=this.posts.instanceMatrix.count)break;je(this.posts,e++,f,l,a.z,1,c,1)}const h=fs(a.k);a.gates.forEach((f,d)=>{var v;if(!f)return;const p=this.panel(f.color),g=(v=n.get(f.color))!=null?v:0;if(g>=p.instanceMatrix.count)return;n.set(f.color,g+1);const[_,m]=h[d],u=o>=0&&a.choice===d,S=o<0?1:u?1+.25*os.bump(Math.min(1,o/.35)):c,E=this.height*S*f.swell;je(p,g,(_+m)/2,l+this.bottom+this.height/2,a.z,(m-_-.32)*S*f.swell,E,1,-this.lean),oa.setRGB(1,1,1),u&&o<.3&&oa.setRGB(1.6,1.6,1.6),p.setColorAt(g,oa)})}this.posts.count=e,Qa(this.posts);for(const[a,o]of this.panels)o.count=(s=n.get(a))!=null?s:0,Qa(o),o.instanceColor&&(o.instanceColor.needsUpdate=!0)}}function _n(i,t,e,n){const r=[];for(const s of e?[e,t]:[t]){const a=new Hl(i,s,Math.max(1,n.length));n.forEach((o,c)=>a.setMatrixAt(c,o)),a.count=n.length,a.computeBoundingSphere(),r.push(a)}return r}const tl=Math.PI/180,el=50;class kg{constructor(t,e,n=1,r=!1){var k,q,I,z;this.scene=new R0,this.camera=new Ve(el,1,.5,260),this.disposables=[],this.camPos=new D,this.camLook=new D,this.placed=!1,this.squadLow=.58,this.fit=10,this.elev=36,this.side=0,this.lift=0,this.look=new D;const s=this.scene;if(s.background=new Ut(t.fog?t.fog[0]:t.sky),s.fog=t.fog?new hs(t.fog[0],t.fog[1],t.fog[2]):new hs(t.sky,75,160),this.elev=(k=t.elev)!=null?k:36,this.camera.fov=(q=t.fov)!=null?q:el,this.camera.updateProjectionMatrix(),this.sun=ig(s,t.sky,(I=t.bounce)!=null?I:"#8a7a6a"),r)return;const a=e+140,o=new Vn(260,a+120).rotateX(-Math.PI/2),c=new Ge({color:t.ground}),l=new Te(o,c);l.position.set(0,-.05,-a/2+40),s.add(l);const h=t.roadTex?t.roadTex():Ig(t.road);h.repeat.set(1,a/16);const f=new Vn((z=t.roadWidth)!=null?z:ue*2+.9,a).rotateX(-Math.PI/2),d=new Ge({map:h}),p=new Te(f,d);p.position.set(0,0,-a/2+40),s.add(p);const g=new Ae(.4,.22,a),_=Vc(t.curb);for(const $ of t.curbs===!1?[]:[-1,1]){const G=new Te(g,_);G.position.set($*(ue+.65),.11,-a/2+40),s.add(G)}if(this.disposables.push(o,c,h,f,d,g,_),t.props==="debris"){this.debris(t,a,n);return}if(t.props==="canyon"){this.canyon(t,a,n);return}const m=fr(n*977+13),u=[],S=[],E=[],v=new Gt,R=new nn,T=new be,A=($,G,it,at)=>{T.set(0,m()*6.28,0),R.setFromEuler(T),$.push(v.clone().compose(new D(G,0,it),R,new D(at,at,at)))};for(let $=20;$>-a+30;$-=9+m()*12){const G=m()<.5?-1:1,it=G*(ue+2.4+m()*4),at=m();if(at<.55){const pt=1+Math.floor(m()*3);for(let Tt=0;Tt<pt;Tt++)A(u,it+G*Tt*1.9+(m()-.5),$+(m()-.5)*3,1+m()*.6)}else at<.8?A(S,it,$,1+m()*.5):A(E,it+G,$,.6+m()*.6);m()<.35&&A(u,-G*(ue+6+m()*6),$-4,1.2+m()*.5)}const P=eg(.06),x=Rg(t.leaf[0],t.leaf[1]),M=Lg(),C=Pg(),H=Vc("#ffffff",{vertexColors:!0});s.add(..._n(x,H,P,u),..._n(M,H,P,S),..._n(C,H,P,E)),this.disposables.push(P,x,M,C,H)}debris(t,e,n){var m,u;const r=fr(n*577+7),s=((m=t.roadWidth)!=null?m:ue*2+.9)/2,a=new Ge({color:"#ffffff",vertexColors:!0}),o=De([{geo:Ee(.55,.28,1),color:"#a39a8e",at:[0,.14,0]},{geo:Ee(.5,.04,1),color:"#bfb7aa",at:[0,.29,0]}]),c=new Gt,l=new nn,h=new be,f=[-1,1].map(S=>c.clone().compose(new D(S*(s+.2),0,-e/2+40),l.identity().clone(),new D(1,1,e))),d=[De([0,1,2].map(S=>({geo:new us(.42,.17,6,12),color:S===1?"#3d3836":"#34302f",at:[S%2*.06,.17+S*.33,S%2*.05],rot:[Math.PI/2,0,0]})).concat([{geo:new us(.42,.17,6,12),color:"#3a3533",at:[.95,.45,.2],rot:[.3,.2,1.2]}])),De([{geo:Qe(.34,.34,.95,12),color:"#a9583a",at:[0,.48,0]},{geo:Qe(.36,.36,.07,12),color:"#7d3c26",at:[0,.3,0]},{geo:Qe(.36,.36,.07,12),color:"#7d3c26",at:[0,.68,0]},{geo:Qe(.34,.34,.95,12),color:"#4f7598",at:[.72,.48,.25]},{geo:Qe(.36,.36,.07,12),color:"#3a5a78",at:[.72,.68,.25]},{geo:Qe(.34,.34,.95,12),color:"#9a5136",at:[.3,.34,-.9],rot:[0,0,Math.PI/2]}]),De([...[-.95,0,.95].map(S=>({geo:Ie(1,10,7),color:S===0?"#c9b18a":"#bea57e",at:[S,.22,0],scale:[.52,.24,.34]})),...[-.48,.48].map(S=>({geo:Ie(1,10,7),color:"#d2bb94",at:[S,.62,.02],scale:[.5,.22,.32]}))]),De([{geo:Ee(.16,1.2,.16),color:"#7c5b3c",at:[-1,.6,0]},{geo:Ee(.16,.9,.16),color:"#73553a",at:[1,.45,0],rot:[0,0,-.15]},{geo:Ee(2.3,.2,.07),color:"#8d6a47",at:[0,.82,.08],rot:[0,0,.06]},{geo:Ee(2.1,.2,.07),color:"#7f6040",at:[.2,.08,.5],rot:[Math.PI/2,.4,0]}]),De([{geo:Ee(1.9,.62,4.1),color:"#738a83",at:[0,.6,0]},{geo:Ee(1.62,.62,2),color:"#6a7f78",at:[0,1.2,-.25]},{geo:Ee(1.66,.42,1.9),color:"#2e3236",at:[0,1.22,-.25]},{geo:Ee(1.2,.08,1.3),color:"#9a5a3a",at:[.2,.93,1.3]},...[[-.92,1.3],[.92,1.3],[-.92,-1.35],[.92,-1.35]].map(([S,E])=>({geo:Qe(.36,.36,.26,10),color:"#2d2a29",at:[S,.3,E],rot:[0,0,Math.PI/2]}))]),De([{geo:Ee(1.7,.85,.7),color:"#aaa49a",at:[0,.42,0]},{geo:Ee(1.5,.08,.5),color:"#c4beb4",at:[0,.88,0]},{geo:Ee(1.2,.7,.6),color:"#a29c92",at:[1.1,.35,.9],rot:[0,.7,0]}])],p=d.map(()=>[]),g=(S,E,v,R,T=1)=>{h.set(0,R,0),p[S].push(c.clone().compose(new D(E,0,v),l.setFromEuler(h).clone(),new D(T,T,T)))};let _=r()<.5?-1:1;for(let S=6;S>-e+30;S-=9+r()*9){r()<.7&&(_=-_);const E=_*(s+1+r()*1.4),v=Math.floor(r()*d.length);if(v===4?g(4,E+_*.9,S,(r()-.5)*1.1+(r()<.5?0:Math.PI)):g(v,E,S,r()*6.28,.95+r()*.3),r()<.45){const R=(v+1+Math.floor(r()*3))%d.length;R!==4&&g(R,E+_*(1.6+r()),S-1.5-r()*1.5,r()*6.28,.9+r()*.3)}}if(this.scene.add(..._n(o,a,null,f)),this.disposables.push(a,o,...d),(u=t.junk)!=null&&u.length){const S=t.junk,E=S.map(()=>[]),v=fr(n*811+3);let R=v()<.5?-1:1;for(let T=6;T>-e+30;T-=9+v()*9){v()<.7&&(R=-R);const A=Math.floor(v()*S.length),P=R*(s+(S[A].big?2.2:1.3)+v()*1.2);h.set(0,S[A].big?(v()-.5)*1.1+(v()<.5?0:Math.PI):v()*6.28,0);const x=.9+v()*.25;E[A].push(c.clone().compose(new D(P,0,T),l.setFromEuler(h).clone(),new D(x,x,x)))}S.forEach((T,A)=>{E[A].length&&this.scene.add(..._n(T.geometry,T.material,null,E[A]))});return}d.forEach((S,E)=>{p[E].length&&this.scene.add(..._n(S,a,null,p[E]))})}canyon(t,e,n){var m,u,S;const r=fr(n*331+17);if((m=t.junk)!=null&&m.length){const E=new Gt,v=new nn,R=new be,T=((u=t.roadWidth)!=null?u:ue*2+.9)/2,A=t.junk,P=A.map(()=>[]);for(const x of[-1,1])for(let M=12-r()*5;M>-e+20;M-=4.5+r()*4){const C=Math.floor(r()*A.length),H=x*(T+(A[C].big?1.6:.7)+r()*1.2);R.set(0,r()*6.28,0);const k=.85+r()*.45;P[C].push(E.clone().compose(new D(H,0,M),v.setFromEuler(R).clone(),new D(k,k,k)))}A.forEach((x,M)=>{P[M].length&&this.scene.add(..._n(x.geometry,x.material,null,P[M]))});return}const s=[],a=[],o=new Gt,c=new nn,l=new be,h=((S=t.roadWidth)!=null?S:ue*2+.9)/2,f=(E,v,R,T,A)=>{l.set(0,r()*6.28,0),c.setFromEuler(l),E.push(o.clone().compose(new D(v,0,R),c,new D(T,A,T)))};for(const E of[-1,1])for(let v=14-r()*6;v>-e+20;v-=5+r()*7){const R=E*(h+.2+r()*1.2),T=1.2+r()*1.1;f(s,R+E*T*.6,v,T,T*(.7+r()*.5)),r()<.45&&f(s,R+E*(T+.9),v-1.4,T*.7,T*.6),r()<.7&&f(a,R-E*.2+(r()-.5),v+1.3+r(),.8+r()*.5,.8+r()*.4)}const d=new So(.75,0).translate(0,.45,0),p=new Ms(.62,1).scale(1.2,.85,1.1).translate(0,.42,0),g=new Ge({color:"#9a6b49",flatShading:!0}),_=new Ge({color:t.leaf[0]});this.scene.add(..._n(d,g,null,s),..._n(p,_,null,a)),this.disposables.push(d,p,g,_)}follow(t,e,n,r,s=1,a=0,o=0){this.lift+=(o-this.lift)*(1-Math.exp(-n*5));const c=Math.tan(this.camera.fov/2*tl),l=c*Math.max(.3,r),h=this.fit*s,f=Math.max(14,Math.min(32,h/(2*l))),d=this.elev*tl,p=f*Math.sin(d),g=f*Math.cos(d),_=d-Math.atan(this.squadLow*c),m=p/Math.tan(_)-g+a,u=t*.45+this.side,S=e+g,E=t*.3-this.side*.5,v=e-m;if(!this.placed)this.camPos.set(u,p,S),this.camLook.set(E,0,v),this.placed=!0;else{const R=1-Math.exp(-n*7),T=1-Math.exp(-n*14);this.camPos.x+=(u-this.camPos.x)*R,this.camPos.y+=(p-this.camPos.y)*R,this.camPos.z+=(S-this.camPos.z)*T,this.camLook.x+=(E-this.camLook.x)*R,this.camLook.z+=(v-this.camLook.z)*T}this.camera.position.copy(this.camPos),this.camera.position.y+=this.lift,this.look.copy(this.camLook),this.look.y+=this.lift,this.camera.lookAt(this.look),this.camera.updateMatrixWorld(),this.sun.position.set(t-6,14+this.lift,e+8),this.sun.target.position.set(t,this.lift,e)}shake(t,e){!t&&!e||(this.camera.position.x+=t,this.camera.position.y+=e,this.camera.updateMatrixWorld())}own(...t){this.disposables.push(...t)}dispose(){for(const t of this.disposables)t.dispose();this.disposables=[],this.scene.clear()}}const Hg=""+new URL("rival-haeHcheu.bin",import.meta.url).href,Vg=""+new URL("rival-CWitSyvd.webp",import.meta.url).href,Gg=""+new URL("runner-B0mRhEIg.bin",import.meta.url).href,Wg=""+new URL("runner-DuRVBwwk.webp",import.meta.url).href,Xg=""+new URL("saw-IAQe83d8.bin",import.meta.url).href,qg=""+new URL("saw-B2T94h-_.webp",import.meta.url).href,nl={good:"#45a8ff",bad:"#ff4f63"},gr=["#7fd17a","#4aa8ff","#b36bff","#ff8a3d","#ff4d6d"],to={body:"#efbe5c",top:"#ffe08a"},jl={sky:"#fff0f6",ground:"#ffffff",road:{road:"#f8f8fb",edge:"#f39ac8",line:"rgba(0,0,0,0)"},curb:"#f39ac8",leaf:["#4f9e46","#74c158"],bounce:"#d8c6ec",fov:40,elev:32,fog:["#f7d9e7",60,170]},$g={...jl,sky:"#b9a8ff",bounce:"#c2b2f0",fog:["#c4b4ff",60,170]},il=["#8fdcff","#86b3ff","#a98cff","#a6ecff","#c3a2ff"],jr=ue*2+.6,rl=260;function sl(i,t,e){const n=e?[{geo:jn(.075,.56,6),color:i,at:[-.34,1.26,0],rot:[0,0,-.08]},{geo:jn(.075,.56,6),color:i,at:[.34,1.26,0],rot:[0,0,.08]},{geo:Ie(.085,8,6),color:"#ffe0c4",at:[-.37,1.6,0]},{geo:Ie(.085,8,6),color:"#ffe0c4",at:[.37,1.6,0]}]:[{geo:jn(.075,.26,6),color:i,at:[-.33,.72,0],rot:[0,0,.18],limb:Ai.armL},{geo:jn(.075,.26,6),color:i,at:[.33,.72,0],rot:[0,0,-.18],limb:Ai.armR},{geo:Ie(.08,8,6),color:"#ffe0c4",at:[-.36,.52,0],limb:Ai.armL},{geo:Ie(.08,8,6),color:"#ffe0c4",at:[.36,.52,0],limb:Ai.armR}];return Ug([{geo:jn(.12,.25,8),color:"#3b3a4a",at:[-.14,.24,0],limb:Ai.legL},{geo:jn(.12,.25,8),color:"#3b3a4a",at:[.14,.24,0],limb:Ai.legR},{geo:jn(.27,.3,10),color:i,at:[0,.72,0]},...n,{geo:Qe(.3,.3,.12,12),color:t,at:[0,.98,0]},{geo:Ee(.14,.4,.06),color:t,at:[.12,.85,.3],rot:[.4,0,-.2]},{geo:Ie(.32,16,12),color:"#ffe0c4",at:[0,1.28,0]},{geo:Ie(.33,16,10),color:i,at:[0,1.38,.05],scale:[1,.7,1]}])}const al={hip:.45,shoulder:.88,swing:.8,arms:.7,rate:11},eo=1.25,Ql=1.66*eo;function Yg(){return De([{geo:Ee(1,.16,.46),color:to.body},{geo:Ee(.97,.02,.4),color:to.top,at:[0,.08,0]}])}function Kg(){const i=document.createElement("canvas");i.width=256,i.height=4;const t=i.getContext("2d");t.fillStyle="#fbfbfd",t.fillRect(0,0,256,4),t.fillStyle="#f39ac8",t.fillRect(0,0,9,4),t.fillRect(247,0,9,4);const e=new Ki(i);return e.colorSpace=he,e}function Jg(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#e9f0f8"),e.addColorStop(1,"#b9c6d8"),t.fillStyle=e,t.fillRect(0,0,4,256),t.fillStyle="#f08ac0",t.fillRect(0,0,4,9);const n=new Ki(i);return n.colorSpace=he,n}const ol=6;function cl(i=!1){const t=document.createElement("canvas");t.width=4,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,i?"#6c5cf2":"#f5b8d2"),n.addColorStop(.6,i?"#9d8cff":"#f9d4e4"),n.addColorStop(1,i?"#d6c8ff":"#efe0f7"),e.fillStyle=n,e.fillRect(0,0,4,256);const r=new Ki(t);return r.colorSpace=he,r}function Zg(){const i=Array.from({length:8},(t,e)=>{const n=e/8*Math.PI*2;return{geo:Cg(.16,.34,4),color:"#cfd6e2",at:[Math.cos(n)*1.05,0,Math.sin(n)*1.05],rot:[Math.PI/2,0,-n+Math.PI/2]}});return De([{geo:Qe(1,1,.1,24),color:"#e9edf4"},{geo:Qe(.3,.3,.16,12),color:"#ff5468"},...i])}function th(i){for(const t of i.ledges){const e=t.need*ge;if(i.z>t.z&&i.z<t.z+e)return me(i,t.z)+Math.min(t.need,(i.z-t.z)/ge)*bn}return i.y}class jg{world=null;root=new Ri;track;planks;laid=[];pileMesh;saws;bands;blocks;sky;skyViolet;runner;runnerGait;rival;rivalGait;carried;gates=new zg(60,{wood:"#ffffff",band:"#ff8cc2",cap:"#ffd3e8"});shadows=new Fg(64);passT=new Map;hurtT=-9;trackSegs=[];runnerBaked=null;runnerPlayer=null;rivalBaked=null;rivalPlayer=null;sawBaked=!1;constructor(){const t=new Ge({map:Jg()}),e=new Ge({color:"#a9b6c8"});this.track=He(new Ae(1,1,1),[t,t,new Ge({map:Kg()}),e,t,t],40);const n=Yg(),r=Nn();this.planks=He(n,r,rl),this.pileMesh=He(n,r,60),this.carried=He(n,r,12),this.saws=He(Zg(),Nn(),12),this.bands=He(new Ae(1,1,1),new Ge({color:"#ffffff"}),5),this.bands.instanceColor=new Wi(new Float32Array(15).fill(1),3),this.blocks=He(new Ae(1,1,1),new Ge({color:"#ffffff"}),48),this.blocks.instanceColor=new Wi(new Float32Array(144).fill(1),3),this.sky=cl(),this.skyViolet=cl(!0);const s=Nn();this.runnerGait=Kc(s,al),this.runner=new Te(sl("#ffffff","#ff4f63",!0),s);const a=Nn();this.rivalGait=Kc(a,al),this.rival=new Te(sl("#b36bff","#3b3a4a",!1),a),this.root.add(this.blocks,this.shadows.mesh,this.track,this.planks,this.pileMesh,this.saws,this.bands,...this.gates.objects,this.runner,this.rival,this.carried),this.loadModels()}loadModels(){const t=e=>console.warn("model",e);sa(Gg,Wg).then(e=>{const n=He(e.geometry,Nn({map:e.texture}),1);n.setMatrixAt(0,new Gt),n.count=1,n.instanceMatrix.needsUpdate=!0,this.runnerPlayer=new Yc(n,e.frames),this.runnerBaked=n,this.root.add(n),this.runner.visible=!1},t),sa(Hg,Vg).then(e=>{const n=He(e.geometry,Nn({map:e.texture}),1);n.setMatrixAt(0,new Gt),n.count=1,n.instanceMatrix.needsUpdate=!0,this.rivalPlayer=new Yc(n,e.frames),this.rivalBaked=n,n.visible=!1,this.root.add(n)},t),sa(Xg,qg).then(e=>{e.geometry.translate(0,-e.size.y/2,0),this.saws.geometry=e.geometry,this.saws.material=Nn({map:e.texture}),this.sawBaked=!0},t)}get gateMid(){return this.gates.mid}load(t,e,n=!1){var g;(g=this.world)==null||g.dispose(),this.world=new kg(n?$g:jl,t.end+60,e,!0),this.world.fit=8.5,this.world.scene.background=n?this.skyViolet:this.sky,this.world.scene.add(this.root),this.laid=[],this.passT.clear(),this.hurtT=-9;const r=t.holes.map(_=>({z:_.z,len:_.len})),s=[];let a=-20;const o=[...r.sort((_,m)=>_.z-m.z),{z:t.end,len:0}];for(const _ of o){const m=t.ledges.map(S=>S.z+S.need*ge).filter(S=>S>a&&S<_.z).sort((S,E)=>S-E);let u=a;for(const S of[...m,_.z])s.push({z0:u,z1:S,y:me({...t,ledges:t.ledges.map(E=>({...E,done:!0}))},(u+S)/2)}),u=S;a=_.z+_.len}this.trackSegs=s;let c=0;for(const _ of s){if(c>=40)break;const m=_.z1-_.z0;je(this.track,c,0,_.y-ol/2,-(_.z0+m/2),jr,ol,m),c++}this.track.count=c,this.track.instanceMatrix.needsUpdate=!0;const l=me({...t,ledges:t.ledges.map(_=>({..._,done:!0}))},t.end+1),h=new Ut;for(let _=0;_<5;_++){const m=t.end+_*Sn*ge,u=Sn*bn;je(this.bands,_,-ue-.6,l+_*u+u/2,-(m+Sn*ge/2),.5,u,Sn*ge),this.bands.setColorAt(_,h.set(gr[_]))}this.bands.count=5,this.bands.instanceMatrix.needsUpdate=!0,this.bands.instanceColor&&(this.bands.instanceColor.needsUpdate=!0);const f=fr(e*71+3);let d=0;const p=t.end+80;for(const _ of[-1,1])for(let m=25-f()*10;m>-p&&d<48;m-=7+f()*9){const u=f()<.6,S=3+f()*4,E=3+f()*5,v=_*(jr/2+(u?2.5+f()*4:9+f()*10)+S/2),R=u?-2-f()*7:-4+f()*12,T=30+f()*10;je(this.blocks,d,v,R-T/2,m,S,T,E),this.blocks.setColorAt(d,h.set(il[Math.floor(f()*il.length)])),d++}this.blocks.count=d,this.blocks.instanceMatrix.needsUpdate=!0,this.blocks.instanceColor&&(this.blocks.instanceColor.needsUpdate=!0)}lay(t,e,n,r){this.laid.length>=rl&&this.laid.shift(),this.laid.push({x:0,y:e-.08,z:-t,w:n==="bridge"?jr-.4:jr-.8,t:r})}sync(t,e,n,r){var S,E,v,R,T,A,P;const s=this.world,a=-t.z,o=t.phase==="climb"||t.phase==="won"&&t.climbed>0,c=o?t.y+t.climbed*bn:th(t);s.side=o?1.5:5,s.follow(t.x,a,n,r,1,o?2:0,c);const l=t.phase==="run"||t.phase==="climb",h=e*11,f=Math.max(0,1-(e-this.hurtT)/.4),d=t.phase==="lost"?Math.min(6,(e-this.hurtT)*6):0;if(this.runnerGait.uniforms.uTime.value=e,this.runnerGait.uniforms.uAmount.value=l?1:0,this.runner.position.set(t.x,c+(l?Math.abs(Math.sin(h))*.06:0)-d,a),this.runner.rotation.set(-.06+f*.4,0,l?Math.sin(h)*.04:0),this.runner.scale.setScalar(eo),this.runnerBaked){const x=this.runnerBaked;x.position.copy(this.runner.position),x.rotation.copy(this.runner.rotation),x.scale.setScalar(eo),(S=this.runnerPlayer)==null||S.set(0,l?h/(Math.PI*2):0),(E=this.runnerPlayer)==null||E.done(),this.runner.visible=!1}const p=Math.min(12,Math.ceil(t.n/Math.max(1,Math.ceil(t.n/12))));for(let x=0;x<p;x++)je(this.carried,x,t.x+Math.sin(x*1.7)*.05,this.runner.position.y+Ql+.08+x*.17,a,.9,1,1,0,x*.12,0);this.carried.count=t.n>0?p:0,this.carried.instanceMatrix.needsUpdate=!0,this.shadows.begin(),t.phase!=="lost"&&this.shadows.add(t.x,a,1.3);const g=t.rival.length>0;if(this.rival.visible=g,this.rivalGait.uniforms.uTime.value=e+.4,this.rivalGait.uniforms.uAmount.value=l?1:0,g){const x=t.pileRows.findIndex(k=>!k.passed),M=(v=t.rival[x>=0?x:t.rival.length-1])!=null?v:0,C=(T=(R=t.pileRows[0])==null?void 0:R.k)!=null?T:2,H=cn(C,M);this.rival.position.set(this.rival.position.x+(H-this.rival.position.x)*Math.min(1,n*6),me(t,t.z+5)+Math.abs(Math.sin(h+1))*.06,a-5),this.rival.rotation.set(-.06,0,Math.sin(h+1)*.04),this.rival.scale.setScalar(1.15),this.shadows.add(this.rival.position.x,a-5,1.2)}if(this.rivalBaked){const x=this.rivalBaked;x.visible=g,this.rival.visible=!1,x.position.copy(this.rival.position),x.rotation.copy(this.rival.rotation),x.scale.setScalar(1.15),(A=this.rivalPlayer)==null||A.set(0,l?(h+1)/(Math.PI*2):0),(P=this.rivalPlayer)==null||P.done()}let _=0;for(const x of this.laid){if(-x.z-t.z>120||-x.z-t.z<-25)continue;const M=Math.min(1,(e-x.t)/.12);je(this.planks,_,x.x,x.y+(1-M)*.6,x.z,x.w,1,1),_++}this.planks.count=_,this.planks.instanceMatrix.needsUpdate=!0;let m=0;for(const x of t.piles){if(x.taken||x.z-t.z>100||x.z-t.z<-2)continue;const M=Math.min(5,2+Math.floor(x.n/6)),C=cn(x.k,x.slot),H=me(t,x.z);for(let k=0;k<M&&m<60;k++)je(this.pileMesh,m,C,H+.1+k*.18,-x.z,1.6,1,2.2,0,k%2*.4-.2,0),m++;this.shadows.add(C,-x.z,1.6)}this.pileMesh.count=m,this.pileMesh.instanceMatrix.needsUpdate=!0;let u=0;for(const x of t.saws)if(!(x.z-t.z>100||x.z-t.z<-4))for(const M of x.slots){if(u>=12)break;const[C,H]=fs(x.k)[M];this.sawBaked?je(this.saws,u,(C+H)/2,me(t,x.z)+1.25,-x.z,1,1,1,0,0,e*9):je(this.saws,u,(C+H)/2,me(t,x.z)+1,-x.z,1.1,1.1,1.1,Math.PI/2,0,e*9),u++}this.saws.count=u,this.saws.instanceMatrix.needsUpdate=!0,this.gates.sync(t.gates.filter(x=>x.z-t.z<95).map(x=>{var M;return{z:-x.z,y:me(t,x.z),k:x.k,passAge:x.passed?e-((M=this.passT.get(x.i))!=null?M:e):-1,choice:x.choice,gates:x.gates.map(C=>C?{color:C.good?nl.good:nl.bad,swell:1}:null)}})),this.shadows.end()}heightAtZ(t,e){return me(t,e)}prizeColor(t){return gr[Math.max(0,Math.min(4,t))]}get prizes(){return si}get segments(){return this.trackSegs}}let Qr=null;const Qg=()=>Qr!=null?Qr:Qr=new jg;let eh=null;const ll=new Map,t_=i=>{let t=7;for(const e of i)t=t*31+e.charCodeAt(0)>>>0;return t};function e_(i){let t=null,e=0,n=-1;const r={sfx:{play(){}},buzz(){},levelId:"demo"};return(s,a,o)=>{(!t||eh!==t||n>=0&&o-n>1.2)&&(t=nh(i,r,!0),t.auto=!0,n=-1,e=o),t.step(Math.min(.05,Math.max(0,o-e))),e=o,t.state!=="play"&&n<0&&(n=o),t.draw(s,a,o)}}function nh(i,t,e=!1){const n=qc(i),r=Qg();r.load(n,t_(t.levelId),/^[2-9]-/.test(t.levelId)),r.world.squadLow=e?.15:.58;const s=new dg,a=new Th,o=new rg;e||(ii.on=!1);let c="play",l=0,h=0,f=-1,d=!1;const p=.5;let g=-9,_={x:0,y:0,w:360,h:640},m={x:180,y:480},u={x:180,y:560,u:30},S=-1,E="p",v=-1,R=-1,T=null,A=0,P=!1;const x=()=>{let I=ll.get(t.levelId);return I===void 0&&(I=ra(qc(i)).bestOutcome.score,ll.set(t.levelId,I)),I},M=()=>{const I=ds(n),z=T&&I.some(($,G)=>{const it=$.kind==="p"?n.pileRows[$.i].passed:n.gates[$.i].passed,at=$.kind==="p"?n.pileRows[$.i].choice:n.gates[$.i].choice;return it&&T[G]!==at});return T?z&&(T=ra(ja(n),5,T).best):T=i.route?i.route.slice():ra(ja(n),5).best,T},C=(I,z,$)=>fg(r.world.camera,_,I,z,$);function H(I){switch(I.e){case"pile":g=h,a.float(m.x,m.y-40,`+${I.got}`,"#ffe08a",ke(22+I.got*.6,22,40),.9),o.ring(u.x,u.y,u.u*1.8,"#ffd27a",.45),t.sfx.play("coin",1+Math.min(.5,I.got/40)),t.buzz("light");break;case"rivalPile":{const z=n.piles[I.pile],$=C(cn(z.k,z.slot),me(n,z.z)+1,-z.z);a.float($.x,$.y-10,`+${z.n}`,"#d9b8ff",20,.8);break}case"gate":{r.passT.set(I.row,h),g=h;const z=I.before>0?Math.max(1,I.after/I.before):2,$=n.gates[I.row].gates[I.slot];a.float(m.x,m.y-40,$.text,I.good?"#ffffff":"#ff8a8a",ke(24+9*Math.log2(z),24,44),1),o.ring(u.x,u.y,u.u*2.2,I.good?"#5dc8ff":"#ff4a4a",.6),t.sfx.play(I.good?"coin":"hiss",I.good?1.2:1),E==="g"&&S===I.row&&(R=-1);break}case"saw":r.hurtT=h,a.float(m.x,m.y-30,`−${I.lost}`,"#ff6b6b",32,1),o.puff(m.x,m.y+u.u*.4,u.u*.9,3,"#f0d29a"),o.ring(u.x,u.y,u.u*2.2,"#ff4a4a",.5),t.sfx.play("sizzle"),t.buzz("heavy"),a.shake(6);break;case"lay":r.lay(I.z,I.y,I.kind,h),A++,A%2===0&&t.sfx.play("pop",.9+Math.min(.8,(I.y||0)*.05));break;case"fall":r.hurtT=h,t.sfx.play("lose"),t.buzz("heavy");break;case"finish":{const z=Math.min(si.length-1,Math.floor(Math.max(0,I.steps-1)/Sn));o.ring(u.x,u.y,u.u*3,gr[z],.8),o.ring(u.x,u.y,u.u*1.8,"#fff3a0",.6);for(let $=0;$<3;$++)o.spark(m.x+($-1)*u.u*.9,m.y-$*8,u.u*.7);t.sfx.play("star",1+z*.1),a.shake(4);break}case"end":f=h+(I.won?1.2:1);break}}function k(I,z){var qt,Z,nt,F;_=z;const $=r.world;if(r.sync(n,h,1/60,z.w/z.h),$.shake(a.ox*.02,a.oy*.02),!hg(I,z,$.scene,$.camera)){Oi(I,20,240,320,120,18,"#fffcf6",xr,3),Li(I,"这台设备打不开 3D",180,285,22,"#221f2e","#fffcf6"),Li(I,lg().slice(0,40),180,320,13,"#8a8496","#fffcf6");return}const G=$.camera,it=n.phase==="climb"||n.phase==="won"&&n.climbed>0,at=it?n.y+n.climbed*bn:th(n),pt=C(n.x,at,-n.z),Tt=wi(G,z,pt.depth);s.mpu=1/Tt,s.x0=C(0,at,-n.z).x,m={x:pt.x,y:pt.y-Tt*(Ql+.75)-Math.min(12,n.n)*Tt*.17},u={x:pt.x,y:pt.y,u:Tt};for(const L of n.gates)L.passed||L.z-n.z>80||L.gates.forEach((Y,J)=>{if(!Y)return;const ot=C(cn(L.k,J),me(n,L.z)+r.gateMid,-L.z);if(ot.depth<=0)return;const mt=ke(wi(G,z,ot.depth)*1,15,42);I.font=`${Math.round(mt)}px 'Game Display', 'PingFang SC', sans-serif`;const wt=I.measureText(Y.text).width;if(lr(I,ot.x-wt/2-mt*.2,ot.y,mt*.9),Li(I,Y.text,ot.x+mt*.4,ot.y,mt,Y.good?"#ffffff":"#ffe0e0"),E==="g"&&S===L.i&&v===J&&h<R){const kt=.5+.5*Math.sin(h*7);ia(I,ot.x+mt*.4,ot.y+mt*(.7+.35*kt),ke(mt*1.9,46,70),-.35)}});for(const L of n.piles){if(L.taken||L.z-n.z>80)continue;const Y=C(cn(L.k,L.slot),me(n,L.z)+1.4,-L.z);if(Y.depth<=0)continue;const J=wi(G,z,Y.depth),ot=n.pileRows[L.row];if(Zn(I,`+${L.n}`,Y.x,Y.y,ke(J*.62,15,24),"#c07a33"),E==="p"&&S===ot.i&&v===L.slot&&h<R){const mt=.5+.5*Math.sin(h*7);ia(I,Y.x+10,Y.y+26+14*mt,56,-.35)}}for(const L of n.holes){if(L.done||L.z-n.z>80)continue;const Y=C(0,me(n,L.z)+.3,-(L.z+L.len/2));if(Y.depth<=0)continue;const J=wi(G,z,Y.depth),ot=n.n<L.need;Zn(I,`${L.need}`,Y.x,Y.y,ke(J*.7,15,28),ot?"#e8384f":"#5b5466","#ffffff",lr)}for(const L of n.ledges){if(L.done||L.z-n.z>80)continue;const Y=C(0,me(n,L.z)+L.need*bn+.6,-(L.z+L.need*ge));if(Y.depth<=0)continue;const J=wi(G,z,Y.depth);Zn(I,`${L.need}`,Y.x,Y.y,ke(J*.7,15,28),n.n<L.need?"#e8384f":"#5b5466","#ffffff",lr)}for(let L=0;L<si.length;L++){const Y=n.end+(L+.5)*Sn*ge,J=C(-4.6,me(n,n.end+1)+(L+.5)*Sn*bn,-Y);J.depth<=0||Y-n.z>90||Zn(I,`×${si[L]}`,J.x,J.y,ke(wi(G,z,J.depth)*.75,15,26),gr[L])}if(n.rival.length&&n.phase==="run"){const L=(Z=(qt=n.pileRows[0])==null?void 0:qt.k)!=null?Z:2,Y=n.pileRows.findIndex(ot=>!ot.passed),J=C(cn(L,(nt=n.rival[Y>=0?Y:n.rival.length-1])!=null?nt:0),me(n,n.z+5)+2.4,-n.z-5);J.depth>0&&Zn(I,No(n.rivalN),J.x,J.y,16,"#8a4fe0","#ffffff",lr)}if(it){const L=Math.min(si.length-1,Math.floor(Math.max(0,n.climbed-1)/Sn));Zn(I,`×${$c(Math.max(1,n.climbed))}`,m.x+60,m.y-20,26,gr[L]),n.rival.length&&Zn(I,`${n.rivalClimb}`,m.x-60,m.y-20,18,"#8a4fe0","#ffffff",lr)}if(o.draw(I),a.draw(I),!e){if(vh(n.z/Math.max(1,n.end)),Pi.set("sr-n","text",No(Math.max(0,Math.floor(n.n)))),h-g<.05&&Pi.set("sr-planks","pop",String(g)),i.tip&&h<3.6){const L=ke(Math.min(h/.25,(3.6-h)/.4)),[Y,J]=i.tip;sg(I,Wc((F=xn[Y])!=null?F:xn.plank,"#5a3d22"),J,z.y+z.h*.13,L)}if(!d&&n.phase==="run"&&h<6){const L=Math.sin(h*3.2);I.globalAlpha=.85,$l(I,Wc(xn.drag,"#ffffff"),pt.x,pt.y+Tt*.8,40),I.globalAlpha=1,ia(I,pt.x+L*52,pt.y+Tt*.8+16,58,-.2)}}}const q={get state(){return c},get clock(){return h},get auto(){return P},set auto(I){P=I},get sim(){return n},get prize(){return n.climbed>0?$c(n.climbed):1},step(I){if(!(ii.on&&!e)&&(h+=I,a.step(I),o.step(I),!(h<p))){for(l+=I;l>=Ja;){l-=Ja,P&&(s.tx=Za(n,M())),n.tx=s.tx,Yl(n);for(const z of n.ev)H(z);n.ev.length=0}f>=0&&h>=f&&c==="play"&&(c=n.phase==="won"?"won":"lost")}},draw(I,z){k(I,z)},press(I){d=!0,s.press(I,n.x)},drag(I){s.drag(I)},release(I){s.release(I)},stars:()=>bg(n.climbed,x()),hint(){const I=ds(n),z=I.findIndex($=>!($.kind==="p"?n.pileRows[$.i].passed:n.gates[$.i].passed));return z<0?!1:(T=null,E=I[z].kind,S=I[z].i,v=M()[z],R=h+4,!0)},why:()=>n.why||"掉下去了",busy:()=>!1,hintTarget(){return c!=="play"?null:{x:s.screenAt(s.tx),y:m.y+120}},hintPath(){if(c!=="play"||n.phase!=="run")return null;const I=Za(n,M());return Math.abs(I-s.tx)<.3?null:s.path(s.tx,I,m.y+120)}};return eh=q,q}function lr(i,t,e,n){i.save(),i.translate(t,e),i.rotate(-.35),Oi(i,-n*.5,-n*.18,n,n*.36,n*.08,to.body,xr,Math.max(1.5,n*.1)),i.restore()}dh({id:"stair-run",title:"搭楼梯<small>一块木板一级台阶</small>",tagline:"广告里那个，这回是真的",size:{w:360,h:640},chapters:ca,start:nh,backdrop:e_(ca[0].levels[0]),teach:i=>i.endsWith("-1"),chrome:"overlay",decorate:yh,confetti:!1});
