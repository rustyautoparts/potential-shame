var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2, process.argv.length);
var result = [];
var count = 0;

function printResult() {
	for (i in result) {
		console.log(result[i]);
	}
}
function httpGet(index) {
	http.get(urls[i], function(res) {
		res.pipe(bl(function(err, data) {
			if (err) {
				return console.error(err);
			}
			result[index] = data.toString();
			count++;

			if (count === urls.length) {
				printResult();
			}
		}));
	});
}

for (var i = 0; i < 3; i++) {
	httpGet(i);
}
