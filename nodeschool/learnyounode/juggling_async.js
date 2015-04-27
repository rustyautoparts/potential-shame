var http = require('http');
var bl = require('bl');

var url = [process.argv[2], process.argv[3], process.argv[4]];
var result = ['', '', ''];
for (var i = 0; i < url.length; i++) {
	http.get(url[i], function(res) {
		res.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);
			data = data.toString();
			result = result.splice(i, 1, data);
		}));
	});
}
for (var i = 0; i < result.length; i++) {
	console.log(result[i]);
}
