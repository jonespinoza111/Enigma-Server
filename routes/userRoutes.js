const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Route: /api/users/register
router.post('/register', UserController.registerUser);

// Route: /api/users/login
router.post('/login', UserController.loginUser);

// Route: /api/users/:id
router.get('/:id', UserController.getUserById);

// Route: /api/users/:id
router.put('/:id', UserController.updateUser);

// Route: /api/users/:id
router.delete('/:id', UserController.deleteUser);

module.exports = router;