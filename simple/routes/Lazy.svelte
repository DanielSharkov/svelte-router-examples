<script lang='ts'>
import {onMount, createEventDispatcher} from 'svelte'
import {defaultPageTransition} from '../utils'
const dispatch = createEventDispatcher()

onMount(()=> {
	dispatch('hasOutro')
})
</script>



<div transition:defaultPageTransition on:outroend={()=> dispatch('outroDone')}>
	<h1>This route was lazy loaded with a faked delay.</h1>
</div>



<style>
div {
	padding: 2rem;
	text-align: center;
}
</style>
