import type {RouterBeforePush, RouterConfig} from '@danielsharkov/svelte-router'
import {get as getStore} from 'svelte/store'
import DB from './database'

import ViewLogin from './routes/Login.svelte'
import ViewTimeline from './routes/Timeline.svelte'
import ViewUsers from './routes/Users.svelte'
import ViewProfile from './routes/Profile.svelte'
import ViewPost from './routes/Post.svelte'
import ViewThread from './routes/Thread.svelte'
import ViewNotFound from './routes/NotFound.svelte'

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
			component: ViewLogin,
		},
		'timeline': {
			path: '/',
			component: ViewTimeline,
			props: {
				nav: 'Timeline',
			},
		},
		'users': {
			path: '/users',
			component: ViewUsers,
			props: {
				nav: 'Users',
			},
		},
		'profile': {
			path: '/users/:userID',
			component: ViewProfile,
		},
		'post': {
			path: '/post/:postID',
			component: ViewPost,
		},
		'thread': {
			path: '/thread/:threadID',
			component: ViewThread,
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
