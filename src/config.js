require('dotenv').config();


module.exports = {
    server: {
        host: process.env.HOST || 'localhost',
        port: Number.parseInt(process.env.PORT) || 8080
    },
    database: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT || 5432,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    },
    adminAuth: {
        username: process.env.API_ADMIN_USERNAME,
        password: process.env.API_ADMIN_PASSWORD
    }
}