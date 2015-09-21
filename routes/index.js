var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TRREIExpress' });
});

router.get('/store', function(req, res, next) {
  //res.render('index', { title: 'TRREIExpress' });
  res.write('Test');
  res.end();
});

module.exports = router;
