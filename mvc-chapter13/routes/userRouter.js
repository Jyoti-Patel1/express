//core module
const path = require("path");

//External module
const express = require("express");
const userRouter = express.Router();
const { registeredHomes } = require("./hostRouter");

const homeController = require("../controllers/home");
userRouter.get("/", homeController.getHome);

module.exports = userRouter;
