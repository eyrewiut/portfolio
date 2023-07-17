import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
    schema: z.object({
        thumbnail: z.string(),
        title: z.string(),
        author: z.string(),
        abstract: z.string(),
        category: z.string(),
        date: z.coerce.date()
    })
})

export const collections = {
    articles: articlesCollection
}
