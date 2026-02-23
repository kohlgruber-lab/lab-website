import { defineCollection, z } from 'astro:content';

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    nationality_country: z.string(),
    nationality_flag_emoji: z.string(),
    places_lived: z.array(z.string()),
    photo: z.string(),
    bio: z.string(),
    fun_fact: z.string(),
    links: z
      .object({
        email: z.string().optional(),
        scholar: z.string().url().optional(),
        orcid: z.string().url().optional(),
        github: z.string().url().optional(),
        linkedin: z.string().url().optional()
      })
      .optional(),
    order: z.number(),
    featured_on_home: z.boolean().default(false)
  })
});

const mentoring = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Training', 'Career development', 'Lab culture', 'Courses', 'Rotations']),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().url().optional(),
    featured: z.boolean().default(false)
  })
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    summary: z.string(),
    featured_image: z.string().optional()
  })
});

const fun = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date().optional(),
    category: z.string(),
    caption: z.string(),
    image: z.string().optional()
  })
});

const mentoringPage = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    trainee_resources: z.array(z.object({ label: z.string(), url: z.string().url() }))
  })
});

export const collections = { team, mentoring, news, fun, mentoringPage };
