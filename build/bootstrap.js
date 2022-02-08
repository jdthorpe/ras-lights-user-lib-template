"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const register_1 = require("./register");
// expose the definitions to backends
function load(cb) {
    for (let d of register_1.defs)
        cb(d);
}
exports.load = load;
// yes, this import should come last
require("./src/index");
