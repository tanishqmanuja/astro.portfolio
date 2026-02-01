import type { CollectionEntry } from "astro:content";

import { getProjectPriority } from "./priorities";

type Project = CollectionEntry<"projects">;

export function byPriority(a: Project, b: Project) {
  const pa = getProjectPriority(a.id);
  const pb = getProjectPriority(b.id);

  if (pa === -1 && pb === -1) return 0;
  if (pa === -1) return 1;
  if (pb === -1) return -1;

  return pa - pb;
}

export function byTitle(a: Project, b: Project) {
  return a.data.title.localeCompare(b.data.title);
}

export const projectSorters = { byPriority, byTitle };
