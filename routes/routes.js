"use strict";

module.exports = function (app) {
  const controller = require("../controller/controller");

  app.route("/tasks").get(controller.list_all);
};
