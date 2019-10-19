<style>

.bar {
    fill: var(--gray-lighter);
    transition: fill 150ms ease-in;
}

.bar:hover {
    fill: var(--color-primary);
}

line {
    stroke: var(--gray-dark);
}

text {
    font-size: 0.75rem;
}

</style>

<script>
    import { onMount } from 'svelte'
    import { scaleBand, scaleLinear } from 'd3-scale'
    import { axisBottom, axisRight } from 'd3-axis'
    import { max } from 'd3-array'

    // Declare variables and canvas
    let x
    let y
    let data = []

    const m = {left: 20, right: 20, top: 20, bottom: 20}
    const w = 800 - m.left - m.right
    const h = 400 - m.top - m.bottom

    onMount(async () => {
        let response = await fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({query: `{ 
                bars {
                    city
                    population
                }
            }`})
        })

        response = await response.json()
        data = response.data.bars

        x = scaleBand()
                .domain(data.map(d => d.city))
                .range([0, w])
                .padding(0.1)

        y = scaleLinear()
                .domain([0, max(data, d => d.population)])
                .range([h, 0])
    })

</script>

<svg width="100%" height="100%" viewbox="0 0 {w + m.left + m.right} {h + m.top + m.bottom}">
    <g class="data" transform="translate({m.left},{m.top})">
        {#each data as d}
            <rect
                class="bar"
                x={x(d.city)}
                y={y(d.population)}
                width={x.bandwidth()}
                height={h - y(d.population)}>
            </rect>
        {/each}
    </g>
    <g class="axis x" transform="translate({m.left},{h + m.top})">
        <line x2="{w}"/>
        {#each data as d}
            <g class="tick" transform="translate({x(d.city)}, 0)">
                <line x1="{x.bandwidth() / 2}" x2="{x.bandwidth() / 2}" y2="3"></line>
                <text y="15" text-anchor="middle" dx="{x.bandwidth() / 2}">{d.city}</text>
            </g>
        {/each}
    </g>
    <g class="axis y" transform="translate({m.left},{m.top})">
        <line y2="{h}"/>
    </g>
</svg>