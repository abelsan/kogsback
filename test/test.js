var supertest = require('supertest');
var app 	    = require('../index.js').app;

// photos
var userPhotoNodeJS     = require('./img/userPhotoNodeJS.js');
var userPhotoTensorFlow = require('./img/userPhotoTensorFlow.js');
var userPhotoSpark      = require('./img/userPhotoSpark.js');
var userPhotoNpm        = require('./img/userPhotoNpm.js');
var userPhotoMongo      = require('./img/userPhotoMongo.js');
var userPhotoJwt        = require('./img/userPhotoJwt.js');

// user tokens, ids
var tokenPeter  = null;
var tokenClark  = null;
var tokenBruce  = null;
var userIdPeter = null;
var userIdClark = null;
var userIdBruce = null;
var kogIdPeterNodeJS      = null;
var kogIdPeterNpm         = null;
var kogIdClarkTensorFlow  = null;
var kogIdClarkMongo       = null;
var kogIdBruceSpark       = null;
var kogIdBruceJwt         = null;


describe('POST peter@mit.edu user to kogs', function(){
  it('respond with json', function(done){

    supertest(app)
        .post('/api/open/register')
        .send({ email    : 'peter@mit.edu' })
        .send({ password : 'nothingplus'       })
        .end(function(err, res){
            if (err || !res.ok) {
                console.log('not ok:');                            
                console.log(err);
            } else {
                console.log('ok:');              
                console.log(res.body);
                console.log(res.body.userid);
                console.log(res.body.token);
                userIdPeter = res.body.userid;
                tokenPeter  = res.body.token;
            }
            done();
        });
  });
});

describe('POST clark@mit.edu user to kogs', function(){
  it('respond with json', function(done){

    supertest(app)
        .post('/api/open/register')
        .send({ email    : 'clark@mit.edu' })
        .send({ password : 'nothingplus'       })
        .end(function(err, res){
            if (err || !res.ok) {
                console.log('not ok:');                            
                console.log(err);
            } else {
                console.log('ok:');              
                console.log(res.body);
                console.log(res.body.userid);
                console.log(res.body.token);
                userIdClark = res.body.userid;
                tokenClark  = res.body.token;                
            }
            done();
        });
  });
});

describe('POST bruce@mit.edu user to kogs', function(){
  it('respond with json', function(done){

    supertest(app)
        .post('/api/open/register')
        .send({ email    : 'bruce@mit.edu' })
        .send({ password : 'nothingplus'       })
        .end(function(err, res){
            if (err || !res.ok) {
                console.log('not ok:');                            
                console.log(err);
            } else {
                console.log('ok:');              
                console.log(res.body);
                console.log(res.body.userid);
                console.log(res.body.token);
                userIdBruce = res.body.userid;
                tokenBruce  = res.body.token;                
            }
            done();
        });
  });
});


describe('POST kog on NodeJS', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/uploads';
    var userid      = userIdPeter;      
    var title       = 'NodeJS';
    var tags        = 'kogs,education,JavaScript';
    var level       = 'Beginner';
    var description = '<p>Event-driven I/O server-side JavaScript environment based on V8. Includes API documentation, change-log, examples and announcements.</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ userid      : userid     })        
        .send({ token       : tokenPeter })        
        .send({ title       : title      })
        .send({ tags        : tags       })
        .send({ level       : level      })
        .send({ userPhoto   : JSON.stringify(userPhotoNodeJS)  })
        .send({ description : description})
        .end(function(err, res){
            if (err || !res.ok) {
                console.log('not ok:');                            
                console.log(err);
            } else {
                console.log('ok:');              
                console.log(res.body);
                console.log(res.body.id);
                kogIdPeterNodeJS = res.body.id;
            }
            done();            
        });




  });
});

describe('POST kog on Tensor Flow', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/uploads';
    var userid      = userIdClark;      
    var title       = 'Tensor Flow';
    var tags        = 'kogs,education,ML';
    var level       = 'Beginner';
    var description = '<p>Machine learning platform from Google</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ userid      : userid     })   
        .send({ token       : tokenClark })                     
        .send({ title       : title      })
        .send({ tags        : tags       })
        .send({ level       : level      })
        .send({ userPhoto   : JSON.stringify(userPhotoTensorFlow)  })
        .send({ description : description})
        .end(function(err, res){
            if (err || !res.ok) {
                console.log('not ok:');                            
                console.log(err);
            } else {
                console.log('ok:');              
                console.log(res.body);
                console.log(res.body.id);
                kogIdClarkTensorFlow = res.body.id;
            }
            done();            
        });




  });
});

