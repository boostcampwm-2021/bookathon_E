const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/fortune', function(req, res, next) {
  res.render('fortune');
});

router.get('/fortune/:zodiac', function(req, res, next) {
  const zodiac = req.params.zodiac;

  // 띠 별 운세를 가져옴
  const contents = '운세 내용';

  res.render('zodiac', { contents })
})

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
