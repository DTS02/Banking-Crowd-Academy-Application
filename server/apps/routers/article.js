const express = require("express");
const auth = require("../middleware/auth");
const Article = require("../models/article");

const articleRouter = express.Router();

//check role
const checkRole = (...roles) => { //...spread operator extrak isi array 
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.send(403) // error fobbriden
        }

        next();
    };
};

//add article
articleRouter.post("/article/", auth, checkRole('teacher'), async(req, res) => {
    try {

        //createarticle
        const article = new Article({
            ...req.body
        });
        await article.save();

        res.status(201).send({ Article })
    } catch (err) {
        res.status(400).send(err.message);
    }

});

// Update Article
articleRouter.patch("/article/:id", auth, checkRole('teacher'), async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["topicId", "articleName", "articleDetail", "articleDocument", "indexArticle"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
        return res.status(400).send();
    }

    try {
        const article = await Article.findById(req.params.id);
        updates.forEach((update) => (article[update] = req.body[update]));

        await article.save();
        article ? res.status(200).json({
            article
        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete Article
articleRouter.delete("/article/:id", auth, checkRole('teacher'), async(req, res) => {
    const article = await Article.findByIdAndDelete(req.params.id);
    try {
        article ? res.status(204).send(article) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});


//get all list article
articleRouter.get("/article/all", auth, async(req, res) => {
    try {
        const article = await Article.find({});
        article ? res.status(200).json({
            article


        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


//get article by id 
articleRouter.get("/article/:id", async(req, res) => {
    const article = await Article.findById(req.params.id);

    if (article) {
        res.json(article)
    } else {
        res.status(404).json({
            message: 'Article not found'
        })
    }
});

module.exports = articleRouter;