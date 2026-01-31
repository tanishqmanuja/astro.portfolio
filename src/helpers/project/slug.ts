/*
 Project Folder Structure
  - projects/[category]/[project-name]
  - projects/[project-name]

 url slug should be `/[project-name]
*/
export function projectSlug(slug: string): string {
  return slug.substring(slug.indexOf("/") + 1);
}
