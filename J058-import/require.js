const Animal = require('./RequireAnimal.js');

const myCat = new Animal({ name: 'Fluffy', type: 'Cat'});
console.log(myCat.toSuperString());
