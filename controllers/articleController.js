const db = require("../models");

module.exports= {
    findAll: (req, res) => {
        db.Article.find({})
        .then(articles=> res.json(articles))
        .catch(err => res.status(422).json(err))
    },
    create: (req, res) => {
        db.Article.create(req.body)
        .then(article=> res.json(article))
        .catch(err => res.status(422).json(err))
    },
    remove: (req, res) => {
        db.Article.findById({ _id: req.params.id })
        .then(article => article.remove())
        .then(article => res.json(article))
        .catch(err => res.status(422).json(err))
    },
    findById: (req, res) => {
        db.Article.find({articleID: req.params.id})
        .then(article => res.json(article))
        .catch(err => res.status(422).json(err))
    }
}
