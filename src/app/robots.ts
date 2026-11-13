import type { MetadataRoute } from "next";
import { isIndexable, SITE_URL } from "@/lib/site";

const BLOCKED_AI_CRAWLERS = [
  "Amazonbot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ClaudeBot",
  "FacebookBot",
  "Google-Extended",
  "GPTBot",
  "meta-externalagent",
  "omgili",
  "omgilibot",
  "PerplexityBot",
  "SentiBot",
  "sentibot",
];

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...BLOCKED_AI_CRAWLERS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
