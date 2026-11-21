(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const wh={play:'<path d="M8 4.8v14.4a.8.8 0 0 0 1.2.7l11.3-7.2a.8.8 0 0 0 0-1.4L9.2 4.1A.8.8 0 0 0 8 4.8z" fill="currentColor"/>',home:'<path d="M3.5 11.2L12 3.8l8.5 7.4M6 9.4V20h4.5v-5.5h3V20H18V9.4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',back:'<path d="M14.5 5L7.5 12l7 7" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',restart:'<path d="M19 12a7 7 0 1 1-2.05-4.95" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M19.5 3.5v4.5H15" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',next:'<path d="M5 12h12M12.5 6.5L18 12l-5.5 5.5" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',hint:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',star:'<path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" fill="currentColor"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.2" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/>',sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',mute:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9.5l5 5M20.5 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',grid:'<g fill="currentColor"><rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/></g>',skull:'<path d="M12 3a8 8 0 0 0-8 8c0 2.6 1.3 4.6 3 5.8V20h10v-3.2c1.7-1.2 3-3.2 3-5.8a8 8 0 0 0-8-8z" fill="currentColor"/><circle cx="9" cy="11.5" r="1.9" fill="#fff"/><circle cx="15" cy="11.5" r="1.9" fill="#fff"/>'};function Qt(i,t="i"){var e;return`<svg class="${t}" viewBox="0 0 24 24" aria-hidden="true">${(e=wh[i])!=null?e:""}</svg>`}function oo(){return null}function Th(i,t){var n,s;document.addEventListener("visibilitychange",()=>document.hidden?i():t());const e=oo();try{(n=e==null?void 0:e.onHide)==null||n.call(e,i),(s=e==null?void 0:e.onShow)==null||s.call(e,t)}catch{}}let Xo=0;function wr(i="light"){var n;const t=performance.now();if(t-Xo<60)return;Xo=t;const e=oo();try{e!=null&&e.vibrateShort?e.vibrateShort({type:i}):(n=navigator.vibrate)==null||n.call(navigator,i==="heavy"?30:i==="medium"?18:10)}catch{}}function Ah(){var t,e,n,s,r;const i=oo();if(!i)return 0;try{const a=(t=i.getMenuButtonBoundingClientRect)==null?void 0:t.call(i),o=(e=i.getSystemInfoSync)==null?void 0:e.call(i),l=o!=null&&o.windowWidth&&o.windowWidth>0?innerWidth/o.windowWidth:1;if(a&&a.bottom>0&&a.bottom<160)return Math.round(a.bottom*l+6);const c=((r=(s=o==null?void 0:o.statusBarHeight)!=null?s:(n=o==null?void 0:o.safeArea)==null?void 0:n.top)!=null?r:0)*l;return Math.round((c>=20?c:24)+42)}catch{return 0}}function Ch(i){const t={v:1,stars:{},sound:!0,music:!0,seen:[]};try{const e=localStorage.getItem(`${i}/save/v1`);if(!e)return t;const n=JSON.parse(e);return{v:1,stars:typeof n.stars=="object"&&n.stars?n.stars:{},sound:n.sound!==!1,music:n.music!==!1,seen:Array.isArray(n.seen)?n.seen.filter(s=>typeof s=="string"):[]}}catch{return t}}function Rh(i,t){try{localStorage.setItem(`${i}/save/v1`,JSON.stringify(t))}catch{}}const qo=.42;class Ph{constructor(t,e,n){this.el=null,this.routed=!1,this.hidden=!1,this.sfx=t,this.url=e,this.on=n;const s=()=>this.wake();for(const r of["pointerdown","touchend","click","keydown"])document.addEventListener(r,s,{capture:!0,passive:!0});window.__music=this}get state(){const t=this.el;return{url:this.url,playing:!!t&&!t.paused,time:t?t.currentTime:0,routed:this.routed}}wake(){if(!(!this.on||this.hidden||!this.url))try{if(!this.el){const e=new Audio;e.preload="auto",e.loop=!0,e.src=this.url,e.volume=qo,this.el=e}const t=this.sfx.context;if(!this.routed&&t){const e=t.createGain();e.gain.value=qo,t.createMediaElementSource(this.el).connect(e),e.connect(t.destination),this.el.volume=1,this.routed=!0}this.el.paused&&this.el.play().catch(()=>{})}catch{}}setEnabled(t){var e;this.on=t,t?this.wake():(e=this.el)==null||e.pause()}suspend(){var t;this.hidden=!0,(t=this.el)==null||t.pause()}resume(){this.hidden=!1,this.el&&this.wake()}}class Lh{constructor(t){this.ctx=null,this.out=null,this.noise=null,this.last=new Map,this.enabled=t;const e=()=>this.wake();for(const n of["pointerdown","touchend","click","keydown"])document.addEventListener(n,e,{capture:!0,passive:!0})}wake(){if(this.enabled)try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.out=this.ctx.createGain(),this.out.gain.value=.55,this.out.connect(this.ctx.destination);const e=this.ctx.sampleRate*.5;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noise.getChannelData(0);let s=7;for(let r=0;r<e;r++)s=s*16807%2147483647,n[r]=s/2147483647*2-1}this.ctx.state!=="running"&&this.ctx.resume()}catch{}}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}get context(){return this.ctx}setEnabled(t){this.enabled=t,t?this.wake():this.suspend()}play(t,e=1){var l;if(!this.enabled||!this.ctx||!this.out||this.ctx.state!=="running")return;const n=this.ctx.currentTime,s=t==="coin"?.035:t==="sizzle"||t==="hiss"?.09:t==="splash"?.12:.05;if(n-((l=this.last.get(t))!=null?l:-1)<s)return;this.last.set(t,n);const r=this.ctx,a=(c,h,u,d,f,_=0)=>{const g=r.createOscillator(),m=r.createGain();g.type=c,g.frequency.setValueAtTime(h*e,n+_),g.frequency.exponentialRampToValueAtTime(Math.max(20,u*e),n+_+d),m.gain.setValueAtTime(1e-4,n+_),m.gain.exponentialRampToValueAtTime(f,n+_+.008),m.gain.exponentialRampToValueAtTime(1e-4,n+_+d),g.connect(m).connect(this.out),g.start(n+_),g.stop(n+_+d+.02)},o=(c,h,u,d,f=0)=>{if(!this.noise)return;const _=r.createBufferSource(),g=r.createBiquadFilter(),m=r.createGain();_.buffer=this.noise,g.type="bandpass",g.frequency.value=u*e,g.Q.value=d,m.gain.setValueAtTime(h,n+f),m.gain.exponentialRampToValueAtTime(1e-4,n+f+c),_.connect(g).connect(m).connect(this.out),_.start(n+f,Math.random()*.3),_.stop(n+f+c+.02)};switch(t){case"click":a("triangle",900,600,.06,.25);break;case"pop":a("sine",520,980,.08,.3);break;case"pull":o(.18,.35,2400,1.5),a("triangle",1400,2600,.12,.16);break;case"coin":a("square",1760,1760,.05,.07),a("sine",2637,2637,.12,.12,.03);break;case"sizzle":o(.35,.28,5200,.8);break;case"hiss":o(.5,.18,900,.6);break;case"splash":o(.28,.3,1300,.9);break;case"poof":o(.22,.3,700,1.2),a("sine",340,120,.2,.25);break;case"thud":a("sine",140,55,.22,.5),o(.08,.2,400,1);break;case"star":a("triangle",1320,1320,.16,.22),a("sine",1980,1980,.22,.14,.05);break;case"win":[523,659,784,1047].forEach((c,h)=>a("triangle",c,c,.22,.24,h*.09));break;case"lose":[392,330,262].forEach((c,h)=>a("sawtooth",c,c*.97,.22,.12,h*.13));break}}}class Ih{constructor(t,e,n){this.scale=1,this.offX=0,this.offY=0,this.dpr=1,this.view={x:0,y:0,w:0,h:0},this.top=64,this.bottom=12,this.W=e,this.H=n,this.canvas=document.createElement("canvas"),this.canvas.id="stage",t.prepend(this.canvas);const s=this.canvas.getContext("2d",{alpha:!1});if(!s)throw new Error("no 2D canvas");this.g=s,this.resize(),addEventListener("resize",()=>this.resize())}resize(){const t=innerWidth,e=innerHeight;this.dpr=Math.min(window.devicePixelRatio||1,2.5),this.canvas.width=Math.round(t*this.dpr),this.canvas.height=Math.round(e*this.dpr),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`;const n=Math.max(100,e-this.top-this.bottom);this.scale=Math.min(t/this.W,n/this.H),this.offX=(t-this.W*this.scale)/2,this.offY=this.top+(n-this.H*this.scale)/2,this.view={x:-this.offX/this.scale,y:-this.offY/this.scale,w:t/this.scale,h:e/this.scale}}begin(){const{g:t,dpr:e,scale:n}=this;return t.setTransform(e*n,0,0,e*n,e*this.offX,e*this.offY),t}toLogical(t,e){const n=this.canvas.getBoundingClientRect();return{x:(t-n.left-this.offX)/this.scale,y:(e-n.top-this.offY)/this.scale}}}function Dh(i){var gt;window.__booted=!0;const t=Ch(i.id),e=()=>Rh(i.id,t),n=new Lh(t.sound),s=i.music?new Ph(n,i.music,t.sound):null,r=(gt=document.getElementById("app"))!=null?gt:document.body,a=new Ih(r,i.size.w,i.size.h),o=document.createElement("div");o.id="ui",r.append(o);const l=[];i.chapters.forEach((U,N)=>U.levels.forEach((K,it)=>l.push({id:`${N+1}-${it+1}`,ch:N,idx:it,level:K,flat:l.length})));const c=U=>{var N;return(N=t.stars[U.id])!=null?N:0},h=U=>U.flat===0||c(l[U.flat-1])>0,u=()=>{var U;return(U=l.find(N=>c(N)===0))!=null?U:l[l.length-1]},d=()=>l.reduce((U,N)=>U+c(N),0);let f="title",_=null,g=null,m=0,p=0,x=[];const M=i.chrome==="overlay";M&&document.documentElement.classList.add("chrome-overlay"),i.bottomInset!==void 0&&(a.bottom=i.bottomInset);const v=()=>{var K;const U=Ah();document.documentElement.style.setProperty("--top",`max(env(safe-area-inset-top, 0px), ${U}px)`),getComputedStyle(document.documentElement).getPropertyValue("--top");const N=Math.max(U,R());a.top=M?N+((K=i.overlayTop)!=null?K:0):56+N,a.resize()},R=()=>{const U=document.createElement("div");U.style.cssText="position:fixed;top:0;height:env(safe-area-inset-top,0px);visibility:hidden",document.body.append(U);const N=U.getBoundingClientRect().height;return U.remove(),N};v();for(const U of[300,1e3,3e3])setTimeout(v,U);addEventListener("resize",v);const w=(U,N,K,it)=>{const dt=document.createElement("button");return dt.className=U,dt.type="button",dt.innerHTML=N,it&&dt.setAttribute("aria-label",it),dt.addEventListener("click",mt=>{mt.stopPropagation(),n.play("click"),K()}),dt},A=()=>{t.sound=!t.sound,e(),n.setEnabled(t.sound),s==null||s.setEnabled(t.sound),q()},C=()=>w("round sound b-sound",Qt(t.sound?"sound":"mute"),A,t.sound?"关闭声音":"打开声音"),E=(U={})=>({levelId:_==null?void 0:_.id,chapter:_==null?void 0:_.ch,run:g,home:()=>_?k(_.ch):L(),levels:()=>{var N;return k((N=_==null?void 0:_.ch)!=null?N:u().ch)},restart:()=>{_&&F(_)},next:()=>{if(!_)return F(u());_.flat<l.length-1?F(l[_.flat+1]):L()},hint:()=>{var N;(N=g==null?void 0:g.hint)==null||N.call(g)},sound:A,soundOn:()=>t.sound,...U}),S=(U,N)=>{var K;U==="result"?o.dataset.result=N!=null&&N.won?"won":"lost":(o.dataset.screen=U,delete o.dataset.result),(K=i.decorate)==null||K.call(i,U,o,E(N))};function L(){f="title",g=null,o.innerHTML="";const U=document.createElement("div");U.className="title-screen",U.innerHTML=`<h1>${i.title}</h1><p class="tagline">${i.tagline}</p>`;const N=u(),K=l.filter(mt=>c(mt)>0).length,it=K===0?"开始":K>=l.length?"再玩":`第 ${N.id} 关`;U.append(w("big primary b-play",`${Qt("play")}<span>${it}</span>`,()=>F(N)));const dt=document.createElement("div");dt.className="row",dt.append(w("chip b-levels",`${Qt("grid")}<span>选关</span>`,()=>k(N.ch)),w("chip b-stars",`${Qt("star")}<span>${d()} / ${l.length*3}</span>`,()=>k(N.ch))),U.append(dt),o.append(U,Q(C())),S("title")}function k(U){f="levels",g=null,p=U,o.innerHTML="";const N=document.createElement("div");N.className="hud",N.append(w("round b-home",Qt("home"),L,"回到标题"));const K=document.createElement("div");K.className="hud-title",K.innerHTML=`${Qt("star")}<span>${d()} / ${l.length*3}</span>`,N.append(K,C());const it=document.createElement("div");it.className="tabs",i.chapters.forEach((mt,Vt)=>{const D=l.find(Wt=>Wt.ch===Vt),ee=h(D),Rt=w(`tab${Vt===U?" on":""}${ee?"":" locked"}`,`${ee?mt.icon:Qt("lock")}<span>${mt.name}</span>`,()=>ee&&k(Vt),mt.name);it.append(Rt)});const dt=document.createElement("div");dt.className="level-grid";for(const mt of l.filter(Vt=>Vt.ch===U)){const Vt=h(mt),D=c(mt),ee=[0,1,2].map(Wt=>`<i class="${Wt<D?"got":""}">${Qt("star")}</i>`).join(""),Rt=w(`level${Vt?"":" locked"}${D?" done":""}`,Vt?`<b>${mt.idx+1}</b><span class="stars">${ee}</span>`:Qt("lock"),()=>Vt&&F(mt),`第 ${mt.id} 关`);dt.append(Rt)}o.append(N,it,dt),S("levels",{chapter:U})}function F(U){var dt;f="play",_=U,x=[],g=i.start(U.level,{sfx:n,buzz:wr,levelId:U.id}),m=0,o.innerHTML="";const N=document.createElement("div");N.className="hud",N.append(w("round b-home",Qt("home"),()=>k(U.ch),"选关"));const K=document.createElement("div");K.className="hud-title",K.innerHTML=`${i.chapters[U.ch].icon}<span>${U.id}</span>`,N.append(K);const it=document.createElement("div");it.className="hud-right",g.hint&&it.append(w("round b-hint",Qt("hint"),()=>{var mt;return(mt=g==null?void 0:g.hint)==null?void 0:mt.call(g)},"提示")),it.append(w("round b-restart",Qt("restart"),()=>F(U),"重来")),N.append(it),o.append(N),S("play"),(dt=i.teach)!=null&&dt.call(i,U.id)&&setTimeout(()=>{var mt;return(mt=g==null?void 0:g.hint)==null?void 0:mt.call(g)},400)}function W(U){var it,dt;if(!_||!g)return;const N=_,K=document.createElement("div");if(K.className=`result ${U?"won":"lost"}`,U){const mt=g.stars();mt>c(N)&&(t.stars[N.id]=mt,e());const Vt=N.flat===l.length-1;K.innerHTML=`<div class="stars-big">${[0,1,2].map(Rt=>`<i class="${Rt<mt?"got":""}" style="animation-delay:${.15+Rt*.18}s">${Qt("star")}</i>`).join("")}</div>`,[0,1,2].slice(0,mt).forEach(Rt=>setTimeout(()=>n.play("star",1+Rt*.12),150+Rt*180));const D=document.createElement("div");D.className="acts",Vt?D.append(w("big primary b-next",`${Qt("home")}<span>全部通关</span>`,L)):D.append(w("big primary b-next",`${Qt("next")}<span>下一关</span>`,()=>F(l[N.flat+1])));const ee=document.createElement("div");ee.className="row",ee.append(w("chip b-replay",`${Qt("restart")}<span>重玩</span>`,()=>F(N)),w("chip b-levels",`${Qt("grid")}<span>选关</span>`,()=>k(N.ch))),D.append(ee),K.append(D)}else{K.innerHTML=`<div class="why">${Qt("skull")}<span>${(dt=(it=g.why)==null?void 0:it.call(g))!=null?dt:"失败了"}</span></div>`;const mt=document.createElement("div");if(mt.className="acts",mt.append(w("big primary b-retry",`${Qt("restart")}<span>再来</span>`,()=>F(N))),g.hint){const Vt=document.createElement("div");Vt.className="row",Vt.append(w("chip b-tip",`${Qt("hint")}<span>看提示</span>`,()=>{F(N),setTimeout(()=>{var D;return(D=g==null?void 0:g.hint)==null?void 0:D.call(g)},300)})),mt.append(Vt)}K.append(mt)}o.append(K),S("result",{won:U,stars:U?g.stars():0})}const Q=U=>{const N=document.createElement("div");return N.className="corner",N.append(U),N};function q(){if(f==="title")L();else if(f==="levels")k(p);else{const U=o.querySelector(".sound");U&&(U.innerHTML=Qt(t.sound?"sound":"mute"))}}let j=null;a.canvas.addEventListener("pointerdown",U=>{if(f!=="play"||!g||g.state!=="play"||j)return;const N=a.toLogical(U.clientX,U.clientY);j={id:U.pointerId,run:g};try{a.canvas.setPointerCapture(U.pointerId)}catch{}g.press(N.x,N.y)}),a.canvas.addEventListener("pointermove",U=>{var K,it;if(!j||U.pointerId!==j.id||j.run!==g)return;const N=a.toLogical(U.clientX,U.clientY);(it=(K=j.run).drag)==null||it.call(K,N.x,N.y)});const P=U=>{var it;if(!j||U.pointerId!==j.id)return;const N=j.run;if(j=null,N!==g)return;const K=a.toLogical(U.clientX,U.clientY);(it=N.release)==null||it.call(N,K.x,K.y)};a.canvas.addEventListener("pointerup",P),a.canvas.addEventListener("pointercancel",P),addEventListener("pointerup",P,!0),addEventListener("pointercancel",P,!0),addEventListener("keydown",U=>{var N;f!=="play"||!_||(U.key==="r"||U.key==="R"?F(_):U.key==="h"||U.key==="H"?(N=g==null?void 0:g.hint)==null||N.call(g):U.key==="Escape"?k(_.ch):(U.key==="n"||U.key==="Enter")&&(g==null?void 0:g.state)==="won"&&_.flat<l.length-1&&F(l[_.flat+1]))});let X=performance.now(),J=!0,rt=1;const St=getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()||"#222",Ft=U=>{var dt;const N=Math.min(.05,(U-X)/1e3);X=U;const K=U/1e3,it=a.g;it.setTransform(1,0,0,1,0,0),it.fillStyle=St,it.fillRect(0,0,a.canvas.width,a.canvas.height),a.begin(),f==="play"&&g?(g.step(N*rt),g.draw(it,a.view,K),g.state!=="play"&&(m?m>0&&U-m>(g.state==="won"?700:900)&&!o.querySelector(".result")&&W(g.state==="won"):(m=U,g.state==="won"?(n.play("win"),wr("medium"),i.confetti!==!1&&$()):(n.play("lose"),wr("heavy"))))):(dt=i.backdrop)==null||dt.call(i,it,a.view,K),tt(it,N),J&&requestAnimationFrame(Ft)};requestAnimationFrame(Ft),Th(()=>{J=!1,n.suspend(),s==null||s.suspend()},()=>{J||(J=!0,X=performance.now(),requestAnimationFrame(Ft)),n.wake(),s==null||s.resume()});function $(){const U=["#ff5c8a","#f2b632","#4f7cff","#5ec8b8","#ffffff"],N=a.view;for(let K=0;K<90;K++){const it=K%2===0;x.push({x:it?N.x+10:N.x+N.w-10,y:N.y+N.h*.55,vx:(it?1:-1)*(120+Math.random()*260),vy:-(380+Math.random()*420),r:Math.random()*6,w:5+Math.random()*6,h:3+Math.random()*5,c:U[K%U.length],spin:(Math.random()-.5)*14})}}function tt(U,N){if(!x.length)return;const K=a.view.y+a.view.h+20;x=x.filter(it=>it.y<K);for(const it of x)it.vy+=700*N,it.vx*=1-.8*N,it.x+=it.vx*N,it.y+=it.vy*N,it.r+=it.spin*N,U.save(),U.translate(it.x,it.y),U.rotate(it.r),U.fillStyle=it.c,U.fillRect(-it.w/2,-it.h/2,it.w,it.h*Math.abs(Math.cos(it.r*1.7))+1),U.restore()}L(),window.__game={id:i.id,entries:l.map(U=>U.id),progress:t,get run(){return g},play:U=>{const N=l.find(K=>K.id===U);return N&&F(N),!!N},screen:()=>f,setSpeed:U=>{rt=U>0?U:1},state:()=>{var U;return(U=g==null?void 0:g.state)!=null?U:null},busy:()=>{var U;return!!((U=g==null?void 0:g.busy)!=null&&U.call(g))},tapTarget:()=>{var N;const U=(N=g==null?void 0:g.hintTarget)==null?void 0:N.call(g);return U?{x:a.offX+U.x*a.scale,y:a.offY+U.y*a.scale}:null},tapPath:()=>{var N;const U=(N=g==null?void 0:g.hintPath)==null?void 0:N.call(g);return U&&U.length?U.map(K=>({x:a.offX+K.x*a.scale,y:a.offY+K.y*a.scale})):null}}}const Uh=""+new URL("action-Dm16Z4yG.mp3",import.meta.url).href,me=(i,t=0,e=1)=>i<t?t:i>e?e:i,ar={outCubic:i=>1-(1-i)**3,inCubic:i=>i*i*i,inOutSine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+(1.70158+1)*(i-1)**3+1.70158*(i-1)**2,bump:i=>Math.sin(Math.PI*me(i))};function Nh(i,t,e,n,s,r){r=Math.max(0,Math.min(r,n/2,s/2)),i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Fi(i,t,e,n,s,r,a,o,l=2){Nh(i,t,e,n,s,r),i.fillStyle=a,i.fill(),o&&(i.lineWidth=l,i.strokeStyle=o,i.stroke())}function bn(i,t,e,n,s,r,a="#221f2e",o="'Game Display', 'PingFang SC', sans-serif"){i.font=`${Math.round(s)}px ${o}`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=Math.max(2,s*.18),i.strokeStyle=a,i.strokeText(t,e,n+s*.04),i.fillStyle=r,i.fillText(t,e,n+s*.04)}function an(i){const t=Math.abs(i);return t<1e4?String(Math.round(i)):t<1e8?`${$o(i/1e4)}万`:`${$o(i/1e8)}亿`}const $o=i=>Math.abs(i)>=100?String(Math.round(i)):i.toFixed(1).replace(/\.0$/,""),ri={on:!1},yc='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5" width="3.8" height="14" rx="1.4" fill="currentColor"/><rect x="13.7" y="5" width="3.8" height="14" rx="1.4" fill="currentColor"/></svg>',Fh='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a8 8 0 0 0-8 8c0 2.6 1.3 4.6 3 5.8V20h10v-3.2c1.7-1.2 3-3.2 3-5.8a8 8 0 0 0-8-8z" fill="#efe9df" stroke="#2a2420" stroke-width="1.5" stroke-linejoin="round"/><circle cx="9" cy="11.5" r="2.1" fill="#2a2420"/><circle cx="15" cy="11.5" r="2.1" fill="#2a2420"/><path d="M10 17v2.6M12 17v2.6M14 17v2.6" stroke="#2a2420" stroke-width="1.3"/></svg>',hn=(i,t="")=>{const e=document.createElement("div");return e.className=i,e.innerHTML=t,e};function Ji(i,t,e){const n=document.createElement("button");return n.type="button",n.className=i,n.innerHTML=t,n.addEventListener("click",s=>{s.stopPropagation(),e()}),n}function Oh(i,t){var s,r;ri.on=!1;const e=i.querySelector(".hud-title");e&&(e.innerHTML=`<span>第 ${(s=t.levelId)!=null?s:""} 关</span>`);const n=i.querySelector(".b-home");if(n){const a=n.cloneNode(!1);a.classList.add("rc-pause"),a.innerHTML=yc,a.setAttribute("aria-label","暂停"),a.addEventListener("click",o=>{o.stopPropagation(),zh(i,t)}),n.remove(),i.append(a)}(r=i.querySelector(".hud-right"))==null||r.remove(),on.reset()}function zh(i,t){if(i.querySelector(".rc-shade"))return;ri.on=!0;const e=hn("rc-shade"),n=()=>{e.remove(),ri.on=!1},s=hn("rc-card",`<div class="rc-card-head">${yc}<b>暂停</b></div>`),r=hn("rc-row"),a=Ji("rc-small",`${Qt(t.soundOn()?"sound":"mute")}<span>声音</span>`,()=>{t.sound(),a.innerHTML=`${Qt(t.soundOn()?"sound":"mute")}<span>声音</span>`});r.append(Ji("rc-small",`${Qt("restart")}<span>重来</span>`,()=>{ri.on=!1,t.restart()}),Ji("rc-small",`${Qt("hint")}<span>提示</span>`,()=>{n(),t.hint()}),Ji("rc-small",`${Qt("grid")}<span>选关</span>`,()=>{ri.on=!1,t.levels()}),a),s.append(r,Ji("big primary rc-go",`${Qt("play")}<span>继续</span>`,n)),e.append(s),e.addEventListener("click",o=>{o.target===e&&n()}),i.append(e)}function Bh(i,t,e){var o;const n=i.querySelector(".result");if(!n||(n.prepend(hn("rc-ribbon",`<b>${t.won?"胜利":"失败"}</b>`)),!t.won))return;e.length&&((o=n.querySelector(".stars-big"))==null||o.after(hn("rc-stats",e.map(l=>`<div class="rc-slot">${l.icon}<b>${l.value}</b><span>${l.label}</span></div>`).join(""))));const s=n.querySelector(".acts"),r=n.querySelector(".b-next"),a=n.querySelector(".b-levels");if(s&&r&&a){a.className="big rc-back b-levels",a.innerHTML=`${Qt("back")}<span>返回</span>`;const l=hn("rc-acts");l.append(a,r),s.prepend(l)}}const on={last:new Map,reset(){this.last.clear()},set(i,t,e){const n=`${i}.${t}`;if(this.last.get(n)===e)return;const s=document.getElementById(i);s&&(this.last.set(n,e),t==="text"?s.textContent=e:t==="width"?s.style.width=e:t==="show"?s.classList.toggle("on",e==="1"):(s.classList.remove("pop"),s.offsetWidth,s.classList.add("pop")))}},Tr='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8.5 4.5c-.6 3.4.6 6 3 7.6M23.5 4.5c.6 3.4-.6 6-3 7.6" fill="none" stroke="#f4ead2" stroke-width="3.4" stroke-linecap="round"/><circle cx="16" cy="18.5" r="10.5" fill="#d8443a" stroke="#4a100d" stroke-width="2.2"/><ellipse cx="12.2" cy="17.4" rx="2.2" ry="1.9" fill="#ffe066"/><ellipse cx="19.8" cy="17.4" rx="2.2" ry="1.9" fill="#ffe066"/><path d="M11.5 23.6h9" stroke="#3a0c0a" stroke-width="2.4" stroke-linecap="round"/><path d="M13 23.6v1.6M19 23.6v1.6" stroke="#f4ead2" stroke-width="1.6"/></svg>',kh='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5.5 21a10.5 10.5 0 0 1 21 0z" fill="#9aab5c" stroke="#262b16" stroke-width="2.2" stroke-linejoin="round"/><path d="M11 12.5c1.6-1.4 3.4-2 5-2" fill="none" stroke="#c9d68e" stroke-width="2.2" stroke-linecap="round"/><rect x="3" y="20.5" width="26" height="4" rx="2" fill="#7b8a43" stroke="#262b16" stroke-width="2.2"/></svg>';function Hh(i,t,e){var n,s,r;if(i==="play"){Oh(t,e);const a=hn("gs-prog",`<div class="gs-track"><i id="gs-prog"></i></div><span class="gs-goal">${Tr}</span>`);a.id="gs-progbox";const o=hn("gs-bossbar",`<span class="gs-goal">${Tr}</span><div class="gs-track"><i id="gs-bosshp"></i><b id="gs-bossnum"></b></div>`);o.id="gs-bossbar",t.append(a,o),t.append(hn("gs-pill",`<i>${Tr}</i><b id="gs-bossmax"></b>`)),t.append(hn("gs-kill",'<b id="gs-kills">0</b><span>击杀!</span><u id="gs-combo"></u>'))}else if(i==="result"){const a=e.run;Bh(t,e,[{icon:kh,value:an(Math.max(0,(s=(n=a==null?void 0:a.sim)==null?void 0:n.n)!=null?s:0)),label:"剩余士兵"},{icon:Fh,value:String((r=a==null?void 0:a.kills)!=null?r:0),label:"击杀"}])}}const In=i=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${i}</svg>`,Le='fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"',En={gate:In(`<path d="M4 21V5.5a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 20 5.5V21" ${Le}/><path d="M12 9v7M8.5 12.5h7" ${Le}/>`),bad:In(`<path d="M4 21V5.5a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 20 5.5V21" ${Le}/><path d="M8.5 12.5h7" ${Le}/>`),aim:In(`<circle cx="12" cy="12" r="7" ${Le}/><path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5" ${Le}/>`),fire:In(`<path d="M9 21h6v-9.5C15 7.5 13.5 4.5 12 3c-1.5 1.5-3 4.5-3 8.5z" ${Le}/><path d="M9 17h6" ${Le}/>`),wall:In(`<path d="M4 7l16 12M20 7L4 19M3 13h18" ${Le}/>`),boss:In(`<path d="M5 4l2.5 5M19 4l-2.5 5" ${Le}/><path d="M12 8c4.4 0 7 2.8 7 6.5S16.4 21 12 21s-7-2.8-7-6.5S7.6 8 12 8z" ${Le}/><path d="M9.5 15.5h.01M14.5 15.5h.01" ${Le}/>`),man:In(`<path d="M4 15a8 8 0 0 1 16 0z" ${Le}/><path d="M2.5 15h19M9 19.5h6" ${Le}/>`),drag:In(`<path d="M5 9l-3 3 3 3M19 9l3 3-3 3M2.5 12h19" ${Le}/>`)},Lt=(i,t,e={})=>({start:i,rows:t,...e}),Yo=[{name:"数字门",icon:En.gate,levels:[Lt(5,["g +5 x3","z .6n .6n","g x2 +10","z .7n .8n","g x3 +20","B 5n"],{tip:["gate","挑大的门"]}),Lt(4,["g x2 +3","z 1n","g +10 x3","z .9n .9n","g x2 +15","z 1n 1n","g +30 x2","B 7n"]),Lt(6,["g +4 x2","z .8n .8n","g x3 +12","z 1n 1n","g +20 x2","z 2n","g x2 +40","z 1.1n 1.1n","B 6n"]),Lt(3,["g x3 +5","z .8n .8n","g +8 x2","z 1.8n","g x2 +25","z 1.2n 1.2n","g +40 x2","z .9n .9n .9n","B 8.3n"]),Lt(8,["g +12 x2","z .9n .9n","g x2 +25","z 2n","g +40 x2","z 1n 1n","g x3 +60","z 1n 1n","B 6n"]),Lt(5,["g x2 +6","z .8n .8n","g +15 x2","z 2n","g x3 +30","z .7n .7n .7n","g +80 x2","z 2.2n","B 6.5n"]),Lt(2,["g +3 x2","z 1n","g x3 +6","z 1.2n","g +20 x2","z 1n 1n","g x2 +40","z 1n 1n","g +80 x2","z 2n","B 7n"]),Lt(10,["g x2 +15","z .8n .8n","g +30 x2","z 1n 1n","g x3 +50","z 1.1n 1.1n","g +150 x2","z 1.2n 1.2n","g x2 +200","B 6.5n"])]},{name:"坏门",icon:En.bad,levels:[Lt(10,["g +5 -5","z .8n","g x2 -10","z .9n .9n","g -5 +10","B 6n"],{tip:["bad","红门会减人"]}),Lt(6,["g x2 -3","z 1n","g +10 /2","z .9n .9n","g -10 x2","z 1n 1n","g /2 +30","B 6.5n"]),Lt(3,["g +6 x2","z .8n","g x2 +8","z 1n 1n","g +12 x2","z 1n 1n","g x2 +40","z 1.2n","B 7.8n"]),Lt(40,["g -10 /2","z .7n .7n","g x2 -20","z 1n 1n","g /3 -25","z .8n .8n","g +40 x2","B 6.5n"]),Lt(5,["g +6 x2 -2","z .9n","g -5 x3 /2","z 1n 1n","g +20 -10 x2","z 1n 1n","g /2 +30 x2","B 6.5n"]),Lt(8,["g x2 -4","z 1n","g -10 +12","z .8n .8n","g x2 /2","z 1.2n","g +25 -15","z 1n 1n","g x3 -30","B 6.5n"]),Lt(12,["g /2 +8","z .8n .8n","g -6 x2","z 1.1n","g x2 -20","z .9n .9n .9n","g -40 +50","z 1n 1n","g /2 x2","B 7n"]),Lt(6,["g +4 x2 -3","z 1n","g -5 +9 x2","z 1n 1n","g x3 -10 /2","z 1.1n 1.1n","g +50 /3 x2","z 1n 1n","g -40 x2 +100","B 7n"])]},{name:"打门",icon:En.aim,levels:[Lt(10,["g +5 -10^1<25","z .7n","g x2 x1^20<3","z .9n .9n","g +20 -20^2<60","B 6n"],{tip:["aim","门挨枪会涨"]}),Lt(8,["g x2 -8^1<20","z .8n .8n","g +15 -15^1<40","z 1n","g x1^30<3 x2","z 1n 1n","g -30^2<80 +40","B 8n"]),Lt(15,["g -20^1<30 +10","z 1n","g x2 +20","z .9n .9n","g x1^25<4 x2","z 1.2n","g +60 -50^1<100","B 8n"]),Lt(12,["g +8 -15^1<30","z .5n .5n","g x1^30<3 x2","z .6n .6n .6n","g -40^1<60 +30","z 1n","g x2 x1^60<4","B 8.5n"]),Lt(5,["g x2 +3","g -10^1<15 x2","z 1n","g +10 x1^15<3","z 1n 1n","g -30^1<50 x2","z 1n 1n","g x2 +40","B 6.5n"]),Lt(20,["g x1^25<3 +25","z .8n .8n","g -40^2<60 x2","z 1n 1n","g x2 -60^1<120","z 1.1n","g x1^80<3 +100","z 1n 1n","B 7n"]),Lt(6,["g +6 -6^1<18 x2","z .9n","g x1^15<3 +10 /2","z 1n 1n","g -20^1<40 x2 +15","z 1n 1n","g +50 x1^60<3 -30","B 7n"]),Lt(10,["g -10^1<30 x2","z .8n .8n","g x1^30<3 +25","z 1n 1n","g -50^1<100 /2","z .9n .9n .9n","g x2 x1^100<4","z 1.2n 1.2n","g -100^3<300 -50","B 9n"])]},{name:"火力",icon:En.fire,levels:[Lt(10,["g +5 f+1","z .8n .8n","g +5 fx2","z 1n 1n","g x2 f+1","B 6n"],{tip:["fire","火力门：每人打得更疼"]}),Lt(8,["g f+1 +5","z 1n","g x2 f+1","z .9n .9n","g fx2 +20","z 1.1n","g +30 f+2","B 9n"]),Lt(12,["g x2 f+1","z .9n .9n","g f+1 +20","z 1n","g -10 fx2","z 1n 1n","g x2 f+2","z 1.2n","B 6.5n"]),Lt(6,["g f+1 x2","z 1n","g +10 f+1","z 1n 1n","g fx2 x2","z .5n .5n .5n","g +50 f+1","z 1.4n","B 7n"]),Lt(20,["g f+1 /2","z .8n .8n","g -10 f+1","z 1n","g x2 fx2","z 1n 1n","g f+2 +40","z 1.1n 1.1n","B 7n"]),Lt(5,["g +5 f+1 x2","z .9n","g f+1 -3 x2","z 1n 1n","g fx2 +20 /2","z 1n 1n","g x2 f+2 +30","B 7n"]),Lt(10,["g f+1 -10^1<20","z .9n .9n","g x1^30<3 f+1","z 1n 1n","g -5 fx2","z 1.1n","g f+2 x2","z 1n 1n","B 7n"]),Lt(8,["g x2 f+1","z 1n","g f+1 +20 /2","z 1n 1n","g fx2 x2","z .9n .9n .9n","g +60 f+2 -20","z 1.2n 1.2n","g x2 fx2","B 7.5n"])]},{name:"路障",icon:En.wall,levels:[Lt(15,["w 1. .4n","g +10 x2","z .8n","w .1 .4n","g x2 +20","z 1n","w 1.1 .4n","g +15 x2 +5","B 6n"],{tip:["wall","躲开拒马"]}),Lt(10,["g x2 +5","w .1 .5n",">-12 g +10 x2","z 1n","w 1. .5n",">-12 g x2 +15","z 1n 1n","g +30 x2","B 6.5n"]),Lt(8,["g +8 x2","z .9n","w .1. .5n",">-10 g x2 +12 x3","z 1n 1n","w 1.1 .4n",">-10 g +20 x2 /2","z 1.1n","B 6.5n"]),Lt(12,["w 1. .3n",">-12 g x2 -5","z 1n","w .1 .6n",">-13 g x2 +25","z 1n 1n","w 1. .5n",">-13 g x3 +40","z 1n 1n","B 7n"]),Lt(6,["g +6 x2","w .1 .5n",">-12 g x2 -10^1<20","z 1n","w 1.1 .5n",">-10 g /2 x3 -5","z 1n 1n","w .1 .4n",">-12 g x2 f+1","z 1.1n","B 7n"]),Lt(20,["w 11. .3n",">-10 g /2 +10 x2","z .9n .9n","w .11 .3n",">-10 g x2 -10 +20","z 1n 1n","w 1.1 .4n",">-10 g +30 x2 /2","z 1.2n","B 7n"]),Lt(9,["g x2 +5","w 1. .5n","w .1 .5n","g +20 x2","z 1n 1n","w 1.1 .5n",">-10 g x1^20<3 -10 x2","z 1n 1n","w .1 .5n",">-12 g x2 +50","B 7n"]),Lt(10,["w .1 .4n",">-12 g x2 +5","z 1n","w 1. .4n",">-12 g -20^1<40 x2","z 1n 1n","w .1. .4n",">-10 g x2 f+1 x3","z 1n 1n","w 1.1 .4n",">-10 g +80 x2 -40","B 7.5n"])]},{name:"发威",icon:En.boss,levels:[Lt(10,["g +10 x2","z .8n","g x2 +10","z 1n","g x3 +20","B 5n .1n 2.5"],{tip:["boss","大怪会跺脚"]}),Lt(8,["g x2 +5","z 1n","g f+1 +10","z 1n 1n","g x2 -10","z 1n","g +30 fx2","B 6n .12n 2.5"]),Lt(12,["g -10^1<20 x2","z 1n 1n","g x2 +15","z 1n","w .1 .4n",">-12 g +30 x2","z 1n 1n","B 6n .15n 2"]),Lt(6,["g x2 +4 /2","z 1n","g f+1 x2 -5","z 1n 1n","g x2 +20","z 1.2n","g fx2 +40 x2","B 6.5n .12n 2"]),Lt(15,["w 1. .3n",">-12 g x2 +10","z 1n 1n","g x1^30<3 f+1","z 1n","w .1 .4n",">-12 g x2 /2","z 1n 1n","g +50 fx2","B 6.5n .15n 2"]),Lt(5,["g x2 +5","z 1n","g -10^1<20 x2","z 1n 1n","g fx2 x2","z 1n 1n","g +40 x3 -20","z 1.2n","g x2 f+2","B 7n .15n 2"]),Lt(20,["g /2 x2 +10","z .9n .9n","w 1.1 .3n",">-10 g -10 x2 +30","z 1n 1n","g f+1 x1^60<3","z 1.1n","w .1 .4n",">-12 g x2 +80","B 7n .15n 2"]),Lt(10,["g x3 +10","z .8n","g -20^1<60 x2","z 1n 1n","w .1 .4n",">-12 g x3 +40","z 1n 1n","g x2 fx2","z 1n 1n","g x5 +300 /2","z 1.1n 1.1n","w 1. .3n",">-12 g /2 x6","B 7n .1n 2"])]}];class Gh{constructor(){this.bits=[],this.floats=[],this.shakeAmt=0,this.ox=0,this.oy=0}burst(t,e,n,s=14,r=160,a={}){var l,c,h;const o=Array.isArray(n)?n:[n];for(let u=0;u<s;u++){const d=Math.random()*Math.PI*2,f=r*(.4+Math.random()*.8);this.bits.push({x:t,y:e,vx:Math.cos(d)*f,vy:Math.sin(d)*f-r*.3,r:((l=a.size)!=null?l:4)*(.6+Math.random()*.8),life:((c=a.life)!=null?c:.6)*(.7+Math.random()*.6),age:0,color:o[u%o.length],grav:(h=a.grav)!=null?h:420,square:!!a.square})}}float(t,e,n,s="#fff",r=20,a=.9){this.floats.push({x:t,y:e,text:n,color:s,size:r,age:0,life:a,rise:40+r})}shake(t){this.shakeAmt=Math.max(this.shakeAmt,t)}step(t){for(const n of this.bits)n.age+=t,n.vy+=n.grav*t,n.vx*=1-1.5*t,n.x+=n.vx*t,n.y+=n.vy*t;this.bits=this.bits.filter(n=>n.age<n.life);for(const n of this.floats)n.age+=t;this.floats=this.floats.filter(n=>n.age<n.life),this.shakeAmt=Math.max(0,this.shakeAmt-t*40);const e=this.shakeAmt;this.ox=e?(Math.random()*2-1)*e:0,this.oy=e?(Math.random()*2-1)*e:0}draw(t){for(const e of this.bits){const n=1-e.age/e.life;t.globalAlpha=me(n*1.5),t.fillStyle=e.color,e.square?t.fillRect(e.x-e.r,e.y-e.r,e.r*2,e.r*2):(t.beginPath(),t.arc(e.x,e.y,e.r*(.5+n*.5),0,Math.PI*2),t.fill())}t.globalAlpha=1;for(const e of this.floats){const n=e.age/e.life,s=n<.18?ar.outBack(n/.18):1;t.globalAlpha=n>.7?me((1-n)/.3):1,bn(t,e.text,e.x,e.y-ar.outCubic(n)*e.rise,e.size*(.6+.4*s),e.color)}t.globalAlpha=1}get busy(){return this.bits.length>0||this.floats.length>0}}const lo="170",Vh=0,Ko=1,Wh=2,Ec=1,Xh=2,yn=3,Vn=0,Pe=1,cn=2,Hn=0,Ii=1,or=2,Jo=3,Zo=4,qh=5,ni=100,$h=101,Yh=102,Kh=103,Jh=104,Zh=200,jh=201,Qh=202,tu=203,fa=204,da=205,eu=206,nu=207,iu=208,su=209,ru=210,au=211,ou=212,lu=213,cu=214,pa=0,ma=1,ga=2,Oi=3,_a=4,va=5,xa=6,Ma=7,co=0,hu=1,uu=2,Gn=0,fu=1,du=2,pu=3,mu=4,gu=5,_u=6,vu=7,bc=300,zi=301,Bi=302,Sa=303,ya=304,gr=306,ms=1e3,Tn=1001,Ea=1002,De=1003,xu=1004,ws=1005,un=1006,Ar=1007,ai=1008,Rn=1009,wc=1010,Tc=1011,gs=1012,ho=1013,hi=1014,sn=1015,vs=1016,uo=1017,fo=1018,ki=1020,Ac=35902,Cc=1021,Rc=1022,qe=1023,Pc=1024,Lc=1025,Di=1026,Hi=1027,_r=1028,po=1029,Ic=1030,mo=1031,go=1033,Qs=33776,tr=33777,er=33778,nr=33779,ba=35840,wa=35841,Ta=35842,Aa=35843,Ca=36196,Ra=37492,Pa=37496,La=37808,Ia=37809,Da=37810,Ua=37811,Na=37812,Fa=37813,Oa=37814,za=37815,Ba=37816,ka=37817,Ha=37818,Ga=37819,Va=37820,Wa=37821,ir=36492,Xa=36494,qa=36495,Dc=36283,$a=36284,Ya=36285,Ka=36286,Mu=3200,Su=3201,_o=0,yu=1,kn="",ge="srgb",Wi="srgb-linear",vr="linear",te="srgb",mi=7680,jo=519,Eu=512,bu=513,wu=514,Uc=515,Tu=516,Au=517,Cu=518,Ru=519,Qo=35044,xs=35048,tl="300 es",An=2e3,lr=2001;class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,Ja=180/Math.PI;function Ms(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Pu(i,t){return(i%t+t)%t}function Rr(i,t,e){return(1-e)*i+e*t}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=s[0],m=s[3],p=s[6],x=s[1],M=s[4],v=s[7],R=s[2],w=s[5],A=s[8];return r[0]=a*g+o*x+l*R,r[3]=a*m+o*M+l*w,r[6]=a*p+o*v+l*A,r[1]=c*g+h*x+u*R,r[4]=c*m+h*M+u*w,r[7]=c*p+h*v+u*A,r[2]=d*g+f*x+_*R,r[5]=d*m+f*M+_*w,r[8]=d*p+f*v+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=e*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Ot;function Nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){const i=_s("canvas");return i.style.display="block",i}const el={};function ls(i){i in el||(el[i]=!0,console.warn(i))}function Iu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Du(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?vr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const nl=[.64,.33,.3,.6,.15,.06],il=[.2126,.7152,.0722],sl=[.3127,.329],rl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Wi]:{primaries:nl,whitePoint:sl,transfer:vr,toXYZ:rl,fromXYZ:al,luminanceCoefficients:il,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:nl,whitePoint:sl,transfer:te,toXYZ:rl,fromXYZ:al,luminanceCoefficients:il,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});let gi;class Nu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=_s("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fu=0;class Fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lr(s[a].image)):r.push(Lr(s[a]))}else r=Lr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ou=0;class Ee extends Xi{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Tn,s=Tn,r=un,a=ai,o=qe,l=Rn,c=Ee.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Ms(),this.name="",this.source=new Fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=bc;Ee.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,R=(p+1)/2,w=(h+d)/4,A=(u+g)/4,C=(_+m)/4;return M>v&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=A/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zu extends Xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oc extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bu extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $e{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-o;const p=l*d+c*f+h*_+u*g,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,p*x);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const v=o*x;if(l=l*m+d*v,c=c*m+f*v,h=h*m+_*v,u=u*m+g*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ir.copy(this).projectOnVector(t),this.sub(Ir)}reflect(t){return this.sub(Ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new I,ol=new $e;class di{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),As.subVectors(this.max,ji),_i.subVectors(t.a,ji),vi.subVectors(t.b,ji),xi.subVectors(t.c,ji),Dn.subVectors(vi,_i),Un.subVectors(xi,vi),$n.subVectors(_i,xi);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-$n.z,$n.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,$n.z,0,-$n.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-$n.y,$n.x,0];return!Dr(e,_i,vi,xi,As)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,_i,vi,xi,As))?!1:(Cs.crossVectors(Dn,Un),e=[Cs.x,Cs.y,Cs.z],Dr(e,_i,vi,xi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new I,new I,new I,new I,new I,new I,new I,new I],je=new I,Ts=new di,_i=new I,vi=new I,xi=new I,Dn=new I,Un=new I,$n=new I,ji=new I,As=new I,Cs=new I,Yn=new I;function Dr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);const o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ku=new di,Qi=new I,Ur=new I;class Ss{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ku.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Ur)),this.expandByPoint(Qi.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new I,Nr=new I,Rs=new I,Nn=new I,Fr=new I,Ps=new I,Or=new I;class Hu{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Nr.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Nr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Rs),o=Nn.dot(this.direction),l=-Nn.dot(Rs),c=Nn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nr).addScaledVector(Rs,d),f}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){Fr.subVectors(e,t),Ps.subVectors(n,t),Or.crossVectors(Fr,Ps);let a=this.direction.dot(Or),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const l=o*this.direction.dot(Ps.crossVectors(Nn,Ps));if(l<0)return null;const c=o*this.direction.dot(Fr.cross(Nn));if(c<0||l+c>a)return null;const h=-o*Nn.dot(Or);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,_,g,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,_,g,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gu,t,Vu)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Fn.crossVectors(n,ke),Fn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Fn.crossVectors(n,ke)),Fn.normalize(),Ls.crossVectors(ke,Fn),s[0]=Fn.x,s[4]=Ls.x,s[8]=ke.x,s[1]=Fn.y,s[5]=Ls.y,s[9]=ke.y,s[2]=Fn.z,s[6]=Ls.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],R=n[15],w=s[0],A=s[4],C=s[8],E=s[12],S=s[1],L=s[5],k=s[9],F=s[13],W=s[2],Q=s[6],q=s[10],j=s[14],P=s[3],X=s[7],J=s[11],rt=s[15];return r[0]=a*w+o*S+l*W+c*P,r[4]=a*A+o*L+l*Q+c*X,r[8]=a*C+o*k+l*q+c*J,r[12]=a*E+o*F+l*j+c*rt,r[1]=h*w+u*S+d*W+f*P,r[5]=h*A+u*L+d*Q+f*X,r[9]=h*C+u*k+d*q+f*J,r[13]=h*E+u*F+d*j+f*rt,r[2]=_*w+g*S+m*W+p*P,r[6]=_*A+g*L+m*Q+p*X,r[10]=_*C+g*k+m*q+p*J,r[14]=_*E+g*F+m*j+p*rt,r[3]=x*w+M*S+v*W+R*P,r[7]=x*A+M*L+v*Q+R*X,r[11]=x*C+M*k+v*q+R*J,r[15]=x*E+M*F+v*j+R*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+g*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],x=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,M=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,v=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,R=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,w=e*x+n*M+s*v+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=x*A,t[1]=(g*d*r-u*m*r-g*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,t[4]=M*A,t[5]=(h*m*r-_*d*r+_*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*A,t[8]=v*A,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*p-e*u*p)*A,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=R*A,t[13]=(h*g*s-_*u*s+_*n*d-e*g*d-h*n*m+e*u*m)*A,t[14]=(_*o*s-a*g*s-_*n*l+e*g*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,g=a*h,m=a*u,p=o*u,x=l*c,M=l*h,v=l*u,R=n.x,w=n.y,A=n.z;return s[0]=(1-(g+p))*R,s[1]=(f+v)*R,s[2]=(_-M)*R,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(_+M)*A,s[9]=(m-x)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const c=1/r,h=1/a,u=1/o;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=An){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,_;if(o===An)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===lr)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let _,g;if(o===An)_=(a+r)*u,g=-2*u;else if(o===lr)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new I,Qe=new Yt,Gu=new I(0,0,0),Vu=new I(1,1,1),Fn=new I,Ls=new I,ke=new I,ll=new Yt,cl=new $e;class ye{constructor(t=0,e=0,n=0,s=ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cl.setFromEuler(this),this.setFromQuaternion(cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ye.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wu=0;const hl=new I,Si=new $e,vn=new Yt,Is=new I,ts=new I,Xu=new I,qu=new $e,ul=new I(1,0,0),fl=new I(0,1,0),dl=new I(0,0,1),pl={type:"added"},$u={type:"removed"},yi={type:"childadded",child:null},zr={type:"childremoved",child:null};class be extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new I,e=new ye,n=new $e,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ot}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(ul,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return hl.copy(t).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ul,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ts,Is,this.up):vn.lookAt(Is,ts,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(vn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pl),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($u),zr.child=t,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pl),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new I(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new I,xn=new I,Br=new I,Mn=new I,Ei=new I,bi=new I,ml=new I,kr=new I,Hr=new I,Gr=new I,Vr=new ue,Wr=new ue,Xr=new ue;class nn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),xn.subVectors(n,e),Br.subVectors(t,e);const a=tn.dot(tn),o=tn.dot(xn),l=tn.dot(Br),c=xn.dot(xn),h=xn.dot(Br),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Vr.fromBufferAttribute(t,e),Wr.fromBufferAttribute(t,n),Xr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vr,r.x),a.addScaledVector(Wr,r.y),a.addScaledVector(Xr,r.z),a}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),xn.subVectors(t,e),tn.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ei.subVectors(s,n),bi.subVectors(r,n),kr.subVectors(t,n);const l=Ei.dot(kr),c=bi.dot(kr);if(l<=0&&c<=0)return e.copy(n);Hr.subVectors(t,s);const h=Ei.dot(Hr),u=bi.dot(Hr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ei,a);Gr.subVectors(t,r);const f=Ei.dot(Gr),_=bi.dot(Gr);if(_>=0&&f<=_)return e.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(bi,o);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return ml.subVectors(r,s),o=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(ml,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(Ei,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Pu(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qr(a,r,t+1/3),this.g=qr(a,r,t),this.b=qr(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=Bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return $t.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Se(Ae.r*255,0,255))*65536+Math.round(Se(Ae.g*255,0,255))*256+Math.round(Se(Ae.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=ge){$t.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Ds);const n=Rr(On.h,Ds.h,e),s=Rr(On.s,Ds.s,e),r=Rr(On.l,Ds.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Nt;Nt.NAMES=Bc;let Yu=0;class qi extends Xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Ms(),this.name="",this.blending=Ii,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=da,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fn extends qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ye,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new I,Us=new Mt;class de{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qo&&(t.usage=this.usage),t}}class kc extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hc extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ku=0;const Ve=new Yt,$r=new be,wi=new I,He=new di,es=new di,xe=new I;class ze extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?Hc:kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(He.min,es.min),He.expandByPoint(xe),xe.addVectors(He.max,es.max),He.expandByPoint(xe)):(He.expandByPoint(es.min),He.expandByPoint(es.max))}He.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xe.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(t,c),xe.add(wi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,h=new I,u=new I,d=new Mt,f=new Mt,_=new Mt,g=new I,m=new I;function p(C,E,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(L),o[C].add(g),o[E].add(g),o[S].add(g),l[C].add(m),l[E].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,E=x.length;C<E;++C){const S=x[C],L=S.start,k=S.count;for(let F=L,W=L+k;F<W;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new I,v=new I,R=new I,w=new I;function A(C){R.fromBufferAttribute(s,C),w.copy(R);const E=o[C];M.copy(E),M.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(w,E);const L=v.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,L)}for(let C=0,E=x.length;C<E;++C){const S=x[C],L=S.start,k=S.count;for(let F=L,W=L+k;F<W;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new de(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new Yt,Kn=new Hu,Ns=new Ss,_l=new I,Fs=new I,Os=new I,zs=new I,Yr=new I,Bs=new I,vl=new I,ks=new I;class Oe extends be{constructor(t=new ze,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Yr.fromBufferAttribute(u,t),a?Bs.addScaledVector(Yr,h):Bs.addScaledVector(Yr.sub(e),h))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ns,_l)===null||Kn.origin.distanceToSquared(_l)>(t.far-t.near)**2))&&(gl.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(gl),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=M;v<R;v+=3){const w=o.getX(v),A=o.getX(v+1),C=o.getX(v+2);s=Hs(this,p,t,n,c,h,u,w,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Hs(this,a,t,n,c,h,u,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=M;v<R;v+=3){const w=v,A=v+1,C=v+2;s=Hs(this,p,t,n,c,h,u,w,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=m,M=m+1,v=m+2;s=Hs(this,a,t,n,c,h,u,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ju(i,t,e,n,s,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Vn,o),l===null)return null;ks.copy(o),ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:i}}function Hs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Fs),i.getVertexPosition(l,Os),i.getVertexPosition(c,zs);const h=Ju(i,t,e,n,Fs,Os,zs,vl);if(h){const u=new I;nn.getBarycoord(vl,Fs,Os,zs,u),s&&(h.uv=nn.getInterpolatedAttribute(s,o,l,c,u,new Mt)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,c,u,new Mt)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};nn.getNormal(Fs,Os,zs,d.normal),h.face=d,h.barycoord=u}return h}class Xn extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function _(g,m,p,x,M,v,R,w,A,C,E){const S=v/A,L=R/C,k=v/2,F=R/2,W=w/2,Q=A+1,q=C+1;let j=0,P=0;const X=new I;for(let J=0;J<q;J++){const rt=J*L-F;for(let St=0;St<Q;St++){const Ft=St*S-k;X[g]=Ft*x,X[m]=rt*M,X[p]=W,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[p]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(St/A),u.push(1-J/C),j+=1}}for(let J=0;J<C;J++)for(let rt=0;rt<A;rt++){const St=d+rt+Q*J,Ft=d+rt+Q*(J+1),$=d+(rt+1)+Q*(J+1),tt=d+(rt+1)+Q*J;l.push(St,Ft,tt),l.push(Ft,$,tt),P+=6}o.addGroup(f,P,E),f+=P,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=Gi(i[e]);for(const s in n)t[s]=n[s]}return t}function Zu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const ju={clone:Gi,merge:Ie};var Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qu,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vc extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new I,xl=new Mt,Ml=new Mt;class We extends Vc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,xl,Ml),e.subVectors(Ml,xl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ai=1;class ef extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(Ti,Ai,t,e);s.layers=this.layers,this.add(s);const r=new We(Ti,Ai,t,e);r.layers=this.layers,this.add(r);const a=new We(Ti,Ai,t,e);a.layers=this.layers,this.add(a);const o=new We(Ti,Ai,t,e);o.layers=this.layers,this.add(o);const l=new We(Ti,Ai,t,e);l.layers=this.layers,this.add(l);const c=new We(Ti,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Wc extends Ee{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nf extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Hn});r.uniforms.tEquirect.value=e;const a=new Oe(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=un),new ef(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Kr=new I,sf=new I,rf=new Ot;class ti{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Kr.subVectors(n,e).cross(sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rf.getNormalMatrix(t),s=this.coplanarPoint(Kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Ss,Gs=new I;class vo{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],g=s[10],m=s[11],p=s[12],x=s[13],M=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+_,v+x).normalize(),n[3].setComponents(l-a,d-h,m-_,v-x).normalize(),n[4].setComponents(l-o,d-u,m-g,v-M).normalize(),e===An)n[5].setComponents(l+o,d+u,m+g,v+M).normalize();else if(e===lr)n[5].setComponents(o,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function af(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const g=u[f];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ye extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let M=0;M<c;M++){const v=M*u-r;_.push(v,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const M=x+c*p,v=x+c*(p+1),R=x+1+c*(p+1),w=x+1+c*p;f.push(M,v,w),f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new fe(_,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.widthSegments,t.heightSegments)}}var of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
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
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
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
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
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
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
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
#endif`,Sf=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pf=`#define PI 3.141592653589793
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
} // validated`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
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
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sd=`PhysicalMaterial material;
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
#endif`,rd=`struct PhysicalMaterial {
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
}`,ad=`
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
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
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gd=`#if defined( USE_POINTS_UV )
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
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
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
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xd=`float getShadowMask() {
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
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$d=`#ifdef USE_SKINNING
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
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,Jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
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
}`,dp=`#if DEPTH_PACKING == 3200
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
}`,pp=`#define DISTANCE
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
}`,mp=`#define DISTANCE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
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
}`,xp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,Sp=`uniform vec3 diffuse;
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
}`,yp=`#define LAMBERT
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
}`,Ep=`#define LAMBERT
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
}`,bp=`#define MATCAP
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
}`,wp=`#define MATCAP
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
}`,Tp=`#define NORMAL
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
}`,Ap=`#define NORMAL
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
}`,Cp=`#define PHONG
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
}`,Rp=`#define PHONG
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
}`,Pp=`#define STANDARD
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
}`,Lp=`#define STANDARD
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
}`,Ip=`#define TOON
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
}`,Dp=`#define TOON
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
}`,Up=`uniform float size;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Op=`uniform vec3 color;
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
}`,zp=`uniform float rotation;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:of,alphahash_pars_fragment:lf,alphamap_fragment:cf,alphamap_pars_fragment:hf,alphatest_fragment:uf,alphatest_pars_fragment:ff,aomap_fragment:df,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:gf,begin_vertex:_f,beginnormal_vertex:vf,bsdfs:xf,iridescence_fragment:Mf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:bf,clipping_planes_vertex:wf,color_fragment:Tf,color_pars_fragment:Af,color_pars_vertex:Cf,color_vertex:Rf,common:Pf,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:If,displacementmap_pars_vertex:Df,displacementmap_vertex:Uf,emissivemap_fragment:Nf,emissivemap_pars_fragment:Ff,colorspace_fragment:Of,colorspace_pars_fragment:zf,envmap_fragment:Bf,envmap_common_pars_fragment:kf,envmap_pars_fragment:Hf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:Qf,envmap_vertex:Vf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:qf,fog_pars_fragment:$f,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:Zf,lights_pars_begin:jf,lights_toon_fragment:td,lights_toon_pars_fragment:ed,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:sd,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:od,lights_fragment_end:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:dd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:vd,morphinstance_vertex:xd,morphcolor_vertex:Md,morphnormal_vertex:Sd,morphtarget_pars_vertex:yd,morphtarget_vertex:Ed,normal_fragment_begin:bd,normal_fragment_maps:wd,normal_pars_fragment:Td,normal_pars_vertex:Ad,normal_vertex:Cd,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Dd,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:zd,dithering_pars_fragment:Bd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:$d,skinning_vertex:Yd,skinnormal_vertex:Kd,specularmap_fragment:Jd,specularmap_pars_fragment:Zd,tonemapping_fragment:jd,tonemapping_pars_fragment:Qd,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:ap,background_frag:op,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:hp,cube_frag:up,depth_vert:fp,depth_frag:dp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:vp,linedashed_frag:xp,meshbasic_vert:Mp,meshbasic_frag:Sp,meshlambert_vert:yp,meshlambert_frag:Ep,meshmatcap_vert:bp,meshmatcap_frag:wp,meshnormal_vert:Tp,meshnormal_frag:Ap,meshphong_vert:Cp,meshphong_frag:Rp,meshphysical_vert:Pp,meshphysical_frag:Lp,meshtoon_vert:Ip,meshtoon_frag:Dp,points_vert:Up,points_frag:Np,shadow_vert:Fp,shadow_frag:Op,sprite_vert:zp,sprite_frag:Bp},lt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ln={basic:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ie([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ie([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ie([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ie([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ie([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ie([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ie([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ie([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ie([lt.common,lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ie([lt.lights,lt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ln.physical={uniforms:Ie([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Vs={r:0,b:0,g:0},Zn=new ye,kp=new Yt;function Hp(i,t,e,n,s,r,a){const o=new Nt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function g(x){let M=!1;const v=_(x);v===null?p(o,l):v&&v.isColor&&(p(v,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const v=_(M);v&&(v.isCubeTexture||v.mapping===gr)?(h===void 0&&(h=new Oe(new Xn(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Gi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zn.copy(M.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(Zn)),h.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Oe(new Ye(2,2),new Wn({name:"BackgroundMaterial",uniforms:Gi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Vs,Gc(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:g,addToRenderList:m}}function Gp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,L,k,F,W){let Q=!1;const q=u(F,k,L);r!==q&&(r=q,c(r.object)),Q=f(S,F,k,W),Q&&_(S,F,k,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(S,L,k,F),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,k){const F=k.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let Q=W[L.id];Q===void 0&&(Q={},W[L.id]=Q);let q=Q[F];return q===void 0&&(q=d(l()),Q[F]=q),q}function d(S){const L=[],k=[],F=[];for(let W=0;W<e;W++)L[W]=0,k[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,L,k,F){const W=r.attributes,Q=L.attributes;let q=0;const j=k.getAttributes();for(const P in j)if(j[P].location>=0){const J=W[P];let rt=Q[P];if(rt===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),J===void 0||J.attribute!==rt||rt&&J.data!==rt.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function _(S,L,k,F){const W={},Q=L.attributes;let q=0;const j=k.getAttributes();for(const P in j)if(j[P].location>=0){let J=Q[P];J===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const rt={};rt.attribute=J,J&&J.data&&(rt.data=J.data),W[P]=rt,q++}r.attributes=W,r.attributesNum=q,r.index=F}function g(){const S=r.newAttributes;for(let L=0,k=S.length;L<k;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const k=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;k[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),W[S]!==L&&(i.vertexAttribDivisor(S,L),W[S]=L)}function x(){const S=r.newAttributes,L=r.enabledAttributes;for(let k=0,F=L.length;k<F;k++)L[k]!==S[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function M(S,L,k,F,W,Q,q){q===!0?i.vertexAttribIPointer(S,L,k,W,Q):i.vertexAttribPointer(S,L,k,F,W,Q)}function v(S,L,k,F){g();const W=F.attributes,Q=k.getAttributes(),q=L.defaultAttributeValues;for(const j in Q){const P=Q[j];if(P.location>=0){let X=W[j];if(X===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const J=X.normalized,rt=X.itemSize,St=t.get(X);if(St===void 0)continue;const Ft=St.buffer,$=St.type,tt=St.bytesPerElement,gt=$===i.INT||$===i.UNSIGNED_INT||X.gpuType===ho;if(X.isInterleavedBufferAttribute){const U=X.data,N=U.stride,K=X.offset;if(U.isInstancedInterleavedBuffer){for(let it=0;it<P.locationSize;it++)p(P.location+it,U.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let it=0;it<P.locationSize;it++)m(P.location+it);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let it=0;it<P.locationSize;it++)M(P.location+it,rt/P.locationSize,$,J,N*tt,(K+rt/P.locationSize*it)*tt,gt)}else{if(X.isInstancedBufferAttribute){for(let U=0;U<P.locationSize;U++)p(P.location+U,X.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let U=0;U<P.locationSize;U++)m(P.location+U);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let U=0;U<P.locationSize;U++)M(P.location+U,rt/P.locationSize,$,J,rt*tt,rt/P.locationSize*U*tt,gt)}}else if(q!==void 0){const J=q[j];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(P.location,J);break;case 3:i.vertexAttrib3fv(P.location,J);break;case 4:i.vertexAttrib4fv(P.location,J);break;default:i.vertexAttrib1fv(P.location,J)}}}}x()}function R(){C();for(const S in n){const L=n[S];for(const k in L){const F=L[k];for(const W in F)h(F[W].object),delete F[W];delete L[k]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const k in L){const F=L[k];for(const W in F)h(F[W].object),delete F[W];delete L[k]}delete n[S.id]}function A(S){for(const L in n){const k=n[L];if(k[S.id]===void 0)continue;const F=k[S.id];for(const W in F)h(F[W].object),delete F[W];delete k[S.id]}}function C(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Vp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Wp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==qe&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function Xp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ti,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=h(_,d,M,f);for(let R=0;R!==M;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==g;++M,v+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function qp(i){let t=new WeakMap;function e(a,o){return o===Sa?a.mapping=zi:o===ya&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===ya)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new nf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class qc extends Vc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,Sl=[.125,.215,.35,.446,.526,.582],ii=20,Jr=new qc,yl=new Nt;let Zr=null,jr=0,Qr=0,ta=!1;const ei=(1+Math.sqrt(5))/2,Ci=1/ei,El=[new I(-ei,Ci,0),new I(ei,Ci,0),new I(-Ci,0,ei),new I(Ci,0,ei),new I(0,ei,-Ci),new I(0,ei,Ci),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,jr,Qr),this._renderer.xr.enabled=ta,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:vs,format:qe,colorSpace:Wi,depthBuffer:!1},s=wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(r)),this._blurMaterial=Yp(r,t,e)}return s}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,s){const o=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yl),h.toneMapping=Gn,h.autoClear=!1;const f=new fn({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),_=new Oe(new Xn,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(yl),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Ws(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===zi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=El[(s-r-1)%El.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Oe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ii-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):ii;m>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const p=[];let x=0;for(let A=0;A<ii;++A){const C=A/g,E=Math.exp(-C*C/2);p.push(E),A===0?x+=E:A<m&&(x+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const v=this._sizeLods[s],R=3*v*(s>M-Li?s-M+Li:0),w=4*(this._cubeSize-v);Ws(e,R,w,3*v,2*v),l.setRenderTarget(e),l.render(u,Jr)}}function $p(i){const t=[],e=[],n=[];let s=i;const r=i-Li+1+Sl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Li?l=Sl[a-i+Li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*f),M=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,C=w>2?0:-1,E=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(E,g*_*w),M.set(d,m*_*w);const S=[w,w,w,w,w,w];v.set(S,p*_*w)}const R=new ze;R.setAttribute("position",new de(x,g)),R.setAttribute("uv",new de(M,m)),R.setAttribute("faceIndex",new de(v,p)),t.push(R),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wl(i,t,e){const n=new ui(i,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yp(i,t,e){const n=new Float32Array(ii),s=new I(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Tl(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Al(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function xo(){return`

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
	`}function Kp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sa||l===ya,h=l===zi||l===Bi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new bl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new bl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Jp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let M=0,v=x.length;M<v;M+=3){const R=x[M+0],w=x[M+1],A=x[M+2];d.push(R,w,w,A,A,R)}}else if(_!==void 0){const x=_.array;g=_.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const R=M+0,w=M+1,A=M+2;d.push(R,w,w,A,A,R)}}else return;const m=new(Nc(d)?Hc:kc)(d,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,d*a,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=f[x]*g[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tm(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let v=o.attributes.position.count*M,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*R*4*u),A=new Oc(w,v,R,u);A.type=sn,A.needsUpdate=!0;const C=M*4;for(let S=0;S<u;S++){const L=m[S],k=p[S],F=x[S],W=v*R*4*S;for(let Q=0;Q<L.count;Q++){const q=Q*C;f===!0&&(s.fromBufferAttribute(L,Q),w[W+q+0]=s.x,w[W+q+1]=s.y,w[W+q+2]=s.z,w[W+q+3]=0),_===!0&&(s.fromBufferAttribute(k,Q),w[W+q+4]=s.x,w[W+q+5]=s.y,w[W+q+6]=s.z,w[W+q+7]=0),g===!0&&(s.fromBufferAttribute(F,Q),w[W+q+8]=s.x,w[W+q+9]=s.y,w[W+q+10]=s.z,w[W+q+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Mt(v,R)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function em(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class $c extends Ee{constructor(t,e,n,s,r,a,o,l,c,h=Di){if(h!==Di&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Di&&(n=hi),n===void 0&&h===Hi&&(n=ki),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yc=new Ee,Cl=new $c(1,1),Kc=new Oc,Jc=new Bu,Zc=new Wc,Rl=[],Pl=[],Ll=new Float32Array(16),Il=new Float32Array(9),Dl=new Float32Array(4);function $i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Rl[s];if(r===void 0&&(r=new Float32Array(s),Rl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xr(i,t){let e=Pl[t];e===void 0&&(e=new Int32Array(t),Pl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),ve(e,n)}}function om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Il.set(n),i.uniformMatrix3fv(this.addr,!1,Il),ve(e,n)}}function lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Ll.set(n),i.uniformMatrix4fv(this.addr,!1,Ll),ve(e,n)}}function cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function _m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cl.compareFunction=Uc,r=Cl):r=Yc,e.setTexture2D(t||r,s)}function vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jc,s)}function xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zc,s)}function Mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kc,s)}function Sm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Mm}}function ym(i,t){i.uniform1fv(this.addr,t)}function Em(i,t){const e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function bm(i,t){const e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function wm(i,t){const e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function Tm(i,t){const e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Am(i,t){const e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){const e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rm(i,t){i.uniform1iv(this.addr,t)}function Pm(i,t){i.uniform2iv(this.addr,t)}function Lm(i,t){i.uniform3iv(this.addr,t)}function Im(i,t){i.uniform4iv(this.addr,t)}function Dm(i,t){i.uniform1uiv(this.addr,t)}function Um(i,t){i.uniform2uiv(this.addr,t)}function Nm(i,t){i.uniform3uiv(this.addr,t)}function Fm(i,t){i.uniform4uiv(this.addr,t)}function Om(i,t,e){const n=this.cache,s=t.length,r=xr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Yc,r[a])}function zm(i,t,e){const n=this.cache,s=t.length,r=xr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jc,r[a])}function Bm(i,t,e){const n=this.cache,s=t.length,r=xr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zc,r[a])}function km(i,t,e){const n=this.cache,s=t.length,r=xr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kc,r[a])}function Hm(i){switch(i){case 5126:return ym;case 35664:return Em;case 35665:return bm;case 35666:return wm;case 35674:return Tm;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Dm;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}class Gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class Vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}}class Wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Ul(i,t){i.seq.push(t),i.map[t.id]=t}function Xm(i,t,e){const n=i.name,s=n.length;for(ea.lastIndex=0;;){const r=ea.exec(n),a=ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ul(e,c===void 0?new Gm(o,i,t):new Vm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Wm(o),Ul(e,u)),e=u}}}class sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Xm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Nl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const qm=37297;let $m=0;function Ym(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Fl=new Ot;function Km(i){$t._getMatrix(Fl,$t.workingColorSpace,i);const t=`mat3( ${Fl.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ol(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ym(i.getShaderSource(t),a)}else return s}function Jm(i,t){const e=Km(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zm(i,t){let e;switch(t){case fu:e="Linear";break;case du:e="Reinhard";break;case pu:e="Cineon";break;case mu:e="ACESFilmic";break;case _u:e="AgX";break;case vu:e="Neutral";break;case gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new I;function jm(){$t.getLuminanceCoefficients(Xs);const i=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function t0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function cs(i){return i!==""}function zl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(i){return i.replace(n0,s0)}const i0=new Map;function s0(i,t){let e=Gt[t];if(e===void 0){const n=i0.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}const r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(i){return i.replace(r0,a0)}function a0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function o0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function l0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Bi:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Bi&&(t="ENVMAP_MODE_REFRACTION"),t}function h0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case co:t="ENVMAP_BLENDING_MULTIPLY";break;case hu:t="ENVMAP_BLENDING_MIX";break;case uu:t="ENVMAP_BLENDING_ADD";break}return t}function u0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=o0(e),c=l0(e),h=c0(e),u=h0(e),d=u0(e),f=Qm(e),_=t0(r),g=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(cs).join(`
`),p.length>0&&(p+=`
`)):(m=[Hl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),p=[Hl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?Zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Jm("linearToOutputTexel",e.outputColorSpace),jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),a=Za(a),a=zl(a,e),a=Bl(a,e),o=Za(o),o=zl(o,e),o=Bl(o,e),a=kl(a),o=kl(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,v=x+p+o,R=Nl(s,s.VERTEX_SHADER,M),w=Nl(s,s.FRAGMENT_SHADER,v);s.attachShader(g,R),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(g).trim(),F=s.getShaderInfoLog(R).trim(),W=s.getShaderInfoLog(w).trim();let Q=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,w);else{const j=Ol(s,R,"vertex"),P=Ol(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+j+`
`+P)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||W==="")&&(q=!1);q&&(L.diagnostics={runnable:Q,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(R),s.deleteShader(w),C=new sr(s,g),E=e0(s,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,qm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$m++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let d0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new m0(t),e.set(t,n)),n}}class m0{constructor(t){this.id=d0++,this.code=t,this.usedTimes=0}}function g0(i,t,e,n,s,r,a){const o=new zc,l=new p0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,L,k,F){const W=k.fog,Q=F.geometry,q=E.isMeshStandardMaterial?k.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),P=j&&j.mapping===gr?j.image.height:null,X=_[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const J=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,rt=J!==void 0?J.length:0;let St=0;Q.morphAttributes.position!==void 0&&(St=1),Q.morphAttributes.normal!==void 0&&(St=2),Q.morphAttributes.color!==void 0&&(St=3);let Ft,$,tt,gt;if(X){const jt=ln[X];Ft=jt.vertexShader,$=jt.fragmentShader}else Ft=E.vertexShader,$=E.fragmentShader,l.update(E),tt=l.getVertexShaderID(E),gt=l.getFragmentShaderID(E);const U=i.getRenderTarget(),N=i.state.buffers.depth.getReversed(),K=F.isInstancedMesh===!0,it=F.isBatchedMesh===!0,dt=!!E.map,mt=!!E.matcap,Vt=!!j,D=!!E.aoMap,ee=!!E.lightMap,Rt=!!E.bumpMap,Wt=!!E.normalMap,Ct=!!E.displacementMap,se=!!E.emissiveMap,At=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,H=E.clearcoat>0,et=E.dispersion>0,st=E.iridescence>0,Z=E.sheen>0,wt=E.transmission>0,ht=y&&!!E.anisotropyMap,_t=H&&!!E.clearcoatMap,qt=H&&!!E.clearcoatNormalMap,at=H&&!!E.clearcoatRoughnessMap,vt=st&&!!E.iridescenceMap,Pt=st&&!!E.iridescenceThicknessMap,Dt=Z&&!!E.sheenColorMap,xt=Z&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,Ht=!!E.specularColorMap,ne=!!E.specularIntensityMap,O=wt&&!!E.transmissionMap,ct=wt&&!!E.thicknessMap,Y=!!E.gradientMap,nt=!!E.alphaMap,pt=E.alphaTest>0,ut=!!E.alphaHash,zt=!!E.extensions;let ce=Gn;E.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ce=i.toneMapping);const we={shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:Ft,fragmentShader:$,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:it,batchingColor:it&&F._colorsTexture!==null,instancing:K,instancingColor:K&&F.instanceColor!==null,instancingMorph:K&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Wi,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:mt,envMap:Vt,envMapMode:Vt&&j.mapping,envMapCubeUVHeight:P,aoMap:D,lightMap:ee,bumpMap:Rt,normalMap:Wt,displacementMap:d&&Ct,emissiveMap:se,normalMapObjectSpace:Wt&&E.normalMapType===yu,normalMapTangentSpace:Wt&&E.normalMapType===_o,metalnessMap:At,roughnessMap:T,anisotropy:y,anisotropyMap:ht,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:qt,clearcoatRoughnessMap:at,dispersion:et,iridescence:st,iridescenceMap:vt,iridescenceThicknessMap:Pt,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:xt,specularMap:Xt,specularColorMap:Ht,specularIntensityMap:ne,transmission:wt,transmissionMap:O,thicknessMap:ct,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Ii&&E.alphaToCoverage===!1,alphaMap:nt,alphaTest:pt,alphaHash:ut,combine:E.combine,mapUv:dt&&g(E.map.channel),aoMapUv:D&&g(E.aoMap.channel),lightMapUv:ee&&g(E.lightMap.channel),bumpMapUv:Rt&&g(E.bumpMap.channel),normalMapUv:Wt&&g(E.normalMap.channel),displacementMapUv:Ct&&g(E.displacementMap.channel),emissiveMapUv:se&&g(E.emissiveMap.channel),metalnessMapUv:At&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:ht&&g(E.anisotropyMap.channel),clearcoatMapUv:_t&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(E.sheenRoughnessMap.channel),specularMapUv:Xt&&g(E.specularMap.channel),specularColorMapUv:Ht&&g(E.specularColorMap.channel),specularIntensityMapUv:ne&&g(E.specularIntensityMap.channel),transmissionMapUv:O&&g(E.transmissionMap.channel),thicknessMapUv:ct&&g(E.thicknessMap.channel),alphaMapUv:nt&&g(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Wt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(dt||nt),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:N,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:St,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===te,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===cn,flipSided:E.side===Pe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(x(S,E),M(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function x(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const S=_[E.type];let L;if(S){const k=ln[S];L=ju.clone(k.uniforms)}else L=E.uniforms;return L}function R(E,S){let L;for(let k=0,F=h.length;k<F;k++){const W=h[k];if(W.cacheKey===S){L=W,++L.usedTimes;break}}return L===void 0&&(L=new f0(i,S,E,r),h.push(L)),L}function w(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function _0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function v0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,_,g,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||v0),n.length>1&&n.sort(d||Gl),s.length>1&&s.sort(d||Gl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function x0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Vl,i.set(n,[a])):s>=r.length?(a=new Vl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function M0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Nt};break;case"SpotLight":e={position:new I,direction:new I,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function S0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let y0=0;function E0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b0(i){const t=new M0,e=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new Yt,a=new Yt;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,x=0,M=0,v=0,R=0,w=0,A=0;c.sort(E0);for(let E=0,S=c.length;E<S;E++){const L=c[E],k=L.color,F=L.intensity,W=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],F);A++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,P=e.get(L);P.shadowIntensity=j.intensity,P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,n.directionalShadow[f]=P,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(k).multiplyScalar(F),q.distance=W,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[g]=q;const j=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,j.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[g]=j.matrix,L.castShadow){const P=e.get(L);P.shadowIntensity=j.intensity,P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,n.spotShadow[g]=P,n.spotShadowMap[g]=Q,v++}g++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(k).multiplyScalar(F),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=q,m++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const j=L.shadow,P=e.get(L);P.shadowIntensity=j.intensity,P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,P.shadowCameraNear=j.camera.near,P.shadowCameraFar=j.camera.far,n.pointShadow[_]=P,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=L.shadow.matrix,M++}n.point[_]=q,_++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(F),q.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=A,n.version=y0++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Wl(i){const t=new b0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function w0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Wl(i),t.set(s,[o])):r>=a.length?(o=new Wl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class T0 extends qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class A0 extends qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
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
}`;function P0(i,t,e){let n=new vo;const s=new Mt,r=new Mt,a=new ue,o=new T0({depthPacking:Su}),l=new A0,c={},h=e.maxTextureSize,u={[Vn]:Pe,[Pe]:Vn,[cn]:cn},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:C0,fragmentShader:R0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ze;_.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Oe(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let p=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Hn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=p!==yn&&this.type===yn,W=p===yn&&this.type!==yn;for(let Q=0,q=w.length;Q<q;Q++){const j=w[Q],P=j.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const X=P.getFrameExtents();if(s.multiply(X),r.copy(P.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,P.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,P.mapSize.y=r.y)),P.map===null||F===!0||W===!0){const rt=this.type!==yn?{minFilter:De,magFilter:De}:{};P.map!==null&&P.map.dispose(),P.map=new ui(s.x,s.y,rt),P.map.texture.name=j.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();const J=P.getViewportCount();for(let rt=0;rt<J;rt++){const St=P.getViewport(rt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),k.viewport(a),P.updateMatrices(j,rt),n=P.getFrustum(),v(A,C,P.camera,j,this.type)}P.isPointLightShadow!==!0&&this.type===yn&&x(P,C),P.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,L)};function x(w,A){const C=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,f,g,null)}function M(w,A,C,E){let S=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=S.uuid,F=A.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let Q=W[F];Q===void 0&&(Q=S.clone(),W[F]=Q,A.addEventListener("dispose",R)),S=Q}if(S.visible=A.visible,S.wireframe=A.wireframe,E===yn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=i.properties.get(S);k.light=C}return S}function v(w,A,C,E,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===yn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=t.update(w),W=w.material;if(Array.isArray(W)){const Q=F.groups;for(let q=0,j=Q.length;q<j;q++){const P=Q[q],X=W[P.materialIndex];if(X&&X.visible){const J=M(w,X,E,S);w.onBeforeShadow(i,w,A,C,F,J,P),i.renderBufferDirect(C,null,F,J,w,P),w.onAfterShadow(i,w,A,C,F,J,P)}}}else if(W.visible){const Q=M(w,W,E,S);w.onBeforeShadow(i,w,A,C,F,Q,null),i.renderBufferDirect(C,null,F,Q,w,null),w.onAfterShadow(i,w,A,C,F,Q,null)}}const k=w.children;for(let F=0,W=k.length;F<W;F++)v(k[F],A,C,E,S)}function R(w){w.target.removeEventListener("dispose",R);for(const C in c){const E=c[C],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const L0={[pa]:ma,[ga]:xa,[_a]:Ma,[Oi]:va,[ma]:pa,[xa]:ga,[Ma]:_a,[va]:Oi};function I0(i,t){function e(){let O=!1;const ct=new ue;let Y=null;const nt=new ue(0,0,0,0);return{setMask:function(pt){Y!==pt&&!O&&(i.colorMask(pt,pt,pt,pt),Y=pt)},setLocked:function(pt){O=pt},setClear:function(pt,ut,zt,ce,we){we===!0&&(pt*=ce,ut*=ce,zt*=ce),ct.set(pt,ut,zt,ce),nt.equals(ct)===!1&&(i.clearColor(pt,ut,zt,ce),nt.copy(ct))},reset:function(){O=!1,Y=null,nt.set(-1,0,0,0)}}}function n(){let O=!1,ct=!1,Y=null,nt=null,pt=null;return{setReversed:function(ut){if(ct!==ut){const zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const ce=pt;pt=null,this.setClear(ce)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?U(i.DEPTH_TEST):N(i.DEPTH_TEST)},setMask:function(ut){Y!==ut&&!O&&(i.depthMask(ut),Y=ut)},setFunc:function(ut){if(ct&&(ut=L0[ut]),nt!==ut){switch(ut){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=ut}},setLocked:function(ut){O=ut},setClear:function(ut){pt!==ut&&(ct&&(ut=1-ut),i.clearDepth(ut),pt=ut)},reset:function(){O=!1,Y=null,nt=null,pt=null,ct=!1}}}function s(){let O=!1,ct=null,Y=null,nt=null,pt=null,ut=null,zt=null,ce=null,we=null;return{setTest:function(jt){O||(jt?U(i.STENCIL_TEST):N(i.STENCIL_TEST))},setMask:function(jt){ct!==jt&&!O&&(i.stencilMask(jt),ct=jt)},setFunc:function(jt,Je,pn){(Y!==jt||nt!==Je||pt!==pn)&&(i.stencilFunc(jt,Je,pn),Y=jt,nt=Je,pt=pn)},setOp:function(jt,Je,pn){(ut!==jt||zt!==Je||ce!==pn)&&(i.stencilOp(jt,Je,pn),ut=jt,zt=Je,ce=pn)},setLocked:function(jt){O=jt},setClear:function(jt){we!==jt&&(i.clearStencil(jt),we=jt)},reset:function(){O=!1,ct=null,Y=null,nt=null,pt=null,ut=null,zt=null,ce=null,we=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,M=null,v=null,R=null,w=null,A=new Nt(0,0,0),C=0,E=!1,S=null,L=null,k=null,F=null,W=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(P)[1]),q=j>=1):P.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),q=j>=2);let X=null,J={};const rt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Ft=new ue().fromArray(rt),$=new ue().fromArray(St);function tt(O,ct,Y,nt){const pt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(O,ut),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<Y;zt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ct+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ut}const gt={};gt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(i.DEPTH_TEST),a.setFunc(Oi),Rt(!1),Wt(Ko),U(i.CULL_FACE),D(Hn);function U(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function N(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function K(O,ct){return u[O]!==ct?(i.bindFramebuffer(O,ct),u[O]=ct,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function it(O,ct){let Y=f,nt=!1;if(O){Y=d.get(ct),Y===void 0&&(Y=[],d.set(ct,Y));const pt=O.textures;if(Y.length!==pt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,zt=pt.length;ut<zt;ut++)Y[ut]=i.COLOR_ATTACHMENT0+ut;Y.length=pt.length,nt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Y)}function dt(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const mt={[ni]:i.FUNC_ADD,[$h]:i.FUNC_SUBTRACT,[Yh]:i.FUNC_REVERSE_SUBTRACT};mt[Kh]=i.MIN,mt[Jh]=i.MAX;const Vt={[Zh]:i.ZERO,[jh]:i.ONE,[Qh]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[ru]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[eu]:i.DST_ALPHA,[tu]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[su]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[au]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,ct,Y,nt,pt,ut,zt,ce,we,jt){if(O===Hn){g===!0&&(N(i.BLEND),g=!1);return}if(g===!1&&(U(i.BLEND),g=!0),O!==qh){if(O!==m||jt!==E){if((p!==ni||v!==ni)&&(i.blendEquation(i.FUNC_ADD),p=ni,v=ni),jt)switch(O){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case or:i.blendFunc(i.ONE,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case or:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,M=null,R=null,w=null,A.set(0,0,0),C=0,m=O,E=jt}return}pt=pt||ct,ut=ut||Y,zt=zt||nt,(ct!==p||pt!==v)&&(i.blendEquationSeparate(mt[ct],mt[pt]),p=ct,v=pt),(Y!==x||nt!==M||ut!==R||zt!==w)&&(i.blendFuncSeparate(Vt[Y],Vt[nt],Vt[ut],Vt[zt]),x=Y,M=nt,R=ut,w=zt),(ce.equals(A)===!1||we!==C)&&(i.blendColor(ce.r,ce.g,ce.b,we),A.copy(ce),C=we),m=O,E=!1}function ee(O,ct){O.side===cn?N(i.CULL_FACE):U(i.CULL_FACE);let Y=O.side===Pe;ct&&(Y=!Y),Rt(Y),O.blending===Ii&&O.transparent===!1?D(Hn):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const nt=O.stencilWrite;o.setTest(nt),nt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?U(i.SAMPLE_ALPHA_TO_COVERAGE):N(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function Wt(O){O!==Vh?(U(i.CULL_FACE),O!==L&&(O===Ko?i.cullFace(i.BACK):O===Wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):N(i.CULL_FACE),L=O}function Ct(O){O!==k&&(q&&i.lineWidth(O),k=O)}function se(O,ct,Y){O?(U(i.POLYGON_OFFSET_FILL),(F!==ct||W!==Y)&&(i.polygonOffset(ct,Y),F=ct,W=Y)):N(i.POLYGON_OFFSET_FILL)}function At(O){O?U(i.SCISSOR_TEST):N(i.SCISSOR_TEST)}function T(O){O===void 0&&(O=i.TEXTURE0+Q-1),X!==O&&(i.activeTexture(O),X=O)}function y(O,ct,Y){Y===void 0&&(X===null?Y=i.TEXTURE0+Q-1:Y=X);let nt=J[Y];nt===void 0&&(nt={type:void 0,texture:void 0},J[Y]=nt),(nt.type!==O||nt.texture!==ct)&&(X!==Y&&(i.activeTexture(Y),X=Y),i.bindTexture(O,ct||gt[O]),nt.type=O,nt.texture=ct)}function H(){const O=J[X];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(O){Ft.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ft.copy(O))}function xt(O){$.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function Xt(O,ct){let Y=c.get(ct);Y===void 0&&(Y=new WeakMap,c.set(ct,Y));let nt=Y.get(O);nt===void 0&&(nt=i.getUniformBlockIndex(ct,O.name),Y.set(O,nt))}function Ht(O,ct){const nt=c.get(ct).get(O);l.get(ct)!==nt&&(i.uniformBlockBinding(ct,nt,O.__bindingPointIndex),l.set(ct,nt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},X=null,J={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,M=null,v=null,R=null,w=null,A=new Nt(0,0,0),C=0,E=!1,S=null,L=null,k=null,F=null,W=null,Ft.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:U,disable:N,bindFramebuffer:K,drawBuffers:it,useProgram:dt,setBlending:D,setMaterial:ee,setFlipSided:Rt,setCullFace:Wt,setLineWidth:Ct,setPolygonOffset:se,setScissorTest:At,activeTexture:T,bindTexture:y,unbindTexture:H,compressedTexImage2D:et,compressedTexImage3D:st,texImage2D:vt,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:Ht,texStorage2D:qt,texStorage3D:at,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:_t,scissor:Dt,viewport:xt,reset:ne}}function Xl(i,t,e,n){const s=D0(n);switch(e){case Cc:return i*t;case Pc:return i*t;case Lc:return i*t*2;case _r:return i*t/s.components*s.byteLength;case po:return i*t/s.components*s.byteLength;case Ic:return i*t*2/s.components*s.byteLength;case mo:return i*t*2/s.components*s.byteLength;case Rc:return i*t*3/s.components*s.byteLength;case qe:return i*t*4/s.components*s.byteLength;case go:return i*t*4/s.components*s.byteLength;case Qs:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:case Aa:return Math.max(i,16)*Math.max(t,8)/4;case ba:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ir:case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dc:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ya:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function D0(i){switch(i){case Rn:case wc:return{byteLength:1,components:1};case gs:case Tc:case vs:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case hi:case ho:case sn:return{byteLength:4,components:1};case Ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function U0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,y){return f?new OffscreenCanvas(T,y):_s("canvas")}function g(T,y,H){let et=1;const st=At(T);if((st.width>H||st.height>H)&&(et=H/Math.max(st.width,st.height)),et<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(et*st.width),wt=Math.floor(et*st.height);u===void 0&&(u=_(Z,wt));const ht=y?_(Z,wt):u;return ht.width=Z,ht.height=wt,ht.getContext("2d").drawImage(T,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Z+"x"+wt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,y,H,et,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),y===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){const wt=st?vr:$t.getTransfer(et);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=wt===te?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(T,y){let H;return T?y===null||y===hi||y===ki?H=i.DEPTH24_STENCIL8:y===sn?H=i.DEPTH32F_STENCIL8:y===gs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===hi||y===ki?H=i.DEPTH_COMPONENT24:y===sn?H=i.DEPTH_COMPONENT32F:y===gs&&(H=i.DEPTH_COMPONENT16),H}function R(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==De&&T.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function w(T){const y=T.target;y.removeEventListener("dispose",w),C(y),y.isVideoTexture&&h.delete(y)}function A(T){const y=T.target;y.removeEventListener("dispose",A),S(y)}function C(T){const y=n.get(T);if(y.__webglInit===void 0)return;const H=T.source,et=d.get(H);if(et){const st=et[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&E(T),Object.keys(et).length===0&&d.delete(H)}n.remove(T)}function E(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const H=T.source,et=d.get(H);delete et[y.__cacheKey],a.memory.textures--}function S(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(y.__webglFramebuffer[et]))for(let st=0;st<y.__webglFramebuffer[et].length;st++)i.deleteFramebuffer(y.__webglFramebuffer[et][st]);else i.deleteFramebuffer(y.__webglFramebuffer[et]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[et])}else{if(Array.isArray(y.__webglFramebuffer))for(let et=0;et<y.__webglFramebuffer.length;et++)i.deleteFramebuffer(y.__webglFramebuffer[et]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let et=0;et<y.__webglColorRenderbuffer.length;et++)y.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[et]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=T.textures;for(let et=0,st=H.length;et<st;et++){const Z=n.get(H[et]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(H[et])}n.remove(T)}let L=0;function k(){L=0}function F(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function W(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Q(T,y){const H=n.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const et=T.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,T,y);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function q(T,y){const H=n.get(T);if(T.version>0&&H.__version!==T.version){$(H,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function j(T,y){const H=n.get(T);if(T.version>0&&H.__version!==T.version){$(H,T,y);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function P(T,y){const H=n.get(T);if(T.version>0&&H.__version!==T.version){tt(H,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}const X={[ms]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},J={[De]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},rt={[Eu]:i.NEVER,[Ru]:i.ALWAYS,[bu]:i.LESS,[Uc]:i.LEQUAL,[wu]:i.EQUAL,[Cu]:i.GEQUAL,[Tu]:i.GREATER,[Au]:i.NOTEQUAL};function St(T,y){if(y.type===sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===Ar||y.magFilter===ws||y.magFilter===ai||y.minFilter===un||y.minFilter===Ar||y.minFilter===ws||y.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,X[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,X[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,X[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,J[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,J[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===De||y.minFilter!==ws&&y.minFilter!==ai||y.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ft(T,y){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",w));const et=y.source;let st=d.get(et);st===void 0&&(st={},d.set(et,st));const Z=W(y);if(Z!==T.__cacheKey){st[Z]===void 0&&(st[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),st[Z].usedTimes++;const wt=st[T.__cacheKey];wt!==void 0&&(st[T.__cacheKey].usedTimes--,wt.usedTimes===0&&E(y)),T.__cacheKey=Z,T.__webglTexture=st[Z].texture}return H}function $(T,y,H){let et=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=i.TEXTURE_3D);const st=Ft(T,y),Z=y.source;e.bindTexture(et,T.__webglTexture,i.TEXTURE0+H);const wt=n.get(Z);if(Z.version!==wt.__version||st===!0){e.activeTexture(i.TEXTURE0+H);const ht=$t.getPrimaries($t.workingColorSpace),_t=y.colorSpace===kn?null:$t.getPrimaries(y.colorSpace),qt=y.colorSpace===kn||ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let at=g(y.image,!1,s.maxTextureSize);at=se(y,at);const vt=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type);let Dt=M(y.internalFormat,vt,Pt,y.colorSpace,y.isVideoTexture);St(et,y);let xt;const Xt=y.mipmaps,Ht=y.isVideoTexture!==!0,ne=wt.__version===void 0||st===!0,O=Z.dataReady,ct=R(y,at);if(y.isDepthTexture)Dt=v(y.format===Hi,y.type),ne&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Dt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,vt,Pt,null));else if(y.isDataTexture)if(Xt.length>0){Ht&&ne&&e.texStorage2D(i.TEXTURE_2D,ct,Dt,Xt[0].width,Xt[0].height);for(let Y=0,nt=Xt.length;Y<nt;Y++)xt=Xt[Y],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,Dt,xt.width,xt.height,0,vt,Pt,xt.data);y.generateMipmaps=!1}else Ht?(ne&&e.texStorage2D(i.TEXTURE_2D,ct,Dt,at.width,at.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,vt,Pt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,vt,Pt,at.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Dt,Xt[0].width,Xt[0].height,at.depth);for(let Y=0,nt=Xt.length;Y<nt;Y++)if(xt=Xt[Y],y.format!==qe)if(vt!==null)if(Ht){if(O)if(y.layerUpdates.size>0){const pt=Xl(xt.width,xt.height,y.format,y.type);for(const ut of y.layerUpdates){const zt=xt.data.subarray(ut*pt/xt.data.BYTES_PER_ELEMENT,(ut+1)*pt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ut,xt.width,xt.height,1,vt,zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,at.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Dt,xt.width,xt.height,at.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,at.depth,vt,Pt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Dt,xt.width,xt.height,at.depth,0,vt,Pt,xt.data)}else{Ht&&ne&&e.texStorage2D(i.TEXTURE_2D,ct,Dt,Xt[0].width,Xt[0].height);for(let Y=0,nt=Xt.length;Y<nt;Y++)xt=Xt[Y],y.format!==qe?vt!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Dt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,vt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,Dt,xt.width,xt.height,0,vt,Pt,xt.data)}else if(y.isDataArrayTexture)if(Ht){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Dt,at.width,at.height,at.depth),O)if(y.layerUpdates.size>0){const Y=Xl(at.width,at.height,y.format,y.type);for(const nt of y.layerUpdates){const pt=at.data.subarray(nt*Y/at.data.BYTES_PER_ELEMENT,(nt+1)*Y/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,vt,Pt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,vt,Pt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,vt,Pt,at.data);else if(y.isData3DTexture)Ht?(ne&&e.texStorage3D(i.TEXTURE_3D,ct,Dt,at.width,at.height,at.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,vt,Pt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,vt,Pt,at.data);else if(y.isFramebufferTexture){if(ne)if(Ht)e.texStorage2D(i.TEXTURE_2D,ct,Dt,at.width,at.height);else{let Y=at.width,nt=at.height;for(let pt=0;pt<ct;pt++)e.texImage2D(i.TEXTURE_2D,pt,Dt,Y,nt,0,vt,Pt,null),Y>>=1,nt>>=1}}else if(Xt.length>0){if(Ht&&ne){const Y=At(Xt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Dt,Y.width,Y.height)}for(let Y=0,nt=Xt.length;Y<nt;Y++)xt=Xt[Y],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,vt,Pt,xt):e.texImage2D(i.TEXTURE_2D,Y,Dt,vt,Pt,xt);y.generateMipmaps=!1}else if(Ht){if(ne){const Y=At(at);e.texStorage2D(i.TEXTURE_2D,ct,Dt,Y.width,Y.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Pt,at)}else e.texImage2D(i.TEXTURE_2D,0,Dt,vt,Pt,at);m(y)&&p(et),wt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function tt(T,y,H){if(y.image.length!==6)return;const et=Ft(T,y),st=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);const Z=n.get(st);if(st.version!==Z.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const wt=$t.getPrimaries($t.workingColorSpace),ht=y.colorSpace===kn?null:$t.getPrimaries(y.colorSpace),_t=y.colorSpace===kn||wt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const qt=y.isCompressedTexture||y.image[0].isCompressedTexture,at=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let nt=0;nt<6;nt++)!qt&&!at?vt[nt]=g(y.image[nt],!0,s.maxCubemapSize):vt[nt]=at?y.image[nt].image:y.image[nt],vt[nt]=se(y,vt[nt]);const Pt=vt[0],Dt=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),Xt=M(y.internalFormat,Dt,xt,y.colorSpace),Ht=y.isVideoTexture!==!0,ne=Z.__version===void 0||et===!0,O=st.dataReady;let ct=R(y,Pt);St(i.TEXTURE_CUBE_MAP,y);let Y;if(qt){Ht&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,Pt.width,Pt.height);for(let nt=0;nt<6;nt++){Y=vt[nt].mipmaps;for(let pt=0;pt<Y.length;pt++){const ut=Y[pt];y.format!==qe?Dt!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt,Xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt,0,0,ut.width,ut.height,Dt,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt,Xt,ut.width,ut.height,0,Dt,xt,ut.data)}}}else{if(Y=y.mipmaps,Ht&&ne){Y.length>0&&ct++;const nt=At(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,vt[nt].width,vt[nt].height,Dt,xt,vt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,vt[nt].width,vt[nt].height,0,Dt,xt,vt[nt].data);for(let pt=0;pt<Y.length;pt++){const zt=Y[pt].image[nt].image;Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt+1,0,0,zt.width,zt.height,Dt,xt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt+1,Xt,zt.width,zt.height,0,Dt,xt,zt.data)}}else{Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Dt,xt,vt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,Dt,xt,vt[nt]);for(let pt=0;pt<Y.length;pt++){const ut=Y[pt];Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt+1,0,0,Dt,xt,ut.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt+1,Xt,Dt,xt,ut.image[nt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Z.__version=st.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function gt(T,y,H,et,st,Z){const wt=r.convert(H.format,H.colorSpace),ht=r.convert(H.type),_t=M(H.internalFormat,wt,ht,H.colorSpace),qt=n.get(y),at=n.get(H);if(at.__renderTarget=y,!qt.__hasExternalTextures){const vt=Math.max(1,y.width>>Z),Pt=Math.max(1,y.height>>Z);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Z,_t,vt,Pt,y.depth,0,wt,ht,null):e.texImage2D(st,Z,_t,vt,Pt,0,wt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,st,at.__webglTexture,0,Rt(y)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,st,at.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function U(T,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const et=y.depthTexture,st=et&&et.isDepthTexture?et.type:null,Z=v(y.stencilBuffer,st),wt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Rt(y);Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Z,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,T)}else{const et=y.textures;for(let st=0;st<et.length;st++){const Z=et[st],wt=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),_t=M(Z.internalFormat,wt,ht,Z.colorSpace),qt=Rt(y);H&&Wt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,_t,y.width,y.height):Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function N(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(y.depthTexture);et.__renderTarget=y,(!et.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q(y.depthTexture,0);const st=et.__webglTexture,Z=Rt(y);if(y.depthTexture.format===Di)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(y.depthTexture.format===Hi)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function K(T){const y=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const et=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),et){const st=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,et.removeEventListener("dispose",st)};et.addEventListener("dispose",st),y.__depthDisposeCallback=st}y.__boundDepthTexture=et}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");N(y.__webglFramebuffer,T)}else if(H){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]===void 0)y.__webglDepthbuffer[et]=i.createRenderbuffer(),U(y.__webglDepthbuffer[et],T,!1);else{const st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),U(y.__webglDepthbuffer,T,!1);else{const et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(T,y,H){const et=n.get(T);y!==void 0&&gt(et.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&K(T)}function dt(T){const y=T.texture,H=n.get(T),et=n.get(y);T.addEventListener("dispose",A);const st=T.textures,Z=T.isWebGLCubeRenderTarget===!0,wt=st.length>1;if(wt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=y.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[ht]=[];for(let _t=0;_t<y.mipmaps.length;_t++)H.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else H.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)H.__webglFramebuffer[ht]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ht=0,_t=st.length;ht<_t;ht++){const qt=n.get(st[ht]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Wt(T)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ht=0;ht<st.length;ht++){const _t=st[ht];H.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ht]);const qt=r.convert(_t.format,_t.colorSpace),at=r.convert(_t.type),vt=M(_t.internalFormat,qt,at,_t.colorSpace,T.isXRRenderTarget===!0),Pt=Rt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,vt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,H.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),U(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),St(i.TEXTURE_CUBE_MAP,y);for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)gt(H.__webglFramebuffer[ht][_t],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else gt(H.__webglFramebuffer[ht],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,_t=st.length;ht<_t;ht++){const qt=st[ht],at=n.get(qt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),St(i.TEXTURE_2D,qt),gt(H.__webglFramebuffer,T,qt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),St(ht,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)gt(H.__webglFramebuffer[_t],T,y,i.COLOR_ATTACHMENT0,ht,_t);else gt(H.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,ht,0);m(y)&&p(ht),e.unbindTexture()}T.depthBuffer&&K(T)}function mt(T){const y=T.textures;for(let H=0,et=y.length;H<et;H++){const st=y[H];if(m(st)){const Z=x(T),wt=n.get(st).__webglTexture;e.bindTexture(Z,wt),p(Z),e.unbindTexture()}}}const Vt=[],D=[];function ee(T){if(T.samples>0){if(Wt(T)===!1){const y=T.textures,H=T.width,et=T.height;let st=i.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(T),ht=y.length>1;if(ht)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const qt=n.get(y[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,H,et,0,0,H,et,st,i.NEAREST),l===!0&&(Vt.length=0,D.length=0,Vt.push(i.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Vt.push(Z),D.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const qt=n.get(y[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Rt(T){return Math.min(s.maxSamples,T.samples)}function Wt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ct(T){const y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function se(T,y){const H=T.colorSpace,et=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Wi&&H!==kn&&($t.getTransfer(H)===te?(et!==qe||st!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function At(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=P,this.rebindTextures=it,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Wt}function N0(i,t){function e(n,s=kn){let r;const a=$t.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wc)return i.BYTE;if(n===Tc)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===vs)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Rc)return i.RGB;if(n===qe)return i.RGBA;if(n===Pc)return i.LUMINANCE;if(n===Lc)return i.LUMINANCE_ALPHA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===_r)return i.RED;if(n===po)return i.RED_INTEGER;if(n===Ic)return i.RG;if(n===mo)return i.RG_INTEGER;if(n===go)return i.RGBA_INTEGER;if(n===Qs||n===tr||n===er||n===nr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===wa||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Ra||n===Pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Ra)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ha||n===Ga||n===Va||n===Wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ir||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ir)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===$a||n===Ya||n===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class F0 extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hs extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B0=`
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

}`;class k0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ee,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:z0,fragmentShader:B0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new Ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H0 extends Xi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=new k0,m=e.getContextAttributes();let p=null,x=null;const M=[],v=[],R=new Mt;let w=null;const A=new We;A.viewport=new ue;const C=new We;C.viewport=new ue;const E=[A,C],S=new F0;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=M[$];return tt===void 0&&(tt=new na,M[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=M[$];return tt===void 0&&(tt=new na,M[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=M[$];return tt===void 0&&(tt=new na,M[$]=tt),tt.getHandSpace()};function F($){const tt=v.indexOf($.inputSource);if(tt===-1)return;const gt=M[tt];gt!==void 0&&(gt.update($.inputSource,$.frame,c||a),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Q);for(let $=0;$<M.length;$++){const tt=v[$];tt!==null&&(v[$]=null,M[$].disconnect(tt))}L=null,k=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ui(f.framebufferWidth,f.framebufferHeight,{format:qe,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,U=null;m.depth&&(U=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Hi:Di,gt=m.stencil?ki:hi);const N={colorFormat:e.RGBA8,depthFormat:U,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(N),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ui(d.textureWidth,d.textureHeight,{format:qe,type:Rn,depthTexture:new $c(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q($){for(let tt=0;tt<$.removed.length;tt++){const gt=$.removed[tt],U=v.indexOf(gt);U>=0&&(v[U]=null,M[U].disconnect(gt))}for(let tt=0;tt<$.added.length;tt++){const gt=$.added[tt];let U=v.indexOf(gt);if(U===-1){for(let K=0;K<M.length;K++)if(K>=v.length){v.push(gt),U=K;break}else if(v[K]===null){v[K]=gt,U=K;break}if(U===-1)break}const N=M[U];N&&N.connect(gt)}}const q=new I,j=new I;function P($,tt,gt){q.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const U=q.distanceTo(j),N=tt.projectionMatrix.elements,K=gt.projectionMatrix.elements,it=N[14]/(N[10]-1),dt=N[14]/(N[10]+1),mt=(N[9]+1)/N[5],Vt=(N[9]-1)/N[5],D=(N[8]-1)/N[0],ee=(K[8]+1)/K[0],Rt=it*D,Wt=it*ee,Ct=U/(-D+ee),se=Ct*-D;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(se),$.translateZ(Ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),N[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const At=it+Ct,T=dt+Ct,y=Rt-se,H=Wt+(U-se),et=mt*dt/T*At,st=Vt*dt/T*At;$.projectionMatrix.makePerspective(y,H,et,st,At,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function X($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,gt=$.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),S.near=C.near=A.near=tt,S.far=C.far=A.far=gt,(L!==S.near||k!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,k=S.far),A.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,S.layers.mask=A.layers.mask|C.layers.mask;const U=$.parent,N=S.cameras;X(S,U);for(let K=0;K<N.length;K++)X(N[K],U);N.length===2?P(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),J($,S,U)};function J($,tt,gt){gt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ja*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let rt=null;function St($,tt){if(h=tt.getViewerPose(c||a),_=tt,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let U=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,U=!0);for(let K=0;K<gt.length;K++){const it=gt[K];let dt=null;if(f!==null)dt=f.getViewport(it);else{const Vt=u.getViewSubImage(d,it);dt=Vt.viewport,K===0&&(t.setRenderTargetTextures(x,Vt.colorTexture,d.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(x))}let mt=E[K];mt===void 0&&(mt=new We,mt.layers.enable(K),mt.viewport=new ue,E[K]=mt),mt.matrix.fromArray(it.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(it.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(dt.x,dt.y,dt.width,dt.height),K===0&&(S.matrix.copy(mt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),U===!0&&S.cameras.push(mt)}const N=s.enabledFeatures;if(N&&N.includes("depth-sensing")){const K=u.getDepthInformation(gt[0]);K&&K.isValid&&K.texture&&g.init(t,K,s.renderState)}}for(let gt=0;gt<M.length;gt++){const U=v[gt],N=M[gt];U!==null&&N!==void 0&&N.update(U,tt,c||a)}rt&&rt($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const Ft=new Xc;Ft.setAnimationLoop(St),this.setAnimationLoop=function($){rt=$},this.dispose=function(){}}}const jn=new ye,G0=new Yt;function V0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,jn.copy(v),jn.x*=-1,jn.y*=-1,jn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(jn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=s[x.id];v===void 0&&(_(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(x,R);const w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function h(x){const M=u();x.__bindingPointIndex=M;const v=i.createBuffer(),R=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],v=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,A=v.length;w<A;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,S=C.length;E<S;E++){const L=C[E];if(f(L,w,E,R)===!0){const k=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Q=0;Q<F.length;Q++){const q=F[Q],j=g(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,k+W,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,v,R){const w=x.value,A=M+"_"+v;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const C=R[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(x){const M=x.uniforms;let v=0;const R=16;for(let A=0,C=M.length;A<C;A++){const E=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,L=E.length;S<L;S++){const k=E[S],F=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Q=F.length;W<Q;W++){const q=F[W],j=g(q),P=v%R,X=P%j.boundary,J=P+X;v+=X,J!==0&&R-J<j.storage&&(v+=R-J),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=j.storage}}}const w=v%R;return w>0&&(v+=R-w),x.__size=v,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class X0{constructor(t={}){const{canvas:e=Lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=Gn,this.toneMappingExposure=1;const v=this;let R=!1,w=0,A=0,C=null,E=-1,S=null;const L=new ue,k=new ue;let F=null;const W=new Nt(0);let Q=0,q=e.width,j=e.height,P=1,X=null,J=null;const rt=new ue(0,0,q,j),St=new ue(0,0,q,j);let Ft=!1;const $=new vo;let tt=!1,gt=!1;const U=new Yt,N=new Yt,K=new I,it=new ue,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Vt(){return C===null?P:1}let D=n;function ee(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){const z="webgl2";if(D=ee(z,b),D===null)throw ee(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Rt,Wt,Ct,se,At,T,y,H,et,st,Z,wt,ht,_t,qt,at,vt,Pt,Dt,xt,Xt,Ht,ne,O;function ct(){Rt=new Jp(D),Rt.init(),Ht=new N0(D,Rt),Wt=new Wp(D,Rt,t,Ht),Ct=new I0(D,Rt),Wt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),se=new Qp(D),At=new _0,T=new U0(D,Rt,Ct,At,Wt,Ht,se),y=new qp(v),H=new Kp(v),et=new af(D),ne=new Gp(D,et),st=new Zp(D,et,se,ne),Z=new em(D,st,et,se),Dt=new tm(D,Wt,T),at=new Xp(At),wt=new g0(v,y,H,Rt,Wt,ne,at),ht=new V0(v,At),_t=new x0,qt=new w0(Rt),Pt=new Hp(v,y,H,Ct,Z,f,l),vt=new P0(v,Z,Wt),O=new W0(D,se,Wt,Ct),xt=new Vp(D,Rt,se),Xt=new jp(D,Rt,se),se.programs=wt.programs,v.capabilities=Wt,v.extensions=Rt,v.properties=At,v.renderLists=_t,v.shadowMap=vt,v.state=Ct,v.info=se}ct();const Y=new H0(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(b){b!==void 0&&(P=b,this.setSize(q,j,!1))},this.getSize=function(b){return b.set(q,j)},this.setSize=function(b,z,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,j=z,e.width=Math.floor(b*P),e.height=Math.floor(z*P),G===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(q*P,j*P).floor()},this.setDrawingBufferSize=function(b,z,G){q=b,j=z,P=G,e.width=Math.floor(b*G),e.height=Math.floor(z*G),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(rt)},this.setViewport=function(b,z,G,V){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,z,G,V),Ct.viewport(L.copy(rt).multiplyScalar(P).round())},this.getScissor=function(b){return b.copy(St)},this.setScissor=function(b,z,G,V){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,z,G,V),Ct.scissor(k.copy(St).multiplyScalar(P).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(b){Ct.setScissorTest(Ft=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(b=!0,z=!0,G=!0){let V=0;if(b){let B=!1;if(C!==null){const ot=C.texture.format;B=ot===go||ot===mo||ot===po}if(B){const ot=C.texture.type,ft=ot===Rn||ot===hi||ot===gs||ot===ki||ot===uo||ot===fo,yt=Pt.getClearColor(),Et=Pt.getClearAlpha(),Ut=yt.r,Bt=yt.g,bt=yt.b;ft?(_[0]=Ut,_[1]=Bt,_[2]=bt,_[3]=Et,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Ut,g[1]=Bt,g[2]=bt,g[3]=Et,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}z&&(V|=D.DEPTH_BUFFER_BIT),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),qt.dispose(),At.dispose(),y.dispose(),H.dispose(),Z.dispose(),ne.dispose(),O.dispose(),wt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Oo),Y.removeEventListener("sessionend",zo),qn.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=se.autoReset,z=vt.enabled,G=vt.autoUpdate,V=vt.needsUpdate,B=vt.type;ct(),se.autoReset=b,vt.enabled=z,vt.autoUpdate=G,vt.needsUpdate=V,vt.type=B}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zt(b){const z=b.target;z.removeEventListener("dispose",zt),ce(z)}function ce(b){we(b),At.remove(b)}function we(b){const z=At.get(b).programs;z!==void 0&&(z.forEach(function(G){wt.releaseProgram(G)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,G,V,B,ot){z===null&&(z=dt);const ft=B.isMesh&&B.matrixWorld.determinant()<0,yt=yh(b,z,G,V,B);Ct.setMaterial(V,ft);let Et=G.index,Ut=1;if(V.wireframe===!0){if(Et=st.getWireframeAttribute(G),Et===void 0)return;Ut=2}const Bt=G.drawRange,bt=G.attributes.position;let Kt=Bt.start*Ut,ie=(Bt.start+Bt.count)*Ut;ot!==null&&(Kt=Math.max(Kt,ot.start*Ut),ie=Math.min(ie,(ot.start+ot.count)*Ut)),Et!==null?(Kt=Math.max(Kt,0),ie=Math.min(ie,Et.count)):bt!=null&&(Kt=Math.max(Kt,0),ie=Math.min(ie,bt.count));const re=ie-Kt;if(re<0||re===1/0)return;ne.setup(B,V,yt,G,Et);let Ue,Jt=xt;if(Et!==null&&(Ue=et.get(Et),Jt=Xt,Jt.setIndex(Ue)),B.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*Vt()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(B.isLine){let Tt=V.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*Vt()),B.isLineSegments?Jt.setMode(D.LINES):B.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else B.isPoints?Jt.setMode(D.POINTS):B.isSprite&&Jt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Jt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Tt=B._multiDrawStarts,mn=B._multiDrawCounts,Zt=B._multiDrawCount,Ze=Et?et.get(Et).bytesPerElement:1,pi=At.get(V).currentProgram.getUniforms();for(let Be=0;Be<Zt;Be++)pi.setValue(D,"_gl_DrawID",Be),Jt.render(Tt[Be]/Ze,mn[Be])}else if(B.isInstancedMesh)Jt.renderInstances(Kt,re,B.count);else if(G.isInstancedBufferGeometry){const Tt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,mn=Math.min(G.instanceCount,Tt);Jt.renderInstances(Kt,re,mn)}else Jt.render(Kt,re)};function jt(b,z,G){b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=Pe,b.needsUpdate=!0,bs(b,z,G),b.side=Vn,b.needsUpdate=!0,bs(b,z,G),b.side=cn):bs(b,z,G)}this.compile=function(b,z,G=null){G===null&&(G=b),p=qt.get(G),p.init(z),M.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const V=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ot=B.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){const yt=ot[ft];jt(yt,G,B),V.add(yt)}else jt(ot,G,B),V.add(ot)}),M.pop(),p=null,V},this.compileAsync=function(b,z,G=null){const V=this.compile(b,z,G);return new Promise(B=>{function ot(){if(V.forEach(function(ft){At.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){B(b);return}setTimeout(ot,10)}Rt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Je=null;function pn(b){Je&&Je(b)}function Oo(){qn.stop()}function zo(){qn.start()}const qn=new Xc;qn.setAnimationLoop(pn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(b){Je=b,Y.setAnimationLoop(b),b===null?qn.stop():qn.start()},Y.addEventListener("sessionstart",Oo),Y.addEventListener("sessionend",zo),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,z,C),p=qt.get(b,M.length),p.init(z),M.push(p),N.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$.setFromProjectionMatrix(N),gt=this.localClippingEnabled,tt=at.init(this.clippingPlanes,gt),m=_t.get(b,x.length),m.init(),x.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&br(ot,z,-1/0,v.sortObjects)}br(b,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(X,J),mt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,mt&&Pt.addToRenderList(m,b),this.info.render.frame++,tt===!0&&at.beginShadows();const G=p.state.shadowsArray;vt.render(G,b,z),tt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,B=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ot=z.cameras;if(B.length>0)for(let ft=0,yt=ot.length;ft<yt;ft++){const Et=ot[ft];ko(V,B,b,Et)}mt&&Pt.render(b);for(let ft=0,yt=ot.length;ft<yt;ft++){const Et=ot[ft];Bo(m,b,Et,Et.viewport)}}else B.length>0&&ko(V,B,b,z),mt&&Pt.render(b),Bo(m,b,z);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,z),ne.resetDefaultState(),E=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],tt===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function br(b,z,G,V){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){V&&it.setFromMatrixPosition(b.matrixWorld).applyMatrix4(N);const ft=Z.update(b),yt=b.material;yt.visible&&m.push(b,ft,yt,G,it.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const ft=Z.update(b),yt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),it.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),it.copy(ft.boundingSphere.center)),it.applyMatrix4(b.matrixWorld).applyMatrix4(N)),Array.isArray(yt)){const Et=ft.groups;for(let Ut=0,Bt=Et.length;Ut<Bt;Ut++){const bt=Et[Ut],Kt=yt[bt.materialIndex];Kt&&Kt.visible&&m.push(b,ft,Kt,G,it.z,bt)}}else yt.visible&&m.push(b,ft,yt,G,it.z,null)}}const ot=b.children;for(let ft=0,yt=ot.length;ft<yt;ft++)br(ot[ft],z,G,V)}function Bo(b,z,G,V){const B=b.opaque,ot=b.transmissive,ft=b.transparent;p.setupLightsView(G),tt===!0&&at.setGlobalState(v.clippingPlanes,G),V&&Ct.viewport(L.copy(V)),B.length>0&&Es(B,z,G),ot.length>0&&Es(ot,z,G),ft.length>0&&Es(ft,z,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ko(b,z,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ui(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?vs:Rn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const ot=p.state.transmissionRenderTarget[V.id],ft=V.viewport||L;ot.setSize(ft.z,ft.w);const yt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(W),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),mt&&Pt.render(G);const Et=v.toneMapping;v.toneMapping=Gn;const Ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),tt===!0&&at.setGlobalState(v.clippingPlanes,V),Es(b,G,V),T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let bt=0,Kt=z.length;bt<Kt;bt++){const ie=z[bt],re=ie.object,Ue=ie.geometry,Jt=ie.material,Tt=ie.group;if(Jt.side===cn&&re.layers.test(V.layers)){const mn=Jt.side;Jt.side=Pe,Jt.needsUpdate=!0,Ho(re,G,V,Ue,Jt,Tt),Jt.side=mn,Jt.needsUpdate=!0,Bt=!0}}Bt===!0&&(T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot))}v.setRenderTarget(yt),v.setClearColor(W,Q),Ut!==void 0&&(V.viewport=Ut),v.toneMapping=Et}function Es(b,z,G){const V=z.isScene===!0?z.overrideMaterial:null;for(let B=0,ot=b.length;B<ot;B++){const ft=b[B],yt=ft.object,Et=ft.geometry,Ut=V===null?ft.material:V,Bt=ft.group;yt.layers.test(G.layers)&&Ho(yt,z,G,Et,Ut,Bt)}}function Ho(b,z,G,V,B,ot){b.onBeforeRender(v,z,G,V,B,ot),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,z,G,V,b,ot),B.transparent===!0&&B.side===cn&&B.forceSinglePass===!1?(B.side=Pe,B.needsUpdate=!0,v.renderBufferDirect(G,z,V,B,b,ot),B.side=Vn,B.needsUpdate=!0,v.renderBufferDirect(G,z,V,B,b,ot),B.side=cn):v.renderBufferDirect(G,z,V,B,b,ot),b.onAfterRender(v,z,G,V,B,ot)}function bs(b,z,G){z.isScene!==!0&&(z=dt);const V=At.get(b),B=p.state.lights,ot=p.state.shadowsArray,ft=B.state.version,yt=wt.getParameters(b,B.state,ot,z,G),Et=wt.getProgramCacheKey(yt);let Ut=V.programs;V.environment=b.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(b.isMeshStandardMaterial?H:y).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",zt),Ut=new Map,V.programs=Ut);let Bt=Ut.get(Et);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===ft)return Vo(b,yt),Bt}else yt.uniforms=wt.getUniforms(b),b.onBeforeCompile(yt,v),Bt=wt.acquireProgram(yt,Et),Ut.set(Et,Bt),V.uniforms=yt.uniforms;const bt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=at.uniform),Vo(b,yt),V.needsLights=bh(b),V.lightsStateVersion=ft,V.needsLights&&(bt.ambientLightColor.value=B.state.ambient,bt.lightProbe.value=B.state.probe,bt.directionalLights.value=B.state.directional,bt.directionalLightShadows.value=B.state.directionalShadow,bt.spotLights.value=B.state.spot,bt.spotLightShadows.value=B.state.spotShadow,bt.rectAreaLights.value=B.state.rectArea,bt.ltc_1.value=B.state.rectAreaLTC1,bt.ltc_2.value=B.state.rectAreaLTC2,bt.pointLights.value=B.state.point,bt.pointLightShadows.value=B.state.pointShadow,bt.hemisphereLights.value=B.state.hemi,bt.directionalShadowMap.value=B.state.directionalShadowMap,bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,bt.spotShadowMap.value=B.state.spotShadowMap,bt.spotLightMatrix.value=B.state.spotLightMatrix,bt.spotLightMap.value=B.state.spotLightMap,bt.pointShadowMap.value=B.state.pointShadowMap,bt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function Go(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=sr.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Vo(b,z){const G=At.get(b);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function yh(b,z,G,V,B){z.isScene!==!0&&(z=dt),T.resetTextureUnits();const ot=z.fog,ft=V.isMeshStandardMaterial?z.environment:null,yt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Wi,Et=(V.isMeshStandardMaterial?H:y).get(V.envMap||ft),Ut=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),bt=!!G.morphAttributes.position,Kt=!!G.morphAttributes.normal,ie=!!G.morphAttributes.color;let re=Gn;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(re=v.toneMapping);const Ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=Ue!==void 0?Ue.length:0,Tt=At.get(V),mn=p.state.lights;if(tt===!0&&(gt===!0||b!==S)){const Ge=b===S&&V.id===E;at.setState(V,b,Ge)}let Zt=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==mn.state.version||Tt.outputColorSpace!==yt||B.isBatchedMesh&&Tt.batching===!1||!B.isBatchedMesh&&Tt.batching===!0||B.isBatchedMesh&&Tt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Tt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Tt.instancing===!1||!B.isInstancedMesh&&Tt.instancing===!0||B.isSkinnedMesh&&Tt.skinning===!1||!B.isSkinnedMesh&&Tt.skinning===!0||B.isInstancedMesh&&Tt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Tt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Tt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Tt.instancingMorph===!1&&B.morphTexture!==null||Tt.envMap!==Et||V.fog===!0&&Tt.fog!==ot||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==at.numPlanes||Tt.numIntersection!==at.numIntersection)||Tt.vertexAlphas!==Ut||Tt.vertexTangents!==Bt||Tt.morphTargets!==bt||Tt.morphNormals!==Kt||Tt.morphColors!==ie||Tt.toneMapping!==re||Tt.morphTargetsCount!==Jt)&&(Zt=!0):(Zt=!0,Tt.__version=V.version);let Ze=Tt.currentProgram;Zt===!0&&(Ze=bs(V,z,B));let pi=!1,Be=!1,Yi=!1;const ae=Ze.getUniforms(),rn=Tt.uniforms;if(Ct.useProgram(Ze.program)&&(pi=!0,Be=!0,Yi=!0),V.id!==E&&(E=V.id,Be=!0),pi||S!==b){Ct.buffers.depth.getReversed()?(U.copy(b.projectionMatrix),Du(U),Uu(U),ae.setValue(D,"projectionMatrix",U)):ae.setValue(D,"projectionMatrix",b.projectionMatrix),ae.setValue(D,"viewMatrix",b.matrixWorldInverse);const Pn=ae.map.cameraPosition;Pn!==void 0&&Pn.setValue(D,K.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&ae.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ae.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Be=!0,Yi=!0)}if(B.isSkinnedMesh){ae.setOptional(D,B,"bindMatrix"),ae.setOptional(D,B,"bindMatrixInverse");const Ge=B.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ae.setValue(D,"boneTexture",Ge.boneTexture,T))}B.isBatchedMesh&&(ae.setOptional(D,B,"batchingTexture"),ae.setValue(D,"batchingTexture",B._matricesTexture,T),ae.setOptional(D,B,"batchingIdTexture"),ae.setValue(D,"batchingIdTexture",B._indirectTexture,T),ae.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ae.setValue(D,"batchingColorTexture",B._colorsTexture,T));const Ki=G.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Dt.update(B,G,Ze),(Be||Tt.receiveShadow!==B.receiveShadow)&&(Tt.receiveShadow=B.receiveShadow,ae.setValue(D,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=Et,rn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),Be&&(ae.setValue(D,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&Eh(rn,Yi),ot&&V.fog===!0&&ht.refreshFogUniforms(rn,ot),ht.refreshMaterialUniforms(rn,V,P,j,p.state.transmissionRenderTarget[b.id]),sr.upload(D,Go(Tt),rn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(sr.upload(D,Go(Tt),rn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ae.setValue(D,"center",B.center),ae.setValue(D,"modelViewMatrix",B.modelViewMatrix),ae.setValue(D,"normalMatrix",B.normalMatrix),ae.setValue(D,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ge=V.uniformsGroups;for(let Pn=0,Ln=Ge.length;Pn<Ln;Pn++){const Wo=Ge[Pn];O.update(Wo,Ze),O.bind(Wo,Ze)}}return Ze}function Eh(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function bh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,z,G){At.get(b.texture).__webglTexture=z,At.get(b.depthTexture).__webglTexture=G;const V=At.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const G=At.get(b);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,G=0){C=b,w=z,A=G;let V=!0,B=null,ot=!1,ft=!1;if(b){const Et=At.get(b);if(Et.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(Et.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Et.__hasExternalTextures)T.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const bt=b.depthTexture;if(Et.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(b.width!==bt.image.width||b.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ft=!0);const Bt=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[z])?B=Bt[z][G]:B=Bt[z],ot=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?B=At.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[G]:B=Bt,L.copy(b.viewport),k.copy(b.scissor),F=b.scissorTest}else L.copy(rt).multiplyScalar(P).floor(),k.copy(St).multiplyScalar(P).floor(),F=Ft;if(Ct.bindFramebuffer(D.FRAMEBUFFER,B)&&V&&Ct.drawBuffers(b,B),Ct.viewport(L),Ct.scissor(k),Ct.setScissorTest(F),ot){const Et=At.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Et.__webglTexture,G)}else if(ft){const Et=At.get(b.texture),Ut=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,G||0,Ut)}E=-1},this.readRenderTargetPixels=function(b,z,G,V,B,ot,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){Ct.bindFramebuffer(D.FRAMEBUFFER,yt);try{const Et=b.texture,Ut=Et.format,Bt=Et.type;if(!Wt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-V&&G>=0&&G<=b.height-B&&D.readPixels(z,G,V,B,Ht.convert(Ut),Ht.convert(Bt),ot)}finally{const Et=C!==null?At.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,z,G,V,B,ot,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){const Et=b.texture,Ut=Et.format,Bt=Et.type;if(!Wt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-V&&G>=0&&G<=b.height-B){Ct.bindFramebuffer(D.FRAMEBUFFER,yt);const bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(z,G,V,B,Ht.convert(Ut),Ht.convert(Bt),0);const Kt=C!==null?At.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(D.FRAMEBUFFER,Kt);const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Iu(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot),D.deleteBuffer(bt),D.deleteSync(ie),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,G=0){b.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-G),B=Math.floor(b.image.width*V),ot=Math.floor(b.image.height*V),ft=z!==null?z.x:0,yt=z!==null?z.y:0;T.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ft,yt,B,ot),Ct.unbindTexture()},this.copyTextureToTexture=function(b,z,G=null,V=null,B=0){b.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],z=arguments[2],B=arguments[3]||0,G=null);let ot,ft,yt,Et,Ut,Bt,bt,Kt,ie;const re=b.isCompressedTexture?b.mipmaps[B]:b.image;G!==null?(ot=G.max.x-G.min.x,ft=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,Ut=G.min.y,Bt=G.isBox3?G.min.z:0):(ot=re.width,ft=re.height,yt=re.depth||1,Et=0,Ut=0,Bt=0),V!==null?(bt=V.x,Kt=V.y,ie=V.z):(bt=0,Kt=0,ie=0);const Ue=Ht.convert(z.format),Jt=Ht.convert(z.type);let Tt;z.isData3DTexture?(T.setTexture3D(z,0),Tt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),Tt=D.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),Tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const mn=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ze=D.getParameter(D.UNPACK_SKIP_PIXELS),pi=D.getParameter(D.UNPACK_SKIP_ROWS),Be=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,re.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bt);const Yi=b.isDataArrayTexture||b.isData3DTexture,ae=z.isDataArrayTexture||z.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const rn=At.get(b),Ki=At.get(z),Ge=At.get(rn.__renderTarget),Pn=At.get(Ki.__renderTarget);Ct.bindFramebuffer(D.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Ln=0;Ln<yt;Ln++)Yi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(b).__webglTexture,B,Bt+Ln),b.isDepthTexture?(ae&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(z).__webglTexture,B,ie+Ln),D.blitFramebuffer(Et,Ut,ot,ft,bt,Kt,ot,ft,D.DEPTH_BUFFER_BIT,D.NEAREST)):ae?D.copyTexSubImage3D(Tt,B,bt,Kt,ie+Ln,Et,Ut,ot,ft):D.copyTexSubImage2D(Tt,B,bt,Kt,ie+Ln,Et,Ut,ot,ft);Ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ae?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Tt,B,bt,Kt,ie,ot,ft,yt,Ue,Jt,re.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,B,bt,Kt,ie,ot,ft,yt,Ue,re.data):D.texSubImage3D(Tt,B,bt,Kt,ie,ot,ft,yt,Ue,Jt,re):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,bt,Kt,ot,ft,Ue,Jt,re.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,bt,Kt,re.width,re.height,Ue,re.data):D.texSubImage2D(D.TEXTURE_2D,B,bt,Kt,ot,ft,Ue,Jt,re);D.pixelStorei(D.UNPACK_ROW_LENGTH,mn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,pi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),B===0&&z.generateMipmaps&&D.generateMipmap(Tt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(b,z,G=null,V=null,B=0){return b.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,b=arguments[2],z=arguments[3],B=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,G,V,B)},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Ct.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,Ct.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class cr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new cr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class q0 extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ye,this.environmentIntensity=1,this.environmentRotation=new ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mo extends Ee{constructor(t=null,e=1,n=1,s,r,a,o,l,c=De,h=De,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi extends de{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ri=new Yt,ql=new Yt,qs=[],$l=new di,$0=new Yt,ns=new Oe,is=new Ss;class us extends Oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),$l.copy(t.boundingBox).applyMatrix4(Ri),this.boundingBox.union($l)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),is.copy(t.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),t.ray.intersectsSphere(is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ri),ql.multiplyMatrices(n,Ri),ns.matrixWorld=ql,ns.raycast(t,qs);for(let a=0,o=qs.length;a<o;a++){const l=qs[a];l.instanceId=r,l.object=this,e.push(l)}qs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mo(new Float32Array(s*this.count),s,this.count,_r,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ys extends Ee{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Mt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],a=[],o=new I,l=new Yt;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class So extends dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Mt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Y0 extends So{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const $s=new I,ia=new yo,sa=new yo,ra=new yo;class K0 extends dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:($s.subVectors(s[0],s[1]).add(s[0]),c=$s);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:($s.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$s),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),ia.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),sa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),ra.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),sa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ra.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function J0(i,t){const e=1-i;return e*e*t}function Z0(i,t){return 2*(1-i)*i*t}function j0(i,t){return i*i*t}function fs(i,t,e,n){return J0(i,t)+Z0(i,e)+j0(i,n)}function Q0(i,t){const e=1-i;return e*e*e*t}function tg(i,t){const e=1-i;return 3*e*e*i*t}function eg(i,t){return 3*(1-i)*i*i*t}function ng(i,t){return i*i*i*t}function ds(i,t,e,n,s){return Q0(i,t)+tg(i,e)+eg(i,n)+ng(i,s)}class jc extends dn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,s.x,r.x,a.x,o.x),ds(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ig extends dn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,s.x,r.x,a.x,o.x),ds(t,s.y,r.y,a.y,o.y),ds(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qc extends dn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sg extends dn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class th extends dn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fs(t,s.x,r.x,a.x),fs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rg extends dn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fs(t,s.x,r.x,a.x),fs(t,s.y,r.y,a.y),fs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eh extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Yl(o,l.x,c.x,h.x,u.x),Yl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}}var Kl=Object.freeze({__proto__:null,ArcCurve:Y0,CatmullRomCurve3:K0,CubicBezierCurve:jc,CubicBezierCurve3:ig,EllipseCurve:So,LineCurve:Qc,LineCurve3:sg,QuadraticBezierCurve:th,QuadraticBezierCurve3:rg,SplineCurve:eh});class ag extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}}class og extends ag{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Qc(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new th(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new jc(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new eh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new So(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Eo extends ze{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Se(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new I,d=new Mt,f=new I,_=new I,g=new I;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(_)}for(let x=0;x<=e;x++){const M=n+x*h*s,v=Math.sin(M),R=Math.cos(M);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*R,a.push(u.x,u.y,u.z),d.x=x/e,d.y=w/(t.length-1),o.push(d.x,d.y);const A=l[3*w+0]*v,C=l[3*w+1],E=l[3*w+0]*R;c.push(A,C,E)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const v=M+x*t.length,R=v,w=v+t.length,A=v+t.length+1,C=v+1;r.push(R,w,C),r.push(A,C,w)}this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("uv",new fe(o,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.points,t.segments,t.phiStart,t.phiLength)}}class bo extends Eo{constructor(t=1,e=1,n=4,s=8){const r=new og;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new bo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Mr extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function x(){const v=new I,R=new I;let w=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const E=[],S=C/r,L=S*(e-t)+t;for(let k=0;k<=s;k++){const F=k/s,W=F*l+o,Q=Math.sin(W),q=Math.cos(W);R.x=L*Q,R.y=-S*n+m,R.z=L*q,u.push(R.x,R.y,R.z),v.set(Q,A,q).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-S),E.push(_++)}g.push(E)}for(let C=0;C<s;C++)for(let E=0;E<r;E++){const S=g[E][C],L=g[E+1][C],k=g[E+1][C+1],F=g[E][C+1];(t>0||E!==0)&&(h.push(S,L,F),w+=3),(e>0||E!==r-1)&&(h.push(L,k,F),w+=3)}c.addGroup(p,w,0),p+=w}function M(v){const R=_,w=new Mt,A=new I;let C=0;const E=v===!0?t:e,S=v===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),_++;const L=_;for(let k=0;k<=s;k++){const W=k/s*l+o,Q=Math.cos(W),q=Math.sin(W);A.x=E*q,A.y=m*S,A.z=E*Q,u.push(A.x,A.y,A.z),d.push(0,S,0),w.x=Q*.5+.5,w.y=q*.5*S+.5,f.push(w.x,w.y),_++}for(let k=0;k<s;k++){const F=R+k,W=L+k;v===!0?h.push(W,W+1,F):h.push(W+1,W,F),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wo extends Mr{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new wo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sr extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new I,v=new I,R=new I;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],v),f(e[w+2],R),l(M,v,R,x)}function l(x,M,v,R){const w=R+1,A=[];for(let C=0;C<=w;C++){A[C]=[];const E=x.clone().lerp(v,C/w),S=M.clone().lerp(v,C/w),L=w-C;for(let k=0;k<=L;k++)k===0&&C===w?A[C][k]=E:A[C][k]=E.clone().lerp(S,k/L)}for(let C=0;C<w;C++)for(let E=0;E<2*(w-C)-1;E++){const S=Math.floor(E/2);E%2===0?(d(A[C][S+1]),d(A[C+1][S]),d(A[C][S])):(d(A[C][S+1]),d(A[C+1][S+1]),d(A[C+1][S]))}}function c(x){const M=new I;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const x=new I;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const v=m(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;a.push(v,1-R)}_(),u()}function u(){for(let x=0;x<a.length;x+=6){const M=a[x+0],v=a[x+2],R=a[x+4],w=Math.max(M,v,R),A=Math.min(M,v,R);w>.9&&A<.1&&(M<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function _(){const x=new I,M=new I,v=new I,R=new I,w=new Mt,A=new Mt,C=new Mt;for(let E=0,S=0;E<r.length;E+=9,S+=6){x.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),w.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),R.copy(x).add(M).add(v).divideScalar(3);const L=m(R);g(w,S+0,x,L),g(A,S+2,M,L),g(C,S+4,v,L)}}function g(x,M,v,R){R<0&&x.x===1&&(a[M]=x.x-1),v.x===0&&v.z===0&&(a[M]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.vertices,t.indices,t.radius,t.details)}}class To extends Sr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new To(t.radius,t.detail)}}class yr extends Sr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yr(t.radius,t.detail)}}class Er extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+M*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+v,1-M),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],R=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(M,v,w),(p!==n-1||l<Math.PI)&&f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new fe(_,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hr extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const g=_/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const g=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,x=(s+1)*f+_;a.push(g,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class lg extends qi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Nt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class si extends qi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ye,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Jl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cg{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const hg=new cg;class Ao{constructor(t){this.manager=t!==void 0?t:hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";class ug extends Ao{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Jl.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=_s("img");function l(){h(),Jl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class fg extends Ao{constructor(t){super(t)}load(t,e,n,s){const r=new Ee,a=new ug(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class nh extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dg extends nh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const aa=new Yt,Zl=new I,jl=new I;class pg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zl),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mg extends pg{constructor(){super(new qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gg extends nh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new mg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);const Ke="#221f2e";let Bn=null;function _g(){return Bn||(Bn=new Mo(new Uint8Array([96,178,255]),3,1,_r),Bn.minFilter=Bn.magFilter=De,Bn.generateMipmaps=!1,Bn.needsUpdate=!0,Bn)}function ja(i="#ffffff",t={}){var n;const e=new lg({color:i,gradientMap:_g(),vertexColors:!!t.vertexColors,transparent:!!t.transparent,opacity:(n=t.opacity)!=null?n:1});return t.flash&&xg(e),e}const vg=(i,t={})=>{var e,n;return new fn({color:i,transparent:!!t.transparent,opacity:(e=t.opacity)!=null?e:1,depthWrite:(n=t.depthWrite)!=null?n:!0,vertexColors:!!t.vertexColors})};function Co(i=.045,t=Ke){const e=new fn({color:t,side:Pe});return e.onBeforeCompile=n=>{n.uniforms.uOutline={value:i},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uOutline;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normalize(normal) * uOutline;`)},e.customProgramCacheKey=()=>`outline${i}`,e}function xg(i){i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aFlash;
varying float vFlash;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlash = aFlash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vFlash;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), vFlash);`)},i.customProgramCacheKey=()=>"flash"}function ih(i){const t=new fi(new Float32Array(i.instanceMatrix.count),1);return t.setUsage(xs),i.geometry.setAttribute("aFlash",t),t}function Mg(i,t="#bfe3ff",e="#8a7a6a"){i.add(new dg(t,e,1.25));const n=new gg("#fff4e0",2.1);return n.position.set(-6,14,8),i.add(n),i.add(n.target),n}function oa(i,t,e,n,s,r,a="#ffffff",o){i.font=`${Math.round(s)}px 'Game Display', 'PingFang SC', sans-serif`;const l=i.measureText(t).width,c=o?s*.95:0,h=l+c+s*.7,u=s*1.22,d=e-h/2,f=n-u/2;Fi(i,d,f+s*.1,h,u,u*.36,Ke),Fi(i,d,f,h,u,u*.36,r,Ke,Math.max(1.5,s*.09)),o&&o(i,d+s*.35+c/2,n,s*.8),bn(i,t,d+s*.35+c+l/2,n,s,a)}function la(i,t=1.5){return i<0||i>.45?1:1+me(.15+.22*Math.log2(Math.max(1,t)),.15,.7)*ar.bump(i/.45)}function Ql(i,t,e,n){i.save(),i.translate(t,e),i.rotate(-.5);const s=n*.42,r=n*.95;i.beginPath(),i.moveTo(-s/2,r/2),i.lineTo(-s/2,-r*.05),i.quadraticCurveTo(-s/2,-r/2,0,-r/2),i.quadraticCurveTo(s/2,-r/2,s/2,-r*.05),i.lineTo(s/2,r/2),i.closePath(),i.fillStyle="#ffd34d",i.fill(),i.lineWidth=Math.max(1.5,n*.1),i.strokeStyle=Ke,i.stroke(),i.restore()}const tc=new Map;function ec(i,t){const e=i+t;let n=tc.get(e);if(!n){const s=i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" ').replace(/currentColor/g,t);n=new Image,n.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`,tc.set(e,n)}return n}function sh(i,t,e,n,s){t.complete&&t.naturalWidth>0&&i.drawImage(t,e-s/2,n-s/2,s,s)}const le=4;function rh(i,t){let e;switch(t.k){case"+":e=i+t.v;break;case"-":e=i-t.v;break;case"x":e=i*t.v;break;case"/":e=i/t.v;break}return Math.max(0,Math.floor(e+1e-9))}function Qa(i){const t=Math.round(i.v*100)/100;return i.k==="+"?t<0?`−${-t}`:`+${t}`:i.k==="-"?`−${t}`:i.k==="x"?`×${t}`:`÷${t}`}function to(i){return i.k==="+"?i.v>=0:i.k==="-"?i.v<=0:i.k==="x"?i.v>=1:i.v<=1}function Ro(i){const t=2*le/i;return Array.from({length:i},(e,n)=>[-le+n*t,-le+(n+1)*t])}function ah(i,t){const e=Math.floor((i+le)/(2*le)*t);return e<0?0:e>=t?t-1:e}const ur=(i,t)=>-le+(t+.5)*2*le/i;function oh(i,t=20,e=22){let n=e-t;return i.map((s,r)=>{var l;const a=s.trim().split(/\s+/);let o=0;for(;a.length&&/^>-?\d+(\.\d+)?$/.test(a[0]);)o+=Number(a.shift().slice(1));return n+=t+o,{z:n,kind:(l=a[0])!=null?l:"",args:a.slice(1),i:r}})}function nc(i,t,e){return t>i?Math.min(t,i+e):Math.max(t,i-e)}const oi=(i,t=.6)=>Math.max(-le+t,Math.min(le-t,i));function li(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}let Pi=null,eo="",Ni=1,ic=1;const ss=[];let Ys=0;function Sg(){if(Pi||eo)return Pi;try{const i=document.createElement("canvas"),t=i.getContext("webgl2",{antialias:!0,alpha:!1,powerPreference:"high-performance",depth:!0,stencil:!1});if(!t)throw new Error("no WebGL 2");Pi=new X0({canvas:i,context:t,antialias:!0}),Pi.outputColorSpace=ge,ic=typeof navigator<"u"&&navigator.webdriver?1:Math.min(window.devicePixelRatio||1,2),Ni=ic}catch(i){eo=i instanceof Error?i.message:String(i),Pi=null}return Pi}const yg=()=>eo;function Eg(i,t,e,n){const s=Sg();if(!s)return!1;bg();const r=Math.max(1,innerWidth),a=Math.max(1,innerHeight),o=Math.round(r*Ni),l=Math.round(a*Ni),c=s.domElement;(c.width!==o||c.height!==l)&&s.setSize(o,l,!1);const h=r/a;return Math.abs(n.aspect-h)>1e-4&&(n.aspect=h,n.updateProjectionMatrix()),s.render(e,n),globalThis.__tris=s.info.render.triangles,i.drawImage(c,t.x,t.y,t.w,t.h),!0}function bg(){const i=performance.now();if(Ys&&i-Ys<250&&ss.push(i-Ys),Ys=i,ss.length<120)return;const t=ss.reduce((e,n)=>e+n,0)/ss.length;ss.length=0,t>22&&Ni>1&&(Ni=Math.max(1,Ni-.25))}const rs=new I;function wg(i,t,e,n,s){rs.set(e,n,s).applyMatrix4(i.matrixWorldInverse);const r=-rs.z;return rs.applyMatrix4(i.projectionMatrix),{x:t.x+(rs.x+1)/2*t.w,y:t.y+(1-rs.y)/2*t.h,depth:r}}function Fe(i,t,e){return t.h/(2*Math.max(.1,e)*Math.tan(i.fov*Math.PI/360))}class Tg{constructor(){this.tx=0,this.mpu=.03,this.x0=180,this.down=!1,this.startX=0,this.startTx=0,this.moved=!1,this.gain=1.25}laneAt(t){return oi((t-this.x0)*this.mpu)}screenAt(t){return this.x0+t/this.mpu}press(t,e){this.down=!0,this.moved=!1,this.startX=t,this.startTx=Math.abs(this.tx-e)<.05?e:this.tx}drag(t){this.down&&(Math.abs(t-this.startX)>4&&(this.moved=!0),this.moved&&(this.tx=oi(this.startTx+(t-this.startX)*this.mpu*this.gain)))}release(t){this.down&&(this.down=!1,this.moved||(this.tx=this.laneAt(t)))}get held(){return this.down}path(t,e,n){const s=this.screenAt(t),r=s+(oi(e)-t)/(this.mpu*this.gain),a=4;return Array.from({length:a+1},(o,l)=>({x:s+(r-s)*l/a,y:n}))}}class Ag{constructor(){this.list=[]}add(t){this.list.length>160||this.list.push({vx:0,vy:0,t:0,color:"#ffffff",a:0,...t})}clear(){this.list.length=0}spark(t,e,n){this.add({kind:"flash",x:t,y:e,life:.09,size:n*.9,color:"#fff3c4"});for(let s=0;s<3;s++)this.add({kind:"spark",x:t,y:e,life:.16,size:n,a:Math.PI/2+(s-1)*.65+(Math.random()-.5)*.4,color:"#ffe08a"})}muzzle(t,e,n){this.add({kind:"flash",x:t,y:e,life:.07,size:n,color:"#ffd77a"})}puff(t,e,n,s=4,r="#e9e4dc"){for(let a=0;a<s;a++){const o=a/s*Math.PI*2+Math.random()*.8;this.add({kind:"puff",x:t+Math.cos(o)*n*.35,y:e+Math.sin(o)*n*.2,vx:Math.cos(o)*n*.9,vy:-n*(.5+Math.random()*.5),life:.65+Math.random()*.2,size:n*(.45+Math.random()*.25),color:r})}}ring(t,e,n,s,r=.55){this.add({kind:"ring",x:t,y:e,life:r,size:n,color:s,a:.32})}fireball(t,e,n){this.puff(t,e-n*.35,n*.85,4,"#7a6e66"),this.add({kind:"fire",x:t,y:e,life:.85,size:n}),this.add({kind:"fire",x:t-n*.4,y:e+n*.15,life:.7,size:n*.6}),this.add({kind:"fire",x:t+n*.45,y:e-n*.1,life:.75,size:n*.55});for(let s=0;s<9;s++){const r=-Math.PI/2+(Math.random()-.5)*2.6,a=n*(2.2+Math.random()*1.6);this.add({kind:"chunk",x:t,y:e,vx:Math.cos(r)*a,vy:Math.sin(r)*a,life:.9,size:n*(.07+Math.random()*.05),color:s%3?"#3a2a26":"#c9453a",a:Math.random()*6})}}step(t){for(const e of this.list)e.t+=t,e.x+=e.vx*t,e.y+=e.vy*t,e.kind==="chunk"?e.vy+=1400*t:e.kind==="puff"&&(e.vx*=.9,e.vy*=.94);this.list=this.list.filter(e=>e.t<e.life)}draw(t){for(const e of this.list){const n=e.t/e.life;switch(t.save(),e.kind){case"spark":{t.globalCompositeOperation="lighter",t.globalAlpha=1-n;const s=e.size*(.2+.9*n),r=s+e.size*.7*(1-n);t.strokeStyle=e.color,t.lineWidth=Math.max(1.5,e.size*.14),t.lineCap="round",t.beginPath(),t.moveTo(e.x+Math.cos(e.a)*s,e.y+Math.sin(e.a)*s),t.lineTo(e.x+Math.cos(e.a)*r,e.y+Math.sin(e.a)*r),t.stroke();break}case"flash":{t.globalCompositeOperation="lighter",t.globalAlpha=1-n;const s=e.size*(.6+.6*n),r=t.createRadialGradient(e.x,e.y,0,e.x,e.y,s);r.addColorStop(0,"rgba(255,255,240,1)"),r.addColorStop(.35,e.color),r.addColorStop(1,"rgba(255,160,40,0)"),t.fillStyle=r,t.beginPath(),t.arc(e.x,e.y,s,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,250,220,0.9)",t.beginPath();for(let a=0;a<8;a++){const o=a*Math.PI/4,l=a%2?s*.18:s*1.25;t.lineTo(e.x+Math.cos(o)*l,e.y+Math.sin(o)*l)}t.closePath(),t.fill();break}case"puff":{t.globalAlpha=.75*(1-n)*Math.min(1,e.t/.06);const s=e.size*(.7+.8*n),r=t.createRadialGradient(e.x-s*.25,e.y-s*.3,s*.1,e.x,e.y,s);r.addColorStop(0,e.color),r.addColorStop(.7,e.color),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.beginPath(),t.arc(e.x,e.y,s,0,Math.PI*2),t.fill();break}case"ring":{t.globalCompositeOperation="lighter",t.globalAlpha=(1-n)*.9,t.strokeStyle=e.color,t.lineWidth=e.size*.12*(1-n)+2,t.beginPath(),t.ellipse(e.x,e.y,e.size*(.55+.75*n),e.size*e.a*(.55+.75*n),0,0,Math.PI*2),t.stroke();break}case"fire":{t.globalCompositeOperation="lighter";const s=.35+.65*Math.min(1,n/.3);t.globalAlpha=n<.45?1:1-(n-.45)/.55;const r=e.size*s,a=t.createRadialGradient(e.x,e.y,0,e.x,e.y,r);a.addColorStop(0,"rgba(255,255,230,1)"),a.addColorStop(.25,"rgba(255,214,90,0.95)"),a.addColorStop(.6,"rgba(255,120,30,0.75)"),a.addColorStop(1,"rgba(200,40,10,0)"),t.fillStyle=a,t.beginPath(),t.arc(e.x,e.y,r,0,Math.PI*2),t.fill();break}case"chunk":{t.globalAlpha=1-Math.max(0,(n-.6)/.4),t.translate(e.x,e.y),t.rotate(e.a+e.t*9),t.fillStyle=e.color,t.fillRect(-e.size,-e.size*.7,e.size*2,e.size*1.4);break}}t.restore()}}}function Cg(i,t,e,n,s,r){const a=.42+.12*Math.sin(s*13+r)+.08*Math.sin(s*29+r*3);i.save(),i.globalCompositeOperation="lighter",i.globalAlpha=a;const o=i.createRadialGradient(t,e,0,t,e,n);o.addColorStop(0,"rgba(255,190,80,0.9)"),o.addColorStop(.5,"rgba(255,100,30,0.45)"),o.addColorStop(1,"rgba(200,40,10,0)"),i.fillStyle=o,i.beginPath(),i.ellipse(t,e,n,n*1.15,0,0,Math.PI*2),i.fill(),i.restore()}function sc(i,t,e,n,s=0){const r=n/100;i.save(),i.translate(t,e),i.rotate(s),i.scale(r,r),i.lineJoin="round",i.lineCap="round";const a="#1d1f26",o=()=>{i.beginPath(),i.moveTo(-9,40),i.lineTo(-9,8),i.arc(0,8,9,Math.PI,0),i.lineTo(9,34),i.arc(16,40,7.5,-Math.PI*.95,Math.PI*.2),i.arc(22,52,7.5,-Math.PI*.75,Math.PI*.3),i.arc(24,64,7.5,-Math.PI*.6,Math.PI*.45),i.quadraticCurveTo(24,82,14,88),i.lineTo(-14,88),i.quadraticCurveTo(-26,74,-27,60),i.quadraticCurveTo(-28,48,-18,47),i.quadraticCurveTo(-11,47,-9,54),i.closePath()};i.save(),i.translate(4,5),o(),i.fillStyle="rgba(0,0,0,0.28)",i.fill(),i.restore(),o(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=5,i.strokeStyle=a,i.stroke(),i.lineWidth=3,i.beginPath(),i.moveTo(9,36),i.quadraticCurveTo(13,44,17,46),i.moveTo(14,50),i.quadraticCurveTo(18,57,23,58),i.moveTo(-9,54),i.quadraticCurveTo(-4,62,2,64),i.stroke(),i.beginPath(),i.moveTo(-16,86),i.lineTo(16,86),i.lineTo(17,98),i.lineTo(-17,98),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=5,i.stroke(),i.restore()}function Rg(i,t,e,n,s){i.globalAlpha=s,i.font="21px 'Game Display', 'PingFang SC', sans-serif";const r=i.measureText(e).width,a=r+(t?62:36);Fi(i,180-a/2,n+3,a,42,21,"rgba(40,26,14,0.35)"),Fi(i,180-a/2,n,a,42,21,"rgba(255,244,214,0.9)","rgba(150,110,60,0.8)",2),t&&sh(i,t,180-a/2+26,n+21,26),bn(i,e,180-a/2+(t?44:18)+r/2,n+21,21,"#4a3320","rgba(255,244,214,0.9)"),i.globalAlpha=1}function Pg(i,t,e=4096){const n=i.reduce((h,u)=>h*Math.max(1,u),1),s=Math.min(n,e);let r=i.map(()=>0),a=null,o=0,l=null;const c=i.map(()=>0);for(let h=0;h<s;h++){let u=h;for(let f=i.length-1;f>=0;f--){const _=Math.max(1,i[f]);c[f]=u%_,u=Math.floor(u/_)}const d=t(c);d.won&&(o++,l=l===null?d.score:Math.min(l,d.score)),(!a||Lg(d,a))&&(a=d,r=c.slice())}return{best:r,bestOutcome:a!=null?a:{won:!1,score:0,time:0},routes:s,winShare:s?o/s:0,worstWin:o>1?l:null,capped:n>e}}const Lg=(i,t)=>i.won!==t.won?i.won:i.score!==t.score?i.score>t.score:i.time<t.time,no=1/60,Ig=7,Dg=10,Po=1/8,ca=26,Ug=30,Ng=1.5,Fg=3.5,rc=16,Og=1.8,io=i=>Math.min(2.6,.45+.32*Math.sqrt(Math.min(Math.max(i,1),60))),zg=i=>Math.min(2,.55+.17*Math.log2(1+i/8)),Bg=i=>Math.min(3.2,1.7+.18*Math.log2(1+i/200)),kg=/^(f)?([+\-x×/÷])(\d+(?:\.\d+)?)(?:\^(\d+(?:\.\d+)?))?(?:<(\d+))?$/;function lh(i,t,e,n,s){if(i===".")return null;const r=kg.exec(i);if(!r)throw new Error(`bad gate "${i}"`);const a=!!r[1],o=r[2],l=r[4]?Number(r[4]):0;let c;const h=Number(r[3]);o==="+"?c={k:"+",v:h}:o==="-"?c=l?{k:"+",v:-h}:{k:"-",v:h}:o==="/"||o==="÷"?c={k:"/",v:h}:c={k:"x",v:h};const[u,d]=Ro(n)[e];return{row:t,slot:e,x0:u,x1:d,z:s,op:c,fire:a,shoot:l,cap:r[5]?Number(r[5]):1/0,acc:0,state:0,bumpT:-9}}function Hg(i){if(i<20)return Math.max(1,Math.round(i));const t=10**(Math.floor(Math.log10(i))-1);return Math.round(i/t)*t}const so=/^(\d+(\.\d+)?|\.\d+)n$/;function ac(i,t=[]){let e=i.start,n=1;const s=[];return{rows:i.rows.map((a,o)=>{var _;const l=a.trim().split(/\s+/),c=l.filter(g=>g.startsWith(">")),h=l.filter(g=>!g.startsWith(">"));if(h[0]==="g"){let g=-1,m=e,p=n,x=0;return h.slice(1).forEach((M,v)=>{const R=lh(M,0,v,h.length-1,0);if(!R)return;const w=R.shoot?{k:R.op.k,v:Math.min(R.cap,R.op.v+Math.floor(2*e*n/R.shoot))}:R.op,A=R.fire?e:rh(e,w),C=R.fire?ch(n,w):n;A*C>g&&(g=A*C,m=A,p=C,x=v)}),e=m,n=p,s.push(x),a}const u=(_=t[o])!=null?_:{n:e,f:n},d=g=>so.test(g)?String(Hg(Number(g.slice(0,-1))*Math.max(1,u.n*u.f))):g,f=g=>so.test(g)?String(Math.max(1,Math.round(Number(g.slice(0,-1))*Math.max(1,u.n)))):g;return h[0]==="z"?[...c,"z",...h.slice(1).map(d)].join(" "):h[0]==="B"?[...c,"B",...h.slice(1).map((g,m)=>m===0?d(g):m===1?f(g):g)].join(" "):h[0]==="w"?[...c,"w",h[1],...h.slice(2).map(f)].join(" "):a}),route:s}}const ch=(i,t)=>Math.max(1,t.k==="+"?i+t.v:t.k==="-"?i-t.v:t.k==="x"?i*t.v:i/t.v);function oc(i){let t=ac(i);if(i.rows.some(e=>e.split(/\s+/).some(n=>so.test(n))))for(let e=0;e<2;e++)t=ac(i,Gg(i,t.rows,t.route));return hh(i,t.rows)}function Gg(i,t,e){var o;const n=hh(i,t);n.quiet=!0;const s=oh(t,(o=i.gap)!=null?o:20,24),r=t.map(()=>{}),a=s.map(l=>l.kind==="z"?l.z-16:l.kind==="w"?l.z-2:l.kind==="B"?1/0:NaN);for(;n.phase!=="won"&&n.phase!=="lost"&&n.t<240;)n.tx=fr(n,e),Lo(n),a.forEach((l,c)=>{r[c]||Number.isNaN(l)||(n.z>=l||l===1/0&&n.phase==="boss")&&(r[c]={n:n.n,f:n.f})});return r}function hh(i,t){var r,a,o,l,c;const e=oh(t,(r=i.gap)!=null?r:20,24),n={t:0,z:0,x:0,tx:0,n:i.start,f:1,phase:"run",speed:(a=i.speed)!=null?a:Ig,rows:[],mobs:[],walls:[],boss:null,end:0,fireT:Po,why:"",ev:[],quiet:!1};let s=0;for(const h of e)if(h.kind==="g"){const u=h.args.length;if(u<2||u>3)throw new Error(`row ${h.i}: a gate row has 2 or 3 gates`);n.rows.push({i:n.rows.length,z:h.z,k:u,gates:h.args.map((d,f)=>lh(d,n.rows.length,f,u,h.z)),passed:!1,choice:-1})}else if(h.kind==="z"){const u=h.args.map(Number);if(!u.length||u.some(d=>!(d>0)))throw new Error(`row ${h.i}: bad monster health "${h.args.join(" ")}"`);u.forEach((d,f)=>{const _=Math.floor(f/4),g=Math.min(4,u.length-_*4),m=ur(g,f%4)*.85,p=((h.i*7+f*13)%5-2)*.6;n.mobs.push({id:s++,z:h.z+_*3+p,x:m,hp:d,hp0:d,r:zg(d),dead:!1,gone:!1,awake:!1,hitT:-9})})}else if(h.kind==="w"){const u=h.args[0],d=u.length,f=[...u].map((_,g)=>_==="1"?g:-1).filter(_=>_>=0);n.walls.push({id:n.walls.length,z:h.z,k:d,slots:f,spans:f.map(_=>Ro(d)[_]),cost:Number((o=h.args[1])!=null?o:10),done:!1,hit:!1})}else if(h.kind==="B"){const u=Number(h.args[0]);if(!(u>0))throw new Error(`row ${h.i}: bad boss health "${h.args[0]}"`);n.boss={z:h.z+6,x:0,hp:u,hp0:u,r:Bg(u),stomp:Number((l=h.args[1])!=null?l:0),every:Number((c=h.args[2])!=null?c:3),timer:0,dead:!1,awake:!1,hitT:-9},n.end=n.boss.z}else throw new Error(`row ${h.i}: unknown kind "${h.kind}"`);if(!n.boss)throw new Error("a level needs a boss row (B)");return n}const Ce=(i,t)=>{i.quiet||i.ev.push(t)};function as(i,t){i.phase==="won"||i.phase==="lost"||(i.n=0,i.phase="lost",i.why=t,Ce(i,{e:"end",won:!1}))}function Lo(i){if(i.phase==="won"||i.phase==="lost")return;const t=no;i.t+=t;const e=i.z;if(i.phase==="run"){i.z+=i.speed*t;const r=i.boss;i.z>=r.z-rc&&(i.z=r.z-rc,i.phase="boss",r.awake=!0,r.timer=r.every,Ce(i,{e:"arena"}))}i.x=oi(nc(i.x,oi(i.tx),Dg*t));const n=io(i.n);for(const r of i.rows){if(r.passed||r.z>i.z||r.z<=e-1e-9)continue;r.passed=!0;const a=ah(i.x,r.k);r.choice=a,r.gates.forEach((l,c)=>{l&&(l.state=c===a?1:2)});const o=r.gates[a];if(o)if(o.fire){const l=i.f;i.f=ch(i.f,o.op),Ce(i,{e:"gate",row:r.i,slot:a,before:l,after:i.f,fire:!0})}else{const l=i.n;if(i.n=rh(i.n,o.op),Ce(i,{e:"gate",row:r.i,slot:a,before:l,after:i.n,fire:!1}),i.n<=0)return as(i,`过了 ${Qa(o.op)} 门，人没了`)}}for(const r of i.walls){if(r.done||r.z>i.z||r.z<=e-1e-9)continue;r.done=!0;const a=n*.35;if(r.spans.some(([o,l])=>i.x+a>o&&i.x-a<l)){r.hit=!0;const o=Math.min(i.n,r.cost);if(i.n-=o,Ce(i,{e:"wall",wall:r.id,lost:o}),i.n<=0)return as(i,"撞上拒马，人没了")}}for(const r of i.mobs)r.dead||r.gone||(!r.awake&&r.z-i.z<Ug&&(r.awake=!0),r.awake&&(r.z-=Ng*t,r.x=nc(r.x,i.x,Fg*t)));for(let r=0;r<i.mobs.length;r++){const a=i.mobs[r];if(!(!a.awake||a.dead||a.gone))for(let o=r+1;o<i.mobs.length;o++){const l=i.mobs[o];if(!l.awake||l.dead||l.gone)continue;const c=(a.r+l.r)*.9;if(Math.abs(a.z-l.z)>=c)continue;const h=l.x-a.x,u=c-Math.abs(h);if(u<=0)continue;const d=h>0||h===0&&a.id<l.id?1:-1;a.x=oi(a.x-d*u/2,.3),l.x=oi(l.x+d*u/2,.3)}}for(const r of i.mobs)if(!(r.dead||r.gone||!r.awake))if(r.z-i.z<=.6+r.r*.5&&Math.abs(r.x-i.x)<=io(i.n)+r.r+.5){const a=Math.ceil(r.hp-1e-9);if(r.dead=!0,i.n=Math.max(0,i.n-a),Ce(i,{e:"eat",mob:r.id,lost:a}),i.n<=0)return as(i,`${a} 血的怪冲进来，人被吃光了`)}else r.z<i.z-2&&(r.gone=!0);const s=i.boss;if(i.phase==="boss"&&!s.dead){if(s.z-=Og*t,s.stomp>0&&(s.timer-=t,s.timer<=0)){s.timer+=s.every;const r=Math.min(i.n,s.stomp);if(i.n-=r,Ce(i,{e:"stomp",lost:r}),i.n<=0)return as(i,`大怪一脚踩光了队伍，它还剩 ${Math.ceil(s.hp)} 血`)}if(s.z-i.z<=s.r*.8+.6){const r=Math.ceil(s.hp-1e-9);if(s.dead=!0,i.n>r){i.n-=r,Ce(i,{e:"bossEat",lost:r}),i.phase="won",Ce(i,{e:"end",won:!0});return}return as(i,`大怪还剩 ${r} 血，比你的 ${i.n} 人多`)}}for(i.fireT-=t;i.fireT<=0;)if(i.fireT+=Po,Vg(i),s.dead){i.phase="won",Ce(i,{e:"bossDown"}),Ce(i,{e:"end",won:!0});return}}function Vg(i){if(i.n<=0)return;let t=i.n*i.f*Po;const e=[];for(const s of i.mobs){if(s.dead||s.gone)continue;const r=s.z-i.z;r<-1||r>ca||e.push({z:s.z,kind:"mob",mob:s})}for(const s of i.rows){if(s.passed)continue;const r=s.z-i.z;if(r<0||r>ca)continue;const a=s.gates[ah(i.x,s.k)];a&&a.shoot>0&&a.op.v<a.cap&&e.push({z:s.z,kind:"gate",gate:a})}const n=i.boss;!n.dead&&n.z-i.z<=ca&&e.push({z:n.z,kind:"boss"}),e.sort((s,r)=>s.z-r.z);for(const s of e){if(t<=1e-9)break;if(s.kind==="gate"){const r=s.gate;r.acc+=t;const a=Math.floor(r.acc/r.shoot+1e-9);a>0&&(r.acc-=a*r.shoot,r.op={k:r.op.k,v:Math.min(r.cap,r.op.v+a)},r.bumpT=i.t,Ce(i,{e:"gateUp",row:r.row,slot:r.slot})),Ce(i,{e:"shot",kind:"gate",ref:r.row,slot:r.slot,dmg:t}),t=0}else if(s.kind==="mob"){const r=s.mob,a=Math.min(t,r.hp);r.hp-=a,t-=a,r.hitT=i.t,Ce(i,{e:"shot",kind:"mob",ref:r.id,slot:0,dmg:a}),r.hp<=1e-6&&(r.hp=0,r.dead=!0,Ce(i,{e:"kill",mob:r.id}))}else{const r=Math.min(t,n.hp);n.hp-=r,t-=r,n.hitT=i.t,Ce(i,{e:"shot",kind:"boss",ref:0,slot:0,dmg:r}),n.hp<=1e-6&&(n.hp=0,n.dead=!0)}}}function fr(i,t){var s;const e=i.rows.find(r=>!r.passed);let n=e?ur(e.k,(s=t[e.i])!=null?s:0):i.x;for(const r of i.walls){if(r.done)continue;const a=r.z-i.z;if(a<0||a>13)continue;const o=io(i.n)*.35+.15,l=c=>r.spans.some(([h,u])=>c+o>h&&c-o<u);if(l(n)){let c=n,h=1/0;for(let u=-le+.6;u<=le-.6+1e-9;u+=.1)!l(u)&&Math.abs(u-n)<h&&(h=Math.abs(u-n),c=u);n=c}break}return n}function uh(i){return{...i,rows:i.rows.map(t=>({...t,gates:t.gates.map(e=>e?{...e,op:{...e.op}}:null)})),mobs:i.mobs.map(t=>({...t})),walls:i.walls.map(t=>({...t})),boss:i.boss?{...i.boss}:null,ev:[]}}function Wg(i,t,e=240){const n=uh(i);for(n.quiet=!0;n.phase!=="won"&&n.phase!=="lost"&&n.t<e;)n.tx=fr(n,t),Lo(n);return{won:n.phase==="won",score:n.phase==="won"?n.n:0,time:n.t,s:n}}function lc(i){const t=i.rows.map(n=>n.passed?1:n.k),e=i.rows.map(n=>n.passed?n.choice:-1);return Pg(t,n=>Wg(i,n.map((s,r)=>e[r]>=0?e[r]:s)))}function Xg(i,t){return i>=Math.ceil(t*.85)?3:i>=Math.ceil(t*.5)?2:1}const ps=1024,Io=new WeakMap,fh=i=>Io.get(i);async function Qn(i,t){const[e,n]=await Promise.all([fetch(i).then(s=>{if(!s.ok)throw new Error(`${i}: ${s.status}`);return s.arrayBuffer()}),t?qg(t):Promise.resolve(null)]);return $g(e,n)}function qg(i){return new Promise((t,e)=>new fg().load(i,n=>{n.flipY=!1,n.colorSpace=ge,n.anisotropy=4,n.needsUpdate=!0,t(n)},void 0,e))}function $g(i,t){const e=new DataView(i);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="BAK1")throw new Error("not a baked model");const s=e.getUint32(4,!0),r=e.getUint32(8,!0),a=e.getUint32(12,!0),o=[16,20,24].map(v=>e.getFloat32(v,!0)),l=[28,32,36].map(v=>e.getFloat32(v,!0));let c=40;const h=new Uint16Array(i,c,a*s*3);c+=a*s*3*2;const u=new Int8Array(i,c,a*s*3);c+=a*s*3,c%2&&c++;const d=new Uint16Array(i,c,s*2);c+=s*4;const f=s>65535;f&&c%4&&(c+=4-c%4);const _=f?new Uint32Array(i,c,r).slice():new Uint16Array(i,c,r).slice(),g=(v,R)=>o[R%3]+h[v*s*3+R]/65535*l[R%3],m=new ze,p=new Float32Array(s*3),x=new Float32Array(s*3);for(let v=0;v<s*3;v++)p[v]=g(0,v),x[v]=u[v]/127;m.setAttribute("position",new de(p,3)),m.setAttribute("normal",new de(x,3));const M=new Float32Array(s*2);for(let v=0;v<M.length;v++)M[v]=d[v]/65535;if(m.setAttribute("uv",new de(M,2)),m.setIndex(new de(_,1)),a>1){const v=s*a,R=Math.ceil(v/ps),w=new Float32Array(ps*R*4);for(let C=0;C<a;C++)for(let E=0;E<s;E++){const S=(C*s+E)*4,L=E*3;w[S]=g(C,L),w[S+1]=g(C,L+1),w[S+2]=g(C,L+2)}const A=new Mo(w,ps,R,qe,sn);A.minFilter=A.magFilter=De,A.needsUpdate=!0,Io.set(m,{texture:A,vertices:s,frames:a})}return m.computeBoundingSphere(),{geometry:m,texture:t,frames:a,size:new I(l[0],l[1],l[2])}}class Do{constructor(t,e,n=Io.get(t.geometry)){if(this.phase=new fi(new Float32Array(t.instanceMatrix.count),1),this.phase.setUsage(xs),t.geometry.setAttribute("aPhase",this.phase),!n||e<2)return;const s=t.material,r=s.onBeforeCompile.bind(s),a=s.customProgramCacheKey.bind(s);s.onBeforeCompile=(o,l)=>{r(o,l),o.uniforms.vatTex={value:n.texture},o.uniforms.vatV={value:n.vertices},o.uniforms.vatF={value:n.frames},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform highp sampler2D vatTex;
uniform int vatV;
uniform int vatF;
attribute float aPhase;
vec3 vatPos(int f) { int i = gl_VertexID + f * vatV; return texelFetch(vatTex, ivec2(i % ${ps}, i / ${ps}), 0).xyz; }`).replace("#include <begin_vertex>",`#include <begin_vertex>
{
  float ph = fract(aPhase) * float(vatF);
  int f0 = int(floor(ph));
  int f1 = f0 + 1 >= vatF ? 0 : f0 + 1;
  transformed = mix(vatPos(f0), vatPos(f1), ph - floor(ph));
}`)},s.customProgramCacheKey=()=>`${a()}|vat`,s.needsUpdate=!0}set(t,e){this.phase.setX(t,e-Math.floor(e))}done(){this.phase.needsUpdate=!0}}const Ks=new Nt;function Re(i){let t=0,e=0;const n=i.map(M=>{const v=M.geo.index?M.geo:Yg(M.geo);return t+=v.attributes.position.count,e+=v.index.count,v}),s=new Float32Array(t*3),r=new Float32Array(t*3),a=new Float32Array(t*3),o=t>65535?new Uint32Array(e):new Uint16Array(e);let l=0,c=0;const h=new Yt,u=new Ot,d=new $e,f=new ye,_=new I,g=new I,m=new I,p=new I;i.forEach((M,v)=>{var S,L,k;const R=n[v];g.set(...(S=M.at)!=null?S:[0,0,0]),f.set(...(L=M.rot)!=null?L:[0,0,0]),d.setFromEuler(f);const w=(k=M.scale)!=null?k:1;typeof w=="number"?_.set(w,w,w):_.set(...w),h.compose(g,d,_),u.getNormalMatrix(h),Ks.set(M.color).convertSRGBToLinear();const A=R.attributes.position,C=R.attributes.normal;for(let F=0;F<A.count;F++){m.fromBufferAttribute(A,F).applyMatrix4(h),p.fromBufferAttribute(C,F).applyMatrix3(u).normalize();const W=(l+F)*3;s[W]=m.x,s[W+1]=m.y,s[W+2]=m.z,r[W]=p.x,r[W+1]=p.y,r[W+2]=p.z,a[W]=Ks.r,a[W+1]=Ks.g,a[W+2]=Ks.b}const E=R.index;for(let F=0;F<E.count;F++)o[c+F]=E.getX(F)+l;l+=A.count,c+=E.count});const x=new ze;return x.setAttribute("position",new de(s,3)),x.setAttribute("normal",new de(r,3)),x.setAttribute("color",new de(a,3)),x.setIndex(new de(o,1)),x.computeBoundingSphere(),x}function Yg(i){const t=i.clone(),e=t.attributes.position.count,n=new Uint16Array(e);for(let s=0;s<e;s++)n[s]=s;return t.setIndex(new de(n,1)),t}const It=(i=1,t=12,e=9)=>new Er(i,t,e),oe=(i,t,e=8)=>new bo(i,t,3,e),Me=(i,t,e,n=10)=>new Mr(i,t,e,n),he=(i,t,e=8)=>new wo(i,t,e),kt=(i,t,e)=>new Xn(i,t,e),Kg=(i,t=12)=>new Er(i,t,6,0,Math.PI*2,0,Math.PI/2),Jg=[{body:"#8ed05a",belly:"#d6f2a6",horn:"#fff3d6"},{body:"#a274ff",belly:"#dccbff",horn:"#fff3d6"},{body:"#ff6a55",belly:"#ffc2a8",horn:"#fff3d6"}];function Zg(i){return Re([{geo:It(1,14,10),color:i.body,at:[0,.92,0],scale:[1,.9,.95]},{geo:It(.62,12,8),color:i.belly,at:[0,.74,.45],scale:[1,.9,.6]},{geo:It(.25,10,8),color:"#ffffff",at:[-.34,1.26,.72]},{geo:It(.25,10,8),color:"#ffffff",at:[.34,1.26,.72]},{geo:It(.12,8,6),color:Ke,at:[-.31,1.24,.94]},{geo:It(.12,8,6),color:Ke,at:[.31,1.24,.94]},{geo:It(.3,10,6),color:"#3b1730",at:[0,.8,.86],scale:[1.3,.55,.4]},{geo:he(.15,.42,7),color:i.horn,at:[-.5,1.74,0],rot:[0,0,.35]},{geo:he(.15,.42,7),color:i.horn,at:[.5,1.74,0],rot:[0,0,-.35]},{geo:It(.3,8,6),color:i.body,at:[-.48,.13,.2],scale:[1,.5,1.25]},{geo:It(.3,8,6),color:i.body,at:[.48,.13,.2],scale:[1,.5,1.25]}])}function jg(){const i="#c8355a",t="#ff9aa8",e="#f2b632";return Re([{geo:It(1,16,12),color:i,at:[0,.95,0],scale:[1,.95,.9]},{geo:It(.66,12,8),color:t,at:[0,.74,.4],scale:[1,.95,.62]},{geo:It(.2,10,8),color:"#ffffff",at:[-.32,1.3,.7]},{geo:It(.2,10,8),color:"#ffffff",at:[.32,1.3,.7]},{geo:It(.1,8,6),color:Ke,at:[-.3,1.28,.88]},{geo:It(.1,8,6),color:Ke,at:[.3,1.28,.88]},{geo:kt(.5,.08,.1),color:Ke,at:[-.32,1.52,.72],rot:[0,0,-.35]},{geo:kt(.5,.08,.1),color:Ke,at:[.32,1.52,.72],rot:[0,0,.35]},{geo:It(.34,10,6),color:"#3b1730",at:[0,.82,.8],scale:[1.5,.6,.4]},{geo:he(.08,.2,5),color:"#ffffff",at:[-.2,.92,.9],rot:[Math.PI,0,0]},{geo:he(.08,.2,5),color:"#ffffff",at:[.2,.92,.9],rot:[Math.PI,0,0]},{geo:Me(.42,.48,.3,10),color:e,at:[0,1.95,0]},{geo:he(.1,.28,5),color:e,at:[-.3,2.22,0]},{geo:he(.1,.28,5),color:e,at:[0,2.24,.2]},{geo:he(.1,.28,5),color:e,at:[.3,2.22,0]},{geo:oe(.22,.7,8),color:i,at:[-1.05,.95,.25],rot:[.5,0,.6]},{geo:oe(.22,.7,8),color:i,at:[1.05,.95,.25],rot:[.5,0,-.6]},{geo:It(.32,8,6),color:i,at:[-.5,.14,.2],scale:[1,.5,1.3]},{geo:It(.32,8,6),color:i,at:[.5,.14,.2],scale:[1,.5,1.3]}])}const Qg=()=>Re([{geo:oe(.12,.4,6),color:"#fff3a0",rot:[Math.PI/2,0,0]}]);function t_(i="#5fae4e",t="#7cc75a"){return Re([{geo:Me(.18,.26,1.4,7),color:"#8a5a3c",at:[0,.7,0]},{geo:It(1.05,10,8),color:i,at:[0,2,0]},{geo:It(.8,10,8),color:t,at:[.55,2.5,.25]},{geo:It(.72,10,8),color:i,at:[-.5,2.55,-.2]}])}const e_=()=>Re([{geo:new yr(1,0),color:"#a8a3b5",scale:[1.2,.7,1]}]),n_=()=>Re([{geo:It(.7,9,7),color:"#6bb85a",at:[0,.5,0]},{geo:It(.55,9,7),color:"#86cf63",at:[.6,.4,.1]},{geo:It(.5,9,7),color:"#5fa64f",at:[-.55,.38,-.1]}]);let os=null;function dh(){if(os)return os;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,31);return e.addColorStop(0,"rgba(20,16,40,0.55)"),e.addColorStop(.6,"rgba(20,16,40,0.32)"),e.addColorStop(1,"rgba(20,16,40,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),os=new ys(i),os.colorSpace=ge,os}function i_(i){var s;const t=document.createElement("canvas");t.width=128,t.height=256;const e=t.getContext("2d");e.fillStyle=i.road,e.fillRect(0,0,128,256),e.fillStyle=(s=i.dirt)!=null?s:"rgba(0,0,0,0.06)";for(const[r,a,o,l]of[[18,30,34,60],[80,140,30,70],[40,200,26,40]])e.beginPath(),e.ellipse(r,a,o/2,l/2,0,0,Math.PI*2),e.fill();e.fillStyle=i.edge,e.fillRect(0,0,8,256),e.fillRect(120,0,8,256),e.fillStyle=i.line,e.fillRect(61,20,6,90),e.fillRect(61,148,6,90);const n=new ys(t);return n.colorSpace=ge,n.wrapS=Tn,n.wrapT=ms,n.anisotropy=4,n}const Uo={legL:1,legR:2,armL:3,armR:4};function dr(i){var s;const t=Re(i),e=new Float32Array(t.attributes.position.count);let n=0;for(const r of i){const o=(r.geo.index,r.geo).attributes.position.count;e.fill((s=r.limb)!=null?s:0,n,n+o),n+=o}return t.setAttribute("aLimb",new de(e,1)),t}function No(i,t,e=0){var c,h,u;const n={uTime:{value:0},uPhase:{value:0},uAmount:{value:1}},s=((c=t.swing)!=null?c:.7).toFixed(3),r=((h=t.arms)!=null?h:.6).toFixed(3),a=((u=t.rate)!=null?u:9).toFixed(3),o=i.onBeforeCompile;i.onBeforeCompile=(d,f)=>{o==null||o.call(i,d,f),Object.assign(d.uniforms,n);const _=`
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
`;d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
${_}`),d.vertexShader.includes("#include <beginnormal_vertex>")&&(d.vertexShader=d.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = gaitRot(objectNormal, false);`)),d.vertexShader=d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = gaitRot(transformed, true);${e?`
transformed += normalize(gaitRot(normal, false)) * ${e.toFixed(4)};`:""}`)};const l=i.customProgramCacheKey.bind(i);return i.customProgramCacheKey=()=>`${l()}|gait${t.instanced?"I":"U"}${s}${r}${a}${t.hip}${t.shoulder}${e}`,{uniforms:n}}function s_(i,t=.04,e="#221f2e"){const n=new fn({color:e,side:Pe});return{mat:n,gait:No(n,i,t)}}function Fo(i){const t=new fi(new Float32Array(i.instanceMatrix.count*2),2);return t.setUsage(xs),i.geometry.setAttribute("aGait",t),t}const ha=5,r_=new Nt(1.6,.22,.18);function a_(i,t=7){const e=li(t),n=[],s=Math.ceil(i/ha);for(let r=0;r<s;r++){const a=r===0?0:1.35*Math.sqrt(r+.3),o=r*2.39996+.6,l=Math.cos(o)*a*1.15,c=Math.sin(o)*a*.8+(r===0?0:.35);for(let h=0;h<ha&&n.length<i;h++){if(h===0){n.push({x:l+(e()-.5)*.12,z:c+(e()-.5)*.12});continue}const u=h/(ha-1)*Math.PI*2+e()*.6+r,d=.46+e()*.1;n.push({x:l+Math.cos(u)*d,z:c+Math.sin(u)*d*.85})}}return n}class o_{constructor(t,e,n,s=30,r){this.gait=null,this.gaitA=null,this.members=[],this.nextTint=0,this.m4=new Yt,this.q=new $e,this.e=new ye,this.p=new I,this.sc=new I,this.col=new Nt,this.hurt=0,this.player=null,this.rate=11,this.cap=s;const a=s+16;this.slots=a_(s),this.mesh=new us(t,e,a),this.ink=n?new us(t,n,a):null,this.shadows=new us(new Ye(1,1).rotateX(-Math.PI/2),new fn({map:dh(),transparent:!0,depthWrite:!1}),a),r&&(this.gait=No(e,{...r,instanced:!0}),this.gaitA=Fo(this.mesh));for(const o of[this.mesh,this.ink,this.shadows])o&&(o.count=0,o.frustumCulled=!1,o.instanceMatrix.setUsage(xs));this.mesh.instanceColor=new fi(new Float32Array(a*3).fill(1),3)}useBaked(t,e,n,s){this.mesh.geometry=t,this.mesh.material=e,this.ink&&(this.ink.visible=!1),this.gait=null,this.gaitA=null,this.rate=s,this.player=n>1?new Do(this.mesh,n):null}add(t){return t.add(this.shadows,this.mesh),this.ink&&t.add(this.ink),this}figures(t){return t<=0?0:t<=10?Math.ceil(t):Math.min(this.cap,Math.round(10+6.5*Math.log2(t/10)))}get alive(){return this.members.filter(t=>t.dead<0).length}set(t,e,n,s){const r=this.figures(t);let a=this.members.filter(o=>o.dead<0);if(r>a.length){const o=new Set(a.map(l=>l.slot));for(let l=0;l<this.cap&&a.length<r;l++){if(o.has(l))continue;const c=li(l*31+5),h={slot:l,ph:c()*6.28,yaw:(c()-.5)*.3,s:.92+c()*.16,born:e+a.length*.012,dead:-1,wx:0,wz:0,tint:.9+this.nextTint++*37%10/70};this.members.push(h),a.push(h)}}else if(r<a.length){a.sort((o,l)=>l.slot-o.slot);for(const o of a.slice(0,a.length-r)){o.dead=e;const l=this.slots[o.slot];o.wx=n+l.x,o.wz=s+l.z}a=a.slice(a.length-r)}this.members=this.members.filter(o=>o.dead<0||e-o.dead<.6),this.members.length>this.mesh.instanceMatrix.count&&(this.members.length=this.mesh.instanceMatrix.count)}update(t,e,n,s=1,r=!0,a=null){var h,u,d,f;let o=0;const l=.9+.1*s;this.gait&&(this.gait.uniforms.uTime.value=t);const c=!!this.gait||!!this.player;for(const _ of this.members){const g=this.slots[_.slot];let m,p,x,M,v,R=0,w=_.yaw;if(_.dead<0){m=Math.max(-le+.3,Math.min(le-.3,e+g.x*l)),x=n+g.z*l;const C=t<_.born?0:ar.outBack(Math.min(1,(t-_.born)/.28));M=_.s*s*C;const E=t*11+_.ph;p=r?Math.abs(Math.sin(E))*(c?.05:.1)*s:0,v=r&&!c?Math.sin(E)*.1:0,a!==null&&(w+=Math.atan2(a-m,18)*-.8)}else{const C=t-_.dead;m=_.wx,x=_.wz+C*3,p=2.6*C-6*C*C+.3,M=_.s*s*Math.max(0,1-C/.6),v=C*9,R=C*4}this.e.set(R,w,v),this.q.setFromEuler(this.e),this.p.set(m,Math.max(0,p),x),this.sc.set(M,M,M),this.m4.compose(this.p,this.q,this.sc),this.mesh.setMatrixAt(o,this.m4),(h=this.ink)==null||h.setMatrixAt(o,this.m4),(u=this.gaitA)==null||u.setXY(o,_.ph,_.dead<0&&r?1:0),(d=this.player)==null||d.set(o,_.dead<0&&r?(t*this.rate+_.ph)/(Math.PI*2):0),this.col.setScalar(_.tint),this.hurt>0&&this.col.lerp(r_,this.hurt),this.mesh.setColorAt(o,this.col),this.e.set(0,0,0),this.q.identity();const A=.75*M;this.p.set(m,.02,x),this.sc.set(A,1,A),this.m4.compose(this.p,this.q,this.sc),this.shadows.setMatrixAt(o,this.m4),o++}this.mesh.count=this.shadows.count=o,this.mesh.instanceMatrix.needsUpdate=!0,this.ink&&(this.ink.count=o,this.ink.instanceMatrix.needsUpdate=!0),this.gaitA&&(this.gaitA.needsUpdate=!0),(f=this.player)==null||f.done(),this.shadows.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}front(){return this.members.filter(t=>t.dead<0).map(t=>this.slots[t.slot])}dispose(){var t;this.shadows.geometry.dispose(),this.shadows.material.dispose(),this.mesh.removeFromParent(),(t=this.ink)==null||t.removeFromParent(),this.shadows.removeFromParent()}}const ph={uniform:"#a4ad72",pants:"#5f6b3d",vest:"#6f7b45",pack:"#b09a68",skin:"#e6b48c",helmet:"#86935a",boots:"#3a332b",gun:"#2c2c33"},cc={hip:.5,shoulder:.86,swing:.75,arms:0,rate:11};function l_(i=ph){const t=Uo,e=[{geo:oe(.08,.32,6),color:i.pants,at:[-.085,.3,0],limb:t.legL},{geo:oe(.08,.32,6),color:i.pants,at:[.085,.3,0],limb:t.legR},{geo:kt(.13,.08,.2),color:i.boots,at:[-.085,.04,-.03],limb:t.legL},{geo:kt(.13,.08,.2),color:i.boots,at:[.085,.04,-.03],limb:t.legR},{geo:oe(.15,.24,8),color:i.uniform,at:[0,.7,0]},{geo:kt(.32,.3,.24),color:i.vest,at:[0,.71,.01]},{geo:kt(.26,.3,.14),color:i.pack,at:[0,.76,.18]},{geo:Me(.06,.06,.28,8),color:i.vest,at:[0,.94,.2],rot:[0,0,Math.PI/2]},{geo:It(.11,10,8),color:i.skin,at:[0,.98,-.01]},{geo:Kg(.125,10),color:i.helmet,at:[0,1,0],scale:[1,.85,1.05]},{geo:Me(.13,.13,.025,10),color:i.helmet,at:[0,1,0]},{geo:oe(.05,.22,6),color:i.uniform,at:[-.17,.74,-.08],rot:[1,0,.35]},{geo:oe(.05,.22,6),color:i.uniform,at:[.17,.74,-.08],rot:[1,0,-.35]},{geo:It(.045,6,5),color:i.skin,at:[-.07,.72,-.2]},{geo:It(.045,6,5),color:i.skin,at:[.09,.7,-.22]},{geo:kt(.05,.07,.62),color:i.gun,at:[.03,.74,-.22],rot:[.08,0,0]},{geo:kt(.04,.12,.08),color:i.gun,at:[.03,.66,-.16]}];return dr(e)}const c_={hip:.5,shoulder:.88,swing:.45,arms:.35,rate:5};function h_(i,t={}){const e=Uo;return t.fat?dr([{geo:oe(.105,.3,6),color:i.pants,at:[-.13,.28,0],limb:e.legL},{geo:oe(.105,.3,6),color:i.pants,at:[.13,.28,0],limb:e.legR},{geo:kt(.16,.08,.22),color:i.dark,at:[-.13,.04,.03],limb:e.legL},{geo:kt(.16,.08,.22),color:i.dark,at:[.13,.04,.03],limb:e.legR},{geo:oe(.25,.2,8),color:i.shirt,at:[0,.74,.02],rot:[.18,0,0]},{geo:It(.25,12,9),color:i.shirt,at:[0,.64,.14],scale:[1,.92,.82]},{geo:kt(.13,.15,.05),color:i.skin,at:[.08,.6,.35],rot:[.1,0,.2]},{geo:kt(.36,.08,.3),color:i.pants,at:[0,.47,.06]},{geo:It(.14,10,8),color:i.skin,at:[0,1.06,.1]},{geo:It(.032,5,4),color:"#f2e9c9",at:[-.05,1.08,.23]},{geo:It(.032,5,4),color:"#f2e9c9",at:[.05,1.08,.23]},{geo:kt(.09,.03,.02),color:i.dark,at:[0,1,.235]},{geo:oe(.07,.32,6),color:i.skin,at:[-.3,.84,.2],rot:[1.3,0,.12],limb:e.armL},{geo:oe(.07,.32,6),color:i.skin,at:[.3,.84,.2],rot:[1.3,0,-.12],limb:e.armR},{geo:kt(.22,.14,.22),color:i.shirt,at:[-.29,.88,.03],limb:e.armL},{geo:kt(.22,.14,.22),color:i.shirt,at:[.29,.88,.03],limb:e.armR}]):dr([{geo:oe(.08,.34,6),color:i.pants,at:[-.1,.29,0],limb:e.legL},{geo:oe(.08,.34,6),color:i.pants,at:[.1,.29,0],limb:e.legR},{geo:kt(.13,.07,.2),color:i.dark,at:[-.1,.035,.03],limb:e.legL},{geo:kt(.13,.07,.2),color:i.dark,at:[.1,.035,.03],limb:e.legR},{geo:oe(.17,.26,8),color:i.shirt,at:[0,.72,.04],rot:[.28,0,0]},{geo:kt(.1,.18,.06),color:i.skin,at:[.06,.66,.21],rot:[.28,0,0]},{geo:It(.13,10,8),color:i.skin,at:[0,1,.14]},{geo:It(.03,5,4),color:"#f2e9c9",at:[-.045,1.02,.26]},{geo:It(.03,5,4),color:"#f2e9c9",at:[.045,1.02,.26]},{geo:kt(.08,.025,.02),color:i.dark,at:[0,.95,.265]},{geo:oe(.055,.34,6),color:i.skin,at:[-.19,.82,.22],rot:[1.35,0,.1],limb:e.armL},{geo:oe(.055,.34,6),color:i.skin,at:[.19,.82,.22],rot:[1.35,0,-.1],limb:e.armR},{geo:kt(.2,.12,.2),color:i.shirt,at:[-.19,.86,.05],limb:e.armL},{geo:kt(.2,.12,.2),color:i.shirt,at:[.19,.86,.05],limb:e.armR}])}const hc={hip:.85,shoulder:1.7,swing:.35,arms:.5,rate:3.2},u_={skin:"#c9453a",dark:"#7a2420",belly:"#e0675a",cloth:"#3a2a24",horn:"#efe2c4",band:"#e0a832",eye:"#ffe066"};function f_(i=u_,t={}){const e=Uo,n=[{geo:oe(.2,.5,8),color:i.skin,at:[-.28,.5,0],limb:e.legL},{geo:oe(.2,.5,8),color:i.skin,at:[.28,.5,0],limb:e.legR},{geo:kt(.36,.14,.44),color:i.dark,at:[-.28,.07,.06],limb:e.legL},{geo:kt(.36,.14,.44),color:i.dark,at:[.28,.07,.06],limb:e.legR},{geo:kt(.86,.36,.56),color:i.cloth,at:[0,.92,0]},{geo:It(.62,14,10),color:i.skin,at:[0,1.42,.02],scale:[1.05,.9,.82]},{geo:It(.36,12,8),color:i.belly,at:[0,1.35,.36],scale:[1,.8,.5]},{geo:It(.24,12,10),color:i.skin,at:[0,2,.22]},{geo:kt(.22,.05,.04),color:"#2a1412",at:[0,2.06,.43]},{geo:It(.045,6,5),color:i.eye,at:[-.08,2.03,.43]},{geo:It(.045,6,5),color:i.eye,at:[.08,2.03,.43]},{geo:kt(.2,.06,.05),color:"#f4ecd8",at:[0,1.93,.43]},{geo:he(.07,.34,7),color:i.horn,at:[-.22,2.22,.18],rot:[.2,0,.55]},{geo:he(.07,.34,7),color:i.horn,at:[.22,2.22,.18],rot:[.2,0,-.55]},{geo:It(.24,10,8),color:i.skin,at:[-.66,1.66,.02],limb:e.armL},{geo:It(.24,10,8),color:i.skin,at:[.66,1.66,.02],limb:e.armR},{geo:oe(.17,.62,8),color:i.skin,at:[-.76,1.2,.08],rot:[.15,0,.12],limb:e.armL},{geo:oe(.17,.62,8),color:i.skin,at:[.76,1.2,.08],rot:[.15,0,-.12],limb:e.armR},{geo:Me(.2,.2,.16,10),color:i.band,at:[-.8,.98,.12],limb:e.armL},{geo:Me(.2,.2,.16,10),color:i.band,at:[.8,.98,.12],limb:e.armR},{geo:It(.22,10,8),color:i.dark,at:[-.83,.74,.14],limb:e.armL},{geo:It(.22,10,8),color:i.dark,at:[.83,.74,.14],limb:e.armR}];if(t.muzzle&&n.push({geo:It(.15,10,8),color:i.belly,at:[0,1.93,.42],scale:[1.1,.75,.9]},{geo:It(.05,6,5),color:"#2a1412",at:[0,1.98,.55]},{geo:he(.03,.1,5),color:"#f4ecd8",at:[-.07,1.84,.5],rot:[Math.PI,0,0]},{geo:he(.03,.1,5),color:"#f4ecd8",at:[.07,1.84,.5],rot:[Math.PI,0,0]}),t.shards){const s=t.shards;n.push({geo:he(.16,.6,5),color:s,at:[-.62,1.98,-.05],rot:[-.2,0,.35]},{geo:he(.11,.42,5),color:s,at:[-.78,1.86,.08],rot:[.1,0,.8]},{geo:he(.16,.6,5),color:s,at:[.62,1.98,-.05],rot:[-.2,0,-.35]},{geo:he(.11,.42,5),color:s,at:[.78,1.86,.08],rot:[.1,0,-.8]},{geo:he(.2,.78,5),color:s,at:[0,1.92,-.42],rot:[-.75,0,0]},{geo:he(.14,.52,5),color:s,at:[-.26,1.72,-.5],rot:[-.9,0,.3]},{geo:he(.14,.52,5),color:s,at:[.26,1.72,-.5],rot:[-.9,0,-.3]},{geo:kt(.06,.34,.03),color:i.eye,at:[-.08,1.45,.53],rot:[.3,0,.35]},{geo:kt(.05,.24,.03),color:i.eye,at:[.1,1.36,.52],rot:[.3,0,-.5]})}return t.mane&&n.push({geo:It(.5,12,8),color:i.dark,at:[0,1.82,-.1],scale:[1.3,.7,.9]},{geo:he(.16,.42,6),color:i.dark,at:[-.34,1.98,-.26],rot:[-.6,0,.4]},{geo:he(.16,.42,6),color:i.dark,at:[.34,1.98,-.26],rot:[-.6,0,-.4]},{geo:he(.18,.5,6),color:i.dark,at:[0,2.02,-.36],rot:[-.8,0,0]}),dr(n)}function d_(i,t,e,n,s,r){const a=i.createRadialGradient(t,e,0,t,e,Math.max(n,s));a.addColorStop(0,r),a.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=a,i.save(),i.translate(t,e),i.scale(n/Math.max(n,s),s/Math.max(n,s)),i.translate(-t,-e),i.beginPath(),i.arc(t,e,Math.max(n,s),0,Math.PI*2),i.fill(),i.restore()}function p_(i=le*2+7){return()=>{const n=document.createElement("canvas");n.width=512,n.height=512;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,512,0);r.addColorStop(0,"#5d4640"),r.addColorStop(.16,"#735750"),r.addColorStop(.5,"#7f625a"),r.addColorStop(.84,"#765a52"),r.addColorStop(1,"#5f4842"),s.fillStyle=r,s.fillRect(0,0,512,512);const a=[[120,90,70,120,"rgba(150,118,104,0.22)"],[390,300,60,140,"rgba(150,118,104,0.18)"],[250,430,90,70,"rgba(60,40,36,0.16)"],[60,330,50,110,"rgba(60,40,36,0.2)"],[460,60,40,90,"rgba(60,40,36,0.18)"]];for(const[h,u,d,f,_]of a)for(const g of[-512,0,512])d_(s,h,u+g,d,f,_);const o=512/i,l=Math.max(2,Math.round(.12*o));s.fillStyle="rgba(214,190,176,0.3)";for(let h=16;h<512;h+=128)s.fillRect(512/2-l/2,h,l,52);const c=new ys(n);return c.colorSpace=ge,c.wrapS=Tn,c.wrapT=ms,c.anisotropy=8,c}}const uc={sky:"#e4d6cc",ground:"#56423c",road:{road:"#7f625a",edge:"#5d4640",line:"rgba(0,0,0,0)"},curb:"#56423c",leaf:["#56423c","#56423c"],bounce:"#6a4d44",fov:36,elev:38,fog:["#3b2d2a",60,140],props:"debris",curbs:!1,roadWidth:le*2+3,roadTex:p_(le*2+3)},ci=new Yt,pr=new $e,fc=new ye,dc=new I,mr=new I;new Nt;const m_=new I(0,1,0),ua=new I,pc=new I;new Nt("#ffffff");function Xe(i,t,e){const n=new us(i,t,e);return n.count=0,n.frustumCulled=!1,n.instanceMatrix.setUsage(xs),n}function wn(i,t,e,n,s,r,a,o,l=0,c=0,h=0){return fc.set(l,c,h),pr.setFromEuler(fc),dc.set(e,n,s),mr.set(r,a,o),ci.compose(dc,pr,mr),i.setMatrixAt(t,ci),ci}const Vi=(...i)=>{for(const t of i)t.instanceMatrix.needsUpdate=!0};class g_{constructor(t=96){this.i=0,this.mesh=Xe(new Ye(1,1).rotateX(-Math.PI/2),new fn({map:dh(),transparent:!0,depthWrite:!1}),t)}begin(){this.i=0}add(t,e,n){this.i>=this.mesh.instanceMatrix.count||n<=0||wn(this.mesh,this.i++,t,.03,e,n,1,n*.8)}end(){this.mesh.count=this.i,Vi(this.mesh)}}function mh(i,t){const e=[],n=i.smooth||i.facets?en({flash:!0,flat:i.facets}):ja("#ffffff",{vertexColors:!0,flash:!0});i.gait&&e.push(No(n,{...i.gait,instanced:t}));let s=null;if(i.outline!==!1)if(i.gait){const r=s_({...i.gait,instanced:t},.035);s=r.mat,e.push(r.gait)}else s=Co(.05);return{mat:n,ink:s,gaits:e}}class __{constructor(t=40,e={}){var s,r,a,o;this.meshes=[],this.ink=[],this.flash=[],this.gaitAttrs=[],this.gaits=[],this.dieT=new Map,this.players=[],this.rates=[],this.size=(s=e.size)!=null?s:1,this.deathFlash=(r=e.deathFlash)!=null?r:.8,this.hitFlash=(a=e.hitFlash)!=null?a:.5;const n=(o=e.geos)!=null?o:Jg.map(l=>Zg(l));for(const l of n){const{mat:c,ink:h,gaits:u}=mh(e,!0);this.gaits.push(...u);const d=Xe(l,c,t);this.flash.push(ih(d)),this.gaitAttrs.push(e.gait?Fo(d):null),this.meshes.push(d),this.ink.push(h?Xe(l,h,t):null)}}get objects(){return[...this.ink.filter(t=>!!t),...this.meshes]}reset(){this.dieT.clear()}useBaked(t,e,n,s,r){const a=this.meshes[t];if(!a)return;const o=e.clone();o.setAttribute("aFlash",this.flash[t]),a.geometry=o,a.material=n;const l=this.ink[t];l&&(l.visible=!1),this.ink[t]=null,this.gaitAttrs[t]=null,this.players[t]=s>1?new Do(a,s,fh(e)):null,this.rates[t]=r}sync(t,e,n){var a,o,l,c,h;const s=this.meshes.map(()=>0);for(const u of this.gaits)u.uniforms.uTime.value=e;const r=this.meshes.length;for(const u of t){let d=1;if(u.dead){const x=this.dieT.get(u.id);if(x===void 0){this.dieT.set(u.id,e);continue}if(d=1-(e-x)/.22,d<=0)continue}const f=Math.max(0,Math.min(r-1,u.tier)),_=s[f];if(_>=this.meshes[f].instanceMatrix.count)continue;s[f]++;const g=u.r*this.size*(u.dead?1+(1-d)*.4:1),m=!!this.gaitAttrs[f],p=wn(this.meshes[f],_,u.x,0,u.z,g*(1+u.hit*.08),g*d*(1-u.hit*.1),g,m?-u.hit*.25:0,m?Math.sin(e*1.3+u.id)*.12:Math.sin(e*2+u.id)*.15,m?0:Math.sin(e*7+u.id)*.06);(a=this.ink[f])==null||a.setMatrixAt(_,p),this.flash[f].setX(_,u.dead?this.deathFlash:u.hit*this.hitFlash),(o=this.gaitAttrs[f])==null||o.setXY(_,u.id*1.7,u.dead?0:1),u.dead||(c=this.players[f])==null||c.set(_,(e*((l=this.rates[f])!=null?l:5)+u.id*1.7)/(Math.PI*2)),n.add(u.x,u.z,u.r*(m?1.6:2.2)*d)}for(let u=0;u<r;u++){this.meshes[u].count=s[u];const d=this.ink[u];d&&(d.count=s[u],Vi(d)),this.flash[u].needsUpdate=!0;const f=this.gaitAttrs[u];f&&(f.needsUpdate=!0),(h=this.players[u])==null||h.done(),Vi(this.meshes[u])}}}class v_{constructor(t=jg(),e={}){var a,o;this.dieT=-1,this.player=null,this.rate=3,this.size=(a=e.size)!=null?a:1,this.deathFlash=(o=e.deathFlash)!=null?o:.9;const{mat:n,ink:s,gaits:r}=mh(e,!0);this.gaits=r,this.mesh=Xe(t,n,1),this.flash=ih(this.mesh),this.gaitA=e.gait?Fo(this.mesh):null,this.ink=s?Xe(t,e.gait?s:Co(.03),1):null}get objects(){return this.ink?[this.ink,this.mesh]:[this.mesh]}reset(){this.dieT=-1}useBaked(t,e,n,s){const r=t.clone();r.setAttribute("aFlash",this.flash),this.mesh.geometry=r,this.mesh.material=e,this.ink&&(this.ink.visible=!1),this.gaitA=null,this.player=n>1?new Do(this.mesh,n,fh(t)):null,this.rate=s}sync(t,e,n){var r;let s=0;for(const a of this.gaits)a.uniforms.uTime.value=e;if(t){let a=1;if(t.dead&&(this.dieT<0&&(this.dieT=e),a=1-(e-this.dieT)/.6),a>0){const o=t.r*this.size,l=wn(this.mesh,0,t.x,t.stomp*.6,t.z,o*(1+t.hit*.05),o*a*(1-t.hit*.06),o,-t.stomp*.25,Math.sin(e*1.5)*.08,this.gaitA?0:Math.sin(e*5)*.04);(r=this.ink)==null||r.setMatrixAt(0,l),this.flash.setX(0,t.dead?this.deathFlash:t.hit*.22),this.flash.needsUpdate=!0,this.gaitA&&(this.gaitA.setXY(0,0,t.walking&&!t.dead?1:.15),this.gaitA.needsUpdate=!0),this.player&&(this.player.set(0,t.walking&&!t.dead?e*this.rate/(Math.PI*2):0),this.player.done()),n.add(t.x,t.z,t.r*2.4*a),s=1}}this.mesh.count=s,this.ink&&(this.ink.count=s,Vi(this.ink)),Vi(this.mesh)}}function en(i={}){const t=i.map?new si({color:"#ffffff",map:i.map,flatShading:!!i.flat,...i.lift?{emissiveMap:i.map,emissive:new Nt(i.lift,i.lift,i.lift)}:{}}):new si({color:"#ffffff",vertexColors:!0,flatShading:!!i.flat});return i.flash&&(t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aFlash;
varying float vFlash;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlash = aFlash;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vFlash;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0, 0.95, 0.9), vFlash);`)},t.customProgramCacheKey=()=>"lflash"),t}class x_{constructor(t=Qg(),e=40,n=vg("#ffffff",{vertexColors:!0})){this.list=[],this.across=2.1,this.along=1.7,this.mesh=Xe(t,n,e)}get objects(){return[this.mesh]}clear(){this.list=[]}get full(){return this.list.length>=this.mesh.instanceMatrix.count}fire(t,e,n,s,r,a,o,l=1){if(this.full)return;const c=Math.hypot(s-t,a-n);this.list.push({x0:t,y0:e,z0:n,x1:s,y1:r,z1:a,t0:o,dur:Math.min(.24,.05+c/110),s:l})}sync(t){let e=0;this.list=this.list.filter(n=>t<n.t0+n.dur);for(const n of this.list){if(t<n.t0)continue;const s=(t-n.t0)/n.dur;ua.set(n.x0+(n.x1-n.x0)*s,n.y0+(n.y1-n.y0)*s,n.z0+(n.z1-n.z0)*s),pc.set(n.x1,n.y1,n.z1),ci.lookAt(ua,pc,m_),pr.setFromRotationMatrix(ci),mr.set(this.across*n.s,this.across*n.s,this.along*n.s),ci.compose(ua,pr,mr),this.mesh.setMatrixAt(e++,ci)}this.mesh.count=e,Vi(this.mesh)}}function Sn(i,t,e,n){const s=[];for(const r of e?[e,t]:[t]){const a=new us(i,r,Math.max(1,n.length));n.forEach((o,l)=>a.setMatrixAt(l,o)),a.count=n.length,a.computeBoundingSphere(),s.push(a)}return s}const mc=Math.PI/180,gc=50;class M_{constructor(t,e,n=1,s=!1){var F,W,Q,q;this.scene=new q0,this.camera=new We(gc,1,.5,260),this.disposables=[],this.camPos=new I,this.camLook=new I,this.placed=!1,this.squadLow=.58,this.fit=10,this.elev=36,this.side=0,this.lift=0,this.look=new I;const r=this.scene;if(r.background=new Nt(t.fog?t.fog[0]:t.sky),r.fog=t.fog?new cr(t.fog[0],t.fog[1],t.fog[2]):new cr(t.sky,75,160),this.elev=(F=t.elev)!=null?F:36,this.camera.fov=(W=t.fov)!=null?W:gc,this.camera.updateProjectionMatrix(),this.sun=Mg(r,t.sky,(Q=t.bounce)!=null?Q:"#8a7a6a"),s)return;const a=e+140,o=new Ye(260,a+120).rotateX(-Math.PI/2),l=new si({color:t.ground}),c=new Oe(o,l);c.position.set(0,-.05,-a/2+40),r.add(c);const h=t.roadTex?t.roadTex():i_(t.road);h.repeat.set(1,a/16);const u=new Ye((q=t.roadWidth)!=null?q:le*2+.9,a).rotateX(-Math.PI/2),d=new si({map:h}),f=new Oe(u,d);f.position.set(0,0,-a/2+40),r.add(f);const _=new Xn(.4,.22,a),g=ja(t.curb);for(const j of t.curbs===!1?[]:[-1,1]){const P=new Oe(_,g);P.position.set(j*(le+.65),.11,-a/2+40),r.add(P)}if(this.disposables.push(o,l,h,u,d,_,g),t.props==="debris"){this.debris(t,a,n);return}if(t.props==="canyon"){this.canyon(t,a,n);return}const m=li(n*977+13),p=[],x=[],M=[],v=new Yt,R=new $e,w=new ye,A=(j,P,X,J)=>{w.set(0,m()*6.28,0),R.setFromEuler(w),j.push(v.clone().compose(new I(P,0,X),R,new I(J,J,J)))};for(let j=20;j>-a+30;j-=9+m()*12){const P=m()<.5?-1:1,X=P*(le+2.4+m()*4),J=m();if(J<.55){const rt=1+Math.floor(m()*3);for(let St=0;St<rt;St++)A(p,X+P*St*1.9+(m()-.5),j+(m()-.5)*3,1+m()*.6)}else J<.8?A(x,X,j,1+m()*.5):A(M,X+P,j,.6+m()*.6);m()<.35&&A(p,-P*(le+6+m()*6),j-4,1.2+m()*.5)}const C=Co(.06),E=t_(t.leaf[0],t.leaf[1]),S=n_(),L=e_(),k=ja("#ffffff",{vertexColors:!0});r.add(...Sn(E,k,C,p),...Sn(S,k,C,x),...Sn(L,k,C,M)),this.disposables.push(C,E,S,L,k)}debris(t,e,n){var m,p;const s=li(n*577+7),r=((m=t.roadWidth)!=null?m:le*2+.9)/2,a=new si({color:"#ffffff",vertexColors:!0}),o=Re([{geo:kt(.55,.28,1),color:"#a39a8e",at:[0,.14,0]},{geo:kt(.5,.04,1),color:"#bfb7aa",at:[0,.29,0]}]),l=new Yt,c=new $e,h=new ye,u=[-1,1].map(x=>l.clone().compose(new I(x*(r+.2),0,-e/2+40),c.identity().clone(),new I(1,1,e))),d=[Re([0,1,2].map(x=>({geo:new hr(.42,.17,6,12),color:x===1?"#3d3836":"#34302f",at:[x%2*.06,.17+x*.33,x%2*.05],rot:[Math.PI/2,0,0]})).concat([{geo:new hr(.42,.17,6,12),color:"#3a3533",at:[.95,.45,.2],rot:[.3,.2,1.2]}])),Re([{geo:Me(.34,.34,.95,12),color:"#a9583a",at:[0,.48,0]},{geo:Me(.36,.36,.07,12),color:"#7d3c26",at:[0,.3,0]},{geo:Me(.36,.36,.07,12),color:"#7d3c26",at:[0,.68,0]},{geo:Me(.34,.34,.95,12),color:"#4f7598",at:[.72,.48,.25]},{geo:Me(.36,.36,.07,12),color:"#3a5a78",at:[.72,.68,.25]},{geo:Me(.34,.34,.95,12),color:"#9a5136",at:[.3,.34,-.9],rot:[0,0,Math.PI/2]}]),Re([...[-.95,0,.95].map(x=>({geo:It(1,10,7),color:x===0?"#c9b18a":"#bea57e",at:[x,.22,0],scale:[.52,.24,.34]})),...[-.48,.48].map(x=>({geo:It(1,10,7),color:"#d2bb94",at:[x,.62,.02],scale:[.5,.22,.32]}))]),Re([{geo:kt(.16,1.2,.16),color:"#7c5b3c",at:[-1,.6,0]},{geo:kt(.16,.9,.16),color:"#73553a",at:[1,.45,0],rot:[0,0,-.15]},{geo:kt(2.3,.2,.07),color:"#8d6a47",at:[0,.82,.08],rot:[0,0,.06]},{geo:kt(2.1,.2,.07),color:"#7f6040",at:[.2,.08,.5],rot:[Math.PI/2,.4,0]}]),Re([{geo:kt(1.9,.62,4.1),color:"#738a83",at:[0,.6,0]},{geo:kt(1.62,.62,2),color:"#6a7f78",at:[0,1.2,-.25]},{geo:kt(1.66,.42,1.9),color:"#2e3236",at:[0,1.22,-.25]},{geo:kt(1.2,.08,1.3),color:"#9a5a3a",at:[.2,.93,1.3]},...[[-.92,1.3],[.92,1.3],[-.92,-1.35],[.92,-1.35]].map(([x,M])=>({geo:Me(.36,.36,.26,10),color:"#2d2a29",at:[x,.3,M],rot:[0,0,Math.PI/2]}))]),Re([{geo:kt(1.7,.85,.7),color:"#aaa49a",at:[0,.42,0]},{geo:kt(1.5,.08,.5),color:"#c4beb4",at:[0,.88,0]},{geo:kt(1.2,.7,.6),color:"#a29c92",at:[1.1,.35,.9],rot:[0,.7,0]}])],f=d.map(()=>[]),_=(x,M,v,R,w=1)=>{h.set(0,R,0),f[x].push(l.clone().compose(new I(M,0,v),c.setFromEuler(h).clone(),new I(w,w,w)))};let g=s()<.5?-1:1;for(let x=6;x>-e+30;x-=9+s()*9){s()<.7&&(g=-g);const M=g*(r+1+s()*1.4),v=Math.floor(s()*d.length);if(v===4?_(4,M+g*.9,x,(s()-.5)*1.1+(s()<.5?0:Math.PI)):_(v,M,x,s()*6.28,.95+s()*.3),s()<.45){const R=(v+1+Math.floor(s()*3))%d.length;R!==4&&_(R,M+g*(1.6+s()),x-1.5-s()*1.5,s()*6.28,.9+s()*.3)}}if(this.scene.add(...Sn(o,a,null,u)),this.disposables.push(a,o,...d),(p=t.junk)!=null&&p.length){const x=t.junk,M=x.map(()=>[]),v=li(n*811+3);let R=v()<.5?-1:1;for(let w=6;w>-e+30;w-=9+v()*9){v()<.7&&(R=-R);const A=Math.floor(v()*x.length),C=R*(r+(x[A].big?2.2:1.3)+v()*1.2);h.set(0,x[A].big?(v()-.5)*1.1+(v()<.5?0:Math.PI):v()*6.28,0);const E=.9+v()*.25;M[A].push(l.clone().compose(new I(C,0,w),c.setFromEuler(h).clone(),new I(E,E,E)))}x.forEach((w,A)=>{M[A].length&&this.scene.add(...Sn(w.geometry,w.material,null,M[A]))});return}d.forEach((x,M)=>{f[M].length&&this.scene.add(...Sn(x,a,null,f[M]))})}canyon(t,e,n){var m,p,x;const s=li(n*331+17);if((m=t.junk)!=null&&m.length){const M=new Yt,v=new $e,R=new ye,w=((p=t.roadWidth)!=null?p:le*2+.9)/2,A=t.junk,C=A.map(()=>[]);for(const E of[-1,1])for(let S=12-s()*5;S>-e+20;S-=4.5+s()*4){const L=Math.floor(s()*A.length),k=E*(w+(A[L].big?1.6:.7)+s()*1.2);R.set(0,s()*6.28,0);const F=.85+s()*.45;C[L].push(M.clone().compose(new I(k,0,S),v.setFromEuler(R).clone(),new I(F,F,F)))}A.forEach((E,S)=>{C[S].length&&this.scene.add(...Sn(E.geometry,E.material,null,C[S]))});return}const r=[],a=[],o=new Yt,l=new $e,c=new ye,h=((x=t.roadWidth)!=null?x:le*2+.9)/2,u=(M,v,R,w,A)=>{c.set(0,s()*6.28,0),l.setFromEuler(c),M.push(o.clone().compose(new I(v,0,R),l,new I(w,A,w)))};for(const M of[-1,1])for(let v=14-s()*6;v>-e+20;v-=5+s()*7){const R=M*(h+.2+s()*1.2),w=1.2+s()*1.1;u(r,R+M*w*.6,v,w,w*(.7+s()*.5)),s()<.45&&u(r,R+M*(w+.9),v-1.4,w*.7,w*.6),s()<.7&&u(a,R-M*.2+(s()-.5),v+1.3+s(),.8+s()*.5,.8+s()*.4)}const d=new To(.75,0).translate(0,.45,0),f=new yr(.62,1).scale(1.2,.85,1.1).translate(0,.42,0),_=new si({color:"#9a6b49",flatShading:!0}),g=new si({color:t.leaf[0]});this.scene.add(...Sn(d,_,null,r),...Sn(f,g,null,a)),this.disposables.push(d,f,_,g)}follow(t,e,n,s,r=1,a=0,o=0){this.lift+=(o-this.lift)*(1-Math.exp(-n*5));const l=Math.tan(this.camera.fov/2*mc),c=l*Math.max(.3,s),h=this.fit*r,u=Math.max(14,Math.min(32,h/(2*c))),d=this.elev*mc,f=u*Math.sin(d),_=u*Math.cos(d),g=d-Math.atan(this.squadLow*l),m=f/Math.tan(g)-_+a,p=t*.45+this.side,x=e+_,M=t*.3-this.side*.5,v=e-m;if(!this.placed)this.camPos.set(p,f,x),this.camLook.set(M,0,v),this.placed=!0;else{const R=1-Math.exp(-n*7),w=1-Math.exp(-n*14);this.camPos.x+=(p-this.camPos.x)*R,this.camPos.y+=(f-this.camPos.y)*R,this.camPos.z+=(x-this.camPos.z)*w,this.camLook.x+=(M-this.camLook.x)*R,this.camLook.z+=(v-this.camLook.z)*w}this.camera.position.copy(this.camPos),this.camera.position.y+=this.lift,this.look.copy(this.camLook),this.look.y+=this.lift,this.camera.lookAt(this.look),this.camera.updateMatrixWorld(),this.sun.position.set(t-6,14+this.lift,e+8),this.sun.target.position.set(t,this.lift,e)}shake(t,e){!t&&!e||(this.camera.position.x+=t,this.camera.position.y+=e,this.camera.updateMatrixWorld())}own(...t){this.disposables.push(...t)}dispose(){for(const t of this.disposables)t.dispose();this.disposables=[],this.scene.clear()}}const S_=""+new URL("car-Cwjpa98z.bin",import.meta.url).href,y_=""+new URL("car-DMfiBC8q.webp",import.meta.url).href,E_=""+new URL("drum-DV0LmFIR.bin",import.meta.url).href,b_=""+new URL("drum-BKSlbYSs.webp",import.meta.url).href,w_=""+new URL("junk-CtR5WIQR.bin",import.meta.url).href,T_=""+new URL("junk-t2SH5CUU.webp",import.meta.url).href,A_=""+new URL("ogre-CpZ2PrQ8.bin",import.meta.url).href,C_=""+new URL("ogre-CGAhDtiM.webp",import.meta.url).href,R_=""+new URL("soldier-Dj64xOg4.bin",import.meta.url).href,P_=""+new URL("soldier-D-Y5CCe3.webp",import.meta.url).href,L_=""+new URL("zombie-fat-BY8Tq8sg.bin",import.meta.url).href,I_=""+new URL("zombie-fat-DwMg3lMu.webp",import.meta.url).href,D_=""+new URL("zombie-thin-Bn0QEmLb.bin",import.meta.url).href,U_=""+new URL("zombie-thin-Bt68ioXc.webp",import.meta.url).href,rr={good:"#22b8ff",bad:"#ff3d55",fire:"#ffb21e"},N_=1.2,_c=.7,vc=.62,gh=1.6,F_=1.55,_h=.8,Js=7.5,O_=.74*gh,z_=2.35,ro=[{c:{skin:"#c3c8b8",shirt:"#d6d4c9",pants:"#5c6670",dark:"#3a4148"},fat:!1},{c:{skin:"#cfc4b8",shirt:"#97bdec",pants:"#454c5c",dark:"#2a2e36"},fat:!0},{c:{skin:"#ff9a52",shirt:"#d9532f",pants:"#6a2f1e",dark:"#2a120c"},fat:!1}],B_=[[0,0],[-.66,-.42],[.62,-.5],[.05,-1.02]],vh=(...i)=>{for(const t of i)t.instanceMatrix.needsUpdate=!0},Zs=new Nt("#ffffff");class k_{world=null;crowd;root=new hs;gates=new $_(48);mobs=new __(60,{geos:ro.map(t=>h_(t.c,{fat:t.fat})),smooth:!0,outline:!1,gait:{...c_,rate:Js,swing:.55},size:2,deathFlash:.15,hitFlash:.18});boss=new v_(f_(),{smooth:!0,outline:!1,gait:hc,size:_h,deathFlash:.35});shots;shadows=new g_(140);drums;drumLen=1.4;maxHp=1;passT=new Map;stompT=-9;constructor(){this.crowd=new o_(l_({...ph,uniform:"#b6bf82",pants:"#707c4b",vest:"#818d54",helmet:"#98a56a"}),en(),null,30,cc),this.crowd.add(this.root),this.drums=Xe(W_(),en(),60);const t=Re([{geo:oe(.05,1.6,6),color:"#ffc864",rot:[Math.PI/2,0,0]}]);this.shots=new x_(t,40,new fn({color:"#ffffff",vertexColors:!0,transparent:!0,opacity:.95,blending:or,depthWrite:!1})),this.shots.across=1.5,this.shots.along=1.25,this.root.add(this.shadows.mesh,this.drums,...this.mobs.meshes,...this.boss.objects,...this.gates.objects,...this.shots.objects),this.loadModels()}loadModels(){const t=e=>console.warn("model",e);Qn(R_,P_).then(e=>{var n;return this.crowd.useBaked(e.geometry,en({map:e.texture}),e.frames,(n=cc.rate)!=null?n:11)},t),Qn(D_,U_).then(e=>{this.mobs.useBaked(0,e.geometry,en({flash:!0,map:e.texture}),e.frames,Js);const n=en({flash:!0,map:e.texture});n.color.set("#ffa468"),this.mobs.useBaked(2,e.geometry,n,e.frames,Js)},t),Qn(L_,I_).then(e=>this.mobs.useBaked(1,e.geometry,en({flash:!0,map:e.texture}),e.frames,Js),t),Qn(A_,C_).then(e=>{var n;return this.boss.useBaked(e.geometry,en({flash:!0,map:e.texture}),e.frames,(n=hc.rate)!=null?n:3.2)},t),Qn(E_,b_).then(e=>{this.drums.geometry=e.geometry,this.drums.material=en({map:e.texture}),this.drumLen=e.size.x},t),Promise.all([Qn(w_,T_),Qn(S_,y_)]).then(([e,n])=>{uc.junk=[{geometry:e.geometry,material:en({map:e.texture})},{geometry:n.geometry,material:en({map:n.texture}),big:!0}]},t)}load(t,e){var n;(n=this.world)==null||n.dispose(),this.world=new M_(uc,t.end+40,e),this.world.fit=6.6,this.world.scene.add(this.root),this.shots.clear(),this.mobs.reset(),this.boss.reset(),this.maxHp=Math.max(1,...t.mobs.map(s=>s.hp0)),this.passT.clear(),this.stompT=-9,this.crowd.set(0,0,0,0)}stomp(t){this.stompT=t}fire(t,e,n,s,r,a){const o=li(Math.floor(e*1e3)),l=this.crowd.front();for(let c=0;c<a;c++){const h=l.length?l[Math.floor(o()*l.length)]:{x:0,z:0};this.shots.fire(t.x+h.x,O_,-t.z+h.z-.5,n+(o()-.5)*.6,s+(o()-.5)*.5,r,e+c*.03)}}kindOf(t){return t>=.66*this.maxHp?2:t>=.33*this.maxHp?1:0}sync(t,e,n,s){const r=this.world,a=-t.z,o=t.boss,l=t.phase==="boss"||t.phase!=="run"&&o.awake;r.follow(t.x,a,n,s,l?1.18:1,l?1.5:0);const c=gh*(t.n>300?Math.min(1.15,1+.04*Math.log2(t.n/300)):1);this.crowd.set(t.phase==="lost"?0:t.n,e,t.x,a);const h=t.mobs.filter(f=>!f.dead&&!f.gone&&f.z-t.z<26).sort((f,_)=>f.z-_.z)[0];this.crowd.update(e,t.x,a,c,t.phase==="run",h?h.x:null),this.gates.sync(t.rows.filter(f=>f.z-t.z<95).map(f=>{var _;return{z:-f.z,k:f.k,passAge:f.passed?e-((_=this.passT.get(f.i))!=null?_:e):-1,choice:f.choice,gates:f.gates.map(g=>g?{color:V_(g),swell:1+.08*Math.sin(Math.PI*Math.min(1,Math.max(0,(t.t-g.bumpT)/.18)))}:null)}})),this.shadows.begin();let u=0;for(const f of t.walls){if(f.z-t.z>95||f.z-t.z<-6)continue;const _=f.hit&&t.z-f.z<2?Math.min(1,(t.z-f.z)/2):0;for(const[g,m]of f.spans){const p=m-g-.15,x=Math.max(1,Math.round(p/1.45));for(let M=0;M<x&&u<60;M++){const v=g+.075+(M+.5)*(p/x);wn(this.drums,u++,v,0,-f.z,p/x/this.drumLen,1,1,_*.5),this.shadows.add(v,-f.z,1.3)}}}this.drums.count=u,vh(this.drums);const d=[];for(const f of t.mobs){if(f.gone||f.z-t.z>95||f.z-t.z<-6)continue;const _=this.kindOf(f.hp0),g=Math.max(0,1-(t.t-f.hitT)/.12),m=f.r<.75?2:f.r<1.3?3:4,p=.55+.45*f.r;for(let x=0;x<m;x++){const M=(f.id*7+x*13)%10/10,[v,R]=B_[x],w=F_*(.92+.16*M)*(1+.06*Math.min(1,(f.r-.55)/1.45));d.push({id:f.id*8+x,x:f.x+(v+(M-.5)*.25)*p,z:-f.z+R*p,r:w/2,tier:_,hit:g,dead:f.dead})}}this.mobs.sync(d,e,this.shadows),this.boss.sync(o.z-t.z<95?{x:o.x,z:-o.z,r:o.r,hit:Math.max(0,1-(t.t-o.hitT)/.12),dead:o.dead,stomp:Math.max(0,1-(e-this.stompT)/.35),walking:o.awake}:null,e,this.shadows),this.shadows.end(),this.shots.sync(e)}}function H_(i){const t=ro[Math.max(0,Math.min(ro.length-1,i))].c;return[t.skin,t.shirt,"#ffffff"]}const G_=2.3*_h;function V_(i){return i.fire?rr.fire:to(i.op)?rr.good:rr.bad}function W_(){const t=[0,0,Math.PI/2],e=[{geo:Me(.42,.42,1.3,14),color:"#86ab99",at:[0,.62,0],rot:t},{geo:Me(.46,.46,.1,14),color:"#5b7e6e",at:[-.62,.62,0],rot:t},{geo:Me(.46,.46,.1,14),color:"#5b7e6e",at:[.62,.62,0],rot:t},{geo:Me(.44,.44,.09,14),color:"#668a79",at:[0,.62,0],rot:t}];for(const[n,s]of[[-.32,0],[.32,Math.PI/5]])for(let r=0;r<5;r++){const a=s+r*2*Math.PI/5;e.push({geo:he(.12,.42,6),color:"#dfe7e1",at:[n,.62+Math.cos(a)*.62,Math.sin(a)*.62],rot:[a,0,0]})}return Re(e)}function X_(){const i=document.createElement("canvas");i.width=8,i.height=128;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"rgba(255,255,255,0.75)"),e.addColorStop(.1,"rgba(255,255,255,0.4)"),e.addColorStop(.3,"rgba(255,255,255,0.24)"),e.addColorStop(.62,"rgba(255,255,255,0.3)"),e.addColorStop(.86,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0.92)"),t.fillStyle=e,t.fillRect(0,0,8,128);const n=new ys(i);return n.colorSpace=ge,n}function q_(){const i=document.createElement("canvas");i.width=8,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"rgba(255,255,255,0.75)"),e.addColorStop(.35,"rgba(255,255,255,0.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,8,64);const n=new ys(i);return n.colorSpace=ge,n}class $_{panes;lids;bars;spill;glare;constructor(t=48){const e=(s,r=1)=>new fn({color:"#ffffff",map:s,transparent:!0,opacity:r,depthWrite:!1,side:cn}),n=s=>new fn({color:"#ffffff",map:s,transparent:!0,depthWrite:!1,blending:or});this.panes=Xe(new Ye(1,1),e(X_()),t),this.lids=Xe(new Ye(1,1).rotateX(-Math.PI/2),e(null,.3),t),this.bars=Xe(new Xn(1,1,1),n(null),t*4),this.spill=Xe(new Ye(1,1).rotateX(-Math.PI/2),n(q_()),t),this.glare=Xe(new Ye(1,1),n(null),8);for(const s of[this.panes,this.lids,this.bars,this.spill,this.glare])s.instanceColor=new fi(new Float32Array(s.instanceMatrix.count*3).fill(1),3);this.spill.renderOrder=1,this.lids.renderOrder=2,this.panes.renderOrder=3,this.bars.renderOrder=4,this.glare.renderOrder=5}get objects(){return[this.spill,this.lids,this.panes,this.bars,this.glare]}sync(t){let e=0,n=0,s=0;const r=new Nt;for(const a of t){const o=a.passAge;if(o>.32)continue;const l=Ro(a.k);a.gates.forEach((c,h)=>{if(!c||e>=this.panes.instanceMatrix.count)return;const[u,d]=l[h],f=o>=0&&a.choice===h,_=f?1+.12*Math.sin(Math.PI*Math.min(1,o/.3)):1,g=o<0?1:f?1-Math.max(0,(o-.16)/.16):1-Math.min(1,o/.25)**2,m=f?Math.max(0,1-o/.3):0;if(g<=.01)return;const p=(u+d)/2,x=(d-u-.12)*c.swell*_,M=N_*g*c.swell*_,v=a.z+_c/2;wn(this.panes,e,p,M/2,v,x,M,1),wn(this.lids,e,p,M,a.z,x,1,_c),wn(this.spill,e,p,.02,v+.55,x,1,1.1),r.set(c.color).lerp(Zs,.45*m),this.panes.setColorAt(e,r),r.set(c.color).lerp(Zs,.3+.6*m),this.lids.setColorAt(e,r),r.set(c.color).multiplyScalar(.8+.8*m),this.spill.setColorAt(e,r),m>0&&s<8&&(wn(this.glare,s,p,M/2,v+.02,x,M,1),r.set(c.color).lerp(Zs,.12).multiplyScalar(.85*m),this.glare.setColorAt(s++,r)),e++,r.set(c.color).lerp(Zs,.22+.6*m);const R=.08*(1+m);for(const[w,A,C,E,S,L]of[[p,M,v,x,R,R],[p,.05,v,x,R*1.5,R*1.5],[p-x/2,M/2,v,R,M,R],[p+x/2,M/2,v,R,M,R]])wn(this.bars,n,w,A,C,E,S,L),this.bars.setColorAt(n++,r)})}this.panes.count=this.lids.count=this.spill.count=e,this.bars.count=n,this.glare.count=s,vh(this.panes,this.lids,this.spill,this.bars,this.glare);for(const a of[this.panes,this.lids,this.bars,this.spill,this.glare])a.instanceColor&&(a.instanceColor.needsUpdate=!0)}}let js=null;const Y_=()=>js!=null?js:js=new k_;let xh=null;const xc=new Map,K_=i=>{let t=7;for(const e of i)t=t*31+e.charCodeAt(0)>>>0;return t};function J_(i){let t=null,e=0,n=-1;const s={sfx:{play(){}},buzz(){},levelId:"demo"};return(r,a,o)=>{(!t||xh!==t||n>=0&&o-n>1.2)&&(t=Mh(i,s,!0),t.auto=!0,n=-1,e=o),t.step(Math.min(.05,Math.max(0,o-e))),e=o,t.state!=="play"&&n<0&&(n=o),t.draw(r,a,o)}}function Mh(i,t,e=!1){const n=oc(i),s=Y_();s.load(n,K_(t.levelId)),s.world.squadLow=e?.12:.42;const r=new Tg,a=new Gh,o=new Ag;let l=-9,c="play",h=0,u=0,d=-1,f=!1;const _=.5;let g=-9,m=1,p=-9,x={x:0,y:0,w:360,h:640},M={x:180,y:480},v=-1,R=-1,w=-1,A=null,C=0,E=0,S=-9;e||(ri.on=!1);const L=()=>{let P=xc.get(t.levelId);return P===void 0&&(P=lc(oc(i)).bestOutcome.score,xc.set(t.levelId,P)),P},k=()=>{const P=A&&n.rows.some(X=>X.passed&&A[X.i]!==X.choice);return(!A||P)&&(A=lc(uh(n)).best),A},F=(P,X,J)=>wg(s.world.camera,x,P,X,J);function W(P){switch(P.e){case"gate":{const X=n.rows[P.row].gates[P.slot];s.passT.set(P.row,u);const J=P.after>=P.before,rt=F(n.x,.05,-n.z);o.ring(rt.x,rt.y,Fe(s.world.camera,x,rt.depth)*2.4,P.fire?"#ffc94a":J?"#5dff7a":"#ff4a4a",.6),J||(l=u);const St=P.before>0?P.after/P.before:2;P.fire?p=u:(g=u,m=Math.max(St,1));const Ft=M,$=Qa(X.op);a.float(Ft.x,Ft.y-40,$,J?"#ffffff":"#ff8a8a",me(22+9*Math.log2(Math.max(1,St)),22,46),1),t.sfx.play(J?"coin":"hiss",J?me(.9+.12*Math.log2(St),.9,1.5):1),J&&St>=2&&t.sfx.play("star",.8+Math.min(.6,St*.08)),t.buzz(J?"light":"medium"),v===P.row&&(w=-1);break}case"shot":{C++;let X=0,J=1,rt=0;if(P.kind==="mob"){const $=n.mobs[P.ref];X=$.x,J=$.r*.9,rt=-$.z}else if(P.kind==="boss")X=n.boss.x,J=n.boss.r,rt=-n.boss.z;else{const $=n.rows[P.ref];X=ur($.k,P.slot),J=vc,rt=-$.z}s.fire(n,u,X,J,rt,C%2?1:Math.min(3,1+Math.floor(n.n/12)));const St=F(X,J,rt);St.depth>0&&o.spark(St.x,St.y,me(Fe(s.world.camera,x,St.depth)*.5,7,18));const Ft=s.crowd.front();if(Ft.length){const $=Ft[C%Ft.length],tt=F(n.x+$.x,1.2,-n.z+$.z-.6);tt.depth>0&&o.muzzle(tt.x,tt.y,me(Fe(s.world.camera,x,tt.depth)*.35,6,14))}C%2===0&&t.sfx.play("click",.55+C%3*.05);break}case"kill":{const X=n.mobs[P.mob];E++,S=u,e||on.set("gs-kills","pop",String(E));const J=F(X.x,.8,-X.z),rt=Fe(s.world.camera,x,Math.max(1,J.depth));s.kindOf(X.hp0)===2?o.fireball(J.x,J.y,rt*1.1):o.puff(J.x,J.y,rt*(1.1+.3*X.r),4,H_(s.kindOf(X.hp0))[1]==="#97bdec"?"#dfe6ee":"#e9e4dc"),t.sfx.play("poof",1+Math.random()*.2),a.shake(2);break}case"eat":case"bossEat":{const X=M;a.float(X.x,X.y-30,`−${an(P.lost)}`,"#ff6b6b",me(24+4*Math.log2(P.lost+1),24,44),1),l=u;const J=F(n.x,.05,-n.z);o.ring(J.x,J.y,Fe(s.world.camera,x,J.depth)*2.6,"#ff4a4a",.5),t.sfx.play("thud"),t.buzz("heavy"),a.shake(7);break}case"wall":{const X=M;a.float(X.x,X.y-30,`−${an(P.lost)}`,"#ff6b6b",28,1),l=u;const J=n.walls[P.wall],rt=F(n.x,.6,-J.z);rt.depth>0&&o.puff(rt.x,rt.y,Fe(s.world.camera,x,rt.depth)*1.2,3,"#b9a58a"),t.sfx.play("thud",.8),t.buzz("medium"),a.shake(5);break}case"gateUp":t.sfx.play("pop",1.4);break;case"arena":t.sfx.play("thud",.6),a.shake(4);break;case"stomp":{s.stomp(u),l=u;const X=F(n.boss.x,.05,-n.boss.z);X.depth>0&&o.ring(X.x,X.y,Fe(s.world.camera,x,X.depth)*4.5,"#d9c29a",.6);const J=M;a.float(J.x,J.y-30,`−${an(P.lost)}`,"#ff6b6b",30,1),t.sfx.play("thud",.5),t.buzz("heavy"),a.shake(10);break}case"bossDown":{const X=n.boss,J=F(X.x,X.r*1.2,-X.z),rt=Fe(s.world.camera,x,Math.max(1,J.depth));o.fireball(J.x,J.y,rt*X.r*2.4),o.fireball(J.x-rt*2.6,J.y+rt*1.2,rt*X.r*1.3),o.fireball(J.x+rt*2.8,J.y+rt*.6,rt*X.r*1.2),t.sfx.play("poof",.7),t.sfx.play("star",1.2),a.shake(12);break}case"end":d=u+(P.won?1.2:.8);break}}function Q(P,X){var U;x=X;const J=s.world;if(s.sync(n,u,1/60,X.w/X.h),J.shake(a.ox*.02,a.oy*.02),!Eg(P,X,J.scene,J.camera)){Fi(P,20,240,320,120,18,"#fffcf6",Ke,3),bn(P,"这台设备打不开 3D",180,285,22,"#221f2e","#fffcf6"),bn(P,yg().slice(0,40),180,320,13,"#8a8496","#fffcf6");return}const rt=J.camera,St=F(n.x,0,-n.z),Ft=Fe(rt,X,St.depth);r.mpu=1/Ft,r.x0=F(0,0,-n.z).x,M={x:St.x,y:St.y-Ft*1.3},s.crowd.hurt=me(1-(u-l)/.3)*.85;for(const N of n.mobs){if(N.dead||N.gone||N.z-n.z>80||s.kindOf(N.hp0)!==2)continue;const K=F(N.x,1,-N.z);K.depth>0&&Cg(P,K.x,K.y,Fe(rt,X,K.depth)*(1.2+.4*N.r),u,N.id)}for(const N of n.rows)N.passed||N.z-n.z>80||N.gates.forEach((K,it)=>{if(!K)return;const dt=F(ur(N.k,it),vc,-N.z);if(dt.depth<=0)return;const mt=Fe(rt,X,dt.depth),Vt=la(n.t-K.bumpT,1.4),D=me(mt*1.05,15,46)*Vt,ee=Qa(K.op);if(K.fire?(Ql(P,dt.x-D*.95,dt.y,D*.9),bn(P,ee,dt.x+D*.25,dt.y,D,"#fff6d6","#5a3200")):(K.shoot&&Z_(P,dt.x,dt.y-D*.95,D*.32),bn(P,ee,dt.x,dt.y,D,"#ffffff",to(K.op)?ao:Mc)),v===N.i&&R===it&&u<w){const Rt=.5+.5*Math.sin(u*7);P.lineWidth=3,P.strokeStyle=`rgba(255,236,120,${.45+.4*Rt})`,P.beginPath(),P.arc(dt.x,dt.y,D*(1.15+.12*Rt),0,Math.PI*2),P.stroke(),sc(P,dt.x+D*.35,dt.y+D*(.55+.35*Rt),me(D*1.9,46,70),-.35)}});for(const N of n.walls)if(!(N.done||N.z-n.z>70))for(const[K,it]of N.spans){const dt=F((K+it)/2,1.75,-N.z);if(dt.depth<=0)continue;const mt=Fe(rt,X,dt.depth);oa(P,`−${N.cost}`,dt.x,dt.y,me(mt*.5,15,20),"#ff5468")}const $=n.mobs.filter(N=>!N.dead&&!N.gone&&N.z-n.z<75).sort((N,K)=>K.z-N.z);for(const N of $){const K=F(N.x,z_,-N.z);if(K.depth<=0)continue;const it=Fe(rt,X,K.depth);Sc(P,an(Math.ceil(N.hp)),K.x,K.y,me(it*.62,15,24)*(1+.15*Math.max(0,1-(n.t-N.hitT)/.12)))}const tt=n.boss;if(!tt.dead&&tt.z-n.z<90){const N=F(tt.x,tt.r*G_+.6,-tt.z);if(N.depth>0){const K=Fe(rt,X,N.depth);Sc(P,an(Math.ceil(tt.hp)),N.x,N.y,me(K*.75,15,30)),tt.stomp>0&&oa(P,`−${tt.stomp}`,N.x,N.y+me(K*.75,15,30)*1.4,me(K*.45,15,18),"#5b2a7a")}}if(n.n>0){const N=26*la(u-g,m);j_(P,an(n.n),M.x,M.y,N),n.f>1&&oa(P,`×${an(n.f)}`,M.x+N*1.6,M.y-N*.55,15*la(u-p,1.5),rr.fire,"#221f2e",Ql)}if(o.draw(P),a.draw(P),e)return;const gt=n.phase!=="run"&&!tt.dead;if(on.set("gs-progbox","show",gt?"0":"1"),on.set("gs-prog","width",`${Math.round(me(n.z/Math.max(1,tt.z-16))*200)/2}%`),on.set("gs-bossbar","show",gt?"1":"0"),gt&&(on.set("gs-bosshp","width",`${Math.max(3,Math.round(tt.hp/tt.hp0*200)/2)}%`),on.set("gs-bossnum","text",an(Math.ceil(tt.hp)))),on.set("gs-bossmax","text",an(Math.ceil(tt.dead?0:tt.hp))),on.set("gs-kills","text",String(E)),on.set("gs-combo","width",`${Math.round(me(1-(u-S)/1.6)*20)*5}%`),i.tip&&u<3.6){const N=me(Math.min(u/.25,(3.6-u)/.4));P.globalAlpha=N;const[K,it]=i.tip;Rg(P,ec((U=En[K])!=null?U:En.gate,"#5a3d22"),it,X.y+X.h*.105,N)}if(!f&&n.phase==="run"&&u<6){const N=Math.sin(u*3.2),K=M.y+Ft*2.4;P.globalAlpha=.85,sh(P,ec(En.drag,"#ffffff"),M.x,K-6,40),P.globalAlpha=1,sc(P,M.x+N*52,K+10,58,-.2)}}let q=!1;const j={get state(){return c},get clock(){return u},get auto(){return q},set auto(P){q=P},get sim(){return n},get kills(){return E},step(P){if(!(ri.on&&!e)&&(u+=P,a.step(P),o.step(P),!(u<_))){for(h+=P;h>=no;){h-=no,q&&(r.tx=fr(n,k())),n.tx=r.tx,Lo(n);for(const X of n.ev)W(X);n.ev.length=0}d>=0&&u>=d&&c==="play"&&(c=n.phase==="won"?"won":"lost")}},draw(P,X){Q(P,X)},press(P){f=!0,r.press(P,n.x)},drag(P){r.drag(P)},release(P){r.release(P)},stars:()=>Xg(n.n,L()),hint(){const P=n.rows.find(X=>!X.passed);return P?(A=null,v=P.i,R=k()[P.i],w=u+4,!0):!1},why:()=>n.why||"人没了",busy:()=>!1,hintTarget(){return c!=="play"?null:{x:r.screenAt(r.tx),y:M.y+30}},hintPath(){if(c!=="play"||n.phase!=="run")return null;const P=fr(n,k());return Math.abs(P-r.tx)<.3?null:r.path(r.tx,P,M.y+30)}};return xh=j,j}function Z_(i,t,e,n){i.lineWidth=Math.max(2,n*.35),i.strokeStyle=Ke,i.beginPath(),i.arc(t,e,n,0,Math.PI*2),i.stroke(),i.lineWidth=Math.max(1.2,n*.2),i.strokeStyle="#ffffff",i.stroke(),i.beginPath(),i.moveTo(t-n*1.4,e),i.lineTo(t+n*1.4,e),i.moveTo(t,e-n*1.4),i.lineTo(t,e+n*1.4),i.stroke()}const ao="#123a6e",Mc="#6e1224";function Sc(i,t,e,n,s){Sh(i,t,e,n,s,"#f0544c","#c62f33","#7d1a1f","#5a0f14")}function j_(i,t,e,n,s){const r=s*1.2;i.beginPath(),i.moveTo(e-s*.2,n-2),i.lineTo(e,n+s*.3),i.lineTo(e+s*.2,n-2),i.closePath(),i.fillStyle="#1d4fb8",i.fill(),Sh(i,t,e,n-r/2-s*.12,s,"#5aa2ff","#2f6fe6","#1b45a6",ao)}function Sh(i,t,e,n,s,r,a,o,l){i.font=`${Math.round(s)}px 'Game Display', 'PingFang SC', sans-serif`;const c=Math.max(s*1.4,i.measureText(t).width+s*.8),h=s*1.2,u=e-c/2,d=n-h/2;Fi(i,u,d+h*.14,c,h,h*.32,o);const f=i.createLinearGradient(0,d,0,d+h);f.addColorStop(0,r),f.addColorStop(1,a),i.fillStyle=f,i.beginPath(),i.moveTo(u+h*.32,d),i.arcTo(u+c,d,u+c,d+h,h*.32),i.arcTo(u+c,d+h,u,d+h,h*.32),i.arcTo(u,d+h,u,d,h*.32),i.arcTo(u,d,u+c,d,h*.32),i.closePath(),i.fill(),bn(i,t,e,n,s,"#ffffff",l)}Dh({id:"gate-shooter",music:Uh,title:"数字门<small>从 1 人到 1 万人</small>",tagline:"广告里那个，这回是真的",size:{w:360,h:640},chapters:Yo,start:Mh,backdrop:J_(Yo[0].levels[0]),teach:i=>i.endsWith("-1"),chrome:"overlay",decorate:Hh,confetti:!1});
