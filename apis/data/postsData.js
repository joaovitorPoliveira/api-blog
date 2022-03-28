const database = require('../infra/database')

module.exports.getposts = () => {
    return database.query('SELECT * FROM BLOG.POST');
}
module.exports.createpost = (req, res) => {
    return database.query(`INSERT INTO BLOG.POST (titlle, content)  VALUES (${req.body.tittle}, ${req.body.content})`)
}
module.exports.deleteposts = (req, res) => {
    return database.query(`delete into blog.post (id, tittle, content, date) WHERE id = ${req.body.id}`)
}