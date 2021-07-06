const myMap = new WeakMap();
const myCat = { name: 'Fluffy', size: 'small', breed: 'shorthair' };
const myDog = { name: 'Rover', size: 'large', breed: 'poodle' };

myMap.set(myCat, { location: 'home' });
console.log(`Do I have a cat? ${myMap.has(myCat) ? 'Yes' : 'No'}`);
console.log(`My cat location: ${myMap.get(myCat).location}`);

console.log(`Do I have a dog? ${myMap.has(myDog) ? 'Yes' : 'No'}`);
myMap.set(myDog, true);
console.log(`How about now? ${myMap.has(myDog) ? 'Yes, you do now.' : 'Nope! Still not there.'}`);

myMap.delete(myDog);
console.log(`Check again. How about now? ${myMap.has(myDog) ? 'Still there, slick.' : 'Wow! The dog is gone!'}`);

