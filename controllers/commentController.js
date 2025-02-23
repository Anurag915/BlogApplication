const Post = require("../models/postModel");
// const Like = require("../models/likesModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    //fetch data from req body
    const { post, user, body } = req.body;
    //create new comment
    const newComment = new Comment({
      post,
      user,
      body,
    });

    //save the new comment to the database
    const savedComment = await newComment.save();
    //find the post to which the comment belongs
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();
    //send the response
    res.status(201).json({
      status: "success",
      data: {
        updatedPost,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
