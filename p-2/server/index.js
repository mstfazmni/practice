const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Item = require('./models/Item');
const app = express();
// read JSON data from requests
app.use(cors());
app.use(express.json());

// connecting our server to mongoDB database
mongoose.connect('mongodb+srv://zmnimstfa:onHuYgTcFWnDj0AF@task-manager-dashboard.ssv93.mongodb.net/?retryWrites=true&w=majority&appName=task-manager-dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('Connected to MongoDB!'))
.catch((err)=> console.error('MongoDB connection error:', err));


const PORT = 3000;
// start the srever
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// create(POST)


app.post('/items', async (req, res) => {
    try{
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// read(GET) All
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});
// GET One
app.get('/items/:id', async (req, res) => {
    try {
         const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).send("Item Not Found");
        res.json(item);
    }catch (error) {
        res.status(400).send('Indavlid ID');
    }
   
});

// update (PUT)
app.put('/items/:id', async (req, res) => {
    try{
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!item) return res.status(404).send('Item not found');
        res.json(item);
    } catch (error) {
        res.status(400).send('Invalid ID');
    }
});

// delete(DELETE)
app.delete('/items/:id', async (req, res) => {
     try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        res.send('Item deleted');
    } catch {
    res.status(400).send('Invalid ID');
  }
});