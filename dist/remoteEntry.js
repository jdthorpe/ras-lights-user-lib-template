var user;(()=>{"use strict";var e,r,t={},i={};function o(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="default-lib:",o.l=(t,i,n,a)=>{if(e[t])e[t].push(i);else{var l,s;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+n){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",r+n),l.src=t),e[t]=[i];var p=(r,i)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(i))),r)return r(i)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={378:0};o.f.j=(r,t)=>{var i=o.o(e,r)?e[r]:void 0;if(0!==i)if(i)t.push(i[2]);else{var n=new Promise(((t,o)=>i=e[r]=[t,o]));t.push(i[2]=n);var a=o.p+o.u(r),l=new Error;o.l(a,(t=>{if(o.o(e,r)&&(0!==(i=e[r])&&(e[r]=void 0),i)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,i[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var i,n,[a,l,s]=t,u=0;if(a.some((r=>0!==e[r]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);s&&s(o)}for(r&&r(t);u<a.length;u++)n=a[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkdefault_lib=self.webpackChunkdefault_lib||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n,a,l,s,u={};n=u,a={"./lib":()=>o.e(656).then((()=>()=>o(656)))},l=(e,r)=>(o.R=r,r=o.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),o.R=void 0,r),s=(e,r)=>{if(o.S){var t="default",i=o.S[t];if(i&&i!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return o.S[t]=e,o.I(t,r)}},o.d(n,{get:()=>l,init:()=>s}),user=u})();
//# sourceMappingURL=remoteEntry.js.map