const myCat = {
	name: "Fluffy",
	breed: "Himalayan",
	arms: 0,
	legs: 4,
	tail: true,
	weight: 3.58
};

const myCatKeys = Object.keys(myCat);
console.log(`The number of properties is ${myCatKeys.length}`);

let count = 0;
for(let key in myCat) {
	count++;
}
console.log(`\n\nThe number of properties from FOR-IN is ${count}`);
