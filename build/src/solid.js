"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("../register");
function solid(x) {
    return [x.a];
}
(0, register_1.register)({
    name: "Solid",
    func: solid,
    input: [
        {
            key: "a",
            type: "rgb",
            label: "Color",
            default: [0, 255, 0],
        },
    ],
    output: "rgb[]",
});
