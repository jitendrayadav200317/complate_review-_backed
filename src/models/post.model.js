import mongoose from "mongoose";

const postSchama = new mongoose.Schema({
  Image: String,
  caption: String,
});

const postModel = mongoose.model("post", postSchama);
export default postModel;
