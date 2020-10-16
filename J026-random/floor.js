const number = Math.ceil(Math.random() * 10) + 4;
console.log(`\nA number between 1 and 10: ${number}\n`);

let numbers = [];
for (let x = 0; x < 20; x++) {
	numbers.push(Math.ceil(Math.random() * 10) + 4);
}
console.log(numbers);
