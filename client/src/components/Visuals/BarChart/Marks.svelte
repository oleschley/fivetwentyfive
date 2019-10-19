<script>
    export let data
    export let x
    export let y
    export let h
</script>

<style>
rect {
    fill: var(--gray-lighter);
    transition: fill 150ms ease-in;
}

rect:hover {
    fill: var(--color-primary);
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