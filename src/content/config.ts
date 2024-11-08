import { defineCollection, z } from "astro:content";

const project = defineCollection({
  // loader: glob({ pattern: "*.md", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

export const collections = {
  project,
};
