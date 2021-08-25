const mysql = require('mysql')

// Setup database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'coding_articles'
})

// Connect to database
connection.connect((err) => {
    if(err) {
        throw err
    }
    console.log('MySql Connected...')
})

module.exports = connection
