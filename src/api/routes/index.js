const { Router } = require('express');

const createPost = require('../handlers/createPost');
const getAllPosts = require('../handlers/getAllPosts');
const getPostById = require('../handlers/getPostById');
const deletePostById = require('../handlers/deletePostById');


const router = Router();


router.post('/v1/posts', createPost);
router.get('/v1/posts', getAllPosts);
router.get('/v1/posts/:id', getPostById);
router.delete('/v1/posts/:id', deletePostById);


module.exports = router