import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const lessonFrontmatter = z.object({
  titleEn: z.string().optional(),
  theme: z.enum(['microservices', 'blue-green', 'exam-guide']).optional(),
  task: z.literal('unknown').optional(),
  order: z.number().optional(),
  pages: z
    .array(z.union([z.string(), z.number()]))
    .min(1)
    .optional(),
  keywords: z
    .array(
      z.object({
        term: z.string(),
        bn: z.string(),
        tip: z.string().optional(),
      }),
    )
    .optional(),
  sources: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
        note: z.string().optional(),
      }),
    )
    .optional(),
  sourceUrl: z.string().optional(),
  updated: z.union([z.string(), z.date()]).optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: lessonFrontmatter }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
