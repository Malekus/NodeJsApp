var http = require('http');
var jimp = require('jimp')

httpServer = http.createServer(function(req, res){
  console.log("Un mec s'est connecté");
  res.end("Salut toi");
});

httpServer.listen(1234);

var io = require('socket.io').listen(httpServer);

// http://localhost:1234/socket.io/socket.io.js
io.sockets.on('connection', function(socket){
	console.log("Nouveau mec");

	socket.on('resize', function(params){
		console.log(params);
	})
})