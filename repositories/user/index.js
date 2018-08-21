const fs = require('fs');

exports.findByEmail = (email, callback) => {
	fs.readFile("../../data/user.json", 'utf8', (err, data) => {
      	if(err)
        	callback(err);
      	else {
        	let users = JSON.parse(data);
        	return callback(null, users.find((user) => {
          		return user.email === email
    	   	}));
    	  }
	})
}