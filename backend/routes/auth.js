const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

// ================= REGISTER =================
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.json({ msg: "User already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    email,
    password: hashed
  });

  res.json({ msg: "Registered successfully" });
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.json({ msg: "User not found" });

  if (user.isLocked) return res.json({ msg: "Account locked" });

  const match = await bcrypt.compare(password, user.password);

  // ❌ wrong password
  if (!match) {
    user.failedAttempts += 1;

    if (user.failedAttempts >= 3) {
      user.isLocked = true;
    }

    await user.save();
    return res.json({ msg: "Wrong password" });
  }

  // ✅ correct password
  user.failedAttempts = 0;
  user.loginCount += 1;

  await user.save();

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ accessToken: token });
});

// ================= ANALYTICS =================
router.get("/analytics", async (req, res) => {
  const users = await User.find();

  const data = users.map(u => ({
    email: u.email,
    loginCount: u.loginCount
  }));

  res.json(data);
});

module.exports = router;
router.get("/users", (req, res) => {
  // here res is defined
});
