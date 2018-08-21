// const User = require('../../repositories').User;

// module.exports = (username, password, done) => {
//   User.findByUsername(username, (err, user) => {
//       if(err) {

//       }
//       if(!user) {

//       }
//       if(user.password !== password) {

//       }
      
//   })
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../repositories').User;
var passport = require('passport');

module.exports = passport.use('signup',new LocalStrategy((email, password, done)=> {
            User.findByEmail(email, (err, user)=> {
                if (err) { return done(err); }
                if (user) { return done(null, false); }
                else {
                    var newUser = new User();
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);
                    newUser.save((err)=>{
                    if(err) throw err;
                    return done(null,newUser);
                    });
                }
            });
        }));
//todo it is not being exported
//     passport.use('login',new LocalStrategy({
//         emailField: 'email',
//         passwordField: 'password',
//         passReqToCallback:true
//     },
//         (email, password, done)=> {
//             User.findByEmail(email, (err, user)=> {
//               if (err) { return done(err); }
//               if (!user || !user.validPassword(password)) { return done(null, false); }
//               return done(null, user);
//             });
//         }
//     ));
// };

    // fs.readFile("./data/user.json", 'utf8',(err, data) =>{
    //   if(err)
    //     console.log(err)
    //   else {
    //     let users = JSON.parse(data);
    //     console.log(users);
    //     let foundUser = users.find((user) => {
    //       return user.username === username
    //     });
    //     console.log(foundUser);
    //     if(!foundUser) {
    //       return done(null, false, { message: 'Incorrect username.' });
    //     }
    //     if(foundUser.password !== password){
    //       return done(null, false, { message: 'Incorrect password.' });
    //     }
    //     return done(null, foundUser);
    //   }
    // })
  // }