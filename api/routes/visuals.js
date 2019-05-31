const fs = require('fs')
const express = require('express')
const router = express.Router()


// bar chart
router.get('/bar', (req, res) => {
    data = fs.readFileSync('./public/data/random-categorical.json')
    res.json(JSON.parse(data))
})

// scatter plot
router.get('/scatter', (req, res) => {
    let data = []

    for (let i = 0; i < 100; i++) {
        let x, y, radius, color, opacity
        x = Math.random() * 500
        y = Math.random() * 500
        radius = Math.random() * (20 - 5) + 5

        color = Math.random()

        if (color < .66) {
            if (color < .33) {
                color = 'steelblue'
            } else {
                color = 'orange'
            }
        } else {
            color = 'firebrick'
        }

        opacity = Math.random() * (.75 - .1) + .1

        data.push({ x, y, radius, color, opacity })
    }

    res.json(data)
})

module.exports = router