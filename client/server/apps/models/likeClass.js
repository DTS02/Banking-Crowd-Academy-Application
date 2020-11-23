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
    likeStatus: {
        type: Boolean,
    },

}, { timestamps: true });

const LikeClass = mongoose.model('LikeClass', likeClassSchema);

module.exports = LikeClass;