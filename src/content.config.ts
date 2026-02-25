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
    order: z.number(),
    featured_on_home: z.boolean().default(false)
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

const culture = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['Value', 'Tradition', 'Moment']),
    date: z.coerce.date().optional(),
    summary: z.string(),
    image: z.string().optional()
  })
});

// Legacy content collections are retained for backward compatibility with existing repository content.
const fun = defineCollection({ type: 'content', schema: z.any() });
const mentoring = defineCollection({ type: 'content', schema: z.any() });
const mentoringPage = defineCollection({ type: 'content', schema: z.any() });

export const collections = { team, news, culture, fun, mentoring, mentoringPage };
