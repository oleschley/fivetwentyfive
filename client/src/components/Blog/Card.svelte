<script>
    export let post
</script>

<style lang="scss">

    .card {
        height: 40vh;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        align-items: flex-start;
    }

    h2 {
        color: $color-primary;
    }

    time {
        color: $gray;
        align-self: flex-end;
    }

    .tags {
        align-self: flex-end;
        span {
            margin-right: .5rem;
            padding: 0 .5rem;
            font-size: 1rem;
            background-color: lighten($gray-light, 15%);
            color: $color-secondary-dark;
            border-radius: .2rem;
        }
    }
</style>

<div class="card">
    <h2>{post.title}</h2>
    <time>{post.created}</time>
    <div class="tags">
        {#each post.tags as tag}
            <span>#{tag}</span>
        {/each}
    </div>
    <div class="body">{@html post.body}</div>
</div>

