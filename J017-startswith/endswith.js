const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

animals.forEach( (animal) => {
	if (animal.endsWith("e")) {
		console.log(`My "e" animal is a ${animal}`);
	}
});
