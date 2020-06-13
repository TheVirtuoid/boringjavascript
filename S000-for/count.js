let animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let count = 0;
let newAnimals = [];
while (animals.length > 0) {
	const animal = animals.pop();
	newAnimals.push(animal);
	count++;
}
animals = newAnimals;
let secondAnimals = [];
while (animals.length > 0) {
	const animal = animals.pop();
	secondAnimals.push(animal);
}
animals = secondAnimals;

console.log(`There are ${count} elements in the array.`);
console.log(animals);
