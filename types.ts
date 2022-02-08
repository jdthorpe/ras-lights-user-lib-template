export type rgbw = [number, number, number, number];
export type rgb = [number, number, number];

export interface register {
    (
        name: string,
        func: func,
        input: any[], // input[],
        output: string // value // | values
    ): void;
}
export interface globals {
    leds: number;
}
