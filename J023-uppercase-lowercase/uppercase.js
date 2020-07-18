const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let newAnimals = [];
animals.forEach( (animal) => {
	const newAnimal = animal.toUpperCase();
	newAnimals.push(newAnimal);
});

console.log(animals);
console.log(newAnimals);
