const express = require('express')
const mysql = require('mysql')
const path = require('path')
const connection = require('./config/connection')
const exphbs = require('express-handlebars')
//const articles = require('./Articles')

const app = express()

const PORT = process.env.PORT || 8080

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Home page route 
// move to html routes file
app.get('/', (req, res) => {
    let sql = 'SELECT * FROM articles'
    let query = connection.query(sql, (err, results, fields) => {
        if(err) throw err
        let articles = JSON.parse(JSON.stringify(results))
        console.log('success')

        res.render('index', {
            title: 'Coding Articles',
            articles
        })
    })
})

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/articles', require('./routes/apiRoutes'))

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`)
})