import sveltePreprocess from 'svelte-preprocess'
export default {
	preprocess: sveltePreprocess({
		sourceMap: true,
		preprocess: sveltePreprocess({sourceMap: true})
	})
}
