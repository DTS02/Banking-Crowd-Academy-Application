const express = require("express");
const Enroled = require("../models/enroled");
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
enrollRouter.get("/enroled/class/me", auth, checkRole('learner'), async(req, res) => {
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
enrollRouter.get("/enroled/class", auth, checkRole('teacher'), async(req, res) => {

    const enroled = await Enroled.find({ teacherId: req.user._id });
    try {
        enroled ? res.status(200).json({
            enroled
        }) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//enroll class for student
// enrollRouter.post("/enroll/class", auth, checkRole('learner'), async(req, res) => {
//     // console.log(auth.token)
//     try {

//         const enroled = new Enroled({
//             ...req.body //need 
//         });
//         await enroled.save();
//         res.status(201).send({ Enroled });
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// });

//enroll Classs  for student
enrollRouter.post("/enroll/class", auth, checkRole('learner'), async(req, res) => {

    try {
        const cekenroled = await Enroled.find({ classId: req.body.classId, learnerId: req.user._id, });
        if (cekenroled) {
            throw Error("already registered"); // user belum terdaftar
        }

        const enroled = new Enroled({
            classId: req.body.classId,
            graduationStatus: false,
            learnerId: req.user._id,
            teacherId: req.body.teacherId,
            schedule: req.body.schedule

        });
        await enroled.save();
        res.status(201).send({ enroled });
    } catch (err) {
        res.status(400).send(err.message);
    }
});



// Delete enroll
enrollRouter.delete("/enroled/:classId", auth, checkRole('learner'), async(req, res) => {
    const enroled = await Enroled.findOneAndDelete({
        learnId: req.user._id, //dari auth
        classId: req.params.classId //dari parameter classid
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

// kelas ku / narik kelas pake parameter learnId yang di dapat dari token
enrollRouter.get("/enroled/me", auth, checkRole('learner'), async(req, res) => {
    try {
        const enroled = await Enroled.find({ learnerId: req.user._id });
        res.status(200).send({ enroled });
    } catch (err) {
        res.status(500).send(err.message);
    }
});


// kelas ku / narik kelas pake parameter learnId yang di dapat dari token
enrollRouter.get("/enroled/:classId", auth, async(req, res) => {
    try {
        const enroled = await Enroled.find({ learnerId: req.params.classId });
        res.status(200).send({ enroled });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = enrollRouter;