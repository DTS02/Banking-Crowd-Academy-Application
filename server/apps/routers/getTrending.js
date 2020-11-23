const express = require("express");
const Class = require("../models/class");
const Enroled = require("../models/enroled");
const auth = require("../middleware/auth");
const LikeC = require("../models/likeClass");
const Article = require("../models/article");
const LikeA = require("../models/likeArticle");


const trendingRouter = express.Router();

trendingRouter.get("/trending", async(req, res) => {

    try {

        ///const fieldName = "classId";
        const likec = await LikeC.aggregate([{
                "$match": { "likeStatus": true }
            },
            {
                "$group": {
                    _id: {
                        classId: "$classId",
                        likeStatus: "$likeStatus"
                    },
                    count: { $sum: 1 }
                }

            }, {
                "$sort": {
                    count: -1
                }
            },
            { $limit: 1 }
        ])

        const likea = await LikeA.aggregate([{
                "$match": { "likeStatus": true }
            },
            {
                "$group": {
                    _id: {
                        articleId: "$articleId",
                        likeStatus: "$likeStatus"
                    },
                    count: { $sum: 1 }
                }

            }, {
                "$sort": {
                    count: -1
                }
            },
            { $limit: 1 }
        ])


        res.status(200).json({
            likec,
            likea
        })

    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = trendingRouter;