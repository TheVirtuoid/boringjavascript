function sorter(arrayData, sortType) {
	arrayData.sort( function (firstValue, secondValue) {
		if (firstValue < secondValue) {
			return sortType === "asc" ? -1 : 1;
		} else if (firstValue > secondValue) {
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
console.log('Sort ASCENDING order');
console.log(sorter(animals, "asc"));

console.log('Sort DESCENDING order');
console.log(sorter(animals, "desc"));

