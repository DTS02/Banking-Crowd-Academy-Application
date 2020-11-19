const express = require("express");
const Enroled = require("../models/enroledclass");
const User = require("../models/user");
const auth = require("../middleware/auth");

const enrollRouter = express.Router();

//check role
const checkRole = (...roles) => { //...spread operator extrak isi array 
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.send(403) // error fobbriden
        }

        next();
    };
};

//get id learner
enrollRouter.get("/users/learner", auth, checkRole('learner'), async(req, res) => {
    const users = await User.find({ learnerId: req.user._id });
    try {
        users.length === 0 ? res.status(404).send() : res.send(users);
    } catch (err) {
        res.status(500).send("err.message");
    }
});

//get id teacher
enrollRouter.get("/users/teacher", auth, checkRole('teacher'), async(req, res) => {
    const users = await User.find({ teacherId: req.user._id });
    try {
        users.length === 0 ? res.status(404).send() : res.send(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//enroll class
enrollRouter.post("/enroll", auth, checkRole('learner', 'teacher'), async(req, res) => {
    // console.log(auth.token)
    try {

        const enroled = new Enroled({
            ...req.body //need 
        });
        await enroled.save();
        res.status(201).send({ Enroled });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Delete enroll
enrollRouter.delete("/enroled/:id", auth, checkRole('learner'), async(req, res) => {
    const enroled = await Enroled.findByIdAndDelete(req.params.id);
    try {
        enroled ? res.status(204).send(enroled) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get all list for enroll
enrollRouter.get("/enroled/all", auth, checkRole('learner'), async(req, res) => {
    try {
        const enroled = await Enroled.find({});
        enroled ? res.status(200).json({
            enroled
        }) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// kelas ku / narik kelas pake parameter learnId yang di dapat dari token
enrollRouter.get("/enroled/me", auth, checkRole('learner'), async(req, res) => {
    try {
        const enroled = await Enroled.find({ learnerId: req.user._id });
        res.status(200).send({ enroled });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = enrollRouter;