var filterExt = require('./filter.js');

var dirname = process.argv[2];
var ext = process.argv[3];

filterExt(dirname, ext, function(err, files) {
	files.forEach(function(val) {
		console.log(val);
	});
});
