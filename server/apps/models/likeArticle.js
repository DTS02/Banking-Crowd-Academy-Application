const mongoose = require('mongoose');

//skema like dalam artikel
const likeArticleSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "Please input userId!"]
    },
   articleId: {
        type: String,
        required: [true, "Please input articleId!"]
    },
    like: {
        type: Boolean,
        required: false
    },

}, { timestamps: true });

const likeArticle = mongoose.model('likeArticle', likeArticleSchema);

module.exports = likeArticle;