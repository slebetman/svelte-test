<script>
    export let page;

    const ROUTES = {
        '/': 'Home',
        '/about': 'About'
    }
</script>

<nav>
    {#each Object.entries(ROUTES) as [url, label]}
        <a href="{url}" class="{url === page ? 'active' : ''}">
            {label}
        </a>
    {/each}
</nav>
