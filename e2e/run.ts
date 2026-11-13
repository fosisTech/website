import { spawn, spawnSync } from "node:child_process";
import { createServer } from "node:net";

const reservation = createServer();
await new Promise<void>((resolve, reject) => {
  reservation.once("error", reject);
  reservation.listen(0, "localhost", resolve);
});
const address = reservation.address();
if (!address || typeof address === "string") {
  throw new Error("Could not reserve a local E2E port");
}
const port = address.port;
await new Promise<void>((resolve, reject) => {
  reservation.close((error) => (error ? reject(error) : resolve()));
});
const owner = spawnSync("lsof", ["-nP", `-iTCP:${port}`, "-sTCP:LISTEN"], {
  encoding: "utf8",
});
if (owner.error || owner.status !== 1) {
  throw new Error(`E2E port ownership check failed: ${owner.stdout}${owner.stderr}${owner.error ?? ""}`);
}
console.log(`E2E production server: http://localhost:${port} (no existing listener)`);

const runner = spawn("bun", ["run", "playwright", "test", ...process.argv.slice(2)], {
  stdio: "inherit",
  env: { ...process.env, FOSIS_E2E_PORT: String(port) },
});
for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, () => runner.kill(signal));
}
runner.once("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});
runner.once("exit", (code) => {
  console.log(`Playwright exit code: ${code ?? "terminated"}`);
  process.exitCode = code ?? 1;
});
