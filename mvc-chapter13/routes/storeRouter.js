//External module
const express = require("express");
const storeRouter = express.Router();

const homeController = require("../controllers/storeController");
storeRouter.get("/", homeController.getIndex);
storeRouter.get("/homes", homeController.getHome);
storeRouter.get("/bookings", homeController.getbookings);
storeRouter.get("/favourite", homeController.getfavouriteList);

module.exports = storeRouter;
