<style>

.bar {
    fill: var(--color-primary)
}

.bar:hover {
    fill: var(--color-secondary)
}

</style>

<script>
    import { onMount } from 'svelte'
    import { max } from 'd3-array'
    import { scaleBand, scaleLinear } from 'd3-scale'
    import { axisBottom, axisRight } from 'd3-axis'

    // Declare canvas
    const m = {left: 20, right: 20, top: 20, bottom: 20}
    const w = 800 - m.left - m.right
    const h = 400 - m.top - m.bottom

    let x
    let y
    let xAxis
    let yAxis

    // Set scales and axes
    function setX(data) {
        return scaleBand()
                .domain(data.map(d => d.city))
                .range([0, w])
                .padding(0.1)
    }

    function setY(data) {
        return scaleLinear()
                .domain([0, max(data, d => d.population)])
                .range([h, 0])
    }

    function setXAxis(scale) {
        return axisBottom(scale)
    } 
    function setYAxis(scale) {
        return axisRight(scale)
    } 

    let data = []
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
        x = setX(data)
        y = setY(data)
        xAxis = setXAxis(xScale)
        yAxis = setYAxis(yScale)
    })
</script>

<svg width={w} height={h}>
    <!-- <g transform="translate({m.left},{m.top})"> -->
    <g transform="translate({0},{0})">
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
</svg>