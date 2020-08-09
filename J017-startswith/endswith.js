const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

animals.forEach( (animal) => {
	if (animal.endsWith("d")) {
		console.log(`My "d" animal is a ${animal}`);
	}
});
