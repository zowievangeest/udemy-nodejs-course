const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({extended: false});

const jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, function (req, res) {
    res.send('Thanks!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api/person/:id', function (req, res) {
    // get the data from database
    res.json({ firstname: 'Zowie', lastname: 'van Geest'});
});

app.post('/api/person', jsonParser, function (req, res) {
    // save to the database
});

app.delete('/api/person/:id', function (req, res) {
    // delete from the database
});

app.listen(port);
