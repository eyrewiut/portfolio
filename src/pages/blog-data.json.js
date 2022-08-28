export const get = async ({params, request}) => {
    const posts = await import.meta.glob("./articles/*.md");
    for (const [key, post] of Object.entries(posts)) {
        const { url, frontmatter, compiledContent } = await post();
        if (frontmatter.category !== "blog") continue;
        delete frontmatter.layout;
        posts[key] = { url, frontmatter, content: await compiledContent() }
    }
    return {
        body: JSON.stringify(posts)
    }
}