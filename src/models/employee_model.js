//require database

const dbConn = require("../../dbConfig");

//create an object
const Employee = function (employee) {
  this.name = employee.name;
  this.address = employee.address;
  this.email = employee.email;
};

//get all employee
Employee.getAllEMployee = (result) => {
  dbConn.query("SELECT * FROM employee", (res, err) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
    } else {
      console.log("Succesfully data fetched");
      result(null, res);
    }
  });
};

// get employee by ID from database
Employee.getEmployeeByID = (id, result) => {
  dbConn.query("SELECT * FROM employee WHERE id=?", id, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
    } else {
      result(null, err);
    }
  });
};

//create new employee
Employee.createEmployee = (employeeReqData, result) => {
  dbConn.query("INSERT INTO employee SET?", employeeReqData, (err, res) => {
    if (err) {
      console.log("Error by inserting");
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

//update employee
Employee.updateEmployee = (id, employeeReqData, result) => {
  dbConn.query(
    "UPDATE employee SET name=?,address=?,email=?,WHERE ID=? ",
    [employeeReqData.name, employeeReqData.address, employeeReqData.email, id],
    (err, res)
  );
  if (err) {
    result(null, err);
  } else {
    result(null, res);
  }
};

//delete employee
Employee.deleteEmployee = (id, result) => {
  dbConn.query("DELETE FROM employee WHERE id=?", [id], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Employee;
