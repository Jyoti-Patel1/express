const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path_url");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class favourite {
  static addToFavourite(homeId, callback = () => {}) {
    favourite.getFavourite((favourites) => {
      if (!homeId) {
        return callback(new Error("Home id is required"));
      }

      if (favourites.includes(homeId)) {
        return callback(new Error("Home is already marked as favourite"));
      }

      const updatedFavourites = [...favourites, homeId];

      fs.writeFile(
        favouriteDataPath,
        JSON.stringify(updatedFavourites),
        (err) => {
          if (err) {
            return callback(err);
          }

          callback(null);
        },
      );
    });
  }

  static getFavourite(callback = () => {}) {
    fs.readFile(favouriteDataPath, (err, data) => {
      if (err) {
        return callback([]);
      }

      if (!data || data.length === 0) {
        return callback([]);
      }

      try {
        const parsedData = JSON.parse(data);
        callback(Array.isArray(parsedData) ? parsedData : []);
      } catch (error) {
        callback([]);
      }
    });
  }
};
