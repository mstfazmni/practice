const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
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


// Create POST http method
app.post('/users', async (req, res) => {
    try {
        const user = await User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
});

// Read GET http method
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Login check
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


 
