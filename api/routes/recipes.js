const express = require('express')
const router = express.Router()

// db
// connect to models


// index route
router.get('/', (req, res) => {
    res.json({
        title: 'this is the recipes route',
        number: 15
    })
});

// new route
// router.get('/new')

// create route
// router.post('/')

// show route
// router.get('/:id')

// edit route
// router.get('/:id/edit')

// update route
// router.put('/:id')

// destroy route
// router.delete('/:id')

module.exports = router