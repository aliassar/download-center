var passport = require('passport');
var User = require('../../models/users');

module.exports = passport.authenticate('signup', { 
		successRedirect : '/secondHome', 
		failureRedirect : '/signup' 
	});