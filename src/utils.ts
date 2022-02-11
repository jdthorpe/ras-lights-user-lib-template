function _average(a: number, b: number, w: number) {
    // utility function
    return Math.floor(a * (1 - w) + b * w);
}

export function average(a: number, b: number, w: number): number;
export function average(a: rgbw, b: rgbw, w: number): rgbw;
export function average(a: rgb, b: rgb, w: number): rgb;
export function average(a: any, b: any, w: number) {
    if (typeof a === "number") return _average(a, b as number, w);
    if (a.length === 3)
        return [
            Math.floor(a[0] * (1 - w) + (b as rgbw)[0] * w),
            Math.floor(a[1] * (1 - w) + (b as rgbw)[1] * w),
            Math.floor(a[2] * (1 - w) + (b as rgbw)[2] * w),
        ];
    return [
        Math.floor(a[0] * (1 - w) + (b as rgbw)[0] * w),
        Math.floor(a[1] * (1 - w) + (b as rgbw)[1] * w),
        Math.floor(a[2] * (1 - w) + (b as rgbw)[2] * w),
        Math.floor(a[3] * (1 - w) + (b as rgbw)[3] * w),
    ];
}

export function asRGBW(a: rgb | rgbw | number): rgbw {
    if (typeof a === "number") return [0, 0, 0, a];
    if (a.length === 4) return a;
    return [...a, 0];
}
