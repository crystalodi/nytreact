const db = require("../models");

const controllerRoutes = {
    findAll: (req, res) => {
        db.Article.find(req.query)
        .then(articles=> res.json(articles))
        .catch(err => res.status(422).json(err))
    },
    create: (req, res) => {
        db.Article.create(req.body)
        .then(article=> res.json(article))
        .catch(err => res.status(422).json(err))
    },
    delete: (req, res) => {
        db.Article.remove({ _id: req.params.id })
        .then(article => res.json(article))
        .catch(err => res.status(422).json(err))
    }
}

export default controllerRoutes;