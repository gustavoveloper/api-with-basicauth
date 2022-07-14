const { Client } = require('pg');

const { database } = require('../config');


const conn = new Client(database);

conn.connect();


module.exports = conn