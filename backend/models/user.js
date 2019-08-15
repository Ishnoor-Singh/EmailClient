const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: String,
  emailId: String,
  accessToken: String,
  refreshToken: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
