var low = require('lowdb');
var db 	= low('db_test.json');

// init the data store
db.defaults({ kogs: [], videos:[], users:[] }).value();
var kogs   = db.get('kogs');
var videos = db.get('videos');
var users  = db.get('users');


function deleteVideo(id){
	var result = videos.remove({ id: id }).value();

    if(result && result.length > 0) {
        console.log('video delete success');
        return true;
    }
    else{
        console.log('Video delete fail');
        return false;
    }    
}

deleteVideo('cdf374c0-788c-48ca-816e-a4e7d36649f6');

//--------------------------------------------------------------------

/*
var low = require('lowdb');
var db 	= low('db.json');

// init the data store
db.defaults({ posts: [] }).value();
var posts = db.get('posts');

// add post
var post1 = { "title" : 'Hello World!', "id" : 99 };
var post2 = { "title" : 'Boston Cool!', "id" : 98 };
var post3 = { "title" : 'Code Cancun!', "id" : 97 };
var post3 = { "title" : 'Code Murcic!', "id" : 97 };
posts.push(post1,post2,post3).last().value();

// count posts
console.log('number of posts: ' + posts.size().value());
//console.log(posts.value()); 

// find all posts ids
console.log(posts.map('id').value()); 

// all matches of 99
console.log(posts.filter({id:97}).value()); 

// find post with id of 99
console.log(posts.find({id:97}).value()); 
*/

//--------------------------------------------------------------------

/*
var low = require('lowdb');
var db 	= low('db.json');

// init the data store
db.defaults({ kogs: [] }).value();
var kogs = db.get('kogs');

// list all kogs
console.log('list of all kogs: ');
console.log(kogs.value()); 

// list all kogs
var id = 'a43aa674-3087-47fa-a920-63b8abc0c60d';
var kog = kogs.find({id:id}).value();
console.log(kog); 
*/

//--------------------------------------------------------------------

/*
var low = require('lowdb');
var db 	= low('db.json');

// init the data store
db.defaults({ kogs: [], videos:[], users:[] }).value();
var kogs   = db.get('kogs');
var videos = db.get('videos');
var users  = db.get('users');

// // list all videos
// console.log('list of all videos: ');
// console.log(videos.value()); 

// // list video - returns first hit
// var id = '32d657a9-e3cf-4c0e-91b6-a1f1fac57f10';
// var video = videos.find({id:id}).value();
// console.log(video); 

// // returns all matches
// console.log(videos.filter({id:'32d657a9-e3cf-4c0e-91b6-a1f1fac57f10'}).value()); 

// find user by email
var email = 'peter@mit.edu';
function getUserByEmail(email){
	var user = users.find({email:email}).value();
	console.log(user); 
	if (user) return user;
	return null;	
}
console.log(getUserByEmail(email));
*/

//--------------------------------------------------------------------