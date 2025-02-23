//import the mongoose module
const mongoose = require("mongoose");

//route handler
const likesSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: String,
    required: true,
  },
});

//export the schema
module.exports = mongoose.model("Like", likesSchema);
