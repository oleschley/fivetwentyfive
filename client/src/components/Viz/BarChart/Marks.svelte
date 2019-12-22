<script>
    export let data
    export let x
    export let y
    export let h
</script>

<style lang="scss">
    rect {
        fill: lighten($gray, 20);
        transition: fill 150ms ease-in;

        &:hover {
            fill: $color-primary
        }
    }
</style>

<g>
    {#each data as d}
        <rect
            x={x(d.city)}
            y={y(d.population)}
            width={x.bandwidth()}
            height={h - y(d.population)}>
        </rect>
    {/each}
</g>