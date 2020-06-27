const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

animals.forEach( (animal) => {
	if (animal.startsWith("t", 4)) {
		console.log(`My "t" animal is a ${animal}`);
	}
});
