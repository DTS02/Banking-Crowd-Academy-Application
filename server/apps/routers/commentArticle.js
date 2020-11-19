const express = require("express");
const auth = require("../middleware/auth");
const commentArticle = require("../models/commentArticle");

const commentArticleRouter = express.Router();

//check role
const checkRole = (...roles) => { //...spread operator extrak isi array 
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.send(403) // error fobbriden
        }

        next();
    };
};

//add comment in article
commentArticleRouter.post("/article/comment", auth, async(req, res) => {
    try {

        const commentA = new commentArticle({
            ...req.body
        });
        await commentA.save();

        res.status(201).send({ commentArticle });
    } catch (err) {
        res.status(400).send(err.message);
    }

});

// Delete Comment in Article
commentArticleRouter.delete("/article/comment/:id", auth, async(req, res) => {
    const commentA = await commentArticle.findByIdAndDelete(req.params.id);
    try {
        commentA ? res.status(204).send(commentA) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get all list comment in article
commentArticleRouter.get("/article/comment/all", auth, async(req, res) => {
    try {
        const commentA = await commentArticle.find({});
        commentA ? res.status(200).json({
            commentA

        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get comment in article by user id
commentArticleRouter.get("/article/comment/user/:id", async(req, res) => {
    const commentA = await commentArticle.find({userId},{articleId});

    if(commentA) {
      res.json(commentA)
    } else {
      res.status(404).json({
        message: 'You have never commented!'
      })
    }
})

module.exports = commentArticleRouter;