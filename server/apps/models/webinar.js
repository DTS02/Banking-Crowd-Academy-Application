const mongoose = require('mongoose');

//Skema model untuk kelas
const webinarSchema = new mongoose.Schema({
    webinarName: {
        type: String,
        required: [true, "Please input webinar name!"]
    },
    webinarDetail: {
        type: String,
        required: [true, "Please input webinar detail!"]
    },
    webinarUrl: {
        type: String,
        required: [true, "Please input webinar detail!"]
    },
    webinarPhoto: {
        type: String,
        required: [true, "Please upload webinar photo!"]
    },
    webinarStatus: {
        type: Boolean,
        default: true
    },
    webinarStart: {
        type: String,
        required: [true, "Please input date webinar started!"]
    },
    webinarEnd: {
        type: String,
        required: [true, "Please input date webinar ended!"]
    },


}, { timestamps: true });

const Webinar = mongoose.model('Webinar', classSchema);

module.exports = Class;