//importing the model

const EmployeeModel = require("../models/employee_model");

// get all employee list

exports.getEmployee = (req, res) => {
  console.log("Get employee list");
  EmployeeModel.getAllEMployee((err, employees) => {
    console.log("employee model");
    if (err) {
      res.send(err);
    } else {
      res.send(employees);
    }
  });
};

// get employee by id
exports.getEmployeeByID = (req, res) => {
  EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
    if (err) {
      res.send(err);
    } else {
      res.send(employee);
    }
  });
};

//create new employee
exports.createNewEmployee = (res, req) => {
  // console.log("create new");
  const employeeReqBody = new EmployeeModel(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({
      success: false,
      message: "Plaese fill the fields",
    });
  } else {
    console.log("Valid data");
    EmployeeModel.createEmployee(employeeReqBody, (err, employee) => {
      if (err) {
        res.send(err);
        res.json({
          status: true,
          message: "created successfully",
          data: employee,
        });
      }
    });
  }
};

// update employee
exports.updateEmployee = (req, res) => {
  const employeeReqBody = new EmployeeModel(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({
      success: false,
      message: "Plaese fill the fields",
    });
  } else {
    console.log("Valid data");
    EmployeeModel.updateEmployee(
      req.params.id,
      employeeReqBody,
      (err, employee) => {
        if (err) {
          res.send(err);
          res.json({
            status: true,
            message: "updated successfully",
            data: employee,
          });
        }
      }
    );
  }
};

//delete employee
exports.deleteEmployee = (req, res) => {
  EmployeeModel.deleteEmployee =
    (req.params.id,
    (err, employee) => {
      if (err) {
        res.send(err);
        res.json({
          status: true,
          message: "deleted successfully",
          data: employee,
        });
      }
    });
};
