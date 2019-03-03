var obj = {
    name: 'Zowie van Geest',
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({ name: 'Henk de Vriep'});
obj.greet.apply({ name: 'Henk de Vriep'});
