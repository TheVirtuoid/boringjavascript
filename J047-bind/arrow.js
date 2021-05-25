const animals = [
	{ type: "Cat", name: "Fluffy" },
	{ type: "Dog", name: "Fido" },
	{ type: "Horse", name: "Mr. Ed" },
	{ type: "Cow", name: "Betsy" },
	{ type: "Coyote", name: "Wile E." },
	{ type: "Road Runner", name: "Beep Beep" },
	{ type: "Dolphin", name: "Flipper" },
	{ type: "Whale", name: "Moby Dick" },
	{ type: "Lizard", name: "Larry" }
];

const getAnimalName =  (animalType) => {
	console.log('-----------here is my this');
	console.log(this);
	console.log('-----------there was my this');
	const animal =  this.find( animal => animal.type === animalType);
	return animal.name;
}

const myAnimal = "Cat";
const myAnimalName = getAnimalName.bind(animals)(myAnimal);

console.log(`\nThe name of my ${myAnimal} is ${myAnimalName}.`);
