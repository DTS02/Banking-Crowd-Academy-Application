const express = require("express");
const Class = require("../models/class");
const User = require("../models/user");
const Topic = require("../models/topic");
const Article = require("../models/article");
const auth = require("../middleware/auth");
const boardRouter = express.Router();


const CheckRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.send(403); // error forbidden
        }

        next(); // lanjut 
    };
};


boardRouter.get("/info", auth, CheckRole('admin'), async(req, res) => {

    try {
        const users = await User.find({}).count();
        const classes = await Class.find({}).count();
        const topics = await Topic.find({}).count();
        const article = await Article.find({}).count();
        const activePelajar = await User.find({
            "statusUser": 1,
            "role": "pelajar"
        }).count();
        const unactivePelajar = await User.find({
            "statusUser": 0,
            "role": "pelajar"
        }).count();
        const activePengajar = await User.find({
            "statusUser": 1,
            "role": "pengajar"
        }).count();
        const unactivePengajar = await User.find({
            "statusUser": 0,
            "role": "pengajar"
        }).count();


        res.status(200).json({
            users,
            classes,
            topics,
            article,
            activePelajar,
            unactivePelajar,
            activePengajar,
            unactivePengajar
        })

    } catch (err) {
        res.status(500).send("err.message");
    }
});

module.exports = boardRouter;