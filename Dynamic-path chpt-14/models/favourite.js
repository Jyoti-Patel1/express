const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_url");

const favouriteDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class favourite {
  static addToFavourite(homeId, callback) {
    favourite.getFavourite((favourites) => {
      if (favourites.includes(homeId)) {
        console.log("home already marked as favourite");
      } else {
        favourites.push(homeId);
        fs.writeFileSync(
          favouriteDataPath,
          JSON.stringify(favourites),
          callback,
        );
      }
    });
  }
  static getFavourite(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
