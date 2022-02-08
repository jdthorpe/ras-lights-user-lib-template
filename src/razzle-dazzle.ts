import { register } from "../register";

interface input {
    rate: number;
}

function effect(
    this: { state: number[] },
    x: input,
    globals: globals
): number[] {
    if (typeof this.state === "undefined") {
        this.state = new Array(globals.leds).fill(0);
    }
    const i = Math.floor(Math.random() * globals.leds);
    this.state[i] = this.state[i] === 0 ? 255 : 0;
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
            label: "Speed",
            default: 5,
            min: "1",
            max: 1,
        },
    ],
    /* Effect Output Type */
    output: "number[]",
});
