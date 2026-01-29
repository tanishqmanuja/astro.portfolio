import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import { FONTS_DIR } from "./src/constants";
import pagefind from "./src/lib/astro/integrations/pagefind";
import { URL } from "./src/site.config";

export default defineConfig({
  site: URL,
  integrations: [react(), sitemap(), mdx(), pagefind()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
      GOOGLE_SITE_VERIFICATION_TOKEN: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Nothing",
        cssVariable: "--ff-dotmatrix",
        variants: [
          {
            display: "swap",
            src: [`${FONTS_DIR}/ndot57.otf`],
          },
        ],
        fallbacks: ["var(--ff-monospace)"],
      },
      {
        provider: "local",
        name: "Departure Mono",
        cssVariable: "--ff-pixelated",
        variants: [
          {
            display: "swap",
            src: [`${FONTS_DIR}/departure-mono-regular.woff2`],
          },
        ],
        fallbacks: ["var(--ff-monospace)"],
      },
    ],
  },
});
