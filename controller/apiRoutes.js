const router = require('express').Router()
const connection = require('../config/connection')
const Article = require('../models/Article')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/articles', (req, res) => {
   Article.findAll()
        .then(articles => res.render('index', {articles}))
        .catch(err => console.log(err))
})

module.exports = router