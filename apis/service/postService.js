const postdata = require('../data/postsData')

exports.getposts = () => {
    return postdata.getposts();
}
exports.createposts = () => {
    return postdata.createpost();
}
exports.deleteposts = () => {
    return postdata.deleteposts();
}
