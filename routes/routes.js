"use strict";
const auth = require("../middleware/auth");

module.exports = (app) => {
  const controller = require("../controller/controller");
  const register = require("../controller/register");
  const login = require("../controller/login");
  const registeredUsers = require("../controller/registeredUsers");
  const authorized = require("../controller/mainContent");

  app.route("/login").post(login.user_login);

  app.route("/register").post(register.user_register);

  app
    .route("authorized/registered/all")
    .get(auth, registeredUsers.registered_users);

  app.route("/authorized").get(auth, authorized.mainContent);

  app.route("/authorized/api/all_users").post(auth, controller.list_all);
};
