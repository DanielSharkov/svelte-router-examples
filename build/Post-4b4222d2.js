
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a0 as DB, X as validate_store, Y as component_subscribe, v as validate_slots, a6 as CommentEntity, a7 as routerInstance, e as element, b as svg_element, f as space, t as text, h as attr_dev, g as add_location, l as insert_dev, m as append_dev, n as listen_dev, p as set_data_dev, E as group_outros, A as transition_out, F as check_outros, z as transition_in, u as detach_dev, C as noop, B as validate_each_argument, D as empty, G as destroy_each, H as create_component, I as mount_component, J as destroy_component, a5 as set_input_value, w as run_all } from './main-926b0e75.js';
import { T as Thread } from './Thread-7d614952.js';

/* advanced/components/Post.svelte generated by Svelte v3.52.0 */
const file = "advanced/components/Post.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	return child_ctx;
}

// (44:3) {#if post.userID === $DB.session}
function create_if_block_4(ctx) {
	let span;

	const block = {
		c: function create() {
			span = element("span");
			span.textContent = "You";
			attr_dev(span, "class", "is-session-user svelte-pbmq0h");
			add_location(span, file, 44, 4, 1561);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4.name,
		type: "if",
		source: "(44:3) {#if post.userID === $DB.session}",
		ctx
	});

	return block;
}

// (48:2) {#if !isPage}
function create_if_block_3(ctx) {
	let button;
	let svg;
	let path0;
	let path1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			svg = svg_element("svg");
			path0 = svg_element("path");
			path1 = svg_element("path");
			attr_dev(path0, "d", "M57.7778 25H35C29.4772 25 25 29.4772 25 35V85C25 90.5228 29.4772 95 35 95H85C90.5228 95 95 90.5228 95 85V62.2222");
			attr_dev(path0, "stroke-width", "6");
			attr_dev(path0, "stroke-linecap", "round");
			attr_dev(path0, "class", "svelte-pbmq0h");
			add_location(path0, file, 50, 5, 1837);
			attr_dev(path1, "d", "M105 15L60 60M105 15L105 45M105 15L75 15");
			attr_dev(path1, "stroke-width", "6");
			attr_dev(path1, "stroke-linecap", "round");
			attr_dev(path1, "class", "svelte-pbmq0h");
			add_location(path1, file, 51, 5, 2007);
			attr_dev(svg, "class", "icon stroke icon-1 svelte-pbmq0h");
			attr_dev(svg, "viewBox", "0 0 120 120");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg, file, 49, 4, 1730);
			attr_dev(button, "class", "open-page flex flex-center flex-self-right svelte-pbmq0h");
			add_location(button, file, 48, 3, 1642);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, svg);
			append_dev(svg, path0);
			append_dev(svg, path1);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*openThisPage*/ ctx[9], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(48:2) {#if !isPage}",
		ctx
	});

	return block;
}

// (66:2) {:else}
function create_else_block(ctx) {
	let div;
	let t0;
	let t1;
	let if_block1_anchor;
	let current;

	function select_block_type_1(ctx, dirty) {
		if (/*newComment*/ ctx[5] !== null) return create_if_block_2;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx);
	let if_block0 = current_block_type(ctx);
	let each_value = /*postComments*/ ctx[3];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block1 = /*commentsAvailable*/ ctx[4] && create_if_block_1(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if_block0.c();
			t0 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
			attr_dev(div, "class", "write-comment svelte-pbmq0h");
			add_location(div, file, 66, 3, 2455);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_block0.m(div, null);
			insert_dev(target, t0, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t1, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, if_block1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div, null);
				}
			}

			if (dirty & /*postComments*/ 8) {
				each_value = /*postComments*/ ctx[3];
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
						each_blocks[i].m(t1.parentNode, t1);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (/*commentsAvailable*/ ctx[4]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
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
			if (detaching) detach_dev(div);
			if_block0.d();
			if (detaching) detach_dev(t0);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t1);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(66:2) {:else}",
		ctx
	});

	return block;
}

// (62:2) {#if !loadComments && postComments.length < 1 && commentsAvailable}
function create_if_block(ctx) {
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			button.textContent = "Load comments...";
			attr_dev(button, "class", "load-comments svelte-pbmq0h");
			add_location(button, file, 62, 3, 2344);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler_1*/ ctx[11], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
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
		source: "(62:2) {#if !loadComments && postComments.length < 1 && commentsAvailable}",
		ctx
	});

	return block;
}

