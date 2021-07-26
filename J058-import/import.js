import Animal from './ImportAnimal.js';

const myCat = new Animal({ name: 'Fluffy', type: 'Cat'});
console.log(myCat.toSuperString());
