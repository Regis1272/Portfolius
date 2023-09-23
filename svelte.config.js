import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { escapeSvelte, mdsvex } from 'mdsvex'
import shiki from 'shiki'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md'],
    layout: {
        _: './src/mdsvex.svelte'
    },
    highlight: {
        highlighter: async (code, lang = 'text') => {
            const hightlighter = await shiki.getHighlighter({theme: 'rose-pine'})
            const html = escapeSvelte(hightlighter.codeToHtml(code, { lang }))
            return `{@html \`${html}\`}`
        }
    },
    
}

/** @type {import('@sveltejs/kit').Config} */
const config = {

    extensions: ['.svelte', '.md'],
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter()
    }
};

export default config;
