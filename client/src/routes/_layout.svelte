<!-- MAIN LAYOUT PAGE -->
<style>
	.wrapper {
		width: 95%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 3rem 1fr 2rem;
		grid-gap: 1rem;
	}

	footer {
		color: var(--gray);
	}
</style>

<script>
	import Navbar from '../components/UI/Navbar.svelte';
</script>

<div class="wrapper">
	<Navbar/>
	<main>
		<slot></slot>
	</main>
	<footer>put a footer here</footer>
</div>

