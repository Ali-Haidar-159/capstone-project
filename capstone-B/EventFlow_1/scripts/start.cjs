const { spawn } = require("node:child_process");
const path = require("node:path");

const env = {
  ...process.env,
  PRISMA_QUERY_ENGINE_LIBRARY: path.resolve(__dirname, "../node_modules/@prisma/engines/query_engine-windows.dll.node"),
};

const child = spawn("npx", ["nodemon", "./dist/index.js"], {
  cwd: path.resolve(__dirname, ".."),
  env,
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
