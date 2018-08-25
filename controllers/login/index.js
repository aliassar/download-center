var passport = require('passport');

module.exports =
    passport.authenticate('login', {
    	successRedirect : '/secondHome',
    	failureRedirect : '/login',
    });
