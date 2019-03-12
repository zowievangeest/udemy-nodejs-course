const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

module.exports = function (app) {

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

};
