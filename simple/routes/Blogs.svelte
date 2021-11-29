<script context='module' lang='ts'>
	type BlogPreview = {
		id:      string
		title:   string
		preview: string
	}

	let storedBlogsPreview: Array<BlogPreview> = null
</script>

<script lang='ts'>
	import {RouteLink} from '@danielsharkov/svelte-router'
	import {onMount, createEventDispatcher} from 'svelte'
	import {defaultPageTransition} from '../utils'
	const dispatch = createEventDispatcher()

	onMount(()=> {
		dispatch('hasOutro')
	})

	async function fetchBlogs(): Promise<Array<BlogPreview>> {
		if (storedBlogsPreview !== null) return storedBlogsPreview

		const resp = await fetch('blogs.json')
		// simulate latency
		await new Promise((r)=> setTimeout(r, 500))
		const json = await resp.json()

		storedBlogsPreview = json
		return json
	}
</script>

<div class='page' transition:defaultPageTransition on:outroend={()=> dispatch('outroDone')}>
	<h1>Blog posts</h1>
	<div class='blogs'>
		{#await fetchBlogs()}
			<p class='placeholder'>Loading blog posts...</p>
		{:then blogs}
			{#each blogs as blog}
				<RouteLink to='blog' params={{id: blog.id}} class='blog'>
					<h4>{blog.title}</h4>
					<p>{blog.preview}</p>
				</RouteLink>
			{/each}
		{:catch err}
			<p class='error'>Failed to fetch blog posts: {err}</p>
		{/await}
	</div>
</div>

<style>
	.blogs {
		display: grid;
		gap: 10px;
	}
	:global(.blogs .blog) {
		padding: 20px;
		gap: 10px;
		text-align: left;
		box-shadow: var(--shadow);
		border-radius: .5em;
		background-color: var(--fg-clr);
		transition: .2s;
		transition-property: transform, box-shadow, border-color, background-color;
		will-change: transform, box-shadow, border-color, background-color;
	}
	:global(.blogs .blog:hover) {
		transform: translateY(-3px) scale(1.01);
		box-shadow: var(--shadow-hover);
		text-decoration: none;
	}
	:global(.blogs .blog:hover h4) {
		text-decoration: underline;
	}
	.blogs .blog h4 {
		margin: 0 0 10px 0;
	}
	.blogs .blog p {
		margin: 0;
		opacity: .5;
		color: var(--font-clr);
	}
	.blogs .placeholder {
		font-weight: 100;
		font-size: 3em;
		color: var(--placeholder-font);
	}
	.blogs .error {
		color: #f00;
	}
</style>