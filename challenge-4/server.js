const express = require('express');
// giving access
const cors = require('cors');
const app = express();

// read JSON data
app.use(express.json());
app.use(cors());


// mock data to store in server
let posts = [
    {id:1 , title:'Boxing'},
    {id:2 , title:'Soccer'},
    {id:3 , title:'Football'}
];

// start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// GET http method to read data
app.get('/posts', (req, res) => {
    res.json(posts);
});

// POST http method to create data
app.post('/posts', (req, res) => {
    const {title} = req.body;

    const newPost = {
        id: posts.length + 1,
        title: title
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT http method to update data
app.put('/posts/:id', (req, res) => {
    const {id} = req.params;
    const {title} = req.body;

    const postIndex = posts.findIndex(post => post.id == id);
    if(postIndex === -1) {
        return res.status(404).json({message: 'Post Not Found'});
    };

    posts[postIndex].title = title;
    res.json(posts[postIndex]);
});

// DELETE http method to remove data
app.delete('/posts/:id', (req, res) => {
    const {id} = req.params;
    const postIndex = posts.findIndex(post => post.id == id);

    if(postIndex === -1) {
        return res.status(404).json({message: 'Post Not found'});
    };

    //  returns an array of deleted items, so deletedPost[0] is the actual deleted object
    const deletePost = posts.splice(postIndex, 1);
    res.json({message: 'Post Deleted', post: deletePost[0]});
    
});