const displayAnimals = require('./displayAnimals');

const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];
let newAnimals;

newAnimals = [...animals];
newAnimals.push('Eagle');
displayAnimals('Original Array', animals);
displayAnimals('Copy array', newAnimals);
























/*
newAnimals = ["Salamander", ...animals, "Giraffe"];
displayAnimals('Original Array', animals);
displayAnimals('Array Concatenation', newAnimals);
*/
