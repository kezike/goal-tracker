const express = require('express');
const router = express.Router();

// Controller modules
const goalController = require('../controllers/goal');

// Goal routes
router.get('/goal', goalController.findGoalById);

// Export routes to application
module.exports = router;
