const mongoose = require("mongoose");
const assignmentsSchema = require("./assignment");

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    admin: { type: Boolean, default: false },
    assignments: [assignmentsSchema]
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("User", schema);
