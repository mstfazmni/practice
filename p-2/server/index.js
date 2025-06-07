const express = require('express');
const app = express();
// read JSON data from requests
app.use(express.json());

const PORT = 3000;
// start the srever
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// create(POST)
let items = [];

app.post('/items', (req, res) => {
    const item = req.body;
    item.id = Date.now();
    items.push(item);
    res.status(201).json(item);
});

// read(GET) All
app.get('/items', (req, res) => {
    res.json(items);
});
// GET One
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (!item) return res.status(404).send("Item Not Found");
    res.json(item);
});

// update (PUT)
app.put('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id == req.params.id);
    if(index === -1) return res.status(404).send("Item Not Found");
    items[index] = {...items[index], ...req.body};
    res.json(items[index]);
});

// delete(DELETE)
app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id == req.params.id);
    if (index === -1) return res.status(404).send("Item Not Found");
    // splice removes the item from the array and returns it
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem[0]);
});