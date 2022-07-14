const basicAuth = require('express-basic-auth');

const { adminAuth } = require('../../config');

const { getErrorResponseBody } = require('../../helpers');


const authenticateAdminWithBasic = basicAuth({
    users: { [adminAuth.username]: adminAuth.password },
    challenge: true,
    unauthorizedResponse: ({ auth }) => getErrorResponseBody(auth? 'Wrong credentials' : 'Authentication is required')
});


module.exports = authenticateAdminWithBasic