const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "13052002$",
  database: "airbnb",
});
module.exports = pool.promise();
