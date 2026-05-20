//local module
const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
  res.send(`register your home here 
    <form action="/host/add-home" method="post">
    <input type="text" name="houseName" placeholder="enter house name"/>
    <input type="submit"/>
    </form>
    `);
});

hostRouter.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
        <h1> home registered succesfully </h1>
        <a href ="/">go to home</a>
    `);
});
module.exports = hostRouter;
