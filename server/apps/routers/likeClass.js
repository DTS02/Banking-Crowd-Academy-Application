const express = require("express");
const auth = require("../middleware/auth");
const likeClass = require("../models/likeClass");
const classs = require("../models/class")

const likeClassRouter = express.Router();

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
likeClassRouter.post("/class/like/", auth, async(req, res) => {
    try {

        const cekClass = await classs.find({
            classId: req.body.classId
        }).countDocuments()

        if (cekClass == 0) {
            throw Error("Cannot find class!");;
        }

        const likeC = new likeClass({
            userId: req.user._id,
            classId: req.params.classId,
            likeStatue: true,
        });
        await likeC.save();

        res.status(201).send({ likeClass });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

likeClassRouter.patch("/class/like/:id", auth, async(req, res) => {
    try {
        const likeC = await likeClass.findById(req.params.id);
        likeC.booking = req.body.likeStatus,


            await likeC.save();
        likeC ? res.status(200).send(likeC) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = likeClassRouter;