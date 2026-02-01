import { getCollection, z } from "astro:content";

import { file, YAML } from "bun";

const projects = await getCollection("projects");
const projectIds = projects.map((project) => project.id);

const PRIORITIES_FILE = "./src/content/projects/priorities.yaml";
const prioritiesSchema = z.array(z.string());

const prioritiesRaw = YAML.parse(await file(PRIORITIES_FILE).text());
const priorities = prioritiesSchema.parse(prioritiesRaw);

const invalidPriorities = priorities.filter(
  (priority) => !projectIds.includes(priority),
);

if (invalidPriorities.length > 0) {
  console.warn(`Invalid priorities at ${PRIORITIES_FILE}`);
  for (const priority of invalidPriorities) {
    console.warn(`  - ${priority}`);
  }
}

export function getProjectPriority(projectId: string) {
  return priorities.indexOf(projectId);
}
