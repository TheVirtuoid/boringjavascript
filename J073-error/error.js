const number = 123.45;
const formattedNumber = number.toFixed(-1);
console.log(formattedNumber);





















/*
let formattedNumber;
try {
	formattedNumber = number.toFixed(-1);
} catch(err) {
	console.log('Hey! Wrong number!');
}


let formattedNumber;
try {
	formattedNumber = number.toFixed(-1);
} catch(err) {
	console.log('Hey! Wrong number! Here are the details:');
	console.log(`Message:\t${err.message}`);
	console.log(`Name:\t\t${err.name}`);
	console.log(`Stack:\n${err.stack}`);
}

*/
