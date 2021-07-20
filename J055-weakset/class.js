const allAnimals = new WeakSet();

class Animal {
	constructor() {
		allAnimals.add(this);
		this.sound = "Moo";
	}

	speak() {
		if (!allAnimals.has(this)) {
			throw new TypeError('You can only get an official animal to speak!');
		} else {
			console.log(`The animal says "${this.sound}".`)
		}
	}
}

const myAnimal = new Animal();
myAnimal.speak();

const rock = { name: 'rock' };
Animal.prototype.speak.call(rock);




/*
class Animal {
	constructor() {
		this.sound = "Moo";
	}
	speak() {
		console.log(`The animal says "${this.sound}".`)
	}
}

const myAnimal = new Animal();
myAnimal.speak();

const rock = { name: 'rock' };
Animal.prototype.speak.call(rock);
*/













/*
const allAnimals = new WeakSet();

class Animal {
	constructor() {
		allAnimals.add(this);
		this.sound = "Moo";
	}

	speak() {
		if (!allAnimals.has(this)) {
			throw new TypeError('You can only get an official animal to speak!');
		} else {
			console.log(`The animal says "${this.sound}".`)
		}
	}
}

const myAnimal = new Animal();
myAnimal.speak();

const rock = { name: 'rock' };
Animal.prototype.speak.call(rock);


*/
