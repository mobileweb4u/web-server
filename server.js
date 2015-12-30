var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello Express!');
});

app.get('/about', function (req, res) {
	res.send('About Us');
});
console.log(__dirname);

app.listen(3000);
