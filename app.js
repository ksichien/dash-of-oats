// var setup
var express = require('express');  
var path = require('path');  
var favicon = require('serve-favicon');  
var logger = require('morgan');  
// var cookieParser = require('cookie-parser');  
// var bodyParser = require('body-parser');
var stylus = require('stylus');
var mongoose = require('mongoose');
var routes = require('./routes/index');  
// var users = require('./routes/users'); 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// bootstrap setup
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect bootstrap CSS
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect jQuery JS

// favicon setup
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// general setup
app.use(logger('dev'));
// app.use(bodyParser.json());  
// app.use(bodyParser.urlencoded({ extended: false }));  
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(stylus.middleware(path.join(__dirname, 'public')));

// mongoose setup
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/dash-of-oats');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   var recipeSchema = mongoose.Schema({
//     name: String
//   });
//   var Recipe = mongoose.model('Recipe', recipeSchema);
//   Recipe.find(function (err, recipes) {
//     if (err) return console.error(err);
//     console.log(recipes);
//   })
// });

// route setup
app.use(routes);

// server setup
var port = process.env.PORT || 3000;
app.listen(port);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {  
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

app.use(function(err, req, res, next) {  
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});

module.exports = app;
