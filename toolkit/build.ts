import fs from "node:fs";

fs.rmSync("./out", { recursive: true, force: true });
fs.rmSync("./dist", { recursive: true, force: true });

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./out",
});

export {};
