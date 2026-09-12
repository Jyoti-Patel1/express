const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_url");

const homeDataPath = path.join(rootDir, "data", "homes.json");

//fake database

const registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  save() {
    this.id = Math.random().toString();
    registeredHomes.push(this);
    fs.writeFileSync(homeDataPath, JSON.stringify(registeredHomes), (err) => {
      console.log(err);
    });
  }
  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((h) => h.id === homeId);
      callback(homeFound);
    });
  }
};
