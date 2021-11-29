<script lang='ts'>
	import {onMount, createEventDispatcher} from 'svelte'
	import {defaultPageTransition} from '../utils'
	import DB from '../database'

	const dispatch = createEventDispatcher()
	export let router

	onMount(()=> {
		dispatch('hasOutro')
	})

	function loginUser(userID: string) {
		DB.loginUser(userID)
		router.push('timeline')
	}
</script>

<div id='PageLogin' class='flex' transition:defaultPageTransition on:outroend={()=> dispatch('outroDone')}>
	<div class='modal'>
		<h1 class='title'>Login</h1>
		<p class='subtitle'>Pick a user you would like to login to:</p>

		{#each DB.usersToLoginTo() as user}
			<button class='user flex flex-center-y gap-1' on:click={()=> loginUser(user.id)}>
				<div class='image flex flex-center'>
					<svg class='icon stroke icon-1' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
						<path d='M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11' stroke-width='4' stroke-linecap='round'/>
						<circle cx='60' cy='34' r='21' stroke-width='4' stroke-linecap='round'/>
					</svg>
				</div>
				<span class='name'>{user.name}</span>
			</button>
		{/each}
	</div>
</div>

<style>
	#PageLogin {
		width: 100%;
		height: 100%;
		padding: 20px;
		justify-content: center;
		align-content: center;
		align-items: flex-start;
	}
	.modal {
		width: 400px;
		max-height: 100%;
		padding: 20px;
		border-radius: 10px;
		background-color: var(--fg-clr);
		box-shadow: var(--shadow);
		text-align: center;
	}
	.modal .title {
		margin: 0;
	}
	.modal .subtitle {
		opacity: .5;
	}
	.modal .user {
		width: 100%;
		margin-bottom: 10px;
		padding: .5em;
		border-radius: 10px;
		background-color: var(--fg-clr);
		font-size: .85em;
	}
	.modal .user .image {
		width: 40px;
		height: 40px;
		background-color: var(--nav-btn-hover-bg);
		border-radius: 100%;
	}
	.modal .user .image .icon {
		width: 60%;
		height: 60%;
		opacity: .5;
	}
</style>
