var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/mild', function(req, res, next) {
  res.render('mild');
});

router.get('/hot', function(req, res, next) {
  res.render('hot');
});

router.get('/cooking', function(req, res, next) {
  res.render('cooking');
});

module.exports = router;
