const _ = require('lodash')
const fs = require('fs')
const moment = require('moment')
const mongoose = require('mongoose')
const data = require('./data/base')
// const async = require('async')

const models = require('./models')

function generateDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Generate user data
let users = []
for (let i = 0; i < 20; i++) {

    let fname = _.sample(data.firstNames)
    let lname = _.sample(data.lastNames)
    let mail = _.sample(data.mailProviders)

    let user = new models.User({
        _id: mongoose.Types.ObjectId(),
        name: fname,
        email: `${fname.toLowerCase()}.${lname.toLowerCase()}@${mail}`
    })

    users.push(user)
}


// Generate posts
let posts = []
for (let i = 0; i < data.titles.length; i++) {
    let created = generateDate(new Date(2016, 0, 1), new Date(2018, 0, 1))
    let updated = generateDate(created, new Date())

    let body = ''
    for (let i = 0; i < _.sample([1, 2, 3, 4]); i++) {
        body += _.sample(data.paragraphs)
    }

    let post = new models.Post({
        _id: mongoose.Types.ObjectId(),
        userId: _.sample(users)._id,
        created: moment(created).toISOString(),
        updated: moment(updated).toISOString(),
        title: data.titles[i],
        body: body
    })

    posts.push(post)
}
