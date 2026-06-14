//core module
const path = require("path");

//external module
const express = require("express");

//local module
const contactRouter = express.Router();
const rootDir = require("../utils/pathUtils");

contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addContact.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.body);
  res.sendFile(path.join(rootDir, "views", "contactAddedSuccessfully.html"));
});

module.exports = contactRouter;
