const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var obj = {
        firstname: 'Zowie',
        lastname: 'van Geest'
    };
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');
