const Activity = require("../models/activity");

const auth = require("../middleware/auth");
const express = require("express");
const dailyRouter = express.Router();

dailyRouter.get("/dailyActivity", auth, async(req, res) => {
    const ID = req.user._id;
    try {
        const activity = await Activity.find({ learnerId: ID }).sort({ date: -1 }).limit(10);
        activity ?
            res.status(200).json(
                activity
            ) : res.status(404).send("no data , never enrole webinar/class/ upload portfolio"); //
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = dailyRouter;