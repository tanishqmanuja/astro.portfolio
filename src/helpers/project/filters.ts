import type { CollectionEntry } from "astro:content";

type Project = CollectionEntry<"projects">;

export function isListed(project: Project) {
  return !project.data.isUnlisted;
}

export function isFeatured(project: Project) {
  return project.data.isFeatured;
}

export function isInCategory(category: string) {
  return (project: Project) => {
    const match = project.filePath?.match(/content\/projects\/([^/]+)\//);
    const _category = match ? match[1] : null;
    if (!_category) return false;
    return _category === category;
  };
}

export const projectFilters = { isListed, isInCategory, isFeatured };
