const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let myAnimal = "Coyote";

let isMyAnimalThere = animals.some( function (animal) {
	return animal === myAnimal;
});

console.log(`\nMy animal, the ${myAnimal}, is${!isMyAnimalThere ? ' NOT' : ''} there.\n`);


myAnimal = "Salamander";

isMyAnimalThere = animals.some( function (animal) {
	return animal === myAnimal;
});

console.log(`\nMy animal, the ${myAnimal}, is${!isMyAnimalThere ? ' NOT' : ''} there.\n`);

