"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../register");
const color_convert_1 = require("color-convert");
function rainbow_stripes(inputs, globals) {
    const { n } = inputs;
    const out = [];
    for (let i = 0; i < globals.leds; i++)
        out.push(color_convert_1.hsv.rgb([(360 * Math.floor((i * n) / globals.leds)) / n, 100, 100]));
    return out;
}
(0, register_1.register)({
    name: "Rainbow Stripes",
    func: rainbow_stripes,
    input: [
        {
            key: "n",
            type: "integer",
            label: "Colors (count)",
            default: 6,
            min: 1,
            max: 9999,
        },
    ],
    output: "rgb[]",
});
