<script>
	import Navbar from './UI/Navbar.svelte'
	import Header from './UI/Header.svelte'
	import Article from './UI/Article.svelte'
</script>

<style>

	.app {
		font-family: 'Source Sans Pro';
		color: var(--grey-dark);
		
		display: grid;
		grid-template-rows: 1fr 8fr 1fr;
		grid-template-columns: 15% repeat(3, 1fr);
		grid-gap: 3rem;

		grid-template-areas: "header header header"
							 "main main main"
							 "footer footer footer";
	}

	.navbar {grid-area: header}

	.content {grid-area: main}

</style>


<Navbar class="navbar"/>
<div class="app">
	<div class="content">
		<Header name=".525"/>
		<Article/>
	</div>
	

</div>
