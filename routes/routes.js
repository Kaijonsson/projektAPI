"use strict";
const auth = require("../middleware/auth");

module.exports = (app) => {
  const controller = require("../controller/controller");
  const register = require("../controller/register");
  const login = require("../controller/login");
  const registeredUsers = require("../controller/registeredUsers");
  const authorized = require("../controller/mainContent");

  app.route("/users").get(controller.list_all);

  app.route("/login").post(login.user_login);

  app.route("/register").post(register.user_register);

  app.route("/registered/all").get(registeredUsers.registered_users);

  app.route("/authorized").post(auth, authorized.mainContent);
};
