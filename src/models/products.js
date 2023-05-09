const mongoose = require("mongoose");

const products = new mongoose.Schema(
  {
    name: { type: String, required: false },
    cod_reference: { type: String, required: false },
    talla: { type: String, required: false },
    status: { type: Boolean, required: false, default: true },
    price: { type: Number, required: true, default: 0 },
    count: { type: Number, required: true, default: 0 },
    category: { type: String, required: false },
    pictures: { type: Array, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", products);
