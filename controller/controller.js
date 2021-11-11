"use strict";
const { client } = require("../config/database");

exports.list_all = (req, res) => {
  client.connect((err) => {
    if (err) console.error(err);
    const collection = client.db("users_api").collection("users");
    collection
      .find({})
      .toArray()
      .then((data) => {
        if (data) {
          res.status(200).json({
            status: "200",
            message: "Success",
            data: data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({
          status: "Error",
          error: {
            error: err,
          },
        });
      });
  });
};
