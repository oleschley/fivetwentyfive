<script>
    import _ from 'lodash'
    import { scaleLinear } from 'd3-scale'

    import Marks from './Marks.svelte'

    const num = 100
    const maxX = 1600
    const maxY = 800
    const colors = ['primary', 'secondary', 'tertiary']

    const m = {left: 20, right: 20, top: 20, bottom: 20}
    const w = 800 - m.left - m.right
    const h = 400 - m.top - m.bottom
    const x = scaleLinear().range([0, w]).domain([0, maxX])
    const y = scaleLinear().range([h, 0]).domain([0, maxY])

    function generate(n, maxX, maxY, colors) {
        let items = []
        for (let i = 0; i < n; i++) {
            items = [...items, {
                x: _.random(0, maxX),
                y: _.random(0, maxY),
                r: _.random(5, 20),
                color: _.sample(colors),
                opacity: Math.random()
            }]
        }
        return items
    }

    $: data = generate(num, maxX, maxY, colors)

</script>

<svg width="100%" height="100%" viewbox="0 0 {w} {h}">
    <g class="canvas">
        <Marks {data} {x} {y}/>
    </g>
</svg>