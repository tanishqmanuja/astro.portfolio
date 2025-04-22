import type { CollectionEntry } from "astro:content";

import type { BreadcrumbList, CreativeWork, WebPage } from "schema-dts";

import { site } from "@/helpers/site";

export function getProjectSchemaGraph(
  project: CollectionEntry<"projects">,
  url: string,
) {
  return [
    {
      "@id": site(`${url}/#project`),
      "@type": "CreativeWork",
      name: project.data.title,
      description: project.data.description,
      url: site(url),
      ...(project.data.tags.length > 0
        ? {
            keywords: project.data.tags,
          }
        : {}),
      author: {
        "@id": site(`${url}/#person`),
        "@type": "Person",
      },
    } satisfies CreativeWork,
    {
      "@id": site(`${url}/`),
      "@type": "WebPage",
      name: project.data.title,
      url: site(url),
      description: project.data.description,
      about: {
        "@id": site(`${url}/#project`),
        "@type": "CreativeWork",
      },
      mainEntity: {
        "@id": site(`${url}/#project`),
        "@type": "CreativeWork",
      },
    } satisfies WebPage,
    {
      "@id": site(`${url}/#breadcrumblist`),
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: project.data.title,
          item: site(url),
        },
      ],
    } satisfies BreadcrumbList,
  ];
}
