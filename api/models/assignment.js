const mongoose = require("mongoose");

const assignmentsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    projectLink: {
      type: String,
      required: true
    },
    graded: {
      type: Boolean,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = assignmentsSchema;
