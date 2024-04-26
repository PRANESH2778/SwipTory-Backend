const express = require("express");
const router = express.Router();
const {verifyJwt } = require("../middlewares/authMiddleware.js");
const {
  createStory,
  getStories,
  getStoryById,
  updateStory,
} = require("../controllers/status.js");
const { likeStory } = require("../controllers/likes.js");


// routes
router.post("/create", verifyJwt, createStory);
router.get("/getAll", getStories);
router.get("/getById/:storyId", getStoryById);
router.put("/update/:id", verifyJwt, updateStory);
router.put("/like/:id", verifyJwt, likeStory);

module.exports = router;
