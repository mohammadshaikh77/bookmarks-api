const Bookmark = require("../models/Bookmark");

const createBookmark = async (req, res) => {
    try {
        const { title, url, category, isFavorite } = req.body;

        const bookmark = new Bookmark({
            title,
            url,
            category,
            isFavorite
        });

        const savedBookmark = await bookmark.save();

        res.status(201).json(savedBookmark);
    } catch (error) {
    if (error.name === "ValidationError") {
        return res.status(400).json({
            message: "Validation error",
            error: error.message
        });
    }

    res.status(500).json({
        message: "Failed to create bookmark",
        error: error.message
    });
}
};


const getBookmarks = async (req, res) => {
    try {
        const { category } = req.query;

        let bookmarks;

        if (category) {
            bookmarks = await Bookmark.find({ category });
        } else {
            bookmarks = await Bookmark.find();
        }

        res.status(200).json(bookmarks);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch bookmarks",
            error: error.message
        });
    }
};

const getBookmark = async (req, res) => {
    try {
        const { id } = req.params;

        const bookmark = await Bookmark.findById(id);

        if (!bookmark) {
            return res.status(404).json({
                message: "Bookmark not found"
            });
        }

        res.status(200).json(bookmark);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch bookmark",
            error: error.message
        });
    }
};

const updateBookmark = async (req, res) => {
    try {
        const { id } = req.params;

        const updates = req.body;

        const bookmark = await Bookmark.findByIdAndUpdate(
            id,
            updates,
            { new: true }
        );

        if (!bookmark) {
            return res.status(404).json({
                message: "Bookmark not found"
            });
        }

        res.status(200).json(bookmark);

    } catch (error) {
        res.status(500).json({
            message: "Failed to update bookmark",
            error: error.message
        });
    }
};

const deleteBookmark = async (req, res) => {
    try {
        const { id } = req.params;

        const bookmark = await Bookmark.findByIdAndDelete(id);

        if (!bookmark) {
            return res.status(404).json({
                message: "Bookmark not found"
            });
        }

        res.status(200).json({
            message: "Bookmark deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete bookmark",
            error: error.message
        });
    }
};

module.exports = {
    createBookmark,
    getBookmarks,
    getBookmark,
    updateBookmark,
    deleteBookmark
};