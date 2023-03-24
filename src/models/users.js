const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean, required: false },
    date_register: { type: Date, required: true, default: Date.now },
    picture: { type: String },
    lastUpdateUser: { type: Date, default: new Date() },
});

module.exports = mongoose.model("users", usersSchema);
