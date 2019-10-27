<script>
    import { onMount } from 'svelte'
    import { scaleBand, scaleLinear } from 'd3-scale'
    import { max } from 'd3-array'

    import Marks from './Marks.svelte'
    import AxisX from './AxisX.svelte'
    import AxisY from './AxisY.svelte'

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
                .padding(0.4)

        y = scaleLinear()
                .domain([0, max(data, d => d.population)])
                .range([h, 0])
    })
</script>

<svg width="100%" height="100%" viewbox="0 0 {w + m.left + m.right} {h + m.top + m.bottom}">
    <g class="canvas" transform="translate({m.left},{m.top})">
        <Marks class="marks" {data} {x} {y} {h}/>
        <AxisX class="axis x" {data} {x} {w} {h}/>
        <AxisY class="axis y" {h}/>
    </g>
</svg>