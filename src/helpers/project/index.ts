import { getCollection, type CollectionEntry } from "astro:content";

import { projectSlug } from "./slug";

export type Project = CollectionEntry<"projects">;

export async function getProjectsCollection() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    ...project,
    slug: projectSlug(project.slug),
  })) satisfies Project[];
}
