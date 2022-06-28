<script>
	import router from "page";
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Navbar from './components/Navbar.svelte';

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

	:global(a.active) {
		font-weight: bold;
		color: #ccddee;
	}
</style>

<Navbar page={path}/>
<svelte:component this={page} ctx={context} />
