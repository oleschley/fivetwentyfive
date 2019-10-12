<script>
    let bars
    let getData = fetch('http://localhost:8000', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({query: `{ 
            bars {
                city
                population
            }
        }`})
    }).then(data => data.json())
      .then(data => bars = data.data.bars)
</script>

<ul>
    {#await getData}
        <p>Loading...</p>
    {:then data}
        {#each bars as bar}
            <p>{JSON.stringify(bar)}</p>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</ul>