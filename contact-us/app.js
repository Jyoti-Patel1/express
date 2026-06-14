// Reuse the app from the last assignment
// 1. Parse the body of the contact-us request and log it to console.
// 2. Move the code to separate local modules and use the Express router to import and use them in app.js
// 3. Move all the html code to html files and serve them using the file helper.
// 4. Also add a 404 page for this app.

//core module
const path = require("path");
// External Module
const express = require("express");

const app = express();

//local module
const homeRouter = require("./routes/homeRoute");
const contactRouter = require("./routes/contactRoute");
const rootDir = require("./utils/pathUtils");

app.use(express.urlencoded({ extended: true }));

app.use(homeRouter);
app.use(contactRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
