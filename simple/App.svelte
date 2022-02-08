<script context='module' lang='ts'>
	import type {SvelteRouter} from '@danielsharkov/svelte-router'
	let routerInstance: SvelteRouter
	export {routerInstance as router}
</script>



<script lang='ts'>
	import {Viewport, link} from '@danielsharkov/svelte-router'
	import {cubicInOut} from 'svelte/easing'
	export let router: SvelteRouter
	routerInstance = router

	function headerAnim(node, o?) {
		return {
			duration: 250,
			css: (t)=> (
				`transform: translateY(-${105 - 105 * cubicInOut(t)}%);`
			),
		}
	}
</script>

<main>
	<nav class='flex flex-center-y' transition:headerAnim>
		{#each Object.keys($router.routes) as routeName}
			{#if $router.routes[routeName].props?.nav}
				<a href={router.nameToPath(routeName)} use:link={router}
				class:active={$router.location.name === routeName}
				class='btn'>
					{$router.routes[routeName].props.nav.label}
				</a>
			{/if}
		{/each}
		<!-- <a href='/this/page/does-not/exist' use:link={router} class='btn'>
			This will immediately throw an error, because you can't link
			to routes which aren't defined in the router config
		</a> -->
	</nav>
	<Viewport {router}/>
</main>

<style>
	nav {
		z-index: 50;
		position: sticky;
		position: -webkit-sticky;
		top: 0;
		left: 0;
		padding: .5em;
		gap: .5em;
		box-shadow: var(--nav-shadow);
		background-color: var(--fg-clr);
	}
	nav a.btn {
		margin: 0;
		padding: .5em 1em;
		border: none;
	}
	nav a.btn:not(.active) {
		background-color: transparent;
		color: #aaa;
	}
	nav a.btn:hover:not(.active), nav a.btn:focus:not(.active) {
		background-color: var(--nav-btn-hover-bg);
		color: var(--nav-btn-hover-font);
	}
	:global(nav a.btn.active) {
		background-color: var(--prime);
		color: #fff;
	}
</style>
