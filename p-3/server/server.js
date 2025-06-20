const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Task = require('./models/Task');
const cors = require('cors');
require('dotenv').config();
const mongoDBURL = process.env.MONGO_URL;
const app = express();
app.use(cors());
// for parsing JSON
app.use(express.json());

// connecting to mongoDB
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB!'))
.catch((error) => console.error('MongoDB connection error: ', error));

// start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// *********************************************************************************************** User method
// Login check for users
app.post('/login', async (req, res) => {
    const {username, email} = req.body;

    try {
        const user = await User.findOne({username, email});
        if(!user){
            return res.status(401).json({message : 'Invalid username or email'});
        }
        // if found return success
        res.status(200).json({message : 'Login successful', user});
    } catch (error) {
        res.status(500).json({message : 'Server error', error : error.message});
    }
 });

// *********************************************************************************************** Task methods
// POST create Tasks http method
app.post('/tasks', async(req, res) => {
    try {
        const task = await Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {

    }
});

// GET all Tasks http method
app.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find(); //This returns an array of all task documents
        res.status(200).json(tasks); // Sends an array of task objects to frontend
    } catch (error) {
        res.status(400).json({message : error.message});
    }
});
