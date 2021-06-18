const myMap = new Map();
const myCat = { name: 'Fluffy', size: 'small', breed: { type: 'cat' }};
let myBreed = myCat.breed;

myMap.set(myBreed, { location: 'home' });
console.log(myMap.get(myBreed));

myBreed = null;

console.log(myCat);
console.log(myMap.size);
setTimeout( () => {
	console.log(myMap.has(myBreed));
	console.log(myMap.size);
}, 2000);



