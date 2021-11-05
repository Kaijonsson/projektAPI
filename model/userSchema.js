"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: { type: String },
  Created_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"],
      },
    ],
    default: ["pending"],
  },
});

module.exports = mongoose.model("User", userSchema);
