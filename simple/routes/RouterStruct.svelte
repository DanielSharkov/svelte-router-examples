<script lang='ts' context='module'>
	import type {RouterBeforePush} from '@danielsharkov/svelte-router'
	import {writable, get as getStore} from 'svelte/store'
	import routerInstance from '../router'

	let rmvTestHook = writable(null)
	let blockedVisits = 0

	const actualHook: RouterBeforePush =({pendingRoute, resolve, reject})=> {
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

	function addTestHook() {
		rmvTestHook.set(
			routerInstance.addBeforePushHook(
				'app.svelte_hook', actualHook,
			)
		)
	}

	function removeTestHook() {
		if (rmvTestHook === null) return
		getStore(rmvTestHook)()
		rmvTestHook.set(null)
	}

	let isUserRealDev = writable(true)
</script>

<script lang='ts'>
	export let router
	$:isHookAdded = $rmvTestHook !== null
	$:if (!$isUserRealDev && isHookAdded) router.push('home')
</script>

<div class='page'>
	<div class='misc'>
		{#if isHookAdded}
			<button on:click={removeTestHook}>
				Remove before push hook
			</button>
		{:else}
			<button on:click={addTestHook}>
				Add before push hook
			</button>
		{/if}
		<div class='dev-user'>
			<label for='IsUserRealDev'>Am I a real developer?</label>
			<input type='checkbox'
				id='IsUserRealDev'
				bind:checked={$isUserRealDev}
			/>
			<span>{isUserRealDev ? 'Yes':'Nope'}</span>
		</div>
		<p>This example before push hook will block you from visiting this site when you're not a developer. What are you waiting? Subscribe that hook by the button and uncheck the box! 🙂</p>
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
		align-content: center;
		align-items: center;
		gap: 10px;
		font-size: .75em;
	}
	.dev-user > input {
		margin: 0;
	}
</style>