// (84:4) {:else}
function create_else_block_1(ctx) {
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			button.textContent = "+ Write a comment";
			attr_dev(button, "class", "write-comment-btn svelte-pbmq0h");
			add_location(button, file, 84, 5, 3292);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler_3*/ ctx[14], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(84:4) {:else}",
		ctx
	});

	return block;
}

// (68:4) {#if newComment !== null}
function create_if_block_2(ctx) {
	let button0;
	let svg0;
	let path0;
	let t0;
	let textarea;
	let t1;
	let button1;
	let svg1;
	let path1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button0 = element("button");
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			t0 = space();
			textarea = element("textarea");
			t1 = space();
			button1 = element("button");
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			attr_dev(path0, "d", "M28.2998 91.5788L91.7007 27.7007M91.7002 91.5787L28.2993 27.7007");
			attr_dev(path0, "stroke-width", "6");
			attr_dev(path0, "stroke-linecap", "round");
			attr_dev(path0, "class", "svelte-pbmq0h");
			add_location(path0, file, 70, 7, 2709);
			attr_dev(svg0, "class", "icon stroke icon-1 svelte-pbmq0h");
			attr_dev(svg0, "viewBox", "0 0 120 120");
			attr_dev(svg0, "fill", "none");
			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg0, file, 69, 6, 2600);
			attr_dev(button0, "class", "discard flex flex-center");
			add_location(button0, file, 68, 5, 2518);
			attr_dev(textarea, "rows", "1");
			attr_dev(textarea, "placeholder", "Write a comment...");
			attr_dev(textarea, "class", "svelte-pbmq0h");
			add_location(textarea, file, 73, 5, 2859);
			attr_dev(path1, "d", "M18.3604 68.6396L42.103 92.3822L105.504 28.5042");
			attr_dev(path1, "stroke-width", "6");
			attr_dev(path1, "stroke-linecap", "round");
			attr_dev(path1, "class", "svelte-pbmq0h");
			add_location(path1, file, 80, 7, 3147);
			attr_dev(svg1, "class", "icon stroke icon-1 svelte-pbmq0h");
			attr_dev(svg1, "viewBox", "0 0 120 120");
			attr_dev(svg1, "fill", "none");
			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg1, file, 79, 6, 3038);
			attr_dev(button1, "class", "submit flex flex-center");
			add_location(button1, file, 78, 5, 2966);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button0, anchor);
			append_dev(button0, svg0);
			append_dev(svg0, path0);
			insert_dev(target, t0, anchor);
			insert_dev(target, textarea, anchor);
			set_input_value(textarea, /*newComment*/ ctx[5]);
			insert_dev(target, t1, anchor);
			insert_dev(target, button1, anchor);
			append_dev(button1, svg1);
			append_dev(svg1, path1);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*click_handler_2*/ ctx[12], false, false, false),
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[13]),
					listen_dev(button1, "click", /*submitComment*/ ctx[8], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*newComment*/ 32) {
				set_input_value(textarea, /*newComment*/ ctx[5]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(textarea);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(button1);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(68:4) {#if newComment !== null}",
		ctx
	});

	return block;
}

