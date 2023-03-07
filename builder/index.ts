const esBuild = require("esbuild");
const fs = require("fs");
const path = require("path");
import BabelPlugin from "@itkyk/esbuild-plugin-babel";

esBuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: false,
  outfile: "./dist/index.js",
  platform: "browser",
  plugins: [
    BabelPlugin({
      filter: /.ts/,
      babel: {
        presets: [
          "@babel/preset-typescript",
          "@babel/preset-env",
        ],
        plugins: [ "@babel/plugin-proposal-class-properties"]
      }
    })
  ]
})