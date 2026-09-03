//core module
const path = require("path");

//external module
const express = require("express");

//local module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/path_url");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

const errorController = require("./controllers/error");

app.use(errorController.get404);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
