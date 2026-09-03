const Home = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", {
    pageTitle: "add home",
    currentPage: "add-home",
  });
};

exports.postAddHome = (req, res, next) => {
  console.log(req.body);

  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl); // home object
  home.save(); //call home

  res.render("host/home-added-successfully", {
    pageTitle: "home added successfully",
    currentPage: "add-home",
  });
};
