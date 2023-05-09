const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  nameCompany: { type: String, required: false },
  idUser: { type: String, required: true, ref: "users" },
  email: { type: String, required: false },
  password: { type: String, required: false },
  status: { type: Boolean, required: false },
  date_register: { type: Date, required: true, default: Date.now },
  picture: { type: String, required: false },
  lastUpdateUser: { type: Date, default: new Date() },
});

module.exports = mongoose.model("comapany", companySchema);