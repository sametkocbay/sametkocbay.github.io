import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    // Card content (home uses title/year/tagline/summary/cardSlug; projects page
    // uses title/year/description/tags).
    title: z.string(),
    year: z.string(),
    tagline: z.string(),
    cardSlug: z.string(),
    summary: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    // Detail page header.
    detailTitle: z.string(),
    metaLine: z.string(),
    dek: z.string(),
    detailTags: z.array(z.string()),
    codeUrl: z.string().url().optional(),
    // Optional hero figure between header and article.
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
    // Ordering + prev/next chain (slugs of sibling entries).
    featuredOrder: z.number(),
    listOrder: z.number(),
    prevSlug: z.string().optional(),
    nextSlug: z.string().optional()
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tag: z.string(),
    summary: z.string(),
    dek: z.string()
  })
});

export const collections = { projects, blog };
