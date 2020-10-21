module.exports = {
    development: {
        username: 'postgres',
        password: 'postgres',
        database: 'movies',
        host: process.env.DB_HOST,
        dialect: 'postgres',
    },
    production: {
        username: 'postgres',
        password: 'postgres',
        database: 'movies',
        host: process.env.DB_HOST,
        dialect: 'postgres',
    },
}
