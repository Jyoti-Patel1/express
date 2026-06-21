//core module
const path = require("path");

//External module
const express = require("express");
const userRouter = express.Router();
const { registeredHome } = require("./hostRouter");
//local module
const rootDir = require("../utils/path_url");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHome);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
