require('dotenv').config();


module.exports = {
    server: {
        host: process.env.HOST || 'localhost',
        port: Number.parseInt(process.env.PORT) || 8080
    },
    database: {},
    adminAuth: {
        username: process.env.API_ADMIN_USERNAME,
        password: process.env.API_ADMIN_PASSWORD
    }
}