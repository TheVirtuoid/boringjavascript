let myVar = 1;
console.log(`START: global myVar = ${myVar}`);
firstFunction();
secondFunction();
console.log(`END: global myVar = ${myVar}`);

function firstFunction() {
	let myVar = 2;
	console.log(`---firstFunction start myVar = ${myVar}`);
	innerFunction();
	console.log(`---firstFunction end myVar = ${myVar}`);
}
function secondFunction() {
	if (myVar !== 1) {
		console.log(`***ERROR!!! myVar is NOT equal to 1!!`);
	} else {
		console.log(`---All systems go.`);
	}
}
function innerFunction() {
	let myVar = 3;
	console.log(`------innerFunction start myVar = ${myVar}`);
	if (myVar === 3) {
		myVar = 4;
		console.log(`------innerFunction changed myVar to ${myVar}`);
	}
	console.log(`------innerFunction end myVar = ${myVar}`);
}

