<script lang='ts'>
	import {onMount, createEventDispatcher} from 'svelte'
	import {defaultPageTransition} from '../utils'
	import Post from '../components/Post.svelte'
	import {cubicInOut} from 'svelte/easing'
	import DB from '../database'

	const dispatch = createEventDispatcher()

	onMount(()=> {
		dispatch('hasOutro')
	})

	let posts = []
	let offset = 0
	$:isLastPostReached = $DB.posts.length > offset
	function fetchPosts() {
		const newOffset = (
			$DB.posts.length < offset + 10 ?
				$DB.posts.length : offset + 10
		)
		posts = posts.concat($DB.posts.slice(offset, newOffset))
		offset = newOffset
		posts = posts
	}
	fetchPosts()

	let wantToDraftPost = false
	let newPostTitle = ''
	let newPostMessage = ''
	function submitNewPost(): void {
		if (newPostTitle === '' || newPostMessage === '') {
			return
		}
		posts.splice(0, 0, DB.submitNewPost(newPostTitle, newPostMessage))
		newPostTitle = ''
		newPostMessage = ''
		wantToDraftPost = false
		posts = posts
	}

	function newPostAnim(node, o?) {
		const height = node.offsetHeight
		return {
			duration: 600,
			css(t) {
				t = cubicInOut(t)
				return (
					`height: ${height * t}px;` +
					`padding: ${20 * t}px 20px;` +
					`opacity: ${t};`
				)
			}
		}
	}
</script>

<div id='PageTimeline' class='page'
in:defaultPageTransition
out:defaultPageTransition={{delay: 450}}
on:outroend={()=> dispatch('outroDone')}>
	<div class='new-post'>
		{#if wantToDraftPost}
			<div class='new-post-form' transition:newPostAnim>
				<input type='text'
					name='post-title'
					placeholder='Title...'
					bind:value={newPostTitle}
				/>
				<textarea
					name='post-message'
					rows='6'
					placeholder='Message...'
					bind:value={newPostMessage}
				/>
				<div class='actions flex flex-center-y'>
					<button on:click={()=> wantToDraftPost = false}>
						Close
					</button>
					<button class='flex-self-right' on:click={submitNewPost}>
						Post to the timeline
					</button>
				</div>
			</div>
		{:else}
			<button on:click={()=> wantToDraftPost = true}
			class='start-drafting' transition:newPostAnim>
				+ Create a new post
			</button>
		{/if}
	</div>

	{#each posts as post}<Post {post}/>{/each}
	{#if isLastPostReached}
		<button class='load-more' on:click={fetchPosts}>
			Load more posts ({$DB.posts.length - offset} available)
		</button>
	{/if}
</div>

<style>
	:global(#PageTimeline .post) {
		margin-bottom: 60px;
	}
	.load-more {
		padding: 20px;
		width: 100%;
	}
	.new-post {
		padding: 0;
		margin-bottom: 20px;
		border-radius: 10px;
		background-color: var(--fg-clr);
		box-shadow: var(--shadow);
		overflow: hidden;
	}
	.new-post .new-post-form {
		padding: 20px;
	}
	.new-post input[name='post-title'],
	.new-post textarea[name='post-message'] {
		display: block;
		width: 100%;
		margin-bottom: 10px;
		resize: vertical;
		border: none;
		background-color: var(--nav-btn-hover-bg);
	}
	.new-post input[name='post-title'] {
		font-size: 1.25em;
	}
	.new-post .start-drafting {
		display: block;
		width: 100%;
		padding: 20px;
		border-radius: inherit;
		text-align: left;
		color: var(--prime);
		overflow: hidden;
	}
	.new-post .start-drafting:not(:hover) {
		border-color: transparent;
	}
</style>
