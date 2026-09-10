const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const outputDir = path.resolve(__dirname, "../generated/prisma");
const generatedEntry = path.join(outputDir, "index.js");

if (fs.existsSync(generatedEntry)) {
  process.exit(0);
}

const env = {
  ...process.env,
  PRISMA_SCHEMA_ENGINE_BINARY: path.resolve(__dirname, "../node_modules/@prisma/engines/schema-engine-windows.exe"),
  PRISMA_QUERY_ENGINE_LIBRARY: path.resolve(__dirname, "../node_modules/@prisma/engines/query_engine-windows.dll.node"),
};

const result = spawnSync("npx", ["prisma", "generate"], {
  cwd: path.resolve(__dirname, ".."),
  env,
  stdio: "inherit",
  shell: true,
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
