import { defineCollection, z } from 'astro:content';

const certificationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    description: z.string(),
    descriptionEn: z.string(),
    file: z.string(),
    hours: z.string(),
    hoursEn: z.string(),
  }),
});

export const collections = {
  'certifications': certificationsCollection,
};
