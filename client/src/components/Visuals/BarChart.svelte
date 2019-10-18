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
    const m = {left: 50, right: 50, top: 50, bottom: 50}
    const w = 600 - m.left - m.right
    const h = 400 - m.top - m.bottom

    let xScale
    let yScale
    let xAxis
    let yAxis
    let xBandwith

    // Set scales and axes
    function setXScale(data) {
        return scaleBand()
                .range([0, w])
                .padding(0.1)
                .domain(data.map(d => d.city))    
    }

    function setYScale(data) {
        return scaleLinear()
                .range([h, 0])
                .domain([0, max(data, d => d.population)])
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
        xScale = setXScale(data)
        yScale = setYScale(data)
        xAxis = setXScale(xScale)
        yAxis = setYScale(yScale)
    })
</script>

<svg width={w} height={h}>
    <g transform="translate({m.left},{m.top})">
        {#each data as d}
            <rect
                class="bar"
                x={xScale(d.city)}
                y={yScale(d.population)}
                width={xScale.bandwidth()}
                height={h - yScale(d.population)}>
            </rect>
        {/each}
    </g>
</svg>