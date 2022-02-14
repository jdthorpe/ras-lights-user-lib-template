type rgb = [number, number, number];
type rgbw = [number, number, number, number];

interface globals {
    leds: number;
    stop: () => void;
    prev: number[] | rgb[] | rgbw[];
}

type func =
    | { (): any }
    | { (inputs: any): any }
    | { (inputs: any, globals: globals): any };

interface def {
    name: string;
    func: func;
    input: any[]; // input[],
    output: string; // value // | values
}
