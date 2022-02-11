"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../register");
function effect(x, globals) {
    if (typeof this.state === "undefined") {
        // this function hasn't been called before, so initialize the "this"
        // object
        this.state = new Array(globals.leds).fill(0);
    }
    let i = Math.floor(Math.random() * globals.leds);
    this.state[i] = this.state[i] === 0 ? 255 : 0;
    return this.state;
}
(0, register_1.register)({
    /* Effect Name */
    name: "Razzle Dazzle",
    /* Effect Function */
    func: effect,
    /* Effect Inputs */
    input: [],
    /* Effect Output Type */
    output: "number[]",
});
