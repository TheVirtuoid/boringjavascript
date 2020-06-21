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

function checkForMyAnimal(theAnimalToCheck) {
	return animals.some( function (animal) {
		return theAnimalToCheck === animal.type;
	});
}

let isMyAnimalThere = checkForMyAnimal("Coyote");
console.log(`\nMy animal, the Coyote, is${!isMyAnimalThere ? ' NOT' : ''} there.\n`);

isMyAnimalThere = checkForMyAnimal("Salamander");
console.log(`\nMy animal, the Salamander, is${!isMyAnimalThere ? ' NOT' : ''} there.\n`);

