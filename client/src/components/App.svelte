<script>
	import Header from './UI/Header.svelte'
	import Article from './UI/Article.svelte'
</script>

<style lang="sass">
	@import '../styles/styles.sass';

	.app {
		font-family: 'Source Sans Pro';
		color: $grey_dark;
	}

</style>

<div class="app">
	<Header name=".525"/>
	<Article/>
</div>
