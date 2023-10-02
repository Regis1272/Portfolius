// svelte will crawl the pages and build them at run-time,
// so the static files will be served instead
export const prerender = true

export async function load({ url }) {
    return {
        url: url.pathname
    }
}
