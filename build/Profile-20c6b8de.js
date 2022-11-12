
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, X as validate_store, Y as component_subscribe, v as validate_slots, c as createEventDispatcher, o as onMount, a0 as DB, a1 as defaultPageTransition, e as element, h as attr_dev, g as add_location, l as insert_dev, n as listen_dev, z as transition_in, q as add_render_callback, r as create_bidirectional_transition, A as transition_out, u as detach_dev, B as validate_each_argument, f as space, b as svg_element, m as append_dev, E as group_outros, F as check_outros, G as destroy_each, C as noop, H as create_component, I as mount_component, J as destroy_component } from './main-3d45f43b.js';
import { P as Post } from './Post-b8ad814b.js';
import './Thread-b5f41c85.js';

/* advanced/routes/Profile.svelte generated by Svelte v3.52.0 */
const file = "advanced/routes/Profile.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (27:1) {:else}
function create_else_block(ctx) {
	let div0;
	let t0;
	let div3;
	let div2;
	let div1;
	let svg;
	let path;
	let circle;
	let t1;
	let span0;
	let t3;
	let div5;
	let div4;
	let span1;
	let t5;
	let span2;
	let t7;
	let t8;
	let div6;
	let current;
	let if_block = /*$DB*/ ctx[2].session === /*params*/ ctx[0].userID && create_if_block_1(ctx);
	let each_value = /*profilePosts*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			div0 = element("div");
			t0 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			circle = svg_element("circle");
			t1 = space();
			span0 = element("span");
			span0.textContent = `${/*profile*/ ctx[4].name}`;
			t3 = space();
			div5 = element("div");
			div4 = element("div");
			span1 = element("span");
			span1.textContent = "Username:";
			t5 = space();
			span2 = element("span");
			span2.textContent = `${/*profile*/ ctx[4].username}`;
			t7 = space();
			if (if_block) if_block.c();
			t8 = space();
			div6 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(div0, "class", "profile-banner svelte-i6qzym");
			add_location(div0, file, 27, 2, 717);
			attr_dev(path, "d", "M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11");
			attr_dev(path, "stroke-width", "2");
			attr_dev(path, "stroke-linecap", "round");
			attr_dev(path, "class", "svelte-i6qzym");
			add_location(path, file, 32, 6, 1011);
			attr_dev(circle, "cx", "60");
			attr_dev(circle, "cy", "34");
			attr_dev(circle, "r", "21");
			attr_dev(circle, "stroke-width", "2");
			attr_dev(circle, "stroke-linecap", "round");
			attr_dev(circle, "class", "svelte-i6qzym");
			add_location(circle, file, 33, 6, 1122);
			attr_dev(svg, "class", "icon stroke icon-1 svelte-i6qzym");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "viewBox", "0 0 120 120");
			add_location(svg, file, 31, 5, 903);
			attr_dev(div1, "class", "profile-image flex flex-center svelte-i6qzym");
			add_location(div1, file, 30, 4, 853);
			attr_dev(div2, "class", "profile-image-container svelte-i6qzym");
			add_location(div2, file, 29, 3, 811);
			attr_dev(span0, "class", "profile-name svelte-i6qzym");
			add_location(span0, file, 37, 3, 1231);
			attr_dev(div3, "class", "profile-header flex flex-center-y gap-2 svelte-i6qzym");
			add_location(div3, file, 28, 2, 754);
			attr_dev(span1, "class", "label svelte-i6qzym");
			add_location(span1, file, 42, 4, 1374);
			attr_dev(span2, "class", "value");
			add_location(span2, file, 43, 4, 1415);
			attr_dev(div4, "class", "field flex flex-center-y gap-1");
			add_location(div4, file, 41, 3, 1325);
			attr_dev(div5, "class", "profile-details svelte-i6qzym");
			add_location(div5, file, 40, 2, 1292);
			attr_dev(div6, "class", "profile-posts");
			add_location(div6, file, 73, 2, 2441);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, svg);
			append_dev(svg, path);
			append_dev(svg, circle);
			append_dev(div3, t1);
			append_dev(div3, span0);
			insert_dev(target, t3, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, div4);
			append_dev(div4, span1);
			append_dev(div4, t5);
			append_dev(div4, span2);
			append_dev(div5, t7);
			if (if_block) if_block.m(div5, null);
			insert_dev(target, t8, anchor);
			insert_dev(target, div6, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div6, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*$DB*/ ctx[2].session === /*params*/ ctx[0].userID) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(div5, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*profilePosts*/ 2) {
				each_value = /*profilePosts*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div6, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div3);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div5);
			if (if_block) if_block.d();
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(div6);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(27:1) {:else}",
		ctx
	});

	return block;
}

// (25:1) {#if !profile}
function create_if_block(ctx) {
	let p;

	const block = {
		c: function create() {
			p = element("p");
			p.textContent = "The user you're looking for doesn't exist";
			attr_dev(p, "class", "not-existing svelte-i6qzym");
			add_location(p, file, 25, 2, 636);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(25:1) {#if !profile}",
		ctx
	});

	return block;
}

// (46:3) {#if $DB.session === params.userID}
function create_if_block_1(ctx) {
	let div0;
	let span0;
	let t1;
	let span1;
	let t3;
	let div1;
	let span2;
	let t5;
	let span3;
	let t7;
	let div2;
	let span4;
	let t9;
	let span5;
	let t11;
	let div3;
	let span6;
	let t13;
	let span7;
	let t15;
	let div4;
	let span8;
	let t17;
	let span9;
	let t19;
	let div5;
	let span10;
	let t21;
	let span11;

	const block = {
		c: function create() {
			div0 = element("div");
			span0 = element("span");
			span0.textContent = "Email:";
			t1 = space();
			span1 = element("span");
			span1.textContent = `${/*profile*/ ctx[4].email}`;
			t3 = space();
			div1 = element("div");
			span2 = element("span");
			span2.textContent = "Phone:";
			t5 = space();
			span3 = element("span");
			span3.textContent = `${/*profile*/ ctx[4].phone}`;
			t7 = space();
			div2 = element("div");
			span4 = element("span");
			span4.textContent = "Street:";
			t9 = space();
			span5 = element("span");
			span5.textContent = `${/*profile*/ ctx[4].address.street}`;
			t11 = space();
			div3 = element("div");
			span6 = element("span");
			span6.textContent = "Suite:";
			t13 = space();
			span7 = element("span");
			span7.textContent = `${/*profile*/ ctx[4].address.suite}`;
			t15 = space();
			div4 = element("div");
			span8 = element("span");
			span8.textContent = "City:";
			t17 = space();
			span9 = element("span");
			span9.textContent = `${/*profile*/ ctx[4].address.city}`;
			t19 = space();
			div5 = element("div");
			span10 = element("span");
			span10.textContent = "Zip:";
			t21 = space();
			span11 = element("span");
			span11.textContent = `${/*profile*/ ctx[4].address.zip}`;
			attr_dev(span0, "class", "label svelte-i6qzym");
			add_location(span0, file, 47, 5, 1564);
			attr_dev(span1, "class", "value");
			add_location(span1, file, 48, 5, 1603);
			attr_dev(div0, "class", "field flex flex-center-y gap-1");
			add_location(div0, file, 46, 4, 1514);
			attr_dev(span2, "class", "label svelte-i6qzym");
			add_location(span2, file, 51, 5, 1711);
			attr_dev(span3, "class", "value");
			add_location(span3, file, 52, 5, 1750);
			attr_dev(div1, "class", "field flex flex-center-y gap-1");
			add_location(div1, file, 50, 4, 1661);
			attr_dev(span4, "class", "label svelte-i6qzym");
			add_location(span4, file, 55, 5, 1858);
			attr_dev(span5, "class", "value");
			add_location(span5, file, 56, 5, 1898);
			attr_dev(div2, "class", "field flex flex-center-y gap-1");
			add_location(div2, file, 54, 4, 1808);
			attr_dev(span6, "class", "label svelte-i6qzym");
			add_location(span6, file, 59, 5, 2015);
			attr_dev(span7, "class", "value");
			add_location(span7, file, 60, 5, 2054);
			attr_dev(div3, "class", "field flex flex-center-y gap-1");
			add_location(div3, file, 58, 4, 1965);
			attr_dev(span8, "class", "label svelte-i6qzym");
			add_location(span8, file, 63, 5, 2170);
			attr_dev(span9, "class", "value");
			add_location(span9, file, 64, 5, 2208);
			attr_dev(div4, "class", "field flex flex-center-y gap-1");
			add_location(div4, file, 62, 4, 2120);
			attr_dev(span10, "class", "label svelte-i6qzym");
			add_location(span10, file, 67, 5, 2323);
			attr_dev(span11, "class", "value");
			add_location(span11, file, 68, 5, 2360);
			attr_dev(div5, "class", "field flex flex-center-y gap-1");
			add_location(div5, file, 66, 4, 2273);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, span0);
			append_dev(div0, t1);
			append_dev(div0, span1);
			insert_dev(target, t3, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, span2);
			append_dev(div1, t5);
			append_dev(div1, span3);
			insert_dev(target, t7, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, span4);
			append_dev(div2, t9);
			append_dev(div2, span5);
			insert_dev(target, t11, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, span6);
			append_dev(div3, t13);
			append_dev(div3, span7);
			insert_dev(target, t15, anchor);
			insert_dev(target, div4, anchor);
			append_dev(div4, span8);
			append_dev(div4, t17);
			append_dev(div4, span9);
			insert_dev(target, t19, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, span10);
			append_dev(div5, t21);
			append_dev(div5, span11);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(div3);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(div4);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(div5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(46:3) {#if $DB.session === params.userID}",
		ctx
	});

	return block;
}

// (75:3) {#each profilePosts as post}
function create_each_block(ctx) {
	let post;
	let current;

	post = new Post({
			props: { post: /*post*/ ctx[7] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(post.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(post, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const post_changes = {};
			if (dirty & /*profilePosts*/ 2) post_changes.post = /*post*/ ctx[7];
			post.$set(post_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(post.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(post.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(post, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(75:3) {#each profilePosts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let current_block_type_index;
	let if_block;
	let div_transition;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (!/*profile*/ ctx[4]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			div = element("div");
			if_block.c();
			attr_dev(div, "id", "PageProfile");
			attr_dev(div, "class", "page");
			add_location(div, file, 23, 0, 508);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(div, "outroend", /*outroend_handler*/ ctx[5], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if_block.p(ctx, dirty);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			if (!div_transition) div_transition = create_bidirectional_transition(div, defaultPageTransition, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_blocks[current_block_type_index].d();
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
	let $DB;
	validate_store(DB, 'DB');
	component_subscribe($$self, DB, $$value => $$invalidate(2, $DB = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Profile', slots, []);
	let { params } = $$props;
	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('hasOutro');
	});

	let profilePosts = [];

	function fetchProfilePosts() {
		$$invalidate(1, profilePosts = DB.postsByUser(params.userID));
		$$invalidate(1, profilePosts);
	}

	fetchProfilePosts();
	const profile = DB.userByID(params.userID);

	$$self.$$.on_mount.push(function () {
		if (params === undefined && !('params' in $$props || $$self.$$.bound[$$self.$$.props['params']])) {
			console.warn("<Profile> was created without expected prop 'params'");
		}
	});

	const writable_props = ['params'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Profile> was created with unknown prop '${key}'`);
	});

	const outroend_handler = () => dispatch('outroDone');

	$$self.$$set = $$props => {
		if ('params' in $$props) $$invalidate(0, params = $$props.params);
	};

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		Post,
		DB,
		params,
		dispatch,
		profilePosts,
		fetchProfilePosts,
		profile,
		$DB
	});

	$$self.$inject_state = $$props => {
		if ('params' in $$props) $$invalidate(0, params = $$props.params);
		if ('profilePosts' in $$props) $$invalidate(1, profilePosts = $$props.profilePosts);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [params, profilePosts, $DB, dispatch, profile, outroend_handler];
}

class Profile extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { params: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Profile",
			options,
			id: create_fragment.name
		});
	}

	get params() {
		throw new Error("<Profile>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set params(value) {
		throw new Error("<Profile>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Profile as default };
//# sourceMappingURL=Profile-20c6b8de.js.map
