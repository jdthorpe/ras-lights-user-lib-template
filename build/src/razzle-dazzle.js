"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../register");
function effect(x, globals) {
    if (typeof this.state === "undefined") {
        this.state = new Array(globals.leds).fill(0);
        this.prev_time = +new Date();
        this.frac = 0;
        return this.state;
    }
    const now = +new Date();
    const delta = this.frac + (x.rate * (now - this.prev_time)) / 1000;
    this.frac = delta % 1;
    for (let i = 0; i < delta; i++) {
        let i = Math.floor(Math.random() * globals.leds);
        this.state[i] = this.state[i] === 0 ? 255 : 0;
    }
    return this.state;
}
(0, register_1.register)({
    /* Effect Name */
    name: "Razzle Dazzle",
    /* Effect Function */
    func: effect,
    /* Effect Inputs */
    input: [
        {
            key: "rate",
            type: "number",
            label: "Speed (count/second)",
            default: 5,
            min: 1,
            max: 1000,
        },
    ],
    /* Effect Output Type */
    output: "number[]",
});
