const mongoose = require('mongoose');

//skema like dalam kelas
const likeClassSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "Please input userId!"]
    },
   classId: {
        type: String,
        required: [true, "Please input classId!"]
    },
    like: {
        type: Boolean,
        required: false
    },

}, { timestamps: true });

const likeClass = mongoose.model('likeClass', likeClassSchema);

module.exports = likeClass;