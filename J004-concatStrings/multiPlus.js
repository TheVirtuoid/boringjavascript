const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let animalList = "Here is a list of the animals I have:";

animals.forEach( function (animal, animalIndex) {
	animalList = animalList + "\n\t" + animal;
});

console.log(animalList);
