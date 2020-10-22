const oldArray = [
	{ a: 1, b: 2 },
	{ a: 3, b: 4 },
	{ a: 5, b: 6 },
	{ a: 7, b: 8 },
	{ a: 9, b: 10 }
]
const newArray = oldArray.slice(2, 4);

console.log(oldArray);
console.log(newArray);

newArray[0].a = 700;

console.log('-----------------------------------')
console.log(oldArray);
console.log(newArray);
