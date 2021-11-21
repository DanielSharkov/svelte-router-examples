<script lang='ts'>
	import {router} from '../App.svelte'
	import DB, {CommentEntity} from '../database'
	export let comment
	export let level = 0
	export let loadComments = false
	export let singleThread = false
	export let isPage = false

	let thread = []
	let commentsOffset = 0
	let commentsAvailable = true
	function fetchComments(limit = 10) {
		const comments = DB.getThread(commentsOffset, limit, comment.id)
		if (comments.length < limit) {
			commentsAvailable = false
		}
		commentsOffset += limit
		thread = thread.concat(comments)
	}
	if (loadComments) fetchComments(3)

	let newComment = null
	function submitComment() {
		if (newComment === '') return

		thread.splice(
			0, 0,
			DB.submitComment(CommentEntity.Comment, comment.id, newComment),
		)
		thread = thread
		if (!isThread) {
			commentsAvailable = false
			commentsOffset = 1
			isThread = true
		}
		newComment = null
	}

	function openReference(): void {
		if (comment.onEntity === CommentEntity.Post) {
			router.push('post', {postID: comment.entityID})
			return
		}
		router.push('thread', {threadID: comment.entityID})
	}

	let isThread = DB.hasThreadComments(comment.id)

	function openThisPage(): void {
		router.push('thread', {threadID: comment.id})
	}
</script>

<div class='comment' class:single-thread={singleThread}>
	{#if singleThread}
		<button on:click={openReference} class='reference'>
			{#if comment.onEntity === CommentEntity.Post}
				From a post comment of {DB.userByID(comment.userID).name}
			{:else}
				From a comment of {DB.userByID(comment.userID).name}
			{/if}
		</button>
	{/if}

	<div class='header flex flex-center-y'>
		<button on:click={()=> router.push('profile', {userID: comment.userID})} class='user flex flex-center-y gap-1'>
			<div class='user-image flex flex-center'>
				<svg class='icon stroke' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
					<path d='M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11' stroke-width='6'/>
					<circle cx='60' cy='34' r='21' stroke-width='6'/>
				</svg>
			</div>
			<span>{DB.userByID(comment.userID).name}</span>
			{#if comment.userID === $DB.session}
				<span class='is-session-user'>You</span>
			{/if}
		</button>
		{#if !isPage}
			<button on:click={openThisPage} class='open-page flex flex-center flex-self-right'>
				<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M57.7778 25H35C29.4772 25 25 29.4772 25 35V85C25 90.5228 29.4772 95 35 95H85C90.5228 95 95 90.5228 95 85V62.2222' stroke-width='6'/>
					<path d='M105 15L60 60M105 15L105 45M105 15L75 15' stroke-width='6'/>
				</svg>
			</button>
		{/if}
	</div>

	<p class='message'>{comment.body}</p>

	{#if newComment !== null}
		<div class='write-comment'>
			<button on:click={()=> newComment = null} class='discard flex flex-center'>
				<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M28.2998 91.5788L91.7007 27.7007M91.7002 91.5787L28.2993 27.7007' stroke-width='10'/>
				</svg>
			</button>
			<textarea
				rows='1'
				placeholder='Write a comment...'
				bind:value={newComment}
			/>
			<button on:click={submitComment} class='submit flex flex-center'>
				<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M18.3604 68.6396L42.103 92.3822L105.504 28.5042' stroke-width='10'/>
				</svg>
			</button>
		</div>
	{:else}
		<button on:click={()=> newComment = ''} class='write-comment-btn'>
			+ Write a comment
		</button>
	{/if}

	{#if isThread}
		{#if level < 5}
			<div class='thread'>
				{#each thread as comment}
					<svelte:self level={level+1} {comment} {isPage}/>
				{/each}

				{#if commentsAvailable}
					<button on:click={()=> fetchComments()} class='load-thread'>
						Load thread...
					</button>
				{/if}
			</div>
		{:else}
			<button on:click={()=> router.push('thread', {threadID: comment.id})} class='open-thread'>
				Open this thread...
			</button>
		{/if}
	{/if}
</div>

<style>
	.open-page {
		padding: 3px;
	}
	.comment.single-thread {
		margin-bottom: 20px;
		padding: 15px;
		border-radius: 10px;
		background-color: var(--fg-clr);
		box-shadow: var(--shadow);
	}
	.comment .reference {
		width: 100%;
		text-align: left;
		border-left: solid 5px var(--prime);
		margin-bottom: 20px;
	}
	.comment .user {
		margin: 0;
		border: none;
		padding: 0;
		background: none;
	}
	.comment .user:hover {
		color: var(--prime);
		text-decoration: underline;
	}
	.comment .user-image {
		width: 30px;
		height: 30px;
		background-color: var(--nav-btn-hover-bg);
		border-radius: 100%;
	}
	.comment .user-image .icon {
		width: 60%;
		height: 60%;
	}
	.comment .is-session-user {
		padding: 2px 8px;
		box-shadow: var(--shadow);
		border-radius: 20px;
		font-size: .6em;
		font-weight: 600;
	}
	.comment {
		padding: 10px;
		padding-right: 0;
	}
	.comment:not(:first-child) {
		border-top: solid 1px var(--nav-btn-hover-bg);
	}
	.write-comment {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-gap: 10px;
		align-content: start;
		align-items: start;
		font-size: .85em;
		color: var(--font-heading-clr);
	}
	.write-comment .discard .icon.stroke > * {
		stroke: var(--prime);
	}
	.write-comment .submit .icon.stroke > * {
		stroke: var(--flash);
	}
	.write-comment textarea {
		resize: vertical;
	}
	.load-thread, .open-thread, .write-comment-btn {
		margin-top: 5px;
		padding: 0 10px;
		font-size: .85em;
	}
	.thread {
		margin-top: 10px;
		padding: 5px 0 5px 5px;
		border-top: solid 1px var(--nav-btn-hover-bg);
		border-left: solid 3px var(--nav-btn-hover-bg);
	}
</style>
