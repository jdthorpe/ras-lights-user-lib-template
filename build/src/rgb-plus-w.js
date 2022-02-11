"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../register");
function effect(x, globals) {
    const { rgb, w } = x;
    const out = new Array(globals.leds);
    for (let i = 0; i < globals.leds; i++)
        out[i] = [...rgb[i % rgb.length], w[i % w.length]];
    return out;
}
(0, register_1.register)({
    /* Effect Name */
    name: "RGB+W",
    /* Effect Function */
    func: effect,
    /* Effect Inputs */
    input: [
        {
            key: "rgb",
            type: "rgb[]",
            label: "RGB",
            default: [
                [0, 0, 255],
                [0, 255, 255],
                [100, 0, 255],
            ],
        },
        {
            key: "w",
            type: "number[]",
            label: "W",
            default: [0, 63, 127, 191, 255],
        },
    ],
    /* Effect Output Type */
    output: "rgbw[]",
});
