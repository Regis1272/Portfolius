<script lang="ts">
    import { formatDate } from '$lib/utils'
    import * as config from '$lib/config'

    export let data
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>
<section class="tagline">
    <h1>Hello Greetings</h1>
    <p>
        I am the Cordial Developer. I derive extreme pleasure from crafting things well.
    </p>
    <p>
        I'm a self-taught web developer with a long-time obsession for all things tech. I have a deep interest in human-centric user experiences.
    </p>
    <p>
        My aim is to preserve the synergistic relation between people and their devices.
    </p>
    <p>
        Below, you can find my blog.
    </p>
</section>

<section>
    <ul class="posts">
        {#each data.posts as post}
            <li class="post">
                <a href={post.slug} class="title">{post.title}</a>
                <p class="date">{formatDate(post.date)}</p>
                <p class="description">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

<style>
    .tagline {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--size-4);
        padding-bottom: var(--size-10);
        text-align: justify;
    }

    .tagline > p:not(:last-child) {
        text-align: justify;
    }

    .tagline > p {
        font-size: var(--font-size-2);
        text-align: center;
    }

    .posts {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--size-7);
    }

    @media (max-width: 767px) {
        .post {
            width: 100%;
            max-width: 700px;
        }
    }

    @media (min-width: 768px) {
        .post {
            width: 700px;
            max-inline-size: var(--size-content-3);
        }

        .tagline > p{
            width: 700px;
        }

    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--border);
        padding-bottom: var(--size-7);
    }

    .title {
        font-size: var(--font-size-fluid-3);
        text-transform: capitalize;
    }

    .date {
        color: var(--text-2);
    }

    .description {
        margin-top: var(--size-3);
    }

</style>
