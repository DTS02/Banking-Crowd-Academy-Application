const mongoose = require('mongoose');

//skema comment dalam artikel
const commentArticleSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "Please input userId!"]
    },
    articleId: {
        type: String,
        required: [true, "Please input article Id!"]
    },
    commentDetail: {
        type: String,
        required: [true, "Please input your comment!"]
    },

}, { timestamps: true });

const commentArticle = mongoose.model('commentArticle', commentArticleSchema);

module.exports = commentArticle;