const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,

  loginCount: { type: Number, default: 0 },

  failedAttempts: { type: Number, default: 0 },
  isLocked: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", userSchema);
