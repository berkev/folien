import fs from "node:fs/promises"
import binaryen from "binaryen";

// Create a module from a WebAssembly Text format
const wasmText = await fs.readFile("./add.wat", { encoding: "utf8" })
console.log(`Wasm Text length: ${wasmText.length}`)
const myModule = binaryen.parseText(wasmText);

// Emit module in a binary format
const wasmData = myModule.emitBinary();
console.log(`Wasm Binary length: ${wasmData.length}`)
await fs.writeFile("./add.wasm", wasmData);

// Use WebAssembly API to instantiate a compiled module
const compiled = new WebAssembly.Module(wasmData);
const instance = new WebAssembly.Instance(compiled, {});

// And use it
console.log(`add(41, 1): ${instance.exports.add(41, 1)}`);
