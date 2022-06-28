<script>
    import Spinner from '../components/Spinner.svelte';
    import getBitcoinPrice from '../api/coindesk';

    const info = getBitcoinPrice();
</script>

<main>
	<h1>Bitcoin Price</h1>
    <div class="info">
        {#await info}
            <Spinner />
        {:then data}
            <span class="price">${data.bpi.USD.rate}</span> USD / BTC
        {:catch err}
            Error: {err}
        {/await}
    </div>
</main>

<style>
    .info {
        text-align: center;
        font-size: 48px;
        color: #666666;
    }

    .price {
        color: #339900;
    }
</style>