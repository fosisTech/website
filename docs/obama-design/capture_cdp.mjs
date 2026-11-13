// Capture without changing viewport height. No page JavaScript is evaluated.
import { writeFile, mkdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
const [output] = process.argv.slice(2);
if (!output?.startsWith("/Users/mikhail/Code/fosis-website/docs/obama-design/")) {
  throw new Error("Output must stay inside the approved evidence directory");
}
const targets = await fetch("http://127.0.0.1:9895/json/list").then((r) => r.json());
const target = targets.find((t) => t.id === "9BD82179C611461E3775E58CF4D1847A");
if (!target || !new URL(target.url).hostname.endsWith("obama.org")) {
  throw new Error("Expected the owned Obama reference tab");
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});
let seq = 0;
const pending = new Map();
ws.addEventListener("message", (event) => {
  const message = JSON.parse(String(event.data));
  const waiter = pending.get(message.id);
  if (!waiter) return;
  pending.delete(message.id);
  if (message.error) waiter.reject(new Error(JSON.stringify(message.error)));
  else waiter.resolve(message.result);
});
function command(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}
const timeout = setTimeout(() => {
  console.error("Screenshot capture exceeded 60 seconds");
  process.exit(1);
}, 60000);
try {
  const documentTree = await command("DOM.getDocument", { depth: 1 });
  const html = documentTree.root.children.find((node) => node.nodeName === "HTML");
  if (!html) throw new Error("Expected a public HTML document");
  const frames = [];
  const frameDir = output.replace(/\.png$/, "-frames");
  await mkdir(frameDir, { recursive: true });
  let lastY = -1;
  for (let i = 0; i < 60; i++) {
    const metrics = await command("Page.getLayoutMetrics");
    const viewport = metrics.cssLayoutViewport;
    const y = Math.round(viewport.pageY);
    if (y === lastY) break;
    const screenshot = await command("Page.captureScreenshot", {
      format: "png", captureBeyondViewport: true, fromSurface: true,
      clip: { x: 0, y, width: viewport.clientWidth, height: viewport.clientHeight, scale: 1 },
    });
    const path = `${frameDir}/${i}.png`;
    await writeFile(path, Buffer.from(screenshot.data, "base64"));
    frames.push({ path, y, layout: viewport, content: metrics.cssContentSize });
    if (y + viewport.clientHeight >= metrics.cssContentSize.height - 2) break;
    lastY = y;
    const nextY = Math.min(y + viewport.clientHeight - 300, metrics.cssContentSize.height - viewport.clientHeight);
    await command("DOM.scrollIntoViewIfNeeded", {
      nodeId: html.nodeId,
      rect: { x: 0, y: nextY + (viewport.clientWidth >= 1200 ? 125 : 92), width: viewport.clientWidth, height: viewport.clientHeight },
    });
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  const manifest = `${frameDir}/frames.json`;
  await writeFile(manifest, JSON.stringify({ output, url: target.url, frames }, null, 2));
  const stitch = spawnSync("python3", [new URL("./stitch_capture.py", import.meta.url).pathname, manifest], { encoding: "utf8" });
  if (stitch.status !== 0) throw new Error(stitch.stderr || stitch.stdout);
  console.log(JSON.stringify({ output, url: target.url, method: "overlapping visible-browser frames, sticky-header overlap cropped", frames: frames.map(({ path, ...rest }) => rest) }));
} finally {
  clearTimeout(timeout);
  ws.close();
}
