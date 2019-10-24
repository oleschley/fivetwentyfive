<script>
    let routes = ['bar', 'scatter']
</script>

<svelte:head>
	<title>visuals</title>
</svelte:head>

<h1>Index for visuals</h1>
<ul>
    {#each routes as route}
        <li><a href="viz/{route}" >{route} chart route</a></li>
    {/each}
</ul>