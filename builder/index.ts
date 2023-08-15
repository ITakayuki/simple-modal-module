import esBuild from "esbuild";
import {dtsPlugin} from "esbuild-plugin-d.ts";
import {nodeExternalsPlugin} from "esbuild-node-externals";
import * as path from "path";

const shared: esBuild.BuildOptions = {
    bundle: true,
    entryPoints: [path.resolve("./src/index.ts")],
    sourcemap: false,
    target: "es6",
}
esBuild.build({
    ...shared,
    format: "esm",
    outfile: path.resolve("./dist/index.mjs"),
    plugins: [dtsPlugin({
    outDir: "types"
    }), nodeExternalsPlugin()]
}).then(() => {
    console.log("Build ESM Finish");
})

esBuild.build({
    ...shared,
    format: "cjs",
    outfile: path.resolve("./dist/index.cjs"),
    plugins: [nodeExternalsPlugin()]
}).then(() => {
    console.log("Build CJS Finish");
})