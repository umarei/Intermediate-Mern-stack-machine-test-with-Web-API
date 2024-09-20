const express = require('express');
const { createEmployee, getEmployees } = require('../controllers/employeeController');
const router = express.Router();

// Route to create a new employee
router.post('/create', createEmployee);

// Route to get all employees
router.get('/', getEmployees);

// Export the router
module.exports = router;
