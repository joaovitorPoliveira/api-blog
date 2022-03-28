const express = require("express")

const router = express.Router();

const postService = require('../service/postService')

router.get('/posts:id', async function (res,req){
})

router.get('/posts', async function (res,req){
    const post = await postService.getposts() 
    res.json(post)
})

router.post('/posts/:id', async function(res,req){

})

router.delete('/posts/:id', async function(res,req){

})

router.put('/posts', function async(res,req){

})
module.exports = router;