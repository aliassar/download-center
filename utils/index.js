var fs = require('fs');
exports.readFile = (fileName, res, callback) => {
	fs.readFile(fileName, function(err, data) {
		if(err)
			return callback(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        callback(null);
    });
}