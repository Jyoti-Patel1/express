const Home = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "add home", currentPage: "add-home" });
};

exports.postAddHome = (req, res, next) => {
  console.log(req.body);

  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl); // home object
  home.save(); //call home

  res.render("home-added-successfully", {
    pageTitle: "home added successfully",
    currentPage: "add-home",
  });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb home",
      currentPage: "home",
    });
  });
};
