exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "add home", currentPage: "add-home" });
};
