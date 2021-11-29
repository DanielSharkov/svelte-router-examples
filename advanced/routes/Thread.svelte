<script lang='ts'>
	import {onMount, createEventDispatcher} from 'svelte'
	import Thread from '../components/Thread.svelte'
	import {defaultPageTransition} from '../utils'
	import DB from '../database'
	export let params

	const dispatch = createEventDispatcher()
	const comment = DB.getComment(params.threadID)

	onMount(()=> {
		dispatch('hasOutro')
	})
</script>

<div class='page' transition:defaultPageTransition on:outroend={()=> dispatch('outroDone')}>
	{#if comment}
		<Thread
			singleThread={true}
			isPage={true}
			loadComments={true}
			{comment}
		/>
	{:else}
		<p>The thread you're trying to access doesn't exist.</p>
	{/if}
</div>