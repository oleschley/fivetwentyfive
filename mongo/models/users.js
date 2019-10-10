import mongoose from 'mongoose'

const types = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    _id: {
        type: types.ObjectId,
        required: 'Field _id cannot be empty.'
    },
    name: {
        type: types.String,
        require: 'Field name cannot be empty.',
        trim: true
    },
    email: {
        type: types.String,
        require: 'Field email cannot be empty.',
        trim: true,
        unique: true
    },
    posts: [{
        type: types.ObjectId,
        ref: 'Post'
    }]
})

const User = mongoose.model('User', userSchema)

export { User as default }
