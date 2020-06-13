const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

animals.sort( function (firstValue, secondValue) {
	if (firstValue < secondValue) {
		return -1;
	} else if (firstValue > secondValue) {
		return 1;
	} else {
		return 0;
	}
});
animals.forEach( animal => console.log(animal));
