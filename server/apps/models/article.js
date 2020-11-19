const mongoose = require('mongoose');

//skema artikel dalam topik
const articleSchema = new mongoose.Schema({
    topicId: {
        type: String,
        required: [true, "Please input ID Topic!"]
    },
   articleName: {
        type: String,
        required: [true, "Please input article name!"]
    },
    articleDetail: {
        type: String,
        required: [true, "Please input article detail!"]
    },
    articleDocument: {
        type: String,
        required: [true, "Please Input article document!"]
    },
    indexArticle: {
        type: String,
        required: [true, "Pleas input index aricle!"]
    },

}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;