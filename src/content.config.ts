import { file, glob } from "astro/loaders";
import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";

const CONTENT_DIR = "./src/content";

const developers = defineCollection({
  loader: file(`${CONTENT_DIR}/developers.yaml`),
  schema: z.object({
    name: z.string(),
    github: z.string(),
  }),
});

const experiences = defineCollection({
  loader: glob({ pattern: `[^_]*.md`, base: `${CONTENT_DIR}/experiences` }),
  schema: z.object({
    company: z.string(),
    designation: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: `**/[^_]*.{md,mdx}`,
    base: `${CONTENT_DIR}/projects`,
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().max(100, { error: "Description too long" }),
    links: z
      .object({
        repository: z.url().optional(),
        deployment: z.url().optional(),
        npm: z.url().optional(),
      })
      .default({}),
    isFeatured: z.boolean().default(false),
    isUnlisted: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    developers: z
      .array(reference("developers"))
      .default([{ collection: "developers", id: "tanishqmanuja" }]),
  }),
});

export const collections = {
  developers,
  experiences,
  projects,
};
