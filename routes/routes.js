"use strict";

module.exports = function (app) {
  const controller = require("../controller/controller");

  app.route("/users").get(controller.list_all);
};
