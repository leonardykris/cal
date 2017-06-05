var express = require('express');
var passport = require('passport');
var router = express.Router();

// homepage
// router.get('/', function(req, res, next) {
//   res.render('index', {title: 'Express'});
// });

router.get('/', function(req, res, next) {
  res.render('pages/dashboard');
});

router.get('/program', function(req, res, next) {
  res.render('pages/program', {params: "content from request"});
});

router.get('/login', function(req, res, next) {
  res.render('components/login');
});

module.exports = router;

/*
Other things from example
// app.get('/cool', function(request, response) {
//   response.send(cool());
// });

// app.get('/times', function(request, response) {
//   var result = '';
//   var times = process.env.TIMES || 5;
//   for (i=0; i < times; i++) {
//     result += i + ' ';
//   }
//   response.send(result);
// });

// app.get('/db', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('SELECT * FROM test_table', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     });
//   });
// });
*/