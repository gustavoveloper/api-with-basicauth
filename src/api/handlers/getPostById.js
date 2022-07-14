const Post = require('../entities/Post');

const {
    isNumericText,
    getErrorResponseBody,
    getSuccessResponseBody
} = require('../../helpers');


async function getPostById(request, response) {
    const { id } = request.params;

    if (!isNumericText(id)) {
        return response.status(400).json(getErrorResponseBody('Post ID must be numeric'))
    };

    
    const queryResult = await Post.returnPostById(id);

    if (queryResult.error) {
        return response.status(queryResult.error.code).json(getErrorResponseBody(queryResult.error.message))
    };

    return response.json(getSuccessResponseBody(queryResult.data))
};


module.exports = getPostById