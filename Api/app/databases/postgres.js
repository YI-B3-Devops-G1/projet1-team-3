const Pool = require('pg').Pool;
const config = require('../config/config')
const pool = new Pool({
    host: config.db.host,
    database: config.db.name,
    user: config.db.username,
    password: config.db.password,
    port: config.db.port,
});


module.exports = pool;