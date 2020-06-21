const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

animals.sort( function (firstElement, secondElement) {
	if (firstElement < secondElement) {
		return -1;
	} else if (firstElement > secondElement) {
		return 1;
	} else {
		return 0;
	}
});
console.log(`\nA listing of my animals:`);
animals.forEach( animal => console.log(animal));
