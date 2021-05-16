class Animal {
	name;
	age;

	constructor (args) {
		const { name, age } = args;
		this.name = name ?? "";
		this.age = age ?? -1;
	}

	stats () {
		return `${this.name}: ${this.age === -1 ? 'Deceased.' : `${this.age} years.`}`;
	}
}

let name = "Fluffy";
let age = 2;
const myCat = new Animal({ name, age });

name = "Rover";
age = 0;
const myDog = new Animal({ name, age });

console.log(`My cat's stats: ${myCat.stats()}`);
console.log(`My dog's stats: ${myDog.stats()}`);
