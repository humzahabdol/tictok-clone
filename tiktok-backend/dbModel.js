import mongoose from "mongoose";

const tictokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

// Collection in the database
export default mongoose.model("tiktokVideos", tictokSchema);
