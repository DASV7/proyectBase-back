const mongoose = require("mongoose");

const products = new mongoose.Schema(
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

module.exports = mongoose.model("products", products);
