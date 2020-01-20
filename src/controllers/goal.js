var Goal = require('../models/goal');

exports.findGoalById = (req, res) => {
    res.status(HttpStatus.OK).json({"message": "Welcome to your personal KPI tracker"});
};
