<style lang="scss">

    @import '../../../../styles/_theme.scss';

    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        justify-items: center;
        text-transform: uppercase;
    }

    a:hover, a:active, a:focus {
        font-weight: $font-weight;
    }

    .item {
        margin-bottom: 0.25rem;
        color: $gray-dark;

        &::after {
            display:block;
            content: '';
            border-bottom: solid 1px $gray-dark;  
            transform: scaleX(0);  
            transition: transform 250ms ease-in-out;
        }

        &:hover::after {
            transform: scaleX(1);
        }
    }

</style>

<script>
    const items = ['blog', 'visuals', 'recipes', 'training']
</script>


<div class="container">
{#each items as item}
    <a href={item} class="item">{item}</a>
{/each}
</div>