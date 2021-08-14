const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/articles', (req, res) => {
    res.send('<h1>Articles Page</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`)
})