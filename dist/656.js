"use strict";(self.webpackChunkras_lights_user_demo=self.webpackChunkras_lights_user_demo||[]).push([[656,179],{656:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.load=void 0;const i=r(682);t.load=function(e){for(let t of i.defs)e(t)},r(607)},682:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.defs=void 0,t.defs=[],t.register=function(e){t.defs.push(e)}},607:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(49),r(141),r(869)},869:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Marquee",func:function(e){if(void 0===this.i)this.i=0,this.prev_time=+new Date,this.frac=0;else{const t=+new Date,r=this.frac+e.rate*(t-this.prev_time)/1e3;this.i+=Math.floor(r)%e.count,this.prev_time=t,this.frac=r%1}const t=new Array(e.count).fill(0);return t[this.i]=255,t},input:[{key:"count",type:"integer",label:"Width",default:5,min:1,max:100},{key:"rate",type:"number",label:"Delay",default:1,min:.01,max:10}],output:"number[]"})},49:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"Razzle Dazzle",func:function(e,t){if(void 0===this.state)return this.state=new Array(t.leds).fill(0),this.prev_time=+new Date,this.frac=0,this.state;const r=+new Date;let i=this.frac+e.rate*(r-this.prev_time)/1e3;for(;i>1;){i-=1;let e=Math.floor(Math.random()*t.leds);this.state[e]=0===this.state[e]?255:0}return this.prev_time=r,this.frac=i,this.state},input:[{key:"rate",type:"number",label:"Speed (count/second)",default:5,min:1,max:1e3}],output:"number[]"})},141:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,r(682).register)({name:"RGB+W",func:function(e,t){const{rgb:r,w:i}=e,s=new Array(t.leds);for(let e=0;e<t.leds;e++)s[e]=[...r[e%r.length],i[e%i.length]];return s},input:[{key:"rgb",type:"rgb[]",label:"RGB",default:[[0,0,255],[0,255,255],[100,0,255]]},{key:"w",type:"number[]",label:"W",default:[0,63,127,191,255]}],output:"rgbw[]"})}}]);
//# sourceMappingURL=656.js.map