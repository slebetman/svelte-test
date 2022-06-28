<script>
    import Spinner from '../components/Spinner.svelte';

    export let ctx;
    export const fact = fetch('https://catfact.ninja/fact')
        .then(x => x.json())
        .then(x => x.fact);
</script>

<main>
	<h1>About!</h1>
	<p>Cat fact:</p>
    <div class="fact">
        {#await fact}
            <Spinner />
        {:then x}
            {x}
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
        margin: 0 calc(( 100% - 480px ) / 2);
        font-style: italic;
        font-family: serif;
    }
</style>