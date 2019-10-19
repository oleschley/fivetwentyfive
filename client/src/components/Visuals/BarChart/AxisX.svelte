<script>
    export let data
    export let x
    export let w
    export let h
</script>

<style>
line {
    stroke: var(--gray-dark);
}

text {
    font-size: 0.75rem;
}
</style>

<g transform="translate(0,{h})">
    <line x2="{w}"/>
    {#each data as d}
        <g class="tick" transform="translate({x(d.city)}, 0)">
            <line x1={x.bandwidth() / 2} x2={x.bandwidth() / 2} y2="3"></line>
            <text y="15" text-anchor="middle" dx={x.bandwidth() / 2}>{d.city}</text>
        </g>
    {/each}
</g>