exports.get404 = (req, res, next) => {
  res.status(404).render("404-page-not-found", {
    pageTitle: "page not found",
    currentPage: "404",
  });
};
