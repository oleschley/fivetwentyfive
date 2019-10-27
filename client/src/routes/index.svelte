<script>
	import Logo from '../components/UI/Logo.svelte'
</script>

<svelte:head>
	<title>DATA DESIGN NARUHODO</title>
</svelte:head>

<style lang="scss">

    .splash {
        height: 90vh;
        padding-top: 4rem;
        padding-left: 4rem;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(6, 1fr);

        grid-template-areas:
            "logo logo logo . . . . . ."
            "logo logo logo . . . . . ."
            "logo logo logo . ch ch ch ch ."
            " . . . . ch ch ch ch ."
            " . . . . ch ch ch ch ."
            " . . . . ch ch ch ch ."
    }

</style>

<div class="splash">
	<Logo/>
</div>
