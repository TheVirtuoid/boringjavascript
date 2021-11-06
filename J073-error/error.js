const number = 123.45;
/*
const formattedNumber = number.toFixed(-1);
console.log(formattedNumber);
*/

/*
let formattedNumber;
try {
	formattedNumber = number.toFixed(-1);
} catch(err) {
	console.log('Hey! Wrong number!');
}
*/

let formattedNumber;
try {
	formattedNumber = number.toFixed(-1);
} catch(err) {
	console.log(err);
	console.log('Hey! Wrong number! Here are the details:');
	console.log(`Message:\t${err.message}`);
	console.log(`Name:\t\t${err.name}`);
	console.log(`Filename:\t${err.fileName}`);
	console.log(`Line number:\t${err.lineNumber}`);
	console.log(`Column number:\t${err.columnNumber}`);
	console.log(`Stack:\n${err.stack}`);
}
