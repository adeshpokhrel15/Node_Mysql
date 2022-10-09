const express = require("express"); //require express

const router = express.Router();
const employeeController = require("../controllers/employee_controller");

// get alll employess

router.get("/", employeeController.getEmployee);

// get employee by id

router.get("/:id", employeeController.getEmployeeByID);

// create new employee
router.post("/", employeeController.createNewEmployee);

//update employee

router.put("/:id", employeeController.updateEmployee);

//deleted employee
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
