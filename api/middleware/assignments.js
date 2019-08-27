const Assignment = require("../models/assignment");

const validate = async (req, _res, next) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.validateSync();
    next();
  } catch (e) {
    e.status = 422;
    next(e);
  }
};

module.exports = { validate };
