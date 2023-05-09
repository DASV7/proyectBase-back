const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    surname: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    status: { type: Boolean, required: false },
    date_register: { type: Date, required: true, default: Date.now },
    picture: { type: String, required: false },
    lastUpdateUser: { type: Date, default: new Date() },
});

module.exports = mongoose.model("users", usersSchema);
