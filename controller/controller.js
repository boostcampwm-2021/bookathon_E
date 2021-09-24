const OvenDB = require('../model/db.js');
const express = require('express');
const router = express.Router();
const crawling = require('../crawling');

router.get('/read/1', function(req, res, next) {
    OvenDB.find({ type: 1 }, function (err, newDoc) {
        res.json(newDoc);
    });
});

router.get('/read/2', function(req, res, next) {
    OvenDB.find({ type: 2 }, function (err, newDoc) {
        res.json(newDoc);
    });
});

router.get('/read-one-random/1', function(req, res, next) {
    OvenDB.find({ type: 1 }, function (err, newDoc) {
        const random = Math.floor(Math.random() * newDoc.length);
        res.json(newDoc[random]);
    });
});

router.get('/read-one-random/2', function(req, res, next) {
    OvenDB.find({ type: 2 }, function (err, newDoc) {
        const random = Math.floor(Math.random() * newDoc.length);
        res.json(newDoc[random]);
    });
});

router.post('/add', function(req, res, next) {
    try {
        const doc = {type : Number(req.body.type), contents : req.body.contents};
        OvenDB.insert(doc, function (err, newDoc) {
            res.json({message: 'success'});
        });
    } catch (e) {
        res.json({message: 'fail'});
    }
});

router.get('/fortune', async function(req, res, nex){
    const data = await crawling(req.query.zodiac);
    res.json(data);
});

module.exports = router;
