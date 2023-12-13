const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.routes');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use('/', todoRouter);

app.listen(port, () => {
    console.log('Server is running on Port 3000.');
});