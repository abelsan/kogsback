var low = require('lowdb');
var db 	= low('db.json');

// init the data store
db.defaults({ kogs: [], videos:[] }).value();
var videos = db.get('videos');

// list all videos
console.log('list of all videos: ');
console.log(videos.value()); 

// list all video
var id = '88d62f61-afc0-4f2a-85a7-1cb61ebd2c82';
var video = videos.find({id:id}).value();
console.log(video); 
