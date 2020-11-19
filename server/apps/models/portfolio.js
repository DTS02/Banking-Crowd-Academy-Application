const mongoose = require('mongoose');
//const { stringify } = require('querystring');  // ini buat apa ya??? @rian

//skema portfolio
const portfolioSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    portfolioName: {
        type: String,
        required: [true, "Please input portfolio name!"]
    },
    portfolioDetail: {
        type: String,
        required: [true, "Please input portfolio detail!"]
    },
    portfolioFile: {
        type: String,
        required: [true, "Please input portfolio file!"]
    },
    userId: {
        type: String,
        required: [true, "Please Login/Input user manual!"]
    }

}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;