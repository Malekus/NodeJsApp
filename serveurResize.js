var app = require('express');
var http = require('http');
var jimp = require('jimp');
const fs = require('fs');


app.get('/image', function(req, res){
	res.sendFile(__dirname + '/image');
  });

  http.Server(app).listen(1234);

  /*
httpServer = http.createServer(function(req, res){
  console.log("Un mec s'est connecté");
  res.end("Salut toi");
});

httpServer.listen(1234);*/

var io = require('socket.io').listen(httpServer);

// http://localhost:1234/socket.io/socket.io.js
io.sockets.on('connection', function(socket){
	socket.on('resize', function(params){
		var url = {};
		fs.readdir("image/personne", function(err, items){
			items.forEach(function(element, index){
				jimp.read("image/personne/"+ element, function(err, image){
					image.resize(params.height, params.width)
						.quality(90)
						.write("resize/personne/"+params.height+"x"+params.width+""+element);
				});
				console.log(''+element.replace(".png",""));
				console.log("http://localhost:1234/resize/personne/"+params.height+"x"+params.width+""+element);
				url[''+element.replace(".png","")] = "http://localhost:1234/resize/personne/"+params.height+"x"+params.width+""+element;
			});
		});

		console.log(url);

		socket.emit('url', url);
	});
})
	

	


		
		

	



		
	