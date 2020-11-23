const express = require("express");
const Portfolio = require("../models/portfolio");
const User = require("../models/user");
const Enroled = require("../models/enroled");
const auth = require("../middleware/auth");

const cvRouter = express.Router();


cvRouter.get("/cvDownload", auth, async(req, res) => {
    const ID = req.user._id; //login dulu ya
    try {
        const userInfo = await User.find({ _id: ID });
        const enroled = await Enroled.find({ pelajarId: ID });
        const portfolio = await Portfolio.find({ userId: ID });

        res.status(200).json({
            userInfo,
            enroled,
            portfolio
        })
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = cvRouter;