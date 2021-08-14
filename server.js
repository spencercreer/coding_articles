const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', require('./routes/htmlRoutes'))
app.use('/api/articles', require('./routes/apiRoutes'))

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`)
})