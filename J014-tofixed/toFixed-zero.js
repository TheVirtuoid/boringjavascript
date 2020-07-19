function prettyPrint(num) {
	let fixedNumber = num.toFixed(0);
	console.log(`My original was ${num}, and toFixed(0) turn it into: ${fixedNumber}`);
}

prettyPrint(1.1);
prettyPrint(2.8);
