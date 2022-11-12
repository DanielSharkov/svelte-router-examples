import { C as noop, s as safe_not_equal, S as SvelteComponentDev, i as init, d as dispatch_dev, e as element, a as svg_element, b as space, t as text, f as attr_dev, c as add_location, g as toggle_class, j as insert_dev, k as append_dev, l as listen_dev, m as set_data_dev, n as add_render_callback, o as create_bidirectional_transition, p as detach_dev, r as run_all, X as validate_store, Y as component_subscribe, v as validate_slots, q as createEventDispatcher, u as onMount, Z as get_store_value, w as defaultPageTransition, _ as subscribe } from './main-730211d8.js';

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                    subscriber[1]();
                    subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.add(subscriber);
        if (subscribers.size === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

/* simple/routes/RouterStruct.svelte generated by Svelte v3.52.0 */
const file = "simple/routes/RouterStruct.svelte";

// (79:4) {:else}
function create_else_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Add before push hook");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(79:4) {:else}",
		ctx
	});

	return block;
}

// (77:4) {#if isHookAdded}
function create_if_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Remove before push hook");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(77:4) {#if isHookAdded}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div2;
	let div1;
	let button;
	let svg;
	let path;
	let t0;
	let span0;
	let t1;
	let div0;
	let label;
	let t3;
	let input;
	let t4;
	let span1;
	let t6;
	let p;
	let t8;
	let h20;
	let t10;
	let pre0;
	let code0;
	let t11;
	let t12_value = JSON.stringify(/*$router*/ ctx[3].routes, null, 4) + "";
	let t12;
	let t13;
	let t14;
	let h21;
	let t16;
	let pre1;
	let code1;
	let t17;
	let t18_value = JSON.stringify(/*$router*/ ctx[3].location, null, 4) + "";
	let t18;
	let t19;
	let div2_transition;
	let current;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*isHookAdded*/ ctx[1]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			button = element("button");
			svg = svg_element("svg");
			path = svg_element("path");
			t0 = space();
			span0 = element("span");
			if_block.c();
			t1 = space();
			div0 = element("div");
			label = element("label");
			label.textContent = "Am I a real developer?";
			t3 = space();
			input = element("input");
			t4 = space();
			span1 = element("span");
			span1.textContent = `${isUserRealDev ? 'Yes' : 'Nope'}`;
			t6 = space();
			p = element("p");
			p.textContent = "This example before push hook will block you from visiting this site when you're not a developer. What are you waiting? Add that hook by the button and uncheck the checkbox! 🙂";
			t8 = space();
			h20 = element("h2");
			h20.textContent = "Registered routes";
			t10 = space();
			pre0 = element("pre");
			code0 = element("code");
			t11 = text("\n\t\t");
			t12 = text(t12_value);
			t13 = text("\n\t");
			t14 = space();
			h21 = element("h2");
			h21.textContent = "Current location";
			t16 = space();
			pre1 = element("pre");
			code1 = element("code");
			t17 = text("\n\t\t");
			t18 = text(t18_value);
			t19 = text("\n\t");
			attr_dev(path, "d", "M20 58H60M100 58H60M60 58V21M60 58V100");
			attr_dev(path, "stroke-width", "6");
			attr_dev(path, "stroke-linecap", "round");
			attr_dev(path, "class", "svelte-5j7f2j");
			add_location(path, file, 73, 4, 2382);
			attr_dev(svg, "class", "icon stroke icon-1 svelte-5j7f2j");
			attr_dev(svg, "viewBox", "0 0 120 120");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg, file, 72, 3, 2276);
			attr_dev(span0, "class", "label");
			add_location(span0, file, 75, 3, 2486);
			attr_dev(button, "class", "add-hook-btn flex flex-center gap-05 svelte-5j7f2j");
			toggle_class(button, "hook-added", /*isHookAdded*/ ctx[1]);
			add_location(button, file, 71, 2, 2166);
			attr_dev(label, "for", "IsUserRealDev");
			add_location(label, file, 84, 3, 2657);
			attr_dev(input, "type", "checkbox");
			attr_dev(input, "id", "IsUserRealDev");
			attr_dev(input, "class", "svelte-5j7f2j");
			add_location(input, file, 85, 3, 2718);
			add_location(span1, file, 89, 3, 2807);
			attr_dev(div0, "class", "dev-user svelte-5j7f2j");
			add_location(div0, file, 83, 2, 2631);
			add_location(p, file, 91, 2, 2862);
			attr_dev(div1, "class", "misc svelte-5j7f2j");
			add_location(div1, file, 70, 1, 2145);
			add_location(h20, file, 94, 1, 3056);
			attr_dev(code0, "class", "svelte-5j7f2j");
			add_location(code0, file, 95, 6, 3089);
			attr_dev(pre0, "class", "svelte-5j7f2j");
			add_location(pre0, file, 95, 1, 3084);
			add_location(h21, file, 99, 1, 3157);
			attr_dev(code1, "class", "svelte-5j7f2j");
			add_location(code1, file, 100, 6, 3189);
			attr_dev(pre1, "class", "svelte-5j7f2j");
			add_location(pre1, file, 100, 1, 3184);
			attr_dev(div2, "class", "page");
			add_location(div2, file, 69, 0, 2051);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, button);
			append_dev(button, svg);
			append_dev(svg, path);
			append_dev(button, t0);
			append_dev(button, span0);
			if_block.m(span0, null);
			append_dev(div1, t1);
			append_dev(div1, div0);
			append_dev(div0, label);
			append_dev(div0, t3);
			append_dev(div0, input);
			input.checked = /*$isUserRealDev*/ ctx[2];
			append_dev(div0, t4);
			append_dev(div0, span1);
			append_dev(div1, t6);
			append_dev(div1, p);
			append_dev(div2, t8);
			append_dev(div2, h20);
			append_dev(div2, t10);
			append_dev(div2, pre0);
			append_dev(pre0, code0);
			append_dev(code0, t11);
			append_dev(code0, t12);
			append_dev(code0, t13);
			append_dev(div2, t14);
			append_dev(div2, h21);
			append_dev(div2, t16);
			append_dev(div2, pre1);
			append_dev(pre1, code1);
			append_dev(code1, t17);
			append_dev(code1, t18);
			append_dev(code1, t19);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(button, "click", /*toggleHook*/ ctx[5], false, false, false),
					listen_dev(input, "change", /*input_change_handler*/ ctx[6]),
					listen_dev(div2, "outroend", /*outroend_handler*/ ctx[7], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(span0, null);
				}
			}

			if (!current || dirty & /*isHookAdded*/ 2) {
				toggle_class(button, "hook-added", /*isHookAdded*/ ctx[1]);
			}

			if (dirty & /*$isUserRealDev*/ 4) {
				input.checked = /*$isUserRealDev*/ ctx[2];
			}

			if ((!current || dirty & /*$router*/ 8) && t12_value !== (t12_value = JSON.stringify(/*$router*/ ctx[3].routes, null, 4) + "")) set_data_dev(t12, t12_value);
			if ((!current || dirty & /*$router*/ 8) && t18_value !== (t18_value = JSON.stringify(/*$router*/ ctx[3].location, null, 4) + "")) set_data_dev(t18, t18_value);
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div2_transition) div2_transition = create_bidirectional_transition(div2, defaultPageTransition, {}, true);
				div2_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div2_transition) div2_transition = create_bidirectional_transition(div2, defaultPageTransition, {}, false);
			div2_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if_block.d();
			if (detaching && div2_transition) div2_transition.end();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

