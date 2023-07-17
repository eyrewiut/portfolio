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
            path: "src/content/articles/*",
            format: {
                data: "yaml",
                contentField: "content"
            },
            slugField: "title",
            schema: {
                thumbnail: fields.image({
                    label: "Thumbnail",
                    directory: "public/media/articles",
                    publicPath: "/media/articles/"
                }),
                title: fields.slug({
                    name: {
                        label: "Title",
                        validation: {
                            length: {
                                min: 2,
                                max: 50
                            }
                        }
                    },
                }),
                author: fields.text({
                    label: "Author",
                }),
                abstract: fields.text({
                    label: "Abstract",
                    multiline: true,
                    validation: {
                        length: {
                            min: 10,
                            max: 140
                        }
                    }
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
                        directory: "public/media/articles",
                        publicPath: "/media/articles/"
                    }
                })
            }
        })
    }
})