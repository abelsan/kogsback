var fs = require('fs');

// use to expose functions
var images = {};

// save the kogs image to disk
images.save = function saveImage(image, filename, directory,type){

    // remove data image prefix - only base64 data remains	
    var prefix = 'data:' + type + ';base64,';
    var data = image.replace(prefix, '');

    // decode base64 image
    var decoded = new Buffer(data, 'base64');

    // directory and image paths
    var dirPath = 'uploads/' + directory; 
    var imgPath = 'uploads/' + directory + '/' + filename;

    // create directory if it does not exist
    if (!fs.exists(dirPath)){

    	fs.mkdir(dirPath, function(){
	    	// write image to file      		
		    writeFile(imgPath, decoded);
		});
    }
    else{
	    // write image to file  
	    writeFile(imgPath, decoded);    	
    }
};

function writeFile(path, decoded){
    fs.writeFile(path, decoded, function(err) {
        if(err) {
          return console.log(err);
        }
        console.log("Saved: " + path);
    });	
}

// the image directory, today's date, changes everyday
images.directory = function directory(){
	var raw   = JSON.stringify(new Date());
	var index = raw.indexOf('T');
	var date  = raw.substring(1,index);
	var clean = date.replace(/-/g,'');
	return clean;	
};

// used for testing
module.exports = images;
