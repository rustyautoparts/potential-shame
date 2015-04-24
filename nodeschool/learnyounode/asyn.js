var fs = require('fs');

var file = process.argv[2];
fs.readFile(file, function(err, data) {
	if (err) throw err;
	var content = data.toString();
	var lines = content.split('\n').length - 1;
	console.log(lines);
});
