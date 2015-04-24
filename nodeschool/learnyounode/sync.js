var fs = require('fs');
var pathFile = process.argv[2];

var buffer = fs.readFileSync(pathFile);
var lines = buffer.toString().split('\n').length - 1;
console.log(lines);
