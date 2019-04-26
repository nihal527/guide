module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'guide',
        user: process.env.DB_USER || 'guide',
        password: process.env.DB_PASS || 'guide',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './guide.sqlite'
        }
    }
}