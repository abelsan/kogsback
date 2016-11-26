var low = require('lowdb');
var db  = low('db.json');

// holds exposed functions and objects
var data = {};  

// init the data store
db.defaults({ kogs: [], videos:[] }).value();
var kogs   = db.get('kogs');
var videos = db.get('videos');

// get all kogs
data.getKogs = function (){
    console.log('number of kogs: ' + kogs.size().value());
    console.log(kogs.value());
    return kogs.value(); 
};

// get kog using kog id
data.getKogById = function (id){
    var kog = kogs.find({id:id}).value();
    console.log(kog); 
    return kog;
};

// get kogs for user
data.getKogsByUser = function (id){
    var userkogs = kogs.filter({userid:id}).value();
    console.log(userkogs);      	
};

// add a new kog
data.addKog = function (kog){
    kogs.push(kog).last().value();
    console.log(kog);      
};

// get videos for kog id
data.getVideosById = function (id){
    var videoList = videos.filter({id:id}).value();
    console.log(videoList); 
    return videoList; 
};

// add a new kog
data.addVideo = function (video){
    videos.push(video).last().value();
    console.log(video);      
};




module.exports = data;
