<script lang='ts'>
	import Thread from '../components/Thread.svelte'
	import DB from '../database'
	export let params
	const comment = DB.getComment(params.threadID)
</script>

<div class='page'>
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