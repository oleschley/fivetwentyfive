<script>
    import { onMount } from 'svelte'

	let bars = []

	onMount(async () => {
		const res = await fetch('http://localhost:5000/visuals/scatter');
		bars = await res.json();
    });

</script>

<ul>
    {#each bars as bar}
    <li>{JSON.stringify(bar)}</li>
    {/each}
</ul>