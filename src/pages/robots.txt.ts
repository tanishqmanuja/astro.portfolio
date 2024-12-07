import type { APIRoute } from "astro";

import { URL as SITE_URL } from "@/site.config";

const text = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE_URL).href}
`.trim();

export const GET: APIRoute = () =>
  new Response(text, {
    headers: { "Content-Type": "text/plain" },
  });
