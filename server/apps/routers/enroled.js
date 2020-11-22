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



//get list enroled id pelajar by token
enrollRouter.get("/enroled/me", auth, checkRole('pelajar'), async(req, res) => {
    const enroled = await Enroled.find({ pelajarId: req.user._id });
    try {
        enroled ? res.status(200).json({
            enroled
        }) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get list enroled id pengajar by token
enrollRouter.get("/enroled/pengajar", auth, checkRole('pengajar'), async(req, res) => {

    const enroled = await Enroled.find({ pengajarId: req.user._id });
    try {
        enroled ? res.status(200).json({
            enroled
        }) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});


enrollRouter.post("/class/enroll", auth, checkRole('pelajar'), async(req, res) => {

    try {
        const cekclass = await Enroled.findOne({ classId: req.body.classId });
        if (!cekclass) {
            throw Error("Wrong class ID"); // user belum terdaftar
        }

        const cekenroled = await Enroled.findOne({ classId: req.body.classId, pelajarId: req.user._id, });
        if (cekenroled) {
            throw Error("already registered"); // user belum terdaftar
        }
        const getData = await Enroled.findOne({
            classId: req.body.classId
        });

        const enroled = new Enroled({
            classId: req.body.classId,
            graduationStatus: false,
            pelajarId: req.user._id,
            pengajarId: getData.pengajarId,
            schedule: req.body.schedule,
            enroledDetail: getData.enroledDetail
        });
        await enroled.save();

        const activity = new Activity({
            userId: req.user._id,
            activityTitle: "enroll Class ",
            activityDetail: "class Name : " + enroled.enroledDetail
        });
        await activity.save();

        res.status(201).send({
            enroled,
            activity
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});


enrollRouter.post("/webinar/enroll", auth, checkRole('pelajar'), async(req, res) => {

    try {
        const cekIdwebinar = await Enroled.findOne({ webinarId: req.body.webinarId });
        if (!cekIdwebinar) {
            throw Error("Wrong Webinar ID"); // user belum terdaftar
        }
        const cekenroled = await Enroled.findOne({ webinarId: req.body.webinarId, pelajarId: req.user._id, });
        if (cekenroled) {
            throw Error("already registered"); // user belum terdaftar
        }
        const getData = await Enroled.findOne({
            webinarId: req.body.webinarId
        });

        const enroled = new Enroled({
            webinarId: req.body.webinarId,
            graduationStatus: false,
            pelajarId: req.user._id,
            pengajarId: getData.pengajarId,
            schedule: req.body.schedule,
            enroledDetail: getData.enroledDetail
        });
        await enroled.save();

        const activity = new Activity({
            userId: req.user._id,
            activityTitle: "enroll Webinar ",
            activityDetail: "webinar Name : " + enroled.enroledDetail
        });
        await activity.save();


        res.status(201).send({ enroled, activity });
    } catch (err) {
        res.status(400).send(err.message);
    }
});


// Delete enroll class
enrollRouter.delete("/class/enroled/:classId", auth, checkRole('pelajar'), async(req, res) => {
    const enroled = await Enroled.findOneAndDelete({
        pelajarId: req.user._id, //dari auth
        classId: req.params.classId //dari parameter classid
    });
    try {
        enroled ? res.status(204).send("enroll class deleted") : res.status(404).send("your are not registered this class");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete enroll webinar
enrollRouter.delete("/webinar/enroled/:webinarId", auth, checkRole('pelajar'), async(req, res) => {
    const enroled = await Enroled.findOneAndDelete({
        pelajarId: req.user._id, //dari auth
        webinarId: req.params.webinarId //dari parameter webinarId
    });
    try {
        enroled ? res.status(204).send("enrole deleted") : res.status(404).send("your are not registered this Webinar");
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

// Update graduationStatus by ID enroled for pengajar
enrollRouter.patch("/enroled/:id", auth, checkRole('pengajar'), async(req, res) => {
    try {

        const enroled = await Enroled.findOneAndUpdate(req.params.id);
        enroled.graduationStatus = req.body.graduationStatus
        await enroled.save();
        res.status(200).send({ enroled })
    } catch (err) {
        res.status(500).send(err.message);
    }
});


module.exports = enrollRouter;