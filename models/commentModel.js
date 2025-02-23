//import the mongoose module
const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});

//export the schema
module.exports = mongoose.model("Comment", commentSchema);
