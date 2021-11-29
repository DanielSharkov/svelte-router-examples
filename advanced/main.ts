import {SvelteRouter} from '@danielsharkov/svelte-router'
import App from './App.svelte'
import routerConfig from './router'

const app = new App({
	target: document.body,
	props: {
		viewportEl: window,
		router: new SvelteRouter(routerConfig),
	},
})
export default app