describe('POST kog on Apache Spark', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/uploads';
    var userid      = userIdBruce;      
    var title       = 'Apache Spark';
    var tags        = 'kogs,education,ML';
    var level       = 'Beginner';
    var description = '<p>Apache Spark is a fast and general engine for big data processing, with built-in modules for streaming, SQL, machine learning and graph processing.</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ userid      : userid     })
        .send({ token       : tokenBruce })                        
        .send({ title       : title      })
        .send({ tags        : tags       })
        .send({ level       : level      })
        .send({ userPhoto   : JSON.stringify(userPhotoSpark)  })
        .send({ description : description})
        .end(function(err, res){
            if (err || !res.ok) {
                console.log('not ok:');                            
                console.log(err);
            } else {
                console.log('ok:');              
                console.log(res.body);
                console.log(res.body.id);
                kogIdBruceSpark = res.body.id;
            }
            done();            
        });




  });
});


describe('POST kog on NodeJS', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/uploads';
    var userid      = userIdPeter;      
    var title       = 'NPM';
    var tags        = 'kogs,education,JavaScript';
    var level       = 'Beginner';
    var description = '<p>Package manager. Installs, publishes and manages node programs</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ userid      : userid     })  
        .send({ token       : tokenPeter })                      
        .send({ title       : title      })
        .send({ tags        : tags       })
        .send({ level       : level      })
        .send({ userPhoto   : JSON.stringify(userPhotoNpm)  })
        .send({ description : description})
        .end(function(err, res){
            if (err || !res.ok) {
                console.log('not ok:');                            
                console.log(err);
            } else {
                console.log('ok:');              
                console.log(res.body);
                console.log(res.body.id);
                kogIdPeterNpm = res.body.id;
            }
            done();            
        });




  });
});

describe('POST kog on MongoDB', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/uploads';
    var userid      = userIdClark;      
    var title       = 'MongoDB';
    var tags        = 'kogs,education,Mongo';
    var level       = 'Beginner';
    var description = '<p>MongoDB for GIANT Ideas - Build innovative modern applications that create a competitive advantage</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ userid      : userid     })
        .send({ token       : tokenClark })                        
        .send({ title       : title      })
        .send({ tags        : tags       })
        .send({ level       : level      })
        .send({ userPhoto   : JSON.stringify(userPhotoMongo)  })
        .send({ description : description})
        .end(function(err, res){
            if (err || !res.ok) {
                console.log('not ok:');                            
                console.log(err);
            } else {
                console.log('ok:');              
                console.log(res.body);
                console.log(res.body.id);
                kogIdClarkMongo = res.body.id;
            }
            done();            
        });




  });
});

describe('POST kog on JWT', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/uploads';
    var userid      = userIdBruce;      
    var title       = 'Json Web Tokens';
    var tags        = 'kogs,education,ML';
    var level       = 'Beginner';
    var description = '<p>JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ userid      : userid     })
        .send({ token       : tokenBruce })                        
        .send({ title       : title      })
        .send({ tags        : tags       })
        .send({ level       : level      })
        .send({ userPhoto   : JSON.stringify(userPhotoJwt)  })
        .send({ description : description})
        .end(function(err, res){
            if (err || !res.ok) {
                console.log('not ok:');                            
                console.log(err);
            } else {
                console.log('ok:');              
                console.log(res.body);
                console.log(res.body.id);
                kogIdBruceJwt = res.body.id;
            }
            done();            
        });




  });
});

describe('POST video #1 for kog on NodeJS', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'What is Node.js Exactly?';
    var link        = 'https://www.youtube.com/watch?v=pU9Q6oiQNd0';
    var description = '<p>What exactly is node.js? Is it a command-line tool, a language, the same thing as Ruby on Rails?<p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdPeterNodeJS })
        .send({ userid      : userIdPeter })
        .send({ token       : tokenPeter })                        
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});

describe('POST video #2 for kog on NodeJS', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'Node.js at Netflix';
    var link        = 'https://www.youtube.com/watch?v=p74282nDMX8';
    var description = '<p>Node at scale, 69 million members, in over 60 countries, streaming 100 million hrs/day</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdPeterNodeJS })
        .send({ userid      : userIdPeter }) 
        .send({ token       : tokenPeter })                       
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});


describe('POST video #1 for kog on NPM', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'What is NPM?';
    var link        = 'https://www.youtube.com/watch?v=pa4dc480Apo';
    var description = '<p>NPM fundamentals<p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdPeterNpm })
        .send({ userid      : userIdPeter }) 
        .send({ token       : tokenPeter })                       
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});

