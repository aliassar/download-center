var passport = require('passport');
var User = require('../../models/users');

module.exports = (req, res) => {
	passport.authenticate('signup', { 
		successRedirect : '/secondHome', 
		failureRedirect : '/signup' 
	});
}