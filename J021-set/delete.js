const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let animalSet = new Set(animals);
const removedAnimal = animalSet.delete("Cat");
console.log(`Did I remove the cat? ${removedAnimal ? "Yes!" : "No."}`);


















/*
let animalSet = new Set(animals);
const removedAnimal = animalSet.delete("Salamander");
console.log(`Did I remove the salamander? ${removedAnimal ? "Yes!" : "No."}`);
*/
