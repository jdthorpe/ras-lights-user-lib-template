(()=>{"use strict";var e={682:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.defs=void 0,t.defs=[],t.register=function(e){t.defs.push(e)}},662:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Color DAzzle",func:function(e,t){const{colors:r,rate:n}=e;if(void 0===this.state)return this.state=new Array(t.leds).fill(0),this.prev_time=+new Date,this.frac=0,this.state;const i=+new Date;let a=this.frac+n*(i-this.prev_time)/1e3;for(;a>1;){a-=1;let e=Math.floor(Math.random()*t.leds),n=Math.floor(Math.random()*(r.length-2));console.log(`changing to color ${n} of ${r.length}at index ${e}`),this.state[e]=r[n+ +(n>=this.state[e])]}return this.prev_time=i,this.frac=a,this.state},input:[{key:"colors",type:"rgb[]",label:"Colors",default:[[0,0,0],[255,255,255],[0,255,0],[255,0,0]]},{key:"rate",type:"number",label:"Speed (count/second)",default:5,min:1,max:1e3}],output:"rgb[]"})},607:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(49),r(662),r(141),r(869),r(126),r(149),r(734)},126:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Marquee Bounce",func:function(e){if(void 0===this.i)this.prev_time=+new Date,this.frac=0,this.i=0,this.dir=1;else{const t=+new Date,r=this.frac+e.rate*(t-this.prev_time)/1e3;this.prev_time=t,this.frac=r%1,r>1&&(this.i>=e.count-1?this.dir=-1:this.i<=0&&(this.dir=1),this.i+=this.dir)}const t=new Array(e.count).fill(0);return t[this.i]=255,t},input:[{key:"count",type:"integer",label:"Width",default:5,min:1,max:100},{key:"rate",type:"number",label:"Rate",default:3,min:1,max:100}],output:"number[]"})},869:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Marquee",func:function(e){if(void 0===this.i)this.i=0,this.prev_time=+new Date,this.frac=0;else{const t=+new Date,r=this.frac+e.rate*(t-this.prev_time)/1e3;this.i=(this.i+Math.floor(r))%e.count,this.prev_time=t,this.frac=r%1}const t=new Array(e.count).fill(0);return t[this.i]=255,t},input:[{key:"count",type:"integer",label:"Width",default:5,min:1,max:100},{key:"rate",type:"number",label:"Rate",default:3,min:1,max:100}],output:"number[]"})},49:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Razzle Dazzle",func:function(e,t){if(void 0===this.state)return this.state=new Array(t.leds).fill(0),this.prev_time=+new Date,this.frac=0,this.state;const r=+new Date;let n=this.frac+e.rate*(r-this.prev_time)/1e3;for(;n>1;){n-=1;let e=Math.floor(Math.random()*t.leds);this.state[e]=0===this.state[e]?255:0}return this.prev_time=r,this.frac=n,this.state},input:[{key:"rate",type:"number",label:"Speed (count/second)",default:5,min:1,max:1e3}],output:"number[]"})},141:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"RGB+W",func:function(e,t){const{rgb:r,w:n}=e,i=new Array(t.leds);for(let e=0;e<t.leds;e++)i[e]=[...r[e%r.length],n[e%n.length]];return i},input:[{key:"rgb",type:"rgb[]",label:"RGB",default:[[0,0,255],[0,255,255],[100,0,255]]},{key:"w",type:"number[]",label:"W",default:[0,63,127,191,255]}],output:"rgbw[]"})},734:(e,t,r)=>{function n(e,t){return e[t%e.length]}Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Venetian Slide",func:function(e,t){void 0===this.progress&&(this.progress=function(e,t){const r=+new Date;return()=>{const n=(+new Date-r)/(1e3*e);return{i:Math.floor(n*t)%t,c:Math.floor(n)%2}}}(e.r,e.w));const{i:r,c:i}=this.progress(),a=new Array(t.leds),s=e.x,o=e.y;for(let l=0;l<t.leds;l++)a[l]=n(i^+(l%e.w>r)?s:o,l);return a},input:[{key:"x",type:"rgb[]",label:"Show 1",default:[[0,0,255]]},{key:"y",type:"rgb[]",label:"Show 2",default:[[100,0,255]]},{key:"r",type:"number",label:"Rate (Seconds)",default:5,min:1,max:1e3},{key:"w",type:"number",label:"Width",default:20,min:2,max:100}],output:"rgb[]"})},149:(e,t,r)=>{function n(e,t){return e[t%e.length]}Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Venetian",func:function(e,t){const r=+new Date;void 0===this.progress&&(this.progress=function(e,t){const r=+new Date;return()=>{const n=(+new Date-r)/(1e3*e);return{i:Math.floor(n*t)%t,c:Math.floor(n)%2}}}(e.r,e.w));const i=+new Date,{i:a,c:s}=this.progress(),o=+new Date,l=new Array(t.leds),u=+new Date,f=e.x,h=e.y,c=+new Date;for(let r=0;r<t.leds;r++)l[r]=n(s^+(r%e.w>a)^Math.floor(r/e.w)%2?f:h,r);const d=+new Date;return console.log(`A: ${i-r} B: ${o-i} C: ${u-o} D: ${c-u} E: ${d-c}`),l},input:[{key:"x",type:"rgb[]",label:"Show 1",default:[[0,0,255],[0,255,255],[100,0,255]]},{key:"y",type:"rgb[]",label:"Show 2",default:[[0,0,255],[0,255,255],[100,0,255]]},{key:"r",type:"number",label:"Rate (Seconds)",default:5,min:1,max:1e3},{key:"w",type:"number",label:"Width",default:20,min:2,max:100}],output:"rgb[]"})}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{r(682);r(607)})()})();
//# sourceMappingURL=main.js.map