const Post = require('../entities/Post');

const { getErrorResponseBody, getSuccessResponseBody } = require('../../helpers');


async function createPost(request, response) {
    let { title, content } = request.body;

    try {
        title = title.trim();
        content = content.trim()
    } catch {
        return response.status(400).json(getErrorResponseBody('Post title and content must be strings'))
    };


    const post = new Post({ title, content });

    const postValidationResult = post.validate();

    if (!postValidationResult.isValid) {
        return response.status(400).json(getErrorResponseBody(postValidationResult.error))
    };


    const insertionResult = await Post.insertPost(post.handle());

    if (insertionResult.error) {
        return response.status(insertionResult.error.code).json(getErrorResponseBody(insertionResult.error.message))
    };


    return response.status(201).json(getSuccessResponseBody(insertionResult.data))
};


module.exports = createPost