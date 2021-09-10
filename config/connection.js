const Sequelize = require('sequelize')

module.exports = new Sequelize('articles_db', 'root', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

// const mysql2 = require('mysql2')
// require('dotenv').config()

// // Setup database connection
// const connection = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: process.env.PASSWORD,
//     database: "articles_db"
// })

// // Connect to database
// connection.connect((err) => {
//     if(err) {
//         throw err
//     }
//     console.log('MySQL connected to tech_blog_db')
// })

// module.exports = connection