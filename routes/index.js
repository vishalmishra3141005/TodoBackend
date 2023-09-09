

const express = require("express");
const controllers = require("../controllers");
const route = express.Router();


route.post("/login", controllers.loginHandler);


route.post("/signup", controllers.signupHandler);


module.exports = route;