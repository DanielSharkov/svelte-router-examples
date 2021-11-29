<script>
	import DB from '../database'
	import Post from '../components/Post.svelte'
	export let params

	let profilePosts = []
	function fetchProfilePosts() {
		profilePosts = DB.postsByUser(params.userID)
		profilePosts = profilePosts
	}
	fetchProfilePosts()

	const profile = DB.userByID(params.userID)
</script>

<div id='PageProfile' class='page'>
	<div class='profile-banner'></div>
	<div class='profile-header flex flex-center-y gap-2'>
		<div class='profile-image-container'>
			<div class='profile-image flex flex-center'>
				<svg class='icon stroke icon-1' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
					<path d='M103 107V96c0-14-11-25-25-25H42c-14 0-25 11-25 25v11' stroke-width='2' stroke-linecap='round'/>
					<circle cx='60' cy='34' r='21' stroke-width='2' stroke-linecap='round'/>
				</svg>
			</div>
		</div>
		<span class='profile-name'>{profile.name}</span>
	</div>

	<div class='profile-details'>
		<div class='field flex flex-center-y gap-1'>
			<span class='label'>Username:</span>
			<span class='value'>{profile.username}</span>
		</div>
		{#if $DB.session === params.userID}
			<div class='field flex flex-center-y gap-1'>
				<span class='label'>Email:</span>
				<span class='value'>{profile.email}</span>
			</div>
			<div class='field flex flex-center-y gap-1'>
				<span class='label'>Phone:</span>
				<span class='value'>{profile.phone}</span>
			</div>
			<div class='field flex flex-center-y gap-1'>
				<span class='label'>Street:</span>
				<span class='value'>{profile.address.street}</span>
			</div>
			<div class='field flex flex-center-y gap-1'>
				<span class='label'>Suite:</span>
				<span class='value'>{profile.address.suite}</span>
			</div>
			<div class='field flex flex-center-y gap-1'>
				<span class='label'>City:</span>
				<span class='value'>{profile.address.city}</span>
			</div>
			<div class='field flex flex-center-y gap-1'>
				<span class='label'>Zip:</span>
				<span class='value'>{profile.address.zip}</span>
			</div>
		{/if}
	</div>

	<div class='profile-posts'>
		{#each profilePosts as post}<Post {post}/>{/each}
	</div>
</div>

<style>
	:global(#PageProfile .post) {
		margin-bottom: 60px;
	}
	.profile-banner {
		width: 100%;
		height: 200px;
		background-color: var(--nav-btn-hover-bg);
		border-radius: 6px;
	}
	.profile-header {
		margin-bottom: 20px;
		padding: 0 30px;
	}
	.profile-image-container {
		position: relative;
		height: 70px;
		width: 160px;
	}
	.profile-image {
		position: absolute;
		bottom: 0;
		width: 160px;
		height: 160px;
		background-color: var(--fg-clr);
		box-shadow: var(--shadow);
		border-radius: 30%;
	}
	.profile-image .icon {
		width: 70%;
		height: 70%;
	}
	.profile-image .icon.stroke > * {
		stroke: var(--prime);
	}
	.profile-name {
		font-size: 1.5em;
	}
	.profile-details {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 5px;
		margin: 20px 0 60px 0;
		padding: 20px;
		background-color: var(--fg-clr);
		box-shadow: var(--shadow);
		border-radius: 10px;
	}
	.profile-details .field .label {
		font-size: .75em;
	}
</style>
