const Sequelize = require('sequelize')
const connection = require('../config/connection')

const Article = connection.define('article', {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
})

module.exports = Article