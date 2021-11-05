"use strict";
const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");

exports.user_register = async (req, res) => {
  const { username, password } = req.body;

  if (await User.findOne({ username: username })) {
    res.status(400).json({
      status: "Error",
      error: {
        type: "Login Error",
        message: "Username already exists",
      },
    });
  }
  if (!(password && username)) {
    res.status(400).json({
      status: "Error",
      error: {
        type: "Login error",
        message: "either password or username is empty",
      },
    });
  } else if (password.length < 8 || password.length > 64) {
    res.status(400).json({
      status: "Error",
      error: {
        message:
          "Password can't be shorter than 8 charracters or longer than 64.",
      },
    });
  } else {
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      username: username,
      password: hash,
    });

    const token = jwt.sign(
      { user_id: user._id, username },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    res.status(200).json({
      status: "successful registration",
      user: user,
    });
  }
};
