"use strict";(self.webpackChunkdefault_lib=self.webpackChunkdefault_lib||[]).push([[656,179],{656:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.load=void 0;const r=s(682);t.load=function(e){for(let t of r.defs)e(t)},s(607)},682:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.defs=void 0,t.defs=[],t.register=function(e){t.defs.push(e)}},607:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),s(49)},49:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),(0,s(682).register)({name:"Razzle Dazzle",func:function(e,t){if(void 0===this.state)return this.state=new Array(t.leds).fill(0),this.prev_time=+new Date,this.frac=0,this.state;const s=+new Date,r=this.frac+e.rate*(s-this.prev_time)/1e3;this.frac=r%1;for(let e=0;e<r;e++){let e=Math.floor(Math.random()*t.leds);this.state[e]=0===this.state[e]?255:0}return this.state},input:[{key:"rate",type:"number",label:"Speed (count/second)",default:5,min:1,max:1e3}],output:"number[]"})}}]);
//# sourceMappingURL=656.js.map