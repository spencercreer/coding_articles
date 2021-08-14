const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

router.get('/articles', (req, res) => {
    res.send('<h1>Articles Page</h1>')
})

module.exports = router