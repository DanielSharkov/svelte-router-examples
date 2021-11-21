<script lang='ts'>
	import Post from '../components/Post.svelte'
	import DB from '../database'
	export let params
	const post = DB.postByID(params.postID)
</script>

<div class='page'>
	{#if post}
		<Post isPage={true} loadComments={true} {post}/>
	{:else}
		<p class='text-center'>The post you're trying to access doesn't exist.</p>
	{/if}
</div>
