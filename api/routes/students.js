const router = require("express").Router();
const User = require("../models/user");
const { isLoggedIn, isSameUser } = require("../middleware/auth");
const { validate } = require("../middleware/students");

const excludeKeys = "-__v -password";

router.get("/", isLoggedIn, async (req, res, next) => {
  const status = 200;
  const response = await User.find(req.query).select(excludeKeys);
  res.json({ status, response });
});

router.get("/:studentId", isLoggedIn, async (req, res, next) => {
  const status = 200;
  const response = await User.findById(req.params.userId).select(excludeKeys);
  res.json({ status, response });
});

router.put(
  "/:studentId",
  isLoggedIn,
  isSameUser,
  validate,
  async (req, res, next) => {
    const status = 200;
    const query = { _id: req.params.userId };
    const options = { new: true };
    const response = await User.findOneAndUpdate(
      query,
      req.body,
      options
    ).select(excludeKeys);

    res.json({ status, response });
  }
);

router.delete("/:studentId", isLoggedIn, isSameUser, async (req, res, next) => {
  const status = 200;

  const query = { _id: req.params.userId };
  const response = await User.findOneAndDelete(query, req.body).select(
    excludeKeys
  );

  res.json({ status, response });
});

module.exports = router;
