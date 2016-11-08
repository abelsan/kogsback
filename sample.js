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
