const express = require('express')
const router = express.Router()
const articles = require('../Articles')

// Get all articles
router.get('/', (req, res) => {
    res.json(articles)
})

// Get single article
router.get('/:id', (req, res) => {
    const found = articles.some(article => article.id === parseInt(req.params.id))

    if(found) {
        res.json(articles.find(article => article.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No article with the id of ${req.params.id}`})
    }
})

module.exports = router