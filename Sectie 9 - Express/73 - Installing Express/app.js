const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'Zowie', lastname: 'van Geest'});
});

app.listen(port);
