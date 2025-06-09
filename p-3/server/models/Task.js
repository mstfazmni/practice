const mongoose = require('mongoose');
// create schema first
const tasktestSchema = new mongoose.Schema({
    title: String,
    info: String,
}, {timestamps: true});
// send the schema to the model
const Task = mongoose.model('Tasktest', tasktestSchema);
module.exports = Task;