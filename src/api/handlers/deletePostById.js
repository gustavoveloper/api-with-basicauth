const Post = require('../entities/Post');

const {
    isNumericText,
    getErrorResponseBody,
    getSuccessResponseBody
} = require('../../helpers');


async function deletePostById(request, response) {
    const { id } = request.params;

    if (!isNumericText(id)) {
        return response.status(400).json(getErrorResponseBody('Post ID must be numeric'))
    };


    const deletionResult = await Post.removePostById(id);

    if (deletionResult.error) {
        return response.status(deletionResult.error.code).json(getErrorResponseBody(deletionResult.error.message))
    };

    return response.json(getSuccessResponseBody(deletionResult.data))
};


module.exports = deletePostById