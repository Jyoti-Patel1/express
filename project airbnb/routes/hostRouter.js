//core module
const path = require("path");

//local module
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/path_url");

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-home.html"));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHomes.push({ houseName: req.body.houseName });
  res.sendFile(path.join(rootDir, "views", "home-added-successfully.html"));
});
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
