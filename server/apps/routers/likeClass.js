const express = require("express");
const auth = require("../middleware/auth");
const likeClass = require("../models/likeClass");

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
likeClassRouter.post("/class/like", auth, async(req, res) => {
    try {

        const likeC = new likeClass({
            ...req.body
        });
        await likeC.save();

        res.status(201).send({ likeClass });
    } catch (err) {
        res.status(400).send(err.message);
    }

});

// Delete like in Article
likeClassRouter.delete("/class/like/:id", auth, async(req, res) => {
    const likeC = await likeClass.findByIdAndDelete(req.params.id);
    try {
        likeC ? res.status(204).send("Like deleted!") : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get all list like in article
likeClassRouter.get("/class/like/all", auth, async(req, res) => {
    try {
        const likeC = await likeClass.find({});
        likeC ? res.status(200).json({
            likeC

        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get like in article by user id
likeClassRouter.get("/class/like/user/:id", async(req, res) => {
    const likeC = await likeClass.find({userId},{classId});

    if(likeC) {
      res.json(likeC)
    } else {
      res.status(404).json({
        message: 'You have never liked!'
      })
    }
})

module.exports = likeClassRouter;