const express = require('express');
const app = express();
const mysql = require('mysql');

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'addressbook'
    });

    next();
});

htmlController(app);
apiController(app);

app.listen(port);
