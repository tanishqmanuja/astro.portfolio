import type { APIRoute } from "astro";
import { experimental_getFontFileURL, fontData } from "astro:assets";

import { URL as SITE_URL } from "@/site.config";

import raw from "./_theme.css?raw";

const SITE_ORIGIN = new URL(SITE_URL).origin;

function toPublicFontUrl(resolved: string): string {
  if (resolved.startsWith("/")) {
    return new URL(resolved, SITE_URL).href;
  }
  const { origin, pathname } = new URL(resolved);
  // Local fonts resolve against a build-internal origin while prerendering –
  // rebase those onto the site URL, leave genuine remote fonts untouched.
  if (pathname.startsWith("/_astro/") && origin !== SITE_ORIGIN) {
    return new URL(pathname, SITE_URL).href;
  }
  return resolved;
}

export const GET: APIRoute = (context) => {
  const fontPath = fontData["--ff-pixelated"][0]?.src[0]?.url;
  if (fontPath === undefined) {
    throw new Error("Cannot find the Departure Mono font file.");
  }

  const css = raw.replace(
    /__DEPARTURE_MONO_SRC__/g,
    toPublicFontUrl(experimental_getFontFileURL(fontPath, context.url)),
  );

  return new Response(css, {
    headers: { "Content-Type": "text/css" },
  });
};
