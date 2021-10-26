const myAnimals = function* () {
	console.log('------executed function');
	yield 'Cat';
	yield 'Dog';
	return;
	yield 'Horse';
}

console.log('******* BEGIN');
const allAnimals = myAnimals();
console.log('Initialized Generator');
let animal = allAnimals.next();
while (!animal.done) {
	console.log(`\t${JSON.stringify(animal)}`);
	animal = allAnimals.next();
	console.log(`\t\tAre we done? ${JSON.stringify(animal)}`);
}
console.log('******* END');











/*
console.log('******* BEGIN');
const allAnimals = myAnimals();
console.log('Initialized Generator');
let animal = allAnimals.next();
while (!animal.done) {
	console.log(`\t${JSON.stringify(animal)}`);
	animal = allAnimals.next();
	console.log(`\t\tAre we done? ${JSON.stringify(animal)}`);
}
console.log('******* END');
*/



/*
	console.log('==================== read ====================')

 */