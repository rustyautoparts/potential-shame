var express = require('express');
var path = require('path');
var app = express();
var port = process.argv[2];

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('stylus').middleware(__dirname + '/public'));
console.log('Trying to listen on port ' + port);
app.listen(port);

