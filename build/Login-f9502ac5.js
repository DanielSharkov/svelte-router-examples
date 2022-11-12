
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a0 as DB, B as validate_each_argument, v as validate_slots, c as createEventDispatcher, o as onMount, a1 as defaultPageTransition, e as element, f as space, h as attr_dev, g as add_location, l as insert_dev, m as append_dev, n as listen_dev, q as add_render_callback, r as create_bidirectional_transition, u as detach_dev, G as destroy_each, b as svg_element, t as text } from './main-bbe5dd49.js';

/* advanced/routes/Login.svelte generated by Svelte v3.52.0 */
const file = "advanced/routes/Login.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	return child_ctx;
}

// (20:2) {#each DB.usersToLoginTo() as user}
function create_each_block(ctx) {
	let button;
	let div;
	let svg;
	let path;
	let circle;
	let t0;
	let span;
	let t1_value = /*user*/ ctx[5].name + "";
	let t1;
	let t2;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[3](/*user*/ ctx[5]);
	}

	const block = {
		c: function create() {
			button = element("button");
			div = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			circle = svg_element("circle");
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			t2 = space();
			attr_dev(path, "d", "M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11");
			attr_dev(path, "stroke-width", "4");
			attr_dev(path, "stroke-linecap", "round");
			add_location(path, file, 23, 6, 863);
			attr_dev(circle, "cx", "60");
			attr_dev(circle, "cy", "34");
			attr_dev(circle, "r", "21");
			attr_dev(circle, "stroke-width", "4");
			attr_dev(circle, "stroke-linecap", "round");
			add_location(circle, file, 24, 6, 974);
			attr_dev(svg, "class", "icon stroke icon-1 svelte-1neoo7p");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "viewBox", "0 0 120 120");
			add_location(svg, file, 22, 5, 755);
			attr_dev(div, "class", "image flex flex-center svelte-1neoo7p");
			add_location(div, file, 21, 4, 713);
			attr_dev(span, "class", "name");
			add_location(span, file, 27, 4, 1074);
			attr_dev(button, "class", "user flex flex-center-y gap-1 svelte-1neoo7p");
			add_location(button, file, 20, 3, 627);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, div);
			append_dev(div, svg);
			append_dev(svg, path);
			append_dev(svg, circle);
			append_dev(button, t0);
			append_dev(button, span);
			append_dev(span, t1);
			append_dev(button, t2);

			if (!mounted) {
				dispose = listen_dev(button, "click", click_handler, false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(20:2) {#each DB.usersToLoginTo() as user}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let h1;
	let t1;
	let p;
	let t3;
	let div1_transition;
	let current;
	let mounted;
	let dispose;
	let each_value = DB.usersToLoginTo();
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			h1.textContent = "Login";
			t1 = space();
			p = element("p");
			p.textContent = "Pick a user you would like to login to:";
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(h1, "class", "title svelte-1neoo7p");
			add_location(h1, file, 16, 2, 490);
			attr_dev(p, "class", "subtitle svelte-1neoo7p");
			add_location(p, file, 17, 2, 521);
			attr_dev(div0, "class", "modal svelte-1neoo7p");
			add_location(div0, file, 15, 1, 468);
			attr_dev(div1, "id", "PageLogin");
			attr_dev(div1, "class", "flex svelte-1neoo7p");
			add_location(div1, file, 14, 0, 359);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(div0, t1);
			append_dev(div0, p);
			append_dev(div0, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(div1, "outroend", /*outroend_handler*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*loginUser, DB*/ 2) {
				each_value = DB.usersToLoginTo();
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div1_transition) div1_transition = create_bidirectional_transition(div1, defaultPageTransition, {}, true);
				div1_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div1_transition) div1_transition = create_bidirectional_transition(div1, defaultPageTransition, {}, false);
			div1_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks, detaching);
			if (detaching && div1_transition) div1_transition.end();
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
	validate_slots('Login', slots, []);
	const dispatch = createEventDispatcher();
	let { router } = $$props;

	onMount(() => {
		dispatch('hasOutro');
	});

	function loginUser(userID) {
		DB.loginUser(userID);
		router.push('timeline');
	}

	$$self.$$.on_mount.push(function () {
		if (router === undefined && !('router' in $$props || $$self.$$.bound[$$self.$$.props['router']])) {
			console.warn("<Login> was created without expected prop 'router'");
		}
	});

	const writable_props = ['router'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Login> was created with unknown prop '${key}'`);
	});

	const click_handler = user => loginUser(user.id);
	const outroend_handler = () => dispatch('outroDone');

	$$self.$$set = $$props => {
		if ('router' in $$props) $$invalidate(2, router = $$props.router);
	};

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		DB,
		dispatch,
		router,
		loginUser
	});

	$$self.$inject_state = $$props => {
		if ('router' in $$props) $$invalidate(2, router = $$props.router);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [dispatch, loginUser, router, click_handler, outroend_handler];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { router: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}

	get router() {
		throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set router(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Login as default };
//# sourceMappingURL=Login-f9502ac5.js.map
