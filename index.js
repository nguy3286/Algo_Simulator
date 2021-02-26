const port = 3000;

// include the express module
const express = require('express');

// create an express application
const app = express();

// helps in extracting the body portion of an incoming request stream
const bodyparser = require('body-parser');

// apply the body-parser middleware to all incoming requests
app.use(bodyparser());

// fs module - provides an API for interacting with the file system
const fs = require('fs');

// middle ware to serve static files
app.use('/client', express.static(__dirname + '/client'));

// server listens on port 3000 for incoming connections
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/main.html');
});

app.get('/getCSS', function(req, res) {
    res.sendFile(__dirname + '/client/style.css');
});

app.get('/getJS', function(req, res) {
    res.sendFile(__dirname + '/client/script.js');
});