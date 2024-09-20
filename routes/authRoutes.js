const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();

// Login route
router.post('/login', login);

// Register route
router.post('/register', register);

module.exports = router;
