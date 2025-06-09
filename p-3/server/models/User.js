const mongoose = require('mongoose');

const usertestSchema = new mongoose.Schema({
    username: String,
    email: String
}, {timestamps: true});

const User = mongoose.model('Usertest', usertestSchema);

module.exports = User;