const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const cors = require("cors");



const router = express.Router();

//untuk cek role
const CheckRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.send(403); // error forbidden
        }

        next(); // lanjut 
    };
};


// Create User

router.post("/users/signup", async(req, res) => {
    try {
        // console.log(req.body)
        if (req.body.passwordConfirm !== req.body.password) {
            throw Error("Your password is not same with password comfirm!");;
        }
        const cekUsername = await User.find({
            "userName": req.body.userName //cek
        }).count()
        const cekEmail = await User.find({
            "email": req.body.email //cek
        }).count()
        console.log(cekUsername, cekEmail)
        if (cekUsername + cekEmail > 0) {
            throw Error("username/email already registered");;
        }
        const user = new User(req.body);
        const token = await user.generateAuthToken();
        await user.save();
        res.status(201).send("Success Registration, Please Login");
    } catch (err) {

        res.status(400).send(err.message);
    }
});


// Login User
router.post("/users/login", async(req, res) => {
    try {
        req.body.passwordConfirm = req.body.password;
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.generateAuthToken();

        res.send({ token });
    } catch (Error) {
        res.status(403).send(Error.message);
    }
});

// User Logout

router.post("/users/logout", auth, async(req, res) => {
    try {


        req.user.tokens = req.user.tokens.filter(
            (token) => token.token !== req.user.token
        );
        await req.user.save();
        res.status(200).send("success logout");
    } catch (err) {
        res.status(500).send("invalid token");
    }
});

// Logout for all account (all devices 1 account)
router.post("/users/logoutAll", auth, async(req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).send("success logout all token deleted");
    } catch (err) {
        res.status(500).send("invalid token");
    }
});

// Get user all for admin panel
router.get("/users", auth, CheckRole("admin"), async(req, res) => {
    const users = await User.find({});
    try {
        users.length === 0 ? res.status(404).send() : res.send(users);
    } catch (err) {
        res.status(500).send("err.message");
    }
});

// Get current user profile
router.get("/users/me", auth, (req, res) => {
    res.send(req.user);
});

// Get profile by ID
router.get("/users/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(
                user
            )

        } else {
            res.status(404).json({
                message: 'users not found'
            })
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update current user
router.patch("/users/me", auth, async(req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ["firstName", "lastName", "userName", "password", "passwordConfrim", "email", "photoProfile"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
        return res.status(400).send(); // eeror not allwed
    }
    try {
        const user = await User.findById(req.user._id);
        updates.forEach((update) => {
            user[update] = req.body[update];
        });
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update user by ID for admin
router.patch("/users/:id", auth, CheckRole('admin'), async(req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ["statusUser", "role", "verification"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
        return res.status(400).send(); // eeror not allwed
    }
    try {
        const user = await User.findById(req.params.id);
        updates.forEach((update) => {
            user[update] = req.body[update];
        });
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//Delete user by ID
router.delete("/users/:id", auth, CheckRole("admin"), async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    try {
        user ? res.status(204).send("success deleted : " + req.params.id) : res.status(404).send("user Not Found :" +
            req.params.id);
    } catch (err) {
        res.status(500).send("User not found / you not authorize");
    }
});







module.exports = router;