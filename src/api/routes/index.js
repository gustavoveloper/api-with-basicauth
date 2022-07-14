const { Router } = require('express');

const createPost = require('../handlers/createPost');
const getAllPosts = require('../handlers/getAllPosts');


const router = Router();


router.post('/v1/posts', createPost);
router.get('/v1/posts', getAllPosts);


module.exports = router