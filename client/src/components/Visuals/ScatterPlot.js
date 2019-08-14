// AS REFERENCE ONLY

import * as d3 from 'd3'

// Prepare canvas
const m = { left: 50, right: 50, top: 50, bottom: 50 }
const w = 900 - m.left - m.right
const h = 600 - m.top - m.bottom

const svg = d3.select('#canvas-scatter')
                .append('svg')
                .attr('width', w + m.left + m.right)
                .attr('height', h + m.top + m.bottom)

svg.append('clipPath')
    .attr('id', 'canvas')
    .append('rect')
    .attr('x', m.left)
    .attr('y', m.top)
    .attr('width', w)
    .attr('height', h)
            
const g = svg.append('g')
                .attr('id', 'circles')
                .attr('clip-path', 'url(#canvas)')
                

// Scales
const xScale = d3.scaleLinear().range([0, w])
const yScale = d3.scaleLinear().range([h, 0])

// Axes
const xAxis = d3.axisBottom(xScale)
const xAxisCall = svg.append('g')
    .classed('x axis', true)
    .attr('transform', `translate(${m.left}, ${h + m.top})`)

const yAxis = d3.axisLeft(yScale)
const yAxisCall = svg.append('g')
    .classed('y axis', true)
    .attr('transform', `translate(${m.left}, ${m.top})`)

d3.json('path/to/data').then(data => {

    // Scales
    xScale.domain([0, d3.max(data, d => d.x)])
    yScale.domain([0, d3.max(data, d => d.y)])

    // Call axes
    xAxisCall.call(xAxis)
    yAxisCall.call(yAxis)

    // Draw circles
    g.selectAll('circle')
        .data(data).enter()
        .append('circle')
        .attr('cx', d => xScale(d.x) + m.left)
        .attr('cy', d => yScale(d.y) + m.top)
        .attr('r', d => d.radius)
        .attr('fill', d => d.color)
        .attr('opacity', d => d.opacity)

})
