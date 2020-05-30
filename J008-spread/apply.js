function sum (num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}

/*
let mySum = sum(1, 2,3, 4, 5);
console.log(`My number is ${mySum}`);
*/

const numbers = [1, 2, 3, 4, 5];
let mySum = sum.apply(null, numbers);
console.log(`My number is ${mySum}`);


