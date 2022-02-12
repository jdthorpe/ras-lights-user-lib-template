import { register } from "../register";

interface input {
    rate: number;
}

function effect(
    this: {
        state: number[];
        prev_time: number;
        frac: number;
    },
    x: input,
    globals: globals
): number[] {
    if (typeof this.state === "undefined") {
        this.state = new Array(globals.leds).fill(0);
        this.prev_time = +new Date();
        this.frac = 0;
        return this.state;
    }
    const now = +new Date();
    let delta = this.frac + (x.rate * (now - this.prev_time)) / 1000;
    while (delta > 1) {
        delta -= 1;
        let i = Math.floor(Math.random() * globals.leds);
        this.state[i] = this.state[i] === 0 ? 255 : 0;
    }
    this.prev_time = now;
    this.frac = delta;
    return this.state;
}

register({
    /* Effect Name */
    name: "Razzle Dazzle",
    /* Effect Function */
    func: effect,
    /* Effect Inputs */
    input: [
        {
            key: "rate",
            type: "number",
            label: "Speed (count/second)",
            default: 5,
            min: 1,
            max: 1000,
        },
    ],
    /* Effect Output Type */
    output: "number[]",
});
