var express = require('express');
var app     = express();
var low     = require('lowdb');
var db      = low('db.json');
var uuid    = require('uuid');
var multer  = require('multer');
var upload  = multer({ dest: 'uploads/' });
var fs      = require('fs');

// allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// http form handling 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init the data store
db.defaults({ kogs: [] }).value();
var kogs = db.get('kogs');

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



/*
// add kog using POST
app.post('/kogs', function(req, res){
    var kog = {
        "id"          : uuid.v4(),        
        'title'       : req.body.title, 
        'userid'      : req.body.userid,
        'description' : req.body.description,
        'level'       : req.body.level,
        'tags'        : req.body.tags,
        'image'       : req.body.image,
    };
    kogs.push(kog).last().value();
    console.log(kog);   
    res.send('ok');    
    res.end();
});
*/

app.post('/uploads', upload.single('userPhoto'), function (req, res, next) {

    var id   = uuid.v4();
    var date = JSON.stringify(new Date());

    var kog = {
        "id"          : id,        
        'title'       : req.body.title, 
        'userid'      : 'peter',
        'description' : req.body.description,
        'level'       : req.body.level,
        'tags'        : req.body.tags,
        'date'        : date,        
        'image'       : id.replace(/-/g, '')
    };

    var data = JSON.parse(req.body.userPhoto);
    console.log(data.input.name);
    console.log(data.input.type);  
    saveImage(data.output.image, data.input.type);  


    kogs.push(kog).last().value();
    console.log(kog);   
    res.send('ok');    
    res.end();
});


// save the kogs image to disk
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

function timestamp(){
    var stamp = {};
    var time = new Date(); 
    stamp.prettyDate = (time.getMonth()+1)  + "/" +
                    time.getDate() + "/" +
                    time.getFullYear();

    stamp.prettyTime = time.getHours() + ":" + 
                    time.getMinutes() + ":" +
                    time.getSeconds();    

    stamp.json = JSON.stringify(time);
    return stamp;    
}

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
