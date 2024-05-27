const express = require("express");
const { createPost, getTimeline, likePost, commentPost, getComments, getPostsByUser } = require("../controllers/postController");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

// 23rd/05/2024
// create route
router.post('/create-post',authMiddleware,createPost);
// 27th/05/2024
// route for timeline
router.get('/timeline',authMiddleware,getTimeline);
// route for post request
router.post('/like-post/:postId',authMiddleware,likePost);
// route for comment
router.post('/comment-post/:postId',authMiddleware,commentPost);
// route to get comment
router.get("/comments/:postId",getComments);
// getting all postv by user
router.get("/user-posts",authMiddleware,getPostsByUser);



module.exports = router