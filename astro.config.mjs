import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import { URL } from "./src/site.config";

export default defineConfig({
  site: URL,
  integrations: [sitemap()],
});
