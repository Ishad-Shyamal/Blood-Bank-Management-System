const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//MongoDB connection
mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log('Database connected.......'))
.catch((error) => console.log(error));

//Basic route
app.get('/', (req, res) => {
    res.send('Hello MERN!');
});

//Start server
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});