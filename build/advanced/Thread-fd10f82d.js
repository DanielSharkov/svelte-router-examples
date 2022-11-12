import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, D as DB, z as validate_store, A as component_subscribe, n as validate_slots, N as routerInstance, M as CommentEntity, e as element, a as space, r as svg_element, t as text, b as attr_dev, c as add_location, P as toggle_class, f as insert_dev, g as append_dev, l as listen_dev, G as set_data_dev, x as transition_in, H as group_outros, u as transition_out, w as check_outros, k as detach_dev, J as noop, O as empty, v as validate_each_argument, K as set_input_value, L as run_all, m as destroy_each, C as create_component, E as mount_component, F as destroy_component } from './main-f2a51b8a.js';

/* advanced/components/Thread.svelte generated by Svelte v3.52.0 */
const file = "advanced/components/Thread.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (48:1) {#if singleThread}
function create_if_block_6(ctx) {
	let button;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*comment*/ ctx[3].onEntity === CommentEntity.Post) return create_if_block_7;
		return create_else_block_2;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			button = element("button");
			if_block.c();
			attr_dev(button, "class", "reference svelte-hx5b0t");
			add_location(button, file, 48, 2, 1389);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			if_block.m(button, null);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*openReference*/ ctx[11], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(button, null);
				}
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			if_block.d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_6.name,
		type: "if",
		source: "(48:1) {#if singleThread}",
		ctx
	});

	return block;
}

// (52:3) {:else}
function create_else_block_2(ctx) {
	let t0;
	let t1_value = DB.userByID(/*comment*/ ctx[3].userID).name + "";
	let t1;

	const block = {
		c: function create() {
			t0 = text("From a comment of ");
			t1 = text(t1_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*comment*/ 8 && t1_value !== (t1_value = DB.userByID(/*comment*/ ctx[3].userID).name + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_2.name,
		type: "else",
		source: "(52:3) {:else}",
		ctx
	});

	return block;
}

// (50:3) {#if comment.onEntity === CommentEntity.Post}
function create_if_block_7(ctx) {
	let t0;
	let t1_value = DB.userByID(/*comment*/ ctx[3].userID).name + "";
	let t1;

	const block = {
		c: function create() {
			t0 = text("From a post comment of ");
			t1 = text(t1_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*comment*/ 8 && t1_value !== (t1_value = DB.userByID(/*comment*/ ctx[3].userID).name + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_7.name,
		type: "if",
		source: "(50:3) {#if comment.onEntity === CommentEntity.Post}",
		ctx
	});

	return block;
}

// (67:3) {#if comment.userID === $DB.session}
function create_if_block_5(ctx) {
	let span;

	const block = {
		c: function create() {
			span = element("span");
			span.textContent = "You";
			attr_dev(span, "class", "is-session-user svelte-hx5b0t");
			add_location(span, file, 67, 4, 2229);
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
		id: create_if_block_5.name,
		type: "if",
		source: "(67:3) {#if comment.userID === $DB.session}",
		ctx
	});

	return block;
}

// (71:2) {#if !isPage}
function create_if_block_4(ctx) {
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
			add_location(path0, file, 73, 5, 2505);
			attr_dev(path1, "d", "M105 15L60 60M105 15L105 45M105 15L75 15");
			attr_dev(path1, "stroke-width", "6");
			attr_dev(path1, "stroke-linecap", "round");
			add_location(path1, file, 74, 5, 2675);
			attr_dev(svg, "class", "icon stroke icon-1 svelte-hx5b0t");
			attr_dev(svg, "viewBox", "0 0 120 120");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg, file, 72, 4, 2398);
			attr_dev(button, "class", "open-page flex flex-center flex-self-right svelte-hx5b0t");
			add_location(button, file, 71, 3, 2310);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, svg);
			append_dev(svg, path0);
			append_dev(svg, path1);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*openThisPage*/ ctx[12], false, false, false);
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
		id: create_if_block_4.name,
		type: "if",
		source: "(71:2) {#if !isPage}",
		ctx
	});

	return block;
}

