const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String
    }
})

UserSchema.pre('save', function (next) {
    var user = this
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err)
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err)
                }
                user.password = hash
                next()
            })
        })
    } else {
        return next()
    }
})

UserSchema.methods.comparePassword = function (pwd, cb) {
    bcrypt.compare(pwd, this.password, function (err, isMatch) {
        if (err) {
            return cb(err)
        }
        cb(null, isMatch)
    })
}

module.exports = mongoose.model('User', UserSchema)