const util = require('util');

function Person() {
    this.firstname = 'Zowie';
    this.lastname = 'van Geest';
}

Person.prototype.greet = function () {
    `Hello ${this.firstname} ${this.lastname}`
};

function Policman() {
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(Policman, Person);
const officer = new Policman();
officer.greet();
