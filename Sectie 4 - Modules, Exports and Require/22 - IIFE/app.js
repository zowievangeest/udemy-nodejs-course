var firstname = 'jane';

(function (lastname) {
    var firstname = 'john';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);
