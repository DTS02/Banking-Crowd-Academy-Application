const express = require("express");
const Webinar = require("../models/webinar");
const Enroled = require("../models/enroled");
const auth = require("../middleware/auth");
//const upload2aws = require("../middleware/awsUploadv2"); // masih bug

const webinarRouter = express.Router();


// //setup multer
// const multer = require('multer');


// const storage = multer.diskStorage({
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     }
// })
// let upload = multer({ storage: storage, limits: { fileSize: 20000000 } })

//check role
const checkRole = (...roles) => { //...spread operator extrak isi array 
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.send(403) // error fobbriden
        }

        next();
    };
};
// upload.single('file'), upload2aws.upload,

webinarRouter.post("/webinar/", auth, checkRole('pengajar'), async(req, res) => {
    try {
        //createwebinar
        const webinar = new Webinar({
            ...req.body,
        });
        await webinar.save();
        await console.log(req.body.pengajarId + Webinar._id)

        const enroledWebinar = new Enroled({
            pengajarId: req.user._id,
            webinarId: webinar._id,
            graduationStatus: true,
            enroledDetail: req.body.webinarName
        })
        await enroledWebinar.save();

        res.status(201).send({ webinar, enroledWebinar })
    } catch (err) {
        res.status(400).send(err.message);
    }

});

// Update webinar by ID for pengajar
webinarRouter.patch("/webinar/:id", auth, checkRole('pengajar'), async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["webinarName", "webinarDetail", "webinarStart", "webinarEnd", "webinarPhoto", "webinarUrl"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
        return res.status(400).send();
    }

    try {
        const webinar = await Webinar.findById(req.params.id);
        updates.forEach((update) => (webinar[update] = req.body[update]));

        await webinar.save();
        webinar ? res.status(200).json({
            webinar
        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }


});

// Delete webinar
webinarRouter.delete("/webinar/:id", auth, checkRole('pengajar'), async(req, res) => {
    const webinar = await Webinar.findByIdAndDelete(req.params.id);
    try {
        webinar ? res.status(204).send("webinar deleted!") : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//get all list detail  buat dashboard home
webinarRouter.get("/dashboard/webinar/all", auth, async(req, res) => {
    try {
        const webinar = await Webinar.find({});
        webinar ? res.status(200).json({
            webinar
        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


//get all list for enrol
webinarRouter.get("/webinar/all", auth, async(req, res) => {
    try {
        const webinar = await Webinar.find({});
        webinar ? res.status(200).json({
            webinar
        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//see all list webinar create by pengajar id token 
webinarRouter.get("/webinar/me", auth, checkRole('pengajar'), async(req, res) => {
    try {
        const webinar = await Webinar.find({
            pengajarid: req.user._id
        });
        webinar ? res.status(200).json({
            webinar
        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//see all list webinar create by pengajar id 
webinarRouter.get("/webinar/:pengajarId", auth, checkRole('pengajar'), async(req, res) => {
    try {
        const webinar = await Webinar.find({
            pengajarid: req.params.id
        });
        webinar ? res.status(200).json({
            webinar
        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


//get webinar by id kalau user pilih spesifik
webinarRouter.get("/webinar/:id", async(req, res) => {
    const _id = req.params.id;
    try {
        const webinar = await Webinar.findById(_id);
        webinar ? res.status(200).json({
            webinar
        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = webinarRouter;