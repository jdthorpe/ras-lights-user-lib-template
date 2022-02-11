import { register } from "../register";

interface input {}

function effect(
    this: { state: number[] },
    x: input,
    globals: globals
): number[] {
    if (typeof this.state === "undefined") {
        // this function hasn't been called before, so initialize the "this"
        // object
        this.state = new Array(globals.leds).fill(0);
    }
    let i = Math.floor(Math.random() * globals.leds);
    this.state[i] = this.state[i] === 0 ? 255 : 0;
    return this.state;
}

register({
    /* Effect Name */
    name: "Razzle Dazzle",
    /* Effect Function */
    func: effect,
    /* Effect Inputs */
    input: [],
    /* Effect Output Type */
    output: "number[]",
});
