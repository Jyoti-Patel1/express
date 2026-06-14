//core module
const path = require("path");

//external module
const express = require("express");

//local module
const homeRouter = express.Router();
const rootDir = require("../utils/pathUtils");

homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});
module.exports = homeRouter;
