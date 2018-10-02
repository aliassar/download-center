var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var uploadRouter  = require('./routes/upload');
var middlewares = require('./middlewares');
var User = require('./models/users');

var app = express();

mongoose.connect('mongodb://khorshid:123abc@ds022228.mlab.com:22228/khorshiddb', {useNewUrlParser:true});
// khorshid:123abc@ds022228.mlab.com
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public') ));
app.use('/web', express.static(path.join(__dirname, 'public/uploads') ));
app.use(session({ secret: 'keyboard cat', saveUninitialized: true, resave: true }));

middlewares.passport(passport);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/upload',uploadRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;