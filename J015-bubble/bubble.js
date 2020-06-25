const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard", "Llama",
	"Pony", "Zebra", "Chimpanzee", "Turtle", "Dinosaur", "Penguin", "Eagle", "Mouse", "Moose", "Rabbit"
];

let animalsSorted = [];
for (let index = 0, length = animals.length; index < length; index++) {
	let listedAnimal = "zzzzzzzzzzz";
	let animalIndexToRemove = -1;
	animals.forEach( (animal, animalIndex) => {
		if (animal < listedAnimal) {
			listedAnimal = animal;
			animalIndexToRemove = animalIndex;
		}
	});
	const removedAnimal = animals.splice(animalIndexToRemove, 1);
	animalsSorted.push(removedAnimal[0]);
}
console.log(animalsSorted);
