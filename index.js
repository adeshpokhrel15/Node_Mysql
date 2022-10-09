const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
  res.end();
});
//importing the routes
const employeeRoutess = require("./src/routes/employee_route");
// create employee routes
app.use("/api/employee", employeeRoutess);

app.listen(5000, () => {
  console.log("Server port is 5000");
});
