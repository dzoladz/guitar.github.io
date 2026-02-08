import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
    loader: glob({ pattern: "*.md", base: "src/pages/posts" }),
});

export const collections = { posts };