(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Jo="186",Du=0,kl=1,Iu=2,wr=1,Uu=2,As=3,Ei=0,We=1,vn=2,Xn=0,ns=1,zl=2,Gl=3,Hl=4,Nu=5,Ji=100,Fu=101,Ou=102,Bu=103,ku=104,zu=200,Gu=201,Hu=202,Vu=203,mh=204,gh=205,Wu=206,Xu=207,qu=208,$u=209,Yu=210,Ku=211,Zu=212,Ju=213,Qu=214,eo=0,no=1,io=2,Fs=3,so=4,ro=5,ao=6,oo=7,_h=0,ju=1,tf=2,Pn=0,xh=1,vh=2,Mh=3,Sh=4,bh=5,yh=6,Eh=7,Th=300,Ti=301,rs=302,la=303,ca=304,Zr=306,Os=1e3,Gn=1001,lo=1002,Be=1003,ef=1004,Ks=1005,Ae=1006,ha=1007,li=1008,sn=1009,wh=1010,Ah=1011,Bs=1012,Qo=1013,Ln=1014,bn=1015,Dn=1016,jo=1017,tl=1018,ks=1020,Rh=35902,Ch=35899,Ph=1021,Lh=1022,rn=1023,$n=1026,_i=1027,el=1028,nl=1029,wi=1030,il=1031,sl=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,co=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,_o=37488,xo=37489,Nr=37490,vo=37491,Mo=37808,So=37809,bo=37810,yo=37811,Eo=37812,To=37813,wo=37814,Ao=37815,Ro=37816,Co=37817,Po=37818,Lo=37819,Do=37820,Io=37821,Uo=36492,No=36494,Fo=36495,Oo=36283,Bo=36284,Fr=36285,ko=36286,nf=3200,Vl=0,sf=1,Ke="",hn="srgb",zs="srgb-linear",Or="linear",ae="srgb",ua=7680,rf=519,af=512,of=513,lf=514,rl=515,cf=516,hf=517,al=518,uf=519,ff=35044,Wl=35048,Xl="300 es",Cn=2e3,Br=2001;function df(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){const i=kr("canvas");return i.style.display="block",i}const ql={};function $l(...i){const t="THREE."+i.shift();console.log(t,...i)}function Dh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=Dh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Dh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function is(...i){const t=i.join(" ");t in ql||(ql[t]=!0,It(...i))}function mf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const gf={[eo]:no,[io]:ao,[so]:oo,[Fs]:ro,[no]:eo,[ao]:io,[oo]:so,[ro]:Fs};class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Ps=Math.PI/180,Gs=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function ol(i,t){return(i%t+t)%t}function _f(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ls(i,t,e){return(1-e)*i+e*t}function vf(i,t,e,n){return Ls(i,t,1-Math.exp(-e*n))}function Mf(i,t=1){return t-Math.abs(ol(i,t*2)-t)}function Sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ef(i,t){return i+Math.random()*(t-i)}function Tf(i){return i*(.5-Math.random())}function wf(i){i!==void 0&&(Yl=i);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Af(i){return i*Ps}function Rf(i){return i*Gs}function Cf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Pf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Df(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*d,o*h,o*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const If={DEG2RAD:Ps,RAD2DEG:Gs,generateUUID:fs,clamp:Xt,euclideanModulo:ol,mapLinear:_f,inverseLerp:xf,lerp:Ls,damp:vf,pingpong:Mf,smoothstep:Sf,smootherstep:bf,randInt:yf,randFloat:Ef,randFloatSpread:Tf,seededRandom:wf,degToRad:Af,radToDeg:Rf,isPowerOfTwo:Cf,ceilPowerOfTwo:Pf,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Df,normalize:$e,denormalize:Qi};class Lt{static{Lt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],x=r[a+2],v=r[a+3];if(u!==v||l!==f||c!==d||h!==x){let m=l*f+c*d+h*x+u*v;m<0&&(f=-f,d=-d,x=-x,v=-v,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),A=Math.sin(b);p=Math.sin(p*b)/A,o=Math.sin(o*b)/A,l=l*p+f*o,c=c*p+d*o,h=h*p+x*o,u=u*p+v*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+x*o,u=u*p+v*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-o*d,t[e+2]=c*x+h*d+o*f-l*u,t[e+3]=h*x-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{static{N.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new N,Kl=new Pi;class Ft{static{Ft.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],v=s[0],m=s[3],p=s[6],b=s[1],A=s[4],M=s[7],y=s[2],E=s[5],R=s[8];return r[0]=a*v+o*b+l*y,r[3]=a*m+o*A+l*E,r[6]=a*p+o*M+l*R,r[1]=c*v+h*b+u*y,r[4]=c*m+h*A+u*E,r[7]=c*p+h*M+u*R,r[2]=f*v+d*b+x*y,r[5]=f*m+d*A+x*E,r[8]=f*p+d*M+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,x=e*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(da.makeScale(t,e)),this}rotate(t){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(da.makeRotation(-t)),this}translate(t,e){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Ft,Zl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uf(){const i={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ke?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zs]:{primaries:t,whitePoint:n,transfer:Or,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const Wt=Uf();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class Nf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=kr("canvas")),Ni.width=t.width,Ni.height=t.height;const s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ff=0;class ll{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pa(s[a].image)):r.push(pa(s[a]))}else r=pa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let Of=0;const ma=new N;class Xe extends Ci{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Gn,s=Gn,r=Ae,a=li,o=rn,l=sn,c=Xe.DEFAULT_ANISOTROPY,h=Ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=fs(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ma).x}get height(){return this.source.getSize(ma).y}get depth(){return this.source.getSize(ma).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Th;Xe.DEFAULT_ANISOTROPY=1;class Me{static{Me.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,M=(d+1)/2,y=(p+1)/2,E=(h+f)/4,R=(u+v)/4,_=(x+m)/4;return A>M&&A>y?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=R/n):M>y?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=_/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=R/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-x)*(m-x)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(u-v)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bf extends Ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Xe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ll(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Bf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ih extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kf extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class me{static{me.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,x,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),a=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,x=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=x+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,x=c*h,v=c*u;e[0]=f+v*o,e[4]=x*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,x=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,x=o*h,v=o*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=x*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,d=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zf,t,Gf)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ei.crossVectors(n,tn),ei.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ei.crossVectors(n,tn)),ei.normalize(),Zs.crossVectors(tn,ei),s[0]=ei.x,s[4]=Zs.x,s[8]=tn.x,s[1]=ei.y,s[5]=Zs.y,s[9]=tn.y,s[2]=ei.z,s[6]=Zs.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],v=n[6],m=n[10],p=n[14],b=n[3],A=n[7],M=n[11],y=n[15],E=s[0],R=s[4],_=s[8],T=s[12],C=s[1],I=s[5],F=s[9],z=s[13],D=s[2],H=s[6],Y=s[10],K=s[14],nt=s[3],X=s[7],j=s[11],et=s[15];return r[0]=a*E+o*C+l*D+c*nt,r[4]=a*R+o*I+l*H+c*X,r[8]=a*_+o*F+l*Y+c*j,r[12]=a*T+o*z+l*K+c*et,r[1]=h*E+u*C+f*D+d*nt,r[5]=h*R+u*I+f*H+d*X,r[9]=h*_+u*F+f*Y+d*j,r[13]=h*T+u*z+f*K+d*et,r[2]=x*E+v*C+m*D+p*nt,r[6]=x*R+v*I+m*H+p*X,r[10]=x*_+v*F+m*Y+p*j,r[14]=x*T+v*z+m*K+p*et,r[3]=b*E+A*C+M*D+y*nt,r[7]=b*R+A*I+M*H+y*X,r[11]=b*_+A*F+M*Y+y*j,r[15]=b*T+A*z+M*K+y*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],v=t[7],m=t[11],p=t[15],b=l*d-c*f,A=o*d-c*u,M=o*f-l*u,y=a*d-c*h,E=a*f-l*h,R=a*u-o*h;return e*(v*b-m*A+p*M)-n*(x*b-m*y+p*E)+s*(x*A-v*y+p*R)-r*(x*M-v*E+m*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],v=t[13],m=t[14],p=t[15],b=e*o-n*a,A=e*l-s*a,M=e*c-r*a,y=n*l-s*o,E=n*c-r*o,R=s*c-r*l,_=h*v-u*x,T=h*m-f*x,C=h*p-d*x,I=u*m-f*v,F=u*p-d*v,z=f*p-d*m,D=b*z-A*F+M*I+y*C-E*T+R*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/D;return t[0]=(o*z-l*F+c*I)*H,t[1]=(s*F-n*z-r*I)*H,t[2]=(v*R-m*E+p*y)*H,t[3]=(f*E-u*R-d*y)*H,t[4]=(l*C-a*z-c*T)*H,t[5]=(e*z-s*C+r*T)*H,t[6]=(m*M-x*R-p*A)*H,t[7]=(h*R-f*M+d*A)*H,t[8]=(a*F-o*C+c*_)*H,t[9]=(n*C-e*F-r*_)*H,t[10]=(x*E-v*M+p*b)*H,t[11]=(u*M-h*E-d*b)*H,t[12]=(o*T-a*I-l*_)*H,t[13]=(e*I-n*T+s*_)*H,t[14]=(v*A-x*y-m*b)*H,t[15]=(h*y-u*A+f*b)*H,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,x=r*u,v=a*h,m=a*u,p=o*u,b=l*c,A=l*h,M=l*u,y=n.x,E=n.y,R=n.z;return s[0]=(1-(v+p))*y,s[1]=(d+M)*y,s[2]=(x-A)*y,s[3]=0,s[4]=(d-M)*E,s[5]=(1-(f+p))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(x+A)*R,s[9]=(m-b)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Fi.set(s[0],s[1],s[2]).length();const o=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);const c=1/a,h=1/o,u=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Cn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let x,v;if(l)x=r/(a-r),v=a*r/(a-r);else if(o===Cn)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Br)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Cn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let x,v;if(l)x=1/(a-r),v=a/(a-r);else if(o===Cn)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===Br)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new N,mn=new me,zf=new N(0,0,0),Gf=new N(1,1,1),ei=new N,Zs=new N,tn=new N,Ql=new me,jl=new Pi;class Ai{constructor(t=0,e=0,n=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hf=0;const tc=new N,Oi=new Pi,Un=new me,Js=new N,ms=new N,Vf=new N,Wf=new Pi,ec=new N(1,0,0),nc=new N(0,1,0),ic=new N(0,0,1),sc={type:"added"},Xf={type:"removed"},Bi={type:"childadded",child:null},ga={type:"childremoved",child:null};class on extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new N,e=new Ai,n=new Pi,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Ft}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return tc.copy(t).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ms,Js,this.up):Un.lookAt(Js,ms,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Un),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xf),ga.child=t,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}on.DEFAULT_UP=new N(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qf={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=ol(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xa(a,r,t+1/3),this.g=xa(a,r,t),this.b=xa(a,r,t-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=Uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Wt.workingToColorSpace(He.copy(this),t),Math.round(Xt(He.r*255,0,255))*65536+Math.round(Xt(He.g*255,0,255))*256+Math.round(Xt(He.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=hn){Wt.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Qs);const n=Ls(ni.h,Qs.h,e),s=Ls(ni.s,Qs.s,e),r=Ls(ni.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Ct;Ct.NAMES=Uh;class Nh extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gn=new N,Nn=new N,va=new N,Fn=new N,ki=new N,zi=new N,rc=new N,Ma=new N,Sa=new N,ba=new N,ya=new Me,Ea=new Me,Ta=new Me;class Mn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Nn.subVectors(n,e),va.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(Nn),l=gn.dot(va),c=Nn.dot(Nn),h=Nn.dot(va),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ya.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),ya.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ya,r.x),a.addScaledVector(Ea,r.y),a.addScaledVector(Ta,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Nn.subVectors(t,e),gn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),gn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ki.subVectors(s,n),zi.subVectors(r,n),Ma.subVectors(t,n);const l=ki.dot(Ma),c=zi.dot(Ma);if(l<=0&&c<=0)return e.copy(n);Sa.subVectors(t,s);const h=ki.dot(Sa),u=zi.dot(Sa);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ki,a);ba.subVectors(t,r);const d=ki.dot(ba),x=zi.dot(ba);if(x>=0&&d<=x)return e.copy(r);const v=d*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(zi,o);const m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return rc.subVectors(r,s),o=(u-h)/(u-h+(d-x)),e.copy(s).addScaledVector(rc,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(ki,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Li{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),tr.subVectors(this.max,gs),Gi.subVectors(t.a,gs),Hi.subVectors(t.b,gs),Vi.subVectors(t.c,gs),ii.subVectors(Hi,Gi),si.subVectors(Vi,Hi),ui.subVectors(Gi,Vi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-ui.z,ui.y,ii.z,0,-ii.x,si.z,0,-si.x,ui.z,0,-ui.x,-ii.y,ii.x,0,-si.y,si.x,0,-ui.y,ui.x,0];return!wa(e,Gi,Hi,Vi,tr)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,Gi,Hi,Vi,tr))?!1:(er.crossVectors(ii,si),e=[er.x,er.y,er.z],wa(e,Gi,Hi,Vi,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new N,new N,new N,new N,new N,new N,new N,new N],_n=new N,js=new Li,Gi=new N,Hi=new N,Vi=new N,ii=new N,si=new N,ui=new N,gs=new N,tr=new N,er=new N,fi=new N;function wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);const o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ee=new N,nr=new Lt;let $f=0;class je extends Ci{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$f++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ff,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Fh extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oh extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Yf=new Li,_s=new N,Aa=new N;class Xs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Aa)),this.expandByPoint(_s.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Kf=0;const cn=new me,Ra=new on,Wi=new N,en=new Li,xs=new Li,Ie=new N;class Fe extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(df(t)?Oh:Fh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(en.min,xs.min),en.expandByPoint(Ie),Ie.addVectors(en.max,xs.max),en.expandByPoint(Ie)):(en.expandByPoint(xs.min),en.expandByPoint(xs.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Ie.add(Wi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new N,l[_]=new N;const c=new N,h=new N,u=new N,f=new Lt,d=new Lt,x=new Lt,v=new N,m=new N;function p(_,T,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),x.fromBufferAttribute(r,C),h.sub(c),u.sub(c),d.sub(f),x.sub(f);const I=1/(d.x*x.y-x.x*d.y);isFinite(I)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(I),o[_].add(v),o[T].add(v),o[C].add(v),l[_].add(m),l[T].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,T=b.length;_<T;++_){const C=b[_],I=C.start,F=C.count;for(let z=I,D=I+F;z<D;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const A=new N,M=new N,y=new N,E=new N;function R(_){y.fromBufferAttribute(s,_),E.copy(y);const T=o[_];A.copy(T),A.sub(y.multiplyScalar(y.dot(T))).normalize(),M.crossVectors(E,T);const I=M.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,I)}for(let _=0,T=b.length;_<T;++_){const C=b[_],I=C.start,F=C.count;for(let z=I,D=I+F;z<D;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const x=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new je(f,h,u)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ca=new N,Zf=new N,Jf=new Ft;class kn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ca.subVectors(n,e).cross(Zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ca),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jf.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Qf=0;class Jr extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=ns,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Bn=new N,Pa=new N,ir=new N,sr=new N;class Bh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pa.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(Pa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=sr.dot(this.direction),l=-sr.dot(ir),c=sr.lengthSq(),h=Math.abs(1-a*a);let u,f,d,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pa).addScaledVector(ir,f),d}intersectSphere(t,e){if(t.radius<0)return null;Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,x=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,b=n.y-a.y,A=n.z-a.z,M=Math.abs(l),y=Math.abs(c),E=Math.abs(h);let R,_,T,C,I,F,z,D,H,Y,K,nt;if(M>=y&&M>=E?(T=l,F=u,H=x,nt=p,l>=0?(R=c,_=h,C=f,I=d,z=v,D=m,Y=b,K=A):(R=h,_=c,C=d,I=f,z=m,D=v,Y=A,K=b)):y>=E?(T=c,F=f,H=v,nt=b,c>=0?(R=h,_=l,C=d,I=u,z=m,D=x,Y=A,K=p):(R=l,_=h,C=u,I=d,z=x,D=m,Y=p,K=A)):(T=h,F=d,H=m,nt=A,h>=0?(R=l,_=c,C=u,I=f,z=x,D=v,Y=p,K=b):(R=c,_=l,C=f,I=u,z=v,D=x,Y=b,K=p)),T===0)return null;const X=R/T,j=_/T,et=1/T,Rt=C-X*F,wt=I-j*F,he=z-X*H,qt=D-j*H,jt=Y-X*nt,q=K-j*nt,Q=jt*qt-q*he,vt=Rt*q-wt*jt,Ut=he*wt-qt*Rt;if(s){if(Q<0||vt<0||Ut<0)return null}else if((Q<0||vt<0||Ut<0)&&(Q>0||vt>0||Ut>0))return null;const _t=Q+vt+Ut;if(_t===0)return null;const zt=et*(Q*F+vt*H+Ut*nt);return(_t>0?zt<0:zt>0)?null:this.at(zt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ac=new me,di=new Bh,rr=new Xs,oc=new N,ar=new N,or=new N,lr=new N,La=new N,cr=new N,lc=new N,hr=new N;class Qt extends on{constructor(t=new Fe,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(La.fromBufferAttribute(u,t),a?cr.addScaledVector(La,h):cr.addScaledVector(La.sub(e),h))}e.add(cr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(rr.containsPoint(di.origin)===!1&&(di.intersectSphere(rr,oc)===null||di.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(ac.copy(r).invert(),di.copy(t.ray).applyMatrix4(ac),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){const m=f[x],p=a[m.materialIndex],b=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,y=A;M<y;M+=3){const E=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);s=ur(this,p,t,n,c,h,u,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){const b=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=ur(this,a,t,n,c,h,u,b,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){const m=f[x],p=a[m.materialIndex],b=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,y=A;M<y;M+=3){const E=M,R=M+1,_=M+2;s=ur(this,p,t,n,c,h,u,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){const b=m,A=m+1,M=m+2;s=ur(this,a,t,n,c,h,u,b,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function jf(i,t,e,n,s,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ei,o),l===null)return null;hr.copy(o),hr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:i}}function ur(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ar),i.getVertexPosition(l,or),i.getVertexPosition(c,lr);const h=jf(i,t,e,n,ar,or,lr,lc);if(h){const u=new N;Mn.getBarycoord(lc,ar,or,lr,u),s&&(h.uv=Mn.getInterpolatedAttribute(s,o,l,c,u,new Lt)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,l,c,u,new Lt)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Mn.getNormal(ar,or,lr,f.normal),h.face=f,h.barycoord=u}return h}class hl extends Xe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,h=Be,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new me,cc=new me,fr=[],hc=new Li,td=new me,vs=new Qt,Ms=new Xs;class zo extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,td)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),hc.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(hc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Ms.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),cc.multiplyMatrices(n,Xi),vs.matrixWorld=cc,vs.raycast(t,fr);for(let a=0,o=fr.length;a<o;a++){const l=fr[a];l.instanceId=r,l.object=this,e.push(l)}fr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hl(new Float32Array(s*this.count),s,this.count,el,bn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pi=new Xs,ed=new Lt(.5,.5),dr=new N;class kh{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],x=r[8],v=r[9],m=r[10],p=r[11],b=r[12],A=r[13],M=r[14],y=r[15];if(s[0].setComponents(c-a,d-h,p-x,y-b).normalize(),s[1].setComponents(c+a,d+h,p+x,y+b).normalize(),s[2].setComponents(c+o,d+u,p+v,y+A).normalize(),s[3].setComponents(c-o,d-u,p-v,y-A).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,d-f,p-m,y-M).normalize();else if(s[4].setComponents(c-l,d-f,p-m,y-M).normalize(),e===Cn)s[5].setComponents(c+l,d+f,p+m,y+M).normalize();else if(e===Br)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){pi.center.set(0,0,0);const e=ed.distanceTo(t.center);return pi.radius=.7071067811865476+e,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zh extends Xe{constructor(t=[],e=Ti,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Si extends Xe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends Xe{constructor(t,e,n=Ln,s,r,a,o=Be,l=Be,c,h=$n,u=1){if(h!==$n&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ll(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class nd extends Hs{constructor(t,e=Ln,n=Ti,s,r,a=Be,o=Be,l,c=$n){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Gh extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yn extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function x(v,m,p,b,A,M,y,E,R,_,T){const C=M/R,I=y/_,F=M/2,z=y/2,D=E/2,H=R+1,Y=_+1;let K=0,nt=0;const X=new N;for(let j=0;j<Y;j++){const et=j*I-z;for(let Rt=0;Rt<H;Rt++){const wt=Rt*C-F;X[v]=wt*b,X[m]=et*A,X[p]=D,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(Rt/R),u.push(1-j/_),K+=1}}for(let j=0;j<_;j++)for(let et=0;et<R;et++){const Rt=f+et+H*j,wt=f+et+H*(j+1),he=f+(et+1)+H*(j+1),qt=f+(et+1)+H*j;l.push(Rt,wt,qt),l.push(wt,he,qt),nt+=6}o.addGroup(d,nt,T),d+=nt,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qr extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new N,h=new Lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Jt extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let x=0;const v=[],m=n/2;let p=0;b(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(d,2));function b(){const M=new N,y=new N;let E=0;const R=(e-t)/n;for(let _=0;_<=r;_++){const T=[],C=_/r,I=C*(e-t)+t;for(let F=0;F<=s;F++){const z=F/s,D=z*l+o,H=Math.sin(D),Y=Math.cos(D);y.x=I*H,y.y=-C*n+m,y.z=I*Y,u.push(y.x,y.y,y.z),M.set(H,R,Y).normalize(),f.push(M.x,M.y,M.z),d.push(z,1-C),T.push(x++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const C=v[T][_],I=v[T+1][_],F=v[T+1][_+1],z=v[T][_+1];(t>0||T!==0)&&(h.push(C,I,z),E+=3),(e>0||T!==r-1)&&(h.push(I,F,z),E+=3)}c.addGroup(p,E,0),p+=E}function A(M){const y=x,E=new Lt,R=new N;let _=0;const T=M===!0?t:e,C=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*C,0),f.push(0,C,0),d.push(.5,.5),x++;const I=x;for(let F=0;F<=s;F++){const D=F/s*l+o,H=Math.cos(D),Y=Math.sin(D);R.x=T*Y,R.y=m*C,R.z=T*H,u.push(R.x,R.y,R.z),f.push(0,C,0),E.x=H*.5+.5,E.y=Y*.5*C+.5,d.push(E.x,E.y),x++}for(let F=0;F<s;F++){const z=y+F,D=I+F;M===!0?h.push(D,D+1,z):h.push(D+1,D,z),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class as extends Jt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new as(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ul extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const A=new N,M=new N,y=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],A),d(e[E+1],M),d(e[E+2],y),l(A,M,y,b)}function l(b,A,M,y){const E=y+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const T=b.clone().lerp(M,_/E),C=A.clone().lerp(M,_/E),I=E-_;for(let F=0;F<=I;F++)F===0&&_===E?R[_][F]=T:R[_][F]=T.clone().lerp(C,F/I)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){const C=Math.floor(T/2);T%2===0?(f(R[_][C+1]),f(R[_+1][C]),f(R[_][C])):(f(R[_][C+1]),f(R[_+1][C+1]),f(R[_+1][C]))}}function c(b){const A=new N;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(b),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function h(){const b=new N;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];const M=m(b)/2/Math.PI+.5,y=p(b)/Math.PI+.5;a.push(M,1-y)}x(),u()}function u(){for(let b=0;b<a.length;b+=6){const A=a[b+0],M=a[b+2],y=a[b+4],E=Math.max(A,M,y),R=Math.min(A,M,y);E>.9&&R<.1&&(A<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),y<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,A){const M=b*3;A.x=t[M+0],A.y=t[M+1],A.z=t[M+2]}function x(){const b=new N,A=new N,M=new N,y=new N,E=new Lt,R=new Lt,_=new Lt;for(let T=0,C=0;T<r.length;T+=9,C+=6){b.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),E.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),y.copy(b).add(A).add(M).divideScalar(3);const I=m(y);v(E,C+0,b,I),v(R,C+2,A,I),v(_,C+4,M,I)}}function v(b,A,M,y){y<0&&b.x===1&&(a[A]=b.x-1),M.x===0&&M.z===0&&(a[A]=y/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.vertices,t.indices,t.radius,t.detail)}}class jr extends ul{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jr(t.radius,t.detail)}}class Kn extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],x=[],v=[],m=[];for(let p=0;p<h;p++){const b=p*f-a;for(let A=0;A<c;A++){const M=A*u-r;x.push(M,-b,0),v.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const A=b+c*p,M=b+c*(p+1),y=b+1+c*(p+1),E=b+1+c*p;d.push(A,M,E),d.push(M,y,E)}this.setIndex(d),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class fl extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new N,x=new Lt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const b=p+m,A=b,M=b+n+1,y=b+n+2,E=b+1;o.push(A,M,E),o.push(M,y,E)}}this.setIndex(o),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qe extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new N,f=new N,d=[],x=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],A=p/n,M=a+A*o,y=t*Math.cos(M),E=Math.sqrt(t*t-y*y);let R=0;p===0&&a===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const T=_/e,C=s+T*r;u.x=-E*Math.cos(C),u.y=y,u.z=E*Math.sin(C),x.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+R,1-A),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const A=h[p][b+1],M=h[p][b],y=h[p+1][b],E=h[p+1][b+1];(p!==0||a>0)&&d.push(A,M,E),(p!==n-1||l<Math.PI)&&d.push(M,y,E)}this.setIndex(d),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dl extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],f=new N,d=new N,x=new N;for(let v=0;v<=n;v++){const m=a+v/n*o;for(let p=0;p<=s;p++){const b=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(b),d.y=(t+e*Math.cos(m))*Math.sin(b),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(b),f.y=t*Math.sin(b),x.subVectors(d,f).normalize(),h.push(x.x,x.y,x.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,b=(s+1)*(v-1)+m-1,A=(s+1)*(v-1)+m,M=(s+1)*v+m;l.push(p,b,M),l.push(b,A,M)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(uc(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(uc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function uc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function id(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const sd={clone:os,merge:Ye};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class od extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ld extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cd extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pr=new N,mr=new Pi,Tn=new N;class pl extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pr,mr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(pr,mr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new N,fc=new Lt,dc=new Lt;class un extends pl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,fc,dc),e.subVectors(dc,fc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Vh extends pl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hd extends Fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const qi=-90,$i=1;class ud extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(qi,$i,t,e);s.layers=this.layers,this.add(s);const r=new un(qi,$i,t,e);r.layers=this.layers,this.add(r);const a=new un(qi,$i,t,e);a.layers=this.layers,this.add(a);const o=new un(qi,$i,t,e);o.layers=this.layers,this.add(o);const l=new un(qi,$i,t,e);l.layers=this.layers,this.add(l);const c=new un(qi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class fd extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const pc=new me;class dd{constructor(t,e,n=0,s=1/0){this.ray=new Bh(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pc),this}intersectObject(t,e=!0,n=[]){return Go(t,this,n,e),n.sort(mc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Go(t[s],this,n,e);return n.sort(mc),n}}function mc(i,t){return i.distance-t.distance}function Go(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Go(r[a],t,e,!0)}}class Wh{static{Wh.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}function gc(i,t,e,n){const s=pd(n);switch(e){case Ph:return i*t;case el:return i*t/s.components*s.byteLength;case nl:return i*t/s.components*s.byteLength;case wi:return i*t*2/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case Lh:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case sl:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:case fo:return Math.max(i,16)*Math.max(t,8)/4;case co:case uo:return Math.max(i,8)*Math.max(t,8)/2;case po:case mo:case _o:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:case Nr:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Uo:case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fr:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pd(i){switch(i){case sn:case wh:return{byteLength:1,components:1};case Bs:case Ah:case Dn:return{byteLength:2,components:1};case jo:case tl:return{byteLength:2,components:4};case Ln:case Qo:case bn:return{byteLength:4,components:1};case Rh:case Ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);function Xh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function md(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){const x=u[f],v=u[d];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kd=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,pp=`uniform sampler2D dfgLUT;
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,Em=`#define DISTANCE
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
}`,Tm=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,zm=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
}`,Hm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:xd,alphamap_pars_fragment:vd,alphatest_fragment:Md,alphatest_pars_fragment:Sd,aomap_fragment:bd,aomap_pars_fragment:yd,batching_pars_vertex:Ed,batching_vertex:Td,begin_vertex:wd,beginnormal_vertex:Ad,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:Bd,common:kd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Vd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:$d,envmap_fragment:Yd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Zd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:lp,envmap_vertex:Qd,fog_vertex:jd,fog_pars_vertex:tp,fog_fragment:ep,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:fp,lights_physical_fragment:dp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,lightprobes_pars_fragment:xp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:bp,map_fragment:yp,map_pars_fragment:Ep,map_particle_fragment:Tp,map_particle_pars_fragment:wp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Cp,morphcolor_vertex:Pp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Ip,normal_fragment_begin:Up,normal_fragment_maps:Np,normal_pars_fragment:Fp,normal_pars_vertex:Op,normal_vertex:Bp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Vp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:qp,project_vertex:$p,dithering_fragment:Yp,dithering_pars_fragment:Kp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:jp,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:am,specularmap_pars_fragment:om,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:fm,uv_pars_vertex:dm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:xm,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:Sm,depth_vert:bm,depth_frag:ym,distance_vert:Em,distance_frag:Tm,equirect_vert:wm,equirect_frag:Am,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Pm,meshbasic_frag:Lm,meshlambert_vert:Dm,meshlambert_frag:Im,meshmatcap_vert:Um,meshmatcap_frag:Nm,meshnormal_vert:Fm,meshnormal_frag:Om,meshphong_vert:Bm,meshphong_frag:km,meshphysical_vert:zm,meshphysical_frag:Gm,meshtoon_vert:Hm,meshtoon_frag:Vm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:$m,sprite_vert:Ym,sprite_frag:Km},ut={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},An={basic:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ye([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ye([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ye([ut.points,ut.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ye([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ye([ut.common,ut.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ye([ut.sprite,ut.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Ye([ut.common,ut.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Ye([ut.lights,ut.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};An.physical={uniforms:Ye([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const gr={r:0,b:0,g:0},Zm=new me,qh=new Ft;qh.set(-1,0,0,0,1,0,0,0,1);function Jm(i,t,e,n,s,r){const a=new Ct(0);let o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){const M=b.backgroundBlurriness>0;A=t.get(A,M)}return A}function x(b){let A=!1;const M=d(b);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,A){const M=d(A);M&&(M.isCubeTexture||M.mapping===Zr)?(c===void 0&&(c=new Qt(new Yn(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:os(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qh),c.material.toneMapped=Wt.getTransfer(M.colorSpace)!==ae,(h!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Qt(new Kn(2,2),new Ze({name:"BackgroundMaterial",uniforms:os(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(gr,Hh(i)),e.buffers.color.setClear(gr.r,gr.g,gr.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:x,addToRenderList:v,dispose:p}}function Qm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(I,F,z,D,H){let Y=!1;const K=u(I,D,z,F);r!==K&&(r=K,c(r.object)),Y=d(I,D,z,H),Y&&x(I,D,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(I,F,z,D),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,F,z,D){const H=D.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const K=I.isInstancedMesh===!0?I.id:0;let nt=Y[K];nt===void 0&&(nt={},Y[K]=nt);let X=nt[z.id];X===void 0&&(X={},nt[z.id]=X);let j=X[H];return j===void 0&&(j=f(l()),X[H]=j),j}function f(I){const F=[],z=[],D=[];for(let H=0;H<e;H++)F[H]=0,z[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:D,object:I,attributes:{},index:null}}function d(I,F,z,D){const H=r.attributes,Y=F.attributes;let K=0;const nt=z.getAttributes();for(const X in nt)if(nt[X].location>=0){const et=H[X];let Rt=Y[X];if(Rt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Rt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Rt=I.instanceColor)),et===void 0||et.attribute!==Rt||Rt&&et.data!==Rt.data)return!0;K++}return r.attributesNum!==K||r.index!==D}function x(I,F,z,D){const H={},Y=F.attributes;let K=0;const nt=z.getAttributes();for(const X in nt)if(nt[X].location>=0){let et=Y[X];et===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));const Rt={};Rt.attribute=et,et&&et.data&&(Rt.data=et.data),H[X]=Rt,K++}r.attributes=H,r.attributesNum=K,r.index=D}function v(){const I=r.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const z=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;z[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),H[I]!==F&&(i.vertexAttribDivisor(I,F),H[I]=F)}function b(){const I=r.newAttributes,F=r.enabledAttributes;for(let z=0,D=F.length;z<D;z++)F[z]!==I[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function A(I,F,z,D,H,Y,K){K===!0?i.vertexAttribIPointer(I,F,z,H,Y):i.vertexAttribPointer(I,F,z,D,H,Y)}function M(I,F,z,D){v();const H=D.attributes,Y=z.getAttributes(),K=F.defaultAttributeValues;for(const nt in Y){const X=Y[nt];if(X.location>=0){let j=H[nt];if(j===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const et=j.normalized,Rt=j.itemSize,wt=t.get(j);if(wt===void 0)continue;const he=wt.buffer,qt=wt.type,jt=wt.bytesPerElement,q=qt===i.INT||qt===i.UNSIGNED_INT||j.gpuType===Qo;if(j.isInterleavedBufferAttribute){const Q=j.data,vt=Q.stride,Ut=j.offset;if(Q.isInstancedInterleavedBuffer){for(let _t=0;_t<X.locationSize;_t++)p(X.location+_t,Q.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _t=0;_t<X.locationSize;_t++)m(X.location+_t);i.bindBuffer(i.ARRAY_BUFFER,he);for(let _t=0;_t<X.locationSize;_t++)A(X.location+_t,Rt/X.locationSize,qt,et,vt*jt,(Ut+Rt/X.locationSize*_t)*jt,q)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,j.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Q=0;Q<X.locationSize;Q++)A(X.location+Q,Rt/X.locationSize,qt,et,Rt*jt,Rt/X.locationSize*Q*jt,q)}}else if(K!==void 0){const et=K[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}b()}function y(){T();for(const I in n){const F=n[I];for(const z in F){const D=F[z];for(const H in D){const Y=D[H];for(const K in Y)h(Y[K].object),delete Y[K];delete D[H]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const z in F){const D=F[z];for(const H in D){const Y=D[H];for(const K in Y)h(Y[K].object),delete Y[K];delete D[H]}}delete n[I.id]}function R(I){for(const F in n){const z=n[F];for(const D in z){const H=z[D];if(H[I.id]===void 0)continue;const Y=H[I.id];for(const K in Y)h(Y[K].object),delete Y[K];delete H[I.id]}}}function _(I){for(const F in n){const z=n[F],D=I.isInstancedMesh===!0?I.id:0,H=z[D];if(H!==void 0){for(const Y in H){const K=H[Y];for(const nt in K)h(K[nt].object),delete K[nt];delete H[Y]}delete z[D],Object.keys(z).length===0&&delete n[F]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function jm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function t0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==sn&&R!==bn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:M,maxSamples:y,samples:E}}function e0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new kn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const x=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,A=b*4;let M=p.clippingState||null;l.value=M,M=h(x,f,A,d);for(let y=0;y!==A;++y)M[y]=e[y];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const p=d+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=d;A!==v;++A,M+=4)a.copy(u[A]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const es=4,n0=6,i0=20,s0=256,Ss=new Vh,_c=new Ct;let Da=null,Ia=0,Ua=0,Na=!1;const r0=new N,mi=new N;class xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=r0}=r;Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,Ia,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,Yi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:Dn,format:rn,colorSpace:zs,depthBuffer:!1},s=vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=a0(r)),this._blurMaterial=l0(r,t,e),this._ggxMaterial=o0(r,t,e)}return s}_compileMaterial(t){const e=new Qt(new Fe,t);this._renderer.compile(e,Ss)}_sceneToCubeUV(t,e,n,s,r){const l=new un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(_c),u.toneMapping=Pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new Yn,new Ve({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(_c),p=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));const y=this._cubeSize;Yi(s,M*y,A>2?y:0,y,y),u.setRenderTarget(s),p&&u.render(v,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ti||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Yi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ss)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-es?n-x+es:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=x-e,Yi(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Ss),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Yi(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Ss)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],u=3*h*(s>this._lodMax-es?s-this._lodMax+es:0),f=4*(this._cubeSize-h);Yi(e,u,f,3*h,2*h),a.setRenderTarget(e),a.render(l,Ss)}}function a0(i){const t=[],e=[];let n=i;const s=i-es+1+n0;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,x=new Float32Array(d*f*u),v=new Float32Array(d*f*u);for(let p=0;p<u;p++){const b=p%3*2/3-1,A=p>2?0:-1,M=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];x.set(M,d*f*p);for(let y=0;y<f;y++){const E=h[y*2]*2-1,R=h[y*2+1]*2-1;p===0?mi.set(1,R,E):p===1?mi.set(-E,1,-R):p===2?mi.set(-E,R,1):p===3?mi.set(-1,R,-E):p===4?mi.set(-E,-1,R):mi.set(E,R,-1),mi.toArray(v,(p*f+y)*d)}}const m=new Fe;m.setAttribute("position",new je(x,d)),m.setAttribute("outputDirection",new je(v,d)),e.push(new Qt(m,null)),n>es&&n--}return{lodMeshes:e,sizeLods:t}}function vc(i,t,e){const n=new fn(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function o0(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function l0(i,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:i0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Mc(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Sc(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ta(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class $h extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Xn});r.uniforms.tEquirect.value=e;const a=new Qt(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=Ae),new ud(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function c0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===la||d===ca)if(t.has(f)){const x=t.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const v=new $h(x.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,x=d===la||d===ca,v=d===Ti||d===rs;if(x||v){let m=e.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new xc(i)),m=x?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const b=f.image;return x&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new xc(i)),m=x?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===la?f.mapping=Ti:d===ca&&(f.mapping=rs),f}function l(f){let d=0;const x=6;for(let v=0;v<x;v++)f[v]!==void 0&&d++;return d===x}function c(f){const d=f.target;d.removeEventListener("dispose",c);const x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function h0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&is("WebGLRenderer: "+n+" extension not supported."),s}}}function u0(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,x=u.attributes.position;let v=0;if(x===void 0)return;if(d!==null){const b=d.array;v=d.version;for(let A=0,M=b.length;A<M;A+=3){const y=b[A+0],E=b[A+1],R=b[A+2];f.push(y,E,E,R,R,y)}}else{const b=x.array;v=x.version;for(let A=0,M=b.length/3-1;A<M;A+=3){const y=A+0,E=A+1,R=A+2;f.push(y,E,E,R,R,y)}}const m=new(x.count>=65535?Oh:Fh)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function f0(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let v=0;for(let m=0;m<d;m++)v+=f[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function d0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function p0(i,t,e){const n=new WeakMap,s=new Me;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let A=0;d===!0&&(A=1),x===!0&&(A=2),v===!0&&(A=3);let M=o.attributes.position.count*A,y=1;M>t.maxTextureSize&&(y=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*y*4*u),R=new Ih(E,M,y,u);R.type=bn,R.needsUpdate=!0;const _=A*4;for(let C=0;C<u;C++){const I=m[C],F=p[C],z=b[C],D=M*y*4*C;for(let H=0;H<I.count;H++){const Y=H*_;d===!0&&(s.fromBufferAttribute(I,H),E[D+Y+0]=s.x,E[D+Y+1]=s.y,E[D+Y+2]=s.z,E[D+Y+3]=0),x===!0&&(s.fromBufferAttribute(F,H),E[D+Y+4]=s.x,E[D+Y+5]=s.y,E[D+Y+6]=s.z,E[D+Y+7]=0),v===!0&&(s.fromBufferAttribute(z,H),E[D+Y+8]=s.x,E[D+Y+9]=s.y,E[D+Y+10]=s.z,E[D+Y+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new Lt(M,y)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function m0(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const g0={[xh]:"LINEAR_TONE_MAPPING",[vh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Sh]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[Eh]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};function _0(i,t,e,n,s,r){const a=new fn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Fe;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));const h=new od({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qt(c,h),f=new Vh(-1,1,1,-1,0,1);let d=null,x=null,v=!1,m,p=null,b=[],A=!1;this.setSize=function(M,y){a.setSize(M,y),o!==null&&o.setSize(M,y),l!==null&&l.setSize(M,y);for(let E=0;E<b.length;E++){const R=b[E];R.setSize&&R.setSize(M,y)}},this.setEffects=function(M){b=M,A=b.length>0&&b[0].isRenderPass===!0;const y=a.width,E=a.height;b.length>0&&o===null&&(o=new fn(y,E,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(y,E,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){const _=b[R];_.setSize&&_.setSize(y,E)}},this.begin=function(M,y){if(v||M.toneMapping===Pn&&b.length===0)return!1;if(p=y,y!==null){const E=y.width,R=y.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return A===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Pn,!0},this.hasRenderPass=function(){return A},this.end=function(M,y){M.toneMapping=m,v=!0;let E=a,R=o;for(let _=0;_<b.length;_++){const T=b[_];T.enabled!==!1&&(T.render(M,R,E,y),T.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(d!==M.outputColorSpace||x!==M.toneMapping){d=M.outputColorSpace,x=M.toneMapping,h.defines={},Wt.getTransfer(d)===ae&&(h.defines.SRGB_TRANSFER="");const _=g0[x];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(p),M.render(u,f),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Yh=new Xe,Ho=new Hs(1,1),Kh=new Ih,Zh=new kf,Jh=new zh,bc=[],yc=[],Ec=new Float32Array(16),Tc=new Float32Array(9),wc=new Float32Array(4);function ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bc[s];if(r===void 0&&(r=new Float32Array(s),bc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=yc[t];e===void 0&&(e=new Int32Array(t),yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function x0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function b0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;wc.set(n),i.uniformMatrix2fv(this.addr,!1,wc),Le(e,n)}}function y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),Le(e,n)}}function E0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),Le(e,n)}}function T0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function I0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ho.compareFunction=e.isReversedDepthBuffer()?al:rl,r=Ho):r=Yh,e.setTexture2D(t||r,s)}function U0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zh,s)}function N0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jh,s)}function F0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kh,s)}function O0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return M0;case 35666:return S0;case 35674:return b0;case 35675:return y0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return w0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}function B0(i,t){i.uniform1fv(this.addr,t)}function k0(i,t){const e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function z0(i,t){const e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function G0(i,t){const e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function H0(i,t){const e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function V0(i,t){const e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function W0(i,t){const e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function X0(i,t){i.uniform1iv(this.addr,t)}function q0(i,t){i.uniform2iv(this.addr,t)}function $0(i,t){i.uniform3iv(this.addr,t)}function Y0(i,t){i.uniform4iv(this.addr,t)}function K0(i,t){i.uniform1uiv(this.addr,t)}function Z0(i,t){i.uniform2uiv(this.addr,t)}function J0(i,t){i.uniform3uiv(this.addr,t)}function Q0(i,t){i.uniform4uiv(this.addr,t)}function j0(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ho:a=Yh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function tg(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zh,r[a])}function eg(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jh,r[a])}function ng(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kh,r[a])}function ig(i){switch(i){case 5126:return B0;case 35664:return k0;case 35665:return z0;case 35666:return G0;case 35674:return H0;case 35675:return V0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return $0;case 35669:case 35673:return Y0;case 5125:return K0;case 36294:return Z0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}class sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=O0(e.type)}}class rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ig(e.type)}}class ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function Ac(i,t){i.seq.push(t),i.map[t.id]=t}function og(i,t,e){const n=i.name,s=n.length;for(Fa.lastIndex=0;;){const r=Fa.exec(n),a=Fa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ac(e,c===void 0?new sg(o,i,t):new rg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ag(o),Ac(e,u)),e=u}}}class Lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);og(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Rc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lg=37297;let cg=0;function hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Cc=new Ft;function ug(i){Wt._getMatrix(Cc,Wt.workingColorSpace,i);const t=`mat3( ${Cc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Or:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hg(i.getShaderSource(t),o)}else return r}function fg(i,t){const e=ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const dg={[xh]:"Linear",[vh]:"Reinhard",[Mh]:"Cineon",[Sh]:"ACESFilmic",[yh]:"AgX",[Eh]:"Neutral",[bh]:"Custom"};function pg(i,t){const e=dg[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _r=new N;function mg(){Wt.getLuminanceCoefficients(_r);const i=_r.x.toFixed(4),t=_r.y.toFixed(4),e=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function _g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Rs(i){return i!==""}function Lc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(vg,Sg)}const Mg=new Map;function Sg(i,t){let e=kt[t];if(e===void 0){const n=Mg.get(t);if(n!==void 0)e=kt[n],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vo(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(bg,yg)}function yg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Eg={[wr]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function Tg(i){return Eg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wg={[Ti]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function Ag(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":wg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rg={[rs]:"ENVMAP_MODE_REFRACTION"};function Cg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pg={[_h]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[tf]:"ENVMAP_BLENDING_ADD"};function Lg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pg[i.combine]||"ENVMAP_BLENDING_NONE"}function Dg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ig(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Tg(e),c=Ag(e),h=Cg(e),u=Lg(e),f=Dg(e),d=gg(e),x=_g(r),v=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,fg("linearToOutputTexel",e.outputColorSpace),mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Vo(a),a=Lc(a,e),a=Dc(a,e),o=Vo(o),o=Lc(o,e),o=Dc(o,e),a=Ic(a),o=Ic(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=b+m+a,M=b+p+o,y=Rc(s,s.VERTEX_SHADER,A),E=Rc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,y),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(y)||"",D=s.getShaderInfoLog(E)||"",H=F.trim(),Y=z.trim(),K=D.trim();let nt=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,E);else{const j=Pc(s,y,"vertex"),et=Pc(s,E,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+j+`
`+et)}else H!==""?It("WebGLProgram: Program Info Log:",H):(Y===""||K==="")&&(X=!1);X&&(I.diagnostics={runnable:nt,programLog:H,vertexShader:{log:Y,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(y),s.deleteShader(E),_=new Lr(s,v),T=xg(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,lg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=E,this}let Ug=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fg(t),e.set(t,n)),n}}class Fg{constructor(t){this.id=Ug++,this.code=t,this.usedTimes=0}}function Og(i){return i===wi||i===Nr||i===Fr}function Bg(i,t,e,n,s,r){const a=new cl,o=new Ng,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,C,I,F,z){const D=I.fog,H=F.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,nt=t.get(_.envMap||Y,K),X=nt&&nt.mapping===Zr?nt.image.height:null,j=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&It("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Rt=et!==void 0?et.length:0;let wt=0;H.morphAttributes.position!==void 0&&(wt=1),H.morphAttributes.normal!==void 0&&(wt=2),H.morphAttributes.color!==void 0&&(wt=3);let he,qt,jt,q;if(j){const fe=An[j];he=fe.vertexShader,qt=fe.fragmentShader}else{he=_.vertexShader,qt=_.fragmentShader;const fe=o.getVertexShaderStage(_),te=o.getFragmentShaderStage(_);o.update(_,fe,te),jt=fe.id,q=te.id}const Q=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,_t=F.isBatchedMesh===!0,zt=!!_.map,Te=!!_.matcap,Gt=!!nt,Zt=!!_.aoMap,ue=!!_.lightMap,Vt=!!_.bumpMap&&_.wireframe===!1,_e=!!_.normalMap,De=!!_.displacementMap,Je=!!_.emissiveMap,xe=!!_.metalnessMap,be=!!_.roughnessMap,U=_.anisotropy>0,ke=_.clearcoat>0,re=_.dispersion>0,w=_.retroreflectivity>0,g=_.iridescence>0,O=_.sheen>0,G=_.transmission>0,W=U&&!!_.anisotropyMap,st=ke&&!!_.clearcoatMap,rt=ke&&!!_.clearcoatNormalMap,$=ke&&!!_.clearcoatRoughnessMap,J=g&&!!_.iridescenceMap,at=g&&!!_.iridescenceThicknessMap,Et=O&&!!_.sheenColorMap,ht=O&&!!_.sheenRoughnessMap,ot=!!_.specularMap,Tt=!!_.specularColorMap,Pt=!!_.specularIntensityMap,Ot=G&&!!_.transmissionMap,L=G&&!!_.thicknessMap,lt=!!_.gradientMap,Z=!!_.alphaMap,ct=_.alphaTest>0,mt=!!_.alphaHash,tt=!!_.extensions;let At=Pn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(At=i.toneMapping);const bt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:he,fragmentShader:qt,defines:_.defines,customVertexShaderID:jt,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:_t,batchingColor:_t&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:Te,envMap:Gt,envMapMode:Gt&&nt.mapping,envMapCubeUVHeight:X,aoMap:Zt,lightMap:ue,bumpMap:Vt,normalMap:_e,displacementMap:De,emissiveMap:Je,normalMapObjectSpace:_e&&_.normalMapType===sf,normalMapTangentSpace:_e&&_.normalMapType===Vl,packedNormalMap:_e&&_.normalMapType===Vl&&Og(_.normalMap.format),metalnessMap:xe,roughnessMap:be,anisotropy:U,anisotropyMap:W,clearcoat:ke,clearcoatMap:st,clearcoatNormalMap:rt,clearcoatRoughnessMap:$,dispersion:re,retroreflection:w,iridescence:g,iridescenceMap:J,iridescenceThicknessMap:at,sheen:O,sheenColorMap:Et,sheenRoughnessMap:ht,specularMap:ot,specularColorMap:Tt,specularIntensityMap:Pt,transmission:G,transmissionMap:Ot,thicknessMap:L,gradientMap:lt,opaque:_.transparent===!1&&_.blending===ns&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:mt,combine:_.combine,mapUv:zt&&x(_.map.channel),aoMapUv:Zt&&x(_.aoMap.channel),lightMapUv:ue&&x(_.lightMap.channel),bumpMapUv:Vt&&x(_.bumpMap.channel),normalMapUv:_e&&x(_.normalMap.channel),displacementMapUv:De&&x(_.displacementMap.channel),emissiveMapUv:Je&&x(_.emissiveMap.channel),metalnessMapUv:xe&&x(_.metalnessMap.channel),roughnessMapUv:be&&x(_.roughnessMap.channel),anisotropyMapUv:W&&x(_.anisotropyMap.channel),clearcoatMapUv:st&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ht&&x(_.sheenRoughnessMap.channel),specularMapUv:ot&&x(_.specularMap.channel),specularColorMapUv:Tt&&x(_.specularColorMap.channel),specularIntensityMapUv:Pt&&x(_.specularIntensityMap.channel),transmissionMapUv:Ot&&x(_.transmissionMap.channel),thicknessMapUv:L&&x(_.thicknessMap.channel),alphaMapUv:Z&&x(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_e||U),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(zt||Z),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&_e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&Wt.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:Je&&_.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:tt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&_.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(T,_),b(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){const T=d[_.type];let C;if(T){const I=An[T];C=sd.clone(I.uniforms)}else C=_.uniforms;return C}function M(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Ig(i,T,_,s),c.push(C),h.set(T,C)),C}function y(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:R}}function kg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,x,v,m,p){let b=i[t];return b===void 0?(b={id:f.id,object:f,geometry:d,material:x,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},i[t]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=x,b.materialVariant=a(f),b.groupOrder=v,b.renderOrder=f.renderOrder,b.z=m,b.group=p),t++,b}function l(f,d,x,v,m,p,b){b.reversedDepth===!0&&(m=-m);const A=o(f,d,x,v,m,p);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):e.push(A)}function c(f,d,x,v,m,p){const b=o(f,d,x,v,m,p);x.transmission>0?n.unshift(b):x.transparent===!0?s.unshift(b):e.unshift(b)}function h(f,d){e.length>1&&e.sort(f||zg),n.length>1&&n.sort(d||Nc),s.length>1&&s.sort(d||Nc)}function u(){for(let f=t,d=i.length;f<d;f++){const x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Gg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Fc,i.set(n,[a])):s>=r.length?(a=new Fc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Ct};break;case"SpotLight":e={position:new N,direction:new N,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wg=0;function Xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qg(i){const t=new Hg,e=Vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new me,a=new me;function o(c){let h=0,u=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,x=0,v=0,m=0,p=0,b=0,A=0,M=0,y=0,E=0,R=0,_=0,T=0,C=0;c.sort(Xg);for(let F=0,z=c.length;F<z;F++){const D=c[F],H=D.color,Y=D.intensity,K=D.distance;let nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===wi?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=H.r*Y,u+=H.g*Y,f+=H.b*Y;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],Y);C++}else if(D.isSunLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[x]=et,n.sunShadowMap[x]=nt;const Rt=j.getViewportCount();for(let wt=0;wt<Rt;wt++)n.sunShadowMatrix[v+wt]=j.getMatrix(wt),n.sunShadowCascade[v+wt]=j._cascadeData[wt];v+=Rt,x++}n.sun[d]=X,d++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=D.shadow.matrix,y++}n.directional[m]=X,m++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(H).multiplyScalar(Y),X.distance=K,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[b]=X;const j=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,j.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[b]=j.matrix,D.castShadow){const et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.spotShadow[b]=et,n.spotShadowMap[b]=nt,R++}b++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(H).multiplyScalar(Y),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=X,A++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const j=D.shadow,et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=X,p++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(Y),X.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[M]=X,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==b||I.rectAreaLength!==A||I.hemiLength!==M||I.numSunShadows!==x||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==R||I.numSpotMaps!==_||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=b,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=b,I.rectAreaLength=A,I.hemiLength=M,I.numSunShadows=x,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=R,I.numSpotMaps=_,I.numLightProbes=C,n.version=Wg++)}function l(c,h){let u=0,f=0,d=0,x=0,v=0,m=0;const p=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){const M=c[b];if(M.isSunLight){const y=n.sun[u];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),u++}else if(M.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(M.isSpotLight){const y=n.spot[x];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),x++}else if(M.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Oc(i){const t=new qg(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $g(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Oc(i),t.set(s,[o])):r>=a.length?(o=new Oc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
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
}`,Zg=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Jg=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Bc=new me,bs=new N,Oa=new N;function Qg(i,t,e){let n=new kh;const s=new Lt,r=new Lt,a=new Me,o=new ld,l=new cd,c={},h=e.maxTextureSize,u={[Ei]:We,[We]:Ei,[vn]:vn},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Yg,fragmentShader:Kg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new Fe;x.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Uu&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Xn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==this.type;z&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=E.length;D<H;D++){const Y=E[D],K=Y.shadow;if(K===void 0){It("WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const nt=K.getFrameExtents();s.multiply(nt),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,K.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=X,K.map===null||z===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===As){if(Y.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new fn(s.x,s.y,{format:wi,type:Dn,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),K.map.texture.name=Y.name+".shadowMap",K.map.depthTexture=new Hs(s.x,s.y,bn),K.map.depthTexture.name=Y.name+".shadowMapDepth",K.map.depthTexture.format=$n,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Be,K.map.depthTexture.magFilter=Be}else Y.isPointLight?(K.map=new $h(s.x),K.map.depthTexture=new nd(s.x,Ln)):(K.map=new fn(s.x,s.y),K.map.depthTexture=new Hs(s.x,s.y,Ln)),K.map.depthTexture.name=Y.name+".shadowMap",K.map.depthTexture.format=$n,this.type===wr?(K.map.depthTexture.compareFunction=X?al:rl,K.map.depthTexture.minFilter=Ae,K.map.depthTexture.magFilter=Ae):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Be,K.map.depthTexture.magFilter=Be);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const j=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Y.isPointLight!==!0&&K.updateMatrices(Y,_);for(let et=0;et<j;et++){const Rt=K.getCamera(et);if(Y.isPointLight){const wt=K.camera,he=K.matrix,qt=Y.distance||wt.far;qt!==wt.far&&(wt.far=qt,wt.updateProjectionMatrix()),bs.setFromMatrixPosition(Y.matrixWorld),wt.position.copy(bs),Oa.copy(wt.position),Oa.add(Zg[et]),wt.up.copy(Jg[et]),wt.lookAt(Oa),wt.updateMatrixWorld(),he.makeTranslation(-bs.x,-bs.y,-bs.z),Bc.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Bc,wt.coordinateSystem,wt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,et),i.clear();else{et===0&&(i.setRenderTarget(K.map),i.clear());const wt=K.getViewport(et);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),F.viewport(a)}n=K.getFrustum(et),M(R,_,Rt,Y,this.type)}K.isPointLightShadow!==!0&&this.type===As&&b(K,_),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,I)};function b(E,R){const _=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new fn(s.x,s.y,{format:wi,type:Dn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,_,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,_,d,v,null)}function A(E,R,_,T){let C=null;const I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=C.uuid,z=R.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let H=D[z];H===void 0&&(H=C.clone(),D[z]=H,R.addEventListener("dispose",y)),C=H}if(C.visible=R.visible,C.wireframe=R.wireframe,T===As?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=_}return C}function M(E,R,_,T,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===As)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const z=t.update(E),D=E.material;if(Array.isArray(D)){const H=z.groups;for(let Y=0,K=H.length;Y<K;Y++){const nt=H[Y],X=D[nt.materialIndex];if(X&&X.visible){const j=A(E,X,T,C);E.onBeforeShadow(i,E,R,_,z,j,nt),i.renderBufferDirect(_,null,z,j,E,nt),E.onAfterShadow(i,E,R,_,z,j,nt)}}}else if(D.visible){const H=A(E,D,T,C);E.onBeforeShadow(i,E,R,_,z,H,null),i.renderBufferDirect(_,null,z,H,E,null),E.onAfterShadow(i,E,R,_,z,H,null)}}const F=E.children;for(let z=0,D=F.length;z<D;z++)M(F[z],R,_,T,C)}function y(E){E.target.removeEventListener("dispose",y);for(const _ in c){const T=c[_],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function jg(i,t){function e(){let L=!1;const lt=new Me;let Z=null;const ct=new Me(0,0,0,0);return{setMask:function(mt){Z!==mt&&!L&&(i.colorMask(mt,mt,mt,mt),Z=mt)},setLocked:function(mt){L=mt},setClear:function(mt,tt,At,bt,fe){fe===!0&&(mt*=bt,tt*=bt,At*=bt),lt.set(mt,tt,At,bt),ct.equals(lt)===!1&&(i.clearColor(mt,tt,At,bt),ct.copy(lt))},reset:function(){L=!1,Z=null,ct.set(-1,0,0,0)}}}function n(){let L=!1,lt=!1,Z=null,ct=null,mt=null;return{setReversed:function(tt){if(lt!==tt){const At=t.get("EXT_clip_control");tt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),lt=tt;const bt=mt;mt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(tt){tt?Q(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(tt){Z!==tt&&!L&&(i.depthMask(tt),Z=tt)},setFunc:function(tt){if(lt&&(tt=gf[tt]),ct!==tt){switch(tt){case eo:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=tt}},setLocked:function(tt){L=tt},setClear:function(tt){mt!==tt&&(mt=tt,lt&&(tt=1-tt),i.clearDepth(tt))},reset:function(){L=!1,Z=null,ct=null,mt=null,lt=!1}}}function s(){let L=!1,lt=null,Z=null,ct=null,mt=null,tt=null,At=null,bt=null,fe=null;return{setTest:function(te){L||(te?Q(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(te){lt!==te&&!L&&(i.stencilMask(te),lt=te)},setFunc:function(te,pn,yn){(Z!==te||ct!==pn||mt!==yn)&&(i.stencilFunc(te,pn,yn),Z=te,ct=pn,mt=yn)},setOp:function(te,pn,yn){(tt!==te||At!==pn||bt!==yn)&&(i.stencilOp(te,pn,yn),tt=te,At=pn,bt=yn)},setLocked:function(te){L=te},setClear:function(te){fe!==te&&(i.clearStencil(te),fe=te)},reset:function(){L=!1,lt=null,Z=null,ct=null,mt=null,tt=null,At=null,bt=null,fe=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f={},d=new WeakMap,x=[],v=null,m=!1,p=null,b=null,A=null,M=null,y=null,E=null,R=null,_=new Ct(0,0,0),T=0,C=!1,I=null,F=null,z=null,D=null,H=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,nt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=nt>=2);let j=null,et={};const Rt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),he=new Me().fromArray(Rt),qt=new Me().fromArray(wt);function jt(L,lt,Z,ct){const mt=new Uint8Array(4),tt=i.createTexture();i.bindTexture(L,tt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<Z;At++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(lt+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return tt}const q={};q[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Fs),Vt(!1),_e(kl),Q(i.CULL_FACE),Zt(Xn);function Q(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function vt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ut(L,lt){return f[L]!==lt?(i.bindFramebuffer(L,lt),f[L]=lt,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function _t(L,lt){let Z=x,ct=!1;if(L){Z=d.get(lt),Z===void 0&&(Z=[],d.set(lt,Z));const mt=L.textures;if(Z.length!==mt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,At=mt.length;tt<At;tt++)Z[tt]=i.COLOR_ATTACHMENT0+tt;Z.length=mt.length,ct=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ct=!0);ct&&i.drawBuffers(Z)}function zt(L){return v!==L?(i.useProgram(L),v=L,!0):!1}const Te={[Ji]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};Te[Bu]=i.MIN,Te[ku]=i.MAX;const Gt={[zu]:i.ZERO,[Gu]:i.ONE,[Hu]:i.SRC_COLOR,[mh]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[gh]:i.ONE_MINUS_SRC_ALPHA,[$u]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[Zu]:i.ONE_MINUS_CONSTANT_COLOR,[Ju]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(L,lt,Z,ct,mt,tt,At,bt,fe,te){if(L===Xn){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),L!==Nu){if(L!==p||te!==C){if((b!==Ji||y!==Ji)&&(i.blendEquation(i.FUNC_ADD),b=Ji,y=Ji),te)switch(L){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",L);break}else switch(L){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",L);break}A=null,M=null,E=null,R=null,_.set(0,0,0),T=0,p=L,C=te}return}mt=mt||lt,tt=tt||Z,At=At||ct,(lt!==b||mt!==y)&&(i.blendEquationSeparate(Te[lt],Te[mt]),b=lt,y=mt),(Z!==A||ct!==M||tt!==E||At!==R)&&(i.blendFuncSeparate(Gt[Z],Gt[ct],Gt[tt],Gt[At]),A=Z,M=ct,E=tt,R=At),(bt.equals(_)===!1||fe!==T)&&(i.blendColor(bt.r,bt.g,bt.b,fe),_.copy(bt),T=fe),p=L,C=!1}function ue(L,lt){L.side===vn?vt(i.CULL_FACE):Q(i.CULL_FACE);let Z=L.side===We;lt&&(Z=!Z),Vt(Z),L.blending===ns&&L.transparent===!1?Zt(Xn):Zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ct=L.stencilWrite;o.setTest(ct),ct&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Je(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(L){I!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),I=L)}function _e(L){L!==Du?(Q(i.CULL_FACE),L!==F&&(L===kl?i.cullFace(i.BACK):L===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),F=L}function De(L){L!==z&&(K&&i.lineWidth(L),z=L)}function Je(L,lt,Z){L?(Q(i.POLYGON_OFFSET_FILL),(D!==lt||H!==Z)&&(D=lt,H=Z,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,Z))):vt(i.POLYGON_OFFSET_FILL)}function xe(L){L?Q(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function be(L){L===void 0&&(L=i.TEXTURE0+Y-1),j!==L&&(i.activeTexture(L),j=L)}function U(L,lt,Z){Z===void 0&&(j===null?Z=i.TEXTURE0+Y-1:Z=j);let ct=et[Z];ct===void 0&&(ct={type:void 0,texture:void 0},et[Z]=ct),(ct.type!==L||ct.texture!==lt)&&(j!==Z&&(i.activeTexture(Z),j=Z),i.bindTexture(L,lt||q[L]),ct.type=L,ct.texture=lt)}function ke(){const L=et[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function g(){try{i.texSubImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function O(){try{i.texSubImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function st(){try{i.texStorage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function rt(){try{i.texStorage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function $(){try{i.texImage2D(...arguments)}catch(L){Kt("WebGLState:",L)}}function J(){try{i.texImage3D(...arguments)}catch(L){Kt("WebGLState:",L)}}function at(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function Et(L,lt){u[L]!==lt&&(i.pixelStorei(L,lt),u[L]=lt)}function ht(L){he.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function ot(L){qt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),qt.copy(L))}function Tt(L,lt){let Z=c.get(lt);Z===void 0&&(Z=new WeakMap,c.set(lt,Z));let ct=Z.get(L);ct===void 0&&(ct=i.getUniformBlockIndex(lt,L.name),Z.set(L,ct))}function Pt(L,lt){const ct=c.get(lt).get(L);l.get(lt)!==ct&&(i.uniformBlockBinding(lt,ct,L.__bindingPointIndex),l.set(lt,ct))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,et={},f={},d=new WeakMap,x=[],v=null,m=!1,p=null,b=null,A=null,M=null,y=null,E=null,R=null,_=new Ct(0,0,0),T=0,C=!1,I=null,F=null,z=null,D=null,H=null,he.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:vt,bindFramebuffer:Ut,drawBuffers:_t,useProgram:zt,setBlending:Zt,setMaterial:ue,setFlipSided:Vt,setCullFace:_e,setLineWidth:De,setPolygonOffset:Je,setScissorTest:xe,activeTexture:be,bindTexture:U,unbindTexture:ke,compressedTexImage2D:re,compressedTexImage3D:w,texImage2D:$,texImage3D:J,pixelStorei:Et,getParameter:at,updateUBOMapping:Tt,uniformBlockBinding:Pt,texStorage2D:st,texStorage3D:rt,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:ht,viewport:ot,reset:Ot}}function t_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,g){return x?new OffscreenCanvas(w,g):kr("canvas")}function m(w,g,O){let G=1;const W=re(w);if((W.width>O||W.height>O)&&(G=O/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const st=Math.floor(G*W.width),rt=Math.floor(G*W.height);f===void 0&&(f=v(st,rt));const $=g?v(st,rt):f;return $.width=st,$.height=rt,$.getContext("2d").drawImage(w,0,0,st,rt),It("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+st+"x"+rt+")."),$}else return"data"in w&&It("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function b(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,g,O,G,W,st=!1){if(w!==null){if(i[w]!==void 0)return i[w];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let rt;G&&(rt=t.get("EXT_texture_norm16"),rt||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8),O===i.UNSIGNED_SHORT&&rt&&($=rt.R16_EXT),O===i.SHORT&&rt&&($=rt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),g===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8),O===i.UNSIGNED_SHORT&&rt&&($=rt.RG16_EXT),O===i.SHORT&&rt&&($=rt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&rt&&($=rt.RGB16_EXT),O===i.SHORT&&rt&&($=rt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){const J=st?Or:Wt.getTransfer(W);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=J===ae?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&rt&&($=rt.RGBA16_EXT),O===i.SHORT&&rt&&($=rt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(w,g){let O;return w?g===null||g===Ln||g===ks?O=i.DEPTH24_STENCIL8:g===bn?O=i.DEPTH32F_STENCIL8:g===Bs&&(O=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ln||g===ks?O=i.DEPTH_COMPONENT24:g===bn?O=i.DEPTH_COMPONENT32F:g===Bs&&(O=i.DEPTH_COMPONENT16),O}function E(w,g){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Be&&w.minFilter!==Ae?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){const g=w.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&u.delete(g)}function _(w){const g=w.target;g.removeEventListener("dispose",_),I(g)}function T(w){const g=n.get(w);if(g.__webglInit===void 0)return;const O=w.source,G=d.get(O);if(G){const W=G[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(w),Object.keys(G).length===0&&d.delete(O)}n.remove(w)}function C(w){const g=n.get(w);i.deleteTexture(g.__webglTexture);const O=w.source,G=d.get(O);delete G[g.__cacheKey],a.memory.textures--}function I(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let W=0;W<g.__webglFramebuffer[G].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[G][W]);else i.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)i.deleteFramebuffer(g.__webglFramebuffer[G]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=w.textures;for(let G=0,W=O.length;G<W;G++){const st=n.get(O[G]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(O[G])}n.remove(w)}let F=0;function z(){F=0}function D(){return F}function H(w){F=w}function Y(){const w=F;return w>=s.maxTextures&&It("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function K(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function nt(w,g){const O=n.get(w);if(w.isVideoTexture&&U(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const G=w.image;if(G===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(O,w,g);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function X(w,g){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){vt(O,w,g);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function j(w,g){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){vt(O,w,g);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function et(w,g){const O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Ut(O,w,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const Rt={[Os]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},wt={[Be]:i.NEAREST,[ef]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},he={[af]:i.NEVER,[uf]:i.ALWAYS,[of]:i.LESS,[rl]:i.LEQUAL,[lf]:i.EQUAL,[al]:i.GEQUAL,[cf]:i.GREATER,[hf]:i.NOTEQUAL};function qt(w,g){if(g.type===bn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ae||g.magFilter===ha||g.magFilter===Ks||g.magFilter===li||g.minFilter===Ae||g.minFilter===ha||g.minFilter===Ks||g.minFilter===li)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Rt[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Rt[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Rt[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,wt[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,wt[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,he[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Be||g.minFilter!==Ks&&g.minFilter!==li||g.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function jt(w,g){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));const G=g.source;let W=d.get(G);W===void 0&&(W={},d.set(G,W));const st=K(g);if(st!==w.__cacheKey){W[st]===void 0&&(W[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),W[st].usedTimes++;const rt=W[w.__cacheKey];rt!==void 0&&(W[w.__cacheKey].usedTimes--,rt.usedTimes===0&&C(g)),w.__cacheKey=st,w.__webglTexture=W[st].texture}return O}function q(w,g,O){return Math.floor(Math.floor(w/O)/g)}function Q(w,g,O,G){const st=w.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,G,g.data);else{st.sort((Et,ht)=>Et.start-ht.start);let rt=0;for(let Et=1;Et<st.length;Et++){const ht=st[rt],ot=st[Et],Tt=ht.start+ht.count,Pt=q(ot.start,g.width,4),Ot=q(ht.start,g.width,4);ot.start<=Tt+1&&Pt===Ot&&q(ot.start+ot.count-1,g.width,4)===Pt?ht.count=Math.max(ht.count,ot.start+ot.count-ht.start):(++rt,st[rt]=ot)}st.length=rt+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Et=0,ht=st.length;Et<ht;Et++){const ot=st[Et],Tt=Math.floor(ot.start/4),Pt=Math.ceil(ot.count/4),Ot=Tt%g.width,L=Math.floor(Tt/g.width),lt=Pt,Z=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Ot,L,lt,Z,O,G,g.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function vt(w,g,O){let G=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=i.TEXTURE_3D);const W=jt(w,g),st=g.source;e.bindTexture(G,w.__webglTexture,i.TEXTURE0+O);const rt=n.get(st);if(st.version!==rt.__version||W===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Z=Wt.getPrimaries(Wt.workingColorSpace),ct=g.colorSpace===Ke?null:Wt.getPrimaries(g.colorSpace),mt=g.colorSpace===Ke||Z===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let J=m(g.image,!1,s.maxTextureSize);J=ke(g,J);const at=r.convert(g.format,g.colorSpace),Et=r.convert(g.type);let ht=M(g.internalFormat,at,Et,g.normalized,g.colorSpace,g.isVideoTexture);qt(G,g);let ot;const Tt=g.mipmaps,Pt=g.isVideoTexture!==!0,Ot=rt.__version===void 0||W===!0,L=st.dataReady,lt=E(g,J);if(g.isDepthTexture)ht=y(g.format===_i,g.type),Ot&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,ht,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,ht,J.width,J.height,0,at,Et,null));else if(g.isDataTexture)if(Tt.length>0){Pt&&Ot&&e.texStorage2D(i.TEXTURE_2D,lt,ht,Tt[0].width,Tt[0].height);for(let Z=0,ct=Tt.length;Z<ct;Z++)ot=Tt[Z],Pt?L&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ot.width,ot.height,at,Et,ot.data):e.texImage2D(i.TEXTURE_2D,Z,ht,ot.width,ot.height,0,at,Et,ot.data);g.generateMipmaps=!1}else Pt?(Ot&&e.texStorage2D(i.TEXTURE_2D,lt,ht,J.width,J.height),L&&Q(g,J,at,Et)):e.texImage2D(i.TEXTURE_2D,0,ht,J.width,J.height,0,at,Et,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pt&&Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ht,Tt[0].width,Tt[0].height,J.depth);for(let Z=0,ct=Tt.length;Z<ct;Z++)if(ot=Tt[Z],g.format!==rn)if(at!==null)if(Pt){if(L)if(g.layerUpdates.size>0){const mt=gc(ot.width,ot.height,g.format,g.type);for(const tt of g.layerUpdates){const At=ot.data.subarray(tt*mt/ot.data.BYTES_PER_ELEMENT,(tt+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,tt,ot.width,ot.height,1,at,At)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ot.width,ot.height,J.depth,at,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ht,ot.width,ot.height,J.depth,0,ot.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ot.width,ot.height,J.depth,at,Et,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,ht,ot.width,ot.height,J.depth,0,at,Et,ot.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pt&&Ot&&e.texStorage2D(i.TEXTURE_2D,lt,ht,Tt[0].width,Tt[0].height);for(let Z=0,ct=Tt.length;Z<ct;Z++)ot=Tt[Z],g.format!==rn?at!==null?Pt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,ht,ot.width,ot.height,0,ot.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?L&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ot.width,ot.height,at,Et,ot.data):e.texImage2D(i.TEXTURE_2D,Z,ht,ot.width,ot.height,0,at,Et,ot.data)}else if(g.isDataArrayTexture)if(Pt){if(Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ht,J.width,J.height,J.depth),L)if(g.layerUpdates.size>0){const Z=gc(J.width,J.height,g.format,g.type);for(const ct of g.layerUpdates){const mt=J.data.subarray(ct*Z/J.data.BYTES_PER_ELEMENT,(ct+1)*Z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,J.width,J.height,1,at,Et,mt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,at,Et,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,J.width,J.height,J.depth,0,at,Et,J.data);else if(g.isData3DTexture)Pt?(Ot&&e.texStorage3D(i.TEXTURE_3D,lt,ht,J.width,J.height,J.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,at,Et,J.data)):e.texImage3D(i.TEXTURE_3D,0,ht,J.width,J.height,J.depth,0,at,Et,J.data);else if(g.isFramebufferTexture){if(Ot)if(Pt)e.texStorage2D(i.TEXTURE_2D,lt,ht,J.width,J.height);else{let Z=J.width,ct=J.height;for(let mt=0;mt<lt;mt++)e.texImage2D(i.TEXTURE_2D,mt,ht,Z,ct,0,at,Et,null),Z>>=1,ct>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),u.add(g),Z.onpaint=ct=>{const mt=ct.changedElements;for(const tt of u)mt.includes(tt.image)&&(tt.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const mt=i.RGBA,tt=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,tt,At,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Pt&&Ot){const Z=re(Tt[0]);e.texStorage2D(i.TEXTURE_2D,lt,ht,Z.width,Z.height)}for(let Z=0,ct=Tt.length;Z<ct;Z++)ot=Tt[Z],Pt?L&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,at,Et,ot):e.texImage2D(i.TEXTURE_2D,Z,ht,at,Et,ot);g.generateMipmaps=!1}else if(Pt){if(Ot){const Z=re(J);e.texStorage2D(i.TEXTURE_2D,lt,ht,Z.width,Z.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Et,J)}else e.texImage2D(i.TEXTURE_2D,0,ht,at,Et,J);p(g)&&b(G),rt.__version=st.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ut(w,g,O){if(g.image.length!==6)return;const G=jt(w,g),W=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const st=n.get(W);if(W.version!==st.__version||G===!0){e.activeTexture(i.TEXTURE0+O);const rt=Wt.getPrimaries(Wt.workingColorSpace),$=g.colorSpace===Ke?null:Wt.getPrimaries(g.colorSpace),J=g.colorSpace===Ke||rt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const at=g.isCompressedTexture||g.image[0].isCompressedTexture,Et=g.image[0]&&g.image[0].isDataTexture,ht=[];for(let tt=0;tt<6;tt++)!at&&!Et?ht[tt]=m(g.image[tt],!0,s.maxCubemapSize):ht[tt]=Et?g.image[tt].image:g.image[tt],ht[tt]=ke(g,ht[tt]);const ot=ht[0],Tt=r.convert(g.format,g.colorSpace),Pt=r.convert(g.type),Ot=M(g.internalFormat,Tt,Pt,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,lt=st.__version===void 0||G===!0,Z=W.dataReady;let ct=E(g,ot);qt(i.TEXTURE_CUBE_MAP,g);let mt;if(at){L&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ot,ot.width,ot.height);for(let tt=0;tt<6;tt++){mt=ht[tt].mipmaps;for(let At=0;At<mt.length;At++){const bt=mt[At];g.format!==rn?Tt!==null?L?Z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,0,0,bt.width,bt.height,Tt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,Ot,bt.width,bt.height,0,bt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,0,0,bt.width,bt.height,Tt,Pt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,Ot,bt.width,bt.height,0,Tt,Pt,bt.data)}}}else{if(mt=g.mipmaps,L&&lt){mt.length>0&&ct++;const tt=re(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ot,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Et){L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ht[tt].width,ht[tt].height,Tt,Pt,ht[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,ht[tt].width,ht[tt].height,0,Tt,Pt,ht[tt].data);for(let At=0;At<mt.length;At++){const fe=mt[At].image[tt].image;L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,0,0,fe.width,fe.height,Tt,Pt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,Ot,fe.width,fe.height,0,Tt,Pt,fe.data)}}else{L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt,Pt,ht[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,Tt,Pt,ht[tt]);for(let At=0;At<mt.length;At++){const bt=mt[At];L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,0,0,Tt,Pt,bt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,Ot,Tt,Pt,bt.image[tt])}}}p(g)&&b(i.TEXTURE_CUBE_MAP),st.__version=W.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function _t(w,g,O,G,W,st){const rt=r.convert(O.format,O.colorSpace),$=r.convert(O.type),J=M(O.internalFormat,rt,$,O.normalized,O.colorSpace),at=n.get(g),Et=n.get(O);if(Et.__renderTarget=g,!at.__hasExternalTextures){const ht=Math.max(1,g.width>>st),ot=Math.max(1,g.height>>st);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,st,J,ht,ot,g.depth,0,rt,$,null):e.texImage2D(W,st,J,ht,ot,0,rt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,W,Et.__webglTexture,0,xe(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,W,Et.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(w,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const G=g.depthTexture,W=G&&G.isDepthTexture?G.type:null,st=y(g.stencilBuffer,W),rt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(g),st,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(g),st,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,st,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,w)}else{const G=g.textures;for(let W=0;W<G.length;W++){const st=G[W],rt=r.convert(st.format,st.colorSpace),$=r.convert(st.type),J=M(st.internalFormat,rt,$,st.normalized,st.colorSpace);be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(g),J,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(g),J,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,J,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(w,g,O){const G=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),qt(i.TEXTURE_CUBE_MAP,g.depthTexture);const at=r.convert(g.depthTexture.format),Et=r.convert(g.depthTexture.type);let ht;g.depthTexture.format===$n?ht=i.DEPTH_COMPONENT24:g.depthTexture.format===_i&&(ht=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ht,g.width,g.height,0,at,Et,null)}}else nt(g.depthTexture,0);const st=W.__webglTexture,rt=xe(g),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,J=g.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===$n)be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,st,0);else if(g.depthTexture.format===_i)be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(w){const g=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=G}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)Te(g.__webglFramebuffer[G],w,G);else{const G=w.texture.mipmaps;G&&G.length>0?Te(g.__webglFramebuffer[0],w,0):Te(g.__webglFramebuffer,w,0)}else if(O){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=i.createRenderbuffer(),zt(g.__webglDepthbuffer[G],w,!1);else{const W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,st)}}else{const G=w.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),zt(g.__webglDepthbuffer,w,!1);else{const W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(w,g,O){const G=n.get(w);g!==void 0&&_t(G.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Gt(w)}function ue(w){const g=w.texture,O=n.get(w),G=n.get(g);w.addEventListener("dispose",_);const W=w.textures,st=w.isWebGLCubeRenderTarget===!0,rt=W.length>1;if(rt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=g.version,a.memory.textures++),st){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let J=0;J<g.mipmaps.length;J++)O.__webglFramebuffer[$][J]=i.createFramebuffer()}else O.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)O.__webglFramebuffer[$]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(rt)for(let $=0,J=W.length;$<J;$++){const at=n.get(W[$]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&be(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<W.length;$++){const J=W[$];O.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const at=r.convert(J.format,J.colorSpace),Et=r.convert(J.type),ht=M(J.internalFormat,at,Et,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),ot=xe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ht,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,O.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),qt(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)_t(O.__webglFramebuffer[$][J],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else _t(O.__webglFramebuffer[$],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(g)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let $=0,J=W.length;$<J;$++){const at=W[$],Et=n.get(at);let ht=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Et.__webglTexture),qt(ht,at),_t(O.__webglFramebuffer,w,at,i.COLOR_ATTACHMENT0+$,ht,0),p(at)&&b(ht)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,G.__webglTexture),qt($,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)_t(O.__webglFramebuffer[J],w,g,i.COLOR_ATTACHMENT0,$,J);else _t(O.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,$,0);p(g)&&b($),e.unbindTexture()}w.depthBuffer&&Gt(w)}function Vt(w){const g=w.textures;for(let O=0,G=g.length;O<G;O++){const W=g[O];if(p(W)){const st=A(w),rt=n.get(W).__webglTexture;e.bindTexture(st,rt),b(st),e.unbindTexture()}}}const _e=[],De=[];function Je(w){if(w.samples>0){if(be(w)===!1){const g=w.textures,O=w.width,G=w.height;let W=i.COLOR_BUFFER_BIT;const st=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(w),$=g.length>1;if($)for(let at=0;at<g.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);const J=w.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<g.length;at++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);const Et=n.get(g[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,W,i.NEAREST),l===!0&&(_e.length=0,De.length=0,_e.push(i.COLOR_ATTACHMENT0+at),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(_e.push(st),De.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let at=0;at<g.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);const Et=n.get(g[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function xe(w){return Math.min(s.maxSamples,w.samples)}function be(w){const g=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(w){const g=a.render.frame;h.get(w)!==g&&(h.set(w,g),w.update())}function ke(w,g){const O=w.colorSpace,G=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==zs&&O!==Ke&&(Wt.getTransfer(O)===ae?(G!==rn||W!==sn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",O)),g}function re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=z,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=Zt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function e_(i,t){function e(n,s=Ke){let r;const a=Wt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===Ah)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Qo)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Lh)return i.RGB;if(n===rn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===il)return i.RG_INTEGER;if(n===sl)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go||n===_o||n===xo||n===Nr||n===vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===mo)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===go)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_o)return r.COMPRESSED_R11_EAC;if(n===xo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Nr)return r.COMPRESSED_RG11_EAC;if(n===vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mo||n===So||n===bo||n===yo||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===No||n===Fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Uo)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===Bo||n===Fr||n===ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`;class s_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Gh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends Ci{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null;const v=typeof XRWebGLBinding<"u",m=new s_,p={},b=e.getContextAttributes();let A=null,M=null;const y=[],E=[],R=new Lt;let _=null,T=null;const C=new un;C.viewport=new Me;const I=new un;I.viewport=new Me;const F=[C,I],z=new fd;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new _a,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new _a,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new _a,y[q]=Q),Q.getHandSpace()};function Y(q){const Q=E.indexOf(q.inputSource);if(Q===-1)return;const vt=y[Q];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",nt);for(let q=0;q<y.length;q++){const Q=E[q];Q!==null&&(E[q]=null,y[q].disconnect(Q))}D=null,H=null,m.reset();for(const q in p)delete p[q];if(t.setRenderTarget(A),d=null,f=null,u=null,s=null,M=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),T!==null){const q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",K),s.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ut=null,_t=null;b.depth&&(_t=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=b.stencil?_i:$n,Ut=b.stencil?ks:Ln);const zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new fn(f.textureWidth,f.textureHeight,{format:rn,type:sn,depthTexture:new Hs(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const vt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new fn(d.framebufferWidth,d.framebufferHeight,{format:rn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(q){for(let Q=0;Q<q.removed.length;Q++){const vt=q.removed[Q],Ut=E.indexOf(vt);Ut>=0&&(E[Ut]=null,y[Ut].disconnect(vt))}for(let Q=0;Q<q.added.length;Q++){const vt=q.added[Q];let Ut=E.indexOf(vt);if(Ut===-1){for(let zt=0;zt<y.length;zt++)if(zt>=E.length){E.push(vt),Ut=zt;break}else if(E[zt]===null){E[zt]=vt,Ut=zt;break}if(Ut===-1)break}const _t=y[Ut];_t&&_t.connect(vt)}}const X=new N,j=new N;function et(q,Q,vt){X.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);const Ut=X.distanceTo(j),_t=Q.projectionMatrix.elements,zt=vt.projectionMatrix.elements,Te=_t[14]/(_t[10]-1),Gt=_t[14]/(_t[10]+1),Zt=(_t[9]+1)/_t[5],ue=(_t[9]-1)/_t[5],Vt=(_t[8]-1)/_t[0],_e=(zt[8]+1)/zt[0],De=Te*Vt,Je=Te*_e,xe=Ut/(-Vt+_e),be=xe*-Vt;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(be),q.translateZ(xe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_t[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const U=Te+xe,ke=Gt+xe,re=De-be,w=Je+(Ut-be),g=Zt*Gt/ke*U,O=ue*Gt/ke*U;q.projectionMatrix.makePerspective(re,w,g,O,U,ke),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Rt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,vt=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),z.near=I.near=C.near=Q,z.far=I.far=C.far=vt,(D!==z.near||H!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,H=z.far),z.layers.mask=q.layers.mask|6,C.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;const Ut=q.parent,_t=z.cameras;Rt(z,Ut);for(let zt=0;zt<_t.length;zt++)Rt(_t[zt],Ut);_t.length===2?et(z,C,I):z.projectionMatrix.copy(C.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),wt(q,z,Ut)};function wt(q,Q,vt){vt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return p[q]};let he=null;function qt(q,Q){if(h=Q.getViewerPose(c||a),x=Q,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Ut=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,Ut=!0);for(let Gt=0;Gt<vt.length;Gt++){const Zt=vt[Gt];let ue=null;if(d!==null)ue=d.getViewport(Zt);else{const _e=u.getViewSubImage(f,Zt);ue=_e.viewport,Gt===0&&(t.setRenderTargetTextures(M,_e.colorTexture,_e.depthStencilTexture),t.setRenderTarget(M))}let Vt=F[Gt];Vt===void 0&&(Vt=new un,Vt.layers.enable(Gt),Vt.viewport=new Me,F[Gt]=Vt),Vt.matrix.fromArray(Zt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Zt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ue.x,ue.y,ue.width,ue.height),Gt===0&&(z.matrix.copy(Vt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ut===!0&&z.cameras.push(Vt)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Gt=u.getDepthInformation(vt[0]);Gt&&Gt.isValid&&Gt.texture&&m.init(Gt,s.renderState)}if(_t&&_t.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let Gt=0;Gt<vt.length;Gt++){const Zt=vt[Gt].camera;if(Zt){let ue=p[Zt];ue||(ue=new Gh,p[Zt]=ue);const Vt=u.getCameraImage(Zt);ue.sourceTexture=Vt}}}}for(let vt=0;vt<y.length;vt++){const Ut=E[vt],_t=y[vt];Ut!==null&&_t!==void 0&&_t.update(Ut,Q,c||a)}he&&he(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}const jt=new Xh;jt.setAnimationLoop(qt),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}}const a_=new me,Qh=new Ft;Qh.set(-1,0,0,0,1,0,0,0,1);function o_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),A=b.envMap,M=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const E=y.program;n.uniformBlockBinding(M,E)}function c(M,y){let E=s[M.id];E===void 0&&(m(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",b));const R=y.program;n.updateUBOMapping(M,R);const _=t.render.frame;r[M.id]!==_&&(f(M),r[M.id]=_)}function h(M){const y=u();M.__bindingPointIndex=y;const E=i.createBuffer(),R=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let _=0,T=E.length;_<T;_++){const C=E[_];if(Array.isArray(C))for(let I=0,F=C.length;I<F;I++)d(C[I],_,I,R);else d(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,E,R){if(v(M,y,E,R)===!0){const _=M.__offset,T=M.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){const F=T[I],z=p(F);x(F,M.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function x(M,y,E){typeof M=="number"||typeof M=="boolean"?y[0]=M:M.isMatrix3?(y[0]=M.elements[0],y[1]=M.elements[1],y[2]=M.elements[2],y[3]=0,y[4]=M.elements[3],y[5]=M.elements[4],y[6]=M.elements[5],y[7]=0,y[8]=M.elements[6],y[9]=M.elements[7],y[10]=M.elements[8],y[11]=0):ArrayBuffer.isView(M)?y.set(new M.constructor(M.buffer,M.byteOffset,y.length)):M.toArray(y,E)}function v(M,y,E,R){const _=M.value,T=y+"_"+E;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const C=R[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(M){const y=M.uniforms;let E=0;const R=16;for(let T=0,C=y.length;T<C;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let F=0,z=I.length;F<z;F++){const D=I[F],H=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,K=H.length;Y<K;Y++){const nt=H[Y],X=p(nt),j=E%R,et=j%X.boundary,Rt=j+et;E+=et,Rt!==0&&R-Rt<X.storage&&(E+=R-Rt),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=X.storage}}}const _=E%R;return _>0&&(E+=R-_),M.__size=E,M.__cache={},this}function p(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):It("WebGLRenderer: Unsupported uniform value type.",M),y}function b(M){const y=M.target;y.removeEventListener("dispose",b);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function A(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}const c_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function h_(){return wn===null&&(wn=new hl(c_,16,16,wi,Dn),wn.name="DFG_LUT",wn.minFilter=Ae,wn.magFilter=Ae,wn.wrapS=Gn,wn.wrapT=Gn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class u_{constructor(t={}){const{canvas:e=pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=sn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const v=d,m=new Set([sl,il,nl]),p=new Set([sn,Ln,Bs,ks,jo,tl]),b=new Uint32Array(4),A=new Int32Array(4),M=new N;let y=null,E=null;const R=[],_=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,F=null,z=null,D=null,H=null;this._outputColorSpace=hn;let Y=0,K=0,nt=null,X=-1,j=null;const et=new Me,Rt=new Me;let wt=null;const he=new Ct(0);let qt=0,jt=e.width,q=e.height,Q=1,vt=null,Ut=null;const _t=new Me(0,0,jt,q),zt=new Me(0,0,jt,q);let Te=!1;const Gt=new kh;let Zt=!1,ue=!1;const Vt=new me,_e=new N,De=new Me,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function be(){return nt===null?Q:1}let U=n;function ke(S,P){return e.getContext(S,P)}let re,w,g,O,G,W,st,rt,$,J,at,Et,ht,ot,Tt,Pt,Ot,L,lt,Z,ct,mt,tt;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",pn,!1),U===null){const P="webgl2";if(U=ke(P,S),U===null)throw ke(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(S){throw e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Kt("WebGLRenderer: "+S.message),S}function At(){re=new h0(U),re.init(),ct=new e_(U,re),w=new t0(U,re,t,ct),g=new jg(U,re),w.reversedDepthBuffer&&f&&g.buffers.depth.setReversed(!0),z=U.createFramebuffer(),D=U.createFramebuffer(),H=U.createFramebuffer(),O=new d0(U),G=new kg,W=new t_(U,re,g,G,w,ct,O),st=new c0(C),rt=new md(U),mt=new Qm(U,rt),$=new u0(U,rt,O,mt),J=new m0(U,$,rt,mt,O),L=new p0(U,w,W),Tt=new e0(G),at=new Bg(C,st,re,w,mt,Tt),Et=new o_(C,G),ht=new Gg,ot=new $g(re),Ot=new Jm(C,st,g,J,x,l),Pt=new Qg(C,J,w),tt=new l_(U,O,w,g),lt=new jm(U,re,O),Z=new f0(U,re,O),O.programs=at.programs,C.capabilities=w,C.extensions=re,C.properties=G,C.renderLists=ht,C.shadowMap=Pt,C.state=g,C.info=O}v!==sn&&(T=new _0(v,e.width,e.height,o,s,r));const bt=new r_(C,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(jt,q,!1))},this.getSize=function(S){return S.set(jt,q)},this.setSize=function(S,P,V=!0){if(bt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=S,q=P,e.width=Math.floor(S*Q),e.height=Math.floor(P*Q),V===!0&&(e.style.width=S+"px",e.style.height=P+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(jt*Q,q*Q).floor()},this.setDrawingBufferSize=function(S,P,V){jt=S,q=P,Q=V,e.width=Math.floor(S*V),e.height=Math.floor(P*V),this.setViewport(0,0,S,P)},this.setEffects=function(S){if(v===sn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let P=0;P<S.length;P++)if(S[P].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(_t)},this.setViewport=function(S,P,V,B){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,P,V,B),g.viewport(et.copy(_t).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(zt)},this.setScissor=function(S,P,V,B){S.isVector4?zt.set(S.x,S.y,S.z,S.w):zt.set(S,P,V,B),g.scissor(Rt.copy(zt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(S){g.setScissorTest(Te=S)},this.setOpaqueSort=function(S){vt=S},this.setTransparentSort=function(S){Ut=S},this.getClearColor=function(S){return S.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(S=!0,P=!0,V=!0){let B=0;if(S){let k=!1;if(nt!==null){const pt=nt.texture.format;k=m.has(pt)}if(k){const pt=nt.texture.type,xt=p.has(pt),ft=Ot.getClearColor(),Mt=Ot.getClearAlpha(),yt=ft.r,Bt=ft.g,Ht=ft.b;xt?(b[0]=yt,b[1]=Bt,b[2]=Ht,b[3]=Mt,U.clearBufferuiv(U.COLOR,0,b)):(A[0]=yt,A[1]=Bt,A[2]=Ht,A[3]=Mt,U.clearBufferiv(U.COLOR,0,A))}else B|=U.COLOR_BUFFER_BIT}P&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Ot.dispose(),ht.dispose(),ot.dispose(),G.dispose(),st.dispose(),J.dispose(),mt.dispose(),tt.dispose(),at.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Pl),bt.removeEventListener("sessionend",Ll),hi.stop()};function fe(S){S.preventDefault(),$l("WebGLRenderer: Context Lost."),I=!0}function te(){$l("WebGLRenderer: Context Restored."),I=!1;const S=O.autoReset,P=Pt.enabled,V=Pt.autoUpdate,B=Pt.needsUpdate,k=Pt.type;At(),O.autoReset=S,Pt.enabled=P,Pt.autoUpdate=V,Pt.needsUpdate=B,Pt.type=k}function pn(S){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function yn(S){const P=S.target;P.removeEventListener("dispose",yn),Tu(P)}function Tu(S){wu(S),G.remove(S)}function wu(S){const P=G.get(S).programs;P!==void 0&&(P.forEach(function(V){at.releaseProgram(V)}),S.isShaderMaterial&&at.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,V,B,k,pt){P===null&&(P=Je);const xt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ft=Cu(S,P,V,B,k);g.setMaterial(B,xt);let Mt=V.index,yt=1;if(B.wireframe===!0){if(Mt=$.getWireframeAttribute(V),Mt===void 0)return;yt=2}const Bt=V.drawRange,Ht=V.attributes.position;let St=Bt.start*yt,ee=(Bt.start+Bt.count)*yt;pt!==null&&(St=Math.max(St,pt.start*yt),ee=Math.min(ee,(pt.start+pt.count)*yt)),Mt!==null?(St=Math.max(St,0),ee=Math.min(ee,Mt.count)):Ht!=null&&(St=Math.max(St,0),ee=Math.min(ee,Ht.count));const ye=ee-St;if(ye<0||ye===1/0)return;mt.setup(k,B,ft,V,Mt);let ge,le=lt;if(Mt!==null&&(ge=rt.get(Mt),le=Z,le.setIndex(ge)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*be()),le.setMode(U.LINES)):le.setMode(U.TRIANGLES);else if(k.isLine){let ze=B.linewidth;ze===void 0&&(ze=1),g.setLineWidth(ze*be()),k.isLineSegments?le.setMode(U.LINES):k.isLineLoop?le.setMode(U.LINE_LOOP):le.setMode(U.LINE_STRIP)}else k.isPoints?le.setMode(U.POINTS):k.isSprite&&le.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(re.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ze=k._multiDrawStarts,gt=k._multiDrawCounts,qe=k._multiDrawCount,Yt=Mt?rt.get(Mt).bytesPerElement:1,ln=G.get(B).currentProgram.getUniforms();for(let En=0;En<qe;En++)ln.setValue(U,"_gl_DrawID",En),le.render(ze[En]/Yt,gt[En])}else if(k.isInstancedMesh)le.renderInstances(St,ye,k.count);else if(V.isInstancedBufferGeometry){const ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,gt=Math.min(V.instanceCount,ze);le.renderInstances(St,ye,gt)}else le.render(St,ye)};function Cl(S,P,V,B){F!==null&&S.isNodeMaterial&&F.setObject(B,S),Zt===!0&&Tt.setState(S,V,!1),S.transparent===!0&&S.side===vn&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,Ys(S,P,B),S.side=Ei,S.needsUpdate=!0,Ys(S,P,B),S.side=vn):Ys(S,P,B)}this.compile=function(S,P,V=null){V===null&&(V=S),F!==null&&F.renderStart(S,P,V),E=ot.get(V),E.init(P),_.push(E),V.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),S!==V&&S.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),ue=this.localClippingEnabled,Zt=Tt.init(this.clippingPlanes,ue),Zt===!0&&Tt.setGlobalState(this.clippingPlanes,P),F!==null&&Pt.render(E.state.shadowsArray,V,P);const B=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pt=k.material;if(pt)if(Array.isArray(pt))for(let xt=0;xt<pt.length;xt++){const ft=pt[xt];Cl(ft,V,P,k),B.add(ft)}else Cl(pt,V,P,k),B.add(pt)}),E=_.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(S,P,V=null){const B=this.compile(S,P,V);return new Promise(k=>{function pt(){if(B.forEach(function(xt){const Mt=G.get(xt).currentProgram;(Mt===void 0||Mt.isReady())&&B.delete(xt)}),B.size===0){k(S);return}setTimeout(pt,10)}re.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let aa=null;function Au(S){aa&&aa(S)}function Pl(){hi.stop()}function Ll(){hi.start()}const hi=new Xh;hi.setAnimationLoop(Au),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(S){aa=S,bt.setAnimationLoop(S),S===null?hi.stop():hi.start()},bt.addEventListener("sessionstart",Pl),bt.addEventListener("sessionend",Ll),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(S,P);const V=bt.enabled===!0&&bt.isPresenting===!0,B=T!==null&&(nt===null||V)&&T.begin(C,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(P),P=bt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,P,nt),E=ot.get(S,_.length),E.init(P),E.state.textureUnits=W.getTextureUnits(),_.push(E),Vt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Gt.setFromProjectionMatrix(Vt,Cn,P.reversedDepth),ue=this.localClippingEnabled,Zt=Tt.init(this.clippingPlanes,ue),y=ht.get(S,R.length),y.init(),R.push(y),bt.enabled===!0&&bt.isPresenting===!0){const xt=C.xr.getDepthSensingMesh();xt!==null&&oa(xt,P,-1/0,C.sortObjects)}oa(S,P,0,C.sortObjects),y.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&y.sort(vt,Ut),xe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,xe&&Ot.addToRenderList(y,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Tt.beginShadows();const k=E.state.shadowsArray;if(Pt.render(k,S,P),Zt===!0&&Tt.endShadows(),(B&&T.hasRenderPass())===!1){const xt=y.opaque,ft=y.transmissive;if(E.setupLights(),P.isArrayCamera){const Mt=P.cameras;if(ft.length>0)for(let yt=0,Bt=Mt.length;yt<Bt;yt++){const Ht=Mt[yt];Il(xt,ft,S,Ht)}xe&&Ot.render(S);for(let yt=0,Bt=Mt.length;yt<Bt;yt++){const Ht=Mt[yt];Dl(y,S,Ht,Ht.viewport)}}else ft.length>0&&Il(xt,ft,S,P),xe&&Ot.render(S),Dl(y,S,P)}nt!==null&&K===0&&(W.updateMultisampleRenderTarget(nt),W.updateRenderTargetMipmap(nt)),B&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,P),mt.resetDefaultState(),X=-1,j=null,_.pop(),_.length>0?(E=_[_.length-1],W.setTextureUnits(E.state.textureUnits),Zt===!0&&Tt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,F!==null&&F.renderEnd()};function oa(S,P,V,B){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Gt)){B&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Vt);const xt=J.update(S),ft=S.material;ft.visible&&y.push(S,xt,ft,V,De.z,null,P)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Gt))){const xt=J.update(S),ft=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),De.copy(xt.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(Vt)),Array.isArray(ft)){const Mt=xt.groups;for(let yt=0,Bt=Mt.length;yt<Bt;yt++){const Ht=Mt[yt],St=ft[Ht.materialIndex];St&&St.visible&&y.push(S,xt,St,V,De.z,Ht,P)}}else ft.visible&&y.push(S,xt,ft,V,De.z,null,P)}}const pt=S.children;for(let xt=0,ft=pt.length;xt<ft;xt++)oa(pt[xt],P,V,B)}function Dl(S,P,V,B){const{opaque:k,transmissive:pt,transparent:xt}=S;E.setupLightsView(V),Zt===!0&&Tt.setGlobalState(C.clippingPlanes,V),B&&g.viewport(et.copy(B)),k.length>0&&$s(k,P,V),pt.length>0&&$s(pt,P,V),xt.length>0&&$s(xt,P,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Il(S,P,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){const St=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new fn(1,1,{generateMipmaps:!0,type:St?Dn:sn,minFilter:li,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const pt=E.state.transmissionRenderTarget[B.id],xt=B.viewport||et;pt.setSize(xt.z*C.transmissionResolutionScale,xt.w*C.transmissionResolutionScale);const ft=C.getRenderTarget(),Mt=C.getActiveCubeFace(),yt=C.getActiveMipmapLevel();C.setRenderTarget(pt),C.getClearColor(he),qt=C.getClearAlpha(),qt<1&&C.setClearColor(16777215,.5),C.clear(),xe&&Ot.render(V);const Bt=C.toneMapping;C.toneMapping=Pn;const Ht=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Zt===!0&&Tt.setGlobalState(C.clippingPlanes,B),$s(S,V,B),W.updateMultisampleRenderTarget(pt),W.updateRenderTargetMipmap(pt),re.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let ee=0,ye=P.length;ee<ye;ee++){const ge=P[ee],{object:le,geometry:ze,material:gt,group:qe}=ge;if(gt.side===vn&&le.layers.test(B.layers)){const Yt=gt.side;gt.side=We,gt.needsUpdate=!0,Ul(le,V,B,ze,gt,qe),gt.side=Yt,gt.needsUpdate=!0,St=!0}}St===!0&&(W.updateMultisampleRenderTarget(pt),W.updateRenderTargetMipmap(pt))}C.setRenderTarget(ft,Mt,yt),C.setClearColor(he,qt),Ht!==void 0&&(B.viewport=Ht),C.toneMapping=Bt}function $s(S,P,V){const B=P.isScene===!0?P.overrideMaterial:null;for(let k=0,pt=S.length;k<pt;k++){const xt=S[k],{object:ft,geometry:Mt,group:yt}=xt;let Bt=xt.material;Bt.allowOverride===!0&&B!==null&&(Bt=B),ft.layers.test(V.layers)&&Ul(ft,P,V,Mt,Bt,yt)}}function Ul(S,P,V,B,k,pt){F!==null&&k.isNodeMaterial&&F.setObject(S,k),S.onBeforeRender(C,P,V,B,k,pt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(C,P,V,B,S,pt),k.transparent===!0&&k.side===vn&&k.forceSinglePass===!1?(k.side=We,k.needsUpdate=!0,C.renderBufferDirect(V,P,B,k,S,pt),k.side=Ei,k.needsUpdate=!0,C.renderBufferDirect(V,P,B,k,S,pt),k.side=vn):C.renderBufferDirect(V,P,B,k,S,pt),S.onAfterRender(C,P,V,B,k,pt)}function Ys(S,P,V){P.isScene!==!0&&(P=Je);const B=G.get(S),k=E.state.lights,pt=E.state.shadowsArray,xt=k.state.version,ft=at.getParameters(S,k.state,pt,P,V,E.state.lightProbeGridArray),Mt=at.getProgramCacheKey(ft);let yt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;const Bt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=st.get(S.envMap||B.environment,Bt),B.envMapRotation=B.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,yt===void 0&&(S.addEventListener("dispose",yn),yt=new Map,B.programs=yt);let Ht=yt.get(Mt);if(Ht!==void 0){if(B.currentProgram===Ht&&B.lightsStateVersion===xt)return Fl(S,ft),Ht}else ft.uniforms=at.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,ft),S.onBeforeCompile(ft,C),Ht=at.acquireProgram(ft,Mt),yt.set(Mt,Ht),B.uniforms=ft.uniforms;const St=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=Tt.uniform),Fl(S,ft),B.needsLights=Lu(S),B.lightsStateVersion=xt,B.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.sunLights.value=k.state.sun,St.sunLightShadows.value=k.state.sunShadow,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.sunShadowMatrix.value=k.state.sunShadowMatrix,St.sunShadowCascade.value=k.state.sunShadowCascade,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Ht,B.uniformsList=null,Ht}function Nl(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=Lr.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function Fl(S,P){const V=G.get(S);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function Ru(S,P){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let V=0,B=S.length;V<B;V++){const k=S[V];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Cu(S,P,V,B,k){P.isScene!==!0&&(P=Je),W.resetTextureUnits();const pt=P.fog,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,ft=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Wt.workingColorSpace,Mt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,yt=st.get(B.envMap||xt,Mt),Bt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ht=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),St=!!V.morphAttributes.position,ee=!!V.morphAttributes.normal,ye=!!V.morphAttributes.color;let ge=Pn;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ge=C.toneMapping);const le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ze=le!==void 0?le.length:0,gt=G.get(B),qe=E.state.lights;if(Zt===!0&&(ue===!0||S!==j)){const de=S===j&&B.id===X;Tt.setState(B,S,de)}let Yt=!1;B.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==qe.state.version||gt.outputColorSpace!==ft||k.isBatchedMesh&&gt.batching===!1||!k.isBatchedMesh&&gt.batching===!0||k.isBatchedMesh&&gt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&gt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&gt.instancing===!1||!k.isInstancedMesh&&gt.instancing===!0||k.isSkinnedMesh&&gt.skinning===!1||!k.isSkinnedMesh&&gt.skinning===!0||k.isInstancedMesh&&gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&gt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&gt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&gt.instancingMorph===!1&&k.morphTexture!==null||gt.envMap!==yt||B.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Tt.numPlanes||gt.numIntersection!==Tt.numIntersection)||gt.vertexAlphas!==Bt||gt.vertexTangents!==Ht||gt.morphTargets!==St||gt.morphNormals!==ee||gt.morphColors!==ye||gt.toneMapping!==ge||gt.morphTargetsCount!==ze||!!gt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,gt.__version=B.version);let ln=gt.currentProgram;Yt===!0&&(ln=Ys(B,P,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,ln,gt));let En=!1,Qn=!1,Ii=!1;const oe=ln.getUniforms(),Se=gt.uniforms;if(g.useProgram(ln.program)&&(En=!0,Qn=!0,Ii=!0),B.id!==X&&(X=B.id,Qn=!0),gt.needsLights){const de=Ru(E.state.lightProbeGridArray,k);gt.lightProbeGrid!==de&&(gt.lightProbeGrid=de,Qn=!0)}if(En||j!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),oe.setValue(U,"projectionMatrix",S.projectionMatrix),oe.setValue(U,"viewMatrix",S.matrixWorldInverse);const ti=oe.map.cameraPosition;ti!==void 0&&ti.setValue(U,_e.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&oe.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,Qn=!0,Ii=!0)}if(gt.needsLights&&(qe.state.sunShadowMap.length>0&&oe.setValue(U,"sunShadowMap",qe.state.sunShadowMap,W),qe.state.directionalShadowMap.length>0&&oe.setValue(U,"directionalShadowMap",qe.state.directionalShadowMap,W),qe.state.spotShadowMap.length>0&&oe.setValue(U,"spotShadowMap",qe.state.spotShadowMap,W),qe.state.pointShadowMap.length>0&&oe.setValue(U,"pointShadowMap",qe.state.pointShadowMap,W)),k.isSkinnedMesh){oe.setOptional(U,k,"bindMatrix"),oe.setOptional(U,k,"bindMatrixInverse");const de=k.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),oe.setValue(U,"boneTexture",de.boneTexture,W))}k.isBatchedMesh&&(oe.setOptional(U,k,"batchingTexture"),oe.setValue(U,"batchingTexture",k._matricesTexture,W),oe.setOptional(U,k,"batchingIdTexture"),oe.setValue(U,"batchingIdTexture",k._indirectTexture,W),oe.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&oe.setValue(U,"batchingColorTexture",k._colorsTexture,W));const jn=V.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&L.update(k,V,ln),(Qn||gt.receiveShadow!==k.receiveShadow)&&(gt.receiveShadow=k.receiveShadow,oe.setValue(U,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(Se.envMapIntensity.value=P.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=h_()),Qn){if(oe.setValue(U,"toneMappingExposure",C.toneMappingExposure),gt.needsLights&&Pu(Se,Ii),pt&&B.fog===!0&&Et.refreshFogUniforms(Se,pt),Et.refreshMaterialUniforms(Se,B,Q,q,E.state.transmissionRenderTarget[S.id]),gt.needsLights&&gt.lightProbeGrid){const de=gt.lightProbeGrid;Se.probesSH.value=de.texture,Se.probesMin.value.copy(de.boundingBox.min),Se.probesMax.value.copy(de.boundingBox.max),Se.probesResolution.value.copy(de.resolution)}Lr.upload(U,Nl(gt),Se,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Lr.upload(U,Nl(gt),Se,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(U,"center",k.center),oe.setValue(U,"modelViewMatrix",k.modelViewMatrix),oe.setValue(U,"normalMatrix",k.normalMatrix),oe.setValue(U,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const de=B.uniformsGroups;for(let ti=0,Ui=de.length;ti<Ui;ti++){const Bl=de[ti];tt.update(Bl,ln),tt.bind(Bl,ln)}}return ln}function Pu(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.sunLights.needsUpdate=P,S.sunLightShadows.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function Lu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,P,V){const B=G.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=P,G.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,P){const V=G.get(S);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,V=0){nt=S,Y=P,K=V;let B=null,k=!1,pt=!1;if(S){const ft=G.get(S);if(ft.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(S.viewport),Rt.copy(S.scissor),wt=S.scissorTest,g.viewport(et),g.scissor(Rt),g.setScissorTest(wt),X=-1;return}else if(ft.__webglFramebuffer===void 0)W.setupRenderTarget(S);else if(ft.__hasExternalTextures)W.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Bt=S.depthTexture;if(ft.__boundDepthTexture!==Bt){if(Bt!==null&&G.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(S)}}const Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);const yt=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(yt[P])?B=yt[P][V]:B=yt[P],k=!0):S.samples>0&&W.useMultisampledRTT(S)===!1?B=G.get(S).__webglMultisampledFramebuffer:Array.isArray(yt)?B=yt[V]:B=yt,et.copy(S.viewport),Rt.copy(S.scissor),wt=S.scissorTest}else et.copy(_t).multiplyScalar(Q).floor(),Rt.copy(zt).multiplyScalar(Q).floor(),wt=Te;if(V!==0&&(B=z),g.bindFramebuffer(U.FRAMEBUFFER,B)&&g.drawBuffers(S,B),g.viewport(et),g.scissor(Rt),g.setScissorTest(wt),k){const ft=G.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,ft.__webglTexture,V)}else if(pt){const ft=P;for(let Mt=0;Mt<S.textures.length;Mt++){const yt=G.get(S.textures[Mt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Mt,yt.__webglTexture,V,ft)}}else if(S!==null&&V!==0){const ft=G.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,V)}X=-1};function Ol(S){const P=G.get(S);return(P.__readFormat!==S.format||P.__readType!==S.type)&&(P.__readFormat=S.format,P.__readType=S.type,P.__formatReadable=w.textureFormatReadable(S.format),P.__typeReadable=w.textureTypeReadable(S.type)),P}this.readRenderTargetPixels=function(S,P,V,B,k,pt,xt,ft=0){if(!(S&&S.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){g.bindFramebuffer(U.FRAMEBUFFER,Mt);try{const yt=S.textures[ft],Bt=yt.format,Ht=yt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const St=Ol(yt);if(St.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-B&&V>=0&&V<=S.height-k&&U.readPixels(P,V,B,k,ct.convert(Bt),ct.convert(Ht),pt)}finally{const yt=nt!==null?G.get(nt).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(S,P,V,B,k,pt,xt,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(P>=0&&P<=S.width-B&&V>=0&&V<=S.height-k){g.bindFramebuffer(U.FRAMEBUFFER,Mt);const yt=S.textures[ft],Bt=yt.format,Ht=yt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const St=Ol(yt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(P,V,B,k,ct.convert(Bt),ct.convert(Ht),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const ye=nt!==null?G.get(nt).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,ye);const ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mf(U,ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ee),U.deleteSync(ge),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,P=null,V=0){const B=Math.pow(2,-V),k=Math.floor(S.image.width*B),pt=Math.floor(S.image.height*B),xt=P!==null?P.x:0,ft=P!==null?P.y:0;W.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,xt,ft,k,pt),g.unbindTexture()},this.copyTextureToTexture=function(S,P,V=null,B=null,k=0,pt=0){let xt,ft,Mt,yt,Bt,Ht,St,ee,ye;const ge=S.isCompressedTexture?S.mipmaps[pt]:S.image;if(V!==null)xt=V.max.x-V.min.x,ft=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,yt=V.min.x,Bt=V.min.y,Ht=V.isBox3?V.min.z:0;else{const Se=Math.pow(2,-k);xt=Math.floor(ge.width*Se),ft=Math.floor(ge.height*Se),S.isDataArrayTexture?Mt=ge.depth:S.isData3DTexture?Mt=Math.floor(ge.depth*Se):Mt=1,yt=0,Bt=0,Ht=0}B!==null?(St=B.x,ee=B.y,ye=B.z):(St=0,ee=0,ye=0);const le=ct.convert(P.format),ze=ct.convert(P.type);let gt;P.isData3DTexture?(W.setTexture3D(P,0),gt=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(W.setTexture2DArray(P,0),gt=U.TEXTURE_2D_ARRAY):(W.setTexture2D(P,0),gt=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const qe=g.getParameter(U.UNPACK_ROW_LENGTH),Yt=g.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(U.UNPACK_SKIP_PIXELS),En=g.getParameter(U.UNPACK_SKIP_ROWS),Qn=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,yt),g.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Ht);const Ii=S.isDataArrayTexture||S.isData3DTexture,oe=P.isDataArrayTexture||P.isData3DTexture;if(S.isDepthTexture){const Se=G.get(S),jn=G.get(P),de=G.get(Se.__renderTarget),ti=G.get(jn.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,de.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Ui=0;Ui<Mt;Ui++)Ii&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(S).__webglTexture,k,Ht+Ui),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(P).__webglTexture,pt,ye+Ui)),U.blitFramebuffer(yt,Bt,xt,ft,St,ee,xt,ft,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||G.has(S)){const Se=G.get(S),jn=G.get(P);g.bindFramebuffer(U.READ_FRAMEBUFFER,D),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let de=0;de<Mt;de++)Ii?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,k,Ht+de):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Se.__webglTexture,k),oe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,jn.__webglTexture,pt,ye+de):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,jn.__webglTexture,pt),k!==0?U.blitFramebuffer(yt,Bt,xt,ft,St,ee,xt,ft,U.COLOR_BUFFER_BIT,U.NEAREST):oe?U.copyTexSubImage3D(gt,pt,St,ee,ye+de,yt,Bt,xt,ft):U.copyTexSubImage2D(gt,pt,St,ee,yt,Bt,xt,ft);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else oe?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(gt,pt,St,ee,ye,xt,ft,Mt,le,ze,ge.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(gt,pt,St,ee,ye,xt,ft,Mt,le,ge.data):U.texSubImage3D(gt,pt,St,ee,ye,xt,ft,Mt,le,ze,ge):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,St,ee,xt,ft,le,ze,ge.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,St,ee,ge.width,ge.height,le,ge.data):U.texSubImage2D(U.TEXTURE_2D,pt,St,ee,xt,ft,le,ze,ge);g.pixelStorei(U.UNPACK_ROW_LENGTH,qe),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Yt),g.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(U.UNPACK_SKIP_ROWS,En),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Qn),pt===0&&P.generateMipmaps&&U.generateMipmap(gt),g.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&W.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?W.setTextureCube(S,0):S.isData3DTexture?W.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?W.setTexture2DArray(S,0):W.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){Y=0,K=0,nt=null,g.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}const ml=16,f_=60,d_=62,Ba=64,ji=67,oi=69,Rn=72,zn=74,gi=76,ys=79,kc=81,Wo=[{beat:0,len:.75,midi:ji},{beat:.75,len:.25,midi:oi},{beat:1,len:.5,midi:Rn},{beat:1.5,len:.5,midi:oi},{beat:2,len:.5,midi:ji},{beat:2.5,len:.5,midi:Ba},{beat:3,len:1,midi:ji},{beat:4,len:.5,midi:Ba},{beat:4.5,len:.5,midi:ji},{beat:5,len:.5,midi:oi},{beat:5.5,len:.5,midi:Rn},{beat:6,len:1.5,midi:zn},{beat:7.5,len:.5,midi:Rn},{beat:8,len:.75,midi:Rn},{beat:8.75,len:.25,midi:zn},{beat:9,len:.5,midi:gi},{beat:9.5,len:.5,midi:zn},{beat:10,len:.5,midi:Rn},{beat:10.5,len:.5,midi:oi},{beat:11,len:1,midi:Rn},{beat:12,len:.5,midi:oi},{beat:12.5,len:.5,midi:ji},{beat:13,len:.5,midi:Ba},{beat:13.5,len:.5,midi:d_},{beat:14,len:2,midi:f_}],zc=[48,55,60,64],Gr=[45,57,60,64],Hr=[43,55,59,62],Xo=[41,53,57,60],p_=[{beat:0,len:4,notes:zc},{beat:4,len:2,notes:Gr},{beat:6,len:2,notes:Hr},{beat:8,len:2,notes:Gr},{beat:10,len:2,notes:Xo},{beat:12,len:2,notes:Hr},{beat:14,len:2,notes:zc}],m_=[{beat:0,len:.75,midi:gi},{beat:.75,len:.25,midi:ys},{beat:1,len:.5,midi:kc},{beat:1.5,len:.5,midi:ys},{beat:2,len:.5,midi:gi},{beat:2.5,len:.5,midi:zn},{beat:3,len:1,midi:gi},{beat:4,len:.5,midi:zn},{beat:4.5,len:.5,midi:gi},{beat:5,len:.5,midi:ys},{beat:5.5,len:.5,midi:gi},{beat:6,len:1.5,midi:zn},{beat:7.5,len:.5,midi:Rn},{beat:8,len:.75,midi:oi},{beat:8.75,len:.25,midi:Rn},{beat:9,len:.5,midi:zn},{beat:9.5,len:.5,midi:Rn},{beat:10,len:.5,midi:oi},{beat:10.5,len:.5,midi:ji},{beat:11,len:1,midi:oi},{beat:12,len:.5,midi:Rn},{beat:12.5,len:.5,midi:zn},{beat:13,len:.5,midi:gi},{beat:13.5,len:.5,midi:ys},{beat:14,len:1,midi:kc},{beat:15,len:.5,midi:ys},{beat:15.5,len:.5,midi:zn}],g_=[{beat:0,len:4,notes:Gr},{beat:4,len:4,notes:Hr},{beat:8,len:2,notes:Xo},{beat:10,len:2,notes:Gr},{beat:12,len:2,notes:Xo},{beat:14,len:2,notes:Hr}],jh=["A","A","B","A"],ka=ml*jh.length;function __(){const i=[],t=[];return jh.forEach((e,n)=>{const s=n*ml;for(const r of e==="A"?Wo:m_)i.push({...r,beat:r.beat+s});for(const r of e==="A"?p_:g_)t.push({...r,beat:r.beat+s})}),{melody:i,chords:t}}const Gc="steady loop, same energy throughout, instrumental, no vocals",x_={home:{bpm:100,prompt:`cheerful Chinese folk game BGM, ink-painting water town market, bouncy dizi and guzheng melody, pipa plucks, yangqin, light woodblock and hand drum, playful and warm, C major pentatonic, 100 BPM, ${Gc}`},battle:{bpm:132,prompt:`upbeat playful Chinese folk battle BGM, mischievous paint fight, fast guzheng and dizi lead, suona accents, pipa and yangqin, bangu drum and woodblock groove, bright and bouncy, C major pentatonic, 132 BPM, ${Gc}`}},za=[...Wo.slice(0,7),...Wo.slice(-5).map(i=>({...i,beat:i.beat-8}))],Re=44100,gl=i=>440*Math.pow(2,(i-69)/12);let Hc=7;const _l=()=>(Hc=Hc*16807%2147483647)/2147483647*2-1;function Ga(i,t,e,n,s=1.4,r=.5){const a=gl(e),o=Math.max(2,Math.round(Re/a)),l=new Float32Array(o);let c=0;for(let v=0;v<o;v++)c=c*r+_l()*(1-r),l[v]=c;const h=Math.pow(.001,1/(a*s*.75)),u=Math.floor(t*Re),f=Math.floor(s*Re);let d=0,x=0;for(let v=0;v<f&&u+v<i.length;v++){const m=l[d],p=l[(d+1)%o];l[d]=(m+p)*.5*h,d=(d+1)%o,x+=(m-x)*.55,i[u+v]+=x*n}}function v_(i,t,e,n,s){const r=gl(n),a=Math.floor(t*Re),o=Math.floor((e+.12)*Re);let l=0;for(let c=0;c<o&&a+c<i.length;c++){const h=c/Re,u=Math.min(1,h/.04)*(h>e?Math.exp(-(h-e)*30):1),f=1+.006*Math.sin(2*Math.PI*5.5*h)*Math.min(1,h/.25);l+=2*Math.PI*r*f/Re;const d=Math.sin(l)+.35*Math.sin(2*l)+.12*Math.sin(3*l);i[a+c]+=(d+_l()*.06)*s*u}}function M_(i,t,e,n){const s=gl(e),r=Math.floor(t*Re),a=Math.floor(1.2*Re);for(let o=0;o<a&&r+o<i.length;o++){const l=o/Re,c=Math.min(1,l/.005)*Math.exp(-3*l);i[r+o]+=(Math.sin(2*Math.PI*s*l)+.25*Math.sin(4*Math.PI*s*l))*n*c}}function Vc(i,t,e,n){const s=Math.floor(t*Re),r=Math.floor(.09*Re);for(let a=0;a<r&&s+a<i.length;a++){const o=a/Re;i[s+a]+=(Math.sin(2*Math.PI*e*o)+.3*Math.sin(2*Math.PI*e*2.3*o))*Math.exp(-60*o)*n}}function Wc(i,t,e){const n=Math.floor(t*Re),s=Math.floor(.25*Re);for(let r=0;r<s&&n+r<i.length;r++){const a=r/Re,o=70+90*Math.exp(-30*a);i[n+r]+=(Math.sin(2*Math.PI*o*a)*Math.exp(-14*a)+_l()*.2*Math.exp(-50*a))*e}}function S_(i,t=.2){const e=Float32Array.from(i),n=[1557,1617,1491,1422].map(r=>({buf:new Float32Array(r),i:0})),s=[225,556].map(r=>({buf:new Float32Array(r),i:0}));for(let r=0;r<i.length;r++){let a=0;for(const o of n){const l=o.buf[o.i];o.buf[o.i]=i[r]+l*.78,o.i=(o.i+1)%o.buf.length,a+=l}a/=n.length;for(const o of s){const l=o.buf[o.i];o.buf[o.i]=a+l*.5,o.i=(o.i+1)%o.buf.length,a=l-a*.5}e[r]+=a*t}return e}const b_=[0,1,2,3,2,1,2,1],Xc=i=>Math.floor(i/ml);function y_(i){return i.flatMap(t=>{const e=t.notes[0];return t.len>=4?[{beat:t.beat,len:1.5,midi:e},{beat:t.beat+1.5,len:.5,midi:e},{beat:t.beat+2,len:2,midi:e+7}]:[{beat:t.beat,len:1.5,midi:e},{beat:t.beat+1.5,len:.5,midi:e+7}]})}function qc(i,t=!1){const{bpm:e}=x_[i],n=60/e,{melody:s,chords:r}=__(),a=Math.round(ka*n*Re),o=new Float32Array(a*2+3*Re),l=i==="battle";for(let c=0;c<2;c++){const h=u=>(c*ka+u)*n;for(const u of s)Ga(o,h(u.beat),u.midi,.5,1.4,.4),!t&&u.len>=.75&&Xc(u.beat)!==2&&v_(o,h(u.beat),u.len*n,u.midi+12,.07),!t&&Xc(u.beat)===1&&Ga(o,h(u.beat+.5),u.midi+12,.1,.8);if(!t){for(const u of r)for(let f=0;f<u.len*2;f++)Ga(o,h(u.beat+f/2),u.notes[b_[f%8]]+12,.13,.7,.6);for(const u of y_(r))M_(o,h(u.beat),u.midi,.32);for(let u=0;u<ka;u++)Vc(o,h(u+.5),1150,l?.09:.06),u%2===1&&Vc(o,h(u),820,.08),l?Wc(o,h(u),u%4===0?.32:.2):u%4===0&&Wc(o,h(u),.18)}}return S_(o).slice(a,a*2)}class E_{sfx;bus=null;loops=null;buffers=new Map;current=null;want="";worker=null;on=!0;constructor(t){this.sfx=t}ensure(){const t=this.sfx.ctx;return!t||!this.sfx.master?null:(this.bus||(this.bus=t.createGain(),this.bus.gain.value=this.on?.55:0,this.bus.connect(this.sfx.master)),t)}load(t){let e=this.buffers.get(t);if(!e){const n=this.ensure();e=fetch(`audio/bgm-${t}.mp3`).then(s=>s.ok?s.arrayBuffer():Promise.reject(new Error(String(s.status)))).then(s=>n.decodeAudioData(s)).catch(()=>this.synth(t)),this.buffers.set(t,e)}return e}synth(t){return t!=="home"&&t!=="battle"?Promise.resolve(null):this.render(t).then(e=>{const n=this.ensure();if(!n||!e)return null;let s=0;for(const l of e)s=Math.max(s,Math.abs(l));const r=n.createBuffer(1,e.length,Re),a=r.getChannelData(0),o=.7/(s||1);for(let l=0;l<e.length;l++)a[l]=e[l]*o;return r})}render(t){try{this.worker??=new Worker(new URL(""+new URL("motifWorker-BXzN8k74.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{return new Promise(n=>setTimeout(()=>n(qc(t)),30))}const e=this.worker;return new Promise(n=>{const s=r=>{r.data.name===t&&(e.removeEventListener("message",s),n(r.data.data))};e.addEventListener("message",s),e.addEventListener("error",()=>n(qc(t)),{once:!0}),e.postMessage(t)})}prefetch(t){this.ensure()&&t.reduce((e,n)=>e.then(()=>this.load(n)),Promise.resolve())}async loopsFor(t){if(!this.loops)try{this.loops=await(await fetch("audio/loops.json")).json()}catch{this.loops={}}return this.loops?.[`bgm-${t}.mp3`]??null}play(t){if(t===this.want)return;this.want=t;const e=this.ensure();if(!e){this.want="";return}const n=this.current;this.current=null,n&&(n.gain.gain.cancelScheduledValues(e.currentTime),n.gain.gain.setTargetAtTime(0,e.currentTime,.35),n.src.stop(e.currentTime+1.6)),t&&Promise.all([this.load(t),this.loopsFor(t)]).then(([s,r])=>{if(!s||this.want!==t||this.current)return;const a=e.createBufferSource();a.buffer=s,a.loop=!0,r&&(a.loopStart=r.start,a.loopEnd=r.end);const o=e.createGain();o.gain.setValueAtTime(0,e.currentTime),o.gain.linearRampToValueAtTime(1,e.currentTime+1.2),a.connect(o).connect(this.bus),a.start(),this.current={name:t,src:a,gain:o}})}setEnabled(t){this.on=t,this.bus&&(this.bus.gain.value=t?.55:0)}}const $c={G3:196,A3:220,C4:261.63,D4:293.66,E4:329.63,G4:392,A4:440,C5:523.25,D5:587.33,E5:659.25,G5:783.99,A5:880,C6:1046.5},T_={55:"G3",57:"A3",60:"C4",62:"D4",64:"E4",67:"G4",69:"A4",72:"C5",74:"D5",76:"E5",79:"G5",81:"A5",84:"C6"};class w_{ctx=null;bus=null;master=null;noise=null;plucks=new Map;last=new Map;on=!0;unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination),this.bus=e.createGain(),this.bus.gain.value=this.on?.8:0,this.bus.connect(this.master);const n=e.sampleRate;this.noise=e.createBuffer(1,n,e.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1;for(const r of Object.keys($c))this.plucks.set(r,A_(e,$c[r]))}this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(t){this.on=t,this.bus&&(this.bus.gain.value=t?.8:0)}suspend(){this.ctx?.suspend()}resume(){this.ctx?.state==="suspended"&&this.ctx.resume()}ok(t,e=0){if(!this.ctx||!this.on||this.ctx.state!=="running")return!1;if(t){const n=this.ctx.currentTime;if(n-(this.last.get(t)??-9)<e)return!1;this.last.set(t,n)}return!0}get now(){return this.ctx.currentTime}pluck(t,e,n,s=0){const r=this.ctx,a=r.createBufferSource();a.buffer=this.plucks.get(t),s&&(a.playbackRate.setValueAtTime(1,e),a.playbackRate.linearRampToValueAtTime(1+s,e+.18));const o=r.createGain();o.gain.value=n,a.connect(o).connect(this.bus),a.start(e)}hiss(t,e,n,s,r,a,o=.8,l=.005){const c=this.ctx,h=c.createBufferSource();h.buffer=this.noise;const u=c.createBiquadFilter();u.type=n,u.Q.value=o,u.frequency.setValueAtTime(s,t),u.frequency.exponentialRampToValueAtTime(Math.max(30,r),t+e);const f=c.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(a,t+l),f.gain.exponentialRampToValueAtTime(5e-4,t+e),h.connect(u).connect(f).connect(this.bus),h.start(t,Math.random()*.6,e+.05)}tone(t,e,n,s,r,a="sine",o=.004){const l=this.ctx,c=l.createOscillator();c.type=a,c.frequency.setValueAtTime(n,t),c.frequency.exponentialRampToValueAtTime(Math.max(20,s),t+e);const h=l.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(r,t+o),h.gain.exponentialRampToValueAtTime(5e-4,t+e),c.connect(h).connect(this.bus),c.start(t),c.stop(t+e+.05)}drop(t,e,n=1){const s=(420+Math.random()*260)*n;this.tone(t,.07,s,s*2.6,e,"sine",.002),this.hiss(t,.05,"lowpass",1400,500,e*.35)}bell(t,e,n,s=2.2){for(const[r,a]of[[1,1],[2.76,.45],[5.4,.22],[8.93,.1]])this.tone(t,s/r**.3,e*r,e*r*.998,n*a,"sine",.003)}woodfish(t,e=560,n=.32){this.tone(t,.09,e,e*.9,n,"sine",.001),this.tone(t,.035,e*2.3,e*2.2,n*.25,"triangle",.001),this.hiss(t,.03,"bandpass",e*3,e*2,n*.25,4,.001)}shot(t,e){if(e<.05)return;const n=this.ctx?.currentTime??0;if(t==="shot"){if(!this.ok("shot",.055))return;this.hiss(n,.06,"bandpass",1500,800,.11*e,1.2),this.tone(n,.03,520,900,.035*e,"sine",.002)}else if(t==="line"){if(!this.ok("line",.1))return;this.hiss(n,.28,"bandpass",700,2600,.22*e,.7,.06),this.pluck("E5",n+.02,.18*e,.03)}else{if(!this.ok("throw",.1))return;this.hiss(n,.18,"lowpass",500,1500,.12*e,.7,.04)}}land(t){t<.1||!this.ok("land",.07)||this.drop(this.now,.07*t)}roll(){this.ok("roll",.16)&&this.hiss(this.now,.2,"bandpass",1800,2400,.06,.6,.05)}hitMark(){if(!this.ok("hitmark",.06))return;const t=["G5","A5","C6"];this.pluck(t[Math.floor(Math.random()*t.length)],this.now,.22)}hurt(){if(!this.ok("hurt",.12))return;const t=this.now;this.pluck("G3",t,.3),this.hiss(t,.12,"lowpass",700,200,.12)}splatted(t,e,n){if(t<.05||!this.ok())return;const s=this.now;this.hiss(s,.32,"lowpass",3200,260,.3*t,.7,.004);for(let r=0;r<3;r++)this.drop(s+.06+r*.05+Math.random()*.03,.06*t,1.3);e&&(this.pluck("G5",s+.05,.26),this.pluck("C6",s+.15,.26,.02)),n&&(this.pluck("E4",s+.05,.3),this.pluck("D4",s+.2,.3),this.pluck("A3",s+.38,.32,-.04))}bomb(t){if(t<.05||!this.ok("bomb",.08))return;const e=this.now;this.tone(e,.3,190,55,.4*t,"sine",.003),this.hiss(e,.25,"lowpass",900,150,.25*t);for(let n=0;n<4;n++)this.drop(e+.08+n*.07+Math.random()*.05,.05*t,.8+Math.random()*.6)}sealWhoosh(){this.ok("whoosh",.3)&&this.hiss(this.now,.75,"lowpass",180,1400,.2,.6,.6)}seal(t){if(t<.05||!this.ok())return;const e=this.now;this.tone(e,.45,95,42,.55*t,"sine",.002),this.hiss(e,.3,"lowpass",600,100,.3*t),this.bell(e+.04,392,.12*t)}countdown(t){this.ok()&&this.woodfish(this.now,t===1?640:540)}start(){if(!this.ok())return;const t=this.now;this.bell(t,330,.14,1.6),this.hiss(t,.5,"highpass",5e3,3e3,.08,.5,.003),this.woodfish(t,700,.25)}gong(){if(!this.ok())return;const t=this.now;for(const[e,n]of[[98,.32],[196.5,.12],[262,.08],[331,.06]])this.tone(t,2.8,e*1.03,e,n,"sine",.01);this.hiss(t,.5,"bandpass",700,300,.1,3)}ready(){this.ok("ready",.5)&&this.bell(this.now,1046.5,.08,1.8)}empty(){this.ok("empty",.3)&&this.hiss(this.now,.04,"highpass",3e3,2500,.08,.7,.001)}click(){this.ok("click",.04)&&this.woodfish(this.now,820,.18)}result(t){if(!this.ok())return;const e=this.now+.4,n=t===!1?za.slice(-5):t===null?za.slice(0,7):za,s=t===!1?.34:.24,r=n[0].beat;n.forEach((o,l)=>{const c=T_[o.midi];c&&this.pluck(c,e+(o.beat-r)*s,.26,l===n.length-1&&t===!1?-.03:0)});const a=e+(n[n.length-1].beat-r)*s;t&&this.bell(a,523.25,.08)}coin(t=0){if(!this.ok("coin",.05))return;const e=["C5","D5","E5","G5","A5","C6"];this.pluck(e[Math.min(t,e.length-1)],this.now,.14)}levelUp(){if(!this.ok())return;const t=this.now;["C5","E5","G5","C6"].forEach((e,n)=>this.pluck(e,t+n*.09,.22)),this.bell(t+.4,1046.5,.1)}}function A_(i,t,e=1.6){const n=i.sampleRate,s=Math.floor(n*e),r=i.createBuffer(1,s,n),a=r.getChannelData(0),o=Math.max(2,Math.round(n/t)),l=new Float32Array(o);let c=0;for(let m=0;m<o;m++){const p=Math.random()*2-1;c=c*.45+p*.55,l[m]=c}const h=Math.pow(.001,1/(t*e*.75));let u=0,f=0,d=0;for(let m=0;m<s;m++){const p=l[u],b=l[(u+1)%o];l[u]=(p+b)*.5*h,u=(u+1)%o,d+=(p-d)*.5,a[m]=d,f=Math.max(f,Math.abs(d))}const x=f>0?.9/f:1,v=Math.floor(n*.05);for(let m=0;m<s;m++)a[m]*=x*(m>s-v?(s-m)/v:1);return r}const R_=2,C_=4,P_=120,Yc=3,Ki=.42,L_=1.5,Ds=100,Dr=100,qo=4.6,D_=1.3,I_=.6,Kc=34,U_=7,N_=.45,F_=30,O_=2.2,B_=4,k_=1.5,z_=1.9,Ha=22,Ir=55,Vr=8,tu=.55,xr=2.4,G_=70,H_=1.2,V_=1500,xi=5.2,eu=.75,W_=200,Ri=6,$t=4,Zc=16,Va=i=>({...i,x0:-i.x1,z0:-i.z1,x1:-i.x0,z1:-i.z0}),Jc=i=>({...i,x:-i.x,z:-i.z});function X_(i){return{name:i.name,halfW:i.halfW,halfD:i.halfD,solids:[...i.solids,...i.solids.map(Va)],circles:[...i.circles,...i.circles.map(Jc)],water:[...i.water,...i.water.map(Va)],bases:[i.base,Va(i.base)],spawns:[i.spawns,i.spawns.map(Jc)]}}const Es=(i,t,e,n,s=5)=>({x0:i,z0:t,x1:e,z1:n,h:s,kind:"house"}),vr=(i,t,e,n)=>({x0:i,z0:t,x1:e,z1:n,h:.95,kind:"wall"}),Wa=(i,t,e=1.2)=>({x0:i-e/2,z0:t-e/2,x1:i+e/2,z1:t+e/2,h:1.1,kind:"crate"}),Qc=(i,t)=>({x0:i-.35,z0:t-.35,x1:i+.35,z1:t+.35,h:6,kind:"pillar"}),ls=X_({name:"墨溪镇",halfW:32,halfD:18,solids:[Es(-26,-18,-20,-12,5.5),Es(-26,11,-21,18,5),Es(-17,-9,-12,-4,5),Es(-15,5,-9,10,4.5),Es(-10,13,-5.5,18,4.5),vr(-22,-7,-21.4,-2.5),vr(-20,2.5,-16,3.1),vr(-6.2,-8,-5.6,-4),vr(-7,5,-3,5.6),Wa(-10.4,-.6),Wa(-24.4,6.6),Wa(-18.6,-10.2,1.1),Qc(0,-3.6),Qc(0,-1.2)],circles:[{x:-18.6,z:-13,r:.9,h:4.2,kind:"tree"},{x:-2.6,z:10.2,r:.9,h:4.2,kind:"tree"},{x:-28.4,z:-12.5,r:.9,h:4.2,kind:"tree"},{x:-10,z:2.6,r:.7,h:.8,kind:"well"}],water:[{x0:-4.5,z0:-18,x1:4.5,z1:-14}],base:{x0:-31,z0:-3,x1:-27,z1:3},spawns:[{x:-29,z:-2},{x:-29,z:-.7},{x:-29,z:.7},{x:-29,z:2}]});function Wr(i,t,e,n=0){return t>=i.x0-n&&t<=i.x1+n&&e>=i.z0-n&&e<=i.z1+n}function qs(i,t,e){let n=0;for(const s of i.solids)t>=s.x0&&t<=s.x1&&e>=s.z0&&e<=s.z1&&s.h>n&&(n=s.h);for(const s of i.circles){const r=t-s.x,a=e-s.z;r*r+a*a<=s.r*s.r&&s.h>n&&(n=s.h)}return(Math.abs(t)>i.halfW||Math.abs(e)>i.halfD)&&(n=99),n}function nu(i,t,e,n=0){for(const s of i.water)if(Wr(s,t,e,n))return!0;return!1}function iu(i,t,e){for(let n=0;n<2;n++){for(const s of i.solids)jc(t,e,s);for(const s of i.water)jc(t,e,s);for(const s of i.circles){const r=t.x-s.x,a=t.z-s.z,o=Math.hypot(r,a),l=e+s.r;o<l&&o>1e-6&&(t.x=s.x+r/o*l,t.z=s.z+a/o*l)}t.x=Math.max(-i.halfW+e,Math.min(i.halfW-e,t.x)),t.z=Math.max(-i.halfD+e,Math.min(i.halfD-e,t.z))}}function jc(i,t,e){const n=Math.max(e.x0,Math.min(e.x1,i.x)),s=Math.max(e.z0,Math.min(e.z1,i.z)),r=i.x-n,a=i.z-s,o=r*r+a*a;if(o>=t*t)return;if(o>1e-9){const d=Math.sqrt(o);i.x=n+r/d*t,i.z=s+a/d*t;return}const l=i.x-e.x0,c=e.x1-i.x,h=i.z-e.z0,u=e.z1-i.z,f=Math.min(l,c,h,u);f===l?i.x=e.x0-t:f===c?i.x=e.x1+t:f===h?i.z=e.z0-t:i.z=e.z1+t}function q_(i,t,e,n=1.1){const s=e.x-t.x,r=e.z-t.z,a=Math.hypot(s,r),o=Math.ceil(a/.4);for(let l=1;l<o;l++){const c=l/o;if(qs(i,t.x+s*c,t.z+r*c)>n)return!1}return!0}class $_{w;h;blocked;ox;oz;constructor(t,e=.55){this.w=t.halfW*2,this.h=t.halfD*2,this.ox=-t.halfW,this.oz=-t.halfD,this.blocked=new Uint8Array(this.w*this.h);for(let n=0;n<this.h;n++)for(let s=0;s<this.w;s++){const r=this.ox+s+.5,a=this.oz+n+.5,o={x:r,z:a};iu(t,o,e);const l=Math.hypot(o.x-r,o.z-a)>.05;this.blocked[n*this.w+s]=l||qs(t,r,a)>0||nu(t,r,a)?1:0}}cellOf(t){const e=Math.max(0,Math.min(this.w-1,Math.floor(t.x-this.ox)));return Math.max(0,Math.min(this.h-1,Math.floor(t.z-this.oz)))*this.w+e}centre(t){return{x:this.ox+t%this.w+.5,z:this.oz+Math.floor(t/this.w)+.5}}isOpen(t){return!this.blocked[this.cellOf(t)]}nearestOpen(t){const e=this.cellOf(t);if(!this.blocked[e])return e;const n=e%this.w,s=Math.floor(e/this.w);for(let r=1;r<12;r++)for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++){if(Math.max(Math.abs(o),Math.abs(a))!==r)continue;const l=n+o,c=s+a;if(l<0||c<0||l>=this.w||c>=this.h)continue;const h=c*this.w+l;if(!this.blocked[h])return h}return e}path(t,e){const n=this.nearestOpen(t),s=this.nearestOpen(e);if(n===s)return[e];const r=this.w*this.h,a=new Float32Array(r).fill(1/0),o=new Int32Array(r).fill(-1),l=new Uint8Array(r),c=new Y_,h=s%this.w,u=Math.floor(s/this.w),f=b=>{const A=Math.abs(b%this.w-h),M=Math.abs(Math.floor(b/this.w)-u);return Math.max(A,M)+.414*Math.min(A,M)};a[n]=0,c.push(n,f(n));let d=!1;for(;c.size;){const b=c.pop();if(b===s){d=!0;break}if(l[b])continue;l[b]=1;const A=b%this.w,M=Math.floor(b/this.w);for(let y=-1;y<=1;y++)for(let E=-1;E<=1;E++){if(!E&&!y)continue;const R=A+E,_=M+y;if(R<0||_<0||R>=this.w||_>=this.h)continue;const T=_*this.w+R;if(this.blocked[T]||l[T]||E&&y&&(this.blocked[M*this.w+R]||this.blocked[_*this.w+A]))continue;const C=a[b]+(E&&y?1.414:1);C<a[T]&&(a[T]=C,o[T]=b,c.push(T,C+f(T)))}}if(!d)return[e];const x=[];for(let b=s;b!==-1&&b!==n;b=o[b])x.push(b);x.reverse();const v=x.map(b=>this.centre(b)),m=[];let p=t;for(let b=0;b<v.length;b++){const A=v[b+1];A&&this.clear(p,A)||(m.push(v[b]),p=v[b])}return this.isOpen(e)&&(m[m.length-1]=e),m}clear(t,e){const n=e.x-t.x,s=e.z-t.z,r=Math.ceil(Math.hypot(n,s)/.35);for(let a=1;a<=r;a++){const o=a/r;if(this.blocked[this.cellOf({x:t.x+n*o,z:t.z+s*o})])return!1}return!0}}class Y_{items=[];keys=[];get size(){return this.items.length}push(t,e){const n=this.items,s=this.keys;n.push(t),s.push(e);let r=n.length-1;for(;r>0;){const a=r-1>>1;if(s[a]<=s[r])break;[n[a],n[r]]=[n[r],n[a]],[s[a],s[r]]=[s[r],s[a]],r=a}}pop(){const t=this.items,e=this.keys,n=t[0],s=t.pop(),r=e.pop();if(t.length){t[0]=s,e[0]=r;let a=0;for(;;){const o=a*2+1,l=o+1;let c=a;if(o<t.length&&e[o]<e[c]&&(c=o),l<t.length&&e[l]<e[c]&&(c=l),c===a)break;[t[c],t[a]]=[t[a],t[c]],[e[c],e[a]]=[e[a],e[c]],a=c}}return n}}class K_{a;m;rng;skill;mode="paint";goal=null;path=[];goalAge=0;thinkT=0;target=null;reactT=0;strafe=1;strafeT=0;aimErr=0;aimErrT=0;sweep=0;stuckT=0;lastX=0;lastZ=0;chargeGoal=1;constructor(t,e,n,s){this.a=t,this.m=e,this.rng=n,this.skill=s,this.sweep=n()*10}idle(){const t=this.a.input;t.moveX=t.moveZ=0,t.fire=!1}think(t){if(!this.a.alive){this.idle(),this.path=[],this.goal=null,this.mode="paint";return}this.goalAge+=t,this.thinkT-=t,this.reactT-=t,this.thinkT<=0&&(this.thinkT=.22+this.rng()*.2+(1-this.skill)*.15,this.decide()),this.act(t)}enemyInSight(t){const e=this.a;let n=null,s=t;for(const r of this.m.actors){if(r.team===e.team||!r.alive)continue;const a=Math.hypot(r.x-e.x,r.z-e.z);a<s&&q_(this.m.map,e,r)&&(n=r,s=a)}return n}decide(){const t=this.a,e=t.weapon,n=e.kind==="charger"?14:10,s=this.enemyInSight(n),r=e.kind==="charger"?t.ink<e.inkCost*.7:t.ink<12;if(this.mode==="refill"){const a=s&&Math.hypot(s.x-t.x,s.z-t.z)<3.5;(t.ink>75||a&&t.ink>20)&&(this.mode="paint")}else if(r){this.mode="refill",this.setGoal(this.nearestOwnGround());return}if(this.mode!=="refill"){if(s&&t.ink>10)this.target!==s&&(this.reactT=.45-this.skill*.3+this.rng()*.15),this.target=s,this.mode="fight";else{this.target=null,this.mode="paint";const a=this.goal&&Math.hypot(this.goal.x-t.x,this.goal.z-t.z)<1.2;(!this.goal||a||this.goalAge>4.5+this.rng()*2)&&this.setGoal(this.pickPaintGoal())}if(t.special>=1){const a=Math.sin(t.facing),o=Math.cos(t.facing),l=Ri*.75,c=this.m.turf.needAround(t.x+a*l,t.z+o*l,xi/2,t.team),h=this.target&&Math.hypot(this.target.x-t.x,this.target.z-t.z)<Ri+1;(h||c>.65)&&(h&&this.target?this.aimAt(this.target,0):(t.input.aimX=a,t.input.aimZ=o,t.input.aimDist=l),t.input.special=!0)}if(t.ink>70&&t.bombCd<=0){const a=this.target,o=a?Math.hypot(a.x-t.x,a.z-t.z):99;a&&o>3.5&&o<Vr&&this.rng()<.35+this.skill*.2?(this.aimAt(a,.25),t.input.sub=!0):!a&&this.rng()<.12&&(t.input.sub=!0)}}}setGoal(t){this.goal=t,this.goalAge=0,this.path=this.m.nav.path(this.a,t)}nearestOwnGround(){const t=this.a,e=this.m.turf;let n=null,s=99;for(let a=1;a<=10;a+=1){for(let o=0;o<12;o++){const l=o/12*Math.PI*2+a,c=t.x+Math.sin(l)*a,h=t.z+Math.cos(l)*a;e.at(c,h)===t.team+1&&this.m.nav.isOpen({x:c,z:h})&&a<s&&(n={x:c,z:h},s=a)}if(n)return n}const r=this.m.map.bases[t.team];return{x:(r.x0+r.x1)/2,z:(r.z0+r.z1)/2}}pickPaintGoal(){const t=this.a,e=this.m,n=e.map;let s={x:0,z:0},r=-1/0;const a=t.team===0?1:-1;for(let o=0;o<16;o++){const l={x:(this.rng()*2-1)*(n.halfW-2),z:(this.rng()*2-1)*(n.halfD-2)};if(!e.nav.isOpen(l))continue;const c=e.turf.needAround(l.x,l.z,2.5,t.team),h=Math.hypot(l.x-t.x,l.z-t.z);let u=c*1.2-h*.03+l.x*a/n.halfW*.25;for(const f of e.actors)f===t||f.team!==t.team||!f.alive||Math.hypot(f.x-l.x,f.z-l.z)<5&&(u-=.3);u+=this.rng()*.15,u>r&&(r=u,s=l)}return s}aimAt(t,e){const n=this.a,s=Math.hypot(t.x-n.x,t.z-n.z),r=e*(s/Math.max(10,n.weapon.speed)),a=t.x+t.vx*r,o=t.z+t.vz*r,l=Math.atan2(a-n.x,o-n.z)+this.aimErr;n.input.aimX=Math.sin(l),n.input.aimZ=Math.cos(l),n.input.aimDist=Math.hypot(a-n.x,o-n.z)}act(t){const e=this.a,n=e.input,s=e.weapon;if(this.aimErrT-=t,this.aimErrT<=0){this.aimErrT=.35+this.rng()*.3;const l=.05+(1-this.skill)*.3;this.aimErr=(this.rng()*2-1)*l}this.strafeT-=t,this.strafeT<=0&&(this.strafeT=.7+this.rng()*1.1,this.strafe=this.rng()<.5?-1:1);let r=0,a=0;if(n.fire=!1,this.mode==="fight"&&this.target&&this.target.alive){const l=this.target,c=l.x-e.x,h=l.z-e.z,u=Math.hypot(c,h)||1,f=c/u,d=h/u,x=s.kind==="roller"?0:s.kind==="charger"?10.5:5.2,v=s.kind==="roller"?1:Math.max(-1,Math.min(1,(u-x)/2.5)),m=s.kind==="roller"?.25:.75;r=f*v+-d*this.strafe*m,a=d*v+f*this.strafe*m,this.aimAt(l,.8);const p=this.reactT<=0;if(s.kind==="shooter")n.fire=p&&u<s.range+.6;else if(s.kind==="roller")n.fire=p&&u<6,u>2.5&&u<4.5&&e.fireCd<=0&&this.rng()<.08&&(n.fire=!1);else if(p&&u<s.range){const b=.75+this.skill*.25;n.fire=e.charge<b}}else{const l=this.path[0];if(l){const c=l.x-e.x,h=l.z-e.z,u=Math.hypot(c,h);u<.6?this.path.shift():(r=c/u,a=h/u)}else this.mode==="refill"&&(this.sweep+=t,r=Math.sin(this.sweep*1.3)*.25,a=Math.cos(this.sweep*1.7)*.25);if(this.mode==="paint"){this.sweep+=t;const h=(Math.hypot(r,a)>.1?Math.atan2(r,a):e.facing)+Math.sin(this.sweep*2.6)*.65;n.aimX=Math.sin(h),n.aimZ=Math.cos(h),n.aimDist=s.range*(.7+.3*Math.sin(this.sweep*1.7));const u=e.ink>18;s.kind==="shooter"?n.fire=u:s.kind==="roller"?n.fire=u&&Math.hypot(r,a)>.3:e.charging?n.fire=e.charge<this.chargeGoal:u&&e.fireCd<=0&&(n.fire=!0,this.chargeGoal=.45+this.rng()*.55)}else n.aimX=0,n.aimZ=0}const o=Math.hypot(e.x-this.lastX,e.z-this.lastZ);this.lastX=e.x,this.lastZ=e.z,Math.hypot(r,a)>.3&&o<t*.6?(this.stuckT+=t,this.stuckT>.8&&(this.stuckT=0,this.mode==="fight"&&this.target?this.setGoal(this.target):this.setGoal(this.mode==="refill"?this.nearestOwnGround():this.pickPaintGoal()),this.mode=this.mode==="fight"?"paint":this.mode)):this.stuckT=Math.max(0,this.stuckT-t),n.moveX=r,n.moveZ=a}}function th(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class Z_{w;h;cells;paintable;counts=[0,0];total;ox;oz;bases;constructor(t){this.w=t.halfW*2*$t,this.h=t.halfD*2*$t,this.ox=-t.halfW,this.oz=-t.halfD,this.bases=t.bases,this.cells=new Uint8Array(this.w*this.h),this.paintable=new Uint8Array(this.w*this.h);let e=0;for(let n=0;n<this.h;n++)for(let s=0;s<this.w;s++){const r=this.ox+(s+.5)/$t,a=this.oz+(n+.5)/$t;qs(t,r,a)===0&&!nu(t,r,a)&&(this.paintable[n*this.w+s]=1,e++)}this.total=e,t.bases.forEach((n,s)=>this.fillArea(n,s))}fillArea(t,e){for(let n=0;n<this.h;n++)for(let s=0;s<this.w;s++){const r=this.ox+(s+.5)/$t,a=this.oz+(n+.5)/$t;Wr(t,r,a)&&this.set(n*this.w+s,e+1)}}set(t,e){if(!this.paintable[t])return!1;const n=this.cells[t];return n===e?!1:(n&&this.counts[n-1]--,this.cells[t]=e,this.counts[e-1]++,!0)}protectedFrom(t,e,n){const s=this.bases[1-n];return Wr(s,t,e)}stampDisc(t,e,n,s){let r=0;const a=n*n,o=Math.max(0,Math.floor((t-n-this.ox)*$t)),l=Math.min(this.w-1,Math.floor((t+n-this.ox)*$t)),c=Math.max(0,Math.floor((e-n-this.oz)*$t)),h=Math.min(this.h-1,Math.floor((e+n-this.oz)*$t));for(let u=c;u<=h;u++){const f=this.oz+(u+.5)/$t;for(let d=o;d<=l;d++){const x=this.ox+(d+.5)/$t,v=x-t,m=f-e;v*v+m*m>a||this.protectedFrom(x,f,s)||this.set(u*this.w+d,s+1)&&r++}}return r}stampSquare(t,e,n,s){let r=0;const a=Math.max(0,Math.floor((t-n-this.ox)*$t)),o=Math.min(this.w-1,Math.floor((t+n-this.ox)*$t)),l=Math.max(0,Math.floor((e-n-this.oz)*$t)),c=Math.min(this.h-1,Math.floor((e+n-this.oz)*$t));for(let h=l;h<=c;h++)for(let u=a;u<=o;u++){const f=this.ox+(u+.5)/$t,d=this.oz+(h+.5)/$t;this.protectedFrom(f,d,s)||this.set(h*this.w+u,s+1)&&r++}return r}at(t,e){const n=Math.floor((t-this.ox)*$t),s=Math.floor((e-this.oz)*$t);return n<0||s<0||n>=this.w||s>=this.h?0:this.cells[s*this.w+n]}needAround(t,e,n,s){let r=0,a=0;const o=2,l=Math.max(0,Math.floor((t-n-this.ox)*$t)),c=Math.min(this.w-1,Math.floor((t+n-this.ox)*$t)),h=Math.max(0,Math.floor((e-n-this.oz)*$t)),u=Math.min(this.h-1,Math.floor((e+n-this.oz)*$t)),f=n*n*$t*$t,d=(t-this.ox)*$t,x=(e-this.oz)*$t;for(let v=h;v<=u;v+=o)for(let m=l;m<=c;m+=o){const p=m+.5-d,b=v+.5-x;if(p*p+b*b>f)continue;const A=v*this.w+m;this.paintable[A]&&(a++,this.cells[A]!==s+1&&r++)}return a?r/a:0}share(t){return this.counts[t]/this.total}}const Vn={squirt:{id:"squirt",name:"竹筒墨枪",tag:"均衡",desc:"按住连射，射程中等，涂地和对枪都稳。",kind:"shooter",range:7.5,damage:30,inkCost:1.15,interval:.12,spread:.09,speed:21,pellets:1,splatR:.85,dripR:.38,dripEvery:1.6,firingMoveMul:.85},roller:{id:"roller",name:"墨辊",tag:"涂地",desc:"按住推着走，滚过的路全是你的，撞上对手一下泼倒。按下那一刻甩出一扇墨。",kind:"roller",range:5,damage:35,inkCost:9,interval:.55,spread:.42,speed:15,pellets:5,splatR:.7,dripR:.3,dripEvery:1.4,firingMoveMul:.95,rollWidth:1.9,rollInkPerMetre:1.7,rollDamage:140},brush:{id:"brush",name:"长锋",tag:"远射",desc:"按住蓄力，松手一笔画出一条长线。蓄满一发泼倒。",kind:"charger",range:15,minRange:6,damage:120,inkCost:16,interval:.25,spread:0,speed:55,pellets:1,splatR:1.05,dripR:.48,dripEvery:.5,firingMoveMul:.5,chargeTime:.85},bucket:{id:"bucket",name:"泼桶",tag:"泼洒",desc:"一桶甩出去，一路泼成一长条。慢，但每下都是一大片。",kind:"shooter",range:6.8,damage:48,inkCost:7,interval:.5,spread:.05,speed:12.5,pellets:3,along:!0,splatR:1.05,dripR:.42,dripEvery:1.1,firingMoveMul:.8}},Xr=["squirt","roller","brush","bucket"],J_=[["阿炭","小乌","老烟","黑豆"],["阿雪","小霜","白果","糯米"]];class Q_{map;nav;turf;actors=[];projectiles=[];seals=[];duration;splats=[];events=[];phase="countdown";countdown=Yc;t=0;rng;brains=[];nextProjectile=1;lastCount=Yc+1;constructor(t={}){this.map=t.map??ls,this.nav=new $_(this.map),this.turf=new Z_(this.map),this.duration=t.duration??P_,this.rng=th(t.seed??1);const e=t.botSkill??.6;this.map.bases.forEach((s,r)=>{const a=(s.x0+s.x1)/2;for(const o of[s.z0+1,(s.z0+s.z1)/2,s.z1-1])this.paint(a,o,2.6,r)});let n=0;for(let s=0;s<R_;s++)for(let r=0;r<C_;r++){const a=s===0&&r===0&&t.playerWeapon!==void 0,o=a?t.playerWeapon:Xr[(r+s)%Xr.length],l=this.makeActor(n++,s,a?"你":J_[s][r],a,Vn[o]);this.spawn(l,r),this.actors.push(l),a||this.brains.push(new K_(l,this,th((t.seed??1)*97+n*13),e))}}get player(){return this.actors.find(t=>t.isPlayer)}makeActor(t,e,n,s,r){return{id:t,team:e,name:n,isPlayer:s,weapon:r,x:0,z:0,vx:0,vz:0,facing:e===0?Math.PI/2:-Math.PI/2,hp:Ds,ink:Dr,special:0,alive:!0,respawnT:0,guardT:0,fireCd:0,bombCd:0,charge:0,charging:!1,rolling:!1,rollDist:0,wasFiring:!1,lastShotT:-9,lastHitT:-9,lastHitBy:-1,rollHitT:new Map,emptyT:-9,input:{moveX:0,moveZ:0,aimX:0,aimZ:0,aimDist:0,fire:!1,sub:!1,special:!1},stats:{painted:0,splats:0,deaths:0,seals:0}}}spawn(t,e){const n=this.map.spawns[t.team][e%this.map.spawns[t.team].length];t.x=n.x,t.z=n.z,t.vx=0,t.vz=0,t.hp=Ds,t.ink=Dr,t.alive=!0,t.guardT=k_,t.charge=0,t.charging=!1,t.rolling=!1,t.facing=t.team===0?Math.PI/2:-Math.PI/2}share(t){return this.turf.share(t)}winner(){const t=this.turf.counts[0],e=this.turf.counts[1];return t===e?-1:t>e?0:1}tick(t){if(this.phase!=="over"){if(this.phase==="countdown"){this.countdown-=t;const e=Math.ceil(this.countdown);e<this.lastCount&&e>0&&(this.lastCount=e,this.events.push({type:"countdown",n:e})),this.countdown<=0&&(this.phase="play",this.events.push({type:"start"}));for(const n of this.brains)n.idle();return}this.t+=t;for(const e of this.brains)e.think(t);for(const e of this.actors)this.updateActor(e,t);this.updateProjectiles(t),this.updateSeals(t),this.t>=this.duration&&(this.phase="over",this.events.push({type:"end"}))}}paint(t,e,n,s,r){const a=this.turf.stampDisc(t,e,n,s);return this.splats.push({x:t,z:e,r:n,team:s,shape:0,seed:this.rng()}),r&&this.credit(r,a),a}credit(t,e){t.stats.painted+=e,!this.seals.some(s=>s.owner===t.id)&&t.special<1&&(t.special=Math.min(1,t.special+e/V_),t.special>=1&&this.events.push({type:"special",actor:t.id}))}updateActor(t,e){if(!t.alive){t.respawnT-=e,t.respawnT<=0&&(this.spawn(t,t.id),this.events.push({type:"respawn",actor:t.id}));return}const n=t.input,s=t.weapon;t.guardT=Math.max(0,t.guardT-e),t.fireCd=Math.max(0,t.fireCd-e),t.bombCd=Math.max(0,t.bombCd-e);const r=Math.hypot(n.moveX,n.moveZ),a=n.aimX!==0||n.aimZ!==0;s.kind==="roller"&&t.rolling&&r>.2?t.facing=Math.atan2(n.moveX,n.moveZ):a?t.facing=Math.atan2(n.aimX,n.aimZ):r>.2&&(t.facing=Math.atan2(n.moveX,n.moveZ));const o=Math.sin(t.facing),l=Math.cos(t.facing),c=this.turf.at(t.x,t.z);let h=c===t.team+1?D_:c?I_:1;const u=n.fire&&t.ink>.5;(s.kind==="charger"&&t.charging||u)&&(h*=s.firingMoveMul);const f=r>1?1/r:1,d=n.moveX*f*qo*h,x=n.moveZ*f*qo*h,v=Math.min(1,e*14);t.vx+=(d-t.vx)*v,t.vz+=(x-t.vz)*v;const m=t.x,p=t.z,b={x:t.x+t.vx*e,z:t.z+t.vz*e};iu(this.map,b,Ki),t.x=b.x,t.z=b.z;const A=Math.hypot(t.x-m,t.z-p);if(s.kind==="shooter")n.fire&&t.fireCd<=0&&(t.ink>=s.inkCost?(this.fireShots(t,s,o,l,n.aimDist||s.range),t.ink-=s.inkCost,t.fireCd=s.interval,t.lastShotT=this.t):this.dry(t));else if(s.kind==="roller"){if(n.fire&&!t.wasFiring&&t.fireCd<=0&&(t.ink>=s.inkCost?(this.fireShots(t,s,o,l,s.range),t.ink-=s.inkCost,t.fireCd=s.interval,t.lastShotT=this.t):this.dry(t)),t.rolling=n.fire&&t.ink>0&&A>e*.8,t.rolling){t.lastShotT=this.t,t.rollDist+=A;const M=s.rollWidth/2,y=t.x+o*.75,E=t.z+l*.75;for(;t.rollDist>=.3;)t.rollDist-=.3,this.paint(y,E,M,t.team,t),t.ink=Math.max(0,t.ink-s.rollInkPerMetre*.3);for(const R of this.actors){if(R.team===t.team||!R.alive||Math.hypot(R.x-y,R.z-E)>M+Ki)continue;const _=t.rollHitT.get(R.id)??-9;this.t-_<.5||(t.rollHitT.set(R.id,this.t),this.damage(R,s.rollDamage,t))}t.ink<=0&&this.dry(t)}}else if(n.fire&&t.fireCd<=0)t.charging=!0,t.charge=Math.min(1,t.charge+e/s.chargeTime);else if(!n.fire&&t.charging){const M=s.inkCost*(.4+.6*t.charge);if(t.ink>=M){const y=s.minRange+(s.range-s.minRange)*t.charge,E=n.aimDist?Math.min(y,Math.max(3,n.aimDist)):y;this.fireLine(t,s,o,l,E,40+(s.damage-40)*(t.charge>=1?1:t.charge*.75)),t.ink-=M,t.lastShotT=this.t}else this.dry(t);t.charging=!1,t.charge=0,t.fireCd=s.interval}if(t.wasFiring=n.fire,n.sub&&(n.sub=!1,t.bombCd<=0&&t.ink>=Ir?(this.throwBomb(t,o,l,n.aimDist||Vr*.8),t.ink-=Ir,t.bombCd=H_,t.lastShotT=this.t):t.ink<Ir&&this.dry(t)),n.special&&(n.special=!1,t.special>=1)){t.special=0,t.stats.seals++;const M=Math.min(Ri,n.aimDist||Ri*.7),y={x:t.x+o*M,z:t.z+l*M};y.x=Math.max(-this.map.halfW+1,Math.min(this.map.halfW-1,y.x)),y.z=Math.max(-this.map.halfD+1,Math.min(this.map.halfD-1,y.z)),this.seals.push({x:y.x,z:y.z,team:t.team,owner:t.id,t:eu}),this.events.push({type:"sealDrop",x:y.x,z:y.z,team:t.team,actor:t.id})}if(this.t-t.lastShotT>N_&&!t.charging&&!t.rolling){const y=Wr(this.map.bases[t.team],t.x,t.z,.5)?Kc*1.6:c===t.team+1?Kc:c?0:U_;t.ink=Math.min(Dr,t.ink+y*e)}this.t-t.lastHitT>O_&&(t.hp=Math.min(Ds,t.hp+F_*e))}dry(t){this.t-t.emptyT>1.2&&this.events.push({type:"empty",actor:t.id}),t.emptyT=this.t}newProjectile(t,e){return{id:this.nextProjectile++,kind:e,team:t.team,owner:t.id,x:t.x,y:1,z:t.z,vx:0,vy:0,vz:0,damage:0,splatR:0,dripR:0,dripEvery:99,sinceDrip:0,travelled:0,maxDist:99,fuse:0,landed:!1,alive:!0}}fireShots(t,e,n,s,r){const a=Math.max(2.5,Math.min(e.range,r));for(let o=0;o<e.pellets;o++){const l=e.pellets>1&&!e.along,c=l?-e.spread+2*e.spread*o/(e.pellets-1)+(this.rng()-.5)*.06:(this.rng()*2-1)*e.spread,h=Math.cos(c),u=Math.sin(c),f=n*h+s*u,d=-n*u+s*h,x=e.along?a*(.42+.58*o/Math.max(1,e.pellets-1)):a*(l?.8+this.rng()*.25:.92+this.rng()*.08),v=this.newProjectile(t,"shot"),m=x/e.speed;v.x+=f*.45,v.z+=d*.45,v.vx=f*e.speed,v.vz=d*e.speed,v.vy=(Ha*m*m*.5-v.y)/m,v.damage=e.damage,v.splatR=e.splatR,v.dripR=e.dripR,v.dripEvery=e.dripEvery,v.sinceDrip=e.dripEvery*(.3+this.rng()*.4),this.projectiles.push(v)}this.events.push({type:"shot",actor:t.id,kind:"shot"})}fireLine(t,e,n,s,r,a){const o=this.newProjectile(t,"line");o.y=.9,o.vx=n*e.speed,o.vz=s*e.speed,o.damage=a,o.splatR=e.splatR,o.dripR=e.dripR,o.dripEvery=e.dripEvery,o.maxDist=r,this.projectiles.push(o),this.events.push({type:"shot",actor:t.id,kind:"line"})}throwBomb(t,e,n,s){const r=Math.max(2,Math.min(Vr,s)),a=this.newProjectile(t,"bomb"),o=.62;a.y=1.3,a.vx=e*r/o,a.vz=n*r/o,a.vy=(Ha*o*o*.5-a.y)/o,a.fuse=tu,this.projectiles.push(a),this.events.push({type:"shot",actor:t.id,kind:"bomb"})}updateProjectiles(t){for(const e of this.projectiles){if(!e.alive)continue;const n=this.actors[e.owner];if(e.kind==="bomb"&&e.landed){e.fuse-=t,e.fuse<=0&&this.explode(e,n);continue}const s=e.x,r=e.z;e.x+=e.vx*t,e.z+=e.vz*t,e.kind!=="line"&&(e.y+=e.vy*t,e.vy-=Ha*t);const a=Math.hypot(e.x-s,e.z-r);if(e.travelled+=a,e.kind!=="bomb"){for(e.sinceDrip+=a;e.sinceDrip>=e.dripEvery;){e.sinceDrip-=e.dripEvery;const c=e.sinceDrip/Math.max(a,1e-6);this.paint(e.x-(e.x-s)*c,e.z-(e.z-r)*c,e.dripR*(.8+this.rng()*.4),e.team,n)}let l=!1;for(const c of this.actors)if(!(c.team===e.team||!c.alive)&&!(e.y>L_+.2)&&j_(s,r,e.x,e.z,c.x,c.z)<Ki+.15){this.damage(c,e.damage,n),this.paint(c.x,c.z,e.splatR*.6,e.team,n),l=!0;break}if(l){e.alive=!1;continue}}const o=qs(this.map,e.x,e.z);if(o>0&&e.y<o){if(e.kind==="bomb"){e.x=s,e.z=r,e.vx=0,e.vz=0;continue}this.land(e,s,r,n,.7);continue}if(e.kind==="line"&&e.travelled>=e.maxDist){this.land(e,e.x,e.z,n,1);continue}if(e.y<=0){if(e.kind==="bomb"){e.y=.25,e.landed=!0,e.vx=e.vy=e.vz=0;continue}this.land(e,e.x,e.z,n,1)}}if(this.projectiles.length>64){const e=this.projectiles.filter(n=>n.alive);this.projectiles.length=0,this.projectiles.push(...e)}}land(t,e,n,s,r){t.alive=!1;const a=t.splatR*r;this.paint(e,n,a,t.team,s),this.events.push({type:"land",x:e,z:n,r:a,team:t.team})}explode(t,e){t.alive=!1,this.paint(t.x,t.z,xr,t.team,e);for(let n=0;n<5;n++){const s=this.rng()*Math.PI*2,r=xr*(.8+this.rng()*.5);this.paint(t.x+Math.sin(s)*r,t.z+Math.cos(s)*r,.35+this.rng()*.3,t.team,e)}for(const n of this.actors){if(n.team===t.team||!n.alive)continue;const s=Math.hypot(n.x-t.x,n.z-t.z);s>xr+Ki||this.damage(n,G_*(1-.5*Math.min(1,s/xr)),e)}this.events.push({type:"bomb",x:t.x,z:t.z,team:t.team})}updateSeals(t){for(let e=this.seals.length-1;e>=0;e--){const n=this.seals[e];if(n.t-=t,n.t>0)continue;this.seals.splice(e,1);const s=xi/2,r=this.actors[n.owner],a=this.turf.stampSquare(n.x,n.z,s,n.team);r.stats.painted+=a,this.splats.push({x:n.x,z:n.z,r:s,team:n.team,shape:1,seed:this.rng()});for(const o of this.actors)o.team===n.team||!o.alive||Math.abs(o.x-n.x)<=s+Ki&&Math.abs(o.z-n.z)<=s+Ki&&this.damage(o,W_,r);this.events.push({type:"seal",x:n.x,z:n.z,team:n.team})}}damage(t,e,n){!t.alive||t.guardT>0||(t.hp-=e,t.lastHitT=this.t,t.lastHitBy=n.id,this.events.push({type:"hit",target:t.id,by:n.id,dmg:e}),!(t.hp>0)&&(t.alive=!1,t.respawnT=B_,t.special*=.5,t.charging=!1,t.charge=0,t.stats.deaths++,n.stats.splats++,this.paint(t.x,t.z,z_,n.team,n),this.events.push({type:"splatted",target:t.id,by:n.id,x:t.x,z:t.z})))}}function j_(i,t,e,n,s,r){const a=e-i,o=n-t,l=a*a+o*o;let c=l>0?((s-i)*a+(r-t)*o)/l:0;return c=Math.max(0,Math.min(1,c)),Math.hypot(i+a*c-s,t+o*c-r)}const eh=40;function Xa(i){return 120+30*(i-1)}function Sn(i){let t=1,e=i;for(;t<eh&&e>=Xa(t);)e-=Xa(t),t++;return{level:t,into:e,need:t>=eh?0:Xa(t)}}const nh=[{min:1,name:"学徒"},{min:4,name:"画工"},{min:8,name:"画匠"},{min:13,name:"画师"},{min:19,name:"待诏"},{min:26,name:"祗候"},{min:34,name:"画院大家"}];function Is(i){let t=nh[0].name;for(const e of nh)i>=e.min&&(t=e.name);return t}function tx(i){return Math.min(.85,.32+(i-1)*.018)}const ci={squirt:1,roller:2,brush:4,bucket:6},ih=[0,300,800,1600,3e3];function su(i){let t=1;for(let e=1;e<ih.length;e++)i>=ih[e]&&(t=e+1);return t}const sh=[0,0,60,120,200,320];function ru(i){return Math.round(i/($t*$t))}function ex(i,t){const e=ru(i.painted),n=[{label:"出战",coins:20}];n.push({label:`涂地 ${e}㎡`,coins:Math.min(60,Math.floor(e/8))}),i.splats&&n.push({label:`泼倒 ${i.splats} 人`,coins:i.splats*4}),i.result==="win"?n.push({label:"胜",coins:30}):i.result==="draw"&&n.push({label:"平",coins:15});let s=n.reduce((a,o)=>a+o.coins,0);t&&i.result==="win"&&(n.push({label:"今日首胜 ×2",coins:s}),s*=2);const r=50+Math.floor(e/5)+i.splats*5+(i.result==="win"?40:i.result==="draw"?20:0);return{coins:s,xp:r,lines:n}}const nx=[{id:"douli",name:"斗笠",price:0,desc:"坊里人人一顶。"},{id:"heye",name:"荷叶帽",price:150,desc:"池塘边摘的，下雨也不怕。"},{id:"fangjin",name:"方巾",price:220,desc:"书生打扮，泼起墨来一样凶。"},{id:"caomao",name:"草帽",price:280,desc:"晒谷场借来的，帽檐够宽。"},{id:"suoli",name:"渔翁笠",price:380,desc:"溪边老渔翁的，压得很低。"},{id:"hutou",name:"虎头帽",price:520,desc:"镇上最威风的帽子。"}],ix=[{char:"青",price:0},{char:"墨",price:80},{char:"福",price:100},{char:"乐",price:100},{char:"趣",price:120},{char:"侠",price:160},{char:"仙",price:160},{char:"胜",price:240}],sx=[{id:"paint600",kind:"paint",target:600,reward:50},{id:"paint1200",kind:"paint",target:1200,reward:80},{id:"splat8",kind:"splat",target:8,reward:50},{id:"splat15",kind:"splat",target:15,reward:80},{id:"win2",kind:"win",target:2,reward:60},{id:"play3",kind:"play",target:3,reward:40},{id:"seal3",kind:"seal",target:3,reward:50},{id:"winRoller",kind:"winWith",target:1,reward:60,weapon:"roller"},{id:"winBrush",kind:"winWith",target:1,reward:60,weapon:"brush"},{id:"winSquirt",kind:"winWith",target:1,reward:50,weapon:"squirt"}],qa=60;function au(i,t){switch(i.kind){case"paint":return`涂地 ${i.target}㎡`;case"splat":return`泼倒 ${i.target} 人`;case"win":return`赢 ${i.target} 局`;case"play":return`打 ${i.target} 局`;case"seal":return`盖印 ${i.target} 次`;case"winWith":return`用${t(i.weapon)}赢 1 局`}}function rx(i,t){let e=2166136261;for(const a of i)e=Math.imul(e^a.charCodeAt(0),16777619);const n=sx.filter(a=>!a.weapon||ci[a.weapon]<=t),s=[],r=new Set;for(let a=0;s.length<3&&a<60;a++){e=Math.imul(e^e>>>13,1274126177)>>>0;const o=n[e%n.length];r.has(o.kind)||(r.add(o.kind),s.push({...o,progress:0,claimed:!1}))}return s}function ax(i,t){return i.map(e=>{let n=0;switch(e.kind){case"paint":n=ru(t.painted);break;case"splat":n=t.splats;break;case"win":n=t.result==="win"?1:0;break;case"play":n=1;break;case"seal":n=t.seals;break;case"winWith":n=t.result==="win"&&t.weapon===e.weapon?1:0;break}return{...e,progress:Math.min(e.target,e.progress+n)}})}function Us(i){return i.progress>=i.target}function xl(){return null}let ou=!0,rh=0;function ox(i){ou=i}function $a(i="light"){if(!ou)return;const t=performance.now();if(t-rh<120)return;rh=t;const e=xl();try{if(e?.vibrateShort){e.vibrateShort({type:i});return}const n=matchMedia("(pointer: coarse)").matches,s=navigator.userActivation?.hasBeenActive??!0;n&&s&&navigator.vibrate?.(i==="heavy"?40:i==="medium"?25:12)}catch{}}const lx={id:"woodcut",label:"黑白木刻",bg:"#e9e1cf",paper:"#f3eee2",ink:"#1d1b1a",wall:"#ebe4d4",plinth:"#8f8b82",roof:"#3d434a",tile:"#596169",cap:"#25282c",wood:"#6b4a33",woodLight:"#9a7550",stone:"#b5b0a3",stoneDark:"#8e8a80",leaf:"#465a4b",water:"#9dbdb2",accent:"#c23a2b",skin:"#efe3cc",bamboo:"#b7a064",shadowTint:"#ffffff",hatch:1,wash:0,joints:.42,teams:[{name:"墨坊",short:"墨",paint:"#1d1b1a",deep:"#1d1b1a",cloth:"#2a2624",trim:"#f0eadc",outline:"#f3eee2",stroke:!1},{name:"素坊",short:"素",paint:"#f6f2e8",deep:"#f6f2e8",cloth:"#efe9dc",trim:"#2a2624",outline:"#1d1b1a",stroke:!0}]},cx={id:"qianjiang",label:"浅绛淡彩",bg:"#efe7d6",paper:"#f5efe2",ink:"#2e2a25",wall:"#f6f1e7",plinth:"#bcb19f",roof:"#6b7884",tile:"#8693a0",cap:"#414b54",wood:"#8c5a3a",woodLight:"#c49a6c",stone:"#e3d9c4",stoneDark:"#d2c5aa",leaf:"#7f9d8c",water:"#a8c5d2",accent:"#c23a2b",skin:"#f4e7d0",bamboo:"#c9b47c",shadowTint:"#bac6d8",hatch:.22,wash:1,joints:.12,teams:[{name:"青坊",short:"青",paint:"#93b5d3",deep:"#356592",cloth:"#4a7fae",trim:"#f5efe2",outline:"#2e2a25",stroke:!1},{name:"赭坊",short:"赭",paint:"#e6bb98",deep:"#a9582f",cloth:"#c46f45",trim:"#f5efe2",outline:"#2e2a25",stroke:!1}]},hx={id:"qinglv",label:"青绿设色",bg:"#ebdcbd",paper:"#f3e9d1",ink:"#1f2a33",wall:"#f4ecdb",plinth:"#b39a74",roof:"#4d5e66",tile:"#6b7f86",cap:"#2b363c",wood:"#8a3b24",woodLight:"#b97a4d",stone:"#ddc8a0",stoneDark:"#c9b084",leaf:"#3f9b86",water:"#5aa6bd",accent:"#c23a2b",skin:"#f4e3c6",bamboo:"#c9a95f",shadowTint:"#b9c7dc",hatch:.15,wash:1,joints:.12,teams:[{name:"青坊",short:"青",paint:"#74a3cf",deep:"#1f5f9c",cloth:"#2f7dbd",trim:"#f3e9d1",outline:"#1f2a33",stroke:!1},{name:"黄坊",short:"黄",paint:"#edc970",deep:"#b07d0c",cloth:"#e8b13a",trim:"#f3e9d1",outline:"#1f2a33",stroke:!0}]},ux={id:"yanyu",label:"徽州烟雨",bg:"#e2e6e5",paper:"#f3f2ee",ink:"#2d2e36",wall:"#f7f4ed",plinth:"#a9acaa",roof:"#454950",tile:"#646a71",cap:"#2b2d33",wood:"#5c3719",woodLight:"#8d6644",stone:"#cdd1cf",stoneDark:"#b7bdbc",leaf:"#6f9479",water:"#86a6a9",accent:"#c23a2b",skin:"#f2e7d5",bamboo:"#b8a76d",shadowTint:"#c3cbd6",hatch:.25,wash:1,joints:.14,teams:[{name:"黛坊",short:"黛",paint:"#8199b2",deep:"#2c4b6b",cloth:"#3b5f85",trim:"#f3f2ee",outline:"#2d2e36",stroke:!1},{name:"黄坊",short:"黄",paint:"#f2d77a",deep:"#c09618",cloth:"#f1ca4a",trim:"#f3f2ee",outline:"#2d2e36",stroke:!0}]},lu={woodcut:lx,qianjiang:cx,qinglv:hx,yanyu:ux},fx="qianjiang";function dx(){return lu[fx]}const it=dx();function vi(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function px(){const i=document.documentElement.style;i.setProperty("--ink",it.ink),i.setProperty("--paper",it.paper),i.setProperty("--bg",it.bg),i.setProperty("--stone",it.stone),i.setProperty("--red",it.accent),it.teams.forEach((t,e)=>i.setProperty(`--team${e}`,t.deep))}function mx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Fe;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=ah(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);const x=ah(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function ah(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new je(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<e;x++){const v=h.getComponent(f,x);o.setComponent(f+u,x,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}Wt.enabled=!1;const Cs=new N(-.5,.8,.33).normalize(),qr=new Lt(-Cs.x/Cs.y,-Cs.z/Cs.y),Oe=i=>new Ct(i),dt={ink:Oe(it.ink),paper:Oe(it.paper),wall:Oe(it.wall),plinth:Oe(it.plinth),roof:Oe(it.roof),tile:Oe(it.tile),cap:Oe(it.cap),wood:Oe(it.wood),woodLight:Oe(it.woodLight),stone:Oe(it.stone),stoneDark:Oe(it.stoneDark),leaf:Oe(it.leaf),vermilion:Oe(it.accent),bamboo:Oe(it.bamboo),skin:Oe(it.skin),water:Oe(it.water),shadowTint:Oe(it.shadowTint)},cu={uHatch:{value:it.hatch},uWash:{value:it.wash},uShadowTint:{value:dt.shadowTint}},Zn={uPaper:{value:null},uNoise:{value:null},uTime:{value:0}},vl=`
float lines(float coord, float spacing, float width) {
  float f = coord / spacing;
  float d = abs(fract(f) - 0.5);
  float fw = fwidth(f);
  float l = 1.0 - smoothstep(width * 0.5 - fw, width * 0.5 + fw, d);
  return mix(l, width, smoothstep(0.25, 0.6, fw));
}
`,gx=`
varying vec3 vN;
varying vec3 vW;
varying vec3 vCol;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
#ifdef USE_COLOR
  vCol = color;
#else
  vCol = vec3(1.0);
#endif
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,_x=`
uniform vec3 uLight;
uniform vec3 uInk;
uniform vec3 uLightInk;
uniform vec3 uTint;
uniform vec3 uShadowTint;
uniform float uFlash;
uniform float uHatch;
uniform float uWash;
uniform sampler2D uPaper;
uniform sampler2D uNoise;
varying vec3 vN;
varying vec3 vW;
varying vec3 vCol;
${vl}
void main() {
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  float ndl = dot(n, uLight);
  vec3 base = vCol * uTint;
  vec3 an = abs(n);
  vec2 hp = an.y > 0.7 ? vW.xz : (an.x > an.z ? vW.zy : vW.xy);
  float da = (hp.x + hp.y) * 0.7071;
  float db = (hp.x - hp.y) * 0.7071;
  float lum = dot(base, vec3(0.3, 0.59, 0.11));
  float paper = texture2D(uPaper, vW.xz * 0.21 + vW.y * 0.13).r;

  // woodcut
  vec3 wood;
  if (lum < 0.32) {
    // dark wood/ink/tiles: carve light lines into the lit side, like a woodblock
    float carve = lines(da, 0.2, 0.16) * smoothstep(0.35, 0.75, ndl);
    wood = mix(base * (ndl < 0.1 ? 0.8 : 1.0), uLightInk, carve * 0.55);
  } else {
    float mid = smoothstep(0.62, 0.42, ndl);
    float deep = smoothstep(0.2, 0.05, ndl);
    wood = base * (1.0 - 0.1 * mid - 0.12 * deep);
    float h = lines(da, 0.15, 0.24) * mid;
    h = max(h, lines(db, 0.15, 0.24) * deep);
    wood = mix(wood, uInk, h * 0.8 * uHatch);
  }

  // wash
  float wob = (paper - 0.5) * 0.4;
  float sh = smoothstep(0.52, 0.18, ndl + wob);
  float deepSh = smoothstep(0.1, -0.2, ndl + wob);
  vec3 wash = base * mix(vec3(1.0), uShadowTint, sh) * (1.0 - 0.14 * deepSh);
  float pool = 1.0 - smoothstep(0.0, 0.1, abs(sh - 0.5));
  wash *= 1.0 - 0.09 * pool;
  wash = mix(wash, uInk, lines(da, 0.2, 0.16) * deepSh * uHatch * 0.7);
  // 水渍: grey streaks running down pale walls, heaviest near the ground
  if (an.y < 0.3 && lum > 0.6) {
    float streak = texture2D(uNoise, vec2(hp.x * 0.11, vW.y * 0.035)).r;
    float stain = smoothstep(0.48, 0.78, streak) * smoothstep(4.8, 0.6, vW.y) * 0.55 + smoothstep(1.1, 0.2, vW.y) * 0.25;
    wash *= 1.0 - stain * 0.2;
  }

  vec3 col = mix(wood, wash, uWash);
  col *= 0.9 + 0.2 * paper;
  col = mix(col, vec3(1.0), uFlash);
  gl_FragColor = vec4(col, 1.0);
}
`;function na(i={}){return new Ze({vertexShader:gx,fragmentShader:_x,vertexColors:i.vertexColors??!0,uniforms:{uLight:{value:Cs},uInk:{value:dt.ink},uLightInk:{value:dt.paper},uTint:{value:i.tint??new Ct(1,1,1)},uFlash:{value:0},uPaper:Zn.uPaper,uNoise:Zn.uNoise,...cu}})}const xx=`
attribute vec3 smoothNormal;
uniform float uWidth;
void main() {
  vec3 p = position + smoothNormal * uWidth;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,vx=`
uniform vec3 uColor;
void main() { gl_FragColor = vec4(uColor, 1.0); }
`;function ia(i=dt.ink,t=.045){return new Ze({vertexShader:xx,fragmentShader:vx,side:We,uniforms:{uWidth:{value:t},uColor:{value:i}}})}function Dt(i,t){const e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return e.setAttribute("color",new je(s,3)),e.attributes.uv&&e.deleteAttribute("uv"),e.attributes.normal||e.computeVertexNormals(),Mx(e),e}function Mx(i){const t=i.attributes.position,e=i.attributes.normal,n=new Map,s=a=>`${t.getX(a).toFixed(3)},${t.getY(a).toFixed(3)},${t.getZ(a).toFixed(3)}`;for(let a=0;a<t.count;a++){const o=s(a);let l=n.get(o);l||n.set(o,l=new N);const c=e.getX(a),h=e.getY(a),u=e.getZ(a),f=`${o}|${c.toFixed(2)},${h.toFixed(2)},${u.toFixed(2)}`;Ya.has(f)||(Ya.add(f),l.x+=c,l.y+=h,l.z+=u)}Ya.clear();const r=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){const o=n.get(s(a)).clone().normalize();r[a*3]=o.x,r[a*3+1]=o.y,r[a*3+2]=o.z}i.setAttribute("smoothNormal",new je(r,3))}const Ya=new Set;function se(i,t,e,n,s,r,a,o=0){const l=new Yn(i,t,e);return o&&l.rotateY(o),l.translate(n,s,r),Dt(l,a)}function cs(i){const t=mx(i,!1);if(!t)throw new Error("merge failed");return t}const Sx=it.teams.map(i=>new Ct(i.cloth)),bx=it.teams.map(i=>new Ct(i.trim)),yx=it.teams.map(i=>new Ct(i.outline)),Ex=it.teams.map(i=>new Ct(i.deep)),oh=new Map,lh=new Map,Ka=new Ct("#d6b46a"),Tx=new Ct("#bf9d55"),wx=new Ct("#79a26c"),Ax=new Ct("#567d4c"),ch=new Ct("#e3893a");function Rx(i,t,e){const n=[];switch(i){case"douli":n.push(Dt(new as(.58,.3,16).translate(0,1.42,0),t)),n.push(Dt(new Jt(.58,.58,.035,16).translate(0,1.27,0),e)),n.push(Dt(new Qe(.06,6,5).translate(0,1.58,0),e));break;case"heye":{const s=new Jt(.12,.68,.16,20,1),r=s.attributes.position;for(let a=0;a<r.count;a++){const o=r.getX(a),l=r.getZ(a);Math.hypot(o,l)>.5&&r.setY(a,r.getY(a)+Math.sin(Math.atan2(l,o)*7)*.045)}s.computeVertexNormals(),n.push(Dt(s.translate(0,1.38,0),wx)),n.push(Dt(new Jt(.03,.035,.16,6).translate(0,1.52,0),Ax)),n.push(Dt(new Jt(.31,.31,.06,16).translate(0,1.29,0),t));break}case"fangjin":n.push(Dt(new Jt(.27,.31,.34,4).rotateY(Math.PI/4).translate(0,1.36,0),dt.ink)),n.push(Dt(new Jt(.315,.315,.07,4).rotateY(Math.PI/4).translate(0,1.22,0),t));for(const s of[-1,1])n.push(se(.07,.34,.02,s*.09,1.18,-.3,dt.ink,s*.25));break;case"caomao":n.push(Dt(new Jt(.7,.73,.04,22).translate(0,1.28,0),Ka)),n.push(Dt(new Jt(.25,.3,.25,16).translate(0,1.42,0),Ka)),n.push(Dt(new Jt(.305,.305,.07,16).translate(0,1.34,0),t));break;case"suoli":n.push(Dt(new as(.8,.38,20).translate(0,1.42,0),Tx)),n.push(Dt(new Jt(.8,.8,.035,20).translate(0,1.24,0),t)),n.push(Dt(new Jt(.05,.08,.1,8).translate(0,1.63,0),Ka));break;case"hutou":n.push(Dt(new Qe(.34,16,10,0,Math.PI*2,0,Math.PI/2).translate(0,1.12,0),ch));for(const s of[-1,1])n.push(Dt(new Qe(.1,8,6).scale(1,1,.6).translate(s*.22,1.4,0),ch)),n.push(Dt(new Qe(.045,6,5).translate(s*.11,1.32,.29),dt.ink));for(const s of[-.1,0,.1])n.push(se(.035,.03,.26,s,1.45,-.02,dt.ink));n.push(Dt(new Jt(.345,.345,.07,16).translate(0,1.13,0),t));break}return n}function Cx(i,t){const e=`${i}-${t}`;let n=oh.get(e);if(n)return n;const s=Sx[i],r=bx[i],a=[];a.push(Dt(new Jt(.21,.4,.82,12).translate(0,.41,0),s)),a.push(Dt(new Jt(.235,.25,.09,12).translate(0,.66,0),r)),a.push(Dt(new Qe(.3,14,10).translate(0,1.07,0),dt.skin));for(const o of[-1,1])a.push(Dt(new Qe(.042,6,5).translate(o*.105,1.1,.268),dt.ink));a.push(Dt(new Qe(.03,6,5).scale(1.6,.6,1).translate(0,.98,.29),dt.vermilion)),a.push(...Rx(t,s,r));for(const o of[-1,1])a.push(Dt(new Qe(.085,7,6).translate(o*.27,.66,.2),dt.skin));return n=cs(a),oh.set(e,n),n}function Px(i,t){const e=`${i}${t}`;let n=lh.get(e);if(n)return n;const s=Ex[t],r=[];if(i==="squirt"){r.push(Dt(new Jt(.085,.085,.72,9).rotateX(Math.PI/2).translate(.2,.7,.38),dt.bamboo));for(const a of[.18,.48])r.push(Dt(new Jt(.095,.095,.04,9).rotateX(Math.PI/2).translate(.2,.7,a),dt.wood));r.push(Dt(new as(.07,.16,8).rotateX(Math.PI/2).translate(.2,.7,.81),s)),r.push(Dt(new Jt(.03,.03,.3,6).rotateX(Math.PI/2).translate(.2,.7,-.08),dt.wood)),r.push(se(.16,.05,.05,.2,.7,-.24,dt.wood))}else if(i==="roller"){const a=new Jt(.035,.035,1,6);a.rotateX(Math.PI/2-.62),a.translate(0,.48,.48),r.push(Dt(a,dt.wood)),r.push(Dt(new Jt(.19,.19,1.75,14).rotateZ(Math.PI/2).translate(0,.19,.88),s));for(const o of[-1,1])r.push(Dt(new Jt(.2,.2,.06,14).rotateZ(Math.PI/2).translate(o*.9,.19,.88),dt.wood))}else if(i==="bucket"){r.push(Dt(new Jt(.24,.19,.36,12).translate(.24,.62,.36),dt.wood));for(const a of[.5,.74])r.push(Dt(new Jt(a>.6?.245:.205,a>.6?.245:.205,.035,12).translate(.24,a,.36),dt.cap));r.push(Dt(new Jt(.2,.2,.03,12).translate(.24,.79,.36),s)),r.push(Dt(new dl(.22,.018,5,14,Math.PI).rotateY(Math.PI/2).translate(.24,.8,.36),dt.cap))}else r.push(Dt(new Jt(.035,.045,1.35,7).rotateX(Math.PI/2).translate(.22,.78,.38),dt.wood)),r.push(Dt(new Jt(.06,.05,.12,8).rotateX(Math.PI/2).translate(.22,.78,1.07),dt.cap)),r.push(Dt(new as(.075,.32,9).rotateX(Math.PI/2).translate(.22,.78,1.28),s)),r.push(Dt(new Qe(.06,6,5).translate(.22,.7,-.32),dt.vermilion));return n=cs(r),lh.set(e,n),n}class Lx{group=new Hn;body=new Hn;weapon=new Hn;mat;ring=null;phase=Math.random()*6;recoil=0;flash=0;pop=1;wasAlive=!0;constructor(t,e="douli"){this.mat=na();const n=ia(yx[t.team],.04),s=Cx(t.team,e);this.body.add(new Qt(s,this.mat),new Qt(s,n));const r=Px(t.weapon.id,t.team),a=new Qt(r,this.mat),o=new Qt(r,n);if(this.weapon.add(a,o),this.body.add(this.weapon),this.group.add(this.body),t.isPlayer){const c=new fl(.56,.7,40);c.rotateX(-Math.PI/2);const h=new Fe().setFromPoints([new N(-.16,0,.74),new N(.16,0,.74),new N(0,0,.98)]);h.setIndex([0,2,1]),h.computeVertexNormals();const u=new Ve({color:dt.vermilion,depthWrite:!1,side:vn});this.ring=new Qt(c,u),this.ring.add(new Qt(h,u)),this.ring.position.y=.025,this.ring.renderOrder=1,this.group.add(this.ring)}const l=new Qt(new Qr(.42,20).rotateX(-Math.PI/2),new Ve({color:0,transparent:!0,opacity:.22,depthWrite:!1}));l.position.y=.02,this.group.add(l)}shot(){this.recoil=1}hit(){this.flash=1}update(t,e,n){if(!t.alive){this.group.visible=!1,this.wasAlive=!1;return}this.wasAlive||(this.pop=0,this.wasAlive=!0),this.group.visible=t.guardT>0?Math.floor(n*12)%2===0||t.guardT<.2:!0,this.group.position.set(t.x,0,t.z),this.group.rotation.y=t.facing,this.ring&&(this.ring.rotation.y=0);const s=Math.min(1.4,Math.hypot(t.vx,t.vz)/qo);this.phase+=e*(3+s*9);const r=Math.sin(this.phase);this.body.position.y=Math.abs(r)*.09*Math.min(1,s*1.5),this.body.rotation.z=r*.1*Math.min(1,s*1.5),this.body.rotation.x=.1*s,this.pop=Math.min(1,this.pop+e*5);const a=.4+.6*Dx(this.pop);this.body.scale.setScalar(a),this.recoil=Math.max(0,this.recoil-e*9),this.weapon.position.z=-.07*this.recoil,t.weapon.kind==="charger"&&t.charging&&(this.weapon.position.x=(Math.random()-.5)*.03*t.charge,this.weapon.position.z-=.12*t.charge),this.flash=Math.max(0,this.flash-e*6),this.mat.uniforms.uFlash.value=this.flash*.8}}function Dx(i){return 1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)}const $r=120,Yr=90,Zi=8,Ix=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Ux=`
uniform sampler2D uPaint;
uniform sampler2D uShadow;
uniform sampler2D uNoise;
uniform sampler2D uPaper;
uniform vec2 uMin;
uniform vec2 uSize;
uniform vec2 uFloor;
uniform vec3 uInk;
uniform vec3 uPaperC;
uniform vec3 uTeamA;
uniform vec3 uTeamB;
uniform vec3 uDeepA;
uniform vec3 uDeepB;
uniform vec3 uStone;
uniform vec3 uStoneDark;
uniform vec3 uShadowTint;
uniform float uHatch;
uniform float uWash;
uniform float uJoints;
varying vec3 vW;
${vl}
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  // --- stone slabs, running bond
  vec2 s = vW.xz / vec2(1.2, 0.75);
  float row = floor(s.y);
  s.x += mod(row, 2.0) * 0.5 + hash2(vec2(row, 3.0)) * 0.3;
  vec2 cell = floor(s);
  vec2 f = fract(s);
  float rnd = hash2(cell);
  vec3 col = mix(uStone, uStoneDark, rnd * 0.55);
  vec2 fw = fwidth(s);
  float jx = 1.0 - smoothstep(0.03, 0.03 + fw.x * 1.5, min(f.x, 1.0 - f.x));
  float jy = 1.0 - smoothstep(0.045, 0.045 + fw.y * 1.5, min(f.y, 1.0 - f.y));
  col = mix(col, uInk, max(jx, jy) * uJoints);
  float nz = texture2D(uNoise, vW.xz * 0.11).g;
  col *= 0.94 + 0.12 * nz;
  // how the ground differs from plain stone: a wash lets joints and blotches show through
  vec3 through = col / max(uStone, vec3(0.05));

  // --- ink
  vec2 uv = (vW.xz - uMin) / uSize;
  float darkHere = 0.0;
  if (uv.x > 0.0 && uv.y > 0.0 && uv.x < 1.0 && uv.y < 1.0) {
    vec4 p = texture2D(uPaint, uv);
    float n1 = texture2D(uNoise, vW.xz * 0.23).r;
    float n2 = texture2D(uNoise, vW.xz * 0.9).r;
    float amt = max(p.r, p.g);
    float e = amt + (n1 - 0.5) * 0.34 + (n2 - 0.5) * 0.14;
    float fe = max(fwidth(e), 0.002);
    float cover = smoothstep(0.5 - fe, 0.5 + fe, e);
    float isA = smoothstep(-0.04, 0.04, p.r - p.g);

    // woodcut: gouge strokes in team A, faint engraving in team B
    float warp = (n1 - 0.5) * 2.2;
    float gouge = lines(vW.x * 0.8 + vW.z * 0.6 + warp, 0.42, 0.07) * smoothstep(0.58, 0.72, n2);
    float engr = lines(vW.x * 0.55 - vW.z * 0.83 + warp * 0.4, 0.2, 0.08);
    vec3 woodCol = mix(mix(uTeamB, uInk, engr * 0.1), mix(uTeamA, uPaperC, gouge * 0.35), isA);

    // wash: transparent pigment, uneven density, darker where it pooled at the edge
    float dens = 0.86 + 0.22 * n2 + 0.1 * (texture2D(uNoise, vW.xz * 2.6).g - 0.5);
    float pool = 1.0 - smoothstep(0.0, 0.14, e - 0.5);
    vec3 washA = mix(uTeamA * dens, uDeepA, pool * 0.75);
    vec3 washB = mix(uTeamB * dens, uDeepB, pool * 0.75);
    vec3 washCol = mix(washB, washA, isA) * mix(vec3(1.0), through, 0.4);

    col = mix(col, mix(woodCol, washCol, uWash), cover);
    // contour where ink meets stone, and a seam where the two teams meet
    float rim = 1.0 - smoothstep(fe * 1.5, fe * 1.5 + 0.035, abs(e - 0.5));
    vec3 rimCol = mix(uInk, mix(uDeepB, uDeepA, isA), uWash);
    float rimAmt = mix(0.9 * (1.0 - isA * cover), 0.6, uWash);
    col = mix(col, rimCol, rim * rimAmt);
    float d = p.r - p.g;
    float fd = max(fwidth(d), 0.002);
    float seam = (1.0 - smoothstep(fd, fd * 2.5 + 0.03, abs(d))) * step(0.3, min(p.r + p.g, 1.0)) * cover;
    col = mix(col, mix(uInk, (uDeepA + uDeepB) * 0.5, uWash), seam * mix(1.0, 0.7, uWash));
    darkHere = isA * cover * (1.0 - uWash);
  }

  // --- cast shadows: hatching (woodcut) or a cool wash with a few strokes
  vec2 suv = (vW.xz + uFloor * 0.5) / uFloor;
  float sh = texture2D(uShadow, suv).r;
  if (sh > 0.01) {
    float h1 = lines((vW.x + vW.z) * 0.7071, 0.17, 0.26);
    float h2 = lines((vW.x - vW.z) * 0.7071, 0.24, 0.18);
    float hatch = max(h1, h2 * 0.6) * sh * uHatch;
    vec3 hc = mix(uInk, uPaperC * 0.55, darkHere);
    col = mix(col * (1.0 - 0.12 * sh), hc, hatch * (0.72 - darkHere * 0.4));
    col *= mix(vec3(1.0), uShadowTint * 0.92, sh * uWash);
  }

  float paper = texture2D(uPaper, vW.xz * 0.19).r;
  col *= 0.9 + 0.2 * paper;
  gl_FragColor = vec4(col, 1.0);
}
`;function Nx(i,t,e){const n=new Kn($r,Yr);n.rotateX(-Math.PI/2);const s=new Ze({vertexShader:Ix,fragmentShader:Ux,uniforms:{uPaint:{value:t},uShadow:{value:Fx(i)},uNoise:{value:e},uPaper:Zn.uPaper,uMin:{value:new Lt(-i.halfW,-i.halfD)},uSize:{value:new Lt(i.halfW*2,i.halfD*2)},uFloor:{value:new Lt($r,Yr)},uInk:{value:dt.ink},uPaperC:{value:dt.paper},uTeamA:{value:new Ct(it.teams[0].paint)},uTeamB:{value:new Ct(it.teams[1].paint)},uDeepA:{value:new Ct(it.teams[0].deep)},uDeepB:{value:new Ct(it.teams[1].deep)},uJoints:{value:it.joints},...cu,uStone:{value:dt.stone},uStoneDark:{value:dt.stoneDark}}});return new Qt(n,s)}const Ml=[];function Sl(i,t,e,n,s,r=0){const a=[],o=qr.clone().multiplyScalar(r),l=qr.clone().multiplyScalar(s);for(const c of[o,l])a.push(new Lt(i+c.x,t+c.y),new Lt(e+c.x,t+c.y)),a.push(new Lt(e+c.x,n+c.y),new Lt(i+c.x,n+c.y));return Ox(a)}function Fx(i){const t=document.createElement("canvas");t.width=$r*Zi,t.height=Yr*Zi;const e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,t.width,t.height),e.fillStyle="#fff";const n=l=>[(l.x+$r/2)*Zi,(l.y+Yr/2)*Zi],s=l=>{e.beginPath(),l.forEach((c,h)=>{const[u,f]=n(c);h?e.lineTo(u,f):e.moveTo(u,f)}),e.closePath(),e.fill()};for(const l of i.solids)s(Sl(l.x0,l.z0,l.x1,l.z1,l.kind==="pillar"?4.6:l.h));for(const l of Ml)s(l.poly);for(const l of i.circles){const c=l.kind==="tree"?3.4:.8,h=l.kind==="tree"?1.5:l.r,[u,f]=n(new Lt(l.x+qr.x*c,l.z+qr.y*c));e.beginPath(),e.ellipse(u,f,h*Zi*1.1,h*Zi*.85,.4,0,Math.PI*2),e.fill()}const r=document.createElement("canvas");r.width=t.width,r.height=t.height;const a=r.getContext("2d");a.filter="blur(1.5px)",a.drawImage(t,0,0);const o=new Si(r);return o.colorSpace=Ke,o.flipY=!1,o}function Ox(i){const t=[...i].sort((r,a)=>r.x-a.x||r.y-a.y),e=(r,a,o)=>(a.x-r.x)*(o.y-r.y)-(a.y-r.y)*(o.x-r.x),n=[],s=[];for(const r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(const r of t.reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}class Bx{interval=1e3/60;prev=-1;skipped=0;shouldDraw(t,e=0){if(this.prev>=0){const r=t-this.prev;r>0&&r<50&&(this.interval+=(r-this.interval)*.1)}this.prev=t;const n=this.interval>=9.5?1:2,s=e>0?Math.max(n,Math.round(1e3/e/this.interval)):n;return++this.skipped<s?!1:(this.skipped=0,!0)}}function Ts(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function kx(i=256){const t=new Uint8Array(i*i*4),e=(s,r,a,o)=>{const l=s/i*a,c=r/i*a,h=Math.floor(l),u=Math.floor(c),f=l-h,d=c-u,x=f*f*(3-2*f),v=d*d*(3-2*d),m=y=>(y%a+a)%a,p=Ts(m(h),m(u),o),b=Ts(m(h+1),m(u),o),A=Ts(m(h),m(u+1),o),M=Ts(m(h+1),m(u+1),o);return(p+(b-p)*x)*(1-v)+(A+(M-A)*x)*v};for(let s=0;s<i;s++)for(let r=0;r<i;r++){const a=e(r,s,4,1)*.5+e(r,s,8,2)*.27+e(r,s,16,3)*.15+e(r,s,32,4)*.08,o=e(r,s,16,7)*.6+e(r,s,32,8)*.4,l=(s*i+r)*4;t[l]=a*255,t[l+1]=o*255,t[l+2]=Ts(r,s,9)*255,t[l+3]=255}const n=new hl(t,i,i,rn);return n.wrapS=n.wrapT=Os,n.magFilter=Ae,n.minFilter=li,n.generateMipmaps=!0,n.needsUpdate=!0,n}function hu(i=256){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,i,i);let n=3;const s=()=>(n=n*16807%2147483647)/2147483647;for(let r=0;r<900;r++){const a=s()*i,o=s()*i,l=3+s()*10,c=s()*Math.PI,h=s()<.55;e.strokeStyle=h?`rgba(255,255,255,${.08+s()*.12})`:`rgba(0,0,0,${.05+s()*.08})`,e.lineWidth=.6+s()*.8;for(const u of[-i,0,i])for(const f of[-i,0,i])e.beginPath(),e.moveTo(a+u,o+f),e.lineTo(a+u+Math.cos(c)*l,o+f+Math.sin(c)*l),e.stroke()}return t}function zx(){const i=new Si(hu());return i.wrapS=i.wrapT=Os,i.colorSpace=Ke,i}const uu='"Pomo Display", "Noto Serif SC", "Songti SC", "SimSun", serif',Gx='"Pomo Body", "LXGW WenKai", "KaiTi", serif';function Vs(i,t=256,e=!0,n="#c23a2b"){const s=document.createElement("canvas");s.width=s.height=t;const r=s.getContext("2d"),a=t*.06;e?(r.fillStyle=n,hh(r,a,a,t-a*2,t-a*2,t*.012),r.fill(),r.globalCompositeOperation="destination-out",r.strokeStyle="#000",r.lineWidth=t*.025,r.strokeRect(a*2.2,a*2.2,t-a*4.4,t-a*4.4),r.fillStyle="#000"):(r.strokeStyle=n,r.lineWidth=t*.05,hh(r,a,a,t-a*2,t-a*2,t*.01),r.stroke(),r.fillStyle=n),r.font=`900 ${t*.62}px ${uu}`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,t/2,t*.53),r.globalCompositeOperation="destination-out";let o=i.charCodeAt(0);const l=()=>(o=o*16807%2147483647)/2147483647;for(let c=0;c<40;c++)r.beginPath(),r.arc(l()*t,l()*t,t*(.004+l()*.01),0,Math.PI*2),r.fill();return r.globalCompositeOperation="source-over",s}function hh(i,t,e,n,s,r){let a=Math.floor(t*7+n);const o=()=>((a=a*16807%2147483647)/2147483647-.5)*r*2;i.beginPath();const l=12;i.moveTo(t+o(),e+o());for(let c=1;c<=l;c++)i.lineTo(t+n*c/l+o(),e+o());for(let c=1;c<=l;c++)i.lineTo(t+n+o(),e+s*c/l+o());for(let c=1;c<=l;c++)i.lineTo(t+n-n*c/l+o(),e+s+o());for(let c=1;c<l;c++)i.lineTo(t+o(),e+s-s*c/l+o());i.closePath()}const Hx=it.teams.map(i=>new Ct(i.deep)),Vx=it.teams.map(i=>new Ct(i.outline)),Wx=160,uh=360;class Za{body;rim;n=0;constructor(t,e,n,s,r=1.45){this.body=new zo(t,new Ve({color:Hx[e]}),n);const a=t.clone();a.scale(r,r,r),this.rim=new zo(a,new Ve({color:Vx[e],side:We}),n);for(const o of[this.body,this.rim])o.frustumCulled=!1,o.count=0,s.add(o)}begin(){this.n=0}push(t){this.n>=this.body.instanceMatrix.count||(this.body.setMatrixAt(this.n,t),this.rim.setMatrixAt(this.n,t),this.n++)}end(){this.body.count=this.rim.count=this.n,this.body.instanceMatrix.needsUpdate=this.rim.instanceMatrix.needsUpdate=!0}}class Xx{scene;shots;drops;bombs;dropList=[];seals=[];m=new me;q=new Pi;v=new N;sc=new N;up=new N(0,0,1);aim;sealTarget;sealTextures;charTextures=new Map;shake=0;constructor(t){this.scene=t;const e=new Qe(.12,8,6),n=new jr(.09,0),s=new Qe(.24,12,9);this.shots=[0,1].map(o=>new Za(e,o,Wx,t)),this.drops=[0,1].map(o=>new Za(n,o,uh,t,1.6)),this.bombs=[0,1].map(o=>new Za(s,o,24,t,1.25));const r=new Qr(.09,10);r.rotateX(-Math.PI/2),this.aim=new zo(r,new Ve({color:dt.vermilion,transparent:!0,opacity:.85,depthWrite:!1}),24),this.aim.frustumCulled=!1,this.aim.count=0,this.aim.renderOrder=2,t.add(this.aim),this.sealTextures=[0,1].map(o=>{const l=new Si(Vs(it.teams[o].short,256,!0,it.accent));return l.colorSpace=Ke,l});const a=new Si($x());a.colorSpace=Ke,this.sealTarget=new Qt(new Kn(xi,xi).rotateX(-Math.PI/2),new Ve({map:a,transparent:!0,depthWrite:!1,opacity:.8})),this.sealTarget.visible=!1,this.sealTarget.renderOrder=2,t.add(this.sealTarget)}reset(){this.dropList.length=0;for(const t of this.seals)this.scene.remove(t.block,t.frame),t.mark&&this.scene.remove(t.mark);this.seals.length=0,this.shake=0}burst(t,e,n,s,r=1,a=.1){for(let o=0;o<s&&this.dropList.length<uh;o++){const l=Math.random()*Math.PI*2,c=(1.5+Math.random()*3.5)*r;this.dropList.push({x:t,y:a,z:e,vx:Math.sin(l)*c,vy:2.5+Math.random()*4*r,vz:Math.cos(l)*c,s:.6+Math.random()*.9,life:.5+Math.random()*.4,team:n})}}sealDrop(t,e,n,s=0,r){const a=qx();a.position.set(t,14,e),this.scene.add(a);const o=this.sealTarget.clone();o.material=this.sealTarget.material.clone(),o.visible=!0,o.position.set(t,.05,e),this.scene.add(o),this.seals.push({x:t,z:e,team:n,rest:s,char:r,t:0,block:a,frame:o,mark:null,markT:0})}sealLand(t,e,n){const s=this.seals.find(a=>!a.mark&&Math.abs(a.x-t)<.01&&Math.abs(a.z-e)<.01);if(this.shake=Math.max(this.shake,1),this.burst(t,e,n,40,1.8),!s)return!1;this.scene.remove(s.frame);const r=new Qt(new Kn(xi*.92,xi*.92).rotateX(-Math.PI/2),new Ve({map:s.char?this.charTexture(s.char):this.sealTextures[n],transparent:!0,depthWrite:!1,opacity:.95}));return r.position.set(t,.04,e),r.renderOrder=1,this.scene.add(r),s.mark=r,s.markT=0,!!s.char}charTexture(t){let e=this.charTextures.get(t);return e||(e=new Si(Vs(t,256,!0,it.accent)),e.colorSpace=Ke,this.charTextures.set(t,e)),e}update(t,e){for(const n of this.shots)n.begin();for(const n of this.bombs)n.begin();if(t)for(const n of t.projectiles){if(!n.alive)continue;if(n.kind==="bomb"){const r=n.landed?1+.25*Math.sin((tu-n.fuse)*40):1;this.m.compose(this.v.set(n.x,n.y,n.z),this.q.identity(),this.sc.setScalar(r)),this.bombs[n.team].push(this.m);continue}const s=n.kind==="line"?3.2:1.7;this.v.set(n.vx,n.vy,n.vz).normalize(),this.q.setFromUnitVectors(this.up,this.v),this.m.compose(this.v.set(n.x,Math.max(.1,n.y),n.z),this.q,this.sc.set(1,1,s)),this.shots[n.team].push(this.m)}for(const n of this.shots)n.end();for(const n of this.bombs)n.end();for(const n of this.drops)n.begin();for(let n=this.dropList.length-1;n>=0;n--){const s=this.dropList[n];if(s.life-=e,s.vy-=22*e,s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,s.life<=0||s.y<0){this.dropList.splice(n,1);continue}this.m.compose(this.v.set(s.x,s.y,s.z),this.q.identity(),this.sc.setScalar(s.s*Math.min(1,s.life*4))),this.drops[s.team].push(this.m)}for(const n of this.drops)n.end();for(let n=this.seals.length-1;n>=0;n--){const s=this.seals[n];if(s.t+=e,s.mark){s.markT+=e,s.block.position.y=.7+s.rest+Math.max(0,s.markT-.35)*9,s.block.visible=s.markT<1.4;const r=s.mark.material;r.opacity=.95*Math.max(0,1-Math.max(0,s.markT-2.5)/1.5),s.markT>4&&(this.scene.remove(s.block,s.mark),this.seals.splice(n,1))}else{const r=Math.min(1,s.t/eu);s.block.position.y=14*(1-r*r*r)+.7+s.rest;const a=s.frame.material;a.opacity=.5+.4*Math.sin(s.t*22)}}this.shake=Math.max(0,this.shake-e*2.5)}setAim(t,e){e=Math.min(e,t.length,this.aim.instanceMatrix.count);for(let n=0;n<e;n++)this.m.makeTranslation(t[n].x,.06,t[n].z),this.aim.setMatrixAt(n,this.m);this.aim.count=e,this.aim.instanceMatrix.needsUpdate=!0}}function qx(i){const t=xi*.86,e=new Ct("#a8402f"),n=cs([se(t,1.3,t,0,0,0,e),se(t*.92,.18,t*.92,0,.74,0,new Ct("#8e3326")),se(t*.36,1.1,t*.36,0,1.35,0,e),se(t*.5,.5,t*.5,0,2.1,0,new Ct("#8e3326"))]),s=new Hn;return s.add(new Qt(n,na()),new Qt(n,ia(dt.ink,.07))),s}function $x(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");return t.strokeStyle=it.accent,t.lineWidth=12,t.setLineDash([26,14]),t.strokeRect(10,10,236,236),t.setLineDash([]),t.lineWidth=3,t.strokeRect(30,30,196,196),t.fillStyle="rgba(194,58,43,0.14)",t.fillRect(30,30,196,196),i}class Yx{canvas;g;v=new N;dpr=1;constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="overlay",this.g=this.canvas.getContext("2d")}resize(t,e,n){this.dpr=n,this.canvas.width=Math.round(t*n),this.canvas.height=Math.round(e*n),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`}project(t,e,n,s,r,a){return this.v.set(t,e,n).project(s),{x:(this.v.x+1)/2*r,y:(1-this.v.y)/2*a,on:this.v.z<1}}draw(t,e,n){const s=this.g,r=this.dpr,a=this.canvas.width/r,o=this.canvas.height/r;if(s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,this.canvas.width,this.canvas.height),!!t){s.setTransform(r,0,0,r,0,0);for(const l of t.actors){if(!l.alive)continue;const c=this.project(l.x,2,l.z,e,a,o);if(!c.on)continue;const h=l.hp<Ds-.5;if(l.isPlayer&&n){const u=this.project(l.x,2.6,l.z,e,a,o);s.beginPath(),s.moveTo(u.x-7,u.y-10),s.lineTo(u.x+7,u.y-10),s.lineTo(u.x,u.y-1),s.closePath(),s.fillStyle=it.accent,s.fill(),s.lineWidth=1.5,s.strokeStyle=it.paper,s.stroke();const f=this.project(l.x,.9,l.z,e,a,o),d=f.x+26,x=f.y-22,v=7,m=40,p=l.ink/Dr,b=p<.2;s.fillStyle=it.paper,s.fillRect(d,x,v,m),s.fillStyle=it.teams[l.team].deep,s.fillRect(d,x+m*(1-p),v,m*p),s.lineWidth=1.5,s.strokeStyle=b&&Math.floor(performance.now()/180)%2?it.accent:it.ink,s.strokeRect(d-.5,x-.5,v+1,m+1),l.weapon.kind==="charger"&&l.charging&&(s.beginPath(),s.arc(f.x,f.y-4,24,-Math.PI/2,-Math.PI/2+Math.PI*2*l.charge),s.strokeStyle=l.charge>=1?it.accent:it.ink,s.lineWidth=3,s.stroke())}if(h){const d=c.x-19,x=c.y-6;s.fillStyle="rgba(29,27,26,0.35)",s.fillRect(d,x,38,5);const v=it.teams[l.team];s.fillStyle=v.deep,s.fillRect(d,x,38*Math.max(0,l.hp/Ds),5),s.lineWidth=1,s.strokeStyle=v.outline,s.strokeRect(d-.5,x-.5,39,6),l.isPlayer||(s.font=`600 11px ${Gx}`,s.textAlign="center",s.lineWidth=3,s.strokeStyle=it.paper,s.fillStyle=v.stroke?it.ink:v.deep,s.strokeText(l.name,c.x,x-4),s.fillText(l.name,c.x,x-4))}}}}}const Mr=256,Kx=`
attribute vec4 aSplat; // x, z, r, rotation
attribute vec3 aInfo;  // team, shape, seed
uniform vec2 uMin;
uniform vec2 uSize;
varying vec2 vLocal;
varying vec3 vInfo;
void main() {
  vInfo = aInfo;
  float grow = aInfo.y > 0.5 ? 1.06 : 1.75;
  vLocal = position.xy * grow;
  float c = cos(aSplat.w), s = sin(aSplat.w);
  vec2 l = position.xy * aSplat.z * grow;
  vec2 world = aSplat.xy + vec2(l.x * c - l.y * s, l.x * s + l.y * c);
  vec2 uv = (world - uMin) / uSize;
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,Zx=`
varying vec2 vLocal;
varying vec3 vInfo;
void main() {
  float seed = vInfo.z * 97.0;
  float a;
  if (vInfo.y > 0.5) {
    vec2 q = abs(vLocal);
    float rough = 0.012 * sin(vLocal.x * 31.0 + seed) + 0.012 * sin(vLocal.y * 27.0 + seed * 1.3);
    a = 1.0 - smoothstep(0.96 + rough, 1.0 + rough, max(q.x, q.y));
  } else {
    float r = length(vLocal);
    float th = atan(vLocal.y, vLocal.x);
    float edge = 0.98 + 0.11 * sin(th * 5.0 + seed) + 0.06 * sin(th * 9.0 + seed * 1.7) + 0.04 * sin(th * 14.0 + seed * 2.9);
    a = 1.0 - smoothstep(edge - 0.08, edge, r);
    for (int i = 0; i < 4; i++) {
      float fi = float(i);
      float ang = seed * (1.37 + fi * 0.71) + fi * 1.9;
      float dist = 1.18 + 0.38 * fract(seed * (0.13 + fi * 0.07));
      float rr = 0.08 + 0.12 * fract(seed * (0.31 + fi * 0.11));
      vec2 c = vec2(cos(ang), sin(ang)) * dist;
      a = max(a, 1.0 - smoothstep(rr - 0.05, rr, length(vLocal - c)));
      // a little neck joining the droplet to the body
      vec2 mid = c * 0.78;
      a = max(a, 1.0 - smoothstep(rr * 0.55 - 0.05, rr * 0.55, length(vLocal - mid)));
    }
  }
  if (a <= 0.002) discard;
  vec3 col = vInfo.x < 0.5 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
  gl_FragColor = vec4(col, a);
}
`;class Jx{target;min;size;scene=new Nh;camera=new pl;geo;aSplat;aInfo;renderer;constructor(t,e){this.renderer=t,this.min=new Lt(-e.halfW,-e.halfD),this.size=new Lt(e.halfW*2,e.halfD*2),this.target=new fn(this.size.x*Zc,this.size.y*Zc,{type:sn,format:rn,minFilter:Ae,magFilter:Ae,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});const n=new hd;n.setAttribute("position",new je(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),n.setIndex([0,1,2,0,2,3]),this.aSplat=new zr(new Float32Array(Mr*4),4),this.aInfo=new zr(new Float32Array(Mr*3),3),this.aSplat.setUsage(Wl),this.aInfo.setUsage(Wl),n.setAttribute("aSplat",this.aSplat),n.setAttribute("aInfo",this.aInfo);const s=new Ze({vertexShader:Kx,fragmentShader:Zx,uniforms:{uMin:{value:this.min},uSize:{value:this.size}},transparent:!0,depthTest:!1,depthWrite:!1,blending:ns});this.geo=n;const r=new Qt(n,s);r.frustumCulled=!1,this.scene.add(r),this.clear()}clear(){const t=this.renderer,e=t.getRenderTarget(),n=t.getClearColor(new Ct),s=t.getClearAlpha();t.setRenderTarget(this.target),t.setClearColor(0,0),t.clear(!0,!1,!1),t.setRenderTarget(e),t.setClearColor(n,s)}flush(t){if(!t.length)return;const e=this.renderer,n=e.getRenderTarget(),s=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.target);for(let r=0;r<t.length;r+=Mr){const a=Math.min(Mr,t.length-r),o=this.aSplat.array,l=this.aInfo.array;for(let c=0;c<a;c++){const h=t[r+c];o[c*4]=h.x,o[c*4+1]=h.z,o[c*4+2]=h.r,o[c*4+3]=h.shape===1?(h.seed-.5)*.08:h.seed*6.283,l[c*3]=h.team,l[c*3+1]=h.shape,l[c*3+2]=h.seed}this.aSplat.needsUpdate=!0,this.aInfo.needsUpdate=!0,this.geo.instanceCount=a,e.render(this.scene,this.camera)}e.setRenderTarget(n),e.autoClear=s,t.length=0}}function Qx(i){const t=new Hn,e=[],n=[];let s=11;const r=()=>(s=s*16807%2147483647)/2147483647;for(const h of i.solids)h.kind==="house"?Ur(h,e,n,r):h.kind==="wall"?tv(h,e):h.kind==="crate"&&ev(h,e);rv(i,e,n),av(i,e,n,r);for(const h of i.circles)h.kind==="tree"?nv(h.x,h.z,e,r):iv(h.x,h.z,h.r,e);for(const h of i.water)sv(h,i,e);const a=na(),o=cs(e);t.add(new Qt(o,a)),t.add(new Qt(o,ia(dt.ink,.05))),n.length&&t.add(new Qt(cs(n),a));const l=lv();for(const h of i.water){const u=new Kn(h.x1-h.x0,h.z1-h.z0);u.rotateX(-Math.PI/2);const f=new Qt(u,l);f.position.set((h.x0+h.x1)/2,.03,(h.z0+h.z1)/2),t.add(f)}const c=i.bases.map((h,u)=>ov(h,u,t));return{group:t,water:l,banners:c}}function Ur(i,t,e,n){const s=i.x1-i.x0,r=i.z1-i.z0,a=(i.x0+i.x1)/2,o=(i.z0+i.z1)/2,l=s>=r,c=l?s:r,h=l?r:s,u=l?0:Math.PI/2,f=i.h*.66,d=i.h-.15,x=(y,E,R)=>l?new N(a+y,E,o+R):new N(a+R,E,o+y),v=(y,E,R,_,T,C,I,F=t)=>{const z=x(_,T,C);F.push(se(y,E,R,z.x,z.y,z.z,I,u))};v(c+.12,.45,h+.12,0,.225,0,dt.plinth),v(c,f,h,0,f/2,0,dt.wall);const p=h/2+.35,b=d-f,A=Math.hypot(p,b),M=Math.atan2(b,p);for(const y of[-1,1]){const E=new Yn(c-.5,.16,A);E.rotateX(y*M);const R=x(0,f+b/2+.05,y*p/2);E.rotateY(u),E.translate(R.x,R.y,R.z),t.push(Dt(E,dt.roof));const _=Math.floor((c-.7)/.34);for(let T=0;T<=_;T++){const C=-(c-.7)/2+T*(c-.7)/_,I=new Yn(.1,.07,A*.96);I.rotateX(y*M);const F=x(C,f+b/2+.16,y*p/2);I.rotateY(u),I.translate(F.x,F.y,F.z),e.push(Dt(I,dt.tile))}}v(c-.4,.22,.32,0,d+.08,0,dt.cap);for(const y of[-1,1]){const E=y*(c/2-.12),R=[{w:h+.1,top:f+b*.42},{w:h*.62,top:f+b*.85},{w:h*.26,top:d+.55}];for(const _ of R){v(.3,_.top,_.w,E,_.top/2,0,dt.wall),v(.5,.16,_.w+.3,E,_.top+.08,0,dt.cap);for(const T of[-1,1])v(.5,.18,.2,E,_.top+.2,T*(_.w/2+.1),dt.cap)}}for(const y of[-1,1]){const E=y*(h/2+.03),R=Math.max(1,Math.floor(c/2.6));for(let _=0;_<R;_++){const T=-c/2+(_+.5)*c/R;v(.55,.42,.06,T,f*.72,E,dt.ink)}if(n()<.8){const _=(n()-.5)*(c-2.4);v(.95,1.6,.07,_,.8+.45,E,dt.wood),v(1.5,.12,.55,_,2.35,y*(h/2+.25),dt.cap),n()<.6&&jx(x(_+.95,1.9,y*(h/2+.3)),t)}}Ml.push({poly:Sl(i.x0,i.z0,i.x1,i.z1,i.h+.4)})}function jx(i,t){const e=new Qe(.2,8,6);e.scale(1,1.25,1),e.translate(i.x,i.y,i.z),t.push(Dt(e,dt.vermilion)),t.push(se(.12,.06,.12,i.x,i.y+.26,i.z,dt.cap))}function tv(i,t){const e=i.x1-i.x0,n=i.z1-i.z0,s=(i.x0+i.x1)/2,r=(i.z0+i.z1)/2;t.push(se(e,i.h,n,s,i.h/2,r,dt.wall)),t.push(se(e+.2,.14,n+.2,s,i.h+.07,r,dt.cap)),t.push(se(e+.04,.3,n+.04,s,.15,r,dt.plinth))}function ev(i,t){const e=i.x1-i.x0,n=i.z1-i.z0,s=(i.x0+i.x1)/2,r=(i.z0+i.z1)/2;t.push(se(e,i.h,n,s,i.h/2,r,dt.woodLight));for(const a of[.12,i.h-.12])t.push(se(e+.04,.1,n+.04,s,a,r,dt.wood))}function nv(i,t,e,n){const s=new Jt(.16,.26,2.2,7);s.translate(i,1.1,t),e.push(Dt(s,dt.wood));const r=[[0,2.5,0,1.1],[.55,2.9,.3,.8],[-.5,2.85,-.25,.85],[.1,3.3,-.1,.7]];for(const[a,o,l,c]of r){const h=new jr(c*(.9+n()*.2),1);h.translate(i+a,o,t+l),e.push(Dt(h,dt.leaf))}}function iv(i,t,e,n){const s=new Jt(e,e*1.05,.8,12);s.translate(i,.4,t),n.push(Dt(s,dt.stone));const r=new Jt(e*.72,e*.72,.05,12);r.translate(i,.81,t),n.push(Dt(r,dt.ink));for(const a of[-1,1])n.push(se(.14,1.9,.14,i+a*e*.85,.95,t,dt.wood));n.push(se(e*2,.14,.14,i,1.85,t,dt.wood)),n.push(se(e*2.3,.1,.9,i,2,t,dt.cap))}function sv(i,t,e){const r=[[i.x0-.3,i.z0,i.x0,i.z1],[i.x1,i.z0,i.x1+.3,i.z1],[i.x0-.3,i.z0-.3,i.x1+.3,i.z0],[i.x0-.3,i.z1,i.x1+.3,i.z1+.3]];for(const[a,o,l,c]of r)Math.abs(o)>t.halfD||Math.abs(c)>t.halfD||e.push(se(l-a,.32,c-o,(a+l)/2,.32/2,(o+c)/2,dt.stone))}function rv(i,t,e){const n=i.solids.filter(u=>u.kind==="pillar");if(!n.length)return;const s=n.map(u=>(u.z0+u.z1)/2),r=Math.min(...s),a=Math.max(...s),o=(n[0].x0+n[0].x1)/2,l=4.6;for(const u of n){const f=(u.z0+u.z1)/2;t.push(se(.6,l,.6,o,l/2,f,dt.stone)),t.push(se(.9,.5,.9,o,.25,f,dt.plinth))}const c=a-r+1.4;t.push(se(.5,.45,c,o,3.5,0,dt.stone)),t.push(se(.55,.5,c+.2,o,4.35,0,dt.stone));const h=[[0,5.25,2.9],[(r+a)/2-(a-r)/2-.1,4.85,2.2],[(r+a)/2+(a-r)/2+.1,4.85,2.2]];for(const[u,f,d]of h){t.push(se(1.5,.22,d,o,f,u,dt.roof)),t.push(se(.9,.25,d+.3,o,f+.2,u,dt.cap));for(const x of[-1,1])t.push(se(1.6,.2,.2,o,f+.22,u+x*(d/2+.15),dt.cap))}t.push(se(.6,.62,1.5,o,3.95,0,dt.vermilion)),e.push(se(.62,.45,1.2,o,3.95,0,dt.ink)),Ml.push({poly:Sl(o-.75,r-.8,o+.75,a+.8,5.4,3.3)})}function av(i,t,e,n){const s=i.halfW,r=i.halfD;((l,c,h,u,f,d)=>{let x=l;for(;x<c-2;){const v=Math.min(c-x,5+n()*4),m=n()*.8;Ur({x0:x,z0:h+m,x1:x+v,z1:u,h:f+n()*(d-f)},t,e,n),x+=v+.4+n()*.6}})(-s-10,s+10,-r-6.5,-r,5,6.5),t.push(se(s*2+2,1,.45,0,.5,r+.23,dt.wall)),t.push(se(s*2+2.3,.16,.75,0,1.08,r+.23,dt.cap));const o=(l,c)=>{let h=-r;for(;h<r;){const u=Math.min(r-h,5+n()*3);Ur({x0:l,z0:h,x1:c,z1:h+u,h:4.5+n()*1.5},t,e,n),h+=u+.5}};o(-s-6.5,-s),o(s,s+6.5);for(let l=-s-6;l<s+6;l+=9+n()*4)Ur({x0:l,z0:r+3,x1:l+6+n()*2,z1:r+8,h:3.2},t,e,n)}function ov(i,t,e){const n=i.x1-i.x0,s=i.z1-i.z0,r=(i.x0+i.x1)/2,a=(i.z0+i.z1)/2,o=document.createElement("canvas");o.width=256,o.height=Math.round(256*s/n);const l=o.getContext("2d"),c=it.teams[t],h=c.deep,u=c.stroke?it.ink:it.paper,f=new Ct(c.deep);l.fillStyle=h,l.fillRect(0,0,o.width,o.height),l.strokeStyle=u,l.lineWidth=10,l.strokeRect(12,12,o.width-24,o.height-24),l.lineWidth=3,l.strokeRect(30,30,o.width-60,o.height-60),l.drawImage(Vs(c.short,256,!0,it.accent),o.width/2-80,o.height/2-80,160,160);const d=new Si(o);d.colorSpace=Ke;const x=new Qt(new Yn(n,.14,s),[new Ve({color:f}),new Ve({color:f}),new Ve({map:d}),new Ve({color:0}),new Ve({color:f}),new Ve({color:f})]);x.position.set(r,.07,a),e.add(x);const v=t===0?-1:1,m=(t===0?i.x0:i.x1)+v*.6,p=Dt(new Jt(.08,.1,6,8).translate(m,3,a),dt.wood),b=se(.22,.22,2,m,5.9,a,dt.cap),A=cs([p,b]);e.add(new Qt(A,na())),e.add(new Qt(A,ia(dt.ink,.04)));const M=document.createElement("canvas");M.width=128,M.height=384;const y=M.getContext("2d");y.fillStyle=h,y.fillRect(0,0,128,384),y.strokeStyle=u,y.lineWidth=6,y.strokeRect(8,8,112,368),y.fillStyle=u,y.font=`900 92px ${uu}`,y.textAlign="center",y.textBaseline="middle";const E=c.name;for(let T=0;T<E.length;T++)y.fillText(E[T],64,80+T*112);const R=new Si(M);R.colorSpace=Ke;const _=new Qt(new Kn(1.1,3.3,1,8),new Ve({map:R,side:vn}));return _.position.set(m,4.15,a),_.rotation.y=v*Math.PI/2,e.add(_),_}function lv(){return new Ze({uniforms:{uTime:Zn.uTime,uPaper:Zn.uPaper,uWater:{value:dt.water},uInk:{value:dt.ink}},vertexShader:`
      varying vec3 vW;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
    `,fragmentShader:`
      uniform float uTime; uniform sampler2D uPaper; uniform vec3 uWater; uniform vec3 uInk;
      varying vec3 vW;
      ${vl}
      void main() {
        // woodblock ripples: wavy parallel lines drifting slowly
        float wv = vW.z + 0.18 * sin(vW.x * 1.1 + uTime * 0.8) + 0.08 * sin(vW.x * 2.7 - uTime * 0.5);
        float l = lines(wv, 0.42, 0.12);
        vec3 col = mix(uWater, uInk, l * 0.55);
        col *= 0.92 + 0.16 * texture2D(uPaper, vW.xz * 0.2).r;
        gl_FragColor = vec4(col, 1.0);
      }
    `})}const fu="pomo/save/v1",cv=30;function $o(i=new Date){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`}function du(){return{v:1,xp:0,coins:0,weapon:"squirt",hat:"douli",seal:"青",hats:["douli"],seals:["青"],mastery:{},masteryPaid:{},stats:{matches:0,wins:0,painted:0,splats:0,seals:0,bestM2:0},day:"",tasks:[],bonusClaimed:!1,firstWinDay:"",album:[],settings:{sfx:!0,music:!0,powerSave:!0,haptics:!0}}}function hv(i){const t=du();if(!i||typeof i!="object")return t;const e={...t,...i};return e.stats={...t.stats,...e.stats??{}},e.settings={...t.settings,...e.settings??{}},(!Array.isArray(e.hats)||!e.hats.includes("douli"))&&(e.hats=["douli",...Array.isArray(e.hats)?e.hats:[]]),(!Array.isArray(e.seals)||!e.seals.includes("青"))&&(e.seals=["青",...Array.isArray(e.seals)?e.seals:[]]),Array.isArray(e.album)||(e.album=[]),Array.isArray(e.tasks)||(e.tasks=[]),e}function uv(){try{return hv(JSON.parse(localStorage.getItem(fu)??"null"))}catch{return du()}}function fv(i){try{localStorage.setItem(fu,JSON.stringify(i))}catch{}}function pu(i,t,e=$o()){return i.day===e&&i.tasks.length?!1:(i.day=e,i.tasks=rx(e,t),i.bonusClaimed=!1,!0)}function mu(i,t=1){const e=Math.floor(i.w/t),n=Math.floor(i.h/t),s=new Uint8Array(e*n);for(let r=0;r<n;r++)for(let a=0;a<e;a++){const o=r*t*i.w+a*t;s[r*e+a]=i.paintable[o]?i.cells[o]:3}return{w:e,h:n,cells:s}}function dv(i){const t=new Uint8Array(Math.ceil(i.cells.length/4));for(let n=0;n<i.cells.length;n++)t[n>>2]|=(i.cells[n]&3)<<(n&3)*2;let e="";for(const n of t)e+=String.fromCharCode(n);return`${i.w}x${i.h}:${btoa(e)}`}function fh(i){const t=/^(\d+)x(\d+):(.*)$/.exec(i);if(!t)return null;const e=Number(t[1]),n=Number(t[2]),s=atob(t[3]),r=new Uint8Array(e*n);for(let a=0;a<r.length;a++)r[a]=s.charCodeAt(a>>2)>>(a&3)*2&3;return{w:e,h:n,cells:r}}function pv(i,t){for(i.album.unshift(t);i.album.length>cv;){let e=-1;for(let n=i.album.length-1;n>=0;n--)if(!i.album[n].fav){e=n;break}if(e<0)break;i.album.splice(e,1)}}const nn=i=>document.getElementById(i),Ja={solid:vi(it.roof),open:vi(it.stone),team:it.teams.map(i=>vi(i.deep))};class mv{barInk=nn("bar-ink");barWhite=nn("bar-white");pctInk=nn("pct-ink");pctWhite=nn("pct-white");timer=nn("timer");sub=nn("btn-sub");special=nn("btn-special");specialFill=nn("special-fill");respawn=nn("respawn");banner=nn("banner");feed=nn("feed");mini=nn("minimap");miniCtx;miniT=0;bannerT=0;img=null;constructor(){this.miniCtx=this.mini.getContext("2d")}reset(){this.feed.innerHTML="",this.banner.className="",this.respawn.classList.remove("on"),this.img=null}show(t){nn("hud").classList.toggle("on",t)}update(t,e,n){const s=t.turf.counts[0],r=t.turf.counts[1],a=t.turf.total;this.barInk.style.width=`${s/a*100}%`,this.barWhite.style.width=`${r/a*100}%`,this.pctInk.textContent=`${Math.round(s/a*100)}`,this.pctWhite.textContent=`${Math.round(r/a*100)}`;const o=t.phase==="countdown"?t.duration:Math.max(0,t.duration-t.t),l=Math.ceil(o);this.timer.textContent=`${Math.floor(l/60)}:${String(l%60).padStart(2,"0")}`,this.timer.classList.toggle("hurry",o<=30&&t.phase==="play"),e&&(this.sub.classList.toggle("off",e.ink<Ir||e.bombCd>0||!e.alive),this.specialFill.style.height=`${e.special*100}%`,this.special.classList.toggle("ready",e.special>=1&&e.alive),this.respawn.classList.toggle("on",!e.alive),e.alive||(this.respawn.querySelector("b").textContent=String(Math.max(1,Math.ceil(e.respawnT))))),this.bannerT-=n,this.bannerT<=0&&this.banner.className&&(this.banner.className=""),this.miniT-=n,this.miniT<=0&&(this.miniT=.2,this.drawMini(t))}say(t,e="",n="",s=1.1){this.banner.innerHTML=`<b>${t}</b>${e?`<small>${e}</small>`:""}`,this.banner.className=`on ${n}`,this.bannerT=s}log(t){const e=document.createElement("div");for(e.innerHTML=t,this.feed.prepend(e);this.feed.children.length>4;)this.feed.lastChild.remove();setTimeout(()=>e.classList.add("fade"),2600),setTimeout(()=>e.remove(),3200)}drawMini(t){const e=t.turf,n=e.w/2,s=e.h/2;this.mini.width!==n&&(this.mini.width=n,this.mini.height=s),this.img||(this.img=this.miniCtx.createImageData(n,s));const r=this.img.data;for(let c=0;c<s;c++)for(let h=0;h<n;h++){const u=c*2*e.w+h*2,f=(c*n+h)*4;let d,x,v;e.paintable[u]?e.cells[u]?[d,x,v]=Ja.team[e.cells[u]-1]:[d,x,v]=Ja.open:[d,x,v]=Ja.solid,r[f]=d,r[f+1]=x,r[f+2]=v,r[f+3]=255}const a=this.miniCtx;a.putImageData(this.img,0,0);const o=n/(t.map.halfW*2),l=s/(t.map.halfD*2);for(const c of t.actors){if(!c.alive)continue;const h=(c.x+t.map.halfW)*o,u=(c.z+t.map.halfD)*l;a.beginPath(),a.arc(h,u,c.isPlayer?3.4:2.6,0,Math.PI*2),a.fillStyle=c.isPlayer?it.accent:it.teams[c.team].deep,a.fill(),a.lineWidth=1.2,a.strokeStyle=it.paper,a.stroke()}}}function Yo(i,t,e=780,n){const s=Math.round(e*.025),r=(e-s*2)/(t.halfW*2),a=document.createElement("canvas");a.width=e,a.height=Math.round(t.halfD*2*r+s*2);const o=a.getContext("2d");o.fillStyle=it.bg,o.fillRect(0,0,a.width,a.height);const l=document.createElement("canvas");l.width=i.w,l.height=i.h;const c=l.getContext("2d"),h=c.createImageData(i.w,i.h),u=[vi(it.stone),vi(it.teams[0].paint),vi(it.teams[1].paint),vi(it.roof)];for(let m=0;m<i.cells.length;m++){const[p,b,A]=u[i.cells[m]];h.data[m*4]=p,h.data[m*4+1]=b,h.data[m*4+2]=A,h.data[m*4+3]=255}c.putImageData(h,0,0),o.imageSmoothingEnabled=!0,o.drawImage(l,s,s,a.width-s*2,a.height-s*2);const f=m=>s+(m+t.halfW)*r,d=m=>s+(m+t.halfD)*r,x=Math.max(1,r*.12);o.save();for(const m of t.solids){const p=f(m.x0),b=d(m.z0),A=f(m.x1)-p,M=d(m.z1)-b;o.fillStyle=m.kind==="house"?it.roof:it.plinth,o.fillRect(p,b,A,M),o.save(),o.beginPath(),o.rect(p,b,A,M),o.clip(),o.strokeStyle=it.ink,o.globalAlpha=.45,o.lineWidth=x*.7;for(let y=-M;y<A;y+=r*.55)o.beginPath(),o.moveTo(p+y,b+M),o.lineTo(p+y+M,b),o.stroke();o.restore(),o.strokeStyle=it.ink,o.lineWidth=x,o.strokeRect(p,b,A,M)}for(const m of t.water){const p=f(m.x0),b=d(m.z0),A=f(m.x1)-p,M=d(m.z1)-b;o.fillStyle=it.water,o.fillRect(p,b,A,M),o.strokeStyle=it.ink,o.globalAlpha=.5,o.lineWidth=x*.7;for(let y=b+r*.5;y<b+M;y+=r*.6)o.beginPath(),o.moveTo(p,y),o.bezierCurveTo(p+A*.3,y-r*.25,p+A*.6,y+r*.25,p+A,y),o.stroke();o.globalAlpha=1}for(const m of t.circles)o.beginPath(),o.arc(f(m.x),d(m.z),m.r*r*(m.kind==="tree"?1.5:1),0,Math.PI*2),o.fillStyle=m.kind==="tree"?it.leaf:it.plinth,o.fill(),o.strokeStyle=it.ink,o.lineWidth=x,o.stroke();o.restore();const v=e/260;if(o.strokeStyle=it.ink,o.lineWidth=v*1.6,o.strokeRect(v,v,a.width-v*2,a.height-v*2),o.lineWidth=Math.max(1,v*.4),o.strokeRect(s-v*1.5,s-v*1.5,a.width-(s-v*1.5)*2,a.height-(s-v*1.5)*2),n){const m=Math.round(a.height*.16);o.drawImage(Vs(n,128,!0,it.accent),s+v*2,a.height-s-m-v*2,m,m)}return a}const ws=56;class gv{move={x:0,z:0};aim=null;aimDist=0;fire=!1;usingMouse=!1;sub=!1;special=!1;tap=!1;left=null;right=null;keys=new Set;mouse=null;mouseDown=!1;enabled=!1;constructor(t,e,n){t.addEventListener("pointerdown",r=>this.down(r)),window.addEventListener("pointermove",r=>this.moveEv(r)),window.addEventListener("pointerup",r=>this.up(r)),window.addEventListener("pointercancel",r=>this.up(r)),t.addEventListener("contextmenu",r=>r.preventDefault());const s=(r,a)=>r.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),this.enabled&&a()});s(e,()=>this.sub=!0),s(n,()=>this.special=!0),window.addEventListener("keydown",r=>{this.keys.add(r.code),this.enabled&&(r.code==="KeyE"&&(this.sub=!0),(r.code==="Space"||r.code==="KeyQ")&&(this.special=!0,r.preventDefault()))}),window.addEventListener("keyup",r=>this.keys.delete(r.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=!1})}makeStick(t){const e=document.createElement("div");e.className="stick";const n=document.createElement("div");return n.className="knob",e.appendChild(n),e.style.left=`${t.clientX}px`,e.style.top=`${t.clientY}px`,document.body.appendChild(e),{id:t.pointerId,ox:t.clientX,oy:t.clientY,x:0,y:0,t0:performance.now(),el:e,knob:n}}down(t){if(t.pointerType==="mouse"){this.usingMouse=!0,this.mouse={x:t.clientX,y:t.clientY},t.button===0&&(this.mouseDown=!0),t.button===2&&this.enabled&&(this.sub=!0);return}this.usingMouse=!1,t.preventDefault(),t.clientX<window.innerWidth*.45?this.left||(this.left=this.makeStick(t)):this.right||(this.right=this.makeStick(t),this.right.el.classList.add("aim"))}moveEv(t){if(t.pointerType==="mouse"){this.mouse={x:t.clientX,y:t.clientY};return}for(const e of[this.left,this.right]){if(!e||e.id!==t.pointerId)continue;let n=t.clientX-e.ox,s=t.clientY-e.oy;const r=Math.hypot(n,s);if(r>ws*1.6){const l=(r-ws*1.6)/r;e.ox+=n*l,e.oy+=s*l,e.el.style.left=`${e.ox}px`,e.el.style.top=`${e.oy}px`,n=t.clientX-e.ox,s=t.clientY-e.oy}const a=Math.min(1,Math.hypot(n,s)/ws),o=Math.atan2(s,n);e.x=Math.cos(o)*a,e.y=Math.sin(o)*a,e.knob.style.transform=`translate(${e.x*ws}px, ${e.y*ws}px)`}}up(t){if(t.pointerType==="mouse"){t.button===0&&(this.mouseDown=!1);return}this.left&&this.left.id===t.pointerId&&(this.left.el.remove(),this.left=null),this.right&&this.right.id===t.pointerId&&(performance.now()-this.right.t0<220&&Math.hypot(this.right.x,this.right.y)<.3&&this.enabled&&(this.tap=!0),this.right.el.remove(),this.right=null)}poll(t,e,n){let s=0,r=0;(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(s-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(s+=1),(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(r-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(r+=1),this.left&&(s=this.left.x,r=this.left.y);const a=Math.hypot(s,r);if(this.move=a>1?{x:s/a,z:r/a}:{x:s,z:r},this.aim=null,this.fire=!1,this.right){const o=Math.hypot(this.right.x,this.right.y);o>.22&&(this.aim={x:this.right.x/o,z:this.right.y/o},this.aimDist=t,this.fire=!0)}else if(this.usingMouse&&this.mouse&&n){const o=e(this.mouse.x,this.mouse.y);if(o){const l=o.x-n.x,c=o.z-n.z,h=Math.hypot(l,c);h>.3&&(this.aim={x:l/h,z:c/h},this.aimDist=h)}this.fire=this.mouseDown}this.enabled||(this.fire=!1,this.move={x:0,z:0})}takeSub(){const t=this.sub;return this.sub=!1,t}takeSpecial(){const t=this.special;return this.special=!1,t}takeTap(){const t=this.tap;return this.tap=!1,t}get aiming(){return!!this.right||this.usingMouse&&!!this.mouse}reset(){this.left?.el.remove(),this.right?.el.remove(),this.left=this.right=null,this.sub=this.special=this.tap=!1,this.mouseDown=!1}}const Ne="#1d1b1a",_v="#f3eee2",xv="#b7a064",bi="#6b4a33",gu="#c23a2b";function vv(i,t=300,e=110){const n=document.createElement("canvas"),s=Math.min(2,window.devicePixelRatio||1);n.width=t*s,n.height=e*s;const r=n.getContext("2d");return r.scale(s,s),r.lineJoin="round",r.lineCap="round",i==="squirt"?Mv(r,t,e):i==="roller"?Sv(r,t,e):i==="bucket"?yv(r,t,e):bv(r,t,e),n}function ie(i,t,e,n=3){i.beginPath(),e(),i.fillStyle=t,i.fill(),i.lineWidth=n,i.strokeStyle=Ne,i.stroke()}function bl(i,t,e,n,s,r=5){i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.strokeStyle=Ne,i.lineWidth=1.2;for(let a=-s;a<n;a+=r)i.beginPath(),i.moveTo(t+a,e+s),i.lineTo(t+a+s,e),i.stroke();i.restore()}function Sr(i,t,e,n){ie(i,Ne,()=>i.arc(t,e,n,0,Math.PI*2),1.5)}function Mv(i,t,e){const n=e*.45,s=t*.18,r=t*.72,a=e*.14;ie(i,bi,()=>i.rect(s-46,n-4,48,8)),ie(i,bi,()=>i.rect(s-54,n-14,10,28)),ie(i,xv,()=>i.roundRect(s,n-a,r-s,a*2,6)),bl(i,s+2,n+a*.25,r-s-4,a*.7);for(const o of[.33,.7])ie(i,bi,()=>i.rect(s+(r-s)*o-3,n-a-2,6,a*2+4),2);ie(i,Ne,()=>{i.moveTo(r,n-a*.6),i.lineTo(r+22,n-3),i.lineTo(r+22,n+3),i.lineTo(r,n+a*.6),i.closePath()}),Sr(i,r+38,n-4,6),Sr(i,r+56,n+2,4.5),Sr(i,r+70,n-6,3),Sr(i,r+50,n-14,2.5)}function Sv(i,t,e){ie(i,Ne,()=>{i.moveTo(t*.04,e*.86),i.lineTo(t*.62,e*.82),i.lineTo(t*.62,e*.96),i.lineTo(t*.06,e*.97),i.closePath()},1.5),i.lineWidth=9,i.strokeStyle=Ne,i.beginPath(),i.moveTo(t*.22,e*.12),i.lineTo(t*.6,e*.62),i.stroke(),i.lineWidth=5,i.strokeStyle=bi,i.beginPath(),i.moveTo(t*.22,e*.12),i.lineTo(t*.6,e*.62),i.stroke(),ie(i,gu,()=>i.arc(t*.21,e*.11,6,0,Math.PI*2),2);const n=t*.7,s=e*.68,r=t*.2,a=e*.2;ie(i,Ne,()=>i.roundRect(n-r,s-a,r*2,a*2,a)),i.strokeStyle=_v,i.lineWidth=2;for(const o of[-.5,0,.5])i.beginPath(),i.moveTo(n+r*o,s-a+4),i.lineTo(n+r*o,s+a-4),i.stroke();ie(i,bi,()=>i.ellipse(n+r,s,6,a,0,0,Math.PI*2),2)}function bv(i,t,e){ie(i,Ne,()=>{i.moveTo(t*.1,e*.86),i.quadraticCurveTo(t*.55,e*.74,t*.96,e*.82),i.lineTo(t*.96,e*.86),i.quadraticCurveTo(t*.55,e*.86,t*.1,e*.9),i.closePath()},1);const n=e*.4;i.strokeStyle=gu,i.lineWidth=3;for(const s of[-4,0,4])i.beginPath(),i.moveTo(t*.08,n),i.lineTo(t*.04+s,n+26),i.stroke();ie(i,bi,()=>i.roundRect(t*.08,n-6,t*.58,12,6)),bl(i,t*.09,n+1,t*.56,4,4),ie(i,Ne,()=>i.rect(t*.64,n-9,14,18)),ie(i,Ne,()=>{i.moveTo(t*.69,n-10),i.quadraticCurveTo(t*.86,n-8,t*.95,n+2),i.quadraticCurveTo(t*.84,n+9,t*.69,n+10),i.closePath()})}function yv(i,t,e){for(const[o,l]of[[.52,9],[.7,12],[.9,15]])ie(i,Ne,()=>i.ellipse(t*o,e*.84,l*1.6,l*.5,0,0,Math.PI*2),1.5);const n=t*.22,s=e*.2,r=t*.2,a=e*.5;ie(i,bi,()=>{i.moveTo(n-r/2,s),i.lineTo(n+r/2,s),i.lineTo(n+r*.4,s+a),i.lineTo(n-r*.4,s+a),i.closePath()}),bl(i,n-r/2,s,r,a,6);for(const o of[.2,.75])ie(i,Ne,()=>i.rect(n-r*(.5-o*.1)-1,s+a*o,r*(1-o*.2)+2,5),1.5);i.lineWidth=3,i.strokeStyle=Ne,i.beginPath(),i.arc(n,s,r*.55,Math.PI,0),i.stroke(),ie(i,Ne,()=>{i.moveTo(n+r/2,s+4),i.quadraticCurveTo(t*.42,s-14,t*.52,e*.6),i.quadraticCurveTo(t*.42,s+10,n+r/2,s+14),i.closePath()},1.5)}const Ev={douli:"#4a7fae",heye:"#79a26c",fangjin:"#2e2a25",caomao:"#d6b46a",suoli:"#bf9d55",hutou:"#e3893a"};function Tv(i,t=96,e=72){const n=document.createElement("canvas"),s=Math.min(2,window.devicePixelRatio||1);n.width=t*s,n.height=e*s;const r=n.getContext("2d");r.scale(s,s),r.lineJoin="round";const a=t/2,o=e*.66,l=e*.2;ie(r,"#f4e7d0",()=>r.arc(a,o,l,0,Math.PI*2),2.5);for(const u of[-1,1])r.fillStyle=Ne,r.beginPath(),r.arc(a+u*l*.38,o+l*.15,2,0,Math.PI*2),r.fill();const c=Ev[i],h="#4a7fae";if(i==="douli")ie(r,c,()=>{r.moveTo(a-t*.42,o-l*.55),r.lineTo(a,o-l*2.4),r.lineTo(a+t*.42,o-l*.55),r.closePath()});else if(i==="heye")ie(r,c,()=>{r.moveTo(a-t*.44,o-l*.5);for(let u=0;u<=8;u++)r.lineTo(a-t*.44+t*.88*u/8,o-l*(.5+u%2*.35));r.lineTo(a+t*.12,o-l*1.6),r.lineTo(a-t*.12,o-l*1.6),r.closePath()}),r.strokeStyle="#567d4c",r.lineWidth=2.5,r.beginPath(),r.moveTo(a,o-l*1.6),r.lineTo(a+3,o-l*2.3),r.stroke();else if(i==="fangjin"){ie(r,c,()=>r.rect(a-l*1.05,o-l*2.1,l*2.1,l*1.4)),ie(r,h,()=>r.rect(a-l*1.1,o-l*.85,l*2.2,l*.35),2);for(const u of[-1,1])ie(r,c,()=>{r.moveTo(a+u*l*.9,o-l*.7),r.lineTo(a+u*l*1.7,o+l*.6),r.lineTo(a+u*l*1.4,o+l*.7),r.closePath()},1.5)}else if(i==="caomao")ie(r,c,()=>r.ellipse(a,o-l*.6,t*.45,l*.42,0,0,Math.PI*2)),ie(r,c,()=>r.rect(a-l*.95,o-l*1.9,l*1.9,l*1.3)),ie(r,"#c23a2b",()=>r.rect(a-l*.98,o-l*1,l*1.96,l*.32),2);else if(i==="suoli"){ie(r,c,()=>{r.moveTo(a-t*.47,o-l*.35),r.quadraticCurveTo(a,o-l*3,a+t*.47,o-l*.35),r.closePath()}),r.strokeStyle=Ne,r.lineWidth=1.2;for(let u=-3;u<=3;u++)r.beginPath(),r.moveTo(a+u*t*.06,o-l*.45),r.lineTo(a+u*t*.015,o-l*1.9),r.stroke()}else{ie(r,c,()=>{r.arc(a,o-l*.1,l*1.15,Math.PI,0),r.closePath()});for(const u of[-1,1])ie(r,c,()=>r.arc(a+u*l*.85,o-l*1.2,l*.38,0,Math.PI*2),2);r.strokeStyle=Ne,r.lineWidth=2.5;for(const u of[-.35,0,.35])r.beginPath(),r.moveTo(a+u*l,o-l*1.2),r.lineTo(a+u*l*.8,o-l*.6),r.stroke();r.fillStyle=Ne;for(const u of[-1,1])r.beginPath(),r.arc(a+u*l*.45,o-l*.45,2.2,0,Math.PI*2),r.fill()}return n}const ne=i=>document.getElementById(i),wv=i=>Vn[i].name,Av={squirt:[55,70,75],roller:[25,95,60],brush:[100,50,85],bucket:[45,85,70]};class Rv{host;shopTab="hats";onModalClose=null;toastEl=null;constructor(t){this.host=t,ne("modal").addEventListener("pointerdown",e=>{e.target===ne("modal")&&this.closeModal()});for(const e of document.querySelectorAll("#shop-tabs button"))e.addEventListener("click",()=>{this.host.sfx.click(),this.shopTab=e.dataset.tab,this.renderShop()})}get save(){return this.host.save}refreshHome(){const t=this.save,e=Sn(t.xp);ne("lv").textContent=String(e.level),ne("rank-name").textContent=Is(e.level),ne("rank-seal").textContent=Is(e.level),ne("xp-fill").style.width=e.need?`${e.into/e.need*100}%`:"100%",ne("coins").textContent=String(t.coins),ne("weapon-name").textContent=Vn[t.weapon].name;const n=t.tasks.some(s=>Us(s)&&!s.claimed)||t.tasks.length>0&&t.tasks.every(s=>s.claimed)&&!t.bonusClaimed;ne("daily-dot").classList.toggle("on",n)}buildPick(){const t=this.save,e=Sn(t.xp).level;ne("cards").innerHTML=Xr.map(n=>{const s=Vn[n],[r,a,o]=Av[n],l=e<ci[n],c=su(t.mastery[n]??0),h="★".repeat(c)+`<i>${"★".repeat(5-c)}</i>`;return`<button class="card${l?" locked":""}${t.weapon===n?" on":""}" data-w="${n}">
        <span class="tag">${s.tag}</span><h3>${s.name}</h3><span class="stars">${h}</span><i class="pic"></i><p>${s.desc}</p>
        <div class="stat">射程<i style="--v:${r}%"></i></div><div class="stat">涂地<i style="--v:${a}%"></i></div><div class="stat">对枪<i style="--v:${o}%"></i></div>
        ${l?`<span class="lock">Lv.${ci[n]} 解锁</span>`:""}</button>`}).join("");for(const n of document.querySelectorAll("#cards .card")){const s=n.dataset.w;n.querySelector(".pic").appendChild(vv(s)),n.addEventListener("click",()=>{if(Sn(this.save.xp).level<ci[s]){this.host.sfx.empty(),this.toast(`画院 Lv.${ci[s]} 才能用${Vn[s].name}`);return}this.host.sfx.click(),this.save.weapon=s,this.host.persist(),this.host.go("home")})}}renderShop(){const t=this.save;ne("shop-coins").textContent=String(t.coins);for(const s of document.querySelectorAll("#shop-tabs button"))s.classList.toggle("on",s.dataset.tab===this.shopTab);const e=ne("shop-grid");e.innerHTML="";const n=this.shopTab==="hats"?nx.map(s=>({key:s.id,name:s.name,desc:s.desc,price:s.price,owned:t.hats.includes(s.id),worn:t.hat===s.id,pic:()=>Tv(s.id)})):ix.map(s=>({key:s.char,name:`「${s.char}」印`,desc:"盖印和画册上落的是这一方",price:s.price,owned:t.seals.includes(s.char),worn:t.seal===s.char,pic:()=>Vs(s.char,144,!0,it.accent)}));for(const s of n){const r=document.createElement("button");r.className=`item${s.owned?" owned":""}${s.worn?" worn":""}${!s.owned&&t.coins<s.price?" poor":""}`;const a=s.pic();this.shopTab==="seals"&&(a.style.width="64px",a.style.height="64px"),r.appendChild(a),r.insertAdjacentHTML("beforeend",`<h4>${s.name}</h4><p>${s.desc}</p><div class="price">${s.owned?s.worn?"戴着":"点一下换上":`<i class="ingot"></i>${s.price}`}</div>`),r.addEventListener("click",()=>this.shopTap(s.key,s.price,s.owned)),e.appendChild(r)}}shopTap(t,e,n){const s=this.save;if(n)this.host.sfx.click();else{if(s.coins<e){this.host.sfx.empty(),this.toast(`墨锭不够：还差 ${e-s.coins}`);return}s.coins-=e,this.shopTab==="hats"?s.hats.push(t):s.seals.push(t),this.host.sfx.levelUp()}this.shopTab==="hats"?s.hat=t:s.seal=t,this.host.persist(),this.renderShop()}renderAlbum(){const t=this.save,e=ne("album-grid");if(e.innerHTML="",ne("album-count").textContent=t.album.length?`${t.album.length} 幅 · 最多留 30 幅，点开可以收藏`:"",!t.album.length){e.innerHTML='<div class="empty-note">还没有画。打完一局，那一局的地盘就会收进画册。</div>';return}t.album.forEach((n,s)=>{const r=fh(n.grid);if(!r)return;const a=document.createElement("button");a.className="print",a.appendChild(Yo(r,ls,380,n.seal));const o=new Date(n.t),l=n.result==="win"?"胜":n.result==="lose"?"负":"平";a.insertAdjacentHTML("beforeend",`<small>${o.getMonth()+1}月${o.getDate()}日 ${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")} · ${l} · ${Vn[n.weapon]?.name??""} · ${it.teams[0].short}${Math.round(n.a*100)}% ${it.teams[1].short}${Math.round(n.b*100)}%</small>${n.fav?'<span class="fav">★</span>':""}`),a.addEventListener("click",()=>this.openPrint(s)),e.appendChild(a)})}openPrint(t){const e=this.save.album[t],n=e&&fh(e.grid);if(!n)return;this.host.sfx.click(),this.modal(`<h3>画册</h3><div id="big-print"></div><div class="row"><button class="btn ghost small" id="m-fav">${e.fav?"取消收藏":"收藏"}</button><button class="btn small" id="m-close">合上</button></div>`);const s=Yo(n,ls,900,e.seal);s.className="big-print",ne("big-print").appendChild(s),ne("m-fav").addEventListener("click",()=>{e.fav=!e.fav,this.host.persist(),this.host.sfx.click(),this.closeModal(),this.renderAlbum()}),ne("m-close").addEventListener("click",()=>this.closeModal())}openDaily(){const t=this.save,e=t.tasks.map((r,a)=>{const o=Us(r),l=r.claimed?'<button class="btn ghost small" disabled>已领</button>':o?`<button class="btn small" data-claim="${a}">领 ${r.reward}</button>`:`<span class="gain">+${r.reward}</span>`;return`<div class="task${r.claimed?" claimed":""}"><div>${au(r,wv)}　<small>${r.progress}/${r.target}</small></div>${l}<div class="bar"><i style="width:${r.progress/r.target*100}%"></i></div></div>`}).join(""),n=t.tasks.length>0&&t.tasks.every(r=>r.claimed),s=t.bonusClaimed?'<button class="btn ghost small" disabled>三课全成 · 已领</button>':n?`<button class="btn small" id="m-bonus">三课全成 · 领 ${qa}</button>`:`<button class="btn ghost small" disabled>三课全成再领 ${qa}</button>`;this.modal(`<h3>每日三课</h3>${e}<p class="hint" style="margin-top:8px">每天第一次赢，墨锭翻倍。三课明天换新的。</p><div class="row">${s}<button class="btn ghost small" id="m-close">好</button></div>`);for(const r of document.querySelectorAll("[data-claim]"))r.addEventListener("click",()=>{const a=t.tasks[Number(r.dataset.claim)];!a||a.claimed||!Us(a)||(a.claimed=!0,t.coins+=a.reward,this.host.persist(),this.host.sfx.coin(3),this.openDaily(),this.refreshHome())});ne("m-bonus")?.addEventListener("click",()=>{t.bonusClaimed=!0,t.coins+=qa,this.host.persist(),this.host.sfx.levelUp(),this.openDaily(),this.refreshHome()}),ne("m-close").addEventListener("click",()=>this.closeModal())}toggles(){const t=this.save.settings,e=(n,s,r="")=>`<div class="toggle"><div>${s}${r?`<small>${r}</small>`:""}</div><button class="switch${t[n]?" on":""}" data-set="${n}" aria-label="${s}"></button></div>`;return e("sfx","音效")+e("music","音乐")+e("powerSave","省电模式","30 帧、画面稍降，手机不发烫")+e("haptics","震动","被泼倒、盖印落地时轻震")}bindToggles(){for(const t of document.querySelectorAll("[data-set]"))t.addEventListener("click",()=>{const e=t.dataset.set;this.save.settings[e]=!this.save.settings[e],t.classList.toggle("on",this.save.settings[e]),this.host.persist(),this.host.applySettings(),this.host.sfx.click()})}openSettings(){this.modal(`<h3>设置</h3>${this.toggles()}<div class="row"><button class="btn small" id="m-close">好</button></div>`),this.bindToggles(),ne("m-close").addEventListener("click",()=>this.closeModal())}openPause(){this.modal(`<h3>暂停</h3>${this.toggles()}<div class="row"><button class="btn small" id="m-go">继续</button><button class="btn ghost small" id="m-quit">退出本局</button></div>`,()=>this.host.resume()),this.bindToggles(),ne("m-go").addEventListener("click",()=>this.closeModal()),ne("m-quit").addEventListener("click",()=>{this.onModalClose=null,this.closeModal(),this.host.quit()})}openReport(t){this.modal(`<h3>战报</h3><table id="stats">${t}</table><div class="row"><button class="btn small" id="m-close">好</button></div>`),ne("m-close").addEventListener("click",()=>this.closeModal())}showRewards(t){const e=ne("rewards"),n=Sn(this.save.xp),s=t.reward.lines.map(a=>`<div class="line"><span>${a.label}</span><b>+${a.coins}</b></div>`).join("");e.innerHTML=`${s}
      <div class="total"><i class="ingot"></i>+${t.reward.coins}<span style="font-size:13px;font-weight:400;font-family:var(--body);color:var(--ink-soft)">　共 ${this.save.coins}</span></div>
      <div class="xp"><span>Lv.${n.level}</span><div class="xpbar"><i id="rw-xp" style="width:${t.levelBefore<n.level?0:Sn(t.xpBefore).into/Math.max(1,n.need)*100}%"></i></div><span>+${t.reward.xp}</span></div>
      <div class="notes">${t.notes.map(a=>`<span class="note">${a}</span>`).join("")}</div>`;const r=[...e.querySelectorAll(".line")];r.forEach((a,o)=>setTimeout(()=>{a.classList.add("in"),this.host.sfx.coin(o)},500+o*160)),setTimeout(()=>{const a=document.getElementById("rw-xp");a&&(a.style.width=n.need?`${n.into/n.need*100}%`:"100%"),n.level>t.levelBefore&&this.host.sfx.levelUp()},600+r.length*160)}modal(t,e=null){ne("modal-body").innerHTML=t,ne("modal").classList.add("on"),this.onModalClose=e}closeModal(){if(!ne("modal").classList.contains("on"))return;ne("modal").classList.remove("on");const t=this.onModalClose;this.onModalClose=null,t?.()}get modalOpen(){return ne("modal").classList.contains("on")}toast(t){this.toastEl||(this.toastEl=document.createElement("div"),this.toastEl.id="toast",ne("app").appendChild(this.toastEl));const e=this.toastEl;e.textContent=t,e.classList.add("on"),clearTimeout(e._t),e._t=window.setTimeout(()=>e.classList.remove("on"),1800)}}const Ce=i=>document.getElementById(i),yl=matchMedia("(pointer: coarse)").matches,Nt=uv();pu(Nt,Sn(Nt.xp).level);const El=()=>fv(Nt);El();const _u=Ce("app"),dn=new u_({antialias:!0,powerPreference:"default"});dn.outputColorSpace=zs;dn.setClearColor(it.bg,1);px();it.teams.forEach((i,t)=>Ce(`name-${t}`).textContent=i.short);Ce("title-seal").textContent=it.teams.map(i=>i.short).join("");dn.domElement.id="scene";_u.prepend(dn.domElement);const Tl=new Yx;dn.domElement.after(Tl.canvas);await Promise.race([Promise.all([document.fonts.load('900 64px "Pomo Display"'),document.fonts.load('20px "Pomo Body"')]),new Promise(i=>setTimeout(i,2500))]);Zn.uPaper.value=zx();{const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle=it.paper,t.fillRect(0,0,256,256),t.globalAlpha=.35,t.globalCompositeOperation="soft-light",t.drawImage(hu(256),0,0),document.documentElement.style.setProperty("--paper-img",`url(${i.toDataURL()})`)}const hs=new Nh,Wn=new un(32,1,1,200),Cv=new N(0,20,13.5),Mi=new N(-24,0,0),Pv=Qx(ls);hs.add(Pv.group);const wl=new Jx(dn,ls);Zn.uNoise.value=kx();hs.add(Nx(ls,wl.target.texture,Zn.uNoise.value));const we=new Xx(hs),pe=new w_,Kr=new E_(pe),xn=new mv,Ue=new gv(Ce("touch"),Ce("btn-sub"),Ce("btn-special"));let In=null,yi=[],ve="home",ps=!1,br=0,Ko=0,Zo=null;const Lv={zoom:1};function Dv(){const i=window.devicePixelRatio||1;return yl?Math.min(i,Nt.settings.powerSave?1.25:1.75):Math.min(i,2)}function xu(){return ve==="pick"||ve==="shop"||ve==="album"||ve==="result"?-1:ve==="home"?Nt.settings.powerSave?20:30:ps?10:Nt.settings.powerSave?30:0}function vu(){const i=window.innerWidth,t=window.innerHeight,e=Dv();dn.setPixelRatio(e),dn.setSize(i,t),Tl.resize(i,t,Math.min(e,2)),Wn.aspect=i/t,Wn.fov=If.clamp(38*(1.9/Math.max(1.3,Wn.aspect)),28,48),Wn.updateProjectionMatrix()}window.addEventListener("resize",vu);function Al(){pe.setEnabled(Nt.settings.sfx),Kr.setEnabled(Nt.settings.music),ox(Nt.settings.haptics),!Nt.settings.sfx&&!Nt.settings.music?pe.suspend():pe.resume(),vu()}const an=new Rv({save:Nt,persist:El,sfx:pe,go:i=>Di(i),applySettings:Al,resume:()=>us(!1),quit:()=>{us(!1),Iv()}});function sa(i){ve=i;for(const t of["home","pick","shop","album","result"])Ce(t).classList.toggle("on",t===i);xn.show(i==="play"),i!=="play"&&(Ue.enabled=!1),Kr.play(i==="play"?"battle":"home")}function Di(i){i==="home"&&an.refreshHome(),i==="pick"&&an.buildPick(),i==="shop"&&an.renderShop(),i==="album"&&an.renderAlbum(),i==="home"&&(ve==="result"||!In||In.player)&&ra(),sa(i)}function us(i){ps=i,Ue.enabled=!i&&ve==="play",i&&Ue.reset()}function Mu(i){for(const e of yi)hs.remove(e.group);yi=[],we.reset(),wl.clear();const t=Sn(Nt.xp).level;In=new Q_({seed:i.seed??Math.floor(Math.random()*1e9),playerWeapon:i.player,botSkill:i.player?tx(t):.55}),yi=In.actors.map(e=>{const n=new Lx(e,e.isPlayer?Nt.hat:"douli");return hs.add(n.group),n}),xn.reset(),ts=-1}function Su(){const i=Sn(Nt.xp).level;ci[Nt.weapon]>i&&(Nt.weapon="squirt"),Zo=null,Mu({player:Nt.weapon,seed:void 0}),Ue.reset(),Ue.enabled=!0,us(!1),sa("play");const t=In.player;Mi.set(t.x+6,0,t.z)}function ra(){Mu({seed:7}),In.phase="play",Ko=0}function Iv(){ra(),Di("home")}function ai(i,t){const e=Math.hypot(i-Mi.x,t-Mi.z);return ve==="play"?Math.max(0,1-e/22):0}function Uv(i){const t=i.player;for(const e of i.events)switch(e.type){case"countdown":xn.say(["","一","二","三"][e.n]??String(e.n),e.n===3?`你是${it.teams[0].name} · 把地涂成你的颜色`:"","",.9),pe.countdown(e.n);break;case"start":xn.say("开涂","","seal",1),pe.start();break;case"end":xn.say("收笔","","seal",1.6),pe.gong();break;case"shot":{const n=i.actors[e.actor];yi[e.actor].shot(),pe.shot(e.kind,n.isPlayer?1:ai(n.x,n.z)*.6);break}case"land":Math.random()<.5&&we.burst(e.x,e.z,e.team,3,.6),pe.land(ai(e.x,e.z)*.8);break;case"hit":{yi[e.target].hit();const n=i.actors[e.target];we.burst(n.x,n.z,i.actors[e.by].team,4,.7,1),t&&e.by===t.id&&pe.hitMark(),t&&e.target===t.id&&pe.hurt();break}case"splatted":{const n=i.actors[e.target],s=i.actors[e.by];if(we.burst(e.x,e.z,s.team,26,1.4,.6),pe.splatted(Math.max(ai(e.x,e.z),s.isPlayer||n.isPlayer?1:0),s.isPlayer,n.isPlayer),ve==="play"){const r=a=>a.isPlayer?"me":`t${a.team}`;xn.log(`<em class="${r(s)}">${s.name}</em> 泼倒了 <em class="${r(n)}">${n.name}</em>`),s.isPlayer&&(xn.say("泼倒",n.name,"red",.7),$a("light")),n.isPlayer&&$a("heavy")}break}case"bomb":we.burst(e.x,e.z,e.team,22,1.2),we.shake=Math.max(we.shake,.25*ai(e.x,e.z)),pe.bomb(ai(e.x,e.z));break;case"sealDrop":{const n=i.actors[e.actor].isPlayer;we.sealDrop(e.x,e.z,e.team,Math.min(6,qs(i.map,e.x,e.z)),n?Nt.seal:void 0),ai(e.x,e.z)>.2&&pe.sealWhoosh(),ve==="play"&&n&&xn.say("盖印","","seal",.8);break}case"seal":we.sealLand(e.x,e.z,e.team)&&ve==="play"&&$a("medium"),we.shake*=ai(e.x,e.z)+.2,pe.seal(ai(e.x,e.z));break;case"special":t&&e.actor===t.id&&(pe.ready(),xn.say("大印已满","点「盖印」砸下去","",1.2));break;case"empty":t&&e.actor===t.id&&(pe.empty(),xn.say("没墨了","站回自己的颜色上回墨","",1.1));break}i.events.length=0}const dh=new dd,Nv=new kn(new N(0,1,0),0),Qa=new N,Fv=new Lt;function Ov(i,t){return dh.setFromCamera(Fv.set(i/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Wn),dh.ray.intersectPlane(Nv,Qa)?{x:Qa.x,z:Qa.z}:null}function Bv(i,t,e){let n=null,s=e;for(const r of i.actors){if(r.team===t.team||!r.alive)continue;const a=Math.hypot(r.x-t.x,r.z-t.z);a<s&&(s=a,n=r)}return n}function kv(i,t){const e=i.player;if(!e)return;Ue.poll(e.weapon.range,Ov,{x:e.x,z:e.z});const n=e.input;if(n.moveX=Ue.move.x,n.moveZ=Ue.move.z,Ue.takeTap()){br=e.weapon.kind==="charger"?.18:.32;const s=Bv(i,e,e.weapon.range+1);if(s){const r=Math.hypot(s.x-e.x,s.z-e.z);n.aimX=(s.x-e.x)/r,n.aimZ=(s.z-e.z)/r,n.aimDist=r}}Ue.aim?(n.aimX=Ue.aim.x,n.aimZ=Ue.aim.z,n.aimDist=Ue.aimDist):br<=0&&(n.aimX=0,n.aimZ=0,n.aimDist=0),br-=t,n.fire=Ue.fire||br>0,Ue.takeSub()&&(n.sub=!0,n.aimDist||(n.aimDist=Vr*.8)),Ue.takeSpecial()&&(n.special=!0,n.aimDist||(n.aimDist=Ri*.75))}const yr=Array.from({length:24},()=>new N);let ja=0;function zv(i){const t=i.player;if(ja=0,!t||!t.alive||ve!=="play"||i.phase!=="play"){we.setAim(yr,0),we.sealTarget.visible=!1;return}const e=Ue.aim!==null||t.charging,n=Math.sin(t.facing),s=Math.cos(t.facing);if(e&&t.weapon.kind!=="roller"){let r=Math.min(t.weapon.range,Ue.aimDist||t.weapon.range);t.weapon.kind==="charger"&&(r=t.weapon.minRange+(t.weapon.range-t.weapon.minRange)*t.charge);const a=Math.min(yr.length,Math.max(3,Math.round(r/.7)));for(let o=1;o<=a;o++){const l=.6+(r-.6)*o/a;yr[ja++].set(t.x+n*l,0,t.z+s*l)}}if(we.setAim(yr,ja),t.special>=1){const r=Math.min(Ri,t.input.aimDist||Ri*.75);we.sealTarget.visible=!0,we.sealTarget.position.set(t.x+n*r,.05,t.z+s*r)}else we.sealTarget.visible=!1}function Gv(i){const t=i.player;pu(Nt,Sn(Nt.xp).level);const e=i.winner(),n={result:e<0?"draw":e===0?"win":"lose",painted:t.stats.painted,splats:t.stats.splats,deaths:t.stats.deaths,seals:t.stats.seals,weapon:t.weapon.id},s=n.result==="win"&&Nt.firstWinDay!==$o();s&&(Nt.firstWinDay=$o());const r=ex(n,s),a=Nt.xp,o=Sn(a).level,l=[];Nt.coins+=r.coins,Nt.xp+=r.xp;const c=t.weapon.id;Nt.mastery[c]=(Nt.mastery[c]??0)+r.xp;const h=su(Nt.mastery[c]);h>(Nt.masteryPaid[c]??1)&&(Nt.masteryPaid[c]=h,Nt.coins+=sh[h],l.push(`${Vn[c].name} 熟练 ★${h} +${sh[h]}`));const u=Nt.stats;u.matches++,n.result==="win"&&u.wins++,u.painted+=t.stats.painted,u.splats+=t.stats.splats,u.seals+=t.stats.seals,u.bestM2=Math.max(u.bestM2,Math.round(t.stats.painted/($t*$t)));const f=Nt.tasks.map(Us);Nt.tasks=ax(Nt.tasks,n),Nt.tasks.forEach((x,v)=>{Us(x)&&!f[v]&&l.push(`每日「${au(x,m=>Vn[m].name)}」完成`)});const d=Sn(Nt.xp).level;if(d>o){l.push(`升到 Lv.${d}`),Is(d)!==Is(o)&&l.push(`晋升「${Is(d)}」`);for(const x of Xr)ci[x]>o&&ci[x]<=d&&l.push(`解锁兵器：${Vn[x].name}`)}pv(Nt,{t:Date.now(),result:n.result,a:i.share(0),b:i.share(1),weapon:c,seal:Nt.seal,grid:dv(mu(i.turf,2))}),El(),Hv(i,{reward:r,levelBefore:o,xpBefore:a,notes:l})}let bu="";function Hv(i,t){const e=Yo(mu(i.turf),i.map,780,Nt.seal),n=Ce("print");n.width=e.width,n.height=e.height,n.getContext("2d").drawImage(e,0,0);const s=i.share(0),r=i.share(1),a=i.winner();Ce("verdict").textContent=a<0?"平局":`${it.teams[a].name}胜`,Ce("verdict-seal").textContent=a<0?"和":a===0?"胜":"负",Ce("tally").innerHTML=`
    <span>${it.teams[0].short}</span><div class="b" style="background:linear-gradient(90deg,var(--team0) ${s*100}%,transparent ${s*100}%)"></div><span class="n">${(s*100).toFixed(1)}%</span>
    <span>${it.teams[1].short}</span><div class="b" style="background:linear-gradient(90deg,var(--team1) ${r*100}%,transparent ${r*100}%)"></div><span class="n">${(r*100).toFixed(1)}%</span>`,bu="<tr><th>坊</th><th></th><th>兵器</th><th>涂地</th><th>泼倒</th><th>被泼</th></tr>"+[...i.actors].sort((l,c)=>l.team-c.team||c.stats.painted-l.stats.painted).map(l=>`<tr class="${l.isPlayer?"me":""}"><td>${it.teams[l.team].short}</td><td>${l.name}</td><td>${l.weapon.name}</td><td class="num">${Math.round(l.stats.painted/($t*$t))}㎡</td><td class="num">${l.stats.splats}</td><td class="num">${l.stats.deaths}</td></tr>`).join(""),sa("result"),an.showRewards(t),pe.result(a<0?null:a===0)}const Jn=(i,t)=>Ce(i).addEventListener("click",()=>{pe.unlock(),Al(),Kr.play(ve==="play"?"battle":"home"),Kr.prefetch(["home","battle"]),pe.click(),t()});Jn("btn-start",()=>Su());Jn("weapon-chip",()=>Di("pick"));Jn("btn-daily",()=>an.openDaily());Jn("btn-shop",()=>Di("shop"));Jn("btn-album",()=>Di("album"));Jn("btn-settings",()=>an.openSettings());Jn("btn-again",()=>Su());Jn("btn-home",()=>Di("home"));Jn("btn-report",()=>an.openReport(bu));for(const i of document.querySelectorAll(".back"))i.addEventListener("click",()=>{pe.click(),Di("home")});Ce("btn-pause").addEventListener("pointerdown",i=>{i.stopPropagation(),ve==="play"&&!ps&&In?.phase!=="over"&&(pe.click(),us(!0),an.openPause())});window.addEventListener("keydown",i=>{i.code!=="Escape"||ve!=="play"||In?.phase==="over"||(ps?an.closeModal():(us(!0),an.openPause()))});Ce("btn-style").hidden=!0;Ce("btn-style").textContent=`画风 · ${it.label}`;Ce("btn-style").addEventListener("click",()=>{const i=Object.keys(lu);location.search=`?style=${i[(i.indexOf(it.id)+1)%i.length]}`});Ce("hint-touch").style.display=yl?"":"none";Ce("hint-keys").style.display=yl?"none":"";{const i=document.createElement("div");i.id="perf",_u.appendChild(i);let t=0,e=0;Ce("minimap").addEventListener("pointerdown",()=>{const r=performance.now();t=r-e<600?t+1:1,e=r,t>=5&&(i.classList.toggle("on"),t=0)});let n=0,s=performance.now();setInterval(()=>{if(!i.classList.contains("on")){n=0,s=performance.now();return}const r=performance.now(),a=n*1e3/(r-s);n=0,s=r;const o=dn.info.render,l=dn.domElement;i.textContent=`${a.toFixed(0)} fps · 目标 ${xu()||"满"} · 倍率 ${dn.getPixelRatio().toFixed(2)}/${(window.devicePixelRatio||1).toFixed(2)} · ${l.width}×${l.height} · ${o.calls} 次绘制 · ${(o.triangles/1e3).toFixed(0)}k 三角 · ${Nt.settings.powerSave?"省电":"高画质"}`},500),globalThis.__pomoFrame=()=>{n++}}const to=1/60;let Er=0,Ns=performance.now(),ts=-1;const Tr=new N,Vv=new N,Wv=new Bx;let Ws=!0,ph=0;function Xv(i,t){Zn.uTime.value=t/1e3;const e=In;if(e){const r=!ps&&!0;for(ve==="play"&&r&&(Zo&&e.phase==="play"?Zo.think(i):kv(e,i)),Er=r?Math.min(Er+i,.25):0;Er>=to;)e.tick(to),Er-=to;Uv(e),wl.flush(e.splats);for(let a=0;a<yi.length;a++)yi[a].update(e.actors[a],i,t/1e3);ve==="play"&&(xn.update(e,e.player,i),e.player?.rolling&&(ph-=i)<=0&&(ph=.18,pe.roll()),e.phase==="over"&&ts<0&&(ts=1.8)),ve==="home"&&(Ko+=i,(e.phase==="over"||Ko>75)&&ra())}ts>=0&&(ts-=i,ts<0&&e&&e.player&&Gv(e)),we.update(e,i),e&&zv(e);const n=e?.player;if(ve==="play"&&n){const r=n.alive?2.2:0;if(Tr.set(n.x+Math.sin(n.facing)*r,0,n.z+Math.cos(n.facing)*r*.6),!n.alive){const a=e.map.bases[0];Tr.set((a.x0+a.x1)/2+6,0,0)}}else{const r=t/1e3;Tr.set(Math.sin(r*.06)*20,0,Math.sin(r*.11)*6)}Mi.lerp(Tr,1-Math.exp(-i*(ve==="play"?6:1.2)));const s=we.shake*we.shake*.35;Wn.position.copy(Mi).addScaledVector(Cv,Lv.zoom).add(Vv.set((Math.random()-.5)*s,0,(Math.random()-.5)*s)),Wn.lookAt(Mi.x,0,Mi.z-.5),dn.render(hs,Wn),Tl.draw(ve==="play"?e:null,Wn,!0),globalThis.__pomoFrame?.()}function Rl(i){if(!Ws)return;requestAnimationFrame(Rl);const t=xu();if(t<0){Ns=i;return}if(!Wv.shouldDraw(i,t))return;const e=Math.max(0,Math.min(.05,(i-Ns)/1e3));Ns=i,Xv(e,i)}function yu(){Ws&&(Ws=!1,pe.suspend(),ve==="play"&&!ps&&In?.phase!=="over"&&(us(!0),an.openPause()))}function Eu(){Ws||(Ws=!0,(Nt.settings.sfx||Nt.settings.music)&&pe.resume(),Ns=performance.now(),requestAnimationFrame(Rl))}document.addEventListener("visibilitychange",()=>document.hidden?yu():Eu());xl()?.onHide?.(yu);xl()?.onShow?.(Eu);Al();an.refreshHome();ra();sa("home");requestAnimationFrame(i=>{Ns=i,Rl(i)});
