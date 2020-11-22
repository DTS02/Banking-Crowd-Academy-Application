const mongoose = require('mongoose');

//skema comment dalam kelas
const commentClassSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "Please input userId!"]
    },
    classId: {
        type: String,
        required: [true, "Please input classId!"]
    },
    commentDetail: {
        type: String,
        required: [true, "Please input your comment!"]
    },

}, { timestamps: true });

const commentClass = mongoose.model('commentClass', commentClassSchema);

module.exports = commentClass;