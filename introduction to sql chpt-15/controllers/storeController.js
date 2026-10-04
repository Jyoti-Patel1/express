const Home = require("../models/homes");
const Favourite = require("../models/favourite");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb home",
      currentPage: "index",
    });
  });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => {
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

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home detail page", homeId);
  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if (!home) {
      return res.status(404).render("store/404", {
        pageTitle: "Home Not Found",
        currentPage: "homes",
      });
    } else {
      res.render("store/home-detail", {
        pageTitle: "home detail",
        currentPage: "homes",
        home: home,
      });
    }
  });
};

exports.getfavouriteList = (req, res, next) => {
  Favourite.getFavourite((favourites) => {
    Home.fetchAll().then(([registeredHomes]) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(String(home.id)),
      );
      res.render("store/favourite-list", {
        registeredHomes: favouriteHomes,
        favouriteHomes: favouriteHomes,
        pageTitle: "my favourite",
        currentPage: "favourite",
      });
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  console.log("came to add a favourite", req.body);
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.error("Error while marking favourite:", error);
    }
    res.redirect("/favourites");
  });
};
