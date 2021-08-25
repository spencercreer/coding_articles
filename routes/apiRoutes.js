const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const articles = require('../Articles')
const connection = require('../config/connection')

// Get all articles
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM articles'
    let query = connection.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        console.log('success')

        res.redirect('/')
    })
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
        title: req.body.title,
        author: req.body.author,
        url: req.body.url,
        description: req.body.description,
        //read: req.body.read
    }

    if(!newArticle.title || !newArticle.url) {
        return res.status(400).json({ msg: 'Please include a title and url' })
    }

    let sql = 'INSERT INTO articles SET ?'
    let query = connection.query(sql, newArticle, (err, result) => {
        if(err) throw err
        console.log(result)
        console.log('success')

        res.redirect('/')
    })
})

// Update article
router.put('/:id', (req, res) => {
    const found = articles.some(article => article.id === parseInt(req.params.id))

    if(found) {
        const updArticle = req.body
        articles.forEach(article => {
            if(article.id === parseInt(req.params.id)) {
                article.read = updArticle.read ? updArticle.read : article.read

                res.redirect('/')
            }
        })
    } else {
        res.status(400).json({ msg: `No article with the id of ${req.params.id}`})
    }
})

// Delete article
router.delete('/:id', (req, res) => {
    const found = articles.some(article => article.id === parseInt(req.params.id))

    if(found) {
        res.json({ msg: 'Article deleted', articles: articles.filter(article => article.id !== parseInt(req.params.id))})
    } else {
        res.status(400).json({ msg: `No article with the id of ${req.params.id}`})
    }
})

module.exports = router