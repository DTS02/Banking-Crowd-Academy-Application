const express = require("express");
const auth = require("../middleware/auth");
const Portfolio = require("../models/portfolio");

const portfolioRouter = express.Router();

//check role
const checkRole = (...roles) => { //...spread operator extrak isi array 
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.send(403) // error fobbriden
        }

        next();
    };
};

//add portfolio
portfolioRouter.post("/portfolio/", auth, async(req, res) => {
    try {

        //create portfolio
        const portfolio = new Portfolio({
            ...req.body
        });
        await portfolio.save();

        res.status(201).send({ Portfolio });
    } catch (err) {
        res.status(400).send(err.message);
    }

});

// Update Portfolio
portfolioRouter.patch("/portfolio/:id", auth, async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["portfolioName", "portfolioDetail", "portfolioFile"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
        return res.status(400).send();
    }

    try {
        const portfolio = await Portfolio.findById(req.params.id);
        updates.forEach((update) => (portfolio[update] = req.body[update]));

        await portfolio.save();
        portfolio ? res.status(200).json({
            portfolio
        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete Portfolio
portfolioRouter.delete("/portfolio/:id", auth, async(req, res) => {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    try {
        portfolio ? res.status(204).send(portfolio) : res.status(404).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});


//get all list article
portfolioRouter.get("/portfolio/all", auth, async(req, res) => {
    try {
        const portfolio = await Portfolio.find({});
        portfolio ? res.status(200).json({
            portfolio


        }) : res.status(404).send(err.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


//get article by id 
portfolioRouter.get("/portfolio/:id", async(req, res) => {
    const portfolio = await Portfolio.findById(req.params.id);

    if(portfolio) {
      res.json(portfolio)
    } else {
      res.status(404).json({
        message: 'Article not found'
      })
    }
  });

module.exports = portfolioRouter;