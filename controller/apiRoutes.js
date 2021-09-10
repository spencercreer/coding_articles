const router = require('express').Router()
const Article = require('../models/Article')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/articles', (req, res) => {
   Article.findAll()
        .then(articles => res.render('index', {articles}))
        .catch(err => console.log(err))
})

router.post('/add', (req, res) =>{
    let { title, author, body, url, technologies } = req.body
    Article.create({
        title,
        author,
        body,
        url,
        technologies,

    })
        .then(article => res.redirect('/articles'))
        .catch(err => console.log(err))
})

module.exports = router