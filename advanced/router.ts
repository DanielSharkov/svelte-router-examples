import type {RouterBeforePush, RouterConfig} from '@danielsharkov/svelte-router'
import {get as getStore} from 'svelte/store'

import ViewNotFound from './routes/NotFound.svelte'
import LoadingRouteFailFallback from '../gh_pages/LoadingRouteFailFallback.svelte'
import LoadingRoute from '../gh_pages/LoadingRoute.svelte'
import DB from './database'

const beforePush: RouterBeforePush =({pendingRoute, resolve, reject})=> {
	if (getStore(DB).session === '') {
		reject({name: 'login'})
	}
	else if (pendingRoute.name === 'login') {
		reject({name: 'timeline'})
	}
	else resolve()
}

const config: RouterConfig = {
	window,
	scrollingElement: window.document.scrollingElement,
	routes: {
		'login': {
			path: '/login',
			lazyComponent: {
				component: async ()=> (await import('./routes/Login.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
		},
		'timeline': {
			path: '/',
			lazyComponent: {
				component: async ()=> (await import('./routes/Timeline.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
			props: {
				nav: 'Timeline',
			},
		},
		'users': {
			path: '/users',
			lazyComponent: {
				component: async ()=> (await import('./routes/Users.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
			props: {
				nav: 'Users',
			},
		},
		'profile': {
			path: '/users/:userID',
			lazyComponent: {
				component: async ()=> (await import('./routes/Profile.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
		},
		'post': {
			path: '/post/:postID',
			lazyComponent: {
				component: async ()=> (await import('./routes/Post.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
		},
		'thread': {
			path: '/thread/:threadID',
			lazyComponent: {
				component: async ()=> (await import('./routes/Thread.svelte')).default,
				loading: LoadingRoute,
				fallback: LoadingRouteFailFallback,
			},
		},
		'404': {
			path: '/404',
			component: ViewNotFound,
		},
	},
	beforePush,
	fallback: {name: '404'},
}
export default config
