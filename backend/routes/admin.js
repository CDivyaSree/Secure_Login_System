const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET ALL USERS
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// LOCK USER
router.post("/lock/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: "locked" });
  res.send("User Locked");
});

// UNLOCK USER
router.post("/unlock/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: "active" });
  res.send("User Unlocked");
});

module.exports = router;
