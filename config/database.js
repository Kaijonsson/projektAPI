"use strict";
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGO_URI;
const MONGOOSE_URI = process.env.MONGOOSE_URI;
const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Successfull connection");
  client.close();
});

mongoose.connect(MONGOOSE_URI);
mongoose.Promise = global.Promise;

module.exports.client = client;
