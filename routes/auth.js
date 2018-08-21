// var express = require('express');
// var router = express.Router();
// var passport = require('passport');


// router.post('/', passport.authenticate('local'), function (req, res, next) {
// 	res.send('Successful Login.');
// });

// module.exports = router;
module.exports = (a, b, next) => { next(); }