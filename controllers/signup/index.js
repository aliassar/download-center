var passport = require('passport');
var User = require('../../models/users');

module.exports = (req, res) => {
	passport.authenticate('signup', { 
		successRedirect : '/secondHome', 
		failureRedirect : '/signup' 
	})(req, res, () => {
		User.updateOne({email: req.body.email}, {
			firstName: req.body.firstName,
			lastName: req.body.lastName
		});
	});
}