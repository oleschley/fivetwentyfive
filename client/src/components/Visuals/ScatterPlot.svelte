<script>
    let circles
    let getData = fetch('http://localhost:5000/graphql/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({query: `{ 
            scatter {
                x
                y
                radius
                color
            }
        }`})
    }).then(data => data.json())
      .then(data => circles = data.data.scatter)

</script>

<ul>
    {#await getData}
        <p>Loading...</p>
    {:then data}
        {#each circles as circle}
            <p>{JSON.stringify(circle)}</p>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</ul>