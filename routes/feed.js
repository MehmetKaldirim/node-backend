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
    expValidator.body("title").trim().isLength({ min: 7 }),
    expValidator.body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

router.get("/post/:postId", feedController.getPost);
router.put("/post/:postId", feedController.getPost);


module.exports = router;
