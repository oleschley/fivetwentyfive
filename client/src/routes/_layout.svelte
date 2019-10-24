<!-- MAIN LAYOUT PAGE -->
<script>
	import Navbar from '../components/UI/Navbar.svelte';
</script>

<style>

.wrapper {
    width: 95%;
    margin: 0 auto;
    margin-top: 2vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 1fr 2rem;
    grid-gap: 1rem;
}

footer {
    color: var(--gray);
}

</style>

<div class="wrapper">
	<Navbar/>
	<main>
		<slot></slot>
	</main>
	<footer>俺はオレ</footer>
</div>

