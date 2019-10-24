<script>
    const items = [
        {
            route: 'blog',
            display: 'なるほどね'
        }, {
            route: 'viz',
            display: 'data viz'
        }
    ]
</script>

<style lang="scss">

    @import '../../../../styles/_theme.scss';

    .container {
        display: flex;
        align-items: center;
        justify-self: flex-end;
    }

    a:hover, a:active, a:focus {
        font-weight: $font-weight;
    }

    .item {
        padding: 0 1rem;
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

<div class="container">
{#each items as item}
    <a href={item.route} class="item">{item.display}</a>
{/each}
</div>