const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "add home", currentPage: "add-home" });
};

exports.postAddHome = (req, res, next) => {
  console.log(req.body);
  registeredHomes.push(req.body);
  res.render("home-added-successfully", {
    pageTitle: "home added successfully",
    currentPage: "add-home",
  });
};

exports.getHome = (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "airbnb home",
    currentPage: "home",
  });
};

exports.registeredHomes = registeredHomes;
