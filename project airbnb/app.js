//core module
const path = require("path");

//external module
const express = require("express");

//local module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/path_url");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.status(404).render("404-page-not-found", { pageTitle: "page not found" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
