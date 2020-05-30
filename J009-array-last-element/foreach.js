const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let myIndex = 0;
animals.forEach( (animal, animalIndex) => {
	myIndex = animalIndex;
});

let lastAnimal = animals[myIndex];
console.log(`The last animal in my list is ${lastAnimal}`);
