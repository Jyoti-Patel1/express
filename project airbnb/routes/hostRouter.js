//core module
const path = require("path");

//local module
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/path_url");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", { pageTitle: "add home" });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHomes.push({ houseName: req.body.houseName });
  res.render("home-added-successfully", {
    pageTitle: "home added successfully",
  });
});
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
