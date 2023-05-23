const mongoose = require("mongoose");

const users = new mongoose.Schema(
  {
    id: {type: String, required: false},
    name: { type: String, required: false },
    apellido: { type: String, required: false },
    email: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", users);