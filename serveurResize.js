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
		var url = {
				home: 'home',
				jouer:'jouer',
				option:'option',
				ladder:'ladder'
			};

			/*jimp.read("lenna.png", function (err, image) {
    		if (err) throw err;
    		lenna.resize(256, 256)            // resize 
		         .quality(90)                // set greyscale 
		         .write("lena-small-bw.jpg"); // save 
			});*/

			jimp.read("image/personne/F_blond_marche.png", function(err, image){
				image.resize(params.height, params.width)
					.quality(90)
					.write("resize/personne/F_blond_marcheR.png");
			})
		
		socket.emit('url', url);
	})
})