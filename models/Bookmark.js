const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    isFavorite: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;