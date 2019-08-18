const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    admin: { type: Boolean, default: false }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("User", schema);
