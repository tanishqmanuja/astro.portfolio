import type { Person } from "schema-dts";

import { site } from "@/helpers/site";
import { AUTHOR, URL as SITE_URL, SOCIALS } from "@/site.config";

export const personSchema = {
  "@id": site("#person"),
  "@type": "Person",
  name: AUTHOR,
  url: SITE_URL,
  jobTitle: "Software Developer",
  image: new URL("assets/avatar.jpg", SITE_URL).href,
  description:
    "I am a software developer and an electronics engineer from India.",
  sameAs: SOCIALS.map(({ href }) => href),
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Jaypee Institute of Information Technology",
      url: "https://jiit.ac.in/",
    },
    {
      "@type": "School",
      name: "Ahlcon International",
      url: "https://www.ahlconinternational.com",
    },
  ],
  nationality: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Software Development",
    "Web Development",
    "Home Automation",
    "Electronics",
    "Open Source",
  ],
  knowsLanguage: [
    {
      "@type": "Language",
      name: "English",
    },
    {
      "@type": "Language",
      name: "Hindi",
    },
  ],
} satisfies Person;