let blockedVisits = 0;
let isUserRealDev = writable(true);
let rmvHook = writable(null);

function actualHook({ pendingRoute, resolve, reject }) {
	if (pendingRoute.name === 'router-struct') {
		if (!get_store_value(isUserRealDev) && blockedVisits < 2) {
			if (blockedVisits === 0) {
				alert(`Haha! You're not a real developer, you won't get in here. 😈 You dead-locked yourself out of this page and now you never gonna.... no, just kidding. Just retry and you'll get there. 🙂`);
			} else if (blockedVisits === 1) {
				alert(`Ha ha ha haa!! You still won't get in here! 😈 Alright, enough fun. Just retry, this time you really will get back in. 😄`);
			}

			blockedVisits++;

			if (blockedVisits === 2) {
				isUserRealDev.set(true);
			}

			return reject();
		}

		blockedVisits = 0;
	}

	resolve();
}

const HookID = 'app.svelte_hook';

function instance($$self, $$props, $$invalidate) {
	let $isUserRealDev;
	let $rmvHook;

	let $router,
		$$unsubscribe_router = noop,
		$$subscribe_router = () => ($$unsubscribe_router(), $$unsubscribe_router = subscribe(router, $$value => $$invalidate(3, $router = $$value)), router);

	validate_store(isUserRealDev, 'isUserRealDev');
	component_subscribe($$self, isUserRealDev, $$value => $$invalidate(2, $isUserRealDev = $$value));
	validate_store(rmvHook, 'rmvHook');
	component_subscribe($$self, rmvHook, $$value => $$invalidate(8, $rmvHook = $$value));
	$$self.$$.on_destroy.push(() => $$unsubscribe_router());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('RouterStruct', slots, []);
	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('hasOutro');
	});

	let { router } = $$props;
	validate_store(router, 'router');
	$$subscribe_router();
	let isHookAdded = hookDoesExist();

	function hookDoesExist() {
		try {
			const rm = router.addBeforePushHook(HookID, () => {
				
			});

			rm();
		} catch(_) {
			return true;
		}

		return false;
	}

	function addTestHook() {
		if (isHookAdded) return;
		rmvHook.set(router.addBeforePushHook(HookID, actualHook));
		blockedVisits = 0;
		$$invalidate(1, isHookAdded = !isHookAdded);
	}

	function removeTestHook() {
		if (!isHookAdded) return;
		$rmvHook();
		rmvHook.set(null);
		blockedVisits = 0;
		$$invalidate(1, isHookAdded = !isHookAdded);
	}

	function toggleHook() {
		if (isHookAdded) removeTestHook(); else addTestHook();
	}

	$$self.$$.on_mount.push(function () {
		if (router === undefined && !('router' in $$props || $$self.$$.bound[$$self.$$.props['router']])) {
			console.warn("<RouterStruct> was created without expected prop 'router'");
		}
	});

	const writable_props = ['router'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<RouterStruct> was created with unknown prop '${key}'`);
	});

	function input_change_handler() {
		$isUserRealDev = this.checked;
		isUserRealDev.set($isUserRealDev);
	}

	const outroend_handler = () => dispatch('outroDone');

	$$self.$$set = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router = $$props.router));
	};

	$$self.$capture_state = () => ({
		writable,
		getStore: get_store_value,
		blockedVisits,
		isUserRealDev,
		rmvHook,
		actualHook,
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		dispatch,
		router,
		HookID,
		isHookAdded,
		hookDoesExist,
		addTestHook,
		removeTestHook,
		toggleHook,
		$isUserRealDev,
		$rmvHook,
		$router
	});

	$$self.$inject_state = $$props => {
		if ('router' in $$props) $$subscribe_router($$invalidate(0, router = $$props.router));
		if ('isHookAdded' in $$props) $$invalidate(1, isHookAdded = $$props.isHookAdded);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$isUserRealDev, isHookAdded, router*/ 7) {
			if (!$isUserRealDev && isHookAdded) router.push('home');
		}
	};

	return [
		router,
		isHookAdded,
		$isUserRealDev,
		$router,
		dispatch,
		toggleHook,
		input_change_handler,
		outroend_handler
	];
}

class RouterStruct extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { router: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "RouterStruct",
			options,
			id: create_fragment.name
		});
	}

	get router() {
		throw new Error("<RouterStruct>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set router(value) {
		throw new Error("<RouterStruct>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { RouterStruct as default };
//# sourceMappingURL=RouterStruct-6573f404.js.map
