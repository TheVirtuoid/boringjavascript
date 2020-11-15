const votes = [34, 19, 12, 99, 45, 33, 19];
console.log(votes);
const sum = (accumulator, currentValue) => accumulator + currentValue;


const finalNumber = votes.reduce(sum);

let numberCheck = 0;
votes.forEach( number => numberCheck += number);

console.log(`\nThe finalNumber is ${finalNumber}, and it should be ${numberCheck}.`);
















/*
const sum = (accumulator, currentValue, index) => {
	console.log(`---index: ${index}, accumulator=${accumulator}, currentValue=${currentValue}`);
	return accumulator + currentValue;
};
*/
