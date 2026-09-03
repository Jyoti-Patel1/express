const Home = require("../models/homes");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb home",
      currentPage: "index",
    });
  });
};
exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "home list",
      currentPage: "homes",
    });
  });
};

exports.getbookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "my bookings",
    currentPage: "bookings",
  });
};

exports.getfavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourite", {
      registeredHomes: registeredHomes,
      pageTitle: "my favourite",
      currentPage: "favourite",
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home detail page", homeId);
  res.render("store/home-detail", {
    pageTitle: "home detail",
    currentPage: "homes",
  });
};
