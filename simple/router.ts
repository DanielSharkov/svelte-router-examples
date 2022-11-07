import type {RouterConfig} from '@danielsharkov/svelte-router'

import ViewNotFound from './routes/NotFound.svelte'
import LazyError from './routes/LazyError.svelte'
import LoadingRoute from '../gh_pages/LoadingRoute.svelte'
import LoadingRouteFailFallback from '../gh_pages/LoadingRouteFailFallback.svelte'

const config: RouterConfig = {
	window,
	scrollingElement: window.document.scrollingElement,
	routes: {
		'home': {
			path: '/',
			lazyComponent: {
				component: async ()=> (await import('./routes/Home.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
			props: {
				name: 'Router',
				nav: {label: 'Home'},
			},
		},
		'about': {
			path: '/about',
			lazyComponent: {
				component: async ()=> (await import('./routes/About.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
			props: {
				nav: {label: 'About'},
			},
		},
		'blogs': {
			path: '/blogs',
			lazyComponent: {
				component: async ()=> (await import('./routes/Blogs.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
			props: {
				nav: {label: 'Blogs'}
			},
		},
		'blog': {
			path: '/blogs/:id',
			lazyComponent: {
				component: async ()=> (await import('./routes/Blog.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
		},
		'router-struct': {
			path: '/_dev',
			lazyComponent: {
				component: async ()=> (await import('./routes/RouterStruct.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
			props: {
				nav: {label: '_dev'},
			},
		},
		'lazy-load': {
			path: '/lazy',
			lazyComponent: {
				component: async ()=> {
					await new Promise((r)=> setTimeout(r, 3e3))
					return (await import('./routes/Lazy.svelte')).default
				},
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
			props: {
				nav: {label: 'Lazy'},
			},
		},
		'lazy-load-err': {
			path: '/lazy-err',
			lazyComponent: {
				component: async ()=> {
					await new Promise((r)=> setTimeout(r, 2e3))
					return Promise.reject()
				},
				loading: LoadingRoute,
				fallback: LazyError,
			},
			props: {
				nav: {label: 'Lazy error'},
			},
		},
		'404': {
			path: '/404',
			component: ViewNotFound,
		},
	},
	fallback: {name: '404'},
}
export default config
