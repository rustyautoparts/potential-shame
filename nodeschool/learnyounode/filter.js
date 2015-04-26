var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];
fs.readdir(dir, function(err, files) {
	if (err) {
		throw error;
	} else {
		files.forEach(function(val) {
			if (path.extname(val) === ext) {
				console.log(val);
			}
		});
	}
});