// (91:3) {#each postComments as comment}
function create_each_block(ctx) {
	let thread;
	let current;

	thread = new Thread({
			props: { comment: /*comment*/ ctx[17], level: 3 },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(thread.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(thread, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const thread_changes = {};
			if (dirty & /*postComments*/ 8) thread_changes.comment = /*comment*/ ctx[17];
			thread.$set(thread_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(thread.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(thread.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(thread, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(91:3) {#each postComments as comment}",
		ctx
	});

	return block;
}

// (94:3) {#if commentsAvailable}
function create_if_block_1(ctx) {
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			button.textContent = "Load more comments...";
			attr_dev(button, "class", "load-comments svelte-pbmq0h");
			add_location(button, file, 94, 4, 3530);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler_4*/ ctx[15], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(94:3) {#if commentsAvailable}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div4;
	let div1;
	let button;
	let div0;
	let svg;
	let path;
	let circle;
	let t0;
	let span0;
	let t1_value = DB.userByID(/*post*/ ctx[0].userID).name + "";
	let t1;
	let t2;
	let t3;
	let t4;
	let div2;
	let span1;
	let t5_value = /*post*/ ctx[0].title + "";
	let t5;
	let t6;
	let p;
	let t7_value = /*post*/ ctx[0].body + "";
	let t7;
	let t8;
	let div3;
	let current_block_type_index;
	let if_block2;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*post*/ ctx[0].userID === /*$DB*/ ctx[6].session && create_if_block_4(ctx);
	let if_block1 = !/*isPage*/ ctx[2] && create_if_block_3(ctx);
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (!/*loadComments*/ ctx[1] && /*postComments*/ ctx[3].length < 1 && /*commentsAvailable*/ ctx[4]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			div4 = element("div");
			div1 = element("div");
			button = element("button");
			div0 = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			circle = svg_element("circle");
			t0 = space();
			span0 = element("span");
			t1 = text(t1_value);
			t2 = space();
			if (if_block0) if_block0.c();
			t3 = space();
			if (if_block1) if_block1.c();
			t4 = space();
			div2 = element("div");
			span1 = element("span");
			t5 = text(t5_value);
			t6 = space();
			p = element("p");
			t7 = text(t7_value);
			t8 = space();
			div3 = element("div");
			if_block2.c();
			attr_dev(path, "d", "M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11");
			attr_dev(path, "stroke-width", "6");
			attr_dev(path, "stroke-linecap", "round");
			attr_dev(path, "class", "svelte-pbmq0h");
			add_location(path, file, 38, 5, 1291);
			attr_dev(circle, "cx", "60");
			attr_dev(circle, "cy", "34");
			attr_dev(circle, "r", "21");
			attr_dev(circle, "stroke-width", "6");
			attr_dev(circle, "class", "svelte-pbmq0h");
			add_location(circle, file, 39, 5, 1401);
			attr_dev(svg, "class", "icon stroke svelte-pbmq0h");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "viewBox", "0 0 120 120");
			add_location(svg, file, 37, 4, 1191);
			attr_dev(div0, "class", "user-image flex flex-center svelte-pbmq0h");
			add_location(div0, file, 36, 3, 1145);
			add_location(span0, file, 42, 3, 1475);
			attr_dev(button, "class", "user flex flex-center-y gap-1 svelte-pbmq0h");
			add_location(button, file, 35, 2, 1033);
			attr_dev(div1, "class", "header flex flex-center-y gap-1 svelte-pbmq0h");
			add_location(div1, file, 34, 1, 985);
			attr_dev(span1, "class", "title svelte-pbmq0h");
			add_location(span1, file, 57, 2, 2162);
			attr_dev(p, "class", "message svelte-pbmq0h");
			add_location(p, file, 58, 2, 2204);
			attr_dev(div2, "class", "body svelte-pbmq0h");
			add_location(div2, file, 56, 1, 2141);
			attr_dev(div3, "class", "comments svelte-pbmq0h");
			add_location(div3, file, 60, 1, 2248);
			attr_dev(div4, "class", "post svelte-pbmq0h");
			add_location(div4, file, 33, 0, 965);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div1);
			append_dev(div1, button);
			append_dev(button, div0);
			append_dev(div0, svg);
			append_dev(svg, path);
			append_dev(svg, circle);
			append_dev(button, t0);
			append_dev(button, span0);
			append_dev(span0, t1);
			append_dev(button, t2);
			if (if_block0) if_block0.m(button, null);
			append_dev(div1, t3);
			if (if_block1) if_block1.m(div1, null);
			append_dev(div4, t4);
			append_dev(div4, div2);
			append_dev(div2, span1);
			append_dev(span1, t5);
			append_dev(div2, t6);
			append_dev(div2, p);
			append_dev(p, t7);
			append_dev(div4, t8);
			append_dev(div4, div3);
			if_blocks[current_block_type_index].m(div3, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[10], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*post*/ 1) && t1_value !== (t1_value = DB.userByID(/*post*/ ctx[0].userID).name + "")) set_data_dev(t1, t1_value);

			if (/*post*/ ctx[0].userID === /*$DB*/ ctx[6].session) {
				if (if_block0) ; else {
					if_block0 = create_if_block_4(ctx);
					if_block0.c();
					if_block0.m(button, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (!/*isPage*/ ctx[2]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_3(ctx);
					if_block1.c();
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if ((!current || dirty & /*post*/ 1) && t5_value !== (t5_value = /*post*/ ctx[0].title + "")) set_data_dev(t5, t5_value);
			if ((!current || dirty & /*post*/ 1) && t7_value !== (t7_value = /*post*/ ctx[0].body + "")) set_data_dev(t7, t7_value);
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
				if_block2 = if_blocks[current_block_type_index];

				if (!if_block2) {
					if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block2.c();
				} else {
					if_block2.p(ctx, dirty);
				}

				transition_in(if_block2, 1);
				if_block2.m(div3, null);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block2);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block2);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if_blocks[current_block_type_index].d();
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
	component_subscribe($$self, DB, $$value => $$invalidate(6, $DB = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Post', slots, []);
	let { post } = $$props;
	let { loadComments = false } = $$props;
	let { isPage = false } = $$props;
	let postComments = [];
	let commentsOffset = 0;
	let commentsAvailable = true;

	function fetchComments(limit = 10) {
		const comments = DB.commentsByPost(commentsOffset, limit, post.id);

		if (comments.length < limit) {
			$$invalidate(4, commentsAvailable = false);
		}

		commentsOffset += limit;
		$$invalidate(3, postComments = postComments.concat(comments));
	}

	if (loadComments) fetchComments(3);
	let newComment = null;

	function submitComment() {
		if (newComment === '') return;
		postComments.splice(0, 0, DB.submitComment(CommentEntity.Post, post.id, newComment));
		$$invalidate(3, postComments);
		$$invalidate(5, newComment = null);
		commentsOffset++;
	}

	function openThisPage() {
		routerInstance.push('post', { postID: post.id });
	}

	$$self.$$.on_mount.push(function () {
		if (post === undefined && !('post' in $$props || $$self.$$.bound[$$self.$$.props['post']])) {
			console.warn("<Post> was created without expected prop 'post'");
		}
	});

	const writable_props = ['post', 'loadComments', 'isPage'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Post> was created with unknown prop '${key}'`);
	});

	const click_handler = () => routerInstance.push('profile', { userID: post.userID });
	const click_handler_1 = () => fetchComments(3);
	const click_handler_2 = () => $$invalidate(5, newComment = null);

	function textarea_input_handler() {
		newComment = this.value;
		$$invalidate(5, newComment);
	}

	const click_handler_3 = () => $$invalidate(5, newComment = '');
	const click_handler_4 = () => fetchComments();

	$$self.$$set = $$props => {
		if ('post' in $$props) $$invalidate(0, post = $$props.post);
		if ('loadComments' in $$props) $$invalidate(1, loadComments = $$props.loadComments);
		if ('isPage' in $$props) $$invalidate(2, isPage = $$props.isPage);
	};

	$$self.$capture_state = () => ({
		DB,
		CommentEntity,
		router: routerInstance,
		Thread,
		post,
		loadComments,
		isPage,
		postComments,
		commentsOffset,
		commentsAvailable,
		fetchComments,
		newComment,
		submitComment,
		openThisPage,
		$DB
	});

	$$self.$inject_state = $$props => {
		if ('post' in $$props) $$invalidate(0, post = $$props.post);
		if ('loadComments' in $$props) $$invalidate(1, loadComments = $$props.loadComments);
		if ('isPage' in $$props) $$invalidate(2, isPage = $$props.isPage);
		if ('postComments' in $$props) $$invalidate(3, postComments = $$props.postComments);
		if ('commentsOffset' in $$props) commentsOffset = $$props.commentsOffset;
		if ('commentsAvailable' in $$props) $$invalidate(4, commentsAvailable = $$props.commentsAvailable);
		if ('newComment' in $$props) $$invalidate(5, newComment = $$props.newComment);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		post,
		loadComments,
		isPage,
		postComments,
		commentsAvailable,
		newComment,
		$DB,
		fetchComments,
		submitComment,
		openThisPage,
		click_handler,
		click_handler_1,
		click_handler_2,
		textarea_input_handler,
		click_handler_3,
		click_handler_4
	];
}

class Post extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0, loadComments: 1, isPage: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Post",
			options,
			id: create_fragment.name
		});
	}

	get post() {
		throw new Error("<Post>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<Post>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get loadComments() {
		throw new Error("<Post>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set loadComments(value) {
		throw new Error("<Post>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isPage() {
		throw new Error("<Post>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isPage(value) {
		throw new Error("<Post>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Post as P };
//# sourceMappingURL=Post-4b4222d2.js.map
