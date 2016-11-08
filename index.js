var express = require('express');
var app     = express();
var low     = require('lowdb');
var db      = low('db.json');
var uuid    = require('uuid');

// http form handling 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init the data store
db.defaults({ kogs: [] }).value();
var kogs = db.get('kogs');

// list all kogs
app.get('/', function(req, res){ 
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

// add kog using POST
app.post('/kogs', function(req, res){
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

// start server
var port = 3000;
app.listen(port, function(){
    console.log('listening on port: ' + port);
});
