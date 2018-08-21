var LocalStrategy = require('passport-local').Strategy;
var User = require('../../repositories').User;

// exports.signup = passport.use(new LocalStrategy((username, password, done) => {
//     User.findByEmail(username, (err, user)=> {
//         if (err) { return done(err); }
//         if (user) { return done(null, false, { message: 'User Already Exists!' }); }
//         else {
//             var newUser = new User();
//             newUser.username = username;
//             newUser.password = newUser.generateHash(password);
//             newUser.save((err)=>{
//             if(err) throw err;
//             return done(null,newUser);
//             });
//         }
//     });
// }));
//todo it is not being exported
module.exports = (passport) => {
    console.log('done');
    console.log(`Current directory: ${process.cwd()}`);
    passport.use('login', new LocalStrategy((username, password, done) => {
        console.log(username, password);
        console.log(`Current directory: ${process.cwd()}`);
        User.findByEmail(username, (err, user) => {
          if (err) { return done(err); }
          if (!user || user.password !== password) {
            return done(null, false, { message: 'Username or Password is Invalid!'});
          }
          return done(null, user);
        });
    }));
}