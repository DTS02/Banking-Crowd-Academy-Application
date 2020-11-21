const express = require("express");
const auth = require("../middleware/auth");
const commentClass = require("../models/commentClass");

const commentClassRouter = express.Router();

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
commentClassRouter.post("/class/comment", auth, async(req, res) => {
    try {

        const commentC = new commentClass({
            ...req.body
        });
        await commentC.save();

        res.status(201).send({ commentClass });
    } catch (err) {
        res.status(400).send(err.message);
    }

});

// Delete Comment in Article
commentClassRouter.delete("/class/comment/:id", auth, async(req, res) => {
    const commentC = await commentClass.findByIdAndDelete(req.params.id);
    try {
        commentC ? res.status(204).send("Comment deleted!") : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get all list comment in article
commentClassRouter.get("/class/comment/all", auth, async(req, res) => {
    try {
        const commentC = await commentClass.find({});
        commentC ? res.status(200).json({
            commentC

        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get comment in article by user id
commentClassRouter.get("/class/comment/user/:id", async(req, res) => {
    const commentC = await commentClass.find({ userId }, { classId });

    if (commentC) {
        res.json(commentC)
    } else {
        res.status(404).json({
            message: 'You have never comment!'
        })
    }
})

module.exports = commentClassRouter;