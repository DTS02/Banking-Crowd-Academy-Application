const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    userId: {
        type: String

    },
    activityTitle: {
        type: String

    },
    activityDetail: {
        type: String
    }

}, { timestamps: true });

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
