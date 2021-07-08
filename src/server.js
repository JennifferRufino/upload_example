const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

/**
 * Database setup
 */

mongoose.connect('mongodb://localhost:27017/upload', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoD connect"));

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3000);