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

// https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28
// required for HTTPS
// const key = fs.readFileSync('./key.pem');
// const cert = fs.readFileSync('./cert.pem');
// const https = require('https');
// const server = https.createServer({key: key, cert: cert }, app);

// middle ware to serve static files
app.use('/client', express.static(__dirname + '/client'));

// child process for running python script
const {spawn} = require('child_process');

// helps in managing user sessions
var session = require('express-session');

// use express-session
// in memory session is sufficient for this assignment
app.use(session({
    secret: "csci4131secretkey",
    saveUninitialized: true,
    resave: false
}));


// server listens on port 3000 for incoming connections
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/main.html');
});

app.post('/runCode', (req, res) => {     // maybe no backslash so just runCode
    // save code entered in req.session variable
    req.session.code = req.body.code;

    fs.writeFile('script1.py', req.body.code, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['script1.py']);
    
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });
    
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log('child process close all stdio with code ${code}');
        // save dataToSend in req.session variable
        req.session.codeResult = dataToSend;
        res.redirect('/');
    });
 
});



app.get('/getCode', function(req, res) {
    if (req.session.code){
        res.write(req.session.code);
    }
    res.end();
});

app.get('/getCodeResult', function(req, res) {
    if (req.session.codeResult){
        res.write(req.session.codeResult);
    }
    res.end();
});



app.get('/getCSS', function(req, res) {
    res.sendFile(__dirname + '/client/style.css');
});
app.get('/getJS', function(req, res) {
    res.sendFile(__dirname + '/client/script.js');
});