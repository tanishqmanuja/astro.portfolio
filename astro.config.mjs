import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import { URL } from "./src/site.config";

export default defineConfig({
  site: URL,
  integrations: [react(), sitemap(), mdx()],
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
  experimental: {},
});
