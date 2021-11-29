<script context='module' lang='ts'>
	const storedBlogs = {}
</script>

<script lang='ts'>
	import {RouteLink} from '@danielsharkov/svelte-router'

	export let params

	type Blog = {title: string, post: string}

	async function fetchBlog(): Promise<Blog> {
		if (params.id in storedBlogs) {
			return storedBlogs[params.id]
		}

		const resp = await fetch(`blog/${params.id}.json`)
		// simulate latency
		await new Promise((r)=> setTimeout(r, 500))
		const json = await resp.json()

		storedBlogs[params.id] = json
		return json
	}
</script>

<div class='page'>
	<RouteLink to='blogs' id='BlogBack'>&lt; Back to all blog posts</RouteLink>
	{#await fetchBlog()}
		<p class='placeholder'>Loading blog...</p>
	{:then blog}
		<h1>{blog.title}</h1>
		<p>{blog.post}</p>
	{:catch}
		<p class='error'>
			Either something went is wrong or this blog post doesn't exist.
		</p>
	{/await}
</div>

<style>
	.placeholder {
		font-weight: 100;
		font-size: 3em;
		color: var(--placeholder-font);
	}
	.error {
		color: var(--prime);
	}
	:global(#BlogBack) {
		display: block;
		margin-bottom: 20px;
	}
	:global(#BlogBack:not(:hover)) {
		color: var(--font-clr);
		opacity: .5;
	}
</style>
