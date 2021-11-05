"use strict";
const User = require("../model/userSchema");

exports.registered_users = async (req, res) => {
  const users = await User.find({});
  console.log(users);
  res.send(users);
};
