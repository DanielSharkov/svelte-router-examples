import { S as SvelteComponentDev, i as init, d as dispatch_dev, x as handle_promise, s as safe_not_equal, e as element, H as create_component, b as space, f as attr_dev, c as add_location, j as insert_dev, I as mount_component, k as append_dev, l as listen_dev, y as update_await_block_branch, z as transition_in, n as add_render_callback, A as transition_out, o as create_bidirectional_transition, p as detach_dev, J as destroy_component, v as validate_slots, q as createEventDispatcher, u as onMount, w as defaultPageTransition, t as text, C as noop } from './main-730211d8.js';
import { R as RouteLink } from './RouteLink-aeb0dabb.js';

/* simple/routes/Blog.svelte generated by Svelte v3.52.0 */
const file = "simple/routes/Blog.svelte";

// (26:1) <RouteLink to='blogs' id='BlogBack'>
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("< Back to all blog posts");
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
		id: create_default_slot.name,
		type: "slot",
		source: "(26:1) <RouteLink to='blogs' id='BlogBack'>",
		ctx
	});

	return block;
}

// (32:1) {:catch}
function create_catch_block(ctx) {
	let p;

	const block = {
		c: function create() {
			p = element("p");
			p.textContent = "Either something went is wrong or this blog post doesn't exist.";
			attr_dev(p, "class", "error svelte-1v8ny8s");
			add_location(p, file, 32, 2, 1009);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block.name,
		type: "catch",
		source: "(32:1) {:catch}",
		ctx
	});

	return block;
}

// (29:1) {:then blog}
function create_then_block(ctx) {
	let h1;
	let t0_value = /*blog*/ ctx[4].title + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*blog*/ ctx[4].post + "";
	let t2;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			p = element("p");
			t2 = text(t2_value);
			add_location(h1, file, 29, 2, 954);
			add_location(p, file, 30, 2, 978);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block.name,
		type: "then",
		source: "(29:1) {:then blog}",
		ctx
	});

	return block;
}

// (27:21)    <p class='placeholder'>Loading blog...</p>  {:then blog}
function create_pending_block(ctx) {
	let p;

	const block = {
		c: function create() {
			p = element("p");
			p.textContent = "Loading blog...";
			attr_dev(p, "class", "placeholder svelte-1v8ny8s");
			add_location(p, file, 27, 2, 895);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block.name,
		type: "pending",
		source: "(27:21)    <p class='placeholder'>Loading blog...</p>  {:then blog}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let routelink;
	let t;
	let div_transition;
	let current;
	let mounted;
	let dispose;

	routelink = new RouteLink({
			props: {
				to: "blogs",
				id: "BlogBack",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: true,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 4
	};

	handle_promise(/*fetchBlog*/ ctx[1](), info);

	const block = {
		c: function create() {
			div = element("div");
			create_component(routelink.$$.fragment);
			t = space();
			info.block.c();
			attr_dev(div, "class", "page");
			add_location(div, file, 24, 0, 701);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(routelink, div, null);
			append_dev(div, t);
			info.block.m(div, info.anchor = null);
			info.mount = () => div;
			info.anchor = null;
			current = true;

			if (!mounted) {
				dispose = listen_dev(div, "outroend", /*outroend_handler*/ ctx[3], false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;
			const routelink_changes = {};

			if (dirty & /*$$scope*/ 32) {
				routelink_changes.$$scope = { dirty, ctx };
			}

			routelink.$set(routelink_changes);
			update_await_block_branch(info, ctx, dirty);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(routelink.$$.fragment, local);

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(routelink.$$.fragment, local);
			if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(routelink);
			info.block.d();
			info.token = null;
			info = null;
			if (detaching && div_transition) div_transition.end();
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

const storedBlogs = {};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Blog', slots, []);
	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('hasOutro');
	});

	let { params } = $$props;

	async function fetchBlog() {
		if (params.id in storedBlogs) {
			return storedBlogs[params.id];
		}

		const resp = await fetch(`blog/${params.id}.json`);

		// simulate latency
		await new Promise(r => setTimeout(r, 500));

		const json = await resp.json();
		storedBlogs[params.id] = json;
		return json;
	}

	$$self.$$.on_mount.push(function () {
		if (params === undefined && !('params' in $$props || $$self.$$.bound[$$self.$$.props['params']])) {
			console.warn("<Blog> was created without expected prop 'params'");
		}
	});

	const writable_props = ['params'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	const outroend_handler = () => dispatch('outroDone');

	$$self.$$set = $$props => {
		if ('params' in $$props) $$invalidate(2, params = $$props.params);
	};

	$$self.$capture_state = () => ({
		storedBlogs,
		RouteLink,
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		dispatch,
		params,
		fetchBlog
	});

	$$self.$inject_state = $$props => {
		if ('params' in $$props) $$invalidate(2, params = $$props.params);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [dispatch, fetchBlog, params, outroend_handler];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { params: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});
	}

	get params() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set params(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Blog as default };
//# sourceMappingURL=Blog-5a9f2436.js.map
