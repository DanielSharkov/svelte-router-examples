<script lang='ts'>
	import {onMount, createEventDispatcher} from 'svelte'
	import {defaultPageTransition} from '../utils'
	import Post from '../components/Post.svelte'
	import DB from '../database'

	export let params
	const dispatch = createEventDispatcher()
	const post = DB.postByID(params.postID)

	onMount(()=> {
		dispatch('hasOutro')
	})
</script>

<div class='page' transition:defaultPageTransition on:outroend={()=> dispatch('outroDone')}>
	{#if post}
		<Post isPage={true} loadComments={true} {post}/>
	{:else}
		<p class='text-center'>The post you're trying to access doesn't exist.</p>
	{/if}
</div>
