<script lang='ts'>
	import {SvelteRouter} from '@danielsharkov/svelte-router'
	import {cubicInOut} from 'svelte/easing'
	import {fade} from 'svelte/transition'
	import {get as getStore} from 'svelte/store'
	import {onMount, tick} from 'svelte'
	import {FakeWindow} from './fake_window'

	import Simple from '../simple/App.svelte'
	import simpleConfig from '../simple/router'
	import Advanced from '../advanced/App.svelte'
	import advanedConfig from '../advanced/router'

	const LOC_STR_XPL_ID = 'svelte-router-exmaple'
	const LOC_STR_STATE_ID = 'svelte-router-state'
	const LOC_STR_SETTINGS_ID = 'svelte-router-settings'
	const LOC_STR_SNOW_ID = 'svelte-router-snowing'

	enum Example {Simple, Advanced}
	const exmapleConfig = [simpleConfig, advanedConfig]
	const exmapleUrlName = ['simple.xpl','advanced.xpl']
	let routeNameLabel = {
		'404': 'Not found',

		// Simple example:
		'home': 'Home',
		'about': 'About',
		'blogs': 'Blogs',
		'blog': 'Blog',
		'router-struct': '_dev',

		// Advanced example:
		'login': 'Login',
		'timeline': 'Timeline',
		'users': 'Users',
		'profile': 'Profile',
		'post': 'Post',
		'thread': 'Thread',
	}
	let currentExample
	let viewportWindow: FakeWindow
	let viewportEl: HTMLElement
	let router: SvelteRouter

	$:isFirstHistoryEntry = (
		viewportWindow && $viewportWindow.currentHistory === 0
	)
	$:isLastHistoryEntry = (
		viewportWindow &&
		$viewportWindow.currentHistory === $viewportWindow.historyStack.length-1
	)
	$:doesHistoryExist = (
		viewportWindow && $viewportWindow.historyStack.length > 1
	)

	onMount(()=> {
		let xpl: Example = Example.Simple
		if (localStorage) {
			const locStr = localStorage.getItem(LOC_STR_XPL_ID)
			if (locStr) {
				xpl = Number(locStr)
			}

			const locStrSettings = localStorage.getItem(LOC_STR_SETTINGS_ID)
			if (locStrSettings) {
				settings = JSON.parse(locStrSettings)
			}

			const locStrSnow = localStorage.getItem(LOC_STR_SNOW_ID)
			if (locStrSnow && locStrSnow === 'true') toggleSnow()
		}
		changeExample(xpl)
	})

	let isInitialChange = true
	async function changeExample(xpl: Example) {
		if (xpl === currentExample) return

		if (router) {
			router.destroy()
			router = undefined
		}
		currentExample = xpl
		if (localStorage) {
			localStorage.setItem(LOC_STR_XPL_ID, ''+ currentExample)
		}

		showHistoryPreview = false
		showBrowserSettings = false
		await tick()
		if (isInitialChange) {
			isInitialChange = false
			setRouter()
		}
		else setTimeout(
			()=> setRouter(),
			// await examples outro transitions
			xpl === Example.Simple ? 650 : 300,
		)
	}

	function setRouter() {
		let initialState
		if (localStorage) {
			const locStr = localStorage.getItem(
				LOC_STR_STATE_ID +'__'+ currentExample,
			)
			if (locStr) initialState = JSON.parse(locStr)
		}
		viewportWindow = new FakeWindow(viewportEl, initialState)
		viewportWindow.onChange(($)=> {
			if (localStorage) {
				if (settings.save_state) {
					localStorage.setItem(
						LOC_STR_STATE_ID +'__'+ currentExample,
						JSON.stringify({
							index: getStore(viewportWindow).currentHistory,
							history: getStore(viewportWindow).historyStack,
						}),
					)
				}
			}
		})
		router = new SvelteRouter({
			window:           viewportWindow,
			scrollingElement: viewportEl,
			routes:           exmapleConfig[currentExample].routes,
			beforePush:       exmapleConfig[currentExample].beforePush,
			fallback:         exmapleConfig[currentExample].fallback,
		})
	}

	function openHistoryIdx(idx: number) {
		const currIdx = $viewportWindow.currentHistory
		if (currIdx === idx) return
		if (idx > currIdx) {
			viewportWindow.history.go(idx - currIdx)
		}
		else viewportWindow.history.go(0 - (currIdx - idx))
	}

	// revHisIdx = reversed history index
	function revHisIdx(idx: number) {
		return $viewportWindow.historyStack.length-1 - idx
	}

	let opendModal: string = null
	function openModal(id: string) {
		if (opendModal !== null) return
		opendModal = id
	}
	function closeModal() {
		opendModal = null
	}

	let showHistoryPreview = false
	function toggleHistoryPreview() {
		showBrowserSettings = false
		showHistoryPreview = !showHistoryPreview
	}

	let showBrowserSettings = false
	function openBrowserSettings() {
		showHistoryPreview = false
		showBrowserSettings = !showBrowserSettings
	}

	let isWindowFullscreen = false
	function fullscreenWindow() {
		isWindowFullscreen = !isWindowFullscreen
		showHistoryPreview = false
		showBrowserSettings = false
		if (isWindowFullscreen) {
			pauseSnow()
		}
		else remainSnow()
	}

	let userTypingUrlBar = false

	let settings = {
		save_state: false,
	}

	function toggleSetting(id: string) {
		settings[id] = !settings[id]
		if (localStorage) {
			localStorage.setItem(LOC_STR_SETTINGS_ID, JSON.stringify(settings))

			if (id === 'save_state') {
				if (!settings[id]) {
					localStorage.removeItem(LOC_STR_STATE_ID +'__'+ Example.Simple)
					localStorage.removeItem(LOC_STR_STATE_ID +'__'+ Example.Advanced)
				}
				else {
					localStorage.setItem(
						LOC_STR_STATE_ID +'__'+ currentExample,
						JSON.stringify({
							index: getStore(viewportWindow).currentHistory,
							history: getStore(viewportWindow).historyStack,
						}),
					)
				}
			}
		}
	}

	function hideBrowserControlsAnim(node, o?) {
		const height = node.offsetHeight
		return {
			duration: 200,
			css(t) {
				t = cubicInOut(t)
				return (
					`height: ${height * t}px;` +
					`padding: ${.5 * t}em .5em;` +
					`opacity: ${t};`
				)
			}
		}
	}

	function hideTabsControlAnim(node, o?) {
		const height = node.offsetHeight
		return {
			duration: 200,
			css(t) {
				t = cubicInOut(t)
				return (
					`height: ${height * t}px;` +
					`margin-top: ${.5 * t}em;` +
					`opacity: ${t};`
				)
			}
		}
	}

	function disclosureAnim(node, o?) {
		return {
			duration: 150,
			css(t) {
				t = cubicInOut(t)
				return (
					`opacity: ${t};` +
					`transform-origin: top; ` +
					`transform: ` +
						`translateY(-${.25-.25 * t}em) ` +
						`scaleY(${.75 + .25 * t});`
				)
			}
		}
	}

	function showHistoryCtrlAnim(node, o?) {
		const width = node.offsetWidth
		return {
			duration: 100,
			css(t) {
				t = cubicInOut(t)
				return `opacity: ${t}; width: ${width * t}px;`
			}
		}
	}

	function modalAnim(node, type?) {
		return {
			duration: 300,
			css: (t)=> (
				`transform: scale(${.5 + .5 * cubicInOut(t)});` +
				`opacity: ${cubicInOut(t)};`
			),
		}
	}

	// Winter special **********************************************************

	let snowContainer: HTMLCanvasElement
	let isSnowing = false

	function toggleSnow(to?: boolean) {
		if (typeof to === 'boolean') {
			isSnowing = !to
		}

		isSnowing = !isSnowing
		if (isSnowing) LetItSnow()
		if (localStorage) {
			localStorage.setItem(LOC_STR_SNOW_ID, String(isSnowing))
		}
	}

	let isSnowPaused = false
	function pauseSnow() {
		isSnowPaused = true
	}
	function remainSnow() {
		if (isSnowPaused) {
			isSnowPaused = false
			LetItSnow()
		}
	}

	/**
	 * LetItSnow
	 * Credits goes to James Martin-Davies from Codepen - Thanks!
	 * https://codepen.io/JMDUK/pen/dtjfn
	 * @param canvas: HTMLCanvasElement
	 */
	function LetItSnow() {
		const canvas = snowContainer

		const particles = []
		const particleSize = 1.25
		const maxParticles = 5000
		const flakesColor = '#bbb'

		// Initialize canvas
		const ctx = canvas.getContext('2d')

		// Get window width & height
		const canvasWidth = canvas.offsetWidth
		const canvasHeight = canvas.offsetHeight

		// Apply canvas size based on window width & height.
		// This can be changed to bound within an element instead.
		canvas.width = canvasWidth
		canvas.height = canvasHeight

		// Push particle iteration
		for (let i = 0; i < maxParticles; i++) {
			particles.push({
				// Particle x position
				x: Math.random() * canvasWidth,
				// Particle y position
				y: Math.random() * canvasHeight,
				// Particle radius
				r: Math.random() * particleSize,
				// Particle density
				d: Math.random() * maxParticles,
			})
		}

		// Render particles
		function render() {
			ctx.clearRect(0, 0, canvasWidth, canvasHeight)
			ctx.fillStyle = flakesColor
			ctx.beginPath()

			for(let i = 0; i < maxParticles; i++) {
				// Iterate the particles.
				const p = particles[i]
				// Move particles along x, y.
				ctx.moveTo(p.x, p.y)
				// Draw particle.
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
			}
			ctx.fill()
			update()
		}

		// To create a more dynamic and organic flow, we need to apply an
		// incremental 'angle' that will iterate through each particle flow.
		let angle = 0.005

		// Update particles
		function update() {
			// Incremental angle.
			angle += 0.005

			for (let i = 0; i < maxParticles; i++) {
				const p = particles[i]

				// Offset the particles flow based on the angle.
				p.y += Math.cos(p.d) + p.r
				p.x += Math.sin(angle) * Math.PI / 10

				// Re-iterate the particles to the top once the particle has
				// reached the bottom of the window.
				if (p.y > canvasHeight) {
					particles[i] = {
						x: Math.random() * canvasWidth,
						y: 0,
						r: p.r,
						d: p.d,
					}
				}
			}
		}

		(function runtime() {
			if (!isSnowing || isSnowPaused) {
				ctx.clearRect(0, 0, canvasWidth, canvasHeight)
				return
			}
			window.requestAnimationFrame(runtime)
			render()
		})()
	}
