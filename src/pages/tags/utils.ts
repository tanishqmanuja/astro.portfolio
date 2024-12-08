import type { CollectionEntry } from "astro:content";

type Project = CollectionEntry<"project">;
export function getTagsFromProjects(projects: Project[]) {
  const tags = new Set<string>();

  for (const project of projects) {
    for (const tag of project.data.tags) {
      tags.add(tag);
    }
  }
  return [...tags];
}
