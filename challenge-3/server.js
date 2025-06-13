const express = require('express');
const cors = require('cors');
// calling express
const app = express();
// ask to read JSON
app.use(cors());
app.use(express.json());

// random data
let tasks = [
    {id: 1, title: 'Task one'},
    {id:2, title: 'Task two'}
]

// start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// GET http method get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST http method create a new task
app.post('/tasks', (req, res) => {
    const {title} = req.body;
    const newTask = {
        id: tasks.length+1,
        title: title
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});