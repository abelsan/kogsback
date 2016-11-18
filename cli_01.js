var low = require('lowdb');
var db 	= low('db.json');

// init the data store
db.defaults({ kogs: [] }).value();
var kogs = db.get('kogs');

// list all kogs
console.log('list of all kogs: ');
console.log(kogs.value()); 


/*
// list all kogs
var id = 'a43aa674-3087-47fa-a920-63b8abc0c60d';
var kog = kogs.find({id:id}).value();
console.log(kog); 
*/