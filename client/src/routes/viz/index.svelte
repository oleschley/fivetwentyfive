<svelte:head>
	<title>DDN Visualizations</title>
</svelte:head>


<script>
    let routes = ['bar', 'scatter']
</script>


<ul>
    {#each routes as route}
        <li><a href="viz/{route}" >{route} chart route</a></li>
    {/each}
</ul>