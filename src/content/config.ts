import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const CONTENT_DIR = "./src/content";

const developers = defineCollection({
  loader: file(`${CONTENT_DIR}/developers.yaml`),
  schema: z.object({
    name: z.string(),
    github: z.string(),
  }),
});

const experiences = defineCollection({
  schema: z.object({
    company: z.string(),
    designation: z.string(),
  }),
});

const projects = defineCollection({
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
    developers: z.array(reference("developers")).default([]),
  }),
});

export const collections = {
  developers,
  experiences,
  projects,
};
