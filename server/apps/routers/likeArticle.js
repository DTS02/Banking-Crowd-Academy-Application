const express = require("express");
const auth = require("../middleware/auth");
const likeArticle = require("../models/likeArticle");
const Article = require("../models/article");

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

        const cekArticle = await Article.findOne({
            _id: req.body.articleId
        }).countDocuments()
        console.log(cekArticle)
        if (cekArticle == 0) {
            throw Error("Cannot find Article!");;
        }

        const likeA = new likeArticle({
            userId: req.user._id,
            articleId: req.body.articleId,
            likeStatus: true,
        });
        await likeA.save();

        res.status(201).send({ likeA });
    } catch (err) {
        res.status(400).send(err.message);
    }

});

likeArticleRouter.patch("/article/like/:id", auth, async(req, res) => {
    try {
        const likeA = await likeArticle.findById(req.params.id);
        //console.log(likeA.userId, req.user._id)
        if (likeA.userId != req.user._id) {
            throw Error("Cannot update like Not Authorized!");;
        }
        likeA.booking = req.body.likeStatus,


            await likeA.save();
        likeA ? res.status(200).send(likeA) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});


module.exports = likeArticleRouter;