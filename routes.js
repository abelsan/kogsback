var express = require('express');
var uuid    = require('uuid');
var multer  = require('multer');
var upload  = multer({ dest: 'uploads/' });
var images  = require('./images.js');
var data    = require('./data.js');
var cookie  = require('cookie');
var jwt     = require('jsonwebtoken');
var secret  = 'shhhhh';


// route middleware - will happen on every request
var apiRoutes = express.Router();
var open      = express.Router();
var auth      = express.Router();
apiRoutes.use('/open', open);
apiRoutes.use('/auth', auth);

// get all kogs
open.get('/kogs', function(req, res){ 
    res.send(data.getKogs());
    res.end();    
});

// get kog using kog id
open.get('/kogs/:id', function(req, res){
    res.send(data.getKogById(req.params.id));
    res.end();
});

// get kogs for user
open.get('/kogs/user/:userid', function(req, res){
    res.send(data.getKogsByUser(req.params.userid));    
    res.end();
});

// add new kog
auth.post('/uploads', upload.single('userPhoto'), function (req, res, next) {
    // kog data
    console.log(JSON.parse(req.body.userPhoto));
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
        'userid'      : req.body.userid,
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
open.get('/videos/:id', function(req, res){
    res.send(data.getVideosById(req.params.id));
    res.end();
});

// add new video
auth.post('/videos', function (req, res) {
    var date      = JSON.stringify(new Date());
    var video = {
        'id'          : uuid.v4(),                
        'kogid'       : req.body.kogid,        
        'userid'      : req.body.userid,
        'title'       : req.body.title, 
        'link'        : req.body.link,
        'description' : req.body.description,
        'date'        : date
    };
    data.addVideo(video);
    res.end();
});

// register and set token in cookie
open.post('/register', function(req, res){

    // view posted values
    console.log(req.body.email + ':' + req.body.password);

    // create user object
    var id   = uuid.v4();
    var user = { 
        id       : id, 
        email    : req.body.email, 
        password : req.body.password 
    };
    data.addUser(user);        

    // create token - send back in cookie    
    var token = jwt.sign(user, secret);
    res.send({userid: id, token:token});        
    res.end();      
});

// authenticate user and set token in cookie
open.post('/authenticate', function(req, res){

    // view posted values
    console.log(req.body.email + ':' + req.body.password);

    // get user object
    var user = data.getUserByEmail(req.body.email);

    if (user){
        // create token - send back in cookie    
        var token = jwt.sign(user, secret);
        res.send({userid: user.id, token:token});        
        res.end();              
    }
    else{
        res.status(500).send('Authentication Failed');        
        res.end();
    }
});

// read cookie
open.get('/read', function (req, res) {
    var cookies = cookie.parse(req.body.cookies);
    console.log(cookies);
    res.send(cookies);
    res.end();
});

// used for testing
open.get('/greeting', function(req, res){ 
    console.log('Hello World!');
    res.send({greeting : 'Hello World'});
    res.end();    
});

module.exports = function (app) {
    app.use('/api', apiRoutes);
};