// (101:1) {:else}
function create_else_block_1(ctx) {
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			button.textContent = "+ Write a comment";
			attr_dev(button, "class", "write-comment-btn svelte-hx5b0t");
			add_location(button, file, 101, 2, 3660);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler_2*/ ctx[17], false, false, false);
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
		source: "(101:1) {:else}",
		ctx
	});

	return block;
}

// (83:1) {#if newComment !== null}
function create_if_block_3(ctx) {
	let div;
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
			div = element("div");
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
			attr_dev(path0, "stroke-width", "10");
			attr_dev(path0, "stroke-linecap", "round");
			attr_dev(path0, "class", "svelte-hx5b0t");
			add_location(path0, file, 86, 5, 3096);
			attr_dev(svg0, "class", "icon stroke icon-1 svelte-hx5b0t");
			attr_dev(svg0, "viewBox", "0 0 120 120");
			attr_dev(svg0, "fill", "none");
			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg0, file, 85, 4, 2989);
			attr_dev(button0, "class", "discard flex flex-center");
			add_location(button0, file, 84, 3, 2909);
			attr_dev(textarea, "rows", "1");
			attr_dev(textarea, "placeholder", "Write a comment...");
			attr_dev(textarea, "class", "svelte-hx5b0t");
			add_location(textarea, file, 89, 3, 3241);
			attr_dev(path1, "d", "M18.3604 68.6396L42.103 92.3822L105.504 28.5042");
			attr_dev(path1, "stroke-width", "10");
			attr_dev(path1, "stroke-linecap", "round");
			attr_dev(path1, "class", "svelte-hx5b0t");
			add_location(path1, file, 96, 5, 3515);
			attr_dev(svg1, "class", "icon stroke icon-1 svelte-hx5b0t");
			attr_dev(svg1, "viewBox", "0 0 120 120");
			attr_dev(svg1, "fill", "none");
			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg1, file, 95, 4, 3408);
			attr_dev(button1, "class", "submit flex flex-center");
			add_location(button1, file, 94, 3, 3338);
			attr_dev(div, "class", "write-comment svelte-hx5b0t");
			add_location(div, file, 83, 2, 2878);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, button0);
			append_dev(button0, svg0);
			append_dev(svg0, path0);
			append_dev(div, t0);
			append_dev(div, textarea);
			set_input_value(textarea, /*newComment*/ ctx[6]);
			append_dev(div, t1);
			append_dev(div, button1);
			append_dev(button1, svg1);
			append_dev(svg1, path1);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*click_handler_1*/ ctx[15], false, false, false),
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[16]),
					listen_dev(button1, "click", /*submitComment*/ ctx[10], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*newComment*/ 64) {
				set_input_value(textarea, /*newComment*/ ctx[6]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(83:1) {#if newComment !== null}",
		ctx
	});

	return block;
}

// (107:1) {#if isThread}
function create_if_block(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type_2(ctx, dirty) {
		if (/*level*/ ctx[0] < 5) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_2(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_2(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(107:1) {#if isThread}",
		ctx
	});

	return block;
}

// (120:2) {:else}
function create_else_block(ctx) {
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			button.textContent = "Open this thread...";
			attr_dev(button, "class", "open-thread svelte-hx5b0t");
			add_location(button, file, 120, 3, 4087);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler_4*/ ctx[19], false, false, false);
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
		id: create_else_block.name,
		type: "else",
		source: "(120:2) {:else}",
		ctx
	});

	return block;
}

