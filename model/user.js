const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema ({
    name: String,
    email: String,
    phoneNumber: String,
    password: String,
    confirmPassword: String,
    pinCode: Number
});

module.exports = mongoose.model('User', userSchema);