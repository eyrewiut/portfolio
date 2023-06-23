import {config, fields, collection} from "@keystatic/core";

export default config ({
    storage: {
        kind: "github",
        repo: {
            owner: "eyrewiut",
            name: "portfolio"
        },
    },
    collections: {
        articles: collection({
            label: "Articles",
            path: "src/content/articles/*/",
            format: {
                data: "yaml",
                contentField: "content"
            },
            slugField: "title",
            schema: {
                thumbnail: fields.image({
                    label: "Thumbnail",
                    publicPath: "/src/content/articles/"
                }),
                title: fields.slug({
                    name: {
                        label: "Title",
                    },
                }),
                author: fields.text({
                    label: "Author",
                }),
                abstract: fields.text({
                    label: "Abstract",
                    multiline: true
                }),
                category: fields.select({
                    label: "Type",
                    defaultValue: "portfolio",
                    options: [
                        { label: "Portfolio item", value: "portfolio" },
                        { label: "Post", value: "post" }
                    ]
                }),
                date: fields.date({
                    label: "Published Date",
                    defaultValue: {
                        kind: "today",
                    },
                }),
                content: fields.document({
                    label: "Content",
                    links: true,
                    tables: true,
                    formatting: true,
                    images: {
                        directory: "src/content/articles",
                        publicPath: "/src/content/articles/"
                    }
                })
            }
        })
    }
})