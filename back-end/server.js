const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');

connectDB();

app.listen(port,() => {
    console.log("Server is running on Port:8000");
});