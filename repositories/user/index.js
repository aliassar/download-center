const fs = require('fs');
const Users = require('../../data/user.json');
console.log(Users);

exports.findByEmail = (email, callback) => {
  console.log(Users, Users.find(user => user.username === email));

	return callback(null, Users.find(user => user.username === email));
};


exports.findById = (id, callback) => {
  return callback(null, Users.find(user => user.id === id));
};
