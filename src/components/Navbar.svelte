<script>
    export let page;
    export let routes;
</script>

<nav>
    {#each Object.entries(routes) as [url, label]}
        <a href="{url}" class="{url === page ? 'active' : ''}">
            {label}
        </a>
    {/each}
</nav>

<style>
    nav {
        margin: 0;
        padding: 4px;
        background-color: #aabbcc;
    }

    a {
        font-size: 24px;
        color: #fff;
        margin: 0 10px;
    }

    a.active {
		color: #000;
	}
</style>
