const displayAnimals = require('./displayAnimals');

const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let newAnimals = [...animals];
newAnimals.push('Eagle');
displayAnimals('Copy array', newAnimals);
displayAnimals('Original Array', animals);

newAnimals = ["Salamander", ...animals, "Giraffe"];
displayAnimals('Array Concatenation', newAnimals);
