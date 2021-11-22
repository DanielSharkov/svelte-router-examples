<script>
	export let props
</script>

<div class='page'>
	<img
		src='https://raw.githubusercontent.com/DanielSharkov/svelte-router/master/logo-animated.svg'
		alt='Svelte Router Logo'
	/>
	<h1>
		Svelte
		<span class='router'>{props.name}</span>
	</h1>
	<div class='author'>
		<span>Made with</span>
		<span class='heart'>❤️</span>
		<span>by</span>
		<a href='https://github.com/DanielSharkov' target='_blank' class='btn user flex flex-center'>
			<img src='https://avatars.githubusercontent.com/u/26609752?v=4' alt='Daniel Sharkov'/>
			<span>Daniel Sharkov</span>
		</a>
		<span>and</span>
		<a href='https://github.com/romshark' target='_blank' class='btn user flex flex-center'>
			<img src='https://avatars.githubusercontent.com/u/9574743?v=4' alt='Roman Sharkov'/>
			<span>Roman Sharkov</span>
		</a>
	</div>
	<p>Visit the <a href='https://github.com/danielsharkov/svelte-router' target='_blank'>Svelte Router GitHub Repo</a> to learn how to create Svelte apps with this Router.</p>
</div>

<style>
	img {
		width: 200px;
		height: 200px;
	}
	.page {
		text-align: center;
		padding: 2em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: var(--prime);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 500;
		margin: 40px 0 10px 0;
	}
	h1 .router {
		color: var(--seco);
	}
	@media (min-width: 640px) {
		.page {
			max-width: none;
		}
	}
	.author {
		margin-bottom: 60px;
		color: #B1B1C5;
		font-size: .75em;
	}
	.author, .author .user {
		gap: .5em;
		color: #B1B1C5;
	}
	.author .user {
		margin: 0;
		padding: .5em .75em .5em .5em;
		background-color: transparent;
		border-radius: 2em;
		border: none;
	}
	.author .user:hover, .author .user:focus {
		background-color: var(--author-hover-bg);
		transform: translateY(-.15em);
		box-shadow: 0 2px 4px rgba(0,0,0, .1);
		color: var(--prime);
	}
	.author img {
		width: 25px;
		height: 25px;
		border-radius: 100%;
		border: solid 2px rgba(255, 255, 255, .5);
	}
	.author .heart {
		font-size: 1rem;
		margin: 0 .5em;
		animation: infinite 1.25s heartBeating;
	}
	@keyframes heartBeating {
		0%	 {transform: scale(1)}
		15%	 {transform: scale(1.125)}
		30%	 {transform: scale(1)}
		45%	 {transform: scale(1.25)}
		100% {transform: scale(1)}
	}
</style>
