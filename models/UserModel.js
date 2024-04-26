const mongoose = require("mongoose");

//Creating a schema for user Details
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
});
const User = mongoose.model("UserStory", UserSchema);
module.exports = User;