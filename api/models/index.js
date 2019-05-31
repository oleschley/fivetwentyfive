const mongoose = require('mongoose')

let conn = ''

if (process.env.NODE_ENV === 'production') {
    conn = `mongodb+srv://${process.env.FTF_USER}:${process.env.FTF_PWD}@${process.env.FTF_DB}?retryWrites=true`    
} else {
    conn = `mongodb://dev:dev@mongo:27017/fivetwentyfive?authSource=admin`
}

mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(conn, { useNewUrlParser: true }, function(err) {
    if (err) {
        console.error(err)
    }
})

module.exports = require('./notes.js');
