import type { APIRoute } from "astro";

import { URL as SITE_URL } from "@/site.config";

import raw from "./_theme.css?raw";

const css = raw.replace(
  /__DEPARTURE_MONO_SRC__/g,
  new URL("giscus/fonts/departure-mono-regular.woff2", SITE_URL).href,
);

export const GET: APIRoute = () =>
  new Response(css, {
    headers: { "Content-Type": "text/css" },
  });
