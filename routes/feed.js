const express = require("express");
const expValidator = require("express-validator");

const feedController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/post
router.post(
  "/post",
  [
    expValidator.body("title").trim().isLength({ min: 5 }),
    expValidator.body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

module.exports = router;
