import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";

import { URL } from "./src/site.config";

export default defineConfig({
  site: URL,
  integrations: [sitemap()],
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
    },
  },
});
