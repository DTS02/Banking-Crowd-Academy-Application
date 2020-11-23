const Nodemailer = require('nodemailer');
const Config = require("../config");

const transporter = Nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: Config.userGmail,
        pass: Config.passGmail,
    },
});

module.exports = transporter