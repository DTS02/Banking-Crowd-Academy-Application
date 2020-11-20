const express = require("express");
const Class = require("../models/class");
const Enroled = require("../models/enroled");
const auth = require("../middleware/auth");
const LikeC = require("../models/likeClass");
const CommentC = require("../models/commentClass");


const classRouter = express.Router();

//check role
const checkRole = (...roles) => { //...spread operator extrak isi array 
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.send(403) // error fobbriden
        }

        next();
    };
};


classRouter.post("/class/", auth, checkRole('teacher'), async(req, res) => {
    try {

        //createclass
        const classs = new Class({
            ...req.body
        });
        await classs.save();
        console.log(req.body.teacherId + Class._id)


        const enroledClass = new Enroled({
            teacherId: req.user._id,
            classId: classs._id,
            graduationStatus: true,
            enroledDetail: req.body.className
        })
        await enroledClass.save();


        res.status(201).send({ classs })
    } catch (err) {
        res.status(400).send(err.message);
    }

});

// Update class by ID for teacher
classRouter.patch("/class/:id", auth, checkRole('teacher'), async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["className", "classDetail", "classStart", "classEnd", "classPhoto", "classStatus"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
        return res.status(400).send();
    }

    try {
        const classs = await Class.findById(req.params.id);
        updates.forEach((update) => (classs[update] = req.body[update]));

        await classs.save();
        res.status(200).send({ classs })
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete class
classRouter.delete("/class/:id", auth, checkRole('admin'), async(req, res) => {
    const classs = await Class.findByIdAndDelete(req.params.id);
    try {
        classs ? res.status(204).send("class deleted") : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get all list detail  buat dashboard home
classRouter.get("/dashboard/class/all", auth, async(req, res) => {
    try {
        const classs = await Class.find({ classStatus: false });
        if (classs) {
            res.status(200).json(classs)
        } else {
            res.status(404).json({ message: 'Class not found' })
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});


//get all  list for teacher 
classRouter.get("/class/all", auth, checkRole('teacher', 'admin'), async(req, res) => {
    try {
        const classs = await Class.find({});
        if (classs) {
            res.status(200).json(classs)
        } else {
            res.status(404).json({ message: 'Users not found' })
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});





//get class by id kalau user pilih spesifik
classRouter.get("/class/:id", auth, async(req, res) => {

    const classs = await Class.findById(req.params.id);
    const likeC = await LikeC.find({
        articleId: req.params.id
    })
    const commentC = await CommentC.find({
        articleId: req.params.id
    })

    if (classs) {
        res.json(classs, likeA, commentA)
    } else {
        res.status(404).json({
            message: 'Article not found'
        })
    }
});

module.exports = classRouter;