const express = require("express");
const Portfolio = require("../models/portfolio");
const User = require("../models/user");
const Enroled = require("../models/enroled");

const express = require("express");
const cvRouter = express.Router();


cvRouter.get("/cvDownload", auth, async(req, res) => {
    const ID = req.user._id; //login dulu ya
    try {
        const userInfo = await User.find({ userId: ID });
        const enroled = await Enroled.find({ LearnId: ID, graduationStatus: true });
        const portfolio = await Portfolio.find({ userId: ID });
        userInfo, enrole, portfolio ?
            res.status(200).json(
                userInfo, enroled, portfolio
            ) : res.status(404).send("no data , user Not Found/ never finish class / never Upload portfolio"); //
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = cvRouter;