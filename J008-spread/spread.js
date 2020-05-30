function sum (num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}

/*
const numbers = [1, 2, 3, 4, 5];

let mySum = sum(...numbers);
console.log(`My number is ${mySum}`);
*/

const numbers = [1, 2];

let mySum = sum(...numbers, 5, ...numbers);
console.log(`My number is ${mySum}`);




