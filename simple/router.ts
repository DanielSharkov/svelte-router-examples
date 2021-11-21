import {SvelteRouter} from '@danielsharkov/svelte-router'

import ViewDev from './routes/RouterStruct.svelte'
import ViewHome from './routes/Home.svelte'
import ViewAbout from './routes/About.svelte'
import ViewBlogs from './routes/Blogs.svelte'
import ViewBlog from './routes/Blog.svelte'
import ViewNotFound from './routes/NotFound.svelte'

export default new SvelteRouter({
	window: window,
	routes: {
		'home': {
			path: '/',
			component: ViewHome,
			props: {
				name: 'Router',
				nav: {label: 'Home'},
			},
		},
		'about': {
			path: '/about',
			component: ViewAbout,
			props: {
				nav: {label: 'About'},
			},
		},
		'blogs': {
			path: '/blogs',
			component: ViewBlogs,
			props: {
				nav: {label: 'Blogs'}
			},
		},
		'blog': {
			path: '/blogs/:id',
			component: ViewBlog,
		},
		'router-struct': {
			path: '/_dev',
			component: ViewDev,
			props: {
				nav: {label: '_dev'},
			},
		},
		'404': {
			path: '/404',
			component: ViewNotFound,
		},
	},
	fallback: {name: '404'},
})
