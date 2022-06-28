<script>
	import router from "page";
	import Navbar from './components/Navbar.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Bitcoin from './pages/Bitcoin.svelte';

	let page;
	let path;
	let context;

	function goto (component) {
		return (ctx, next) => {
			path = ctx.pathname;
			page = component;
			context = ctx;
		}
	}

	router('/', goto(Home));
	router('/about', goto(About));
	router('/bitcoin', goto(Bitcoin));

	router.start();
</script>

<style>
	:global(main) {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(h1) {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		:global(main) {
			max-width: none;
		}
	}
</style>

<Navbar page={path}/>
<svelte:component this={page} ctx={context} />
