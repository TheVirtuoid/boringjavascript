function isEven(number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

const isElevenEven = isEven(11);
const isTenEven = isEven(10);

console.log(`Is 11 even? ${isElevenEven}`);
console.log(`Is 10 even? ${isTenEven}`);