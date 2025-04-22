import type { WebSite } from "schema-dts";

import { site } from "@/helpers/site";
import { AUTHOR, URL as SITE_URL } from "@/site.config";

export const webSiteSchema = {
  "@id": site("#website"),
  "@type": "WebSite",
  url: SITE_URL,
  name: `${AUTHOR}'s Portfolio`,
  image: new URL("og.png", SITE_URL).href,
  description: `Portfolio website of ${AUTHOR}.`,
  inLanguage: "en",
  author: {
    "@type": "Person",
    "@id": site("#person"),
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: new URL("search?q={search_term_string}", SITE_URL).href,
    },
  },
} satisfies WebSite;
