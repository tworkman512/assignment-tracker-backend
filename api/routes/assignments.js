const router = require("express").Router();
const Assignment = require("../models/assignment");
const { isLoggedIn, isSameUser } = require("../middleware/auth");
const { validate } = require("../middleware/assignments");

const excludeKeys = "-__v -password";

// To-Do: ADD this back in later for isLoggedIn functionality. Commented
// it out so testing in Postman

// router.get("/", isLoggedIn, async (req, res, next) => {
//   const status = 200;
//   const response = await User.find(req.query).select(excludeKeys);
//   res.json({ status, response });
// });

router.get("/", async (req, res, next) => {
  const status = 200;
  const response = await Assignment.find(req.query).select(excludeKeys);
  res.json({ status, response });
});

router.get("/:assignmentId", isLoggedIn, async (req, res, next) => {
  const status = 200;
  const response = await Assignment.findById(req.params.userId).select(
    excludeKeys
  );
  res.json({ status, response });
});

router.put(
  "/:assignmentId",
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

router.delete(
  "/:assignmentId",
  isLoggedIn,
  isSameUser,
  async (req, res, next) => {
    const status = 200;

    const query = { _id: req.params.userId };
    const response = await User.findOneAndDelete(query, req.body).select(
      excludeKeys
    );

    res.json({ status, response });
  }
);

module.exports = router;
