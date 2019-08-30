const router = require("express").Router();
const User = require("../models/user");
const { isLoggedIn, isSameUser } = require("../middleware/auth");
const { validate } = require("../middleware/students");

const excludeKeys = "-__v -password";

// To-Do: ADD this back in later for isLoggedIn functionality. Commented
// it out so testing in Postman

// router.get("/", isLoggedIn, async (req, res, next) => {
//   const status = 200;
//   const response = await User.find(req.query).select(excludeKeys);
//   res.json({ status, response });
// });

// Get all the students
router.get("/", async (req, res, next) => {
  const status = 200;
  const response = await User.find(req.query).select(excludeKeys);
  // console.log("### BACKEND LOG STUDENTS? -->", response);
  res.json({ status, response });
});

// To-Do: ADD this back in later for isLoggedIn functionality. Commented
// it out so testing in Postman

// router.get("/:studentId", isLoggedIn, async (req, res, next) => {
//   const status = 200;
//   const response = await User.findById(req.params.studentId).select(
//     excludeKeys
//   );
//   console.log("### USER ID? -->", response);
//   res.json({ status, response });
// });

// Get a specific student's assignment data
router.get("/:studentId/assignments", async (req, res, next) => {
  const status = 200;
  const response = await User.findById(req.params.studentId).select(
    "assignments"
  );
  console.log("### USER ID? -->", response);
  res.json({ status, response });
});

router.put(
  "/:studentId",
  isLoggedIn,
  isSameUser,
  validate,
  async (req, res, next) => {
    const status = 200;
    const query = { _id: req.params.studentId };
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

  const query = { _id: req.params.studentId };
  const response = await User.findOneAndDelete(query, req.body).select(
    excludeKeys
  );

  res.json({ status, response });
});

module.exports = router;
