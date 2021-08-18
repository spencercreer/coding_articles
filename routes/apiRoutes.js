const express = require('express')
const uuid = require('uuid')
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

router.post('/', (req, res) => {
    const newArticle = {
        id: uuid.v4(),
        title: req.body.title,
        author: req.body.author,
        url: req.body.url,
        description: req.body.description,
        watched: req.body.watched
    }

    if(!newArticle.title || !newArticle.url) {
        return res.status(400).json({ msg: 'Please include a title and url' })
    }

    articles.push(newArticle);
    res.json(articles)
})

module.exports = router