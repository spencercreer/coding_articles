// Require dependencies
const express = require('express')
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const connection = require('./config/connection')

//Test db connection
connection.authenticate()
    .then(() => console.log('Database articles_db connected...'))
    .catch(err => console.log('db.authenticate error: ' + err))

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

// Initialize PORT
const PORT = process.env.PORT || 5000

app.use(require('./controller/'))

//Listen
app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))