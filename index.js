var express = require('express');
var app     = express();
var router  = require('./routes.js');

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

// set the routes
router(app);

// start server
var port = 3000;
app.listen(port, function(){
    console.log('listening on port: ' + port);
});

// used for testing
module.exports.app = app;
