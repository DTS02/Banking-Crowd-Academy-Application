const express = require("express");
const Enroled = require("../models/enroled");
const Activity = require("../models/activity");
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

//check class



//get list enroled id learner by token
enrollRouter.get("/enroled/me", auth, checkRole('learner'), async(req, res) => {
    const enroled = await Enroled.find({ learnerId: req.user._id });
    try {
        enroled ? res.status(200).json({
            enroled
        }) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get list enroled id teacher by token
enrollRouter.get("/enroled/teacher", auth, checkRole('teacher'), async(req, res) => {

    const enroled = await Enroled.find({ teacherId: req.user._id });
    try {
        enroled ? res.status(200).json({
            enroled
        }) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});


enrollRouter.post("/enroll/class", auth, checkRole('learner'), async(req, res) => {

    try {
        const cekenroled = await Enroled.findOne({ classId: req.body.classId, learnerId: req.user._id, });
        if (cekenroled) {
            throw Error("already registered"); // user belum terdaftar
        }

        const enroled = new Enroled({
            classId: req.body.classId,
            graduationStatus: false,
            learnerId: req.user._id,
            teacherId: req.body.teacherId,
            schedule: req.body.schedule,
            enroledDetail: req.body.className
        });
        await enroled.save();

        const activity = new Activity({
            userId: req.user._id,
            activityTitle: "enroll Class ",
            activityDetail: "classId : " + req.body.classId
        });
        await activity.save();

        res.status(201).send(enroled, activity);
    } catch (err) {
        res.status(400).send(err.message);
    }
});


enrollRouter.post("/enroll/webinar", auth, checkRole('learner'), async(req, res) => {

    try {
        const cekenroled = await Enroled.findOne({ webinarId: req.body.webinarId, learnerId: req.user._id, });
        if (cekenroled) {
            throw Error("already registered"); // user belum terdaftar
        }

        const enroled = new Enroled({
            webinarId: req.body.webinarId,
            graduationStatus: false,
            learnerId: req.user._id,
            teacherId: req.body.teacherId,
            schedule: req.body.schedule,
            enroledDetail: req.body.webinarName
        });
        await enroled.save();

        const activity = new Activity({
            userId: req.user._id,
            activityTitle: "enroll Webinar ",
            activityDetail: "webinarId : " + req.body.classId
        });
        await activity.save();


        res.status(201).send(enroled, activity);
    } catch (err) {
        res.status(400).send(err.message);
    }
});


// Delete enroll class
enrollRouter.delete("/enroled/:classId", auth, checkRole('learner'), async(req, res) => {
    const enroled = await Enroled.findOneAndDelete({
        learnId: req.user._id, //dari auth
        classId: req.params.classId //dari parameter classid
    });
    try {
        enroled ? res.status(204).send("enroll class deleted") : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});
// Delete enroll webinar
enrollRouter.delete("/enroled/:webinarId", auth, checkRole('learner'), async(req, res) => {
    const enroled = await Enroled.findOneAndDelete({
        learnId: req.user._id, //dari auth
        webinarId: req.params.webinarId //dari parameter webinarId
    });
    try {
        enroled ? res.status(204).send("enrole deleted") : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});




//get all list for enroll
enrollRouter.get("/enroled/all", auth, async(req, res) => {
    try {
        const enroled = await Enroled.find({});
        enroled ? res.status(200).json({
            enroled
        }) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update graduationStatus by ID enroled for teacher
enrollRouter.patch("/enroled/:id", auth, checkRole('teacher'), async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["graduationStatus"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
        return res.status(400).send();
    }

    try {
        const enroled = await Enroled.findById(req.params.id);
        updates.forEach((update) => (enroled[update] = req.body[update]));

        await enroled.save();
        res.status(200).send({ enroled })
    } catch (err) {
        res.status(500).send(err.message);
    }
});


module.exports = enrollRouter;