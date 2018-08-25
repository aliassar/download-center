const Users = require('../../data/user.json');

exports.findByEmail = (email, callback) => {
	return callback(null, Users.find(user => user.username === email));
};


exports.findById = (id, callback) => {
  return callback(null, Users.find(user => user.id === id));
};
