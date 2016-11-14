var fs 		= require('fs');
var express = require('express');
var app     = express();
var multer  = require('multer');
var upload 	= multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/uploads', upload.single('userPhoto'), function (req, res, next) {
  var data = JSON.parse(req.body.userPhoto);
  console.log(data.input.name);
  console.log(data.input.type);  
  saveImage(data.output.image, data.input.type);  
  res.end();    
});

function saveImage(image,type){
	var prefix = 'data:' + type + ';base64,';

	// remove data image prefix - only base64 data remains
	image = image.replace(prefix, '');

	// decode base64 image
	var decoded = new Buffer(image, 'base64');

	// write image to file	
	fs.writeFile("ping.png", decoded, function(err) {
	    if(err) {
	      return console.log(err);
	    }
	    console.log("The file was saved!");
	}); 	
}

app.listen(3000, function(){
	console.log('Listening on port 3000!');
});
