import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
	tags: z.array(z.string()).optional(),
	topic: z.string().optional(),
	author: z.string().optional(),
	cover_url: z.string().optional(),
	type: z.enum(["article", "thought"]).optional(),
  }),
});

const about = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    date: z.coerce.date().optional(),
    year: z.number(),
	event: z.object({
		title: z.string(),
		location: z.string(),
		date: z.coerce.date(),
	}).optional()
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
	stack: z.array(z.string()).optional(),
	tags: z.array(z.string()).optional(),
	imageUrl: z.string().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

const uses = defineCollection({
	type: "content",
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  draft: z.boolean().optional(),
	  link: z.string().optional(),
	  type: z.enum(["workstation", "devtools", "other_software", "misc"]),
	}),
  });

export const collections = { articles, about, projects, uses };
