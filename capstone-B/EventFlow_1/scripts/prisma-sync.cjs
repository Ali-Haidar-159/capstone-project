const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const stateDir = path.resolve(rootDir, "generated");
const stateFile = path.join(stateDir, ".prisma-sync-state.json");

const env = {
  ...process.env,
  PRISMA_SCHEMA_ENGINE_BINARY: path.resolve(rootDir, "node_modules/@prisma/engines/schema-engine-windows.exe"),
  PRISMA_QUERY_ENGINE_LIBRARY: path.resolve(rootDir, "node_modules/@prisma/engines/query_engine-windows.dll.node"),
};

const databaseUrl = env.DATABASE_URL || "";
const schemaPath = path.resolve(rootDir, "prisma/schema.prisma");

let currentState = {
  databaseUrl,
  schemaMtimeMs: 0,
};

try {
  const schemaStat = fs.statSync(schemaPath);
  currentState.schemaMtimeMs = schemaStat.mtimeMs;
} catch (error) {
  console.error("Unable to read Prisma schema.", error);
  process.exit(1);
}

try {
  const previousState = JSON.parse(fs.readFileSync(stateFile, "utf8"));
  if (
    previousState.databaseUrl === currentState.databaseUrl &&
    previousState.schemaMtimeMs === currentState.schemaMtimeMs
  ) {
    process.exit(0);
  }
} catch (_) {
}

const result = spawnSync("npx", ["prisma", "db", "push", "--accept-data-loss"], {
  cwd: rootDir,
  env,
  stdio: "inherit",
  shell: true,
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

fs.mkdirSync(stateDir, { recursive: true });
fs.writeFileSync(stateFile, JSON.stringify(currentState, null, 2));
