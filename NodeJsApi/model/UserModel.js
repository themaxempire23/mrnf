const mongoose = require("mongoose");

// user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default: "avatar.png",
    },
    bio: {
      type: String,
      default: "bio", // fixed typo
    },
    role: {
      type: String,
      required: true,
      default: "subscriber",
    },
  },
  {
    timestamps: true, 
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
