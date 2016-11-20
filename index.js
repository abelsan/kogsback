var express = require('express');
var app     = express();
var low     = require('lowdb');
var db      = low('db.json');
var uuid    = require('uuid');
var multer  = require('multer');
var upload  = multer({ dest: 'uploads/' });
var images  = require('./images.js');

// static files under public
app.use(express.static('public'));

// allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// http form handling 
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true,limit: '1mb' }));

// init the data store
db.defaults({ kogs: [], videos:[] }).value();
var kogs   = db.get('kogs');
var videos = db.get('videos');

// list all kogs
app.get('/kogs', function(req, res){ 
    console.log('number of kogs: ' + kogs.size().value());
    console.log(kogs.value()); 
    res.send(kogs.value());
    res.end('ok');    
});

// get kog using kog id
app.get('/kogs/:id', function(req, res){
    var kog = kogs.find({id:req.params.id}).value();
    console.log(kog); 
    res.send(kog);
    res.end();
});

// get kogs for user
app.get('/kogs/:userid', function(req, res){
    var userkogs = kogs.filter({userid:req.params.userid}).value();
    console.log(userkogs);      
    res.send(userkogs);    
    res.end();
});

// add kog using GET
app.get('/kogs/:title/:userid/:description/:level/:tags/:image', function(req, res){
    var kog = {
        "id"          : uuid.v4(),        
        'title'       : req.params.title, 
        'userid'      : req.params.userid,
        'description' : req.params.description,
        'level'       : req.params.level,
        'tags'        : req.params.tags,
        'image'       : req.params.image,
    };
    kogs.push(kog).last().value();
    console.log(kog);      
    res.end('ok');
});

app.post('/videos', function (req, res) {

    var date      = JSON.stringify(new Date());

    var video = {
        "id"          : req.body.id,        
        'title'       : req.body.title, 
        'link'        : req.body.link,
        'description' : req.body.description,
        'date'        : date
    };

    videos.push(video).last().value();
    console.log(video);   
    res.send(video);    
    res.end();
});

// get videos for kog id
app.get('/videos/:id', function(req, res){
    var videoList = videos.filter({id:req.params.id}).value();
    console.log(videoList); 
    res.send(videoList);
    res.end();
});

// add a new kog
var uploadsCounter = 0;
app.post('/uploads', upload.single('userPhoto'), function (req, res, next) {

    console.log('Hit on app.post("uploads", ... number: ' + uploadsCounter);
    uploadsCounter++;

    // kog data
    var data      = JSON.parse(req.body.userPhoto);
    var id        = uuid.v4();
    var date      = JSON.stringify(new Date());
    var image     = data.output.image;
    var filename  = id.replace(/-/g, '') + '.jpg';
    var directory = images.directory();
    var type      = data.input.type;

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
    kogs.push(kog).last().value();
    console.log(kog);   
    res.send(kog);    
    res.end();
});

// used for testing
app.get('/alive', function(req, res){ 
    console.log('ping!');
    res.send({alive : true});
    res.end();    
});

// start server
var port = 3000;
app.listen(port, function(){
    console.log('listening on port: ' + port);
});

// used for testing
module.exports.app = app;
