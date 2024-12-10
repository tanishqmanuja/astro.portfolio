import { defineCollection, z } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().max(100, { message: "Description too long" }),
    links: z
      .object({
        repository: z.string().url().optional(),
        deployment: z.string().url().optional(),
        npm: z.string().url().optional(),
      })
      .default({}),
    isFeatured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = {
  project,
};
