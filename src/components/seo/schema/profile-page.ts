import type { ProfilePage } from "schema-dts";

import { site } from "@/helpers/site";
import { AUTHOR, URL as SITE_URL } from "@/site.config";

export const profilePageSchema = {
  "@id": site("#profilepage"),
  "@type": "ProfilePage",
  name: `${AUTHOR}'s Profile`,
  url: SITE_URL,
  isPartOf: {
    "@type": "WebSite",
    "@id": site("#website"),
  },
  about: {
    "@id": site("#person"),
    "@type": "Person",
  },
  mainEntity: {
    "@id": site("#person"),
    "@type": "Person",
  },
} satisfies ProfilePage;
