const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person:' + req.params.id + '</h1></body></html>');
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'Zowie', lastname: 'van Geest'});
});

app.listen(port);
