var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/users');
var fs = require('fs');
var path = require('path')


module.exports = (passport) => {
    passport.use('signup', new LocalStrategy({passReqToCallback: true}, (req, username, password, done) => {
        console.log('signUp: ', req, username, password, done);
        User.findOne( {username: username} , (err, user)=> {
            if (err) { return done(err); }
            if (user) { return done(null, false, { message: 'User Already Exists!' }); }
            else {
                var newUser = new User();
                newUser.username = username;
                newUser.password = newUser.generateHash(password);
                newUser.firstName = req.body.firstName;
                newUser.lastName = req.body.lastName;
                newUser.email = req.body.email;
                fs.mkdirSync(path.join(__dirname, '..', '..', 'public', 'uploads', username));

                newUser.save((err)=>{
                  if(err) throw err;
                    return done(null, newUser);
                });
            }
        });
    }));

    passport.use('login', new LocalStrategy((username, password, done) => {
        User.findOne( {username: username} , (err, user) => {
          if (err) { return done(err); }
          if (!user || !user.validPassword(password)) {
            return done(null, false, { message: 'Username or Password is Invalid!'});
          }
          return done(null, user);
        });
    }));
}