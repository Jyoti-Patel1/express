//External module
const express = require("express");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController");
storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHome);
storeRouter.get("/bookings", storeController.getbookings);
storeRouter.get("/favourites", storeController.getfavouriteList);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);

storeRouter.get("/favourites", storeController.postAddToFavourite);
module.exports = storeRouter;
