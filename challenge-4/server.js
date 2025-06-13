const express = require('express');
const cors = require('cors');
const app = express();

// read JSON data
app.use(express.json());
app.use(cors());

// start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});