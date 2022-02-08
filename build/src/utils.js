"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = void 0;
function average(a, b, w) {
    return [
        Math.floor(a[0] * (1 - w) + b[0] * w),
        Math.floor(a[1] * (1 - w) + b[1] * w),
        Math.floor(a[2] * (1 - w) + b[2] * w),
    ];
}
exports.average = average;
