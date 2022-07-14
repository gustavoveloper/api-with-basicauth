const { Router } = require('express');

const createPost = require('../handlers/createPost');


const router = Router();


router.post('/v1/posts', createPost);


module.exports = router