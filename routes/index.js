const express = require('express');
const router = express.Router();
const crawling = require('../crawling');

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

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/fortune', function(req, res, next) {
  res.render('fortune');
});

router.get('/fortune/:zodiac', async function(req, res, next) {
  const zodiac = req.params.zodiac;

  const zodiacNum = zodiacObj[zodiac];
  let contents = await crawling(zodiacNum);

  const formattedContents = [];

  while(true) {
    let idx = contents.slice(10).search(/[0-9]{4}년생/);

    if(idx === -1) break;

    idx += 10;

    const content = contents.slice(0, idx);
    contents = contents.slice(idx);

    formattedContents.push(content);
  }
  formattedContents.push(contents);
 
  const content = formattedContents[0];

  const contentInYearArr = formattedContents.slice(1).map((contentInYear) => {
    const splitedContent = contentInYear.split(':');

    const year = splitedContent[0];
    const content = splitedContent[1].trim();

    return { year, content };
  });

  res.render('zodiac', { zodiac, content, contentInYearArr });
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
