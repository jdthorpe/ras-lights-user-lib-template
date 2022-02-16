(()=>{"use strict";var e={682:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.defs=void 0,t.defs=[],t.register=function(e){t.defs.push(e)}},607:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(49),r(141),r(869),r(126),r(149)},126:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Marquee Bounce",func:function(e){if(void 0===this.i)this.prev_time=+new Date,this.frac=0,this.i=0,this.dir=1;else{const t=+new Date,r=this.frac+e.rate*(t-this.prev_time)/1e3;this.prev_time=t,this.frac=r%1,r>1&&(this.i>=e.count-1?this.dir=-1:this.i<=0&&(this.dir=1),this.i+=this.dir)}const t=new Array(e.count).fill(0);return t[this.i]=255,t},input:[{key:"count",type:"integer",label:"Width",default:5,min:1,max:100},{key:"rate",type:"number",label:"Rate",default:3,min:1,max:100}],output:"number[]"})},869:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Marquee",func:function(e){if(void 0===this.i)this.i=0,this.prev_time=+new Date,this.frac=0;else{const t=+new Date,r=this.frac+e.rate*(t-this.prev_time)/1e3;this.i=(this.i+Math.floor(r))%e.count,this.prev_time=t,this.frac=r%1}const t=new Array(e.count).fill(0);return t[this.i]=255,t},input:[{key:"count",type:"integer",label:"Width",default:5,min:1,max:100},{key:"rate",type:"number",label:"Rate",default:3,min:1,max:100}],output:"number[]"})},49:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Razzle Dazzle",func:function(e,t){if(void 0===this.state)return this.state=new Array(t.leds).fill(0),this.prev_time=+new Date,this.frac=0,this.state;const r=+new Date;let i=this.frac+e.rate*(r-this.prev_time)/1e3;for(;i>1;){i-=1;let e=Math.floor(Math.random()*t.leds);this.state[e]=0===this.state[e]?255:0}return this.prev_time=r,this.frac=i,this.state},input:[{key:"rate",type:"number",label:"Speed (count/second)",default:5,min:1,max:1e3}],output:"number[]"})},141:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"RGB+W",func:function(e,t){const{rgb:r,w:i}=e,n=new Array(t.leds);for(let e=0;e<t.leds;e++)n[e]=[...r[e%r.length],i[e%i.length]];return n},input:[{key:"rgb",type:"rgb[]",label:"RGB",default:[[0,0,255],[0,255,255],[100,0,255]]},{key:"w",type:"number[]",label:"W",default:[0,63,127,191,255]}],output:"rgbw[]"})},149:(e,t,r)=>{function i(e,t){return e[t%e.length]}Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Venetian",func:function(e,t){void 0===this.progress&&(this.progress=function(e,t){const r=+new Date;return()=>{const i=(+new Date-r)/(1e3*e);return{i:Math.floor(i*t),c:Math.floor(i)%2}}}(e.r,e.w));const{i:r,c:n}=this.progress(),s=new Array(t.leds);for(let a=0;a<t.leds;a++)s[a]=i(n^+(r>a)^a%e.w?e.x:e.y,a);return s},input:[{key:"x",type:"rgb[]",label:"Show 1",default:[[0,0,255],[0,255,255],[100,0,255]]},{key:"y",type:"rgb[]",label:"Show 2",default:[[0,0,255],[0,255,255],[100,0,255]]},{key:"r",type:"number",label:"Rate (Seconds)",default:5,min:1,max:1e3},{key:"w",type:"number",label:"Width",default:20,min:2,max:100}],output:"rgb[]"})}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}(()=>{r(682);r(607)})()})();
//# sourceMappingURL=main.js.map