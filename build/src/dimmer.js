"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../register");
function effect(x) {
    const intensity = Math.max(0, Math.min(x.intensity, 100)) / 100;
    return x.main.map((color) => [
        Math.floor(color[0] * intensity),
        Math.floor(color[1] * intensity),
        Math.floor(color[2] * intensity),
    ]);
}
(0, register_1.register)({
    name: "Dimmer",
    func: effect,
    input: [
        {
            key: "main",
            type: "rgb[]",
            label: "Main",
            default: [
                [0, 0, 255],
                [0, 255, 255],
                [100, 0, 255],
            ],
        },
        {
            key: "intensity",
            type: "number",
            label: "Brightness",
            default: 90,
            min: 0,
            max: 100,
        },
    ],
    output: "rgb[]",
});
