import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
    schema: ({image}) => z.object({
        thumbnail: image().optional(),
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
