"use strict";
const { client } = require("../config/database");

exports.list_all = function (req, res) {
  client.connect((err) => {
    if (err) console.error(err);
    const collection = client.db("users_api").collection("users");
    collection
      .find({})
      .toArray()
      .then((data) => {
        if (data) {
          res.status(200).json({
            status: "success",
            data: {
              data: data,
            },
          });
        }
      });
  });
};
