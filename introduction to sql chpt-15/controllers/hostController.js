const Home = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", {
    pageTitle: "add home to airbnb",
    currentPage: "add-home",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId)
    .then(([homes]) => {
      const home = homes[0];
      if (!home) {
        return res.redirect("/host/host-home-list");
      }
      res.render("host/edit-home", {
        home: home,
        pageTitle: "Edit your home",
        currentPage: "host-homes",
      });
    })
    .catch(next);
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "host homes list",
      currentPage: "host homes",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  console.log(req.body);

  const { houseName, price, location, rating, photoUrl, description } =
    req.body;
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
  ); // home object
  home.save(); //call home

  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
    id,
  );

  home
    .save()
    .then(() => res.redirect("/host/host-home-list"))
    .catch(next);
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete", homeId);
  Home.deleteById(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch(next);
};
