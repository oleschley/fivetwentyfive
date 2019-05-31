const passport = require('passport')
const settings = require('../config/settings')
require('../config/passport')(passport)
const jwt = require('jsonwebtoken')

const User = require('../models/user')
const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {

    if (!req.body.username || !req.body.password) {
        return res.json({ success: false, msg: 'Please insert username and password.' })
    }

    const newUser = new User({
            username: req.body.username,
            password: req.body.password
    })

    newUser.save((err, user) => {
        if (err) {
            return res.json({ success: false, msg: 'Username already exists.' })
        }
        const token = jwt.sign(user.toJSON(), settings.secret)
        res.json({
            success: true,
            token: `JWT ${token}}`,
            msg: 'Created new user.'
        })
    })
})

router.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) throw err

        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' })
        } else {
            // check if password matches
            user.comparePassword(req.body.password, (err, match) => {
                if (match && !err) {
                    // create token and return respone
                    const token = jwt.sign(user.toJSON(), settings.secret)
                    res.json({
                        success: true,
                        token: `JWT ${token}}`,
                        msg: 'Successfully registered.'
                    })
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' })
                }
            })
        }
    })
})

module.exports = router