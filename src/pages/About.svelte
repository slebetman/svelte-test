<script>
    import Spinner from '../components/Spinner.svelte';
    import getFact from '../api/cat-facts.js';

    const fact = getFact();
</script>

<main>
	<h1>About!</h1>
	<p>Cat fact:</p>
    <div class="fact">
        {#await fact}
            <Spinner />
        {:then text}
            {text}
        {:catch err}
            Error: {err}
        {/await}
    </div>
</main>

<style>
	h1 {
		color: #77cc00;
	}

    .fact {
        min-width: 300px;
        text-align: center;
        margin: 0 calc(( 100% - 300px ) / 2);
        font-style: italic;
        font-family: serif;
    }
</style>