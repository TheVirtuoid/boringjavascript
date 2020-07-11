const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let animalSet = new Set(animals);
for(animal of animalSet) {
	console.log(`I have a ${animal} for a pet.`);
}



/*
let animalSet = new Set(animals);
animalSet.forEach( (animal, animalIndex, theSet) => {
	console.log(`I have a ${animal} for a pet, whose set index is ${animalIndex}.`);
});
*/

