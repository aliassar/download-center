var passport = require('passport');

module.exports = 
	passport.authenticate('signup', { 
		successRedirect : '/', 
		failureRedirect : '/signup' 
	});