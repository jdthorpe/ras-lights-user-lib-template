"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../register");
function Progress(t, w) {
    const start_time = +new Date();
    return () => {
        const delta = (+new Date() - start_time) / (t * 1000);
        // how far along in this cycle
        const i = Math.floor(delta * w) % w;
        // cycles between 0 and 1
        const c = Math.floor(delta) % 2;
        return { i, c };
    };
}
function take(x, i) {
    return x[i % x.length];
}
function effect(x, globals) {
    // initialization
    // const A = +new Date();
    if (typeof this.progress === "undefined") {
        this.progress = Progress(x.r, x.w);
    }
    // const B = +new Date();
    const { i, c } = this.progress();
    // const C = +new Date();
    const out = new Array(globals.leds);
    // const D = +new Date();
    const left = x.x;
    const right = x.y;
    // const E = +new Date();
    for (let j = 0; j < globals.leds; j++)
        out[j] = take(c ^ +(j % x.w > i) ? left : right, j);
    // const F = +new Date();
    // console.log(`A: ${B - A} B: ${C - B} C: ${D - C} D: ${E - D} E: ${F - E}`);
    return out;
}
(0, register_1.register)({
    /* Effect Name */
    name: "Venetian Slide",
    /* Effect Function */
    func: effect,
    /* Effect Inputs */
    input: [
        {
            key: "x",
            type: "rgb[]",
            label: "Show 1",
            default: [[0, 0, 255]],
        },
        {
            key: "y",
            type: "rgb[]",
            label: "Show 2",
            default: [[100, 0, 255]],
        },
        {
            key: "r",
            type: "number",
            label: "Rate (Seconds)",
            default: 5,
            min: 1,
            max: 1000,
        },
        {
            key: "w",
            type: "number",
            label: "Width",
            default: 20,
            min: 2,
            max: 100,
        },
    ],
    /* Effect Output Type */
    output: "rgb[]",
});
