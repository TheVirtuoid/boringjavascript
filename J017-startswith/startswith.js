const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

animals.forEach( (animal) => {
	if (animal.startsWith("c")) {
		console.log(`My "C" animal is a ${animal}`);
	}
});
