// const utils = require('../../utils');

// module.exports = (req,res,next) =>{
//     if(req.body["firstName"] == "a")
//         utils.readFile('../../Pages/index.html', res, function(err) {});
//     else
//     	utils.readFile('../../Pages/signup.html', res, function(err) {});
// }
var passport = require('passport');
var express = require('express');
var router = express.Router();
var middlewares = require('../../middlewares')
middlewares.passport;

module.exports = () => {
    router.post('/', passport.authenticate('signup',{ successRedirect : '/', failureRedirect : '/signup' }));
    // app.get('/logout', function(req,res){
    //     req.logout();
    //     res.redirect('/');
    // });
};