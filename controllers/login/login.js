// const utils = require('../../utils');

// module.exports = (req,res,next) =>{
//     if(req.body["firstName"] == "a")
//         utils.readFile('../../public/index.html', res, function(err) {});
//     else
//     	utils.readFile('../../public/login.html', res, function(err) {});
// }

module.exports = (app, passport)=> {
    app.post('/login', passport.authenticate('login',{ successRedirect : '/', failureRedirect : '/login' }));
}