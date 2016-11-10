var supertest = require('supertest');
var url		  = 'http://localhost:3000';

describe("call server",function(){
  it("get user",function(done){

	supertest(url)
	  .get('/getUser')
	  .expect('Content-Type', /json/)
	  .expect(200)
	  .end(function(err, res) {
	    if (err) throw err;
	    console.log(res.body);
	  	done();	    
	  });

  });
});

describe("call server",function(){
  it("get landing page",function(done){

	supertest(url)
	  .get('/')
	  .expect('Content-Type', /text/)
	  .expect(200)
	  .expect("Hello World!", done);

  });
});

