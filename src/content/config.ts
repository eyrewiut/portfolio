import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
    schema: ({image}) => z.object({
        thumbnail: image(),
        title: z.string(),
        author: z.string(),
        abstract: z.string(),
        category: z.string(),
        date: z.date()
    })
})

export const collections = {
    articles: articlesCollection
}
