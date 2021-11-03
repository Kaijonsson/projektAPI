"use strict";
require("dotenv").config();
require("./config/database");
const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/routes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
