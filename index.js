var express = require('express');
var app     = express();
var low 	= require('lowdb');
var db 		= low('db.json');
var uuid 	= require('uuid');

// used for form submissions
var bodyParser      = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.defaults({ kogs: [] }).value();
var kogs = db.get('kogs');

app.get('/', function(req, res){ 
	console.log('number of kogs: ' + kogs.size().value());
	console.log(kogs.value());	
    res.send('ok');
});

// test POST with
// curl --data "title=myKog&description=myDescript" http://localhost:3000/kogs

// add kog
app.post('/kogs', function(req, res){
	var kog = {
        "title" : req.param('title'), 
        "description" : req.param('description'),
        "id" : uuid.v4()
    };

  	kogs.push(kog).last().value();
    console.log(kog);  	
  	res.send(kog);
});


// return JSON object
app.get('/getUser/:id', function(req, res){ 
    var user = { id : req.params.id};
    res.send(user);
});

// start server
var port = 3000;
app.listen(port, function(){
	console.log('listening on port: ' + port);
});

