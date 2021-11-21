<script context='module' lang='ts'>
	import {RouterBeforePush, SvelteRouter} from '@danielsharkov/svelte-router'
	import DB from './database'

	import ViewLogin from './routes/Login.svelte'
	import ViewTimeline from './routes/Timeline.svelte'
	import ViewUsers from './routes/Users.svelte'
	import ViewProfile from './routes/Profile.svelte'
	import ViewPost from './routes/Post.svelte'
	import ViewThread from './routes/Thread.svelte'
	import ViewNotFound from './routes/NotFound.svelte'
	import {get as getStore} from 'svelte/store'

	const beforePush: RouterBeforePush =({pendingRoute, resolve, reject})=> {
		if (getStore(DB).session === '') {
			reject({name: 'login'})
		}
		else if (pendingRoute.name === 'login') {
			reject({name: 'timeline'})
		}
		else resolve()
	}

	export const router = new SvelteRouter({
		window,
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
	})
</script>



<script lang='ts'>
	import {Viewport} from '@danielsharkov/svelte-router'
	import {cubicInOut} from 'svelte/easing'
	import {link} from '@danielsharkov/svelte-router'

	if (!localStorage) {
		alert('Locale Storage API not available - all the state restores to the default after a page reload.')
	}

	function headerAnim(node, o?) {
		return {
			duration: 600,
			css: (t)=> (
				`transform: translateY(-${105 - 105 * cubicInOut(t)}%);`
			)
		}
	}

	function headerMarginAnim(node, o?) {
		const height = node.offsetHeight
		return {
			duration: 600,
			css: (t)=> `height: ${height * cubicInOut(t)}px;`
		}
	}

	let hasUserScrolled = false
	function scrollingApp(event) {
		hasUserScrolled = event.target.scrollingElement.scrollTop > 10
	}

	function logoutUser() {
		DB.logoutUser()
		router.push('login')
	}

	$:isSessionUserProfile = (
		$router.location.name === 'profile' &&
		$router.location.params.userID === $DB.session
	)
</script>

<main>
	{#if $DB.session !== ''}
		<div id='HeaderMargin' transition:headerMarginAnim/>
		<header transition:headerAnim class:float={hasUserScrolled}>
			<div class='actual-content'>
				<div class='left-part flex flex-center-y gap-05'>
					{#each Object.keys($router.routes) as routeName}
						{#if $router.routes[routeName].props?.nav}
							<a href={router.nameToPath(routeName)} use:link={router}
							class:active={$router.location.name === routeName}
							class='btn'>
								{$router.routes[routeName].props.nav}
							</a>
						{/if}
					{/each}
				</div>

				<div class='logo flex flex-center'>
					<img
						src='https://raw.githubusercontent.com/DanielSharkov/svelte-router/master/logo-animated.svg'
						alt='Svelte Router Logo'
					/>
				</div>

				<div class='right-part flex flex-center-y gap-05'>
					<button on:click={()=> router.push('profile', {userID: $DB.session})}
					class:active={isSessionUserProfile}
					class='btn flex flex-center-y gap-05'>
						<span>My profile</span>
						<svg class='icon stroke icon-1' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
							<path d='M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11' stroke-width='6'/>
							<circle cx='60' cy='34' r='21' stroke-width='6'/>
						</svg>
					</button>

					<button on:click={logoutUser}
					class='btn flex flex-center-y gap-05'>
						<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M20 10L84 10L84 28.75M20 10L20 95L64 110L64 95M20 10L64 25L64 95M84 76.25L84 95L64 95' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/>
							<path d='M74 52H104M104 52L89 37M104 52L89 67' stroke-width='6'/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	{/if}
	<Viewport id='SvelteViewport' {router}/>
</main>

<svelte:window on:scroll={scrollingApp}/>

<style>
	:global(#SvelteViewport) {
		width: 100%;
	}

	header {
		z-index: 50;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: var(--fg-clr);
		box-shadow: var(--nav-shadow);
	}
	#HeaderMargin {
		height: 70px;
	}
	header .actual-content {
		display: grid;
		width: var(--page-width);
		margin: auto;
		grid-gap: 10px;
		grid-template-columns: 1fr 200px 1fr;
		padding: 5px 20px;
	}
	header .logo img {
		width: 60px;
		height: 60px;
		transition: .2s;
		transition-property: width, height;
		will-change: width, height;
	}
	header .right-part {
		justify-content: flex-end;
	}
	header .btn {
		padding: 10px;
		border: none;
		font-size: .75em;
		font-weight: 500;
	}
	header .btn:not(.active) {
		background-color: transparent;
	}
	header .btn:hover:not(.active),
	header .btn:focus:not(.active) {
		background-color: var(--nav-btn-hover-bg);
		color: var(--nav-btn-hover-font);
	}
	header .btn:active:not(.active), :global(header .btn.active) {
		background-color: var(--bg-clr);
		color: var(--prime);
	}
	header .btn:active:not(.active) .icon.stroke > *,
	:global(header .btn.active) .icon.stroke > * {
		stroke: var(--prime);
	}
	header:not(:hover).float .logo img {
		width: 30px;
		height: 30px;
	}
</style>
