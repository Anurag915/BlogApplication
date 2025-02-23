const Post=require('../models/postModel')
const Comment=require('../models/commentModel')

exports.createPost=async(req,res)=>{
    try{
        const {title,body,postId,comment}=req.body;
        const post=new Post({
            title,
            body
        });
        const savedPost=await post.save();
        res.json({
            status:'success',
            data:{
                savedPost
            }   
        });
    }
    catch(err){
        return res.json(400).json({
            status:'fail',
            message:err.message
        });
    }
}

exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate('comments').exec();
        res.json({
            status:'success',
            data:{
                posts
            }
        });
    }
    catch(err){
        return res.json(400).json({
            status:'fail',
            message:err.message
        });
    }
}
