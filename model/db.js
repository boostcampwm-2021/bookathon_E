const DataStore = require('nedb');

const OvenDB = new DataStore({
    filename: 'oven.db',
    autoload: true
});

module.exports = OvenDB;
