import type {RouterNavigator} from '@danielsharkov/svelte-router'
import {Readable, writable, Writable, get as getStore, derived} from 'svelte/store'

export type HistoryState = {
	url: string
	state: any
}

export type T_FakeWindow = {
	pathname: string
	search: string
	historyStack: Array<HistoryState>
	currentHistory: number
}

function parseURL(url: string) {
	const searchIndex = url.indexOf('?')
	if (searchIndex >= 0) {
		return {
			pathname: url.substring(0, searchIndex),
			search: url.substring(searchIndex, url.length),
		}
	}
	return {pathname: url, search: ''}
}

export class FakeWindow implements RouterNavigator, Readable<T_FakeWindow> {
	#store: Writable<T_FakeWindow> = writable({
		pathname: '/',
		search: '',
		historyStack: [],
		currentHistory: 0,
	})
	public readonly subscribe = this.#store.subscribe

	#update(fn: ($: T_FakeWindow)=> T_FakeWindow) {
		this.#store.update(($)=> {
			$ = fn($)
			this.history.state = $.historyStack[$.currentHistory].state
			this._runOnChangeCallbacks($)
			return $
		})
	}

	#getStore(): T_FakeWindow {
		return getStore(this.#store)
	}

	private _window: Element

	constructor(
		window: Element,
		initialState?: {history: Array<HistoryState>, index: number},
	) {
		this._window = window
		this.scrollTo = this._window.scrollTo.bind(this._window)
		this.dispatchEvent = this._window.dispatchEvent.bind(this._window)
		this.addEventListener = this._window.addEventListener.bind(this._window)
		this.removeEventListener = this._window.removeEventListener.bind(this._window)

		if (
			initialState &&
			Array.isArray(initialState.history) &&
			initialState.history.length > 0
		) {
			this.#store.update(($)=> {
				$.historyStack = initialState.history
				$.currentHistory = (
					!Number.isNaN(Number(initialState.index)) ?
						Number(initialState.index)
						: initialState.history.length - 1
				)
				const {pathname, search} = parseURL(
					initialState.history[$.currentHistory].url
				)
				$.pathname = pathname
				$.search = search
				this.history.state = $.historyStack[$.currentHistory]
				return $
			})
		}
	}
	public scrollTo: typeof this._window.scrollTo
	public dispatchEvent: typeof this._window.dispatchEvent
	public addEventListener: typeof this._window.addEventListener
	public removeEventListener: typeof this._window.removeEventListener

	get location() {
		const $ = this.#getStore()
		return {pathname: $.pathname, search: $.search}
	}

	public readonly history = {
		state: null, // get's automatically updated by this.#update()
		go: this._go.bind(this),
		back: this._back.bind(this),
		forward: this._forward.bind(this),
		pushState: this._pushState.bind(this),
		replaceState: this._replaceState.bind(this),
	}

	private _go(n: number) {
		this.#update(($)=> {
			if (
				$.currentHistory + n >= 0 &&
				$.currentHistory + n < $.historyStack.length
			) {
				$.currentHistory += n
				this.dispatchEvent(
					new PopStateEvent(
						'popstate', {
							state: $.historyStack[$.currentHistory].state
						},
					)
				)
			}
			return $
		})
	}

	private _back() {
		this.#update(($)=> {
			if ($.currentHistory > 0) {
				$.currentHistory--
				this.dispatchEvent(
					new PopStateEvent(
						'popstate', {
							state: $.historyStack[$.currentHistory].state
						},
					)
				)
			}
			return $
		})
	}

	private _forward() {
		this.#update(($)=> {
			if ($.currentHistory < $.historyStack.length-1) {
				$.currentHistory++
				this.dispatchEvent(
					new PopStateEvent(
						'popstate', {
							state: $.historyStack[$.currentHistory].state
						},
					)
				)
			}
			return $
		})
	}

	private _pushState(data: any, _: string, url?: string | URL | null) {
		this.#update(($)=> {
			// override history stack
			if ($.currentHistory !== $.historyStack.length-1) {
				$.historyStack.splice(
					$.currentHistory + 1,
					$.historyStack.length - $.currentHistory,
				)
			}

			if (typeof url === 'string') {
				const {pathname, search} = parseURL(url)
				$.pathname = pathname
				$.search = search
			}
			else if (url !== null) {
				$.pathname = url.pathname
				$.search = url.search
			}

			let currentURL = $.pathname + $.search
			if (url) {
				currentURL = typeof url === 'string' ? url : url.toString()
			}

			$.historyStack.push({url: currentURL, state: data})
			$.currentHistory = $.historyStack.length-1

			return $
		})
	}

	private _replaceState(data: any, _: string, url?: string | URL | null) {
		this.#update(($)=> {
			let currentURL = $.historyStack[$.currentHistory]?.url
			if (url) {
				currentURL = typeof url === 'string' ? url : url.toString()
			}

			$.historyStack[$.currentHistory] = {
				url: currentURL, state: data,
			}

			return $
		})
	}

	// optional implementation
	private onChangeCallbacks: Array<($: T_FakeWindow)=> void> = []
	public onChange(fn: ($: T_FakeWindow)=> void) {
		this.onChangeCallbacks.push(fn)
	}

	private _runOnChangeCallbacks($: T_FakeWindow) {
		for (const fn of this.onChangeCallbacks) fn($)
	}

	public resetHistory() {
		this.#update(($)=> {
			$.pathname = '/'
			$.search = ''
			$.historyStack = [$.historyStack[0]]
			$.currentHistory = 0
			this.dispatchEvent(
				new PopStateEvent(
					'popstate', {
						state: $.historyStack[$.currentHistory].state
					},
				)
			)
			return $
		})
	}
}
