import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Serve the prerendered pages (home, About, Articles, every article) straight from the static assets.
// Article bodies are read from src/content at build time only, so they must never render inside the Worker.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
