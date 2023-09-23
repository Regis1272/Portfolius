import { error } from '@sveltejs/kit'

export async function load({ params }) {

    try {
        const post = await import(`../../posts/${params.slug}.md`)

        // rendering the post as a component
        // reminder that the logic for rendering to the main-page is separate from the logic for
        // rendering to each individual article's page
        return {
            content: post.default,
            meta: post.metadata
        }
    }

    catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }
}
