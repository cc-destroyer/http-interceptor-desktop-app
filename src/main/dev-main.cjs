// Dev entry for Electron main (local fork).
// Electron >= 42 loads a .ts entry through Node's ESM loader + native type stripping,
// which bypasses `-r ts-node/register` and breaks on directory imports like "core-js/stable".
// Loading main.ts via a CommonJS require keeps it on ts-node's CJS hook, as before Electron 42.
// Must live in src/main/: Electron derives the app path from the entry file's directory, and the
// background renderer resolves modules via src/node_modules (-> release/app/node_modules) from there.
const path = require("path");
require("ts-node").register({ transpileOnly: true, project: path.join(__dirname, "../../tsconfig.json") });
require("./main.ts");
