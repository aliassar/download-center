var express = require('express');
var fs = require('fs');
var router = express.Router();
const indexRouteHandler = require('../controllers');
const utils             = require('../utils');
var passport = require('passport');

// router.post('/signup', indexRouteHandler.signup(router, passport));
router.post('/signup', indexRouteHandler.signup);
// router.post('/login', indexRouteHandler.login(router, passport));

module.exports = router;