//core module
const path = require("path");

//local module
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/path_url");

const homeController = require("../controllers/hostController");

hostRouter.get("/add-home", homeController.getAddHome);
hostRouter.post("/add-home", homeController.postAddHome);

module.exports = hostRouter;
