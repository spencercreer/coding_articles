const router = require('express').Router()
const Article = require('../models/Article')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', (req, res) => {
   Article.findAll()
        .then(articles => res.render('index', {articles}))
        .catch(err => console.log(err))
})

// Display add article form
router.get('/add', (req, res) => res.render('add'))

module.exports = router