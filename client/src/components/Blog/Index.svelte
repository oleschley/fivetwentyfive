<script>
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

{#each posts as post}
    <h3>{post.title}</h3>
    <div>{@html post.body}</div>
    <ul>
        {#each post.tags as tag}
            <li>{tag}</li>
        {/each}
    </ul>
{/each}