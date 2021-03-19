const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //The name of DB
    process.env.DB_USER, // The user on file .env
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)