<style>

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {color: cornflowerblue}

</style>

<script>
    let routes = ['bar']

</script>


<svelte:head>
	<title>visuals</title>
</svelte:head>

<h1>Index for visuals</h1>
<ul>
    {#each routes as route}
        <li><a href="visuals/{route}" >{route} chart route</a></li>
    {/each}
</ul>