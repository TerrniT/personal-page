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
    topic: z.string(),
    cover_url: z.string().optional(),
    type: z.enum(['article', 'note']).default('article'),
    category: z.enum(['development', 'ai-for-business', 'case-studies', 'guides']).default('development'),
    author: z.string(),
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

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    industry: z.string(),
    taskType: z.string().optional(),
    client: z.string().optional(),
    stack: z.array(z.string()).optional(),
    results: z.array(z.string()).optional(),
    ...DEFAULT_FIELDS,
  }),
})

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().optional(),
    ...DEFAULT_FIELDS,
  }),
})

export const collections = { articles, about, experiences, cases, services }
