const express = require("express");
const auth = require("../middleware/auth");
const likeArticle = require("../models/likeArticle");

const likeArticleRouter = express.Router();

//check role
const checkRole = (...roles) => { //...spread operator extrak isi array 
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.send(403) // error forbidden
        }

        next();
    };
};

//add like in article
likeArticleRouter.post("/article/like", auth, async(req, res) => {
    try {

        const likeA = new likeArticle({
            ...req.body
        });
        await likeA.save();

        res.status(201).send({ likeArticle });
    } catch (err) {
        res.status(400).send(err.message);
    }

});

// Delete like in Article
likeArticleRouter.delete("/article/like/:id", auth, async(req, res) => {
    const likeA = await likeArticle.findByIdAndDelete(req.params.id);
    try {
        likeA ? res.status(204).send("like deleted!") : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get all list like in article
likeArticleRouter.get("/article/like/all", auth, async(req, res) => {
    try {
        const likeA = await likeArticle.find({});
        likeA ? res.status(200).json({
            likeA

        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get like in article by user id
likeArticleRouter.get("/article/like/user/:id", async(req, res) => {
    const likeA = await likeArticle.find({userId},{articleId});

    if(likeA) {
      res.json(likeA)
    } else {
      res.status(404).json({
        message: 'You have never liked!'
      })
    }
})

module.exports = likeArticleRouter;