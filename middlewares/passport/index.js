var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/users');


module.exports = (passport) => {
    passport.use('signup', new LocalStrategy((req, email, password, done) => {
        User.findOne( {email: email} , (err, user)=> {
            if (err) { return done(err); }
            if (user) { return done(null, false, { message: 'User Already Exists!' }); }
            else {
                var newUser = new User();
                newUser.email = email;
                newUser.password = newUser.generateHash(password);
                newUser.firstName = req.body.firstName;
                newUser.lastName = req.body.lastName;
                newUser.save((err)=>{
                  if(err) throw err;
                    return done(null,newUser);
                });
            }
        });
    }));

    passport.use('login', new LocalStrategy((email, password, done) => {
        User.findOne( {email: email} , (err, user) => {
          if (err) { return done(err); }
          if (!user || !user.validPassword(password)) {
            return done(null, false, { message: 'Username or Password is Invalid!'});
          }
          return done(null, user);
        });
    }));
}