(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const po="186",zh=0,ic=1,Hh=2,ua=1,Gh=2,fs=3,di=0,Ye=1,Fn=2,Bn=0,gs=1,sc=2,ac=3,rc=4,Vh=5,Oi=100,Wh=101,Xh=102,$h=103,qh=104,Yh=200,Kh=201,Zh=202,Jh=203,Cl=204,Ll=205,Qh=206,jh=207,td=208,ed=209,nd=210,id=211,sd=212,ad=213,rd=214,br=0,Sr=1,yr=2,Ms=3,wr=4,Er=5,Tr=6,Ar=7,Pl=0,od=1,cd=2,wn=0,Il=1,Dl=2,Ul=3,mo=4,Nl=5,Fl=6,kl=7,oc="attached",ld="detached",Ol=300,ui=301,$i=302,Ua=303,Na=304,Ta=306,Rr=1e3,On=1001,Cr=1002,Le=1003,hd=1004,Is=1005,ke=1006,Fa=1007,ci=1008,tn=1009,Bl=1010,zl=1011,bs=1012,go=1013,En=1014,an=1015,Tn=1016,_o=1017,xo=1018,Ss=1020,Hl=35902,Gl=35899,Vl=1021,Wl=1022,rn=1023,Hn=1026,li=1027,vo=1028,Mo=1029,fi=1030,bo=1031,So=1033,fa=33776,pa=33777,ma=33778,ga=33779,Lr=35840,Pr=35841,Ir=35842,Dr=35843,Ur=36196,Nr=37492,Fr=37496,kr=37488,Or=37489,xa=37490,Br=37491,zr=37808,Hr=37809,Gr=37810,Vr=37811,Wr=37812,Xr=37813,$r=37814,qr=37815,Yr=37816,Kr=37817,Zr=37818,Jr=37819,Qr=37820,jr=37821,to=36492,eo=36494,no=36495,io=36283,so=36284,va=36285,ao=36286,dd=3200,ro=0,ud=1,Qn="",Xe="srgb",Ma="srgb-linear",ba="linear",ne="srgb",ka=7680,fd=519,pd=512,md=513,gd=514,yo=515,_d=516,xd=517,wo=518,vd=519,Md=35044,cc="300 es",Sn=2e3,ys=2001;function bd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){const i=Sa("canvas");return i.style.display="block",i}const lc={};function hc(...i){const t="THREE."+i.shift();console.log(t,...i)}function Xl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=Xl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=Xl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Gi(...i){const t=i.join(" ");t in lc||(lc[t]=!0,Lt(...i))}function yd(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const wd={[br]:Sr,[yr]:Tr,[wr]:Ar,[Ms]:Er,[Sr]:br,[Tr]:yr,[Ar]:wr,[Er]:Ms};class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dc=1234567;const _s=Math.PI/180,qi=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Eo(i,t){return(i%t+t)%t}function Ed(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Td(i,t,e){return i!==t?(e-i)/(t-i):0}function xs(i,t,e){return(1-e)*i+e*t}function Ad(i,t,e,n){return xs(i,t,1-Math.exp(-e*n))}function Rd(i,t=1){return t-Math.abs(Eo(i,t*2)-t)}function Cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Id(i,t){return i+Math.random()*(t-i)}function Dd(i){return i*(.5-Math.random())}function Ud(i){i!==void 0&&(dc=i);let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(i){return i*_s}function Fd(i){return i*qi}function kd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zd(i,t,e,n,s){const a=Math.cos,r=Math.sin,o=a(e/2),c=r(e/2),l=a((t+n)/2),h=r((t+n)/2),u=a((t-n)/2),d=r((t-n)/2),m=a((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*h,o*l);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const uc={DEG2RAD:_s,RAD2DEG:qi,generateUUID:_i,clamp:Wt,euclideanModulo:Eo,mapLinear:Ed,inverseLerp:Td,lerp:xs,damp:Ad,pingpong:Rd,smoothstep:Cd,smootherstep:Ld,randInt:Pd,randFloat:Id,randFloatSpread:Dd,seededRandom:Ud,degToRad:Nd,radToDeg:Fd,isPowerOfTwo:kd,ceilPowerOfTwo:Od,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:zd,normalize:He,denormalize:Bi},Go=class Go{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Go.prototype.isVector2=!0;let zt=Go;class mn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=a[r+0],m=a[r+1],g=a[r+2],w=a[r+3];if(u!==w||c!==d||l!==m||h!==g){let p=c*d+l*m+h*g+u*w;p<0&&(d=-d,m=-m,g=-g,w=-w,p=-p);let f=1-o;if(p<.9995){const E=Math.acos(p),L=Math.sin(E);f=Math.sin(f*E)/L,o=Math.sin(o*E)/L,c=c*f+d*o,l=l*f+m*o,h=h*f+g*o,u=u*f+w*o}else{c=c*f+d*o,l=l*f+m*o,h=h*f+g*o,u=u*f+w*o;const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=a[r],d=a[r+1],m=a[r+2],g=a[r+3];return t[e]=o*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-o*m,t[e+2]=l*g+h*m+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(a/2),d=c(n/2),m=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(a-l)*m,this._z=(r-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(a+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-l)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(r-s)/m,this._x=(a+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+a*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+a*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vo=class Vo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*s-o*n),h=2*(o*e-a*s),u=2*(a*n-r*e);return this.x=e+c*l+r*u-o*h,this.y=n+c*h+o*l-a*u,this.z=s+c*u+a*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oa.copy(this).projectOnVector(t),this.sub(Oa)}reflect(t){return this.sub(Oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vo.prototype.isVector3=!0;let k=Vo;const Oa=new k,fc=new mn,Wo=class Wo{constructor(t,e,n,s,a,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,c,l)}set(t,e,n,s,a,r,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],w=s[0],p=s[3],f=s[6],E=s[1],L=s[4],M=s[7],v=s[2],S=s[5],T=s[8];return a[0]=r*w+o*E+c*v,a[3]=r*p+o*L+c*S,a[6]=r*f+o*M+c*T,a[1]=l*w+h*E+u*v,a[4]=l*p+h*L+u*S,a[7]=l*f+h*M+u*T,a[2]=d*w+m*E+g*v,a[5]=d*p+m*L+g*S,a[8]=d*f+m*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-n*a*h+n*o*c+s*a*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*r-o*l,d=o*c-h*a,m=l*a-r*c,g=e*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/g;return t[0]=u*w,t[1]=(s*l-h*n)*w,t[2]=(o*n-s*r)*w,t[3]=d*w,t[4]=(h*e-s*c)*w,t[5]=(s*a-o*e)*w,t[6]=m*w,t[7]=(n*c-l*e)*w,t[8]=(r*e-n*a)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-s*l,s*c,-s*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wo.prototype.isMatrix3=!0;let Ut=Wo;const Ba=new Ut,pc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hd(){const i={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ne&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ne&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ma]:{primaries:t,whitePoint:n,transfer:ba,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}const $t=Hd();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class Gd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bi===void 0&&(bi=Sa("canvas")),bi.width=t.width,bi.height=t.height;const s=bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=zn(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vd=0;class To{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(za(s[r].image)):a.push(za(s[r]))}else a=za(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let Wd=0;const Ha=new k;class Oe extends gi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=On,s=On,a=ke,r=ci,o=rn,c=tn,l=Oe.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=_i(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Ol;Oe.DEFAULT_ANISOTROPY=1;const Xo=class Xo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],w=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-w)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+w)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(l+1)/2,M=(m+1)/2,v=(f+1)/2,S=(h+d)/4,T=(u+w)/4,x=(g+p)/4;return L>M&&L>v?L<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(L),s=S/n,a=T/n):M>v?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=S/s,a=x/s):v<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(v),n=T/a,s=x/a),this.set(n,s,a,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-w)*(u-w)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-w)/E,this.z=(d-h)/E,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xo.prototype.isVector4=!0;let se=Xo;class Xd extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},a=new Oe(s),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new To(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Xd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $l extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ea=class Ea{constructor(t,e,n,s,a,r,o,c,l,h,u,d,m,g,w,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,c,l,h,u,d,m,g,w,p)}set(t,e,n,s,a,r,o,c,l,h,u,d,m,g,w,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=w,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ea().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),a=1/Si.setFromMatrixColumn(t,1).length(),r=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=r*h,m=r*u,g=o*h,w=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-w*l,e[9]=-o*c,e[2]=w-d*l,e[6]=g+m*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,g=l*h,w=l*u;e[0]=d+w*o,e[4]=g*o-m,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=m*o-g,e[6]=w+d*o,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,g=l*h,w=l*u;e[0]=d-w*o,e[4]=-r*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*h,e[9]=w-d*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,m=r*u,g=o*h,w=o*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+w,e[1]=c*u,e[5]=w*l+d,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,m=r*l,g=o*c,w=o*l;e[0]=c*h,e[4]=w-d*u,e[8]=g*u+m,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-w*u}else if(t.order==="XZY"){const d=r*c,m=r*l,g=o*c,w=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+w,e[5]=r*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=w*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qd,t,Yd)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),$n.crossVectors(n,Ze),$n.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),$n.crossVectors(n,Ze)),$n.normalize(),Ds.crossVectors(Ze,$n),s[0]=$n.x,s[4]=Ds.x,s[8]=Ze.x,s[1]=$n.y,s[5]=Ds.y,s[9]=Ze.y,s[2]=$n.z,s[6]=Ds.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],w=n[6],p=n[10],f=n[14],E=n[3],L=n[7],M=n[11],v=n[15],S=s[0],T=s[4],x=s[8],y=s[12],R=s[1],P=s[5],I=s[9],F=s[13],C=s[2],O=s[6],$=s[10],V=s[14],nt=s[3],q=s[7],j=s[11],et=s[15];return a[0]=r*S+o*R+c*C+l*nt,a[4]=r*T+o*P+c*O+l*q,a[8]=r*x+o*I+c*$+l*j,a[12]=r*y+o*F+c*V+l*et,a[1]=h*S+u*R+d*C+m*nt,a[5]=h*T+u*P+d*O+m*q,a[9]=h*x+u*I+d*$+m*j,a[13]=h*y+u*F+d*V+m*et,a[2]=g*S+w*R+p*C+f*nt,a[6]=g*T+w*P+p*O+f*q,a[10]=g*x+w*I+p*$+f*j,a[14]=g*y+w*F+p*V+f*et,a[3]=E*S+L*R+M*C+v*nt,a[7]=E*T+L*P+M*O+v*q,a[11]=E*x+L*I+M*$+v*j,a[15]=E*y+L*F+M*V+v*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],w=t[7],p=t[11],f=t[15],E=c*m-l*d,L=o*m-l*u,M=o*d-c*u,v=r*m-l*h,S=r*d-c*h,T=r*u-o*h;return e*(w*E-p*L+f*M)-n*(g*E-p*v+f*S)+s*(g*L-w*v+f*T)-a*(g*M-w*S+p*T)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[1],r=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(r*h-o*l)-n*(a*h-o*c)+s*(a*l-r*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],w=t[13],p=t[14],f=t[15],E=e*o-n*r,L=e*c-s*r,M=e*l-a*r,v=n*c-s*o,S=n*l-a*o,T=s*l-a*c,x=h*w-u*g,y=h*p-d*g,R=h*f-m*g,P=u*p-d*w,I=u*f-m*w,F=d*f-m*p,C=E*F-L*I+M*P+v*R-S*y+T*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/C;return t[0]=(o*F-c*I+l*P)*O,t[1]=(s*I-n*F-a*P)*O,t[2]=(w*T-p*S+f*v)*O,t[3]=(d*S-u*T-m*v)*O,t[4]=(c*R-r*F-l*y)*O,t[5]=(e*F-s*R+a*y)*O,t[6]=(p*M-g*T-f*L)*O,t[7]=(h*T-d*M+m*L)*O,t[8]=(r*I-o*R+l*x)*O,t[9]=(n*R-e*I-a*x)*O,t[10]=(g*S-w*M+f*E)*O,t[11]=(u*M-h*S-m*E)*O,t[12]=(o*y-r*P-c*x)*O,t[13]=(e*P-n*y+s*x)*O,t[14]=(w*L-g*v-p*E)*O,t[15]=(h*v-u*L+d*E)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,c=t.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,h=r+r,u=o+o,d=a*l,m=a*h,g=a*u,w=r*h,p=r*u,f=o*u,E=c*l,L=c*h,M=c*u,v=n.x,S=n.y,T=n.z;return s[0]=(1-(w+f))*v,s[1]=(m+M)*v,s[2]=(g-L)*v,s[3]=0,s[4]=(m-M)*S,s[5]=(1-(d+f))*S,s[6]=(p+E)*S,s[7]=0,s[8]=(g+L)*T,s[9]=(p-E)*T,s[10]=(1-(d+w))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),e.identity(),this;let r=Si.set(s[0],s[1],s[2]).length();const o=Si.set(s[4],s[5],s[6]).length(),c=Si.set(s[8],s[9],s[10]).length();a<0&&(r=-r),ln.copy(this);const l=1/r,h=1/o,u=1/c;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=c,this}makePerspective(t,e,n,s,a,r,o=Sn,c=!1){const l=this.elements,h=2*a/(e-t),u=2*a/(n-s),d=(e+t)/(e-t),m=(n+s)/(n-s);let g,w;if(c)g=a/(r-a),w=r*a/(r-a);else if(o===Sn)g=-(r+a)/(r-a),w=-2*r*a/(r-a);else if(o===ys)g=-r/(r-a),w=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=w,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=Sn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),m=-(n+s)/(n-s);let g,w;if(c)g=1/(r-a),w=r/(r-a);else if(o===Sn)g=-2/(r-a),w=-(r+a)/(r-a);else if(o===ys)g=-1/(r-a),w=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=w,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ea.prototype.isMatrix4=!0;let It=Ea;const Si=new k,ln=new It,qd=new k(0,0,0),Yd=new k(1,1,1),$n=new k,Ds=new k,Ze=new k,gc=new It,_c=new mn;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kd=0;const xc=new k,yi=new mn,Cn=new It,Us=new k,es=new k,Zd=new k,Jd=new mn,vc=new k(1,0,0),Mc=new k(0,1,0),bc=new k(0,0,1),Sc={type:"added"},Qd={type:"removed"},wi={type:"childadded",child:null},Ga={type:"childremoved",child:null};class be extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new k,e=new An,n=new mn,s=new k(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new Ut}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Us.copy(t):Us.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(es,Us,this.up):Cn.lookAt(Us,es,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(Cn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sc),wi.child=t,this.dispatchEvent(wi),wi.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qd),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sc),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,Zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*n-a[8]*s,a[13]+=n-a[1]*e-a[5]*n-a[9]*s,a[14]+=s-a[2]*e-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(t.shapes,u)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}be.DEFAULT_UP=new k(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yn extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jd={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const w of t.hand.values()){const p=e.getJointPose(w,n),f=this._getHandJoint(l,w);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Eo(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Wa(r,a,t+1/3),this.g=Wa(r,a,t),this.b=Wa(r,a,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(a){a!==void 0&&parseFloat(a)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Yl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return $t.workingToColorSpace(Ne.copy(this),t),Math.round(Wt(Ne.r*255,0,255))*65536+Math.round(Wt(Ne.g*255,0,255))*256+Math.round(Wt(Ne.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,a=Ne.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-n)/u+2;break;case a:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Xe){$t.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Ns);const n=xs(qn.h,Ns.h,e),s=xs(qn.s,Ns.s,e),a=xs(qn.l,Ns.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Xt;Xt.NAMES=Yl;class Ao{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new Ao(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tu extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const hn=new k,Ln=new k,Xa=new k,Pn=new k,Ei=new k,Ti=new k,yc=new k,$a=new k,qa=new k,Ya=new k,Ka=new se,Za=new se,Ja=new se;class un{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){hn.subVectors(s,e),Ln.subVectors(n,e),Xa.subVectors(t,e);const r=hn.dot(hn),o=hn.dot(Ln),c=hn.dot(Xa),l=Ln.dot(Ln),h=Ln.dot(Xa),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,m=(l*c-o*h)*d,g=(r*h-o*c)*d;return a.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,a,r,o,c){return this.getBarycoord(t,e,n,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Pn.x),c.addScaledVector(r,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(t,e,n,s,a,r){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(t,e),Za.fromBufferAttribute(t,n),Ja.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ka,a.x),r.addScaledVector(Za,a.y),r.addScaledVector(Ja,a.z),r}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Ln.subVectors(t,e),hn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;Ei.subVectors(s,n),Ti.subVectors(a,n),$a.subVectors(t,n);const c=Ei.dot($a),l=Ti.dot($a);if(c<=0&&l<=0)return e.copy(n);qa.subVectors(t,s);const h=Ei.dot(qa),u=Ti.dot(qa);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Ei,r);Ya.subVectors(t,a);const m=Ei.dot(Ya),g=Ti.dot(Ya);if(g>=0&&m<=g)return e.copy(a);const w=m*l-c*g;if(w<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ti,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return yc.subVectors(a,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(yc,o);const f=1/(p+w+d);return r=w*f,o=d*f,e.copy(n).addScaledVector(Ei,r).addScaledVector(Ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ti{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,dn):dn.fromBufferAttribute(a,r),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),ks.subVectors(this.max,ns),Ai.subVectors(t.a,ns),Ri.subVectors(t.b,ns),Ci.subVectors(t.c,ns),Yn.subVectors(Ri,Ai),Kn.subVectors(Ci,Ri),ni.subVectors(Ai,Ci);let e=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-ni.z,ni.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,ni.z,0,-ni.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-ni.y,ni.x,0];return!Qa(e,Ai,Ri,Ci,ks)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,Ai,Ri,Ci,ks))?!1:(Os.crossVectors(Yn,Kn),e=[Os.x,Os.y,Os.z],Qa(e,Ai,Ri,Ci,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const In=[new k,new k,new k,new k,new k,new k,new k,new k],dn=new k,Fs=new ti,Ai=new k,Ri=new k,Ci=new k,Yn=new k,Kn=new k,ni=new k,ns=new k,ks=new k,Os=new k,ii=new k;function Qa(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){ii.fromArray(i,a);const o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=t.dot(ii),l=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Me=new k,Bs=new zt;let eu=0;class we extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Md,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),a=He(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Kl extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zl extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}const nu=new ti,is=new k,ja=new k;class xi{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nu.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(ja)),this.expandByPoint(is.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let iu=0;const nn=new It,tr=new be,Li=new k,Je=new ti,ss=new ti,Re=new k;class Be extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bd(t)?Zl:Kl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ut().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return tr.lookAt(t),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Je.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Je.min,ss.min),Je.expandByPoint(Re),Re.addVectors(Je.max,ss.max),Je.expandByPoint(Re)):(Je.expandByPoint(ss.min),Je.expandByPoint(ss.max))}Je.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)Re.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Re.fromBufferAttribute(o,l),c&&(Li.fromBufferAttribute(t,l),Re.add(Li)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new we(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new k,c[x]=new k;const l=new k,h=new k,u=new k,d=new zt,m=new zt,g=new zt,w=new k,p=new k;function f(x,y,R){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,R),d.fromBufferAttribute(a,x),m.fromBufferAttribute(a,y),g.fromBufferAttribute(a,R),h.sub(l),u.sub(l),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(w.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[x].add(w),o[y].add(w),o[R].add(w),c[x].add(p),c[y].add(p),c[R].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,y=E.length;x<y;++x){const R=E[x],P=R.start,I=R.count;for(let F=P,C=P+I;F<C;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const L=new k,M=new k,v=new k,S=new k;function T(x){v.fromBufferAttribute(s,x),S.copy(v);const y=o[x];L.copy(y),L.sub(v.multiplyScalar(v.dot(y))).normalize(),M.crossVectors(S,y);const P=M.dot(c[x])<0?-1:1;r.setXYZW(x,L.x,L.y,L.z,P)}for(let x=0,y=E.length;x<y;++x){const R=E[x],P=R.start,I=R.count;for(let F=P,C=P+I;F<C;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new k,a=new k,r=new k,o=new k,c=new k,l=new k,h=new k,u=new k;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),w=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,w),r.fromBufferAttribute(e,p),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,w),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let w=0,p=c.length;w<p;w++){o.isInterleavedBufferAttribute?m=c[w]*o.data.stride+o.offset:m=c[w]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new we(d,h,u)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const a=t.morphAttributes;for(const l in a){const h=[],u=a[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const er=new k,su=new k,au=new Ut;class Jn{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=er.subVectors(n,e).cross(su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(er),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||au.getNormalMatrix(t),s=this.coplanarPoint(er).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let ru=0;class Rs extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=gs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Ll,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Jn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Dn=new k,nr=new k,zs=new k,Hs=new k;class Jl{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nr.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Hs.copy(this.origin).sub(nr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(zs),o=Hs.dot(this.direction),c=-Hs.dot(zs),l=Hs.lengthSq(),h=Math.abs(1-r*r);let u,d,m,g;if(h>0)if(u=r*c-o,d=r*o-c,g=a*h,u>=0)if(d>=-g)if(d<=g){const w=1/h;u*=w,d*=w,m=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=a,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-a,-c),a),m=d*(d+2*c)+l):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),m=-u*u+d*(d+2*c)+l);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nr).addScaledVector(zs,d),m}intersectSphere(t,e){if(t.radius<0)return null;Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,a){const r=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=t.x-r.x,d=t.y-r.y,m=t.z-r.z,g=e.x-r.x,w=e.y-r.y,p=e.z-r.z,f=n.x-r.x,E=n.y-r.y,L=n.z-r.z,M=Math.abs(c),v=Math.abs(l),S=Math.abs(h);let T,x,y,R,P,I,F,C,O,$,V,nt;if(M>=v&&M>=S?(y=c,I=u,O=g,nt=f,c>=0?(T=l,x=h,R=d,P=m,F=w,C=p,$=E,V=L):(T=h,x=l,R=m,P=d,F=p,C=w,$=L,V=E)):v>=S?(y=l,I=d,O=w,nt=E,l>=0?(T=h,x=c,R=m,P=u,F=p,C=g,$=L,V=f):(T=c,x=h,R=u,P=m,F=g,C=p,$=f,V=L)):(y=h,I=m,O=p,nt=L,h>=0?(T=c,x=l,R=u,P=d,F=g,C=w,$=f,V=E):(T=l,x=c,R=d,P=u,F=w,C=g,$=E,V=f)),y===0)return null;const q=T/y,j=x/y,et=1/y,Rt=R-q*I,Et=P-j*I,oe=F-q*O,qt=C-j*O,Jt=$-q*nt,Y=V-j*nt,Q=Jt*qt-Y*oe,_t=Rt*Y-Et*Jt,Dt=oe*Et-qt*Rt;if(s){if(Q<0||_t<0||Dt<0)return null}else if((Q<0||_t<0||Dt<0)&&(Q>0||_t>0||Dt>0))return null;const mt=Q+_t+Dt;if(mt===0)return null;const Ot=et*(Q*I+_t*O+Dt*nt);return(mt>0?Ot<0:Ot>0)?null:this.at(Ot/mt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ws extends Rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wc=new It,si=new Jl,Gs=new xi,Ec=new k,Vs=new k,Ws=new k,Xs=new k,ir=new k,$s=new k,Tc=new k,qs=new k;class Pt extends be{constructor(t=new Be,e=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){$s.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],u=a[c];h!==0&&(ir.fromBufferAttribute(u,t),r?$s.addScaledVector(ir,h):$s.addScaledVector(ir.sub(e),h))}e.add($s)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(a),si.copy(t.ray).recast(t.near),!(Gs.containsPoint(si.origin)===!1&&(si.intersectSphere(Gs,Ec)===null||si.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(wc.copy(a).invert(),si.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,w=d.length;g<w;g++){const p=d[g],f=r[p.materialIndex],E=Math.max(p.start,m.start),L=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,v=L;M<v;M+=3){const S=o.getX(M),T=o.getX(M+1),x=o.getX(M+2);s=Ys(this,f,t,n,l,h,u,S,T,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),w=Math.min(o.count,m.start+m.count);for(let p=g,f=w;p<f;p+=3){const E=o.getX(p),L=o.getX(p+1),M=o.getX(p+2);s=Ys(this,r,t,n,l,h,u,E,L,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,w=d.length;g<w;g++){const p=d[g],f=r[p.materialIndex],E=Math.max(p.start,m.start),L=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,v=L;M<v;M+=3){const S=M,T=M+1,x=M+2;s=Ys(this,f,t,n,l,h,u,S,T,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),w=Math.min(c.count,m.start+m.count);for(let p=g,f=w;p<f;p+=3){const E=p,L=p+1,M=p+2;s=Ys(this,r,t,n,l,h,u,E,L,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ou(i,t,e,n,s,a,r,o){let c;if(t.side===Ye?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,t.side===di,o),c===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(qs);return l<e.near||l>e.far?null:{distance:l,point:qs.clone(),object:i}}function Ys(i,t,e,n,s,a,r,o,c,l){i.getVertexPosition(o,Vs),i.getVertexPosition(c,Ws),i.getVertexPosition(l,Xs);const h=ou(i,t,e,n,Vs,Ws,Xs,Tc);if(h){const u=new k;un.getBarycoord(Tc,Vs,Ws,Xs,u),s&&(h.uv=un.getInterpolatedAttribute(s,o,c,l,u,new zt)),a&&(h.uv1=un.getInterpolatedAttribute(a,o,c,l,u,new zt)),r&&(h.normal=un.getInterpolatedAttribute(r,o,c,l,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new k,materialIndex:0};un.getNormal(Vs,Ws,Xs,d.normal),h.face=d,h.barycoord=u}return h}const as=new se,Ac=new se,Rc=new se,cu=new se,Cc=new It,Ks=new k,sr=new xi,Lc=new It,ar=new Jl;class lu extends Pt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=oc,this.bindMatrix=new It,this.bindMatrixInverse=new It,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ks),this.boundingBox.expandByPoint(Ks)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ks),this.boundingSphere.expandByPoint(Ks)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(s),t.ray.intersectsSphere(sr)!==!1&&(Lc.copy(s).invert(),ar.copy(t.ray).applyMatrix4(Lc),!(this.boundingBox!==null&&ar.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ar)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===oc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ld?this.bindMatrixInverse.copy(this.bindMatrix).invert():Lt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Ac.fromBufferAttribute(s.attributes.skinIndex,t),Rc.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(as.copy(e),e.set(0,0,0,0)):(as.set(...e,1),e.set(0,0,0)),as.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){const r=Rc.getComponent(a);if(r!==0){const o=Ac.getComponent(a);Cc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(cu.copy(as).applyMatrix4(Cc),r)}}return e.isVector4&&(e.w=as.w),e.applyMatrix4(this.bindMatrixInverse)}}class Ql extends be{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ro extends Oe{constructor(t=null,e=1,n=1,s,a,r,o,c,l=Le,h=Le,u,d){super(null,r,o,c,l,h,s,a,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pc=new It,hu=new It;class Co{constructor(t=[],e=[]){this.uuid=_i(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Lt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new It)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new It;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,r=t.length;a<r;a++){const o=t[a]?t[a].matrixWorld:hu;Pc.multiplyMatrices(o,e[a]),Pc.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Co(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ro(e,t,t,rn,an);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const a=t.bones[n];let r=e[a];r===void 0&&(Lt("Skeleton: No bone found with UUID:",a),r=new Ql),this.bones.push(r),this.boneInverses.push(new It().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,a=e.length;s<a;s++){const r=e[s];t.bones.push(r.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class Ic extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Pi=new It,Dc=new It,Zs=[],Uc=new ti,du=new It,rs=new Pt,os=new xi;class uu extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,du)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),Uc.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Uc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),os.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),t.ray.intersectsSphere(os)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Pi),Dc.multiplyMatrices(n,Pi),rs.matrixWorld=Dc,rs.raycast(t,Zs);for(let r=0,o=Zs.length;r<o;r++){const c=Zs[r];c.instanceId=a,c.object=this,e.push(c)}Zs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(s*this.count),s,this.count,vo,an));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*t;return a[c]=o,a.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ai=new xi,fu=new zt(.5,.5),Js=new k;class Lo{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,a=new Jn,r=new Jn){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){const s=this.planes,a=t.elements,r=a[0],o=a[1],c=a[2],l=a[3],h=a[4],u=a[5],d=a[6],m=a[7],g=a[8],w=a[9],p=a[10],f=a[11],E=a[12],L=a[13],M=a[14],v=a[15];if(s[0].setComponents(l-r,m-h,f-g,v-E).normalize(),s[1].setComponents(l+r,m+h,f+g,v+E).normalize(),s[2].setComponents(l+o,m+u,f+w,v+L).normalize(),s[3].setComponents(l-o,m-u,f-w,v-L).normalize(),n)s[4].setComponents(c,d,p,M).normalize(),s[5].setComponents(l-c,m-d,f-p,v-M).normalize();else if(s[4].setComponents(l-c,m-d,f-p,v-M).normalize(),e===Sn)s[5].setComponents(l+c,m+d,f+p,v+M).normalize();else if(e===ys)s[5].setComponents(c,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){ai.center.set(0,0,0);const e=fu.distanceTo(t.center);return ai.radius=.7071067811865476+e,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends Oe{constructor(t=[],e=ui,n,s,a,r,o,c,l,h){super(t,e,n,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class th extends Oe{constructor(t,e,n,s,a,r,o,c,l){super(t,e,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends Oe{constructor(t,e,n=En,s,a,r,o=Le,c=Le,l,h=Hn,u=1){if(h!==Hn&&h!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new To(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class pu extends Es{constructor(t,e=En,n=ui,s,a,r=Le,o=Le,c,l=Hn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,a,r,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class eh extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gn extends Be{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(w,p,f,E,L,M,v,S,T,x,y){const R=M/T,P=v/x,I=M/2,F=v/2,C=S/2,O=T+1,$=x+1;let V=0,nt=0;const q=new k;for(let j=0;j<$;j++){const et=j*P-F;for(let Rt=0;Rt<O;Rt++){const Et=Rt*R-I;q[w]=Et*E,q[p]=et*L,q[f]=C,l.push(q.x,q.y,q.z),q[w]=0,q[p]=0,q[f]=S>0?1:-1,h.push(q.x,q.y,q.z),u.push(Rt/T),u.push(1-j/x),V+=1}}for(let j=0;j<x;j++)for(let et=0;et<T;et++){const Rt=d+et+O*j,Et=d+et+O*(j+1),oe=d+(et+1)+O*(j+1),qt=d+(et+1)+O*j;c.push(Rt,Et,qt),c.push(Et,oe,qt),nt+=6}o.addGroup(m,nt,y),m+=nt,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ts extends Be{constructor(t=1,e=1,n=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:a},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));const r=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,m=2*u+d,g=n*2+a,w=s+1,p=new k,f=new k;for(let E=0;E<=g;E++){let L=0,M=0,v=0,S=0;if(E<=n){const y=E/n,R=y*Math.PI/2;M=-h-t*Math.cos(R),v=t*Math.sin(R),S=-t*Math.cos(R),L=y*u}else if(E<=n+a){const y=(E-n)/a;M=-h+y*e,v=t,S=0,L=u+y*d}else{const y=(E-n-a)/n,R=y*Math.PI/2;M=h+t*Math.sin(R),v=t*Math.cos(R),S=t*Math.sin(R),L=u+d+y*u}const T=Math.max(0,Math.min(1,L/m));let x=0;E===0?x=.5/s:E===g&&(x=-.5/s);for(let y=0;y<=s;y++){const R=y/s,P=R*Math.PI*2,I=Math.sin(P),F=Math.cos(P);f.x=-v*F,f.y=M,f.z=v*I,o.push(f.x,f.y,f.z),p.set(-v*F,S,v*I),p.normalize(),c.push(p.x,p.y,p.z),l.push(R+x,T)}if(E>0){const y=(E-1)*w;for(let R=0;R<s;R++){const P=y+R,I=y+R+1,F=E*w+R,C=E*w+R+1;r.push(P,I,F),r.push(I,C,F)}}}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Po extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const a=[],r=[],o=[],c=[],l=new k,h=new zt;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ve extends Be{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],d=[],m=[];let g=0;const w=[],p=n/2;let f=0;E(),r===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(m,2));function E(){const M=new k,v=new k;let S=0;const T=(e-t)/n;for(let x=0;x<=a;x++){const y=[],R=x/a,P=R*(e-t)+t;for(let I=0;I<=s;I++){const F=I/s,C=F*c+o,O=Math.sin(C),$=Math.cos(C);v.x=P*O,v.y=-R*n+p,v.z=P*$,u.push(v.x,v.y,v.z),M.set(O,T,$).normalize(),d.push(M.x,M.y,M.z),m.push(F,1-R),y.push(g++)}w.push(y)}for(let x=0;x<s;x++)for(let y=0;y<a;y++){const R=w[y][x],P=w[y+1][x],I=w[y+1][x+1],F=w[y][x+1];(t>0||y!==0)&&(h.push(R,P,F),S+=3),(e>0||y!==a-1)&&(h.push(P,I,F),S+=3)}l.addGroup(f,S,0),f+=S}function L(M){const v=g,S=new zt,T=new k;let x=0;const y=M===!0?t:e,R=M===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*R,0),d.push(0,R,0),m.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const C=I/s*c+o,O=Math.cos(C),$=Math.sin(C);T.x=y*$,T.y=p*R,T.z=y*O,u.push(T.x,T.y,T.z),d.push(0,R,0),S.x=O*.5+.5,S.y=$*.5*R+.5,m.push(S.x,S.y),g++}for(let I=0;I<s;I++){const F=v+I,C=P+I;M===!0?h.push(C,C+1,F):h.push(C+1,C,F),x+=3}l.addGroup(f,x,M===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Io extends Ve{constructor(t=1,e=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Io(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pi extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,m=[],g=[],w=[],p=[];for(let f=0;f<h;f++){const E=f*d-r;for(let L=0;L<l;L++){const M=L*u-a;g.push(M,-E,0),w.push(0,0,1),p.push(L/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const L=E+l*f,M=E+l*(f+1),v=E+1+l*(f+1),S=E+1+l*f;m.push(L,M,S),m.push(M,v,S)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(w,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mn extends Be{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new k,d=new k,m=[],g=[],w=[],p=[];for(let f=0;f<=n;f++){const E=[],L=f/n,M=r+L*o,v=t*Math.cos(M),S=Math.sqrt(t*t-v*v);let T=0;f===0&&r===0?T=.5/e:f===n&&c===Math.PI&&(T=-.5/e);for(let x=0;x<=e;x++){const y=x/e,R=s+y*a;u.x=-S*Math.cos(R),u.y=v,u.z=S*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),w.push(d.x,d.y,d.z),p.push(y+T,1-L),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const L=h[f][E+1],M=h[f][E],v=h[f+1][E],S=h[f+1][E+1];(f!==0||r>0)&&m.push(L,M,S),(f!==n-1||c<Math.PI)&&m.push(M,v,S)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(w,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wi extends Be{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],u=[],d=new k,m=new k,g=new k;for(let w=0;w<=n;w++){const p=r+w/n*o;for(let f=0;f<=s;f++){const E=f/s*a;m.x=(t+e*Math.cos(p))*Math.cos(E),m.y=(t+e*Math.cos(p))*Math.sin(E),m.z=e*Math.sin(p),l.push(m.x,m.y,m.z),d.x=t*Math.cos(E),d.y=t*Math.sin(E),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),u.push(f/s),u.push(w/n)}}for(let w=1;w<=n;w++)for(let p=1;p<=s;p++){const f=(s+1)*w+p-1,E=(s+1)*(w-1)+p-1,L=(s+1)*(w-1)+p,M=(s+1)*w+p;c.push(f,E,M),c.push(E,L,M)}this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Nc(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Nc(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[e][n]=a}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Yi(i[e]);for(const s in n)t[s]=n[s]}return t}function Nc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const gu={clone:Yi,merge:Ge};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new It().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class vu extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class je extends Rs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mu extends Rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bu extends Rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Aa extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Su extends Aa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const rr=new It,Fc=new k,kc=new k;class Do{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fc),kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rr,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,c=s?s.x/a.x:0,l=s?s.y/a.y:0;t.coordinateSystem===ys||t.reversedDepth?e.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qs=new k,js=new mn,xn=new k;class ih extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qs,js,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qs,js,xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qs,js,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qs,js,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new k,Oc=new zt,Bc=new zt;class $e extends ih{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Bc),e.subVectors(Bc,Oc)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class yu extends Do{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=qi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||e.far;(n!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=n,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class wu extends Aa{constructor(t,e,n=0,s=Math.PI/3,a=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new yu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Eu extends Do{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}}class sh extends Aa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Eu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Uo extends ih{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tu extends Do{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zc extends Aa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Tu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ii=-90,Di=1;class Au extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(Ii,Di,t,e);s.layers=this.layers,this.add(s);const a=new $e(Ii,Di,t,e);a.layers=this.layers,this.add(a);const r=new $e(Ii,Di,t,e);r.layers=this.layers,this.add(r);const o=new $e(Ii,Di,t,e);o.layers=this.layers,this.add(o);const c=new $e(Ii,Di,t,e);c.layers=this.layers,this.add(c);const l=new $e(Ii,Di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ru extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const $o=class $o{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const a=this.elements;return a[0]=t,a[2]=e,a[1]=n,a[3]=s,this}};$o.prototype.isMatrix2=!0;let Hc=$o;function Gc(i,t,e,n){const s=Cu(n);switch(e){case Vl:return i*t;case vo:return i*t/s.components*s.byteLength;case Mo:return i*t/s.components*s.byteLength;case fi:return i*t*2/s.components*s.byteLength;case bo:return i*t*2/s.components*s.byteLength;case Wl:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case So:return i*t*4/s.components*s.byteLength;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pr:case Dr:return Math.max(i,16)*Math.max(t,8)/4;case Lr:case Ir:return Math.max(i,8)*Math.max(t,8)/2;case Ur:case Nr:case kr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:case xa:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $r:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case to:case eo:case no:return Math.ceil(i/4)*Math.ceil(t/4)*16;case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*8;case va:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cu(i){switch(i){case tn:case Bl:return{byteLength:1,components:1};case bs:case zl:case Tn:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case En:case go:case an:return{byteLength:4,components:1};case Hl:case Gl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);function ah(){let i=null,t=!1,e=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),e(a,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Lu(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],w=u[m];w.start<=g.start+g.count+1?g.count=Math.max(g.count,w.start+w.count-g.start):(++d,u[d]=w)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const w=u[m];i.bufferSubData(l,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}var Pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
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
#endif`,Du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
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
#endif`,Ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bu=`#ifdef USE_BATCHING
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
#endif`,zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tf=`#define PI 3.141592653589793
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
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nf=`vec3 transformedNormal = objectNormal;
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
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
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
#endif`,Lf=`uniform sampler2D dfgLUT;
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
}`,Pf=`
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_p=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,zp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,Kp=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,tm=`#define PHONG
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
}`,em=`#define PHONG
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
}`,nm=`#define STANDARD
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
}`,im=`#define STANDARD
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
}`,sm=`#define TOON
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
}`,am=`#define TOON
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
}`,rm=`uniform float size;
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
}`,om=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,hm=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Pu,alphahash_pars_fragment:Iu,alphamap_fragment:Du,alphamap_pars_fragment:Uu,alphatest_fragment:Nu,alphatest_pars_fragment:Fu,aomap_fragment:ku,aomap_pars_fragment:Ou,batching_pars_vertex:Bu,batching_vertex:zu,begin_vertex:Hu,beginnormal_vertex:Gu,bsdfs:Vu,iridescence_fragment:Wu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:Ku,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:Qu,color_vertex:ju,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:af,emissivemap_fragment:rf,emissivemap_pars_fragment:of,colorspace_fragment:cf,colorspace_pars_fragment:lf,envmap_fragment:hf,envmap_common_pars_fragment:df,envmap_pars_fragment:uf,envmap_pars_vertex:ff,envmap_physical_pars_fragment:wf,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:xf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:Mf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Sf,lights_pars_begin:yf,lights_toon_fragment:Ef,lights_toon_pars_fragment:Tf,lights_phong_fragment:Af,lights_phong_pars_fragment:Rf,lights_physical_fragment:Cf,lights_physical_pars_fragment:Lf,lights_fragment_begin:Pf,lights_fragment_maps:If,lights_fragment_end:Df,lightprobes_pars_fragment:Uf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Of,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:$f,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:Kf,normal_fragment_begin:Zf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:jf,normal_vertex:tp,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:ap,opaque_fragment:rp,packing:op,premultiplied_alpha_fragment:cp,project_vertex:lp,dithering_fragment:hp,dithering_pars_fragment:dp,roughnessmap_fragment:up,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:_p,skinbase_vertex:xp,skinning_pars_vertex:vp,skinning_vertex:Mp,skinnormal_vertex:bp,specularmap_fragment:Sp,specularmap_pars_fragment:yp,tonemapping_fragment:wp,tonemapping_pars_fragment:Ep,transmission_fragment:Tp,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Lp,worldpos_vertex:Pp,background_vert:Ip,background_frag:Dp,backgroundCube_vert:Up,backgroundCube_frag:Np,cube_vert:Fp,cube_frag:kp,depth_vert:Op,depth_frag:Bp,distance_vert:zp,distance_frag:Hp,equirect_vert:Gp,equirect_frag:Vp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:$p,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:Kp,meshmatcap_vert:Zp,meshmatcap_frag:Jp,meshnormal_vert:Qp,meshnormal_frag:jp,meshphong_vert:tm,meshphong_frag:em,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:sm,meshtoon_frag:am,points_vert:rm,points_frag:om,shadow_vert:cm,shadow_frag:lm,sprite_vert:hm,sprite_frag:dm},ht={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},bn={basic:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ge([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ge([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ge([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ge([ht.points,ht.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ge([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ge([ht.common,ht.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ge([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ge([ht.sprite,ht.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Ge([ht.common,ht.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Ge([ht.lights,ht.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};bn.physical={uniforms:Ge([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const ta={r:0,b:0,g:0},um=new It,rh=new Ut;rh.set(-1,0,0,0,1,0,0,0,1);function fm(i,t,e,n,s,a){const r=new Xt(0);let o=s===!0?0:1,c,l,h=null,u=0,d=null;function m(E){let L=E.isScene===!0?E.background:null;if(L&&L.isTexture){const M=E.backgroundBlurriness>0;L=t.get(L,M)}return L}function g(E){let L=!1;const M=m(E);M===null?p(r,o):M&&M.isColor&&(p(M,1),L=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(E,L){const M=m(L);M&&(M.isCubeTexture||M.mapping===Ta)?(l===void 0&&(l=new Pt(new Gn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Yi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rh),l.material.toneMapped=$t.getTransfer(M.colorSpace)!==ne,(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Pt(new pi(2,2),new Rn({name:"BackgroundMaterial",uniforms:Yi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=$t.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,L){E.getRGB(ta,nh(i)),e.buffers.color.setClear(ta.r,ta.g,ta.b,L,a)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(E,L=1){r.set(E),o=L,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(r,o)},render:g,addToRenderList:w,dispose:f}}function pm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,r=!1;function o(P,I,F,C,O){let $=!1;const V=u(P,C,F,I);a!==V&&(a=V,l(a.object)),$=m(P,C,F,O),$&&g(P,C,F,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,M(P,I,F,C),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,I,F,C){const O=C.wireframe===!0;let $=n[I.id];$===void 0&&($={},n[I.id]=$);const V=P.isInstancedMesh===!0?P.id:0;let nt=$[V];nt===void 0&&(nt={},$[V]=nt);let q=nt[F.id];q===void 0&&(q={},nt[F.id]=q);let j=q[O];return j===void 0&&(j=d(c()),q[O]=j),j}function d(P){const I=[],F=[],C=[];for(let O=0;O<e;O++)I[O]=0,F[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:C,object:P,attributes:{},index:null}}function m(P,I,F,C){const O=a.attributes,$=I.attributes;let V=0;const nt=F.getAttributes();for(const q in nt)if(nt[q].location>=0){const et=O[q];let Rt=$[q];if(Rt===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Rt=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Rt=P.instanceColor)),et===void 0||et.attribute!==Rt||Rt&&et.data!==Rt.data)return!0;V++}return a.attributesNum!==V||a.index!==C}function g(P,I,F,C){const O={},$=I.attributes;let V=0;const nt=F.getAttributes();for(const q in nt)if(nt[q].location>=0){let et=$[q];et===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));const Rt={};Rt.attribute=et,et&&et.data&&(Rt.data=et.data),O[q]=Rt,V++}a.attributes=O,a.attributesNum=V,a.index=C}function w(){const P=a.newAttributes;for(let I=0,F=P.length;I<F;I++)P[I]=0}function p(P){f(P,0)}function f(P,I){const F=a.newAttributes,C=a.enabledAttributes,O=a.attributeDivisors;F[P]=1,C[P]===0&&(i.enableVertexAttribArray(P),C[P]=1),O[P]!==I&&(i.vertexAttribDivisor(P,I),O[P]=I)}function E(){const P=a.newAttributes,I=a.enabledAttributes;for(let F=0,C=I.length;F<C;F++)I[F]!==P[F]&&(i.disableVertexAttribArray(F),I[F]=0)}function L(P,I,F,C,O,$,V){V===!0?i.vertexAttribIPointer(P,I,F,O,$):i.vertexAttribPointer(P,I,F,C,O,$)}function M(P,I,F,C){w();const O=C.attributes,$=F.getAttributes(),V=I.defaultAttributeValues;for(const nt in $){const q=$[nt];if(q.location>=0){let j=O[nt];if(j===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const et=j.normalized,Rt=j.itemSize,Et=t.get(j);if(Et===void 0)continue;const oe=Et.buffer,qt=Et.type,Jt=Et.bytesPerElement,Y=qt===i.INT||qt===i.UNSIGNED_INT||j.gpuType===go;if(j.isInterleavedBufferAttribute){const Q=j.data,_t=Q.stride,Dt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let mt=0;mt<q.locationSize;mt++)f(q.location+mt,Q.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let mt=0;mt<q.locationSize;mt++)p(q.location+mt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let mt=0;mt<q.locationSize;mt++)L(q.location+mt,Rt/q.locationSize,qt,et,_t*Jt,(Dt+Rt/q.locationSize*mt)*Jt,Y)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)f(q.location+Q,j.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<q.locationSize;Q++)p(q.location+Q);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Q=0;Q<q.locationSize;Q++)L(q.location+Q,Rt/q.locationSize,qt,et,Rt*Jt,Rt/q.locationSize*Q*Jt,Y)}}else if(V!==void 0){const et=V[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(q.location,et);break;case 3:i.vertexAttrib3fv(q.location,et);break;case 4:i.vertexAttrib4fv(q.location,et);break;default:i.vertexAttrib1fv(q.location,et)}}}}E()}function v(){y();for(const P in n){const I=n[P];for(const F in I){const C=I[F];for(const O in C){const $=C[O];for(const V in $)h($[V].object),delete $[V];delete C[O]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const F in I){const C=I[F];for(const O in C){const $=C[O];for(const V in $)h($[V].object),delete $[V];delete C[O]}}delete n[P.id]}function T(P){for(const I in n){const F=n[I];for(const C in F){const O=F[C];if(O[P.id]===void 0)continue;const $=O[P.id];for(const V in $)h($[V].object),delete $[V];delete O[P.id]}}}function x(P){for(const I in n){const F=n[I],C=P.isInstancedMesh===!0?P.id:0,O=F[C];if(O!==void 0){for(const $ in O){const V=O[$];for(const nt in V)h(V[nt].object),delete V[nt];delete O[$]}delete F[C],Object.keys(F).length===0&&delete n[I]}}}function y(){R(),r=!0,a!==s&&(a=s,l(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:w,enableAttribute:p,disableUnusedAttributes:E}}function mm(i,t,e){let n;function s(c){n=c}function a(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function r(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let m=0;m<h;m++)d+=l[m];e.update(d,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function gm(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==rn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const x=T===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==tn&&T!==an&&!x&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Lt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:w,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:L,maxFragmentUniforms:M,maxSamples:v,samples:S}}function _m(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new Jn,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,w=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||a&&!p)a?h(null):l();else{const E=a?0:n,L=E*4;let M=f.clippingState||null;c.value=M,M=h(g,d,L,m);for(let v=0;v!==L;++v)M[v]=e[v];f.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const w=u!==null?u.length:0;let p=null;if(w!==0){if(p=c.value,g!==!0||p===null){const f=m+w*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let L=0,M=m;L!==w;++L,M+=4)r.copy(u[L]).applyMatrix4(E,o),r.normal.toArray(p,M),p[M+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,p}}const zi=4,xm=6,vm=20,Mm=256,cs=new Uo,Vc=new Xt;let or=null,cr=0,lr=0,hr=!1;const bm=new k,ri=new k;class Wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,a={}){const{size:r=256,position:o=bm}=a;or=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(or,cr,lr),this._renderer.xr.enabled=hr,t.scissorTest=!1,Ui(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),or=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Tn,format:rn,colorSpace:Ma,depthBuffer:!1},s=Xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sm(a)),this._blurMaterial=wm(a,t,e),this._ggxMaterial=ym(a,t,e)}return s}_compileMaterial(t){const e=new Pt(new Be,t);this._renderer.compile(e,cs)}_sceneToCubeUV(t,e,n,s,a){const c=new $e(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Vc),u.toneMapping=wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Gn,new ws({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,p=w.material;let f=!1;const E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,f=!0):(p.color.copy(Vc),f=!0);for(let L=0;L<6;L++){const M=L%3;M===0?(c.up.set(0,l[L],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+h[L],a.y,a.z)):M===1?(c.up.set(0,0,l[L]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+h[L],a.z)):(c.up.set(0,l[L],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+h[L]));const v=this._cubeSize;Ui(s,M*v,L>2?v:0,v,v),u.setRenderTarget(s),f&&u.render(w,c),u.render(t,c)}u.toneMapping=m,u.autoClear=d,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ui||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;Ui(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,cs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,m=u*d,{_lodMax:g}=this,w=this._sizeLods[n],p=3*w*(n>g-zi?n-g+zi:0),f=4*(this._cubeSize-w);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=g-e,Ui(a,p,f,3*w,2*w),s.setRenderTarget(a),s.render(o,cs),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=g-n,Ui(t,p,f,3*w,2*w),s.setRenderTarget(t),s.render(o,cs)}_blur(t,e,n,s){const a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,e,n,r),this._blurPass(a,t,n,n,r)}_blurPass(t,e,n,s,a){const r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],u=3*h*(s>this._lodMax-zi?s-this._lodMax+zi:0),d=4*(this._cubeSize-h);Ui(e,u,d,3*h,2*h),r.setRenderTarget(e),r.render(c,cs)}}function Sm(i){const t=[],e=[];let n=i;const s=i-zi+1+xm;for(let a=0;a<s;a++){const r=Math.pow(2,n);t.push(r);const o=1/(r-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,m=3,g=new Float32Array(m*d*u),w=new Float32Array(m*d*u);for(let f=0;f<u;f++){const E=f%3*2/3-1,L=f>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];g.set(M,m*d*f);for(let v=0;v<d;v++){const S=h[v*2]*2-1,T=h[v*2+1]*2-1;f===0?ri.set(1,T,S):f===1?ri.set(-S,1,-T):f===2?ri.set(-S,T,1):f===3?ri.set(-1,T,-S):f===4?ri.set(-S,-1,T):ri.set(S,T,-1),ri.toArray(w,(f*d+v)*m)}}const p=new Be;p.setAttribute("position",new we(g,m)),p.setAttribute("outputDirection",new we(w,m)),e.push(new Pt(p,null)),n>zi&&n--}return{lodMeshes:e,sizeLods:t}}function Xc(i,t,e){const n=new fn(i,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ym(i,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function wm(i,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:vm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function $c(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function qc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class oh extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),a=new Rn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Bn});a.uniforms.tEquirect.value=e;const r=new Pt(s,a),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=ke),new Au(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}function Em(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?r(d):a(d)}function a(d){if(d&&d.isTexture){const m=d.mapping;if(m===Ua||m===Na)if(t.has(d)){const g=t.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const w=new oh(g.height);return w.fromEquirectangularTexture(i,d),t.set(d,w),d.addEventListener("dispose",l),o(w.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const m=d.mapping,g=m===Ua||m===Na,w=m===ui||m===$i;if(g||w){let p=e.get(d);const f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Wc(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const E=d.image;return g&&E&&E.height>0||w&&E&&c(E)?(n===null&&(n=new Wc(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,m){return m===Ua?d.mapping=ui:m===Na&&(d.mapping=$i),d}function c(d){let m=0;const g=6;for(let w=0;w<g;w++)d[w]!==void 0&&m++;return m===g}function l(d){const m=d.target;m.removeEventListener("dispose",l);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Tm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Gi("WebGLRenderer: "+n+" extension not supported."),s}}}function Am(i,t,e,n){const s={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];const m=a.get(d);m&&(t.remove(m),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER)}function l(u){const d=[],m=u.index,g=u.attributes.position;let w=0;if(g===void 0)return;if(m!==null){const E=m.array;w=m.version;for(let L=0,M=E.length;L<M;L+=3){const v=E[L+0],S=E[L+1],T=E[L+2];d.push(v,S,S,T,T,v)}}else{const E=g.array;w=g.version;for(let L=0,M=E.length/3-1;L<M;L+=3){const v=L+0,S=L+1,T=L+2;d.push(v,S,S,T,T,v)}}const p=new(g.count>=65535?Zl:Kl)(d,1);p.version=w;const f=a.get(u);f&&t.remove(f),a.set(u,p)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Rm(i,t,e){let n;function s(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function c(u,d){i.drawElements(n,d,a,u*r),e.update(d,n,1)}function l(u,d,m){m!==0&&(i.drawElementsInstanced(n,d,a,u*r,m),e.update(d,n,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,u,0,m);let w=0;for(let p=0;p<m;p++)w+=d[p];e.update(w,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Cm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:Zt("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,t,e){const n=new WeakMap,s=new se;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var m=R;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],L=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),w===!0&&(M=2),p===!0&&(M=3);let v=o.attributes.position.count*M,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*S*4*u),x=new $l(T,v,S,u);x.type=an,x.needsUpdate=!0;const y=M*4;for(let P=0;P<u;P++){const I=f[P],F=E[P],C=L[P],O=v*S*4*P;for(let $=0;$<I.count;$++){const V=$*y;g===!0&&(s.fromBufferAttribute(I,$),T[O+V+0]=s.x,T[O+V+1]=s.y,T[O+V+2]=s.z,T[O+V+3]=0),w===!0&&(s.fromBufferAttribute(F,$),T[O+V+4]=s.x,T[O+V+5]=s.y,T[O+V+6]=s.z,T[O+V+7]=0),p===!0&&(s.fromBufferAttribute(C,$),T[O+V+8]=s.x,T[O+V+9]=s.y,T[O+V+10]=s.z,T[O+V+11]=C.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new zt(v,S)},n.set(o,d),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const w=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",w),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Pm(i,t,e,n,s){let a=new WeakMap;function r(l){const h=s.render.frame,u=l.geometry,d=t.get(l,u);if(a.get(d)!==h&&(t.update(d),a.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;a.get(m)!==h&&(m.update(),a.set(m,h))}return d}function o(){a=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const Im={[Il]:"LINEAR_TONE_MAPPING",[Dl]:"REINHARD_TONE_MAPPING",[Ul]:"CINEON_TONE_MAPPING",[mo]:"ACES_FILMIC_TONE_MAPPING",[Fl]:"AGX_TONE_MAPPING",[kl]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function Dm(i,t,e,n,s,a){const r=new fn(t,e,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Be;l.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fe([0,2,0,0,2,0],2));const h=new vu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Pt(l,h),d=new Uo(-1,1,1,-1,0,1);let m=null,g=null,w=!1,p,f=null,E=[],L=!1;this.setSize=function(M,v){r.setSize(M,v),o!==null&&o.setSize(M,v),c!==null&&c.setSize(M,v);for(let S=0;S<E.length;S++){const T=E[S];T.setSize&&T.setSize(M,v)}},this.setEffects=function(M){E=M,L=E.length>0&&E[0].isRenderPass===!0;const v=r.width,S=r.height;E.length>0&&o===null&&(o=new fn(v,S,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new fn(v,S,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<E.length;T++){const x=E[T];x.setSize&&x.setSize(v,S)}},this.begin=function(M,v){if(w||M.toneMapping===wn&&E.length===0)return!1;if(f=v,v!==null){const S=v.width,T=v.height;(r.width!==S||r.height!==T)&&this.setSize(S,T)}return L===!1&&M.setRenderTarget(r),p=M.toneMapping,M.toneMapping=wn,!0},this.hasRenderPass=function(){return L},this.end=function(M,v){M.toneMapping=p,w=!0;let S=r,T=o;for(let x=0;x<E.length;x++){const y=E[x];y.enabled!==!1&&(y.render(M,T,S,v),y.needsSwap!==!1&&(S=T,T=T===o?c:o))}if(m!==M.outputColorSpace||g!==M.toneMapping){m=M.outputColorSpace,g=M.toneMapping,h.defines={},$t.getTransfer(m)===ne&&(h.defines.SRGB_TRANSFER="");const x=Im[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(f),M.render(u,d),f=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const ch=new Oe,oo=new Es(1,1),lh=new $l,hh=new $d,dh=new jl,Yc=[],Kc=[],Zc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Yc[s];if(a===void 0&&(a=new Float32Array(s),Yc[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ca(i,t){let e=Kc[t];e===void 0&&(e=new Int32Array(t),Kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Qc.set(n),i.uniformMatrix2fv(this.addr,!1,Qc),Te(e,n)}}function Bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),Te(e,n)}}function zm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),Te(e,n)}}function Hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(oo.compareFunction=e.isReversedDepthBuffer()?wo:yo,a=oo):a=ch,e.setTexture2D(t||a,s)}function Zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hh,s)}function Jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||dh,s)}function Qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lh,s)}function jm(i){switch(i){case 5126:return Um;case 35664:return Nm;case 35665:return Fm;case 35666:return km;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return $m;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}function t0(i,t){i.uniform1fv(this.addr,t)}function e0(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function n0(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function i0(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function s0(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function a0(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r0(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function o0(i,t){i.uniform1iv(this.addr,t)}function c0(i,t){i.uniform2iv(this.addr,t)}function l0(i,t){i.uniform3iv(this.addr,t)}function h0(i,t){i.uniform4iv(this.addr,t)}function d0(i,t){i.uniform1uiv(this.addr,t)}function u0(i,t){i.uniform2uiv(this.addr,t)}function f0(i,t){i.uniform3uiv(this.addr,t)}function p0(i,t){i.uniform4uiv(this.addr,t)}function m0(i,t,e){const n=this.cache,s=t.length,a=Ca(e,s);Ee(n,a)||(i.uniform1iv(this.addr,a),Te(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=oo:r=ch;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r,a[o])}function g0(i,t,e){const n=this.cache,s=t.length,a=Ca(e,s);Ee(n,a)||(i.uniform1iv(this.addr,a),Te(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||hh,a[r])}function _0(i,t,e){const n=this.cache,s=t.length,a=Ca(e,s);Ee(n,a)||(i.uniform1iv(this.addr,a),Te(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||dh,a[r])}function x0(i,t,e){const n=this.cache,s=t.length,a=Ca(e,s);Ee(n,a)||(i.uniform1iv(this.addr,a),Te(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||lh,a[r])}function v0(i){switch(i){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return a0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return c0;case 35668:case 35672:return l0;case 35669:case 35673:return h0;case 5125:return d0;case 36294:return u0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}class M0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}}class b0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v0(e.type)}}class S0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function jc(i,t){i.seq.push(t),i.map[t.id]=t}function y0(i,t,e){const n=i.name,s=n.length;for(dr.lastIndex=0;;){const a=dr.exec(n),r=dr.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){jc(e,l===void 0?new M0(o,i,t):new b0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new S0(o),jc(e,u)),e=u}}}class _a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),c=t.getUniformLocation(e,o.name);y0(o,c,this)}const s=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function tl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const w0=37297;let E0=0;function T0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const el=new Ut;function A0(i){$t._getMatrix(el,$t.workingColorSpace,i);const t=`mat3( ${el.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case ba:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=(i.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+T0(i.getShaderSource(t),o)}else return a}function R0(i,t){const e=A0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const C0={[Il]:"Linear",[Dl]:"Reinhard",[Ul]:"Cineon",[mo]:"ACESFilmic",[Fl]:"AgX",[kl]:"Neutral",[Nl]:"Custom"};function L0(i,t){const e=C0[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new k;function P0(){$t.getLuminanceCoefficients(ea);const i=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function D0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function ps(i){return i!==""}function il(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(N0,k0)}const F0=new Map;function k0(i,t){let e=kt[t];if(e===void 0){const n=F0.get(t);if(n!==void 0)e=kt[n],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return co(e)}const O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(i){return i.replace(O0,B0)}function B0(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function rl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const z0={[ua]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function H0(i){return z0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const G0={[ui]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE_UV"};function V0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":G0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const W0={[$i]:"ENVMAP_MODE_REFRACTION"};function X0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":W0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $0={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[od]:"ENVMAP_BLENDING_MIX",[cd]:"ENVMAP_BLENDING_ADD"};function q0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$0[i.combine]||"ENVMAP_BLENDING_NONE"}function Y0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function K0(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=H0(e),l=V0(e),h=X0(e),u=q0(e),d=Y0(e),m=I0(e),g=D0(a),w=s.createProgram();let p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),f.length>0&&(f+=`
`)):(p=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),f=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?kt.tonemapping_pars_fragment:"",e.toneMapping!==wn?L0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),P0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),r=co(r),r=il(r,e),r=sl(r,e),o=co(o),o=il(o,e),o=sl(o,e),r=al(r),o=al(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const L=E+p+r,M=E+f+o,v=tl(s,s.VERTEX_SHADER,L),S=tl(s,s.FRAGMENT_SHADER,M);s.attachShader(w,v),s.attachShader(w,S),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function T(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(w)||"",F=s.getShaderInfoLog(v)||"",C=s.getShaderInfoLog(S)||"",O=I.trim(),$=F.trim(),V=C.trim();let nt=!0,q=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,v,S);else{const j=nl(s,v,"vertex"),et=nl(s,S,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+j+`
`+et)}else O!==""?Lt("WebGLProgram: Program Info Log:",O):($===""||V==="")&&(q=!1);q&&(P.diagnostics={runnable:nt,programLog:O,vertexShader:{log:$,prefix:p},fragmentShader:{log:V,prefix:f}})}s.deleteShader(v),s.deleteShader(S),x=new _a(s,w),y=U0(s,w)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(w,w0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E0++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=v,this.fragmentShader=S,this}let Z0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Q0(t),e.set(t,n)),n}}class Q0{constructor(t){this.id=Z0++,this.code=t,this.usedTimes=0}}function j0(i){return i===fi||i===xa||i===va}function tg(i,t,e,n,s,a){const r=new ql,o=new J0,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function w(x,y,R,P,I,F){const C=P.fog,O=I.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||$,V),q=nt&&nt.mapping===Ta?nt.image.height:null,j=m[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Lt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Rt=et!==void 0?et.length:0;let Et=0;O.morphAttributes.position!==void 0&&(Et=1),O.morphAttributes.normal!==void 0&&(Et=2),O.morphAttributes.color!==void 0&&(Et=3);let oe,qt,Jt,Y;if(j){const le=bn[j];oe=le.vertexShader,qt=le.fragmentShader}else{oe=x.vertexShader,qt=x.fragmentShader;const le=o.getVertexShaderStage(x),Qt=o.getFragmentShaderStage(x);o.update(x,le,Qt),Jt=le.id,Y=Qt.id}const Q=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Dt=I.isInstancedMesh===!0,mt=I.isBatchedMesh===!0,Ot=!!x.map,Se=!!x.matcap,Ht=!!nt,Kt=!!x.aoMap,ce=!!x.lightMap,Vt=!!x.bumpMap&&x.wireframe===!1,ue=!!x.normalMap,Ae=!!x.displacementMap,We=!!x.emissiveMap,pe=!!x.metalnessMap,xe=!!x.roughnessMap,N=x.anisotropy>0,Ie=x.clearcoat>0,te=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,B=x.sheen>0,G=x.transmission>0,X=N&&!!x.anisotropyMap,it=Ie&&!!x.clearcoatMap,st=Ie&&!!x.clearcoatNormalMap,K=Ie&&!!x.clearcoatRoughnessMap,J=_&&!!x.iridescenceMap,at=_&&!!x.iridescenceThicknessMap,yt=B&&!!x.sheenColorMap,lt=B&&!!x.sheenRoughnessMap,rt=!!x.specularMap,wt=!!x.specularColorMap,Ct=!!x.specularIntensityMap,Nt=G&&!!x.transmissionMap,U=G&&!!x.thicknessMap,ot=!!x.gradientMap,Z=!!x.alphaMap,ct=x.alphaTest>0,ft=!!x.alphaHash,tt=!!x.extensions;let Tt=wn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const bt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:qt,defines:x.defines,customVertexShaderID:Jt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:mt,batchingColor:mt&&I._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&I.instanceColor!==null,instancingMorph:Dt&&I.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:Se,envMap:Ht,envMapMode:Ht&&nt.mapping,envMapCubeUVHeight:q,aoMap:Kt,lightMap:ce,bumpMap:Vt,normalMap:ue,displacementMap:Ae,emissiveMap:We,normalMapObjectSpace:ue&&x.normalMapType===ud,normalMapTangentSpace:ue&&x.normalMapType===ro,packedNormalMap:ue&&x.normalMapType===ro&&j0(x.normalMap.format),metalnessMap:pe,roughnessMap:xe,anisotropy:N,anisotropyMap:X,clearcoat:Ie,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:K,dispersion:te,retroreflection:A,iridescence:_,iridescenceMap:J,iridescenceThicknessMap:at,sheen:B,sheenColorMap:yt,sheenRoughnessMap:lt,specularMap:rt,specularColorMap:wt,specularIntensityMap:Ct,transmission:G,transmissionMap:Nt,thicknessMap:U,gradientMap:ot,opaque:x.transparent===!1&&x.blending===gs&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:ft,combine:x.combine,mapUv:Ot&&g(x.map.channel),aoMapUv:Kt&&g(x.aoMap.channel),lightMapUv:ce&&g(x.lightMap.channel),bumpMapUv:Vt&&g(x.bumpMap.channel),normalMapUv:ue&&g(x.normalMap.channel),displacementMapUv:Ae&&g(x.displacementMap.channel),emissiveMapUv:We&&g(x.emissiveMap.channel),metalnessMapUv:pe&&g(x.metalnessMap.channel),roughnessMapUv:xe&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:it&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:lt&&g(x.sheenRoughnessMap.channel),specularMapUv:rt&&g(x.specularMap.channel),specularColorMapUv:wt&&g(x.specularColorMap.channel),specularIntensityMapUv:Ct&&g(x.specularIntensityMap.channel),transmissionMapUv:Nt&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:Z&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ue||N),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Ot||Z),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Et,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===ne,decodeVideoTextureEmissive:We&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fn,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(f(y,x),E(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function f(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){r.disableAll(),y.instancing&&r.enable(0),y.instancingColor&&r.enable(1),y.instancingMorph&&r.enable(2),y.matcap&&r.enable(3),y.envMap&&r.enable(4),y.normalMapObjectSpace&&r.enable(5),y.normalMapTangentSpace&&r.enable(6),y.clearcoat&&r.enable(7),y.iridescence&&r.enable(8),y.alphaTest&&r.enable(9),y.vertexColors&&r.enable(10),y.vertexAlphas&&r.enable(11),y.vertexUv1s&&r.enable(12),y.vertexUv2s&&r.enable(13),y.vertexUv3s&&r.enable(14),y.vertexTangents&&r.enable(15),y.anisotropy&&r.enable(16),y.alphaHash&&r.enable(17),y.batching&&r.enable(18),y.dispersion&&r.enable(19),y.retroreflection&&r.enable(24),y.batchingColor&&r.enable(20),y.gradientMap&&r.enable(21),y.packedNormalMap&&r.enable(22),y.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),y.numLightProbeGrids>0&&r.enable(22),y.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function L(x){const y=m[x.type];let R;if(y){const P=bn[y];R=gu.clone(P.uniforms)}else R=x.uniforms;return R}function M(x,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new K0(i,y,x,s),l.push(R),h.set(y,R)),R}function v(x){if(--x.usedTimes===0){const y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function T(){o.dispose()}return{getParameters:w,getProgramCacheKey:p,getUniforms:L,acquireProgram:M,releaseProgram:v,releaseShaderCache:S,programs:l,dispose:T}}function eg(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function ng(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ol(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cl(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,g,w,p,f){let E=i[t];return E===void 0?(E={id:d.id,object:d,geometry:m,material:g,materialVariant:r(d),groupOrder:w,renderOrder:d.renderOrder,z:p,group:f},i[t]=E):(E.id=d.id,E.object=d,E.geometry=m,E.material=g,E.materialVariant=r(d),E.groupOrder=w,E.renderOrder=d.renderOrder,E.z=p,E.group=f),t++,E}function c(d,m,g,w,p,f,E){E.reversedDepth===!0&&(p=-p);const L=o(d,m,g,w,p,f);g.transmission>0?n.push(L):g.transparent===!0?s.push(L):e.push(L)}function l(d,m,g,w,p,f){const E=o(d,m,g,w,p,f);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(d,m){e.length>1&&e.sort(d||ng),n.length>1&&n.sort(m||ol),s.length>1&&s.sort(m||ol)}function u(){for(let d=t,m=i.length;d<m;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:c,unshift:l,finish:u,sort:h}}function ig(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new cl,i.set(n,[r])):s>=a.length?(r=new cl,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function sg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Xt};break;case"SpotLight":e={position:new k,direction:new k,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rg=0;function og(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cg(i){const t=new sg,e=ag(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const s=new k,a=new It,r=new It;function o(l){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let m=0,g=0,w=0,p=0,f=0,E=0,L=0,M=0,v=0,S=0,T=0,x=0,y=0,R=0;l.sort(og);for(let I=0,F=l.length;I<F;I++){const C=l[I],O=C.color,$=C.intensity,V=C.distance;let nt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===fi?nt=C.shadow.map.texture:nt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=O.r*$,u+=O.g*$,d+=O.b*$;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],$);R++}else if(C.isSunLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,et=e.get(C);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=nt;const Rt=j.getViewportCount();for(let Et=0;Et<Rt;Et++)n.sunShadowMatrix[w+Et]=j.getMatrix(Et),n.sunShadowCascade[w+Et]=j._cascadeData[Et];w+=Rt,g++}n.sun[m]=q,m++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,et=e.get(C);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=C.shadow.matrix,v++}n.directional[p]=q,p++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(O).multiplyScalar($),q.distance=V,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[E]=q;const j=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,j.updateMatrices(C),C.castShadow&&y++),n.spotLightMatrix[E]=j.matrix,C.castShadow){const et=e.get(C);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.spotShadow[E]=et,n.spotShadowMap[E]=nt,T++}E++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(O).multiplyScalar($),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[L]=q,L++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const j=C.shadow,et=e.get(C);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,n.pointShadow[f]=et,n.pointShadowMap[f]=nt,n.pointShadowMatrix[f]=C.shadow.matrix,S++}n.point[f]=q,f++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar($),q.groundColor.copy(C.groundColor).multiplyScalar($),n.hemi[M]=q,M++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.sunLength!==m||P.directionalLength!==p||P.pointLength!==f||P.spotLength!==E||P.rectAreaLength!==L||P.hemiLength!==M||P.numSunShadows!==g||P.numDirectionalShadows!==v||P.numPointShadows!==S||P.numSpotShadows!==T||P.numSpotMaps!==x||P.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=p,n.spot.length=E,n.rectArea.length=L,n.point.length=f,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,P.sunLength=m,P.directionalLength=p,P.pointLength=f,P.spotLength=E,P.rectAreaLength=L,P.hemiLength=M,P.numSunShadows=g,P.numDirectionalShadows=v,P.numPointShadows=S,P.numSpotShadows=T,P.numSpotMaps=x,P.numLightProbes=R,n.version=rg++)}function c(l,h){let u=0,d=0,m=0,g=0,w=0,p=0;const f=h.matrixWorldInverse;for(let E=0,L=l.length;E<L;E++){const M=l[E];if(M.isSunLight){const v=n.sun[u];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(f),u++}else if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),d++}else if(M.isSpotLight){const v=n.spot[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const v=n.rectArea[w];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),r.identity(),a.copy(M.matrixWorld),a.premultiply(f),r.extractRotation(a),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),w++}else if(M.isPointLight){const v=n.point[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const v=n.hemi[p];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(f),p++}}}return{setup:o,setupView:c,state:n}}function ll(i){const t=new cg(i),e=[],n=[],s=[];function a(d){u.camera=d,e.length=0,n.length=0,s.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function lg(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new ll(i),t.set(s,[o])):a>=r.length?(o=new ll(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`,ug=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],fg=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],hl=new It,ls=new k,ur=new k;function pg(i,t,e){let n=new Lo;const s=new zt,a=new zt,r=new se,o=new Mu,c=new bu,l={},h=e.maxTextureSize,u={[di]:Ye,[Ye]:di,[Fn]:Fn},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:hg,fragmentShader:dg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Pt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua;let f=this.type;this.render=function(S,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Gh&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ua);const y=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Bn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=f!==this.type;F&&T.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=S.length;C<O;C++){const $=S[C],V=$.shadow;if(V===void 0){Lt("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const nt=V.getFrameExtents();s.multiply(nt),a.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/nt.x),s.x=a.x*nt.x,V.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/nt.y),s.y=a.y*nt.y,V.mapSize.y=a.y));const q=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||F===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===fs){if($.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new fn(s.x,s.y,{format:fi,type:Tn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new Es(s.x,s.y,an),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=Hn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Le,V.map.depthTexture.magFilter=Le}else $.isPointLight?(V.map=new oh(s.x),V.map.depthTexture=new pu(s.x,En)):(V.map=new fn(s.x,s.y),V.map.depthTexture=new Es(s.x,s.y,En)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=Hn,this.type===ua?(V.map.depthTexture.compareFunction=q?wo:yo,V.map.depthTexture.minFilter=ke,V.map.depthTexture.magFilter=ke):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Le,V.map.depthTexture.magFilter=Le);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,x);for(let et=0;et<j;et++){const Rt=V.getCamera(et);if($.isPointLight){const Et=V.camera,oe=V.matrix,qt=$.distance||Et.far;qt!==Et.far&&(Et.far=qt,Et.updateProjectionMatrix()),ls.setFromMatrixPosition($.matrixWorld),Et.position.copy(ls),ur.copy(Et.position),ur.add(ug[et]),Et.up.copy(fg[et]),Et.lookAt(ur),Et.updateMatrixWorld(),oe.makeTranslation(-ls.x,-ls.y,-ls.z),hl.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),V._frustum.setFromProjectionMatrix(hl,Et.coordinateSystem,Et.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,et),i.clear();else{et===0&&(i.setRenderTarget(V.map),i.clear());const Et=V.getViewport(et);r.set(a.x*Et.x,a.y*Et.y,a.x*Et.z,a.y*Et.w),I.viewport(r)}n=V.getFrustum(et),M(T,x,Rt,$,this.type)}V.isPointLightShadow!==!0&&this.type===fs&&E(V,x),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(y,R,P)};function E(S,T){const x=t.update(w);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new fn(s.x,s.y,{format:fi,type:Tn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,x,d,w,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,x,m,w,null)}function L(S,T,x,y){let R=null;const P=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=R.uuid,F=T.uuid;let C=l[I];C===void 0&&(C={},l[I]=C);let O=C[F];O===void 0&&(O=R.clone(),C[F]=O,T.addEventListener("dispose",v)),R=O}if(R.visible=T.visible,R.wireframe=T.wireframe,y===fs?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=i.properties.get(R);I.light=x}return R}function M(S,T,x,y,R){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===fs)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);const F=t.update(S),C=S.material;if(Array.isArray(C)){const O=F.groups;for(let $=0,V=O.length;$<V;$++){const nt=O[$],q=C[nt.materialIndex];if(q&&q.visible){const j=L(S,q,y,R);S.onBeforeShadow(i,S,T,x,F,j,nt),i.renderBufferDirect(x,null,F,j,S,nt),S.onAfterShadow(i,S,T,x,F,j,nt)}}}else if(C.visible){const O=L(S,C,y,R);S.onBeforeShadow(i,S,T,x,F,O,null),i.renderBufferDirect(x,null,F,O,S,null),S.onAfterShadow(i,S,T,x,F,O,null)}}const I=S.children;for(let F=0,C=I.length;F<C;F++)M(I[F],T,x,y,R)}function v(S){S.target.removeEventListener("dispose",v);for(const x in l){const y=l[x],R=S.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}function mg(i,t){function e(){let U=!1;const ot=new se;let Z=null;const ct=new se(0,0,0,0);return{setMask:function(ft){Z!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),Z=ft)},setLocked:function(ft){U=ft},setClear:function(ft,tt,Tt,bt,le){le===!0&&(ft*=bt,tt*=bt,Tt*=bt),ot.set(ft,tt,Tt,bt),ct.equals(ot)===!1&&(i.clearColor(ft,tt,Tt,bt),ct.copy(ot))},reset:function(){U=!1,Z=null,ct.set(-1,0,0,0)}}}function n(){let U=!1,ot=!1,Z=null,ct=null,ft=null;return{setReversed:function(tt){if(ot!==tt){const Tt=t.get("EXT_clip_control");tt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ot=tt;const bt=ft;ft=null,this.setClear(bt)}},getReversed:function(){return ot},setTest:function(tt){tt?Q(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(tt){Z!==tt&&!U&&(i.depthMask(tt),Z=tt)},setFunc:function(tt){if(ot&&(tt=wd[tt]),ct!==tt){switch(tt){case br:i.depthFunc(i.NEVER);break;case Sr:i.depthFunc(i.ALWAYS);break;case yr:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case wr:i.depthFunc(i.EQUAL);break;case Er:i.depthFunc(i.GEQUAL);break;case Tr:i.depthFunc(i.GREATER);break;case Ar:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=tt}},setLocked:function(tt){U=tt},setClear:function(tt){ft!==tt&&(ft=tt,ot&&(tt=1-tt),i.clearDepth(tt))},reset:function(){U=!1,Z=null,ct=null,ft=null,ot=!1}}}function s(){let U=!1,ot=null,Z=null,ct=null,ft=null,tt=null,Tt=null,bt=null,le=null;return{setTest:function(Qt){U||(Qt?Q(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Qt){ot!==Qt&&!U&&(i.stencilMask(Qt),ot=Qt)},setFunc:function(Qt,cn,gn){(Z!==Qt||ct!==cn||ft!==gn)&&(i.stencilFunc(Qt,cn,gn),Z=Qt,ct=cn,ft=gn)},setOp:function(Qt,cn,gn){(tt!==Qt||Tt!==cn||bt!==gn)&&(i.stencilOp(Qt,cn,gn),tt=Qt,Tt=cn,bt=gn)},setLocked:function(Qt){U=Qt},setClear:function(Qt){le!==Qt&&(i.clearStencil(Qt),le=Qt)},reset:function(){U=!1,ot=null,Z=null,ct=null,ft=null,tt=null,Tt=null,bt=null,le=null}}}const a=new e,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d={},m=new WeakMap,g=[],w=null,p=!1,f=null,E=null,L=null,M=null,v=null,S=null,T=null,x=new Xt(0,0,0),y=0,R=!1,P=null,I=null,F=null,C=null,O=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,nt=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=nt>=2);let j=null,et={};const Rt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),oe=new se().fromArray(Rt),qt=new se().fromArray(Et);function Jt(U,ot,Z,ct){const ft=new Uint8Array(4),tt=i.createTexture();i.bindTexture(U,tt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<Z;Tt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return tt}const Y={};Y[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),r.setFunc(Ms),Vt(!1),ue(ic),Q(i.CULL_FACE),Kt(Bn);function Q(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function _t(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Dt(U,ot){return d[U]!==ot?(i.bindFramebuffer(U,ot),d[U]=ot,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ot),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function mt(U,ot){let Z=g,ct=!1;if(U){Z=m.get(ot),Z===void 0&&(Z=[],m.set(ot,Z));const ft=U.textures;if(Z.length!==ft.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Tt=ft.length;tt<Tt;tt++)Z[tt]=i.COLOR_ATTACHMENT0+tt;Z.length=ft.length,ct=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ct=!0);ct&&i.drawBuffers(Z)}function Ot(U){return w!==U?(i.useProgram(U),w=U,!0):!1}const Se={[Oi]:i.FUNC_ADD,[Wh]:i.FUNC_SUBTRACT,[Xh]:i.FUNC_REVERSE_SUBTRACT};Se[$h]=i.MIN,Se[qh]=i.MAX;const Ht={[Yh]:i.ZERO,[Kh]:i.ONE,[Zh]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[nd]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[Ll]:i.ONE_MINUS_SRC_ALPHA,[ed]:i.ONE_MINUS_DST_COLOR,[jh]:i.ONE_MINUS_DST_ALPHA,[id]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[ad]:i.CONSTANT_ALPHA,[rd]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(U,ot,Z,ct,ft,tt,Tt,bt,le,Qt){if(U===Bn){p===!0&&(_t(i.BLEND),p=!1);return}if(p===!1&&(Q(i.BLEND),p=!0),U!==Vh){if(U!==f||Qt!==R){if((E!==Oi||v!==Oi)&&(i.blendEquation(i.FUNC_ADD),E=Oi,v=Oi),Qt)switch(U){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",U);break}else switch(U){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ac:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",U);break}L=null,M=null,S=null,T=null,x.set(0,0,0),y=0,f=U,R=Qt}return}ft=ft||ot,tt=tt||Z,Tt=Tt||ct,(ot!==E||ft!==v)&&(i.blendEquationSeparate(Se[ot],Se[ft]),E=ot,v=ft),(Z!==L||ct!==M||tt!==S||Tt!==T)&&(i.blendFuncSeparate(Ht[Z],Ht[ct],Ht[tt],Ht[Tt]),L=Z,M=ct,S=tt,T=Tt),(bt.equals(x)===!1||le!==y)&&(i.blendColor(bt.r,bt.g,bt.b,le),x.copy(bt),y=le),f=U,R=!1}function ce(U,ot){U.side===Fn?_t(i.CULL_FACE):Q(i.CULL_FACE);let Z=U.side===Ye;ot&&(Z=!Z),Vt(Z),U.blending===gs&&U.transparent===!1?Kt(Bn):Kt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);const ct=U.stencilWrite;o.setTest(ct),ct&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),We(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(U){P!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),P=U)}function ue(U){U!==zh?(Q(i.CULL_FACE),U!==I&&(U===ic?i.cullFace(i.BACK):U===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),I=U}function Ae(U){U!==F&&(V&&i.lineWidth(U),F=U)}function We(U,ot,Z){U?(Q(i.POLYGON_OFFSET_FILL),(C!==ot||O!==Z)&&(C=ot,O=Z,r.getReversed()&&(ot=-ot),i.polygonOffset(ot,Z))):_t(i.POLYGON_OFFSET_FILL)}function pe(U){U?Q(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function xe(U){U===void 0&&(U=i.TEXTURE0+$-1),j!==U&&(i.activeTexture(U),j=U)}function N(U,ot,Z){Z===void 0&&(j===null?Z=i.TEXTURE0+$-1:Z=j);let ct=et[Z];ct===void 0&&(ct={type:void 0,texture:void 0},et[Z]=ct),(ct.type!==U||ct.texture!==ot)&&(j!==Z&&(i.activeTexture(Z),j=Z),i.bindTexture(U,ot||Y[U]),ct.type=U,ct.texture=ot)}function Ie(){const U=et[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(U){Zt("WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){Zt("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){Zt("WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){Zt("WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Zt("WebGLState:",U)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Zt("WebGLState:",U)}}function it(){try{i.texStorage2D(...arguments)}catch(U){Zt("WebGLState:",U)}}function st(){try{i.texStorage3D(...arguments)}catch(U){Zt("WebGLState:",U)}}function K(){try{i.texImage2D(...arguments)}catch(U){Zt("WebGLState:",U)}}function J(){try{i.texImage3D(...arguments)}catch(U){Zt("WebGLState:",U)}}function at(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function yt(U,ot){u[U]!==ot&&(i.pixelStorei(U,ot),u[U]=ot)}function lt(U){oe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),oe.copy(U))}function rt(U){qt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),qt.copy(U))}function wt(U,ot){let Z=l.get(ot);Z===void 0&&(Z=new WeakMap,l.set(ot,Z));let ct=Z.get(U);ct===void 0&&(ct=i.getUniformBlockIndex(ot,U.name),Z.set(U,ct))}function Ct(U,ot){const ct=l.get(ot).get(U);c.get(ot)!==ct&&(i.uniformBlockBinding(ot,ct,U.__bindingPointIndex),c.set(ot,ct))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,et={},d={},m=new WeakMap,g=[],w=null,p=!1,f=null,E=null,L=null,M=null,v=null,S=null,T=null,x=new Xt(0,0,0),y=0,R=!1,P=null,I=null,F=null,C=null,O=null,oe.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Q,disable:_t,bindFramebuffer:Dt,drawBuffers:mt,useProgram:Ot,setBlending:Kt,setMaterial:ce,setFlipSided:Vt,setCullFace:ue,setLineWidth:Ae,setPolygonOffset:We,setScissorTest:pe,activeTexture:xe,bindTexture:N,unbindTexture:Ie,compressedTexImage2D:te,compressedTexImage3D:A,texImage2D:K,texImage3D:J,pixelStorei:yt,getParameter:at,updateUBOMapping:wt,uniformBlockBinding:Ct,texStorage2D:it,texStorage3D:st,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:lt,viewport:rt,reset:Nt}}function gg(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,h=new WeakMap,u=new Set;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,_){return g?new OffscreenCanvas(A,_):Sa("canvas")}function p(A,_,B){let G=1;const X=te(A);if((X.width>B||X.height>B)&&(G=B/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const it=Math.floor(G*X.width),st=Math.floor(G*X.height);d===void 0&&(d=w(it,st));const K=_?w(it,st):d;return K.width=it,K.height=st,K.getContext("2d").drawImage(A,0,0,it,st),Lt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+it+"x"+st+")."),K}else return"data"in A&&Lt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function f(A){return A.generateMipmaps}function E(A){i.generateMipmap(A)}function L(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,_,B,G,X,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st;G&&(st=t.get("EXT_texture_norm16"),st||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&st&&(K=st.R16_EXT),B===i.SHORT&&st&&(K=st.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),_===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&st&&(K=st.RG16_EXT),B===i.SHORT&&st&&(K=st.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&st&&(K=st.RGB16_EXT),B===i.SHORT&&st&&(K=st.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){const J=it?ba:$t.getTransfer(X);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=J===ne?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&st&&(K=st.RGBA16_EXT),B===i.SHORT&&st&&(K=st.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(A,_){let B;return A?_===null||_===En||_===Ss?B=i.DEPTH24_STENCIL8:_===an?B=i.DEPTH32F_STENCIL8:_===bs&&(B=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===En||_===Ss?B=i.DEPTH_COMPONENT24:_===an?B=i.DEPTH_COMPONENT32F:_===bs&&(B=i.DEPTH_COMPONENT16),B}function S(A,_){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Le&&A.minFilter!==ke?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){const _=A.target;_.removeEventListener("dispose",T),y(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),P(_)}function y(A){const _=n.get(A);if(_.__webglInit===void 0)return;const B=A.source,G=m.get(B);if(G){const X=G[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(A),Object.keys(G).length===0&&m.delete(B)}n.remove(A)}function R(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const B=A.source,G=m.get(B);delete G[_.__cacheKey],r.memory.textures--}function P(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let X=0;X<_.__webglFramebuffer[G].length;X++)i.deleteFramebuffer(_.__webglFramebuffer[G][X]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=A.textures;for(let G=0,X=B.length;G<X;G++){const it=n.get(B[G]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),r.memory.textures--),n.remove(B[G])}n.remove(A)}let I=0;function F(){I=0}function C(){return I}function O(A){I=A}function $(){const A=I;return A>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function V(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function nt(A,_){const B=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const G=A.image;if(G===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(B,A,_);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function q(A,_){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_t(B,A,_);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function j(A,_){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_t(B,A,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function et(A,_){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Dt(B,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const Rt={[Rr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Cr]:i.MIRRORED_REPEAT},Et={[Le]:i.NEAREST,[hd]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},oe={[pd]:i.NEVER,[vd]:i.ALWAYS,[md]:i.LESS,[yo]:i.LEQUAL,[gd]:i.EQUAL,[wo]:i.GEQUAL,[_d]:i.GREATER,[xd]:i.NOTEQUAL};function qt(A,_){if(_.type===an&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ke||_.magFilter===Fa||_.magFilter===Is||_.magFilter===ci||_.minFilter===ke||_.minFilter===Fa||_.minFilter===Is||_.minFilter===ci)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Rt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Rt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Rt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Et[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Le||_.minFilter!==Is&&_.minFilter!==ci||_.type===an&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Jt(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",T));const G=_.source;let X=m.get(G);X===void 0&&(X={},m.set(G,X));const it=V(_);if(it!==A.__cacheKey){X[it]===void 0&&(X[it]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,B=!0),X[it].usedTimes++;const st=X[A.__cacheKey];st!==void 0&&(X[A.__cacheKey].usedTimes--,st.usedTimes===0&&R(_)),A.__cacheKey=it,A.__webglTexture=X[it].texture}return B}function Y(A,_,B){return Math.floor(Math.floor(A/B)/_)}function Q(A,_,B,G){const it=A.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,G,_.data);else{it.sort((yt,lt)=>yt.start-lt.start);let st=0;for(let yt=1;yt<it.length;yt++){const lt=it[st],rt=it[yt],wt=lt.start+lt.count,Ct=Y(rt.start,_.width,4),Nt=Y(lt.start,_.width,4);rt.start<=wt+1&&Ct===Nt&&Y(rt.start+rt.count-1,_.width,4)===Ct?lt.count=Math.max(lt.count,rt.start+rt.count-lt.start):(++st,it[st]=rt)}it.length=st+1;const K=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let yt=0,lt=it.length;yt<lt;yt++){const rt=it[yt],wt=Math.floor(rt.start/4),Ct=Math.ceil(rt.count/4),Nt=wt%_.width,U=Math.floor(wt/_.width),ot=Ct,Z=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Nt,U,ot,Z,B,G,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function _t(A,_,B){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);const X=Jt(A,_),it=_.source;e.bindTexture(G,A.__webglTexture,i.TEXTURE0+B);const st=n.get(it);if(it.version!==st.__version||X===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Z=$t.getPrimaries($t.workingColorSpace),ct=_.colorSpace===Qn?null:$t.getPrimaries(_.colorSpace),ft=_.colorSpace===Qn||Z===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let J=p(_.image,!1,s.maxTextureSize);J=Ie(_,J);const at=a.convert(_.format,_.colorSpace),yt=a.convert(_.type);let lt=M(_.internalFormat,at,yt,_.normalized,_.colorSpace,_.isVideoTexture);qt(G,_);let rt;const wt=_.mipmaps,Ct=_.isVideoTexture!==!0,Nt=st.__version===void 0||X===!0,U=it.dataReady,ot=S(_,J);if(_.isDepthTexture)lt=v(_.format===li,_.type),Nt&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,lt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,lt,J.width,J.height,0,at,yt,null));else if(_.isDataTexture)if(wt.length>0){Ct&&Nt&&e.texStorage2D(i.TEXTURE_2D,ot,lt,wt[0].width,wt[0].height);for(let Z=0,ct=wt.length;Z<ct;Z++)rt=wt[Z],Ct?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,rt.width,rt.height,at,yt,rt.data):e.texImage2D(i.TEXTURE_2D,Z,lt,rt.width,rt.height,0,at,yt,rt.data);_.generateMipmaps=!1}else Ct?(Nt&&e.texStorage2D(i.TEXTURE_2D,ot,lt,J.width,J.height),U&&Q(_,J,at,yt)):e.texImage2D(i.TEXTURE_2D,0,lt,J.width,J.height,0,at,yt,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ct&&Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,lt,wt[0].width,wt[0].height,J.depth);for(let Z=0,ct=wt.length;Z<ct;Z++)if(rt=wt[Z],_.format!==rn)if(at!==null)if(Ct){if(U)if(_.layerUpdates.size>0){const ft=Gc(rt.width,rt.height,_.format,_.type);for(const tt of _.layerUpdates){const Tt=rt.data.subarray(tt*ft/rt.data.BYTES_PER_ELEMENT,(tt+1)*ft/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,tt,rt.width,rt.height,1,at,Tt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,rt.width,rt.height,J.depth,at,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,lt,rt.width,rt.height,J.depth,0,rt.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,rt.width,rt.height,J.depth,at,yt,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,lt,rt.width,rt.height,J.depth,0,at,yt,rt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ct&&Nt&&e.texStorage2D(i.TEXTURE_2D,ot,lt,wt[0].width,wt[0].height);for(let Z=0,ct=wt.length;Z<ct;Z++)rt=wt[Z],_.format!==rn?at!==null?Ct?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,rt.width,rt.height,at,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,lt,rt.width,rt.height,0,rt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,rt.width,rt.height,at,yt,rt.data):e.texImage2D(i.TEXTURE_2D,Z,lt,rt.width,rt.height,0,at,yt,rt.data)}else if(_.isDataArrayTexture)if(Ct){if(Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,lt,J.width,J.height,J.depth),U)if(_.layerUpdates.size>0){const Z=Gc(J.width,J.height,_.format,_.type);for(const ct of _.layerUpdates){const ft=J.data.subarray(ct*Z/J.data.BYTES_PER_ELEMENT,(ct+1)*Z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,J.width,J.height,1,at,yt,ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,at,yt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,J.width,J.height,J.depth,0,at,yt,J.data);else if(_.isData3DTexture)Ct?(Nt&&e.texStorage3D(i.TEXTURE_3D,ot,lt,J.width,J.height,J.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,at,yt,J.data)):e.texImage3D(i.TEXTURE_3D,0,lt,J.width,J.height,J.depth,0,at,yt,J.data);else if(_.isFramebufferTexture){if(Nt)if(Ct)e.texStorage2D(i.TEXTURE_2D,ot,lt,J.width,J.height);else{let Z=J.width,ct=J.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,lt,Z,ct,0,at,yt,null),Z>>=1,ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),u.add(_),Z.onpaint=ct=>{const ft=ct.changedElements;for(const tt of u)ft.includes(tt.image)&&(tt.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const ft=i.RGBA,tt=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,tt,Tt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Ct&&Nt){const Z=te(wt[0]);e.texStorage2D(i.TEXTURE_2D,ot,lt,Z.width,Z.height)}for(let Z=0,ct=wt.length;Z<ct;Z++)rt=wt[Z],Ct?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,at,yt,rt):e.texImage2D(i.TEXTURE_2D,Z,lt,at,yt,rt);_.generateMipmaps=!1}else if(Ct){if(Nt){const Z=te(J);e.texStorage2D(i.TEXTURE_2D,ot,lt,Z.width,Z.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,yt,J)}else e.texImage2D(i.TEXTURE_2D,0,lt,at,yt,J);f(_)&&E(G),st.__version=it.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Dt(A,_,B){if(_.image.length!==6)return;const G=Jt(A,_),X=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const it=n.get(X);if(X.version!==it.__version||G===!0){e.activeTexture(i.TEXTURE0+B);const st=$t.getPrimaries($t.workingColorSpace),K=_.colorSpace===Qn?null:$t.getPrimaries(_.colorSpace),J=_.colorSpace===Qn||st===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const at=_.isCompressedTexture||_.image[0].isCompressedTexture,yt=_.image[0]&&_.image[0].isDataTexture,lt=[];for(let tt=0;tt<6;tt++)!at&&!yt?lt[tt]=p(_.image[tt],!0,s.maxCubemapSize):lt[tt]=yt?_.image[tt].image:_.image[tt],lt[tt]=Ie(_,lt[tt]);const rt=lt[0],wt=a.convert(_.format,_.colorSpace),Ct=a.convert(_.type),Nt=M(_.internalFormat,wt,Ct,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ot=it.__version===void 0||G===!0,Z=X.dataReady;let ct=S(_,rt);qt(i.TEXTURE_CUBE_MAP,_);let ft;if(at){U&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Nt,rt.width,rt.height);for(let tt=0;tt<6;tt++){ft=lt[tt].mipmaps;for(let Tt=0;Tt<ft.length;Tt++){const bt=ft[Tt];_.format!==rn?wt!==null?U?Z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt,Nt,bt.width,bt.height,0,bt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt,0,0,bt.width,bt.height,wt,Ct,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt,Nt,bt.width,bt.height,0,wt,Ct,bt.data)}}}else{if(ft=_.mipmaps,U&&ot){ft.length>0&&ct++;const tt=te(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Nt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(yt){U?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,lt[tt].width,lt[tt].height,wt,Ct,lt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Nt,lt[tt].width,lt[tt].height,0,wt,Ct,lt[tt].data);for(let Tt=0;Tt<ft.length;Tt++){const le=ft[Tt].image[tt].image;U?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt+1,0,0,le.width,le.height,wt,Ct,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt+1,Nt,le.width,le.height,0,wt,Ct,le.data)}}else{U?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt,Ct,lt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Nt,wt,Ct,lt[tt]);for(let Tt=0;Tt<ft.length;Tt++){const bt=ft[Tt];U?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt+1,0,0,wt,Ct,bt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Tt+1,Nt,wt,Ct,bt.image[tt])}}}f(_)&&E(i.TEXTURE_CUBE_MAP),it.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function mt(A,_,B,G,X,it){const st=a.convert(B.format,B.colorSpace),K=a.convert(B.type),J=M(B.internalFormat,st,K,B.normalized,B.colorSpace),at=n.get(_),yt=n.get(B);if(yt.__renderTarget=_,!at.__hasExternalTextures){const lt=Math.max(1,_.width>>it),rt=Math.max(1,_.height>>it);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,it,J,lt,rt,_.depth,0,st,K,null):e.texImage2D(X,it,J,lt,rt,0,st,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,X,yt.__webglTexture,0,pe(_)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,X,yt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const G=_.depthTexture,X=G&&G.isDepthTexture?G.type:null,it=v(_.stencilBuffer,X),st=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(_),it,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(_),it,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,it,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,A)}else{const G=_.textures;for(let X=0;X<G.length;X++){const it=G[X],st=a.convert(it.format,it.colorSpace),K=a.convert(it.type),J=M(it.internalFormat,st,K,it.normalized,it.colorSpace);xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(_),J,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(_),J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(A,_,B){const G=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=n.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),qt(i.TEXTURE_CUBE_MAP,_.depthTexture);const at=a.convert(_.depthTexture.format),yt=a.convert(_.depthTexture.type);let lt;_.depthTexture.format===Hn?lt=i.DEPTH_COMPONENT24:_.depthTexture.format===li&&(lt=i.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,lt,_.width,_.height,0,at,yt,null)}}else nt(_.depthTexture,0);const it=X.__webglTexture,st=pe(_),K=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,J=_.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hn)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,J,K,it,0);else if(_.depthTexture.format===li)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,J,K,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(A){const _=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=G}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)Se(_.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?Se(_.__webglFramebuffer[0],A,0):Se(_.__webglFramebuffer,A,0)}else if(B){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),Ot(_.__webglDepthbuffer[G],A,!1);else{const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ot(_.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(A,_,B){const G=n.get(A);_!==void 0&&mt(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ht(A)}function ce(A){const _=A.texture,B=n.get(A),G=n.get(_);A.addEventListener("dispose",x);const X=A.textures,it=A.isWebGLCubeRenderTarget===!0,st=X.length>1;if(st||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,r.memory.textures++),it){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let J=0;J<_.mipmaps.length;J++)B.__webglFramebuffer[K][J]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(st)for(let K=0,J=X.length;K<J;K++){const at=n.get(X[K]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&xe(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<X.length;K++){const J=X[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const at=a.convert(J.format,J.colorSpace),yt=a.convert(J.type),lt=M(J.internalFormat,at,yt,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),rt=pe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,lt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),qt(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)mt(B.__webglFramebuffer[K][J],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else mt(B.__webglFramebuffer[K],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(_)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let K=0,J=X.length;K<J;K++){const at=X[K],yt=n.get(at);let lt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,yt.__webglTexture),qt(lt,at),mt(B.__webglFramebuffer,A,at,i.COLOR_ATTACHMENT0+K,lt,0),f(at)&&E(lt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,G.__webglTexture),qt(K,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)mt(B.__webglFramebuffer[J],A,_,i.COLOR_ATTACHMENT0,K,J);else mt(B.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,K,0);f(_)&&E(K),e.unbindTexture()}A.depthBuffer&&Ht(A)}function Vt(A){const _=A.textures;for(let B=0,G=_.length;B<G;B++){const X=_[B];if(f(X)){const it=L(A),st=n.get(X).__webglTexture;e.bindTexture(it,st),E(it),e.unbindTexture()}}}const ue=[],Ae=[];function We(A){if(A.samples>0){if(xe(A)===!1){const _=A.textures,B=A.width,G=A.height;let X=i.COLOR_BUFFER_BIT;const it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(A),K=_.length>1;if(K)for(let at=0;at<_.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let at=0;at<_.length;at++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[at]);const yt=n.get(_[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,yt,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,X,i.NEAREST),c===!0&&(ue.length=0,Ae.length=0,ue.push(i.COLOR_ATTACHMENT0+at),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ue.push(it),Ae.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let at=0;at<_.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,st.__webglColorRenderbuffer[at]);const yt=n.get(_[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function pe(A){return Math.min(s.maxSamples,A.samples)}function xe(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(A){const _=r.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ie(A,_){const B=A.colorSpace,G=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ma&&B!==Qn&&($t.getTransfer(B)===ne?(G!==rn||X!==tn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",B)),_}function te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=F,this.getTextureUnits=C,this.setTextureUnits=O,this.setTexture2D=nt,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=Kt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _g(i,t){function e(n,s=Qn){let a;const r=$t.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===_o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return i.BYTE;if(n===zl)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Vl)return i.ALPHA;if(n===Wl)return i.RGB;if(n===rn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===fi)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===So)return i.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===ga)if(r===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lr||n===Pr||n===Ir||n===Dr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Lr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ir)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ur||n===Nr||n===Fr||n===kr||n===Or||n===xa||n===Br)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ur||n===Nr)return r===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Fr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===kr)return a.COMPRESSED_R11_EAC;if(n===Or)return a.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return a.COMPRESSED_RG11_EAC;if(n===Br)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zr||n===Hr||n===Gr||n===Vr||n===Wr||n===Xr||n===$r||n===qr||n===Yr||n===Kr||n===Zr||n===Jr||n===Qr||n===jr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===zr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$r)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jr)return r===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===eo||n===no)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===to)return r===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===no)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===io||n===so||n===va||n===ao)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===io)return a.COMPRESSED_RED_RGTC1_EXT;if(n===so)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ao)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
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

}`;class Mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new eh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:xg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bg extends gi{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const w=typeof XRWebGLBinding<"u",p=new Mg,f={},E=e.getContextAttributes();let L=null,M=null;const v=[],S=[],T=new zt;let x=null,y=null;const R=new $e;R.viewport=new se;const P=new $e;P.viewport=new se;const I=[R,P],F=new Ru;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=v[Y];return Q===void 0&&(Q=new Va,v[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=v[Y];return Q===void 0&&(Q=new Va,v[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=v[Y];return Q===void 0&&(Q=new Va,v[Y]=Q),Q.getHandSpace()};function $(Y){const Q=S.indexOf(Y.inputSource);if(Q===-1)return;const _t=v[Q];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,l||r),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<v.length;Y++){const Q=S[Y];Q!==null&&(S[Y]=null,v[Y].disconnect(Q))}C=null,O=null,p.reset();for(const Y in f)delete f[Y];if(t.setRenderTarget(L),m=null,d=null,u=null,s=null,M=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),y!==null){const Y=y.camera;Y.fov=y.fov,Y.zoom=y.zoom,Y.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&w&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",V),s.addEventListener("inputsourceschange",nt),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Dt=null,mt=null;E.depth&&(mt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=E.stencil?li:Hn,Dt=E.stencil?Ss:En);const Ot={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new fn(d.textureWidth,d.textureHeight,{format:rn,type:tn,depthTexture:new Es(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new fn(m.framebufferWidth,m.framebufferHeight,{format:rn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(Y){for(let Q=0;Q<Y.removed.length;Q++){const _t=Y.removed[Q],Dt=S.indexOf(_t);Dt>=0&&(S[Dt]=null,v[Dt].disconnect(_t))}for(let Q=0;Q<Y.added.length;Q++){const _t=Y.added[Q];let Dt=S.indexOf(_t);if(Dt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=S.length){S.push(_t),Dt=Ot;break}else if(S[Ot]===null){S[Ot]=_t,Dt=Ot;break}if(Dt===-1)break}const mt=v[Dt];mt&&mt.connect(_t)}}const q=new k,j=new k;function et(Y,Q,_t){q.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const Dt=q.distanceTo(j),mt=Q.projectionMatrix.elements,Ot=_t.projectionMatrix.elements,Se=mt[14]/(mt[10]-1),Ht=mt[14]/(mt[10]+1),Kt=(mt[9]+1)/mt[5],ce=(mt[9]-1)/mt[5],Vt=(mt[8]-1)/mt[0],ue=(Ot[8]+1)/Ot[0],Ae=Se*Vt,We=Se*ue,pe=Dt/(-Vt+ue),xe=pe*-Vt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),mt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const N=Se+pe,Ie=Ht+pe,te=Ae-xe,A=We+(Dt-xe),_=Kt*Ht/Ie*N,B=ce*Ht/Ie*N;Y.projectionMatrix.makePerspective(te,A,_,B,N,Ie),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Rt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,_t=Y.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),F.near=P.near=R.near=Q,F.far=P.far=R.far=_t,(C!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,O=F.far),F.layers.mask=Y.layers.mask|6,R.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const Dt=Y.parent,mt=F.cameras;Rt(F,Dt);for(let Ot=0;Ot<mt.length;Ot++)Rt(mt[Ot],Dt);mt.length===2?et(F,R,P):F.projectionMatrix.copy(R.projectionMatrix),y===null&&Y.isPerspectiveCamera&&(y={camera:Y,fov:Y.fov,zoom:Y.zoom}),Et(Y,F,Dt)};function Et(Y,Q,_t){_t===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Y){return f[Y]};let oe=null;function qt(Y,Q){if(h=Q.getViewerPose(l||r),g=Q,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let Dt=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,Dt=!0);for(let Ht=0;Ht<_t.length;Ht++){const Kt=_t[Ht];let ce=null;if(m!==null)ce=m.getViewport(Kt);else{const ue=u.getViewSubImage(d,Kt);ce=ue.viewport,Ht===0&&(t.setRenderTargetTextures(M,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(M))}let Vt=I[Ht];Vt===void 0&&(Vt=new $e,Vt.layers.enable(Ht),Vt.viewport=new se,I[Ht]=Vt),Vt.matrix.fromArray(Kt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Kt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ce.x,ce.y,ce.width,ce.height),Ht===0&&(F.matrix.copy(Vt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Dt===!0&&F.cameras.push(Vt)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){u=n.getBinding();const Ht=u.getDepthInformation(_t[0]);Ht&&Ht.isValid&&Ht.texture&&p.init(Ht,s.renderState)}if(mt&&mt.includes("camera-access")&&w){t.state.unbindTexture(),u=n.getBinding();for(let Ht=0;Ht<_t.length;Ht++){const Kt=_t[Ht].camera;if(Kt){let ce=f[Kt];ce||(ce=new eh,f[Kt]=ce);const Vt=u.getCameraImage(Kt);ce.sourceTexture=Vt}}}}for(let _t=0;_t<v.length;_t++){const Dt=S[_t],mt=v[_t];Dt!==null&&mt!==void 0&&mt.update(Dt,Q,l||r)}oe&&oe(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Jt=new ah;Jt.setAnimationLoop(qt),this.setAnimationLoop=function(Y){oe=Y},this.dispose=function(){}}}const Sg=new It,uh=new Ut;uh.set(-1,0,0,0,1,0,0,0,1);function yg(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,nh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,L,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(p,f):f.isMeshLambertMaterial?(a(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(p,f),u(p,f)):f.isMeshPhongMaterial?(a(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(a(p,f),g(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),w(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,E,L):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ye&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ye&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f),L=E.envMap,M=E.envMapRotation;L&&(p.envMap.value=L,p.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(uh),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,L){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=L*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function w(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wg(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function l(M,v){let S=s[M.id];S===void 0&&(p(M),S=h(M),s[M.id]=S,M.addEventListener("dispose",E));const T=v.program;n.updateUBOMapping(M,T);const x=t.render.frame;a[M.id]!==x&&(d(M),a[M.id]=x)}function h(M){const v=u();M.__bindingPointIndex=v;const S=i.createBuffer(),T=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],S=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let x=0,y=S.length;x<y;x++){const R=S[x];if(Array.isArray(R))for(let P=0,I=R.length;P<I;P++)m(R[P],x,P,T);else m(R,x,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,v,S,T){if(w(M,v,S,T)===!0){const x=M.__offset,y=M.value;if(Array.isArray(y)){let R=0;for(let P=0;P<y.length;P++){const I=y[P],F=f(I);g(I,M.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,v,S){typeof M=="number"||typeof M=="boolean"?v[0]=M:M.isMatrix3?(v[0]=M.elements[0],v[1]=M.elements[1],v[2]=M.elements[2],v[3]=0,v[4]=M.elements[3],v[5]=M.elements[4],v[6]=M.elements[5],v[7]=0,v[8]=M.elements[6],v[9]=M.elements[7],v[10]=M.elements[8],v[11]=0):ArrayBuffer.isView(M)?v.set(new M.constructor(M.buffer,M.byteOffset,v.length)):M.toArray(v,S)}function w(M,v,S,T){const x=M.value,y=v+"_"+S;if(T[y]===void 0)return typeof x=="number"||typeof x=="boolean"?T[y]=x:ArrayBuffer.isView(x)?T[y]=x.slice():T[y]=x.clone(),!0;{const R=T[y];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return T[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(M){const v=M.uniforms;let S=0;const T=16;for(let y=0,R=v.length;y<R;y++){const P=Array.isArray(v[y])?v[y]:[v[y]];for(let I=0,F=P.length;I<F;I++){const C=P[I],O=Array.isArray(C.value)?C.value:[C.value];for(let $=0,V=O.length;$<V;$++){const nt=O[$],q=f(nt),j=S%T,et=j%q.boundary,Rt=j+et;S+=et,Rt!==0&&T-Rt<q.storage&&(S+=T-Rt),C.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=q.storage}}}const x=S%T;return x>0&&(S+=T-x),M.__size=S,M.__cache={},this}function f(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",M),v}function E(M){const v=M.target;v.removeEventListener("dispose",E);const S=r.indexOf(v.__bindingPointIndex);r.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function L(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},a={}}return{bind:c,update:l,dispose:L}}const Eg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function Tg(){return vn===null&&(vn=new Ro(Eg,16,16,fi,Tn),vn.name="DFG_LUT",vn.minFilter=ke,vn.magFilter=ke,vn.wrapS=On,vn.wrapT=On,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class Ag{constructor(t={}){const{canvas:e=Sd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const w=m,p=new Set([So,bo,Mo]),f=new Set([tn,En,bs,Ss,_o,xo]),E=new Uint32Array(4),L=new Int32Array(4),M=new k;let v=null,S=null;const T=[],x=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,I=null,F=null,C=null,O=null;this._outputColorSpace=Xe;let $=0,V=0,nt=null,q=-1,j=null;const et=new se,Rt=new se;let Et=null;const oe=new Xt(0);let qt=0,Jt=e.width,Y=e.height,Q=1,_t=null,Dt=null;const mt=new se(0,0,Jt,Y),Ot=new se(0,0,Jt,Y);let Se=!1;const Ht=new Lo;let Kt=!1,ce=!1;const Vt=new It,ue=new k,Ae=new se,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function xe(){return nt===null?Q:1}let N=n;function Ie(b,D){return e.getContext(b,D)}let te,A,_,B,G,X,it,st,K,J,at,yt,lt,rt,wt,Ct,Nt,U,ot,Z,ct,ft,tt;try{const b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${po}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",cn,!1),N===null){const D="webgl2";if(N=Ie(D,b),N===null)throw Ie(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(b){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),Zt("WebGLRenderer: "+b.message),b}function Tt(){te=new Tm(N),te.init(),ct=new _g(N,te),A=new gm(N,te,t,ct),_=new mg(N,te),A.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),F=N.createFramebuffer(),C=N.createFramebuffer(),O=N.createFramebuffer(),B=new Cm(N),G=new eg,X=new gg(N,te,_,G,A,ct,B),it=new Em(R),st=new Lu(N),ft=new pm(N,st),K=new Am(N,st,B,ft),J=new Pm(N,K,st,ft,B),U=new Lm(N,A,X),wt=new _m(G),at=new tg(R,it,te,A,ft,wt),yt=new yg(R,G),lt=new ig,rt=new lg(te),Nt=new fm(R,it,_,J,g,c),Ct=new pg(R,J,A),tt=new wg(N,B,A,_),ot=new mm(N,te,B),Z=new Rm(N,te,B),B.programs=at.programs,R.capabilities=A,R.extensions=te,R.properties=G,R.renderLists=lt,R.shadowMap=Ct,R.state=_,R.info=B}w!==tn&&(y=new Dm(w,e.width,e.height,o,s,a));const bt=new bg(R,N);this.xr=bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(Jt,Y,!1))},this.getSize=function(b){return b.set(Jt,Y)},this.setSize=function(b,D,W=!0){if(bt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=b,Y=D,e.width=Math.floor(b*Q),e.height=Math.floor(D*Q),W===!0&&(e.style.width=b+"px",e.style.height=D+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(Jt*Q,Y*Q).floor()},this.setDrawingBufferSize=function(b,D,W){Jt=b,Y=D,Q=W,e.width=Math.floor(b*W),e.height=Math.floor(D*W),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(w===tn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,D,W,z){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,D,W,z),_.viewport(et.copy(mt).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(Ot)},this.setScissor=function(b,D,W,z){b.isVector4?Ot.set(b.x,b.y,b.z,b.w):Ot.set(b,D,W,z),_.scissor(Rt.copy(Ot).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){_.setScissorTest(Se=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){Dt=b},this.getClearColor=function(b){return b.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,W=!0){let z=0;if(b){let H=!1;if(nt!==null){const ut=nt.texture.format;H=p.has(ut)}if(H){const ut=nt.texture.type,gt=f.has(ut),dt=Nt.getClearColor(),xt=Nt.getClearAlpha(),St=dt.r,Ft=dt.g,Gt=dt.b;gt?(E[0]=St,E[1]=Ft,E[2]=Gt,E[3]=xt,N.clearBufferuiv(N.COLOR,0,E)):(L[0]=St,L[1]=Ft,L[2]=Gt,L[3]=xt,N.clearBufferiv(N.COLOR,0,L))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),Nt.dispose(),lt.dispose(),rt.dispose(),G.dispose(),it.dispose(),J.dispose(),ft.dispose(),tt.dispose(),at.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Yo),bt.removeEventListener("sessionend",Ko),ei.stop()};function le(b){b.preventDefault(),hc("WebGLRenderer: Context Lost."),P=!0}function Qt(){hc("WebGLRenderer: Context Restored."),P=!1;const b=B.autoReset,D=Ct.enabled,W=Ct.autoUpdate,z=Ct.needsUpdate,H=Ct.type;Tt(),B.autoReset=b,Ct.enabled=D,Ct.autoUpdate=W,Ct.needsUpdate=z,Ct.type=H}function cn(b){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gn(b){const D=b.target;D.removeEventListener("dispose",gn),Dh(D)}function Dh(b){Uh(b),G.remove(b)}function Uh(b){const D=G.get(b).programs;D!==void 0&&(D.forEach(function(W){at.releaseProgram(W)}),b.isShaderMaterial&&at.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,W,z,H,ut){D===null&&(D=We);const gt=H.isMesh&&H.matrixWorld.determinantAffine()<0,dt=kh(b,D,W,z,H);_.setMaterial(z,gt);let xt=W.index,St=1;if(z.wireframe===!0){if(xt=K.getWireframeAttribute(W),xt===void 0)return;St=2}const Ft=W.drawRange,Gt=W.attributes.position;let vt=Ft.start*St,jt=(Ft.start+Ft.count)*St;ut!==null&&(vt=Math.max(vt,ut.start*St),jt=Math.min(jt,(ut.start+ut.count)*St)),xt!==null?(vt=Math.max(vt,0),jt=Math.min(jt,xt.count)):Gt!=null&&(vt=Math.max(vt,0),jt=Math.min(jt,Gt.count));const ve=jt-vt;if(ve<0||ve===1/0)return;ft.setup(H,z,dt,W,xt);let de,ae=ot;if(xt!==null&&(de=st.get(xt),ae=Z,ae.setIndex(de)),H.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*xe()),ae.setMode(N.LINES)):ae.setMode(N.TRIANGLES);else if(H.isLine){let De=z.linewidth;De===void 0&&(De=1),_.setLineWidth(De*xe()),H.isLineSegments?ae.setMode(N.LINES):H.isLineLoop?ae.setMode(N.LINE_LOOP):ae.setMode(N.LINE_STRIP)}else H.isPoints?ae.setMode(N.POINTS):H.isSprite&&ae.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(te.get("WEBGL_multi_draw"))ae.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const De=H._multiDrawStarts,pt=H._multiDrawCounts,ze=H._multiDrawCount,Yt=xt?st.get(xt).bytesPerElement:1,en=G.get(z).currentProgram.getUniforms();for(let _n=0;_n<ze;_n++)en.setValue(N,"_gl_DrawID",_n),ae.render(De[_n]/Yt,pt[_n])}else if(H.isInstancedMesh)ae.renderInstances(vt,ve,H.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pt=Math.min(W.instanceCount,De);ae.renderInstances(vt,ve,pt)}else ae.render(vt,ve)};function qo(b,D,W,z){I!==null&&b.isNodeMaterial&&I.setObject(z,b),Kt===!0&&wt.setState(b,W,!1),b.transparent===!0&&b.side===Fn&&b.forceSinglePass===!1?(b.side=Ye,b.needsUpdate=!0,Ps(b,D,z),b.side=di,b.needsUpdate=!0,Ps(b,D,z),b.side=Fn):Ps(b,D,z)}this.compile=function(b,D,W=null){W===null&&(W=b),I!==null&&I.renderStart(b,D,W),S=rt.get(W),S.init(D),x.push(S),W.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),b!==W&&b.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights(),I!==null&&I.updateLights(S.state.lightsArray),ce=this.localClippingEnabled,Kt=wt.init(this.clippingPlanes,ce),Kt===!0&&wt.setGlobalState(this.clippingPlanes,D),I!==null&&Ct.render(S.state.shadowsArray,W,D);const z=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ut=H.material;if(ut)if(Array.isArray(ut))for(let gt=0;gt<ut.length;gt++){const dt=ut[gt];qo(dt,W,D,H),z.add(dt)}else qo(ut,W,D,H),z.add(ut)}),S=x.pop(),I!==null&&I.renderEnd(),z},this.compileAsync=function(b,D,W=null){const z=this.compile(b,D,W);return new Promise(H=>{function ut(){if(z.forEach(function(gt){const xt=G.get(gt).currentProgram;(xt===void 0||xt.isReady())&&z.delete(gt)}),z.size===0){H(b);return}setTimeout(ut,10)}te.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Ia=null;function Nh(b){Ia&&Ia(b)}function Yo(){ei.stop()}function Ko(){ei.start()}const ei=new ah;ei.setAnimationLoop(Nh),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(b){Ia=b,bt.setAnimationLoop(b),b===null?ei.stop():ei.start()},bt.addEventListener("sessionstart",Yo),bt.addEventListener("sessionend",Ko),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(b,D);const W=bt.enabled===!0&&bt.isPresenting===!0,z=y!==null&&(nt===null||W)&&y.begin(R,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(D),D=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,D,nt),S=rt.get(b,x.length),S.init(D),S.state.textureUnits=X.getTextureUnits(),x.push(S),Vt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ht.setFromProjectionMatrix(Vt,Sn,D.reversedDepth),ce=this.localClippingEnabled,Kt=wt.init(this.clippingPlanes,ce),v=lt.get(b,T.length),v.init(),T.push(v),bt.enabled===!0&&bt.isPresenting===!0){const gt=R.xr.getDepthSensingMesh();gt!==null&&Da(gt,D,-1/0,R.sortObjects)}Da(b,D,0,R.sortObjects),v.finish(),I!==null&&I.updateLights(S.state.lightsArray),R.sortObjects===!0&&v.sort(_t,Dt),pe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,pe&&Nt.addToRenderList(v,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&wt.beginShadows();const H=S.state.shadowsArray;if(Ct.render(H,b,D),Kt===!0&&wt.endShadows(),(z&&y.hasRenderPass())===!1){const gt=v.opaque,dt=v.transmissive;if(S.setupLights(),D.isArrayCamera){const xt=D.cameras;if(dt.length>0)for(let St=0,Ft=xt.length;St<Ft;St++){const Gt=xt[St];Jo(gt,dt,b,Gt)}pe&&Nt.render(b);for(let St=0,Ft=xt.length;St<Ft;St++){const Gt=xt[St];Zo(v,b,Gt,Gt.viewport)}}else dt.length>0&&Jo(gt,dt,b,D),pe&&Nt.render(b),Zo(v,b,D)}nt!==null&&V===0&&(X.updateMultisampleRenderTarget(nt),X.updateRenderTargetMipmap(nt)),z&&y.end(R),b.isScene===!0&&b.onAfterRender(R,b,D),ft.resetDefaultState(),q=-1,j=null,x.pop(),x.length>0?(S=x[x.length-1],X.setTextureUnits(S.state.textureUnits),Kt===!0&&wt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,I!==null&&I.renderEnd()};function Da(b,D,W,z){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ht)){z&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Vt);const gt=J.update(b),dt=b.material;dt.visible&&v.push(b,gt,dt,W,Ae.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ht))){const gt=J.update(b),dt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ae.copy(gt.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(Vt)),Array.isArray(dt)){const xt=gt.groups;for(let St=0,Ft=xt.length;St<Ft;St++){const Gt=xt[St],vt=dt[Gt.materialIndex];vt&&vt.visible&&v.push(b,gt,vt,W,Ae.z,Gt,D)}}else dt.visible&&v.push(b,gt,dt,W,Ae.z,null,D)}}const ut=b.children;for(let gt=0,dt=ut.length;gt<dt;gt++)Da(ut[gt],D,W,z)}function Zo(b,D,W,z){const{opaque:H,transmissive:ut,transparent:gt}=b;S.setupLightsView(W),Kt===!0&&wt.setGlobalState(R.clippingPlanes,W),z&&_.viewport(et.copy(z)),H.length>0&&Ls(H,D,W),ut.length>0&&Ls(ut,D,W),gt.length>0&&Ls(gt,D,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Jo(b,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){const vt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new fn(1,1,{generateMipmaps:!0,type:vt?Tn:tn,minFilter:ci,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}const ut=S.state.transmissionRenderTarget[z.id],gt=z.viewport||et;ut.setSize(gt.z*R.transmissionResolutionScale,gt.w*R.transmissionResolutionScale);const dt=R.getRenderTarget(),xt=R.getActiveCubeFace(),St=R.getActiveMipmapLevel();R.setRenderTarget(ut),R.getClearColor(oe),qt=R.getClearAlpha(),qt<1&&R.setClearColor(16777215,.5),R.clear(),pe&&Nt.render(W);const Ft=R.toneMapping;R.toneMapping=wn;const Gt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),Kt===!0&&wt.setGlobalState(R.clippingPlanes,z),Ls(b,W,z),X.updateMultisampleRenderTarget(ut),X.updateRenderTargetMipmap(ut),te.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let jt=0,ve=D.length;jt<ve;jt++){const de=D[jt],{object:ae,geometry:De,material:pt,group:ze}=de;if(pt.side===Fn&&ae.layers.test(z.layers)){const Yt=pt.side;pt.side=Ye,pt.needsUpdate=!0,Qo(ae,W,z,De,pt,ze),pt.side=Yt,pt.needsUpdate=!0,vt=!0}}vt===!0&&(X.updateMultisampleRenderTarget(ut),X.updateRenderTargetMipmap(ut))}R.setRenderTarget(dt,xt,St),R.setClearColor(oe,qt),Gt!==void 0&&(z.viewport=Gt),R.toneMapping=Ft}function Ls(b,D,W){const z=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ut=b.length;H<ut;H++){const gt=b[H],{object:dt,geometry:xt,group:St}=gt;let Ft=gt.material;Ft.allowOverride===!0&&z!==null&&(Ft=z),dt.layers.test(W.layers)&&Qo(dt,D,W,xt,Ft,St)}}function Qo(b,D,W,z,H,ut){I!==null&&H.isNodeMaterial&&I.setObject(b,H),b.onBeforeRender(R,D,W,z,H,ut),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(R,D,W,z,b,ut),H.transparent===!0&&H.side===Fn&&H.forceSinglePass===!1?(H.side=Ye,H.needsUpdate=!0,R.renderBufferDirect(W,D,z,H,b,ut),H.side=di,H.needsUpdate=!0,R.renderBufferDirect(W,D,z,H,b,ut),H.side=Fn):R.renderBufferDirect(W,D,z,H,b,ut),b.onAfterRender(R,D,W,z,H,ut)}function Ps(b,D,W){D.isScene!==!0&&(D=We);const z=G.get(b),H=S.state.lights,ut=S.state.shadowsArray,gt=H.state.version,dt=at.getParameters(b,H.state,ut,D,W,S.state.lightProbeGridArray),xt=at.getProgramCacheKey(dt);let St=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const Ft=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=it.get(b.envMap||z.environment,Ft),z.envMapRotation=z.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,St===void 0&&(b.addEventListener("dispose",gn),St=new Map,z.programs=St);let Gt=St.get(xt);if(Gt!==void 0){if(z.currentProgram===Gt&&z.lightsStateVersion===gt)return tc(b,dt),Gt}else dt.uniforms=at.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,W,dt),b.onBeforeCompile(dt,R),Gt=at.acquireProgram(dt,xt),St.set(xt,Gt),z.uniforms=dt.uniforms;const vt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(vt.clippingPlanes=wt.uniform),tc(b,dt),z.needsLights=Bh(b),z.lightsStateVersion=gt,z.needsLights&&(vt.ambientLightColor.value=H.state.ambient,vt.lightProbe.value=H.state.probe,vt.sunLights.value=H.state.sun,vt.sunLightShadows.value=H.state.sunShadow,vt.directionalLights.value=H.state.directional,vt.directionalLightShadows.value=H.state.directionalShadow,vt.spotLights.value=H.state.spot,vt.spotLightShadows.value=H.state.spotShadow,vt.rectAreaLights.value=H.state.rectArea,vt.ltc_1.value=H.state.rectAreaLTC1,vt.ltc_2.value=H.state.rectAreaLTC2,vt.pointLights.value=H.state.point,vt.pointLightShadows.value=H.state.pointShadow,vt.hemisphereLights.value=H.state.hemi,vt.sunShadowMatrix.value=H.state.sunShadowMatrix,vt.sunShadowCascade.value=H.state.sunShadowCascade,vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,vt.spotLightMatrix.value=H.state.spotLightMatrix,vt.spotLightMap.value=H.state.spotLightMap,vt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=Gt,z.uniformsList=null,Gt}function jo(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=_a.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function tc(b,D){const W=G.get(b);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Fh(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let W=0,z=b.length;W<z;W++){const H=b[W];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function kh(b,D,W,z,H){D.isScene!==!0&&(D=We),X.resetTextureUnits();const ut=D.fog,gt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,dt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$t.workingColorSpace,xt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,St=it.get(z.envMap||gt,xt),Ft=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),vt=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,ve=!!W.morphAttributes.color;let de=wn;z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(de=R.toneMapping);const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,De=ae!==void 0?ae.length:0,pt=G.get(z),ze=S.state.lights;if(Kt===!0&&(ce===!0||b!==j)){const he=b===j&&z.id===q;wt.setState(z,b,he)}let Yt=!1;z.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==ze.state.version||pt.outputColorSpace!==dt||H.isBatchedMesh&&pt.batching===!1||!H.isBatchedMesh&&pt.batching===!0||H.isBatchedMesh&&pt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&pt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&pt.instancing===!1||!H.isInstancedMesh&&pt.instancing===!0||H.isSkinnedMesh&&pt.skinning===!1||!H.isSkinnedMesh&&pt.skinning===!0||H.isInstancedMesh&&pt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&pt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&pt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&pt.instancingMorph===!1&&H.morphTexture!==null||pt.envMap!==St||z.fog===!0&&pt.fog!==ut||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==wt.numPlanes||pt.numIntersection!==wt.numIntersection)||pt.vertexAlphas!==Ft||pt.vertexTangents!==Gt||pt.morphTargets!==vt||pt.morphNormals!==jt||pt.morphColors!==ve||pt.toneMapping!==de||pt.morphTargetsCount!==De||!!pt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,pt.__version=z.version);let en=pt.currentProgram;Yt===!0&&(en=Ps(z,D,H),I&&z.isNodeMaterial&&I.onUpdateProgram(z,en,pt));let _n=!1,Vn=!1,vi=!1;const ie=en.getUniforms(),ge=pt.uniforms;if(_.useProgram(en.program)&&(_n=!0,Vn=!0,vi=!0),z.id!==q&&(q=z.id,Vn=!0),pt.needsLights){const he=Fh(S.state.lightProbeGridArray,H);pt.lightProbeGrid!==he&&(pt.lightProbeGrid=he,Vn=!0)}if(_n||j!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ie.setValue(N,"projectionMatrix",b.projectionMatrix),ie.setValue(N,"viewMatrix",b.matrixWorldInverse);const Xn=ie.map.cameraPosition;Xn!==void 0&&Xn.setValue(N,ue.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&ie.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ie.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Vn=!0,vi=!0)}if(pt.needsLights&&(ze.state.sunShadowMap.length>0&&ie.setValue(N,"sunShadowMap",ze.state.sunShadowMap,X),ze.state.directionalShadowMap.length>0&&ie.setValue(N,"directionalShadowMap",ze.state.directionalShadowMap,X),ze.state.spotShadowMap.length>0&&ie.setValue(N,"spotShadowMap",ze.state.spotShadowMap,X),ze.state.pointShadowMap.length>0&&ie.setValue(N,"pointShadowMap",ze.state.pointShadowMap,X)),H.isSkinnedMesh){ie.setOptional(N,H,"bindMatrix"),ie.setOptional(N,H,"bindMatrixInverse");const he=H.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),ie.setValue(N,"boneTexture",he.boneTexture,X))}H.isBatchedMesh&&(ie.setOptional(N,H,"batchingTexture"),ie.setValue(N,"batchingTexture",H._matricesTexture,X),ie.setOptional(N,H,"batchingIdTexture"),ie.setValue(N,"batchingIdTexture",H._indirectTexture,X),ie.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&ie.setValue(N,"batchingColorTexture",H._colorsTexture,X));const Wn=W.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&U.update(H,W,en),(Vn||pt.receiveShadow!==H.receiveShadow)&&(pt.receiveShadow=H.receiveShadow,ie.setValue(N,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(ge.envMapIntensity.value=D.environmentIntensity),ge.dfgLUT!==void 0&&(ge.dfgLUT.value=Tg()),Vn){if(ie.setValue(N,"toneMappingExposure",R.toneMappingExposure),pt.needsLights&&Oh(ge,vi),ut&&z.fog===!0&&yt.refreshFogUniforms(ge,ut),yt.refreshMaterialUniforms(ge,z,Q,Y,S.state.transmissionRenderTarget[b.id]),pt.needsLights&&pt.lightProbeGrid){const he=pt.lightProbeGrid;ge.probesSH.value=he.texture,ge.probesMin.value.copy(he.boundingBox.min),ge.probesMax.value.copy(he.boundingBox.max),ge.probesResolution.value.copy(he.resolution)}_a.upload(N,jo(pt),ge,X)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(_a.upload(N,jo(pt),ge,X),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ie.setValue(N,"center",H.center),ie.setValue(N,"modelViewMatrix",H.modelViewMatrix),ie.setValue(N,"normalMatrix",H.normalMatrix),ie.setValue(N,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const he=z.uniformsGroups;for(let Xn=0,Mi=he.length;Xn<Mi;Xn++){const nc=he[Xn];tt.update(nc,en),tt.bind(nc,en)}}return en}function Oh(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Bh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,D,W){const z=G.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=D,G.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){const W=G.get(b);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,W=0){nt=b,$=D,V=W;let z=null,H=!1,ut=!1;if(b){const dt=G.get(b);if(dt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(b.viewport),Rt.copy(b.scissor),Et=b.scissorTest,_.viewport(et),_.scissor(Rt),_.setScissorTest(Et),q=-1;return}else if(dt.__webglFramebuffer===void 0)X.setupRenderTarget(b);else if(dt.__hasExternalTextures)X.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ft=b.depthTexture;if(dt.__boundDepthTexture!==Ft){if(Ft!==null&&G.has(Ft)&&(b.width!==Ft.image.width||b.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(b)}}const xt=b.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ut=!0);const St=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(St[D])?z=St[D][W]:z=St[D],H=!0):b.samples>0&&X.useMultisampledRTT(b)===!1?z=G.get(b).__webglMultisampledFramebuffer:Array.isArray(St)?z=St[W]:z=St,et.copy(b.viewport),Rt.copy(b.scissor),Et=b.scissorTest}else et.copy(mt).multiplyScalar(Q).floor(),Rt.copy(Ot).multiplyScalar(Q).floor(),Et=Se;if(W!==0&&(z=F),_.bindFramebuffer(N.FRAMEBUFFER,z)&&_.drawBuffers(b,z),_.viewport(et),_.scissor(Rt),_.setScissorTest(Et),H){const dt=G.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt.__webglTexture,W)}else if(ut){const dt=D;for(let xt=0;xt<b.textures.length;xt++){const St=G.get(b.textures[xt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xt,St.__webglTexture,W,dt)}}else if(b!==null&&W!==0){const dt=G.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,W)}q=-1};function ec(b){const D=G.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=A.textureFormatReadable(b.format),D.__typeReadable=A.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,W,z,H,ut,gt,dt=0){if(!(b&&b.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){_.bindFramebuffer(N.FRAMEBUFFER,xt);try{const St=b.textures[dt],Ft=St.format,Gt=St.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);const vt=ec(St);if(vt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(vt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-z&&W>=0&&W<=b.height-H&&N.readPixels(D,W,z,H,ct.convert(Ft),ct.convert(Gt),ut)}finally{const St=nt!==null?G.get(nt).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(b,D,W,z,H,ut,gt,dt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(D>=0&&D<=b.width-z&&W>=0&&W<=b.height-H){_.bindFramebuffer(N.FRAMEBUFFER,xt);const St=b.textures[dt],Ft=St.format,Gt=St.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);const vt=ec(St);if(vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,jt),N.bufferData(N.PIXEL_PACK_BUFFER,ut.byteLength,N.STREAM_READ),N.readPixels(D,W,z,H,ct.convert(Ft),ct.convert(Gt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const ve=nt!==null?G.get(nt).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,ve);const de=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await yd(N,de,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,jt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ut),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(jt),N.deleteSync(de),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,W=0){const z=Math.pow(2,-W),H=Math.floor(b.image.width*z),ut=Math.floor(b.image.height*z),gt=D!==null?D.x:0,dt=D!==null?D.y:0;X.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,gt,dt,H,ut),_.unbindTexture()},this.copyTextureToTexture=function(b,D,W=null,z=null,H=0,ut=0){let gt,dt,xt,St,Ft,Gt,vt,jt,ve;const de=b.isCompressedTexture?b.mipmaps[ut]:b.image;if(W!==null)gt=W.max.x-W.min.x,dt=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,St=W.min.x,Ft=W.min.y,Gt=W.isBox3?W.min.z:0;else{const ge=Math.pow(2,-H);gt=Math.floor(de.width*ge),dt=Math.floor(de.height*ge),b.isDataArrayTexture?xt=de.depth:b.isData3DTexture?xt=Math.floor(de.depth*ge):xt=1,St=0,Ft=0,Gt=0}z!==null?(vt=z.x,jt=z.y,ve=z.z):(vt=0,jt=0,ve=0);const ae=ct.convert(D.format),De=ct.convert(D.type);let pt;D.isData3DTexture?(X.setTexture3D(D,0),pt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(X.setTexture2DArray(D,0),pt=N.TEXTURE_2D_ARRAY):(X.setTexture2D(D,0),pt=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const ze=_.getParameter(N.UNPACK_ROW_LENGTH),Yt=_.getParameter(N.UNPACK_IMAGE_HEIGHT),en=_.getParameter(N.UNPACK_SKIP_PIXELS),_n=_.getParameter(N.UNPACK_SKIP_ROWS),Vn=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,St),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);const vi=b.isDataArrayTexture||b.isData3DTexture,ie=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){const ge=G.get(b),Wn=G.get(D),he=G.get(ge.__renderTarget),Xn=G.get(Wn.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,he.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Mi=0;Mi<xt;Mi++)vi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(b).__webglTexture,H,Gt+Mi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(D).__webglTexture,ut,ve+Mi)),N.blitFramebuffer(St,Ft,gt,dt,vt,jt,gt,dt,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||G.has(b)){const ge=G.get(b),Wn=G.get(D);_.bindFramebuffer(N.READ_FRAMEBUFFER,C),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let he=0;he<xt;he++)vi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,H,Gt+he):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,H),ie?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Wn.__webglTexture,ut,ve+he):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Wn.__webglTexture,ut),H!==0?N.blitFramebuffer(St,Ft,gt,dt,vt,jt,gt,dt,N.COLOR_BUFFER_BIT,N.NEAREST):ie?N.copyTexSubImage3D(pt,ut,vt,jt,ve+he,St,Ft,gt,dt):N.copyTexSubImage2D(pt,ut,vt,jt,St,Ft,gt,dt);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ie?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(pt,ut,vt,jt,ve,gt,dt,xt,ae,De,de.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(pt,ut,vt,jt,ve,gt,dt,xt,ae,de.data):N.texSubImage3D(pt,ut,vt,jt,ve,gt,dt,xt,ae,De,de):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ut,vt,jt,gt,dt,ae,De,de.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ut,vt,jt,de.width,de.height,ae,de.data):N.texSubImage2D(N.TEXTURE_2D,ut,vt,jt,gt,dt,ae,De,de);_.pixelStorei(N.UNPACK_ROW_LENGTH,ze),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt),_.pixelStorei(N.UNPACK_SKIP_PIXELS,en),_.pixelStorei(N.UNPACK_SKIP_ROWS,_n),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Vn),ut===0&&D.generateMipmaps&&N.generateMipmap(pt),_.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&X.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?X.setTextureCube(b,0):b.isData3DTexture?X.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?X.setTexture2DArray(b,0):X.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){$=0,V=0,nt=null,_.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const Rg={L:"左闪",R:"右闪",D:"下潜",B:"格挡",W:"看穿"},lo={jab:{id:"jab",name:"直拳",zones:["C"],dmg:9,glyph:"直",hint:"直拳打正中：往左、往右、下潜都能躲"},hookL:{id:"hookL",name:"左勾拳",zones:["L","C"],dmg:13,hand:"L",glyph:"勾",hint:"勾拳扫过左边和中间：往右躲，或者下潜"},hookR:{id:"hookR",name:"右勾拳",zones:["R","C"],dmg:13,hand:"R",glyph:"勾",hint:"勾拳扫过右边和中间：往左躲，或者下潜"},hookX:{id:"hookX",name:"追身勾拳",zones:["L","C"],dmg:13,glyph:"追",hint:"他会打向你上次躲去的那边"},upper:{id:"upper",name:"上勾拳",zones:["C","D"],dmg:16,glyph:"上",hint:"上勾拳从下往上：别下潜，往两边躲"},swing:{id:"swing",name:"横扫",zones:["L","C","R"],dmg:16,glyph:"扫",hint:"横扫打上面一整排：只能下潜或格挡"},body:{id:"body",name:"腹击",zones:["L","C","R","D"],dmg:11,blockOnly:!0,glyph:"腹",hint:"腹击躲不开：只能格挡"},flurry:{id:"flurry",name:"连打",zones:["C"],dmg:4,hits:4,glyph:"连",hint:"连打：格挡最省，闪开要花 2 体力"}},fh=1.8,Cg=.6,Lg={jab:["upper","hookL","hookR"],hookL:["hookR","upper"],hookR:["hookL","upper"],hookX:["jab","upper"],upper:["swing","jab"],swing:["body","upper"],body:["upper","jab"],flurry:["upper"]};function Pg(i){return i.trim().split(/\s+/).map(t=>{const e=t.startsWith("?"),n=t.includes("!"),s=t.includes("~"),a=t.replace(/[?!~]/g,"");if(!lo[a])throw new Error(`unknown move "${a}" in pattern "${i}"`);const r={move:a};return e&&(r.feinty=!0),n&&(r.heavy=!0),s&&(r.hidden=!0),r})}function ph(i){return["L","C","R","D"].filter(t=>!i.includes(t))}function Ki(i){return i==="L"?"L":i==="R"?"R":i==="D"?"D":"C"}const fr=i=>i*i;function No(i,t,e){if(e<=0)return Math.min(i,t);const n=Math.max(e-Math.abs(i-t),0)/e;return Math.min(i,t)-n*n*e*.25}function Fo(i,t,e){return-No(-i,-t,e)}function Nn(i,t,e,n,s,a,r){const o=t[0]-i[0],c=t[1]-i[1],l=t[2]-i[2],h=o*o+c*c+l*l,u=e-n,d=h-u*u,m=1/h,g=Math.max(e,n)+s,w=(p,f,E)=>((p-i[0])*o+(f-i[1])*c+(E-i[2])*l)*m;return{min:[Math.min(i[0],t[0])-g,Math.min(i[1],t[1])-g,Math.min(i[2],t[2])-g],max:[Math.max(i[0],t[0])+g,Math.max(i[1],t[1])+g,Math.max(i[2],t[2])+g],k:s,bone:a,region:(p,f,E)=>r(Math.min(1,Math.max(0,w(p,f,E)))),d(p,f,E){const L=p-i[0],M=f-i[1],v=E-i[2],S=L*o+M*c+v*l,T=S-h,x=fr(L*h-o*S)+fr(M*h-c*S)+fr(v*h-l*S),y=S*S*h,R=T*T*h,P=Math.sign(u)*u*u*x;return Math.sign(T)*d*R>P?Math.sqrt(x+R)*m-n:Math.sign(S)*d*y<P?Math.sqrt(x+y)*m-e:(Math.sqrt(x*d*m)+S*u)*m-e}}}function ee(i,t,e,n,s,a=!1){const r=Math.max(t[0],t[1],t[2])+e;return{min:[i[0]-r,i[1]-r,i[2]-r],max:[i[0]+r,i[1]+r,i[2]+r],k:e,bone:n,sub:a,region:typeof s=="number"?()=>s:s,d(o,c,l){const h=(o-i[0])/t[0],u=(c-i[1])/t[1],d=(l-i[2])/t[2],m=Math.sqrt(h*h+u*u+d*d),g=h/t[0],w=u/t[1],p=d/t[2],f=Math.sqrt(g*g+w*w+p*p);return f>1e-9?m*(m-1)/f:-Math.min(t[0],t[1],t[2])}}}function Ni(i,t,e,n){let s=1e9;for(const a of i){if(t<a.min[0]||e<a.min[1]||n<a.min[2]||t>a.max[0]||e>a.max[1]||n>a.max[2])continue;const r=a.d(t,e,n);s=a.sub?Fo(s,-r,a.k):No(s,r,a.k)}return s}function dl(i,t){const e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(const v of i)if(!v.sub)for(let S=0;S<3;S++)e[S]=Math.min(e[S],v.min[S]),n[S]=Math.max(n[S],v.max[S]);for(let v=0;v<3;v++)e[v]-=t*2,n[v]+=t*2;const s=Math.ceil((n[0]-e[0])/t)+1,a=Math.ceil((n[1]-e[1])/t)+1,r=Math.ceil((n[2]-e[2])/t)+1,o=(v,S,T)=>v+s*(S+a*T),c=new Float32Array(s*a*r).fill(1e3);for(const v of i){const S=Math.max(0,Math.floor((v.min[0]-e[0])/t)),T=Math.min(s-1,Math.ceil((v.max[0]-e[0])/t)),x=Math.max(0,Math.floor((v.min[1]-e[1])/t)),y=Math.min(a-1,Math.ceil((v.max[1]-e[1])/t)),R=Math.max(0,Math.floor((v.min[2]-e[2])/t)),P=Math.min(r-1,Math.ceil((v.max[2]-e[2])/t));for(let I=R;I<=P;I++){const F=e[2]+I*t;for(let C=x;C<=y;C++){const O=e[1]+C*t;let $=o(S,C,I);for(let V=S;V<=T;V++,$++){const nt=v.d(e[0]+V*t,O,F);c[$]=v.sub?Fo(c[$],-nt,v.k):No(c[$],nt,v.k)}}}}const l=new Int32Array((s-1)*(a-1)*(r-1)).fill(-1),h=(v,S,T)=>v+(s-1)*(S+(a-1)*T),u=[],d=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],m=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],g=new Float32Array(8);for(let v=0;v<r-1;v++)for(let S=0;S<a-1;S++)for(let T=0;T<s-1;T++){let x=0;for(let F=0;F<8;F++){const C=c[o(T+d[F][0],S+d[F][1],v+d[F][2])];g[F]=C,C<0&&(x|=1<<F)}if(x===0||x===255)continue;let y=0,R=0,P=0,I=0;for(const[F,C]of m){const O=g[F],$=g[C];if(O<0==$<0)continue;const V=O/(O-$);y+=d[F][0]+(d[C][0]-d[F][0])*V,R+=d[F][1]+(d[C][1]-d[F][1])*V,P+=d[F][2]+(d[C][2]-d[F][2])*V,I++}l[h(T,S,v)]=u.length/3,u.push(e[0]+(T+y/I)*t,e[1]+(S+R/I)*t,e[2]+(v+P/I)*t)}const w=[],p=(v,S,T,x,y)=>{v<0||S<0||T<0||x<0||(y?w.push(v,T,S,v,x,T):w.push(v,S,T,v,T,x))};for(let v=1;v<r-1;v++)for(let S=1;S<a-1;S++)for(let T=1;T<s-1;T++){const y=c[o(T,S,v)]<0;T<s-1&&c[o(T+1,S,v)]<0!==y&&p(l[h(T,S-1,v-1)],l[h(T,S,v-1)],l[h(T,S,v)],l[h(T,S-1,v)],!y),S<a-1&&c[o(T,S+1,v)]<0!==y&&p(l[h(T-1,S,v-1)],l[h(T-1,S,v)],l[h(T,S,v)],l[h(T,S,v-1)],!y),v<r-1&&c[o(T,S,v+1)]<0!==y&&p(l[h(T-1,S-1,v)],l[h(T,S-1,v)],l[h(T,S,v)],l[h(T-1,S,v)],!y)}const f=u.length/3,E=new Float32Array(u),L=new Float32Array(f*3),M=t*.5;for(let v=0;v<f;v++){const S=E[v*3],T=E[v*3+1],x=E[v*3+2];let y=Ni(i,S+M,T,x)-Ni(i,S-M,T,x),R=Ni(i,S,T+M,x)-Ni(i,S,T-M,x),P=Ni(i,S,T,x+M)-Ni(i,S,T,x-M);const I=Math.hypot(y,R,P)||1;y/=I,R/=I,P/=I,L[v*3]=y,L[v*3+1]=R,L[v*3+2]=P}return{positions:E,normals:L,indices:new Uint32Array(w),vertexCount:f}}const Hi=[{name:"pelvis",from:"pelvis",to:"spine",kind:"torso"},{name:"spine",from:"spine",to:"chest",kind:"torso"},{name:"chest",from:"chest",to:"neck",kind:"torso"},{name:"neck",from:"neck",to:"head",kind:"torso"},{name:"head",from:"head",to:"top",kind:"torso"},{name:"uarmL",from:"shL",to:"elL",kind:"limb"},{name:"farmL",from:"elL",to:"wrL",kind:"limb"},{name:"uarmR",from:"shR",to:"elR",kind:"limb"},{name:"farmR",from:"elR",to:"wrR",kind:"limb"},{name:"thighL",from:"hipL",to:"knL",kind:"limb"},{name:"shinL",from:"knL",to:"anL",kind:"limb"},{name:"footL",from:"anL",to:"toeL",kind:"foot"},{name:"thighR",from:"hipR",to:"knR",kind:"limb"},{name:"shinR",from:"knR",to:"anR",kind:"limb"},{name:"footR",from:"anR",to:"toeR",kind:"foot"}],Bt=Object.fromEntries(Hi.map((i,t)=>[i.name,t])),_e=0,na=1,Ig=2,Dg=3,pr=4,La=1.08;function Ug(i){const t=i.female,e=i.height*(t?.955:1),n=i.build,s=(t?.168:.186)*n,a=(l,h,u)=>new k(l,h*e,u),r={pelvis:a(0,.98,0),spine:a(0,1.12,.005),chest:a(0,1.27,0),neck:a(0,1.47,-.015),head:a(0,1.556,0),top:a(0,1.556+.219*La,0),shL:a(-s,1.43,-.02),shR:a(s,1.43,-.02),hipL:a(-.09*n*(t?1.05:1),.93,0),hipR:a(.09*n*(t?1.05:1),.93,0),knL:a(-.1*n,.52,.03),knR:a(.1*n,.52,.03),anL:a(-.11*n,.085,-.01),anR:a(.11*n,.085,-.01),toeL:a(-.12*n,.025,.13),toeR:a(.12*n,.025,.13)},o=.29*e,c=.27*e;for(const[l,h,u,d]of[[-1,"shL","elL","wrL"],[1,"shR","elR","wrR"]])r[u]=r[h].clone().add(new k(.3*l,-.85,.45).normalize().multiplyScalar(o)),r[d]=r[u].clone().add(new k(-.12*l,.6,.79).normalize().multiplyScalar(c));return r}const Fe=i=>[i.x,i.y,i.z],ul=(i,t,e)=>Fe(i.clone().lerp(t,e));function Ng(i,t){const e=i.female,n=i.build,s=i.height*(e?.955:1),a=p=>p*s,r=e?.84:1,o=a(1.07),c=[],l=p=>c.push(p),h=p=>(f,E)=>E<o-.03?na:E<o?Ig:i.colors.top&&E>p?Dg:_e;l(ee([0,a(.975),-.005],[(e?.158:.148)*n,a(.11),e?.108:.105],0,Bt.pelvis,h(9)));for(const p of[-1,1])l(ee([p*.06*n,a(.94),-.055],[.07*n,a(.08),e?.065:.06],.04,Bt.pelvis,na));l(ee([0,a(1.165),.012],[(e?.118:.132)*n,a(.14),e?.092:.1],.06,Bt.spine,h(e?9:o))),i.heavy&&l(ee([0,a(1.13),.05],[.145*n,a(.12),.115],.06,Bt.spine,h(e?9:o)));const u=e?a(1.255):o;l(ee([0,a(1.33),0],[(e?.132:.152)*n,a(.165),e?.095:.108],.09,Bt.chest,h(u)));for(const p of[-1,1])l(ee([p*.11*n,a(1.31),-.02],[.05*n,a(.1),.07],.06,Bt.chest,h(u))),l(ee([p*.072*n,a(1.455),-.03],[(e?.055:.07)*n,a(.04),.05],.05,Bt.chest,_e)),l(e?ee([p*.052*n,a(1.345),.064],[.046*n,a(.042),.036],.05,Bt.chest,h(u)):ee([p*.066*n,a(1.37),.066],[.07*n,a(.052),.034],.05,Bt.chest,h(u)));l(Nn(Fe(t.neck),[0,a(1.585),0],e?.045:.056,e?.04:.05,.03,Bt.neck,()=>_e));const d=La*(e?.96:1),m=(p,f,E)=>[p*d,t.head.y+(f-1.556)*d,E*d],g=(p,f,E)=>[p*d,f*d,E*d];l(ee(m(0,1.665,0),g(.088,.108,.1),.03,Bt.head,_e)),l(ee(m(0,1.605,.032),g(e?.062:.068,.06,.07),.035,Bt.head,_e)),l(ee(m(0,1.566,.062),g(e?.026:.032,.026,.026),.025,Bt.head,_e)),l(ee(m(0,1.69,.072),g(.068,e?.012:.015,.022),.03,Bt.head,_e)),l(Nn(m(0,1.668,.096),m(0,1.634,.112),.011*d,(e?.013:.015)*d,.012,Bt.head,()=>_e));for(const p of[-1,1])l(ee(m(p*.042,1.632,.07),g(.028,.02,.022),.02,Bt.head,_e)),l(ee(m(p*.088,1.655,0),g(.013,.03,.02),.012,Bt.head,_e));for(const[p,f,E,L,M]of[["shL","elL","wrL",Bt.uarmL,Bt.farmL],["shR","elR","wrR",Bt.uarmR,Bt.farmR]])l(ee(Fe(t[p]),[.062*n*r,.06*r,.062*r],.04,L,_e)),l(Nn(Fe(t[p]),Fe(t[f]),.05*n*r,.04*n*r,.03,L,()=>_e)),l(ee(ul(t[p],t[f],.45),[.045*n*r,.045*n*r,.045*n*r],.03,L,_e)),l(Nn(Fe(t[f]),Fe(t[E]),.044*n*r,.031*n*r,.025,M,()=>_e)),l(ee(ul(t[f],t[E],.25),[.046*n*r,.046*n*r,.046*n*r],.025,M,_e));const w=e?.92:1;for(const[p,f,E,L,M,v,S]of[["hipL","knL","anL","toeL",Bt.thighL,Bt.shinL,Bt.footL],["hipR","knR","anR","toeR",Bt.thighR,Bt.shinR,Bt.footR]]){l(Nn(Fe(t[p]),Fe(t[f]),.088*n*w,.056*n*w,.04,M,y=>y<.42?na:_e));const T=t[p].clone().lerp(t[f],.35).add(new k(0,0,.02));l(ee(Fe(T),[.072*n*w,.085,.072*n*w],.06,M,(y,R)=>R>a(.75)?na:_e)),l(ee(Fe(t[f]),[.047*w,.047*w,.047*w],.04,v,_e)),l(Nn(Fe(t[f]),Fe(t[E]),.056*w,.034*w,.03,v,y=>y>.74?pr:_e));const x=t[f].clone().lerp(t[E],.3).add(new k(0,0,-.018));l(ee(Fe(x),[.048*w,.07,.048*w],.05,v,_e)),l(Nn(Fe(t[E]),Fe(t[L]),.04,.034,.025,S,()=>pr)),l(ee([t[E].x,t[E].y-.03,t[E].z-.03],[.04,.035,.045],.02,S,pr))}return c}function Fg(i,t){const e=La*(i.female?.96:1),n=new k(0,t.head.y+.109*e,0),s=[.088*e,.108*e,.1*e],a=(l,h,u,d=.012)=>{const m=ee([n.x,n.y,n.z],[s[0]+l,s[1]+l,s[2]+l],0,0,0),g=(h-u)/.2;return{min:m.min,max:m.max,k:0,bone:Bt.head,region:()=>5,d:(w,p,f)=>Fo(m.d(w,p,f),n.y+u+g*(f+.1)-p,d)}},r=[],o=(l,h,u,d)=>{const m=Nn(l,h,u,d,0,Bt.head,()=>5),g=ee(l,[u*1.3,u*1.3,u*1.3],.01,Bt.head,5);r.push({prims:[g,m],root:new k(...l)})},c=[];switch(i.hair){case"buzz":c.push(a(.004,.035,-.06));break;case"short":c.push(a(.012,.03,-.07));for(const[l,h,u]of[[0,.1,.02],[-.05,.08,0],[.05,.08,.01],[0,.08,-.06]])c.push(ee([n.x+l,n.y+h,n.z+u],[.035,.025,.035],.02,Bt.head,5));break;case"slick":c.push(a(.014,.045,-.07)),c.push(ee([n.x,n.y+.02,n.z-.07],[.07,.07,.05],.03,Bt.head,5));break;case"mohawk":c.push(a(.003,.03,-.05)),c.push(ee([n.x,n.y+.1,n.z-.01],[.018,.05,.11],.02,Bt.head,5));break;case"bob":c.push(a(.02,.05,-.12,.02)),c.push(ee([n.x,n.y-.05,n.z-.03],[.108,.1,.1],.03,Bt.head,5));break;case"long":c.push(a(.016,.05,-.1,.02)),c.push(Nn([n.x,n.y-.02,n.z-.07],[n.x,n.y-.27,n.z-.1],.08,.06,.03,Bt.head,()=>5));break;case"ponytail":c.push(a(.01,.045,-.08)),o([n.x,n.y+.05,n.z-.095],[n.x,n.y-.2,n.z-.16],.034,.018);break;case"twintails":c.push(a(.01,.045,-.08));for(const l of[-1,1])o([n.x+l*.085,n.y+.04,n.z-.04],[n.x+l*.13,n.y-.2,n.z-.07],.03,.016);break;case"bun":c.push(a(.008,.045,-.08)),c.push(ee([n.x,n.y+.12,n.z-.04],[.045,.04,.045],.015,Bt.head,5));break}return{cap:c,tails:r}}const fl=new Map;function kg(i,t,e=.014){const n=fl.get(i);if(n)return n;const s=performance.now(),a=Ug(t),r=Ng(t,a),o=dl(r,e),c=o.vertexCount,l=new Float32Array(c*3),h=new Uint16Array(c*4),u=new Float32Array(c*4),d=[t.colors.skin,t.colors.shorts,t.colors.trim,t.colors.top??t.colors.skin,t.colors.shoes].map(L=>new Xt(L)),m=new Float32Array(Hi.length),g=.018;for(let L=0;L<c;L++){const M=o.positions[L*3],v=o.positions[L*3+1],S=o.positions[L*3+2];m.fill(1e9);for(const C of r){if(C.sub)continue;const O=C.d(M,v,S);O<m[C.bone]&&(m[C.bone]=O)}let T=1e9,x=0;for(let C=0;C<m.length;C++)m[C]<T&&(T=m[C],x=C);let y=1e9,R=_e;for(const C of r){if(C.sub||C.bone!==x)continue;const O=Math.abs(C.d(M,v,S));O<y&&(y=O,R=C.region(M,v,S))}const P=d[R]??d[0];l[L*3]=P.r,l[L*3+1]=P.g,l[L*3+2]=P.b;const I=[];for(let C=0;C<m.length;C++)m[C]<T+g*5&&I.push([C,Math.exp(-(m[C]-T)/g)]);I.sort((C,O)=>O[1]-C[1]);let F=0;for(let C=0;C<Math.min(4,I.length);C++)F+=I[C][1];for(let C=0;C<4;C++)h[L*4+C]=I[C]?.[0]??0,u[L*4+C]=I[C]?I[C][1]/F:0}const w=new Be;w.setAttribute("position",new we(o.positions,3)),w.setAttribute("normal",new we(o.normals,3)),w.setAttribute("color",new we(l,3)),w.setAttribute("skinIndex",new we(h,4)),w.setAttribute("skinWeight",new we(u,4)),w.setIndex(new we(o.indices,1));const p=Fg(t,a),f=(L,M=.01)=>{const v=dl(L,M),S=new Be;return S.setAttribute("position",new we(v.positions,3)),S.setAttribute("normal",new we(v.normals,3)),S.setIndex(new we(v.indices,1)),S},E={geometry:w,hair:p.cap.length?f(p.cap):null,tails:p.tails.map(L=>({geometry:f(L.prims,.009),root:L.root})),bind:a,ms:0};return E.ms=performance.now()-s,fl.set(i,E),E}class Og{mesh;bind;bones;restBasis=[];restDir=[];restLen=[];constructor(t,e){this.bind=t.bind,this.bones=Hi.map(s=>{const a=new Ql;return a.name=s.name,a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,a});const n=Hi.map(s=>new It().makeTranslation(t.bind[s.from]).invert());this.mesh=new lu(t.geometry,e),this.mesh.frustumCulled=!1,this.mesh.bind(new Co(this.bones,n),new It);for(const s of Hi){const a=t.bind[s.from],o=t.bind[s.to].clone().sub(a);this.restLen.push(o.length()),o.normalize(),this.restDir.push(o),this.restBasis.push(pl(o,this.bendUp(s.name,t.bind,o)))}this.pose(t.bind)}bendUp(t,e,n,s){const a=(o,c,l,h)=>{const u=e[c].clone().sub(e[o]).cross(e[l].clone().sub(e[c]));return u.lengthSq()>1e-6?u.normalize():h},r=new k(0,0,1);switch(s&&r.applyQuaternion(s),t){case"uarmL":case"farmL":return a("shL","elL","wrL",new k(-1,0,0).applyQuaternion(s??new mn));case"uarmR":case"farmR":return a("shR","elR","wrR",new k(-1,0,0).applyQuaternion(s??new mn));case"thighL":case"shinL":return a("hipL","knL","anL",new k(-1,0,0));case"thighR":case"shinR":return a("hipR","knR","anR",new k(-1,0,0));default:{const o=t.startsWith("foot")?new k(0,1,0):r;return o.sub(n.clone().multiplyScalar(o.dot(n))).normalize()}}}pose(t,e){const n=new It,s=new It;Hi.forEach((a,r)=>{const o=t[a.from],c=e?.[a.name],l=this.bones[r];if(a.kind==="torso"&&c){l.matrixWorld.compose(o,c,new k(1,1,1));return}const h=t[a.to].clone().sub(o),u=h.length();h.normalize();const d=pl(h,this.bendUp(a.name,t,h,e?.chest));s.multiplyMatrices(d,this.restBasis[r].clone().transpose());const m=Math.max(.85,Math.min(1.35,u/this.restLen[r])),g=this.restDir[r];n.set(1+(m-1)*g.x*g.x,(m-1)*g.x*g.y,(m-1)*g.x*g.z,0,(m-1)*g.y*g.x,1+(m-1)*g.y*g.y,(m-1)*g.y*g.z,0,(m-1)*g.z*g.x,(m-1)*g.z*g.y,1+(m-1)*g.z*g.z,0,0,0,0,1),l.matrixWorld.makeTranslation(o.x,o.y,o.z).multiply(s).multiply(n)})}skinMatrix(t,e=new It){return e.multiplyMatrices(this.bones[t].matrixWorld,this.mesh.skeleton.boneInverses[t])}}function pl(i,t){const e=t.clone().sub(i.clone().multiplyScalar(t.dot(i))).normalize(),n=i.clone().cross(e);return new It().makeBasis(i,e,n)}const Mt=(i=0,t=0,e=0)=>new k(i,t,e),ye=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Fi=i=>{const t=ye(i);return t*t*(3-2*t)},mr=i=>1-(1-ye(i))**3,ia=i=>{const t=ye(i);return t<.5?4*t*t*t:1-(-2*t+2)**3/2},Un=(i,t,e)=>i+(t-i)*e,hs=(i,t,e)=>new mn().setFromEuler(new An(i,t,e,"YXZ")),kn=Mt(0,1.62,1.82);function oi(i){return{...i,root:i.root.clone(),head:i.head.clone(),gloveL:i.gloveL.clone(),gloveR:i.gloveR.clone(),feet:i.feet&&{L:i.feet.L.clone(),R:i.feet.R.clone()}}}function ml(i,t,e){const n=oi(i);n.root.lerp(t.root,e),n.head.lerp(t.head,e),n.gloveL.lerp(t.gloveL,e),n.gloveR.lerp(t.gloveR,e);for(const s of["hipYaw","chestYaw","lean","roll","crouch","headPitch","headYaw","headRoll","slack","heel"])n[s]=Un(i[s],t[s],e);return t.feet&&i.feet?n.feet={L:i.feet.L.clone().lerp(t.feet.L,e),R:i.feet.R.clone().lerp(t.feet.R,e)}:e>.5&&(n.feet=t.feet&&{L:t.feet.L.clone(),R:t.feet.R.clone()}),n}function Bg(i,t,e,n){const s=1-n;return i.clone().multiplyScalar(s*s).add(t.clone().multiplyScalar(2*s*n)).add(e.clone().multiplyScalar(n*n))}function zg(i,t,e){const n=t;switch(i){case"hookL":case"hookR":case"hookX":return{chamber:Mt(n*Math.min(.42,.34*e),1.5,.08),via:Mt(n*.5,1.6,1.1),end:Mt(-n*.04,1.6,kn.z-.44),loadYaw:n*.5,hitYaw:-n*.55,loadCrouch:.06,lunge:.34,dur:.22};case"upper":return{chamber:Mt(n*.14*e,1.08,.22),via:Mt(n*.05,1.02,1.1),end:Mt(0,1.58,kn.z-.46),loadYaw:n*.3,hitYaw:-n*.25,loadCrouch:.16,lunge:.38,dur:.22};case"swing":return{chamber:Mt(n*Math.min(.55,.48*e),1.6,-.12),via:Mt(n*.75,1.66,1.25),end:Mt(-n*.5,1.64,kn.z-.52),loadYaw:n*.8,hitYaw:-n*.8,loadCrouch:.05,lunge:.28,dur:.28};case"body":return{chamber:Mt(n*.24*e,1.16,.12),via:Mt(n*.25,1.08,.85),end:Mt(n*.02,1.12,kn.z-.46),loadYaw:n*.32,hitYaw:-n*.32,loadCrouch:.2,lunge:.4,dur:.2};default:return{chamber:Mt(n*.12*e,1.5,.12),via:Mt(n*.06,1.58,.85),end:Mt(n*.02,1.6,kn.z-.44),loadYaw:n*.18,hitYaw:-n*.3,loadCrouch:.05,lunge:.4,dur:.15}}}const Hg=.35,Gg=.05,Vg=.14;class Wg{group=new yn;look;body;mats=[];gloveMats;gloves;hair=null;tails=[];headgear=new yn;belt=null;shadow;joints;feet;stepping=null;lastHead=Mt();hurt=Mt();hurtVel=Mt();koT=-1;spec;strikeGlove=Mt();strikeActive=!1;heavyGlow=0;glowLight;crown=Mt();constructor(t){this.look=t,this.spec={female:!!t.female,build:t.build,height:t.height,heavy:!!t.heavy,hair:t.hair??"none",colors:{skin:t.skin,shorts:t.shorts,trim:t.trim,top:t.top??null,shoes:t.shoes??"#26262c",hair:t.hairColor??"#2a2a30"}};const e=JSON.stringify(this.spec),n=kg(e,this.spec),s=new je({vertexColors:!0,roughness:t.metal?.32:.6,metalness:t.metal?.45:0});this.mats.push(s),this.body=new Og(n,s),this.group.add(this.body.mesh),this.joints=Object.fromEntries(Object.entries(n.bind).map(([c,l])=>[c,l.clone()]));const a=new je({color:this.spec.colors.hair,roughness:.5});this.mats.push(a),n.hair&&(this.hair=this.rider(n.hair,a));for(const c of n.tails)this.tails.push({mesh:this.rider(c.geometry,a),root:c.root,ang:new zt,vel:new zt});const r=this.mat(t.trim,.5,.05);this.gloveMats=[this.mat(t.gloves,.34,.05),this.mat(t.gloves,.34,.05)];for(const c of this.gloveMats)c.emissive.set("#ff8a1a");this.gloves={L:this.glove(this.gloveMats[0],r,-1),R:this.glove(this.gloveMats[1],r,1)},this.headgear.matrixAutoUpdate=!1,this.group.add(this.headgear),this.accessories(t,r),this.shadow=new Pt(new pi(1,1),new ws({map:$g(),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=-1,this.group.add(this.shadow),this.glowLight=new sh("#ffb02e",0,1.6,2),this.group.add(this.glowLight),this.group.traverse(c=>{c.frustumCulled=!1});const o=this.stance(Mt(),0);this.feet={L:{pos:o.L.clone(),from:o.L.clone(),to:o.L.clone(),t:1},R:{pos:o.R.clone(),from:o.R.clone(),to:o.R.clone(),t:1}}}mat(t,e,n){const s=new je({color:t,roughness:e,metalness:n});return this.mats.push(s),s}rider(t,e){const n=new Pt(t,e);return n.matrixAutoUpdate=!1,this.group.add(n),n}glove(t,e,n){const s=new yn,a=new Pt(new Mn(1,24,18),t);a.scale.set(.07,.085,.076),a.position.set(0,.06,0);const r=new Pt(new Mn(1,20,14),t);r.scale.set(.066,.05,.07),r.position.set(0,.115,.01);const o=new Pt(new Ts(.025,.065,4,10),t);o.position.set(-n*.054,.05,.03),o.rotation.z=n*.5;const c=new Pt(new Ve(.05,.055,.08,18),t);c.position.set(0,-.03,0);const l=new Pt(new Wi(.054,.011,8,24),e);return l.rotation.x=Math.PI/2,l.position.set(0,-.005,0),s.add(a,r,o,c,l),this.group.add(s),s}accessories(t,e){const n=this.mat(t.hatColor??t.trim,.55,t.hat==="crown"?.7:.05),s=this.headgear;switch(t.hat){case"headband":{const a=new Pt(new Wi(.1,.014,8,32),n);a.rotation.x=Math.PI/2-.25,a.position.set(0,.04,0),a.scale.set(1,1.08,1);const r=new Pt(new Gn(.018,.09,.01),n);r.position.set(.025,-.005,-.105),r.rotation.z=.5,s.add(a,r);break}case"cap":{const a=new Pt(new Mn(.104,24,12,0,Math.PI*2,0,Math.PI/2),n);a.position.y=.03,a.scale.set(1,.95,1.04);const r=new Pt(new Ve(.075,.075,.01,20,1,!1,-Math.PI/2,Math.PI),n);r.position.set(0,.035,.085),r.scale.set(1.1,1,.9),s.add(a,r);break}case"visor":{const a=new je({color:t.hatColor,emissive:t.hatColor,emissiveIntensity:1.6,roughness:.3});this.mats.push(a);const r=new Pt(new Wi(.098,.014,8,32,Math.PI*.9),a);r.rotation.set(Math.PI/2,0,Math.PI*.05),r.position.set(0,-.01,0),s.add(r);break}case"crown":{const a=new Pt(new Ve(.08,.075,.045,20,1,!0),n);a.position.y=.12,s.add(a);for(let r=0;r<5;r++){const o=r/5*Math.PI*2,c=new Pt(new Io(.016,.055,8),n);c.position.set(Math.sin(o)*.075,.165,Math.cos(o)*.075),s.add(c)}break}case"hood":{const a=new Pt(new Mn(.13,24,16,0,Math.PI*2,0,Math.PI*.6),n);a.position.set(0,0,-.02),a.scale.set(1,1.05,1.08),s.add(a);break}case"tophat":{const a=new Pt(new Ve(.14,.14,.01,24),n);a.position.y=.095;const r=new Pt(new Ve(.08,.085,.15,24),n);r.position.y=.17;const o=new Pt(new Ve(.087,.087,.028,24),e);o.position.y=.115,s.add(a,r,o);break}}if(t.glasses){const a=this.mat("#0b0b0e",.15,.4);for(const o of[-1,1]){const c=new Pt(new Mn(1,16,10),a);c.scale.set(.032,.019,.01),c.position.set(o*.036,0,.098),s.add(c)}const r=new Pt(new Gn(.026,.005,.005),a);r.position.set(0,.006,.104),s.add(r)}if(t.beard){const a=new Pt(new Mn(1,18,12),n);a.scale.set(.058,.05,.045),a.position.set(0,-.09,.062),s.add(a)}if(t.belt){const a=new yn;a.matrixAutoUpdate=!1;const r=this.spec.build*(this.spec.female?1.04:1),o=new Pt(new Ve(.155*r,.155*r,.08,28,1,!0),this.mat("#d9b44a",.3,.8));o.scale.set(1,1,.74);const c=new Pt(new Ve(.05,.05,.02,20),this.mat("#f3d36b",.2,.9));c.rotation.x=Math.PI/2,c.position.set(0,0,.118*r),a.add(o,c),a.position.y=1.03*this.spec.height*(this.spec.female?.955:1),this.belt=a,this.group.add(a)}}punched(t,e=1){const n=t==="L"?1:-1;this.hurtVel.add(Mt(n*2.4*e,.7*e,-3.4*e))}update(t,e,n){n=Math.min(n,.05);const s=t?Xg(t):{phase:e*130/60%1,index:Math.floor(e*130/60),spb:60/130};let a=this.guard(e,s);this.strikeActive=!1,this.heavyGlow=Math.max(0,this.heavyGlow-n*3),t&&(a=this.fightPose(t,a,e,s));const r=90,o=2*Math.sqrt(r);this.hurtVel.addScaledVector(this.hurt,-r*n).addScaledVector(this.hurtVel,-o*n),this.hurt.addScaledVector(this.hurtVel,n),a.head.add(Mt(this.hurt.x*.05,this.hurt.y*.025,this.hurt.z*.04)),a.headYaw+=this.hurt.x*.25,a.headPitch-=this.hurt.z*.12,a.lean+=this.hurt.z*.06,a.chestYaw+=this.hurt.x*.08,a.root.z+=this.hurt.z*.03,this.apply(a,n),this.glowLight.intensity=this.heavyGlow*2.2;const c=t?.attack?.hand;this.gloveMats[0].emissiveIntensity=c==="L"?this.heavyGlow*.9:0,this.gloveMats[1].emissiveIntensity=c==="R"?this.heavyGlow*.9:0}guard(t,e){const n=this.spec.build,s=this.body.bind.head.y-.01,a=.02*(1-Math.cos(2*Math.PI*e.phase))/2,r=(e.index%4+e.phase)/4,o=Math.sin(r*2*Math.PI)*.035,c=Math.sin(t*1.7)*.004,l=h=>Mt(Math.cos(2*Math.PI*(e.phase+h))*.008,Math.sin(2*Math.PI*(e.phase+h))*.01,0);return{root:Mt(o,a-.035,0),hipYaw:-.2+o*.8,chestYaw:.06,lean:.12+c,roll:-o*.6,crouch:0,head:Mt(o*.3,0,0),headPitch:.12,headYaw:.16-o,headRoll:0,gloveL:Mt(-.095*n+o,s-.085+a*.5,.27).add(l(.5)),gloveR:Mt(.11*n+o,s-.06+a*.5,.36).add(l(0)),slack:0,feet:null,heel:0}}fightPose(t,e,n,s){const a=this.spec.build,r=t.t;if(t.phase==="ko"||t.over==="win")return this.koT<0&&(this.koT=n),this.koPose(e,n-this.koT);if(this.koT=-1,t.phase==="won"){const h=Math.abs(Math.sin(Math.PI*s.phase))*.05;return{...oi(e),lean:-.1,headPitch:-.25,root:Mt(0,-.02+h*.4,0),gloveL:Mt(-.3*a,2.02+h,.02),gloveR:Mt(.3*a,2.05+h,0),chestYaw:0,hipYaw:0}}if(t.phase==="recoil"||t.phase==="dazed"){const h=t.phase==="recoil"?mr((r-(t.phaseUntil-.25))/.25):1;return ml(e,this.dazedPose(n,s),h)}if(t.phase==="recover"&&!t.attack){const h=Fi(1-(t.phaseUntil-r)/Math.max(.2,s.spb));return ml(this.dazedPose(n,s),e,h)}if(t.phase==="wait"){const h=Math.max(0,Math.sin(Math.PI*s.phase))*.03;return{...oi(e),root:Mt(0,-.02+h*.3,-.25),lean:-.04,headPitch:-.05,gloveL:Mt(-.22*a,1.3+h,.18),gloveR:Mt(.24*a,1.32+h,.2)}}if(t.phase==="intro"){const h=Math.max(0,Math.sin(Math.PI*s.phase))**4,u=oi(e);return u.gloveL.lerp(Mt(-.05,1.45,.42),h),u.gloveR.lerp(Mt(.05,1.45,.42),h),u}const o=t.attack;if(!o)return e;const c=o.hand==="L"?-1:1,l=zg(o.moveId,c,a);if(t.phase==="windup"||t.phase==="read"){const h=t.phase==="windup"?Fi((r-o.t0)/Math.max(.05,o.readStart-o.t0)):1,u=t.phase==="read"?.08*Fi((r-o.readStart)/o.readTotal):0,d=this.strikePose(e,l,c,h*(1+u),0,0,0,n,o.heavy);return this.track(c,d),d}if(t.phase==="strike"||t.phase==="feintBack"){if(o.hits>1&&r>=o.impactAt-.1){const w=this.flurryPose(e,o.impactAt,o.hits,s.spb,r);return this.strikeActive=!0,w}const h=o.impactAt-l.dur,u=ia((r-h)/l.dur),d=ia((r-h+.03)/l.dur),m=ia((r-h+.06)/l.dur);if(t.phase==="feintBack"||o.feint){const w=t.phase==="feintBack"?Fi(1-(t.phaseUntil-r)/.12):0,p=Math.min(Hg,u)*(1-w),f=this.strikePose(e,l,c,1-w*.6,p,p*.8,p*.6,n,o.heavy);return this.track(c,f),f}const g=this.strikePose(e,l,c,1,u,d,m,n,o.heavy);return this.track(c,g),g}if(t.phase==="recover"&&o.struckAt>=0){const h=Ki(o.choice),u=o.choice!==null&&o.choice!=="B"&&o.choice!=="W"&&!o.move.blockOnly&&!o.zones.includes(h),d=r-o.struckAt,m=Math.max(.15,t.phaseUntil-o.struckAt),g=u?Math.sin(Math.PI*ye(d/.18))*.35:o.choice==="B"?-Math.sin(Math.PI*ye(d/.12))*.12:0,w=u?.12:.05,p=Fi((d-w)/Math.max(.1,m-w)),f=this.strikePose(e,l,c,1-p,(1+g)*(1-p),1-p,1-p,n,!1);return u&&(f.lean+=.1*(1-p),f.root.z+=.06*Math.sin(Math.PI*ye(d/.25))),f}return e}track(t,e){this.strikeActive=!0,this.strikeGlove.copy(t<0?e.gloveL:e.gloveR)}strikePose(t,e,n,s,a,r,o,c,l){const h=oi(t),u=n<0?"gloveL":"gloveR",d=n<0?"gloveR":"gloveL",m=ye(s,0,1.2),g=t[u].clone().lerp(e.chamber,Math.min(1,m));let w;a<=0?w=g:a<=1?w=Bg(g,e.via,e.end,a):w=e.end.clone().add(e.end.clone().sub(e.via).normalize().multiplyScalar((a-1)*.6));const p=Math.min(1,m)*(1-Math.min(1,a))*(l?.007:.004);w.add(Mt(Math.sin(c*53)*p,Math.cos(c*47)*p,0)),h[u]=w,h[d]=t[d].clone().lerp(Mt(-n*.06,1.56,.28),.6*Math.min(1,m));const f=Math.min(1,m)+Math.max(0,m-1);return h.hipYaw=t.hipYaw+Un(e.loadYaw*.55*f,e.hitYaw*.6,ye(o)),h.chestYaw=t.chestYaw+Un(e.loadYaw*.45*f,e.hitYaw*.45,ye(r)),h.crouch=t.crouch+e.loadCrouch*f*(1-ye(o))+.02*ye(o),h.root.z+=e.lunge*mr(o)-.06*f*(1-ye(o)),h.root.x+=n*.03*f*(1-ye(o)),h.lean+=.22*ye(r)-.05*f*(1-ye(r)),h.headPitch+=.05*f,h.headYaw-=n*.15*ye(r),h.heel=n<0?ye(o):.3*ye(o),h}flurryPose(t,e,n,s,a){const r=oi(t),o=Mt(0,1.6,kn.z-.5);let c=0,l=0;for(let h=0;h<n;h++){const u=(a-(e+h*s/2))/.11,d=Math.max(0,1-u*u);h%2===0?l=Math.max(l,d):c=Math.max(c,d)}return r.gloveL=t.gloveL.clone().lerp(o.clone().add(Mt(-.05,0,0)),c),r.gloveR=t.gloveR.clone().lerp(o.clone().add(Mt(.05,0,0)),l),r.root.z+=.3,r.lean+=.2,r.chestYaw+=(l-c)*.25,this.strikeGlove.copy(c>l?r.gloveL:r.gloveR),r}dazedPose(t,e){const n=this.spec.build,s=Math.sin(t*3.8)*.05,a=.06+Math.max(0,Math.sin(Math.PI*e.phase))*.03;return{root:Mt(s,-.04,-.14),hipYaw:s*1.2,chestYaw:s,lean:-.14,roll:s*1.4,crouch:a,head:Mt(s*.6,-.01,-.02),headPitch:.2+Math.sin(t*2.6)*.15,headYaw:Math.sin(t*2.1)*.3,headRoll:Math.sin(t*3.1)*.25,gloveL:Mt(-.28*n,1.06,.1),gloveR:Mt(.29*n,1,.08),slack:1,feet:null,heel:0}}koPose(t,e){const n=this.spec.build,s=mr(e/.35),a=ia((e-.25)/.85),r=oi(t);r.crouch=.2*s*(1-a),r.root=Mt(0,-.78*a-.05*s,-.55*a),r.lean=-.25*s-1.25*a,r.hipYaw=0,r.chestYaw=0,r.roll=.15*a,r.headPitch=-.4*a,r.headYaw=.5*a,r.slack=1;const o=.12;return r.gloveL=Mt(-.45*n,Un(1.2,o,a),Un(.1,-.7,a)),r.gloveR=Mt(.5*n,Un(1.15,o,a),Un(.05,-.5,a)),r.feet={L:Mt(-.16*n,.085+.05*a,Un(-.12,.25,a)),R:Mt(.16*n,.085+.08*a,Un(.14,.35,a))},r}stance(t,e){const n=this.spec.build,s=hs(0,e*.4,0),a=this.body.bind,r=(o,c)=>Mt(o,0,c).applyQuaternion(s).add(Mt(a.pelvis.x+t.x,a.anL.y,a.pelvis.z+t.z));return{L:r(-.15*n,-.15),R:r(.15*n,.17)}}footwork(t,e){const n=this.stance(t.root,t.hipYaw);for(const s of["L","R"]){const a=this.feet[s];a.t<1&&(a.t=Math.min(1,a.t+e/Vg),a.pos.lerpVectors(a.from,a.to,Fi(a.t)),a.pos.y=a.from.y+Math.sin(Math.PI*a.t)*Gg,a.t>=1&&this.stepping===s&&(this.stepping=null))}if(!this.stepping){const s=["R","L"].map(a=>[a,this.feet[a].pos.distanceTo(n[a])]).sort((a,r)=>r[1]-a[1])[0];if(s[1]>.09){const a=this.feet[s[0]];a.from.copy(a.pos),a.to.copy(n[s[0]]),a.t=0,this.stepping=s[0]}}}apply(t,e){const n=this.body.bind,s=this.joints,a=hs(t.lean*.35,t.hipYaw,t.roll*.5),r=hs(t.lean,t.hipYaw+t.chestYaw,t.roll),o=a.clone().slerp(r,.5),c=r.clone().multiply(hs(t.headPitch,t.headYaw,t.headRoll)),l=r.clone().slerp(c,.5),h=(M,v,S)=>n[M].clone().sub(n[v]).applyQuaternion(S);s.pelvis.copy(n.pelvis).add(t.root).add(Mt(0,-t.crouch,0)),s.spine.copy(s.pelvis).add(h("spine","pelvis",a)),s.chest.copy(s.spine).add(h("chest","spine",o)),s.neck.copy(s.chest).add(h("neck","chest",r)),s.head.copy(s.neck).add(h("head","neck",l)).add(t.head),s.top.copy(s.head).add(h("top","head",c)),s.shL.copy(s.chest).add(h("shL","chest",r)),s.shR.copy(s.chest).add(h("shR","chest",r)),s.hipL.copy(s.pelvis).add(h("hipL","pelvis",a)),s.hipR.copy(s.pelvis).add(h("hipR","pelvis",a));const u=n.elL.distanceTo(n.shL),d=n.wrL.distanceTo(n.elL);for(const[M,v,S,T,x]of[["L","shL","elL","wrL",t.gloveL],["R","shR","elR","wrR",t.gloveR]]){const y=M==="L"?-1:1,R=x.clone().sub(s[v]),P=R.length();s[T].copy(s[v]).add(R.multiplyScalar(Math.max(0,P-.065)/Math.max(1e-6,P)));const I=Mt(y*.3,-1-t.slack,0).applyQuaternion(r).normalize();s[S].copy(gl(s[v],s[T],u,d,I,!0))}t.feet?(this.feet.L.pos.copy(t.feet.L),this.feet.R.pos.copy(t.feet.R),this.feet.L.t=this.feet.R.t=1,this.stepping=null):this.footwork(t,e);const m=n.knL.distanceTo(n.hipL),g=n.anL.distanceTo(n.knL),w=hs(0,t.hipYaw*.4,0);for(const[M,v,S,T,x]of[["L","hipL","knL","anL","toeL"],["R","hipR","knR","anR","toeR"]]){const y=M==="L"?-1:1,R=M==="L"?t.heel:0,P=this.feet[M].pos.clone().add(Mt(0,R*.05,-R*.03)),I=m+g-.001,F=P.clone().sub(s[v]);F.length()>I&&P.copy(s[v]).add(F.setLength(I)),s[T].copy(P),s[S].copy(gl(s[v],P,m,g,Mt(y*.25,0,1).applyQuaternion(a).normalize()));const C=Mt(y*(M==="L"?.5:.15),0,1).normalize().applyQuaternion(w);s[x].copy(this.feet[M].pos).add(C.multiplyScalar(.14)).setY(.025+Math.max(0,this.feet[M].pos.y-n.anL.y))}this.body.pose(s,{pelvis:a,spine:o,chest:r,neck:l,head:c}),this.body.mesh.skeleton.update();const p=this.body.skinMatrix(Bt.head);this.hair&&this.hair.matrix.copy(p);const f=s.head.clone().sub(this.lastHead).divideScalar(Math.max(e,.001));this.lastHead.copy(s.head);for(const M of this.tails){const v=Mt(f.x,0,f.z).applyQuaternion(c.clone().invert()),S=70,T=2*Math.sqrt(S)*.35;M.vel.x+=(-S*M.ang.x-T*M.vel.x+v.z*6)*e,M.vel.y+=(-S*M.ang.y-T*M.vel.y-v.x*6)*e,M.ang.addScaledVector(M.vel,e),M.ang.clampScalar(-.8,.8);const x=new It().makeTranslation(M.root.x,M.root.y,M.root.z).multiply(new It().makeRotationFromEuler(new An(M.ang.x,0,M.ang.y))).multiply(new It().makeTranslation(-M.root.x,-M.root.y,-M.root.z));M.mesh.matrix.multiplyMatrices(p,x)}const E=La*(this.spec.female?.96:1);if(this.crown.set(0,n.head.y+.109*E,0),this.headgear.matrix.multiplyMatrices(p,new It().compose(this.crown,new mn,Mt(.92*E,.92*E,.92*E))),this.belt){const M=this.body.skinMatrix(Bt.pelvis);this.belt.matrix.multiplyMatrices(M,new It().makeTranslation(0,this.belt.position.y,0))}for(const[M,v,S]of[["L","elL","wrL"],["R","elR","wrR"]]){const T=s[S].clone().sub(s[v]).normalize(),x=Mt(0,0,1).applyQuaternion(r),y=T.clone().cross(x).normalize();y.lengthSq()<1e-6&&y.set(1,0,0);const R=y.clone().cross(T),P=this.gloves[M];P.position.copy(s[S]),P.quaternion.setFromRotationMatrix(new It().makeBasis(y,T,R))}const L=Math.max(0,s.pelvis.y-.4);this.shadow.position.set(s.pelvis.x,.004,s.pelvis.z+.02),this.shadow.scale.setScalar(.9+.3*(1-L)),this.koT>=0&&this.shadow.scale.set(1.6,1.9,1),this.heavyGlow>0&&this.glowLight.position.copy(this.strikeGlove)}glovePos(t){return this.gloves[t].position}headPos(){return this.joints.head.clone().add(Mt(0,.1,0))}dispose(){this.group.traverse(t=>{t instanceof Pt&&t!==this.body.mesh&&!this.tails.some(e=>e.mesh===t)&&t!==this.hair&&t.geometry.dispose()});for(const t of this.mats)t.dispose()}}function Xg(i){const t=i.spb,e=(i.t-i.beat0)/t,n=Math.floor(e);return{phase:e-n,index:n,spb:t}}let sa=null;function $g(){if(sa)return sa;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),sa=new th(i),sa}function gl(i,t,e,n,s,a=!1){const r=t.clone().sub(i);let o=r.length();const c=r.multiplyScalar(1/Math.max(1e-6,o));let l=1;o>(e+n)*.999&&(a&&(l=Math.min(1.3,o/((e+n)*.999))),o=Math.min(o,(e+n)*.999*l));const h=e*l,u=n*l;o=Math.max(Math.abs(h-u)+1e-4,o);const d=ye((h*h+o*o-u*u)/(2*h*o),-1,1),m=Math.sqrt(1-d*d),g=s.clone().sub(c.clone().multiplyScalar(s.dot(c)));return g.lengthSq()<1e-8&&g.set(0,-1,0),g.normalize(),i.clone().add(c.multiplyScalar(h*d)).add(g.multiplyScalar(h*m))}const Ce=(i=0,t=0,e=0)=>new k(i,t,e),qg=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),gr=i=>{const t=qg(i);return t*t*(3-2*t)},_l=.36,xl=.13;class Yg{renderer;scene=new tu;camera;rig=new yn;fighter=null;gloves;shake=0;shakeDir=Ce();kick=Ce();kickVel=Ce();flashes=[];crowd;crowdBase=[];spot;rim;pixelRatio=1;dolly=0;menuMode=!0;constructor(t){this.renderer=new Ag({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor("#07080c"),this.renderer.outputColorSpace=Xe,this.renderer.toneMapping=mo,this.renderer.toneMappingExposure=1.05,this.camera=new $e(66,1,.05,60),this.scene.fog=new Ao("#07080c",4.5,13),this.rig.add(this.camera),this.scene.add(this.rig),this.scene.add(new Su("#8a96b8","#14100c",.55)),this.spot=new wu("#fff1dc",38,9,.62,.55,1.6),this.spot.position.set(.3,4.6,1.9),this.spot.target.position.set(0,1.2,0),this.scene.add(this.spot,this.spot.target),this.rim=new zc("#7fb4ff",1.6),this.rim.position.set(-1.5,2.6,-3),this.scene.add(this.rim);const e=new zc("#ff8a7a",.7);e.position.set(2,1.8,-2.5),this.scene.add(e),this.buildRing(),this.crowd=this.buildCrowd(),this.gloves={L:this.playerGlove(-1),R:this.playerGlove(1)},this.setPlayerGloves("#d8302f","#f2f2f2"),this.resize()}buildRing(){const t=this.scene,e=Kg(),n=new Pt(new pi(7,7),new je({map:e,roughness:.92}));n.rotation.x=-Math.PI/2,n.position.set(0,0,.4),t.add(n);const s=new Pt(new pi(30,30),new je({color:"#0b0c11",roughness:1}));s.rotation.x=-Math.PI/2,s.position.y=-.6,t.add(s);const a=["#c8323a","#e8e8ea","#2a5fc8"],r=new je({color:"#9aa0ad",roughness:.35,metalness:.7}),o=-1.9,c=2.3,l=3.2;for(const[u,d]of[[-c,o],[c,o],[-c,l],[c,l]]){const m=new Pt(new Ve(.05,.05,1.5,12),r);m.position.set(u,.75,d),t.add(m);const g=new Pt(new Gn(.13,1.05,.13),new je({color:u<0?"#b8262e":"#1f4fb0",roughness:.6}));g.position.set(u,.92,d),t.add(g)}a.forEach((u,d)=>{const m=.55+d*.38,g=new je({color:u,roughness:.45}),w=(p,f)=>{const E=f.clone().sub(p),L=new Pt(new Ve(.022,.022,E.length(),8),g);L.position.copy(p).add(f).multiplyScalar(.5),L.quaternion.setFromUnitVectors(Ce(0,1,0),E.normalize()),t.add(L)};w(Ce(-c,m,o),Ce(c,m,o)),w(Ce(-c,m,o),Ce(-c,m,l)),w(Ce(c,m,o),Ce(c,m,l))});const h=new Pt(new Gn(5,.08,.08),new ws({color:"#2a2e3a"}));h.position.set(0,4.4,0),t.add(h);for(let u=-2;u<=2;u++){const d=new Pt(new Po(.12,16),new ws({color:"#fff4dd"}));d.position.set(u*1.1,4.32,0),d.rotation.x=Math.PI/2,t.add(d)}}buildCrowd(){const t=new Ts(.2,.35,4,8),e=new je({color:"#1a1d26",roughness:.9}),n=4,s=18,a=new uu(t,e,n*s),r=new It;let o=0;for(let c=0;c<n;c++)for(let l=0;l<s;l++){const h=(l-s/2)*.62+c%2*.3+Math.sin(l*7.3+c)*.08,u=-3.4-c*.85,d=.35+c*.42+Math.sin(l*3.1+c*2)*.05,m=.9+Math.sin(l*5.7+c*1.3)*.12;r.compose(Ce(h,d,u),new mn,Ce(m,m,m)),a.setMatrixAt(o,r),this.crowdBase.push(r.clone()),o++}return this.scene.add(a),a}playerGlove(t){const e=new je({color:"#d8302f",roughness:.38}),n=new yn,s=new Pt(new Mn(1,28,20),e);s.scale.set(.072,.07,.09);const a=new Pt(new Mn(1,20,14),e);a.scale.set(.066,.06,.05),a.position.set(0,.006,-.06);const r=new Pt(new Ts(.024,.06,4,10),e);r.position.set(-t*.05,.03,-.02),r.rotation.set(Math.PI/2,0,t*.4);const o=new je({color:"#f2f2f2",roughness:.5}),c=new Pt(new Ve(.055,.06,.09,18),e);c.rotation.x=Math.PI/2,c.position.z=.08;const l=new Pt(new Wi(.058,.01,8,24),o);l.position.z=.06;const h=new Pt(new Ve(.042,.05,.16,14),new je({color:"#8f8a85",roughness:.65}));return h.rotation.x=Math.PI/2,h.position.z=.2,n.add(s,a,r,c,l,h),n.userData.stripe=o,n.scale.setScalar(.78),n.traverse(u=>{u.frustumCulled=!1}),this.camera.add(n),{g:n,mat:e,punchT:-9}}setPlayerGloves(t,e){for(const n of["L","R"])this.gloves[n].mat.color.set(t),this.gloves[n].g.userData.stripe.color.set(e)}setOpponent(t){this.fighter&&(this.scene.remove(this.fighter.group),this.fighter.dispose(),this.fighter=null),t&&(this.fighter=new Wg(t),this.scene.add(this.fighter.group))}resize(){const t=window.innerWidth,e=window.innerHeight;this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e;const n=2*Math.atan(.66/1.82),s=2*Math.atan(Math.tan(n/2)/this.camera.aspect);this.camera.fov=uc.radToDeg(Math.min(Math.max(s,.9),1.42)),this.camera.updateProjectionMatrix()}hitCamera(t,e){this.shake=Math.max(this.shake,t),this.shakeDir.set(e,.4,0),this.kickVel.add(Ce(-e*1.6*t,-.5*t,2.4*t))}playerPunch(t){this.gloves[t].punchT=performance.now()/1e3,this.kickVel.add(Ce(0,0,-.6))}cameraFlash(){const t=new sh("#ffffff",0,6,2),e=(Math.random()-.5)*8;t.position.set(e,1+Math.random()*1.5,-3.5-Math.random()*2),this.scene.add(t),this.flashes.push({light:t,t:0})}update(t,e,n){this.fighter?.update(t,e,n);let s=0,a=0,r=0,o=0;if(t?.def&&!this.menuMode){const p=gr(t.defOffset());t.def.kind==="slipL"?(s=-_l*p,r=xl*p):t.def.kind==="slipR"?(s=_l*p,r=-xl*p):(a=-.34*p,o=.1*p)}if(t?.down&&!this.menuMode){const p=gr((t.t-t.down.t0)/.6);a=-.9*p,o=.55*p,r=.35*p}(!t||this.menuMode)&&(s+=Math.sin(e*.3)*.08,a+=Math.sin(e*.21)*.03);const c=70,l=2*Math.sqrt(c);this.kickVel.addScaledVector(this.kick,-c*n).addScaledVector(this.kickVel,-l*n),this.kick.addScaledVector(this.kickVel,n),this.shake=Math.max(0,this.shake-n*3.2);const h=this.shake*this.shake,u=(Math.sin(e*71)+Math.sin(e*43))*.012*h,d=(Math.cos(e*67)+Math.sin(e*29))*.012*h;this.rig.position.set(kn.x+s+this.kick.x*.05+u,kn.y+a+this.kick.y*.04+d,kn.z+this.kick.z*.05+this.dolly),this.camera.rotation.set(-.12+o+this.kick.z*.02,0,r+this.kick.x*.03+u*2,"YXZ"),this.updateGloves(t,e);const m=new It,g=new It,w=t?.open?1:.25;for(let p=0;p<this.crowdBase.length;p++)g.makeTranslation(0,Math.max(0,Math.sin(e*(5+p%5)+p*1.7))*.05*w,0),m.multiplyMatrices(g,this.crowdBase[p]),this.crowd.setMatrixAt(p,m);this.crowd.instanceMatrix.needsUpdate=!0;for(const p of this.flashes)p.t+=n,p.light.intensity=Math.max(0,6*(1-p.t/.12));this.flashes=this.flashes.filter(p=>p.t>.15?(this.scene.remove(p.light),p.light.dispose(),!1):!0),this.renderer.render(this.scene,this.camera)}updateGloves(t,e){const n=performance.now()/1e3,s=t?.blocking?1:0,a=Math.sin(e*3.1)*.006;for(const r of["L","R"]){const o=r==="L"?-1:1,c=this.gloves[r],l=Ce(o*.15,-.3+a,-.55),h=Ce(o*.06,-.085,-.36),u=l.clone().lerp(h,s),d=n-c.punchT;if(d<.2){const m=d<.06?d/.06:1-(d-.06)/.14;u.lerp(Ce(o*.04,-.02,-1.1),gr(m))}t?.down&&(u.y-=.4),c.g.position.copy(u),c.g.rotation.set(.55-s*.45,o*-.22,o*(.12+s*.4))}}project(t){const e=t.clone().project(this.camera);return{x:(e.x*.5+.5)*window.innerWidth,y:(-e.y*.5+.5)*window.innerHeight,z:e.z}}screenRadius(t,e){const n=new k;this.camera.getWorldPosition(n);const s=Math.max(.1,t.distanceTo(n));return e/(s*Math.tan(uc.degToRad(this.camera.fov)/2))*(window.innerHeight/2)}}function Kg(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d"),e=t.createRadialGradient(256,256,30,256,256,360);e.addColorStop(0,"#3a4052"),e.addColorStop(1,"#1a1d27"),t.fillStyle=e,t.fillRect(0,0,512,512),t.strokeStyle="rgba(255,255,255,0.18)",t.lineWidth=6,t.strokeRect(24,24,464,464),t.strokeStyle="rgba(255,204,0,0.16)",t.lineWidth=3,t.beginPath(),t.arc(256,256,70,0,Math.PI*2),t.stroke();const n=new th(i);return n.colorSpace=Xe,n.anisotropy=4,n}class ko{state;constructor(t){this.state=t>>>0}next(){let t=this.state=this.state+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t){return Math.floor(this.next()*t)}pick(t){return t[this.int(t.length)]}chance(t){return this.next()<t}weighted(t,e){let n=0;for(const a of t)n+=Math.max(0,e(a));let s=this.next()*n;for(const a of t)if(s-=Math.max(0,e(a)),s<=0)return a;return t[t.length-1]}sample(t,e){const n=[...t],s=[];for(;s.length<e&&n.length;)s.push(n.splice(this.int(n.length),1)[0]);return s}}const Zg=130,Jg=.32,Qg=.16,jg=.18,t_=.6,e_=.8,n_=.8,i_=.25,s_=8,mh=8,a_=2,r_=.04,o_=.16,vl=10,c_=10,l_=6,h_=.35,d_=3,u_=4,f_=2,p_=1;class gh{opp;mods;rng;t=0;bpm;beat0;readTime;events=[];stats={attacks:0,defended:0,hits:0,blocks:0,reads:0,seconds:0,timeouts:0,windows:0,bestCombo:0,dealt:0,taken:0,knockdowns:0,time:0};over=null;hp;maxHp;stamina;guard;gauge=0;def=null;blockUntil=-1;lastSlip=null;streak=0;knockdowns=0;down=null;ghostUsed=!1;guardUsed=!1;towelUsed=!1;tauntReady=!1;oppHp;oppMax;phase="intro";phaseUntil;attack=null;preview=[];combo=[];comboIdx=0;phase2=!1;phase2Pending=!1;rage=0;readLeft=0;readPaused=!1;windowEnd=0;windowDmg=0;windowHits=0;nextSlot=0;queued=0;windowBonus=1;nextHand="L";script;dmgScale;parsed=new Map;constructor(t){this.opp=t.opp,this.mods=t.mods,this.rng=new ko(t.seed),this.bpm=t.bpm??Zg,this.beat0=t.beat0??0,this.readTime=t.readTime??3,this.maxHp=Math.round(t.mods.maxHp),this.hp=Math.min(this.maxHp,Math.max(1,t.hp)),this.stamina=t.mods.staminaMax,this.guard=t.mods.guardMax,this.oppMax=Math.round(t.opp.hp*(t.hpScale??1)),this.oppHp=this.oppMax,this.dmgScale=t.dmgScale??1,this.script=[...t.script??[]],this.gauge=Math.min(this.gaugeReq-1,t.mods.startGauge),this.phaseUntil=this.beatAfter(0,u_)}get spb(){return 60/this.bpm}setBeat(t,e){this.bpm=t,this.beat0=e}beatAfter(t,e=0){const n=Math.ceil((t-this.beat0)/this.spb-1e-6);return this.beat0+(n+e)*this.spb}get gaugeReq(){const t=this.phase2&&this.opp.phase2?.gauge?this.opp.phase2.gauge:this.opp.gauge;return Math.max(2,t+this.mods.gaugeReq)}get open(){return this.phase==="recoil"||this.phase==="dazed"}get deciding(){return(this.phase==="windup"||this.phase==="read")&&!!this.attack&&this.attack.choice===null&&!this.attack.timeout}get blocking(){return this.t<=this.blockUntil}defOffset(t=this.t){const e=this.def;if(!e)return 0;const n=e.impact-.04,s=Math.min(.2,Math.max(.08,n-e.t0)),a=n-s;return t<a?0:t<n?(t-a)/s:t<e.impact+.22?1:t<e.impact+.38?1-(t-e.impact-.22)/.16:0}progress(t=this.t){const e=this.attack;if(!e)return 0;if(e.hitsDone>0)return 1;if(this.phase==="windup")return .55*Math.min(1,(t-e.t0)/Math.max(.01,e.readStart-e.t0));if(this.phase==="read")return .55+.17*Math.min(1,(t-e.readStart)/e.readTotal);if(this.phase==="strike"||this.phase==="feintBack"){const n=Math.max(.01,e.impactAt-e.decidedAt);return .8+.2*Math.min(1,Math.max(0,(t-e.decidedAt)/n))}return 1}canAfford(t,e=this.attack){return e?t==="W"?!0:t==="B"?e.heavy?this.mods.blockHeavy&&this.guard>=2:this.guard>=1:this.stamina>=(e.hits>1?2:1):!1}act(t){return this.over||!this.deciding||!this.canAfford(t)?!1:(this.decide(t),!0)}press(t){this.over||(this.down?this.mash():this.open?this.queuePunch():this.act(t))}button(t){this.over||(this.down?this.mash():this.open?this.queuePunch():this.act(t))}queuePunch(){this.queued=Math.min(2,this.queued+1)}mash(){const t=this.down;!t||t.final||(t.taps++,t.taps>=t.need&&this.getUp(!1))}tick(t){if(this.over)return;let e=Math.min(t,.25);for(;e>1e-6;){const n=Math.min(e,.008333333333333333);if(this.step(n),e-=n,this.over)return}}step(t){this.t+=t;const e=this.t;if(this.stats.time=e,this.def&&e>this.def.impact+.4&&(this.def=null),this.down){const n=Math.min(vl,Math.floor((e-this.down.t0)/this.spb)+1);n!==this.down.count&&(this.down.count=n,this.emit({type:"count",n}));const s=this.down.final?4:vl+.5;e-this.down.t0>=s*this.spb&&this.finish(!1);return}switch(this.phase){case"intro":e>=this.phaseUntil&&this.toIdle(1);break;case"idle":e>=this.phaseUntil&&this.startCombo();break;case"windup":e>=this.attack.readStart&&(this.phase="read",this.readLeft=this.attack.readTotal,this.emit({type:"read",attack:this.attack}));break;case"read":this.readPaused||(this.readLeft-=t),this.readLeft<=0&&this.decide(null);break;case"strike":this.updateStrike();break;case"feintBack":e>=this.phaseUntil&&this.followUp();break;case"recover":e>=this.phaseUntil&&(this.comboIdx<this.combo.length?this.nextStep(!1):this.toIdle());break;case"recoil":e>=this.phaseUntil&&(this.phase="dazed",this.windowEnd=this.phaseUntil+(mh+this.mods.windowBeats)*this.spb,this.nextSlot=this.phaseUntil,this.emit({type:"window",until:this.windowEnd}));break;case"dazed":for(;e>=this.nextSlot&&this.nextSlot<this.windowEnd-1e-6&&this.phase==="dazed";)this.queued>0&&(this.queued--,this.punch()),this.nextSlot+=this.spb/a_;this.phase==="dazed"&&e>=this.windowEnd&&this.closeWindow();break}}toIdle(t){this.phase2Pending&&this.enterPhase2(),this.phase="idle",this.attack=null,this.combo=[],this.comboIdx=0;const e=this.phase2&&this.opp.phase2?.idle?this.opp.phase2.idle:this.opp.idle,n=t??Math.round(this.rng.range(e[0],e[1]));this.phaseUntil=this.beatAfter(this.t,Math.max(1,n))}patterns(){return this.phase2&&this.opp.phase2?this.opp.phase2.patterns:this.opp.patterns}parse(t){let e=this.parsed.get(t);return e||(e=Pg(t),this.parsed.set(t,e)),e}startCombo(){const t=this.mods;this.stamina=Math.min(t.staminaMax,this.stamina+t.staminaRegen),this.guard=Math.min(t.guardMax,this.guard+1);const e=this.script.length?this.script.shift():this.rng.weighted(this.patterns(),n=>n.w).p;this.combo=this.parse(e),this.comboIdx=0,this.preview=this.combo.map((n,s)=>({glyph:lo[n.move].glyph,heavy:!!n.heavy,hidden:s===1&&!t.revealSecond})),this.emit({type:"combo",steps:this.preview}),this.nextStep(!1)}nextStep(t,e){const n=this.comboIdx,s=e?{move:e}:this.combo[this.comboIdx++];let a=s.move,r=!1;a==="hookX"&&(a=this.lastSlip==="R"?"hookR":this.lastSlip==="L"||this.rng.chance(.5)?"hookL":"hookR"),s.hidden&&(a=this.rng.pick(["hookL","hookR","upper"]),r=!0);const o=lo[a];let c;o.hand?c=o.hand:a==="jab"||a==="flurry"?(c=this.nextHand,this.nextHand=c==="L"?"R":"L"):c=this.rng.chance(.5)?"L":"R";const l=t||n===1,h=t?0:s.feinty?Cg:this.opp.feint??0,u=l?t_:n>=2?e_:1,d=Math.max(n_,(this.readTime*(this.opp.readMul??1)*this.mods.readMul+this.mods.readAdd)*u*(1-this.rage)),m=t?Qg:Jg,g={step:s,move:o,moveId:a,zones:o.zones,hidden:r,hand:c,heavy:!!s.heavy,feint:this.rng.chance(h),feintChance:h,index:n,second:l,t0:this.t,readStart:this.t+m,readTotal:d,decidedAt:-1,choice:null,timeout:!1,impactAt:1/0,hits:o.hits??1,hitsDone:0,clean:!0,struckAt:-1};n<this.preview.length&&!e&&(this.preview[n]={...this.preview[n],hidden:!1}),this.attack=g,this.phase="windup",this.emit({type:"telegraph",attack:g})}decide(t){const e=this.attack;this.readPaused=!1;const n=this.t;t===null&&(e.timeout=!0),e.choice=t,e.decidedAt=n,e.impactAt=this.beatAfter(n+jg),t==="B"?this.guard-=e.heavy?2:1:(t==="L"||t==="R"||t==="D")&&(this.stamina-=e.hits>1?2:1,t!=="D"&&(this.lastSlip=t),this.def={kind:t==="L"?"slipL":t==="R"?"slipR":"duck",t0:n,impact:e.impactAt}),t==="B"&&(this.blockUntil=e.impactAt+(e.hits-1)*(this.spb/2)+.25),this.phase="strike",this.emit({type:"decide",action:t,attack:e})}updateStrike(){const t=this.attack;if(t.feint){this.t>=t.impactAt&&this.resolveFeint(t);return}const e=t.impactAt+t.hitsDone*(this.spb/2);if(this.t<e||(this.resolveHit(t),this.over||this.down||this.open)||(t.hitsDone++,t.hitsDone<t.hits)||(t.struckAt=this.t,t.hits>1&&t.clean&&this.addGauge(1),this.over||this.open))return;this.phase="recover";const n=this.comboIdx>=this.combo.length;this.phaseUntil=this.t+this.spb*(n?1:.5)}resolveFeint(t){const e=t.choice==="W";t.choice==="B"&&(this.guard+=t.heavy?2:1),e&&(this.stats.reads++,this.streak++,this.stamina=Math.min(this.mods.staminaMax,this.stamina+this.mods.readStamina)),this.emit({type:"feint",action:t.choice,read:e,attack:t}),e&&this.addGauge(2+this.mods.readGauge),this.onStreak(),!(this.open||this.over)&&(this.phase="feintBack",this.phaseUntil=this.t+.12)}followUp(){const t=this.attack,e=Lg[t.moveId];this.nextStep(!0,this.rng.pick(e))}resolveHit(t){const e=this.mods,n=t.choice,s=t.hits>1;this.stats.attacks++;const a=Ki(n),r=n==="B";if(!r&&n!==null&&n!=="W"&&!t.move.blockOnly&&!t.zones.includes(a)){if(this.stats.defended++,t.hitsDone===0&&(this.emit({type:"whiff",action:n,attack:t}),e.dodgeCounter>0)){const h=e.dodgeCounter*e.counterDmg*(this.opp.armor??1);if(this.damageOpp(h),this.emit({type:"autocounter",dmg:h}),this.over)return}s||(t.second&&this.stats.seconds++,this.streak++,this.addGauge(1+(t.heavy?1:0)+(t.second?1+e.secondGauge:0)),this.onStreak());return}if(r){const u=this.punchDamage(t)*(t.heavy?.5:i_)*e.chipMul;if(u>0&&(this.hp=Math.max(1,this.hp-u),this.stats.taken+=u),this.stats.defended++,t.hitsDone===0&&(this.stats.blocks++,this.emit({type:"block",chip:u,attack:t})),s)return;t.second&&this.stats.seconds++;const d=t.move.blockOnly||e.blockGauge||e.parry&&t.moveId!=="upper"&&t.moveId!=="swing"?1:0;this.addGauge(d+(t.second&&d?e.secondGauge:0));return}if(e.ghost&&!this.ghostUsed){this.ghostUsed=!0,this.stats.defended++,this.emit({type:"whiff",action:"W",attack:t}),s||this.addGauge(1);return}t.clean=!1,t.timeout&&t.hitsDone===0&&this.stats.timeouts++;let c=this.punchDamage(t),l=!1;e.mouthguard&&!this.guardUsed&&(this.guardUsed=!0,c=0,l=!0),this.hp-=c,this.stats.hits++,this.stats.taken+=c,this.gauge=e.grit?Math.floor(this.gauge/2):0,this.streak=0,this.def=null,this.emit({type:"hit",dmg:c,attack:t,saved:l}),this.hp<=0&&this.knockDown()}damageOf(t){return this.punchDamage(t)*t.hits}holdRead(){(this.phase==="read"||this.phase==="windup")&&(this.readPaused=!0)}punchDamage(t){return t.move.dmg*this.opp.dmg*(t.heavy?fh:1)*this.mods.dmgTaken*this.dmgScale}onStreak(){const t=this.mods;t.tauntStreak>0&&this.streak===t.tauntStreak&&(this.tauntReady=!0,this.emit({type:"taunt"})),t.metronome>0&&this.streak>0&&this.streak%t.metronome===0&&(this.stamina=t.staminaMax,this.emit({type:"metronome"}))}addGauge(t){this.open||this.over||(this.gauge=Math.min(this.gaugeReq,this.gauge+t),this.emit({type:"gauge",value:this.gauge,gain:t}),this.gauge>=this.gaugeReq&&this.openWindow())}openWindow(){this.phase="recoil",this.phaseUntil=this.beatAfter(this.t+.2),this.attack=null,this.combo=[],this.comboIdx=0,this.preview=[],this.gauge=0,this.windowDmg=0,this.windowHits=0,this.queued=0,this.windowBonus=this.tauntReady?1.5:1,this.tauntReady=!1,this.def=null,this.stamina=Math.min(this.mods.staminaMax,this.stamina+f_),this.guard=Math.min(this.mods.guardMax,this.guard+p_),this.stats.windows++,this.emit({type:"open"})}punch(){const t=this.mods,e=this.rng.chance(t.critChance),n=this.hp/this.maxHp>=.7?1+t.highHpDmg:1,s=s_*t.counterDmg*n*(this.opp.armor??1)*(e?2:1)*this.windowBonus;this.windowHits++,this.windowDmg+=s,this.stats.bestCombo=Math.max(this.stats.bestCombo,this.windowHits);const a=this.windowHits%2?"L":"R";this.damageOpp(s),this.emit({type:"punch",side:a,dmg:s,crit:e,combo:this.windowHits})}closeWindow(){if(this.mods.finisher>0&&this.windowDmg>0){const t=this.windowDmg*this.mods.finisher;if(this.damageOpp(t),this.emit({type:"finisher",dmg:t}),this.over)return}this.emit({type:"close",dmg:this.windowDmg,hits:this.windowHits}),this.rage=Math.min(o_,this.rage+r_),this.windowBonus=1,this.phase="recover",this.phaseUntil=this.beatAfter(this.t,1),this.phase2Pending&&(this.enterPhase2(),this.phaseUntil=this.beatAfter(this.t,3))}enterPhase2(){this.phase2Pending=!1,this.phase2=!0,this.rage=0,this.emit({type:"phase2",line:this.opp.phase2.line})}damageOpp(t){this.oppHp=Math.max(0,this.oppHp-t),this.stats.dealt+=t;const e=this.opp.phase2;e&&!this.phase2&&!this.phase2Pending&&this.oppHp>0&&this.oppHp/this.oppMax<=e.at&&(this.phase2Pending=!0),this.oppHp<=0&&(this.phase="ko",this.attack=null,this.finish(!0))}knockDown(){this.hp=0,this.knockdowns++,this.stats.knockdowns++,this.attack=null,this.combo=[],this.preview=[],this.phase="wait",this.def=null,this.blockUntil=-1;const t=this.knockdowns>=d_,e=Math.round((c_+l_*(this.knockdowns-1))*this.mods.getupTaps);this.down={t0:this.t,taps:0,need:Math.max(3,e),final:t,count:0},this.emit({type:"knockdown",count:this.knockdowns,final:t}),!t&&this.mods.towel&&!this.towelUsed&&(this.towelUsed=!0,this.getUp(!0))}getUp(t){this.down=null,this.hp=Math.max(1,Math.round(this.maxHp*(t?.5:h_+this.mods.getupHp))),this.gauge=0,this.stamina=this.mods.staminaMax,this.guard=this.mods.guardMax,this.toIdle(3),this.emit({type:"getup",towel:t})}finish(t){this.over||(this.over=t?"win":"lose",t||(this.phase="won"),this.attack=null,this.emit({type:"end",win:t}))}emit(t){this.events.push(t)}drain(){const t=this.events;return this.events=[],t}}function m_(i){const t=i.defended+i.hits,e=t?i.defended/t:1;let n;return i.hits===0&&i.reads+i.seconds>=2?n="S":e>=.88?n="A":e>=.75?n="B":e>=.55?n="C":n="D",i.knockdowns>0&&(n==="S"||n==="A")&&(n="B"),n}const ki="232,51,74",aa="34,184,104",ra="255,204,0",oa="255,160,40",ho=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),ds=i=>{const t=ho(i);return t*t*(3-2*t)},ca={top:.15,headBottom:.64,duckBottom:.79,colL:.36,colR:.64};class g_{canvas;g;fx=[];w=1;h=1;dpr=1;fade=0;lastZones=[];lastHeavy=!1;lastFeint=!1;lastBlockOnly=!1;lastHidden=!1;lastChoice=null;enabled=!0;pointAt=null;constructor(t){this.canvas=t,this.g=t.getContext("2d"),this.resize()}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.w=window.innerWidth,this.h=window.innerHeight,this.canvas.width=Math.round(this.w*this.dpr),this.canvas.height=Math.round(this.h*this.dpr)}add(t,e,n,s={}){const a={hit:.42,perfect:.38,spark:.2,number:.75,block:.3,heal:.9,open:.6}[t];this.fx.push({kind:t,t:0,life:a,x:e,y:n,...s})}clearFx(){this.fx=[],this.fade=0}draw(t,e,n,s){const a=this.g;a.setTransform(this.dpr,0,0,this.dpr,0,0),a.clearRect(0,0,this.w,this.h),t&&this.enabled&&(this.drawZones(t,n),this.drawRing(t,e),this.drawYou(t),t.open&&this.drawWindow(t,s)),this.drawFx(n),this.pointAt&&this.drawPointer(s)}drawZones(t,e){const n=t.attack,s=n&&(t.phase==="windup"||t.phase==="read"||t.phase==="strike")&&n.hitsDone===0;if(s?(this.lastZones=n.zones,this.lastHeavy=n.heavy,this.lastFeint=!1,this.lastBlockOnly=!!n.move.blockOnly,this.lastHidden=n.hidden,this.lastChoice=n.choice==="B"?"B":n.choice?Ki(n.choice):null,this.fade=Math.min(1,this.fade+e*6)):this.fade=Math.max(0,this.fade-e*5),this.fade<=.01||!this.lastZones.length)return;const a=s?t.progress():1,r=this.g,o=this.w,c=this.h,l=ca,h=c*l.top,u=c*l.headBottom,d=c*l.duckBottom,m=[{pos:"L",x0:0,x1:o*l.colL},{pos:"C",x0:o*l.colL,x1:o*l.colR},{pos:"R",x0:o*l.colR,x1:o}],g=this.lastHidden?["C"]:this.lastZones,w=y=>this.lastHidden&&y!=="C",p=this.lastHidden?[]:ph(g),f=this.fade*(this.lastFeint?.45:1),E=(.2+.28*ds(a))*f,L=(.14+.16*ds(a))*f,M=this.lastHidden||(g.includes("D")?!p.every(y=>y==="C")||this.lastBlockOnly:p.length===1&&p[0]==="D"),v=(y,R,P,I,F,C)=>{const O=r.createLinearGradient(0,R,0,I);O.addColorStop(0,`rgba(${F},${C*.55})`),O.addColorStop(.5,`rgba(${F},${C})`),O.addColorStop(1,`rgba(${F},${C*.7})`),r.fillStyle=O,r.fillRect(y,R,P-y,I-R)};for(const y of m){const R=g.includes(y.pos);v(y.x0,h,y.x1,u,w(y.pos)?oa:R?ki:aa,w(y.pos)?E*.8:R?E:L)}if(M){const y=g.includes("D");v(0,u,o,d,w("D")?oa:y?ki:aa,w("D")?E*.8:y?E:L*1.25)}if(this.lastChoice){r.save(),r.strokeStyle="rgba(255,255,255,"+.85*this.fade+")",r.lineWidth=3;const y=m.find(R=>R.pos===this.lastChoice);y?r.strokeRect(y.x0+3,h+3,y.x1-y.x0-6,u-h-6):this.lastChoice==="D"&&r.strokeRect(3,u+3,o-6,d-u-6),r.restore()}r.save(),r.strokeStyle=`rgba(255,255,255,${.5*this.fade})`,r.lineWidth=1.5,this.lastFeint&&r.setLineDash([8,8]),r.beginPath();for(const y of[o*l.colL,o*l.colR])r.moveTo(y,h),r.lineTo(y,M?d:u);if(M&&(r.moveTo(0,u),r.lineTo(o,u)),r.stroke(),this.lastHeavy){r.setLineDash([]),r.strokeStyle=`rgba(${ra},${.85*this.fade})`,r.lineWidth=4;for(const y of m)g.includes(y.pos)&&r.strokeRect(y.x0+2,h+2,y.x1-y.x0-4,u-h-4)}r.restore();const S=h+(u-h)*.3,T=Math.min(o*.075,34);for(const y of m){const R=(y.x0+y.x1)/2;w(y.pos)?this.question(R,S,T,this.fade):g.includes(y.pos)?this.cross(R,S,T*(y.pos==="C"?.85:1),this.fade):y.pos!=="C"&&this.chevrons(R,S,T,y.pos==="L"?-1:1,this.fade,a)}if(M){const y=(u+d)/2;this.lastBlockOnly||this.lastHidden?this.blockMark(o/2,y,T,this.fade):g.includes("D")?this.cross(o/2,y,T*.8,this.fade):this.chevronsDown(o/2,y,T,this.fade,a)}const x=this.lastHidden?"藏拳 · 看不清":this.lastBlockOnly?"躲不开 · 只能格挡":this.lastHeavy?"重拳 · 挡不住":"";x&&(r.save(),r.font=`700 ${Math.round(Math.min(o*.05,20))}px "Punch Display", sans-serif`,r.textAlign="center",r.fillStyle=this.lastHeavy&&!this.lastFeint?`rgba(${ra},${this.fade})`:`rgba(255,255,255,${this.fade*.95})`,r.shadowColor="rgba(0,0,0,0.6)",r.shadowBlur=6,r.fillText(x,o/2,S+T*1.45),r.restore())}cross(t,e,n,s){const a=this.g;a.save(),a.strokeStyle=`rgba(255,255,255,${s})`,a.shadowColor=`rgba(${ki},${s})`,a.shadowBlur=12,a.lineWidth=Math.max(3,n*.16),a.lineCap="round",a.beginPath(),a.moveTo(t-n/2,e-n/2),a.lineTo(t+n/2,e+n/2),a.moveTo(t+n/2,e-n/2),a.lineTo(t-n/2,e+n/2),a.stroke(),a.restore()}question(t,e,n,s){const a=this.g;a.save(),a.font="700 "+Math.round(n*1.2)+'px "Punch Num", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillStyle="rgba(255,210,140,"+s+")",a.shadowColor="rgba("+oa+","+s+")",a.shadowBlur=10,a.fillText("?",t,e),a.restore()}chevrons(t,e,n,s,a,r){const o=this.g;o.save(),o.lineWidth=Math.max(3,n*.13),o.lineCap="round",o.lineJoin="round";for(let c=0;c<3;c++){const l=(r*3+c*.33)%1,h=a*(.35+.65*(c===Math.floor(r*6%3)?1:.4+.2*l));o.strokeStyle=`rgba(160,255,200,${h})`,o.shadowColor=`rgba(${aa},${h})`,o.shadowBlur=10;const u=t+s*(c-1)*n*.42;o.beginPath(),o.moveTo(u-s*n*.18,e-n*.32),o.lineTo(u+s*n*.14,e),o.lineTo(u-s*n*.18,e+n*.32),o.stroke()}o.restore()}chevronsDown(t,e,n,s,a){const r=this.g;r.save(),r.lineWidth=Math.max(3,n*.13),r.lineCap="round",r.lineJoin="round";for(let o=0;o<3;o++){const c=s*(o===Math.floor(a*6%3)?1:.5);r.strokeStyle=`rgba(160,255,200,${c})`;const l=e+(o-1)*n*.34;r.beginPath(),r.moveTo(t-n*.36,l-n*.14),r.lineTo(t,l+n*.12),r.lineTo(t+n*.36,l-n*.14),r.stroke()}r.font=`700 ${Math.round(n*.5)}px "Punch Display", sans-serif`,r.fillStyle=`rgba(200,255,220,${s})`,r.textAlign="left",r.fillText("下潜",t+n*.6,e+n*.18),r.restore()}blockMark(t,e,n,s){const a=this.g;a.save(),a.fillStyle=`rgba(46,197,230,${.9*s})`,a.strokeStyle=`rgba(255,255,255,${s})`,a.lineWidth=2.5;const r=n*.9;a.beginPath(),a.roundRect(t-r/2,e-r/2,r,r,4),a.fill(),a.stroke(),a.font=`700 ${Math.round(n*.5)}px "Punch Display", sans-serif`,a.fillStyle=`rgba(255,255,255,${s})`,a.textAlign="left",a.fillText("格挡",t+n*.65,e+n*.18),a.restore()}drawRing(t,e){const n=t.attack,s=e.fighter;if(!n||!(t.phase==="windup"||t.phase==="read"||t.phase==="strike")||n.hitsDone>0||!s?.strikeActive)return;const a=this.g,r=t.phase==="read"?Math.max(0,t.readLeft)/n.readTotal:t.phase==="windup"?1:0,o=t.phase==="strike"?t.progress():1-r,c=e.project(s.strikeGlove),l=Math.max(22,e.screenRadius(s.strikeGlove,.085)),h={x:Math.min(this.w-l*1.2,Math.max(l*1.2,c.x)),y:Math.min(this.h-l,Math.max(l,c.y))},u=t.phase==="strike"?l*(1+1.2*(1-ds((o-.8)/.2))):l*(1.25+2.4*r),d=t.phase==="read"&&r<.3,m=d?"255,90,90":n.heavy?ra:t.phase==="strike"?"255,255,255":ki;a.save(),a.globalAlpha=Math.min(1,this.fade*1.4),a.strokeStyle="rgba(255,255,255,0.35)",a.lineWidth=1.5,a.beginPath(),a.arc(h.x,h.y,l,0,Math.PI*2),a.stroke(),a.strokeStyle=`rgba(${m},0.95)`,a.shadowColor=`rgba(${m},0.9)`,a.shadowBlur=d?22:10,a.lineWidth=d?5:3,a.beginPath(),a.arc(h.x,h.y,u,0,Math.PI*2),a.stroke(),a.restore()}drawYou(t){const e=this.g,n=this.w,s=this.h,a=t.attack,o=a&&(t.phase==="windup"||t.phase==="read"||t.phase==="strike")?.9*this.fade:0;if(o<.02||!a)return;const c=Ki(a.choice),l=a.choice&&a.choice!=="B"&&a.choice!=="W"?ds((t.t-a.decidedAt)/.14):0;let h=n/2,u=s*(ca.headBottom-.035);c==="L"?h=n/2-n*.32*l:c==="R"?h=n/2+n*.32*l:c==="D"&&(u+=s*.11*l);const d=Math.min(n*.075,30),m=a.choice==="B",g=!a.hidden&&!a.zones.includes(c)&&!a.move.blockOnly&&a.choice!==null&&a.choice!=="W",w=a.choice===null?"255,255,255":m?"46,197,230":g?aa:a.hidden?oa:ki;e.save(),e.globalAlpha=o,e.fillStyle="rgba(8,10,14,0.85)",e.strokeStyle=`rgba(${w},1)`,e.lineWidth=2.2,e.beginPath(),e.arc(h,u-d*.55,d*.42,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(h-d*1,u+d*.75),e.quadraticCurveTo(h-d*.95,u-d*.02,h,u-d*.02),e.quadraticCurveTo(h+d*.95,u-d*.02,h+d*1,u+d*.75),e.closePath(),e.fill(),e.stroke(),e.font=`700 ${Math.round(d*.42)}px "Punch Num", sans-serif`,e.fillStyle="rgba(255,255,255,0.9)",e.textAlign="center",e.fillText("YOU",h,u-d*1.15),e.restore()}drawWindow(t,e){const n=this.g,s=this.w,a=this.h,r=(mh+t.mods.windowBeats)*t.spb,o=t.phase==="dazed"?Math.max(0,t.windowEnd-t.t):r,c=n.createRadialGradient(s/2,a*.4,Math.min(s,a)*.25,s/2,a*.4,Math.max(s,a)*.75);c.addColorStop(0,"rgba(255,204,0,0)"),c.addColorStop(1,`rgba(255,170,0,${.28+.06*Math.sin(e*12)})`),n.fillStyle=c,n.fillRect(0,0,s,a),n.save(),n.strokeStyle="rgba(255,230,150,0.22)",n.lineWidth=2;const l=14;for(let g=0;g<l;g++){const w=g/l*Math.PI*2+Math.floor(e*14)*.37,p=Math.max(s,a)*.42,f=Math.max(s,a)*.75;n.beginPath(),n.moveTo(s/2+Math.cos(w)*p,a*.4+Math.sin(w)*p),n.lineTo(s/2+Math.cos(w)*f,a*.4+Math.sin(w)*f),n.stroke()}n.restore();const h=s*.6,u=(s-h)/2,d=a*(ca.headBottom+.02),m=ho(o/r);n.save(),n.transform(1,0,-.25,1,d*.25,0),n.fillStyle="rgba(0,0,0,0.55)",n.fillRect(u,d,h,10),n.fillStyle=`rgba(${ra},1)`,n.fillRect(u,d,h*m,10),n.restore()}drawFx(t){const e=this.g,n=this.w,s=this.h;for(const a of this.fx){a.t+=t;const r=ho(a.t/a.life),o=1-r;switch(a.kind){case"hit":{const c=e.createRadialGradient(n/2,s/2,Math.min(n,s)*.2,n/2,s/2,Math.max(n,s)*.7);c.addColorStop(0,`rgba(${ki},0)`),c.addColorStop(1,`rgba(200,20,40,${.65*o})`),e.fillStyle=c,e.fillRect(0,0,n,s),r<.12&&(e.fillStyle=`rgba(255,255,255,${.35*(1-r/.12)})`,e.fillRect(0,0,n,s));break}case"perfect":{e.save(),e.strokeStyle=`rgba(255,255,255,${.9*o})`,e.lineWidth=14*o+2,e.strokeRect(0,0,n,s),e.restore();break}case"block":{e.save(),e.strokeStyle=`rgba(46,197,230,${o})`,e.lineWidth=4,e.beginPath(),e.arc(a.x,a.y,30+60*r,0,Math.PI*2),e.stroke(),e.restore();break}case"spark":{e.save(),e.strokeStyle=`rgba(255,240,180,${o})`,e.lineWidth=3,e.lineCap="round";const c=8;for(let l=0;l<c;l++){const h=l/c*Math.PI*2+a.x*.01,u=12+30*r,d=u+22*(1-r);e.beginPath(),e.moveTo(a.x+Math.cos(h)*u,a.y+Math.sin(h)*u),e.lineTo(a.x+Math.cos(h)*d,a.y+Math.sin(h)*d),e.stroke()}e.restore();break}case"open":{e.fillStyle=`rgba(255,220,120,${.45*o})`,e.fillRect(0,0,n,s);break}case"number":case"heal":{e.save();const c=a.kind==="heal"?40:55,l=a.big?34:24;e.font=`italic 700 ${l}px "Punch Num", "Punch Display", sans-serif`,e.textAlign="center",e.globalAlpha=o,e.lineWidth=4,e.strokeStyle="rgba(0,0,0,0.7)";const h=a.y-c*ds(r);e.strokeText(a.text??"",a.x,h),e.fillStyle=a.color??"#fff",e.fillText(a.text??"",a.x,h),e.restore();break}}}this.fx=this.fx.filter(a=>a.t<a.life)}drawPointer(t){const e=this.g,n=this.w,s=this.h,a=ca;let r=n/2,o=s*.5;this.pointAt==="L"?r=n*.18:this.pointAt==="R"?r=n*.82:this.pointAt==="D"||this.pointAt==="block"||this.pointAt==="look"?(o=s*.86,r=this.pointAt==="D"?n*.18:this.pointAt==="look"?n*.5:n*.82):this.pointAt==="tap"&&(o=s*.42),(this.pointAt==="L"||this.pointAt==="R")&&(o=s*(a.top+(a.headBottom-a.top)*.3)+34);const c=Math.sin(t*7)*8;e.save(),e.translate(r,o+c);const l=t*1.4%1;e.strokeStyle=`rgba(255,255,255,${.8*(1-l)})`,e.lineWidth=3,e.beginPath(),e.arc(0,0,14+30*l,0,Math.PI*2),e.stroke(),e.fillStyle="#ffcc00",e.strokeStyle="#141821",e.lineWidth=3,e.beginPath(),e.moveTo(0,0),e.lineTo(-13,30),e.lineTo(-5,28),e.lineTo(-7,50),e.lineTo(7,50),e.lineTo(5,28),e.lineTo(13,30),e.closePath(),e.fill(),e.stroke(),e.restore()}}const _r=130,Ml=16,__={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11};function Qe(i){const t=/^([A-G][b#]?)(-?\d)$/.exec(i);if(!t)throw new Error(`bad note ${i}`);return 440*2**((__[t[1]]+(Number(t[2])+1)*12-69)/12)}const _h=[[[0,"E5"],[2,"A5"],[5,"C6"],[7,"B5"],[10,"G#5"],[12,"A5"]],[[0,"E6"],[3,"D6"],[6,"C6"],[8,"B5"],[11,"C6"],[14,"E6"]],[[0,"F6"],[2,"E6"],[4,"D6"],[7,"C6"],[10,"Bb5"],[12,"A5"]],[[0,"G#5"],[3,"A5"],[6,"B5"],[8,"C6"],[9,"B5"],[10,"A5"],[12,"E5"],[14,"G#5"]]],x_=["A1","C2","F1","E1"],v_=[0,6,11],M_=[0,3,11],b_=[4,12],S_=[6],bl=["E5","G#5","A5","B5","C6","D6","E6","G#6","A6"],Sl=_h.flat().map(([,i])=>i),xr={menu:{id:"menu",drums:!1,hats:"eighth",grit:.2,prompt:"slowed phonk, dark chill, 130 bpm half-time feel, memphis cowbell melody, soft 808 bass, vinyl crackle, foggy late-night boxing gym, instrumental loop"},stage1:{id:"stage1",drums:!0,hats:"eighth",grit:.35,prompt:"drift phonk, 130 bpm, catchy cowbell melody, punchy 808 bass, crisp memphis drums, playful but tough, training montage energy, instrumental loop"},stage2:{id:"stage2",drums:!0,hats:"sixteenth",grit:.5,prompt:"dark drift phonk, 130 bpm, distorted 808, aggressive cowbell melody, underground fight club, gritty tape saturation, instrumental loop"},stage3:{id:"stage3",drums:!0,hats:"sixteenth",grit:.55,prompt:"brazilian phonk, 130 bpm, bouncy funk drums, cowbell lead, heavy 808 slides, city night street fight, instrumental loop"},stage4:{id:"stage4",drums:!0,hats:"rolls",grit:.65,prompt:"hard drift phonk, 130 bpm, very distorted 808, fast hi-hat rolls, menacing cowbell melody, national championship arena, instrumental loop"},stage5:{id:"stage5",drums:!0,hats:"rolls",grit:.75,prompt:"epic phonk, 130 bpm, huge distorted 808, cowbell lead with eerie choir pad, world title fight, relentless, instrumental loop"},boss:{id:"boss",drums:!0,hats:"rolls",grit:.85,prompt:"aggressive house phonk, 130 bpm, crushing 808 bass, double-time cowbell melody, cowbell stabs, final boss fight, intense, instrumental loop"}};class y_{ctx=null;master;sfx;music;musicFilter;crowdGain;crowdFilter;noise;shaper;muted=!1;musicOn=!0;bpm=_r;musicStart=0;clockStart=performance.now()/1e3;track="";style=xr.menu;seqTimer=0;seqNext=0;seqStep=0;file=null;fileInfo=null;loops=null;buffers=new Map;intensity=.35;riffAt=0;key=1;unlock(){if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this.ctx=new t,this.build();const e=this.track;this.track="",e&&this.playTrack(e)}!this.muted&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}setMusic(t){this.musicOn=t,this.ctx&&this.music.gain.setTargetAtTime(t?.62:0,this.ctx.currentTime,.1)}build(){const t=this.ctx;this.master=t.createGain(),this.master.gain.value=.9;const e=t.createDynamicsCompressor();e.threshold.value=-12,e.ratio.value=4,this.master.connect(e).connect(t.destination),this.sfx=t.createGain(),this.sfx.connect(this.master),this.musicFilter=t.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=18e3,this.musicFilter.Q.value=.9,this.music=t.createGain(),this.music.gain.value=this.musicOn?.62:0,this.music.connect(this.musicFilter).connect(this.master),this.shaper=t.createWaveShaper(),this.shaper.curve=yl(.5),this.shaper.connect(this.music);const n=t.sampleRate*2;this.noise=t.createBuffer(1,n,t.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=this.noise,a.loop=!0,this.crowdFilter=t.createBiquadFilter(),this.crowdFilter.type="bandpass",this.crowdFilter.frequency.value=900,this.crowdFilter.Q.value=.7,this.crowdGain=t.createGain(),this.crowdGain.gain.value=.02,a.connect(this.crowdFilter).connect(this.crowdGain).connect(this.sfx),a.start()}get now(){return this.ctx?this.ctx.currentTime:performance.now()/1e3-this.clockStart}ok(){return!!this.ctx&&!this.muted}get spb(){return 60/this.bpm}musicPos(){let t=this.now-this.musicStart;const e=this.fileInfo;return this.file&&e&&t>=e.end&&(t=e.start+(t-e.start)%(e.end-e.start)),t}beatPhase(){return(this.musicPos()%this.spb+this.spb)%this.spb}nextSixteenth(){const t=this.spb/4,e=this.beatPhase()%t,n=t-e;return this.now+(n<.01?n+t:n)}playTrack(t){t!==this.track&&(this.track=t,this.style=xr[t]??xr.stage1,this.ctx&&this.loadFile(t).then(e=>{if(this.track!==t)return;this.stopSources();const n=this.loops?.[`bgm-${t}.mp3`];e&&n?this.startFile(e,n):this.startSynth()}))}stopMusic(){this.track="",this.stopSources()}stopSources(){if(window.clearInterval(this.seqTimer),this.seqTimer=0,this.file){try{this.file.stop()}catch{}this.file.disconnect(),this.file=null,this.fileInfo=null}}async loadFile(t){if(this.buffers.has(t))return this.buffers.get(t);try{if(!this.loops){const s=await fetch("./audio/loops.json");this.loops=s.ok?await s.json():{}}if(!this.loops?.[`bgm-${t}.mp3`]?.bpm)return this.buffers.set(t,null),null;const e=await fetch(`./audio/bgm-${t}.mp3`),n=e.ok?await this.ctx.decodeAudioData(await e.arrayBuffer()):null;return this.buffers.set(t,n),n}catch{return this.buffers.set(t,null),null}}startFile(t,e){const n=this.ctx,s=n.createBufferSource();s.buffer=t,s.loop=!0,s.loopStart=e.start,s.loopEnd=e.end,s.connect(this.music);const a=n.currentTime+.05;s.start(a,0),this.file=s,this.fileInfo=e,this.bpm=e.bpm,this.key=2**((e.shift??0)/12),this.musicStart=a}startSynth(){const t=this.ctx,e=this.bpm===_r&&this.musicStart>0;this.bpm=_r,this.key=1,this.shaper.curve=yl(this.style.grit),e||(this.musicStart=t.currentTime+.1);const n=this.spb/4,s=t.currentTime+.05-this.musicStart;this.seqStep=Math.max(0,Math.ceil(s/n)),this.seqNext=this.musicStart+this.seqStep*n,this.seqTimer=window.setInterval(()=>this.schedule(),40)}schedule(){if(!this.ctx||this.muted)return;const t=this.spb/4;for(;this.seqNext<this.ctx.currentTime+.15;)this.seqHit(this.seqStep,this.seqNext),this.seqStep++,this.seqNext+=t}seqHit(t,e){const n=this.style,s=t%Ml,a=Math.floor(t/Ml)%4,r=this.intensity>.9,o=this.music;if(n.drums){(M_.includes(s)||r&&s===7)&&this.kick(e,o),b_.includes(s)&&this.clap(e,o);const c=n.hats==="rolls"&&s>=12&&a===3;S_.includes(s)?this.hat(e,o,.16,.8):(n.hats!=="eighth"||s%2===0)&&this.hat(e,o,s%4===2?.07:.035,c?.5:1),c&&this.hat(e+this.spb/8,o,.03,.5)}else s%4===0&&this.hat(e,o,.03,.6);v_.includes(s)&&this.bass(Qe(x_[a]),e,s===0?.5:.25,o);for(const[c,l]of _h[a])c===s&&(this.cowbell(Qe(l),e,.16,o),r&&this.cowbell(Qe(l)*2,e,.06,o))}setIntensity(t){this.intensity=t}enterRead(){if(!this.ctx)return;const t=this.ctx.currentTime;this.musicFilter.frequency.cancelScheduledValues(t),this.musicFilter.frequency.setTargetAtTime(420,t,.06),this.music.gain.setTargetAtTime(this.musicOn?.45:0,t,.08),this.crowdGain.gain.setTargetAtTime(.008,t,.1)}exitRead(){if(!this.ctx)return;const t=this.ctx.currentTime;this.musicFilter.frequency.cancelScheduledValues(t),this.musicFilter.frequency.setTargetAtTime(18e3,t,.03),this.music.gain.setTargetAtTime(this.musicOn?.62:0,t,.03),this.crowdGain.gain.setTargetAtTime(.03,t,.2)}env(t,e,n,s,a){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(Math.max(2e-4,n),e+s),t.gain.exponentialRampToValueAtTime(1e-4,e+s+a)}tone(t,e,n,s,a,r,o=this.sfx){const c=this.ctx,l=r??c.currentTime,h=c.createOscillator();h.type=t,h.frequency.setValueAtTime(e,l),h.frequency.exponentialRampToValueAtTime(Math.max(20,n),l+s);const u=c.createGain();this.env(u,l,a,.004,s),h.connect(u).connect(o),h.start(l),h.stop(l+s+.05)}burst(t,e,n,s,a,r=1,o,c=this.sfx){const l=this.ctx,h=o??l.currentTime,u=l.createBufferSource();u.buffer=this.noise;const d=l.createBiquadFilter();d.type=t,d.Q.value=r,d.frequency.setValueAtTime(e,h),d.frequency.exponentialRampToValueAtTime(Math.max(30,n),h+s);const m=l.createGain();this.env(m,h,a,.003,s),u.connect(d).connect(m).connect(c),u.start(h,Math.random()*1.5),u.stop(h+s+.05)}cowbell(t,e,n,s){const a=this.ctx;s===this.sfx&&(t*=this.key);const r=a.createBiquadFilter();r.type="bandpass",r.frequency.value=t*1.9,r.Q.value=2.2;const o=a.createGain();this.env(o,e,n,.002,.22);for(const c of[1,1.48]){const l=a.createOscillator();l.type="square",l.frequency.value=t*c,l.connect(r),l.start(e),l.stop(e+.3)}r.connect(o).connect(s)}bass(t,e,n,s){const a=this.ctx;s===this.sfx&&(t*=this.key);const r=a.createOscillator();r.type="sine",r.frequency.setValueAtTime(t*2,e),r.frequency.exponentialRampToValueAtTime(t,e+.04);const o=a.createGain();this.env(o,e,.7,.005,n),r.connect(o).connect(s===this.music?this.shaper:s),r.start(e),r.stop(e+n+.05)}kick(t,e){this.tone("sine",150,42,.18,.95,t,e),this.burst("highpass",4e3,2e3,.01,.2,1,t,e)}clap(t,e){this.burst("bandpass",1600,1200,.12,.5,1.2,t,e),this.burst("bandpass",1600,1200,.08,.35,1.2,t+.012,e)}hat(t,e,n,s){this.burst("highpass",8e3,7e3,n,.12*s,1,t,e)}anticipate(t){this.ok()&&(this.burst("bandpass",600,t?2600:1800,.25,t?.22:.12,2),t&&this.tone("sawtooth",55,110,.3,.08))}whoosh(t=1){this.ok()&&this.burst("bandpass",2400,500,.18,.32*t,1.4)}dodge(){this.ok()&&this.burst("bandpass",1500,3200,.12,.16,2)}guardUp(){this.ok()&&this.tone("sine",180,120,.06,.25)}block(){this.ok()&&(this.tone("sine",220,110,.1,.6),this.burst("bandpass",1200,600,.06,.55,2.5))}gauge(t){if(!this.ok())return;const e=bl[Math.min(bl.length-1,Math.max(0,t+1))];this.cowbell(Qe(e),this.nextSixteenth(),.35,this.sfx)}read(){if(!this.ok())return;const t=this.nextSixteenth(),e=this.spb/4;["A5","C6","E6","G#6"].forEach((n,s)=>this.cowbell(Qe(n),t+s*e*.5,.3,this.sfx))}feint(){if(!this.ok())return;const t=this.ctx,e=t.currentTime,n=t.createOscillator();n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(55,e+.35);const s=t.createGain();this.env(s,e,.45,.005,.35),n.connect(s).connect(this.shaper),n.start(e),n.stop(e+.4)}second(){if(!this.ok())return;const t=this.nextSixteenth();for(const e of["A5","E6","A6"])this.cowbell(Qe(e),t,.28,this.sfx);this.burst("highpass",6e3,3e3,.6,.18,.7,t)}hurt(t=!1){if(!this.ok())return;this.tone("sine",t?110:140,36,t?.32:.22,1),this.burst("lowpass",2400,300,.12,.8,.7),this.burst("highpass",3e3,1500,.04,.5);const e=this.ctx.currentTime;this.musicFilter.frequency.cancelScheduledValues(e),this.musicFilter.frequency.setValueAtTime(900,e),this.musicFilter.frequency.setTargetAtTime(18e3,e+.25,.15)}drop(){if(!this.ok())return;const t=this.nextSixteenth();this.burst("highpass",5e3,2500,.9,.25,.7,t),this.bass(Qe("A1"),t,.8,this.sfx),this.cheer(.6)}windowEnd(){this.ok()&&this.burst("lowpass",1200,200,.4,.2)}punch(t=!1,e=1){if(!this.ok())return;const n=this.ctx.currentTime;this.kick(n,this.sfx),this.burst("highpass",2600,1200,.05,t?.6:.35,.8,n);const s=Sl[this.riffAt++%Sl.length];this.cowbell(Qe(s)*(t?2:1),n,.3,this.sfx),e%4===0&&this.cheer(.25)}bell(t=.6,e){if(!this.ok())return;const n=this.ctx,s=e??n.currentTime,a=n.createOscillator(),r=n.createOscillator(),o=n.createGain();a.frequency.value=880,r.frequency.value=880*1.41,o.gain.setValueAtTime(900,s),o.gain.exponentialRampToValueAtTime(20,s+1.2),r.connect(o).connect(a.frequency);const c=n.createGain();this.env(c,s,t,.003,1.4),a.connect(c).connect(this.sfx),a.start(s),r.start(s),a.stop(s+1.6),r.stop(s+1.6)}bells(t=3){if(!this.ok())return;const e=this.nextSixteenth();for(let n=0;n<t;n++)this.bell(.5,e+n*this.spb/2)}knockdown(){if(!this.ok())return;this.tone("sine",80,30,.6,1),this.burst("lowpass",800,100,.5,.7);const t=this.ctx.currentTime;this.musicFilter.frequency.cancelScheduledValues(t),this.musicFilter.frequency.setValueAtTime(300,t),this.musicFilter.frequency.setTargetAtTime(18e3,t+3,.5)}count(t){this.ok()&&this.cowbell(Qe(t>=8?"E6":"A5"),this.ctx.currentTime,.25,this.sfx)}ko(){if(!this.ok())return;const t=this.nextSixteenth();this.bass(Qe("A1"),t,1.4,this.sfx),this.burst("highpass",6e3,2e3,1.2,.3,.7,t);for(let e=0;e<4;e++)this.bell(.45,t+e*this.spb/2);this.cheer(1)}lose(){if(!this.ok())return;const t=this.ctx.currentTime;["E6","D6","C6","A5"].forEach((e,n)=>this.cowbell(Qe(e),t+n*.18,.25,this.sfx))}click(){this.ok()&&this.tone("square",900,700,.04,.06)}coin(){if(!this.ok())return;const t=this.ctx.currentTime;this.cowbell(Qe("E6"),t,.2,this.sfx),this.cowbell(Qe("A6"),t+.07,.2,this.sfx)}heartbeat(){if(!this.ok())return;this.tone("sine",60,40,.12,.5);const t=this.ctx.currentTime;this.tone("sine",55,38,.12,.4,t+.18)}cheer(t){if(!this.ctx)return;const e=this.crowdGain.gain,n=this.ctx.currentTime;e.cancelScheduledValues(n),e.setValueAtTime(e.value,n),e.linearRampToValueAtTime(.06+.3*t,n+.08),e.setTargetAtTime(.03,n+.3,.6),this.crowdFilter.frequency.setTargetAtTime(900+500*t,n,.1),this.crowdFilter.frequency.setTargetAtTime(900,n+.4,.6)}}function yl(i){const e=new Float32Array(new ArrayBuffer(4096)),n=1+i*24;for(let s=0;s<1024;s++){const a=s/1023*2-1;e[s]=Math.tanh(n*a)/Math.tanh(n)}return e}const At=(i,t=document)=>t.querySelector(i),w_=(i,t=document)=>Array.from(t.querySelectorAll(i));function E_(i){return i.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function re(i,t="",e=""){return`<button class="btn ${t}" ${e}><span>${i}</span></button>`}function me(i,t=""){return`<span class="tag ${t}"><span>${i}</span></span>`}function As(i){const t=At("#toast"),e=document.createElement("div");e.className="t",e.innerHTML=`<span>${i}</span>`,t.appendChild(e),setTimeout(()=>e.remove(),2500)}function Pe(i,t,e){for(const n of w_("[data-act]",i))n.addEventListener("click",s=>{s.stopPropagation();const a=t[n.dataset.act];a&&(e?.(),a(n))})}class T_{root=At("#hud");meHp=At("#me-hp");meLag=At("#me-lag");foeHp=At("#foe-hp");foeLag=At("#foe-lag");meNum=At("#me-num");foeNum=At("#foe-num");tries=At("#tries");strip=At("#strip");read=At("#read");readName=At("#read-name");readDmg=At("#read-dmg");readTags=At("#read-tags");readFill=At("#read-fill");stamPips=At("#stam-pips");guardPips=At("#guard-pips");gauge=At("#gauge");gaugeNow=At("#gauge-now");gaugeNeed=At("#gauge-need");gaugeLabel=At("#gauge-label");pips=At("#gauge-pips");combo=At("#combo");comboN=At("#combo-n");down=At("#down");downCount=At("#down-count");downFill=At("#down-fill");downTip=At("#down-tip");callouts=At("#callouts");memeEl=At("#meme");coachEl=At("#coach");btn={D:At("#btn-duck"),W:At("#btn-look"),B:At("#btn-block")};sideL=At("#hint-left");sideR=At("#hint-right");costDuck=At("#cost-duck");costBlock=At("#cost-block");lastGauge=-1;lastNeed=-1;lastCount=0;comboHide=0;stripKey="";readKey=null;resKey="";show(t){this.root.classList.toggle("hidden",!t)}setup(t,e,n){At("#me-name").textContent=e,At("#foe-name").textContent=`「${t.opp.nick}」${t.opp.name}`,At("#bout-tag").textContent=n,this.lastGauge=-1,this.lastNeed=-1,this.lastCount=0,this.stripKey="",this.readKey=null,this.resKey="",this.combo.classList.remove("show"),this.down.classList.add("hidden"),this.memeEl.classList.add("hidden"),this.callouts.innerHTML="",this.coach(null),this.update(t,0)}update(t,e){const n=Math.max(0,t.hp/t.maxHp),s=Math.max(0,t.oppHp/t.oppMax);this.meHp.style.transform=`scaleX(${n})`,this.meLag.style.transform=`scaleX(${n})`,this.foeHp.style.transform=`scaleX(${s})`,this.foeLag.style.transform=`scaleX(${s})`,this.meHp.parentElement.classList.toggle("low",n<.3),this.meNum.textContent=`${Math.ceil(t.hp)}/${t.maxHp}`,this.foeNum.textContent=`${Math.ceil(t.oppHp)}`,this.tries.querySelectorAll("i").forEach((o,c)=>o.classList.toggle("lost",c>=3-t.knockdowns)),this.updateStrip(t),this.updateRead(t),this.updateResources(t);const a=t.gaugeReq,r=t.open?a:Math.floor(t.gauge);if(a!==this.lastNeed&&(this.pips.innerHTML="<i></i>".repeat(a),this.gaugeNeed.textContent=String(a),this.lastNeed=a,this.lastGauge=-1),r!==this.lastGauge&&(r>this.lastGauge&&this.lastGauge>=0&&this.pulse(this.gauge,"bump"),r<this.lastGauge&&r===0&&!t.open&&this.pulse(this.gauge,"reset",400),this.gaugeNow.textContent=String(r),this.pips.querySelectorAll("i").forEach((o,c)=>o.classList.toggle("on",c<r)),this.lastGauge=r),this.gauge.classList.toggle("full",t.open),this.gaugeLabel.textContent=t.open?"破绽！连点屏幕":"防住 → 反击",this.gauge.style.opacity=t.down?"0":"1",t.open&&t.windowHits>0?(this.combo.classList.add("show"),this.comboN.textContent=String(t.windowHits),this.comboHide=e+1.2):e>this.comboHide&&this.combo.classList.remove("show"),t.down){this.down.classList.remove("hidden");const o=t.down.count||1;o!==this.lastCount&&(this.downCount.textContent=String(o),this.downCount.classList.remove("pop"),this.downCount.offsetWidth,this.downCount.classList.add("pop"),this.lastCount=o),this.downFill.style.transform=`scaleX(${t.down.final?0:Math.min(1,t.down.taps/t.down.need)})`,this.downTip.textContent=t.down.final?"起不来了……":"连点屏幕站起来！"}else this.down.classList.add("hidden"),this.lastCount=0}updateStrip(t){const e=t.attack,n=e&&!e.second?e.index:e?Math.min(t.preview.length-1,e.index):-1,s=t.preview.map(a=>`${a.glyph}${a.hidden?"?":""}${a.heavy?"!":""}`).join("")+`|${n}|${t.open}`;if(s!==this.stripKey){if(this.stripKey=s,!t.preview.length||t.open){this.strip.innerHTML="";return}this.strip.innerHTML=t.preview.map((a,r)=>`<i class="${[a.hidden?"hidden-step":"",a.heavy&&!a.hidden?"heavy":"",r===n?"now":"",r<n?"done":""].join(" ")}"><span>${a.hidden?"?":a.glyph}</span></i>`).join("")}}updateRead(t){const e=t.attack;if(!(e&&(t.phase==="windup"||t.phase==="read"||t.phase==="strike"))||t.open){this.read.classList.add("hidden"),this.readKey=null;return}if(this.read.classList.remove("hidden"),this.readKey!==e){this.readKey=e,this.readName.textContent=e.hidden?"藏拳":e.move.name,this.readDmg.textContent=`-${Math.round(t.damageOf(e))}`;const r=[];e.second&&r.push('<span class="tag red"><span>第二拳</span></span>'),e.heavy&&r.push('<span class="tag"><span>重拳 · 挡不住</span></span>'),e.move.blockOnly&&r.push('<span class="tag cyan"><span>只能格挡</span></span>'),e.hits>1&&r.push(`<span class="tag dim"><span>连打 ×${e.hits} · 闪要 2 体力</span></span>`),e.hidden&&r.push('<span class="tag dim"><span>左勾 / 右勾 / 上勾？只有格挡稳</span></span>'),e.feintChance>0&&r.push(`<span class="tag dim" style="color:var(--violet)"><span>假动作 ${Math.round(e.feintChance*100)}%</span></span>`),this.readTags.innerHTML=r.join("")}const s=e.readTotal,a=t.phase==="windup"?s:t.phase==="read"?Math.max(0,t.readLeft):0;this.readFill.style.transform=`scaleX(${a/s})`,this.read.classList.toggle("urgent",t.phase==="read"&&a<1),this.read.classList.toggle("decided",t.phase==="strike"),t.phase==="strike"&&(this.readName.textContent=e.choice?`${e.hidden?"藏拳":e.move.name} → ${Rg[e.choice]}`:`${e.hidden?"藏拳":e.move.name} → 愣住了`)}updateResources(t){const e=t.mods,n=t.attack,s=t.deciding,a=`${t.stamina}/${e.staminaMax}|${t.guard}/${e.guardMax}|${s}|${n?.hits}|${n?.heavy}|${t.open}|${!!t.down}`;if(a===this.resKey)return;const r=this.resKey.split("|");this.resKey=a;const o=(u,d,m,g)=>{u.innerHTML=Array.from({length:m},(w,p)=>`<i class="${p<d?"on":""} ${p>=d&&p<g?"spent":""}"></i>`).join("")};o(this.stamPips,t.stamina,e.staminaMax,Number(r[0]?.split("/")[0]??0)),o(this.guardPips,t.guard,e.guardMax,Number(r[1]?.split("/")[0]??0));const c=t.open||!!t.down,l=u=>!c&&(!s||!t.canAfford(u));for(const u of["D","B","W"])this.btn[u].classList.toggle("off",l(u));this.sideL.classList.toggle("off",!c&&(!s||!t.canAfford("L"))),this.sideR.classList.toggle("off",!c&&(!s||!t.canAfford("R")));const h=n&&n.hits>1?2:1;this.costDuck.textContent=t.open?"还手！":`体力 ${h}`,this.costBlock.textContent=t.open?"还手！":n?.heavy?e.blockHeavy?"架势 2":"挡不住":"架势 1"}pulse(t,e,n=160){t.classList.remove(e),t.offsetWidth,t.classList.add(e),setTimeout(()=>t.classList.remove(e),n)}callout(t,e="",n=""){const s=document.createElement("div");for(s.className=`callout ${e}`,s.innerHTML=n?`${t}<span class="sub">${n}</span>`:t,this.callouts.appendChild(s);this.callouts.children.length>2;)this.callouts.firstElementChild.remove();setTimeout(()=>s.remove(),900)}meme(t,e=""){const n=this.memeEl;n.innerHTML=e?`${t}<small>${e}</small>`:t,n.classList.remove("hidden"),n.style.animation="none",n.offsetWidth,n.style.animation="",clearTimeout(n._t),n._t=window.setTimeout(()=>n.classList.add("hidden"),2400)}coach(t){if(!t){this.coachEl.classList.add("hidden");return}this.coachEl.innerHTML=`<span class="who">COACH · 教练</span>${t}`,this.coachEl.classList.remove("hidden")}}const la={zones:"时间停住了，慢慢想（教学时不计时）。<b>红色</b>会挨打，<b>绿色</b>安全。<br>点绿色那边的屏幕，往那边闪。",hook:"勾拳扫过一边和中间：往<b>另一边</b>闪，或者<b>下潜</b>。",upper:"上勾拳从下往上：<b>别下潜</b>，往两边闪。",swing:"横扫打上面一整排：<b>下潜</b>或<b>格挡</b>。",body:"腹击躲不开：只能<b>格挡</b>（花 1 点架势）。",flurry:"连打：<b>格挡</b>只花 1 架势；闪开要 2 体力。",heavy:"发金光的是<b>重拳</b>：挡不住，必须闪。留着体力就是为了它。",hidden:"<b>藏拳</b>：可能是左勾、右勾或上勾。闪是赌，<b>格挡</b>最稳。",feint:"这一拳可能是<b>假动作</b>（看概率）。点<b>看穿</b>站着不动：猜对了反击值 +2，猜错了挨一拳。",second:"<b>第二拳</b>来得更急，思考时间更短。防住它，反击值多 +1。",open:"<b>破绽！</b>连点屏幕还手，每一拳都踩在节拍上。",down:"倒地了！<b>连点屏幕</b>站起来！",track:"他会打向你<b>上次闪去的那边</b>：换个方向，或者下潜。",tired:"体力和架势用完就只能<b>硬吃</b>。每一套开始各回 1 点，破绽时多回。省着点用。",timer:"上面的条走完就来不及了，会<b>愣住挨打</b>。",meme:""},A_=["jab","hookL","hookR","jab","swing","body","jab jab","upper"];class R_{fight;hud=new T_;o;arena;overlay;audio;endAt=0;ended=!1;memeShown=!1;paused=!1;unbind=[];lastHeart=0;whooshed=null;coachUntil=0;pendingHint=null;inRead=!1;constructor(t,e,n,s){this.o=t,this.arena=e,this.overlay=n,this.audio=s,this.fight=new gh({opp:t.opp,mods:t.mods,hp:t.hp,seed:t.seed,readTime:t.readTime,dmgScale:t.dmgScale,hpScale:t.hpScale,bpm:s.bpm,script:t.tutorial?A_:void 0}),this.syncBeat(),e.setOpponent(t.opp.look),e.menuMode=!1,n.clearFx(),n.enabled=!0,this.hud.setup(this.fight,t.meName,t.label),this.hud.show(!0),this.bind(),s.bells(1),t.tutorial&&this.coach("欢迎来到拳馆。他出拳时<b>时间会停住</b>，你有好几秒慢慢想。",4)}bind(){const t=At("#touch"),e=c=>{this.paused||this.ended||(c.preventDefault(),this.audio.unlock(),this.input(c.clientX<window.innerWidth/2?"L":"R"))};t.addEventListener("pointerdown",e);const s=[[At("#btn-duck"),"D"],[At("#btn-look"),"W"],[At("#btn-block"),"B"]].map(([c,l])=>{const h=u=>{u.preventDefault(),u.stopPropagation(),!(this.paused||this.ended)&&(c.classList.add("down"),setTimeout(()=>c.classList.remove("down"),140),this.input(l))};return c.addEventListener("pointerdown",h),()=>c.removeEventListener("pointerdown",h)}),a=c=>{if(this.paused||this.ended||c.repeat)return;const l=c.key.toLowerCase(),h={arrowleft:"L",a:"L",arrowright:"R",d:"R",arrowdown:"D",s:"D",arrowup:"B",w:"B"," ":"W",e:"W"};h[l]?(c.preventDefault(),this.input(h[l])):(l==="escape"||l==="p")&&this.o.onPause()};window.addEventListener("keydown",a);const r=At("#btn-pause"),o=c=>{c.stopPropagation(),this.o.onPause()};r.addEventListener("click",o),this.unbind.push(()=>{t.removeEventListener("pointerdown",e);for(const c of s)c();window.removeEventListener("keydown",a),r.removeEventListener("click",o)})}input(t){const e=this.fight;if(e.down||e.open){e.press(t==="R"?"R":"L");return}if(e.deciding){if(!e.canAfford(t)){this.hud.callout(t==="B"?e.attack?.heavy&&!e.mods.blockHeavy?"重拳挡不住":"没架势了":"没体力了","red small"),this.audio.click();return}t==="L"||t==="R"?e.press(t):e.button(t),this.pendingHint&&(this.markHint(this.pendingHint),this.pendingHint=null,this.overlay.pointAt=null,this.coach(null))}}setPaused(t){this.paused=t}syncBeat(){const t=this.fight;t.setBeat(this.audio.bpm,t.t-this.audio.beatPhase())}step(t,e){const n=this.fight;if(this.paused){this.hud.update(n,e);return}this.syncBeat(),n.tick(t);for(const r of n.drain())this.onEvent(r,e);const s=n.phase==="read"||n.phase==="windup"&&!!n.attack;s!==this.inRead&&(this.inRead=s,s?this.audio.enterRead():this.audio.exitRead());const a=n.attack;a&&n.phase==="strike"&&a!==this.whooshed&&a.impactAt-n.t<.12&&(this.whooshed=a,this.audio.whoosh(a.heavy?1.4:1)),!n.over&&n.hp/n.maxHp<.25&&e-this.lastHeart>.9&&(this.lastHeart=e,this.audio.heartbeat()),this.coachUntil&&e>this.coachUntil&&!this.pendingHint&&(this.coachUntil=0,this.hud.coach(null)),this.audio.setIntensity(n.open?1:n.oppHp/n.oppMax<.4?.7:.35),this.hud.update(n,e),this.ended&&e>=this.endAt&&this.finish()}coach(t,e=0){this.hud.coach(t),this.coachUntil=t&&e?performance.now()/1e3+e:0}markHint(t){this.o.hints.includes(t)||(this.o.hints.push(t),this.o.onHint())}seen(t){return this.o.hints.includes(t)}hintFor(t){const e=this.fight,n=[];this.seen("zones")||n.push("zones"),t.step.move==="hookX"&&n.push("track"),t.hidden&&n.push("hidden"),t.heavy&&n.push("heavy"),t.feintChance>0&&n.push("feint"),t.second&&n.push("second"),(e.stamina===0||e.guard===0)&&n.push("tired");const a={hookL:"hook",hookR:"hook",upper:"upper",swing:"swing",body:"body",flurry:"flurry"}[t.moveId];return a&&!t.hidden&&n.push(a),n.find(r=>!this.seen(r))??null}suggest(t){const e=this.fight;if(t.move.blockOnly||t.hidden||t.hits>1)return e.canAfford("B")?"B":"W";const n=ph(t.zones).filter(a=>a!=="C"),s=n.filter(a=>a!=="D");return s.length&&e.canAfford("L")?s.includes(t.hand==="L"?"R":"L")?t.hand==="L"?"R":"L":s[0]:n.includes("D")&&e.canAfford("D")?"D":e.canAfford("B")?"B":"W"}onEvent(t,e){const n=this.fight,s=this.audio,a=this.overlay,r=this.hud,o=window.innerWidth,c=window.innerHeight;switch(t.type){case"telegraph":s.anticipate(t.attack.heavy);break;case"read":{const l=this.hintFor(t.attack);if(l){this.pendingHint=l,n.holdRead();const h=l==="feint"?"W":this.suggest(t.attack);a.pointAt=h==="L"||h==="R"||h==="D"?h:h==="B"?"block":"look",this.coach(la[l])}break}case"decide":t.action===null?(r.callout("愣住了！","red"),this.seen("timer")||(this.markHint("timer"),this.coach(la.timer,3)),this.pendingHint=null,a.pointAt=null):t.action==="L"||t.action==="R"||t.action==="D"?s.dodge():t.action==="B"&&s.guardUp();break;case"feint":t.read?(r.callout("看穿！","gold","假动作"),s.read()):(r.callout("假动作！","red small",t.action==="L"||t.action==="R"||t.action==="D"?"体力白花了":""),s.feint());break;case"whiff":t.attack.second?(r.callout("防住第二拳！","gold"),a.add("perfect",0,0),s.second()):t.attack.heavy&&(r.callout("躲过重拳！","gold small"),s.second());break;case"block":a.add("block",o/2,c*.62),s.block(),t.chip>.5&&a.add("number",o*.28,c*.2,{text:`-${Math.round(t.chip)}`,color:"#9fb4c8"}),this.arena.hitCamera(.25,t.attack.hand==="L"?-1:1),t.attack.second&&r.callout("挡住第二拳","cyan small");break;case"hit":{const l=t.attack.hand==="L"?-1:1;this.arena.hitCamera(t.attack.heavy?1.3:.9,l),a.add("hit",0,0),s.hurt(t.attack.heavy),t.saved?r.callout("护齿！","cyan small"):a.add("number",o*.3,c*.2,{text:`-${Math.round(t.dmg)}`,color:"#ff6b7d",big:t.attack.heavy}),t.attack.second&&!this.memeShown&&(!this.seen("meme")||Math.random()<.35)&&(this.memeShown=!0,this.markHint("meme"),setTimeout(()=>r.meme("别笑，你也防不了第二拳",`「${n.opp.nick}」${n.opp.taunt}`),250));break}case"gauge":t.gain>0&&s.gauge(t.value);break;case"open":r.callout("破绽！","gold huge"),a.add("open",0,0),s.drop(),this.arena.cameraFlash(),this.seen("open")||(this.markHint("open"),a.pointAt="tap",this.coach(la.open,3),setTimeout(()=>{a.pointAt==="tap"&&(a.pointAt=null)},2500));break;case"punch":{const l=this.arena.fighter;if(l){l.punched(t.side,t.crit?1.5:1);const h=this.arena.project(l.headPos());a.add("spark",h.x+(Math.random()-.5)*30,h.y+(Math.random()-.5)*30),a.add("number",h.x+(Math.random()-.5)*60,h.y-20,{text:t.crit?`暴击 ${Math.round(t.dmg)}`:`${Math.round(t.dmg)}`,color:t.crit?"#ffcc00":"#ffffff",big:t.crit})}this.arena.playerPunch(t.side),s.punch(t.crit,t.combo),t.combo%8===0&&this.arena.cameraFlash();break}case"autocounter":{const l=this.arena.fighter;if(l){l.punched(Math.random()<.5?"L":"R",.8);const h=this.arena.project(l.headPos());a.add("spark",h.x,h.y),a.add("number",h.x,h.y-20,{text:`${Math.round(t.dmg)}`,color:"#22b868"})}this.arena.playerPunch(Math.random()<.5?"L":"R"),s.punch(!1,1);break}case"finisher":{r.callout("终结！","gold",`-${Math.round(t.dmg)}`),this.arena.fighter?.punched("R",2.2),this.arena.playerPunch("R"),s.punch(!0,16);break}case"close":t.hits>0&&r.callout(`${t.hits} 连击`,"small",`-${Math.round(t.dmg)}`),s.windowEnd();break;case"phase2":r.callout(t.line,"red small","第二阶段"),s.bells(2);break;case"knockdown":s.knockdown(),r.callout(t.final?"K.O.":"倒地！","red huge"),!t.final&&!this.seen("down")&&(this.markHint("down"),this.coach(la.down,3));break;case"count":s.count(t.n);break;case"getup":r.callout(t.towel?"白毛巾！":"站起来了！","cyan"),s.cheer(.7);break;case"metronome":r.callout("体力回满！","gold small");break;case"taunt":r.callout("别笑！","gold small","下次破绽伤害 +50%");break;case"end":if(this.ended=!0,this.coach(null),this.overlay.pointAt=null,t.win){r.callout("K.O.!","gold huge"),s.ko();for(let l=0;l<4;l++)setTimeout(()=>this.arena.cameraFlash(),l*120)}else s.lose();this.endAt=e+2.4;break}}finish(){if(!this.ended)return;this.ended=!1;const t=this.fight,e={win:t.over==="win",hp:Math.max(0,t.hp),stats:t.stats,rating:m_(t.stats)};this.dispose(),this.o.onEnd(e)}dispose(){for(const t of this.unbind)t();this.unbind=[],this.hud.show(!1),this.overlay.pointAt=null,this.overlay.enabled=!1,this.inRead&&this.audio.exitRead()}}const xh="punch/save/v1";function vh(){return{v:1,fame:0,fameTotal:0,fighters:["rookie"],fighter:"rookie",perks:{},level:0,maxLevel:0,runs:0,clears:0,cleared:[],stageBest:{},bestWins:0,tutorialDone:!1,hints:[],met:[],beaten:[],totals:{fights:0,reads:0,seconds:0,windows:0,kos:0,bestCombo:0},muted:!1,music:!0,run:null,updatedAt:0}}function C_(i){const t=vh();if(!i||typeof i!="object")return t;const e={...t,...i};return e.totals={...t.totals,...e.totals??{}},Array.isArray(e.cleared)||(e.cleared=[]),(!e.stageBest||typeof e.stageBest!="object")&&(e.stageBest={}),(!Array.isArray(e.fighters)||!e.fighters.length)&&(e.fighters=["rookie"]),e.fighters.includes(e.fighter)||(e.fighter="rookie"),e.run&&e.run.v!==2&&(e.run=null),e}function L_(){try{const i=localStorage.getItem(xh);return C_(i?JSON.parse(i):null)}catch{return vh()}}function P_(i){i.updatedAt=Date.now();try{localStorage.setItem(xh,JSON.stringify(i))}catch{}}const I_={skilled:{name:"认真",think:[.65,.25],misread:.015,rushMisread:.04,feintSense:1,thrift:1,tapRate:8}};function vr(i,t,e){const n=Math.max(1e-9,i.next()),s=i.next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*s)}class D_{skill;rng;planned=null;plan={at:1/0,rushed:!1};nextTap=0;constructor(t,e){this.skill=t,this.rng=new ko(e^1540483477)}act(t){const e=t.t;if(t.down||t.open){e>=this.nextTap&&(t.press(this.rng.chance(.5)?"L":"R"),this.nextTap=e+Math.max(.06,vr(this.rng,1/this.skill.tapRate,.02)));return}const n=t.attack;if(!n||!t.deciding)return;if(n!==this.planned){this.planned=n;const a=n.readStart+n.readTotal,r=Math.max(.25,vr(this.rng,this.skill.think[0],this.skill.think[1]));let o=n.t0+r,c=!1;o>a-.12&&(c=!0,o=a-.12,r>a-n.t0+.4&&this.rng.chance(.35)&&(o=1/0)),this.plan={at:o,rushed:c}}if(e<this.plan.at)return;const s=this.choose(t,n,this.plan.rushed);t.act(s)||t.act("W"),this.plan={at:1/0,rushed:!1}}choose(t,e,n){const s=this.skill,a=this.rng,r=["L","R","D","B","W"].filter(f=>t.canAfford(f,e)),o=r.filter(f=>f!=="B"&&f!=="W");if(o.length&&a.chance(s.misread+(n?s.rushMisread:0)))return a.pick(o);if(s.thrift===0&&s.feintSense===0){const f=o.filter(E=>!e.move.blockOnly&&(e.hidden?!0:!e.zones.includes(Ki(E))));return f.length?a.pick(f):r.includes("B")?"B":"W"}const c=e.feintChance*s.feintSense,l=e.move.dmg*t.opp.dmg*(e.heavy?fh:1)*e.hits,h=1+(1-t.hp/t.maxHp),u=Math.max(0,t.preview.length-e.index-1),d=2+s.thrift*u*3/Math.max(1,t.stamina),m=1.5+s.thrift*u*2/Math.max(1,t.guard),g=9;let w="W",p=-1/0;for(const f of r){let E,L;if(f==="W")E=-l*h-t.gauge*3,L=2*g;else if(f==="B")E=(e.move.blockOnly||e.hits>1||t.mods.blockGauge?1:0)*g-l*.25*t.mods.chipMul*h-m,L=0;else{const v=(e.hits>1?2:1)*d,S=e.move.blockOnly?0:e.hidden?2/3:e.zones.includes(Ki(f))?0:1,T=(1+(e.heavy?1:0)+(e.second?1:0))*g;E=S*T-(1-S)*(l*h+t.gauge*3)-v,L=-v}const M=(1-c)*E+c*L+vr(a,0,3*(1-s.thrift));M>p&&(p=M,w=f)}return w}}const mi=[{id:"afu",nick:"沙包",name:"阿福",title:"挨打专业户",stage:1,hp:160,dmg:.8,idle:[2,3],gauge:3,patterns:[{p:"jab",w:4},{p:"hookL",w:2},{p:"hookR",w:2},{p:"jab jab",w:1}],look:{skin:"#dcdcdf",gloves:"#d8302f",shorts:"#d8302f",trim:"#f2f2f2",shoes:"#2a2a30",build:1.12,height:.98,heavy:!0,hair:"buzz",hairColor:"#34343a",hat:"none"},quote:"别打脸，我靠脸吃饭的。",signature:"第二拳？他连第一拳都不太会。",habits:["只会单拳","从不骗人"],taunt:"诶？打中了？"},{id:"xiaokui",nick:"元气",name:"小葵",title:"拳馆最早到的人",stage:1,female:!0,hp:190,dmg:.8,idle:[2,3],gauge:3,patterns:[{p:"jab jab",w:3},{p:"flurry",w:2},{p:"jab hookL",w:1.5},{p:"jab hookR",w:1.5}],look:{female:!0,skin:"#dcdcdf",gloves:"#ff9a2e",shorts:"#ff9a2e",trim:"#ffffff",top:"#ff9a2e",shoes:"#f2f2f2",build:.88,height:.96,hair:"ponytail",hairColor:"#6a3c22",hat:"none"},quote:"今天也要元气满满地打倒你！",signature:"第二拳紧跟着第一拳，留给你的时间更短。",habits:["爱打连打","两拳一套"],taunt:"嘿嘿，元气一击！"},{id:"kevin",nick:"健身",name:"凯文",title:"直播间的门面",stage:1,hp:210,dmg:.95,idle:[2,4],gauge:3,patterns:[{p:"upper",w:2},{p:"swing",w:2},{p:"jab upper",w:2},{p:"jab swing",w:1}],look:{skin:"#dcdcdf",gloves:"#e24a8d",shorts:"#1d1d22",trim:"#e24a8d",shoes:"#1d1d22",build:1.2,height:1,hair:"mohawk",hairColor:"#e24a8d",hat:"none"},quote:"家人们，看我一拳打穿他。",signature:"第二拳是上勾拳或横扫——想好往哪躲。",habits:["爱打上勾拳","爱横扫"],taunt:"家人们点点关注！"},{id:"tiejie",nick:"铁姐",name:"秦铁",title:"社区拳馆馆长",stage:1,boss:!0,female:!0,hp:330,dmg:1,idle:[2,3],gauge:4,patterns:[{p:"jab body",w:2},{p:"hookL body",w:1.5},{p:"hookR body",w:1.5},{p:"jab hookL",w:1},{p:"swing",w:1},{p:"jab jab upper",w:1}],phase2:{at:.45,line:"不错嘛。下面不留手了。",patterns:[{p:"jab body upper",w:2},{p:"hookL body hookR",w:2},{p:"jab hookR!",w:1}]},look:{female:!0,skin:"#dcdcdf",gloves:"#1f1f24",shorts:"#1f1f24",trim:"#e8c14a",top:"#1f1f24",shoes:"#1f1f24",build:1,height:1.04,hair:"bob",hairColor:"#1c1c22",hat:"none"},quote:"想在我的拳馆出师？先挨过我的第二拳。",signature:"第二拳常打肚子：留一点架势格挡。",habits:["爱打腹击","不骗人"],taunt:"基本功不行。"},{id:"tiezhu",nick:"大力",name:"王铁柱",title:"工地搬砖冠军",stage:2,hp:290,dmg:1.15,idle:[2,4],gauge:3,armor:.9,feint:.05,patterns:[{p:"hookL hookR",w:2},{p:"jab swing",w:2},{p:"jab jab hookL!",w:1.5},{p:"jab hookR!",w:1.5},{p:"jab hookL!",w:1.5},{p:"swing! body",w:1}],look:{skin:"#dcdcdf",gloves:"#e07a1f",shorts:"#2f5fa8",trim:"#e07a1f",top:"#e07a1f",shoes:"#2a2a30",build:1.32,height:1.03,hair:"buzz",hairColor:"#2a2a30",hat:"headband",hatColor:"#f2eee0"},quote:"我这一拳下去，你可能会死。",signature:"第二拳是发金光的重拳：挡不住，留体力躲。",habits:["爱打重拳","很少骗人"],taunt:"搬砖练的！"},{id:"xiaokuai",nick:"快手",name:"林小快",title:"外卖准时王",stage:2,hp:260,dmg:.8,idle:[1,2],gauge:4,readMul:.9,feint:.08,patterns:[{p:"jab jab",w:3},{p:"flurry",w:2},{p:"jab hookL hookR",w:1.5},{p:"jab jab upper",w:1},{p:"hookL hookR",w:1}],look:{skin:"#dcdcdf",gloves:"#f2c21b",shorts:"#2a9d8f",trim:"#f2c21b",top:"#f2c21b",shoes:"#2a2a30",build:.9,height:.97,hair:"short",hairColor:"#2a2a30",hat:"cap",hatColor:"#f2c21b"},quote:"超时一秒，差评一个。",signature:"一套三拳，体力不省着点用会被打穿。",habits:["连招长","出拳快"],taunt:"准时送达！"},{id:"mei",nick:"夜蝶",name:"美夜",title:"地下拳场的常客",stage:2,female:!0,hp:270,dmg:.95,idle:[2,3],gauge:4,feint:.15,patterns:[{p:"jab hookL~",w:2},{p:"jab hookR~",w:2},{p:"?jab hookL~",w:1.5},{p:"jab jab hookR~",w:1.5},{p:"?hookL upper body",w:1}],look:{female:!0,skin:"#dcdcdf",gloves:"#7b3fb8",shorts:"#2b1d3a",trim:"#c9a7ff",top:"#7b3fb8",shoes:"#2b1d3a",build:.88,height:.98,hair:"bob",hairColor:"#3a2350",hat:"none"},quote:"猜猜我从哪边来？",signature:"勾拳不让你看清是哪一边：下潜或格挡最稳。",habits:["藏勾拳","偶尔骗人"],taunt:"这边哦。"},{id:"laok",nick:"黑拳",name:"老K",title:"地下拳场之王",stage:2,boss:!0,hp:450,dmg:1.05,idle:[2,3],gauge:4,feint:.1,patterns:[{p:"jab ?hookR upper",w:2},{p:"jab ?hookL upper",w:2},{p:"hookL hookR body",w:1.5},{p:"jab hookL!",w:1},{p:"swing body",w:1},{p:"jab jab hookR!",w:1}],phase2:{at:.45,line:"有点意思。现在认真了。",idle:[1,2],patterns:[{p:"jab ?hookR upper",w:2},{p:"jab ?hookL upper",w:2},{p:"?hookL hookR!",w:1.5},{p:"body swing",w:1}]},look:{skin:"#dcdcdf",gloves:"#1f1f24",shorts:"#1f1f24",trim:"#d9b44a",shoes:"#1f1f24",build:1.18,height:1.03,hair:"slick",hairColor:"#1c1c22",hat:"none",glasses:!0,belt:!0},quote:"第一拳是打招呼，第二拳是送你回家。",signature:"第二拳经常是假动作：信不信，看你。",habits:["第二拳爱骗人","会打重拳"],taunt:"送你回家。"},{id:"zhang",nick:"太极",name:"张师傅",title:"公园晨练第一人",stage:3,hp:330,dmg:.95,idle:[2,3],gauge:4,feint:.25,patterns:[{p:"?hookL hookR jab",w:3},{p:"?hookR hookL jab",w:3},{p:"?jab upper body",w:2},{p:"jab body",w:1},{p:"?swing body upper",w:1}],look:{skin:"#dcdcdf",gloves:"#f4f1ea",shorts:"#f4f1ea",trim:"#1b1b1b",top:"#f4f1ea",shoes:"#1b1b1b",build:.95,height:.96,hair:"bun",hairColor:"#e8e8e8",hat:"none",hatColor:"#e8e8e8",beard:!0},quote:"以柔克刚。你急了，你急了。",signature:"第一拳多半是假的。敢不敢「看穿」？",habits:["假动作很多","先虚后实"],taunt:"年轻人，耐心点。"},{id:"ray",nick:"摇摆",name:"阿Ray",title:"街舞社社长",stage:3,hp:340,dmg:1,idle:[1,4],gauge:4,feint:.12,readMul:.92,patterns:[{p:"jab hookL~",w:2},{p:"jab hookR~ jab",w:2},{p:"jab swing body",w:2},{p:"jab hookL~ upper",w:1},{p:"jab swing!",w:1},{p:"jab ?jab hookR~",w:1}],look:{skin:"#dcdcdf",gloves:"#7b5cff",shorts:"#7b5cff",trim:"#59e0c5",top:"#7b5cff",shoes:"#f2f2f2",build:.95,height:1,hair:"short",hairColor:"#2a2a30",hat:"cap",hatColor:"#59e0c5"},quote:"跟上我的节奏——哦，你跟不上。",signature:"没有节奏，勾拳也不让你看清方向。",habits:["藏勾拳","节奏乱"],taunt:"Freestyle！"},{id:"coach",nick:"教头",name:"老陈",title:"拳馆三十年",stage:3,hp:360,dmg:1.05,idle:[2,3],gauge:4,feint:.1,patterns:[{p:"jab hookL",w:2},{p:"jab hookR",w:2},{p:"body upper",w:1.5},{p:"jab jab swing",w:1},{p:"hookL body",w:1},{p:"jab ?hookR upper",w:1}],look:{skin:"#dcdcdf",gloves:"#b23a3a",shorts:"#3d4a3a",trim:"#e0d6b8",shoes:"#2a2a30",build:1.12,height:.99,heavy:!0,hair:"short",hairColor:"#4a4a50",hat:"cap",hatColor:"#3d4a3a",beard:!0},quote:"我教过的学生，都挨过我的第二拳。",signature:"先打肚子再打头，上下不让你喘气。",habits:["上下结合","架势杀手"],taunt:"基本功不行。"},{id:"shadow",nick:"影子",name:"无名",title:"你的模仿者",stage:3,boss:!0,female:!0,hp:520,dmg:1.05,idle:[2,3],gauge:5,feint:.15,patterns:[{p:"jab hookX",w:3},{p:"hookL hookX",w:2},{p:"hookR hookX",w:2},{p:"?jab hookX",w:1},{p:"upper swing",w:1},{p:"body jab",w:1}],phase2:{at:.5,gauge:5,line:"你往哪躲，我就往哪打。",patterns:[{p:"jab hookX hookX",w:2},{p:"?hookX hookX!",w:2},{p:"swing upper",w:1},{p:"flurry hookX",w:1}]},look:{female:!0,skin:"#4a4c55",gloves:"#2c2d33",shorts:"#2c2d33",trim:"#8a8d96",top:"#26272c",shoes:"#26272c",build:.92,height:1,hair:"long",hairColor:"#141418",hat:"none"},quote:"你的每一步，我都看过。",signature:"第二拳会打向你上一次躲去的那边——换个方向，或者下潜。",habits:["追着你打","会骗人"],taunt:"又是这边。"},{id:"hammer",nick:"暴君",name:"铁锤",title:"重量级拆迁队",stage:4,hp:430,dmg:1.25,idle:[2,4],gauge:4,armor:.85,feint:.1,patterns:[{p:"swing!",w:2},{p:"hookL!",w:2},{p:"hookR!",w:2},{p:"jab upper!",w:2},{p:"body body",w:1},{p:"jab hookL hookR!",w:1}],look:{skin:"#dcdcdf",gloves:"#8c1c1c",shorts:"#5a1414",trim:"#d9b44a",shoes:"#2a2a30",build:1.4,height:1.06,heavy:!0,hair:"none",hat:"none",hatColor:"#3a2a22",beard:!0},quote:"挡？你挡一个试试。",signature:"几乎每一拳都是重拳。体力就是命。",habits:["重拳狂","架势没用"],taunt:"拆了。"},{id:"xuanfeng",nick:"疾风",name:"凌风",title:"百米十一秒",stage:4,female:!0,hp:380,dmg:.9,idle:[1,2],gauge:5,readMul:.82,feint:.12,patterns:[{p:"jab jab",w:3},{p:"hookL hookR",w:2},{p:"flurry jab",w:2},{p:"jab upper",w:1},{p:"jab jab hookL",w:1},{p:"jab ?jab hookR",w:1}],look:{female:!0,skin:"#dcdcdf",gloves:"#22c3e6",shorts:"#f5f5f5",trim:"#22c3e6",top:"#22c3e6",shoes:"#f5f5f5",build:.86,height:.99,hair:"twintails",hairColor:"#1c3b5c",hat:"headband",hatColor:"#22c3e6"},quote:"你眨眼的时候，我已经打完了。",signature:"想得慢就会挨打：她留给你的思考时间最短。",habits:["出拳最快","连招长"],taunt:"太慢了。"},{id:"brick",nick:"城墙",name:"大壮",title:"一拳打不动",stage:4,hp:520,dmg:1.1,idle:[2,3],gauge:4,armor:.72,feint:.08,patterns:[{p:"jab jab",w:2},{p:"body body",w:2},{p:"hookL hookR",w:2},{p:"flurry upper",w:1},{p:"swing body",w:1},{p:"jab ?jab upper!",w:1}],look:{skin:"#dcdcdf",gloves:"#3b7a3b",shorts:"#3b7a3b",trim:"#f0e6c8",shoes:"#2a2a30",build:1.45,height:1.08,heavy:!0,hair:"buzz",hairColor:"#2a2a30",hat:"none",belt:!0},quote:"打我？先打穿这身肉。",signature:"皮糙肉厚，还手伤害打折。要多攒几次破绽。",habits:["抗揍","爱打腹击"],taunt:"不痛。"},{id:"qianmian",nick:"千面",name:"魅",title:"你看到的都是假的",stage:4,boss:!0,female:!0,hp:560,dmg:1.05,idle:[2,3],gauge:5,feint:.25,patterns:[{p:"?jab ?hookL hookR",w:2},{p:"?hookR ?hookL upper",w:2},{p:"?swing body",w:1},{p:"jab hookL~",w:1},{p:"?upper swing",w:1},{p:"hookR ?hookL hookL~",w:1}],phase2:{at:.5,line:"魔术的最后一幕，总是真的。",patterns:[{p:"?jab ?hookL ?hookR upper!",w:2},{p:"?swing ?body hookX",w:1.5},{p:"jab hookL~ hookR~",w:1}]},look:{female:!0,skin:"#dcdcdf",gloves:"#5b2a86",shorts:"#5b2a86",trim:"#e8d36a",top:"#5b2a86",shoes:"#1a1a1f",build:.92,height:1.03,hair:"long",hairColor:"#b9a7d6",hat:"tophat",hatColor:"#1a1a1f"},quote:"来，猜猜这次是哪只手。",signature:"连着两个假动作，第三拳才是真的。",habits:["假动作大师","藏勾拳"],taunt:"猜错啦。"},{id:"lan",nick:"冰",name:"蓝",title:"冰上来的拳手",stage:5,female:!0,hp:480,dmg:1.1,idle:[2,3],gauge:5,feint:.18,readMul:.92,patterns:[{p:"jab ?hookR upper",w:2},{p:"jab ?hookL upper",w:2},{p:"hookL~ swing",w:1.5},{p:"body ?jab hookX",w:1},{p:"jab jab hookR!",w:1}],look:{female:!0,skin:"#dcdcdf",gloves:"#9fd8ff",shorts:"#4a90c8",trim:"#eaf6ff",top:"#9fd8ff",shoes:"#eaf6ff",build:.9,height:1.03,hair:"ponytail",hairColor:"#cfe8ff",hat:"none"},quote:"……",signature:"三拳一套，第二拳时真时假。",habits:["冷静","三拳一套"],taunt:"……结束了。"},{id:"rose",nick:"玫瑰",name:"罗丝",title:"上一届世界亚军",stage:5,female:!0,hp:520,dmg:1.2,idle:[1,3],gauge:5,feint:.15,patterns:[{p:"jab hookR!",w:2},{p:"jab hookL!",w:2},{p:"?jab upper!",w:1.5},{p:"flurry swing",w:1},{p:"hookL hookR body",w:1},{p:"jab ?swing body",w:1}],look:{female:!0,skin:"#dcdcdf",gloves:"#c0263d",shorts:"#2a0f16",trim:"#f0c27a",top:"#c0263d",shoes:"#2a0f16",build:.95,height:1.04,hair:"ponytail",hairColor:"#a8282f",hat:"none"},quote:"亚军？这次我要的是腰带。",signature:"第二拳就是重拳。别指望格挡。",habits:["第二拳必重","爱打连打"],taunt:"漂亮吧？"},{id:"x01",nick:"零号",name:"X-01",title:"实验室出逃的仿生拳手",stage:5,female:!0,hp:500,dmg:1.05,idle:[2,2],gauge:6,feint:.05,readMul:.88,patterns:[{p:"jab jab jab hookL",w:2},{p:"hookL hookR hookL hookR",w:2},{p:"upper upper",w:1},{p:"flurry body",w:1},{p:"swing swing",w:1},{p:"jab hookR jab hookL!",w:1}],phase2:{at:.5,line:"警告：程序过热。进入第二拳模式。",idle:[1,1],patterns:[{p:"jab jab jab hookL!",w:2},{p:"hookL hookR upper swing",w:2},{p:"flurry swing body",w:1}]},look:{female:!0,skin:"#c9cfd9",gloves:"#3a7bd5",shorts:"#30343c",trim:"#58d1ff",top:"#30343c",shoes:"#30343c",build:.92,height:1.02,hair:"short",hairColor:"#e8eef5",hat:"visor",hatColor:"#58d1ff",metal:!0},quote:"目标锁定。执行程序：第二拳。",signature:"四拳一套，不骗人，但会把你的体力耗光。",habits:["四连拳","耗体力"],taunt:"命中。正在上传战绩。"},{id:"erquan",nick:"拳王",name:"第二拳",title:"无人能防的第二拳",stage:5,boss:!0,female:!0,hp:700,dmg:1.15,idle:[2,3],gauge:5,feint:.2,patterns:[{p:"jab ?hookL hookR",w:2},{p:"jab ?hookR~",w:2},{p:"hookL upper!",w:2},{p:"?jab swing",w:1},{p:"body ?jab upper",w:1},{p:"jab jab flurry",w:1},{p:"jab hookX",w:1}],phase2:{at:.5,gauge:6,idle:[1,2],line:"别笑。你也防不了第二拳。",patterns:[{p:"jab ?hookR ?hookL upper!",w:2},{p:"jab hookL~ hookR~",w:2},{p:"?swing body upper",w:1},{p:"flurry hookX!",w:1},{p:"jab hookX hookX",w:1}]},look:{female:!0,skin:"#dcdcdf",gloves:"#e8c14a",shorts:"#c0262d",trim:"#e8c14a",top:"#c0262d",shoes:"#f2f2f2",build:.98,height:1.06,hair:"ponytail",hairColor:"#1c1c22",hat:"none",belt:!0},quote:"第一拳谁都能防。第二拳，没人能。",signature:"每一套的第二拳都在骗你：假动作、藏方向、追着打，全都有。",habits:["什么都会","第二拳最毒"],taunt:"我说过的。"}],sn=Object.fromEntries(mi.map(i=>[i.id,i])),Pa=[{id:"rage",name:"狂暴",desc:"思考时间更短，歇得更少",apply:i=>({...i,readMul:(i.readMul??1)*.85,idle:[Math.max(1,i.idle[0]-1),Math.max(1,i.idle[1]-1)],hp:Math.round(i.hp*1.15)})},{id:"iron",name:"铁头",desc:"血更厚，还手伤害 −25%",apply:i=>({...i,hp:Math.round(i.hp*1.3),armor:(i.armor??1)*.75})},{id:"chain",name:"连环",desc:"每一套都多打一拳",apply:i=>({...i,hp:Math.round(i.hp*1.15),patterns:i.patterns.map(t=>({...t,p:`${t.p} ${t.p.includes("upper")?"jab":"upper"}`}))})},{id:"sly",name:"狡猾",desc:"假动作更多",apply:i=>({...i,hp:Math.round(i.hp*1.15),feint:Math.min(.5,(i.feint??0)+.15)})}],ya=[{id:"rookie",nick:"新人",name:"阿呆",cost:0,gloves:"#d8302f",trim:"#f2f2f2",desc:"什么都会一点，什么都不精。",skills:{},apply:()=>{}},{id:"deer",nick:"闪电",name:"小鹿",cost:150,gloves:"#22b868",trim:"#e9fff2",desc:"起手「灵活」「呼吸」，体力用不完；最大血量 −15。",skills:{d_root:1,d_breath:1},apply:i=>{i.maxHp-=15}},{id:"bear",nick:"铁壁",name:"大熊",cost:250,gloves:"#2e7bd6",trim:"#e6f1ff",desc:"起手「铁壁」×2，最大血量 +30；体力上限 −1。",skills:{g_root:2},apply:i=>{i.maxHp+=30,i.staminaMax-=1}},{id:"champ",nick:"野心",name:"阿强",cost:400,gloves:"#e8b923",trim:"#3a2a00",desc:"起手「重拳」「连击」，只要一个破绽；最大血量 −10。",skills:{c_root:1,c_window:1},apply:i=>{i.maxHp-=10}}],Zi=Object.fromEntries(ya.map(i=>[i.id,i])),wl=[{id:"hp",name:"体能训练",desc:"开局最大血量 +10",costs:[60,120,200]},{id:"sp",name:"名师指点",desc:"开局技能点 +1",costs:[100,240]},{id:"coin",name:"赞助合同",desc:"开局奖金 +40",costs:[80,160]},{id:"relic",name:"传家宝",desc:"开局随机拿一件普通装备",costs:[300]}],Mh=10;function Oo(i){return{dmg:1+.08*i,hp:1+.06*i,read:1-.04*i}}var U_={};const pn=[{id:1,name:"社区拳馆",en:"COMMUNITY GYM",desc:"慢慢来，先学会读招。",readTime:4.4,dmg:1.2,hp:1,startSp:0,track:"stage1"},{id:2,name:"地下拳场",en:"UNDERGROUND",desc:"开始有人骗你了。",readTime:3.2,dmg:1.7,hp:1.1,startSp:2,track:"stage2"},{id:3,name:"城市联赛",en:"CITY LEAGUE",desc:"假动作、藏方向、追着打。",readTime:2.7,dmg:1.95,hp:1.2,startSp:4,track:"stage3"},{id:4,name:"全国大赛",en:"NATIONALS",desc:"重拳、快拳、打不动的人。",readTime:2.35,dmg:2.2,hp:1.3,startSp:6,track:"stage4"},{id:5,name:"世界拳王赛",en:"WORLD TITLE",desc:"第二拳，没人能防。",readTime:2.1,dmg:2.4,hp:1.35,startSp:8,track:"stage5"}],N_=U_??{};for(const[i,t]of[["STAGE_DMG","dmg"],["STAGE_HP","hp"],["STAGE_READ","readTime"]]){const e=N_[i]?.split(",").map(Number);e&&pn.forEach((n,s)=>{n[t]=e[s]??n[t]})}const qe=Object.fromEntries(pn.map(i=>[i.id,i]));function F_(){return{maxHp:100,readAdd:0,readMul:1,staminaMax:3,staminaRegen:1,guardMax:2,dodgeCounter:0,secondGauge:0,ghost:!1,chipMul:1,blockHeavy:!1,parry:!1,blockGauge:!1,counterDmg:1,windowBeats:0,gaugeReq:0,finisher:0,critChance:0,highHpDmg:0,dmgTaken:1,revealSecond:!1,readGauge:0,readStamina:0,grit:!1,getupHp:0,getupTaps:1,tauntStreak:0,metronome:0,mouthguard:!1,towel:!1,startGauge:0,winHeal:0,coinMul:1,fanBonus:!1}}const El=[{id:"mind",name:"心态",en:"MIND",color:"#c07bff"},{id:"dodge",name:"闪避",en:"EVADE",color:"#22b868"},{id:"guard",name:"格挡",en:"GUARD",color:"#2ec5e6"},{id:"counter",name:"反击",en:"COUNTER",color:"#ffcc00"}],vs=[{id:"m_root",branch:"mind",name:"冷静",desc:"每一拳多 0.4 秒思考时间（每级）",cost:1,max:3,col:0,row:0,apply:(i,t)=>{i.readAdd+=.4*t}},{id:"m_read",branch:"mind",name:"读招",desc:"连招里藏着的第二拳，提前显示出来",cost:2,max:1,parent:"m_root",col:-1,row:1,apply:i=>{i.revealSecond=!0}},{id:"m_sight",branch:"mind",name:"识破",desc:"看穿成功：反击值再 +1，回 1 体力",cost:2,max:1,parent:"m_read",col:-1,row:2,apply:i=>{i.readGauge+=1,i.readStamina+=1}},{id:"m_body",branch:"mind",name:"体质",desc:"最大血量 +15（每级）",cost:1,max:3,parent:"m_root",col:1,row:1,apply:(i,t)=>{i.maxHp+=15*t}},{id:"m_grit",branch:"mind",name:"不屈",desc:"挨打时反击值只减一半",cost:2,max:1,parent:"m_body",col:1,row:2,apply:i=>{i.grit=!0}},{id:"m_chin",branch:"mind",name:"铁下巴",desc:"倒地起身多回 15% 血，少点 20% 下（每级）",cost:1,max:2,parent:"m_grit",col:1,row:3,apply:(i,t)=>{i.getupHp+=.15*t,i.getupTaps*=1-.2*t}},{id:"m_taunt",branch:"mind",name:"别笑",desc:"连续 3 次防住（闪开或看穿），下次破绽伤害 +50%",cost:2,max:1,parent:"m_sight",col:-1,row:3,apply:i=>{i.tauntStreak=3}},{id:"d_root",branch:"dodge",name:"灵活",desc:"体力上限 +1（每级）",cost:1,max:2,col:0,row:0,apply:(i,t)=>{i.staminaMax+=t}},{id:"d_breath",branch:"dodge",name:"呼吸",desc:"每一套开始多回 1 体力",cost:2,max:1,parent:"d_root",col:-1,row:1,apply:i=>{i.staminaRegen+=1}},{id:"d_counter",branch:"dodge",name:"见缝插针",desc:"每次闪开顺手还一拳（8 伤害）",cost:2,max:1,parent:"d_root",col:1,row:1,apply:i=>{i.dodgeCounter+=8}},{id:"d_second",branch:"dodge",name:"防第二拳",desc:"防住第二拳时反击值再 +1",cost:2,max:1,parent:"d_breath",col:-1,row:2,apply:i=>{i.secondGauge+=1}},{id:"d_ghost",branch:"dodge",name:"残影",desc:"每场第一次挨打，改为闪开",cost:3,max:1,parent:"d_counter",col:1,row:2,apply:i=>{i.ghost=!0}},{id:"d_flow",branch:"dodge",name:"行云流水",desc:"连续 4 次防住，体力回满",cost:2,max:1,parent:"d_second",col:-1,row:3,apply:i=>{i.metronome=i.metronome?Math.min(i.metronome,4):4}},{id:"g_root",branch:"guard",name:"铁壁",desc:"格挡时掉血 −25%（每级）",cost:1,max:3,col:0,row:0,apply:(i,t)=>{i.chipMul*=1-.25*t}},{id:"g_stance",branch:"guard",name:"稳如泰山",desc:"架势上限 +1（每级）",cost:1,max:2,parent:"g_root",col:-1,row:1,apply:(i,t)=>{i.guardMax+=t}},{id:"g_parry",branch:"guard",name:"弹反",desc:"格挡直拳和勾拳也 +1 反击值",cost:2,max:1,parent:"g_root",col:1,row:1,apply:i=>{i.parry=!0}},{id:"g_heavy",branch:"guard",name:"硬抗",desc:"能格挡重拳（受一半伤害，花 2 架势）",cost:2,max:1,parent:"g_stance",col:-1,row:2,apply:i=>{i.blockHeavy=!0}},{id:"g_gauge",branch:"guard",name:"以守为攻",desc:"每次格挡都 +1 反击值",cost:3,max:1,parent:"g_parry",col:1,row:2,apply:i=>{i.blockGauge=!0}},{id:"g_skin",branch:"guard",name:"皮糙肉厚",desc:"受到的伤害 −10%",cost:2,max:1,parent:"g_heavy",col:-1,row:3,apply:i=>{i.dmgTaken*=.9}},{id:"c_root",branch:"counter",name:"重拳",desc:"还手伤害 +15%（每级）",cost:1,max:3,col:0,row:0,apply:(i,t)=>{i.counterDmg*=1+.15*t}},{id:"c_window",branch:"counter",name:"连击",desc:"破绽多 2 拍（每级）",cost:1,max:2,parent:"c_root",col:-1,row:1,apply:(i,t)=>{i.windowBeats+=2*t}},{id:"c_finish",branch:"counter",name:"终结技",desc:"破绽结束时补一记重拳（本次连击伤害的 30%）",cost:2,max:1,parent:"c_root",col:1,row:1,apply:i=>{i.finisher+=.3}},{id:"c_charge",branch:"counter",name:"蓄势",desc:"打出破绽所需的防守次数 −1",cost:3,max:1,parent:"c_window",col:-1,row:2,apply:i=>{i.gaugeReq-=1}},{id:"c_crit",branch:"counter",name:"暴击",desc:"每一拳 10% 概率双倍伤害（每级）",cost:1,max:2,parent:"c_finish",col:1,row:2,apply:(i,t)=>{i.critChance+=.1*t}},{id:"c_champ",branch:"counter",name:"冠军之拳",desc:"血量 70% 以上时还手伤害 +25%",cost:2,max:1,parent:"c_crit",col:1,row:3,apply:i=>{i.highHpDmg+=.25}}],hi=Object.fromEntries(vs.map(i=>[i.id,i]));function k_(i,t,e){const n=hi[t];return!n||(i[t]??0)>=n.max||n.parent&&!(i[n.parent]>0)?!1:e>=n.cost}function Tl(i,t,e){const n=hi[t];return(i[t]??0)>=n.max?"maxed":n.parent&&!(i[n.parent]>0)?"locked":e>=n.cost?"ready":"poor"}function O_(i,t){for(const e of vs){const n=t[e.id]??0;n>0&&e.apply(i,n)}}const Cs=[{id:"mouthguard",name:"护齿",glyph:"齿",rarity:1,desc:"每场第一次挨打不掉血",apply:i=>{i.mouthguard=!0}},{id:"towel",name:"白毛巾",glyph:"巾",rarity:2,desc:"每场第一次倒地立刻站起，回一半血",apply:i=>{i.towel=!0}},{id:"headband",name:"运动发带",glyph:"带",rarity:1,desc:"每一拳多 0.5 秒思考时间",apply:i=>{i.readAdd+=.5}},{id:"sandbag",name:"旧沙袋",glyph:"袋",rarity:1,desc:"破绽多 2 拍",apply:i=>{i.windowBeats+=2}},{id:"glasses",name:"老花镜",glyph:"镜",rarity:2,desc:"连招里藏着的第二拳，提前显示出来",apply:i=>{i.revealSecond=!0}},{id:"belt",name:"冠军腰带",glyph:"腰",rarity:2,desc:"血量 70% 以上时还手伤害 +30%",apply:i=>{i.highHpDmg+=.3}},{id:"ironhead",name:"铁头功",glyph:"铁",rarity:1,desc:"受到的伤害 −15%",apply:i=>{i.dmgTaken*=.85}},{id:"metronome",name:"节拍器",glyph:"拍",rarity:3,desc:"连续 3 次防住，体力回满",apply:i=>{i.metronome=3}},{id:"weights",name:"加重拳套",glyph:"重",rarity:2,desc:"还手伤害 +30%，但体力上限 −1",apply:i=>{i.counterDmg*=1.3,i.staminaMax-=1}},{id:"banner",name:"加油横幅",glyph:"旗",rarity:1,desc:"每赢一场多回 15% 血",apply:i=>{i.winHeal+=.15}},{id:"bandage",name:"缠手带",glyph:"缠",rarity:1,desc:"最大血量 +25",apply:i=>{i.maxHp+=25}},{id:"energy",name:"功能饮料",glyph:"饮",rarity:2,desc:"每场开局反击值 +2",apply:i=>{i.startGauge+=2}},{id:"shades",name:"墨镜",glyph:"墨",rarity:2,desc:"看穿成功时反击值再 +1",apply:i=>{i.readGauge+=1}},{id:"whistle",name:"裁判哨",glyph:"哨",rarity:1,desc:"倒地起身少点 40% 下",apply:i=>{i.getupTaps*=.6}},{id:"piggy",name:"存钱罐",glyph:"¥",rarity:1,desc:"每场奖金 +40%",apply:i=>{i.coinMul*=1.4}},{id:"fan",name:"头号粉丝",glyph:"粉",rarity:2,desc:"评价 A 以上，多给 1 技能点",apply:i=>{i.fanBonus=!0}},{id:"hourglass",name:"沙漏",glyph:"漏",rarity:3,desc:"思考时间 +20%",apply:i=>{i.readMul*=1.2}},{id:"spring",name:"弹簧鞋",glyph:"弹",rarity:2,desc:"体力上限 +1",apply:i=>{i.staminaMax+=1}},{id:"gloves",name:"护手绷带",glyph:"护",rarity:2,desc:"架势上限 +1，格挡掉血 −20%",apply:i=>{i.guardMax+=1,i.chipMul*=.8}}],Qi=Object.fromEntries(Cs.map(i=>[i.id,i])),B_={1:70,2:110,3:160};function z_(i,t){for(const e of t)Qi[e]?.apply(i)}const ha=(i,t)=>{i.hp=Math.max(1,i.hp-t)},da=(i,t,e)=>{i.hp=Math.min(e,i.hp+t)};function H_(i,t,e){const n=Cs.filter(a=>a.rarity===e&&!i.relics.includes(a.id));if(!n.length)return null;const s=t.pick(n);return i.relics.push(s.id),s.name}function Al(i,t){const e=hi[t],n=i.skills[t]??0;return n>=e.max||e.parent&&!(i.skills[e.parent]>0)?!1:(i.skills[t]=n+1,!0)}const bh=[{id:"stream",title:"直播间",text:"一个拳击主播想拉你连麦当陪练，说「就打几下，节目效果」。",options:[{label:"连麦",desc:"奖金 +60，血量 −15",apply:i=>(i.coins+=60,ha(i,15),"节目效果拉满。你的脸也是。")},{label:"下次一定",desc:"什么也不发生",apply:()=>"主播：「下次一定是吧？」"}]},{id:"oldman",title:"神秘老头",text:"公园里一个老头拦住你：「年轻人，我教你第二拳的心法。」",options:[{label:"拜师",desc:"技能点 +2，血量 −20（他先打了你一顿）",apply:i=>(i.sp+=2,ha(i,20),"心法第一条：挨打要趁早。")},{label:"绕开",desc:"回复 10 血",apply:(i,t,e)=>(da(i,10,e),"你绕了远路，顺便散了个步。")}]},{id:"sponsor",title:"赞助商",text:"运动品牌想让你戴他们的荧光粉拳套上场。",options:[{label:"签约",desc:"奖金 +90",apply:i=>(i.coins+=90,"观众笑了。但钱是真的。")},{label:"拒绝",desc:"技能点 +1",apply:i=>(i.sp+=1,"教练拍拍你的肩：「有骨气。」")}]},{id:"gym",title:"健身房办卡",text:"健身房搞活动：办年卡送三节私教课。",options:[{label:"办卡",desc:"奖金 −60，技能点 +2",ok:i=>i.coins>=60,apply:i=>(i.coins-=60,i.sp+=2,"私教课很有用。年卡你大概不会再用了。")},{label:"只是来洗澡",desc:"回复 15% 血",apply:(i,t,e)=>(da(i,Math.round(e*.15),e),"热水澡真舒服。")}]},{id:"soup",title:"教练的鸡汤",text:"赛前，教练端来一碗鸡汤：「喝了它，你就是最棒的。」",options:[{label:"喝了",desc:"回复 30% 血",apply:(i,t,e)=>(da(i,Math.round(e*.3),e),"真的是鸡汤。挺好喝的。")},{label:"我靠自己",desc:"本轮最大血量 +10",apply:i=>(i.bonusHp+=10,i.hp+=10,"你觉得自己更硬了。")}]},{id:"gloves",title:"旧拳套",text:"更衣室角落里有一副没人要的旧拳套，还挺合手。",options:[{label:"戴上",desc:"获得一件随机普通装备",apply:(i,t)=>{const e=H_(i,t,1);return e?`是「${e}」！`:(i.coins+=40,"只是一副破拳套。你把它卖了 40 块。")}},{label:"交给失物招领",desc:"技能点 +1",apply:i=>(i.sp+=1,"好人有好报。")}]},{id:"nolaugh",title:"别笑挑战",text:"网上流行「别笑挑战」：被打中一拳还要忍住不笑。有人请你录一条。",options:[{label:"参加",desc:"技能点 +1，血量 −10",apply:i=>(i.sp+=1,ha(i,10),"你没笑。观众笑了。")},{label:"刷别人的",desc:"奖金 +25",apply:i=>(i.coins+=25,"你刷了一晚上，还靠广告分成赚了点零花钱。")}]},{id:"dummy",title:"木人桩",text:"训练馆的木人桩空着。只够练一样。",options:[{label:"练脑子",desc:"「冷静」+1 级（满级则技能点 +1）",apply:i=>Al(i,"m_root")?"「冷静」升级了：每一拳多想 0.4 秒。":(i.sp+=1,"已经够冷静了，技能点 +1。")},{label:"练重拳",desc:"「重拳」+1 级（满级则技能点 +1）",apply:i=>Al(i,"c_root")?"「重拳」升级了。":(i.sp+=1,"拳已经够重了，技能点 +1。")}]},{id:"ice",title:"冰桶",text:"队医提来一桶冰：「冰敷消肿，就是有点冷。」",options:[{label:"冰敷",desc:"回复 35% 血",apply:(i,t,e)=>(da(i,Math.round(e*.35),e),"冷。但脸没那么肿了。")},{label:"把冰卖了",desc:"奖金 +35",apply:i=>(i.coins+=35,"夏天的冰真值钱。")}]},{id:"rematch",title:"手下败将",text:"之前被你打败的对手在门口等你：「再来一场，我出钱。」",options:[{label:"奉陪",desc:"奖金 +70，血量 −25%",apply:(i,t,e)=>(i.coins+=70,ha(i,Math.round(e*.25)),"你又赢了。只是没那么轻松。")},{label:"没空",desc:"什么也不发生",apply:()=>"他在门口站了很久。"}]}],G_=Object.fromEntries(bh.map(i=>[i.id,i]));var V_={};const wa=[["fight"],["fight","elite","event"],["shop","clinic","train"],["fight","elite","event"],["shop","clinic","train","event"],["boss"]],Sh={fight:{name:"比赛",en:"BOUT",desc:"赢了拿奖金和技能点"},elite:{name:"精英赛",en:"ELITE",desc:"对手更强，赢了选一件装备"},boss:{name:"冠军战",en:"TITLE",desc:"本关拳王。赢了就通关"},event:{name:"路上",en:"EVENT",desc:"会发生点什么"},shop:{name:"体育用品店",en:"SHOP",desc:"用奖金买装备、治疗"},clinic:{name:"队医",en:"CLINIC",desc:"回复一半血量"},train:{name:"训练馆",en:"TRAINING",desc:"换技能点"}},yh={fight:{coins:30,sp:1},elite:{coins:50,sp:2},boss:{coins:80,sp:2}},W_={S:20,A:12,B:6,C:0,D:0},X_=V_??{},$_=Number(X_.WIN_HEAL??.25),wh=.5,Bo={price:35,share:.3},q_=75;function Y_(i,t,e,n,s,a=!1){const r=Zi[e]??Zi.rookie,o=qe[t]??qe[1],c={v:2,seed:i,rng:i,stage:o.id,fighter:r.id,level:n,perks:{...s},step:0,hp:0,bonusHp:0,sp:o.startSp+(s.sp??0),coins:40*(s.coin??0),skills:{...r.skills},relics:[],choices:[],seen:[],wins:0,elites:0,bosses:0,ratings:[],shop:null,over:null,tutorial:a};if(s.relic){const l=ji(c);c.relics.push(l.pick(Cs.filter(h=>h.rarity===1)).id),ts(c,l)}return c.hp=Xi(c).maxHp,c.choices=Eh(c),c}function ji(i){return new ko(i.rng)}function ts(i,t){i.rng=t.state}function Xi(i){const t=F_();return t.maxHp+=10*(i.perks.hp??0)+i.bonusHp,(Zi[i.fighter]??Zi.rookie).apply(t),O_(t,i.skills),z_(t,i.relics),t.maxHp=Math.round(t.maxHp),t.staminaMax=Math.max(2,t.staminaMax),t}function on(i){return Xi(i).maxHp}function Eh(i){const t=ji(i),e=wa[i.step];let n;if(e.length===1)n=e;else{const r=e.length>=4?3:i.stage===1&&i.step===1?2:t.chance(.5)?3:2;n=t.sample(e,r),(i.step===1||i.step===3)&&!n.includes("fight")&&(n[0]="fight")}const s=[],a=new Set(i.seen);for(const r of n){const o={kind:r};if(r==="fight"||r==="elite"){const c=mi.filter(d=>d.stage===i.stage&&!d.boss&&d.id!=="afu"),l=c.filter(d=>!a.has(d.id)),u=i.stage===1&&i.step===0?sn.afu:t.pick(l.length?l:c);o.opp=u.id,a.add(u.id),r==="elite"&&(o.elite=t.pick(Pa).id)}else r==="boss"?o.opp=mi.find(c=>c.stage===i.stage&&c.boss).id:r==="event"&&(o.event=t.pick(bh).id);s.push(o)}return ts(i,t),s}function zo(i){const t=sn[i.opp],e=i.elite?Pa.find(n=>n.id===i.elite):null;return e?{...e.apply(t),id:t.id}:t}function K_(i,t){const e=ji(i),n=e.int(2**31);ts(i,e);const s=qe[i.stage],a=Oo(i.level);return{opp:zo(t),seed:n,readTime:s.readTime*a.read,dmgScale:s.dmg*a.dmg,hpScale:s.hp*a.hp}}function Rl(i,t,e,n,s,a){if(t.opp&&!i.seen.includes(t.opp)&&i.seen.push(t.opp),!e)return i.hp=0,i.over="lose",null;const r=Xi(i),o=t.kind,c=yh[o],l=Math.round((c.coins+W_[a])*r.coinMul);let h=c.sp+(a==="S"?1:0)+(r.fanBonus&&(a==="S"||a==="A")?1:0);i.tutorial&&(h+=1);const u=r.maxHp,d=Math.max(1,n),m=Math.min(u,d+u*($_+r.winHeal));i.hp=Math.round(m),i.coins+=l,i.sp+=h,i.wins++,o==="elite"&&i.elites++,o==="boss"&&i.bosses++,i.ratings.push(a),i.tutorial=!1;const g=o==="elite"?Z_(i,1):[];return{coins:l,sp:h,heal:Math.round(m-d),relics:g,rating:a}}function Z_(i,t){const e=ji(i),n=Cs.filter(o=>!i.relics.includes(o.id)),s=o=>o.rarity<t?.35:o.rarity===3?.45:1,a=[],r=[...n];for(;a.length<3&&r.length;){const o=e.weighted(r,s);a.push(o.id),r.splice(r.indexOf(o),1)}return ts(i,e),a}function Th(i,t){if(!t||i.relics.includes(t)||!Qi[t])return;const e=on(i);i.relics.push(t);const n=on(i);n>e&&(i.hp+=n-e)}function J_(i,t){if(!k_(i.skills,t,i.sp))return!1;const e=on(i);i.sp-=hi[t].cost,i.skills[t]=(i.skills[t]??0)+1;const n=on(i);return n>e&&(i.hp+=n-e),!0}function Q_(i){if(i.shop=null,i.step++,i.step>=wa.length){i.over="win",i.choices=[];return}i.choices=Eh(i)}function j_(i){const t=on(i),e=i.hp;return i.hp=Math.min(t,Math.round(i.hp+t*wh)),i.hp-e}const tx=[{id:"light",name:"加练",desc:"技能点 +1"},{id:"hard",name:"魔鬼训练",desc:"技能点 +2，血量 −20%"}];function ex(i,t){t==="light"?i.sp+=1:(i.sp+=2,i.hp=Math.max(1,Math.round(i.hp-on(i)*.2)))}function nx(i){if(i.shop)return i.shop;const t=ji(i),e=Cs.filter(s=>!i.relics.includes(s.id)),n=t.sample(e,3);return ts(i,t),i.shop=[...n.map(s=>({kind:"relic",id:s.id,price:B_[s.rarity]})),{kind:"heal",price:Bo.price},{kind:"sp",price:q_}],i.shop}function ix(i,t){const e=i.shop?.[t];if(!e||e.sold||i.coins<e.price)return!1;const n=on(i);return e.kind==="heal"&&i.hp>=n?!1:(i.coins-=e.price,e.kind==="relic"?(Th(i,e.id),e.sold=!0):e.kind==="heal"?i.hp=Math.min(n,Math.round(i.hp+n*Bo.share)):(i.sp+=1,e.sold=!0),!0)}function Mr(i){const t=i.over==="win";return Math.round((i.wins*8+i.elites*10+i.bosses*25+(t?20*i.stage:0))*(1+.15*i.level))}function sx(i){const t=ji(i);return{rng:t,done:()=>ts(i,t)}}function Ah(){return null}function ax(i=Ah(),t=globalThis.innerWidth){try{const e=i?.getSystemInfoSync?.(),n=Math.max(e?.safeArea?.top??0,e?.statusBarHeight??0)*Rh(i,t),s=rx(i,t),a=Math.max(n,s?s.bottom+6:0);return Number.isFinite(a)&&a>0?Math.round(a):0}catch{return 0}}function rx(i=Ah(),t=globalThis.innerWidth){try{const e=i?.getMenuButtonBoundingClientRect?.();if(!e||!(e.bottom>0))return null;const n=Rh(i,t),s={top:e.top*n,bottom:e.bottom*n};return Number.isFinite(s.top)&&Number.isFinite(s.bottom)?s:null}catch{return null}}function Rh(i,t){const e=i?.getSystemInfoSync?.();return e?.windowWidth&&t?t/e.windowWidth:1}const Ch=()=>At("#screen");function Ke(i){const t=Ch();return t.innerHTML=i,t.firstElementChild}function ox(){Ch().innerHTML=""}function Ho(i,t){const e=Math.max(0,Math.min(1,i/t));return`<div class="bar ${e<.3?"low":""}" style="width:100%"><i class="bar-fill" style="transform:scaleX(${e});background:linear-gradient(90deg,#1aa7c9,#2ec5e6)"></i></div>`}function cx(i){return i.map(t=>{const e=Qi[t];return e?`<span class="relic r${e.rarity}" title="${E_(e.name)}">${e.glyph}</span>`:""}).join("")}function uo(i){const t=i.save,e=t.run,n=e&&!e.over,s=Ke(`
  <section class="scr title">
    <div class="logo">
      <span class="l1"><span>别笑</span></span>
      <span class="l2">你也防不了<br><em>第二拳</em></span>
      <span class="en">YOU CAN'T BLOCK THE SECOND PUNCH</span>
    </div>
    <div class="title-menu">
      ${n?re(`继续 · 第 ${e.stage} 关 ${qe[e.stage].name}`,"primary big",'data-act="continue"'):re("开始挑战","primary big",'data-act="start"')}
      ${n?re("放弃这一关，重新选关","ghost",'data-act="restart"'):""}
      <div class="row">${re("拳馆","",'data-act="gym"')}${re("图鉴","",'data-act="roster"')}</div>
      <div class="title-foot">
        <span>名气 ${t.fame} · 已通 ${t.cleared.length}/${pn.length} 关</span>
        <span style="display:flex;gap:8px">
          <button class="chip" data-act="sound"><span>音效：${t.muted?"关":"开"}</span></button>
          <button class="chip" data-act="music"><span>音乐：${t.music?"开":"关"}</span></button>
        </span>
      </div>
    </div>
  </section>`);Pe(s,{start:()=>fo(i),continue:()=>i.showRoute(),restart:()=>Lh(i,"放弃这一关？","这一关的进度会作废（已得的名气不会退）。","放弃",()=>{i.abandonRun(),fo(i)}),gym:()=>ms(i),roster:()=>lx(i),sound:()=>{i.setMuted(!t.muted),uo(i)},music:()=>{i.setMusic(!t.music),uo(i)}},()=>i.audio.click())}function Lh(i,t,e,n,s){const a=At("#modal");a.innerHTML=`<div class="panel"><h3>${t}</h3><p>${e}</p><div class="btns row">${re("取消","ghost",'data-act="no"')}${re(n,"red",'data-act="yes"')}</div></div>`,a.classList.remove("hidden"),Pe(a,{no:()=>a.classList.add("hidden"),yes:()=>{a.classList.add("hidden"),s()}},()=>i.audio.click())}function ms(i){const t=i.save,e=ya.map(o=>{const c=t.fighters.includes(o.id),l=t.fighter===o.id,h=l?"使用中":c?"点击选择":`解锁：${o.cost} 名气`;return`<button class="fighter ${l?"on":""} ${c?"":"locked"}" style="--glove:${o.gloves}" data-act="fighter" data-id="${o.id}">
      <h4>「${o.nick}」${o.name}</h4><p>${o.desc}</p><span class="st">${h}</span></button>`}).join(""),n=wl.map(o=>{const c=t.perks[o.id]??0,l=c>=o.costs.length,h=l?0:o.costs[c];return`<div class="perk"><div class="pt"><h4>${o.name} <span class="lv">Lv ${c}/${o.costs.length}</span></h4><p>${o.desc}</p></div>
      ${l?me("MAX","dim"):re(`${h}`,t.fame>=h?"primary small":"small",`data-act="perk" data-id="${o.id}" ${t.fame>=h?"":"disabled"}`)}</div>`}).join(""),s=Oo(t.level),a=t.maxLevel>0?`
    <div class="section-title">擂台等级 ${me("HEAT","red")}</div>
    <div class="levels">${re("−","small",'data-act="lvdown"')}<b>${t.level}</b>${re("+","small",'data-act="lvup"')}
      <p>${t.level===0?"标准难度":`对手伤害 +${Math.round((s.dmg-1)*100)}%、血量 +${Math.round((s.hp-1)*100)}%、思考时间 −${Math.round((1-s.read)*100)}%；名气 +${15*t.level}%`}<br>已解锁到 ${t.maxLevel} 级（最高 ${Mh}）</p></div>`:'<p class="hint-line">打通第 5 关后解锁「擂台等级」。</p>',r=Ke(`
  <section class="scr dim">
    <div class="scr-head"><button class="back" data-act="back">‹ 返回</button><h2>拳馆</h2><span class="coins">名气 ${t.fame}</span></div>
    <div class="scroll">
      <div class="section-title">拳手 ${me("FIGHTER")}</div>
      <div class="fighters">${e}</div>
      <div class="section-title">永久训练 ${me("TRAINING","cyan")}</div>
      ${n}
      ${a}
    </div>
  </section>`);Pe(r,{back:()=>i.goTitle(),fighter:o=>{const c=Zi[o.dataset.id];if(t.fighters.includes(c.id))t.fighter=c.id;else if(t.fame>=c.cost)t.fame-=c.cost,t.fighters.push(c.id),t.fighter=c.id,i.audio.coin(),As(`解锁了「${c.nick}」${c.name}`);else{As(`还差 ${c.cost-t.fame} 名气`);return}i.persist(),ms(i)},perk:o=>{const c=wl.find(u=>u.id===o.dataset.id),l=t.perks[c.id]??0,h=c.costs[l];h===void 0||t.fame<h||(t.fame-=h,t.perks[c.id]=l+1,i.audio.coin(),i.persist(),ms(i))},lvdown:()=>{t.level=Math.max(0,t.level-1),i.persist(),ms(i)},lvup:()=>{t.level=Math.min(t.maxLevel,t.level+1),i.persist(),ms(i)}},()=>i.audio.click())}function lx(i){const t=i.save,e=mi.map(s=>{const a=t.met.includes(s.id),r=t.beaten.includes(s.id);return a?`<div class="opp-row"><h4>「${s.nick}」${s.name} ${r?me("WIN","cyan"):me("LOST","red")}</h4><p>${s.title} · ${s.quote}</p><p class="sig">第二拳：${s.signature}</p><div class="habits">${s.habits.map(o=>me(o,"dim")).join("")}</div></div>`:`<div class="opp-row unknown"><h4>？？？ ${me(`第 ${s.stage} 关${s.boss?" · 拳王":""}`,"dim")}</h4><p>还没交过手。</p></div>`}).join(""),n=Ke(`
  <section class="scr dim">
    <div class="scr-head"><button class="back" data-act="back">‹ 返回</button><h2>拳手图鉴</h2><span class="coins">${t.met.length}/${mi.length}</span></div>
    <div class="scroll"><div class="roster">${e}</div></div>
  </section>`);Pe(n,{back:()=>i.goTitle()},()=>i.audio.click())}function hx(i,t){const e=Sh[i.kind];if(i.opp){const n=zo(i),s=sn[i.opp],a=i.elite?Pa.find(o=>o.id===i.elite):null,r=yh[i.kind];return`<button class="card ${i.kind}" data-act="node" data-i="${t}"><div class="in">
      <div class="k">${me(e.en,i.kind==="boss"?"":i.kind==="elite"?"dim":"red")}${a?me(a.name,"dim"):""}<span style="font-size:12px;color:var(--text-soft)">${e.name}</span></div>
      <h3>「${s.nick}」${s.name}<small>${s.title}</small></h3>
      <p class="sig"><b>第二拳：</b>${n.signature}</p>
      <p>${a?`${a.desc} · `:""}奖励：¥${r.coins}+ · 技能点 ${r.sp}${i.kind!=="fight"?" · 装备三选一":""}</p>
    </div></button>`}return i.kind==="event"?`<button class="card event" data-act="node" data-i="${t}"><div class="in"><div class="k">${me(e.en,"dim")}</div><h3>${e.name}<small>？</small></h3><p>${e.desc}</p></div></button>`:`<button class="card ${i.kind}" data-act="node" data-i="${t}"><div class="in"><div class="k">${me(e.en,"cyan")}</div><h3>${e.name}</h3><p>${e.desc}</p></div></button>`}function Ph(i){const t=i.save.run,e=on(t),n=wa.map((o,c)=>`<i class="${c<t.step?"done":c===t.step?"now":c===wa.length-1?"boss":""}"></i>`).join(""),s=qe[t.stage],a=Ke(`
  <section class="scr dim">
    <div class="route-head"><div>${me(`STAGE ${t.stage} · ${s.en}`)}<h2>${s.name}</h2></div>
      <button class="back" data-act="quit">暂离 ›</button></div>
    <div class="ladder">${n}</div>
    <div class="status"><div>${Ho(t.hp,e)}</div><span class="num"><b>${Math.ceil(t.hp)}</b>/${e}</span><span class="num" style="color:var(--gold)">¥<b style="color:var(--gold)">${t.coins}</b></span></div>
    <div class="relics">${cx(t.relics)||'<span class="hint-line" style="margin:6px 0 0">还没有装备</span>'}</div>
    <div class="scroll"><div class="choices">${t.choices.map(hx).join("")}</div></div>
    <div class="route-foot">
      <button class="btn ${t.sp>0?"primary":""}" data-act="skills"><span>技能加点</span>${t.sp>0?`<span class="badge">${t.sp}</span>`:""}</button>
      ${re("装备","",'data-act="gear"')}
    </div>
  </section>`);Pe(a,{node:o=>i.pickNode(Number(o.dataset.i)),skills:()=>jn(i,()=>Ph(i)),gear:()=>dx(i),quit:()=>i.goTitle()},()=>i.audio.click());const r=t.choices.find(o=>o.opp);i.previewOpponent(r?sn[r.opp]:null)}function dx(i){const t=i.save.run,e=At("#modal"),n=t.relics.length?t.relics.map(s=>{const a=Qi[s];return`<div class="item r${a.rarity}"><span class="gl">${a.glyph}</span><div><h4>${a.name}</h4><p>${a.desc}</p></div><span></span></div>`}).join(""):"<p>还没有装备。打赢精英赛、冠军战，或者去体育用品店买。</p>";e.innerHTML=`<div class="panel"><h3>装备</h3><div class="pick" style="max-height:60vh;overflow-y:auto">${n}</div><div class="btns">${re("关闭","",'data-act="close"')}</div></div>`,e.classList.remove("hidden"),Pe(e,{close:()=>e.classList.add("hidden")},()=>i.audio.click())}function ux(i,t){const e=zo(t),n=sn[t.opp],s=t.elite?Pa.find(c=>c.id===t.elite):null,a=i.save.run,r=a.wins+1,o=Ke(`
  <section class="scr vs">
    <div class="vs-big">VS</div>
    <div class="vs-top">
      ${me(t.kind==="boss"?`TITLE FIGHT · ${qe[a.stage].name}`:`STAGE ${a.stage} · BOUT ${r}`,t.kind==="boss"?"":"red")} ${s?me(`${s.name}：${s.desc}`,"dim"):""}
      <div style="margin-top:10px"><span class="vs-name"><span>「${n.nick}」${n.name}</span></span></div>
      <span class="vs-title">${n.title}</span>
      <div class="vs-quote">“${n.quote}”</div>
      <div class="vs-sig"><b>第二拳：</b>${e.signature}</div>
      <div class="vs-stats">${n.habits.map(c=>me(c,"red")).join("")}${e.feint?me(`假动作 ${Math.round(e.feint*100)}%`,"dim"):""}${me(`防住 ${Math.max(2,e.gauge+i.runMods().gaugeReq)} 下 → 破绽`,"dim")}${me(`思考 ${(qe[a.stage].readTime*Oo(a.level).read*(e.readMul??1)*i.runMods().readMul+i.runMods().readAdd).toFixed(1)} 秒`,"dim")}${e.phase2?me("有第二阶段","red"):""}</div>
    </div>
    ${re("开打！","primary big",'data-act="go"')}
    <p class="hint-line">他出拳时时间会停住：点左 / 右半屏闪 · 下潜 · 看穿 · 格挡</p>
  </section>`);Pe(o,{go:()=>i.startFight()},()=>i.audio.unlock())}function fx(i,t,e,n){const s=t.stats,a=s.defended+s.hits,r=i.save.run,o=Ke(`
  <section class="scr dim result">
    <div class="grade ${t.rating}">${t.rating}</div>
    <h2>K.O. 胜利</h2>
    <div class="stat-grid">
      <div class="stat"><small>防守率</small><b>${a?Math.round(s.defended/a*100):100}%</b></div>
      <div class="stat"><small>防住第二拳</small><b>${s.seconds}</b></div>
      <div class="stat"><small>看穿假动作</small><b>${s.reads}</b></div>
      <div class="stat"><small>最高连击</small><b>${s.bestCombo}</b></div>
    </div>
    <div class="rewards">
      <span class="reward gold"><span>¥ +${e.coins}</span></span>
      <span class="reward cyan"><span>技能点 +${e.sp}</span></span>
      <span class="reward green"><span>血量 +${e.heal}</span></span>
    </div>
    ${re(e.relics.length?"选一件装备":r.sp>0?"去加点":"继续","primary big",'data-act="next"')}
    ${e.relics.length||r.sp<=0?"":re("稍后再加","ghost",'data-act="skip"')}
  </section>`);Pe(o,{next:()=>{e.relics.length?px(i,e.relics,n):r.sp>0?jn(i,n):n()},skip:()=>n()},()=>i.audio.click())}function px(i,t,e){const n=i.save.run,s=t.map(o=>{const c=Qi[o];return`<button class="item r${c.rarity}" data-act="take" data-id="${o}"><span class="gl">${c.glyph}</span><div><h4>${c.name}</h4><p>${c.desc}</p></div>${me(["","COMMON","RARE","LEGEND"][c.rarity],c.rarity===3?"red":c.rarity===2?"":"dim")}</button>`}).join(""),a=Ke(`
  <section class="scr dim">
    <div class="scr-head"><h2>选一件装备</h2></div>
    <div class="pick">${s}</div>
    <div style="margin-top:auto">${re("都不要","ghost",'data-act="skip"')}</div>
  </section>`),r=()=>n.sp>0?jn(i,e):e();Pe(a,{take:o=>{Th(n,o.dataset.id),i.audio.coin(),i.persist(),r()},skip:()=>r()},()=>i.audio.click())}let us="dodge";function jn(i,t,e=null){const n=i.save.run,s=El.find(g=>g.id===us),a=vs.filter(g=>g.branch===us),r=Math.max(...a.map(g=>g.row)),o=(g,w)=>({x:50+g*32,y:90-w/Math.max(1,r)*78}),c=a.filter(g=>g.parent).map(g=>{const w=hi[g.parent],p=o(w.col,w.row),f=o(g.col,g.row),E=(n.skills[g.parent]??0)>0;return`<line x1="${p.x}%" y1="${p.y}%" x2="${f.x}%" y2="${f.y}%" stroke="${E?s.color:"rgba(255,255,255,0.15)"}" stroke-width="3"/>`}).join(""),l=a.map(g=>{const w=Tl(n.skills,g.id,n.sp),p=n.skills[g.id]??0,f=o(g.col,g.row),E=Array.from({length:g.max},(L,M)=>`<i class="${M<p?"on":""}"></i>`).join("");return`<button class="node ${w} ${e===g.id?"sel":""}" style="left:${f.x}%;top:${f.y}%" data-act="sel" data-id="${g.id}">
      <div class="nb"><b>${g.name}</b><div class="pips">${E}</div></div><span class="cost">${w==="maxed"?"MAX":`${g.cost} 点`}</span></button>`}).join(""),h=e?hi[e]:null;let u='<p style="margin:0">点一个技能看详情。根节点在下面，学了父技能才能学子技能。</p>';if(h){const g=Tl(n.skills,h.id,n.sp),w=n.skills[h.id]??0,p=g==="locked"?`先学「${hi[h.parent].name}」`:g==="poor"?`需要 ${h.cost} 技能点`:g==="maxed"?"已满级":"";u=`<h4>${h.name} <span style="font-family:var(--num);font-size:14px;color:var(--text-soft)">Lv ${w}/${h.max}</span></h4><p>${h.desc}</p>
      ${g==="ready"?re(`学习（${h.cost} 点）`,"primary small",'data-act="learn"'):`<span class="tag dim"><span>${p}</span></span>`}`}const d=El.map(g=>{const w=vs.filter(f=>f.branch===g.id&&(n.skills[f.id]??0)>0).length,p=vs.filter(f=>f.branch===g.id).length;return`<button class="tab ${g.id===us?"on":""}" style="border-bottom-color:${g.id===us?g.color:"transparent"}" data-act="tab" data-id="${g.id}"><span>${g.name}<small>${w}/${p}</small></span></button>`}).join(""),m=Ke(`
  <section class="scr dim" style="--branch:${s.color}">
    <div class="scr-head"><h2>技能加点</h2><span class="sp">技能点 ${n.sp}</span></div>
    <div class="tabs">${d}</div>
    <div class="tree"><svg>${c}</svg>${l}</div>
    <div class="detail">${u}</div>
    <div style="margin-top:10px">${re("完成","",'data-act="done"')}</div>
  </section>`);Pe(m,{tab:g=>{us=g.dataset.id,jn(i,t,null)},sel:g=>jn(i,t,g.dataset.id),learn:()=>{e&&J_(n,e)&&(i.audio.coin(),i.persist()),jn(i,t,e)},done:()=>t()},()=>i.audio.click())}function Ih(i,t){const e=i.save.run,n=nx(e),s=on(e),a=n.map((o,c)=>{let l="",h="",u="",d="";if(o.kind==="relic"){const g=Qi[o.id];l=g.name,h=g.desc,u=g.glyph,d=`r${g.rarity}`}else o.kind==="heal"?(l="冰袋",h=`回复 ${Math.round(Bo.share*100)}% 血量（可以多买）`,u="冰"):(l="训练课",h="技能点 +1（限一次）",u="课");const m=e.coins<o.price||o.kind==="heal"&&e.hp>=s;return`<button class="item ${d} ${o.sold?"sold":""} ${m?"poor":""}" data-act="buy" data-i="${c}"><span class="gl">${u}</span><div><h4>${l}</h4><p>${h}</p></div><span class="price">¥${o.price}</span></button>`}).join(""),r=Ke(`
  <section class="scr dim">
    <div class="scr-head"><h2>体育用品店</h2><span class="coins">¥ ${e.coins}</span></div>
    <div class="status" style="margin-bottom:12px"><div>${Ho(e.hp,s)}</div><span class="num"><b>${Math.ceil(e.hp)}</b>/${s}</span><span></span></div>
    <div class="scroll"><div class="pick">${a}</div></div>
    ${re("离开","",'data-act="leave"')}
  </section>`);Pe(r,{buy:o=>{ix(e,Number(o.dataset.i))&&(i.audio.coin(),i.persist()),Ih(i,t)},leave:()=>t()},()=>i.audio.click())}function mx(i,t){const e=i.save.run,n=on(e),s=Ke(`
  <section class="scr dim" style="justify-content:center">
    <div class="event-card" style="border-left-color:var(--safe)">
      <h3>队医</h3>
      <p>「坐下，我看看。」<br>队医只有时间做一件事。</p>
      <div class="status" style="margin-top:12px"><div>${Ho(e.hp,n)}</div><span class="num"><b>${Math.ceil(e.hp)}</b>/${n}</span><span></span></div>
      <div class="opts">
        <button class="opt" data-act="heal"><b>治疗</b><small>回复 ${Math.round(wh*100)}% 血量</small></button>
        <button class="opt" data-act="massage"><b>按摩</b><small>本轮最大血量 +8（并回复 8）</small></button>
      </div>
    </div>
  </section>`);Pe(s,{heal:()=>{const a=j_(e);As(`回复了 ${a} 血`),i.persist(),t()},massage:()=>{e.bonusHp+=8,e.hp+=8,As("最大血量 +8"),i.persist(),t()}},()=>i.audio.click())}function gx(i,t){const e=i.save.run,n=tx.map(a=>`<button class="opt" data-act="t" data-id="${a.id}"><b>${a.name}</b><small>${a.desc}</small></button>`).join(""),s=Ke(`
  <section class="scr dim" style="justify-content:center">
    <div class="event-card" style="border-left-color:var(--me)">
      <h3>训练馆</h3>
      <p>教练抱着胳膊：「今天练多狠，你自己选。」</p>
      <div class="opts">${n}</div>
    </div>
  </section>`);Pe(s,{t:a=>{ex(e,a.dataset.id),i.persist(),jn(i,t)}},()=>i.audio.click())}function _x(i,t,e){const n=i.save.run,s=G_[t.event],a=s.options.map((o,c)=>{const l=!o.ok||o.ok(n);return`<button class="opt" data-act="opt" data-i="${c}" ${l?"":"disabled"}><b>${o.label}</b><small>${o.desc}</small></button>`}).join(""),r=Ke(`
  <section class="scr dim" style="justify-content:center">
    <div class="event-card">
      ${me("EVENT","dim")}
      <h3 style="margin-top:8px">${s.title}</h3>
      <p>${s.text}</p>
      <div class="opts" id="ev-opts">${a}</div>
      <div class="outcome hidden" id="ev-out"></div>
      <div style="margin-top:16px" class="hidden" id="ev-next">${re("继续","primary",'data-act="next"')}</div>
    </div>
  </section>`);Pe(r,{opt:o=>{const c=s.options[Number(o.dataset.i)],{rng:l,done:h}=sx(n),u=c.apply(n,l,on(n));h(),n.hp=Math.min(on(n),n.hp),i.persist(),At("#ev-opts",r).classList.add("hidden");const d=At("#ev-out",r);d.textContent=u,d.classList.remove("hidden"),At("#ev-next",r).classList.remove("hidden")},next:()=>n.sp>0?jn(i,e):e()},()=>i.audio.click())}function xx(i,t,e,n,s){const a=i.save.run,r=Ke(`
  <section class="scr dim runend" style="justify-content:center;gap:16px">
    ${me(t?"CHAMPION":"GAME OVER",t?"":"red")}
    <h2>${t?a.stage===pn.length?"你防住了第二拳！":`第 ${a.stage} 关 通关！`:"别笑。"}</h2>
    <p style="text-align:center;color:var(--text-soft);font-weight:500">${t?a.stage===pn.length?"世界拳王赛冠军。这一次，没人能打中你。":`${qe[a.stage].name}的拳王倒下了。下一关：${qe[a.stage+1].name}。`:`你倒在了${s?`「${sn[s].nick}」${sn[s].name}`:"擂台上"}的拳下。<br>——你也防不了第二拳。`}</p>
    <div class="stat-grid">
      <div class="stat"><small>关卡</small><b>${a.stage} · ${qe[a.stage].name}</b></div>
      <div class="stat"><small>赢下</small><b>${a.wins} 场</b></div>
      <div class="stat"><small>击败拳王</small><b>${a.bosses}</b></div>
      <div class="stat"><small>擂台等级</small><b>${a.level}</b></div>
    </div>
    <div class="fame">+${e}<small>名气（去拳馆解锁拳手和训练）</small></div>
    ${n.map(c=>`<p class="hint-line" style="color:var(--gold)">${c}</p>`).join("")}
    ${t&&a.stage<pn.length?re(`下一关：${qe[a.stage+1].name}`,"primary big",'data-act="next"'):re(t?"再打一次":"再来一次","primary big",'data-act="again"')}
    ${re("选关","ghost",'data-act="stages"')}
  </section>`),o=a.stage;Pe(r,{again:()=>{i.finishRunAck(),i.startRun(o)},next:()=>{i.finishRunAck(),i.startRun(o+1)},stages:()=>{i.finishRunAck(),fo(i)},title:()=>{i.finishRunAck(),i.goTitle()}},()=>i.audio.click())}function vx(i,t,e){const n=i.save,s=At("#modal"),a=()=>{s.innerHTML=`<div class="panel"><h3>暂停</h3>
      <div class="btns">${re("继续","primary",'data-act="resume"')}
      <div class="row">${re(`音效：${n.muted?"关":"开"}`,"small",'data-act="sound"')}${re(`音乐：${n.music?"开":"关"}`,"small",'data-act="music"')}</div>
      ${re("认输（本轮结束）","ghost",'data-act="forfeit"')}</div>
      <p class="hint-line">← → 闪 · ↓ 下潜 · ↑ 格挡 · 空格 看穿</p></div>`,Pe(s,{resume:()=>{s.classList.add("hidden"),t()},sound:()=>{i.setMuted(!n.muted),a()},music:()=>{i.setMusic(!n.music),a()},forfeit:()=>Lh(i,"认输？","这一轮挑战会就此结束。","认输",()=>{s.classList.add("hidden"),e()})},()=>i.audio.click())};a(),s.classList.remove("hidden")}function fo(i){const t=i.save,e=pn.map(s=>{const a=s.id===1||t.cleared.includes(s.id-1),r=t.cleared.includes(s.id),o=t.stageBest[s.id],c=mi.find(h=>h.stage===s.id&&h.boss),l=Array.from({length:5},(h,u)=>`<i class="${u<s.id?"on":""}"></i>`).join("");return`<button class="stage ${a?"":"locked"} ${r?"cleared":""}" data-act="pick" data-id="${s.id}">
      <span class="no">${s.id}</span>
      <div><h3>${s.name}</h3><p>${a?`${s.desc} 拳王：「${c.nick}」${c.name}`:"打通上一关解锁"}</p><div class="meter">${l}</div></div>
      <span class="best">${o??""}</span></button>`}).join(""),n=Ke(`
  <section class="scr dim">
    <div class="scr-head"><button class="back" data-act="back">‹ 返回</button><h2>选关</h2><span class="coins">${t.cleared.length}/${pn.length}</span></div>
    <p class="hint-line" style="text-align:left;margin:0 0 10px">每一关：三场比赛 + 拳王，中间有商店、队医和训练馆。越往后，思考时间越短、拳越重。</p>
    <div class="scroll"><div class="stages">${e}</div></div>
  </section>`);Pe(n,{back:()=>i.goTitle(),pick:s=>{const a=Number(s.dataset.id);if(a!==1&&!t.cleared.includes(a-1)){As("先打通上一关");return}i.startRun(a)}},()=>i.audio.click()),i.previewOpponent(mi.find(s=>s.stage===Math.min(pn.length,t.cleared.length+1)&&s.boss)??null)}class Mx{save=L_();arena;overlay;audio=new y_;bout=null;demo=null;node=null;last=performance.now()/1e3;paused=!1;constructor(){this.arena=new Yg(At("#gl")),this.overlay=new g_(At("#fx")),this.audio.muted=this.save.muted,this.audio.musicOn=this.save.music;const t=()=>this.audio.unlock();window.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("keydown",t,{capture:!0}),window.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.bout&&!this.paused&&this.pause()}),this.resize(),this.goTitle(),requestAnimationFrame(()=>this.frame())}resize(){document.documentElement.style.setProperty("--host-top",`${ax()}px`),this.arena.resize(),this.overlay.resize()}frame(){const t=performance.now()/1e3,e=Math.min(.05,t-this.last);this.last=t,this.tick(e,t),requestAnimationFrame(()=>this.frame())}tick(t,e){let n=null;if(this.bout)this.bout.step(t,e),n=this.bout?.fight??null;else if(this.demo){const s=this.demo;s.bot.act(s.fight),s.fight.drain(),s.fight.tick(t),(s.fight.over||s.fight.t>90)&&this.setDemo(s.opp),n=s.fight}this.arena.update(n,e,t),this.overlay.draw(this.bout?n:null,this.arena,t,e)}persist(){P_(this.save)}setMuted(t){this.save.muted=t,this.audio.setMuted(t),this.persist()}setMusic(t){this.save.music=t,this.audio.setMusic(t),this.persist()}runMods(){return Xi(this.save.run)}setDemo(t){if(!t){this.demo=null,this.arena.setOpponent(null);return}(!this.demo||this.demo.opp.id!==t.id)&&this.arena.setOpponent(t.look);const e={...this.baseDemoMods()},n=new gh({opp:{...t,hp:99999},mods:{...e,staminaMax:99,guardMax:99},hp:9999,seed:Math.floor(Math.random()*1e9),readTime:.9,bpm:this.audio.bpm});this.demo={fight:n,bot:new D_(I_.skilled,Math.floor(Math.random()*1e9)),opp:t}}baseDemoMods(){return Xi({fighter:"rookie",perks:{},bonusHp:9900,skills:{},relics:[]})}previewOpponent(t){this.arena.menuMode=!0,this.setDemo(t)}goTitle(){this.arena.menuMode=!0;const t=this.save.run,e=t&&!t.over?t.choices.find(n=>n.opp):null;this.previewOpponent(e?sn[e.opp]:sn.erquan),this.audio.playTrack("menu"),uo(this)}startRun(t=1){const e=this.save,n=Math.floor(Math.random()*2**31);e.run=Y_(n,t,e.fighter,Math.min(e.level,e.maxLevel),e.perks,!e.tutorialDone&&t===1),e.runs++,this.persist(),this.showRoute()}showRoute(){const t=this.save.run;if(!t||t.over){this.goTitle();return}Ph(this)}abandonRun(){const t=this.save.run;t&&!t.over&&(t.over="lose",this.save.fame+=Mr(t),this.save.fameTotal+=Mr(t)),this.save.run=null,this.persist()}pickNode(t){const n=this.save.run.choices[t];if(!n)return;const s=()=>this.advanceRun();switch(n.kind){case"fight":case"elite":case"boss":this.node=n,this.previewOpponent(sn[n.opp]),this.arena.dolly=0,ux(this,n);break;case"event":_x(this,n,s);break;case"shop":Ih(this,s);break;case"clinic":mx(this,s);break;case"train":gx(this,s);break}}startFight(){const t=this.save,e=t.run,n=this.node,s=K_(e,n);t.met.includes(n.opp)||t.met.push(n.opp),this.persist();const a=Zi[e.fighter]??ya[0];this.arena.setPlayerGloves(a.gloves,a.trim),this.demo=null,ox(),this.audio.playTrack(n.kind==="boss"?"boss":qe[e.stage].track),this.bout=new R_({opp:s.opp,mods:Xi(e),hp:e.hp,seed:s.seed,readTime:s.readTime,dmgScale:s.dmgScale,hpScale:s.hpScale,meName:a.name,label:`第 ${e.stage} 关 ${qe[e.stage].name} · ${Sh[n.kind].name}`,tutorial:e.tutorial,hints:t.hints,onHint:()=>this.persist(),onEnd:r=>this.onFightEnd(r),onPause:()=>this.pause()},this.arena,this.overlay,this.audio)}pause(){!this.bout||this.paused||(this.paused=!0,this.bout.setPaused(!0),vx(this,()=>{this.paused=!1,this.bout?.setPaused(!1)},()=>{this.paused=!1;const t=this.bout;if(!t)return;const e=t.fight.stats;t.dispose(),this.bout=null,this.onFightEnd({win:!1,hp:0,stats:e,rating:"D"})}))}onFightEnd(t){const e=this.save,n=e.run,s=this.node;if(this.bout=null,e.totals.fights++,e.totals.reads+=t.stats.reads,e.totals.seconds+=t.stats.seconds,e.totals.windows+=t.stats.windows,e.totals.bestCombo=Math.max(e.totals.bestCombo,t.stats.bestCombo),n.tutorial&&(e.tutorialDone=!0),this.previewOpponent(sn[s.opp]),this.audio.playTrack("menu"),t.win){e.totals.kos++,e.beaten.includes(s.opp)||e.beaten.push(s.opp);const a=Rl(n,s,!0,t.hp,t.stats,t.rating);this.persist(),this.audio.coin(),fx(this,t,a,()=>this.advanceRun())}else Rl(n,s,!1,0,t.stats,t.rating),this.endRun(!1,s.opp??null)}advanceRun(){const t=this.save.run;Q_(t),this.persist(),t.over==="win"?this.endRun(!0,null):this.showRoute()}endRun(t,e){const n=this.save,s=n.run,a=Mr(s);n.fame+=a,n.fameTotal+=a,n.bestWins=Math.max(n.bestWins,s.wins);const r=[];if(t){n.clears++;const c=n.stageBest[s.stage],l=s.ratings[s.ratings.length-1];if(l&&(!c||"SABCD".indexOf(l)<"SABCD".indexOf(c))&&(n.stageBest[s.stage]=l),n.cleared.includes(s.stage)||(n.cleared.push(s.stage),s.stage<pn.length&&r.push(`解锁第 ${s.stage+1} 关：${qe[s.stage+1].name}`)),s.stage===pn.length){const h=Math.min(Mh,s.level+1);h>n.maxLevel&&(n.maxLevel=h,r.push(`解锁擂台等级 ${h}（在拳馆里选）`))}}const o=ya.find(c=>!n.fighters.includes(c.id)&&n.fame>=c.cost);o&&r.push(`名气够解锁「${o.nick}」${o.name} 了，去拳馆看看`),this.persist(),e&&this.previewOpponent(sn[e]),xx(this,t,a,r,e)}finishRunAck(){this.save.run=null,this.persist()}}new Mx;
