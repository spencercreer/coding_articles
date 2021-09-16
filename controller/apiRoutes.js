const router = require('express').Router()
const Article = require('../models/Article')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// add article
router.post('/add', (req, res) => {
    let { title, author, body, url, technologies } = req.body
    Article.create({
        title,
        author,
        body,
        url,
        technologies,

    })
        .then(article => res.redirect('/'))
        .catch(err => console.log(err))
})

// delete article
router.delete(`/delete/:id`, (req, res) => {
    Article.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(res.status(204).end())
        .catch(err => console.log(err))
})

// update article
// router.put('/update/:id', (req, res) => {
//     console.log(req.params.id)
// })

module.exports = router