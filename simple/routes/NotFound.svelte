<script lang='ts'>
	export let router
</script>

<div class='page'>
	<h1>404</h1>
	<p>Page not found.</p>
	<button class='back' on:click={()=> router.push('home')}>
		&lt; Back to home page
	</button>
</div>

<style>
	.page {
		padding: 4em;
		text-align: center;
	}
	h1 {
		color: var(--prime);
		font-weight: 100;
		margin: 0;
		font-size: 5em;
	}
	.back {
		margin: auto;
	}
</style>
