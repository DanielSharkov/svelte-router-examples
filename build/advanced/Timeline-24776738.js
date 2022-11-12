import { S as SvelteComponentDev, i as init, d as dispatch_dev, v as validate_each_argument, s as safe_not_equal, e as element, a as space, b as attr_dev, c as add_location, f as insert_dev, g as append_dev, l as listen_dev, u as transition_out, w as check_outros, x as transition_in, h as add_render_callback, y as create_out_transition, k as detach_dev, m as destroy_each, z as validate_store, A as component_subscribe, n as validate_slots, o as createEventDispatcher, p as onMount, q as defaultPageTransition, B as cubicInOut, D as DB, C as create_component, E as mount_component, F as destroy_component, t as text, G as set_data_dev, H as group_outros, I as create_in_transition, J as noop, j as create_bidirectional_transition, K as set_input_value, L as run_all } from './main-5e9304a6.js';
import { P as Post } from './Post-2902d2df.js';
import './Thread-34ab3f95.js';

/* advanced/routes/Timeline.svelte generated by Svelte v3.52.0 */
const file = "advanced/routes/Timeline.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[16] = list[i];
	return child_ctx;
}

// (75:2) {:else}
function create_else_block(ctx) {
	let button;
	let button_transition;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			button.textContent = "+ Create a new post";
			attr_dev(button, "class", "start-drafting svelte-ci91df");
			add_location(button, file, 75, 3, 2070);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler_1*/ ctx[14], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!button_transition) button_transition = create_bidirectional_transition(button, /*newPostAnim*/ ctx[10], {}, true);
				button_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!button_transition) button_transition = create_bidirectional_transition(button, /*newPostAnim*/ ctx[10], {}, false);
			button_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			if (detaching && button_transition) button_transition.end();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(75:2) {:else}",
		ctx
	});

	return block;
}

// (53:2) {#if wantToDraftPost}
function create_if_block_1(ctx) {
	let div1;
	let input;
	let t0;
	let textarea;
	let t1;
	let div0;
	let button0;
	let t3;
	let button1;
	let div1_transition;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div1 = element("div");
			input = element("input");
			t0 = space();
			textarea = element("textarea");
			t1 = space();
			div0 = element("div");
			button0 = element("button");
			button0.textContent = "Close";
			t3 = space();
			button1 = element("button");
			button1.textContent = "Post to the timeline";
			attr_dev(input, "type", "text");
			attr_dev(input, "name", "post-title");
			attr_dev(input, "placeholder", "Title...");
			attr_dev(input, "class", "svelte-ci91df");
			add_location(input, file, 54, 4, 1574);
			attr_dev(textarea, "name", "post-message");
			attr_dev(textarea, "rows", "6");
			attr_dev(textarea, "placeholder", "Message...");
			attr_dev(textarea, "class", "svelte-ci91df");
			add_location(textarea, file, 59, 4, 1686);
			add_location(button0, file, 66, 5, 1855);
			attr_dev(button1, "class", "flex-self-right");
			add_location(button1, file, 69, 5, 1936);
			attr_dev(div0, "class", "actions flex flex-center-y");
			add_location(div0, file, 65, 4, 1809);
			attr_dev(div1, "class", "new-post-form svelte-ci91df");
			add_location(div1, file, 53, 3, 1519);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, input);
			set_input_value(input, /*newPostTitle*/ ctx[4]);
			append_dev(div1, t0);
			append_dev(div1, textarea);
			set_input_value(textarea, /*newPostMessage*/ ctx[5]);
			append_dev(div1, t1);
			append_dev(div1, div0);
			append_dev(div0, button0);
			append_dev(div0, t3);
			append_dev(div0, button1);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(input, "input", /*input_input_handler*/ ctx[11]),
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[12]),
					listen_dev(button0, "click", /*click_handler*/ ctx[13], false, false, false),
					listen_dev(button1, "click", /*submitNewPost*/ ctx[9], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*newPostTitle*/ 16 && input.value !== /*newPostTitle*/ ctx[4]) {
				set_input_value(input, /*newPostTitle*/ ctx[4]);
			}

			if (dirty & /*newPostMessage*/ 32) {
				set_input_value(textarea, /*newPostMessage*/ ctx[5]);
			}
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div1_transition) div1_transition = create_bidirectional_transition(div1, /*newPostAnim*/ ctx[10], {}, true);
				div1_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div1_transition) div1_transition = create_bidirectional_transition(div1, /*newPostAnim*/ ctx[10], {}, false);
			div1_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (detaching && div1_transition) div1_transition.end();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(53:2) {#if wantToDraftPost}",
		ctx
	});

	return block;
}

// (83:1) {#each posts as post}
function create_each_block(ctx) {
	let post;
	let current;

	post = new Post({
			props: { post: /*post*/ ctx[16] },
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
			if (dirty & /*posts*/ 4) post_changes.post = /*post*/ ctx[16];
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
		source: "(83:1) {#each posts as post}",
		ctx
	});

	return block;
}

