"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../register");
function effect(x, globals) {
    const even_colors = x.colors.filter((c, i) => {
        return i % 2 === 0;
    });
    const odd_colors = x.colors.filter((c, i) => {
        return i % 2 === 1;
    });
    return [...even_colors, ...odd_colors.reverse()];
}
(0, register_1.register)({
    /* Effect Name */
    name: "Reflection",
    /* Effect Function */
    func: effect,
    /* Effect Inputs */
    input: [
        {
            key: "colors",
            type: "rgb[]",
            label: "Input Colors",
            default: [
                [0, 0, 255],
                [0, 255, 255],
                [100, 0, 255],
            ],
        },
    ],
    /* Effect Output Type */
    output: "rgb[]",
});
