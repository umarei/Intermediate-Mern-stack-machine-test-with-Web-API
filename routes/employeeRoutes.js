const express = require('express');
const { createEmployee, getEmployees } = require('../controllers/employeeController');
const router = express.Router();

router.post('/create', createEmployee);
router.get('/', getEmployees);

module.exports = router;
