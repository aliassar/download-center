var express = require('express');
var fs = require('fs');
var router = express.Router();
const indexRouteHandler = require('../controllers');
const utils             = require('../utils');

// router.post('/signup', indexRouteHandler.signup(router, passport));
router.post('/signup', indexRouteHandler.signup);
router.post('/login', indexRouteHandler.login);
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;