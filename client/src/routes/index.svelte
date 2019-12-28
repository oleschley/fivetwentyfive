<script>
    import Logo from '../components/UI/Logo.svelte'
    import Items from '../components/UI/Navbar/Items.svelte'
    
</script>

<svelte:head>
	<title>Der nullte Grad</title>
</svelte:head>

<style lang="scss">

    .splash {
        height: 90vh;
        padding: 2rem 4rem;
        display: grid;
        grid-template-rows: 4rem repeat(6, 1fr);
    }

</style>

<div class="splash">
    <Items/>
	<Logo/>
</div>
