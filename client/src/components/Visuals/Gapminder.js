// AS REFERENCE ONLY

import * as d3 from 'd3'

const m = {left: 100, right: 50, top: 50, bottom: 100}
const w = 900 - m.left - m.right
const h = 600 - m.top - m.bottom

let time = 0

const g = d3.select('#canvas-gapminder')
        .append('svg')
        .attr('width', w + m.left + m.right)
        .attr('height', h + m.top + m.bottom)
        .append('g')
        .attr('transform', `translate(${m.left}, ${m.top})`)

// Scales
const xScale = d3.scaleLog()
    .base(10)
    .domain([100, 150000])
    .range([0, w])

const yScale = d3.scaleLinear()
    .domain([0, 90])
    .range([h, 0])

const colorScale = d3.scaleOrdinal(d3.schemeCategory10)

const areaScale = d3.scaleLinear()
    .range([40 * Math.PI, 3000 * Math.PI])
    .domain([2000, 1400000000]);

// Axes
const xAxis = d3.axisBottom(xScale)
    .tickValues([400, 4000, 40000])
    .tickFormat(d3.format("$,"));

const yAxis = d3.axisLeft(yScale)
    .tickFormat(d => +d)

const xAxisCall = g.append('g')
    .classed('x axis', true)
    .attr('transform', `translate(0, ${h})`)

xAxisCall.call(xAxis)

const yAxisCall = g.append('g')
    .classed('y axis', true)

yAxisCall.call(yAxis)

// X and Y Axis
g.append("text")
    .attr("y", h + 50)
    .attr("x", w / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("GDP Per Capita ($)");

g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -40)
    .attr("x", -170)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Life Expectancy (Years)")

const timeLabel = g.append("text")
    .attr("y", h - 10)
    .attr("x", w - 40)
    .attr("font-size", "40px")
    .attr("opacity", "0.4")
    .attr("text-anchor", "middle")
    .text("1800");

d3.json('path/to/data').then(data => {

    // Data wrangling
    const cleanData = data.map(year => year["countries"].filter(country => (country.income && country.life_exp))
        .map(country => {
        country.income = +country.income
            country.life_exp = +country.life_exp
            return country
        }))

    // Put circles on the canvas
    d3.interval(() => {
        if (!time) {
            g.selectAll('circle')
                .data(cleanData[0], d => d.country).enter()
                .append('circle')
                .attr('cx', d => xScale(d.income))
                .attr('cy', d => yScale(d.life_exp))
                .attr('r', d => Math.sqrt(areaScale(d.population) / Math.PI))
                .attr('fill', d => colorScale(d.continent))
                .attr('opacity', .65)
            
            time = 1
        } else {
            time = (time < 214) ? time + 1 : 0
            update(cleanData[time])
        }
    }, 100)

})

function update(data) {
    
    // Set transition time
    const t = d3.transition().duration(100)

    // Join data
    let circles = g.selectAll('circle').data(data, d => d.country)

    // Remove existing circles
    circles.exit()
        .attr('class', 'exit')
        .remove()

    // Add new circles
    circles.enter()
        .append('circle')
        .attr('class', 'enter')
        .merge(circles)
        .transition(t)
        .attr('cx', d => xScale(d.income))
        .attr('cy', d => yScale(d.life_exp))
        .attr('r', d => Math.sqrt(areaScale(d.population) / Math.PI))
        .attr('fill', d => colorScale(d.continent))
        .attr('opacity', .65)

    // Update time label
    timeLabel.text(+(time + 1800))
}