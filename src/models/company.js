const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    id: {type: String, required: false},
    name: { type: String, required: false },
    apellido: { type: String, required: false },
    email: { type: String, required: false },
  },);

module.exports = mongoose.model("comapany", companySchema);