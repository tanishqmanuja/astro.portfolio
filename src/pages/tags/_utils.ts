import type { CollectionEntry } from "astro:content";

type Projects = CollectionEntry<"projects">[];

export type TagEntry = {
  tag: string;
  projects: Projects;
  count: number;
};

export function getTagsFromProjects(projects: Projects) {
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
