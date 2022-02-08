import { rgb } from "../types";

export function average(a: rgb, b: rgb, w: number): rgb {
    return [
        Math.floor(a[0] * (1 - w) + b[0] * w),
        Math.floor(a[1] * (1 - w) + b[1] * w),
        Math.floor(a[2] * (1 - w) + b[2] * w),
    ];
}
