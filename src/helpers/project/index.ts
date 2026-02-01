import { getCollection, type CollectionEntry } from "astro:content";

import { projectSlug } from "./slug";

export type Project = CollectionEntry<"projects">;

export async function getProjectsCollection(
  filter?: (entry: Project) => entry is Project,
) {
  const projects = await getCollection("projects", filter);
  return projects.map((project) => ({
    ...project,
    slug: projectSlug(project.id),
  })) satisfies Project[];
}
