"use strict";
const User = require("../model/userSchema");

exports.registered_users = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};
