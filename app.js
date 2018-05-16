// variable setup
let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let logger = require('morgan')
let bodyParser = require('body-parser')
let stylus = require('stylus')
let routes = require('./routes/index')
let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// bootstrap setup
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css'))) // redirect bootstrap CSS
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js'))) // redirect bootstrap JS
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist'))) // redirect jQuery JS

// favicon setup
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// general setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(stylus.middleware(path.join(__dirname, 'public')))

// route setup
app.use(routes)

// port setup
let port = process.env.PORT || 3000
app.listen(port)

app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
