const express = require('express');
const router = express.Router();

const employeeController = require('../../../controllers/api/v1/employee_controller');

//handle employee routes
// creating employee
router.post('/create', employeeController.create);

//sign in employee
router.post('/create-session', employeeController.createSession);

module.exports = router;
