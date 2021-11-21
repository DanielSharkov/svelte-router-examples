<script lang='ts'>
	import DB, {CommentEntity, Post} from '../database'
	import {router} from '../App.svelte'
	import Thread from '../components/Thread.svelte'
	export let post: Post
	export let loadComments: boolean = false
	export let isPage: boolean = false

	let postComments = []
	let commentsOffset = 0
	let commentsAvailable = true
	function fetchComments(limit = 10) {
		const comments = DB.commentsByPost(commentsOffset, limit, post.id)
		if (comments.length < limit) {
			commentsAvailable = false
		}
		commentsOffset += limit
		postComments = postComments.concat(comments)
	}
	if (loadComments) fetchComments(3)

	let newComment = null
	function submitComment(): void {
		if (newComment === '') return

		postComments.splice(
			0, 0,
			DB.submitComment(CommentEntity.Post, post.id, newComment),
		)
		postComments = postComments
		newComment = null
		commentsOffset++
	}

	function openThisPage(): void {
		router.push('post', {postID: post.id})
	}
</script>

<div class='post'>
	<div class='header flex flex-center-y gap-1'>
		<button on:click={()=> router.push('profile', {userID: post.userID})} class='user flex flex-center-y gap-1'>
			<div class='user-image flex flex-center'>
				<svg class='icon stroke' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
					<path d='M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11' stroke-width='6'/>
					<circle cx='60' cy='34' r='21' stroke-width='6'/>
				</svg>
			</div>
			<span>{DB.userByID(post.userID).name}</span>
			{#if post.userID === $DB.session}
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
	<div class='body'>
		<span class='title'>{post.title}</span>
		<p class='message'>{post.body}</p>
	</div>
	<div class='comments'>
		{#if !loadComments && postComments.length < 1 && commentsAvailable}
			<button on:click={()=> fetchComments(3)} class='load-comments'>
				Load comments...
			</button>
		{:else}
			<div class='write-comment'>
				{#if newComment !== null}
					<button on:click={()=> newComment = null} class='discard flex flex-center'>
						<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M28.2998 91.5788L91.7007 27.7007M91.7002 91.5787L28.2993 27.7007' stroke-width='6'/>
						</svg>
					</button>
					<textarea
						rows='1'
						placeholder='Write a comment...'
						bind:value={newComment}
					/>
					<button on:click={submitComment} class='submit flex flex-center'>
						<svg class='icon stroke icon-1' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M18.3604 68.6396L42.103 92.3822L105.504 28.5042' stroke-width='6'/>
						</svg>
					</button>
				{:else}
					<button on:click={()=> newComment = ''} class='write-comment-btn'>
						+ Write a comment
					</button>
				{/if}
			</div>

			{#each postComments as comment}
				<Thread {comment} level={3}/>
			{/each}
			{#if commentsAvailable}
				<button class='load-comments' on:click={()=> fetchComments()}>
					Load more comments...
				</button>
			{/if}
		{/if}
	</div>
</div>

<style>
	.open-page {
		padding: 3px;
	}
	.post {
		padding: 15px;
		border-radius: 10px;
		background-color: var(--fg-clr);
		box-shadow: var(--shadow);
	}
	.post .header, .post .body {
		padding: 5px;
	}
	.post .header {
		margin-bottom: 10px;
	}
	.post .user {
		margin: 0;
		border: none;
		padding: 0;
		background: none;
	}
	.post .user:hover {
		color: var(--prime);
		text-decoration: underline;
	}
	.post .user-image {
		width: 30px;
		height: 30px;
		background-color: var(--nav-btn-hover-bg);
		border-radius: 100%;
	}
	.post .user-image .icon {
		width: 60%;
		height: 60%;
	}
	.post .is-session-user {
		padding: 2px 8px;
		box-shadow: var(--shadow);
		border-radius: 20px;
		font-size: .6em;
		font-weight: 600;
	}
	.post .title {
		margin: 0;
		color: var(--font-heading-clr);
		font-weight: 600;
	}
	.post .message {
		margin: 10px 0 0 0;
		padding: 0;
		white-space: pre-wrap;
	}
	.post .comments {
		padding-right: 10px;
	}
	.post .comments .write-comment {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-gap: 10px;
		align-content: start;
		align-items: start;
		margin: 10px 0;
		font-size: .85em;
		color: var(--font-heading-clr);
	}
	.post .comments .write-comment .discard .icon.stroke > * {
		stroke: var(--prime);
	}
	.post .comments .write-comment .submit .icon.stroke > * {
		stroke: var(--flash);
	}
	.post .comments .write-comment textarea {
		resize: vertical;
	}
	.post .comments .load-comments {
		margin-top: 10px;
		padding: 5px 10px;
	}
	.write-comment-btn {
		padding: 5px 20px;
	}
</style>
