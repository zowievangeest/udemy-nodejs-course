const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://testUser:<password>@nodecourse-9hxka.mongodb.net/test?retryWrites=true')

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

const Person = mongoose.model('Person', personSchema);

const zowie = Person({
    firstname: 'Zowie',
    lastname: 'van Geest',
    address: 'Henkstraat 2'
});

zowie.save(function (err) {
    if (err) throw err;
    console.log('Person Saved');
});

const wendy = Person({
    firstname: 'Wendy',
    lastname: 'Klaas',
    address: 'Klaasstraat 4'
});

wendy.save(function (err) {
    if (err) throw err;
    console.log('Person Saved');
});

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);

    Person.find({}, function (err, users) {
        if(err) throw err;
        console.log(users);
    });

    next();
});

htmlController(app);
apiController(app);

app.listen(port);
