import { getCollection, type CollectionEntry } from "astro:content";

import { projectSlug } from "./slug";

export type Project = CollectionEntry<"projects"> & { slug: string };

export async function getProjectsCollection(
  filter?: (
    entry: CollectionEntry<"projects">,
  ) => entry is CollectionEntry<"projects">,
) {
  const projects = await getCollection("projects", filter);
  return projects.map((project) => ({
    ...project,
    slug: projectSlug(project.id),
  })) satisfies Project[];
}
