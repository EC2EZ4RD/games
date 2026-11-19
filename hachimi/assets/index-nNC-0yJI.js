(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Bc="186",Nf=0,zl=1,Df=2,Qs=1,Uf=2,Ks=3,Ri=0,jt=1,_n=2,ai=0,er=1,Bl=2,Hl=3,Vl=4,kf=5,fs=100,Ff=101,Of=102,zf=103,Bf=104,Hf=200,Vf=201,Gf=202,Wf=203,Ku=204,Ju=205,Xf=206,qf=207,$f=208,Yf=209,Kf=210,Jf=211,Zf=212,jf=213,Qf=214,qa=0,$a=1,Ya=2,cr=3,Ka=4,Ja=5,Za=6,ja=7,Zu=0,ep=1,tp=2,Wn=0,ju=1,Qu=2,ed=3,td=4,nd=5,id=6,sd=7,Gl="attached",np="detached",rd=300,Vi=301,vs=302,qo=303,$o=304,ko=306,Gi=1e3,Vn=1001,vo=1002,Et=1003,od=1004,Js=1005,Ft=1006,ro=1007,ri=1008,an=1009,ad=1010,cd=1011,lr=1012,Hc=1013,Xn=1014,vn=1015,qn=1016,Vc=1017,Gc=1018,hr=1020,ld=35902,hd=35899,ud=1021,dd=1022,cn=1023,ui=1026,Hi=1027,Wc=1028,Xc=1029,Wi=1030,qc=1031,$c=1033,oo=33776,ao=33777,co=33778,lo=33779,Qa=35840,ec=35841,tc=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37488,ac=37489,yo=37490,cc=37491,lc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,xc=37816,_c=37817,vc=37818,yc=37819,Mc=37820,bc=37821,Sc=36492,wc=36494,Tc=36495,Ec=36283,Ac=36284,Mo=36285,Rc=36286,ur=2300,dr=2301,Yo=2302,Wl=2303,Xl=2400,ql=2401,$l=2402,ip=2500,sp=0,fd=1,Cc=2,rp=3200,bo=0,op=1,Ei="",Pt="srgb",un="srgb-linear",So="linear",lt="srgb",Ko=7680,ap=519,cp=512,lp=513,hp=514,Yc=515,up=516,dp=517,Kc=518,fp=519,pd=35044,Yl="300 es",Gn=2e3,fr=2001;function pp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gp(){const s=pr("canvas");return s.style.display="block",s}const Kl={};function wo(...s){const e="THREE."+s.shift();console.log(e,...s)}function md(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Te(...s){s=md(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function De(...s){s=md(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ms(...s){const e=s.join(" ");e in Kl||(Kl[e]=!0,Te(...s))}function xp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const _p={[qa]:$a,[Ya]:Za,[Ka]:ja,[cr]:Ja,[$a]:qa,[Za]:Ya,[ja]:Ka,[Ja]:cr};class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const tr=Math.PI/180,ys=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function We(s,e,t){return Math.max(e,Math.min(t,s))}function Jc(s,e){return(s%e+e)%e}function vp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yp(s,e,t){return s!==e?(t-s)/(e-s):0}function nr(s,e,t){return(1-t)*s+t*e}function Mp(s,e,t,n){return nr(s,e,1-Math.exp(-t*n))}function bp(s,e=1){return e-Math.abs(Jc(s,e*2)-e)}function Sp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function wp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Tp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ep(s,e){return s+Math.random()*(e-s)}function Ap(s){return s*(.5-Math.random())}function Rp(s){s!==void 0&&(Jl=s);let e=Jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cp(s){return s*tr}function Pp(s){return s*ys}function Lp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Ip(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Np(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*h,a*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ho={DEG2RAD:tr,RAD2DEG:ys,generateUUID:yn,clamp:We,euclideanModulo:Jc,mapLinear:vp,inverseLerp:yp,lerp:nr,damp:Mp,pingpong:bp,smoothstep:Sp,smootherstep:wp,randInt:Tp,randFloat:Ep,randFloatSpread:Ap,seededRandom:Rp,degToRad:Cp,radToDeg:Pp,isPowerOfTwo:Lp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Np,setQuaternionFromProperEuler:Dp,normalize:ht,denormalize:Rn},wl=class wl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wl.prototype.isVector2=!0;let re=wl;class dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==p){let m=c*d+l*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const _=Math.acos(m),E=Math.sin(_);g=Math.sin(g*_)/E,a=Math.sin(a*_)/E,c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+x*a}else{c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+x*a;const _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tl=class Tl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tl.prototype.isVector3=!0;let R=Tl;const Jo=new R,Zl=new dn,El=class El{constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],_=i[1],E=i[4],y=i[7],S=i[2],b=i[5],A=i[8];return r[0]=o*x+a*_+c*S,r[3]=o*m+a*E+c*b,r[6]=o*g+a*y+c*A,r[1]=l*x+h*_+u*S,r[4]=l*m+h*E+u*b,r[7]=l*g+h*y+u*A,r[2]=d*x+f*_+p*S,r[5]=d*m+f*E+p*b,r[8]=d*g+f*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};El.prototype.isMatrix3=!0;let Fe=El;const Zo=new Fe,jl=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){const s={enabled:!0,workingColorSpace:un,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?So:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[un]:{primaries:e,whitePoint:n,transfer:So,toXYZ:jl,fromXYZ:Ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:jl,fromXYZ:Ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),s}const Ze=Up();function ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zi;class kp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=pr("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fp=0;class Zc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(jo(i[o].image)):r.push(jo(i[o]))}else r=jo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let Op=0;const Qo=new R;class Ot extends Yi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Vn,i=Vn,r=Ft,o=ri,a=cn,c=an,l=Ot.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=yn(),this.name="",this.source=new Zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qo).x}get height(){return this.source.getSize(Qo).y}get depth(){return this.source.getSize(Qo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=rd;Ot.DEFAULT_ANISOTROPY=1;const Al=class Al{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,y=(f+1)/2,S=(g+1)/2,b=(h+d)/4,A=(u+x)/4,v=(p+m)/4;return E>y&&E>S?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=b/n,r=A/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=v/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=v/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Al.prototype.isVector4=!0;let pt=Al;class zp extends Yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Ot(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends zp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gd extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Uo=class Uo{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,p,x,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,Vp)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),gi.crossVectors(n,nn),gi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),gi.crossVectors(n,nn)),gi.normalize(),Rr.crossVectors(nn,gi),i[0]=gi.x,i[4]=Rr.x,i[8]=nn.x,i[1]=gi.y,i[5]=Rr.y,i[9]=nn.y,i[2]=gi.z,i[6]=Rr.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],E=n[7],y=n[11],S=n[15],b=i[0],A=i[4],v=i[8],T=i[12],C=i[1],P=i[5],I=i[9],F=i[13],N=i[2],V=i[6],Y=i[10],K=i[14],ie=i[3],X=i[7],ee=i[11],ne=i[15];return r[0]=o*b+a*C+c*N+l*ie,r[4]=o*A+a*P+c*V+l*X,r[8]=o*v+a*I+c*Y+l*ee,r[12]=o*T+a*F+c*K+l*ne,r[1]=h*b+u*C+d*N+f*ie,r[5]=h*A+u*P+d*V+f*X,r[9]=h*v+u*I+d*Y+f*ee,r[13]=h*T+u*F+d*K+f*ne,r[2]=p*b+x*C+m*N+g*ie,r[6]=p*A+x*P+m*V+g*X,r[10]=p*v+x*I+m*Y+g*ee,r[14]=p*T+x*F+m*K+g*ne,r[3]=_*b+E*C+y*N+S*ie,r[7]=_*A+E*P+y*V+S*X,r[11]=_*v+E*I+y*Y+S*ee,r[15]=_*T+E*F+y*K+S*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],_=c*f-l*d,E=a*f-l*u,y=a*d-c*u,S=o*f-l*h,b=o*d-c*h,A=o*u-a*h;return t*(x*_-m*E+g*y)-n*(p*_-m*S+g*b)+i*(p*E-x*S+g*A)-r*(p*y-x*b+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=t*a-n*o,E=t*c-i*o,y=t*l-r*o,S=n*c-i*a,b=n*l-r*a,A=i*l-r*c,v=h*x-u*p,T=h*m-d*p,C=h*g-f*p,P=u*m-d*x,I=u*g-f*x,F=d*g-f*m,N=_*F-E*I+y*P+S*C-b*T+A*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/N;return e[0]=(a*F-c*I+l*P)*V,e[1]=(i*I-n*F-r*P)*V,e[2]=(x*A-m*b+g*S)*V,e[3]=(d*b-u*A-f*S)*V,e[4]=(c*C-o*F-l*T)*V,e[5]=(t*F-i*C+r*T)*V,e[6]=(m*y-p*A-g*E)*V,e[7]=(h*A-d*y+f*E)*V,e[8]=(o*I-a*C+l*v)*V,e[9]=(n*C-t*I-r*v)*V,e[10]=(p*b-x*y+g*_)*V,e[11]=(u*y-h*b-f*_)*V,e[12]=(a*T-o*P-c*v)*V,e[13]=(t*P-n*T+i*v)*V,e[14]=(x*E-p*S-m*_)*V,e[15]=(h*S-u*E+d*_)*V,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,_=c*l,E=c*h,y=c*u,S=n.x,b=n.y,A=n.z;return i[0]=(1-(x+g))*S,i[1]=(f+y)*S,i[2]=(p-E)*S,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+g))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(p+E)*A,i[9]=(m-_)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ji.set(i[0],i[1],i[2]).length();const a=ji.set(i[4],i[5],i[6]).length(),c=ji.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Sn.copy(this);const l=1/o,h=1/a,u=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=Gn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===Gn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Gn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===Gn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===fr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Uo.prototype.isMatrix4=!0;let Oe=Uo;const ji=new R,Sn=new Oe,Hp=new R(0,0,0),Vp=new R(1,1,1),gi=new R,Rr=new R,nn=new R,eh=new Oe,th=new dn;class di{constructor(e=0,t=0,n=0,i=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gp=0;const nh=new R,Qi=new dn,Zn=new Oe,Cr=new R,Ls=new R,Wp=new R,Xp=new dn,ih=new R(1,0,0),sh=new R(0,1,0),rh=new R(0,0,1),oh={type:"added"},qp={type:"removed"},es={type:"childadded",child:null},ea={type:"childremoved",child:null};class St extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new R,t=new di,n=new dn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Fe}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(sh,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(sh,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ls,Cr,this.up):Zn.lookAt(Cr,Ls,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Zn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),es.child=e,this.dispatchEvent(es),es.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qp),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,Wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}St.DEFAULT_UP=new R(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Be extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($p)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function na(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Jc(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=na(o,r,e+1/3),this.g=na(o,r,e),this.b=na(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=_d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ze.workingToColorSpace($t.copy(this),e),Math.round(We($t.r*255,0,255))*65536+Math.round(We($t.g*255,0,255))*256+Math.round(We($t.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace($t.copy(this),t);const n=$t.r,i=$t.g,r=$t.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Pt){Ze.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,i=$t.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Pr);const n=nr(xi.h,Pr.h,t),i=nr(xi.s,Pr.s,t),r=nr(xi.l,Pr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Re;Re.NAMES=_d;class vd extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wn=new R,jn=new R,ia=new R,Qn=new R,ts=new R,ns=new R,ah=new R,sa=new R,ra=new R,oa=new R,aa=new pt,ca=new pt,la=new pt;class Cn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){wn.subVectors(i,t),jn.subVectors(n,t),ia.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(jn),c=wn.dot(ia),l=jn.dot(jn),h=jn.dot(ia),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return aa.setScalar(0),ca.setScalar(0),la.setScalar(0),aa.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,n),la.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(aa,r.x),o.addScaledVector(ca,r.y),o.addScaledVector(la,r.z),o}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),jn.subVectors(e,t),wn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),wn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(r,n),sa.subVectors(e,n);const c=ts.dot(sa),l=ns.dot(sa);if(c<=0&&l<=0)return t.copy(n);ra.subVectors(e,i);const h=ts.dot(ra),u=ns.dot(ra);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ts,o);oa.subVectors(e,r);const f=ts.dot(oa),p=ns.dot(oa);if(p>=0&&f<=p)return t.copy(r);const x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(ns,a);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return ah.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(ah,a);const g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class In{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Ir.subVectors(this.max,Is),is.subVectors(e.a,Is),ss.subVectors(e.b,Is),rs.subVectors(e.c,Is),_i.subVectors(ss,is),vi.subVectors(rs,ss),Ii.subVectors(is,rs);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Ii.z,Ii.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Ii.z,0,-Ii.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Ii.y,Ii.x,0];return!ha(t,is,ss,rs,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,is,ss,rs,Ir))?!1:(Nr.crossVectors(_i,vi),t=[Nr.x,Nr.y,Nr.z],ha(t,is,ss,rs,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new R,new R,new R,new R,new R,new R,new R,new R],Tn=new R,Lr=new In,is=new R,ss=new R,rs=new R,_i=new R,vi=new R,Ii=new R,Is=new R,Ir=new R,Nr=new R,Ni=new R;function ha(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ni.fromArray(s,r);const a=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),c=e.dot(Ni),l=t.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ut=new R,Dr=new re;let Yp=0;class Qt extends Yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pd,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class yd extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Md extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Kp=new In,Ns=new R,ua=new R;class $n{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(ua)),this.expandByPoint(Ns.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Jp=0;const pn=new Oe,da=new St,os=new R,sn=new In,Ds=new In,Vt=new R;class At extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pp(e)?Md:yd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(sn.min,Ds.min),sn.expandByPoint(Vt),Vt.addVectors(sn.max,Ds.max),sn.expandByPoint(Vt)):(sn.expandByPoint(Ds.min),sn.expandByPoint(Ds.max))}sn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Vt.fromBufferAttribute(a,l),c&&(os.fromBufferAttribute(e,l),Vt.add(os)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new R,c[v]=new R;const l=new R,h=new R,u=new R,d=new re,f=new re,p=new re,x=new R,m=new R;function g(v,T,C){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),h.sub(l),u.sub(l),f.sub(d),p.sub(d);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[v].add(x),a[T].add(x),a[C].add(x),c[v].add(m),c[T].add(m),c[C].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,T=_.length;v<T;++v){const C=_[v],P=C.start,I=C.count;for(let F=P,N=P+I;F<N;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new R,y=new R,S=new R,b=new R;function A(v){S.fromBufferAttribute(i,v),b.copy(S);const T=a[v];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(b,T);const P=y.dot(c[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,P)}for(let v=0,T=_.length;v<T;++v){const C=_[v],P=C.start,I=C.count;for(let F=P,N=P+I;F<N;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new Qt(d,h,u)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pd,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Kt=new R;class jc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fa=new R,jp=new R,Qp=new Fe;class wi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fa.subVectors(n,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qp.getNormalMatrix(e),i=this.coplanarPoint(fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let e0=0;class Pn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=er,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Ju,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ti=new R,pa=new R,Ur=new R,kr=new R;class Sr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pa.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(pa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=kr.dot(this.direction),c=-kr.dot(Ur),l=kr.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=r*h,u>=0)if(d>=-p)if(d<=p){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(pa).addScaledVector(Ur,d),f}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,_=n.y-o.y,E=n.z-o.z,y=Math.abs(c),S=Math.abs(l),b=Math.abs(h);let A,v,T,C,P,I,F,N,V,Y,K,ie;if(y>=S&&y>=b?(T=c,I=u,V=p,ie=g,c>=0?(A=l,v=h,C=d,P=f,F=x,N=m,Y=_,K=E):(A=h,v=l,C=f,P=d,F=m,N=x,Y=E,K=_)):S>=b?(T=l,I=d,V=x,ie=_,l>=0?(A=h,v=c,C=f,P=u,F=m,N=p,Y=E,K=g):(A=c,v=h,C=u,P=f,F=p,N=m,Y=g,K=E)):(T=h,I=f,V=m,ie=E,h>=0?(A=c,v=l,C=u,P=d,F=p,N=x,Y=g,K=_):(A=l,v=c,C=d,P=u,F=x,N=p,Y=_,K=g)),T===0)return null;const X=A/T,ee=v/T,ne=1/T,Ie=C-X*I,Ce=P-ee*I,gt=F-X*V,et=N-ee*V,st=Y-X*ie,q=K-ee*ie,Q=st*et-q*gt,ye=Ie*q-Ce*st,ke=gt*Ce-et*Ie;if(i){if(Q<0||ye<0||ke<0)return null}else if((Q<0||ye<0||ke<0)&&(Q>0||ye>0||ke>0))return null;const _e=Q+ye+ke;if(_e===0)return null;const qe=ne*(Q*I+ye*V+ke*ie);return(_e>0?qe<0:qe>0)?null:this.at(qe/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ch=new Oe,Di=new Sr,Fr=new $n,lh=new R,Or=new R,zr=new R,Br=new R,ma=new R,Hr=new R,hh=new R,Vr=new R;class rt extends St{constructor(e=new At,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ma.fromBufferAttribute(u,e),o?Hr.addScaledVector(ma,h):Hr.addScaledVector(ma.sub(t),h))}t.add(Hr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(Fr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Fr,lh)===null||Di.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(ch.copy(r).invert(),Di.copy(e.ray).applyMatrix4(ch),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,S=E;y<S;y+=3){const b=a.getX(y),A=a.getX(y+1),v=a.getX(y+2);i=Gr(this,g,e,n,l,h,u,b,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);i=Gr(this,o,e,n,l,h,u,_,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,S=E;y<S;y+=3){const b=y,A=y+1,v=y+2;i=Gr(this,g,e,n,l,h,u,b,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=m,E=m+1,y=m+2;i=Gr(this,o,e,n,l,h,u,_,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function t0(s,e,t,n,i,r,o,a){let c;if(e.side===jt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Ri,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:s}}function Gr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Or),s.getVertexPosition(c,zr),s.getVertexPosition(l,Br);const h=t0(s,e,t,n,Or,zr,Br,hh);if(h){const u=new R;Cn.getBarycoord(hh,Or,zr,Br,u),i&&(h.uv=Cn.getInterpolatedAttribute(i,a,c,l,u,new re)),r&&(h.uv1=Cn.getInterpolatedAttribute(r,a,c,l,u,new re)),o&&(h.normal=Cn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};Cn.getNormal(Or,zr,Br,d.normal),h.face=d,h.barycoord=u}return h}const Us=new pt,uh=new pt,dh=new pt,n0=new pt,fh=new Oe,Wr=new R,ga=new $n,ph=new Oe,xa=new Sr;class i0 extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gl,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingBox.expandByPoint(Wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingSphere.expandByPoint(Wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(i),e.ray.intersectsSphere(ga)!==!1&&(ph.copy(i).invert(),xa.copy(e.ray).applyMatrix4(ph),!(this.boundingBox!==null&&xa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===np?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;uh.fromBufferAttribute(i.attributes.skinIndex,e),dh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Us.copy(t),t.set(0,0,0,0)):(Us.set(...t,1),t.set(0,0,0)),Us.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=dh.getComponent(r);if(o!==0){const a=uh.getComponent(r);fh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(n0.copy(Us).applyMatrix4(fh),o)}}return t.isVector4&&(t.w=Us.w),t.applyMatrix4(this.bindMatrixInverse)}}class bd extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fo extends Ot{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Et,h=Et,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new Oe,s0=new Oe;class Qc{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:s0;mh.multiplyMatrices(a,t[r]),mh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fo(t,e,e,cn,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Te("Skeleton: No bone found with UUID:",r),o=new bd),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class To extends Qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new Oe,gh=new Oe,Xr=[],xh=new In,r0=new Oe,ks=new rt,Fs=new $n;class o0 extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,r0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),xh.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(xh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Fs.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,as),gh.multiplyMatrices(n,as),ks.matrixWorld=gh,ks.raycast(e,Xr);for(let o=0,a=Xr.length;o<a;o++){const c=Xr[o];c.instanceId=r,c.object=this,t.push(c)}Xr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fo(new Float32Array(i*this.count),i,this.count,Wc,vn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ui=new $n,a0=new re(.5,.5),qr=new R;class el{constructor(e=new wi,t=new wi,n=new wi,i=new wi,r=new wi,o=new wi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],E=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-o,f-h,g-p,S-_).normalize(),i[1].setComponents(l+o,f+h,g+p,S+_).normalize(),i[2].setComponents(l+a,f+u,g+x,S+E).normalize(),i[3].setComponents(l-a,f-u,g-x,S-E).normalize(),n)i[4].setComponents(c,d,m,y).normalize(),i[5].setComponents(l-c,f-d,g-m,S-y).normalize();else if(i[4].setComponents(l-c,f-d,g-m,S-y).normalize(),t===Gn)i[5].setComponents(l+c,f+d,g+m,S+y).normalize();else if(t===fr)i[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=a0.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qr.x=i.normal.x>0?e.max.x:e.min.x,qr.y=i.normal.y>0?e.max.y:e.min.y,qr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sd extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eo=new R,Ao=new R,_h=new Oe,Os=new Sr,$r=new $n,_a=new R,vh=new R;class tl extends St{constructor(e=new At,t=new Sd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Eo.fromBufferAttribute(t,i-1),Ao.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Eo.distanceTo(Ao);e.setAttribute("lineDistance",new Ye(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;_h.copy(i).invert(),Os.copy(e.ray).applyMatrix4(_h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){const g=h.getX(x),_=h.getX(x+1),E=Yr(this,e,Os,c,g,_,x);E&&t.push(E)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(f),g=Yr(this,e,Os,c,x,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=l){const g=Yr(this,e,Os,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){const x=Yr(this,e,Os,c,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Eo.fromBufferAttribute(a,i),Ao.fromBufferAttribute(a,r),t.distanceSqToSegment(Eo,Ao,_a,vh)>n)return;_a.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(_a);if(!(l<e.near||l>e.far))return{distance:l,point:vh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const yh=new R,Mh=new R;class c0 extends tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)yh.fromBufferAttribute(t,i),Mh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yh.distanceTo(Mh);e.setAttribute("lineDistance",new Ye(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l0 extends tl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wd extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bh=new Oe,Pc=new Sr,Kr=new $n,Jr=new R;class h0 extends St{constructor(e=new At,t=new wd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;bh.copy(i).invert(),Pc.copy(e.ray).applyMatrix4(bh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,x=f;p<x;p++){const m=l.getX(p);Jr.fromBufferAttribute(u,m),Sh(Jr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Jr.fromBufferAttribute(u,p),Sh(Jr,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sh(s,e,t,n,i,r,o){const a=Pc.distanceSqToPoint(s);if(a<t){const c=new R;Pc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Td extends Ot{constructor(e=[],t=Vi,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wh extends Ot{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ms extends Ot{constructor(e,t,n=Xn,i,r,o,a=Et,c=Et,l,h=ui,u=1){if(h!==ui&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class u0 extends Ms{constructor(e,t=Xn,n=Vi,i,r,o=Et,a=Et,c,l=ui){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ed extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yn extends At{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function p(x,m,g,_,E,y,S,b,A,v,T){const C=y/A,P=S/v,I=y/2,F=S/2,N=b/2,V=A+1,Y=v+1;let K=0,ie=0;const X=new R;for(let ee=0;ee<Y;ee++){const ne=ee*P-F;for(let Ie=0;Ie<V;Ie++){const Ce=Ie*C-I;X[x]=Ce*_,X[m]=ne*E,X[g]=N,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(Ie/A),u.push(1-ee/v),K+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<A;ne++){const Ie=d+ne+V*ee,Ce=d+ne+V*(ee+1),gt=d+(ne+1)+V*(ee+1),et=d+(ne+1)+V*ee;c.push(Ie,Ce,et),c.push(Ce,gt,et),ie+=6}a.addGroup(f,ie,T),f+=ie,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nl extends At{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,x=i+1,m=new R,g=new R;for(let _=0;_<=p;_++){let E=0,y=0,S=0,b=0;if(_<=n){const T=_/n,C=T*Math.PI/2;y=-h-e*Math.cos(C),S=e*Math.sin(C),b=-e*Math.cos(C),E=T*u}else if(_<=n+r){const T=(_-n)/r;y=-h+T*t,S=e,b=0,E=u+T*d}else{const T=(_-n-r)/n,C=T*Math.PI/2;y=h+e*Math.sin(C),S=e*Math.cos(C),b=e*Math.sin(C),E=u+d+T*u}const A=Math.max(0,Math.min(1,E/f));let v=0;_===0?v=.5/i:_===p&&(v=-.5/i);for(let T=0;T<=i;T++){const C=T/i,P=C*Math.PI*2,I=Math.sin(P),F=Math.cos(P);g.x=-S*F,g.y=y,g.z=S*I,a.push(g.x,g.y,g.z),m.set(-S*F,b,S*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(C+v,A)}if(_>0){const T=(_-1)*x;for(let C=0;C<i;C++){const P=T+C,I=T+C+1,F=_*x+C,N=_*x+C+1;o.push(P,I,F),o.push(I,N,F)}}}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Oo extends At{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wr extends At{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const x=[],m=n/2;let g=0;_(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function _(){const y=new R,S=new R;let b=0;const A=(t-e)/n;for(let v=0;v<=r;v++){const T=[],C=v/r,P=C*(t-e)+e;for(let I=0;I<=i;I++){const F=I/i,N=F*c+a,V=Math.sin(N),Y=Math.cos(N);S.x=P*V,S.y=-C*n+m,S.z=P*Y,u.push(S.x,S.y,S.z),y.set(V,A,Y).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-C),T.push(p++)}x.push(T)}for(let v=0;v<i;v++)for(let T=0;T<r;T++){const C=x[T][v],P=x[T+1][v],I=x[T+1][v+1],F=x[T][v+1];(e>0||T!==0)&&(h.push(C,P,F),b+=3),(t>0||T!==r-1)&&(h.push(P,I,F),b+=3)}l.addGroup(g,b,0),g+=b}function E(y){const S=p,b=new re,A=new R;let v=0;const T=y===!0?e:t,C=y===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),p++;const P=p;for(let I=0;I<=i;I++){const N=I/i*c+a,V=Math.cos(N),Y=Math.sin(N);A.x=T*Y,A.y=m*C,A.z=T*V,u.push(A.x,A.y,A.z),d.push(0,C,0),b.x=V*.5+.5,b.y=Y*.5*C+.5,f.push(b.x,b.y),p++}for(let I=0;I<i;I++){const F=S+I,N=P+I;y===!0?h.push(N,N+1,F):h.push(N+1,N,F),v+=3}l.addGroup(g,v,y===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends wr{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zo extends At{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const E=new R,y=new R,S=new R;for(let b=0;b<t.length;b+=3)f(t[b+0],E),f(t[b+1],y),f(t[b+2],S),c(E,y,S,_)}function c(_,E,y,S){const b=S+1,A=[];for(let v=0;v<=b;v++){A[v]=[];const T=_.clone().lerp(y,v/b),C=E.clone().lerp(y,v/b),P=b-v;for(let I=0;I<=P;I++)I===0&&v===b?A[v][I]=T:A[v][I]=T.clone().lerp(C,I/P)}for(let v=0;v<b;v++)for(let T=0;T<2*(b-v)-1;T++){const C=Math.floor(T/2);T%2===0?(d(A[v][C+1]),d(A[v+1][C]),d(A[v][C])):(d(A[v][C+1]),d(A[v+1][C+1]),d(A[v+1][C]))}}function l(_){const E=new R;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(_),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){const _=new R;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];const y=m(_)/2/Math.PI+.5,S=g(_)/Math.PI+.5;o.push(y,1-S)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){const E=o[_+0],y=o[_+2],S=o[_+4],b=Math.max(E,y,S),A=Math.min(E,y,S);b>.9&&A<.1&&(E<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,E){const y=_*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function p(){const _=new R,E=new R,y=new R,S=new R,b=new re,A=new re,v=new re;for(let T=0,C=0;T<r.length;T+=9,C+=6){_.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),b.set(o[C+0],o[C+1]),A.set(o[C+2],o[C+3]),v.set(o[C+4],o[C+5]),S.copy(_).add(E).add(y).divideScalar(3);const P=m(S);x(b,C+0,_,P),x(A,C+2,E,P),x(v,C+4,y,P)}}function x(_,E,y,S){S<0&&_.x===1&&(o[E]=_.x-1),y.x===0&&y.z===0&&(o[E]=S/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.vertices,e.indices,e.radius,e.detail)}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new re:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],r=[],o=[],a=new R,c=new Oe;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(We(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class il extends Kn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class d0 extends il{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Th=new R,Eh=new R,va=new sl,ya=new sl,Ma=new sl;class f0 extends Kn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Eh.subVectors(i[0],i[1]).add(i[0]),l=Eh);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Th.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Th),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),va.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,x,m),ya.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,x,m),Ma.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ya.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ma.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(va.calc(c),ya.calc(c),Ma.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ah(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function p0(s,e){const t=1-s;return t*t*e}function m0(s,e){return 2*(1-s)*s*e}function g0(s,e){return s*s*e}function ir(s,e,t,n){return p0(s,e)+m0(s,t)+g0(s,n)}function x0(s,e){const t=1-s;return t*t*t*e}function _0(s,e){const t=1-s;return 3*t*t*s*e}function v0(s,e){return 3*(1-s)*s*s*e}function y0(s,e){return s*s*s*e}function sr(s,e,t,n,i){return x0(s,e)+_0(s,t)+v0(s,n)+y0(s,i)}class Ad extends Kn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sr(e,i.x,r.x,o.x,a.x),sr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class M0 extends Kn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sr(e,i.x,r.x,o.x,a.x),sr(e,i.y,r.y,o.y,a.y),sr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rd extends Kn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b0 extends Kn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cd extends Kn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ir(e,i.x,r.x,o.x),ir(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S0 extends Kn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ir(e,i.x,r.x,o.x),ir(e,i.y,r.y,o.y),ir(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ah(a,c.x,l.x,h.x,u.x),Ah(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var Rh=Object.freeze({__proto__:null,ArcCurve:d0,CatmullRomCurve3:f0,CubicBezierCurve:Ad,CubicBezierCurve3:M0,EllipseCurve:il,LineCurve:Rd,LineCurve3:b0,QuadraticBezierCurve:Cd,QuadraticBezierCurve3:S0,SplineCurve:Pd});class w0 extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Rh[i.type]().fromJSON(i))}return this}}class Ch extends w0{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rd(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Cd(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Ad(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new il(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ld extends Ch{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ch().fromJSON(i))}return this}}function T0(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Id(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=P0(s,e,r,t)),s.length>80*t){a=s[0],c=s[1];let h=a,u=c;for(let d=t;d<i;d+=t){const f=s[d],p=s[d+1];f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return gr(r,o,t,a,c,l,0),o}function Id(s,e,t,n,i){let r;if(i===H0(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ph(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ph(o/n|0,s[o],s[o+1],r);return r&&bs(r,r.next)&&(_r(r),r=r.next),r}function Xi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(bs(t,t.next)||Tt(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&U0(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?A0(s,n,i,r):E0(s)){e.push(c.i,s.i,l.i),_r(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=R0(Xi(s),e),gr(s,e,t,n,i,r,2)):o===2&&C0(s,e,t,n,i,r):gr(Xi(s),e,t,n,i,r,1);break}}}function E0(s){const e=s.prev,t=s,n=s.next;if(Tt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(i,r,o),u=Math.min(a,c,l),d=Math.max(i,r,o),f=Math.max(a,c,l);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Zs(i,a,r,c,o,l,p.x,p.y)&&Tt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function A0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Tt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,c,l),p=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),g=Lc(f,p,e,t,n),_=Lc(x,m,e,t,n);let E=s.prevZ,y=s.nextZ;for(;E&&E.z>=g&&y&&y.z<=_;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Zs(a,h,c,u,l,d,E.x,E.y)&&Tt(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Zs(a,h,c,u,l,d,y.x,y.y)&&Tt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&Zs(a,h,c,u,l,d,E.x,E.y)&&Tt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Zs(a,h,c,u,l,d,y.x,y.y)&&Tt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function R0(s,e){let t=s;do{const n=t.prev,i=t.next.next;!bs(n,i)&&Dd(n,t,t.next,i)&&xr(n,i)&&xr(i,n)&&(e.push(n.i,t.i,i.i),_r(t),_r(t.next),t=s=i),t=t.next}while(t!==s);return Xi(t)}function C0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O0(o,a)){let c=Ud(o,a);o=Xi(o,o.next),c=Xi(c,c.next),gr(o,e,t,n,i,r,0),gr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function P0(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Id(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(F0(l))}i.sort(L0);for(let r=0;r<i.length;r++)t=I0(i[r],t);return t}function L0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function I0(s,e){const t=N0(s,e);if(!t)return e;const n=Ud(t,s);return Xi(n,n.next),Xi(t,t.next)}function N0(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(bs(s,t))return t;do{if(bs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Nd(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);xr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&D0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function D0(s,e){return Tt(s.prev,s,e.prev)<0&&Tt(e.next,s,s.next)<0}function U0(s,e,t,n){let i=s;do i.z===0&&(i.z=Lc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,k0(i)}function k0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Lc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function F0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Nd(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Zs(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Nd(s,e,t,n,i,r,o,a)}function O0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!z0(s,e)&&(xr(s,e)&&xr(e,s)&&B0(s,e)&&(Tt(s.prev,s,e.prev)||Tt(s,e.prev,e))||bs(s,e)&&Tt(s.prev,s,s.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function bs(s,e){return s.x===e.x&&s.y===e.y}function Dd(s,e,t,n){const i=jr(Tt(s,e,t)),r=jr(Tt(s,e,n)),o=jr(Tt(t,n,s)),a=jr(Tt(t,n,e));return!!(i!==r&&o!==a||i===0&&Zr(s,t,e)||r===0&&Zr(s,n,e)||o===0&&Zr(t,s,n)||a===0&&Zr(t,e,n))}function Zr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function jr(s){return s>0?1:s<0?-1:0}function z0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Dd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function xr(s,e){return Tt(s.prev,s,s.next)<0?Tt(s,e,s.next)>=0&&Tt(s,s.prev,e)>=0:Tt(s,e,s.prev)<0||Tt(s,s.next,e)<0}function B0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ud(s,e){const t=Ic(s.i,s.x,s.y),n=Ic(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ph(s,e,t,n){const i=Ic(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ic(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function H0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class V0{static triangulate(e,t,n=2){return T0(e,t,n)}}class rr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return rr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Lh(e),Ih(n,e);let o=e.length;t.forEach(Lh);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Ih(n,t[c]);const a=V0.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Lh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ih(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class rl extends At{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=We(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new R,d=new re,f=new R,p=new R,x=new R;let m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){const E=n+_*h*i,y=Math.sin(E),S=Math.cos(E);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*S,o.push(u.x,u.y,u.z),d.x=_/t,d.y=b/(e.length-1),a.push(d.x,d.y);const A=c[3*b+0]*y,v=c[3*b+1],T=c[3*b+0]*S;l.push(A,v,T)}}for(let _=0;_<t;_++)for(let E=0;E<e.length-1;E++){const y=E+_*e.length,S=y,b=y+e.length,A=y+e.length+1,v=y+1;r.push(S,b,v),r.push(A,v,b)}this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.points,e.segments,e.phiStart,e.phiLength)}}class ol extends zo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ol(e.radius,e.detail)}}class qi extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const _=g*d-o;for(let E=0;E<l;E++){const y=E*u-r;p.push(y,-_,0),x.push(0,0,1),m.push(E/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){const E=_+l*g,y=_+l*(g+1),S=_+1+l*(g+1),b=_+1+l*g;f.push(E,y,b),f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class al extends At{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new R,p=new re;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const g=r+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let g=0;g<n;g++){const _=g+m,E=_,y=_+n+1,S=_+n+2,b=_+1;a.push(E,y,b),a.push(y,S,b)}}this.setIndex(a),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cl extends At{constructor(e=new Ld([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ye(i,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;rr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const _=p[m];rr.isClockWise(_)===!0&&(p[m]=_.reverse())}const x=rr.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const _=p[m];f=f.concat(_)}for(let m=0,g=f.length;m<g;m++){const _=f[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=x.length;m<g;m++){const _=x[m],E=_[0]+u,y=_[1]+u,S=_[2]+u;n.push(E,y,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return G0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new cl(n,e.curveSegments)}}function G0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Ci extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const _=[],E=g/n,y=o+E*a,S=e*Math.cos(y),b=Math.sqrt(e*e-S*S);let A=0;g===0&&o===0?A=.5/t:g===n&&c===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){const T=v/t,C=i+T*r;u.x=-b*Math.cos(C),u.y=S,u.z=b*Math.sin(C),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+A,1-E),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){const E=h[g][_+1],y=h[g][_],S=h[g+1][_],b=h[g+1][_+1];(g!==0||o>0)&&f.push(E,y,b),(g!==n-1||c<Math.PI)&&f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bo extends zo{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bo(e.radius,e.detail)}}class ll extends At{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],u=[],d=new R,f=new R,p=new R;for(let x=0;x<=n;x++){const m=o+x/n*a;for(let g=0;g<=i;g++){const _=g/i*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,_=(i+1)*(x-1)+m-1,E=(i+1)*(x-1)+m,y=(i+1)*x+m;c.push(g,_,y),c.push(_,E,y)}this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ss(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Nh(i))i.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Nh(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Jt(s){const e={};for(let t=0;t<s.length;t++){const n=Ss(s[t]);for(const i in n)e[i]=n[i]}return e}function Nh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function W0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const X0={clone:Ss,merge:Jt};var q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=$0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=W0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(i.value);break;case"v2":this.uniforms[n].value=new re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Y0 extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hl extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jn extends hl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Fd extends Pn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class K0 extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J0 extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ti(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function uo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Z0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Dh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function j0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ws{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Q0 extends ws{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xl,endingEnd:Xl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ql:r=e,a=2*t-n;break;case $l:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ql:o=e,c=2*n-t;break;case $l:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,E=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+_*o[l+S]+E*o[c+S]+y*o[u+S];return r}}class em extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class tm extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class nm extends ws{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){const p=(n-t)/(i-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*p;return r}const d=a*2,f=e-1;for(let p=0;p!==a;++p){const x=o[l+p],m=o[c+p],g=f*d+p*2,_=u[g],E=u[g+1],y=e*d+p*2,S=h[y],b=h[y+1],A=sm(n,t,_,S,i);r[p]=Od(A,x,E,b,m)}return r}}function Od(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function im(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function sm(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=Od(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const c=im(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ti(t,this.TimeBufferType),this.values=Ti(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ti(e.times,Array),values:Ti(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),uo(e.settings)&&(n.settings={inTangents:Ti(e.settings.inTangents,Array),outTangents:Ti(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new em(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Q0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new nm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case dr:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break;case Wl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return dr;case this.InterpolantFactoryMethodSmooth:return Yo;case this.InterpolantFactoryMethodBezier:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;uo(this.settings)&&(Uh(this.settings.inTangents,e),Uh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){De("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){De("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&mp(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){De("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,uo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Uh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=dr;class Ts extends Nn{constructor(e,t,n){super(e,t,n)}}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=ur;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class zd extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}zd.prototype.ValueTypeName="color";class vr extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}vr.prototype.ValueTypeName="number";class rm extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)dn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class yr extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new rm(this.times,this.values,this.getValueSize(),e)}}yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends Nn{constructor(e,t,n){super(e,t,n)}}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=ur;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Ro.prototype.ValueTypeName="vector";class om{constructor(e="",t=-1,n=[],i=ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(cm(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Z0(c);c=Dh(c,1,h),l=Dh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new vr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function am(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vr;case"vector":case"vector2":case"vector3":case"vector4":return Ro;case"color":return zd;case"quaternion":return yr;case"bool":case"boolean":return Ts;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function cm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=am(s.type);if(s.times===void 0){const n=[],i=[];j0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),uo(s.settings)&&(t.settings={inTangents:Ti(s.settings.inTangents,Float32Array),outTangents:Ti(s.settings.outTangents,Float32Array)}),t}const oi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(kh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!kh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function kh(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class lm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const hm=new lm;class As{constructor(e){this.manager=e!==void 0?e:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}As.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class um extends Error{constructor(e,t){super(e),this.response=t}}class Bd extends As{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=oi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:i});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ni[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let x=0;const m=new ReadableStream({start(g){_();function _(){u.read().then(({done:E,value:y})=>{if(E)g.close();else{x+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,A=h.length;b<A;b++){const v=h[b];v.onProgress&&v.onProgress(S)}g.enqueue(y),_()}},E=>{g.error(E)})}}});return new Response(m)}else throw new um(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{oi.add(`file:${e}`,l);const h=ni[e];delete ni[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ni[e];if(h===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const cs=new WeakMap;class dm extends As{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=oi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=cs.get(o);u===void 0&&(u=[],cs.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=pr("img");function c(){h(),t&&t(this);const u=cs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}cs.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),oi.remove(`image:${e}`);const d=cs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}cs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),oi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Hd extends As{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,o=new dm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ho extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fm extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ba=new Oe,Fh=new R,Oh=new R;class ul{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ba,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===fr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qr=new R,eo=new dn,kn=new R;class Vd extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qr,eo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,eo,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qr,eo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,eo,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new R,zh=new re,Bh=new re;class Zt extends Vd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,zh,Bh),t.subVectors(Bh,zh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class pm extends ul{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ys*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class mm extends Ho{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new pm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class gm extends ul{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class xm extends Ho{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Tr extends Vd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _m extends ul{constructor(){super(new Tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new _m}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class or{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Sa=new WeakMap;class vm extends As{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=oi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Sa.has(o)===!0?(i&&i(Sa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return oi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Sa.set(c,l),oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});oi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ls=-90,hs=1;class ym extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(ls,hs,e,t);i.layers=this.layers,this.add(i);const r=new Zt(ls,hs,e,t);r.layers=this.layers,this.add(r);const o=new Zt(ls,hs,e,t);o.layers=this.layers,this.add(o);const a=new Zt(ls,hs,e,t);a.layers=this.layers,this.add(a);const c=new Zt(ls,hs,e,t);c.layers=this.layers,this.add(c);const l=new Zt(ls,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Mm extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dl="\\[\\]\\.:\\/",bm=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",Sm="[^"+dl.replace("\\.","")+"]",wm=/((?:WC+[\/:])*)/.source.replace("WC",fl),Tm=/(WCOD+)?/.source.replace("WCOD",Sm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),Am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),Rm=new RegExp("^"+wm+Tm+Em+Am+"$"),Cm=["material","materials","bones","map"];class Pm{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(e){const t=Rm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Cm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;De("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=Pm;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Rl=class Rl{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Rl.prototype.isMatrix2=!0;let Hh=Rl;function Vh(s,e,t,n){const i=Lm(n);switch(t){case ud:return s*e;case Wc:return s*e/i.components*i.byteLength;case Xc:return s*e/i.components*i.byteLength;case Wi:return s*e*2/i.components*i.byteLength;case qc:return s*e*2/i.components*i.byteLength;case dd:return s*e*3/i.components*i.byteLength;case cn:return s*e*4/i.components*i.byteLength;case $c:return s*e*4/i.components*i.byteLength;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case co:case lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(s,16)*Math.max(e,8)/4;case Qa:case tc:return Math.max(s,8)*Math.max(e,8)/2;case ic:case sc:case oc:case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rc:case yo:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sc:case wc:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ec:case Ac:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Mo:case Rc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lm(s){switch(s){case an:case ad:return{byteLength:1,components:1};case lr:case cd:case qn:return{byteLength:2,components:1};case Vc:case Gc:return{byteLength:2,components:4};case Xn:case Hc:case vn:return{byteLength:4,components:1};case ld:case hd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);function Wd(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Im(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
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
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Tg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Lg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ig=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
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
#endif`,ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,_x=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
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
}`,Bx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hx=`#define DISTANCE
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
}`,Vx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
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
}`,qx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Kx=`#define LAMBERT
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
}`,Jx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Zx=`#define MATCAP
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
}`,jx=`#define MATCAP
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
}`,Qx=`#define NORMAL
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
}`,e_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t_=`#define PHONG
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
}`,n_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,i_=`#define STANDARD
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
}`,s_=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,r_=`#define TOON
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
}`,o_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,a_=`uniform float size;
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
}`,c_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,h_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,u_=`uniform float rotation;
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
}`,d_=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Nm,alphahash_pars_fragment:Dm,alphamap_fragment:Um,alphamap_pars_fragment:km,alphatest_fragment:Fm,alphatest_pars_fragment:Om,aomap_fragment:zm,aomap_pars_fragment:Bm,batching_pars_vertex:Hm,batching_vertex:Vm,begin_vertex:Gm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:$m,clipping_planes_fragment:Ym,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:Jm,clipping_planes_vertex:Zm,color_fragment:jm,color_pars_fragment:Qm,color_pars_vertex:eg,color_vertex:tg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:sg,displacementmap_pars_vertex:rg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:cg,colorspace_fragment:lg,colorspace_pars_fragment:hg,envmap_fragment:ug,envmap_common_pars_fragment:dg,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Tg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:xg,fog_fragment:_g,fog_pars_fragment:vg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:Mg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:Sg,lights_pars_begin:wg,lights_toon_fragment:Eg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Ig,lights_fragment_maps:Ng,lights_fragment_end:Dg,lightprobes_pars_fragment:Ug,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:zg,map_fragment:Bg,map_pars_fragment:Hg,map_particle_fragment:Vg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:qg,morphcolor_vertex:$g,morphnormal_vertex:Yg,morphtarget_pars_vertex:Kg,morphtarget_vertex:Jg,normal_fragment_begin:Zg,normal_fragment_maps:jg,normal_pars_fragment:Qg,normal_pars_vertex:ex,normal_vertex:tx,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:ix,clearcoat_normal_fragment_maps:sx,clearcoat_pars_fragment:rx,iridescence_pars_fragment:ox,opaque_fragment:ax,packing:cx,premultiplied_alpha_fragment:lx,project_vertex:hx,dithering_fragment:ux,dithering_pars_fragment:dx,roughnessmap_fragment:fx,roughnessmap_pars_fragment:px,shadowmap_pars_fragment:mx,shadowmap_pars_vertex:gx,shadowmap_vertex:xx,shadowmask_pars_fragment:_x,skinbase_vertex:vx,skinning_pars_vertex:yx,skinning_vertex:Mx,skinnormal_vertex:bx,specularmap_fragment:Sx,specularmap_pars_fragment:wx,tonemapping_fragment:Tx,tonemapping_pars_fragment:Ex,transmission_fragment:Ax,transmission_pars_fragment:Rx,uv_pars_fragment:Cx,uv_pars_vertex:Px,uv_vertex:Lx,worldpos_vertex:Ix,background_vert:Nx,background_frag:Dx,backgroundCube_vert:Ux,backgroundCube_frag:kx,cube_vert:Fx,cube_frag:Ox,depth_vert:zx,depth_frag:Bx,distance_vert:Hx,distance_frag:Vx,equirect_vert:Gx,equirect_frag:Wx,linedashed_vert:Xx,linedashed_frag:qx,meshbasic_vert:$x,meshbasic_frag:Yx,meshlambert_vert:Kx,meshlambert_frag:Jx,meshmatcap_vert:Zx,meshmatcap_frag:jx,meshnormal_vert:Qx,meshnormal_frag:e_,meshphong_vert:t_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:s_,meshtoon_vert:r_,meshtoon_frag:o_,points_vert:a_,points_frag:c_,shadow_vert:l_,shadow_frag:h_,sprite_vert:u_,sprite_frag:d_},de={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},zn={basic:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Jt([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Jt([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Jt([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Jt([de.common,de.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Jt([de.lights,de.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};zn.physical={uniforms:Jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const to={r:0,b:0,g:0},f_=new Oe,Xd=new Fe;Xd.set(-1,0,0,0,1,0,0,0,1);function p_(s,e,t,n,i,r){const o=new Re(0);let a=i===!0?0:1,c,l,h=null,u=0,d=null;function f(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){const y=_.backgroundBlurriness>0;E=e.get(E,y)}return E}function p(_){let E=!1;const y=f(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),E=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,E){const y=f(E);y&&(y.isCubeTexture||y.mapping===ko)?(l===void 0&&(l=new rt(new Yn(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ss(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xd),l.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rt(new qi(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ss(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,E){_.getRGB(to,kd(s)),t.buffers.color.setClear(to.r,to.g,to.b,E,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function m_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(P,I,F,N,V){let Y=!1;const K=u(P,N,F,I);r!==K&&(r=K,l(r.object)),Y=f(P,N,F,V),Y&&p(P,N,F,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(P,I,F,N),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return s.createVertexArray()}function l(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function u(P,I,F,N){const V=N.wireframe===!0;let Y=n[I.id];Y===void 0&&(Y={},n[I.id]=Y);const K=P.isInstancedMesh===!0?P.id:0;let ie=Y[K];ie===void 0&&(ie={},Y[K]=ie);let X=ie[F.id];X===void 0&&(X={},ie[F.id]=X);let ee=X[V];return ee===void 0&&(ee=d(c()),X[V]=ee),ee}function d(P){const I=[],F=[],N=[];for(let V=0;V<t;V++)I[V]=0,F[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,I,F,N){const V=r.attributes,Y=I.attributes;let K=0;const ie=F.getAttributes();for(const X in ie)if(ie[X].location>=0){const ne=V[X];let Ie=Y[X];if(Ie===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Ie=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Ie=P.instanceColor)),ne===void 0||ne.attribute!==Ie||Ie&&ne.data!==Ie.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function p(P,I,F,N){const V={},Y=I.attributes;let K=0;const ie=F.getAttributes();for(const X in ie)if(ie[X].location>=0){let ne=Y[X];ne===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const Ie={};Ie.attribute=ne,ne&&ne.data&&(Ie.data=ne.data),V[X]=Ie,K++}r.attributes=V,r.attributesNum=K,r.index=N}function x(){const P=r.newAttributes;for(let I=0,F=P.length;I<F;I++)P[I]=0}function m(P){g(P,0)}function g(P,I){const F=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;F[P]=1,N[P]===0&&(s.enableVertexAttribArray(P),N[P]=1),V[P]!==I&&(s.vertexAttribDivisor(P,I),V[P]=I)}function _(){const P=r.newAttributes,I=r.enabledAttributes;for(let F=0,N=I.length;F<N;F++)I[F]!==P[F]&&(s.disableVertexAttribArray(F),I[F]=0)}function E(P,I,F,N,V,Y,K){K===!0?s.vertexAttribIPointer(P,I,F,V,Y):s.vertexAttribPointer(P,I,F,N,V,Y)}function y(P,I,F,N){x();const V=N.attributes,Y=F.getAttributes(),K=I.defaultAttributeValues;for(const ie in Y){const X=Y[ie];if(X.location>=0){let ee=V[ie];if(ee===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){const ne=ee.normalized,Ie=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;const gt=Ce.buffer,et=Ce.type,st=Ce.bytesPerElement,q=et===s.INT||et===s.UNSIGNED_INT||ee.gpuType===Hc;if(ee.isInterleavedBufferAttribute){const Q=ee.data,ye=Q.stride,ke=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)g(X.location+_e,Q.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<X.locationSize;_e++)m(X.location+_e);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let _e=0;_e<X.locationSize;_e++)E(X.location+_e,Ie/X.locationSize,et,ne,ye*st,(ke+Ie/X.locationSize*_e)*st,q)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)g(X.location+Q,ee.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Q=0;Q<X.locationSize;Q++)E(X.location+Q,Ie/X.locationSize,et,ne,Ie*st,Ie/X.locationSize*Q*st,q)}}else if(K!==void 0){const ne=K[ie];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(X.location,ne);break;case 3:s.vertexAttrib3fv(X.location,ne);break;case 4:s.vertexAttrib4fv(X.location,ne);break;default:s.vertexAttrib1fv(X.location,ne)}}}}_()}function S(){T();for(const P in n){const I=n[P];for(const F in I){const N=I[F];for(const V in N){const Y=N[V];for(const K in Y)h(Y[K].object),delete Y[K];delete N[V]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const F in I){const N=I[F];for(const V in N){const Y=N[V];for(const K in Y)h(Y[K].object),delete Y[K];delete N[V]}}delete n[P.id]}function A(P){for(const I in n){const F=n[I];for(const N in F){const V=F[N];if(V[P.id]===void 0)continue;const Y=V[P.id];for(const K in Y)h(Y[K].object),delete Y[K];delete V[P.id]}}}function v(P){for(const I in n){const F=n[I],N=P.isInstancedMesh===!0?P.id:0,V=F[N];if(V!==void 0){for(const Y in V){const K=V[Y];for(const ie in K)h(K[ie].object),delete K[ie];delete V[Y]}delete F[N],Object.keys(F).length===0&&delete n[I]}}}function T(){C(),o=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function g_(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function x_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==cn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const v=A===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==an&&A!==vn&&!v&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Te("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:b}}function __(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new wi,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,E=_*4;let y=g.clippingState||null;c.value=y,y=h(p,d,E,f);for(let S=0;S!==E;++S)y[S]=t[S];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,p!==!0||m===null){const g=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,y=f;E!==x;++E,y+=4)o.copy(u[E]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const ps=4,v_=6,y_=20,M_=256,zs=new Tr,Gh=new Re;let wa=null,Ta=0,Ea=0,Aa=!1;const b_=new R,ki=new R;class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=b_}=r;wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Ta,Ea),this._renderer.xr.enabled=Aa,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:qn,format:cn,colorSpace:un,depthBuffer:!1},i=Xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=S_(r)),this._blurMaterial=T_(r,e,t),this._ggxMaterial=w_(r,e,t)}return i}_compileMaterial(e){const t=new rt(new At,e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,n,i,r){const c=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Gh),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new Yn,new on({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(Gh),g=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const S=this._cubeSize;us(i,y*S,E>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vi||e.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;us(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-ps?n-p+ps:0),g=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,us(r,m,g,3*x,2*x),i.setRenderTarget(r),i.render(a,zs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,us(e,m,g,3*x,2*x),i.setRenderTarget(e),i.render(a,zs)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-ps?i-this._lodMax+ps:0),d=4*(this._cubeSize-h);us(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(c,zs)}}function S_(s){const e=[],t=[];let n=s;const i=s-ps+1+v_;for(let r=0;r<i;r++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let g=0;g<u;g++){const _=g%3*2/3-1,E=g>2?0:-1,y=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];p.set(y,f*d*g);for(let S=0;S<d;S++){const b=h[S*2]*2-1,A=h[S*2+1]*2-1;g===0?ki.set(1,A,b):g===1?ki.set(-b,1,-A):g===2?ki.set(-b,A,1):g===3?ki.set(-1,A,-b):g===4?ki.set(-b,-1,A):ki.set(b,A,-1),ki.toArray(x,(g*d+S)*f)}}const m=new At;m.setAttribute("position",new Qt(p,f)),m.setAttribute("outputDirection",new Qt(x,f)),t.push(new rt(m,null)),n>ps&&n--}return{lodMeshes:t,sizeLods:e}}function Xh(s,e,t){const n=new hn(s,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function w_(s,e,t){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function T_(s,e,t){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:y_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function qh(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function $h(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class qd extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Td(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yn(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:ai});r.uniforms.tEquirect.value=t;const o=new rt(i,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=Ft),new ym(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function E_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===qo||f===$o)if(e.has(d)){const p=e.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new qd(p.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===qo||f===$o,x=f===Vi||f===vs;if(p||x){let m=t.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Wh(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return p&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Wh(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===qo?d.mapping=Vi:f===$o&&(d.mapping=vs),d}function c(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function A_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ms("WebGLRenderer: "+n+" extension not supported."),i}}}function R_(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,p=u.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const _=f.array;x=f.version;for(let E=0,y=_.length;E<y;E+=3){const S=_[E+0],b=_[E+1],A=_[E+2];d.push(S,b,b,A,A,S)}}else{const _=p.array;x=p.version;for(let E=0,y=_.length/3-1;E<y;E+=3){const S=E+0,b=E+1,A=E+2;d.push(S,b,b,A,A,S)}}const m=new(p.count>=65535?Md:yd)(d,1);m.version=x;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function C_(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){s.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function P_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:De("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function L_(s,e,t){const n=new WeakMap,i=new pt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let y=a.attributes.position.count*E,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*S*4*u),A=new gd(b,y,S,u);A.type=vn,A.needsUpdate=!0;const v=E*4;for(let C=0;C<u;C++){const P=m[C],I=g[C],F=_[C],N=y*S*4*C;for(let V=0;V<P.count;V++){const Y=V*v;f===!0&&(i.fromBufferAttribute(P,V),b[N+Y+0]=i.x,b[N+Y+1]=i.y,b[N+Y+2]=i.z,b[N+Y+3]=0),p===!0&&(i.fromBufferAttribute(I,V),b[N+Y+4]=i.x,b[N+Y+5]=i.y,b[N+Y+6]=i.z,b[N+Y+7]=0),x===!0&&(i.fromBufferAttribute(F,V),b[N+Y+8]=i.x,b[N+Y+9]=i.y,b[N+Y+10]=i.z,b[N+Y+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new re(y,S)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function I_(s,e,t,n,i){let r=new WeakMap;function o(l){const h=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const N_={[ju]:"LINEAR_TONE_MAPPING",[Qu]:"REINHARD_TONE_MAPPING",[ed]:"CINEON_TONE_MAPPING",[td]:"ACES_FILMIC_TONE_MAPPING",[id]:"AGX_TONE_MAPPING",[sd]:"NEUTRAL_TONE_MAPPING",[nd]:"CUSTOM_TONE_MAPPING"};function D_(s,e,t,n,i,r){const o=new hn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new At;l.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ye([0,2,0,0,2,0],2));const h=new Y0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new rt(l,h),d=new Tr(-1,1,1,-1,0,1);let f=null,p=null,x=!1,m,g=null,_=[],E=!1;this.setSize=function(y,S){o.setSize(y,S),a!==null&&a.setSize(y,S),c!==null&&c.setSize(y,S);for(let b=0;b<_.length;b++){const A=_[b];A.setSize&&A.setSize(y,S)}},this.setEffects=function(y){_=y,E=_.length>0&&_[0].isRenderPass===!0;const S=o.width,b=o.height;_.length>0&&a===null&&(a=new hn(S,b,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new hn(S,b,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){const v=_[A];v.setSize&&v.setSize(S,b)}},this.begin=function(y,S){if(x||y.toneMapping===Wn&&_.length===0)return!1;if(g=S,S!==null){const b=S.width,A=S.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return E===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Wn,!0},this.hasRenderPass=function(){return E},this.end=function(y,S){y.toneMapping=m,x=!0;let b=o,A=a;for(let v=0;v<_.length;v++){const T=_[v];T.enabled!==!1&&(T.render(y,A,b,S),T.needsSwap!==!1&&(b=A,A=A===a?c:a))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},Ze.getTransfer(f)===lt&&(h.defines.SRGB_TRANSFER="");const v=N_[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(g),y.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const $d=new Ot,Nc=new Ms(1,1),Yd=new gd,Kd=new Bp,Jd=new Td,Yh=[],Kh=[],Jh=new Float32Array(16),Zh=new Float32Array(9),jh=new Float32Array(4);function Rs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Yh[i];if(r===void 0&&(r=new Float32Array(i),Yh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Go(s,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function U_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function F_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function O_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function z_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;jh.set(n),s.uniformMatrix2fv(this.addr,!1,jh),Bt(t,n)}}function B_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;Zh.set(n),s.uniformMatrix3fv(this.addr,!1,Zh),Bt(t,n)}}function H_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;Jh.set(n),s.uniformMatrix4fv(this.addr,!1,Jh),Bt(t,n)}}function V_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function G_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function W_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function X_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function q_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function Y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function K_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function J_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Nc.compareFunction=t.isReversedDepthBuffer()?Kc:Yc,r=Nc):r=$d,t.setTexture2D(e||r,i)}function Z_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kd,i)}function j_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jd,i)}function Q_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yd,i)}function ev(s){switch(s){case 5126:return U_;case 35664:return k_;case 35665:return F_;case 35666:return O_;case 35674:return z_;case 35675:return B_;case 35676:return H_;case 5124:case 35670:return V_;case 35667:case 35671:return G_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return $_;case 36295:return Y_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return Q_}}function tv(s,e){s.uniform1fv(this.addr,e)}function nv(s,e){const t=Rs(e,this.size,2);s.uniform2fv(this.addr,t)}function iv(s,e){const t=Rs(e,this.size,3);s.uniform3fv(this.addr,t)}function sv(s,e){const t=Rs(e,this.size,4);s.uniform4fv(this.addr,t)}function rv(s,e){const t=Rs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ov(s,e){const t=Rs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function av(s,e){const t=Rs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function cv(s,e){s.uniform1iv(this.addr,e)}function lv(s,e){s.uniform2iv(this.addr,e)}function hv(s,e){s.uniform3iv(this.addr,e)}function uv(s,e){s.uniform4iv(this.addr,e)}function dv(s,e){s.uniform1uiv(this.addr,e)}function fv(s,e){s.uniform2uiv(this.addr,e)}function pv(s,e){s.uniform3uiv(this.addr,e)}function mv(s,e){s.uniform4uiv(this.addr,e)}function gv(s,e,t){const n=this.cache,i=e.length,r=Go(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Nc:o=$d;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function xv(s,e,t){const n=this.cache,i=e.length,r=Go(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kd,r[o])}function _v(s,e,t){const n=this.cache,i=e.length,r=Go(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jd,r[o])}function vv(s,e,t){const n=this.cache,i=e.length,r=Go(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yd,r[o])}function yv(s){switch(s){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return cv;case 35667:case 35671:return lv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return vv}}class Mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ev(t.type)}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yv(t.type)}}class Sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Qh(s,e){s.seq.push(e),s.map[e.id]=e}function wv(s,e,t){const n=s.name,i=n.length;for(Ra.lastIndex=0;;){const r=Ra.exec(n),o=Ra.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Qh(t,l===void 0?new Mv(a,s,e):new bv(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Sv(a),Qh(t,u)),t=u}}}class fo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);wv(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function eu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Tv=37297;let Ev=0;function Av(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const tu=new Fe;function Rv(s){Ze._getMatrix(tu,Ze.workingColorSpace,s);const e=`mat3( ${tu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case So:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function nu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Av(s.getShaderSource(e),a)}else return r}function Cv(s,e){const t=Rv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Pv={[ju]:"Linear",[Qu]:"Reinhard",[ed]:"Cineon",[td]:"ACESFilmic",[id]:"AgX",[sd]:"Neutral",[nd]:"Custom"};function Lv(s,e){const t=Pv[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const no=new R;function Iv(){Ze.getLuminanceCoefficients(no);const s=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Dv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Uv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function js(s){return s!==""}function iu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function su(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(s){return s.replace(kv,Ov)}const Fv=new Map;function Ov(s,e){let t=Ge[e];if(t===void 0){const n=Fv.get(e);if(n!==void 0)t=Ge[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dc(t)}const zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(s){return s.replace(zv,Bv)}function Bv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ou(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Hv={[Qs]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function Vv(s){return Hv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gv={[Vi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE_UV"};function Wv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Gv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Xv={[vs]:"ENVMAP_MODE_REFRACTION"};function qv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Xv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $v={[Zu]:"ENVMAP_BLENDING_MULTIPLY",[ep]:"ENVMAP_BLENDING_MIX",[tp]:"ENVMAP_BLENDING_ADD"};function Yv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$v[s.combine]||"ENVMAP_BLENDING_NONE"}function Kv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Vv(t),l=Wv(t),h=qv(t),u=Yv(t),d=Kv(t),f=Nv(t),p=Dv(r),x=i.createProgram();let m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(js).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(js).join(`
`),g.length>0&&(g+=`
`)):(m=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),g=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Wn?Lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Cv("linearToOutputTexel",t.outputColorSpace),Iv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=Dc(o),o=iu(o,t),o=su(o,t),a=Dc(a),a=iu(a,t),a=su(a,t),o=ru(o),a=ru(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=_+m+o,y=_+g+a,S=eu(i,i.VERTEX_SHADER,E),b=eu(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(P){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(S)||"",N=i.getShaderInfoLog(b)||"",V=I.trim(),Y=F.trim(),K=N.trim();let ie=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,b);else{const ee=nu(i,S,"vertex"),ne=nu(i,b,"fragment");De("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ee+`
`+ne)}else V!==""?Te("WebGLProgram: Program Info Log:",V):(Y===""||K==="")&&(X=!1);X&&(P.diagnostics={runnable:ie,programLog:V,vertexShader:{log:Y,prefix:m},fragmentShader:{log:K,prefix:g}})}i.deleteShader(S),i.deleteShader(b),v=new fo(i,x),T=Uv(i,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,Tv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ev++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}let Zv=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qv(e),t.set(e,n)),n}}class Qv{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}}function ey(s){return s===Wi||s===yo||s===Mo}function ty(s,e,t,n,i,r){const o=new xd,a=new jv,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,T,C,P,I,F){const N=P.fog,V=I.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||Y,K),X=ie&&ie.mapping===ko?ie.image.height:null,ee=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Te("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ie=ne!==void 0?ne.length:0;let Ce=0;V.morphAttributes.position!==void 0&&(Ce=1),V.morphAttributes.normal!==void 0&&(Ce=2),V.morphAttributes.color!==void 0&&(Ce=3);let gt,et,st,q;if(ee){const _t=zn[ee];gt=_t.vertexShader,et=_t.fragmentShader}else{gt=v.vertexShader,et=v.fragmentShader;const _t=a.getVertexShaderStage(v),ot=a.getFragmentShaderStage(v);a.update(v,_t,ot),st=_t.id,q=ot.id}const Q=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),ke=I.isInstancedMesh===!0,_e=I.isBatchedMesh===!0,qe=!!v.map,kt=!!v.matcap,Ke=!!ie,nt=!!v.aoMap,xt=!!v.lightMap,Qe=!!v.bumpMap&&v.wireframe===!1,Mt=!!v.normalMap,Ht=!!v.displacementMap,en=!!v.emissiveMap,wt=!!v.metalnessMap,Nt=!!v.roughnessMap,k=v.anisotropy>0,Wt=v.clearcoat>0,ct=v.dispersion>0,L=v.retroreflectivity>0,M=v.iridescence>0,O=v.sheen>0,H=v.transmission>0,W=k&&!!v.anisotropyMap,se=Wt&&!!v.clearcoatMap,oe=Wt&&!!v.clearcoatNormalMap,$=Wt&&!!v.clearcoatRoughnessMap,j=M&&!!v.iridescenceMap,ae=M&&!!v.iridescenceThicknessMap,Ee=O&&!!v.sheenColorMap,ue=O&&!!v.sheenRoughnessMap,ce=!!v.specularMap,Ae=!!v.specularColorMap,Ne=!!v.specularIntensityMap,ze=H&&!!v.transmissionMap,U=H&&!!v.thicknessMap,le=!!v.gradientMap,J=!!v.alphaMap,he=v.alphaTest>0,me=!!v.alphaHash,te=!!v.extensions;let Pe=Wn;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Pe=s.toneMapping);const Se={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:gt,fragmentShader:et,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:_e,batchingColor:_e&&I._colorsTexture!==null,instancing:ke,instancingColor:ke&&I.instanceColor!==null,instancingMorph:ke&&I.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:qe,matcap:kt,envMap:Ke,envMapMode:Ke&&ie.mapping,envMapCubeUVHeight:X,aoMap:nt,lightMap:xt,bumpMap:Qe,normalMap:Mt,displacementMap:Ht,emissiveMap:en,normalMapObjectSpace:Mt&&v.normalMapType===op,normalMapTangentSpace:Mt&&v.normalMapType===bo,packedNormalMap:Mt&&v.normalMapType===bo&&ey(v.normalMap.format),metalnessMap:wt,roughnessMap:Nt,anisotropy:k,anisotropyMap:W,clearcoat:Wt,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:$,dispersion:ct,retroreflection:L,iridescence:M,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:O,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:ce,specularColorMap:Ae,specularIntensityMap:Ne,transmission:H,transmissionMap:ze,thicknessMap:U,gradientMap:le,opaque:v.transparent===!1&&v.blending===er&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:me,combine:v.combine,mapUv:qe&&p(v.map.channel),aoMapUv:nt&&p(v.aoMap.channel),lightMapUv:xt&&p(v.lightMap.channel),bumpMapUv:Qe&&p(v.bumpMap.channel),normalMapUv:Mt&&p(v.normalMap.channel),displacementMapUv:Ht&&p(v.displacementMap.channel),emissiveMapUv:en&&p(v.emissiveMap.channel),metalnessMapUv:wt&&p(v.metalnessMap.channel),roughnessMapUv:Nt&&p(v.roughnessMap.channel),anisotropyMapUv:W&&p(v.anisotropyMap.channel),clearcoatMapUv:se&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&p(v.sheenRoughnessMap.channel),specularMapUv:ce&&p(v.specularMap.channel),specularColorMapUv:Ae&&p(v.specularColorMap.channel),specularIntensityMapUv:Ne&&p(v.specularIntensityMap.channel),transmissionMapUv:ze&&p(v.transmissionMap.channel),thicknessMapUv:U&&p(v.thicknessMap.channel),alphaMapUv:J&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Mt||k),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(qe||J),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&Mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ce,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,decodeVideoTexture:qe&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:en&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_n,flipSided:v.side===jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(g(T,v),_(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function _(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){const T=f[v.type];let C;if(T){const P=zn[T];C=X0.clone(P.uniforms)}else C=v.uniforms;return C}function y(v,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Jv(s,T,v,i),l.push(C),h.set(T,C)),C}function S(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:A}}function ny(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function iy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function au(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),e++,_}function c(d,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);const E=a(d,f,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):t.push(E)}function l(d,f,p,x,m,g){const _=a(d,f,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||iy),n.length>1&&n.sort(f||au),i.length>1&&i.sort(f||au)}function u(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function sy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new cu,s.set(n,[o])):i>=r.length?(o=new cu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ry(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function oy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ay=0;function cy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ly(s){const e=new ry,t=oy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new Oe,o=new Oe;function a(l){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,E=0,y=0,S=0,b=0,A=0,v=0,T=0,C=0;l.sort(cy);for(let I=0,F=l.length;I<F;I++){const N=l[I],V=N.color,Y=N.intensity,K=N.distance;let ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Wi?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=V.r*Y,u+=V.g*Y,d+=V.b*Y;else if(N.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(N.sh.coefficients[X],Y);C++}else if(N.isSunLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ee=N.shadow,ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[p]=ne,n.sunShadowMap[p]=ie;const Ie=ee.getViewportCount();for(let Ce=0;Ce<Ie;Ce++)n.sunShadowMatrix[x+Ce]=ee.getMatrix(Ce),n.sunShadowCascade[x+Ce]=ee._cascadeData[Ce];x+=Ie,p++}n.sun[f]=X,f++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ee=N.shadow,ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=N.shadow.matrix,S++}n.directional[m]=X,m++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(V).multiplyScalar(Y),X.distance=K,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,n.spot[_]=X;const ee=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,ee.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[_]=ee.matrix,N.castShadow){const ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.spotShadow[_]=ne,n.spotShadowMap[_]=ie,A++}_++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(V).multiplyScalar(Y),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=X,E++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const ee=N.shadow,ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=X,g++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(Y),X.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[y]=X,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==E||P.hemiLength!==y||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=E,P.hemiLength=y,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=C,n.version=ay++)}function c(l,h){let u=0,d=0,f=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let _=0,E=l.length;_<E;_++){const y=l[_];if(y.isSunLight){const S=n.sun[u];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),u++}else if(y.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),d++}else if(y.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function lu(s){const e=new ly(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){i.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function hy(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new lu(s),e.set(i,[a])):r>=o.length?(a=new lu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fy=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],py=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],hu=new Oe,Bs=new R,Ca=new R;function my(s,e,t){let n=new el;const i=new re,r=new re,o=new pt,a=new K0,c=new J0,l={},h=t.maxTextureSize,u={[Ri]:jt,[jt]:Ri,[_n]:_n},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:uy,fragmentShader:dy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new At;p.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let g=this.type;this.render=function(b,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Uf&&(Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs);const T=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(ai),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=g!==this.type;F&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=b.length;N<V;N++){const Y=b[N],K=Y.shadow;if(K===void 0){Te("WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const ie=K.getFrameExtents();i.multiply(ie),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,K.mapSize.y=r.y));const X=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=X,K.map===null||F===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ks){if(Y.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new hn(i.x,i.y,{format:Wi,type:qn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),K.map.texture.name=Y.name+".shadowMap",K.map.depthTexture=new Ms(i.x,i.y,vn),K.map.depthTexture.name=Y.name+".shadowMapDepth",K.map.depthTexture.format=ui,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Et,K.map.depthTexture.magFilter=Et}else Y.isPointLight?(K.map=new qd(i.x),K.map.depthTexture=new u0(i.x,Xn)):(K.map=new hn(i.x,i.y),K.map.depthTexture=new Ms(i.x,i.y,Xn)),K.map.depthTexture.name=Y.name+".shadowMap",K.map.depthTexture.format=ui,this.type===Qs?(K.map.depthTexture.compareFunction=X?Kc:Yc,K.map.depthTexture.minFilter=Ft,K.map.depthTexture.magFilter=Ft):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Et,K.map.depthTexture.magFilter=Et);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==i.x||K.map.height!==i.y)&&K.map.setSize(i.x,i.y);const ee=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Y.isPointLight!==!0&&K.updateMatrices(Y,v);for(let ne=0;ne<ee;ne++){const Ie=K.getCamera(ne);if(Y.isPointLight){const Ce=K.camera,gt=K.matrix,et=Y.distance||Ce.far;et!==Ce.far&&(Ce.far=et,Ce.updateProjectionMatrix()),Bs.setFromMatrixPosition(Y.matrixWorld),Ce.position.copy(Bs),Ca.copy(Ce.position),Ca.add(fy[ne]),Ce.up.copy(py[ne]),Ce.lookAt(Ca),Ce.updateMatrixWorld(),gt.makeTranslation(-Bs.x,-Bs.y,-Bs.z),hu.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),K._frustum.setFromProjectionMatrix(hu,Ce.coordinateSystem,Ce.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(K.map),s.clear());const Ce=K.getViewport(ne);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),I.viewport(o)}n=K.getFrustum(ne),y(A,v,Ie,Y,this.type)}K.isPointLightShadow!==!0&&this.type===Ks&&_(K,v),K.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(T,C,P)};function _(b,A){const v=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new hn(i.x,i.y,{format:Wi,type:qn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,v,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,v,f,x,null)}function E(b,A,v,T){let C=null;const P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)C=P;else if(C=v.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=C.uuid,F=A.uuid;let N=l[I];N===void 0&&(N={},l[I]=N);let V=N[F];V===void 0&&(V=C.clone(),N[F]=V,A.addEventListener("dispose",S)),C=V}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Ks?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=s.properties.get(C);I.light=v}return C}function y(b,A,v,T,C){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Ks)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const F=e.update(b),N=b.material;if(Array.isArray(N)){const V=F.groups;for(let Y=0,K=V.length;Y<K;Y++){const ie=V[Y],X=N[ie.materialIndex];if(X&&X.visible){const ee=E(b,X,T,C);b.onBeforeShadow(s,b,A,v,F,ee,ie),s.renderBufferDirect(v,null,F,ee,b,ie),b.onAfterShadow(s,b,A,v,F,ee,ie)}}}else if(N.visible){const V=E(b,N,T,C);b.onBeforeShadow(s,b,A,v,F,V,null),s.renderBufferDirect(v,null,F,V,b,null),b.onAfterShadow(s,b,A,v,F,V,null)}}const I=b.children;for(let F=0,N=I.length;F<N;F++)y(I[F],A,v,T,C)}function S(b){b.target.removeEventListener("dispose",S);for(const v in l){const T=l[v],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function gy(s,e){function t(){let U=!1;const le=new pt;let J=null;const he=new pt(0,0,0,0);return{setMask:function(me){J!==me&&!U&&(s.colorMask(me,me,me,me),J=me)},setLocked:function(me){U=me},setClear:function(me,te,Pe,Se,_t){_t===!0&&(me*=Se,te*=Se,Pe*=Se),le.set(me,te,Pe,Se),he.equals(le)===!1&&(s.clearColor(me,te,Pe,Se),he.copy(le))},reset:function(){U=!1,J=null,he.set(-1,0,0,0)}}}function n(){let U=!1,le=!1,J=null,he=null,me=null;return{setReversed:function(te){if(le!==te){const Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),le=te;const Se=me;me=null,this.setClear(Se)}},getReversed:function(){return le},setTest:function(te){te?Q(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(te){J!==te&&!U&&(s.depthMask(te),J=te)},setFunc:function(te){if(le&&(te=_p[te]),he!==te){switch(te){case qa:s.depthFunc(s.NEVER);break;case $a:s.depthFunc(s.ALWAYS);break;case Ya:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case Ka:s.depthFunc(s.EQUAL);break;case Ja:s.depthFunc(s.GEQUAL);break;case Za:s.depthFunc(s.GREATER);break;case ja:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=te}},setLocked:function(te){U=te},setClear:function(te){me!==te&&(me=te,le&&(te=1-te),s.clearDepth(te))},reset:function(){U=!1,J=null,he=null,me=null,le=!1}}}function i(){let U=!1,le=null,J=null,he=null,me=null,te=null,Pe=null,Se=null,_t=null;return{setTest:function(ot){U||(ot?Q(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(ot){le!==ot&&!U&&(s.stencilMask(ot),le=ot)},setFunc:function(ot,bn,Dn){(J!==ot||he!==bn||me!==Dn)&&(s.stencilFunc(ot,bn,Dn),J=ot,he=bn,me=Dn)},setOp:function(ot,bn,Dn){(te!==ot||Pe!==bn||Se!==Dn)&&(s.stencilOp(ot,bn,Dn),te=ot,Pe=bn,Se=Dn)},setLocked:function(ot){U=ot},setClear:function(ot){_t!==ot&&(s.clearStencil(ot),_t=ot)},reset:function(){U=!1,le=null,J=null,he=null,me=null,te=null,Pe=null,Se=null,_t=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,E=null,y=null,S=null,b=null,A=null,v=new Re(0,0,0),T=0,C=!1,P=null,I=null,F=null,N=null,V=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=ie>=2);let ee=null,ne={};const Ie=s.getParameter(s.SCISSOR_BOX),Ce=s.getParameter(s.VIEWPORT),gt=new pt().fromArray(Ie),et=new pt().fromArray(Ce);function st(U,le,J,he){const me=new Uint8Array(4),te=s.createTexture();s.bindTexture(U,te),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<J;Pe++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(le+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return te}const q={};q[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(cr),Qe(!1),Mt(zl),Q(s.CULL_FACE),nt(ai);function Q(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function ye(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function ke(U,le){return d[U]!==le?(s.bindFramebuffer(U,le),d[U]=le,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=le),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(U,le){let J=p,he=!1;if(U){J=f.get(le),J===void 0&&(J=[],f.set(le,J));const me=U.textures;if(J.length!==me.length||J[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Pe=me.length;te<Pe;te++)J[te]=s.COLOR_ATTACHMENT0+te;J.length=me.length,he=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,he=!0);he&&s.drawBuffers(J)}function qe(U){return x!==U?(s.useProgram(U),x=U,!0):!1}const kt={[fs]:s.FUNC_ADD,[Ff]:s.FUNC_SUBTRACT,[Of]:s.FUNC_REVERSE_SUBTRACT};kt[zf]=s.MIN,kt[Bf]=s.MAX;const Ke={[Hf]:s.ZERO,[Vf]:s.ONE,[Gf]:s.SRC_COLOR,[Ku]:s.SRC_ALPHA,[Kf]:s.SRC_ALPHA_SATURATE,[$f]:s.DST_COLOR,[Xf]:s.DST_ALPHA,[Wf]:s.ONE_MINUS_SRC_COLOR,[Ju]:s.ONE_MINUS_SRC_ALPHA,[Yf]:s.ONE_MINUS_DST_COLOR,[qf]:s.ONE_MINUS_DST_ALPHA,[Jf]:s.CONSTANT_COLOR,[Zf]:s.ONE_MINUS_CONSTANT_COLOR,[jf]:s.CONSTANT_ALPHA,[Qf]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(U,le,J,he,me,te,Pe,Se,_t,ot){if(U===ai){m===!0&&(ye(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),U!==kf){if(U!==g||ot!==C){if((_!==fs||S!==fs)&&(s.blendEquation(s.FUNC_ADD),_=fs,S=fs),ot)switch(U){case er:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bl:s.blendFunc(s.ONE,s.ONE);break;case Hl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:De("WebGLState: Invalid blending: ",U);break}else switch(U){case er:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hl:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",U);break}E=null,y=null,b=null,A=null,v.set(0,0,0),T=0,g=U,C=ot}return}me=me||le,te=te||J,Pe=Pe||he,(le!==_||me!==S)&&(s.blendEquationSeparate(kt[le],kt[me]),_=le,S=me),(J!==E||he!==y||te!==b||Pe!==A)&&(s.blendFuncSeparate(Ke[J],Ke[he],Ke[te],Ke[Pe]),E=J,y=he,b=te,A=Pe),(Se.equals(v)===!1||_t!==T)&&(s.blendColor(Se.r,Se.g,Se.b,_t),v.copy(Se),T=_t),g=U,C=!1}function xt(U,le){U.side===_n?ye(s.CULL_FACE):Q(s.CULL_FACE);let J=U.side===jt;le&&(J=!J),Qe(J),U.blending===er&&U.transparent===!1?nt(ai):nt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const he=U.stencilWrite;a.setTest(he),he&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),en(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(U){P!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),P=U)}function Mt(U){U!==Nf?(Q(s.CULL_FACE),U!==I&&(U===zl?s.cullFace(s.BACK):U===Df?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),I=U}function Ht(U){U!==F&&(K&&s.lineWidth(U),F=U)}function en(U,le,J){U?(Q(s.POLYGON_OFFSET_FILL),(N!==le||V!==J)&&(N=le,V=J,o.getReversed()&&(le=-le),s.polygonOffset(le,J))):ye(s.POLYGON_OFFSET_FILL)}function wt(U){U?Q(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Nt(U){U===void 0&&(U=s.TEXTURE0+Y-1),ee!==U&&(s.activeTexture(U),ee=U)}function k(U,le,J){J===void 0&&(ee===null?J=s.TEXTURE0+Y-1:J=ee);let he=ne[J];he===void 0&&(he={type:void 0,texture:void 0},ne[J]=he),(he.type!==U||he.texture!==le)&&(ee!==J&&(s.activeTexture(J),ee=J),s.bindTexture(U,le||q[U]),he.type=U,he.texture=le)}function Wt(){const U=ne[ee];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{s.compressedTexImage2D(...arguments)}catch(U){De("WebGLState:",U)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(U){De("WebGLState:",U)}}function M(){try{s.texSubImage2D(...arguments)}catch(U){De("WebGLState:",U)}}function O(){try{s.texSubImage3D(...arguments)}catch(U){De("WebGLState:",U)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(U){De("WebGLState:",U)}}function W(){try{s.compressedTexSubImage3D(...arguments)}catch(U){De("WebGLState:",U)}}function se(){try{s.texStorage2D(...arguments)}catch(U){De("WebGLState:",U)}}function oe(){try{s.texStorage3D(...arguments)}catch(U){De("WebGLState:",U)}}function $(){try{s.texImage2D(...arguments)}catch(U){De("WebGLState:",U)}}function j(){try{s.texImage3D(...arguments)}catch(U){De("WebGLState:",U)}}function ae(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function Ee(U,le){u[U]!==le&&(s.pixelStorei(U,le),u[U]=le)}function ue(U){gt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),gt.copy(U))}function ce(U){et.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),et.copy(U))}function Ae(U,le){let J=l.get(le);J===void 0&&(J=new WeakMap,l.set(le,J));let he=J.get(U);he===void 0&&(he=s.getUniformBlockIndex(le,U.name),J.set(U,he))}function Ne(U,le){const he=l.get(le).get(U);c.get(le)!==he&&(s.uniformBlockBinding(le,he,U.__bindingPointIndex),c.set(le,he))}function ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},ee=null,ne={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,E=null,y=null,S=null,b=null,A=null,v=new Re(0,0,0),T=0,C=!1,P=null,I=null,F=null,N=null,V=null,gt.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:ye,bindFramebuffer:ke,drawBuffers:_e,useProgram:qe,setBlending:nt,setMaterial:xt,setFlipSided:Qe,setCullFace:Mt,setLineWidth:Ht,setPolygonOffset:en,setScissorTest:wt,activeTexture:Nt,bindTexture:k,unbindTexture:Wt,compressedTexImage2D:ct,compressedTexImage3D:L,texImage2D:$,texImage3D:j,pixelStorei:Ee,getParameter:ae,updateUBOMapping:Ae,uniformBlockBinding:Ne,texStorage2D:se,texStorage3D:oe,texSubImage2D:M,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:W,scissor:ue,viewport:ce,reset:ze}}function xy(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,M){return p?new OffscreenCanvas(L,M):pr("canvas")}function m(L,M,O){let H=1;const W=ct(L);if((W.width>O||W.height>O)&&(H=O/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const se=Math.floor(H*W.width),oe=Math.floor(H*W.height);d===void 0&&(d=x(se,oe));const $=M?x(se,oe):d;return $.width=se,$.height=oe,$.getContext("2d").drawImage(L,0,0,se,oe),Te("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+oe+")."),$}else return"data"in L&&Te("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),L;return L}function g(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(L,M,O,H,W,se=!1){if(L!==null){if(s[L]!==void 0)return s[L];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe;H&&(oe=e.get("EXT_texture_norm16"),oe||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8),O===s.UNSIGNED_SHORT&&oe&&($=oe.R16_EXT),O===s.SHORT&&oe&&($=oe.R16_SNORM_EXT)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),M===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8),O===s.UNSIGNED_SHORT&&oe&&($=oe.RG16_EXT),O===s.SHORT&&oe&&($=oe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RG8UI),O===s.UNSIGNED_SHORT&&($=s.RG16UI),O===s.UNSIGNED_INT&&($=s.RG32UI),O===s.BYTE&&($=s.RG8I),O===s.SHORT&&($=s.RG16I),O===s.INT&&($=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGB8UI),O===s.UNSIGNED_SHORT&&($=s.RGB16UI),O===s.UNSIGNED_INT&&($=s.RGB32UI),O===s.BYTE&&($=s.RGB8I),O===s.SHORT&&($=s.RGB16I),O===s.INT&&($=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGBA8UI),O===s.UNSIGNED_SHORT&&($=s.RGBA16UI),O===s.UNSIGNED_INT&&($=s.RGBA32UI),O===s.BYTE&&($=s.RGBA8I),O===s.SHORT&&($=s.RGBA16I),O===s.INT&&($=s.RGBA32I)),M===s.RGB&&(O===s.UNSIGNED_SHORT&&oe&&($=oe.RGB16_EXT),O===s.SHORT&&oe&&($=oe.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),M===s.RGBA){const j=se?So:Ze.getTransfer(W);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=j===lt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&oe&&($=oe.RGBA16_EXT),O===s.SHORT&&oe&&($=oe.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(L,M){let O;return L?M===null||M===Xn||M===hr?O=s.DEPTH24_STENCIL8:M===vn?O=s.DEPTH32F_STENCIL8:M===lr&&(O=s.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xn||M===hr?O=s.DEPTH_COMPONENT24:M===vn?O=s.DEPTH_COMPONENT32F:M===lr&&(O=s.DEPTH_COMPONENT16),O}function b(L,M){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Et&&L.minFilter!==Ft?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function A(L){const M=L.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function v(L){const M=L.target;M.removeEventListener("dispose",v),P(M)}function T(L){const M=n.get(L);if(M.__webglInit===void 0)return;const O=L.source,H=f.get(O);if(H){const W=H[M.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(L),Object.keys(H).length===0&&f.delete(O)}n.remove(L)}function C(L){const M=n.get(L);s.deleteTexture(M.__webglTexture);const O=L.source,H=f.get(O);delete H[M.__cacheKey],o.memory.textures--}function P(L){const M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let W=0;W<M.__webglFramebuffer[H].length;W++)s.deleteFramebuffer(M.__webglFramebuffer[H][W]);else s.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)s.deleteFramebuffer(M.__webglFramebuffer[H]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=L.textures;for(let H=0,W=O.length;H<W;H++){const se=n.get(O[H]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(O[H])}n.remove(L)}let I=0;function F(){I=0}function N(){return I}function V(L){I=L}function Y(){const L=I;return L>=i.maxTextures&&Te("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,L}function K(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ie(L,M){const O=n.get(L);if(L.isVideoTexture&&k(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&O.__version!==L.version){const H=L.image;if(H===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(O,L,M);return}}else L.isExternalTexture&&(O.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function X(L,M){const O=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&O.__version!==L.version){ye(O,L,M);return}else L.isExternalTexture&&(O.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function ee(L,M){const O=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&O.__version!==L.version){ye(O,L,M);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function ne(L,M){const O=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&O.__version!==L.version){ke(O,L,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}const Ie={[Gi]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[vo]:s.MIRRORED_REPEAT},Ce={[Et]:s.NEAREST,[od]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[ro]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},gt={[cp]:s.NEVER,[fp]:s.ALWAYS,[lp]:s.LESS,[Yc]:s.LEQUAL,[hp]:s.EQUAL,[Kc]:s.GEQUAL,[up]:s.GREATER,[dp]:s.NOTEQUAL};function et(L,M){if(M.type===vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ft||M.magFilter===ro||M.magFilter===Js||M.magFilter===ri||M.minFilter===Ft||M.minFilter===ro||M.minFilter===Js||M.minFilter===ri)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Ie[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Ie[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Ie[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ce[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ce[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Et||M.minFilter!==Js&&M.minFilter!==ri||M.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function st(L,M){let O=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",A));const H=M.source;let W=f.get(H);W===void 0&&(W={},f.set(H,W));const se=K(M);if(se!==L.__cacheKey){W[se]===void 0&&(W[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),W[se].usedTimes++;const oe=W[L.__cacheKey];oe!==void 0&&(W[L.__cacheKey].usedTimes--,oe.usedTimes===0&&C(M)),L.__cacheKey=se,L.__webglTexture=W[se].texture}return O}function q(L,M,O){return Math.floor(Math.floor(L/O)/M)}function Q(L,M,O,H){const se=L.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,O,H,M.data);else{se.sort((Ee,ue)=>Ee.start-ue.start);let oe=0;for(let Ee=1;Ee<se.length;Ee++){const ue=se[oe],ce=se[Ee],Ae=ue.start+ue.count,Ne=q(ce.start,M.width,4),ze=q(ue.start,M.width,4);ce.start<=Ae+1&&Ne===ze&&q(ce.start+ce.count-1,M.width,4)===Ne?ue.count=Math.max(ue.count,ce.start+ce.count-ue.start):(++oe,se[oe]=ce)}se.length=oe+1;const $=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ee=0,ue=se.length;Ee<ue;Ee++){const ce=se[Ee],Ae=Math.floor(ce.start/4),Ne=Math.ceil(ce.count/4),ze=Ae%M.width,U=Math.floor(Ae/M.width),le=Ne,J=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,ze,U,le,J,O,H,M.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae)}}function ye(L,M,O){let H=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=s.TEXTURE_3D);const W=st(L,M),se=M.source;t.bindTexture(H,L.__webglTexture,s.TEXTURE0+O);const oe=n.get(se);if(se.version!==oe.__version||W===!0){if(t.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const J=Ze.getPrimaries(Ze.workingColorSpace),he=M.colorSpace===Ei?null:Ze.getPrimaries(M.colorSpace),me=M.colorSpace===Ei||J===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let j=m(M.image,!1,i.maxTextureSize);j=Wt(M,j);const ae=r.convert(M.format,M.colorSpace),Ee=r.convert(M.type);let ue=y(M.internalFormat,ae,Ee,M.normalized,M.colorSpace,M.isVideoTexture);et(H,M);let ce;const Ae=M.mipmaps,Ne=M.isVideoTexture!==!0,ze=oe.__version===void 0||W===!0,U=se.dataReady,le=b(M,j);if(M.isDepthTexture)ue=S(M.format===Hi,M.type),ze&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,ue,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,ue,j.width,j.height,0,ae,Ee,null));else if(M.isDataTexture)if(Ae.length>0){Ne&&ze&&t.texStorage2D(s.TEXTURE_2D,le,ue,Ae[0].width,Ae[0].height);for(let J=0,he=Ae.length;J<he;J++)ce=Ae[J],Ne?U&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ce.width,ce.height,ae,Ee,ce.data):t.texImage2D(s.TEXTURE_2D,J,ue,ce.width,ce.height,0,ae,Ee,ce.data);M.generateMipmaps=!1}else Ne?(ze&&t.texStorage2D(s.TEXTURE_2D,le,ue,j.width,j.height),U&&Q(M,j,ae,Ee)):t.texImage2D(s.TEXTURE_2D,0,ue,j.width,j.height,0,ae,Ee,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,ue,Ae[0].width,Ae[0].height,j.depth);for(let J=0,he=Ae.length;J<he;J++)if(ce=Ae[J],M.format!==cn)if(ae!==null)if(Ne){if(U)if(M.layerUpdates.size>0){const me=Vh(ce.width,ce.height,M.format,M.type);for(const te of M.layerUpdates){const Pe=ce.data.subarray(te*me/ce.data.BYTES_PER_ELEMENT,(te+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,te,ce.width,ce.height,1,ae,Pe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,j.depth,ae,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,ue,ce.width,ce.height,j.depth,0,ce.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,j.depth,ae,Ee,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,ue,ce.width,ce.height,j.depth,0,ae,Ee,ce.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ne&&ze&&t.texStorage2D(s.TEXTURE_2D,le,ue,Ae[0].width,Ae[0].height);for(let J=0,he=Ae.length;J<he;J++)ce=Ae[J],M.format!==cn?ae!==null?Ne?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,J,ue,ce.width,ce.height,0,ce.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ce.width,ce.height,ae,Ee,ce.data):t.texImage2D(s.TEXTURE_2D,J,ue,ce.width,ce.height,0,ae,Ee,ce.data)}else if(M.isDataArrayTexture)if(Ne){if(ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,ue,j.width,j.height,j.depth),U)if(M.layerUpdates.size>0){const J=Vh(j.width,j.height,M.format,M.type);for(const he of M.layerUpdates){const me=j.data.subarray(he*J/j.data.BYTES_PER_ELEMENT,(he+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,j.width,j.height,1,ae,Ee,me)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,Ee,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,j.width,j.height,j.depth,0,ae,Ee,j.data);else if(M.isData3DTexture)Ne?(ze&&t.texStorage3D(s.TEXTURE_3D,le,ue,j.width,j.height,j.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,Ee,j.data)):t.texImage3D(s.TEXTURE_3D,0,ue,j.width,j.height,j.depth,0,ae,Ee,j.data);else if(M.isFramebufferTexture){if(ze)if(Ne)t.texStorage2D(s.TEXTURE_2D,le,ue,j.width,j.height);else{let J=j.width,he=j.height;for(let me=0;me<le;me++)t.texImage2D(s.TEXTURE_2D,me,ue,J,he,0,ae,Ee,null),J>>=1,he>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),u.add(M),J.onpaint=he=>{const me=he.changedElements;for(const te of u)me.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{const me=s.RGBA,te=s.RGBA,Pe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,me,te,Pe,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ne&&ze){const J=ct(Ae[0]);t.texStorage2D(s.TEXTURE_2D,le,ue,J.width,J.height)}for(let J=0,he=Ae.length;J<he;J++)ce=Ae[J],Ne?U&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae,Ee,ce):t.texImage2D(s.TEXTURE_2D,J,ue,ae,Ee,ce);M.generateMipmaps=!1}else if(Ne){if(ze){const J=ct(j);t.texStorage2D(s.TEXTURE_2D,le,ue,J.width,J.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,Ee,j)}else t.texImage2D(s.TEXTURE_2D,0,ue,ae,Ee,j);g(M)&&_(H),oe.__version=se.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ke(L,M,O){if(M.image.length!==6)return;const H=st(L,M),W=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+O);const se=n.get(W);if(W.version!==se.__version||H===!0){t.activeTexture(s.TEXTURE0+O);const oe=Ze.getPrimaries(Ze.workingColorSpace),$=M.colorSpace===Ei?null:Ze.getPrimaries(M.colorSpace),j=M.colorSpace===Ei||oe===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ae=M.isCompressedTexture||M.image[0].isCompressedTexture,Ee=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!ae&&!Ee?ue[te]=m(M.image[te],!0,i.maxCubemapSize):ue[te]=Ee?M.image[te].image:M.image[te],ue[te]=Wt(M,ue[te]);const ce=ue[0],Ae=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),ze=y(M.internalFormat,Ae,Ne,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,le=se.__version===void 0||H===!0,J=W.dataReady;let he=b(M,ce);et(s.TEXTURE_CUBE_MAP,M);let me;if(ae){U&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,ze,ce.width,ce.height);for(let te=0;te<6;te++){me=ue[te].mipmaps;for(let Pe=0;Pe<me.length;Pe++){const Se=me[Pe];M.format!==cn?Ae!==null?U?J&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,ze,Se.width,Se.height,0,Se.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Se.width,Se.height,Ae,Ne,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,ze,Se.width,Se.height,0,Ae,Ne,Se.data)}}}else{if(me=M.mipmaps,U&&le){me.length>0&&he++;const te=ct(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,ze,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Ae,Ne,ue[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,ue[te].width,ue[te].height,0,Ae,Ne,ue[te].data);for(let Pe=0;Pe<me.length;Pe++){const _t=me[Pe].image[te].image;U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,_t.width,_t.height,Ae,Ne,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,ze,_t.width,_t.height,0,Ae,Ne,_t.data)}}else{U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae,Ne,ue[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,Ae,Ne,ue[te]);for(let Pe=0;Pe<me.length;Pe++){const Se=me[Pe];U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,Ae,Ne,Se.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,ze,Ae,Ne,Se.image[te])}}}g(M)&&_(s.TEXTURE_CUBE_MAP),se.__version=W.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function _e(L,M,O,H,W,se){const oe=r.convert(O.format,O.colorSpace),$=r.convert(O.type),j=y(O.internalFormat,oe,$,O.normalized,O.colorSpace),ae=n.get(M),Ee=n.get(O);if(Ee.__renderTarget=M,!ae.__hasExternalTextures){const ue=Math.max(1,M.width>>se),ce=Math.max(1,M.height>>se);W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?t.texImage3D(W,se,j,ue,ce,M.depth,0,oe,$,null):t.texImage2D(W,se,j,ue,ce,0,oe,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Nt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,W,Ee.__webglTexture,0,wt(M)):(W===s.TEXTURE_2D||W>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,W,Ee.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(L,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const H=M.depthTexture,W=H&&H.isDepthTexture?H.type:null,se=S(M.stencilBuffer,W),oe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Nt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(M),se,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(M),se,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,se,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,L)}else{const H=M.textures;for(let W=0;W<H.length;W++){const se=H[W],oe=r.convert(se.format,se.colorSpace),$=r.convert(se.type),j=y(se.internalFormat,oe,$,se.normalized,se.colorSpace);Nt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(M),j,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(M),j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(L,M,O){const H=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(M.depthTexture);if(W.__renderTarget=M,(!W.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H){if(W.__webglInit===void 0&&(W.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),W.__webglTexture===void 0){W.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),et(s.TEXTURE_CUBE_MAP,M.depthTexture);const ae=r.convert(M.depthTexture.format),Ee=r.convert(M.depthTexture.type);let ue;M.depthTexture.format===ui?ue=s.DEPTH_COMPONENT24:M.depthTexture.format===Hi&&(ue=s.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ue,M.width,M.height,0,ae,Ee,null)}}else ie(M.depthTexture,0);const se=W.__webglTexture,oe=wt(M),$=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,j=M.depthTexture.format===Hi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===ui)Nt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,$,se,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,j,$,se,0);else if(M.depthTexture.format===Hi)Nt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,$,se,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,j,$,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(L){const M=n.get(L),O=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const H=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){const W=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),M.__depthDisposeCallback=W}M.__boundDepthTexture=H}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)kt(M.__webglFramebuffer[H],L,H);else{const H=L.texture.mipmaps;H&&H.length>0?kt(M.__webglFramebuffer[0],L,0):kt(M.__webglFramebuffer,L,0)}else if(O){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=s.createRenderbuffer(),qe(M.__webglDepthbuffer[H],L,!1);else{const W=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,se)}}else{const H=L.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),qe(M.__webglDepthbuffer,L,!1);else{const W=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,se)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(L,M,O){const H=n.get(L);M!==void 0&&_e(H.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ke(L)}function xt(L){const M=L.texture,O=n.get(L),H=n.get(M);L.addEventListener("dispose",v);const W=L.textures,se=L.isWebGLCubeRenderTarget===!0,oe=W.length>1;if(oe||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=M.version,o.memory.textures++),se){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let j=0;j<M.mipmaps.length;j++)O.__webglFramebuffer[$][j]=s.createFramebuffer()}else O.__webglFramebuffer[$]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)O.__webglFramebuffer[$]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(oe)for(let $=0,j=W.length;$<j;$++){const ae=n.get(W[$]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&Nt(L)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<W.length;$++){const j=W[$];O.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const ae=r.convert(j.format,j.colorSpace),Ee=r.convert(j.type),ue=y(j.internalFormat,ae,Ee,j.normalized,j.colorSpace,L.isXRRenderTarget===!0),ce=wt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ue,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,O.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(O.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),et(s.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)_e(O.__webglFramebuffer[$][j],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else _e(O.__webglFramebuffer[$],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);g(M)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let $=0,j=W.length;$<j;$++){const ae=W[$],Ee=n.get(ae);let ue=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),et(ue,ae),_e(O.__webglFramebuffer,L,ae,s.COLOR_ATTACHMENT0+$,ue,0),g(ae)&&_(ue)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&($=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,H.__webglTexture),et($,M),M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)_e(O.__webglFramebuffer[j],L,M,s.COLOR_ATTACHMENT0,$,j);else _e(O.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,$,0);g(M)&&_($),t.unbindTexture()}L.depthBuffer&&Ke(L)}function Qe(L){const M=L.textures;for(let O=0,H=M.length;O<H;O++){const W=M[O];if(g(W)){const se=E(L),oe=n.get(W).__webglTexture;t.bindTexture(se,oe),_(se),t.unbindTexture()}}}const Mt=[],Ht=[];function en(L){if(L.samples>0){if(Nt(L)===!1){const M=L.textures,O=L.width,H=L.height;let W=s.COLOR_BUFFER_BIT;const se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(L),$=M.length>1;if($)for(let ae=0;ae<M.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const j=L.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ae=0;ae<M.length;ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(W|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(W|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const Ee=n.get(M[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,O,H,0,0,O,H,W,s.NEAREST),c===!0&&(Mt.length=0,Ht.length=0,Mt.push(s.COLOR_ATTACHMENT0+ae),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Mt.push(se),Ht.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let ae=0;ae<M.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const Ee=n.get(M[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function wt(L){return Math.min(i.maxSamples,L.samples)}function Nt(L){const M=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function k(L){const M=o.render.frame;h.get(L)!==M&&(h.set(L,M),L.update())}function Wt(L,M){const O=L.colorSpace,H=L.format,W=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||O!==un&&O!==Ei&&(Ze.getTransfer(O)===lt?(H!==cn||W!==an)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",O)),M}function ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=F,this.getTextureUnits=N,this.setTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=nt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _y(s,e){function t(n,i=Ei){let r;const o=Ze.getTransfer(i);if(n===an)return s.UNSIGNED_BYTE;if(n===Vc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ad)return s.BYTE;if(n===cd)return s.SHORT;if(n===lr)return s.UNSIGNED_SHORT;if(n===Hc)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===qn)return s.HALF_FLOAT;if(n===ud)return s.ALPHA;if(n===dd)return s.RGB;if(n===cn)return s.RGBA;if(n===ui)return s.DEPTH_COMPONENT;if(n===Hi)return s.DEPTH_STENCIL;if(n===Wc)return s.RED;if(n===Xc)return s.RED_INTEGER;if(n===Wi)return s.RG;if(n===qc)return s.RG_INTEGER;if(n===$c)return s.RGBA_INTEGER;if(n===oo||n===ao||n===co||n===lo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===yo||n===cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return r.COMPRESSED_R11_EAC;if(n===ac)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return r.COMPRESSED_RG11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sc||n===wc||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sc)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ec||n===Ac||n===Mo||n===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
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

}`;class My{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ed(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:vy,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class by extends Yi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new My,g={},_=t.getContextAttributes();let E=null,y=null;const S=[],b=[],A=new re;let v=null,T=null;const C=new Zt;C.viewport=new pt;const P=new Zt;P.viewport=new pt;const I=[C,P],F=new Mm;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=S[q];return Q===void 0&&(Q=new ta,S[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=S[q];return Q===void 0&&(Q=new ta,S[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=S[q];return Q===void 0&&(Q=new ta,S[q]=Q),Q.getHandSpace()};function Y(q){const Q=b.indexOf(q.inputSource);if(Q===-1)return;const ye=S[Q];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",ie);for(let q=0;q<S.length;q++){const Q=b[q];Q!==null&&(b[q]=null,S[q].disconnect(Q))}N=null,V=null,m.reset();for(const q in g)delete g[q];if(e.setRenderTarget(E),f=null,d=null,u=null,i=null,y=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),T!==null){const q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",K),i.addEventListener("inputsourceschange",ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=_.stencil?Hi:ui,ke=_.stencil?hr:Xn);const qe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new hn(d.textureWidth,d.textureHeight,{format:cn,type:an,depthTexture:new Ms(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(q){for(let Q=0;Q<q.removed.length;Q++){const ye=q.removed[Q],ke=b.indexOf(ye);ke>=0&&(b[ke]=null,S[ke].disconnect(ye))}for(let Q=0;Q<q.added.length;Q++){const ye=q.added[Q];let ke=b.indexOf(ye);if(ke===-1){for(let qe=0;qe<S.length;qe++)if(qe>=b.length){b.push(ye),ke=qe;break}else if(b[qe]===null){b[qe]=ye,ke=qe;break}if(ke===-1)break}const _e=S[ke];_e&&_e.connect(ye)}}const X=new R,ee=new R;function ne(q,Q,ye){X.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const ke=X.distanceTo(ee),_e=Q.projectionMatrix.elements,qe=ye.projectionMatrix.elements,kt=_e[14]/(_e[10]-1),Ke=_e[14]/(_e[10]+1),nt=(_e[9]+1)/_e[5],xt=(_e[9]-1)/_e[5],Qe=(_e[8]-1)/_e[0],Mt=(qe[8]+1)/qe[0],Ht=kt*Qe,en=kt*Mt,wt=ke/(-Qe+Mt),Nt=wt*-Qe;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Nt),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const k=kt+wt,Wt=Ke+wt,ct=Ht-Nt,L=en+(ke-Nt),M=nt*Ke/Wt*k,O=xt*Ke/Wt*k;q.projectionMatrix.makePerspective(ct,L,M,O,k,Wt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ie(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,ye=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),F.near=P.near=C.near=Q,F.far=P.far=C.far=ye,(N!==F.near||V!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,V=F.far),F.layers.mask=q.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const ke=q.parent,_e=F.cameras;Ie(F,ke);for(let qe=0;qe<_e.length;qe++)Ie(_e[qe],ke);_e.length===2?ne(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),Ce(q,F,ke)};function Ce(q,Q,ye){ye===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ys*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(q){return g[q]};let gt=null;function et(q,Q){if(h=Q.getViewerPose(l||o),p=Q,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ke=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let Ke=0;Ke<ye.length;Ke++){const nt=ye[Ke];let xt=null;if(f!==null)xt=f.getViewport(nt);else{const Mt=u.getViewSubImage(d,nt);xt=Mt.viewport,Ke===0&&(e.setRenderTargetTextures(y,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(y))}let Qe=I[Ke];Qe===void 0&&(Qe=new Zt,Qe.layers.enable(Ke),Qe.viewport=new pt,I[Ke]=Qe),Qe.matrix.fromArray(nt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(nt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(xt.x,xt.y,xt.width,xt.height),Ke===0&&(F.matrix.copy(Qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(Qe)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Ke=u.getDepthInformation(ye[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,i.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ke=0;Ke<ye.length;Ke++){const nt=ye[Ke].camera;if(nt){let xt=g[nt];xt||(xt=new Ed,g[nt]=xt);const Qe=u.getCameraImage(nt);xt.sourceTexture=Qe}}}}for(let ye=0;ye<S.length;ye++){const ke=b[ye],_e=S[ye];ke!==null&&_e!==void 0&&_e.update(ke,Q,l||o)}gt&&gt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}const st=new Wd;st.setAnimationLoop(et),this.setAnimationLoop=function(q){gt=q},this.dispose=function(){}}}const Sy=new Oe,Zd=new Fe;Zd.set(-1,0,0,0,1,0,0,0,1);function wy(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,kd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,_,E):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===jt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===jt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=e.get(g),E=_.envMap,y=_.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,_,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ty(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const b=S.program;n.uniformBlockBinding(y,b)}function l(y,S){let b=i[y.id];b===void 0&&(m(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",_));const A=S.program;n.updateUBOMapping(y,A);const v=e.render.frame;r[y.id]!==v&&(d(y),r[y.id]=v)}function h(y){const S=u();y.__bindingPointIndex=S;const b=s.createBuffer(),A=y.__size,v=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=i[y.id],b=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let v=0,T=b.length;v<T;v++){const C=b[v];if(Array.isArray(C))for(let P=0,I=C.length;P<I;P++)f(C[P],v,P,A);else f(C,v,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,S,b,A){if(x(y,S,b,A)===!0){const v=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let P=0;P<T.length;P++){const I=T[P],F=g(I);p(I,y.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,y.__data)}}function p(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function x(y,S,b,A){const v=y.value,T=S+"_"+b;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{const C=A[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(y){const S=y.uniforms;let b=0;const A=16;for(let T=0,C=S.length;T<C;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let I=0,F=P.length;I<F;I++){const N=P[I],V=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,K=V.length;Y<K;Y++){const ie=V[Y],X=g(ie),ee=b%A,ne=ee%X.boundary,Ie=ee+ne;b+=ne,Ie!==0&&A-Ie<X.storage&&(b+=A-Ie),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=X.storage}}}const v=b%A;return v>0&&(b+=A-v),y.__size=b,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",y),S}function _(y){const S=y.target;S.removeEventListener("dispose",_);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function E(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:E}}const Ey=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function Ay(){return Fn===null&&(Fn=new Fo(Ey,16,16,Wi,qn),Fn.name="DFG_LUT",Fn.minFilter=Ft,Fn.magFilter=Ft,Fn.wrapS=Vn,Fn.wrapT=Vn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class Ry{constructor(e={}){const{canvas:t=gp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=an}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([$c,qc,Xc]),g=new Set([an,Xn,lr,hr,Vc,Gc]),_=new Uint32Array(4),E=new Int32Array(4),y=new R;let S=null,b=null;const A=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,I=null,F=null,N=null,V=null;this._outputColorSpace=Pt;let Y=0,K=0,ie=null,X=-1,ee=null;const ne=new pt,Ie=new pt;let Ce=null;const gt=new Re(0);let et=0,st=t.width,q=t.height,Q=1,ye=null,ke=null;const _e=new pt(0,0,st,q),qe=new pt(0,0,st,q);let kt=!1;const Ke=new el;let nt=!1,xt=!1;const Qe=new Oe,Mt=new R,Ht=new pt,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Nt(){return ie===null?Q:1}let k=n;function Wt(w,D){return t.getContext(w,D)}let ct,L,M,O,H,W,se,oe,$,j,ae,Ee,ue,ce,Ae,Ne,ze,U,le,J,he,me,te;try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",bn,!1),k===null){const D="webgl2";if(k=Wt(D,w),k===null)throw Wt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(w){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),De("WebGLRenderer: "+w.message),w}function Pe(){ct=new A_(k),ct.init(),he=new _y(k,ct),L=new x_(k,ct,e,he),M=new gy(k,ct),L.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),F=k.createFramebuffer(),N=k.createFramebuffer(),V=k.createFramebuffer(),O=new P_(k),H=new ny,W=new xy(k,ct,M,H,L,he,O),se=new E_(C),oe=new Im(k),me=new m_(k,oe),$=new R_(k,oe,O,me),j=new I_(k,$,oe,me,O),U=new L_(k,L,W),Ae=new __(H),ae=new ty(C,se,ct,L,me,Ae),Ee=new wy(C,H),ue=new sy,ce=new hy(ct),ze=new p_(C,se,M,j,p,c),Ne=new my(C,j,L),te=new Ty(k,O,L,M),le=new g_(k,ct,O),J=new C_(k,ct,O),O.programs=ae.programs,C.capabilities=L,C.extensions=ct,C.properties=H,C.renderLists=ue,C.shadowMap=Ne,C.state=M,C.info=O}x!==an&&(T=new D_(x,t.width,t.height,a,i,r));const Se=new by(C,k);this.xr=Se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(st,q,!1))},this.getSize=function(w){return w.set(st,q)},this.setSize=function(w,D,G=!0){if(Se.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}st=w,q=D,t.width=Math.floor(w*Q),t.height=Math.floor(D*Q),G===!0&&(t.style.width=w+"px",t.style.height=D+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(st*Q,q*Q).floor()},this.setDrawingBufferSize=function(w,D,G){st=w,q=D,Q=G,t.width=Math.floor(w*G),t.height=Math.floor(D*G),this.setViewport(0,0,w,D)},this.setEffects=function(w){if(x===an){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let D=0;D<w.length;D++)if(w[D].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(_e)},this.setViewport=function(w,D,G,z){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,D,G,z),M.viewport(ne.copy(_e).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(qe)},this.setScissor=function(w,D,G,z){w.isVector4?qe.set(w.x,w.y,w.z,w.w):qe.set(w,D,G,z),M.scissor(Ie.copy(qe).multiplyScalar(Q).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(w){M.setScissorTest(kt=w)},this.setOpaqueSort=function(w){ye=w},this.setTransparentSort=function(w){ke=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(w=!0,D=!0,G=!0){let z=0;if(w){let B=!1;if(ie!==null){const pe=ie.texture.format;B=m.has(pe)}if(B){const pe=ie.texture.type,ve=g.has(pe),fe=ze.getClearColor(),Me=ze.getClearAlpha(),we=fe.r,He=fe.g,Je=fe.b;ve?(_[0]=we,_[1]=He,_[2]=Je,_[3]=Me,k.clearBufferuiv(k.COLOR,0,_)):(E[0]=we,E[1]=He,E[2]=Je,E[3]=Me,k.clearBufferiv(k.COLOR,0,E))}else z|=k.COLOR_BUFFER_BIT}D&&(z|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&k.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),ze.dispose(),ue.dispose(),ce.dispose(),H.dispose(),se.dispose(),j.dispose(),me.dispose(),te.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Pl),Se.removeEventListener("sessionend",Ll),Li.stop()};function _t(w){w.preventDefault(),wo("WebGLRenderer: Context Lost."),P=!0}function ot(){wo("WebGLRenderer: Context Restored."),P=!1;const w=O.autoReset,D=Ne.enabled,G=Ne.autoUpdate,z=Ne.needsUpdate,B=Ne.type;Pe(),O.autoReset=w,Ne.enabled=D,Ne.autoUpdate=G,Ne.needsUpdate=z,Ne.type=B}function bn(w){De("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dn(w){const D=w.target;D.removeEventListener("dispose",Dn),Ef(D)}function Ef(w){Af(w),H.remove(w)}function Af(w){const D=H.get(w).programs;D!==void 0&&(D.forEach(function(G){ae.releaseProgram(G)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,G,z,B,pe){D===null&&(D=en);const ve=B.isMesh&&B.matrixWorld.determinantAffine()<0,fe=Pf(w,D,G,z,B);M.setMaterial(z,ve);let Me=G.index,we=1;if(z.wireframe===!0){if(Me=$.getWireframeAttribute(G),Me===void 0)return;we=2}const He=G.drawRange,Je=G.attributes.position;let be=He.start*we,at=(He.start+He.count)*we;pe!==null&&(be=Math.max(be,pe.start*we),at=Math.min(at,(pe.start+pe.count)*we)),Me!==null?(be=Math.max(be,0),at=Math.min(at,Me.count)):Je!=null&&(be=Math.max(be,0),at=Math.min(at,Je.count));const Dt=at-be;if(Dt<0||Dt===1/0)return;me.setup(B,z,fe,G,Me);let yt,mt=le;if(Me!==null&&(yt=oe.get(Me),mt=J,mt.setIndex(yt)),B.isMesh)z.wireframe===!0?(M.setLineWidth(z.wireframeLinewidth*Nt()),mt.setMode(k.LINES)):mt.setMode(k.TRIANGLES);else if(B.isLine){let Xt=z.linewidth;Xt===void 0&&(Xt=1),M.setLineWidth(Xt*Nt()),B.isLineSegments?mt.setMode(k.LINES):B.isLineLoop?mt.setMode(k.LINE_LOOP):mt.setMode(k.LINE_STRIP)}else B.isPoints?mt.setMode(k.POINTS):B.isSprite&&mt.setMode(k.TRIANGLES);if(B.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))mt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Xt=B._multiDrawStarts,xe=B._multiDrawCounts,Yt=B._multiDrawCount,tt=Me?oe.get(Me).bytesPerElement:1,fn=H.get(z).currentProgram.getUniforms();for(let Un=0;Un<Yt;Un++)fn.setValue(k,"_gl_DrawID",Un),mt.render(Xt[Un]/tt,xe[Un])}else if(B.isInstancedMesh)mt.renderInstances(be,Dt,B.count);else if(G.isInstancedBufferGeometry){const Xt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xe=Math.min(G.instanceCount,Xt);mt.renderInstances(be,Dt,xe)}else mt.render(be,Dt)};function Cl(w,D,G,z){I!==null&&w.isNodeMaterial&&I.setObject(z,w),nt===!0&&Ae.setState(w,G,!1),w.transparent===!0&&w.side===_n&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,Ar(w,D,z),w.side=Ri,w.needsUpdate=!0,Ar(w,D,z),w.side=_n):Ar(w,D,z)}this.compile=function(w,D,G=null){G===null&&(G=w),I!==null&&I.renderStart(w,D,G),b=ce.get(G),b.init(D),v.push(b),G.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),w!==G&&w.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),xt=this.localClippingEnabled,nt=Ae.init(this.clippingPlanes,xt),nt===!0&&Ae.setGlobalState(this.clippingPlanes,D),I!==null&&Ne.render(b.state.shadowsArray,G,D);const z=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const fe=pe[ve];Cl(fe,G,D,B),z.add(fe)}else Cl(pe,G,D,B),z.add(pe)}),b=v.pop(),I!==null&&I.renderEnd(),z},this.compileAsync=function(w,D,G=null){const z=this.compile(w,D,G);return new Promise(B=>{function pe(){if(z.forEach(function(ve){const Me=H.get(ve).currentProgram;(Me===void 0||Me.isReady())&&z.delete(ve)}),z.size===0){B(w);return}setTimeout(pe,10)}ct.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Wo=null;function Rf(w){Wo&&Wo(w)}function Pl(){Li.stop()}function Ll(){Li.start()}const Li=new Wd;Li.setAnimationLoop(Rf),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(w){Wo=w,Se.setAnimationLoop(w),w===null?Li.stop():Li.start()},Se.addEventListener("sessionstart",Pl),Se.addEventListener("sessionend",Ll),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(w,D);const G=Se.enabled===!0&&Se.isPresenting===!0,z=T!==null&&(ie===null||G)&&T.begin(C,ie);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(D),D=Se.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,D,ie),b=ce.get(w,v.length),b.init(D),b.state.textureUnits=W.getTextureUnits(),v.push(b),Qe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ke.setFromProjectionMatrix(Qe,Gn,D.reversedDepth),xt=this.localClippingEnabled,nt=Ae.init(this.clippingPlanes,xt),S=ue.get(w,A.length),S.init(),A.push(S),Se.enabled===!0&&Se.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&Xo(ve,D,-1/0,C.sortObjects)}Xo(w,D,0,C.sortObjects),S.finish(),I!==null&&I.updateLights(b.state.lightsArray),C.sortObjects===!0&&S.sort(ye,ke),wt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,wt&&ze.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Ae.beginShadows();const B=b.state.shadowsArray;if(Ne.render(B,w,D),nt===!0&&Ae.endShadows(),(z&&T.hasRenderPass())===!1){const ve=S.opaque,fe=S.transmissive;if(b.setupLights(),D.isArrayCamera){const Me=D.cameras;if(fe.length>0)for(let we=0,He=Me.length;we<He;we++){const Je=Me[we];Nl(ve,fe,w,Je)}wt&&ze.render(w);for(let we=0,He=Me.length;we<He;we++){const Je=Me[we];Il(S,w,Je,Je.viewport)}}else fe.length>0&&Nl(ve,fe,w,D),wt&&ze.render(w),Il(S,w,D)}ie!==null&&K===0&&(W.updateMultisampleRenderTarget(ie),W.updateRenderTargetMipmap(ie)),z&&T.end(C),w.isScene===!0&&w.onAfterRender(C,w,D),me.resetDefaultState(),X=-1,ee=null,v.pop(),v.length>0?(b=v[v.length-1],W.setTextureUnits(b.state.textureUnits),nt===!0&&Ae.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,I!==null&&I.renderEnd()};function Xo(w,D,G,z){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Ke)){z&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Qe);const ve=j.update(w),fe=w.material;fe.visible&&S.push(w,ve,fe,G,Ht.z,null,D)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Ke))){const ve=j.update(w),fe=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ht.copy(ve.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(Qe)),Array.isArray(fe)){const Me=ve.groups;for(let we=0,He=Me.length;we<He;we++){const Je=Me[we],be=fe[Je.materialIndex];be&&be.visible&&S.push(w,ve,be,G,Ht.z,Je,D)}}else fe.visible&&S.push(w,ve,fe,G,Ht.z,null,D)}}const pe=w.children;for(let ve=0,fe=pe.length;ve<fe;ve++)Xo(pe[ve],D,G,z)}function Il(w,D,G,z){const{opaque:B,transmissive:pe,transparent:ve}=w;b.setupLightsView(G),nt===!0&&Ae.setGlobalState(C.clippingPlanes,G),z&&M.viewport(ne.copy(z)),B.length>0&&Er(B,D,G),pe.length>0&&Er(pe,D,G),ve.length>0&&Er(ve,D,G),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Nl(w,D,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const be=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new hn(1,1,{generateMipmaps:!0,type:be?qn:an,minFilter:ri,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const pe=b.state.transmissionRenderTarget[z.id],ve=z.viewport||ne;pe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),Me=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(gt),et=C.getClearAlpha(),et<1&&C.setClearColor(16777215,.5),C.clear(),wt&&ze.render(G);const He=C.toneMapping;C.toneMapping=Wn;const Je=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),nt===!0&&Ae.setGlobalState(C.clippingPlanes,z),Er(w,G,z),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),ct.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let at=0,Dt=D.length;at<Dt;at++){const yt=D[at],{object:mt,geometry:Xt,material:xe,group:Yt}=yt;if(xe.side===_n&&mt.layers.test(z.layers)){const tt=xe.side;xe.side=jt,xe.needsUpdate=!0,Dl(mt,G,z,Xt,xe,Yt),xe.side=tt,xe.needsUpdate=!0,be=!0}}be===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,Me,we),C.setClearColor(gt,et),Je!==void 0&&(z.viewport=Je),C.toneMapping=He}function Er(w,D,G){const z=D.isScene===!0?D.overrideMaterial:null;for(let B=0,pe=w.length;B<pe;B++){const ve=w[B],{object:fe,geometry:Me,group:we}=ve;let He=ve.material;He.allowOverride===!0&&z!==null&&(He=z),fe.layers.test(G.layers)&&Dl(fe,D,G,Me,He,we)}}function Dl(w,D,G,z,B,pe){I!==null&&B.isNodeMaterial&&I.setObject(w,B),w.onBeforeRender(C,D,G,z,B,pe),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(C,D,G,z,w,pe),B.transparent===!0&&B.side===_n&&B.forceSinglePass===!1?(B.side=jt,B.needsUpdate=!0,C.renderBufferDirect(G,D,z,B,w,pe),B.side=Ri,B.needsUpdate=!0,C.renderBufferDirect(G,D,z,B,w,pe),B.side=_n):C.renderBufferDirect(G,D,z,B,w,pe),w.onAfterRender(C,D,G,z,B,pe)}function Ar(w,D,G){D.isScene!==!0&&(D=en);const z=H.get(w),B=b.state.lights,pe=b.state.shadowsArray,ve=B.state.version,fe=ae.getParameters(w,B.state,pe,D,G,b.state.lightProbeGridArray),Me=ae.getProgramCacheKey(fe);let we=z.programs;z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const He=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;z.envMap=se.get(w.envMap||z.environment,He),z.envMapRotation=z.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,we===void 0&&(w.addEventListener("dispose",Dn),we=new Map,z.programs=we);let Je=we.get(Me);if(Je!==void 0){if(z.currentProgram===Je&&z.lightsStateVersion===ve)return kl(w,fe),Je}else fe.uniforms=ae.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,G,fe),w.onBeforeCompile(fe,C),Je=ae.acquireProgram(fe,Me),we.set(Me,Je),z.uniforms=fe.uniforms;const be=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=Ae.uniform),kl(w,fe),z.needsLights=If(w),z.lightsStateVersion=ve,z.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.sunLights.value=B.state.sun,be.sunLightShadows.value=B.state.sunShadow,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.sunShadowMatrix.value=B.state.sunShadowMatrix,be.sunShadowCascade.value=B.state.sunShadowCascade,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Je,z.uniformsList=null,Je}function Ul(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=fo.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function kl(w,D){const G=H.get(w);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Cf(w,D){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let G=0,z=w.length;G<z;G++){const B=w[G];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function Pf(w,D,G,z,B){D.isScene!==!0&&(D=en),W.resetTextureUnits();const pe=D.fog,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,fe=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=se.get(z.envMap||ve,Me),He=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Je=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!G.morphAttributes.position,at=!!G.morphAttributes.normal,Dt=!!G.morphAttributes.color;let yt=Wn;z.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(yt=C.toneMapping);const mt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Xt=mt!==void 0?mt.length:0,xe=H.get(z),Yt=b.state.lights;if(nt===!0&&(xt===!0||w!==ee)){const vt=w===ee&&z.id===X;Ae.setState(z,w,vt)}let tt=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Yt.state.version||xe.outputColorSpace!==fe||B.isBatchedMesh&&xe.batching===!1||!B.isBatchedMesh&&xe.batching===!0||B.isBatchedMesh&&xe.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&xe.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&xe.instancing===!1||!B.isInstancedMesh&&xe.instancing===!0||B.isSkinnedMesh&&xe.skinning===!1||!B.isSkinnedMesh&&xe.skinning===!0||B.isInstancedMesh&&xe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&xe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&xe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&xe.instancingMorph===!1&&B.morphTexture!==null||xe.envMap!==we||z.fog===!0&&xe.fog!==pe||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ae.numPlanes||xe.numIntersection!==Ae.numIntersection)||xe.vertexAlphas!==He||xe.vertexTangents!==Je||xe.morphTargets!==be||xe.morphNormals!==at||xe.morphColors!==Dt||xe.toneMapping!==yt||xe.morphTargetsCount!==Xt||!!xe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,xe.__version=z.version);let fn=xe.currentProgram;tt===!0&&(fn=Ar(z,D,B),I&&z.isNodeMaterial&&I.onUpdateProgram(z,fn,xe));let Un=!1,fi=!1,Ki=!1;const dt=fn.getUniforms(),Ct=xe.uniforms;if(M.useProgram(fn.program)&&(Un=!0,fi=!0,Ki=!0),z.id!==X&&(X=z.id,fi=!0),xe.needsLights){const vt=Cf(b.state.lightProbeGridArray,B);xe.lightProbeGrid!==vt&&(xe.lightProbeGrid=vt,fi=!0)}if(Un||ee!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(k,"projectionMatrix",w.projectionMatrix),dt.setValue(k,"viewMatrix",w.matrixWorldInverse);const mi=dt.map.cameraPosition;mi!==void 0&&mi.setValue(k,Mt.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&dt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,fi=!0,Ki=!0)}if(xe.needsLights&&(Yt.state.sunShadowMap.length>0&&dt.setValue(k,"sunShadowMap",Yt.state.sunShadowMap,W),Yt.state.directionalShadowMap.length>0&&dt.setValue(k,"directionalShadowMap",Yt.state.directionalShadowMap,W),Yt.state.spotShadowMap.length>0&&dt.setValue(k,"spotShadowMap",Yt.state.spotShadowMap,W),Yt.state.pointShadowMap.length>0&&dt.setValue(k,"pointShadowMap",Yt.state.pointShadowMap,W)),B.isSkinnedMesh){dt.setOptional(k,B,"bindMatrix"),dt.setOptional(k,B,"bindMatrixInverse");const vt=B.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),dt.setValue(k,"boneTexture",vt.boneTexture,W))}B.isBatchedMesh&&(dt.setOptional(k,B,"batchingTexture"),dt.setValue(k,"batchingTexture",B._matricesTexture,W),dt.setOptional(k,B,"batchingIdTexture"),dt.setValue(k,"batchingIdTexture",B._indirectTexture,W),dt.setOptional(k,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(k,"batchingColorTexture",B._colorsTexture,W));const pi=G.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&U.update(B,G,fn),(fi||xe.receiveShadow!==B.receiveShadow)&&(xe.receiveShadow=B.receiveShadow,dt.setValue(k,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Ct.envMapIntensity.value=D.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Ay()),fi){if(dt.setValue(k,"toneMappingExposure",C.toneMappingExposure),xe.needsLights&&Lf(Ct,Ki),pe&&z.fog===!0&&Ee.refreshFogUniforms(Ct,pe),Ee.refreshMaterialUniforms(Ct,z,Q,q,b.state.transmissionRenderTarget[w.id]),xe.needsLights&&xe.lightProbeGrid){const vt=xe.lightProbeGrid;Ct.probesSH.value=vt.texture,Ct.probesMin.value.copy(vt.boundingBox.min),Ct.probesMax.value.copy(vt.boundingBox.max),Ct.probesResolution.value.copy(vt.resolution)}fo.upload(k,Ul(xe),Ct,W)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(fo.upload(k,Ul(xe),Ct,W),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(k,"center",B.center),dt.setValue(k,"modelViewMatrix",B.modelViewMatrix),dt.setValue(k,"normalMatrix",B.normalMatrix),dt.setValue(k,"modelMatrix",B.matrixWorld),z.uniformsGroups!==void 0){const vt=z.uniformsGroups;for(let mi=0,Ji=vt.length;mi<Ji;mi++){const Ol=vt[mi];te.update(Ol,fn),te.bind(Ol,fn)}}return fn}function Lf(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.sunLights.needsUpdate=D,w.sunLightShadows.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function If(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(w,D,G){const z=H.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=D,H.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,D){const G=H.get(w);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,G=0){ie=w,Y=D,K=G;let z=null,B=!1,pe=!1;if(w){const fe=H.get(w);if(fe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(k.FRAMEBUFFER,fe.__webglFramebuffer),ne.copy(w.viewport),Ie.copy(w.scissor),Ce=w.scissorTest,M.viewport(ne),M.scissor(Ie),M.setScissorTest(Ce),X=-1;return}else if(fe.__webglFramebuffer===void 0)W.setupRenderTarget(w);else if(fe.__hasExternalTextures)W.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(fe.__boundDepthTexture!==He){if(He!==null&&H.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(w)}}const Me=w.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const we=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(we[D])?z=we[D][G]:z=we[D],B=!0):w.samples>0&&W.useMultisampledRTT(w)===!1?z=H.get(w).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[G]:z=we,ne.copy(w.viewport),Ie.copy(w.scissor),Ce=w.scissorTest}else ne.copy(_e).multiplyScalar(Q).floor(),Ie.copy(qe).multiplyScalar(Q).floor(),Ce=kt;if(G!==0&&(z=F),M.bindFramebuffer(k.FRAMEBUFFER,z)&&M.drawBuffers(w,z),M.viewport(ne),M.scissor(Ie),M.setScissorTest(Ce),B){const fe=H.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,G)}else if(pe){const fe=D;for(let Me=0;Me<w.textures.length;Me++){const we=H.get(w.textures[Me]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Me,we.__webglTexture,G,fe)}}else if(w!==null&&G!==0){const fe=H.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fe.__webglTexture,G)}X=-1};function Fl(w){const D=H.get(w);return(D.__readFormat!==w.format||D.__readType!==w.type)&&(D.__readFormat=w.format,D.__readType=w.type,D.__formatReadable=L.textureFormatReadable(w.format),D.__typeReadable=L.textureTypeReadable(w.type)),D}this.readRenderTargetPixels=function(w,D,G,z,B,pe,ve,fe=0){if(!(w&&w.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){M.bindFramebuffer(k.FRAMEBUFFER,Me);try{const we=w.textures[fe],He=we.format,Je=we.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+fe);const be=Fl(we);if(be.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-z&&G>=0&&G<=w.height-B&&k.readPixels(D,G,z,B,he.convert(He),he.convert(Je),pe)}finally{const we=ie!==null?H.get(ie).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,D,G,z,B,pe,ve,fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(D>=0&&D<=w.width-z&&G>=0&&G<=w.height-B){M.bindFramebuffer(k.FRAMEBUFFER,Me);const we=w.textures[fe],He=we.format,Je=we.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+fe);const be=Fl(we);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.bufferData(k.PIXEL_PACK_BUFFER,pe.byteLength,k.STREAM_READ),k.readPixels(D,G,z,B,he.convert(He),he.convert(Je),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Dt=ie!==null?H.get(ie).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,Dt);const yt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await xp(k,yt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,pe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(at),k.deleteSync(yt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,D=null,G=0){const z=Math.pow(2,-G),B=Math.floor(w.image.width*z),pe=Math.floor(w.image.height*z),ve=D!==null?D.x:0,fe=D!==null?D.y:0;W.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,ve,fe,B,pe),M.unbindTexture()},this.copyTextureToTexture=function(w,D,G=null,z=null,B=0,pe=0){let ve,fe,Me,we,He,Je,be,at,Dt;const yt=w.isCompressedTexture?w.mipmaps[pe]:w.image;if(G!==null)ve=G.max.x-G.min.x,fe=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,He=G.min.y,Je=G.isBox3?G.min.z:0;else{const Ct=Math.pow(2,-B);ve=Math.floor(yt.width*Ct),fe=Math.floor(yt.height*Ct),w.isDataArrayTexture?Me=yt.depth:w.isData3DTexture?Me=Math.floor(yt.depth*Ct):Me=1,we=0,He=0,Je=0}z!==null?(be=z.x,at=z.y,Dt=z.z):(be=0,at=0,Dt=0);const mt=he.convert(D.format),Xt=he.convert(D.type);let xe;D.isData3DTexture?(W.setTexture3D(D,0),xe=k.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(W.setTexture2DArray(D,0),xe=k.TEXTURE_2D_ARRAY):(W.setTexture2D(D,0),xe=k.TEXTURE_2D),M.activeTexture(k.TEXTURE0),M.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,D.flipY),M.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),M.pixelStorei(k.UNPACK_ALIGNMENT,D.unpackAlignment);const Yt=M.getParameter(k.UNPACK_ROW_LENGTH),tt=M.getParameter(k.UNPACK_IMAGE_HEIGHT),fn=M.getParameter(k.UNPACK_SKIP_PIXELS),Un=M.getParameter(k.UNPACK_SKIP_ROWS),fi=M.getParameter(k.UNPACK_SKIP_IMAGES);M.pixelStorei(k.UNPACK_ROW_LENGTH,yt.width),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt.height),M.pixelStorei(k.UNPACK_SKIP_PIXELS,we),M.pixelStorei(k.UNPACK_SKIP_ROWS,He),M.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const Ki=w.isDataArrayTexture||w.isData3DTexture,dt=D.isDataArrayTexture||D.isData3DTexture;if(w.isDepthTexture){const Ct=H.get(w),pi=H.get(D),vt=H.get(Ct.__renderTarget),mi=H.get(pi.__renderTarget);M.bindFramebuffer(k.READ_FRAMEBUFFER,vt.__webglFramebuffer),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Ji=0;Ji<Me;Ji++)Ki&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,H.get(w).__webglTexture,B,Je+Ji),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,H.get(D).__webglTexture,pe,Dt+Ji)),k.blitFramebuffer(we,He,ve,fe,be,at,ve,fe,k.DEPTH_BUFFER_BIT,k.NEAREST);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||H.has(w)){const Ct=H.get(w),pi=H.get(D);M.bindFramebuffer(k.READ_FRAMEBUFFER,N),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,V);for(let vt=0;vt<Me;vt++)Ki?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ct.__webglTexture,B,Je+vt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ct.__webglTexture,B),dt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pi.__webglTexture,pe,Dt+vt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pi.__webglTexture,pe),B!==0?k.blitFramebuffer(we,He,ve,fe,be,at,ve,fe,k.COLOR_BUFFER_BIT,k.NEAREST):dt?k.copyTexSubImage3D(xe,pe,be,at,Dt+vt,we,He,ve,fe):k.copyTexSubImage2D(xe,pe,be,at,we,He,ve,fe);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(xe,pe,be,at,Dt,ve,fe,Me,mt,Xt,yt.data):D.isCompressedArrayTexture?k.compressedTexSubImage3D(xe,pe,be,at,Dt,ve,fe,Me,mt,yt.data):k.texSubImage3D(xe,pe,be,at,Dt,ve,fe,Me,mt,Xt,yt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,pe,be,at,ve,fe,mt,Xt,yt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,pe,be,at,yt.width,yt.height,mt,yt.data):k.texSubImage2D(k.TEXTURE_2D,pe,be,at,ve,fe,mt,Xt,yt);M.pixelStorei(k.UNPACK_ROW_LENGTH,Yt),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tt),M.pixelStorei(k.UNPACK_SKIP_PIXELS,fn),M.pixelStorei(k.UNPACK_SKIP_ROWS,Un),M.pixelStorei(k.UNPACK_SKIP_IMAGES,fi),pe===0&&D.generateMipmaps&&k.generateMipmap(xe),M.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&W.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?W.setTextureCube(w,0):w.isData3DTexture?W.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?W.setTexture2DArray(w,0):W.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){Y=0,K=0,ie=null,M.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Co=16,Cy=64,Pa=67,Fi=69,uu=71,La=72,du=74,Py=76,Ly=[{beat:0,len:.5,midi:Fi},{beat:1,len:.5,midi:Fi},{beat:1.5,len:.5,midi:La},{beat:2,len:.5,midi:uu},{beat:3,len:1,midi:Fi},{beat:4,len:.5,midi:Pa},{beat:5,len:.5,midi:Cy},{beat:5.5,len:.5,midi:Pa},{beat:6,len:1.5,midi:Fi},{beat:8,len:.5,midi:Fi},{beat:9,len:.5,midi:Fi},{beat:9.5,len:.5,midi:La},{beat:10,len:.5,midi:du},{beat:11,len:.5,midi:Py},{beat:11.5,len:.5,midi:du},{beat:12,len:.5,midi:La},{beat:12.5,len:.5,midi:uu},{beat:13,len:.5,midi:Pa},{beat:13.5,len:2,midi:Fi}],Iy=[{beat:0,len:4,notes:[45,57,60,64]},{beat:4,len:4,notes:[40,55,59,64]},{beat:8,len:2,notes:[41,53,57,60]},{beat:10,len:2,notes:[43,55,59,62]},{beat:12,len:2,notes:[45,57,60,64]},{beat:14,len:2,notes:[40,56,59,62]}],Ny=[{beat:0,len:.5,midi:72},{beat:.5,len:.5,midi:76},{beat:1,len:1,midi:79},{beat:2,len:.5,midi:76},{beat:2.5,len:.5,midi:74},{beat:3,len:1,midi:72},{beat:4,len:.5,midi:74},{beat:4.5,len:.5,midi:76},{beat:5,len:.5,midi:77},{beat:5.5,len:.5,midi:76},{beat:6,len:2,midi:74},{beat:8,len:.5,midi:76},{beat:8.5,len:.5,midi:79},{beat:9,len:1,midi:81},{beat:10,len:.5,midi:79},{beat:10.5,len:.5,midi:76},{beat:11,len:1,midi:74},{beat:12,len:.5,midi:72},{beat:12.5,len:.5,midi:74},{beat:13,len:.5,midi:76},{beat:13.5,len:.5,midi:74},{beat:14,len:1,midi:71},{beat:15,len:1,midi:68}],Dy=[{beat:0,len:4,notes:[48,55,60,64]},{beat:4,len:2,notes:[50,57,62,65]},{beat:6,len:2,notes:[43,55,59,62]},{beat:8,len:2,notes:[45,57,60,64]},{beat:10,len:2,notes:[40,55,59,64]},{beat:12,len:2,notes:[41,53,57,60]},{beat:14,len:2,notes:[40,56,59,62]}],jd=["A","A","B","A"],Uy=Co*jd.length;function ky(){const s=[],e=[];return jd.forEach((t,n)=>{const i=n*Co,r=t==="A"?Ly:Ny,o=t==="B"?Dy:Iy;for(const a of r)s.push({...a,beat:a.beat+i});for(const a of o)e.push({...a,beat:a.beat+i})}),{melody:s,chords:e}}const Fy={title:84,play:92},ii="steady loop, same energy throughout, instrumental",fu={classic:{name:"经典",bpm:72,scale:[0,2,4,5,7,9,11],transpose:0,lead:"piano",bed:"chords",perc:"none",prompt:`video game BGM, 2000s Korean MMORPG field theme, peaceful meadow, ocarina and wooden flute melody, harp arpeggios, nylon guitar, soft pizzicato strings, shaker and light hand percussion, calm and cozy, C major, 72 BPM, ${ii}`},nordic:{name:"北欧",bpm:70,scale:[0,2,3,5,7,9,10],transpose:2,lead:"bowed",bed:"drone",perc:"frame",prompt:`video game BGM, Nordic folk village theme, hardanger fiddle and wooden flute melody over a drone, nyckelharpa, soft choir pad, frame drum, snowy and cozy, D dorian, 70 BPM, ${ii}`},desert:{name:"中东",bpm:88,scale:[0,1,4,5,7,8,10],transpose:0,lead:"pluck",bed:"drone",perc:"darbuka",prompt:`video game BGM, Middle Eastern bazaar theme, oud and ney flute melody in hijaz scale, qanun arpeggios, darbuka and riq rhythm, warm desert wind, 88 BPM, ${ii}`},island:{name:"海岛",bpm:92,scale:[0,2,4,5,7,9,11],transpose:0,lead:"steel",bed:"chords",perc:"bongo",prompt:`video game BGM, tropical island theme, steel drum and ukulele melody, marimba, light bongos and shaker, breezy and sunny, C major, 92 BPM, ${ii}`},steam:{name:"蒸汽朋克",bpm:96,scale:[0,2,3,5,7,8,11],transpose:0,lead:"brass",bed:"chords",perc:"tick",prompt:`video game BGM, steampunk clockwork city theme, music box and brass melody, accordion, pizzicato strings, ticking clock and gear percussion, whimsical, C harmonic minor, 96 BPM, ${ii}`},space:{name:"宇宙",bpm:60,scale:[0,2,4,6,7,9,11],transpose:0,lead:"bell",bed:"pad",perc:"none",prompt:`video game BGM, dreamy outer space theme, celesta and soft synth bell melody, warm analog pads, slow arpeggiator, sub bass, floating and gentle, C lydian, 60 BPM, ${ii}`},japan:{name:"日本",bpm:66,scale:[0,1,5,5,7,8,12],transpose:4,lead:"pluck",bed:"drone",perc:"taiko",prompt:`video game BGM, Japanese shrine town theme, koto and shakuhachi melody in miyako-bushi scale, shamisen accents, taiko and wood blocks, calm and elegant, 66 BPM, ${ii}`},china:{name:"中国",bpm:76,scale:[0,2,4,4,7,9,9],transpose:-3,lead:"bowed",bed:"drone",perc:"woodblock",prompt:`video game BGM, ancient Chinese water town theme, guzheng and dizi melody on the pentatonic scale, erhu counter-melody, pipa, woodblock and small gong, peaceful, 76 BPM, ${ii}`},vapor:{name:"蒸汽波",bpm:62,scale:[0,2,4,5,7,9,11],transpose:-3,lead:"epiano",bed:"chords",perc:"lofi",prompt:`video game BGM, vaporwave shopping mall theme, slowed down detuned electric piano melody, jazzy maj7 chords, lo-fi drums, chorus and tape wobble, nostalgic 80s, 62 BPM, ${ii}`}},Oy=[0,2,4,5,7,9,11];function zy(s,e){const t=(s%12+12)%12,n=Oy.indexOf(t);return(n>=0?s-t+e.scale[n]:s)+e.transpose}function Hs(s,e){return s==="title"?"audio/bgm-title.mp3":e==="classic"?"audio/bgm-play.mp3":`audio/bgm-${e}.mp3`}const By="audio/loops.json",Hy=[1,2,3,4].map(s=>`audio/sfx/meow-${s}.mp3`),Vy="audio/sfx/yarn.mp3",Gy="audio/sfx/hiss.mp3",Wy="audio/sfx/yowl.mp3";async function pu(s){try{const e=await fetch(s),t=e.headers.get("content-type")??"";return e.ok&&/audio|octet-stream/.test(t)?await e.arrayBuffer():null}catch{return null}}const ft=s=>440*Math.pow(2,(s-69)/12),Xy=[0,2,4,7,9],mu={ha:{lo:620,hi:700,dur:.2,pitch:[[0,.9],[.06,1.08],[.2,1]],f1:[[0,700],[.05,920],[.2,860]],f2:[[0,1350],[.2,1250]],f3:[[0,2650],[.2,2600]],mouth:[[0,2600],[.03,5200],[.2,4300]],amp:[[.02,.6],[.06,1],[.14,.9]],vib:0,trill:0,level:.5,rate:[1,1],slice:.3},ji:{lo:760,hi:820,dur:.13,pitch:[[0,1.08],[.13,1.14]],f1:[[0,360],[.13,330]],f2:[[0,2300],[.13,2450]],f3:[[0,3100],[.13,3250]],mouth:[[0,4300],[.13,4800]],amp:[[.015,.8],[.05,1],[.1,.8]],vib:0,trill:0,level:.42,rate:[1,1],slice:.2},mi:{lo:700,hi:760,dur:.32,pitch:[[0,1],[.1,1.06],[.32,.84]],f1:[[0,300],[.08,340],[.32,320]],f2:[[0,2e3],[.08,2350],[.32,2250]],f3:[[0,3e3],[.32,3100]],mouth:[[0,500],[.06,4600],[.32,3e3]],amp:[[.03,.7],[.1,1],[.24,.8]],vib:.03,trill:0,level:.46,rate:[1,1],slice:.4},man:{lo:640,hi:760,dur:.24,pitch:[[0,.95],[.07,1.04],[.24,1]],f1:[[0,350],[.06,860],[.18,800],[.24,420]],f2:[[0,1100],[.06,1320],[.24,1500]],f3:[[0,2600],[.24,2650]],mouth:[[0,520],[.06,4600],[.17,4e3],[.24,800]],amp:[[.03,.75],[.08,1],[.19,.85]],vib:0,trill:0,level:.48,rate:[1,1],slice:.3},bo:{lo:600,hi:700,dur:.26,pitch:[[0,1.05],[.26,.93]],f1:[[0,450],[.05,560],[.26,520]],f2:[[0,820],[.26,900]],f3:[[0,2500],[.26,2500]],mouth:[[0,320],[.02,3900],[.26,2800]],amp:[[.01,1],[.08,.95],[.2,.7]],vib:.02,trill:0,level:.48,rate:[1,1],slice:.3},meow:{lo:600,hi:900,dur:.55,pitch:[[0,.85],[.12,1.05],[.32,1],[.55,.7]],f1:[[0,350],[.04,380],[.16,900],[.34,860],[.53,520]],f2:[[0,2300],[.04,2200],[.16,1500],[.3,1450],[.52,1e3]],f3:[[0,3e3],[.04,3e3],[.16,2700],[.3,2700],[.52,2500]],mouth:[[0,600],[.06,5e3],[.38,4200],[.55,1600]],amp:[[.025,.7],[.15,1],[.3,.95],[.45,.45]],vib:.02,trill:0,level:.5,rate:[.9,1.15],slice:2},mew:{lo:900,hi:1200,dur:.2,pitch:[[0,.92],[.06,1.05],[.2,.95]],f1:[[0,500],[.07,1100],[.2,950]],f2:[[0,2500],[.07,2e3],[.2,1800]],f3:[[0,3300],[.07,3e3],[.2,2900]],mouth:[[0,700],[.045,5e3],[.2,3500]],amp:[[.015,.85],[.06,1],[.13,.8]],vib:0,trill:0,level:.35,rate:[1.3,1.5],slice:.3},mrrp:{lo:450,hi:650,dur:.32,pitch:[[0,.85],[.1,.9],[.32,1.3]],f1:[[0,400],[.1,450],[.26,800],[.32,760]],f2:[[0,1100],[.1,1200],[.26,2e3],[.32,2100]],f3:[[0,2500],[.1,2500],[.26,2900],[.32,2900]],mouth:[[0,600],[.06,2500],[.12,2800],[.24,5e3],[.32,4e3]],amp:[[.02,.8],[.1,.85],[.2,1],[.24,.9]],vib:0,trill:.1,level:.42,rate:[1.05,1.25],slice:.4}};function Ia(s,e,t,n,i=1){s.setValueAtTime(e[0][1]*i,t+e[0][0]*n);for(const[r,o]of e.slice(1))s.exponentialRampToValueAtTime(o*i,t+r*n)}const qy=Uy*2,Vs=(()=>{const{melody:s,chords:e}=ky();return{melody:new Map(s.map(t=>[Math.round(t.beat*2),t])),chordStart:new Map(e.map(t=>[Math.round(t.beat*2),t])),under:t=>e.find(n=>t>=n.beat&&t<n.beat+n.len)??e[0]}})(),gu=.5;class pl{ctx=null;master=null;sfx=null;music=null;noise=null;muted;encoded=new Map;decoded=new Map;style="classic";file="";loopPoints={};tracksReady=!1;scene=null;playing=null;layers=0;synthOn=!1;nextTime=0;step=0;loop=0;combo=0;lastCollect=0;wave=null;meowBufs=[];yarnBuf=null;hissBuf=null;yowlBuf=null;voiceUntil=0;voiceKind="meow";lastMeow=-1/0;lastMew=-1/0;constructor(e){this.muted=e}unlock(){if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.muted?0:.9,this.master.connect(t.destination),this.sfx=t.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master),this.music=t.createGain(),this.music.gain.value=gu,this.music.connect(this.master);const n=t.createBuffer(1,t.sampleRate,t.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noise=n,this.loadTracks(),this.loadSfx(),window.setInterval(()=>this.scheduleSynth(),30)}this.ctx.state==="suspended"&&this.ctx.resume()}suspend(){this.ctx?.state==="running"&&this.ctx.suspend()}setMuted(e){this.muted=e,this.ctx&&this.master&&this.master.gain.setTargetAtTime(e?0:.9,this.ctx.currentTime,.05)}duck(e){this.ctx&&this.music&&this.music.gain.setTargetAtTime(e?.04:gu,this.ctx.currentTime,.1)}async loadTracks(){const e=fetch(By).then(n=>n.ok&&/json/.test(n.headers.get("content-type")??"")?n.json():{}).catch(()=>({})),t=[Hs("title","classic"),Hs("play","classic"),Hs("play",this.style)];await Promise.all([...new Set(t)].map(n=>this.fetchTrack(n))),this.loopPoints=await e,this.tracksReady=!0,this.restartScene()}async fetchTrack(e){if(this.encoded.has(e))return;this.encoded.set(e,null);const t=await pu(e);this.encoded.set(e,t)}restartScene(){const e=this.scene;this.scene=null,this.file="",e&&this.setScene(e,this.layers)}setStyle(e){if(e===this.style)return;this.style=e;const t=Hs("play",e);this.ctx&&!this.encoded.has(t)&&this.fetchTrack(t).then(()=>{this.encoded.get(t)&&this.file===t&&this.restartScene()}),this.scene==="play"&&this.restartScene()}setScene(e,t=2){this.layers=t;const n=Hs(e,this.style),i=!!this.encoded.get(n);if(e===this.scene&&n===this.file||!this.ctx||!this.music){this.synthOn=this.tracksReady&&!i;return}if(this.scene=e,this.file=n,this.step=0,this.loop=0,this.synthOn=this.tracksReady&&!i,this.playing){const r=this.ctx.currentTime,o=this.playing;o.gain.gain.setTargetAtTime(0,r,.5),o.src.stop(r+3),this.playing=null}i&&this.playTrack(n)}async playTrack(e){const t=this.ctx;let n=this.decoded.get(e);if(!n)try{n=await t.decodeAudioData(this.encoded.get(e).slice(0))}catch{this.encoded.set(e,null),this.file===e&&(this.synthOn=!0);return}if(this.file!==e||this.playing)return;this.decoded.clear(),this.decoded.set(e,n);const i=t.createBufferSource();i.buffer=n,i.loop=!0;const r=this.loopPoints[e.split("/").pop()];r&&r.end<=n.duration&&(i.loopStart=r.start,i.loopEnd=r.end);const o=t.currentTime,a=t.createGain();a.gain.setValueAtTime(0,o),a.gain.setTargetAtTime(1,o,.3),i.connect(a),a.connect(this.music),i.start(o),this.playing={src:i,gain:a}}scheduleSynth(){const e=this.ctx;if(!(!e||e.state!=="running"||!this.synthOn))for(this.nextTime<e.currentTime&&(this.nextTime=e.currentTime+.05);this.nextTime<e.currentTime+.15;){const t=this.scene??"title",i=60/(t==="play"&&this.style!=="classic"?fu[this.style].bpm:Fy[t])/2;this.synthStep(t,this.step,this.nextTime,i),this.nextTime+=i,this.step=(this.step+1)%qy,this.step===0&&this.loop++}}synthStep(e,t,n,i){if(e==="play"&&this.style!=="classic"){this.styleStep(fu[this.style],t,n,i);return}const r=this.music,o=t/2,a=Math.floor(o/Co),c=Vs.chordStart.get(t),l=Vs.under(o),h=Vs.melody.get(t);if(c){for(const d of c.notes.slice(1))this.tone(ft(d),n,c.len*2*i+.3,"sine",.03,r,.35);e==="title"&&this.tone(ft(c.notes[0]),n,Math.min(1.6,c.len*2*i),"triangle",.13,r,.01)}if(e==="title"){h&&this.fm(ft(h.midi+12),n,1.4,{gain:.06,ratio:2.756,index:.9,out:r}),(this.layers>=2||a>0)&&t%2===1&&this.fm(ft(l.notes[1+t%3]+12),n,.5,{gain:.015,ratio:3.5,index:1,out:r});return}const u=a!==1||this.loop%2===0;if(h&&u&&(this.pluck(ft(h.midi),n,.11,r),this.tone(ft(h.midi),n,Math.min(.4,h.len*2*i),"triangle",.035,r,.01)),t%2===0){const d=l.notes[0]+(t%4===2?7:0);this.tone(ft(d),n,.17,"triangle",.12,r,.004)}else this.layers>=1&&this.noiseHit(n,.03,.025,"highpass",6500,r);(this.layers>=2||!u)&&t%4===1&&this.fm(ft(l.notes[1+(t/4%3|0)]+(u?24:12)),n,.5,{gain:.022,ratio:3.5,index:1,out:r}),this.layers>=3&&t%2===1&&this.tone(ft(l.notes[0]-12),n,.1,"sine",.12,r,.002)}styleStep(e,t,n,i){const r=this.music,o=t/2,a=Vs.chordStart.get(t),c=Vs.melody.get(t),l=u=>zy(u,e),h=8*i;if(e.bed==="drone"){if(t%8===0){const u=36+e.transpose;this.tone(ft(u),n,h+.4,"triangle",.05,r,.3),this.tone(ft(u+7),n,h+.4,"triangle",.035,r,.3)}}else if(a){const u=a.len*2*i,d=e.bed==="pad";for(const f of a.notes.slice(1)){const p=ft(l(f));this.tone(p,n,u+(d?1.2:.3),"sine",d?.035:.03,r,d?.6:.2),d&&this.tone(p*1.004,n,u+1.2,"sine",.025,r,.8)}e.perc==="lofi"&&this.tone(ft(l(a.notes[1])+11),n,u+.3,"sine",.022,r,.2),this.tone(ft(l(a.notes[0])),n,Math.min(1.6,u),"triangle",.12,r,.01)}c&&this.lead(e.lead,ft(l(c.midi)),n,Math.max(.3,c.len*2*i),r),c&&Math.floor(o/Co)===1&&e.lead!=="bowed"&&this.lead(e.lead,ft(l(c.midi)+12),n+i,.3,r,.35),this.drums(e.perc,t%8,n,r)}lead(e,t,n,i,r,o=1){switch(e){case"piano":this.tone(t,n,Math.max(.5,i),"triangle",.07*o,r,.008),this.fm(t,n,Math.max(.4,i),{gain:.03*o,ratio:1,index:1.5,out:r});break;case"pluck":this.stringPluck(t,n,Math.max(.6,i*1.4),.09*o,r);break;case"bowed":this.bowed(t,n,i,.06*o,r);break;case"steel":this.fm(t,n,.7,{gain:.07*o,ratio:2,index:1.1,out:r}),this.tone(t,n,.5,"sine",.04*o,r,.004);break;case"brass":this.brass(t,n,i,.05*o,r),this.fm(t*2,n,.5,{gain:.015*o,ratio:2.756,index:.9,out:r});break;case"bell":this.fm(t*2,n,1.8,{gain:.05*o,ratio:3.5,index:1.2,out:r}),this.fm(t*2,n+.36,1.4,{gain:.018*o,ratio:3.5,index:1,out:r});break;case"epiano":this.fm(t,n,Math.max(.8,i*1.3),{gain:.05*o,ratio:1,index:.8,out:r}),this.fm(t*1.006,n,Math.max(.8,i*1.3),{gain:.03*o,ratio:1,index:.6,out:r});break}}stringPluck(e,t,n,i,r){const o=this.ctx,a=o.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(e*1.012,t),a.frequency.exponentialRampToValueAtTime(e,t+.05);const c=o.createBiquadFilter();c.type="lowpass",c.Q.value=2,c.frequency.setValueAtTime(4200,t),c.frequency.exponentialRampToValueAtTime(700,t+n);const l=o.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(i,t+.004),l.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(c),c.connect(l),l.connect(r),a.start(t),a.stop(t+n+.05)}bowed(e,t,n,i,r){const o=this.ctx,a=o.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(e,t);const c=o.createOscillator();c.frequency.value=5.6;const l=o.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(e*.007,t+Math.min(.25,n*.6)),c.connect(l),l.connect(a.frequency);const h=o.createBiquadFilter();h.type="lowpass",h.frequency.value=1900,h.Q.value=1.2;const u=o.createGain(),d=t+n+.12;u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(i,t+.07),u.gain.setValueAtTime(i,t+Math.max(.08,n-.05)),u.gain.exponentialRampToValueAtTime(1e-4,d),a.connect(h),h.connect(u),u.connect(r),a.start(t),c.start(t),a.stop(d+.05),c.stop(d+.05)}brass(e,t,n,i,r){const o=this.ctx,a=o.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(e,t);const c=o.createBiquadFilter();c.type="lowpass",c.Q.value=1,c.frequency.setValueAtTime(500,t),c.frequency.exponentialRampToValueAtTime(2600,t+.06),c.frequency.exponentialRampToValueAtTime(1200,t+.25);const l=o.createGain(),h=t+Math.max(.25,n)+.08;l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(i,t+.04),l.gain.exponentialRampToValueAtTime(1e-4,h),a.connect(c),c.connect(l),l.connect(r),a.start(t),a.stop(h+.05)}drums(e,t,n,i){const r=(a,c,l=.22)=>this.tone(a,n,l,"sine",c,i,.002,a*.5),o=(a,c,l=.04)=>this.noiseHit(n,l,c,"bandpass",a,i,0,3);switch(e){case"taiko":t===0&&r(70,.32,.5),t===4&&r(80,.18,.35),t===6&&o(1200,.05);break;case"darbuka":(t===0||t===4)&&r(110,.2,.18),(t===1||t===3||t===6)&&o(3500,.06,.05);break;case"frame":(t===0||t===4)&&r(95,.16,.3),(t===2||t===6)&&this.noiseHit(n,.12,.03,"highpass",2500,i);break;case"bongo":(t===0||t===3||t===6)&&r(330,.08,.1),(t===1||t===4)&&r(230,.08,.12),t%2===1&&this.noiseHit(n,.05,.025,"highpass",6e3,i);break;case"tick":o(t%2===0?3200:2300,.045,.03),t===0&&this.fm(220,n,.25,{gain:.03,ratio:2.7,index:2,out:i});break;case"lofi":(t===0||t===5)&&r(120,.22,.25),(t===2||t===6)&&this.noiseHit(n,.14,.05,"bandpass",1800,i,0,.8),this.noiseHit(n,.03,.012,"highpass",7e3,i);break;case"woodblock":(t===0||t===3||t===6)&&o(950,.07,.05),t===0&&this.fm(330,n,.9,{gain:.02,ratio:1.4,index:2.5,out:i});break}}tone(e,t,n,i,r,o,a=.005,c=0){const l=this.ctx,h=l.createOscillator(),u=l.createGain();h.type=i,h.frequency.setValueAtTime(e,t),c&&h.frequency.exponentialRampToValueAtTime(c,t+n),u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(r,t+a),u.gain.exponentialRampToValueAtTime(1e-4,t+n),h.connect(u),u.connect(o),h.start(t),h.stop(t+n+.05)}fm(e,t,n,i){const r=this.ctx,o=r.createOscillator(),a=r.createOscillator(),c=r.createGain(),l=r.createGain();o.frequency.setValueAtTime(e,t),a.frequency.setValueAtTime(e*(i.ratio??3.5),t),c.gain.setValueAtTime(e*(i.index??2),t),c.gain.exponentialRampToValueAtTime(e*.05,t+n),l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(i.gain,t+.004),l.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(c),c.connect(o.frequency),o.connect(l),l.connect(i.out??this.sfx),o.start(t),a.start(t),o.stop(t+n+.05),a.stop(t+n+.05)}noiseHit(e,t,n,i,r,o,a=0,c=1){const l=this.ctx,h=l.createBufferSource();h.buffer=this.noise;const u=l.createBiquadFilter();u.type=i,u.Q.value=c,u.frequency.setValueAtTime(r,e),a&&u.frequency.exponentialRampToValueAtTime(a,e+t);const d=l.createGain();d.gain.setValueAtTime(1e-4,e),d.gain.linearRampToValueAtTime(n,e+Math.min(.02,t/3)),d.gain.exponentialRampToValueAtTime(1e-4,e+t),h.connect(u),u.connect(d),d.connect(o),h.start(e),h.stop(e+t+.02)}pluck(e,t,n,i){const r=this.ctx,o=r.createBiquadFilter();o.type="lowpass",o.frequency.value=2500,o.Q.value=0;const a=r.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(n,t+.006),a.gain.exponentialRampToValueAtTime(1e-4,t+.16),o.connect(a),a.connect(i??this.sfx);for(const[c,l,h]of[["triangle",1,1],["sine",.5,.6]]){const u=r.createOscillator();u.type=c,u.frequency.setValueAtTime(e*l*1.5,t),u.frequency.exponentialRampToValueAtTime(e*l,t+.03);const d=r.createGain();d.gain.value=h,u.connect(d),d.connect(o),u.start(t),u.stop(t+.2)}}sample(e,t,n,i,r,o){const a=this.ctx,c=a.createBufferSource();c.buffer=e,c.playbackRate.value=n;const l=Math.min(e.duration/n,r),h=a.createGain();return h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(i,t+.004),h.gain.setValueAtTime(i,t+Math.max(.005,l-o)),h.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(.01,l)),c.connect(h),h.connect(this.sfx),c.start(t),c.stop(t+l+.02),t+l}ready(){return!!this.ctx&&(this.ctx.state==="running"||this.offline)}offline=!1;static async renderOffline(e,t){const n=new OfflineAudioContext(1,Math.ceil(44100*t),44100),i=new pl(!1);i.offline=!0,i.ctx=n,i.master=n.createGain(),i.master.connect(n.destination),i.sfx=n.createGain(),i.sfx.gain.value=.85,i.sfx.connect(i.master),i.music=n.createGain(),i.music.connect(i.master);const r=n.createBuffer(1,n.sampleRate,n.sampleRate),o=r.getChannelData(0);for(let a=0;a<o.length;a++)o[a]=Math.random()*2-1;return i.noise=r,await i.loadSfx(),e(i),n.startRendering()}now(){return this.ctx.currentTime+.005}async loadSfx(){const e=this.ctx,t=async a=>{const c=await pu(a);try{return c?await e.decodeAudioData(c):null}catch{return null}},[n,i,r,...o]=await Promise.all([t(Vy),t(Gy),t(Wy),...Hy.map(t)]);this.yarnBuf=n,this.hissBuf=i,this.yowlBuf=r,this.meowBufs=o.filter(a=>!!a)}call(e,t,n={}){if(!n.force){if(t<this.voiceUntil){if(this.voiceKind!=="mew"||e==="mew")return!1;t=this.voiceUntil}if((e==="mew"?t-this.lastMew:t-this.lastMeow)<(e==="meow"?.8:e==="mrrp"?.5:.3))return!1}const i=this.meowBufs.length?this.recordedCall(e,t,n):this.synthCall(e,t,n);return this.voiceUntil=Math.max(this.voiceUntil,i),this.voiceKind=e,e==="mew"?this.lastMew=t:this.lastMeow=t,!0}recordedCall(e,t,n){const i=mu[e],r=this.meowBufs[Math.floor(Math.random()*this.meowBufs.length)],[o,a]=i.rate,c=n.p?(o+a)/2*(n.p/((i.lo+i.hi)/2)):o+Math.random()*(a-o),l=i.dur-i.amp[i.amp.length-1][0];return this.sample(r,t,c,.8*(n.level??1),i.slice,l)}buzz(){if(!this.wave){const e=new Float32Array(40),t=new Float32Array(40);for(let n=1;n<t.length;n++)t[n]=Math.pow(n,-.8);this.wave=this.ctx.createPeriodicWave(e,t)}return this.wave}synthCall(e,t,n){const i=this.ctx,r=mu[e],o=n.p??r.lo+Math.random()*(r.hi-r.lo),a=n.stretch??.92+Math.random()*.16,c=t+r.dur*a,l=r.level*(n.level??1),h=i.createOscillator();h.setPeriodicWave(this.buzz()),Ia(h.frequency,r.pitch,t,a,o);const u=i.createGain(),d=[[r.f1,1,5,o/((r.lo+r.hi)/2)],[r.f2,.7,6,1],[r.f3,.35,8,1]];for(const[v,T,C,P]of d){const I=i.createBiquadFilter();I.type="bandpass",I.Q.value=C,Ia(I.frequency,v,t,a,P);const F=i.createGain();F.gain.value=T,h.connect(I),I.connect(F),F.connect(u)}const f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=o*1.6,f.Q.value=0;const p=i.createGain();p.gain.value=.2,h.connect(f),f.connect(p),p.connect(u);const x=i.createBufferSource();x.buffer=this.noise,x.loop=!0;const m=i.createBiquadFilter();m.type="bandpass",m.frequency.value=3e3,m.Q.value=.8;const g=i.createGain();g.gain.value=.05,x.connect(m),m.connect(g),g.connect(u);const _=i.createBiquadFilter();_.type="lowpass",_.Q.value=0,Ia(_.frequency,r.mouth,t,a);const E=i.createOscillator();E.frequency.value=r.trill?25+Math.random()*5:5+Math.random();const y=i.createGain();E.connect(y),y.connect(h.frequency);const S=i.createGain();if(r.trill){const v=t+r.trill*a;y.gain.setValueAtTime(o*.04,t),y.gain.setValueAtTime(o*.04,v),y.gain.linearRampToValueAtTime(0,v+.04);const T=i.createGain();T.gain.setValueAtTime(.45,t),T.gain.setValueAtTime(.45,v),T.gain.linearRampToValueAtTime(0,v+.04),S.gain.setValueAtTime(.55,t),S.gain.setValueAtTime(.55,v),S.gain.linearRampToValueAtTime(1,v+.04),E.connect(T),T.connect(S.gain)}else y.gain.setValueAtTime(0,t),y.gain.setValueAtTime(0,t+.1*a),y.gain.linearRampToValueAtTime(o*r.vib,t+.2*a);const b=(v,T)=>{const C=i.createBufferSource();C.buffer=this.noise,C.loop=!0;const P=i.createBiquadFilter();P.type="lowpass",P.frequency.value=30,P.Q.value=0;const I=i.createGain();I.gain.value=T/.025,C.connect(P),P.connect(I),I.connect(v),C.start(t,Math.random()*.9),C.stop(c+.05)};b(h.frequency,o*.009),b(S.gain,.06);const A=i.createGain();A.gain.setValueAtTime(1e-4,t);for(const[v,T]of r.amp)A.gain.linearRampToValueAtTime(T*l,t+v*a);return A.gain.exponentialRampToValueAtTime(1e-4,c),u.connect(_),_.connect(S),S.connect(A),A.connect(this.sfx),h.start(t),E.start(t),x.start(t,Math.random()*.4),h.stop(c+.05),E.stop(c+.05),x.stop(c+.05),c}collect(e=!1){if(!this.ready())return;const t=this.now(),n=performance.now()/1e3;this.combo=n-this.lastCollect<1.4?Math.min(this.combo+1,14):0,this.lastCollect=n;const i=Math.min(this.combo,7)+3,r=60+Xy[i%5]+12*Math.floor(i/5),o=e?.6:1;if(this.yarnBuf?this.sample(this.yarnBuf,t,Math.pow(2,(Math.min(r,79)-67)/12),.8*o,.6,.05):(this.noiseHit(t,.08,.5*o,"bandpass",700+Math.random()*200,this.sfx,250,.7),this.tone(170,t,.07,"sine",.12*o,this.sfx,.004,85),this.pluck(ft(r-12),t,.09*o)),!e||this.combo%3===0){const a=900*Math.pow(2,(r-67)/36)*(.97+Math.random()*.06);this.call("mew",t+.04,{p:a,level:.4*o})}}buy(){if(!this.ready())return;const e=this.now();[0,4,7,12,16].forEach((t,n)=>this.fm(ft(84+t),e+n*.05,.5,{gain:.09,ratio:3.5,index:2})),this.noiseHit(e,.45,.05,"highpass",3e3,this.sfx,9e3),this.call("mrrp",e+.27)}deny(){if(!this.ready())return;const e=this.now();this.tone(196,e,.08,"square",.05,this.sfx),this.tone(165,e+.1,.1,"square",.05,this.sfx)}click(){if(!this.ready())return;const e=this.now();this.tone(1300,e,.05,"sine",.07,this.sfx,.002,760),this.noiseHit(e,.02,.04,"bandpass",4e3,this.sfx)}whoosh(e=!1){if(!this.ready())return;const t=this.now();this.noiseHit(t,.28,.13,"bandpass",e?2600:380,this.sfx,e?380:2600,1.2)}meow(e="meow"){this.ready()&&this.call(e,this.now())}bone(){if(!this.ready())return;const e=this.now();this.tone(330,e,.22,"triangle",.14,this.sfx,.003,150),this.noiseHit(e,.05,.12,"bandpass",1800,this.sfx,0,4)}alert(){if(!this.ready())return;const e=this.now();[988,784,988,784].forEach((t,n)=>this.tone(t,e+n*.13,.12,"sine",.09,this.sfx))}chime(){if(!this.ready())return;const e=this.now();[84,88,91,96].forEach((t,n)=>this.fm(ft(t),e+n*.03,.9,{gain:.07,ratio:3.5,index:1.4}))}golden(){if(!this.ready())return;const e=this.now();[16,14,12,9,7,4,2,0].forEach((t,n)=>this.fm(ft(84+t),e+n*.045,.4,{gain:.08,ratio:3.5,index:2})),this.noiseHit(e,.6,.05,"highpass",6e3,this.sfx,3e3)}crash(){if(!this.ready())return;const e=this.now();this.noiseHit(e,.5,.25,"highpass",3500,this.sfx);for(let t=0;t<7;t++)this.fm(2200+Math.random()*2800,e+.03+Math.random()*.35,.18,{gain:.05,ratio:2.7,index:1.5})}win(){if(!this.ready())return;const e=this.now();[72,76,79,84,88].forEach((t,n)=>this.tone(ft(t),e+n*.09,.22,"square",.045,this.sfx)),[72,76,79,84].forEach(t=>this.fm(ft(t),e+.5,1.6,{gain:.08,ratio:3.5,index:1.4})),this.noiseHit(e+.5,1.2,.05,"highpass",4e3,this.sfx,1e4)}lose(){if(!this.ready())return;const e=this.ctx,t=this.now();[67,66,65,62].forEach((n,i)=>{const r=t+i*.32,o=e.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(ft(n-12),r),o.frequency.exponentialRampToValueAtTime(ft(n-12)*(i===3?.85:.97),r+.3);const a=e.createBiquadFilter();a.type="lowpass",a.Q.value=8,a.frequency.setValueAtTime(400,r),a.frequency.linearRampToValueAtTime(1600,r+.12),a.frequency.exponentialRampToValueAtTime(300,r+.3);const c=e.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.linearRampToValueAtTime(.12,r+.03),c.gain.exponentialRampToValueAtTime(1e-4,r+(i===3?.7:.3)),o.connect(a),a.connect(c),c.connect(this.sfx),o.start(r),o.stop(r+.75)})}shatter(e){if(!this.ready())return;const t=this.now(),n=e==="glass"||e==="vase"||e==="frame";this.noiseHit(t,.12,.42,"lowpass",900,this.sfx,200),this.noiseHit(t,n?.55:.35,n?.3:.2,"highpass",n?3800:1800,this.sfx);const i=n?9:5;for(let r=0;r<i;r++){const o=n?2400+Math.random()*3200:900+Math.random()*1400;this.fm(o,t+.02+Math.random()*.4,n?.2:.09,{gain:n?.05:.04,ratio:2.7,index:1.4})}}thud(){if(!this.ready())return;const e=this.now();this.tone(140,e,.12,"sine",.22,this.sfx,.003,70),this.noiseHit(e,.06,.12,"lowpass",800,this.sfx)}scratch(){if(!this.ready())return;const e=this.now();for(let t=0;t<3;t++)this.noiseHit(e+t*.11,.09,.16,"bandpass",1500+Math.random()*900,this.sfx,3800,1.5)}chew(){if(!this.ready())return;const e=this.now();for(let t=0;t<2;t++)this.noiseHit(e+t*.16,.07,.14,"bandpass",900,this.sfx,500,2),this.tone(260-t*30,e+t*.16,.06,"sine",.06,this.sfx,.003,180)}paper(){if(!this.ready())return;const e=this.now();this.noiseHit(e,.22,.14,"bandpass",2400,this.sfx,5200,.9),this.noiseHit(e+.08,.16,.09,"highpass",4e3,this.sfx)}typing(){if(!this.ready())return;const e=this.now();for(let t=0;t<3;t++)this.noiseHit(e+t*.05+Math.random()*.02,.025,.1,"bandpass",2500+Math.random()*1500,this.sfx,0,3)}door(){if(!this.ready())return;const e=this.now();this.noiseHit(e,.5,.1,"bandpass",500,this.sfx,900,2),this.tone(90,e+.45,.1,"sine",.12,this.sfx,.002,60)}treat(){if(!this.ready())return;const e=this.now();[72,76,79,84].forEach((t,n)=>this.pluck(ft(t),e+n*.05,.11)),this.call("mew",e+.18,{level:.5})}hiss(){if(!this.ready())return;const e=this.ctx,t=this.now();if(this.noiseHit(t,.035,.45,"highpass",2600,this.sfx),this.hissBuf){this.sample(this.hissBuf,t,.94+Math.random()*.14,1.3,.7,.22);return}const n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;const i=e.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(4200,t),i.frequency.exponentialRampToValueAtTime(3e3,t+.45),i.Q.value=.7;const r=e.createBiquadFilter();r.type="peaking",r.frequency.value=1400,r.gain.value=6;const o=e.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(.42,t+.02),o.gain.exponentialRampToValueAtTime(.18,t+.25),o.gain.exponentialRampToValueAtTime(1e-4,t+.5);const a=e.createOscillator();a.frequency.value=28;const c=e.createGain();c.gain.value=.08,a.connect(c),c.connect(o.gain),n.connect(i),i.connect(r),r.connect(o),o.connect(this.sfx),n.start(t,Math.random()*.5),a.start(t),n.stop(t+.55),a.stop(t+.55)}syllable(e,t,n,i=1,r=1){return e==="ha"&&this.noiseHit(t-.04,.07,.12*r,"bandpass",1600,this.sfx,0,.7),e==="ji"&&this.noiseHit(t-.015,.045,.1*r,"highpass",3800,this.sfx),e==="bo"&&this.noiseHit(t,.02,.18*r,"lowpass",500,this.sfx),this.synthCall(e,t,{p:n,stretch:i,level:r})}hajimi(e=!1){if(!this.ready())return;const t=this.now()+.04,n=e?1.18:1,i=e?.85:1,r=e?1.7:1.35;this.syllable("ha",t,640*n,i,r),this.syllable("ji",t+.19*i,790*n,i,r),this.syllable("mi",t+.33*i,730*n,e?.9:1.25,r),this.voiceUntil=Math.max(this.voiceUntil,t+.75*i),this.lastMeow=t}mambo(){if(!this.ready())return;const e=this.now()+.05,t=60/128,n=[[0,"man",76],[.5,"bo",72],[2,"man",79],[2.5,"bo",76],[4,"man",81],[4.5,"bo",79],[5,"man",76],[5.5,"bo",74],[6,"man",76],[6.5,"bo",72]];for(const[i,r,o]of n){const a=i===6.5;this.syllable(r,e+i*t,ft(o),a?2.4:.85,.95)}[48,55,52,55,50,57,48,55].forEach((i,r)=>this.tone(ft(i),e+r*t,t*.4,"triangle",.11,this.sfx,.004));for(let i=0;i<8;i++)this.noiseHit(e+i*t+t*.5,.06,.07,"bandpass",1800,this.sfx,900,1.2);for(const[i,,r]of n)this.pluck(ft(r+12),e+i*t,.045);this.voiceUntil=Math.max(this.voiceUntil,e+8*t)}yowl(){if(this.ready()){if(this.yowlBuf){const e=this.now();this.voiceUntil=Math.max(this.voiceUntil,this.sample(this.yowlBuf,e,.88,.95,1.2,.25)),this.lastMeow=e;return}this.call("meow",this.now(),{p:430,stretch:2.1,level:1.1,force:!0})}}glitch(){if(!this.ready())return;const e=this.now();for(let t=0;t<5;t++)this.call("mew",e+t*.09,{p:900+t*120,level:.35,force:!0});for(let t=0;t<10;t++)this.noiseHit(e+t*.07,.03,.08,"bandpass",1200+Math.random()*3e3,this.sfx,0,4);this.tone(110,e+.5,.5,"square",.04,this.sfx,.002,55)}}const $y=.12,Na=.34,Gs=.2,Bn=(s,e,t,n=0)=>e>=s.x0-n&&e<=s.x1+n&&t>=s.z0-n&&t<=s.z1+n,Mi=s=>({x:(s.x0+s.x1)/2,z:(s.z0+s.z1)/2});function xu(s,e,t){return{x:Math.min(Math.max(e,s.x0),s.x1),z:Math.min(Math.max(t,s.z0),s.z1)}}function Yy(s,e,t,n,i){let r=0,o=1;const a=t-s,c=n-e,l=(h,u)=>{if(Math.abs(h)<1e-9)return u>=0;const d=u/h;if(h<0){if(d>o)return!1;d>r&&(r=d)}else{if(d<r)return!1;d<o&&(o=d)}return!0};return l(-a,s-i.x0)&&l(a,i.x1-s)&&l(-c,e-i.z0)&&l(c,i.z1-e)&&r<=o}function Qd(s,e){const t=$y/2;return{x0:Math.min(s[0],e[0])-t,x1:Math.max(s[0],e[0])+t,z0:Math.min(s[1],e[1])-t,z1:Math.max(s[1],e[1])+t}}class Ky{map;solids=[];byId=new Map;nav;constructor(e){this.map=e,e.walls.forEach((t,n)=>{const i=t.h??2.4;this.add({id:`wall${n}`,rect:Qd(t.a,t.b),top:i,base:0,climb:!1,blocksSight:i>=1.6&&t.kind!=="glass",wall:!0,enabled:!0})});for(const t of e.furniture)t.decor||t.walkThrough||this.add({id:t.id,rect:t.rect,top:t.h,base:t.base??0,climb:!t.noClimb,blocksSight:t.h>=1.5&&t.kind!=="slidingDoor",furn:t,enabled:!0,needs:t.needs});this.nav=new Jy(this)}add(e){this.solids.push(e),this.byId.set(e.id,e)}onFloor(e,t){return this.map.rooms.some(n=>Bn(n.rect,e,t))}room(e,t){return this.map.rooms.find(n=>Bn(n.rect,e,t))??null}supportAt(e,t,n){let i=null;for(const r of this.solids)!r.enabled||!r.climb||!Bn(r.rect,e,t)||r.needs&&n&&!n.has(r.needs)||(!i||r.top>i.top)&&(i=r);return{h:i?.top??0,solid:i}}restAt(e,t,n){let i=0;for(const r of this.solids)!r.enabled||!r.climb||!Bn(r.rect,e,t)||r.top<=n+.02&&r.top>i&&(i=r.top);return i}blocks(e,t,n){return e.enabled&&t<e.top-.02&&t+n>e.base}sight(e,t,n,i){for(const r of this.solids)if(!(!r.blocksSight||!r.enabled)&&!(Bn(r.rect,n,i,.05)||Bn(r.rect,e,t,.05))&&Yy(e,t,n,i,r.rect))return!1;return!0}}const _u=Math.SQRT2;class Jy{cell=.2;ox;oz;w;h;walk;constructor(e,t=.26){const n=e.map.bounds;this.ox=n.x0,this.oz=n.z0,this.w=Math.ceil((n.x1-n.x0)/this.cell),this.h=Math.ceil((n.z1-n.z0)/this.cell),this.walk=new Uint8Array(this.w*this.h);for(let i=0;i<this.h;i++)for(let r=0;r<this.w;r++){const o=this.ox+(r+.5)*this.cell,a=this.oz+(i+.5)*this.cell;let c=e.onFloor(o,a);if(c){for(const l of e.solids)if(!(l.furn?.kind==="slidingDoor"||l.base>.9)&&Bn(l.rect,o,a,t)){c=!1;break}}this.walk[i*this.w+r]=c?1:0}}idx(e,t){const n=Math.floor((e-this.ox)/this.cell),i=Math.floor((t-this.oz)/this.cell);return n<0||i<0||n>=this.w||i>=this.h?-1:i*this.w+n}ok(e,t){const n=this.idx(e,t);return n>=0&&this.walk[n]===1}center(e){return{x:this.ox+(e%this.w+.5)*this.cell,z:this.oz+(Math.floor(e/this.w)+.5)*this.cell}}nearest(e,t){const n=this.idx(e,t);if(n>=0&&this.walk[n])return{x:e,z:t};const i=Math.floor((e-this.ox)/this.cell),r=Math.floor((t-this.oz)/this.cell);let o=null,a=1/0;for(let c=1;c<30&&!o;c++)for(let l=r-c;l<=r+c;l++)for(let h=i-c;h<=i+c;h++){if(Math.max(Math.abs(h-i),Math.abs(l-r))!==c||h<0||l<0||h>=this.w||l>=this.h||!this.walk[l*this.w+h])continue;const u=this.center(l*this.w+h),d=(u.x-e)**2+(u.z-t)**2;d<a&&(a=d,o=u)}return o}regionOf=null;region(e,t){if(!this.regionOf){const i=new Int32Array(this.w*this.h).fill(-1);let r=0;for(let o=0;o<i.length;o++){if(!this.walk[o]||i[o]>=0)continue;const a=[o];for(i[o]=r;a.length;){const c=a.pop(),l=c%this.w,h=Math.floor(c/this.w);for(const[u,d]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=l+u,p=h+d;if(f<0||p<0||f>=this.w||p>=this.h)continue;const x=p*this.w+f;this.walk[x]&&i[x]<0&&(i[x]=r,a.push(x))}}r++}this.regionOf=i}const n=this.nearest(e,t);return n?this.regionOf[this.idx(n.x,n.z)]:-1}line(e,t,n,i){const r=Math.hypot(n-e,i-t),o=Math.max(1,Math.ceil(r/(this.cell*.5)));for(let a=0;a<=o;a++){const c=a/o;if(!this.ok(e+(n-e)*c,t+(i-t)*c))return!1}return!0}find(e,t,n,i){const r=this.nearest(e,t),o=this.nearest(n,i);if(!r||!o)return null;if(this.line(r.x,r.z,o.x,o.z))return[o];const a=this.idx(r.x,r.z),c=this.idx(o.x,o.z),l=this.w*this.h,h=new Float32Array(l).fill(1/0),u=new Int32Array(l).fill(-1),d=new Uint8Array(l),f=new Zy,p=c%this.w,x=Math.floor(c/this.w),m=b=>{const A=Math.abs(b%this.w-p),v=Math.abs(Math.floor(b/this.w)-x);return A+v+(_u-2)*Math.min(A,v)};for(h[a]=0,f.push(a,m(a));f.size;){const b=f.pop();if(b===c)break;if(d[b])continue;d[b]=1;const A=b%this.w,v=Math.floor(b/this.w);for(let T=-1;T<=1;T++)for(let C=-1;C<=1;C++){if(!C&&!T)continue;const P=A+C,I=v+T;if(P<0||I<0||P>=this.w||I>=this.h)continue;const F=I*this.w+P;if(!this.walk[F]||d[F]||C&&T&&(!this.walk[v*this.w+P]||!this.walk[I*this.w+A]))continue;const N=h[b]+(C&&T?_u:1);N<h[F]&&(h[F]=N,u[F]=b,f.push(F,N+m(F)))}}if(u[c]<0)return null;const g=[];for(let b=c;b!==a&&b>=0;b=u[b])g.push(this.center(b));g.reverse(),g[g.length-1]=o;const _=[];let E=r.x,y=r.z,S=0;for(;S<g.length;){let b=g.length-1;for(;b>S&&!this.line(E,y,g[b].x,g[b].z);)b--;_.push(g[b]),E=g[b].x,y=g[b].z,S=b+1}return _}}class Zy{keys=[];pri=[];get size(){return this.keys.length}push(e,t){const n=this.keys,i=this.pri;let r=n.length;for(n.push(e),i.push(t);r>0;){const o=r-1>>1;if(i[o]<=t)break;n[r]=n[o],i[r]=i[o],r=o}n[r]=e,i[r]=t}pop(){const e=this.keys,t=this.pri,n=e[0],i=e.pop(),r=t.pop();if(e.length){let o=0;const a=e.length;for(;;){const c=2*o+1,l=c+1;let h=o,u=r;if(c<a&&t[c]<u&&(h=c,u=t[c]),l<a&&t[l]<u&&(h=l),h===o)break;e[o]=e[h],t[o]=t[h],o=h}e[o]=i,t[o]=r}return n}}function jy(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new At;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=vu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const p=vu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function vu(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Qt(o,t,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){const x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function yu(s,e){if(e===sp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Cc||e===fd){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Cc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ef(s){const e=new Map,t=new Map,n=s.clone();return tf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function tf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)tf(s.children[n],e.children[n],t)}class Qy extends As{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new Mu(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mu(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new xM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=or.extractUrlBase(e);o=or.resolveURL(l,this.path)}else o=or.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Bd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===nf){try{o[$e.KHR_BINARY_GLTF]=new _M(e)}catch(u){i&&i(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new LM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new nM;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new vM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new yM;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new MM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function eM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function It(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tM{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],un);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Gd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new xm(h),l.distance=u;break;case"spot":l=new mm(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),On(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class nM{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){const i=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],un),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(i)}}class iM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class sM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(r,r)}return Promise.all(i)}}class rM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class oM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class aM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Pt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class cM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class lM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],un),Promise.all(i)}}class hM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class uM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],un),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Pt)),Promise.all(i)}}class dM{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class fM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class pM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class mM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class gM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Mu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class xM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const p of u){const x=new Oe,m=new R,g=new dn,_=new R(1,1,1),E=new o0(p.geometry,p.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,S),c.SCALE&&_.fromBufferAttribute(c.SCALE,S),E.setMatrixAt(S,x.compose(m,g,_));let y=null;for(const S in c)if(S==="_COLOR_0"){const b=c[S];E.instanceColor=new To(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(y===null){const A=E.geometry;y=new At,y.name=A.name;for(const v in A.attributes)y.setAttribute(v,A.attributes[v]);for(const v in A.morphAttributes)y.morphAttributes[v]=A.morphAttributes[v];A.index!==null&&y.setIndex(A.index),y.morphTargetsRelative=A.morphTargetsRelative;for(const v of A.groups)y.addGroup(v.start,v.count,v.materialIndex);A.boundingBox!==null&&(y.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(y.boundingSphere=A.boundingSphere.clone()),y.drawRange.start=A.drawRange.start,y.drawRange.count=A.drawRange.count,y.userData=Object.assign({},A.userData),E.geometry=y}const b=c[S];y.setAttribute(S,new To(b.array,b.itemSize,b.normalized))}St.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const nf="glTF",Ws=12,bu={JSON:1313821514,BIN:5130562};class _M{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ws,r=new DataView(e,Ws);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===bu.JSON){const l=new Uint8Array(e,Ws+o,a);this.content=n.decode(l)}else if(c===bu.BIN){const l=Ws+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Uc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Uc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=xs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const x=f.attributes[p],m=c[p];m!==void 0&&(x.normalized=m)}u(f)},a,l,un,d)})})}}class yM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class MM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class sf extends ws{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,x=p-l,m=-2*f+3*d,g=f-d,_=1-m,E=g-d+u;for(let y=0;y!==a;y++){const S=o[x+y+a],b=o[x+y+c]*h,A=o[p+y+a],v=o[p+y]*h;r[y]=_*S+E*b+m*A+g*v}return r}}const bM=new dn;class SM extends sf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return bM.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Su={9728:Et,9729:Ft,9984:od,9985:ro,9986:Js,9987:ri},wu={33071:Vn,33648:vo,10497:Gi},Da={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wM={CUBICSPLINE:void 0,LINEAR:dr,STEP:ur},Ua={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function TM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new hl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),s.DefaultMaterial}function Oi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function EM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function AM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function RM(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ka(t.attributes):e=s.indices+":"+ka(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ka(s.targets[n]);return e}function ka(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function kc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function CM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const PM=new Oe;class LM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new eM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Hd(this.options.manager):this.textureLoader=new vm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Oi(r,a,i),On(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(or.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Da[i.type],a=xs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Qt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Da[i.type],l=xs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let x,m;if(f&&f!==u){const g=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let E=t.cache.get(_);E||(x=new l(a,g*f,i.count*f/h),E=new Zp(x,f/h),t.cache.add(_,E)),m=new jc(E,c,d%f/h,p)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),m=new Qt(x,c,p);if(i.sparse!==void 0){const g=Da.SCALAR,_=xs[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new _(o[1],E,i.sparse.count*g),b=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new Qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,v=S.length;A<v;A++){const T=S[A];if(m.setX(T,b[A*c]),c>=2&&m.setY(T,b[A*c+1]),c>=3&&m.setZ(T,b[A*c+2]),c>=4&&m.setW(T,b[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Su[d.magFilter]||Ft,h.minFilter=Su[d.minFilter]||ri,h.wrapS=wu[d.wrapS]||Gi,h.wrapT=wu[d.wrapT]||Gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Et&&h.minFilter!==Ft,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){const m=new Ot(x);m.needsUpdate=!0,d(m)}),t.load(or.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),On(u,o),u.userData.mimeType=o.mimeType||CM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new wd,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Sd,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return hl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],un),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_n);const h=r.alphaMode||Ua.OPAQUE;if(h===Ua.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ua.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==on&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==on&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==on){const u=r.emissiveFactor;a.emissive=new Re().setRGB(u[0],u[1],u[2],un)}return r.emissiveTexture!==void 0&&o!==on&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),On(u,r),t.associations.set(u,{materials:e}),r.extensions&&Oi(i,u,r),u})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Tu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=RM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Tu(new At,l,t),l.mode===gn.TRIANGLE_STRIP?d=d.then(f=>yu(f,fd)):l.mode===gn.TRIANGLE_FAN&&(d=d.then(f=>yu(f,Cc))),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?TM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const x=h[f],m=o[f];let g;const _=l[f];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0){const E=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&y?new i0(x,_):new rt(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===gn.LINES)g=new c0(x,_);else if(m.mode===gn.LINE_STRIP)g=new tl(x,_);else if(m.mode===gn.LINE_LOOP)g=new l0(x,_);else if(m.mode===gn.POINTS)g=new h0(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&AM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),On(g,r),m.extensions&&Oi(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Oi(i,u[0],r),u[0];const d=new Be;r.extensions&&Oi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(ho.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Tr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Oe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Qc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],p=i.samplers[f.sampler],x=f.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",_)),l.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let E=0,y=d.length;E<y;E++){const S=d[E],b=f[E],A=p[E],v=x[E],T=m[E];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const C=n._createAnimationTracks(S,b,A,v,T);if(C)for(let P=0;P<C.length;P++)g.push(C[P])}const _=new om(r,void 0,g);return On(_,i),_})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,PM)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,p=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new bd:l.length>1?h=new Be:l.length===1?h=l[0]:h=new St,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),On(h,r),r.extensions&&Oi(n,h,r),r.matrix!==void 0){const u=new Oe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Be;n.name&&(r.name=i.createUniqueName(n.name)),On(r,n),n.extensions&&Oi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){const d=c[h];d.parent!==null?r.add(ef(d)):r.add(d)}const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Pn||d instanceof Ot)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}bi[r.path]===bi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(bi[r.path]){case bi.weights:h=vr;break;case bi.rotation:h=yr;break;case bi.translation:case bi.scale:h=Ro;break;default:n.itemSize===1?h=vr:h=Ro;break}const u=i.interpolation!==void 0?wM[i.interpolation]:dr,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const x=new h(c[f]+"."+bi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=kc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof yr?SM:sf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function IM(s,e,t){const n=e.attributes,i=new In;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){const h=kc(xs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const x=kc(xs[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new $n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Tu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Uc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),On(s,e),IM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?EM(s,e.targets,t):s})}const NM=""+new URL("albedo-CzeC7KKg.webp",import.meta.url).href,DM=""+new URL("cat-GmaU70G5.glb",import.meta.url).href,UM=""+new URL("regions-CCk9l2ec.png",import.meta.url).href,Xs=new R;function mn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Xs.copy(e),Xs[n]=0,Xs.normalize();const l=.5*o/(o+a),h=1-Xs.angleTo(s)/c;return Math.sign(Xs[t])===1?h*l:a/(o+a)+l+l*(1-h)}class ml extends Yn{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new R,l=new R,h=new R(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,x=new R,m=.5/o;for(let g=0,_=0;g<u.length;g+=3,_+=2)switch(c.fromArray(u,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[g+0]=h.x*Math.sign(c.x)+l.x*r,u[g+1]=h.y*Math.sign(c.y)+l.y*r,u[g+2]=h.z*Math.sign(c.z)+l.z*r,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[_+0]=mn(x,l,"z","y",r,n),f[_+1]=1-mn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[_+0]=1-mn(x,l,"z","y",r,n),f[_+1]=1-mn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[_+0]=1-mn(x,l,"x","z",r,e),f[_+1]=mn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[_+0]=1-mn(x,l,"x","z",r,e),f[_+1]=1-mn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[_+0]=1-mn(x,l,"x","y",r,e),f[_+1]=1-mn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[_+0]=mn(x,l,"x","y",r,e),f[_+1]=1-mn(x,l,"y","x",r,t);break}}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.segments,e.radius)}}const Ai=1;function Po(s){s.traverse(e=>e.layers.set(Ai))}const rf=(()=>{const s=new Fo(new Uint8Array([105,105,105,255,190,190,190,255,255,255,255,255]),3,1,cn);return s.minFilter=Et,s.magFilter=Et,s.generateMipmaps=!1,s.needsUpdate=!0,s})(),of={value:9};function af(s){s.uniforms.uHatch=of,s.fragmentShader=s.fragmentShader.replace("void main() {",`uniform float uHatch;
void main() {`).replace("#include <opaque_fragment>",`{
        float base = max(dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114)), 0.04);
        float lit = dot(outgoingLight, vec3(0.299, 0.587, 0.114)) / base;
        float d = mod(gl_FragCoord.x + gl_FragCoord.y, uHatch);
        float line = 1.0 - smoothstep(1.0, 2.2, d);
        float inShadow = 1.0 - smoothstep(0.62, 0.7, lit);
        outgoingLight *= 1.0 - 0.38 * line * inShadow;
      }
      #include <opaque_fragment>`)}function Fc(s){const e=new Fd({...s,gradientMap:rf});return e.onBeforeCompile=af,e}const Eu=new Map;function Lt(s,e){const t=e?`${s}|${e.opacity??1}|${e.emissive??""}`:s;let n=Eu.get(t);return n||(n=new Fd({color:s,gradientMap:rf}),n.onBeforeCompile=af,(e?.transparent||(e?.opacity??1)<1)&&(n.transparent=!0,n.opacity=e?.opacity??1,n.depthWrite=!1),e?.emissive&&(n.emissive=new Re(e.emissive)),Eu.set(t,n)),n}const Au=new Map;function $i(s,e){let t=Au.get(s);return t||(t=e(),Au.set(s,t)),t}const Gt=s=>Math.round(s*1e3)/1e3;function ln(s,e,t=!0){const n=new rt(s,e);return n.castShadow=t,n.receiveShadow=!0,n}function Z(s,e,t,n,i=0,r=0,o=0,a=.02){const c=Math.min(a,s/2-.001,e/2-.001,t/2-.001),l=c>.004?$i(`rb${Gt(s)},${Gt(e)},${Gt(t)},${Gt(c)}`,()=>new ml(s,e,t,2,c)):$i(`b${Gt(s)},${Gt(e)},${Gt(t)}`,()=>new Yn(s,e,t)),h=ln(l,Lt(n));return h.position.set(i,r+e/2,o),h}function it(s,e,t,n,i=0,r=0,o=0,a=16){const c=$i(`c${Gt(s)},${Gt(e)},${Gt(t)},${a}`,()=>new wr(s,e,t,a)),l=ln(c,Lt(n));return l.position.set(i,r+t/2,o),l}function Xe(s,e,t=0,n=0,i=0,r=1,o=1,a=1,c=14){const l=$i(`s${Gt(s)},${c}`,()=>new Ci(s,c,Math.max(6,Math.round(c*.7)))),h=ln(l,Lt(e));return h.position.set(t,n,i),h.scale.set(r,o,a),h}function Oc(s,e,t,n=12){const i=$i(`k${Gt(s)},${Gt(e)},${n}`,()=>new mr(s,e,n));return ln(i,Lt(t))}function Si(s,e,t){const n=$i(`p${Gt(s)},${Gt(e)}`,()=>new nl(s,e,4,10));return ln(n,Lt(t))}function Hn(s,e,t,n=Math.PI*2){const i=$i(`t${Gt(s)},${Gt(e)},${Gt(n)}`,()=>new ll(s,e,8,20,n));return ln(i,Lt(t))}function Ve(s,e){const t=new Re(s);return t.multiplyScalar(e),t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),`#${t.getHexString()}`}function Le(...s){const e=new Be;for(const t of s)e.add(t);return e}const Lo=[{id:"orange",name:"橘长",body:"#ff8f2e",coat:"#ff9a3c",stripe:"#e8701e",white:"#fff6e8"},{id:"black",name:"煤球",body:"#3a3437",coat:"#3a3437",stripe:"#2b2629",white:"#454044"},{id:"calico",name:"三花",body:"#fbf6ee",coat:"#ee9645",stripe:"#ee9645",white:"#fbf6ee",patch:"#3a3437"},{id:"cream",name:"奶盖",body:"#f6ead6",coat:"#f3dbb4",stripe:"#e7c494",white:"#fffaf2"}],En=.82,kM=.055,FM=1.12,OM=[[-.0473,.4723,.2894],[.0483,.4725,.292]],Ru=[-.0081,.4413,.3398],Cu=["FR","FL","HR","HL"],Fa=6;let Mr=null;async function zM(){if(Mr)return;const s=new Hd,[e,t,n]=await Promise.all([new Qy().loadAsync(DM),s.loadAsync(NM),s.loadAsync(UM)]);for(const i of[t,n])i.flipY=!1;t.colorSpace=Pt,Mr={scene:e.scene,albedo:t,regions:n}}const BM=`
#include <map_fragment>
{
  vec3 reg = texture2D(uRegions, vMapUv).rgb;
  vec3 coat = uCoat;
  if (uCalico > 0.5) {
    float n = sin(vRest.x * 21.0 + sin(vRest.y * 9.0) * 2.2) * sin(vRest.z * 15.0 + 1.3) + 0.55 * sin(vRest.y * 17.0 - vRest.x * 6.0);
    coat = mix(uCoat, uPatch, step(0.18, n));
  }
  vec3 fur = mix(uWhite, mix(coat, uStripe, reg.g), reg.r);
  diffuseColor.rgb = mix(fur, diffuseColor.rgb, reg.b);
}`,Pu=new Map;function HM(s){let e=Pu.get(s.id);if(e)return e;const t=Mr,n=Fc({map:t.albedo}),i=n.onBeforeCompile,r={uRegions:{value:t.regions},uCoat:{value:new Re(s.coat)},uStripe:{value:new Re(s.stripe)},uWhite:{value:new Re(s.white)},uPatch:{value:new Re(s.patch??s.coat)},uCalico:{value:s.patch?1:0}};return n.onBeforeCompile=(o,a)=>{i.call(n,o,a),Object.assign(o.uniforms,r),o.vertexShader=`varying vec3 vRest;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = position;`),o.fragmentShader=`uniform sampler2D uRegions;
uniform vec3 uCoat;
uniform vec3 uStripe;
uniform vec3 uWhite;
uniform vec3 uPatch;
uniform float uCalico;
varying vec3 vRest;
`+o.fragmentShader.replace("#include <map_fragment>",BM)},n.customProgramCacheKey=()=>"cat-regions",Pu.set(s.id,n),n}const VM=new di,Lu=new dn,GM=new dn,Oa=new R;class WM{root=new Be;body=new Be;mouthSlot=new Be;hatSlot=new Be;model=new Be;j={};mouth;lids=[];phase=0;blink=0;nextBlink=2;constructor(e){if(!Mr)throw new Error("loadCatAsset() first");this.root.add(this.body),this.body.add(this.model),this.model.rotation.y=Math.PI,this.model.position.x=kM*En,this.model.scale.setScalar(En);const t=ef(Mr.scene);this.model.add(t),t.traverse(o=>{const a=o;a.isSkinnedMesh&&(a.material=HM(e),a.castShadow=!0,a.receiveShadow=!1,a.frustumCulled=!1)}),this.root.updateMatrixWorld(!0);const n=["torso","hips","chest","neck","head","earR","earL"];for(const o of Cu)n.push(`${o}1`,`${o}2`,`${o}3`);for(let o=0;o<Fa;o++)n.push(`tail${o}`);for(const o of n){const a=t.getObjectByName(o),c=a.getWorldQuaternion(new dn);this.j[o]={bone:a,rest:a.quaternion.clone(),restPos:a.position.clone(),w:c,wi:c.clone().invert(),pwi:a.parent.getWorldQuaternion(new dn).invert(),ps:a.parent.getWorldScale(Oa).x}}const i=this.j.head.bone,r=(o,a=0,c=0,l=0)=>new R((o[0]+a)*En,(o[1]+c)*En,(o[2]+l)*En);this.mouth=Xe(.015,"#5a1f22",0,0,0,1.2,.3,.6),this.mouth.position.copy(r(Ru,.006,-.034,-.032)),this.mouth.castShadow=!1,i.attach(this.mouth),OM.forEach((o,a)=>{const c=a===0?-1:1,l=Hn(.017,.0032,"#15110f",Math.PI);l.rotation.z=Math.PI,l.position.set(0,.006,.012);const h=Le(Xe(.03*En,e.coat,0,0,0,1.1,.95,.5),l);Po(h),h.position.copy(r(o,0,0,.004)),h.rotation.y=c*.35,h.visible=!1,i.attach(h),this.lids.push(h)}),this.mouthSlot.position.copy(r(Ru,.008,-.06,.02)),i.attach(this.mouthSlot),this.hatSlot.position.set(0,.545*En,.22*En),i.attach(this.hatSlot),this.j.head.bone.scale.setScalar(FM)}rot(e,t,n=0,i=0){const r=this.j[e];Lu.setFromEuler(VM.set(t,n,i)),r.bone.quaternion.copy(r.rest).multiply(GM.copy(r.wi).multiply(Lu).multiply(r.w))}move(e,t,n,i){const r=this.j[e];Oa.set(t,n,i).applyQuaternion(r.pwi).divideScalar(r.ps),r.bone.position.copy(r.restPos).add(Oa)}update(e,t){const{pose:n,t:i}=t,r=t.speed;this.phase+=e*(n==="walk"||n==="carry"?6+r*9:0);const o=this.phase;let a=0,c=0,l=0,h=0,u=0,d=0,f=0;const p=[0,0,0,0],x=[0,0,0,0];let m=.3,g=Math.sin(i*1.6)*.45,_=0,E=1,y=t.alert*.55,S=0;switch(n){case"walk":case"carry":{const P=.45+r*.3,I=[0,Math.PI,Math.PI,0];for(let F=0;F<4;F++)p[F]=Math.sin(o+I[F])*P,x[F]=Math.max(0,-Math.cos(o+I[F]))*(.7+r*.4);a=Math.abs(Math.sin(o))*(.008+r*.012),u=Math.sin(o*2)*.04,m=.75-r*.45,g=Math.sin(o*.5)*.3;break}case"jump":{const P=t.jump;if(P<.2){E=1-P*.8,c=-.15;for(let I=0;I<4;I++)x[I]=P*3}else E=1.05,c=-.35+P*.6,p[0]=p[1]=-.9+P*.9,p[2]=p[3]=.9-P*.6,x[2]=x[3]=.5*(1-P);m=.2;break}case"swat":{const P=Math.min(1,i/.18),I=i<.18?P:Math.max(0,1-(i-.18)/.2);p[1]=-1.5*I,x[1]=-.6*I,l=-.1*I,u=.15;break}case"paw":case"pull":{const P=Math.sin(i*14),I=n==="pull"?1:0;p[I]=-1.2+P*.35,x[I]=-.5,u=.2;break}case"scratch":{c=-.95,a=.05,p[0]=-.9+Math.sin(i*16)*.3,p[1]=-.9+Math.sin(i*16+Math.PI)*.3,p[2]=p[3]=.95,u=.6,m=.9,g=Math.sin(i*5)*.4;break}case"eat":{u=.75+Math.abs(Math.sin(i*9))*.15,c=.18,p[0]=p[1]=.15,x[2]=x[3]=.6,a=-.03,_=Math.abs(Math.sin(i*9)),g=Math.sin(i*6)*.5;break}case"knead":{for(const P of[0,1]){const I=Math.max(0,Math.sin(i*9+P*Math.PI));p[P]=-.2-I*.45,x[P]=I*.9}u=.25,m=.9;break}case"sleep":case"hide":{a=-.12,p[0]=p[1]=-.35,x[0]=x[1]=2.2,p[2]=p[3]=-.9,x[2]=x[3]=2.4,u=n==="sleep"?.35:0,a+=Math.sin(i*1.5)*.004,m=-.5,g=1.1;break}case"sit":{c=-.55,a=-.06,p[0]=p[1]=.55,p[2]=p[3]=-1.25,x[2]=x[3]=1.7,u=.35,m=-.35,g=Math.sin(i*1.2)*.2+.8;break}case"mambo":{c=-1.15,a=.07+Math.abs(Math.sin(i*7))*.03,l=Math.sin(i*7)*.25,p[0]=-1.4+Math.sin(i*7)*.5,p[1]=-1.4-Math.sin(i*7)*.5,x[0]=x[1]=-.4,p[2]=p[3]=1.05,f=-Math.sin(i*7)*.25,u=.95,_=.5+Math.sin(i*14)*.3,m=1,g=Math.sin(i*7)*.8;break}case"hiss":{const P=Math.min(1,i/.08);h=.3*P,a=.04*P,u=-.2*P,_=P,m=1.2,g=Math.sin(i*30)*.1,y=1,S=1;break}case"groom":{c=-.6,a=-.06,p[0]=.55,p[1]=-1.5+Math.sin(i*7)*.3,x[1]=-1,p[2]=p[3]=-1.1,x[2]=x[3]=2,u=.5+Math.sin(i*7)*.12,f=.35,d=.25,_=.3+Math.max(0,Math.sin(i*14))*.4,m=-.3,g=Math.sin(i*1.4)*.3+.7;break}case"spin":{d=-1,u=.2,l=-.1;const P=Math.sin(i*22);p[0]=p[3]=P*.5,p[1]=p[2]=-P*.5,m=.4,g=-1.3+Math.sin(i*9)*.4;break}case"glitch":{const P=Math.min(1,i/1.6);l=P*Math.PI*6,a=Math.abs(Math.sin(P*Math.PI*3))*.08;for(let I=0;I<4;I++)p[I]=Math.sin(i*(31-I*2)+I)*1.2,x[I]=Math.abs(Math.sin(i*(23+I*3)))*1.2;u=Math.sin(i*23)*.5,d=Math.sin(i*19)*.6,m=.5,g=Math.sin(i*40)*1.2,_=Math.abs(Math.sin(i*17));break}case"carried":{c=-1.1,p[0]=p[1]=.9+Math.sin(i*3)*.15,p[2]=p[3]=.9+Math.sin(i*3+1)*.15,x[2]=x[3]=.4,m=-1,g=Math.sin(i*3)*.6,u=.75,y=Math.max(y,.6);break}default:a=Math.sin(i*2.2)*.003,d=Math.sin(i*.7)*.35,u=Math.sin(i*.9)*.08}const b=n==="glitch"||n==="sleep"||n==="hide"||n==="carried"?0:t.alert;if(b>.01){h+=b*.3,a+=b*.045,S=Math.max(S,b),m=m*(1-b)+1.15*b,g*=1-b*.7;for(let P=0;P<4;P++)p[P]*=1-b*.3,x[P]*=1-b*.6}this.model.scale.set(En/Math.sqrt(E),En*E,En/Math.sqrt(E)),this.move("torso",0,a,0),this.rot("torso",c,0,l),this.rot("chest",h*.8),this.rot("hips",-h);const A=1+S*.1;this.j.chest.bone.scale.setScalar(A),this.j.hips.bone.scale.setScalar(A);const v=1+Math.max(0,a)*2.6+h*.3;for(let P=0;P<4;P++){const I=Cu[P];this.rot(`${I}1`,p[P]-(P<2?h*.8:-h)),this.rot(`${I}2`,x[P]),this.rot(`${I}3`,-x[P]*.5),this.j[`${I}1`].bone.scale.set(1,v/A,1)}this.rot("neck",u*.4,d*.4,f*.4),this.rot("head",u*.6,d*.6,f*.6);const T=n==="hiss"||n==="carried"?Math.max(y,.9):y;this.rot("earR",-1.1*T,0,.7*T),this.rot("earL",-1.1*T,0,-.7*T),this.nextBlink-=e,this.nextBlink<=0&&(this.blink=.13,this.nextBlink=2+Math.random()*3),this.blink=Math.max(0,this.blink-e);const C=n==="sleep"||n==="hide"&&Math.sin(i*.5)>.6||n==="mambo"||n==="glitch"||this.blink>0;for(const P of this.lids)P.visible=C;this.mouth.visible=_>.05,this.mouth.scale.set(1.2,.3+_*1.1,.6);for(let P=0;P<Fa;P++){const I=P/(Fa-1),F=P===0?(Math.min(m,1.3)-1)*1.5:m<.5?(.5-m)*.12:0;this.rot(`tail${P}`,F,0,g*(.12+I*.2)*(P===0?.6:1))}this.j.tail0.bone.scale.set(1+S*.7,1,1+S*.7)}}function XM(){const s=ln(new Oo(.22,20),Lt("#000000",{opacity:.16}),!1);return s.rotation.x=-Math.PI/2,s.receiveShadow=!1,s.layers.set(1),Le(s)}const io="#e9b44c";function qM(){const s=new Be,e=Xe(.07,"#d9934a",0,.05,0,1.45,.55,.7),t=Oc(.045,.07,"#c47c36",4);t.rotation.z=Math.PI/2,t.position.set(-.12,.05,0),t.scale.set(1,1,.35);const n=Xe(.012,"#3b2f2b",.07,.065,.035);return s.add(e,t,n),s}const $M={glass:()=>{const s=Le(ln(new wr(.05,.042,.13,16),Lt("#d6ecf2",{opacity:.55})),it(.043,.038,.08,"#9fd0e6",0,.005,0));return s.children[0].position.y=.065,{obj:s,r:.06,h:.13}},mug:s=>{const e=s.color??"#f4f0e8",t=Hn(.035,.012,e,Math.PI);return t.rotation.z=-Math.PI/2,t.position.set(.06,.055,0),{obj:Le(it(.055,.05,.11,e),it(.047,.047,.005,"#6b4a3a",0,.1,0),t),r:.07,h:.11}},plant:s=>{const e=Le(it(.11,.08,.16,"#d58f6c"),it(.1,.1,.01,"#6b4a3a",0,.15,0)),t=s.color??"#6f9a6a";for(let n=0;n<7;n++){const i=n/7*Math.PI*2,r=Xe(.07,n%2?t:Ve(t,1.15),Math.cos(i)*.09,.2+n%3*.04,Math.sin(i)*.09,1,.45,.7);r.rotation.y=-i,e.add(r)}for(const n of[.6,2.4,4.4])e.add(Xe(.05,Ve(t,.9),Math.cos(n)*.13,.08,Math.sin(n)*.13,.7,1.2,.7));return{obj:e,r:.12,h:.3}},succulent:()=>{const s=Le(it(.07,.055,.09,"#e9dcc6"));for(let e=0;e<6;e++){const t=Oc(.03,.08,e%2?"#93b88a":"#a9c8a0",6),n=e/6*Math.PI*2;t.position.set(Math.cos(n)*.03,.12,Math.sin(n)*.03),t.rotation.set(Math.sin(n)*.5,0,-Math.cos(n)*.5),s.add(t)}return{obj:s,r:.08,h:.16}},vase:s=>{const e=[[0,0],[.06,0],[.09,.06],[.1,.14],[.07,.24],[.045,.3],[.06,.34],[0,.34]].map(([r,o])=>new re(r,o)),t=ln(new rl(e,18),Lt(s.color??"#7f9fb6")),n=Le(t);return["#e5a497","#f4f0e8","#e9c47c"].forEach((r,o)=>{const a=o*2.1,c=it(.006,.006,.18,"#6f9a6a",Math.cos(a)*.02,.3,Math.sin(a)*.02,5);c.rotation.set(Math.sin(a)*.3,0,Math.cos(a)*.3),n.add(c,Xe(.04,r,Math.cos(a)*.06,.5,Math.sin(a)*.06))}),{obj:n,r:.1,h:.36}},remote:()=>({obj:Le(Z(.06,.025,.2,"#3a3b40",0,0,0,.01),Xe(.012,"#e8553d",0,.026,-.065,1,.4,1)),r:.08,h:.03}),sock:()=>{const s=Le(Z(.07,.04,.17,"#f0ede4",0,0,0,.02),Z(.07,.04,.09,"#f0ede4",0,0,.11,.02),Z(.072,.042,.03,"#8fb3c9",0,0,-.07,.01));return s.children[1].position.x=.035,s.children[1].rotation.y=.8,{obj:s,r:.09,h:.04}},fish:()=>{const s=it(.16,.13,.025,"#f7f7f4",0,0,0,20),e=Xe(.1,"#e9b44c",0,.06,0,1.4,.45,.55),t=Oc(.05,.08,"#d99d3a",4);t.rotation.z=Math.PI/2,t.scale.set(1,1,.3),t.position.set(-.17,.06,0);const n=Xe(.09,"#f0c45e",.02,.09,.05,1.3,.4,.5);return n.rotation.y=.4,{obj:Le(s,e,t,n),r:.16,h:.1}},tp:()=>{const s=it(.06,.06,.11,"#ffffff",0,-.055,0,16);s.rotation.x=Math.PI/2;const e=Z(.02,.02,.16,"#c9cfd2",0,.05,0,.005);return{obj:Le(s,e),r:.08,h:.12}},laptop:()=>{const s=Z(.38,.02,.26,"#8d939a",0,0,0,.008),e=Z(.32,.004,.12,"#5b6066",0,.02,-.03,0),t=new Be;t.position.set(0,.02,-.13),t.rotation.x=-.25;const n=Z(.38,.25,.012,"#8d939a",0,0,0,.008),i=Z(.34,.21,.004,"#cfe3ee",0,.02,.008,0);return i.name="screen",t.add(n,i),{obj:Le(s,e,t),r:.2,h:.04}},book:()=>({obj:Z(.16,.04,.22,"#e5a497",0,0,0,.01),r:.12,h:.04}),frame:()=>{const s=new Be,e=Le(Z(.16,.2,.02,"#8a6a52",0,0,0,.006),Z(.12,.15,.004,"#a9d0e6",0,.025,.011,0),Xe(.03,"#e9b44c",0,.12,.014,1,1,.2));return e.rotation.x=-.18,s.add(e),{obj:s,r:.08,h:.2}},bowl:()=>{const s=ln(new Ci(.08,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),Lt("#f4f0e8"));return s.rotation.x=Math.PI,s.position.y=.075,{obj:Le(s,Xe(.068,"#f7f4ec",0,.07,0,1,.25,1)),r:.08,h:.08}},keys:()=>{const s=Hn(.025,.006,io);return s.rotation.x=Math.PI/2,s.position.y=.006,{obj:Le(s,Z(.02,.008,.07,io,.02,0,.04,0),Z(.02,.008,.06,"#b8bdbb",-.025,0,.035,0)),r:.06,h:.02}},laundry:()=>{const s=["#8fb3c9","#f0ede4","#e5a497","#e9c47c"],e=new Be;return s.forEach((t,n)=>e.add(Z(.36-n*.02,.05,.28,t,n%2*.02,n*.05,0,.02))),{obj:e,r:.2,h:.2}},treat:()=>({obj:qM(),r:.1,h:.1}),hat:()=>{const s=ln(new Ci(.1,14,8,0,Math.PI*2,0,Math.PI/2),Lt("#e8553d")),e=it(.102,.102,.035,"#f4f0e8",0,0,0,14);return{obj:Le(s,e,Xe(.035,"#f4f0e8",0,.11,0)),r:.1,h:.14}},robot:()=>{const s=it(.17,.17,.08,"#f4f4f0",0,0,0,24),e=it(.15,.16,.012,"#3a3b40",0,.08,0,24),t=Z(.06,.015,.02,"#8fd0c4",0,.09,.08,.005),n=Hn(.17,.012,"#c9cfd2",Math.PI);return n.rotation.x=Math.PI/2,n.position.y=.04,{obj:Le(s,e,t,n),r:.17,h:.1}},yogurt:()=>({obj:Le(it(.035,.03,.08,"#f4f0e8"),it(.036,.036,.008,"#e5a497",0,.08,0)),r:.04,h:.09}),pan:()=>{const s=Le(it(.13,.11,.04,"#3a3b40",0,0,0,20),it(.11,.11,.005,"#55575e",0,.036,0,20)),e=Si(.014,.18,"#5b4a3a");return e.rotation.x=Math.PI/2,e.position.set(0,.03,.2),s.add(e,Xe(.05,"#f7f4ec",.02,.04,-.01,1,.2,1),Xe(.022,"#e9b44c",.02,.05,-.01,1,.5,1)),{obj:s,r:.14,h:.05}},clock:()=>{const s=it(.06,.06,.04,"#e8553d",0,0,0,18);s.rotation.x=Math.PI/2,s.position.set(0,.07,0);const e=it(.048,.048,.005,"#f7f4ec",0,0,0,18);return e.rotation.x=Math.PI/2,e.position.set(0,.07,.021),{obj:Le(s,e,Xe(.022,io,-.04,.125,0),Xe(.022,io,.04,.125,0)),r:.07,h:.14}},parcel:()=>({obj:Z(.3,.2,.24,"#c99a5e",0,0,0,.01),r:.16,h:.2}),shoe:()=>({obj:Le(Z(.1,.06,.24,"#f4f0e8",0,0,0,.03),Z(.1,.05,.1,"#f4f0e8",0,.05,-.06,.03)),r:.12,h:.1}),ball:()=>({obj:Xe(.06,"#e8553d",0,.06,0),r:.06,h:.12}),catbowl:()=>{const s=Le(it(.13,.11,.06,"#e8553d",0,0,0,20),it(.105,.105,.01,"#f4f0e8",0,.055,0,20));return s.add(Xe(.08,"#c98a4b",0,.06,0,1,.35,1)),{obj:s,r:.14,h:.08}},cap:()=>({obj:Le(it(.035,.035,.025,"#7f9fb6",0,0,0,14),it(.028,.028,.004,"#f4f0e8",0,.025,0,14)),r:.045,h:.03})};function cf(s){const e=$M[s.kind](s);return e.obj.name=s.id,e}function YM(){const s=new Be,e=Z(.26,.03,.2,"#8fb3c9",0,0,0,.012);e.rotation.z=.25;const t=Z(.1,.025,.08,"#8fb3c9",.15,-.04,.02,.01);return t.rotation.z=.9,s.add(e,t),s}function KM(s){switch(s.kind){case"glass":return"#cfe8f0";case"plant":return"#d58f6c";case"succulent":return"#e9dcc6";case"vase":return s.color??"#7f9fb6";case"frame":return"#8a6a52";default:return s.color??"#f4f0e8"}}const bt=.17,Iu=.17,za=.12,Nu=1.25,Du=2.75,JM=.1;class ZM{rig;obj=new Be;shadow=XM();pos=new R;vel=new re;yaw=0;mode="free";jump=null;pose="idle";poseT=0;alert=0;side=0;carrying=null;hiddenIn=null;support=null;jumpH=1;speedMul=1;boost=0;skills=new Set;pushT=0;hat=null;moving=!1;constructor(e){this.rig=new WM(e),this.obj.add(this.rig.root)}setHat(e){this.hat&&this.rig.hatSlot.remove(this.hat),this.hat=e,e&&(e.scale.setScalar(.85),this.rig.hatSlot.add(e))}place(e,t,n){this.pos.set(e,t,n),this.vel.set(0,0),this.sync()}get forward(){return new re(Math.sin(this.yaw),Math.cos(this.yaw))}setPose(e){e!==this.pose&&(this.pose=e,this.poseT=0)}move(e,t,n,i,r,o){const a=this.boost>0?1.7:1,c=i<.05?0:(Nu+(Du-Nu)*Math.max(0,(i-.35)/.65))*this.speedMul*a,l=t*c,h=n*c,u=this.boost>0?4:c>Math.hypot(this.vel.x,this.vel.y)?14:12;this.vel.x+=(l-this.vel.x)*Math.min(1,u*e),this.vel.y+=(h-this.vel.y)*Math.min(1,u*e);const d=Math.hypot(this.vel.x,this.vel.y);d>.08&&this.turnTo(Math.atan2(this.vel.x,this.vel.y),e,14);let f=this.pos.x+this.vel.x*e,p=this.pos.z+this.vel.y*e;const x=this.pos.y;let m=null;for(const _ of o){if(!_.active||_.state==="carried"||_.state==="held"||_.state==="stored"||_.def.collect||_.def.kind==="robot"||_.h<.06||Math.abs(_.pos.y-x)>.15)continue;const E=_.pos.x-f,y=_.pos.z-p,S=Math.hypot(E,y),b=bt+_.r*.8;if(S>=b||S<1e-5)continue;const A=E/S,v=y/S,T=this.vel.x*A+this.vel.y*v;if(_.movable&&_.state!=="fall"&&T>.25){const C=Math.max(.5,T);_.pos.x=f+A*b,_.pos.z=p+v*b,_.push(A*C*1.1,v*C*1.1)}else(_.def.heavy||_.movable)&&(f=_.pos.x-A*b,p=_.pos.z-v*b)}for(let _=0;_<2;_++){for(const S of r.solids){if(!r.blocks(S,x,Na))continue;const b=S.climb&&(!S.needs||this.skills.has(S.needs));if(b&&S.top-x<=Gs)continue;const A=xu(S.rect,f,p);let v=f-A.x,T=p-A.z,C=Math.hypot(v,T);if(!(C>=bt)){if(C<1e-5){const P=S.rect,I=[[f-P.x0,-1,0],[P.x1-f,1,0],[p-P.z0,0,-1],[P.z1-p,0,1]].sort((F,N)=>F[0]-N[0]);v=I[0][1],T=I[0][2],C=1,f=(v?v<0?P.x0:P.x1:f)+v*bt,p=(T?T<0?P.z0:P.z1:p)+T*bt}else f=A.x+v/C*bt,p=A.z+T/C*bt;b&&S.top-x<=this.jumpH&&i>.25&&t*-v/C+n*-T/C>.45&&(m=S)}}const E=Math.sin(this.yaw),y=Math.cos(this.yaw);for(const S of r.solids){if(!r.blocks(S,x,Na))continue;const b=S.climb&&(!S.needs||this.skills.has(S.needs));if(b&&S.top-x<=Gs)continue;const A=f+E*Iu,v=p+y*Iu,T=xu(S.rect,A,v),C=A-T.x,P=v-T.z,I=Math.hypot(C,P);if(I>=za)continue;const F=I>1e-5?C/I:-E,N=I>1e-5?P/I:-y;f+=F*(za-I),p+=N*(za-I),b&&S.top-x<=this.jumpH&&i>.25&&t*-F+n*-N>.45&&(m=S)}}r.onFloor(f,p)||(r.onFloor(f,this.pos.z)?p=this.pos.z:r.onFloor(this.pos.x,p)?f=this.pos.x:(f=this.pos.x,p=this.pos.z)),this.moving=Math.hypot(f-this.pos.x,p-this.pos.z)>.002;const g=r.supportAt(f,p,this.skills);if(g.h>x+.001&&g.h-x<=Gs+.01)this.pos.set(f,g.h,p),this.support=g.solid;else if(g.h<x-.05){const _=d>.05?{x:this.vel.x/d,z:this.vel.y/d}:{x:Math.sin(this.yaw),z:Math.cos(this.yaw)};let E=f+_.x*.22,y=p+_.z*.22;(!r.onFloor(E,y)||this.blockedAt(r,E,y,r.supportAt(E,y,this.skills).h))&&(E=f,y=p);const S=r.supportAt(E,y,this.skills);this.pos.x=f,this.pos.z=p,this.startJump(new R(E,S.h,y));return}else this.pos.x=f,this.pos.z=p,g.h<=x+.001&&(this.support=g.solid);m?(this.pushT+=e,this.pushT>=JM&&(this.pushT=0,this.tryJumpOnto(m,t,n,r,o))):this.pushT=0}blockedAt(e,t,n,i){for(const r of e.solids)if(e.blocks(r,i,Na)&&!(r.climb&&r.top-i<=Gs)&&Bn(r.rect,t,n,bt*.6))return!0;return!1}tryJumpOnto(e,t,n,i,r=[]){const o=e.rect,a=Math.min(.16,(o.x1-o.x0)/2-.01,(o.z1-o.z0)/2-.01),c=Math.hypot(t,n)||1,l=t/c,h=n/c,u=A=>Math.min(o.x1-a,Math.max(o.x0+a,A)),d=A=>Math.min(o.z1-a,Math.max(o.z0+a,A)),f=this.pos.x+l*(bt+.3),p=this.pos.z+h*(bt+.3),x=i.supportAt(u(f),d(p),this.skills).h,m=(A,v)=>r.every(T=>!T.active||T.state!=="rest"||T.def.collect||T.h<.06||Math.abs(T.pos.y-x)>.15||Math.hypot(T.pos.x-A,T.pos.z-v)>bt+T.r*.8),g=[0,.2,-.2,.4,-.4,.6,-.6].map(A=>({x:u(f-h*A),z:d(p+l*A)})),_=A=>i.supportAt(A.x,A.z,this.skills).h===x&&!this.blockedAt(i,A.x,A.z,x),E=g.find(A=>_(A)&&m(A.x,A.z))??g.find(_);if(!E)return!1;const y=E.x,S=E.z,b=x;return b-this.pos.y>this.jumpH+.01||b-this.pos.y<=Gs?!1:(this.startJump(new R(y,b,S)),!0)}startJump(e,t,n=0){const i=e.y-this.pos.y,r=Math.hypot(e.x-this.pos.x,e.z-this.pos.z);this.jump={from:this.pos.clone(),to:e,t:0,dur:.26+Math.abs(i)*.12+r*.08+n*.5,peak:Math.max(this.pos.y,e.y)+(i>0?.18:.08)+n,onLand:t},this.mode="jump",this.setPose("jump"),r>.01&&(this.yaw=Math.atan2(e.x-this.pos.x,e.z-this.pos.z))}stepJump(e,t){const n=this.jump;if(!n)return!1;n.t+=e;const i=Math.min(1,n.t/n.dur),r=n.from.y,o=n.to.y,a=r+(o-r)*i,c=(n.peak-Math.max(r,o))*4*i*(1-i)+(o>r?(o-r)*Math.sin(i*Math.PI)*.3:0);if(this.pos.set(n.from.x+(n.to.x-n.from.x)*i,a+c,n.from.z+(n.to.z-n.from.z)*i),i>=1){this.pos.copy(n.to),this.jump=null,this.mode="free",this.vel.set(0,0);const l=t.supportAt(this.pos.x,this.pos.z,this.skills);return this.support=l.solid,n.onLand?.(l.solid),!0}return!1}turnTo(e,t,n=10){let i=e-this.yaw;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this.yaw+=i*Math.min(1,n*t)}sync(){this.obj.position.copy(this.pos),this.obj.rotation.y=this.yaw+this.side}animate(e){this.poseT+=e;const t=Math.hypot(this.vel.x,this.vel.y);this.mode==="free"&&(t>.15?this.setPose(this.carrying?"carry":"walk"):(this.pose==="walk"||this.pose==="carry"||this.pose==="jump")&&this.setPose("idle"));const n=this.mode==="free"&&t>.15?this.alert*.8:0;this.side+=(n-this.side)*Math.min(1,e*6),this.rig.update(e,{pose:this.pose,speed:Math.min(1,t/Du),alert:this.alert,t:this.poseT,jump:this.jump?Math.min(1,this.jump.t/this.jump.dur):0}),this.sync()}}class jM{root=new Be;hips=new Be;chest=new Be;head=new Be;hold=new Be;legs=[];knees=[];arms=[];forearms=[];phase=0;height;hipY;constructor(e){const t=e.height;this.height=t;const n=t/1.62;this.hipY=.7*n,this.root.add(this.hips),this.hips.position.y=this.hipY;for(const l of[-1,1]){const h=new Be;h.position.set(l*.085,0,0);const u=Si(.072,.22*n,e.bottom);u.position.y=-.17*n;const d=new Be;d.position.y=-.34*n;const f=Si(.065,.22*n,e.bottom);f.position.y=-.16*n;const p=Z(.13,.085,.23,"#2a2a33",0,-.36*n,.04,.04);d.add(f,p),h.add(u,d),this.hips.add(h),this.legs.push(h),this.knees.push(d)}this.hips.add(this.chest);const i=Si(.17,.3*n,e.top);if(i.scale.set(1.08,1,.78),i.position.y=.27*n,this.chest.add(i),e.apron){const l=Z(.28,.42*n,.02,e.apron,0,.02*n,.13,.01);this.chest.add(l)}for(const l of[-1,1]){const h=new Be;h.position.set(l*.215,.5*n,0);const u=Si(.058,.2*n,e.skin);u.position.y=-.14*n;const d=Si(.066,.1*n,e.top);d.position.y=-.08*n;const f=new Be;f.position.y=-.29*n;const p=Si(.05,.16*n,e.skin);p.position.y=-.11*n;const x=Xe(.058,e.skin,0,-.25*n,.005,1,1.1,.9);f.add(p,x),h.add(d),h.add(u,f),this.chest.add(h),this.arms.push(h),this.forearms.push(f)}this.head.position.y=.66*n,this.chest.add(this.head);const r=Xe(.17,e.skin,0,.13,0,1,1.03,.97,20),o=Si(.06,.05,e.skin),a=Xe(.03,Ve(e.skin,.93),0,.11,.165,1,.9,.8),c=Z(.05,.012,.01,"#7a3b3b",0,.055,.16,.004);this.head.add(r,o,a,c);for(const l of[-1,1])if(this.head.add(Xe(.022,"#1c1614",l*.06,.15,.155,.8,1.35,.5)),this.head.add(Z(.055,.016,.02,e.hair,l*.062,.2,.15,.006)),this.head.add(Xe(.038,e.skin,l*.168,.12,-.005,.6,1,.9)),e.glasses){const h=Hn(.033,.006,"#3a3437");h.position.set(l*.061,.15,.165),this.head.add(h)}e.glasses&&this.head.add(Z(.045,.008,.008,"#3a3437",0,.15,.17,0)),this.head.add(QM(e)),this.hold.position.set(0,.22*n,.42),this.chest.add(this.hold),this.root.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!1)})}update(e,t,n,i=1){const r=this.height/1.62,o=t==="walk"||t==="run";this.phase+=e*(t==="run"?11:t==="walk"?7*i:t==="carry"?6:0);const a=this.phase;let c=this.hipY,l=0,h=0,u=0;const d=[0,0],f=[0,0],p=[.05,.05],x=[.08,.08],m=[0,0];let g=0;switch(t){case"walk":case"run":{const _=t==="run"?.75:.45;d[0]=Math.sin(a)*_,d[1]=-Math.sin(a)*_,p[0]=-Math.sin(a)*_*.9,p[1]=Math.sin(a)*_*.9,m[0]=m[1]=t==="run"?-.9:-.25,c+=Math.abs(Math.cos(a))*.03,l=t==="run"?.18:.04;break}case"carry":{d[0]=Math.sin(a)*.4,d[1]=-Math.sin(a)*.4,p[0]=p[1]=-.95,m[0]=m[1]=-1.15,x[0]=x[1]=.42,l=-.08;break}case"sit":case"type":case"eat":{if(c=.48*r,d[0]=d[1]=-1.45,f[0]=f[1]=1.45,t==="type")p[0]=p[1]=-.55,m[0]=-.9+Math.max(0,Math.sin(n*13))*.15,m[1]=-.9+Math.max(0,Math.sin(n*13+2))*.15,h=.15;else if(t==="eat"){const _=Math.max(0,Math.sin(n*2.2));p[1]=-.5-_*.6,m[1]=-1.2-_*.9,p[0]=-.4,m[0]=-.7,h=.1-_*.1}break}case"lie":{g=1,p[0]=p[1]=.05,m[0]=m[1]=-.15,x[0]=x[1]=.18,h=-.15+Math.sin(n*1.3)*.03;break}case"cook":{p[1]=-.8+Math.sin(n*5)*.15,m[1]=-.8+Math.cos(n*5)*.25,p[0]=-.5,m[0]=-.6,h=.3;break}case"wash":{p[0]=p[1]=-.7+Math.sin(n*8)*.12,m[0]=m[1]=-1.2,h=.25,l=.15;break}case"water":{p[1]=-1.1,m[1]=-.2+Math.sin(n*1.5)*.1,h=.3;break}case"fold":{p[0]=p[1]=-.75+Math.sin(n*3)*.25,m[0]=m[1]=-.6,x[0]=x[1]=.15+Math.max(0,Math.sin(n*3))*.4,h=.35,l=.12;break}case"reach":{p[0]=p[1]=-2.6+Math.sin(n*6)*.15,m[0]=m[1]=-.2,h=-.45;break}case"startle":{const _=Math.min(1,n/.12);p[0]=p[1]=-2.3*_,x[0]=x[1]=.6*_,m[0]=m[1]=-.6,l=-.28*_,h=-.2,d[0]=-.3*_,d[1]=.25*_;break}case"pet":{c=.5*r,d[0]=-1.2,f[0]=1.9,d[1]=.2,f[1]=1.6,l=.35,p[1]=-.9,m[1]=-.2+Math.sin(n*5)*.2,h=.45;break}case"pickup":{l=.7,c=this.hipY-.12,f[0]=f[1]=.5,d[0]=d[1]=-.4,p[0]=p[1]=-1,m[0]=m[1]=-.3,h=.4;break}case"sweep":{l=.45,c=this.hipY-.06,f[0]=f[1]=.25,p[0]=p[1]=-.9+Math.sin(n*7)*.35,m[0]=m[1]=-.3,x[0]=x[1]=.1+Math.sin(n*7)*.15,h=.4;break}case"talk":case"phone":{t==="phone"?(p[1]=-.6,m[1]=-2.2,x[1]=.25):(p[1]=-.5+Math.sin(n*4)*.25,m[1]=-.8),u=Math.sin(n*2)*.15;break}case"search":{u=Math.sin(n*2.5)*.7,p[0]=p[1]=-.1,x[0]=x[1]=.35,m[0]=m[1]=-1.6;break}default:c+=Math.sin(n*1.8)*.004,u=Math.sin(n*.5)*.2}o&&(u=0),this.hips.position.set(0,g?.16:c,g?.25:0),this.hips.rotation.set(g?-Math.PI/2:0,0,0),this.chest.rotation.set(l,0,0),this.head.rotation.set(h,u,0);for(let _=0;_<2;_++){const E=_===0?-1:1;this.legs[_].rotation.set(d[_],0,0),this.knees[_].rotation.set(f[_]||(o?Math.max(0,d[_])*.9:0),0,0),this.arms[_].rotation.set(p[_],0,E*x[_]),this.forearms[_].rotation.set(m[_],0,0)}}}function QM(s){const e=s.hair,t=new Be;switch(s.hairStyle){case"bald":t.add(Xe(.12,e,0,.1,-.08,1.3,.5,.6));break;case"bun":t.add(Xe(.165,e,0,.16,-.02,1,.85,1),Xe(.08,e,0,.3,-.1));break;case"long":t.add(Xe(.165,e,0,.16,-.02,1,.85,1),Z(.3,.32,.12,e,0,-.12,-.08,.05));break;case"cap":{const n=ln(new Ci(.165,16,8,0,Math.PI*2,0,Math.PI/2),Lt(e));n.position.y=.15,t.add(n,Z(.2,.02,.14,e,0,.14,.15,.01));break}case"curly":for(let n=0;n<7;n++){const i=n/7*Math.PI*2;t.add(Xe(.07,e,Math.cos(i)*.1,.22+Math.sin(n*2.1)*.02,Math.sin(i)*.08-.03))}t.add(Xe(.15,e,0,.18,-.03,1,.7,1));break;default:t.add(Xe(.165,e,0,.17,-.025,1.02,.78,1.02),Z(.22,.05,.08,e,.02,.22,.1,.025)),t.add(Xe(.06,e,-.13,.13,0,.7,1,1),Xe(.06,e,.13,.13,0,.7,1,1))}return t.scale.setScalar(1.09),Le(t)}const po={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2},rn="#c49a6c";function si(s,e,t,n,i=.06,r=.025){const o=new Be;for(const a of[-1,1])for(const c of[-1,1])o.add(it(r,r*.8,t,n,a*(s/2-i),0,c*(e/2-i),8));return o}const Uu={bed:(s,e,t)=>{const n=t.color??"#f4f0e8",i=t.color2??"#e5a497";return Le(Z(s,.26,e,rn,0,0,0,.03),Z(s-.06,.2,e-.06,n,0,.24,0,.06),Z(s-.02,.07,e*.62,i,0,.42,e*.19,.035),Z(s*.62,.11,.34,"#ffffff",0,.42,-e/2+.28,.05),Z(s+.04,.8,.08,Ve(rn,.9),0,0,-e/2+.02,.03))},sofa:(s,e,t)=>{const n=t.color??"#7f9fb6",i=Le(Z(s,.3,e,Ve(n,.85),0,.05,0,.06)),r=2,o=(s-.36)/r;for(let a=0;a<r;a++)i.add(Z(o-.03,.12,e-.06,n,-s/2+.18+o*(a+.5),.33,.02,.05));return i.add(Z(.18,.62,e,Ve(n,.92),-s/2+.09,0,0,.07)),i.add(Z(.18,.62,e,Ve(n,.92),s/2-.09,0,0,.07)),i.add(si(s,e,.06,"#5b4a3a",.08,.025)),i},sofaBack:(s,e,t)=>{const n=t.color??"#7f9fb6",i=Le(Z(s,.85,e,Ve(n,.92),0,0,0,.07)),r=(s-.36)/2;for(let o=0;o<2;o++)i.add(Z(r-.04,.42,.12,n,-s/2+.18+r*(o+.5),.38,-e/2-.02,.05));return i},coffeeTable:(s,e,t)=>Le(Z(s,.05,e,t.color??rn,0,.35,0,.02),si(s,e,.35,Ve(t.color??rn,.8)),Z(s-.12,.03,e-.12,Ve(t.color??rn,.9),0,.12,0,.01)),tvStand:(s,e,t)=>{const n=t.color??rn,i=Le(Z(s,.44,e,n,0,.06,0,.02),Z(s+.02,.03,e+.02,Ve(n,1.08),0,.47,0,.01));for(const r of[-s/4,s/4])i.add(Z(s/2-.08,.32,.01,Ve(n,.9),r,.11,e/2+.005,0));return i.add(si(s,e,.06,"#5b4a3a",.08,.02)),i},tv:(s,e,t)=>{const n=t.color??"#34353a",i=Z(s-.06,.66,.012,"#4a5866",0,.62,e/2+.002,0);return Le(Z(s,.72,e*.6,n,0,.59,0,.015),i,Z(.3,.04,.16,n,0,.5,0,.01),Z(.06,.1,.04,n,0,.52,0,0))},bookshelf:(s,e,t)=>{const n=t.color??rn,i=Le(Z(s,1.6,.03,Ve(n,.85),0,0,-e/2+.015,0));i.add(Z(.03,1.6,e,n,-s/2+.015,0,0,0),Z(.03,1.6,e,n,s/2-.015,0,0,0));const r=[.02,.42,.82,1.22,1.57];for(const c of r)i.add(Z(s,.03,e,n,0,c,0,0));const o=["#e5a497","#8fb3c9","#e9c47c","#a8bea6","#c9b6d8","#f0ede4","#d58f6c"];let a=0;for(let c=0;c<4;c++){let l=-s/2+.06;for(;l<s/2-.12;){const h=.04+a*7%5*.012,u=.24+a*3%4*.025;a*11%9!==0&&i.add(Z(h,u,e*.7,o[a%o.length],l+h/2,r[c]+.03,.01,.006)),l+=h+.008,a++}}return i},desk:(s,e,t)=>{const n=t.color??"#e2cba8";return Le(Z(s,.05,e,n,0,.7,0,.015),si(s,e,.7,Ve(n,.75),.05,.022),Z(.42,.26,e-.06,Ve(n,.92),s/2-.26,.43,0,.015))},chair:(s,e,t)=>{const n=t.color??"#a8794f";return Le(Z(s-.04,.05,e-.04,n,0,t.h-.05,0,.02),si(s-.04,e-.04,t.h-.05,Ve(n,.8),.04,.018),Z(s-.04,.42,.04,Ve(n,.95),0,t.h,-e/2+.04,.015))},counter:(s,e,t)=>{const n=t.color??"#a8bea6",i=t.color2??"#efe6d6",r=Le(Z(s,.8,e-.04,n,0,.06,-.02,.015),Z(s+.02,.05,e+.02,i,0,.85,0,.01),Z(s-.04,.06,e-.1,"#5e5a52",0,0,-.06,0)),o=Math.max(1,Math.round(s/.55));for(let a=0;a<o;a++){const c=-s/2+s/o*(a+.5);r.add(Z(s/o-.04,.7,.012,Ve(n,1.06),c,.1,e/2-.02,.01)),r.add(Z(.012,.12,.02,"#6b6660",c+s/o*.3,.62,e/2-.005,0))}return r},stove:(s,e)=>{const t=Le(Z(s-.04,.012,e-.04,"#2f3034",0,0,0,.01));for(const n of[-e/4,e/4]){const i=Hn(.08,.008,"#55575e");i.rotation.x=Math.PI/2,i.position.set(0,.015,n),t.add(i)}return t},fridge:(s,e,t)=>{const n=t.color??"#e9ecea";return Le(Z(s,t.h,e,n,0,0,0,.05),Z(s-.04,.012,.01,Ve(n,.85),0,t.h*.62,e/2,0),Z(.03,.3,.03,"#b8bdbb",s/2-.09,t.h*.68,e/2+.01,.01),Z(.03,.3,.03,"#b8bdbb",s/2-.09,t.h*.28,e/2+.01,.01))},diningTable:(s,e,t)=>{const n=t.color??rn;return Le(Z(s,.05,e,n,0,.7,0,.02),si(s,e,.7,Ve(n,.8),.1,.03))},wardrobe:(s,e,t)=>{const n=t.color??rn,i=Le(Z(s,t.h-.04,e,n,0,.04,0,.02),Z(s+.04,.05,e+.03,Ve(n,.9),0,t.h-.05,0,.01),Z(s,.06,e-.04,"#5b4a3a",0,0,0,0));i.add(Z(.01,t.h-.16,.01,Ve(n,.75),0,.1,e/2+.003,0));for(const r of[-1,1])i.add(Z(.025,.22,.03,"#e9dcc6",r*.06,t.h*.52,e/2+.01,.008));return i},nightstand:(s,e,t)=>{const n=t.color??rn;return Le(Z(s,t.h-.06,e,n,0,.06,0,.02),si(s,e,.06,Ve(n,.7),.05,.018),Z(s-.08,.16,.01,Ve(n,1.08),0,t.h-.26,e/2+.003,.005),Xe(.018,"#e9dcc6",0,t.h-.18,e/2+.02))},dresser:(s,e,t)=>{const n=t.color??rn,i=Le(Z(s,t.h-.06,e,n,0,.06,0,.02),si(s,e,.06,Ve(n,.7),.05,.018));for(let r=0;r<4;r++){const o=.1+r*.19;i.add(Z(s-.06,.16,.01,Ve(n,1.06),0,o,e/2+.003,.005)),i.add(Z(.1,.018,.02,"#8a6a52",0,o+.07,e/2+.012,.006))}return i},toilet:(s,e,t)=>{const n=t.color??"#f7f7f4",i=Le(it(.15,.13,.3,n,0,0,.08),Z(s*.62,.36,.2,n,0,.3,-e/2+.1,.04)),r=Xe(.2,n,0,.36,.08,.9,.35,1.15),o=Hn(.15,.03,"#ffffff");return o.rotation.x=Math.PI/2,o.scale.set(.95,1.2,1),o.position.set(0,.43,.09),i.add(r,o,it(.12,.12,.01,"#a9d0e6",0,.42,.09)),i},sink:(s,e,t)=>{const n=Le(Z(s,.78,e,t.color??"#9fbfb5",0,0,0,.02),Z(s+.02,.07,e+.02,t.color2??"#f7f7f4",0,.78,0,.02));return n.add(it(.17,.13,.012,"#cfdde0",0,.85,.03,20),it(.012,.012,.12,"#c9cfd2",0,.85,-e/2+.1,8)),n.add(Z(s-.1,.6,.01,Ve(t.color??"#9fbfb5",1.08),0,.1,e/2+.003,.01)),n},mirror:s=>Le(Z(s,.8,.03,"#e9dcc6",0,1.1,0,.02),Z(s-.08,.72,.012,"#bcd6df",0,1.14,.015,0)),washer:(s,e,t)=>{const n=t.color??"#f2f2ee",i=Le(Z(s,t.h,e,n,0,0,0,.04),Z(s-.06,.1,.01,Ve(n,.9),0,t.h-.14,e/2+.002,0)),r=Hn(.2,.03,"#c9cfd2");r.position.set(0,t.h*.42,e/2+.01);const o=it(.18,.18,.01,"#8fb3c9",0,0,0);return o.rotation.x=Math.PI/2,o.position.set(0,t.h*.42,e/2+.006),i.add(r,o),i},tub:(s,e,t)=>{const n=t.color??"#f7f7f4";return Le(Z(s,t.h,e,n,0,0,0,.08),Z(s-.22,.02,e-.22,"#d8e6ea",0,t.h-.015,0,.06),Z(s-.3,.02,e-.3,"#c4dde6",0,t.h-.02,0,.05))},box:(s,e,t)=>{const n=t.color??"#c99a5e",i=.02,r=t.h,o=Le(Z(s,.02,e,Ve(n,.8),0,0,0,0));o.add(Z(s,r,i,n,0,0,-e/2+i/2,0),Z(s,r,i,n,0,0,e/2-i/2,0)),o.add(Z(i,r,e,Ve(n,.94),-s/2+i/2,0,0,0),Z(i,r,e,Ve(n,.94),s/2-i/2,0,0,0));const a=(c,l,h,u,d,f)=>{const p=Z(h,.012,u,Ve(n,1.05),0,0,0,0),x=new Be;x.position.set(c,r,l),p.position.set(f?Math.sign(f)*-h/2:0,0,d?Math.sign(d)*u/2:0),x.add(p),x.rotation.set(d,0,f),o.add(x)};return a(0,e/2,s-.02,e*.42,.9,0),a(-s/2,0,s*.42,e-.02,0,.7),a(s/2,0,s*.42,e-.02,0,-.75),o.add(Z(s*.5,.004,.06,"#e8d9b8",.05,r-.01,-e/2-.004,0)),o},plantShelf:(s,e,t)=>{const n=t.color??rn;return Le(Z(s,.04,e,n,0,t.h-.04,0,.01),Z(s,.04,e,n,0,.35,0,.01),si(s,e,t.h-.04,Ve(n,.8),.04,.02))},shoeCabinet:(s,e,t)=>{const n=t.color??rn,i=Le(Z(s,t.h-.05,e,n,0,.05,0,.02),Z(s-.06,.05,e-.06,"#5b4a3a",0,0,0,0)),r=Math.max(1,Math.round(s/.45));for(let o=0;o<r;o++){const a=-s/2+s/r*(o+.5);i.add(Z(s/r-.04,t.h-.16,.012,Ve(n,1.06),a,.1,e/2+.003,.008)),i.add(Xe(.016,"#8a6a52",a+s/r*.32,t.h*.55,e/2+.02))}return i},rug:(s,e,t)=>{const n=t.color??"#e9c47c",i=Le(Z(s,.006,e,"#15110f",0,0,0,0),Z(s-.05,.006,e-.05,n,0,.004,0,0),Z(s-.24,.002,e-.24,Ve(n,1.1),0,.01,0,0));return Po(i),i},basket:(s,e,t)=>{const n=t.color??"#d8c49b",i=Math.min(s,e)/2,r=Le(it(i,i*.86,t.h,n,0,0,0,18),it(i*.9,i*.9,.01,Ve(n,.6),0,t.h-.03,0,18)),o=Hn(i,.022,Ve(n,.85));return o.rotation.x=Math.PI/2,o.position.y=t.h,r.add(o),r.add(Xe(i*.7,"#8fb3c9",-.05,t.h-.02,0,1,.35,.9),Xe(i*.5,"#f0ede4",.08,t.h+.01,-.05,1,.35,1)),r},rack:(s,e)=>{const t="#c9cfd2",n=Le(Z(.03,1.6,.03,t,-s/2+.03,0,0,0),Z(.03,1.6,.03,t,s/2-.03,0,0,0),Z(s,.025,.025,t,0,1.55,0,0));return n.add(Z(s,.02,e,t,0,0,0,0)),["#f0ede4","#e5a497","#8fb3c9"].forEach((r,o)=>{const a=-s/2+.17+o*.27;n.add(Z(.22,.42,.02,r,a,1.12,0,.01),Z(.34,.1,.02,r,a,1.44,0,.01))}),n},catTree:(s,e,t)=>{const n=t.color??"#e9dcc6",i=t.color2??"#c99a5e",r=new Be;if(t.h<=.55)r.add(Z(s,t.h,e,n,0,0,0,.05)),r.add(Z(s*.5,.012,e*.5,Ve(n,.93),0,t.h,0,0));else if(r.add(it(.07,.07,t.h-.06,i,0,0,0,12)),r.add(Z(s,.07,e,n,0,t.h-.07,0,.03)),t.h>1.2){const o=Hn(Math.min(s,e)*.36,.05,Ve(n,.95));o.rotation.x=Math.PI/2,o.position.y=t.h+.03,r.add(o)}return r},floorPlant:(s,e,t)=>{const n=Math.min(s,e)/2,i=Le(it(n*.8,n*.6,.42,"#e9dcc6",0,0,0,14)),r=t.color??"#6f9a6a",o=9;for(let a=0;a<o;a++){const c=a/o*Math.PI*2,l=new Be;l.position.y=.42,l.rotation.set(.5+a%3*.15,c,0);const h=Xe(.2,a%2?r:Ve(r,1.12),0,.55+a%3*.12,0,1.1,.18,.85);l.add(h),i.add(l)}return i},dock:(s,e,t)=>Le(Z(s,t.h,e,t.color??"#e8e8e4",0,0,0,.03)),litter:(s,e,t)=>{const n=t.color??"#a9c8a0";return Le(Z(s,t.h,e,n,0,0,0,.04),Z(s-.08,.02,e-.08,"#e9dcc6",0,t.h-.025,0,.02),Z(s*.3,.012,.05,"#f4f0e8",-s*.2,t.h-.005,e/2-.03,.005))},slidingDoor:(s,e)=>{const t=new Be;t.add(Z(s,2.3,e*.4,"#d0d4d8",0,0,0,0));const n=ln(new Yn(s-.08,2.15,e*.3),Lt("#bcd6df",{opacity:.45}),!1);return n.position.set(0,1.12,0),t.add(n),t},block:(s,e,t)=>Le(Z(s,t.h,e,t.color??"#d9d3c4",0,t.base??0,0,.02))};function eb(s){const e=s.face??"s",t=e==="e"||e==="w",n=s.rect.x1-s.rect.x0,i=s.rect.z1-s.rect.z0,r=t?i:n,o=t?n:i,c=(Uu[s.kind]??Uu.block)(r,o,s),l=new Be;return l.add(c),c.traverse(h=>{const u=h;if(!u.isMesh)return;u.geometry.computeBoundingBox();const d=u.geometry.boundingBox.getSize(new R).multiply(u.scale);Math.min(d.x,d.y,d.z)<.022&&u.layers.set(Ai)}),l.position.set((s.rect.x0+s.rect.x1)/2,s.kind==="stove"?s.h-.012:0,(s.rect.z0+s.rect.z1)/2),l.rotation.y=po[e],l.name=s.id,s.kind!=="slidingDoor"&&tb(l),l}function tb(s){s.updateMatrixWorld(!0);const e=new Oe().copy(s.matrixWorld).invert(),t=[];s.traverse(i=>{const r=i;r.isMesh&&!Array.isArray(r.material)&&t.push(r)});const n=new Map;for(const i of t){const r=i.material,o=`${r.uuid}|${i.layers.mask}|${i.castShadow}`;let a=n.get(o);a||(a={mat:r,layers:i.layers.mask,cast:i.castShadow,geos:[]},n.set(o,a));const c=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(const l of Object.keys(c.attributes))l!=="position"&&l!=="normal"&&c.deleteAttribute(l);c.applyMatrix4(new Oe().multiplyMatrices(e,i.matrixWorld)),a.geos.push(c)}s.clear();for(const i of n.values()){const r=jy(i.geos);if(!r)continue;const o=new rt(r,i.mat);o.layers.mask=i.layers,o.castShadow=i.cast,o.receiveShadow=!0,s.add(o);for(const a of i.geos)a.dispose()}}const zi=1.2,ku=1.75,nb=2.2,mo=1.2,Fu=.72,ib={notice:["嗯？","哈基米？"],chase:["喂！哈基米！","站住！","又是你！"],caught:["去阳台反省！","抓到了吧～","乖乖待着！"],giveUp:["算了算了……","跑得真快……","这猫……"],reach:["下来！","你给我下来！","上面不许去！"],startled:["哇！好凶！","哎哟吓我一跳","凶什么凶……"],pet:["怎么啦？饿了吗？","乖～摸摸头","来，摸一下"],sweep:["我的杯子……","唉，又碎了","谁干的！"],tidy:["怎么跑这儿来了","放回去放回去"],wake:["什么声音？！","嗯？！"],search:["跑哪去了？","哈基米？"],keyboard:["啊啊啊我的文档！","jjjjjjj……什么鬼","别踩键盘！"]};class sb{def;rig;obj=new Be;pos=new R;yaw=0;mode="routine";modeT=0;pose="stand";poseT=0;suspicion=0;block=null;skip=null;atStation=!1;station=null;path=[];pathTo=new re(1/0,1/0);repath=0;slide=null;seated=!1;approach=null;exit=null;target=new R;targetProp=null;holding=null;carryingCat=!1;noticed=!1;lastSeen=new R;seenT=0;petCooldown=0;tidyCheck=0;calm=0;hesitate=0;stuckT=0;speaking=0;constructor(e){this.def=e,this.rig=new jM(e.look),this.obj.add(this.rig.root)}get id(){return this.def.id}line(e){const t=this.def.lines?.[e]??ib[e];return t[Math.floor(Math.random()*t.length)]}get activity(){return this.mode==="routine"&&this.atStation&&this.station?this.station.act:null}get asleep(){const e=this.activity;return e==="sleep"||e==="nap"}setMode(e){this.seated&&e!=="routine"&&e!=="wake"&&this.getUp(),this.mode=e,this.modeT=0,this.path=[],this.pathTo.set(1/0,1/0),this.slide=null,e!=="routine"&&(this.atStation=!1)}spawn(e){if(this.block=this.blockAt(e.hour),this.station=this.block?e.stations.get(this.block.station)??null:null,this.station){this.pos.set(this.station.x,this.station.y??0,this.station.z),this.yaw=po[this.station.face],this.atStation=!0;const t=e.world.nav.nearest(this.station.x,this.station.z);t&&(this.seated=!0,this.approach=new R(t.x,0,t.z))}this.sync()}blockAt(e){const t=this.def.schedule;return t.find(n=>e>=n.from&&e<n.to)??t[t.length-1]}visionFor(e){return e==="sleep"||e==="nap"?null:e==="type"||e==="meeting"?{range:4,fov:1.2}:e==="cook"||e==="wash"?{range:4.5,fov:2.1}:{range:7,fov:2.1}}canSee(e,t,n,i){if(this.mode==="carryCat"||this.mode==="startle"||this.mode==="wake")return!1;const r=this.visionFor(this.activity);if(!r)return!1;const o=t-this.pos.x,a=i-this.pos.z,c=Math.hypot(o,a);if(c>r.range&&c>1.4)return!1;if(c>1.4){let l=Math.atan2(o,a)-this.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;if(Math.abs(l)>r.fov/2)return!1}return n>2.4?!1:e.world.sight(this.pos.x,this.pos.z,t,i)}seesCat(e){const t=e.cat;return t.mode==="hidden"||t.mode==="carried"?!1:this.canSee(e,t.pos.x,t.pos.y,t.pos.z)}hear(e,t,n,i,r){if(["chase","carryCat","closeDoor","startle","reach"].includes(this.mode))return;let o=i;e.world.sight(this.pos.x,this.pos.z,t,n)||(o*=.6);const a=this.activity;(a==="type"||a==="meeting")&&(o*=.75);const c=Math.hypot(t-this.pos.x,n-this.pos.z);if(!(c>o)){if(this.asleep){if(!r&&c>1.8)return;this.skip=this.block,this.target.set(t,0,n),this.setMode("wake"),e.say(this,this.line("wake"));return}if(this.mode==="investigate"||this.mode==="sweep"){r&&this.target.set(t,0,n);return}this.target.set(t,0,n),this.setMode("investigate"),r?e.say(this,"！",!0):e.say(this,"？",!0)}}witness(e,t,n,i){return this.canSee(e,t,n,i)?(this.suspicion=Math.min(1,this.suspicion+.55),!0):!1}walkTo(e,t,n,i,r,o=.6){if(this.repath-=r,(!this.path.length||this.pathTo.distanceTo(new re(t,n))>.4||this.repath<=0)&&(this.repath<=0||this.pathTo.distanceTo(new re(t,n))>.4||!this.path.length)){const c=e.world.nav.find(this.pos.x,this.pos.z,t,n);this.path=c??[{x:t,z:n}],this.pathTo.set(t,n),this.repath=o}this.openDoorsNear(e);let a=i*r;for(;a>0&&this.path.length;){const c=this.path[0],l=c.x-this.pos.x,h=c.z-this.pos.z,u=Math.hypot(l,h);u<=a?(this.pos.x=c.x,this.pos.z=c.z,a-=u,this.path.shift()):(this.pos.x+=l/u*a,this.pos.z+=h/u*a,this.turnTo(Math.atan2(l,h),r,9),a=0)}return this.pos.y+=(0-this.pos.y)*Math.min(1,r*10),this.path.length===0}openDoorsNear(e){const t=this.path[0];if(t)for(const n of e.world.map.furniture){if(n.kind!=="slidingDoor"||e.doorOpen(n.id))continue;const i=(n.rect.x0+n.rect.x1)/2,r=(n.rect.z0+n.rect.z1)/2;if(Math.hypot(i-this.pos.x,r-this.pos.z)>1.3)continue;(n.rect.z1-n.rect.z0>n.rect.x1-n.rect.x0?Math.sign(this.pos.x-i)!==Math.sign(t.x-i):Math.sign(this.pos.z-r)!==Math.sign(t.z-r))&&e.setDoor(n.id,!0)}}turnTo(e,t,n=8){let i=e-this.yaw;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this.yaw+=i*Math.min(1,n*t)}face(e,t,n,i=8){this.turnTo(Math.atan2(e-this.pos.x,t-this.pos.z),n,i)}setPose(e){e!==this.pose&&(this.pose=e,this.poseT=0)}update(e,t){if(this.poseT+=e,this.hesitate>0){this.hesitate-=e,this.setPose("startle"),this.face(t.cat.pos.x,t.cat.pos.z,e),this.sync(),this.rig.update(e,this.pose,Math.min(this.poseT,.06));return}if(this.exit){const r=this.exit;r.t+=e/r.dur;const o=Math.min(1,r.t);this.pos.lerpVectors(r.from,r.to,o),this.setPose(o<.35&&r.from.y>.2?"sit":"walk"),o>=1&&(this.exit=null),this.sync(),this.rig.update(e,this.pose,this.poseT);return}this.carryingCat&&this.mode!=="carryCat"&&this.setMode("carryCat"),this.modeT+=e,this.petCooldown=Math.max(0,this.petCooldown-e),this.calm=Math.max(0,this.calm-e),this.speaking=Math.max(0,this.speaking-e);const n=t.cat,i=Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z);if(["routine","investigate","tidy","pet","sweep","search"].includes(this.mode)&&this.calm<=0){const r=this.seesCat(t),o=r?t.mischief():0;if(o>0){const a=i<2?1:Math.max(.45,1-(i-2)/6);this.suspicion=Math.min(1,this.suspicion+o*a*t.sneak*e)}else this.suspicion=Math.max(0,this.suspicion-.22*e);if(this.suspicion>.3&&!this.noticed&&(this.noticed=!0,t.say(this,"？",!0)),this.suspicion<.1&&(this.noticed=!1),this.suspicion>=1)this.startChase(t);else if(this.suspicion>.3&&r&&(this.face(n.pos.x,n.pos.z,e,6),this.mode==="routine"&&!this.atStation)){this.setPose("stand"),this.sync(),this.rig.update(e,this.pose,this.poseT);return}}switch(this.mode){case"routine":this.routine(e,t);break;case"wake":{this.setPose("lie"),this.modeT>1&&(this.getUp(),this.setMode("investigate"));break}case"investigate":{const r=this.walkTo(t,this.target.x,this.target.z,ku,e);if(this.setPose(r?"search":"walk"),r&&this.poseT>1.3){const o=t.props.find(a=>a.state==="broken"&&a.debris&&Math.hypot(a.pos.x-this.pos.x,a.pos.z-this.pos.z)<1.8);this.seesCat(t)&&i<3?(this.suspicion=1,this.startChase(t)):o?(this.targetProp=o,this.setMode("sweep"),t.say(this,this.line("sweep"))):this.setMode("routine")}break}case"sweep":{const r=this.targetProp;if(!r||!r.debris){this.setMode("routine");break}this.walkTo(t,r.pos.x,r.pos.z+.45,zi,e)?(this.face(r.pos.x,r.pos.z,e),this.setPose("sweep"),this.poseT>2.4&&(t.sweep(this,r),this.setMode("routine"))):this.setPose("walk");break}case"tidy":{const r=this.targetProp;if(!r||!r.active||r.state!=="rest"&&r.state!=="held"){this.dropHeld(),this.setMode("routine");break}if(this.holding){const o=this.walkTo(t,r.home.x,r.home.z,zi,e);this.setPose(o?"pickup":"walk"),o&&(this.face(r.home.x,r.home.z,e),this.poseT>.5&&(r.placeAt(r.home.x,r.home.y,r.home.z),r.holder=null,this.holding=null,this.setMode("routine")))}else{const o=this.walkTo(t,r.pos.x,r.pos.z,zi,e);this.setPose(o?"pickup":"walk"),o&&(this.face(r.pos.x,r.pos.z,e),this.poseT>.6&&(this.holding=r,r.state="held",r.holder=this.id,r.storedIn=null,t.say(this,this.line("tidy"))))}break}case"pet":{if(n.mode==="hidden"||n.mode==="carried"){this.setMode("routine");break}const r=t.world.nav.nearest(n.pos.x,n.pos.z)??{x:n.pos.x,z:n.pos.z};i<.85?(this.face(n.pos.x,n.pos.z,e),this.setPose("pet"),this.poseT<e*1.5&&t.pet(this),this.poseT>2.2&&(this.petCooldown=14,this.setMode("routine"))):(this.walkTo(t,r.x,r.z,zi,e,.4),this.setPose("walk"),(this.modeT>7||i>6)&&(t.say(this,"嗯？"),this.setMode("routine")));break}case"chase":this.chase(e,t,i);break;case"reach":{if(this.face(n.pos.x,n.pos.z,e),this.setPose("reach"),n.pos.y<=mo&&n.mode!=="hidden"&&this.modeT>.4){this.setMode("chase");break}this.modeT>3.6&&this.giveUp(t);break}case"search":{const r=this.walkTo(t,this.lastSeen.x,this.lastSeen.z,ku,e);if(this.setPose(r?"search":"walk"),this.seesCat(t)&&t.mischief()>0){this.setMode("chase");break}r&&this.poseT>2.2&&this.giveUp(t);break}case"carryCat":{const r=this.def.catDrop,o=this.walkTo(t,r.x,r.z,zi*1.1,e);this.setPose("carry"),o&&(t.release(this),this.carryingCat=!1,t.say(this,this.line("caught")),this.setMode(r.door?"closeDoor":"routine"),this.calm=4);break}case"closeDoor":{const r=t.world.map.furniture.find(l=>l.id===this.def.catDrop?.door);if(!r){this.setMode("routine");break}const o=r.rect.x1+.55,a=(r.rect.z0+r.rect.z1)/2,c=this.walkTo(t,o,a,zi,e);this.setPose(c?"stand":"walk"),c&&(this.face(r.rect.x0-1,a,e),this.poseT>.35&&(t.setDoor(r.id,!1),this.setMode("routine")));break}case"startle":{if(this.setPose("startle"),this.modeT<.5){const r=Math.sin(this.yaw)*-1.2*e,o=Math.cos(this.yaw)*-1.2*e;t.world.nav.ok(this.pos.x+r,this.pos.z+o)&&(this.pos.x+=r,this.pos.z+=o)}this.modeT>2&&(this.suspicion=.2,this.calm=5,this.setMode("routine"));break}case"react":this.setPose("stand"),this.modeT>.8&&this.setMode("routine");break}this.sync(),this.rig.update(e,this.pose,this.poseT)}routine(e,t){let n=this.blockAt(t.hour);if(n===this.skip){const o=this.def.schedule;n=o[Math.min(o.length-1,o.indexOf(n)+1)]}n!==this.block&&(this.seated&&this.getUp(),this.block=n,this.atStation=!1,this.station=t.stations.get(n.station)??null,this.path=[],this.slide=null);const i=this.station;if(!i){this.setPose("stand");return}if(!this.atStation){if(this.slide){this.slide.t+=e/this.slide.dur;const c=Math.min(1,this.slide.t);this.pos.lerpVectors(this.slide.from,new R(i.x,i.y??0,i.z),c),this.turnTo(po[i.face],e,10),this.setPose("walk"),c>=1&&(this.approach=this.slide.from.clone(),this.seated=!0,this.slide=null,this.atStation=!0,this.yaw=po[i.face],n.say&&t.say(this,n.say));return}const o=t.world.nav.nearest(i.x,i.z)??{x:i.x,z:i.z},a=this.walkTo(t,o.x,o.z,zi,e);if(this.setPose("walk"),a){const c=Math.hypot(i.x-this.pos.x,i.z-this.pos.z);this.slide={from:this.pos.clone(),t:0,dur:Math.min(1.6,Math.max(.45,c/.9))}}this.lookForMess(t,e,5);return}const r={sleep:"lie",nap:"lie",wash:"wash",cook:"cook",eat:"eat",type:"type",water:"water",fold:"fold",door:"talk",meeting:"type",idle:"stand",tv:"sit",phone:"phone",sweep:"sweep",chat:"talk",walkDog:"walk",dance:"talk",chess:"sit",sell:"talk"};this.setPose(r[i.act]),!this.asleep&&i.act!=="type"&&i.act!=="meeting"&&this.lookForMess(t,e,3)}lookForMess(e,t,n){if(this.tidyCheck-=t,!(this.tidyCheck>0)){this.tidyCheck=.8;for(const i of e.props)if(!(!i.def.owned||!i.displaced||i.still<1.2||i.holder)&&i.storedIn!=="bed"&&!(Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)>n)&&this.canSee(e,i.pos.x,i.pos.y,i.pos.z)&&e.world.nav.nearest(i.pos.x,i.pos.z)){this.targetProp=i,this.setMode("tidy");return}}}getUp(){if(this.seated=!1,!this.approach)return;const e=this.approach.clone();e.y=0;const t=Math.hypot(e.x-this.pos.x,e.z-this.pos.z);t>2&&e.set(this.pos.x,0,this.pos.z),(t>.08||this.pos.y>.05)&&(this.exit={from:this.pos.clone(),to:e,t:0,dur:Math.min(1.4,Math.max(.4,Math.min(t,2)/.9))}),this.approach=null}callFrom(e,t,n){if(this.petCooldown>0||this.asleep||this.mode!=="routine"&&this.mode!=="investigate")return!1;const i=this.activity;if(i==="meeting"||i==="door")return!1;const r=Math.hypot(t-this.pos.x,n-this.pos.z);let o=6.5;return e.world.sight(this.pos.x,this.pos.z,t,n)||(o=4.5),r>o?!1:(this.setMode("pet"),e.say(this,"嗯？哈基米？"),!0)}startChase(e){this.carryingCat||(this.suspicion=1,this.noticed=!0,this.dropHeld(),this.setMode("chase"),e.say(this,this.line("chase")))}chase(e,t,n){const i=t.cat;if(i.mode==="carried"){this.setMode(this.carryingCat?"carryCat":"routine");return}if(this.seesCat(t)||n<1.2?(this.lastSeen.copy(i.pos),this.seenT=0):this.seenT+=e,i.mode==="hidden"||this.seenT>2.5){this.setMode("search"),t.say(this,this.line("search"));return}if(this.modeT>14){this.giveUp(t);return}if(i.pos.y>mo&&i.mode!=="jump"&&n<1.6){this.setMode("reach"),t.say(this,this.line("reach"));return}const o=t.world.nav.nearest(i.pos.x,i.pos.z)??{x:i.pos.x,z:i.pos.z},a=this.walkTo(t,o.x,o.z,nb,e,.3);this.setPose("run");const c=i.pos.y>.2||a?Fu+.4:Fu;if(a&&n>=c&&i.pos.y>.2){this.setMode("reach"),t.say(this,this.line("reach"));return}if(this.stuckT=a&&n>=c?this.stuckT+e:0,this.stuckT>2){this.stuckT=0,this.giveUp(t);return}n<c&&i.pos.y<=mo&&(i.mode==="free"||i.mode==="act")&&(this.face(i.pos.x,i.pos.z,1),this.carryingCat=!0,t.grab(this),this.setMode("carryCat"))}giveUp(e){e.say(this,this.line("giveUp")),this.suspicion=.25,this.calm=3,this.setMode("routine")}startle(e){this.dropHeld(),e.say(this,this.line("startled")),e.startled(this),this.setMode("startle")}dropHeld(){if(!this.holding)return;const e=this.holding;e.holder=null,e.placeAt(this.pos.x+Math.sin(this.yaw)*.35,0,this.pos.z+Math.cos(this.yaw)*.35),this.holding=null}sync(){if(this.obj.position.copy(this.pos),this.obj.rotation.y=this.yaw,this.holding){const e=new R;this.rig.hold.getWorldPosition(e),this.holding.pos.copy(e).add(new R(0,-.05,0)),this.holding.sync()}}get busyTalking(){return this.speaking>0}}const rb=11,ob=3.2,ab=.32;class cb{def;obj;model;r;h;pos=new R;vel=new R;spin=0;tumble=0;state="rest";home=new R;fallFrom=0;pulled=0;storedIn=null;holder=null;debris=null;collected=!1;still=0;constructor(e,t){this.def=e;const n=cf(e);this.model=n.obj,this.r=n.r,this.h=n.h,this.obj=new Be,this.obj.add(this.model);const i=e.y??t.supportAt(e.x,e.z).h;this.pos.set(e.x,i,e.z),this.home.copy(this.pos),this.obj.rotation.y=e.rot??0,e.inside&&(this.state="stored",this.storedIn=e.inside),this.sync()}get id(){return this.def.id}get active(){return this.state!=="gone"&&this.state!=="broken"&&!this.collected}get movable(){return!this.def.fixed&&!this.def.heavy&&!this.def.collect&&this.def.kind!=="robot"}get displaced(){return this.active&&this.state==="rest"&&this.pos.distanceTo(this.home)>.25}sync(){this.obj.position.copy(this.pos)}push(e,t,n=0){!this.movable||this.state==="carried"||this.state==="held"||!this.active||(this.vel.set(e,n,t),this.spin=(Math.random()-.5)*6,this.state=n>0?"fall":"slide",n>0&&(this.fallFrom=this.pos.y))}step(e,t){if(this.state==="slide"){this.still=0;const n=Math.hypot(this.vel.x,this.vel.z),i=Math.max(0,n-ob*e);if(i<=.01)return this.vel.set(0,0,0),this.state="rest",null;this.vel.x*=i/n,this.vel.z*=i/n;const r=this.pos.x+this.vel.x*e,o=this.pos.z+this.vel.z*e;return this.hitsSide(t,r,o)?(this.vel.x*=-.25,this.vel.z*=-.25):(this.pos.x=r,this.pos.z=o),this.obj.rotation.y+=this.spin*e*i,t.restAt(this.pos.x,this.pos.z,this.pos.y)<this.pos.y-.03?(this.state="fall",this.fallFrom=this.pos.y,this.vel.y=.4,this.tumble=(Math.random()<.5?-1:1)*(3+Math.random()*3),this.sync(),{ev:"fell",drop:0}):(this.sync(),null)}if(this.state==="fall"){this.still=0,this.vel.y-=rb*e;const n=this.pos.x+this.vel.x*e,i=this.pos.z+this.vel.z*e;this.hitsSide(t,n,i)?(this.vel.x*=-.3,this.vel.z*=-.3):(this.pos.x=n,this.pos.z=i),this.pos.y+=this.vel.y*e,this.model.rotation.x+=this.tumble*e,this.model.rotation.z+=this.tumble*.6*e;const r=t.restAt(this.pos.x,this.pos.z,this.pos.y+.05);if(this.pos.y<=r){this.pos.y=r;const o=this.fallFrom-r;return this.def.breakable&&o>=ab?(this.state="broken",this.vel.set(0,0,0),this.sync(),{ev:"broke",drop:o}):(Math.abs(this.vel.y)>1.2?(this.vel.y=Math.abs(this.vel.y)*.25,this.vel.x*=.5,this.vel.z*=.5):(this.vel.y=0,this.state=Math.hypot(this.vel.x,this.vel.z)>.1?"slide":"rest",this.model.rotation.x=Math.round(this.model.rotation.x/(Math.PI/2))*(Math.PI/2),this.model.rotation.z=0,Math.abs(Math.sin(this.model.rotation.x))>.5&&(this.model.position.y=this.r*.5)),this.sync(),{ev:"landed",drop:o})}return this.sync(),null}return this.state==="rest"&&(this.still+=e),null}hitsSide(e,t,n){for(const i of e.solids)if(i.enabled&&!(this.pos.y>=i.top-.02||this.pos.y+this.h<i.base)&&Bn(i.rect,t,n,this.r*.6))return!0;return!1}placeAt(e,t,n){this.pos.set(e,t,n),this.vel.set(0,0,0),this.state="rest",this.model.rotation.set(0,0,0),this.model.position.set(0,0,0),this.still=0,this.sync()}}const lb=60,hb={swat:"拍",carry:"叼",drop:"放下",putIn:"放进去",eat:"吃",pull:"扯",knead:"踩",sleep:"睡",scratch:"抓",hide:"钻",unhide:"出来",mambo:"曼波",open:"开门",meow:"喵",struggle:"挣扎",pawDoor:"扒门",glitch:"报错",groom:"舔毛",groomLoop:"舔毛",chaseCap:"扑",tailSpin:"追",bowlEat:"吃",swipe:"攻击",bury:"埋",shake:"甩掉",snap:"回神"},Ou={swat:.4,eat:1.6,groom:1.6,bury:.9,pull:.55,knead:1.6,sleep:2.6,scratch:2,mambo:3.2,open:.8,pawDoor:.5,meow:.6};class ub{map;world;stage;fx;bubbles;audio;hooks;progress;cat;props=[];propById=new Map;humans=[];stations=new Map;hour;paused=!1;holdClock=!1;over=!1;action={kind:"meow"};doing=null;todayTasks=[];damage=[];fishToday=0;treatsToday=0;caught=0;rideSecs=0;rideReported=0;haaCount=0;haaWindow=0;haaCooldown=0;struggle=0;doors=new Map;robot=null;meowCd=0;meowCount=0;cleared=!1;clearT=0;danceAt=-1;chasing=new Set;boxCd=0;sneakMul=1;lastStatus="";time=0;constructor(e,t,n,i,r,o,a){this.map=e,this.stage=t,this.fx=n,this.bubbles=i,this.audio=r,this.progress=o,this.hooks=a,this.world=new Ky(e),this.hour=e.day[0];for(const h of e.stations)this.stations.set(h.id,h);t.build(e),t.level.add(n.root);for(const h of e.props){const u=new cb(h,this.world);this.props.push(u),this.propById.set(h.id,u),h.collect&&o.collected.has(h.id)&&(u.collected=!0),u.obj.visible=!u.collected&&u.state!=="stored",t.level.add(u.obj)}for(const h of e.furniture)h.kind==="slidingDoor"&&this.doors.set(h.id,{open:!0,anim:1,lockedFor:0});if(this.syncDoors(),e.robot){const h=this.propById.get(e.robot.prop),u={id:"robot",rect:{x0:0,z0:0,x1:0,z1:0},top:.1,base:0,climb:!0,blocksSight:!1,enabled:!0};this.world.add(u),this.robot={prop:h,solid:u,seg:0,t:0},this.placeRobot(h.pos.x,h.pos.z)}const c=Lo.find(h=>h.id===o.skin)??Lo[0];this.cat=new ZM(c),this.cat.skills=o.skills,this.cat.jumpH=o.skills.has("highJump")?1.6:1,this.cat.speedMul=o.skills.has("swift")?1.2:1,this.sneakMul=o.skills.has("sneak")?.6:1,o.hat&&this.cat.setHat(cf({id:"wornHat",kind:"hat",name:"",x:0,z:0}).obj);const l=e.start.y??this.world.supportAt(e.start.x,e.start.z).h;this.cat.place(e.start.x,l,e.start.z),this.cat.yaw=Math.PI,t.level.add(this.cat.obj,this.cat.shadow);for(const h of e.npcs){const u=new sb(h);this.humans.push(u),u.spawn(this),t.level.add(u.obj)}t.follow(this.cat.pos.x,this.cat.pos.y,this.cat.pos.z,0,0,0,!0)}get sneak(){return this.sneakMul}mischief(){const e=this.cat;if(e.mode==="hidden"||e.mode==="carried")return 0;if(this.doing&&["scratch","eat","pull","knead"].includes(this.doing.kind))return 1.7;let t=0;return e.carrying?.def.owned&&(t=.9),e.mode!=="jump"&&e.support?.furn?.forbidden&&(t=Math.max(t,.65)),t}say(e,t,n=!1){this.bubbles.say(`npc:${e.id}`,()=>e.obj.position.clone().add(new R(0,e.rig.height+.35,0)),t,{icon:n,ms:n?1200:2200}),n&&t==="！"&&this.audio.alert()}grab(e){const t=this.cat;this.cancelAction(),this.dropCarried(!0),t.mode==="hidden"&&this.unhide(!0),t.mode="carried",t.jump=null,t.setPose("carried"),t.alert=1,this.struggle=0,this.caught++,this.audio.yowl(),this.bubbles.say("cat",()=>t.obj.position.clone().add(new R(0,.55,0)),"老吴——！",{ms:1400,cat:!0}),this.emit({t:"caught",npc:e.id}),this.hooks.status("被抓住了！连点「挣扎」")}release(e){const t=e.def.catDrop??{x:e.pos.x,z:e.pos.z},n=this.world.supportAt(t.x,t.z).h;this.cat.place(t.x,n,t.z),this.cat.mode="free",this.cat.setPose("idle"),this.hooks.status(null)}sweep(e,t){t.debris&&(this.stage.level.remove(t.debris),this.fx.puff(t.pos.clone(),4),t.debris=null),t.state="gone"}setDoor(e,t){const n=this.doors.get(e);n&&(n.open=t,n.lockedFor=t?0:9,this.syncDoors())}doorOpen(e){return this.doors.get(e)?.open??!0}pet(e){if(this.cat.carrying){this.conflict("petCarry",e);return}this.fx.hearts(this.cat.pos.clone().add(new R(0,.5,0))),this.audio.meow("mrrp"),this.say(e,e.line("pet")),e.suspicion=0}startled(e){this.fx.ring(e.pos.clone(),"#e8553d")}syncDoors(){for(const[e,t]of this.doors){const n=this.world.byId.get(e);n&&(n.enabled=!t.open)}}ctx(){const e=this.progress.done;return{hour:this.hour,activity:t=>this.humans.find(n=>n.id===t)?.activity??null,done:t=>e.has(t),mainDone:this.mainDone}}get mainDone(){return this.map.tasks.filter(e=>e.kind==="main").every(e=>this.progress.done.has(e.id))}emit(e){this.hooks.event?.(e);const t=this.ctx();for(const n of this.map.tasks)this.progress.done.has(n.id)||n.kind==="final"&&!t.mainDone||n.needs&&!this.progress.skills.has(n.needs)||n.test(e,t)&&(this.progress.done.add(n.id),this.todayTasks.push(n),this.fishToday+=n.reward,this.audio.chime(),window.setTimeout(()=>this.audio.hajimi(!0),280),this.hooks.taskDone(n),n.kind==="final"&&(this.cleared=!0,this.clearT=0,this.celebrate()))}celebrate(){for(const e of this.humans){if(e.carryingCat){e.carryingCat=!1;const t=this.world.nav.nearest(e.pos.x+Math.sin(e.yaw)*.6,e.pos.z+Math.cos(e.yaw)*.6)??{x:e.pos.x,z:e.pos.z};this.cat.place(t.x,0,t.z),this.cat.mode="free",this.hooks.status(null)}e.suspicion=0,e.calm=999,["chase","reach","search","carryCat","investigate"].includes(e.mode)&&e.setMode("routine")}}noise(e,t,n,i){for(const r of this.humans)r.hear(this,e,t,n,i)}addDamage(e,t){t>0&&this.damage.push({name:e,value:t})}findAction(){const e=this.cat;if(e.mode==="carried")return{kind:"struggle"};if(e.mode==="hidden")return{kind:"unhide"};for(const[o,a]of this.doors){if(a.open)continue;const c=this.world.byId.get(o),l=Mi(c.rect);if(Math.hypot(l.x-e.pos.x,l.z-e.pos.z)<1.2&&e.pos.y<.1)return{kind:"pawDoor",solid:c,at:new R(l.x,.9,l.z)}}if(this.doing?.forced)return{kind:this.doing.kind==="groomLoop"?"shake":"snap"};const t=e.forward;if(e.carrying){const o=this.containerNear();return o?{kind:o.furn?.bury?"bury":"putIn",solid:o,at:this.solidTop(o)}:{kind:"drop"}}let n=null,i=-1/0;const r=(o,a,c)=>{const l=a-c*2.2;l>i&&(i=l,n=o)};for(const o of this.props){if(!o.active||o.state==="stored"||o.state==="held"||o.state==="carried"||o.def.collect||o.def.kind==="robot"||o.def.kind==="pan"||o.def.appear&&!(this.hour>=o.def.appear[0]&&this.hour<o.def.appear[1]))continue;const a=o.pos.x-e.pos.x,c=o.pos.z-e.pos.z,l=Math.hypot(a,c),h=bt+o.r+.32;if(l>h)continue;const u=o.pos.y-e.pos.y;if(!(o.def.pull?u>-.1&&u<.75:Math.abs(u)<.2))continue;const f=l<.12?1:(a*t.x+c*t.y)/l,p=l-f*.15+(f<-.2?.25:0),x=o.pos.clone().add(new R(0,o.h,0));o.def.edible?r({kind:"eat",prop:o,at:x},5,p):o.def.pull?r({kind:"pull",prop:o,at:x},5,p):o.def.knead?r({kind:"knead",prop:o,at:x},5,p):o.def.sleep?r({kind:"sleep",prop:o,at:x},4,p):o.def.carry?r({kind:"carry",prop:o,at:x},3.2,p):o.movable&&r({kind:"swat",prop:o,at:x},3,p)}for(const o of this.world.solids){const a=o.furn;if(!a||!o.enabled)continue;const c={x:Math.min(Math.max(e.pos.x,o.rect.x0),o.rect.x1),z:Math.min(Math.max(e.pos.z,o.rect.z0),o.rect.z1)},l=Math.hypot(c.x-e.pos.x,c.z-e.pos.z),h=e.support===o;if(a.scratch&&e.pos.y<.05&&l<bt+.2&&r({kind:"scratch",solid:o,at:new R(c.x,o.top+.1,c.z)},2.5,l),a.hide&&e.pos.y<.05&&l<bt+.25&&r({kind:"hide",solid:o,at:this.solidTop(o)},2.6,l),a.kind==="fridge"&&this.progress.skills.has("paws")&&l<bt+.3&&!this.fridgeOpen&&r({kind:"open",solid:o,at:new R(c.x,1,c.z)},4,l),a.kind==="sink"&&h){const u=this.map.furniture.find(d=>d.kind==="mirror");u&&r({kind:"mambo",solid:o,at:new R(e.pos.x,1.5,u.rect.z1)},3.5,.2)}}return this.suspiciousWatchers().length&&r({kind:"groom"},4.5,0),n??{kind:"meow"}}fridgeOpen=!1;suspiciousWatchers(){return this.humans.filter(e=>e.suspicion>.25&&e.seesCat(this)&&["routine","investigate","tidy","search"].includes(e.mode))}solidTop(e){const t=Mi(e.rect);return new R(t.x,e.top,t.z)}containerNear(){const e=this.cat;if(e.pos.y>.05)return null;for(const t of this.world.solids){if(!t.furn?.hide&&!t.furn?.bury)continue;const n={x:Math.min(Math.max(e.pos.x,t.rect.x0),t.rect.x1),z:Math.min(Math.max(e.pos.z,t.rect.z0),t.rect.z1)};if(Math.hypot(n.x-e.pos.x,n.z-e.pos.z)<bt+.3)return t}return null}act(){const e=this.cat,t=this.action;if(e.mode==="carried"){this.struggle++,e.setPose("carried"),this.audio.meow("mew"),this.fx.puff(e.pos.clone(),2),this.struggle>=7&&this.escapeFromArms();return}if(e.mode==="hidden"){this.unhide(!1);return}if(this.doing?.forced){this.doing.t=Math.min(this.doing.dur,this.doing.t+.6),this.fx.puff(e.pos.clone().add(new R(0,.3,0)),1),this.audio.click();return}if(e.mode!=="free"||this.doing)return;const n=(i,r)=>{e.yaw=Math.atan2(i-e.pos.x,r-e.pos.z)};switch(t.kind){case"meow":{if(this.meowCd>0)return;this.meowCd=1.2;const i=this.meowCount++%2===1;i?this.audio.hajimi():this.audio.meow("meow"),this.bubbles.say("cat",()=>e.obj.position.clone().add(new R(0,.62,0)),i?"哈基米～":"喵～",{ms:1e3,cat:!0});for(const r of this.humans)r.callFrom(this,e.pos.x,e.pos.z);e.setPose("sit"),this.doing={kind:"meow",t:0,dur:Ou.meow,fired:!0,noiseT:0},e.mode="act";return}case"carry":{const i=t.prop;i.state="carried",i.storedIn=null,e.carrying=i,this.audio.click(),n(i.pos.x,i.pos.z);return}case"drop":{this.dropCarried(!1);return}case"bury":{const i=e.carrying,r=t.solid;e.carrying=null;const o=Mi(r.rect);i.placeAt(o.x,r.top-.02,o.z),i.state="stored",i.storedIn=r.id,e.yaw=Math.atan2(o.x-e.pos.x,o.z-e.pos.z),this.startDoing("bury",t),this.emit({t:"deliver",prop:i.id,into:r.id});return}case"groom":{const i=this.suspiciousWatchers();this.startDoing("groom",t).watchers=i;return}case"putIn":{const i=e.carrying,r=t.solid;e.carrying=null;const o=Mi(r.rect);i.state="stored",i.storedIn=r.id,r.furn?.hide==="inside"?(i.placeAt(o.x,.03,o.z),i.state="stored",i.storedIn=r.id):i.obj.visible=!1,this.audio.click(),this.fx.puff(this.solidTop(r),3),this.emit({t:"deliver",prop:i.id,into:r.id});return}case"hide":{this.hide(t.solid);return}case"pawDoor":{const i=this.doors.get(t.solid.id);i&&!i.open&&(i.lockedFor=Math.max(0,i.lockedFor-1.6)),this.startDoing("pawDoor",t),this.audio.click();return}}if(t.prop)n(t.prop.pos.x,t.prop.pos.z);else if(t.solid){const i={x:Math.min(Math.max(e.pos.x,t.solid.rect.x0),t.solid.rect.x1),z:Math.min(Math.max(e.pos.z,t.solid.rect.z0),t.solid.rect.z1)};t.kind!=="mambo"?n(i.x,i.z):e.yaw=Math.PI}this.startDoing(t.kind,t)}startDoing(e,t){const n=this.cat;n.mode="act",n.vel.set(0,0),this.doing={kind:e,t:0,dur:Ou[e]??.5,prop:t.prop,solid:t.solid,fired:!1,noiseT:0};const i={swat:"swat",eat:"eat",pull:"pull",knead:"knead",sleep:"sleep",scratch:"scratch",mambo:"mambo",open:"paw",pawDoor:"paw",groom:"groom",bury:"paw"};return n.setPose(i[e]??"idle"),e==="swat"&&this.audio.meow("mew"),this.doing}cancelAction(){this.doing&&this.cat.mode==="act"&&(this.cat.mode="free"),this.doing=null,this.dropHeadCloth()}dropHeadCloth(){this.headCloth&&(this.cat.rig.hatSlot.remove(this.headCloth),this.headCloth=null,this.fx.puff(this.cat.pos.clone().add(new R(0,.25,0)),3,"#8fb3c9"))}stepDoing(e){const t=this.doing,n=this.cat;if(!t)return;t.t+=e,t.noiseT-=e;const i=t.prop;switch(t.kind){case"swat":if(!t.fired&&t.t>.16&&i){t.fired=!0;const r=n.forward,o=i.pos.x-n.pos.x,a=i.pos.z-n.pos.z,c=Math.hypot(o,a)||1,l=r.x*.6+o/c*.4,h=r.y*.6+a/c*.4;if(i.push(l*2.3,h*2.3),this.audio.click(),this.sfx("啪！",i.pos.clone().add(new R(0,.3,0)),!0),i.def.kind==="cap"){this.doing=null,this.takeOver("chaseCap",3,"walk","瓶盖在动 → 扑","while (瓶盖在动) 扑(); // 永远抓不到",i),this.emit({t:"instinct",kind:"cap"});return}}break;case"pull":if(!t.fired&&t.t>.2&&i){t.fired=!0,i.pulled++;const r=i.pos.clone().add(new R(0,-.1,.1));this.fx.paper(r,4),this.audio.paper(),this.sfx("刺啦——",r.clone().add(new R(0,.2,0)),!0),this.noise(n.pos.x,n.pos.z,2.6,!1);const o=i.pulled>=(i.def.pull??1);o&&(this.fx.paper(r,26),this.addDamage(i.def.name,i.def.value??0),i.state="gone",i.obj.visible=!1),this.emit({t:"pull",prop:i.id,done:o})}break;case"eat":t.noiseT<=0&&(t.noiseT=.5,this.audio.chew(),this.sfx("嗷呜",n.pos.clone().add(new R(0,.45,0)),!0),this.noise(n.pos.x,n.pos.z,2.4,!1)),!t.fired&&t.t>=t.dur&&i&&(t.fired=!0,i.state="gone",i.obj.visible=!1,this.fx.sparkle(i.pos.clone().add(new R(0,.1,0)),"#e9b44c"),this.addDamage(i.def.name,i.def.value??0),this.emit({t:"eat",prop:i.id}),n.boost=4.5,this.hooks.instinct?.("吃饱了 → 跑酷","if (吃饱了 || 凌晨三点) 狂奔();"),this.emit({t:"instinct",kind:"zoomies"}));break;case"knead":{t.noiseT<=0&&(t.noiseT=.18,this.audio.typing()),!t.fired&&t.t>.15&&i&&(t.fired=!0,this.mash(i));break}case"scratch":t.noiseT<=0&&(t.noiseT=.45,this.audio.scratch(),this.sfx("嚓嚓",n.pos.clone().add(new R(0,.5,0)),!0),this.noise(n.pos.x,n.pos.z,3,!1)),!t.fired&&t.t>=t.dur&&t.solid&&(t.fired=!0,this.addDamage(`${t.solid.furn?.name??"家具"}抓痕`,200),this.fx.puff(n.pos.clone().add(new R(0,.3,0)),3,"#c7d6e0"),this.emit({t:"scratch",furn:t.solid.id}));break;case"sleep":!t.fired&&t.t>=t.dur&&i&&(t.fired=!0,this.bubbles.say("cat",()=>n.obj.position.clone().add(new R(0,.5,0)),"呼噜呼噜……",{ms:1400,cat:!0}),this.emit({t:"sleep",prop:i.id}));break;case"mambo":Math.random()<e*5&&this.fx.notes(n.pos.clone().add(new R(0,.5,0))),t.t<e*1.5&&(this.audio.mambo(),this.bubbles.say("cat",()=>n.obj.position.clone().add(new R(0,.7,0)),"曼波～曼波～",{ms:2600,cat:!0})),!t.fired&&t.t>=t.dur&&(t.fired=!0,this.emit({t:"mambo",furn:t.solid?.id??""}));break;case"groom":{if(!t.fired&&t.t>=t.dur){t.fired=!0;let r=0;if(!n.support?.furn?.forbidden&&!n.carrying)for(const o of t.watchers??[])["routine","investigate","tidy","search"].includes(o.mode)&&(o.suspicion=0,o.calm=6,this.say(o,"……还挺乖的"),r++);this.emit({t:"groom",calmed:r})}break}case"groomLoop":t.noiseT<=0&&(t.noiseT=1.1,this.bubbles.say("cat",()=>n.obj.position.clone().add(new R(0,.7,0)),["扒……","舔舔","？"][Math.floor(t.t/1.1)%3],{ms:900,cat:!0}));break;case"chaseCap":{const r=i;if(r&&r.active){const o=r.pos.x-n.pos.x,a=r.pos.z-n.pos.z,c=Math.hypot(o,a)||1;if(n.mode="free",n.move(e,o/c,a/c,c>.5?1:.5,this.world,this.props),n.mode==="free"&&(n.mode="act"),n.setPose("walk"),c<bt+r.r+.08&&t.noiseT<=0){t.noiseT=.35;const l=Math.atan2(o,a)+(Math.random()-.5)*1.6;r.push(Math.sin(l)*2.2,Math.cos(l)*2.2),this.audio.click()}}break}case"tailSpin":n.yaw+=e*9,Math.random()<e*4&&this.fx.puff(n.pos.clone(),1);break;case"bowlEat":t.noiseT<=0&&(t.noiseT=.45,this.audio.chew());break;case"swipe":if(!t.fired&&t.t>.2){t.fired=!0;const r=this.swipeAt;this.audio.hiss(),r&&r.mode==="reach"&&(this.fx.ring(r.pos.clone().add(new R(0,1.2,0)),"#e8553d"),this.say(r,"哎哟！好好好不说了"),r.calm=5,r.suspicion=.2,r.setMode("react"))}break;case"bury":t.noiseT<=0&&(t.noiseT=.3,this.audio.scratch(),t.solid&&this.fx.puff(this.solidTop(t.solid),2,"#e9dcc6")),!t.fired&&t.t>.5&&i&&(t.fired=!0,i.obj.visible=!1);break;case"glitch":Math.random()<e*6&&this.fx.puff(n.pos.clone().add(new R(0,.15,0)),1);break;case"open":if(!t.fired&&t.t>.4&&t.solid){t.fired=!0,this.fridgeOpen=!0;const r=this.propById.get("yogurt");if(r&&r.state==="stored"){const o=Mi(t.solid.rect);r.placeAt(o.x+.6,0,o.z-.1),r.storedIn=null,r.obj.visible=!0,this.fx.puff(r.pos.clone(),3,"#e6f3f8")}this.audio.door(),this.emit({t:"open",furn:t.solid.id})}break}t.t>=t.dur&&this.doing===t&&(this.doing=null,n.mode==="act"&&(n.mode="free"),n.setPose("idle"),t.kind==="groomLoop"&&this.dropHeadCloth())}mashCd=0;mash(e){if(this.mashCd>0)return;this.mashCd=2.5;const t=this.cat,n=this.humans.find(i=>{const r=i.activity;return(r==="type"||r==="meeting")&&Math.hypot(i.pos.x-e.pos.x,i.pos.z-e.pos.z)<1.5});if(this.audio.typing(),this.bubbles.say("laptop",()=>e.pos.clone().add(new R(0,.45,0)),"jjjjjjkkkkk;;;;",{ms:1600}),n){const i=this.mainDone&&this.hour>=16.3;this.say(n,i?"啊……大家好，这是我家猫……":n.line("keyboard")),i?this.fx.hearts(t.pos.clone().add(new R(0,.5,0)),5):n.suspicion=1}this.emit({t:"knead",prop:e.id,busy:n?.id})}dropCarried(e){const t=this.cat,n=t.carrying;if(!n)return;t.carrying=null;const i=t.forward;let r=t.pos.x+i.x*(bt+.08),o=t.pos.z+i.y*(bt+.08);(e||!this.world.onFloor(r,o))&&(r=t.pos.x,o=t.pos.z);const a=this.world.restAt(r,o,t.pos.y+.05);n.placeAt(r,a,o),a<t.pos.y-.3&&(n.pos.y=t.pos.y+.1,n.state="fall",n.fallFrom=t.pos.y+.1)}hide(e){const t=this.cat,n=Mi(e.rect);t.hiddenIn=e,t.mode="hidden",t.vel.set(0,0),t.setPose("hide");const i=e.furn?.hide==="inside";if(t.place(n.x,i?.02:0,n.z),t.yaw=0,t.obj.visible=i,t.shadow.visible=i,this.audio.paper(),this.fx.puff(new R(n.x,i?e.top:.1,n.z),4,"#e8d9b8"),t.carrying){const r=t.carrying;t.carrying=null,r.state="stored",r.storedIn=e.id,i?r.placeAt(n.x+.12,.03,n.z-.1):r.obj.visible=!1,r.state="stored",r.storedIn=e.id,this.emit({t:"deliver",prop:r.id,into:e.id})}for(const r of this.props)r.def.collect&&!r.collected&&r.storedIn===e.id&&this.collect(r);this.emit({t:"hide",furn:e.id});for(const r of this.humans)r.mode==="chase"&&!r.seesCat(this)&&r.setMode("search")}unhide(e){const t=this.cat,n=t.hiddenIn;if(t.hiddenIn=null,t.mode="free",t.obj.visible=!0,t.shadow.visible=!0,t.setPose("idle"),this.boxCd=8,!n||e)return;const i=Mi(n.rect),r=n.rect.z1+bt+.06,o=i.x;this.world.onFloor(o,r)?t.place(o,0,r):t.place(n.rect.x1+bt+.06,0,i.z),t.yaw=0,this.fx.puff(t.pos.clone(),3,"#e8d9b8")}escapeFromArms(){const e=this.humans.find(r=>r.mode==="carryCat"),t=this.cat,n=e?e.pos.clone():t.pos.clone(),i=this.world.nav.nearest(n.x+Math.sin((e?.yaw??0)+1.6)*.6,n.z+Math.cos((e?.yaw??0)+1.6)*.6)??{x:n.x,z:n.z};t.mode="free",t.place(t.pos.x,t.pos.y,t.pos.z),t.startJump(new R(i.x,0,i.z)),this.hooks.status(null),this.audio.hiss(),e&&(e.carryingCat=!1,this.say(e,"哎呀！"),e.setMode("react"),e.calm=4,e.suspicion=.3)}haa(){if(this.haaCooldown>0)return;const e=this.cat;if(e.mode!=="free"&&e.mode!=="act")return;const t=this.humans.find(n=>n.mode==="pet"&&Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<1.2);if(t){t.def.stranger?this.grateful(t):this.conflict("petHiss",t);return}this.cancelAction(),this.emit({t:"hiss"}),this.haaCount++,this.haaWindow=1.6,e.mode="act",e.setPose("hiss"),this.doing={kind:"meow",t:0,dur:.35,fired:!0,noiseT:0},this.audio.hiss(),this.fx.ring(e.pos.clone(),"#ffd23f"),this.bubbles.say("cat",()=>e.obj.position.clone().add(new R(0,.62,0)),this.haaCount<3?"哈！":"哈——扑！",{ms:600,cat:!0});for(const n of this.humans)["chase","reach","pet","investigate","search"].includes(n.mode)&&Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<2.8&&(n.hesitate=.7);if(this.haaCount>=3){this.haaCount=0,this.haaCooldown=this.progress.skills.has("hiss")?10:20;const n=e.forward,i=new R(e.pos.x+n.x*.45,e.pos.y,e.pos.z+n.y*.45);this.world.onFloor(i.x,i.z)&&this.world.supportAt(i.x,i.z).h===e.pos.y&&(this.doing=null,e.mode="free",e.startJump(i)),this.fx.ring(e.pos.clone(),"#e8553d");for(const r of this.humans)Math.hypot(r.pos.x-e.pos.x,r.pos.z-e.pos.z)<2.6&&["chase","reach","pet","investigate","search"].includes(r.mode)&&(r.startle(this),this.emit({t:"haa",npc:r.id}))}}grateful(e){const t=this.cat;this.cancelAction(),t.mode="act",t.setPose("hiss"),this.doing={kind:"meow",t:0,dur:.5,fired:!0,noiseT:0},this.audio.hiss(),this.fx.ring(t.pos.clone(),"#e8553d"),this.bubbles.say("cat",()=>t.obj.position.clone().add(new R(0,.62,0)),"哈！",{ms:800,cat:!0}),this.say(e,"好心摸你还哈我！"),e.setMode("startle"),e.petCooldown=30,this.emit({t:"grateful",npc:e.id})}conflict(e,t){const n=this.cat;this.cancelAction(),this.dropCarried(!0),n.mode="act",n.vel.set(0,0),this.doing={kind:"glitch",t:0,dur:1.9,fired:!1,noiseT:0},n.setPose("glitch"),this.audio.glitch(),this.bubbles.say("cat",()=>n.obj.position.clone().add(new R(0,.62,0)),"系统报错：代码冲突",{ms:1900,cat:!0}),this.say(t,"？？？这猫怎么了"),t.setMode("react"),t.petCooldown=14,t.suspicion=0,this.emit({t:"conflict",kind:e})}cd={rack:0,tail:0,bowl:0,finger:0,startle:0};idleT=0;takeOver(e,t,n,i,r,o){const a=this.cat;this.cancelAction(),a.mode="act",a.vel.set(0,0),this.doing={kind:e,t:0,dur:t,prop:o,fired:!1,noiseT:0,forced:!0},a.setPose(n),this.hooks.instinct?.(i,r)}instincts(){const e=this.cat,t=this.humans.some(n=>n.mode==="chase"||n.mode==="search");if(this.cd.rack<=0&&e.moving&&e.pos.y<.05){const n=this.world.solids.find(i=>i.furn?.kind==="rack"&&i.enabled);if(n){const i={x:Math.min(Math.max(e.pos.x,n.rect.x0),n.rect.x1),z:Math.min(Math.max(e.pos.z,n.rect.z0),n.rect.z1)};if(Math.hypot(i.x-e.pos.x,i.z-e.pos.z)<bt+.05){this.cd.rack=15,this.takeOver("groomLoop",3.4,"groom","头上有东西 → 舔毛循环","while (头上有东西) { 扒(); 舔毛(); 忘了(); }"),this.headCloth=YM(),e.rig.hatSlot.add(this.headCloth),this.audio.paper(),this.emit({t:"instinct",kind:"groomLoop"});return}}}if(t&&this.cd.bowl<=0&&e.pos.y<.05){const n=this.props.find(i=>i.def.kind==="catbowl"&&i.active);if(n&&Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<.4){this.cd.bowl=20,e.yaw=Math.atan2(n.pos.x-e.pos.x,n.pos.z-e.pos.z),this.takeOver("bowlEat",1.5,"eat","路过猫碗 → 先吃两口","if (路过猫碗) 吃(); // 忘了在跑",n),this.emit({t:"instinct",kind:"bowl"});return}}if(this.cd.finger<=0){const n=this.humans.find(i=>i.mode==="reach"&&i.modeT>.6&&Math.hypot(i.pos.x-e.pos.x,i.pos.z-e.pos.z)<1.6);if(n){this.cd.finger=8,e.yaw=Math.atan2(n.pos.x-e.pos.x,n.pos.z-e.pos.z),this.takeOver("swipe",.6,"swat","一根手指 → 攻击","if (手指数 == 1) 攻击(); else 死机();"),this.swipeAt=n,this.emit({t:"instinct",kind:"finger"});return}}!t&&this.idleT>9&&this.cd.tail<=0&&(this.cd.tail=45,this.idleT=0,this.takeOver("tailSpin",2.4,"spin","发现一条尾巴 → 追","while (尾巴在动) 追();"),this.emit({t:"instinct",kind:"tail"}))}headCloth=null;swipeAt=null;sfxN=0;sfx(e,t,n=!1){const i=`sfx${this.sfxN++%5}`;this.bubbles.say(i,()=>t,e,{ms:n?700:1e3,sfx:n?"small":!0})}startleHop(e,t){const n=this.cat;this.cd.startle=6,this.cancelAction();const i=n.pos.x-e,r=n.pos.z-t,o=Math.hypot(i,r)||1;let a=n.pos.x+i/o*.45,c=n.pos.z+r/o*.45;(!this.world.onFloor(a,c)||this.world.supportAt(a,c).h>.05)&&(a=n.pos.x,c=n.pos.z);const l=n.yaw;n.startJump(new R(a,0,c),void 0,.55),n.yaw=l,n.alert=1,this.audio.hiss(),this.fx.ring(n.pos.clone(),"#ffd23f"),this.bubbles.say("cat",()=>n.obj.position.clone().add(new R(0,.62,0)),"！！",{ms:900,cat:!0}),this.hooks.instinct?.("背后有东西 → 原地弹射","if (背后突然有东西) 弹射();"),this.emit({t:"instinct",kind:"startle"})}get haaReady(){if(this.haaCooldown>0)return!1;const e=this.cat;return e.mode!=="free"&&e.mode!=="act"&&e.mode!=="jump"?!1:this.haaCount>0?!0:this.humans.some(t=>(t.mode==="chase"||t.mode==="reach")&&Math.hypot(t.pos.x-e.pos.x,t.pos.z-e.pos.z)<2.2)}update(e,t){if(this.paused||this.over)return;this.time+=e,this.holdClock||(this.hour+=e/lb),this.meowCd=Math.max(0,this.meowCd-e),this.mashCd=Math.max(0,this.mashCd-e),this.haaCooldown=Math.max(0,this.haaCooldown-e),this.haaWindow-=e,this.haaWindow<=0&&(this.haaCount=0);const n=this.cat;this.doing&&!this.doing.forced&&t.mag>.4&&this.doing.kind!=="meow"&&this.doing.t>.2&&this.cancelAction();for(const o of Object.keys(this.cd))this.cd[o]=Math.max(0,this.cd[o]-e);if(n.boost=Math.max(0,n.boost-e),n.boost>0&&n.moving&&Math.random()<e*14&&this.fx.puff(n.pos.clone(),1),this.idleT=n.mode==="free"&&t.mag<.05&&!n.carrying?this.idleT+e:0,n.mode==="free")n.move(e,t.x,t.z,t.mag,this.world,this.props);else if(n.mode==="jump"){if(n.stepJump(e,this.world)){const o=n.support?.furn;o&&this.emit({t:"reach",furn:o.id});for(const a of this.props){if(!a.active||a.state!=="rest"||!a.movable||a.h<.06||Math.abs(a.pos.y-n.pos.y)>.15)continue;const c=a.pos.x-n.pos.x,l=a.pos.z-n.pos.z,h=Math.hypot(c,l),u=bt+a.r*.8;if(h>u)continue;const d=h>.001?Math.atan2(c,l):n.yaw,f=n.pos.x+Math.sin(d)*u,p=n.pos.z+Math.cos(d)*u;Math.abs(this.world.restAt(f,p,a.pos.y+.02)-a.pos.y)<.02&&a.placeAt(f,a.pos.y,p)}}}else if(n.mode==="act")this.stepDoing(e);else if(n.mode==="carried"){const o=this.humans.find(a=>a.carryingCat);if(o){const a=new R;o.rig.hold.getWorldPosition(a),n.pos.set(a.x,a.y-.28,a.z),n.yaw=o.yaw+Math.PI/2}}n.mode!=="act"&&this.doing&&(this.doing=null);const i=this.humans.some(o=>o.mode==="chase"||o.mode==="reach"||o.mode==="search"||o.suspicion>.5);n.alert+=((i||n.mode==="carried"?1:0)-n.alert)*Math.min(1,e*5);for(const o of this.humans){const a=o.mode==="chase";a&&!this.chasing.has(o.id)&&(this.emit({t:"spotted",npc:o.id}),this.doing?.kind==="groomLoop"&&this.conflict("groomChase",o)),a?this.chasing.add(o.id):this.chasing.delete(o.id)}if(n.mode==="free"&&this.instincts(),this.boxCd=Math.max(0,this.boxCd-e),n.mode==="free"&&!n.carrying&&this.boxCd<=0&&n.pos.y<.05)for(const o of this.world.solids){if(o.furn?.hide!=="inside"||!o.enabled)continue;const a={x:Math.min(Math.max(n.pos.x,o.rect.x0),o.rect.x1),z:Math.min(Math.max(n.pos.z,o.rect.z0),o.rect.z1)};if(!(Math.hypot(a.x-n.pos.x,a.z-n.pos.z)>bt+.12)){this.hooks.instinct?.("检测到纸箱 → 必钻","if (看见纸箱) 钻();"),this.hide(o);break}}if(n.mode==="free"&&n.moving)for(const o of this.props)o.def.knead&&Math.abs(o.pos.y-n.pos.y)<.15&&Math.hypot(o.pos.x-n.pos.x,o.pos.z-n.pos.z)<o.r&&this.mash(o);this.stepRobot(e),this.stepDoors(e);for(const o of this.humans)o.update(e,this);if(n.mode==="free"&&n.pos.y<.1)for(const o of this.humans){if(o.carryingCat||o.mode==="pet")continue;const a=n.pos.x-o.pos.x,c=n.pos.z-o.pos.z,l=Math.hypot(a,c);if(l>.34||l<1e-4)continue;const h=o.pos.x+a/l*.34,u=o.pos.z+c/l*.34;this.world.onFloor(h,u)&&this.world.supportAt(h,u).h<.05&&n.place(h,n.pos.y,u)}if(this.stepProps(e),this.stepCollect(),n.carrying){const o=new R;n.rig.mouthSlot.getWorldPosition(o),n.carrying.pos.copy(o).add(new R(0,-.04,0)),n.carrying.obj.rotation.y=n.yaw+Math.PI/2,n.carrying.sync()}n.animate(e);const r=this.world.restAt(n.pos.x,n.pos.z,n.pos.y+.01);n.shadow.position.set(n.pos.x,r+.012,n.pos.z),n.shadow.visible=n.obj.visible&&n.pos.y-r>.05,this.action=this.findAction(),this.fx.mark(n.mode==="free"&&this.action.at?this.action.at:null,e);for(const o of this.props){if(!o.def.appear||!o.active)continue;const a=this.hour>=o.def.appear[0]&&this.hour<o.def.appear[1];o.obj.visible!==a&&o.state==="rest"&&(o.obj.visible=a)}this.updateStatus(),this.cleared?(this.clearT+=e,n.mode==="hidden"&&this.unhide(!1),this.danceAt<0&&this.clearT>.6&&(n.mode==="free"||n.mode==="act")&&(this.danceAt=this.clearT,this.cancelAction(),n.mode="act",this.doing={kind:"mambo",t:0,dur:4,fired:!0,noiseT:0},n.setPose("mambo"),this.audio.mambo(),this.bubbles.say("cat",()=>n.obj.position.clone().add(new R(0,.7,0)),"曼波～曼波～",{ms:3e3,cat:!0})),this.danceAt>=0&&this.clearT-this.danceAt>3.8&&this.endDay()):this.hour>=this.map.day[1]&&this.endDay(),this.stage.cutaway(n.pos,e,this.humans.filter(o=>!o.carryingCat).map(o=>o.obj)),this.stage.follow(n.pos.x,n.pos.y,n.pos.z,n.vel.x,n.vel.y,e),this.fx.update(e,this.stage.camera)}updateStatus(){let e=null;const t=this.cat;if(t.mode==="carried")e=`被抱走了！连点「挣扎」 ${this.struggle}/7`;else if(t.mode==="hidden")e=t.hiddenIn?.furn?.hide==="under"?"躲在床底下……":"躲在箱子里……";else for(const[,n]of this.doors)!n.open&&n.lockedFor>0&&this.world.map.rooms.find(i=>i.id==="balcony"&&Bn(i.rect,t.pos.x,t.pos.z))&&(e=`被关在阳台了…… 扒门 ${Math.ceil(n.lockedFor)}`);e!==this.lastStatus&&(this.lastStatus=e,this.hooks.status(e))}stepDoors(e){for(const[t,n]of this.doors){if(!n.open&&n.lockedFor>0&&(n.lockedFor-=e,n.lockedFor<=0)){n.open=!0,this.syncDoors(),this.audio.door();const r=this.world.byId.get(t);this.sfx("哗啦",new R((r.rect.x0+r.rect.x1)/2,1.2,(r.rect.z0+r.rect.z1)/2),!0);const o=Mi(r.rect);this.bubbles.say("door",()=>new R(o.x,1.4,o.z),"哈基米自己扒开了门",{ms:1800})}const i=n.open?1:0;n.anim!==i&&(n.anim+=Math.sign(i-n.anim)*Math.min(Math.abs(i-n.anim),e*3),this.stage.setDoor(t,n.anim))}}placeRobot(e,t){const n=this.robot,i=n.prop.r*.9;n.solid.rect={x0:e-i,x1:e+i,z0:t-i,z1:t+i},n.prop.pos.set(e,0,t),n.prop.sync()}stepRobot(e){const t=this.robot,n=this.map.robot;if(!t||!n)return;const i=n.runs.some(([g,_])=>this.hour>=g&&this.hour<_),r=t.seg===0&&t.t===0;if(!i&&r)return;const o=n.path,a=o[t.seg],c=o[(t.seg+1)%o.length],l=Math.hypot(c[0]-a[0],c[1]-a[1]);t.t+=n.speed*e/l,t.t>=1&&(t.t=0,t.seg=(t.seg+1)%o.length);const h=o[t.seg],u=o[(t.seg+1)%o.length],d=h[0]+(u[0]-h[0])*t.t,f=h[1]+(u[1]-h[1])*t.t,p=t.prop.pos.x,x=t.prop.pos.z;this.placeRobot(d,f),t.prop.obj.rotation.y=Math.atan2(u[0]-h[0],u[1]-h[1]);const m=this.cat;if(m.mode==="free"&&m.support!==t.solid&&m.pos.y<.05&&this.cd.startle<=0){const g=d-m.pos.x,_=f-m.pos.z,E=Math.hypot(g,_),y=m.forward;E<bt+t.prop.r+.06&&(g*y.x+_*y.y)/(E||1)<-.2&&this.startleHop(d,f)}m.support===t.solid&&(m.mode==="free"||m.mode==="act")&&(m.pos.x+=d-p,m.pos.z+=f-x,m.pos.y<.12&&(m.pos.y=t.solid.top),this.rideSecs+=e,this.rideSecs-this.rideReported>=1&&(this.rideReported=Math.floor(this.rideSecs),this.emit({t:"ride",secs:this.rideReported}),this.rideReported===1&&this.bubbles.say("cat",()=>m.obj.position.clone().add(new R(0,.62,0)),"冲鸭！",{ms:900,cat:!0})))}stepProps(e){for(const t of this.props){if(t.state==="carried"||t.state==="held"||t.state==="stored"||!t.active)continue;const n=t.step(e,this.world);if(n)if(n.ev==="fell"){this.emit({t:"fell",prop:t.id,kind:t.def.kind,from:t.pos.y});for(const i of this.humans)i.witness(this,t.pos.x,t.pos.y,t.pos.z)}else n.ev==="broke"?this.shatter(t):n.ev==="landed"&&n.drop>.3&&(this.audio.thud(),this.sfx("咚！",t.pos.clone().add(new R(0,.25,0)),!0),this.fx.puff(t.pos.clone(),2),this.noise(t.pos.x,t.pos.z,3.5,!1))}}shatter(e){e.obj.visible=!1;const t=e.pos.clone(),n=KM(e.def);this.fx.shards(t,n,e.def.kind==="vase"?22:14),e.def.kind==="plant"&&this.fx.puff(t,6,"#8a6a52");const i=new Be;for(let r=0;r<7;r++){const o=new rt(new Bo(.03+Math.random()*.02),Lt(n));o.position.set((Math.random()-.5)*.3,.01,(Math.random()-.5)*.3),o.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),i.add(o)}if(e.def.kind==="plant"){const r=new rt(new Oo(.18,12),Lt("#6b4a3a"));r.rotation.x=-Math.PI/2,r.position.y=.006;const o=new rt(new Ci(.07,8,6),Lt("#6f9a6a"));o.scale.set(1,.4,.7),o.position.set(.1,.03,.05),i.add(r,o)}i.position.copy(t),this.stage.level.add(i),e.debris=i,this.audio.shatter(e.def.kind),this.sfx(["glass","vase","frame"].includes(e.def.kind)?"啪嚓！":"哐当！",t.clone().add(new R(0,.35,0))),this.addDamage(e.def.name,e.def.value??0),this.noise(t.x,t.z,8,!0);for(const r of this.humans)r.witness(this,t.x,t.y,t.z);this.emit({t:"break",prop:e.id,kind:e.def.kind})}stepCollect(){const e=this.cat;if(!(e.mode==="hidden"||e.mode==="carried"))for(const t of this.props)!t.def.collect||t.collected||t.state==="stored"||(t.model.rotation.y+=.03,t.model.position.y=.06+Math.sin(this.time*3+t.pos.x)*.03,Math.hypot(t.pos.x-e.pos.x,t.pos.z-e.pos.z)<.32&&Math.abs(t.pos.y-e.pos.y)<.4&&this.collect(t))}collect(e){e.collected=!0,e.obj.visible=!1,this.progress.collected.add(e.id),this.fx.sparkle(e.pos.clone().add(new R(0,.15,0))),this.audio.treat(),e.def.collect==="treat"&&(this.treatsToday++,this.fishToday++),this.hooks.collected(e),this.emit({t:"collect",prop:e.id})}endDay(){if(this.over)return;this.over=!0,this.cancelAction();const e=this.damage.reduce((t,n)=>t+n.value,0);this.hooks.dayOver({map:this.map,damage:this.damage,total:e,tasks:this.todayTasks,fish:this.fishToday,treats:this.treatsToday,caught:this.caught,cleared:this.cleared})}dispose(){this.fx.clear(),this.stage.clear(),this.bubbles.clear()}get reachable(){return this.cat.pos.y<=mo}}const db="#d9d4ca",qs={id:"hallway",name:"楼道",subtitle:"第二章 · 邻居们",blurb:"门缝开了一条。楼道里有快递、拖鞋，还有隔壁阿姨。",wip:!0,bounds:{x0:-.2,z0:-.2,x1:7.2,z1:14.2},outside:"#c9cfc0",day:[8,18],start:{x:2,z:9.2},rooms:[{id:"lobby",name:"电梯厅",rect:{x0:0,z0:0,x1:7,z1:3.2},floor:"tile",floorColor:"#e3ddd0",wallColor:"#e9e2d3"},{id:"corridor",name:"走廊",rect:{x0:1.4,z0:3.2,x1:5,z1:14},floor:"tile",floorColor:db,wallColor:"#efe7d6"},{id:"stairs",name:"楼梯间",rect:{x0:5,z0:10.6,x1:7,z1:14},floor:"concrete",floorColor:"#cfc8bb",wallColor:"#e2dccd"}],walls:[{a:[0,0],b:[7,0]},{a:[0,0],b:[0,3.2]},{a:[7,0],b:[7,14]},{a:[0,3.2],b:[1.4,3.2]},{a:[5,3.2],b:[7,3.2]},{a:[1.4,3.2],b:[1.4,14]},{a:[5,3.2],b:[5,10.6]},{a:[1.4,14],b:[7,14]},{a:[5,10.6],b:[7,10.6],h:1,kind:"railing"}],furniture:[{id:"elevatorL",kind:"block",name:"电梯门",rect:{x0:1.6,z0:.06,x1:2.8,z1:.14},h:2.1,decor:!0,color:"#b8bdbb"},{id:"elevatorR",kind:"block",name:"电梯门",rect:{x0:4.2,z0:.06,x1:5.4,z1:.14},h:2.1,decor:!0,color:"#b8bdbb"},{id:"bench",kind:"block",name:"长凳",rect:{x0:.2,z0:1,x1:.65,z1:2.6},h:.45,color:"#c49a6c"},{id:"bins",kind:"block",name:"垃圾桶",rect:{x0:6.2,z0:.3,x1:6.85,z1:1.4},h:.9,color:"#7f9fb6"},{id:"hydrant",kind:"block",name:"消防栓箱",rect:{x0:4.7,z0:4.2,x1:4.95,z1:5.2},h:1.1,color:"#e8553d"},{id:"shoeRackA",kind:"shoeCabinet",name:"张阿姨的鞋柜",rect:{x0:4.45,z0:6.6,x1:4.95,z1:7.8},h:.9,face:"w",color:"#d7b48b"},{id:"matA",kind:"rug",name:"门垫",rect:{x0:4.2,z0:8,x1:4.95,z1:9},h:.01,walkThrough:!0,color:"#c7a37a"},{id:"matHome",kind:"rug",name:"门垫",rect:{x0:1.45,z0:8.7,x1:2.2,z1:9.7},h:.01,walkThrough:!0,color:"#8f7a64"},{id:"parcels",kind:"box",name:"快递堆",rect:{x0:1.5,z0:4,x1:2.2,z1:4.7},h:.45,color:"#c99a5e",hide:"inside"},{id:"parcelTall",kind:"block",name:"大箱子",rect:{x0:1.5,z0:4.75,x1:2.1,z1:5.3},h:.7,color:"#b98a50"},{id:"plantA",kind:"floorPlant",name:"发财树",rect:{x0:4.4,z0:10,x1:4.95,z1:10.55},h:1.3,noClimb:!0,color:"#6f9a6a"},{id:"umbrella",kind:"basket",name:"伞桶",rect:{x0:1.5,z0:11,x1:1.9,z1:11.4},h:.6,color:"#7f9fb6"},{id:"scratchBox",kind:"block",name:"旧纸箱",rect:{x0:1.5,z0:12.4,x1:2.2,z1:13.1},h:.5,color:"#c99a5e",scratch:!0}],props:[{id:"slipper",kind:"shoe",name:"张阿姨的拖鞋",x:4.2,z:8.3,carry:!0,owned:!0},{id:"takeout",kind:"fish",name:"门口的外卖",x:4.7,z:7,edible:!0,fixed:!0,value:36},{id:"parcelSmall",kind:"parcel",name:"小快递",x:1.8,z:5,value:0,owned:!0},{id:"potA",kind:"plant",name:"小盆栽",x:4.7,z:7.5,value:35,breakable:!0,owned:!0},{id:"th1",kind:"treat",name:"小鱼干",x:.42,z:1.8,collect:"treat"},{id:"th2",kind:"treat",name:"小鱼干",x:6.5,z:.8,collect:"treat"},{id:"th3",kind:"treat",name:"小鱼干",x:5.8,z:12.2,collect:"treat"},{id:"th4",kind:"treat",name:"小鱼干",x:6.4,z:13.4,collect:"treat"},{id:"hat2",kind:"hat",name:"快递员帽",x:4.8,z:4.7,collect:"hat",hatId:"cap"}],stations:[{id:"auntDoor",x:4,z:8.5,face:"e",act:"phone"},{id:"auntSweep",x:3.2,z:6,face:"n",act:"sweep"},{id:"auntLobby",x:3.4,z:1.6,face:"n",act:"chat"},{id:"courierLift",x:4.8,z:1.2,face:"n",act:"idle"},{id:"courierDrop",x:2.6,z:4.5,face:"w",act:"idle"}],npcs:[{id:"aunt",name:"张阿姨",stranger:!0,look:{skin:"#efc6a0",hair:"#5a4a42",hairStyle:"curly",top:"#c9718a",bottom:"#5b5f73",height:1.52,apron:"#e9dcc6"},schedule:[{from:8,to:9.5,station:"auntSweep",say:"扫扫楼道"},{from:9.5,to:12,station:"auntDoor",say:"喂？老王啊——"},{from:12,to:13,station:"auntLobby",say:"吃了吗您？"},{from:13,to:15.5,station:"auntDoor"},{from:15.5,to:18,station:"auntSweep"}],catDrop:{x:1.9,z:9.2},lines:{caught:["小林家的猫又跑出来了！","回家去！"],chase:["哎哟！哪来的猫！","别跑！"]}},{id:"courier",name:"快递小哥",stranger:!0,look:{skin:"#e8bd94",hair:"#2b2522",hairStyle:"cap",top:"#e9b44c",bottom:"#4d5566",height:1.7},schedule:[{from:8,to:10,station:"courierLift"},{from:10,to:11,station:"courierDrop",say:"快递放门口了啊！"},{from:11,to:14,station:"courierLift"},{from:14,to:15,station:"courierDrop"},{from:15,to:18,station:"courierLift"}],catDrop:{x:1.9,z:9.2}}],tasks:[{id:"h_parcel",kind:"main",reward:1,text:"把小快递推下大箱子",test:s=>s.t==="fell"&&s.prop==="parcelSmall"},{id:"h_hide",kind:"main",reward:1,text:"钻进快递堆",test:s=>s.t==="hide"&&s.furn==="parcels"},{id:"h_slipper",kind:"main",reward:1,text:"把张阿姨的拖鞋藏进快递堆",test:s=>s.t==="deliver"&&s.prop==="slipper"&&s.into==="parcels"},{id:"h_takeout",kind:"main",reward:1,text:"偷吃门口的外卖",hint:"张阿姨打电话的时候最专心",test:s=>s.t==="eat"&&s.prop==="takeout"},{id:"h_scratch",kind:"main",reward:1,text:"在旧纸箱上磨爪子",test:s=>s.t==="scratch"&&s.furn==="scratchBox"},{id:"h_pot",kind:"main",reward:1,text:"打翻鞋柜上的小盆栽",test:s=>s.t==="break"&&s.prop==="potA"},{id:"h_haa",kind:"hidden",reward:2,text:"吓退快递小哥",hint:"他追你的时候，哈他",test:s=>s.t==="haa"&&s.npc==="courier"},{id:"h_grateful",kind:"hidden",reward:2,text:"基米报恩",hint:"张阿姨想摸你的时候……",test:s=>s.t==="grateful"}]},zu="#eaa65e",fb="#f3c486",$s={id:"home",name:"小林的家",subtitle:"第一章 · 在家办公的铲屎官",blurb:"主人今天在家办公。很好，一整天的时间。",bounds:{x0:-2.6,z0:-.2,x1:9.2,z1:13.2},outside:"#fff8e8",day:[8,18],start:{x:2,z:3.2},rooms:[{id:"bedroom",name:"卧室",rect:{x0:0,z0:0,x1:5,z1:4.5},floor:"wood",floorColor:fb,wallColor:"#6cc3ea"},{id:"bath",name:"卫生间",rect:{x0:5,z0:0,x1:9,z1:4.5},floor:"tile",floorColor:"#ffffff",wallColor:"#79deb4"},{id:"living",name:"客厅",rect:{x0:0,z0:4.5,x1:9,z1:9},floor:"wood",floorColor:zu,wallColor:"#ffd65a"},{id:"kitchen",name:"厨房",rect:{x0:0,z0:9,x1:4.2,z1:13},floor:"tile",floorColor:"#fff4d8",wallColor:"#ff9d78"},{id:"dining",name:"餐厅",rect:{x0:4.2,z0:9,x1:9,z1:13},floor:"wood",floorColor:zu,wallColor:"#ffd65a"},{id:"balcony",name:"阳台",rect:{x0:-2.4,z0:5,x1:0,z1:8.6},floor:"balcony",floorColor:"#d6d2c8",wallColor:"#c4c0b8"}],walls:[{a:[0,0],b:[9,0]},{a:[9,0],b:[9,13]},{a:[0,13],b:[9,13]},{a:[0,0],b:[0,5]},{a:[0,5],b:[0,5.9]},{a:[0,7.6],b:[0,8.6]},{a:[0,8.6],b:[0,13]},{a:[-2.4,5],b:[0,5]},{a:[-2.4,8.6],b:[0,8.6]},{a:[-2.4,5],b:[-2.4,8.6],h:1.05,kind:"railing"},{a:[0,4.5],b:[1.6,4.5]},{a:[2.6,4.5],b:[6,4.5]},{a:[6.9,4.5],b:[9,4.5]},{a:[5,0],b:[5,4.5]},{a:[0,9],b:[2.4,9]},{a:[3.4,9],b:[4.2,9]},{a:[4.2,9],b:[4.2,10.2]},{a:[4.2,11.2],b:[4.2,13]}],furniture:[{id:"bed",kind:"bed",name:"床",rect:{x0:.3,z0:.2,x1:2.3,z1:2.45},h:.5,face:"s",color:"#ffffff",color2:"#3f7be0",hide:"under"},{id:"nightstand",kind:"nightstand",name:"床头柜",rect:{x0:2.4,z0:.2,x1:2.92,z1:.68},h:.55,color:"#c8874a"},{id:"dresser",kind:"dresser",name:"五斗柜",rect:{x0:2.95,z0:.15,x1:3.55,z1:.65},h:.9,color:"#f2c14e"},{id:"wardrobe",kind:"wardrobe",name:"衣柜",rect:{x0:3.6,z0:.12,x1:4.88,z1:.8},h:2,color:"#b5713a",needs:"highJump"},{id:"basket",kind:"basket",name:"脏衣篮",rect:{x0:4.2,z0:3.55,x1:4.75,z1:4.15},h:.42,color:"#e8c07a"},{id:"rugBed",kind:"rug",name:"地毯",rect:{x0:.8,z0:2.75,x1:3.3,z1:3.95},h:.01,walkThrough:!0,color:"#ff7aa2"},{id:"toilet",kind:"toilet",name:"马桶",rect:{x0:5.25,z0:.18,x1:5.85,z1:.95},h:.45,face:"s",color:"#f7f7f4"},{id:"sink",kind:"sink",name:"洗手台",rect:{x0:6.45,z0:.12,x1:7.55,z1:.68},h:.85,color:"#3fa7d6",color2:"#ffffff"},{id:"mirror",kind:"mirror",name:"镜子",rect:{x0:6.55,z0:.07,x1:7.45,z1:.1},h:1.9,base:1.1,decor:!0},{id:"washer",kind:"washer",name:"洗衣机",rect:{x0:8.1,z0:.12,x1:8.88,z1:.9},h:.85,color:"#f2f2ee"},{id:"litter",kind:"litter",name:"猫砂盆",rect:{x0:5.2,z0:3.5,x1:5.85,z1:4.15},h:.18,color:"#a9c8a0",bury:!0},{id:"tub",kind:"tub",name:"浴缸",rect:{x0:7.25,z0:2.6,x1:8.88,z1:4.38},h:.55,color:"#f7f7f4"},{id:"tvStand",kind:"tvStand",name:"电视柜",rect:{x0:2.9,z0:4.62,x1:5.1,z1:5.12},h:.5,color:"#c8874a"},{id:"tv",kind:"tv",name:"电视",rect:{x0:3.35,z0:4.68,x1:4.65,z1:4.84},h:1.3,base:.5,noClimb:!0,color:"#26262e"},{id:"sofa",kind:"sofa",name:"沙发",rect:{x0:2.8,z0:7.5,x1:5.2,z1:8.32},h:.45,face:"n",color:"#e2453c",scratch:!0},{id:"sofaBack",kind:"sofaBack",name:"沙发靠背",rect:{x0:2.8,z0:8.32,x1:5.2,z1:8.62},h:.85,color:"#e2453c",scratch:!0},{id:"coffeeTable",kind:"coffeeTable",name:"茶几",rect:{x0:3.4,z0:6.2,x1:4.6,z1:6.85},h:.4,color:"#f2c14e"},{id:"rugLiving",kind:"rug",name:"地毯",rect:{x0:2.6,z0:5.55,x1:5.4,z1:7.35},h:.01,walkThrough:!0,color:"#4fc07d"},{id:"desk",kind:"desk",name:"书桌",rect:{x0:6.9,z0:4.62,x1:8.3,z1:5.32},h:.75,color:"#f7e0b0",forbidden:!0},{id:"deskChair",kind:"chair",name:"椅子",rect:{x0:7.35,z0:5.5,x1:7.9,z1:6.05},h:.48,face:"n",color:"#2f3a8f"},{id:"bookshelf",kind:"bookshelf",name:"书架",rect:{x0:8.35,z0:4.62,x1:8.88,z1:6.4},h:1.6,face:"w",color:"#b5713a"},{id:"catTree0",kind:"catTree",name:"猫爬架",rect:{x0:.6,z0:7,x1:1.5,z1:7.9},h:.5,color:"#e9dcc6",color2:"#c99a5e"},{id:"catTree1",kind:"catTree",name:"猫爬架",rect:{x0:.2,z0:7.2,x1:.85,z1:7.9},h:1,color:"#e9dcc6",color2:"#c99a5e"},{id:"catTree2",kind:"catTree",name:"猫爬架",rect:{x0:.6,z0:7.85,x1:1.25,z1:8.5},h:1.5,color:"#e9dcc6",color2:"#c99a5e"},{id:"floorPlant",kind:"floorPlant",name:"龟背竹",rect:{x0:5.9,z0:8.3,x1:6.5,z1:8.88},h:1.3,noClimb:!0,color:"#3fae5f"},{id:"dock",kind:"dock",name:"扫地机器人底座",rect:{x0:2,z0:8.65,x1:2.4,z1:8.88},h:.15,noClimb:!0,color:"#e8e8e4"},{id:"slidingDoor",kind:"slidingDoor",name:"推拉门",rect:{x0:-.06,z0:5.9,x1:.06,z1:7.6},h:2.3,noClimb:!0},{id:"plantShelf",kind:"plantShelf",name:"花架",rect:{x0:-2.3,z0:5.3,x1:-1.92,z1:8.3},h:.8,color:"#c8874a"},{id:"rack",kind:"rack",name:"晾衣架",rect:{x0:-1.25,z0:5.25,x1:-.35,z1:5.7},h:1.6,noClimb:!0,color:"#d0d4d8"},{id:"counter",kind:"counter",name:"橱柜台面",rect:{x0:.1,z0:9.12,x1:.75,z1:12},h:.9,face:"e",color:"#3f7be0",color2:"#ffffff",forbidden:!0},{id:"stove",kind:"stove",name:"灶台",rect:{x0:.12,z0:9.9,x1:.73,z1:10.6},h:.91,decor:!0,color:"#3a3b40"},{id:"fridge",kind:"fridge",name:"冰箱",rect:{x0:.1,z0:12.05,x1:.85,z1:12.88},h:1.85,face:"e",color:"#e9ecea",forbidden:!0},{id:"counter2",kind:"counter",name:"橱柜台面",rect:{x0:.9,z0:12.3,x1:2.6,z1:12.88},h:.9,face:"n",color:"#3f7be0",color2:"#ffffff",forbidden:!0},{id:"diningTable",kind:"diningTable",name:"餐桌",rect:{x0:5.8,z0:10,x1:7.8,z1:11.25},h:.75,color:"#c8874a",forbidden:!0},{id:"chairN1",kind:"chair",name:"椅子",rect:{x0:6,z0:9.35,x1:6.5,z1:9.85},h:.46,face:"s",color:"#3f7be0"},{id:"chairN2",kind:"chair",name:"椅子",rect:{x0:7.1,z0:9.35,x1:7.6,z1:9.85},h:.46,face:"s",color:"#3f7be0"},{id:"chairS1",kind:"chair",name:"椅子",rect:{x0:6,z0:11.4,x1:6.5,z1:11.9},h:.46,face:"n",color:"#3f7be0"},{id:"chairS2",kind:"chair",name:"椅子",rect:{x0:7.1,z0:11.4,x1:7.6,z1:11.9},h:.46,face:"n",color:"#3f7be0"},{id:"shoeCabinet",kind:"shoeCabinet",name:"鞋柜",rect:{x0:8.3,z0:11.4,x1:8.88,z1:12.88},h:1,color:"#f2c14e"},{id:"box",kind:"box",name:"快递箱",rect:{x0:4.32,z0:12.15,x1:4.97,z1:12.8},h:.42,color:"#d99a52",hide:"inside"},{id:"doormat",kind:"rug",name:"门垫",rect:{x0:6.9,z0:12.35,x1:7.9,z1:12.85},h:.01,walkThrough:!0,color:"#7a5a42"}],props:[{id:"glass",kind:"glass",name:"床头水杯",x:2.66,z:.45,value:15,breakable:!0,owned:!0},{id:"frame",kind:"frame",name:"相框",x:3.12,z:.36,value:45,breakable:!0,owned:!0},{id:"clock",kind:"clock",name:"闹钟",x:3.4,z:.42,value:29,owned:!0},{id:"sock",kind:"sock",name:"臭袜子",x:4.48,z:3.85,carry:!0,owned:!0},{id:"tp",kind:"tp",name:"卫生纸",x:6.05,z:.35,y:.62,fixed:!0,pull:4,value:12},{id:"mug",kind:"mug",name:"马克杯",x:3.75,z:6.45,value:39,breakable:!0,owned:!0},{id:"remote",kind:"remote",name:"遥控器",x:4.25,z:6.6,rot:.5,carry:!0,owned:!0},{id:"laptop",kind:"laptop",name:"笔记本电脑",x:7.6,z:4.95,fixed:!0,knead:!0},{id:"deskMug",kind:"mug",name:"咖啡杯",x:8.05,z:5.05,value:39,breakable:!0,owned:!0,color:"#e7a59a"},{id:"vase",kind:"vase",name:"花瓶",x:4.85,z:4.85,value:299,breakable:!0,owned:!0},{id:"pothos",kind:"plant",name:"绿萝",x:-2.11,z:6.3,value:58,breakable:!0,owned:!0},{id:"succulent",kind:"succulent",name:"多肉",x:-2.11,z:7.5,value:25,breakable:!0,owned:!0},{id:"fish",kind:"fish",name:"小黄鱼",x:.42,z:11.3,edible:!0,value:28,fixed:!0},{id:"pan",kind:"pan",name:"平底锅",x:.42,z:10.25,fixed:!0},{id:"bowl",kind:"bowl",name:"饭碗",x:6.4,z:10.6,value:25,breakable:!0,owned:!0},{id:"diningMug",kind:"mug",name:"茶杯",x:7.3,z:10.45,value:39,breakable:!0,owned:!0,color:"#9fbfb5"},{id:"keys",kind:"keys",name:"钥匙",x:8.55,z:11.8,carry:!0,owned:!0},{id:"yogurt",kind:"yogurt",name:"酸奶",x:.5,z:12.45,y:1.2,fixed:!0,inside:"fridge",edible:!0,value:8},{id:"laundry",kind:"laundry",name:"叠好的衣服",x:1.3,z:1.75,sleep:!0,fixed:!0,appear:[15.3,24]},{id:"robot",kind:"robot",name:"扫地机器人",x:2.2,z:8.3},{id:"catbowl",kind:"catbowl",name:"猫碗",x:3.3,z:9.45,fixed:!0},{id:"cap",kind:"cap",name:"瓶盖",x:5.1,z:10.7},{id:"t1",kind:"treat",name:"小鱼干",x:.48,z:12.45,collect:"treat"},{id:"t2",kind:"treat",name:"小鱼干",x:4.2,z:.45,collect:"treat"},{id:"t3",kind:"treat",name:"小鱼干",x:8.55,z:4.05,collect:"treat"},{id:"t4",kind:"treat",name:"小鱼干",x:8.5,z:.5,collect:"treat"},{id:"t5",kind:"treat",name:"小鱼干",x:8.62,z:5,collect:"treat"},{id:"t6",kind:"treat",name:"小鱼干",x:1.3,z:1.3,collect:"treat",inside:"bed"},{id:"t7",kind:"treat",name:"小鱼干",x:.92,z:8.17,collect:"treat"},{id:"t8",kind:"treat",name:"小鱼干",x:-.6,z:5.95,collect:"treat"},{id:"hat1",kind:"hat",name:"毛线帽",x:8.6,z:12.4,collect:"hat",hatId:"beanie"}],stations:[{id:"bed",x:1.25,z:1.25,face:"s",act:"sleep",y:.5,lie:"z"},{id:"sink",x:7,z:1.1,face:"n",act:"wash"},{id:"stove",x:1.2,z:10.3,face:"w",act:"cook"},{id:"dining",x:6.75,z:11.65,face:"n",act:"eat"},{id:"desk",x:7.62,z:5.85,face:"n",act:"type"},{id:"door",x:7.4,z:12.55,face:"s",act:"door"},{id:"sofa",x:4,z:7.9,face:"n",act:"nap",y:.45,lie:"x"},{id:"balcony",x:-1.55,z:6.4,face:"w",act:"water"},{id:"fold",x:1.3,z:2.85,face:"n",act:"fold"}],npcs:[{id:"owner",name:"小林",look:{skin:"#ffcfa8",hair:"#2a1e1a",hairStyle:"short",top:"#1fb5a7",bottom:"#2b2f4a",height:1.62,glasses:!0},schedule:[{from:8,to:8.7,station:"bed"},{from:8.7,to:9.2,station:"sink",say:"刷牙洗脸……"},{from:9.2,to:10,station:"stove",say:"煎个蛋"},{from:10,to:10.5,station:"dining",say:"开饭！"},{from:10.5,to:12.5,station:"desk",say:"上班了上班了"},{from:12.5,to:12.75,station:"door",say:"外卖到了！"},{from:12.75,to:13.25,station:"dining"},{from:13.25,to:14.5,station:"sofa",say:"眯一会儿……"},{from:14.5,to:15.3,station:"balcony",say:"浇浇花"},{from:15.3,to:16.3,station:"fold",say:"叠衣服咯"},{from:16.3,to:18,station:"desk",say:"下午还有个会"}],catDrop:{x:-1,z:7.4,door:"slidingDoor"}}],robot:{prop:"robot",speed:.45,runs:[[10.6,12.3],[14.6,15.4]],path:[[2.2,8.3],[1.9,6.6],[2.3,5.4],[5.6,5.45],[6.3,6.6],[7,7.9],[7,9.05],[5.5,9.15],[5.3,11.6],[4.75,10.6],[5.2,9.3],[5.6,8],[5.5,7.2],[2.4,7.2]]},tasks:[{id:"glass",kind:"main",reward:1,text:"把床头的水杯推下去",hint:"跳上床头柜，拍它！",test:s=>s.t==="fell"&&s.prop==="glass"},{id:"scratch",kind:"main",reward:1,text:"在沙发上磨爪子",hint:"别让主人看见你在磨",test:s=>s.t==="scratch"&&(s.furn==="sofa"||s.furn==="sofaBack")},{id:"box",kind:"main",reward:1,text:"钻进快递箱",hint:"门口那个箱子，猫生必经之路",test:s=>s.t==="hide"&&s.furn==="box"},{id:"sock",kind:"main",reward:1,text:"把臭袜子藏进快递箱",hint:"袜子在卧室的脏衣篮里",test:s=>s.t==="deliver"&&s.prop==="sock"&&s.into==="box"},{id:"tp",kind:"main",reward:1,text:"把卫生纸扯一地",hint:"卫生间，马桶旁边",test:s=>s.t==="pull"&&s.prop==="tp"&&s.done},{id:"pothos",kind:"main",reward:1,text:"打翻阳台的绿萝",hint:"阳台花架上",test:s=>s.t==="break"&&s.prop==="pothos"},{id:"fish",kind:"main",reward:1,text:"偷吃案板上的小黄鱼",hint:"厨房台面。主人做饭的时候可不行",test:s=>s.t==="eat"&&s.prop==="fish"},{id:"keyboard",kind:"main",reward:1,text:"在主人的键盘上踩一串乱码",hint:"要趁他正在打字的时候",test:s=>s.t==="knead"&&s.prop==="laptop"&&!!s.busy},{id:"robot",kind:"main",reward:1,text:"骑着扫地机器人兜风",hint:"它上午和下午各出来转一圈",test:s=>s.t==="ride"&&s.secs>=5},{id:"meeting",kind:"final",reward:3,text:"在视频会议上闪亮登场",hint:"下午四点多，主人要开会",test:(s,e)=>s.t==="knead"&&s.prop==="laptop"&&s.busy==="owner"&&e.hour>=16.3},{id:"remote",kind:"hidden",reward:2,text:"遥控器失踪事件",hint:"把遥控器藏到一个他找不到的地方……床底下？",test:s=>s.t==="deliver"&&s.prop==="remote"&&s.into==="bed"},{id:"laundry",kind:"hidden",reward:2,text:"刚叠好的衣服最好睡",hint:"下午主人会叠衣服",test:s=>s.t==="sleep"&&s.prop==="laundry"},{id:"mambo",kind:"hidden",reward:2,text:"镜子里的曼波",hint:"洗手台上有一面镜子",test:s=>s.t==="mambo"},{id:"haa",kind:"hidden",reward:2,text:"哈气强化普攻",hint:"被追的时候，连点三下「哈」",test:s=>s.t==="haa"},{id:"wardrobe",kind:"hidden",reward:2,text:"衣柜之巅",needs:"highJump",hint:"从五斗柜跳上衣柜顶（需要「高跳」）",test:s=>s.t==="reach"&&s.furn==="wardrobe"},{id:"yogurt",kind:"hidden",reward:2,text:"冰箱大盗",needs:"paws",hint:"冰箱里有酸奶（需要「开门」）",test:s=>s.t==="eat"&&s.prop==="yogurt"},{id:"conflict",kind:"hidden",reward:2,text:"系统报错",hint:"主人摸你的时候，你偏要哈他……",test:s=>s.t==="conflict"&&s.kind!=="groomChase"},{id:"bury",kind:"hidden",reward:2,text:"埋起来",hint:"主人的钥匙，最适合埋进猫砂盆",test:s=>s.t==="deliver"&&s.prop==="keys"&&s.into==="litter"},{id:"robotScare",kind:"hidden",reward:2,text:"背后有东西！",hint:"扫地机器人从背后靠近的时候……",test:s=>s.t==="instinct"&&s.kind==="startle"},{id:"groomCalm",kind:"hidden",reward:2,text:"装乖",hint:"主人起疑心的时候，当着他的面舔毛",test:s=>s.t==="groom"&&s.calmed>0},{id:"bowlRun",kind:"hidden",reward:2,text:"逃命也要干饭",hint:"被追的时候，从猫碗旁边跑过去",test:s=>s.t==="instinct"&&s.kind==="bowl"},{id:"dualCore",kind:"hidden",reward:3,text:"双核冲突",hint:"头上顶着衣服的时候被发现",test:s=>s.t==="conflict"&&s.kind==="groomChase"}]},Pi=[{id:$s.id,name:$s.name,subtitle:$s.subtitle,blurb:$s.blurb,map:$s},{id:qs.id,name:qs.name,subtitle:qs.subtitle,blurb:qs.blurb,map:qs,plan:"柯基豆豆、电梯终局还在施工"},{id:"garden",name:"小区花园",subtitle:"第三章 · 广场舞与象棋",blurb:"阿姨们跳广场舞，大爷们下象棋，还有一群鸽子。",plan:"施工中：开阔场地、鸽子、录音机曼波彩蛋"},{id:"market",name:"菜市场",subtitle:"第四章 · 鱼摊的诱惑",blurb:"一整条街的鱼。老板的眼睛只有两只。",plan:"施工中：摊位偷鱼、秤、塑料袋"},{id:"night",name:"夜宵街",subtitle:"终章 · 烤串之王",blurb:"天黑了，烧烤摊的烟飘了三条街。",plan:"施工中：夜晚灯光、终章"}],pb=["拉","NPC","人上人","顶级","夯"],Bi=s=>e=>e.t==="instinct"&&e.kind===s,go=[{id:"push",tier:"夯",name:"手贱推倒",line:"if (桌边有东西) 推();",desc:"东西放在桌边，就必须推下去。怎么教都改不掉。",how:"把什么东西推下桌",found:s=>s.t==="fell"},{id:"box",tier:"夯",name:"见盒必进",line:"if (看见纸箱) 钻();",desc:"If I fits, I sits。看见纸箱，身体自己就钻进去了。",how:"靠近一个纸箱",found:s=>s.t==="hide"},{id:"conflict",tier:"夯",name:"系统报错",line:"舔毛() && 挠痒() && 打架() && 翻滚();",desc:"几条代码同时执行，猫原地报错，连翻三圈。",how:"被摸的时候哈气，或者叼着东西被摸",found:s=>s.t==="conflict"&&s.kind!=="groomChase"},{id:"groomLoop",tier:"顶级",name:"舔毛循环",line:"while (头上有东西) { 扒(); 舔毛(); 忘了(); }",desc:"头上有东西就抬爪去扒，爪子扫过嘴边变成舔毛，舔完忘了要干嘛，又抬爪……",how:"撞一撞晾衣架",found:Bi("groomLoop")},{id:"groom",tier:"顶级",name:"舔毛优先级最高",line:"priority(舔毛) = MAX;",desc:"天大的事，先舔两口再说。被盯上的时候舔一舔，人就觉得你很乖。",how:"有人起疑心的时候舔毛",found:s=>s.t==="groom"},{id:"displace",tier:"顶级",name:"置换行为",line:"if (想干坏事 && 有人看) 舔毛();",desc:"想干坏事又怕被看见，于是突然开始舔毛。",how:"当着起疑心的人舔毛，让他打消疑虑",found:s=>s.t==="groom"&&s.calmed>0},{id:"dualCore",tier:"夯",name:"双核冲突",line:"逃跑() && 舔毛(); // 两个都想要",desc:"头上还顶着衣服就被发现，逃跑代码和舔毛代码抢同一个身体。",how:"头上顶着东西的时候被发现",found:s=>s.t==="conflict"&&s.kind==="groomChase"},{id:"spino",tier:"顶级",name:"棘背龙形态",line:"if (被发现) { 弓背(); 炸毛(); 横着走(); }",desc:"被盯上时自动切换：背拱起来，尾巴炸开，侧着身子走。",how:"被人发现一次",found:s=>s.t==="spotted"},{id:"startle",tier:"顶级",name:"原地弹射",line:"if (背后突然有东西) 弹射();",desc:"背后突然冒出东西，四只脚同时离地。",how:"让扫地机器人从背后靠近你",found:Bi("startle")},{id:"zoomies",tier:"顶级",name:"凌晨三点跑酷",line:"if (吃饱了 || 凌晨三点) 狂奔();",desc:"到点就高速乱跑，快，但是刹不住。白天吃饱了也算。",how:"吃点东西",found:Bi("zoomies")},{id:"bowl",tier:"顶级",name:"路过猫碗",line:"if (路过猫碗) 吃(); // 忘了在跑",desc:"被追着逃命，路过猫碗也要停下吃两口，忘了刚才在怕什么。",how:"被追的时候从猫碗旁边跑过",found:Bi("bowl")},{id:"haa",tier:"人上人",name:"哈气强化普攻",line:"哈(); 哈(); 哈(); 普攻();",desc:"连哈三下，第四下是扑。人会被吓退好几步。",how:"连哈三下",found:s=>s.t==="haa"},{id:"laowu",tier:"人上人",name:"老吴",line:'if (被抱起) 嚎("老吴——");',desc:"被抱起来时会发出一声听起来像「老吴」的嚎叫。",how:"被抱起来一次",found:s=>s.t==="caught"},{id:"finger",tier:"人上人",name:"单指攻击",line:"if (手指数 == 1) 攻击(); else 死机();",desc:"一根手指指着猫，它就进入攻击模式。人骂你的时候，正好。",how:"躲到高处，等人指着你骂",found:Bi("finger")},{id:"cap",tier:"人上人",name:"扑瓶盖",line:"while (瓶盖在动) 扑(); // 永远抓不到",desc:"捕猎流程卡在「抓取」这一步，扑一辈子也抓不到。",how:"拍一下地上的瓶盖",found:Bi("cap")},{id:"bury",tier:"人上人",name:"踩屎代码",line:"if (有味道 || 是主人的) 埋();",desc:"看到不顺眼的东西，就做埋屎动作把它埋了。",how:"叼点东西去猫砂盆",found:s=>s.t==="deliver"&&s.into==="litter"},{id:"eat",tier:"人上人",name:"偷吃",line:"if (!主人在看) 吃();",desc:"人类的食物，闻起来都是猫的。",how:"吃点不该吃的",found:s=>s.t==="eat"},{id:"knead",tier:"人上人",name:"踩奶",line:"if (软的 || 键盘) 踩();",desc:"前爪会自己交替踩下去，键盘也算软的。",how:"踩一踩键盘",found:s=>s.t==="knead"},{id:"ride",tier:"人上人",name:"骑乘",line:"if (会动 && 够矮) 骑上去();",desc:"会自己跑的东西，就是坐骑。",how:"骑一次会动的东西",found:s=>s.t==="ride"},{id:"mambo",tier:"顶级",name:"曼波",line:"if (看见镜子) 跳();",desc:"镜子里那只猫跳得不错。",how:"找一面镜子",found:s=>s.t==="mambo"},{id:"grateful",tier:"夯",name:"基米报恩",line:"if (陌生人想摸) 哈();",desc:"好心人想摸一下，换来一声哈。",how:"在楼道里，有人想摸你的时候",found:s=>s.t==="grateful"},{id:"scratch",tier:"NPC",name:"磨爪",line:"while (沙发存在) 磨();",desc:"沙发就是用来磨的。",how:"找块软的地方磨爪子",found:s=>s.t==="scratch"},{id:"carry",tier:"NPC",name:"叼走",line:"if (是主人的) 叼走();",desc:"主人的东西 = 猫的东西。",how:"叼走主人的东西藏起来",found:s=>s.t==="deliver"&&s.into!=="litter"},{id:"pull",tier:"NPC",name:"拽纸",line:"while (纸还连着) 拽();",desc:"卫生纸的尽头在哪里？必须知道。",how:"去卫生间看看",found:s=>s.t==="pull"},{id:"hiss",tier:"NPC",name:"哈气",line:"if (被追) 哈();",desc:"被追的时候点「哈」，追你的人会愣一下。",how:"被追的时候哈一下",found:s=>s.t==="hiss"},{id:"sleep",tier:"NPC",name:"踩点睡觉",line:"if (衣服刚叠好) 睡上去();",desc:"越整齐的地方越好睡。",how:"在刚叠好的东西上睡一觉",found:s=>s.t==="sleep"},{id:"tail",tier:"拉",name:"追尾巴",line:"while (尾巴在动) 追();",desc:"那条尾巴是谁的？不管了，先抓住再说。",how:"什么都不做，发一会儿呆",found:Bi("tail")},{id:"p_highJump",tier:"顶级",name:"高跳补丁",line:"jump.max = 1.6;",desc:"跳得更高：衣柜顶、冰箱顶都不在话下。",how:"",skill:"highJump",cost:10,after:"home"},{id:"p_sneak",tier:"人上人",name:"轻手轻脚",line:"detect.speed *= 0.6;",desc:"干坏事时，人发现你的速度慢四成。",how:"",skill:"sneak",cost:8},{id:"p_swift",tier:"人上人",name:"腿长补丁",line:"run.speed *= 1.2;",desc:"平时也跑得快两成。",how:"",skill:"swift",cost:8},{id:"p_hiss",tier:"NPC",name:"哈气冷却优化",line:"haa.cooldown = 10;",desc:"哈气强化普攻的冷却从 20 秒缩短到 10 秒。",how:"",skill:"hiss",cost:6},{id:"p_paws",tier:"顶级",name:"开门",line:"if (有把手) 勾开();",desc:"肉垫一勾，冰箱门、柜门都能打开。",how:"",skill:"paws",cost:15,after:"hallway"},{id:"p_strong",tier:"人上人",name:"大力肉垫",line:"push.force *= 2;",desc:"推得动更重的东西。",how:"",skill:"strong",cost:12,after:"garden"},{id:"gum",tier:"夯",name:"嚼口香糖回血",line:"while (对峙中) { 嚼(); 嚼(); 内个内个(); }",desc:"跟别的猫僵持时紧张到不停吞口水，嚼嚼嚼，然后继续对峙。",how:"",future:"小区花园 · 邻居猫"},{id:"laser",tier:"顶级",name:"追红点",line:"if (红点) 追(); // 永远抓不到",desc:"那个红点，今天一定要抓到。",how:"",future:"小区花园"},{id:"water",tier:"人上人",name:"抢水碗",line:"if (碗被挡住) 照样喝();",desc:"水碗被别的猫挡住，照样执行喝水动作，舔到了对方头上。",how:"",future:"小区花园 · 邻居猫"},{id:"fingers",tier:"人上人",name:"多指死机",line:"if (手指数 > 1) 死机();",desc:"一根手指是攻击，两根以上直接卡住。",how:"",future:"菜市场"},{id:"bag",tier:"人上人",name:"咬塑料袋",line:"if (塑料袋) 咬();",desc:"塑料袋的声音，是世界上最好听的声音。",how:"",future:"菜市场"},{id:"stare",tier:"拉",name:"盯空气",line:"if (半夜) 盯着墙角();",desc:"那里明明什么都没有。",how:"",future:"夜宵街"}];function mb(s,e){return go.filter(t=>t.found&&!e.has(t.id)&&t.found(s))}const gb=[{id:"beanie",name:"毛线帽",where:"小林的家"},{id:"cap",name:"快递员帽",where:"楼道"},{id:"sunhat",name:"遮阳帽",where:"小区花园"},{id:"bag",name:"塑料袋",where:"菜市场"},{id:"crown",name:"烤串王冠",where:"夜宵街"}],xb={orange:"默认",black:"通关「小林的家」",calico:"通关「楼道」",cream:"通关「小区花园」"},Ba={home:"black",hallway:"calico",garden:"cream"};function _b(s){return s<=0?"乖巧哈基米":s<100?"见习捣蛋员":s<400?"拆迁办实习生":s<1e3?"拆家熟练工":s<2e3?"拆家大队长":"拆家之王"}const lf="hachimi-chaijia/save/v1";function hf(){return{fish:0,skills:[],skin:"orange",skins:["orange"],hat:null,hats:[],maps:{},tutorialDone:!1,tips:[],codes:[],muted:!1,totalDamage:0,adDay:"",adCount:0,updatedAt:0,cloudSynced:!1}}function Cs(s,e){let t=s.maps[e];return t||(t={done:[],collected:[],days:0,best:0,cleared:!1},s.maps[e]=t),t}function uf(s){const e={...hf(),...s&&typeof s=="object"?s:{}},t={done:[],collected:[],days:0,best:0,cleared:!1};for(const n of Object.keys(e.maps))e.maps[n]=Object.assign({},t,e.maps[n]);return e}function vb(){try{const s=localStorage.getItem(lf);if(s)return uf(JSON.parse(s))}catch{}return hf()}const df=[];function yb(s){df.push(s)}function tn(s){s.updatedAt=Date.now();try{localStorage.setItem(lf,JSON.stringify(s))}catch{}for(const e of df)e(s)}function Mb(s,e){const t=e.updatedAt>s.updatedAt?e:s,n=(r,o)=>[...new Set([...r,...o])],i={};for(const r of n(Object.keys(s.maps),Object.keys(e.maps))){const o=s.maps[r],a=e.maps[r];if(!o||!a){i[r]={...o??a};continue}i[r]={done:n(o.done,a.done),collected:n(o.collected,a.collected),days:Math.max(o.days,a.days),best:Math.max(o.best,a.best),cleared:o.cleared||a.cleared}}return{fish:s.cloudSynced?t.fish:e.fish+s.fish,skills:n(s.skills,e.skills),skin:t.skin,skins:n(s.skins,e.skins),hat:t.hat,hats:n(s.hats,e.hats),maps:i,tutorialDone:s.tutorialDone||e.tutorialDone,tips:n(s.tips,e.tips),codes:n(s.codes,e.codes),muted:s.muted,totalDamage:Math.max(s.totalDamage,e.totalDamage),adDay:t.adDay,adCount:t.adCount,updatedAt:Math.max(s.updatedAt,e.updatedAt),cloudSynced:!0}}function ff(){return null}function ds(s){return new Promise((e,t)=>s({success:e,fail:t}))}const so="hachimi_save",Bu=61e3,bb=3,Sb=3;class wb{save;cloud;fs;dir;uuid=null;ready=!1;busy=!1;dirty=!1;lastUpload=-1/0;timer=0;failures=0;constructor(e,t=ff()){this.save=e,this.cloud=t?.getCloudSaveManager?.()??null,this.fs=t?.getFileSystemManager?.()??null,this.dir=t?.env?.USER_DATA_PATH??""}get available(){return!!(this.cloud&&this.fs&&this.dir)}async pull(e=1){const{cloud:t,fs:n}=this;if(!t||!n||!this.dir)return!1;try{const{saves:i}=await ds(a=>t.getArchiveList(a)),r=i.find(a=>a.name===so),o=JSON.stringify(this.save);if(r){this.uuid=r.uuid;const{filePath:a}=await ds(l=>t.getArchiveData({archiveUUID:r.uuid,archiveFileId:r.fileId,targetFilePath:`${this.dir}/${so}_cloud.json`,...l})),{data:c}=await ds(l=>n.readFile({filePath:a,encoding:"utf8",...l}));Object.assign(this.save,Mb(this.save,uf(JSON.parse(c))))}else this.save.cloudSynced=!0;return this.ready=!0,tn(this.save),JSON.stringify({...this.save,updatedAt:0})!==JSON.stringify({...JSON.parse(o),updatedAt:0})}catch(i){return console.warn("[cloud save] pull failed",i),e<bb?(await new Promise(r=>window.setTimeout(r,Bu)),this.pull(e+1)):!1}}schedule(){this.available&&(this.dirty=!0,this.failures=0,this.kick())}kick(){if(!this.ready||this.busy||this.timer||!this.dirty)return;const e=Math.max(0,this.lastUpload+Bu-Date.now());this.timer=window.setTimeout(()=>{this.timer=0,this.upload()},e)}async upload(){const{cloud:e,fs:t}=this;if(!e||!t||this.busy||!this.dirty)return;this.busy=!0,this.dirty=!1;const n=`${this.dir}/${so}.json`,i=Object.values(this.save.maps).reduce((o,a)=>o+a.days,0),r={name:so,summary:`拆家 ${i} 天 · 小鱼干 ${this.save.fish}`};try{if(await ds(o=>t.writeFile({filePath:n,data:JSON.stringify(this.save),encoding:"utf8",...o})),this.uuid)try{await ds(o=>e.updateArchive({archiveUUID:this.uuid,archiveMetaData:r,archiveFilePath:n,...o}))}catch(o){if(o.errno!==400002)throw o;this.uuid=null}if(!this.uuid){const{uuid:o}=await ds(a=>e.createArchive({archiveMetaData:r,archiveFilePath:n,...a}));this.uuid=o}this.failures=0}catch(o){console.warn("[cloud save] upload failed",o),this.dirty=!0,this.failures++}finally{this.lastUpload=Date.now(),this.busy=!1,this.failures<Sb&&this.kick()}}}function Tb(s=ff(),e=globalThis.innerWidth){try{const t=s?.getSystemInfoSync?.(),n=t?.windowWidth&&e?e/t.windowWidth:1,i=Math.max(t?.safeArea?.top??0,t?.statusBarHeight??0),r=s?.getMenuButtonBoundingClientRect?.(),o=r&&r.bottom>0?r.bottom+6:0,a=Math.max(i,o)*n;return Number.isFinite(a)&&a>0?Math.round(a):0}catch{return 0}}const Eb=new Bo(.035),Ab=new Ci(.06,8,6),Rb=new Yn(.1,.004,.06),Cb=new al(.2,.26,32),Hu=new ol(.03);function Pb(){const s=new Ld;return s.moveTo(0,-.06),s.bezierCurveTo(-.09,0,-.06,.07,0,.035),s.bezierCurveTo(.06,.07,.09,0,0,-.06),new cl(s)}const Lb=Pb();class Ib{root=new Be;bits=[];marker;markerT=0;constructor(){const e=new rt(new mr(.08,.14,3),new on({color:"#ffd23f"}));e.rotation.x=Math.PI;const t=new rt(new mr(.08,.14,3),new on({color:"#3b302a",side:jt}));t.rotation.x=Math.PI,t.scale.setScalar(1.28),this.marker=new Be,this.marker.add(t,e),this.marker.visible=!1,this.root.add(this.marker),Po(this.marker)}mark(e,t){if(this.markerT+=t,!e){this.marker.visible=!1;return}this.marker.visible=!0,this.marker.position.set(e.x,e.y+.22+Math.sin(this.markerT*5)*.03,e.z),this.marker.rotation.y+=t*1.6}add(e){e.kind!=="shard"&&e.kind!=="paper"&&Po(e.mesh),this.root.add(e.mesh),this.bits.push(e)}shards(e,t,n=14){for(let i=0;i<n;i++){const r=new rt(Eb,Lt(t));r.castShadow=!0,r.position.copy(e).add(new R((Math.random()-.5)*.1,.05,(Math.random()-.5)*.1));const o=Math.random()*Math.PI*2,a=.8+Math.random()*1.6;this.add({mesh:r,vel:new R(Math.cos(o)*a,1.2+Math.random()*1.8,Math.sin(o)*a),spin:new R(Math.random()*12,Math.random()*12,Math.random()*12),life:0,max:2.2+Math.random(),kind:"shard",floor:e.y,grow:0})}this.puff(e,5)}puff(e,t=6,n="#f4efe6"){for(let i=0;i<t;i++){const r=new rt(Ab,Lt(n,{opacity:.8}));r.position.copy(e).add(new R((Math.random()-.5)*.2,.04,(Math.random()-.5)*.2));const o=Math.random()*Math.PI*2;this.add({mesh:r,vel:new R(Math.cos(o)*.5,.3+Math.random()*.3,Math.sin(o)*.5),spin:new R,life:0,max:.5+Math.random()*.3,kind:"puff",floor:-10,grow:2.2})}}paper(e,t=10){for(let n=0;n<t;n++){const i=new rt(Rb,Lt("#ffffff"));i.castShadow=!0,i.position.copy(e);const r=Math.random()*Math.PI*2,o=.3+Math.random()*.9;this.add({mesh:i,vel:new R(Math.cos(r)*o,.8+Math.random(),Math.sin(r)*o),spin:new R(Math.random()*6,Math.random()*6,Math.random()*6),life:0,max:60,kind:"paper",floor:.005,grow:0})}}ring(e,t="#ffd23f"){const n=new rt(Cb,new on({color:t,transparent:!0,opacity:.9,side:_n,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.copy(e).add(new R(0,.05,0)),this.add({mesh:n,vel:new R,spin:new R,life:0,max:.45,kind:"ring",floor:-10,grow:7})}hearts(e,t=3){for(let n=0;n<t;n++){const i=new rt(Lb,new on({color:"#e8553d",transparent:!0,side:_n,depthWrite:!1}));i.position.copy(e).add(new R((Math.random()-.5)*.3,.1+n*.08,0)),this.add({mesh:i,vel:new R((Math.random()-.5)*.2,.6,0),spin:new R,life:-n*.15,max:1.1,kind:"heart",floor:-10,grow:.5})}}sparkle(e,t="#ffd23f",n=8){for(let i=0;i<n;i++){const r=new rt(Hu,new on({color:t,transparent:!0,depthWrite:!1}));r.position.copy(e);const o=i/n*Math.PI*2;this.add({mesh:r,vel:new R(Math.cos(o)*1.2,1+Math.random()*.6,Math.sin(o)*1.2),spin:new R(5,5,0),life:0,max:.6,kind:"spark",floor:-10,grow:-1})}}notes(e){const t=new rt(Hu,new on({color:["#e8553d","#ffd23f","#7f9fb6"][Math.floor(Math.random()*3)],transparent:!0,depthWrite:!1}));t.position.copy(e).add(new R((Math.random()-.5)*.4,.2,(Math.random()-.5)*.2)),t.scale.setScalar(1.6),this.add({mesh:t,vel:new R((Math.random()-.5)*.3,.7,0),spin:new R(0,4,0),life:0,max:1.2,kind:"note",floor:-10,grow:0})}update(e,t){for(let n=this.bits.length-1;n>=0;n--){const i=this.bits[n];if(i.life+=e,i.life<0)continue;const r=i.mesh;if(i.kind==="shard"||i.kind==="paper")i.vel.y-=(i.kind==="paper"?4:11)*e,i.kind==="paper"&&i.vel.multiplyScalar(1-e*1.5),r.position.addScaledVector(i.vel,e),r.position.y<=i.floor&&(r.position.y=i.floor,i.vel.set(i.vel.x*.3,Math.abs(i.vel.y)*.2,i.vel.z*.3),i.spin.multiplyScalar(.3),i.vel.lengthSq()<.02&&i.vel.set(0,0,0)),r.rotation.x+=i.spin.x*e,r.rotation.y+=i.spin.y*e,r.rotation.z+=i.spin.z*e,i.kind==="paper"&&r.position.y<=i.floor+.001&&r.rotation.set(0,r.rotation.y,0);else{r.position.addScaledVector(i.vel,e);const o=1+i.grow*i.life;i.kind!=="note"&&r.scale.setScalar(Math.max(.05,o));const a=r.material;a.opacity=Math.max(0,1-i.life/i.max)*(i.kind==="puff"?.8:1),(i.kind==="heart"||i.kind==="note")&&r.quaternion.copy(t.quaternion),r.rotation.z+=i.spin.z*e}i.life>=i.max?(this.root.remove(r),i.kind!=="shard"&&i.kind!=="paper"&&r.material.dispose(),this.bits.splice(n,1)):i.kind==="shard"&&i.life>i.max-.4&&r.scale.setScalar(Math.max(.01,(i.max-i.life)/.4))}}clear(){for(const e of this.bits)this.root.remove(e.mesh);this.bits=[]}}const Nb="#15110f",Db="#f4ede0",Ub=`
#include <packing>
uniform sampler2D tColor;
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform vec2 uTexel;
uniform float uThick;
uniform float uNear;
uniform float uFar;
uniform vec3 uInk;
varying vec2 vUv;

float viewZ(vec2 uv) {
  return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, uNear, uFar);
}

vec3 normalAt(vec4 s) {
  vec2 xy = s.xy * 2.0 - 1.0;
  return vec3(xy, sqrt(max(0.0, 1.0 - dot(xy, xy))));
}

void main() {
  vec4 col = texture2D(tColor, vUv);
  vec4 s0 = texture2D(tNormal, vUv);
  float z0 = viewZ(vUv);
  vec3 n0 = normalAt(s0);
  vec2 o = uTexel * uThick;
  // eight neighbours on a ring
  vec2 offs[8];
  offs[0] = vec2(o.x, 0.0); offs[1] = vec2(-o.x, 0.0); offs[2] = vec2(0.0, o.y); offs[3] = vec2(0.0, -o.y);
  offs[4] = o * 0.7071; offs[5] = -o * 0.7071; offs[6] = vec2(o.x, -o.y) * 0.7071; offs[7] = vec2(-o.x, o.y) * 0.7071;
  float other = 0.0;
  float crease = 0.0;
  for (int i = 0; i < 8; i++) {
    vec2 uv = vUv + offs[i];
    vec4 s = texture2D(tNormal, uv);
    float z = viewZ(uv);
    // a different object next door that isn't in front of this one: this pixel is on our outline
    // (one-sided, so a contour is one line, not two)
    if (abs(s.z - s0.z) > 0.002 && z > z0 - 0.015 * z0) other += 1.0;
    // the same object turning a sharp corner (a box edge), or folding behind itself
    else if (abs(s.z - s0.z) <= 0.002) {
      crease = max(crease, step(0.95, length(normalAt(s) - n0)));
      crease = max(crease, step(0.06 * z0, z - z0));
    }
  }
  float edge = max(smoothstep(0.5, 2.5, other), crease);
  gl_FragColor = vec4(mix(col.rgb, uInk, edge), 1.0);
  #include <colorspace_fragment>
}`,kb=`
#include <common>
#include <skinning_pars_vertex>
varying vec3 vN;
void main() {
  #include <beginnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  vN = normalize(normalMatrix * objectNormal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}`,Fb=`
uniform float uId;
varying vec3 vN;
void main() {
  vec3 n = normalize(vN);
  gl_FragColor = vec4(n.xy * 0.5 + 0.5, uId, 1.0);
}`;let Ob=0;function zb(s,e){const t=s;if(!t.isMesh||t.userData.inkHooked)return;t.userData.inkHooked=!0,t.geometry.boundingSphere||t.geometry.computeBoundingSphere();const n=Math.max(t.scale.x,t.scale.y,t.scale.z);t.geometry.boundingSphere.radius*n<.025&&t.layers.set(Ai),t.userData.inkId===void 0&&(t.userData.inkId=(Ob++*97%240+8)/255),t.onBeforeRender=function(i,r,o,a,c){c===e&&(e.uniforms.uId.value=this.userData.inkId,e.uniformsNeedUpdate=!0)}}const Bb=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;class Hb{color;normal;idMat=new Mn({vertexShader:kb,fragmentShader:Fb,uniforms:{uId:{value:0}}});quad;quadScene=new vd;quadCam=new Tr(-1,1,1,-1,0,1);mat;constructor(){this.color=new hn(1,1,{samples:4}),this.color.texture.colorSpace=Pt,this.normal=new hn(1,1,{minFilter:Et,magFilter:Et}),this.normal.depthTexture=new Ms(1,1),this.mat=new Mn({vertexShader:Bb,fragmentShader:Ub,uniforms:{tColor:{value:this.color.texture},tNormal:{value:this.normal.texture},tDepth:{value:this.normal.depthTexture},uTexel:{value:new re(1,1)},uThick:{value:2},uNear:{value:.1},uFar:{value:80},uInk:{value:new Re("#15110f")}},depthTest:!1,depthWrite:!1}),this.quad=new rt(new qi(2,2),this.mat),this.quad.frustumCulled=!1,this.quadScene.add(this.quad)}setSize(e,t,n){this.color.setSize(e,t),this.normal.setSize(e,t),this.mat.uniforms.uTexel.value.set(1/e,1/t),this.mat.uniforms.uThick.value=1.7*n}render(e,t,n){this.mat.uniforms.uNear.value=n.near,this.mat.uniforms.uFar.value=n.far,n.layers.enable(Ai),e.setRenderTarget(this.color),e.render(t,n);const i=t.background;t.background=null,t.traverse(r=>zb(r,this.idMat)),t.overrideMaterial=this.idMat,n.layers.disable(Ai),e.setRenderTarget(this.normal),e.setClearColor(8355584,1),e.clear(),e.render(t,n),t.overrideMaterial=null,t.background=i,n.layers.enable(Ai),e.setRenderTarget(null),e.render(this.quadScene,this.quadCam)}}const Vb=.16,Vu=.3;class Gb{renderer;scene=new vd;camera=new Zt(45,1,.1,80);sun;level=new Be;furniture=new Map;walls=[];fadeables=[];viewWidth=5.4;focus=new R;camPos=new R;bounds={x0:0,z0:0,x1:10,z1:10};ahead=new re;ink=new Hb;constructor(e){this.renderer=new Ry({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qs,this.renderer.outputColorSpace=Pt;const t=new fm("#ffffff","#a89e94",1.05);this.scene.add(t),this.sun=new Gd("#fff4e0",2.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);const n=this.sun.shadow.camera;n.left=-7,n.right=7,n.top=7,n.bottom=-7,n.near=1,n.far=30,this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.02,this.sun.shadow.radius=1,this.scene.add(this.sun,this.sun.target),this.scene.add(this.level),this.resize()}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1);const n=this.renderer.getPixelRatio();this.ink.setSize(Math.round(e*n),Math.round(t*n),n),of.value=4.5*n,this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}clear(){this.level.clear(),this.furniture.clear(),this.walls=[],this.fadeables=[]}build(e){this.clear(),this.bounds=e.bounds,this.scene.background=new Re(e.outside);const t=new rt(new qi(80,80),Lt(e.outside));t.rotation.x=-Math.PI/2,t.position.set((e.bounds.x0+e.bounds.x1)/2,-.02,(e.bounds.z0+e.bounds.z1)/2),t.receiveShadow=!0,this.level.add(t);for(const r of e.rooms){const o=r.rect.x1-r.rect.x0,a=r.rect.z1-r.rect.z0,c=Yb(r.floor,r.floorColor);let l;if(c){const u=c.clone();u.needsUpdate=!0,u.repeat.set(o/c.userData.size,a/c.userData.size),l=Fc({map:u})}else l=Lt(r.floorColor);const h=new rt(new qi(o,a),l);h.rotation.x=-Math.PI/2,h.position.set(r.rect.x0+o/2,0,r.rect.z0+a/2),h.receiveShadow=!0,this.level.add(h)}const n=(r,o)=>e.rooms.find(a=>r>=a.rect.x0&&r<=a.rect.x1&&o>=a.rect.z0&&o<=a.rect.z1),i=(r,o)=>n(r,o)?.wallColor??Db;for(const r of e.walls){const o=r.h??2.4,a=Qd(r.a,r.b),c=a.x1-a.x0>a.z1-a.z0,l=c?a.x1-a.x0:a.z1-a.z0,h=Math.max(1,Math.ceil(l/1.1));for(let u=0;u<h;u++){const d=c?{x0:a.x0+l/h*u,x1:a.x0+l/h*(u+1),z0:a.z0,z1:a.z1}:{x0:a.x0,x1:a.x1,z0:a.z0+l/h*u,z1:a.z0+l/h*(u+1)},f=(d.x0+d.x1)/2,p=(d.z0+d.z1)/2,x=d.x1-d.x0,m=d.z1-d.z0,g=new Map,_=S=>{let b=g.get(S);return b||(b=Fc({color:S,transparent:!0}),g.set(S,b)),b};let E;if(r.kind==="railing")E=[_("#dfe3e6"),_("#dfe3e6"),_("#a7adb3"),_("#dfe3e6"),_("#dfe3e6"),_("#dfe3e6")];else{const S=_(i(f+x/2+.15,p)),b=_(i(f-x/2-.15,p)),A=_(i(f,p+m/2+.15)),v=_(i(f,p-m/2-.15));E=[S,b,_(Nb),b,A,v]}const y=new rt(new Yn(x,1,m),E);y.position.set(f,o/2,p),y.scale.y=o,y.castShadow=!0,y.receiveShadow=!0,this.level.add(y),this.walls.push({mesh:y,cx:f,cz:p,h:o,alpha:1,mats:[...g.values()]})}}for(const r of e.furniture){const o=eb(r);this.level.add(o),this.furniture.set(r.id,o),r.h>=.4&&!r.walkThrough&&!r.decor&&(o.updateMatrixWorld(!0),this.fadeables.push({obj:o,box:new In().setFromObject(o),alpha:1,own:null}))}}cutaway(e,t,n=[]){const i=t*5;for(const h of this.walls){const u=h.h>=1.2&&h.cz>e.z+.3?Vb:1;h.alpha!==u&&(h.alpha=u>h.alpha?Math.min(u,h.alpha+i):Math.max(u,h.alpha-i),qb(h.mesh,h.mats,h.alpha))}const r=this.camera.position,o=[new R(e.x,e.y+.2,e.z),new R(e.x,e.y+.38,e.z+.1),new R(e.x,e.y+.12,e.z-.15)],a=new Sr,c=new R,l=h=>o.some(u=>h.containsPoint(u)||(a.origin.copy(r),a.direction.subVectors(u,r).normalize(),!a.intersectBox(h,c))?!1:c.distanceTo(r)<u.distanceTo(r)-.12);for(const h of this.fadeables)this.fadeTo(h,l(h.box)?Vu:1,i);this.personFades=this.personFades.filter(h=>n.includes(h.obj));for(const h of n){let u=this.personFades.find(d=>d.obj===h);u||(u={obj:h,box:new In,alpha:1,own:null},this.personFades.push(u)),u.box.min.set(h.position.x-.26,h.position.y,h.position.z-.26),u.box.max.set(h.position.x+.26,h.position.y+1.75,h.position.z+.26),this.fadeTo(u,l(u.box)?Vu:1,i)}}personFades=[];fadeTo(e,t,n){if(e.alpha!==t){if(e.alpha=t>e.alpha?Math.min(t,e.alpha+n):Math.max(t,e.alpha-n),e.own||(e.own=Wb(e.obj)),e.alpha>=1){Xb(e.own),e.own=null;return}for(const i of e.own.mats)i.opacity=e.alpha,i.depthWrite=!1}}setDoor(e,t){const n=this.furniture.get(e);n&&(n.children[0].position.x=-t*1.5)}follow(e,t,n,i,r,o,a=!1){const c=a?1:Math.min(1,o*4);this.ahead.x+=(i*.35-this.ahead.x)*Math.min(1,o*2),this.ahead.y+=(r*.35-this.ahead.y)*Math.min(1,o*2);const l=.92,h=11.5,u=this.camera.aspect,d=this.viewWidth/2,f=ho.clamp(ho.radToDeg(2*Math.atan(d/h/Math.max(.35,u))),22,62);Math.abs(this.camera.fov-f)>.01&&(this.camera.fov=f,this.camera.updateProjectionMatrix());const p=this.bounds,x=ho.degToRad(f),m=Math.sin(l)*h,g=Math.cos(l)*h,_=(A,v=0)=>{const T=l-Math.atan(Math.tan(x/2)*(1-2*A));return T>.05?(m-v)/Math.tan(T)-g:99},E=Math.tan(x/2)*u*h,y=(A,v,T)=>v<=T?Math.min(T,Math.max(v,A)):(v+T)/2;let S=y(e+this.ahead.x,p.x0+E-.3,p.x1-E+.3),b=y(n+this.ahead.y,p.z0-.3+_(0,2.2),p.z1+.4+_(1));S=Math.min(e+E*.62,Math.max(e-E*.62,S)),b=Math.min(n+_(.3),Math.max(n+_(.72),b)),this.focus.x+=(S-this.focus.x)*c,this.focus.y+=(t*.5-this.focus.y)*c,this.focus.z+=(b-this.focus.z)*c,this.camPos.set(this.focus.x,this.focus.y+Math.sin(l)*h,this.focus.z+Math.cos(l)*h),this.camera.position.copy(this.camPos),this.camera.lookAt(this.focus),this.sun.position.set(this.focus.x-4,12,this.focus.z+5),this.sun.target.position.copy(this.focus)}render(){this.ink.render(this.renderer,this.scene,this.camera)}project(e,t){const n=e.clone().project(this.camera);return t.x=(n.x+1)/2*window.innerWidth,t.y=(1-n.y)/2*window.innerHeight,t.behind=n.z>1,t}}function Wb(s){const e=new Map,t=new Map,n=i=>{let r=e.get(i);return r||(r=i.clone(),r.onBeforeCompile=i.onBeforeCompile,r.transparent=!0,r.depthWrite=!1,e.set(i,r)),r};return s.traverse(i=>{const r=i;r.isMesh&&(t.set(r,{mat:r.material,layers:r.layers.mask}),r.material=Array.isArray(r.material)?r.material.map(n):n(r.material),r.layers.set(Ai))}),{mats:[...e.values()],saved:t}}function Xb(s){for(const[e,t]of s.saved)e.material=t.mat,e.layers.mask=t.layers;for(const e of s.mats)e.dispose()}function qb(s,e,t){const n=t>=.99;for(const i of e)i.opacity=t,i.depthWrite=n;s.layers.set(n?0:Ai),s.castShadow=n}const Ha=new Map;function $b(s){let e=s;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function Yb(s,e){const t=`${s}|${e}`;if(Ha.has(t))return Ha.get(t);let n=null;const i=new Re(e),r=h=>`#${i.clone().multiplyScalar(h).getHexString()}`,o=256,a=document.createElement("canvas");a.width=a.height=o;const c=a.getContext("2d"),l=$b(s.length*977+Math.round(i.r*1e3));if(s==="wood"){const u=o/8;for(let d=0;d<8;d++){let f=-(d*97%160);for(;f<o;){const p=150+l()*90;c.fillStyle=r(.97+l()*.05),c.fillRect(f,d*u,p,u),c.fillStyle="rgba(30, 18, 10, 0.5)",c.fillRect(f,d*u,2,u),f+=p}c.fillStyle="rgba(30, 18, 10, 0.5)",c.fillRect(0,d*u,o,2)}n=new wh(a),n.userData.size=1.4}else if(s==="tile"||s==="balcony"){const h=s==="tile"?4:3,u=o/h;for(let d=0;d<h;d++)for(let f=0;f<h;f++)c.fillStyle=r(1),c.fillRect(d*u,f*u,u,u);c.fillStyle="rgba(21, 17, 15, 0.7)";for(let d=0;d<=h;d++)c.fillRect(d*u-1.5,0,3,o),c.fillRect(0,d*u-1.5,o,3);n=new wh(a),n.userData.size=s==="tile"?1.4:1.8}return n&&(n.wrapS=n.wrapT=Gi,n.colorSpace=Pt,n.anisotropy=4),Ha.set(t,n),n}class Kb{layer;items=new Map;tmp={x:0,y:0,behind:!1};constructor(e){this.layer=e}say(e,t,n,i={}){let r=this.items.get(e);if(!r){const o=document.createElement("div");o.className="bubble-anchor";const a=document.createElement("span");o.appendChild(a),this.layer.appendChild(o),r={el:o,inner:a,anchor:t,until:0},this.items.set(e,r)}r.anchor=t,r.until=performance.now()+(i.ms??2e3),r.inner.className=`bubble${i.icon?" icon":""}${i.cat?" cat":""}${n==="！"?" alarm":""}${i.sfx?" sfx":""}${i.sfx==="small"?" small":""}`,r.inner.textContent=n,r.inner.style.animation="none",r.inner.offsetWidth,r.inner.style.animation=""}update(e){const t=performance.now();for(const[n,i]of this.items){if(t>i.until){i.el.remove(),this.items.delete(n);continue}e.project(i.anchor(),this.tmp),i.el.style.transform=`translate(${Math.round(this.tmp.x)}px, ${Math.round(this.tmp.y)}px)`,i.el.style.opacity=this.tmp.behind?"0":t>i.until-250?String((i.until-t)/250):"1"}}clear(){for(const e of this.items.values())e.el.remove();this.items.clear()}}const Jb=`data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M19 4c2.2 0 4 1.8 4 4v13l2-.4c1.6-.3 3.2.5 3.8 2l.2.4 1.6-.3c1.7-.3 3.3.7 3.8 2.3l1.4-.2c2-.2 3.7 1.3 3.7 3.3V37c0 4.4-3.6 8-8 8h-6.6c-2.6 0-5-1.3-6.5-3.4L9 31.6c-1-1.5-.7-3.6.8-4.6 1.4-1 3.3-.8 4.4.5L15 29V8c0-2.2 1.8-4 4-4z" fill="#fbf6ea" stroke="#3b302a" stroke-width="3" stroke-linejoin="round"/></svg>')}`;function Io(s){return()=>{const e=document.querySelector(s);if(!e||!e.offsetParent)return null;const t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}}class Zb{root;line;text;nextBtn;finger;ring;steps=[];current=null;shownFor=0;onFinish=()=>{};avoid=()=>null;constructor(){this.root=document.createElement("div"),this.root.id="coach",this.root.className="hidden",this.root.innerHTML='<div class="coach-ring"></div><img class="coach-finger" alt=""><div class="coach-line"><span class="coach-text"></span><button class="btn coach-next hidden"></button></div>',document.body.appendChild(this.root),this.line=this.root.querySelector(".coach-line"),this.text=this.root.querySelector(".coach-text"),this.nextBtn=this.root.querySelector(".coach-next"),this.finger=this.root.querySelector(".coach-finger"),this.finger.src=Jb,this.ring=this.root.querySelector(".coach-ring"),this.nextBtn.addEventListener("click",()=>this.advance())}get blocking(){return!!this.current?.next}get active(){return!!this.current}start(e){this.steps=[...e],this.advance()}stop(){this.steps=[],this.current=null,this.root.classList.add("hidden")}advance(){const e=this.steps.shift()??null;if(this.current=e,!e){this.root.classList.add("hidden"),this.onFinish();return}this.shownFor=0,this.text.textContent=e.text,this.nextBtn.textContent=e.next??"",this.nextBtn.classList.toggle("hidden",!e.next),this.root.classList.remove("hidden")}update(e,t){const n=this.current;if(!n||(this.root.classList.toggle("hidden",t),t))return;this.shownFor+=e;const i=this.shownFor>=(n.minTime??.6),r=n.maxTime!==void 0&&this.shownFor>=n.maxTime;if(!n.next&&(i&&n.done?.()||r)){this.advance();return}const o=n.target?.()??null;this.finger.classList.toggle("hidden",!o),this.ring.classList.toggle("hidden",!o||!!n.drag),this.finger.classList.toggle("coach-drag",!!n.drag),o&&(this.finger.style.left=`${o.x}px`,this.finger.style.top=`${o.y}px`,this.ring.style.left=`${o.x}px`,this.ring.style.top=`${o.y}px`);const a=this.avoid(),c=n.place?n.place==="top":a!==null?a>window.innerHeight*.5:!o||o.y>window.innerHeight*.5;this.line.style.top=c?`calc(var(--safe-top) + ${window.innerHeight*.2}px)`:"",this.line.style.bottom=c?"":"calc(var(--safe-bottom) + 150px)"}}function Ue(s){const e=document.querySelector(s);if(!e)throw new Error(`missing element ${s}`);return e}function pf(s,e){const t=Ue("#modal"),n=Ue("#modal .modal-card");n.innerHTML=s;const i=document.createElement("div");i.className="modal-buttons";for(const r of e){const o=document.createElement("button");o.className=`btn ${r.cls??""}`,o.innerHTML=r.label,o.disabled=!!r.disabled,o.addEventListener("click",()=>r.onClick(),{once:!0}),i.appendChild(o)}n.appendChild(i),t.classList.remove("hidden")}function ar(){Ue("#modal").classList.add("hidden")}function Gu(){return!Ue("#modal").classList.contains("hidden")}let Wu=0;function zc(s,e=2200){const t=Ue("#toast");t.textContent=s,t.classList.add("show"),window.clearTimeout(Wu),Wu=window.setTimeout(()=>t.classList.remove("show"),e)}const Ys=56;class jb{x=0;z=0;mag=0;id=null;ox=0;oy=0;base;knob;enabled=!0;keys=new Set;constructor(e,t){this.base=t,this.knob=t.querySelector(".knob"),e.addEventListener("pointerdown",i=>{!this.enabled||this.id!==null||(this.id=i.pointerId,this.ox=i.clientX,this.oy=i.clientY,e.setPointerCapture?.(i.pointerId),this.base.style.left=`${this.ox}px`,this.base.style.top=`${this.oy}px`,this.base.classList.remove("hidden"),this.set(0,0))}),e.addEventListener("pointermove",i=>{if(i.pointerId!==this.id)return;let r=i.clientX-this.ox,o=i.clientY-this.oy;const a=Math.hypot(r,o);if(a>Ys*1.35){const c=(a-Ys*1.35)/a;this.ox+=r*c,this.oy+=o*c,r=i.clientX-this.ox,o=i.clientY-this.oy,this.base.style.left=`${this.ox}px`,this.base.style.top=`${this.oy}px`}this.set(r,o)});const n=i=>{i.pointerId===this.id&&(this.id=null,this.base.classList.add("hidden"),this.set(0,0))};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),window.addEventListener("keydown",i=>{this.keys.add(i.key.toLowerCase())}),window.addEventListener("keyup",i=>{this.keys.delete(i.key.toLowerCase())})}set(e,t){const n=Math.hypot(e,t),i=Math.min(1,n/Ys);this.mag=n<6?0:i,this.x=n>0?e/n:0,this.z=n>0?t/n:0;const r=n>Ys?Ys/n:1;this.knob.style.transform=`translate(${e*r}px, ${t*r}px)`}reset(){this.id=null,this.base.classList.add("hidden"),this.set(0,0)}read(){if(this.id===null&&this.keys.size){const e=this.keys,t=(e.has("d")||e.has("arrowright")?1:0)-(e.has("a")||e.has("arrowleft")?1:0),n=(e.has("s")||e.has("arrowdown")?1:0)-(e.has("w")||e.has("arrowup")?1:0),i=Math.hypot(t,n);if(i)return{x:t/i,z:n/i,mag:e.has("shift")?.5:1}}return{x:this.x,z:this.z,mag:this.mag}}}const ge=vb(),mf=new wb(ge);yb(()=>mf.schedule());mf.pull().then(s=>{s&&An==="title"&&xl()});const Xu=Tb();Xu&&document.documentElement.style.setProperty("--host-top",`${Xu}px`);const xn=new Gb(Ue("#gl")),Qb=new Ib,gf=new Kb(Ue("#bubbles")),Rt=new pl(ge.muted),br=new jb(Ue("#touch"),Ue("#stick")),li=new Zb;li.avoid=()=>{if(!je||An!=="play")return null;const s={x:0,y:0,behind:!1};return xn.project(je.cat.pos.clone().add(new R(0,.3,0)),s),s.y};let An="title",je=null,Ln=null,hi=null,_s=!1;const xf=[];let Va=!1;window.addEventListener("pointerdown",()=>Rt.unlock(),{capture:!0});window.addEventListener("resize",()=>xn.resize());document.addEventListener("visibilitychange",()=>{document.hidden?(Rt.suspend(),An==="play"&&je&&!je.paused&&Sl()):(An!=="play"||je&&!je.paused)&&Rt.unlock()});const e1={title:"#title",maps:"#maps",skills:"#skills",closet:"#closet",receipt:"#receipt"};function Ps(s){An=s;for(const[e,t]of Object.entries(e1))Ue(t).classList.toggle("hidden",e!==s);Ue("#hud").classList.toggle("hidden",s!=="play"),br.enabled=s==="play",s!=="play"&&document.querySelector("#speed")?.classList.remove("on"),s!=="play"&&br.reset();for(const e of document.querySelectorAll(".fish-count"))e.innerHTML=`${_f()} ${ge.fish}`}function _f(){return'<svg width="22" height="14" viewBox="0 0 22 14"><path d="M2 7c3-5 9-6 13-2l5-4v12l-5-4c-4 4-10 3-13-2z" fill="#e9b44c" stroke="#3b302a" stroke-width="1.8" stroke-linejoin="round"/></svg>'}function gl(){if(No(),!Ln){Ln=Mf(Pi[0].map,!0);const s=Ln.cat;s.place(4.3,.45,7.85),s.yaw=Math.PI*.85,s.setPose("sit")}xl(),Ps("title"),Rt.setScene("title",1)}function xl(){const s=Object.values(ge.maps).reduce((e,t)=>e+t.days,0);Ue("#title-stats").textContent=s?`已拆家 ${s} 天 · 累计损失 ¥${ge.totalDamage.toLocaleString()}`:"一只猫，一个家，一张清单",Ue("#btn-sound").textContent=ge.muted?"音效：关":"音效：开"}Ue("#btn-start").addEventListener("click",()=>{Rt.click(),ge.tutorialDone?_l():Ml(Pi[0].map)});Ue("#btn-maps").addEventListener("click",()=>{Rt.click(),_l()});Ue("#btn-skills").addEventListener("click",()=>{Rt.click(),vl()});Ue("#btn-closet").addEventListener("click",()=>{Rt.click(),_o()});Ue("#btn-sound").addEventListener("click",()=>{ge.muted=!ge.muted,Rt.setMuted(ge.muted),tn(ge),xl()});for(const s of document.querySelectorAll("[data-back]"))s.addEventListener("click",()=>{Rt.click(),gl()});function Ga(s){if(s===0)return!0;const e=Pi[s-1];return!!ge.maps[e.id]?.cleared}function _l(){const s=Ue("#map-list");s.innerHTML="",Pi.forEach((e,t)=>{const n=Ga(t)&&!!e.map,i=ge.maps[e.id],r=document.createElement("button");r.className=`card${n?"":" locked"}`;const o=e.map?.tasks??[],a=o.filter(f=>f.kind!=="hidden"),c=o.filter(f=>f.kind==="hidden"),l=e.map?.props.filter(f=>f.collect==="treat")??[],h=new Set(i?.done??[]),u=new Set(i?.collected??[]);let d="";i?.cleared?d='<span class="stamp">已拆</span>':Ga(t)?e.map||(d='<span class="stamp">施工中</span>'):d='<span class="stamp">未解锁</span>',r.innerHTML=`
      ${d}
      <span class="sub">${e.subtitle}</span>
      <h4>${e.name}</h4>
      <p>${e.blurb}${e.plan&&n?`<br><small>（${e.plan}）</small>`:""}${e.map?"":`<br><small>${e.plan??""}</small>`}</p>
      ${e.map?`<div class="meta"><span>清单 ${a.filter(f=>h.has(f.id)).length}/${a.length}</span><span>隐藏 ${c.filter(f=>h.has(f.id)).length}/${c.length}</span><span>小鱼干 ${l.filter(f=>u.has(f.id)).length}/${l.length}</span>${i?.best?`<span>最高 ¥${i.best}</span>`:""}</div>`:""}
      ${!Ga(t)&&e.map?`<p>先拆完「${Pi[t-1].name}」</p>`:""}`,r.disabled=!n,n&&r.addEventListener("click",()=>{Rt.click(),Ml(e.map)}),s.appendChild(r)}),Ps("maps")}function vl(){const s=Ue("#skill-list");s.innerHTML="";const e=new Set(ge.codes),t=go.filter(o=>o.found),n=document.createElement("p");n.className="sheet-hint",n.textContent=`已加载 ${t.filter(o=>e.has(o.id)).length}/${t.length} 条本能。第一次做某件事（或者某件事发生在你身上），对应的代码就会加载进来。等级按网友的「从拉到夯」排。`,s.appendChild(n);for(const o of t){const a=document.createElement("div"),c=e.has(o.id);a.className=`card code${c?"":" locked"}`,a.innerHTML=c?`${Wa(o.tier)}<h4>${o.name}</h4><code>${o.line}</code><p>${o.desc}</p>`:`<h4>？？？</h4><p>提示：${o.how}</p>`,s.appendChild(a)}const i=document.createElement("h3");i.textContent="升级补丁（小鱼干安装）",s.appendChild(i);for(const o of go.filter(a=>a.skill)){const a=o.skill,c=o.cost??0,l=ge.skills.includes(a),h=o.after?Pi.find(f=>f.id===o.after):null,u=!h||!!ge.maps[h.id]?.cleared,d=document.createElement("div");if(d.className=`card code${u||l?"":" locked"}`,d.innerHTML=`
      ${Wa(o.tier)}<div class="row"><h4>${o.name}</h4>${l?'<span class="chip">已安装</span>':""}</div>
      <code>${o.line}</code>
      <p>${o.desc}${!u&&!l?`<br><small>拆完「${h.name}」后可装</small>`:""}</p>`,!l&&u){const f=document.createElement("button");f.className="btn primary",f.innerHTML=`${_f()} ${c} 安装`,f.disabled=ge.fish<c,f.addEventListener("click",()=>{ge.fish<c||(ge.fish-=c,ge.skills.push(a),tn(ge),Rt.buy(),yl("补丁已安装",o.name,o.line),vl())}),d.appendChild(f)}s.appendChild(d)}const r=document.createElement("h3");r.textContent="后面的章节会加载",s.appendChild(r);for(const o of go.filter(a=>a.future)){const a=document.createElement("div");a.className="card code locked",a.innerHTML=`${Wa(o.tier)}<h4>${o.name}</h4><p>${o.desc}<br><small>${o.future}</small></p>`,s.appendChild(a)}Ps("skills")}function Wa(s){return`<span class="tier t${pb.indexOf(s)}">${s}</span>`}let xo=0;const vf=[];function yl(s,e,t){vf.push([s,e,t]),xo||yf()}function yf(){const s=Ue("#code-toast"),e=vf.shift();if(!e){xo=0,s.classList.remove("show");return}const[t,n,i]=e;s.innerHTML=`<small>${t}</small><b>${n}</b><code>${i}</code>`,s.classList.remove("show"),s.offsetWidth,s.classList.add("show"),xo=window.setTimeout(()=>{s.classList.remove("show"),xo=window.setTimeout(yf,250)},2400)}function _o(){const s=Ue("#skin-list");s.innerHTML="";for(const n of Lo){const i=ge.skins.includes(n.id),r=document.createElement("button");r.className=`tile${ge.skin===n.id?" on":""}${i?"":" locked"}`,r.innerHTML=`<span class="swatch" style="background:${i?n.body:"#d9d0bf"}"></span><b>${i?n.name:"？？"}</b>${i?"":xb[n.id]}`,i&&r.addEventListener("click",()=>{ge.skin=n.id,tn(ge),Rt.meow("mrrp"),Ln=null,_o()}),s.appendChild(r)}const e=Ue("#hat-list");e.innerHTML="";const t=document.createElement("button");t.className=`tile${ge.hat===null?" on":""}`,t.innerHTML='<span class="swatch" style="background:#fbf6ea"></span><b>不戴</b>',t.addEventListener("click",()=>{ge.hat=null,tn(ge),Ln=null,_o()}),e.appendChild(t);for(const n of gb){const i=ge.hats.includes(n.id),r=document.createElement("button");r.className=`tile${ge.hat===n.id?" on":""}${i?"":" locked"}`,r.innerHTML=`<span class="swatch" style="background:${i?"#e8553d":"#d9d0bf"}"></span><b>${i?n.name:"？？"}</b>${i?"":`藏在${n.where}`}`,i&&r.addEventListener("click",()=>{ge.hat=n.id,tn(ge),Rt.click(),Ln=null,_o()}),e.appendChild(r)}Ps("closet")}function t1(s){const e=Cs(ge,s.id);return{done:new Set(e.done),collected:new Set(e.collected),skills:new Set(ge.skills),skin:ge.skin,hat:ge.hat}}function Mf(s,e=!1){const t=new ub(s,xn,Qb,gf,Rt,t1(s),{taskDone:n=>n1(n),collected:n=>i1(n),dayOver:n=>o1(n),status:n=>{const i=Ue("#status");i.textContent=n??"",i.classList.toggle("hidden",!n)},event:n=>l1(n),instinct:(n,i)=>yl("底层代码触发",n,i)});return e&&(t.holdClock=!0),t}function No(){je&&(je.dispose(),je=null),li.stop()}function Ml(s){No(),Ln?.dispose(),Ln=null,hi=s,je=Mf(s),_s=!1,Ue("#note").classList.remove("open"),bl(),Ps("play"),Rt.setScene("play",2);const e=Cs(ge,s.id);Ue("#clock-day").textContent=`第 ${e.days+1} 天`,s.id==="home"&&!ge.tutorialDone?c1():s.wip&&!ge.tips.includes(`wip:${s.id}`)&&(ge.tips.push(`wip:${s.id}`),tn(ge),pf(`<h3>${s.name}</h3><p>这一章还在施工：能逛、能拆，但还不完整。</p>`,[{label:"先逛逛",cls:"primary",onClick:()=>ar()}]))}function n1(s){if(!je||!hi)return;const e=Cs(ge,hi.id);e.done.includes(s.id)||e.done.push(s.id),ge.fish+=s.reward,tn(ge),bl(s.id);const t=s.kind==="hidden"?"隐藏！":s.kind==="final"?"终局！":"完成！";xf.push({kind:t,text:s.text,reward:`小鱼干 +${s.reward}`}),bf(),s.kind==="main"&&je.mainDone&&hi.tasks.some(n=>n.kind==="final")&&window.setTimeout(()=>zc("清单拆完了！便签最下面多了一项……",3200),2600)}function i1(s){if(!hi)return;const e=Cs(ge,hi.id);e.collected.includes(s.id)||e.collected.push(s.id),s.def.collect==="treat"?(ge.fish+=1,zc(`捡到小鱼干！（${s1(hi)}）`)):s.def.hatId&&(ge.hats.includes(s.def.hatId)||ge.hats.push(s.def.hatId),zc(`找到了「${s.def.name}」！去衣柜戴上吧`,2800)),tn(ge)}function s1(s){const e=s.props.filter(n=>n.collect==="treat"),t=new Set(Cs(ge,s.id).collected);return`${e.filter(n=>t.has(n.id)).length}/${e.length}`}function bf(){if(Va)return;const s=xf.shift();if(!s)return;Va=!0;const e=Ue("#task-toast");e.innerHTML=`<div class="tt-kind"><span>${s.kind}</span></div><div class="tt-body"><div class="tt-text">${s.text}</div><span class="tt-reward">${s.reward}</span></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),window.setTimeout(()=>{e.classList.remove("show"),window.setTimeout(()=>{Va=!1,bf()},300)},2100)}function bl(s){const e=hi;if(!e||!je)return;const t=je.progress.done,n=e.tasks.filter(c=>c.kind==="main"),i=e.tasks.find(c=>c.kind==="final"),r=e.tasks.filter(c=>c.kind==="hidden");Ue("#note-count").textContent=`${n.filter(c=>t.has(c.id)).length}/${n.length}`;const o=Ue("#note-list");o.innerHTML="";const a=(c,l,h,u)=>{const d=document.createElement("li");if(d.className=l,d.textContent=c,h&&_s){const f=document.createElement("small");f.textContent=h,d.appendChild(f)}u&&u===s&&d.classList.add("flash"),o.appendChild(d)};if(_s){for(const c of n)a(c.text,t.has(c.id)?"done":"",t.has(c.id)?void 0:c.hint,c.id);i&&(je.mainDone?a(i.text,`final${t.has(i.id)?" done":""}`,t.has(i.id)?void 0:i.hint,i.id):a("？？？（拆完上面的才知道）","secret"));for(const c of r)t.has(c.id)?a(c.text,"done",void 0,c.id):a("？？？","secret",c.hint,c.id);Ue("#note-more").textContent="点一下收起"}else{const c=n.filter(d=>!t.has(d.id)),l=[];i&&je.mainDone&&!t.has(i.id)&&l.push(i),l.push(...c);const h=s?e.tasks.find(d=>d.id===s):void 0;h&&a(h.text,"done",void 0,h.id);for(const d of l.slice(0,h?2:3))a(d.text,d.kind==="final"?"final":"",void 0,d.id);!l.length&&!h&&a("今天的清单全拆完啦","done");const u=r.filter(d=>!t.has(d.id)).length;Ue("#note-more").textContent=u?`还有 ${u} 个隐藏任务 · 点开看`:"点开看全部"}}Ue("#note").addEventListener("click",()=>{_s=!_s,Ue("#note").classList.toggle("open",_s),Rt.paper(),bl()});function Sf(s,e){s.addEventListener("pointerdown",t=>{t.stopPropagation(),t.preventDefault(),e()})}Sf(Ue("#btn-act"),()=>{!je||je.paused||je.act()});Sf(Ue("#btn-haa"),()=>{!je||je.paused||je.haa()});Ue("#btn-pause").addEventListener("click",()=>Sl());function Sl(){!je||je.over||(je.paused=!0,br.reset(),pf(`<h3>歇会儿</h3><p>${hi?.name} · ${Do(je.hour)}</p>`,[{label:"继续拆",cls:"primary",onClick:()=>r1()},{label:"提前收工（结算）",onClick:()=>{ar(),je&&(je.paused=!1,je.endDay())}},{label:ge.muted?"打开音效":"关闭音效",onClick:()=>{ge.muted=!ge.muted,Rt.setMuted(ge.muted),tn(ge),ar(),Sl()}},{label:"回到标题（今天不算）",onClick:()=>{ar(),gl()}}]))}function r1(){ar(),je&&(je.paused=!1),Rt.unlock()}function Do(s){const e=Math.floor(s),t=Math.floor((s-e)*60/10)*10;return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function o1(s){const e=s.map,t=Cs(ge,e.id);t.days++,t.best=Math.max(t.best,s.total),ge.totalDamage+=s.total;const n=s.cleared&&!t.cleared;s.cleared&&(t.cleared=!0);let i=null;n&&Ba[e.id]&&!ge.skins.includes(Ba[e.id])&&(i=Ba[e.id],ge.skins.push(i)),tn(ge),window.setTimeout(()=>a1(s,t.days,n,i),s.cleared?200:900)}function a1(s,e,t,n){br.reset();const i=s.damage.length?s.damage.map(l=>`<div class="r-line"><span>${l.name}</span><span>¥${l.value}</span></div>`).join(""):'<div class="r-line"><span>（什么都没坏）</span><span>¥0</span></div>',r=s.tasks.length?s.tasks.map(l=>`<div class="r-line task"><span>✓ ${l.text}</span><span>+${l.reward}</span></div>`).join(""):'<div class="r-line task"><span>今天没划掉任何一项</span><span></span></div>',o=Pi[Pi.findIndex(l=>l.id===s.map.id)+1];Ue("#receipt-paper").innerHTML=`
    <h2>今日拆家报告</h2>
    <div class="r-sub">${s.map.name} · 第 ${e} 天 · ${Do(s.map.day[0])}–${Do(Math.min(s.map.day[1],je?.hour??s.map.day[1]))}</div>
    ${s.total>0||s.cleared?`<div class="r-stamp"><span>${s.cleared?"通关！":"已拆！"}</span></div>`:""}
    <hr>${i}<hr>
    <div class="r-total"><span>拆家损失</span><b>¥${s.total.toLocaleString()}</b></div>
    <div class="r-title">${_b(s.total)}</div>
    <hr>${r}
    <div class="r-line"><span>捡到小鱼干</span><span>${s.treats} 条</span></div>
    <div class="r-line"><span>小鱼干合计</span><span>+${s.fish}</span></div>
    <div class="r-line"><span>被抓次数</span><span>${s.caught}</span></div>
    <div class="r-note">${s.cleared?o?`「${o.name}」解锁了！`:"全部拆完了！":"清单进度已保存，明天接着拆"}${n?`<br>衣柜里多了一只「${Lo.find(l=>l.id===n)?.name}」`:""}${t&&s.map.id==="home"?"<br>代码库里可以安装「高跳补丁」了":""}</div>`;const a=Ue("#receipt-buttons");a.innerHTML="";const c=(l,h,u)=>{const d=document.createElement("button");d.className=`btn ${h}`,d.textContent=l,d.addEventListener("click",()=>{Rt.click(),u()}),a.appendChild(d)};c("再拆一天","primary",()=>Ml(s.map)),c("换个地方","",()=>{No(),_l()}),c("代码库","",()=>{No(),vl()}),Ps("receipt"),s.cleared&&Rt.win()}function qu(s){const e={x:0,y:0,behind:!1};return xn.project(s,e),e}function c1(){const s=je;s.holdClock=!0;const e=s.cat.pos.clone(),t=s.world.byId.get("nightstand"),n=[{text:"早上八点，主人还在睡。按住屏幕任意处拖动，走两步。",drag:!0,target:()=>qu(s.cat.pos.clone().add(new R(0,.3,0))),done:()=>s.cat.pos.distanceTo(e)>1},{text:"床头柜上有一杯水。朝床头柜走过去，撞上它就会跳上去。",target:()=>qu(new R((t.rect.x0+t.rect.x1)/2,.8,(t.rect.z0+t.rect.z1)/2)),done:()=>s.cat.support?.id==="nightstand"},{text:"黄色小三角 = 能动手的东西。点右下角的「拍」，推下去！",target:Io("#btn-act"),done:()=>s.progress.done.has("glass"),minTime:.3},{text:"啪！主人醒了。快溜，别在碎杯子旁边被他逮到。",maxTime:4.5},{text:"左上角是今天的捣蛋清单。拆掉一项，划掉一项。点它能看提示和隐藏任务。",target:Io("#note"),place:"bottom",next:"知道了"},{text:"天黑前能拆多少拆多少。被追的时候：跳到高处、钻进纸箱，或者——连点「哈」。",place:"bottom",next:"开拆！"}];li.onFinish=()=>{s.holdClock=!1,ge.tutorialDone=!0,tn(ge)},li.start(n)}function wf(s,e){ge.tips.includes(s)||li.active||(ge.tips.push(s),tn(ge),li.onFinish=()=>{},li.start([{maxTime:5,...e}]))}function l1(s){const e=mb(s,new Set(ge.codes));if(e.length){for(const t of e)ge.codes.push(t.id),yl("底层代码已加载",t.name,t.line);tn(ge)}s.t==="caught"&&wf("caught",{text:"被抱走了……连点右下角「挣扎」能挣脱。不挣也行，他只会把你放到阳台。",target:Io("#btn-act")})}let $u=performance.now();const Tf=s=>{requestAnimationFrame(Tf);const e=Math.min(.05,(s-$u)/1e3);$u=s,h1(e,s)};function h1(s,e){if(An==="play"&&je){li.blocking||Gu()||je.update(s,br.read()),u1(s),li.update(s,Gu()),gf.update(xn),xn.render();return}if(je&&An==="receipt"){xn.render();return}if(Ln&&(An==="title"||An==="maps"||An==="skills"||An==="closet")){const t=Ln.cat;t.animate(s);const n=e/1e3;xn.viewWidth=4.2,xn.follow(t.pos.x+Math.sin(n*.15)*.4,.2,t.pos.z+.35,0,0,s),xn.cutaway(t.pos,s);for(const i of Ln.humans)i.rig.update(s,"lie",n);xn.render()}}requestAnimationFrame(Tf);let Xa=0,Yu="";function u1(s){const e=je;if(!e)return;Xa+=s,xn.viewWidth=5.4;const t=e.humans.some(a=>a.mode==="chase"||a.mode==="reach"||a.mode==="carryCat");Rt.setScene("play",t?3:2),Ue("#speed").classList.toggle("on",t||e.cat.boost>0);const n=e.action,i=hb[n.kind],r=n.prop?.def.name??n.solid?.furn?.name??"",o=`${i}|${r}`;o!==Yu&&(Yu=o,Ue("#act-label").textContent=i,Ue("#act-sub").textContent=n.kind==="meow"?"叫人过来":r,Ue("#btn-act").classList.toggle("long",i.length>1),Ue("#btn-act").classList.toggle("hot",n.kind!=="meow")),Ue("#btn-haa").classList.toggle("hidden",!e.haaReady),e.haaReady&&!ge.tips.includes("haa")&&wf("haa",{text:"要被抓了！连点三下「哈」！",target:Io("#btn-haa"),maxTime:3}),Xa>.25&&(Xa=0,Ue("#clock-time").textContent=Do(e.hour),Ue("#clock-sun").classList.toggle("evening",e.hour>=16.5))}zM().then(gl);
