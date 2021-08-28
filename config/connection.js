const mysql2 = require('mysql2')
require('dotenv').config()

// Setup database connection
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: "tech_blog_db"
})

// Connect to database
connection.connect((err) => {
    if(err) {
        throw err
    }
    console.log('MySQL connected to tech_blog_db')
})

module.exports = connection