const {
    getValidationResult,
    isNonEmptyText,
    getDatabaseQueryResult,
    getDatabaseQueryError
} = require('../../helpers');

const conn = require('../../db/conn');


function Post({ title, content }) {
    this.title = title;
    this.content = content;

    this.validate = function() {
        const result = getValidationResult();

        if (!isNonEmptyText(this.title)) result.setError('Post title must be non-empty text');
        else if (!isNonEmptyText(this.content)) result.setError('Post content must be non-empty text');

        return result
    };

    this.handle = function() {
        if (!this.validate().isValid) throw new Error('Only valid posts can be handled');

        this.title = this.title.replaceAll("'", "\\'");
        this.content = this.content.replaceAll("'", "\\'");

        return this
    }
};


Post.insertPost = async post => { // Insert new post into database
    const result = getDatabaseQueryResult();

    try {
        const [ postData ] = (await conn.query(`INSERT INTO posts (title, content) VALUES (E'${post.title}', E'${post.content}') RETURNING id, title, registered_at;`)).rows;

        result.setData(postData)
    } catch {
        result.setError(getDatabaseQueryError(500, 'Internal server error'))
    };

    return result
};

Post.returnAllPosts = async () => { // Get all registered posts data
    const result = getDatabaseQueryResult();

    try {
        const { rows: results, rowCount: total } = await conn.query('SELECT id, title FROM posts;');

        result.setData({ results, total })
    } catch {
        result.setError(getDatabaseQueryError(500, 'Internal server error'))
    };

    return result
};

Post.returnPostById = async id => { // Get an post by ID
    const result = getDatabaseQueryResult();

    try {
        const [ postData ] = (await conn.query(`SELECT * FROM posts WHERE id = '${id}';`)).rows;

        if (!postData) throw new Error('Post not found');

        result.setData(postData)
    } catch({ message: errorMessage }) {
        if (errorMessage === 'Post not found') result.setError(getDatabaseQueryError(404, errorMessage));
        
        else result.setError(getDatabaseQueryError(500, 'Internal server error'))
    };

    return result
};


module.exports = Post