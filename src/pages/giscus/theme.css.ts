import type { APIRoute } from "astro";

import { FONTS_DIR } from "@/constants";
import { getHashedFontPath } from "@/helpers/fonts";
import { URL as SITE_URL } from "@/site.config";

import raw from "./_theme.css?raw";

const fontPath = getHashedFontPath(`${FONTS_DIR}/departure-mono-regular.woff2`);
const css = raw.replace(
  /__DEPARTURE_MONO_SRC__/g,
  new URL(fontPath, SITE_URL).href,
);

export const GET: APIRoute = () =>
  new Response(css, {
    headers: { "Content-Type": "text/css" },
  });