// (84:1) {#if isLastPostReached}
function create_if_block(ctx) {
	let button;
	let t0;
	let t1_value = /*$DB*/ ctx[1].posts.length - /*offset*/ ctx[0] + "";
	let t1;
	let t2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t0 = text("Load more posts (");
			t1 = text(t1_value);
			t2 = text(" available)");
			attr_dev(button, "class", "load-more svelte-ci91df");
			add_location(button, file, 84, 2, 2292);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t0);
			append_dev(button, t1);
			append_dev(button, t2);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*fetchPosts*/ ctx[8], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$DB, offset*/ 3 && t1_value !== (t1_value = /*$DB*/ ctx[1].posts.length - /*offset*/ ctx[0] + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(84:1) {#if isLastPostReached}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let current_block_type_index;
	let if_block0;
	let t0;
	let t1;
	let div1_intro;
	let div1_outro;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*wantToDraftPost*/ ctx[3]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let each_value = /*posts*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block1 = /*isLastPostReached*/ ctx[6] && create_if_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			if_block0.c();
			t0 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			if (if_block1) if_block1.c();
			attr_dev(div0, "class", "new-post svelte-ci91df");
			add_location(div0, file, 51, 1, 1469);
			attr_dev(div1, "id", "PageTimeline");
			attr_dev(div1, "class", "page");
			add_location(div1, file, 47, 0, 1324);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			if_blocks[current_block_type_index].m(div0, null);
			append_dev(div1, t0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			append_dev(div1, t1);
			if (if_block1) if_block1.m(div1, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(div1, "outroend", /*outroend_handler*/ ctx[15], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block0 = if_blocks[current_block_type_index];

				if (!if_block0) {
					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block0.c();
				} else {
					if_block0.p(ctx, dirty);
				}

				transition_in(if_block0, 1);
				if_block0.m(div0, null);
			}

			if (dirty & /*posts*/ 4) {
				each_value = /*posts*/ ctx[2];
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
						each_blocks[i].m(div1, t1);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (/*isLastPostReached*/ ctx[6]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			add_render_callback(() => {
				if (div1_outro) div1_outro.end(1);
				div1_intro = create_in_transition(div1, defaultPageTransition, {});
				div1_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			if (div1_intro) div1_intro.invalidate();
			div1_outro = create_out_transition(div1, defaultPageTransition, { delay: 450 });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if_blocks[current_block_type_index].d();
			destroy_each(each_blocks, detaching);
			if (if_block1) if_block1.d();
			if (detaching && div1_outro) div1_outro.end();
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
	let isLastPostReached;
	let $DB;
	validate_store(DB, 'DB');
	component_subscribe($$self, DB, $$value => $$invalidate(1, $DB = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Timeline', slots, []);
	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('hasOutro');
	});

	let posts = [];
	let offset = 0;

	function fetchPosts() {
		const newOffset = $DB.posts.length < offset + 10
		? $DB.posts.length
		: offset + 10;

		$$invalidate(2, posts = posts.concat($DB.posts.slice(offset, newOffset)));
		$$invalidate(0, offset = newOffset);
		$$invalidate(2, posts);
	}

	fetchPosts();
	let wantToDraftPost = false;
	let newPostTitle = '';
	let newPostMessage = '';

	function submitNewPost() {
		if (newPostTitle === '' || newPostMessage === '') {
			return;
		}

		posts.splice(0, 0, DB.submitNewPost(newPostTitle, newPostMessage));
		$$invalidate(4, newPostTitle = '');
		$$invalidate(5, newPostMessage = '');
		$$invalidate(3, wantToDraftPost = false);
		$$invalidate(2, posts);
	}

	function newPostAnim(node, o) {
		const height = node.offsetHeight;

		return {
			duration: 600,
			css(t) {
				t = cubicInOut(t);
				return `height: ${height * t}px;` + `padding: ${20 * t}px 20px;` + `opacity: ${t};`;
			}
		};
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Timeline> was created with unknown prop '${key}'`);
	});

	function input_input_handler() {
		newPostTitle = this.value;
		$$invalidate(4, newPostTitle);
	}

	function textarea_input_handler() {
		newPostMessage = this.value;
		$$invalidate(5, newPostMessage);
	}

	const click_handler = () => $$invalidate(3, wantToDraftPost = false);
	const click_handler_1 = () => $$invalidate(3, wantToDraftPost = true);
	const outroend_handler = () => dispatch('outroDone');

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		defaultPageTransition,
		Post,
		cubicInOut,
		DB,
		dispatch,
		posts,
		offset,
		fetchPosts,
		wantToDraftPost,
		newPostTitle,
		newPostMessage,
		submitNewPost,
		newPostAnim,
		isLastPostReached,
		$DB
	});

	$$self.$inject_state = $$props => {
		if ('posts' in $$props) $$invalidate(2, posts = $$props.posts);
		if ('offset' in $$props) $$invalidate(0, offset = $$props.offset);
		if ('wantToDraftPost' in $$props) $$invalidate(3, wantToDraftPost = $$props.wantToDraftPost);
		if ('newPostTitle' in $$props) $$invalidate(4, newPostTitle = $$props.newPostTitle);
		if ('newPostMessage' in $$props) $$invalidate(5, newPostMessage = $$props.newPostMessage);
		if ('isLastPostReached' in $$props) $$invalidate(6, isLastPostReached = $$props.isLastPostReached);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$DB, offset*/ 3) {
			$$invalidate(6, isLastPostReached = $DB.posts.length > offset);
		}
	};

	return [
		offset,
		$DB,
		posts,
		wantToDraftPost,
		newPostTitle,
		newPostMessage,
		isLastPostReached,
		dispatch,
		fetchPosts,
		submitNewPost,
		newPostAnim,
		input_input_handler,
		textarea_input_handler,
		click_handler,
		click_handler_1,
		outroend_handler
	];
}

class Timeline extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Timeline",
			options,
			id: create_fragment.name
		});
	}
}

export { Timeline as default };
//# sourceMappingURL=Timeline-24776738.js.map
