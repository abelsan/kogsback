var low = require('lowdb');
var db 	= low('db.json');

// init the data store
db.defaults({ kogs: [] }).value();
var kogs = db.get('kogs');

// list all kogs
console.log('list of all kogs: ');
console.log(kogs.value()); 