const express = require('express');
const router = express.Router();
const crawling = require('../crawling');

// 1:쥐띠 2:소띠 3:호랑이띠 4:토끼띠 5:용띠 6:뱀띠 7:말띠 8:양띠 9:원숭이띠 10:닭띠 11:개띠 12:돼지띠
const zodiacObj = {
  'mouse' : 1, 
  'cow' : 2, 
  'tiger' : 3, 
  'rabbit' : 4, 
  'dragon' : 5, 
  'snake' : 6, 
  'horse' : 7, 
  'sheep' : 8, 
  'monkey' : 9, 
  'hen' : 10, 
  'dog' : 11, 
  'pig' : 12
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/fortune', function(req, res, next) {
  res.render('fortune');
});

router.get('/fortune/:zodiac', async function(req, res, next) {
  const zodiac = req.params.zodiac;

  const zodiacNum = zodiacObj[zodiac];
  // 띠 별 운세를 가져옴
  const contents = await crawling(zodiacNum);

  res.render('zodiac', { zodiac, contents })
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
