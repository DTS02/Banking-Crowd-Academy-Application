const mongoose = require('mongoose');
//const { stringify } = require('querystring');  // ini buat apa ya??? @rian

//skema portfolio
const portfolioSchema = new mongoose.Schema({
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

}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;