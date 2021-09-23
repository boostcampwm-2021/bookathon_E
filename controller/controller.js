const OvenDB = require('../model/db.js');

const OvenController = {
    insertOvenDB(type, contents) {
        const doc = {type : type, contents : contents};
        OvenDB.insert(doc, function (err, newDoc) {
            console.log(newDoc);
        });
    },
    countOvenDB() {
        OvenDB.count({}, function (err, newDoc) {
            console.log(newDoc);
        });
    },
    findOvenDB(type) {
        const doc = {type : type};
        OvenDB.insert(doc, function (err, newDoc) {
            console.log(newDoc);
        });
    },
    updateOvenDB(type, beforeContents, afterContents) {
        const beforeDoc = {type : type, contents: beforeContents};
        const afterDoc = {type : type, contents: afterContents};
        OvenDB.update(beforeDoc, afterDoc, {}, function (err, newDoc) {
            console.log(newDoc);
        });
    },
    removeOvenDB(type, contents) {
        const doc = {type : type, contents : contents};
        OvenDB.remove(doc, {}, function (err, newDoc) {
            console.log(newDoc);
        });
    },
    removeAllOvenDB() {
        OvenDB.remove({}, {multi: true}, function (err, newDoc) {
            console.log(newDoc);
        });
    }
}

module.exports = OvenController;
