<script>
    export let data
    export let x
    export let y
</script>

<style lang="scss">
    @import '../../../../styles/_theme.scss';

    .color {
        &.primary {
            fill: $color-primary;
        }
        &.secondary {
            fill: $color-secondary;
        }
        &.tertiary {
            fill: $color-tertiary;
        }
    }

</style>

<g class="marks">
    {#each data as d}
        <circle
            class="color {d.color}"
            cx={x(d.x)}
            cy={y(d.y)}
            r={d.r}
            opacity={d.opacity}>
        </circle>
    {/each}
</g>
