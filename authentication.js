var jwt     = require('jsonwebtoken');
var bcrypt  = require('bcrypt');
var uuid    = require('uuid');
var data    = require('./data.js');

function verifyToken(){

	// decode token - in browser cookie
	var decoded = jwt.verify(req.cookies.token, userInMemory.secondFactor);
    console.log(decoded);

    // check contents of token against user in memory
	if (decoded.username === userInMemory.username && decoded.id === userInMemory.id) {
	    res.send('You Have Authenticated Using a Token!');
	    res.end();    	
	}
	else {
		this.throw(401, 'Wrong username or password!');
	}	
}