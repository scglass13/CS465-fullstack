require("../models/user");

const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const register = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save((err) => {
    if (err) {
      res.status(400).json(err);
    } else {
      const token = user.generateJwt();
      res.status(200).json({ token });
    }
  });
};

const login = (req, res) => {
  console.log("Login request received");
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log("Authentication error:", err);
      return res.status(404).json(err);
    }
    if (user) {
      console.log("User authenticated:", user);
      const token = user.generateJwt();
      res.status(200).json({ token });
    } else {
      console.log("Authentication failed:", info);
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports = {
  register,
  login,
};
