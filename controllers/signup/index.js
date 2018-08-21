var passport = require('passport');
var express = require('express');
var router = express.Router();
var middlewares = require('../../middlewares')
middlewares.passport;

module.exports = passport.authenticate('local', { successRedirect : '/', failureRedirect : '/signup' });