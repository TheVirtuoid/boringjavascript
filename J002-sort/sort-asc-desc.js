function sorter(arrayData, sortType) {
	arrayData.sort( function (firstElement, secondElement) {
		if (firstElement < secondElement) {
			return sortType === "asc" ? -1 : 1;
		} else if (firstElement > secondElement) {
			return sortType === "asc" ? 1 : -1;
		} else {
			return 0;
		}
	});
	return arrayData;
}

let animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];
console.log(`\nA listing of my animals in ASCENDING order:`);
console.log(sorter(animals, "asc"));

console.log(`\nA listing of my animals in DESCENDING order:`);
console.log(sorter(animals, "desc"));

