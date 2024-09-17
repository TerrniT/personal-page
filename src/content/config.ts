import { defineCollection, z } from 'astro:content'

const DEFAULT_FIELDS = {
	date: z.coerce.date(),
    draft: z.boolean().optional(),
}

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    topic: z.string().optional(),
    author: z.string().optional(),
    cover_url: z.string().optional(),
    type: z.enum(['article', 'thought']).optional(),
    ...DEFAULT_FIELDS,
  }),
})

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    year: z.number(),
    ...DEFAULT_FIELDS,
  }),
})

const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    job_title: z.string(),
	company_name: z.string(),
	live_url: z.string().optional(),
	duration: z.string(),
	description: z.string().optional(),
	location: z.string().optional(),
	icon: z.string().optional(),
	stack: z.array(z.string()).optional(),
    ...DEFAULT_FIELDS,
  }),
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    imageUrl: z.string().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    ...DEFAULT_FIELDS,
  }),
})

const uses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    type: z.enum(['workstation', 'devtools', 'other_software', 'misc']),
    ...DEFAULT_FIELDS,
  }),
})

export const collections = { articles, about, projects, uses, experiences }
