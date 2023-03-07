const esBuild = require("esbuild");
const fs = require("fs");
const path = require("path");

esBuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: false,
  outfile: "./dist/index.js",
  platform: "browser"
})