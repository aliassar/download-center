var express = require('express');
var router = express.Router();
const indexRouteHandler = require('../controllers');

router.post('/signup', indexRouteHandler.signup);
router.post('/login', indexRouteHandler.login);
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;