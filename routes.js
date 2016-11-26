var express = require('express');
var uuid    = require('uuid');
var multer  = require('multer');
var upload  = multer({ dest: 'uploads/' });
var images  = require('./images.js');
var data    = require('./data.js');

// temp route holder
var temp = express.Router();

// get all kogs
temp.get('/kogs', function(req, res){ 
    res.send(data.getKogs());
    res.end();    
});

// get kog using kog id
temp.get('/kogs/:id', function(req, res){
    res.send(data.getKogById(req.params.id));
    res.end();
});

// get kogs for user
temp.get('/kogs/:userid', function(req, res){
    res.send(data.getKogsByUser(req.params.userid));    
    res.end();
});

// add new kog
temp.post('/uploads', upload.single('userPhoto'), function (req, res, next) {
    // kog data
    var img       = JSON.parse(req.body.userPhoto);
    var id        = uuid.v4();
    var date      = JSON.stringify(new Date());
    var image     = img.output.image;
    var filename  = id.replace(/-/g, '') + '.jpg';
    var directory = images.directory();
    var type      = img.input.type;
    var kog = {
        "id"          : id,        
        'title'       : req.body.title, 
        'userid'      : 'peter',
        'description' : req.body.description,
        'level'       : req.body.level,
        'tags'        : req.body.tags,
        'date'        : date,        
        'path'        : directory + '/' + filename
    };

    // save the uploaded image
    images.save(image, filename, directory, type);  

    // save the kog data
    data.addKog(kog);
    res.send(kog);        
    res.end();
});

// get videos for kog id
temp.get('/videos/:id', function(req, res){
    res.send(data.getVideosById(req.params.id));
    res.end();
});

// add new video
temp.post('/videos', function (req, res) {
    var date      = JSON.stringify(new Date());
    var video = {
        "id"          : req.body.id,        
        'title'       : req.body.title, 
        'link'        : req.body.link,
        'description' : req.body.description,
        'date'        : date
    };
    data.addVideo(video);
    res.end();
});

// used for testing
temp.get('/greeting', function(req, res){ 
    console.log('Hello World!');
    res.send({greeting : 'Hello World'});
    res.end();    
});

module.exports = function (app) {
    app.use('/api', temp);
};
