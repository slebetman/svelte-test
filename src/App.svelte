<script>
	import router from 'page';
	import Navbar from './components/Navbar.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Bitcoin from './pages/Bitcoin.svelte';

	let currentPage;
	let currentPath;
	let context;
	let ROUTES = {}

	function page (url, component, label) {
		ROUTES[url] = label ? label : component.name;
		router(url, (ctx, next) => {
			currentPath = ctx.pathname;
			currentPage = component;
			context = ctx;
		});
	}

	page('/', Home);
	page('/about', About);
	page('/bitcoin', Bitcoin, 'Bitcoin Price');

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

<Navbar page={currentPath} routes={ROUTES}/>
<svelte:component this={currentPage} ctx={context} />
