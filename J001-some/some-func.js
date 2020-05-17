const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

function checkForMyAnimal(theAnimalToCheck) {
	return animals.some( animal => animal === theAnimalToCheck);
}

let isMyAnimalThere = checkForMyAnimal("Coyote");
console.log(`\nMy animal, the Coyote, is${!isMyAnimalThere ? ' NOT' : ''} there.\n`);

isMyAnimalThere = checkForMyAnimal("Salamander");
console.log(`\nMy animal, the Salamander, is${!isMyAnimalThere ? ' NOT' : ''} there.\n`);















/*
isMyAnimalThere = animals.includes("Cow");
console.log(`\nMy animal, the Cow, is${!isMyAnimalThere ? ' NOT' : ''} there.\n`);
*/

