<script lang='ts'>
import type {SvelteRouter} from '@danielsharkov/svelte-router'
import {onMount, createEventDispatcher} from 'svelte'
import {defaultPageTransition} from '../utils'
const dispatch = createEventDispatcher()

export let router: SvelteRouter

onMount(()=> {
	dispatch('hasOutro')
})
</script>



<div transition:defaultPageTransition on:outroend={()=> dispatch('outroDone')}>
	<h1>This route will fail forever, as it's fake canceled.</h1>
	<button on:click={()=> router.push($router.location.name)}>Retry nevertheless</button>
</div>



<style>
h1 {
	color: #c30;
	flex: 1 1 100%;
	text-align: center;
}
div {
	display: flex;
	width: 100%;
	justify-content: center;
	padding: 2rem;
	flex-flow: row wrap;
}
</style>
