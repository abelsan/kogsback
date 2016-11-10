var chai     = require('chai');
var chaiHttp = require('chai-http');
var expect 	 = require('chai').expect;

chai.use(chaiHttp);
chai.request('http://localhost:8080').get('/');

it('request landing page', function(done) {
  chai.request('http://localhost:3000')
  .get('/')
  .end(function(err, res) {
    expect(res).to.have.status(200);
    done(); 
  });
});


it('request user', function(done) {
  chai.request('http://localhost:3000')
  .get('/getUser')
  .end(function(err, res) {
    expect(res).to.have.status(200);
	  expect(res).to.be.json;
	  expect(res.body).to.have.property('firstName');
	  console.log(res.body);
    done(); 
  });
});


function done(){}