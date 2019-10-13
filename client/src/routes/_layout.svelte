<!-- MAIN LAYOUT PAGE -->
<style>
	.wrapper {
		width: 95%;
		margin: 0 auto;
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
</div>