</script>

<canvas id='snow' bind:this={snowContainer}/>

<div id='BrowserSim' class='flex flex-col' class:fullscreen={isWindowFullscreen}>
	<div class='window'>
		<div class='ui'>
			<div class='tabs-control flex gap-1'>
				<div class='window-controls flex flex-center-y gap-05'>
					<button on:click={()=> openModal('windowClose')} class='close flex flex-center'>
						<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
							<path stroke-opacity='.6' d='m14 14 20 20m0-20L14 34' stroke='#000' stroke-width='5' stroke-linecap='round'/>
						</svg>
					</button>
					<button on:click={()=> openModal('windowMinimize')} class='minimize flex flex-center'>
						<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
							<path stroke-opacity='.6' d='M38 24H10' stroke='#000' stroke-width='5' stroke-linecap='round'/>
						</svg>
					</button>
					<button on:click={fullscreenWindow} class='fullscreen flex flex-center'>
						{#if !isWindowFullscreen}
							<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
								<path fill-opacity='.6' fill='#000' d='M31.7 12H15.4a3.4 3.4 0 0 0-3.4 3.4v16.3L31.7 12ZM16.3 36h16.3c1.9 0 3.4-1.5 3.4-3.4V16.3L16.3 36Z'/>
							</svg>
						{:else}
							<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
								<path fill-opacity='.6' fill='#000' d='M43.7 24H27.4a3.4 3.4 0 0 0-3.4 3.4v16.3L43.7 24ZM4 23.7h16.3c1.9 0 3.4-1.5 3.4-3.4V4L4 23.7Z'/>
							</svg>
						{/if}
					</button>
					{#if isWindowFullscreen}
						<div class='history-ctrl flex nowrap' transition:showHistoryCtrlAnim>
							<button on:click={()=> viewportWindow.history.back()}
							class='history-ctrl back flex flex-center'
							disabled={isFirstHistoryEntry}>
								<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path d='M105 60H15M15 60L55 20M15 60L55 100' stroke-width='8' stroke-linecap='round'/>
								</svg>
							</button>

							<button on:click={()=> viewportWindow.history.forward()}
							class='history-ctrl forwards flex flex-center'
							disabled={isLastHistoryEntry}>
								<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path d='M15 60H105M105 60L65 20M105 60L65 100' stroke-width='8' stroke-linecap='round'/>
								</svg>
							</button>
						</div>
					{/if}
				</div>
				{#if !isWindowFullscreen}
					<div class='tabs flex flex-center-y' transition:hideTabsControlAnim>
						<button on:click={()=> changeExample(Example.Simple)}
						class='flex flex-center'
						class:active={currentExample === Example.Simple}>
							Simple Example
						</button>
						<button on:click={()=> changeExample(Example.Advanced)}
						class='flex flex-center'
						class:active={currentExample === Example.Advanced}>
							Advanced Example
						</button>
					</div>
					<a href='https://github.com/danielsharkov/svelte-router' target='_blank'
					class='github-reference flex flex-center'
					transition:fade={{duration: 250}}>
						<svg class='icon fill icon-075' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
							<path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'/>
						</svg>
					</a>
				{/if}
			</div>
			{#if !isWindowFullscreen}
				<div class='page-control flex gap-05' transition:hideBrowserControlsAnim>
					<div class='browser-control flex flex-center-y gap-05'>
						<button on:click={()=> viewportWindow.history.back()}
						class='back flex flex-center'
						disabled={isFirstHistoryEntry}>
							<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M105 60H15M15 60L55 20M15 60L55 100' stroke-width='6' stroke-linecap='round'/>
							</svg>
						</button>
						<button on:click={()=> viewportWindow.history.forward()}
						class='forward flex flex-center'
						disabled={isLastHistoryEntry}>
							<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M15 60H105M105 60L65 20M105 60L65 100' stroke-width='6' stroke-linecap='round'/>
							</svg>
						</button>
						<button on:click={toggleHistoryPreview}
						class='flex flex-center'
						class:active={showHistoryPreview}
						disabled={!doesHistoryExist}>
							<svg class='icon stroke icon-1' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
								<path d='M14.3 60c0-24.9 20.3-45 45.4-45 25 0 45.3 20.1 45.3 45s-20.3 45-45.3 45c-20 0-37-12.8-43-30.7M14.3 60l12.2-10.9M14.3 60 5 47.2' stroke-width='6' stroke-linecap='round'/>
								<path d='M59 28v37l17 13' stroke-width='6' stroke-linecap='round'/>
							</svg>
						</button>
						{#if showHistoryPreview && doesHistoryExist}
							<div class='history-preview' transition:disclosureAnim>
								<span class='placeholder'>Present</span>

								{#each [...$viewportWindow.historyStack].reverse() as {state, url}, index}
									<button on:click={()=> openHistoryIdx(revHisIdx(index))}
									class:active={revHisIdx(index) === $viewportWindow.currentHistory}
									class='entry flex nowrap gap-1 flex-center-y'
									style='animation-delay: {25 * index}ms;'>
										<span class='name'>
											{routeNameLabel[state.name]}
										</span>
										<span class='url'>{url}</span>
									</button>
								{/each}

								<span class='placeholder'>Past</span>
							</div>
						{/if}
					</div>
					<div class='url-bar flex' class:active={userTypingUrlBar}>
						{#if viewportWindow && $viewportWindow.historyStack.length > 0}
							<span class='protocol flex inline flex-center'>
								SvelteRouter://{exmapleUrlName[currentExample]}
							</span>
							<input
								type='text'
								on:focus={()=> userTypingUrlBar = true}
								on:blur={()=> userTypingUrlBar = false}
								value={$viewportWindow.historyStack[$viewportWindow.currentHistory].url}
								on:change={(e)=> router.pushPath(e.currentTarget.value)}
							/>
						{/if}
					</div>
					<div class='browser-control flex flex-center-y'>
						<button on:click={openBrowserSettings}
						class:active={showBrowserSettings}
						class='flex flex-center'>
							<svg class='icon fill icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<circle cx='60' cy='30' r='7'/>
								<circle cx='60' cy='60' r='7'/>
								<circle cx='60' cy='90' r='7'/>
							</svg>
						</button>
						{#if showBrowserSettings}
							<div class='browser-settings' transition:disclosureAnim>
								<button on:click={()=> toggleSetting('save_state')}
								class='flex flex-center-y gap-05'
								class:active={settings.save_state}>
									<div class='checkbox flex flex-center'>
										<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path d='M 4 11, l 5 4, l 8 -10' stroke-width='2' stroke-linecap='round'/>
										</svg>
									</div>
									<span class='label'>
										Save browsing state
									</span>
								</button>

								<button on:click={()=> viewportWindow.resetHistory()}>
									♻ Reset history
								</button>

								<hr>

								<button on:click={toggleSnow}>
									{#if !isSnowing}
										🎄 Let it snow, let it snow, let it snow.
									{:else}
										🌞 Stop that snow, stop that snow, stop that snow.
									{/if}
								</button>

								<button on:click={()=> openModal('randomButtonModal')}>
									🎲 Just a random button...
								</button>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
		<div class='viewport flex flex-col' bind:this={viewportEl}>
			{#if router}
				{#if currentExample === Example.Simple}
					<Simple {router}/>
				{:else if currentExample === Example.Advanced}
					<Advanced {router} {viewportEl}/>
				{/if}
			{/if}
		</div>
	</div>
</div>

<div id='ModalsContainer' class='flex flex-center' class:active={opendModal !== null}>
	{#if opendModal === 'randomButtonModal'}
		<div class='modal' transition:modalAnim>
			<div class='header flex flex-center gap-05'>
				<h1>Thank you!</h1>
				<span class='heart-beat'>❤️</span>
			</div>
			<p>...for being interested in this project and having fun with this demo! 😁</p>
			<p>Please don't forget to star both repositories - I would appreciate it very much! 😄</p>
			<div class='repos'>
				<div class='flex flex-center-y gap-05'>
					<span>⭐</span>
					<a href='https://github.com/DanielSharkov/svelte-router' target='_blank'>
						@danielsharkov/svelte-router
					</a>
				</div>
				<div class='flex flex-center-y gap-05'>
					<span>⭐</span>
					<a href='https://github.com/DanielSharkov/svelte-router-examples' target='_blank'>
						@danielsharkov/svelte-router-examples
					</a>
				</div>
			</div>
			<p>Stay safe and healthy! 😃❤️</p>
			<div class='actions flex flex-center-y'>
				<button on:click={closeModal} class='flex-self-right'>
					Close
				</button>
			</div>
		</div>
	{/if}

	{#if opendModal === 'windowMinimize' || opendModal === 'windowClose'}
		<div class='modal window-interactions' transition:modalAnim>
			<div class='header'>
				<h1>It's up to your imagination ✨</h1>
			</div>
			<p>
				{#if opendModal === 'windowMinimize'}
					Imagine as if your OS would minimize this window now... 🙂😂
				{:else}
					Imagine as if your OS would close this window now... 🙂😂
				{/if}
			</p>
			<div class='actions flex flex-center-y'>
				<button on:click={closeModal} class='flex-self-right'>
					Close
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	#ModalsContainer {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 2em;
		background-color: rgba(0,0,0, .5);
		transition-duration: .3s;
		transition-property: opacity;
		will-change: opacity;
	}
	#ModalsContainer:not(.active) {
		pointer-events: none;
		opacity: 0;
	}
	#ModalsContainer .modal {
		display: grid;
		grid-template-columns: 100%;
		max-width: 450px;
		padding: 2em;
		border-radius: .5em;
		background-color: var(--fg-clr);
		box-shadow: var(--shadow-browser);
	}
	#ModalsContainer .modal.window-interactions h1 {
		font-size: 1.75em;
		letter-spacing: 0;
	}

	#ModalsContainer .header {
		margin-bottom: 1em;
	}
	#ModalsContainer h1 {
		margin: 0;
	}
	#ModalsContainer .heart-beat {
		font-size: 1.5em;
	}

	#snow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	:global(html, body, #BrowserSim) {
		overflow: hidden;
	}
	#BrowserSim {
		padding: 3vh 5vh 3vh 5vh;
		height: 100%;
		transition-duration: .25s;
		transition-property: padding;
	}
	@media screen and (min-width: 1100px) {
		#BrowserSim { padding: 5vh 10vh 5vh 10vh; }
	}
	.window {
		z-index: 0;
		position: relative;
		display: grid;
		grid-template-rows: auto 1fr;
		width: 100%;
		min-width: 550px;
		border-radius: .5em;
		box-shadow: var(--shadow-browser);
		overflow: hidden;
		flex: 1 1 auto;
		transition-duration: .25s;
		transition-property: border-radius;
		will-change: border-radius;
	}
	.window .ui {
		display: grid;
		border-bottom: solid 1px var(--browser-controls-border);
		background-color: var(--browser-controls-bg);
	}
	.window .viewport {
		z-index: -1;
		position: relative;
		flex: 1 1 auto;
		background-color: var(--bg-clr);
		overflow: auto;
	}



	/* OS UI Window actions ................................................. */
	.window-controls {
		margin-left: 1em;
		padding: .25em 0;
		transition-duration: .25s;
		transition-property: margin;
		will-change: margin;
	}
	.window-controls button {
		padding: 0;
		border-radius: 100%;
		border: none;
	}
	.window-controls button.close {
		background-color: #FE6052;
	}
	.window-controls button.minimize {
		background-color: #FFBE05;
	}
	.window-controls button.fullscreen {
		background-color: #14CC37;
	}
	.window-controls button svg {
		width: 1em;
		height: 1em;
		transition-duration: .1s;
		transition-property: opacity;
		will-change: opacity;
	}
	.window-controls:not(:hover) button:not(.history-ctrl):not(:focus) svg {
		opacity: 0;
	}

	.window-controls .history-ctrl {
		overflow: hidden;
	}
	.window-controls .history-ctrl button {
		padding: .1em .25em;
		border-radius: .25em;
		border: solid 1px var(--btn-border);
	}
	.window-controls .history-ctrl button.back {
		border-radius: .25em 0 0 .25em;
		border-right: none;
	}
	.window-controls .history-ctrl button.forwards {
		border-radius: 0 .25em .25em 0;
		border-left: none;
	}
	.window-controls .history-ctrl:hover {
		border-color: var(--btn-hover-border);
	}
	.window-controls .history-ctrl[disabled] {
		pointer-events: none;
		opacity: .5;
	}



	/* Tabs ................................................................. */
	.tabs {
		margin-top: .5em;
		flex: 1 1 auto;
	}
	.tabs button {
		position: relative;
		padding: 1em 1.5em;
		border: none;
		font-size: .8em;
		border-radius: .75em .75em 0 0;
		background-color: var(--browser-controls-bg);
		line-height: 1;
	}
	.tabs button:hover {
		background-color: var(--browser-tab);
	}
	.tabs button:before, .tabs button:after {
		content: '';
		position: absolute;
		bottom: -1em;
		width: 1em;
		height: 1em;
		border-color: transparent;
		border-style: solid;
		transition-duration: .25s;
		border-color: var(--browser-controls-bg);
	}
	.tabs button:before {
		left: -1em;
		border-width: 0 1em 1em 0;
		border-radius: 0 0 1.75em 0;
	}
	.tabs button:after {
		right: -1em;
		border-width: 0 0 1em 1em;
		border-radius: 0 0 0 1.75em;
	}

	.tabs button:hover,
	.tabs button:focus {
		background-color: var(--browser-tab-hover);
	}
	.tabs button:hover:before, .tabs button:hover:after,
	.tabs button:focus:before, .tabs button:focus:after {
		border-color: var(--browser-tab-hover);
	}

	.tabs button.active {
		z-index: 10;
		background-color: var(--browser-controls-fg);
		color: var(--prime);
	}
	.tabs button.active:before,
	.tabs button.active:after {
		border-color: var(--browser-controls-fg);
	}

	.github-reference {
		margin-right: 1em;
		align-self: center;
		transition-duration: .2s;
		transition-property: opacity;
		will-change: opacity;
	}
	.github-reference:not(:hover):not(:focus) {
		opacity: .25;
	}



	/* History Back/Forward actions ......................................... */
	.page-control {
		z-index: 10;
		padding: .5em;
		background-color: var(--browser-controls-fg);
	}
	.browser-control {
		position: relative;
	}

	.browser-control > button {
		padding: .25em;
		background-color: transparent;
		border-color: transparent;
		border-radius: 100%;
		transition-property: border-color, background-color, opacity;
		will-change: border-color, background-color, opacity;
	}
	.browser-control > button:hover, .browser-control > button.active {
		background-color: var(--browser-controls-history-hover);
	}
	.browser-control > button:active, .browser-control > button:focus {
		border-color: var(--prime);
	}
	.browser-control > button:hover svg > *,
	.browser-control > button:active svg > *,
	.browser-control > button.active svg > *,
	.browser-control > button:focus svg > * {
		stroke: var(--prime);
	}
	.browser-control > button[disabled] {
		pointer-events: none;
		opacity: .25;
	}

	.browser-control .history-preview,
	.browser-control .browser-settings {
		position: absolute;
		top: 100%;
		left: 0;
		padding: .5em;
		border-radius: .5em;
		background-color: var(--browser-controls-fg);
		box-shadow: var(--shadow-browser);
		overflow-x: hidden;
		overflow-y: auto;
		max-height: 70vh;
		min-width: 200px;
		max-width: 400px;
		font-size: .85em;
	}
	.browser-control .history-preview .entry {
		position: relative;
		width: 100%;
		padding: .5em .5em .5em 2em;
		border-radius: .25em;
		text-align: left;
		background-color: transparent;
		border-color: transparent;
		white-space: nowrap;
		animation: .3s disclosureEntryIn cubic-bezier(.22, .61, .36, 1) backwards;
	}
	@keyframes disclosureEntryIn {
		from {
			transform: translateY(-.5em);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	.browser-control .history-preview .placeholder {
		display: block;
		padding: 1em;
		opacity: .5;
		font-size: .6em;
		font-weight: 600;
		letter-spacing: .1em;
		text-transform: uppercase;
		animation: 1.5s disclosurePlaceholderIN cubic-bezier(.22, .61, .36, 1) backwards;
	}
	@keyframes disclosurePlaceholderIN {
		from {opacity: 0;}
		to {opacity: .5;}
	}
	.browser-control .history-preview .entry:before,
	.browser-control .history-preview .entry:after {
		content: '';
		position: absolute;
		transition-duration: .2s;
		transition-property: background-color, border-color;
		will-change: background-color, border-color;
	}
	.browser-control .history-preview .entry:before {
		left: .5em;
		width: .4em;
		height: .4em;
		border-radius: 2em;
		border: solid .1em var(--btn-border);
	}
	.browser-control .history-preview .entry:not(:first-of-type):after {
		left: .75em;
		top: -1em;
		height: 1.9em;
		border-left: solid .1em var(--btn-border);
	}
	.browser-control .history-preview .entry.active:before {
		background-color: var(--prime);
		border-color: var(--prime);
	}
	.browser-control .history-preview .entry .name {
		font-weight: 600;
	}
	.browser-control .history-preview .entry .url {
		text-overflow: ellipsis;
		overflow: hidden;
		opacity: .4;
		font-family: 'Fira Code', monospace;
	}
	.browser-control .history-preview .entry:hover:not(.active) {
		background-color: var(--nav-btn-hover-bg);
		color: var(--font-heading-clr);
	}
	.browser-control .history-preview .entry:hover:not(.active):before {
		border-color: var(--font-heading-clr);
	}
	.browser-control .history-preview .entry:focus {
		border-color: var(--prime);
	}
	.browser-control .history-preview .entry.active {
		background-color: var(--browser-controls-history-hover);
		color: var(--prime);
	}



	/* Browser Settings ..................................................... */
	.browser-control .browser-settings {
		right: 0;
		left: auto;
		min-width: 250px;
	}
	.browser-control .browser-settings > button {
		width: 100%;
		padding: .5em;
		background-color: transparent;
		border-color: transparent;
		border-radius: .25em;
		text-align: left;
	}
	.browser-control .browser-settings > button .checkbox {
		border: solid 1px var(--btn-hover-border);
		border-radius: .25em;
		transition-duration: .2s;
		transition-property: background-color, border-color;
		will-change: background-color, border-color;
	}
	.browser-control .browser-settings > button .checkbox svg {
		width: 1em;
		height: 1em;
	}
	.browser-control .browser-settings > button .checkbox svg > * {
		stroke: #fff;
		stroke-dasharray: 0 21;
		stroke-dashoffset: 1;
		transition-duration: .2s;
		transition-property: stroke-dasharray;
		will-change: stroke-dasharray;
	}
	.browser-control .browser-settings > button:hover:not(.active) {
		background-color: var(--nav-btn-hover-bg);
		color: var(--font-heading-clr);
	}
	.browser-control .browser-settings > button:focus,
	.browser-control .browser-settings > button:hover .checkbox,
	.browser-control .browser-settings > button.active .checkbox {
		border-color: var(--prime);
	}
	.browser-control .browser-settings > button.active {
		color: var(--font-heading-clr);
	}
	.browser-control .browser-settings > button.active .checkbox {
		background-color: var(--prime);
	}
	.browser-control .browser-settings > button.active .checkbox svg > * {
		stroke-dasharray: 21;
	}
	.browser-control .browser-settings hr {
		margin: .5em;
		border: none;
		border-top: var(--seperator-top);
		border-bottom: var(--seperator-bot);
	}



	/* URL bar .............................................................. */
	.url-bar {
		flex: 1 1 auto;
		align-content: stretch;
		align-items: stretch;
		font-size: .8em;
		padding: 0 1em;
		border-radius: 2em;
		background-color: var(--browser-controls-bg);
		border: solid 1px transparent;
		transition: .2s;
		transition-property: border-color;
	}
	.url-bar .protocol {
		height: 100%;
		opacity: .5;
	}
	.url-bar input {
		height: 100%;
		flex: 1 1 auto;
		outline: none;
		border: none;
		padding: 0;
	}
	.url-bar:hover:not(.active) {
		border-color: var(--btn-hover-border);
	}
	.url-bar.active {
		border-color: var(--prime);
	}



	/* Window in fullscreen mode ............................................ */
	#BrowserSim.fullscreen {
		padding: 0;
	}
	#BrowserSim.fullscreen .window {
		border-radius: 0;
	}
	#BrowserSim.fullscreen .window-controls {
		margin-left: .5em;
	}
	#BrowserSim.fullscreen .window-controls button svg {
		width: .75em;
		height: .75em;
	}
</style>
