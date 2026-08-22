//core module
// const path = require("path");

//local module
const express = require("express");
const hostRouter = express.Router();
//const rootDir = require("../utils/path_url");

const homeController = require("../controllers/home");

hostRouter.get("/add-home", homeController.getAddHome);

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHomes.push(req.body);
  res.render("home-added-successfully", {
    pageTitle: "home added successfully",
    currentPage: "add-home",
  });
});
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
