<script lang='ts'>
import {onMount, createEventDispatcher} from 'svelte'
import {defaultPageTransition} from '../simple/utils'
const dispatch = createEventDispatcher()

onMount(()=> {
	dispatch('hasOutro')
})
</script>



<div transition:defaultPageTransition on:outroend={()=> dispatch('outroDone')}>
	<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 50 12'>
		<circle fill='var(--font-clr)' stroke='none' cx='6' cy='6' r='6'>
			<animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.1'/>
		</circle>
		<circle fill='var(--font-clr)' stroke='none' cx='25' cy='6' r='6'>
			<animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.2'/>
		</circle>
		<circle fill='var(--font-clr)' stroke='none' cx='44' cy='6' r='6'>
			<animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.3'/>
		</circle>
	</svg>
</div>



<style>
div {
	display: flex;
	width: 100%;
	justify-content: center;
	padding: 4rem;
}
svg {
	width: 2rem;
}
</style>
