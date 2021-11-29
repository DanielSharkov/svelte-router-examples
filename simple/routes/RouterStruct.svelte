<script lang='ts' context='module'>
	import type {RouterBeforePushArgs} from '@danielsharkov/svelte-router'
	import {writable, get as getStore} from 'svelte/store'

	let blockedVisits = 0
	let isUserRealDev = writable(true)
	let rmvHook = writable(null)

	function actualHook({pendingRoute, resolve, reject}: RouterBeforePushArgs) {
		if (pendingRoute.name === 'router-struct') {
			if (!getStore(isUserRealDev) && blockedVisits < 2) {
				if (blockedVisits === 0) {
					alert(`Haha! You're not a real developer, you won't get in here. 😈 You dead-locked yourself out of this page and now you never gonna.... no, just kidding. Just retry and you'll get there. 🙂`)
				}
				else if (blockedVisits === 1) {
					alert(`Ha ha ha haa!! You still won't get in here! 😈 Alright, enough fun. Just retry, this time you really will get back in. 😄`)
				}
				blockedVisits++
				if (blockedVisits === 2) {
					isUserRealDev.set(true)
				}
				return reject()
			}
			blockedVisits = 0
		}
		resolve()
	}
</script>

<script lang='ts'>
	export let router
	const HookID = 'app.svelte_hook'

	let isHookAdded = hookDoesExist()

	function hookDoesExist() {
		try {
			const rm = router.addBeforePushHook(HookID, ()=> {})
			rm()
		}
		catch(_) {return true}
		return false
	}

	function addTestHook() {
		if (isHookAdded) return

		rmvHook.set(
			router.addBeforePushHook(HookID, actualHook)
		)
		blockedVisits = 0
		isHookAdded = !isHookAdded
	}

	function removeTestHook() {
		if (!isHookAdded) return

		$rmvHook()
		rmvHook.set(null)
		blockedVisits = 0
		isHookAdded = !isHookAdded
	}

	function toggleHook() {
		if (isHookAdded) removeTestHook()
		else addTestHook()
	}

	$:if (!$isUserRealDev && isHookAdded) router.push('home')
</script>

<div class='page'>
	<div class='misc'>
		<button on:click={toggleHook} class='add-hook-btn flex flex-center gap-05' class:hook-added={isHookAdded}>
			<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M20 58H60M100 58H60M60 58V21M60 58V100' stroke-width='6' stroke-linecap='round'/>
			</svg>
			<span class='label'>
				{#if isHookAdded}
					Remove before push hook
				{:else}
					Add before push hook
				{/if}
			</span>
		</button>
		<div class='dev-user'>
			<label for='IsUserRealDev'>Am I a real developer?</label>
			<input type='checkbox'
				id='IsUserRealDev'
				bind:checked={$isUserRealDev}
			/>
			<span>{isUserRealDev ? 'Yes':'Nope'}</span>
		</div>
		<p>This example before push hook will block you from visiting this site when you're not a developer. What are you waiting? Add that hook by the button and uncheck the checkbox! 🙂</p>
	</div>

	<h2>Registered routes</h2>
	<pre><code>
		{JSON.stringify($router.routes, null, 4)}
	</code></pre>

	<h2>Current location</h2>
	<pre><code>
		{JSON.stringify($router.location, null, 4)}
	</code></pre>
</div>

<style>
	.misc, pre {
		padding: 10px;
		box-shadow: var(--shadow);
		background-color: var(--fg-clr);
		border-radius: .5em;
	}
	.add-hook-btn .icon {
		transition-duration: .2s;
		transition-property: transform;
		will-change: transform;
	}
	.add-hook-btn .icon > * {
		stroke: #00c853;
	}
	.add-hook-btn.hook-added .icon {
		transform: rotate(135deg);
	}
	.add-hook-btn.hook-added .icon > * {
		stroke: #ff1744;
	}
	code {
		font-family: 'Fire Code', monospace;
		font-variant-ligatures: normal;
		font-size: .8em;
	}
	.misc {
		margin-bottom: 20px;
		padding: 20px;
	}
	.dev-user {
		display: flex;
		margin-top: .5em;
		align-content: center;
		align-items: center;
		gap: 10px;
		font-size: .75em;
	}
	.dev-user > input {
		margin: 0;
	}
</style>
