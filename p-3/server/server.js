const express = require('express');
const app = express();

// for parsing JSON
app.use(express.json());

// start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

let users = [];

// Create POST http method
app.post('/users', (req, res) => {
    const user = req.body;
    user.id = Date.now();
    users.push(user);
    res.status(201).json(user);
});

// Read GET http method
app.get('/users', (req, res) => {
    res.json(users);
});