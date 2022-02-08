import { defs } from "./register";

interface register {
    (x: def): void;
}

// expose the definitions to backends
export function load(cb: register): void {
    for (let d of defs) cb(d);
}

// yes, this import should come last
import "./src/index";
