const mysql = require("mysql");

// create mysql connections
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_mysql",
});

//checking connections
dbConn.connect(function (error) {
  if (error) throw error;
  console.log("Database has been succesfully connected");
});

module.exports = dbConn;
