"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asRGBW = exports.average = void 0;
function _average(a, b, w) {
    // utility function
    return Math.floor(a * (1 - w) + b * w);
}
function average(a, b, w) {
    if (typeof a === "number")
        return _average(a, b, w);
    if (a.length === 3)
        return [
            Math.floor(a[0] * (1 - w) + b[0] * w),
            Math.floor(a[1] * (1 - w) + b[1] * w),
            Math.floor(a[2] * (1 - w) + b[2] * w),
        ];
    return [
        Math.floor(a[0] * (1 - w) + b[0] * w),
        Math.floor(a[1] * (1 - w) + b[1] * w),
        Math.floor(a[2] * (1 - w) + b[2] * w),
        Math.floor(a[3] * (1 - w) + b[3] * w),
    ];
}
exports.average = average;
function asRGBW(a) {
    if (typeof a === "number")
        return [0, 0, 0, a];
    if (a.length === 4)
        return a;
    return [...a, 0];
}
exports.asRGBW = asRGBW;
