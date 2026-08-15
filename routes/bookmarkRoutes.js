const express = require("express");
const { createBookmark } = require("../controllers/bookmarkController");
const { getBookmarks } = require("../controllers/bookmarkController");
const { getBookmark } = require("../controllers/bookmarkController");
const {updateBookmark} = require("../controllers/bookmarkController");
const {deleteBookmark} = require("../controllers/bookmarkController");
const router = express.Router();

router.post("/", createBookmark);
router.get("/",getBookmarks);
router.get("/:id",getBookmark);
router.put("/:id",updateBookmark);
router.delete("/:id",deleteBookmark);
module.exports = router;