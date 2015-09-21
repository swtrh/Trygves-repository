var express = require('express');
var app = express();
var port = (process.env.PORT || 3000);
console.log("Server running. Listening on port " + port);
app.get('/', function(req, res) {
	res.send('Hello ' + (req.query.name || 'John Doe'));
});
app.listen(port);
