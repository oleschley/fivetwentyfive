// External
const _ = require('lodash')
const moment = require('moment')
const mongoose = require('mongoose')

// Internal
const data = require('./data')
const models = require('./models')

// Mongo config
mongoose.Promise = global.Promise
mongoose.set('debug', true)

const uri = 'mongodb://localhost:27017/fivetwentyfive'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: 'testuser',
    pass: 'testpass'
}

function generateDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

async function seedUsers() {
    for (let i = 0; i < 20; i++) {
        let fname = _.sample(data.Users.firstNames)
        let lname = _.sample(data.Users.lastNames)
        let mail = _.sample(data.Users.mailProviders)
    
        await models.User.create({
            _id: mongoose.Types.ObjectId(),
            name: fname,
            email: `${fname.toLowerCase()}.${lname.toLowerCase()}@${mail}`
        })
    }
}

async function seedPosts() {
    for (let i = 0; i < data.Posts.titles.length; i++) {
        let created = generateDate(new Date(2016, 0, 1), new Date(2018, 0, 1))
        let updated = generateDate(created, new Date())
        let body = ''
        for (let i = 0; i < _.sample([1, 2, 3, 4]); i++) {
            body += _.sample(data.Posts.paragraphs)
        }
        let user = await models.User.aggregate().sample(1)

        await models.Post.create({
            _id: mongoose.Types.ObjectId(),
            userId: user[0]._id,
            created: moment(created).toISOString(),
            updated: moment(updated).toISOString(),
            title: data.Posts.titles[i],
            body: body
        })
    }
}

// Seed database
async function seedDatabase() {
    await mongoose.connect(uri, options).catch(err => console.error(err))
    await seedUsers()
            .then(() => console.log('Successfully seeded users'))
            .catch(err => console.error(err))
    await seedPosts()
            .then(() => console.log('Successfully seeded posts'))
            .catch(err => console.error(err))
    await mongoose.disconnect()
}

seedDatabase()