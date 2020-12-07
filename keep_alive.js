var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);