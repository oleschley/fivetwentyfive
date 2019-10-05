const mongoose = require('mongoose')
const types = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    userId: {
        type: types.ObjectId,
        required: 'Field userId cannot be empty.'
    },
    created: {
        type: types.Date,
        required: 'Field created cannot be empty.'
    },
    updated: {
        type: types.Date,
        default: null
    },
    title: {
        type: types.String,
        required: 'Field title cannot be empty.'
    },
    body: {
        type: types.String,
        required: 'Field body cannot be empty.'
    },
    published: {
        type: types.Boolean,
        default: false
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post