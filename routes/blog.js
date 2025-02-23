const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Hello'));


//IMPORT controllers
const {createComment} = require("../controllers/commentController");
const {createPost,getAllPosts}=require('../controllers/postController');
const {likePost,unlikePost}=require('../controllers/likesController');

//mapping create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);


module.exports = router; // Ensure module.exports is correct