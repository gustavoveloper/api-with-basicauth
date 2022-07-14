const Post = require('../entities/Post');

const { getErrorResponseBody, getSuccessResponseBody } = require('../../helpers');


async function getAllPosts(request, response) {
    const queryResult = await Post.returnAllPosts();

    if (queryResult.error) {
        return response.status(queryResult.error.code).json(getErrorResponseBody(queryResult.error.message))
    };

    return response.json(getSuccessResponseBody(queryResult.data))
};


module.exports = getAllPosts