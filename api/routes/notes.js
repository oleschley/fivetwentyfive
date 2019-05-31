const moment = require('moment')
const express = require('express')
const router = express.Router()

// db
const db = require('../models')

// index route
router.get('/', (req, res) => {
    console.log(req.user)
    db.find({ 'author.username': 'bolek' }, (err, notes) => {
        if (err) {
            console.log(err)
        } else {
            res.json(notes)
        }
    })
})


// create route
router.post('/', (req, res) => {
    req.body.note.body = req.sanitize(req.body.note.body)
    db.create(req.body.note, (err, note) => {
        if (err) {
            res.render('./notes/new', { title: '.new note' })
        } else {
            note.author.id = process.env.BLK_USER_ID
            note.author.username = process.env.BLK_USER_NAME
            note.save()
            res.redirect('./notes')
        }
    })
})

// show route
router.get('/:id', (req, res) => {
    db.findById(req.params.id, (err, foundNote) => {
        if (err) {
            console.log(err)
        } else {
            res.render('./notes/show', { title: '.fivetwentyfive/notes', note: foundNote })
        }
    })
})

// edit route
router.get('/:id/edit', (req, res) => {
    db.findById(req.params.id, (err, foundNote) => {
        if (err) {
            console.log(err)
        } else {
            res.render('./notes/edit', { title: '.fivetwentyfive/notes', note: foundNote })
        }
    })
})

// update route
router.put('/:id', (req, res) => {
    req.body.note.body = req.sanitize(req.body.note.body)
    req.body.note.updated = moment().valueOf()
    db.findByIdAndUpdate(req.params.id, req.body.note, (err, updatedNote) => {
        if (err) {
            res.redirect('./')
            console.log(err)
        } else {
            res.redirect('./' + req.params.id)
        }
    })
})

// destroy route
router.delete('/:id', (req, res) => {
    db.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect('../notes')
            console.log(err)
        } else {
            res.redirect('../notes')
        }
    })
})

module.exports = router