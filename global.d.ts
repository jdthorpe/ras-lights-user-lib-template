type rgb = [number, number, number];
type rgbw = [number, number, number, number];

interface globals {
    leds: number;
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
