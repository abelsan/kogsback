var supertest = require('supertest');
var app 	  = require("../index.js").app;

describe('POST /kogs', function(){
  it('respond with json', function(done){

    var kog = {
      'title'       : 'IOT Device Explosion',
      'userid'      : '110ec58a-a0f2-4ac4-8393-c866d813b8d1',
      'description' : 'The exponential growth of IOT devices',
      'level'       : 'Beginner',
      'tags'        : 'IOT, devices, hardware',
      'image'       : '20161109/'};

    supertest(app)
      .post('/kogs')
      .send(kog)
      .expect(200)
      .expect('ok',done);
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