
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, K as globals, L as create_slot, M as assign, v as validate_slots, N as getContext, O as exclude_internal_props, e as element, P as set_attributes, g as add_location, l as insert_dev, n as listen_dev, Q as stop_propagation, R as prevent_default, T as update_slot_base, U as get_all_dirty_from_scope, V as get_slot_changes, W as get_spread_update, z as transition_in, A as transition_out, u as detach_dev } from './main-ae947de4.js';

/* ../svelte-router/src/RouteLink.svelte generated by Svelte v3.52.0 */

const { Error: Error_1 } = globals;
const file = "../svelte-router/src/RouteLink.svelte";

function create_fragment(ctx) {
	let a;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
	let a_levels = [{ href: /*href*/ ctx[0] }, /*attrs*/ ctx[1]];
	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = assign(a_data, a_levels[i]);
	}

	const block = {
		c: function create() {
			a = element("a");
			if (default_slot) default_slot.c();
			set_attributes(a, a_data);
			add_location(a, file, 50, 0, 1120);
		},
		l: function claim(nodes) {
			throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(a, "click", stop_propagation(prevent_default(/*navigate*/ ctx[2])), false, true, true);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[6],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
						null
					);
				}
			}

			set_attributes(a, a_data = get_spread_update(a_levels, [
				(!current || dirty & /*href*/ 1) && { href: /*href*/ ctx[0] },
				/*attrs*/ ctx[1]
			]));
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('RouteLink', slots, ['default']);
	let { to } = $$props;
	let { params = undefined } = $$props;
	let { router = undefined } = $$props;

	if (typeof to !== 'string' || to.length < 1) {
		throw new Error('[SvelteRouter] <RouterLink> is missing the \"to\" prop');
	}

	const routerInstance = router || getContext('svelte_router');

	if (!routerInstance) {
		throw new Error('[SvelteRouter] <RouterLink> used outside a router instance <RouterViewport>');
	}

	const attrs = Object.assign({}, $$props);
	let href;

	// Catch missing parameters, throw error here to identify error
	try {
		href = routerInstance.nameToPath(to, params);
	} catch(err) {
		throw new Error(`[SvelteRouter] <RouterLink> (to: "${to}"): ` + err);
	}

	function removeAttrs() {
		delete attrs.to;
		delete attrs.params;
		delete attrs.$$slots;
		delete attrs.$$scope;
	}

	removeAttrs();

	function navigate() {
		if (!routerInstance) throw new Error('[SvelteRouter] <RouterLink> missing Router instance');

		try {
			routerInstance.push(to, params);
		} catch(err) {
			throw new Error(`[SvelteRouter] <RouterLink> (to: "${to}"): ` + err);
		}
	}

	$$self.$$.on_mount.push(function () {
		if (to === undefined && !('to' in $$props || $$self.$$.bound[$$self.$$.props['to']])) {
			console.warn("<RouteLink> was created without expected prop 'to'");
		}
	});

	$$self.$$set = $$new_props => {
		$$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('to' in $$new_props) $$invalidate(3, to = $$new_props.to);
		if ('params' in $$new_props) $$invalidate(4, params = $$new_props.params);
		if ('router' in $$new_props) $$invalidate(5, router = $$new_props.router);
		if ('$$scope' in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		getContext,
		to,
		params,
		router,
		routerInstance,
		attrs,
		href,
		removeAttrs,
		navigate
	});

	$$self.$inject_state = $$new_props => {
		$$invalidate(10, $$props = assign(assign({}, $$props), $$new_props));
		if ('to' in $$props) $$invalidate(3, to = $$new_props.to);
		if ('params' in $$props) $$invalidate(4, params = $$new_props.params);
		if ('router' in $$props) $$invalidate(5, router = $$new_props.router);
		if ('href' in $$props) $$invalidate(0, href = $$new_props.href);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$props = exclude_internal_props($$props);
	return [href, attrs, navigate, to, params, router, $$scope, slots];
}

class RouteLink extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { to: 3, params: 4, router: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "RouteLink",
			options,
			id: create_fragment.name
		});
	}

	get to() {
		throw new Error_1("<RouteLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set to(value) {
		throw new Error_1("<RouteLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get params() {
		throw new Error_1("<RouteLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set params(value) {
		throw new Error_1("<RouteLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get router() {
		throw new Error_1("<RouteLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set router(value) {
		throw new Error_1("<RouteLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { RouteLink as R };
//# sourceMappingURL=RouteLink-09ea5652.js.map