describe('POST video #2 for kog on NPM', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'Installing npm packages locally';
    var link        = 'https://www.youtube.com/watch?v=JDSfqFFbNYQ';
    var description = '<p>How to install packages in your project folder.</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdPeterNpm })
        .send({ userid      : userIdPeter }) 
        .send({ token       : tokenPeter })                       
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});


describe('POST video #1 for kog on Tensorflow', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'TensorFlow: Open source machine learning';
    var link        = 'https://www.youtube.com/watch?v=p74282nDMX8';
    var description = '<p>TensorFlow is an open source software library for numerical computation using data flow graphs. Originally developed by researchers and engineers working on the Google Brain Team within Googles Machine Intelligence research organization for the purposes of conducting machine learning and deep neural networks research.</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdClarkTensorFlow })
        .send({ userid      : userIdClark })
        .send({ token       : tokenClark })                        
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});


describe('POST video #2 for kog on Tensorflow', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'TensorFlow - Deep Learning Simplified';
    var link        = 'https://www.youtube.com/watch?v=bYeBL92v99Y';
    var description = '<p>Googles TensorFlow is currently the most popular Deep Learning library on GitHub. This video will provide an overview of the librarys strengths, weaknesses, and numerous features.</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdClarkTensorFlow })
        .send({ userid      : userIdClark })
        .send({ token       : tokenClark })                        
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});

describe('POST video #1 for kog on Mongo', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'MongoDB in 30 Minutes';
    var link        = 'https://www.youtube.com/watch?v=pWbMrx5rVBE';
    var description = '<p>Covers the fundamentals and the syntax to create, read, update and delete documents/data</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdClarkMongo })
        .send({ userid      : userIdClark })
        .send({ token       : tokenClark })                        
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});


describe('POST video #2 for kog on Mongo', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'Mongodb Tutorial for Beginners';
    var link        = 'https://www.youtube.com/watch?v=-0X8mr6Q8Ew';
    var description = '<p>Installation of MongoDB on both Windows and Mac. We willll also cover how to use Mongo, Mongod, executing JavaScript, creating databases, creating documents, insert, update, find, remove, data types, executing external JS scripts, the mongorc.js file and much more.</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdClarkMongo })
        .send({ userid      : userIdClark }) 
        .send({ token       : tokenClark })                       
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});


describe('POST video #1 for kog on Apache Spark', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'First Steps With Spark';
    var link        = 'https://www.youtube.com/watch?v=bWorBGOFBWY';
    var description = '<p>In this screencast, we (1) take a quick tour of the documentation available for Spark users online, (2) download and build Spark on a local machine (running OS X, but should be a similar process for Linux or Unix), and (3) Introduce the API using the Spark interactive shell to explore a file.</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdBruceSpark })
        .send({ userid      : userIdBruce })
        .send({ token       : tokenBruce })                        
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});


describe('POST video #2 for kog on Apache Spark', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'A Deeper Understanding of Spark Internals';
    var link        = 'https://www.youtube.com/watch?v=dmL0N3qfSc8';
    var description = '<p>A Deeper Understanding of Spark Internals </p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdBruceSpark })
        .send({ userid      : userIdBruce })
        .send({ token       : tokenBruce })                        
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});

//---------------------------------------------------------
describe('POST video #1 for kog on JWT', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'Introduction to JSON Web Tokens';
    var link        = 'https://www.youtube.com/watch?v=J-9Q469kyJc';
    var description = '<p>Find out what a JSON Web Token (JWT) is and how it works.</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdBruceJwt })
        .send({ userid      : userIdBruce })
        .send({ token       : tokenBruce })                        
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});


describe('POST video #2 for kog on JWT', function(){
  it('respond with json', function(done){

    // kog data
    var url         = '/api/auth/videos';
    var title       = 'Build Secure User Interfaces using JWTs';
    var link        = 'https://www.youtube.com/watch?v=Lv9jun9Eqqw';
    var description = '<p>How to use Json Web Tokens</p>';

    // post kog to server
    supertest(app)
        .post(url)
        .send({ kogid       : kogIdBruceJwt })
        .send({ userid      : userIdBruce })
        .send({ token       : tokenBruce })                        
        .send({ title       : title })
        .send({ link        : link })
        .send({ description : description })
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.body);
            }
            done();
        });

  });
});

//---------------------------------------------------------

// describe('GET /alive', function(){
//   it('respond with json', function(done){

//     supertest(app)
//       .get('/alive')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, function(err,res){
//       	console.log(res.body);
//       	done();	
//       });
//   });
// });

// ---------- TESTS ----------
// 01) register 3 users
// 02) login and save tokens for 3 users
// 03) create kogs for 3 users
// 04) add videos for 3 kogs
// 05) list kogs, all of them - test pagination
// 06) list my kogs per user
