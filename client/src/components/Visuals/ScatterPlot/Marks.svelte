<script>
    export let data
    export let x
    export let y
</script>

<g class="marks">
    {#each data as d}
        <circle
            cx={x(d.x)}
            cy={y(d.y)}
            r={d.r}
            fill={d.color}
            opacity={d.opacity}>
        </circle>
    {/each}
</g>
