import { register } from "../register";
import { asRGBW, average } from "./utils";

interface input {
    to: rgbw;
    fade_time: number;
}

function effect(
    this: { from: rgbw[]; start_time: number; stopped: boolean },
    x: input,
    globals: globals
): rgbw[] {
    if (typeof this.from === "undefined") {
        console.log("smooth to globals", JSON.stringify(globals));
        console.dir(globals);
        this.from = (globals.prev && globals.prev.map(asRGBW)) || [
            [0, 0, 0, 0],
        ];
        this.start_time = +new Date();
        this.stopped = false;
    }
    if (this.stopped) {
        console.log("stop");
        globals.stop();
    }
    const now = +new Date();
    if (now - this.start_time > x.fade_time) {
        this.stopped = true;
        return [x.to];
    }
    return this.from.map((f) =>
        average(f, x.to, (now - this.start_time) / x.fade_time)
    );
}

register({
    /* Effect Name */
    name: "SmoothTo",
    /* Effect Function */
    func: effect,
    /* Effect Inputs */
    input: [
        {
            key: "to",
            type: "rgbw",
            label: "To",
            default: [0, 0, 255, 127],
        },
        {
            key: "fade_time",
            type: "number",
            label: "Fade Time (ms)",
            default: 500,
            min: 1,
            max: 10000,
        },
    ],
    /* Effect Output Type */
    output: "rgbw[]",
});