// (108:2) {#if level < 5}
function create_if_block_1(ctx) {
	let div;
	let t;
	let current;
	let each_value = /*thread*/ ctx[4];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block = /*commentsAvailable*/ ctx[5] && create_if_block_2(ctx);

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			if (if_block) if_block.c();
			attr_dev(div, "class", "thread svelte-hx5b0t");
			add_location(div, file, 108, 3, 3805);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append_dev(div, t);
			if (if_block) if_block.m(div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*level, thread, isPage*/ 21) {
				each_value = /*thread*/ ctx[4];
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
						each_blocks[i].m(div, t);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (/*commentsAvailable*/ ctx[5]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
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
			destroy_each(each_blocks, detaching);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(108:2) {#if level < 5}",
		ctx
	});

	return block;
}

// (110:4) {#each thread as comment}
function create_each_block(ctx) {
	let thread_1;
	let current;

	thread_1 = new Thread({
			props: {
				level: /*level*/ ctx[0] + 1,
				comment: /*comment*/ ctx[3],
				isPage: /*isPage*/ ctx[2]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(thread_1.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(thread_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const thread_1_changes = {};
			if (dirty & /*level*/ 1) thread_1_changes.level = /*level*/ ctx[0] + 1;
			if (dirty & /*thread*/ 16) thread_1_changes.comment = /*comment*/ ctx[3];
			if (dirty & /*isPage*/ 4) thread_1_changes.isPage = /*isPage*/ ctx[2];
			thread_1.$set(thread_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(thread_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(thread_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(thread_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(110:4) {#each thread as comment}",
		ctx
	});

	return block;
}

// (114:4) {#if commentsAvailable}
function create_if_block_2(ctx) {
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			button.textContent = "Load thread...";
			attr_dev(button, "class", "load-thread svelte-hx5b0t");
			add_location(button, file, 114, 5, 3957);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler_3*/ ctx[18], false, false, false);
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
		id: create_if_block_2.name,
		type: "if",
		source: "(114:4) {#if commentsAvailable}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div2;
	let t0;
	let div1;
	let button;
	let div0;
	let svg;
	let path;
	let circle;
	let t1;
	let span;
	let t2_value = DB.userByID(/*comment*/ ctx[3].userID).name + "";
	let t2;
	let t3;
	let t4;
	let t5;
	let p;
	let t6_value = /*comment*/ ctx[3].body + "";
	let t6;
	let t7;
	let t8;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*singleThread*/ ctx[1] && create_if_block_6(ctx);
	let if_block1 = /*comment*/ ctx[3].userID === /*$DB*/ ctx[8].session && create_if_block_5(ctx);
	let if_block2 = !/*isPage*/ ctx[2] && create_if_block_4(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*newComment*/ ctx[6] !== null) return create_if_block_3;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx);
	let if_block3 = current_block_type(ctx);
	let if_block4 = /*isThread*/ ctx[7] && create_if_block(ctx);

	const block = {
		c: function create() {
			div2 = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			div1 = element("div");
			button = element("button");
			div0 = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			circle = svg_element("circle");
			t1 = space();
			span = element("span");
			t2 = text(t2_value);
			t3 = space();
			if (if_block1) if_block1.c();
			t4 = space();
			if (if_block2) if_block2.c();
			t5 = space();
			p = element("p");
			t6 = text(t6_value);
			t7 = space();
			if_block3.c();
			t8 = space();
			if (if_block4) if_block4.c();
			attr_dev(path, "d", "M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11");
			attr_dev(path, "stroke-width", "6");
			attr_dev(path, "stroke-linecap", "round");
			add_location(path, file, 61, 5, 1953);
			attr_dev(circle, "cx", "60");
			attr_dev(circle, "cy", "34");
			attr_dev(circle, "r", "21");
			attr_dev(circle, "stroke-width", "6");
			add_location(circle, file, 62, 5, 2063);
			attr_dev(svg, "class", "icon stroke svelte-hx5b0t");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "viewBox", "0 0 120 120");
			add_location(svg, file, 60, 4, 1853);
			attr_dev(div0, "class", "user-image flex flex-center svelte-hx5b0t");
			add_location(div0, file, 59, 3, 1807);
			add_location(span, file, 65, 3, 2137);
			attr_dev(button, "class", "user flex flex-center-y gap-1 svelte-hx5b0t");
			add_location(button, file, 58, 2, 1692);
			attr_dev(div1, "class", "header flex flex-center-y");
			add_location(div1, file, 57, 1, 1650);
			attr_dev(p, "class", "message");
			add_location(p, file, 80, 1, 2810);
			attr_dev(div2, "class", "comment svelte-hx5b0t");
			toggle_class(div2, "single-thread", /*singleThread*/ ctx[1]);
			add_location(div2, file, 46, 0, 1310);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			if (if_block0) if_block0.m(div2, null);
			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div1, button);
			append_dev(button, div0);
			append_dev(div0, svg);
			append_dev(svg, path);
			append_dev(svg, circle);
			append_dev(button, t1);
			append_dev(button, span);
			append_dev(span, t2);
			append_dev(button, t3);
			if (if_block1) if_block1.m(button, null);
			append_dev(div1, t4);
			if (if_block2) if_block2.m(div1, null);
			append_dev(div2, t5);
			append_dev(div2, p);
			append_dev(p, t6);
			append_dev(div2, t7);
			if_block3.m(div2, null);
			append_dev(div2, t8);
			if (if_block4) if_block4.m(div2, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[14], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*singleThread*/ ctx[1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_6(ctx);
					if_block0.c();
					if_block0.m(div2, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if ((!current || dirty & /*comment*/ 8) && t2_value !== (t2_value = DB.userByID(/*comment*/ ctx[3].userID).name + "")) set_data_dev(t2, t2_value);

			if (/*comment*/ ctx[3].userID === /*$DB*/ ctx[8].session) {
				if (if_block1) ; else {
					if_block1 = create_if_block_5(ctx);
					if_block1.c();
					if_block1.m(button, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (!/*isPage*/ ctx[2]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block_4(ctx);
					if_block2.c();
					if_block2.m(div1, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if ((!current || dirty & /*comment*/ 8) && t6_value !== (t6_value = /*comment*/ ctx[3].body + "")) set_data_dev(t6, t6_value);

			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block3) {
				if_block3.p(ctx, dirty);
			} else {
				if_block3.d(1);
				if_block3 = current_block_type(ctx);

				if (if_block3) {
					if_block3.c();
					if_block3.m(div2, t8);
				}
			}

			if (/*isThread*/ ctx[7]) {
				if (if_block4) {
					if_block4.p(ctx, dirty);

					if (dirty & /*isThread*/ 128) {
						transition_in(if_block4, 1);
					}
				} else {
					if_block4 = create_if_block(ctx);
					if_block4.c();
					transition_in(if_block4, 1);
					if_block4.m(div2, null);
				}
			} else if (if_block4) {
				group_outros();

				transition_out(if_block4, 1, 1, () => {
					if_block4 = null;
				});

				check_outros();
			}

			if (!current || dirty & /*singleThread*/ 2) {
				toggle_class(div2, "single-thread", /*singleThread*/ ctx[1]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block4);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block4);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if_block3.d();
			if (if_block4) if_block4.d();
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
	component_subscribe($$self, DB, $$value => $$invalidate(8, $DB = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Thread', slots, []);
	let { comment } = $$props;
	let { level = 0 } = $$props;
	let { loadComments = false } = $$props;
	let { singleThread = false } = $$props;
	let { isPage = false } = $$props;
	let thread = [];
	let commentsOffset = 0;
	let commentsAvailable = true;

	function fetchComments(limit = 10) {
		const comments = DB.getThread(commentsOffset, limit, comment.id);

		if (comments.length < limit) {
			$$invalidate(5, commentsAvailable = false);
		}

		commentsOffset += limit;
		$$invalidate(4, thread = thread.concat(comments));
	}

	if (loadComments) fetchComments(3);
	let newComment = null;

	function submitComment() {
		if (newComment === '') return;
		thread.splice(0, 0, DB.submitComment(CommentEntity.Comment, comment.id, newComment));
		$$invalidate(4, thread);

		if (!isThread) {
			$$invalidate(5, commentsAvailable = false);
			commentsOffset = 1;
			$$invalidate(7, isThread = true);
		}

		$$invalidate(6, newComment = null);
	}

	function openReference() {
		if (comment.onEntity === CommentEntity.Post) {
			routerInstance.push('post', { postID: comment.entityID });
			return;
		}

		routerInstance.push('thread', { threadID: comment.entityID });
	}

	let isThread = DB.hasThreadComments(comment.id);

	function openThisPage() {
		routerInstance.push('thread', { threadID: comment.id });
	}

	$$self.$$.on_mount.push(function () {
		if (comment === undefined && !('comment' in $$props || $$self.$$.bound[$$self.$$.props['comment']])) {
			console.warn("<Thread> was created without expected prop 'comment'");
		}
	});

	const writable_props = ['comment', 'level', 'loadComments', 'singleThread', 'isPage'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Thread> was created with unknown prop '${key}'`);
	});

	const click_handler = () => routerInstance.push('profile', { userID: comment.userID });
	const click_handler_1 = () => $$invalidate(6, newComment = null);

	function textarea_input_handler() {
		newComment = this.value;
		$$invalidate(6, newComment);
	}

	const click_handler_2 = () => $$invalidate(6, newComment = '');
	const click_handler_3 = () => fetchComments();
	const click_handler_4 = () => routerInstance.push('thread', { threadID: comment.id });

	$$self.$$set = $$props => {
		if ('comment' in $$props) $$invalidate(3, comment = $$props.comment);
		if ('level' in $$props) $$invalidate(0, level = $$props.level);
		if ('loadComments' in $$props) $$invalidate(13, loadComments = $$props.loadComments);
		if ('singleThread' in $$props) $$invalidate(1, singleThread = $$props.singleThread);
		if ('isPage' in $$props) $$invalidate(2, isPage = $$props.isPage);
	};

	$$self.$capture_state = () => ({
		router: routerInstance,
		DB,
		CommentEntity,
		comment,
		level,
		loadComments,
		singleThread,
		isPage,
		thread,
		commentsOffset,
		commentsAvailable,
		fetchComments,
		newComment,
		submitComment,
		openReference,
		isThread,
		openThisPage,
		$DB
	});

	$$self.$inject_state = $$props => {
		if ('comment' in $$props) $$invalidate(3, comment = $$props.comment);
		if ('level' in $$props) $$invalidate(0, level = $$props.level);
		if ('loadComments' in $$props) $$invalidate(13, loadComments = $$props.loadComments);
		if ('singleThread' in $$props) $$invalidate(1, singleThread = $$props.singleThread);
		if ('isPage' in $$props) $$invalidate(2, isPage = $$props.isPage);
		if ('thread' in $$props) $$invalidate(4, thread = $$props.thread);
		if ('commentsOffset' in $$props) commentsOffset = $$props.commentsOffset;
		if ('commentsAvailable' in $$props) $$invalidate(5, commentsAvailable = $$props.commentsAvailable);
		if ('newComment' in $$props) $$invalidate(6, newComment = $$props.newComment);
		if ('isThread' in $$props) $$invalidate(7, isThread = $$props.isThread);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		level,
		singleThread,
		isPage,
		comment,
		thread,
		commentsAvailable,
		newComment,
		isThread,
		$DB,
		fetchComments,
		submitComment,
		openReference,
		openThisPage,
		loadComments,
		click_handler,
		click_handler_1,
		textarea_input_handler,
		click_handler_2,
		click_handler_3,
		click_handler_4
	];
}

class Thread extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			comment: 3,
			level: 0,
			loadComments: 13,
			singleThread: 1,
			isPage: 2
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Thread",
			options,
			id: create_fragment.name
		});
	}

	get comment() {
		throw new Error("<Thread>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set comment(value) {
		throw new Error("<Thread>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level() {
		throw new Error("<Thread>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level(value) {
		throw new Error("<Thread>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get loadComments() {
		throw new Error("<Thread>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set loadComments(value) {
		throw new Error("<Thread>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get singleThread() {
		throw new Error("<Thread>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set singleThread(value) {
		throw new Error("<Thread>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isPage() {
		throw new Error("<Thread>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isPage(value) {
		throw new Error("<Thread>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Thread as T };
//# sourceMappingURL=Thread-fd10f82d.js.map
