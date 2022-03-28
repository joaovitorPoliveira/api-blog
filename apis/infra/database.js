const pgp = require('pg-promise')

const db = pgp({
    user: 'potsgrees',
    password: '',
    host: 'localhost',
    port: 3000,
    database: 'blog'
})

module.exports = db;