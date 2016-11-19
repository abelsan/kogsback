var low = require('lowdb');
var db 	= low('db.json');

// init the data store
db.defaults({ kogs: [], videos:[] }).value();
var videos = db.get('videos');

// // list all videos
// console.log('list of all videos: ');
// console.log(videos.value()); 

// list video - returns first hit
var id = '32d657a9-e3cf-4c0e-91b6-a1f1fac57f10';
var video = videos.find({id:id}).value();
console.log(video); 

// returns all matches
console.log(videos.filter({id:'32d657a9-e3cf-4c0e-91b6-a1f1fac57f10'}).value()); 
