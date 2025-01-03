import type { CollectionEntry } from "astro:content";

type Project = CollectionEntry<"projects">;

export function listed(project: Project) {
  return !project.data.isUnlisted;
}

export const filters = { listed };
