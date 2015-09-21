var express = require('express');
var app = express();
var port = 3000;
console.log("Server running. Listening on port " + port);
app.get('/', function(req, res) {
	res.send('Hello ' + req.query.name);
});
app.listen(port);
