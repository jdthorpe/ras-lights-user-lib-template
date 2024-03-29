import { register } from "../register";

interface input {
  colors: rgb[];
  rate: number;
}

function effect(this: any, inputs: input, globals: globals): rgb[] {
  const { colors, rate } = inputs;

  if (typeof this.state === "undefined") {
    // INITIALIZE STATE

    // initially all the LEDs are set to the first color
    this.state = new Array(globals.leds);

    for (let i = 0; i < globals.leds; i++) {
      this.state[i] = colors[Math.floor(Math.random() * colors.length)];
    }

    // initialize the time of the last update
    this.prev_time = +new Date();
    this.frac = 0;
    return this.state;
  }

  // increment the fraction of the current delay
  const now = +new Date();
  let delta = this.frac + (rate * (now - this.prev_time)) / 1000;

  // if the fraction is greater than 1, then at least the delay has passed, so
  // time to update the state
  while (delta > 1) {
    // decrement the number of remaining updates (we're doing one now!)
    delta -= 1;

    try {
      // pick a random LED to update
      let i = Math.floor(Math.random() * globals.leds);

      // pick a random color
      let ic = Math.floor(Math.random() * colors.length);

      this.state[i] = colors[ic];
      //   console.log(
      //     `changing to color ${ic + 1} of ${colors.length} at index ${i}: ${
      //       colors[ic]
      //     }`
      // );
      // set the LED to a random color
    } catch (e) {
      console.log(e);
    }
  }

  // Lather rinse repeat
  this.prev_time = now;
  this.frac = delta;
  return this.state;
}

register({
  /* Effect Name */
  name: "Color DAzzle",
  /* Effect Function */
  func: effect,
  /* Effect Inputs */
  input: [
    {
      key: "colors",
      type: "rgb[]",
      label: "Colors",
      default: [
        [0, 0, 0],
        [255, 255, 255],
        [0, 255, 0],
        [255, 0, 0],
      ],
    },
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
  output: "rgb[]",
});
