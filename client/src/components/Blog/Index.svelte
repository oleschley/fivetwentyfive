<script>
import Card from './Card.svelte'

import { onMount } from 'svelte'

let posts = []
onMount(async () => {
    let response = await fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({query: `{ 
                posts {
                    created
                    updated
                    title
                    body
                    tags
                }
            }`})
        })

    response = await response.json()
    posts = response.data.posts
})
</script>

<style lang="scss">
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-flow: dense;
        grid-gap: 1rem;
    }

    :nth-child(4n -1) {
        grid-column: 2;
    }

</style>

<div class="container">
    {#each posts as post}
        <div><Card {post} /></div>
        <div>Put some art here...</div>
    {/each}
</div>
