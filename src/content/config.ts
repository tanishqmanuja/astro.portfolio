import { defineCollection, z } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    links: z
      .object({
        repository: z.string().url().optional(),
        deployment: z.string().url().optional(),
      })
      .default({}),
  }),
});

export const collections = {
  project,
};
