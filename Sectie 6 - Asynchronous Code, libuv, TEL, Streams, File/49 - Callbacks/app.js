function greet(callback) {
    console.log('Hello');
    var data = {
        name: 'Zowie van Geest'
    };

    callback(data);
}

greet(function (data) {
    console.log('The callback was invoked');
    console.log(data);
});

greet(function (data) {
    console.log('NEw callback is invoked');
    console.log(data.name);
});
