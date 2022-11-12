
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as createEventDispatcher, o as onMount, a as defaultPageTransition, e as element, t as text, f as space, g as add_location, h as attr_dev, l as insert_dev, m as append_dev, n as listen_dev, p as set_data_dev, q as add_render_callback, r as create_bidirectional_transition, u as detach_dev } from './main-3d45f43b.js';

/* simple/routes/About.svelte generated by Svelte v3.52.0 */
const file = "simple/routes/About.svelte";

function create_fragment(ctx) {
	let div;
	let h1;
	let t0_value = /*props*/ ctx[0].nav.label + "";
	let t0;
	let t1;
	let h30;
	let t3;
	let p0;
	let t5;
	let h31;
	let t7;
	let p1;
	let div_transition;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			h30 = element("h3");
			h30.textContent = "What is Lorem Ipsum?";
			t3 = space();
			p0 = element("p");
			p0.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
			t5 = space();
			h31 = element("h3");
			h31.textContent = "Why do we use it?";
			t7 = space();
			p1 = element("p");
			p1.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
			add_location(h1, file, 13, 1, 322);
			add_location(h30, file, 15, 1, 351);
			add_location(p0, file, 16, 1, 382);
			add_location(h31, file, 18, 1, 966);
			add_location(p1, file, 19, 1, 994);
			attr_dev(div, "class", "page");
			add_location(div, file, 12, 0, 228);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t0);
			append_dev(div, t1);
			append_dev(div, h30);
			append_dev(div, t3);
			append_dev(div, p0);
			append_dev(div, t5);
			append_dev(div, h31);
			append_dev(div, t7);
			append_dev(div, p1);
			current = true;

			if (!mounted) {
				dispose = listen_dev(div, "outroend", /*outroend_handler*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*props*/ 1) && t0_value !== (t0_value = /*props*/ ctx[0].nav.label + "")) set_data_dev(t0, t0_value);
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('About', slots, []);
	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('hasOutro');
	});

	let { props } = $$props;

	$$self.$$.on_mount.push(function () {
		if (props === undefined && !('props' in $$props || $$self.$$.bound[$$self.$$.props['props']])) {
			console.warn("<About> was created without expected prop 'props'");
		}
	});

	const writable_props = ['props'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<About> was created with unknown prop '${key}'`);
	});

	const outroend_handler = () => dispatch('outroDone');

	$$self.$$set = $$props => {
		if ('props' in $$props) $$invalidate(0, props = $$props.props);
	};

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		dispatch,
		props
	});

	$$self.$inject_state = $$props => {
		if ('props' in $$props) $$invalidate(0, props = $$props.props);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [props, dispatch, outroend_handler];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { props: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}

	get props() {
		throw new Error("<About>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set props(value) {
		throw new Error("<About>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { About as default };
//# sourceMappingURL=About-9e064157.js.map
