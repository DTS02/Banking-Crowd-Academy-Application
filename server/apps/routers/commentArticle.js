const express = require("express");
const auth = require("../middleware/auth");
const commentArticle = require("../models/commentArticle");
const Article = require("../models/article");
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
        const cekArticle = await Article.findOne({
            _id: req.body.articleId
        }).countDocuments()
        console.log(cekArticle)
        if (cekArticle == 0) {
            throw Error("Cannot find Article!");;
        }

        const commentA = new commentArticle({
            ...req.body
        });
        await commentA.save();

        res.status(201).send({ commentArticle });
    } catch (err) {
        res.status(400).send(err.message);
    }

});



commentArticleRouter.patch("/article/comment/:id", auth, async(req, res) => {
    try {
        const commentA = await commentArticle.findById(req.params.id);
        //console.log(likeC.userId, req.user._id)
        if (commentA.userId != req.user._id) {
            throw Error("This not your Comment!");;
        }
        commentA.commentDetail = req.body.commentDetail,
            await commentA.save();
        commentA ? res.status(200).send(commentA) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});



commentArticleRouter.delete("/article/comment/:id", auth, async(req, res) => {
    const commentA = await commentArticle.findByIdAndDelete(req.params.id);
    try {
        commentA ? res.status(204).send("Comment deleted!") : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = commentArticleRouter;