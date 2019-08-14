// AS REFERENCE ONLY

import * as d3 from 'd3'

const m = {left: 50, right: 50, top: 50, bottom: 50}
const w = 900 - m.left - m.right
const h = 600 - m.top - m.bottom

const g = d3.select('#canvas-bar-chart')
            .append('svg')
            .attr('width', w + m.left + m.right)
            .attr('height', h + m.top + m.bottom)
            .append('g')
            .attr('transform', `translate(${m.left}, ${m.top})`)


d3.json('path/to/data').then(data => {

    data.forEach(d => {
        d.value = parseInt(d.value)
    })

    // Scales
    const xScale = d3.scaleBand()
                     .domain(data.map(d => d.key))
                     .range([0, w])
                     .padding(0.1)
    
    
    
    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d.value)])
                     .range([h, 0])
    
    // Axes
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisRight(yScale)

    g.append('g')
        .classed('x axis', true)
        .attr('transform', `translate(0, ${h})`)
        .call(xAxis)

    g.append('g')
        .classed('y axis', true)
        .attr('transform', `translate(${w}, 0)`)
        .call(yAxis)

    
    g.selectAll('rect')
        .data(data).enter()
        .append('rect')
            .attr('x', d => xScale(d.key))
            .attr('y', d => yScale(d.value))
            .attr('width', xScale.bandwidth)
            .attr('height', d => h - yScale(d.value))
            .attr('fill', 'steelblue')

})