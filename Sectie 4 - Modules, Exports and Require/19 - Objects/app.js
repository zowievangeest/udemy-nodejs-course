var person = {
    firstname: 'Zowie',
    lastname: 'Geest',
    greet: function() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
};

person.greet();
console.log(person['firstname']);
