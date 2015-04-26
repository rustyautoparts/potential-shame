var fs = require('fs');
var path = require('path');

var dirFilter = function(dir, filter, callback) {
		var extension = '.' + filter;
		fs.readdir(dir, function(err, files) {
			if (err) {
				callback(err, null);
			} else {
				result = [];
				files.forEach(function(val) {
					if (path.extname(val) === extension) {
						result.push(val);
					}
				});
				callback(null, result);
			}
		});
	};
module.exports = dirFilter; 
