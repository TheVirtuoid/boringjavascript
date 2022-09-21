import ZooCentral from "./ZooCentral.js";

const myAnimals = [];

const zooCentral = new ZooCentral();

let animalCount = 0;

while (animalCount < 10) {
	const transferAnimal = zooCentral.getTransferAnimal();
	const { type = '', name = 'No Animal', zooName = '' } = transferAnimal.value;
	myAnimals.push({ type, name, zooName });
	animalCount++;
}

console.log(`\n${'Day'.padEnd(5)}${'Name'.padEnd(20)}${'Type'.padEnd(20)}Zoo`);
console.log(`${'-'.repeat(4)} ${'-'.repeat(19)} ${'-'.repeat(19)} ${'-'.repeat(19)}`);
myAnimals.forEach((animal, day) => {
	const { type, name, zooName} = animal;
	console.log(`${day.toString().padEnd(5)}${name.padEnd(20)}${type.padEnd(20)}${zooName}`);
});