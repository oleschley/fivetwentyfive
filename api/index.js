// Express App Setup
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const createError = require('http-errors')
const express = require('express')
const expressSanitizer = require('express-sanitizer')
const logger = require('morgan')
const methodOverride = require('method-override')
const path = require('path')

// Models
User = require('./models/user')

const app = express();
const port = 5000

// app config
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(expressSanitizer())
app.use(logger('dev'))
app.use(cookieParser())

// view engine config
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// locals
app.locals.moment = require('moment')

// static files
app.use(express.static('public'))

// routes
const authRoutes = require('./routes/auth')
const notesRoutes = require('./routes/notes')
const visualsRoutes = require('./routes/visuals')
const recipesRoutes = require('./routes/recipes')

app.use('/api/auth', authRoutes)
app.use('/api/notes', notesRoutes)
app.use('/api/visuals', visualsRoutes)
app.use('/api/recipes', recipesRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error', { title: 'Error' })
})

module.exports = app


app.listen(port, () => {
  console.log("Server running on port " + port)
})