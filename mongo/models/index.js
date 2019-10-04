const mongoose = require('mongoose')

const Post = require('./posts')
const User = require('./users')

mongoose.Promise = Promise
mongoose.set('debug', true)

mongoose.connect('mongodb://testuser:testpass@localhost:27018/fivetwentyfive', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.error(err))



module.exports = {
    Post,
    User
}