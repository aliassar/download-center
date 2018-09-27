var express = require('express');
var router = express.Router();
const indexRouteHandler = require('../controllers');

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/login', (req, res) => {
    res.render('login')
});
router.get('/signup', (req, res) => {
    res.render('signup')
});
router.post('/signup', indexRouteHandler.signup);
router.post('/login', indexRouteHandler.login);
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;