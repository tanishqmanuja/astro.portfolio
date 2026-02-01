import { getProjectsCollection, type Project } from ".";
import { projectFilters } from "./filters";

const allProjects = await getProjectsCollection();
const listedProjects = allProjects.filter(projectFilters.isListed);

const getSiblingUrl = (
  project: Project,
  direction: -1 | 1,
): string | undefined => {
  const collection = project.data.isUnlisted ? allProjects : listedProjects;

  const index = collection.findIndex((p) => p.id === project.id);
  const sibling = collection[index + direction];

  return sibling ? `/${sibling.slug}/` : undefined;
};

export const getPrevUrl = (project: Project) => getSiblingUrl(project, -1);

export const getNextUrl = (project: Project) => getSiblingUrl(project, 1);
