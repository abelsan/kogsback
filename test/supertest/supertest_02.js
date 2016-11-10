var supertest = require('supertest');
var app 	  = require("../index.js").app;

describe('GET /alive', function(){
  it('respond with json', function(done){

    supertest(app)
      .get('/alive')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});


describe('GET /alive', function(){
  it('respond with json', function(done){

    supertest(app)
      .get('/alive')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, function(err,res){
      	console.log(res.body);
      	done();	
      });
  });
});