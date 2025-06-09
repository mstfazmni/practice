const mongoose = require('mongoose');

const tasktestSchema = new mongoose.Schema({
    title: String,
    info: String,
}, {timestamps: true});

const Task = mongoose.model('Tasktest', tasktestSchema);
module.exports = Task;