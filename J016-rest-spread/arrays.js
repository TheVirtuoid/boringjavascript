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
newAnimals = ["Salamander", "Giraffe"];
newAnimals.splice(1, 0, ...animals);
displayAnimals('Original Array', animals);
displayAnimals('Array Concatenation', newAnimals);
*/

