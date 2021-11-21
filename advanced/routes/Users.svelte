<script lang='ts'>
	import DB from '../database'
	export let router
</script>

<div class='page'>
	{#each $DB.users as user}
		<button on:click={()=> router.push('profile', {userID: user.id})}
		class:session-user={$DB.session === user.id}
		class='user flex flex-center'>
			<div class='image flex flex-center'>
				<svg class='icon stroke' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
					<path d='M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11' stroke-width='2'/>
					<circle cx='60' cy='34' r='21' stroke-width='2'/>
				</svg>
			</div>
			<span class='name'>{user.name}</span>
		</button>
	{/each}
</div>

<style>
	.page {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
	}
	.user {
		padding: 10px;
		box-shadow: var(--shadow);
	}
	.user:not(:hover):not(:focus) {
		border-color: transparent;
	}
	.user .image {
		width: 100px;
		height: 100px;
		opacity: .25;
		flex: 1 1 100%;
	}
	.user .image .icon {
		width: 70%;
		height: 70%;
	}
	.user.session-user .image {
		opacity: .5;
	}
	.user.session-user .image .icon > * {
		stroke: var(--prime);
	}
</style>
