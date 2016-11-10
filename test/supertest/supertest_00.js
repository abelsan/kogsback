var supertest = require('supertest');
var chai	  = require('chai');
var should 	  = chai.should();

var server = supertest.agent("http://localhost:3000");

describe("call server",function(){
  it("get landing page",function(done){

    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200) 
    .end(function(err,res){
    	console.log('res.text: ');    	
    	console.log(res.text);
      res.status.should.equal(200);
      done();
    });

  });
});

describe("call server",function(){
  it("get user - json obj",function(done){

    server
    .get("/getUser")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
    	console.log('res.body: ');    	
    	console.log(res.body);
      res.status.should.equal(200);
      done();
    });
    
  });
});

