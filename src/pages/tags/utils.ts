import type { CollectionEntry } from "astro:content";

export type TagEntry = {
  tag: string;
  projects: CollectionEntry<"project">[];
  count: number;
};

type Project = CollectionEntry<"project">;
export function getTagsFromProjects(projects: Project[]) {
  const entries: Record<string, TagEntry> = {};

  for (const project of projects) {
    for (const tag of project.data.tags) {
      if (!entries[tag]) {
        entries[tag] = {
          tag,
          projects: [],
          count: 0,
        };
      }

      entries[tag].projects.push(project);
      entries[tag].count += 1;
    }
  }

  return Object.values(entries);
}
